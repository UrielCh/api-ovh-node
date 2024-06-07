import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/dedicatedCloud.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the PCC service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List VMware on OVHcloud infrastructures",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:get",
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
      "path": "/dedicatedCloud"
    },
    {
      "description": "VMware on OVHcloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get VMware on OVHcloud",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.dedicatedCloudWithIAM"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-03-10T00:00:00+01:00",
            "deprecatedDate": "2019-01-10T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/changeProperties",
            "value": "DEPRECATED"
          },
          "description": "Update VMware on OVHcloud",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:put",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.dedicatedCloud",
              "description": "New object properties",
              "fullType": "dedicatedCloud.dedicatedCloud",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}"
    },
    {
      "description": "List the dedicatedCloud.AllowedNetwork objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List networks allowed on infrastructure firewall",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:allowedNetwork/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Create network allowed on infrastructure firewall",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:allowedNetwork/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description for your ACL",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipv4Block",
              "description": "Network name, e.g. 123.100.200.0/32",
              "fullType": "ipv4Block",
              "name": "network",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork"
    },
    {
      "description": "Network allowed on infrastructure firewall",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove network allowed on infrastructure firewall",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:allowedNetwork/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "networkAccessId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get network allowed on infrastructure firewall",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:allowedNetwork/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "networkAccessId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.AllowedNetwork"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update network allowed on infrastructure firewall",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:allowedNetwork/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.AllowedNetwork",
              "description": "New object properties",
              "fullType": "dedicatedCloud.AllowedNetwork",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "networkAccessId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}"
    },
    {
      "description": "List the dedicatedCloud.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List operations associated to a network allowed on infrastructure firewall",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:allowedNetwork/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "networkAccessId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (like)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task"
    },
    {
      "description": "Operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:allowedNetwork/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "networkAccessId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}"
    },
    {
      "description": "changeMaintenanceExecutionDate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the execution date of a maintenance operation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:allowedNetwork/task/changeMaintenanceExecutionDate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "The new execution date",
              "fullType": "datetime",
              "name": "executionDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "networkAccessId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate"
    },
    {
      "description": "resetTaskState operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch operation currently in error state",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:allowedNetwork/task/resetTaskState",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Reason of task restart",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "networkAccessId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState"
    },
    {
      "description": "List the dedicatedCloud.BackupRepository objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List backup repositories",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:backupRepository/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/backupRepository"
    },
    {
      "description": "Backup repository",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get backup repository",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:backupRepository/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Repository Id",
              "fullType": "long",
              "name": "repositoryId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.BackupRepository"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/backupRepository/{repositoryId}"
    },
    {
      "description": "canDeployNsxtEdgesOnGlobalDatastores operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if global datastore have enough free space to host NSX-T edges",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:canDeployNsxtEdgesOnGlobalDatastores",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Number of edges wanted",
              "fullType": "long",
              "name": "count",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.nsxt.NsxtEdgeSizeEnum",
              "description": "Size of NSX-T edge (default to MEDIUM)",
              "fullType": "dedicatedCloud.nsxt.NsxtEdgeSizeEnum",
              "name": "size",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/canDeployNsxtEdgesOnGlobalDatastores"
    },
    {
      "description": "Available features",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get available features",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:capabilities/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Capabilities"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/capabilities"
    },
    {
      "description": "changeProperties operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update VMware on OVHcloud",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:changeProperties",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description of your VMware on OVHcloud",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Enable SSL v3 support. Warning: this option is not recommended as it was recognized as a security breach. If this is enabled, we advise you to enable the filtered User access policy",
              "fullType": "boolean",
              "name": "sslV3",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.UserAccessPolicyEnum",
              "description": "Access policy of your VMware on OVHcloud: opened to each IP or filtered",
              "fullType": "dedicatedCloud.UserAccessPolicyEnum",
              "name": "userAccessPolicy",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The maximum amount of connected users allowed on the VMware on OVHcloud management interface",
              "fullType": "long",
              "name": "userLimitConcurrentSession",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.UserLogoutPolicyEnum",
              "description": "Logout policy of your VMware on OVHcloud",
              "fullType": "dedicatedCloud.UserLogoutPolicyEnum",
              "name": "userLogoutPolicy",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The timeout (in seconds) for the user sessions on the VMware on OVHcloud management interface. 0 value disable the timeout",
              "fullType": "long",
              "name": "userSessionTimeout",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/changeProperties"
    },
    {
      "description": "compliance operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get compliant commercial ranges",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:commercialRange/compliance/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.compliantRanges[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/commercialRange/compliance"
    },
    {
      "description": "orderable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get orderable commercial ranges",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:commercialRange/orderable/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/commercialRange/orderable"
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
              "name": "pccVMware:apiovh:confirmTermination",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/confirmTermination"
    },
    {
      "description": "List the dedicatedCloud.Datacenter objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List virtual datacenters",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Create virtual datacenter",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The commercial range of this new datacenter. You can see what commercial ranges are orderable on this API section : /dedicatedCloud/commercialRange/",
              "fullType": "string",
              "name": "commercialRangeName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the Vrack link to the new datacenter.",
              "fullType": "string",
              "name": "vrackName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter"
    },
    {
      "description": "Virtual datacenter",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove virtual datacenter",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get virtual datacenter",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Datacenter"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update virtual datacenter",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.Datacenter",
              "description": "New object properties",
              "fullType": "dedicatedCloud.Datacenter",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}"
    },
    {
      "description": "Backup option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get backup option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backup/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Backup"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup"
    },
    {
      "description": "batchRestore operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restore from last point for each backup job",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backup/batchRestore",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The backup job name pcc-XXX-XXX-XXX-XXX_vm-XXX if you want to restore one single virtual machine. It can be retrieved in the report sent by generateReport",
              "fullType": "string",
              "name": "backupJobName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The backup files location name bkp-XXXXX, it can be retrieved in the report sent by generateReport",
              "fullType": "string",
              "name": "backupRepositoryName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/batchRestore"
    },
    {
      "description": "canOptimizeProxies operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate recommendations for backup proxies optimization",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backup/canOptimizeProxies/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.backup.OptimizeProxies"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/canOptimizeProxies"
    },
    {
      "description": "changeProperties operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update backup option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backup/changeProperties",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Duration on email report",
              "fullType": "boolean",
              "name": "backupDurationInReport",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.backup.OfferTypeEnum",
              "description": "Backup offer type",
              "fullType": "dedicatedCloud.backup.OfferTypeEnum",
              "name": "backupOffer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Backup size on day on email report",
              "fullType": "boolean",
              "name": "backupSizeInReport",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Disk size on mail report",
              "fullType": "boolean",
              "name": "diskSizeInReport",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Full day on mail report",
              "fullType": "boolean",
              "name": "fullDayInReport",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Unique additional email address for backup daily report",
              "fullType": "string",
              "name": "mailAddress",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "RestorePoint number on mail report",
              "fullType": "boolean",
              "name": "restorePointInReport",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "time",
              "description": "Schedule hour for start backup. UTC Timezone",
              "fullType": "time",
              "name": "scheduleHour",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable backup option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backup/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Enable backup option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backup/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.backup.OfferTypeEnum",
              "description": "Backup offer type",
              "fullType": "dedicatedCloud.backup.OfferTypeEnum",
              "name": "backupOffer",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable"
    },
    {
      "description": "generateReport operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate email report with all backup information",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backup/generateReport",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/generateReport"
    },
    {
      "description": "offerCapabilities operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List backup offer capabilities",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backup/offerCapabilities/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.backup.BackupCapabilities[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/offerCapabilities"
    },
    {
      "description": "optimizeProxies operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Optimize number of backup proxies",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backup/optimizeProxies",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/optimizeProxies"
    },
    {
      "description": "List the dedicatedCloud.BackupRepository objects",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-07-01T00:00:00+01:00",
            "deprecatedDate": "2022-10-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/backupRepository",
            "value": "DEPRECATED"
          },
          "description": "List backup repositories in virtual datacenter",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backupRepository/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backupRepository"
    },
    {
      "description": "Backup repository",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-07-01T00:00:00+01:00",
            "deprecatedDate": "2022-10-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/backupRepository/{repositoryId}",
            "value": "DEPRECATED"
          },
          "description": "Get backup repository",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/backupRepository/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Repository Id",
              "fullType": "long",
              "name": "repositoryId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.BackupRepository"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backupRepository/{repositoryId}"
    },
    {
      "description": "checkBackupJobs operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if backup jobs are correctly set in virtual datacenter (when vms have been moved to another virtual datacenter)",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/checkBackupJobs",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/checkBackupJobs"
    },
    {
      "description": "List the dedicatedCloud.Cluster objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List clusters within virtual datacenter",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/cluster/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster"
    },
    {
      "description": "Cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get cluster",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/cluster/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the cluster",
              "fullType": "long",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Cluster"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}"
    },
    {
      "description": "nsxt operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unconfigure NSX-T on cluster",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/cluster/nsxt/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the cluster",
              "fullType": "long",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Configure NSX-T on cluster",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/cluster/nsxt/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the cluster",
              "fullType": "long",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update NSX-T configuration on cluster",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/cluster/nsxt/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the cluster",
              "fullType": "long",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}/nsxt"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable Zerto disaster recovery between two VMware on OVHcloud infrastructures",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Your secondary datacenter id",
              "fullType": "long",
              "name": "secondaryDatacenterId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your secondary dedicatedCloud",
              "fullType": "string",
              "name": "secondaryServiceName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Enable Zerto disaster recovery between two VMware on OVHcloud infrastructures",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Your primary OVH VMware on OVHcloud public IP for the secured replication data tunnel endpoint",
              "fullType": "ip",
              "name": "primaryEndpointIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Your secondary datacenter id",
              "fullType": "long",
              "name": "secondaryDatacenterId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Your secondary OVH VMware on OVHcloud public IP for the secured replication data tunnel endpoint",
              "fullType": "ip",
              "name": "secondaryEndpointIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your secondary OVH VMware on OVHcloud",
              "fullType": "string",
              "name": "secondaryServiceName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable"
    },
    {
      "description": "endMigration operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unlink migration source virtual datacenter from Zerto disaster recovery",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/endMigration",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/endMigration"
    },
    {
      "description": "endpointPublicIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the IP address used by Zerto disaster recovery endpoint for public network access",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/endpointPublicIp",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Your new public IP for the secured replication data tunnel endpoint",
              "fullType": "ip",
              "name": "newEndpointPublicIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/endpointPublicIp"
    },
    {
      "description": "remoteSites operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove Zerto disaster recovery remote site",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "description": "Remove Zerto disaster recovery remote site",
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/remoteSites/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The id number of the network to remove (as returned by a GET call)",
              "fullType": "long",
              "name": "id",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List Zerto disaster recovery remote sites",
          "httpMethod": "GET",
          "iamActions": [
            {
              "description": "List Zerto disaster recovery allowed remote sites",
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/remoteSites/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.disasterRecovery.ZertoRemoteVra[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create Zerto disaster recovery remote site on VPN endpoint",
          "httpMethod": "POST",
          "iamActions": [
            {
              "description": "Create Zerto disaster recovery remote site on VPN endpoint",
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/remoteSites/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name for this connection",
              "fullType": "string",
              "name": "label",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "Pre-Shared Key to secure data transfer between both sites",
              "fullType": "password",
              "name": "preSharedKey",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Your onsite endpoint internal IP for the secured replication data tunnel",
              "fullType": "ipv4",
              "name": "remoteEndpointInternalIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Your onsite endpoint public IP for the secured replication data tunnel",
              "fullType": "ipv4",
              "name": "remoteEndpointPublicIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4Block",
              "description": "Internal zerto subnet of your onsite infrastructure (ip/cidr)",
              "fullType": "ipv4Block",
              "name": "remoteVraNetwork",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Internal ZVM ip of your onsite infrastructure",
              "fullType": "ipv4",
              "name": "remoteZvmInternalIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/remoteSites"
    },
    {
      "description": "startMigration operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Link migration target virtual datacenter to Zerto disaster recovery",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/startMigration",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/startMigration"
    },
    {
      "description": "status operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Zerto disaster recovery option status",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/status/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.disasterRecovery.Profile"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/status"
    },
    {
      "description": "usageReport operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List Zerto disaster recovery protected virtual machines",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/usageReport/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Billing month",
              "fullType": "long",
              "name": "month",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Billing year",
              "fullType": "long",
              "name": "year",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.disasterRecovery.ZertoProtectedVm[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/usageReport"
    },
    {
      "description": "configureVpn operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Configure VPN for Zerto disaster recovery between VMware on OVHcloud infrastructure and onsite infrastructure",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/configureVpn",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "Pre-Shared Key to secure data transfer between both sites",
              "fullType": "password",
              "name": "preSharedKey",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Your onsite endpoint internal IP for the secured replication data tunnel",
              "fullType": "ipv4",
              "name": "remoteEndpointInternalIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Your onsite endpoint public IP for the secured replication data tunnel",
              "fullType": "ipv4",
              "name": "remoteEndpointPublicIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4Block",
              "description": "Internal zerto subnet of your onsite infrastructure (ip/cidr)",
              "fullType": "ipv4Block",
              "name": "remoteVraNetwork",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipv4",
              "description": "Internal ZVM ip of your onsite infrastructure",
              "fullType": "ipv4",
              "name": "remoteZvmInternalIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn"
    },
    {
      "description": "defaultLocalVraNetwork operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Zerto disaster recovery default suggested local VRA subnet",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/defaultLocalVraNetwork/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipv4Block"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable Zerto disaster recovery between VMware on OVHcloud infrastructure and onsite infrastructure",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Enable Zerto disaster recovery between VMware on OVHcloud infrastructure and onsite infrastructure",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Internal zerto subnet for your OVH VMware on OVHcloud (ip/cidr)",
              "fullType": "ipBlock",
              "name": "localVraNetwork",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Your OVH VMware on OVHcloud public IP for the secured replication data tunnel endpoint",
              "fullType": "ip",
              "name": "ovhEndpointIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "Internal zerto subnet of your onsite infrastructure (ip/cidr)",
              "fullType": "ipBlock",
              "name": "remoteVraNetwork",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable"
    },
    {
      "description": "endpointPublicIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the IP address used by Zerto disaster recovery endpoint for public network access",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/endpointPublicIp",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Your new public IP on your VMware on OVHcloud for the secured replication data tunnel endpoint",
              "fullType": "ip",
              "name": "newEndpointPublicIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/endpointPublicIp"
    },
    {
      "description": "remoteSites operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove Zerto disaster recovery remote site",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "description": "Remove Zerto disaster recovery remote site",
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/remoteSites/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The id number of the network to remove (as returned by a GET call)",
              "fullType": "long",
              "name": "id",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List Zerto disaster recovery remote sites",
          "httpMethod": "GET",
          "iamActions": [
            {
              "description": "List Zerto disaster recovery allowed remote sites",
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/remoteSites/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.disasterRecovery.ZertoRemoteVra[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create Zerto disaster recovery remote site on VPN endpoint",
          "httpMethod": "POST",
          "iamActions": [
            {
              "description": "Create Zerto disaster recovery remote site on VPN endpoint",
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/remoteSites/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name for this connection",
              "fullType": "string",
              "name": "label",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "Pre-Shared Key to secure data transfer between both sites",
              "fullType": "password",
              "name": "preSharedKey",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Your onsite endpoint internal IP for the secured replication data tunnel",
              "fullType": "ipv4",
              "name": "remoteEndpointInternalIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Your onsite endpoint public IP for the secured replication data tunnel",
              "fullType": "ipv4",
              "name": "remoteEndpointPublicIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4Block",
              "description": "Internal zerto subnet of your onsite infrastructure (ip/cidr)",
              "fullType": "ipv4Block",
              "name": "remoteVraNetwork",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Internal ZVM ip of your onsite infrastructure",
              "fullType": "ipv4",
              "name": "remoteZvmInternalIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/remoteSites"
    },
    {
      "description": "requestPairingToken operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request Zerto disaster recovery pairing token for onsite infrastructure",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/requestPairingToken",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/requestPairingToken"
    },
    {
      "description": "List the dedicatedCloud.Filer objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List datastores in virtual datacenter",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer"
    },
    {
      "description": "Datastore",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get datastore",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Filer"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}"
    },
    {
      "description": "checkGlobalCompatible operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check ability to convert datastore to global datastore",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/checkGlobalCompatible/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/checkGlobalCompatible"
    },
    {
      "description": "convertToGlobal operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Convert datastore to global datastore",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/convertToGlobal",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/convertToGlobal"
    },
    {
      "description": "hourlyConsumption operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/me/consumption/usage/current",
            "value": "DEPRECATED"
          },
          "description": "Get datastore hourly consumption",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/hourlyConsumption/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.filer.HourlyConsumption"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption"
    },
    {
      "description": "location operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get datastore location",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/location/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.filer.NodeTypeEnum",
              "description": "Filer cluster node used to get location (default value: master)",
              "fullType": "dedicatedCloud.filer.NodeTypeEnum",
              "name": "node",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "dedicatedCloud.filer.Location"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/location"
    },
    {
      "description": "remove operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove datastore",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/remove",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove"
    },
    {
      "description": "List the dedicatedCloud.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List operations associated to datastore",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (like)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task"
    },
    {
      "description": "Operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}"
    },
    {
      "description": "changeMaintenanceExecutionDate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the execution date of a maintenance operation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/task/changeMaintenanceExecutionDate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "The new execution date",
              "fullType": "datetime",
              "name": "executionDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate"
    },
    {
      "description": "resetTaskState operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch operation currently in error state",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/filer/task/resetTaskState",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Reason of task restart",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState"
    },
    {
      "description": "List the dedicatedCloud.Host objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List hosts in virtual datacenter",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host"
    },
    {
      "description": "Host",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get host",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Host"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}"
    },
    {
      "description": "addHostSpare operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request host replacement",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/addHostSpare",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Reason of spare add",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare"
    },
    {
      "description": "hourlyConsumption operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/me/consumption/usage/current",
            "value": "DEPRECATED"
          },
          "description": "Get host hourly consumption",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/hourlyConsumption/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.host.HourlyConsumption"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption"
    },
    {
      "description": "location operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get host location",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/location/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.host.Location"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/location"
    },
    {
      "description": "remove operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove host",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/remove",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove"
    },
    {
      "description": "Host resilience test status",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get host resilience test status",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/resilience/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.HostResilience"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience"
    },
    {
      "description": "canBeEnabled operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if resilience test can be performed",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/resilience/canBeEnabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/canBeEnabled"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Stop resilience test",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/resilience/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start resilience test (will cut host network access)",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/resilience/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Duration test in minutes. Host will be reconnected after this period (min:10min, max:24h, default:1h)",
              "fullType": "long",
              "name": "duration",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/enable"
    },
    {
      "description": "List the dedicatedCloud.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List operations associated to host",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (like)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task"
    },
    {
      "description": "Operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}"
    },
    {
      "description": "changeMaintenanceExecutionDate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the execution date of a maintenance operation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/task/changeMaintenanceExecutionDate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "The new execution date",
              "fullType": "datetime",
              "name": "executionDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate"
    },
    {
      "description": "resetTaskState operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch operation currently in error state",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/host/task/resetTaskState",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Reason of task restart",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the host",
              "fullType": "long",
              "name": "hostId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState"
    },
    {
      "description": "List the dedicatedCloud.NsxtEdge objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List NSX Edges within virtual datacenter",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/nsxtEdge/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
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
            "deletionDate": "2024-06-27T00:00:00+01:00",
            "deprecatedDate": "2024-03-27T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Add a NSX-T Edge in the virtual datacenter",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/nsxtEdge/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge"
    },
    {
      "description": "NSX Edge",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2024-06-27T00:00:00+01:00",
            "deprecatedDate": "2024-03-27T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Remove NSX-T Edge from the virtual datacenter",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/nsxtEdge/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the NSX Edge",
              "fullType": "long",
              "name": "nsxtEdgeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get NSX-T Edge details",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/nsxtEdge/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the NSX Edge",
              "fullType": "long",
              "name": "nsxtEdgeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.NsxtEdge"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}"
    },
    {
      "description": "relocateEdge operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relocate NSX Edge disks",
          "httpMethod": "POST",
          "iamActions": [
            {
              "description": "Relocate NSX-T Edge to another datastore",
              "name": "pccVMware:apiovh:datacenter/nsxtEdge/relocateEdge",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Datastore where you want to relocate NSX Edge disks",
              "fullType": "string",
              "name": "datastore",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the NSX Edge",
              "fullType": "long",
              "name": "nsxtEdgeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/relocateEdge"
    },
    {
      "description": "NSX Edge resilience test status",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get NSX Edge resilience test status",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/nsxtEdge/resilience/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the NSX Edge",
              "fullType": "long",
              "name": "nsxtEdgeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.NsxtEdgeResilience"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/resilience"
    },
    {
      "description": "canBeEnabled operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if resilience test can be performed",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/nsxtEdge/resilience/canBeEnabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the NSX Edge",
              "fullType": "long",
              "name": "nsxtEdgeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/resilience/canBeEnabled"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Stop resilience test",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/nsxtEdge/resilience/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the NSX Edge",
              "fullType": "long",
              "name": "nsxtEdgeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/resilience/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start resilience test (will put NSX Edge in maintenance mode)",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/nsxtEdge/resilience/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Duration test in minutes. NSX Edge will be reconnected after this period (min:10min, max:24h, default:1h)",
              "fullType": "long",
              "name": "duration",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the NSX Edge",
              "fullType": "long",
              "name": "nsxtEdgeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/resilience/enable"
    },
    {
      "description": "nsxtEdgesResizingCapabilities operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Resizing Capabilities of NSX-T edges cluster on specified datacenter",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/nsxtEdgesResizingCapabilities/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.nsxt.NsxtEdgeSizingCapability"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdgesResizingCapabilities"
    },
    {
      "description": "nsxtEdgesScalingCapabilities operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Scaling Capabilities of NSX-T edges cluster on specified datacenter",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/nsxtEdgesScalingCapabilities/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.nsxt.NsxtEdgeScalingCapability"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdgesScalingCapabilities"
    },
    {
      "description": "orderableFilerProfiles operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available datastore profiles",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/orderableFilerProfiles/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.filer.Profile[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles"
    },
    {
      "description": "orderableHostProfiles operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available host profiles",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/orderableHostProfiles/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.host.Profile[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles"
    },
    {
      "description": "orderNewFilerHourly operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Order hourly datastore",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/orderNewFilerHourly",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filer profile you want to order",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly"
    },
    {
      "description": "orderNewHostHourly operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Order hourly host",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/orderNewHostHourly",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Host profile you want to order",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Id of the cluster you want the host to be added (\"domain-cXX\")",
              "fullType": "string",
              "name": "vmwareClusterId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly"
    },
    {
      "description": "Private management gateway",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get private management gateway",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/privateGateway/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.PrivateGateway"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove the private management gateway",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/privateGateway/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Deploy private management gateway",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/privateGateway/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Ip to set on your private gateway in your network",
              "fullType": "ip",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Your netmask to set on the private gateway",
              "fullType": "ip",
              "name": "netmask",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Portgroup in your VMware on OVHcloud used to deploy the private gateway",
              "fullType": "string",
              "name": "portgroup",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable"
    },
    {
      "description": "reconfigure operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reconfigure private management gateway",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/privateGateway/reconfigure",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Ip to set on your private gateway in your network",
              "fullType": "ip",
              "name": "ip",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ip",
              "description": "Your netmask to set on the private gateway",
              "fullType": "ip",
              "name": "netmask",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Datacenter id where your private gateway will be moved",
              "fullType": "long",
              "name": "newDatacenterId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Portgroup in your VMware on OVHcloud used to deploy the private gateway",
              "fullType": "string",
              "name": "portgroup",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/reconfigure"
    },
    {
      "description": "resizeNsxtEdgeCluster operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2024-06-27T00:00:00+01:00",
            "deprecatedDate": "2024-03-27T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Resize NSX-T edges on specified datacenter",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/resizeNsxtEdgeCluster",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.nsxt.NsxtEdgeSizeEnum",
              "description": "Size of NSX-T edge",
              "fullType": "dedicatedCloud.nsxt.NsxtEdgeSizeEnum",
              "name": "size",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/resizeNsxtEdgeCluster"
    },
    {
      "description": "List the dedicatedCloud.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List operations associated to virtual datacenter",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (like)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task"
    },
    {
      "description": "Operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}"
    },
    {
      "description": "changeMaintenanceExecutionDate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the execution date of a maintenance operation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/task/changeMaintenanceExecutionDate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "The new execution date",
              "fullType": "datetime",
              "name": "executionDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate"
    },
    {
      "description": "resetTaskState operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch operation currently in error state",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/task/resetTaskState",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Reason of task restart",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState"
    },
    {
      "description": "List the dedicatedCloud.Vm objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List virtual machines within virtual datacenter",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm"
    },
    {
      "description": "Virtual machine",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get virtual machines",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Vm"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}"
    },
    {
      "description": "Backup job",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}",
            "value": "DEPRECATED"
          },
          "description": "Get virtual machine backup job",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/backupJob/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.BackupJob"
        },
        {
          "apiStatus": {
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}",
            "value": "DEPRECATED"
          },
          "description": "Update backup job",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/backupJob/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "description": "List of days your Virtual Machine will be backuped",
              "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "name": "backupDays",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}",
            "value": "DEPRECATED"
          },
          "description": "Disable backup job",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/backupJob/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}",
            "value": "DEPRECATED"
          },
          "description": "Enable backup job",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/backupJob/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "description": "Backup offer type",
              "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "name": "backupDays",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable"
    },
    {
      "description": "List the dedicatedCloud.RestorePoint objects",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}",
            "value": "DEPRECATED"
          },
          "description": "List restore points",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/backupJob/restorePoints/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints"
    },
    {
      "description": "Restore point",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}",
            "value": "DEPRECATED"
          },
          "description": "Get restore point",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/backupJob/restorePoints/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the restore point.",
              "fullType": "long",
              "name": "restorePointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.RestorePoint"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}"
    },
    {
      "description": "restore operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}",
            "value": "DEPRECATED"
          },
          "description": "Restore from point",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/backupJob/restorePoints/restore",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the filer where we should restore this Backup.",
              "fullType": "long",
              "name": "filerId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the restore point.",
              "fullType": "long",
              "name": "restorePointId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore"
    },
    {
      "description": "disableBackup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Deactivate backup on virtual machine",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/disableBackup",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup"
    },
    {
      "description": "disableCarp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable CARP on virtual machine",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/disableCarp",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Mac address of the port to enable Carp",
              "fullType": "string",
              "name": "macAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableCarp"
    },
    {
      "description": "editBackup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update backup configuration",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/editBackup",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "description": "List of days your Virtual Machine will be backuped",
              "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "name": "backupDays",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup"
    },
    {
      "description": "enableBackup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Activate backup on virtual machine",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/enableBackup",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "description": "List of days your Virtual Machine will be backuped",
              "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "name": "backupDays",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup"
    },
    {
      "description": "enableCarp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable CARP on virtual machine",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/enableCarp",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Mac address of the port to enable Carp",
              "fullType": "string",
              "name": "macAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableCarp"
    },
    {
      "description": "removeLicense operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove a managed license from virtual machine",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/removeLicense",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/removeLicense"
    },
    {
      "description": "restoreBackup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restore backup",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/restoreBackup",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the filer where we should restore this Backup",
              "fullType": "long",
              "name": "filerId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.filer.FilerTypeEnum",
              "description": "Type of filer where vm will be restored(Default value : nas)",
              "fullType": "dedicatedCloud.filer.FilerTypeEnum",
              "name": "filerType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of the restorePoint you want to restore",
              "fullType": "long",
              "name": "restorePointId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup"
    },
    {
      "description": "setLicense operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Set a managed license on virtual machine",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vm/setLicense",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Bypass compatibility check between managed license and current VMware guest configured OS family",
              "fullType": "boolean",
              "name": "bypassGuestOsFamilyCheck",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.spla.KmsLicenseEnum",
              "description": "License to use",
              "fullType": "dedicatedCloud.spla.KmsLicenseEnum",
              "name": "kmsLicense",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the virtual machine.",
              "fullType": "long",
              "name": "vmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/setLicense"
    },
    {
      "description": "vmLicensed operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get virtual machines with managed license",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:datacenter/vmLicensed/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Datacenter",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.spla.KmsLicenseIncludingLegacyEnum",
              "description": "Only display virtual machines with this license",
              "fullType": "dedicatedCloud.spla.KmsLicenseIncludingLegacyEnum",
              "name": "kmsLicense",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "dedicatedCloud.virtualMachineLicensingSummary[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vmLicensed"
    },
    {
      "description": "Active Directory federation option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Active Directory federation option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:federation/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Federation"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/federation"
    },
    {
      "description": "List the dedicatedCloud.FederationAccessNetwork objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List federated Active Directories",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:federation/activeDirectory/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Create federated Active Directory",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:federation/activeDirectory/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Active Directory base DN for groups, e.g. dc=example,dc=com",
              "fullType": "string",
              "name": "baseDnForGroups",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Active Directory base DN for users, e.g. dc=example,dc=com",
              "fullType": "string",
              "name": "baseDnForUsers",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Description of your option access network",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Active Directory NetBIOS name, e.g. example",
              "fullType": "string",
              "name": "domainAlias",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Active Directory domain name, e.g. example.com",
              "fullType": "string",
              "name": "domainName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "IP address of the remote service, e.g. 123.100.200.0",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Active Directory LDAP hostname",
              "fullType": "string",
              "name": "ldapHostname",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Active Directory LDAP/LDAPS TCP port (636 for LDAPS or 389 for LDAP)",
              "fullType": "long",
              "name": "ldapTcpPort",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Use unsecure LDAP instead of LDAPS",
              "fullType": "boolean",
              "name": "noSsl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "password",
              "description": "Active Directory password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "SSL thumbprint of the remote service, e.g. A7:61:68:...:61:91:2F",
              "fullType": "string",
              "name": "sslThumbprint",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Active Directory user name (pre-Windows 2000 name), e.g. jdoe@example.com",
              "fullType": "string",
              "name": "username",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/federation/activeDirectory"
    },
    {
      "description": "Federated Active Directory",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove federated Active Directory",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:federation/activeDirectory/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Active Directory",
              "fullType": "long",
              "name": "activeDirectoryId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get federated Active Directory",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:federation/activeDirectory/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the Active Directory",
              "fullType": "long",
              "name": "activeDirectoryId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.FederationAccessNetwork"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}"
    },
    {
      "description": "changeProperties operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update federated Active Directory",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:federation/activeDirectory/changeProperties",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description of your option access network",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "password",
              "description": "Active Directory password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "SSL thumbprint of the remote service, e.g. A7:61:68:...:61:91:2F",
              "fullType": "string",
              "name": "sslThumbprint",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Active Directory user name (pre-Windows 2000 name), e.g. jdoe@example.com or jdoe",
              "fullType": "string",
              "name": "username",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Active Directory",
              "fullType": "long",
              "name": "activeDirectoryId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties"
    },
    {
      "description": "grantActiveDirectoryGroup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Grant Active Directory group",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:federation/activeDirectory/grantActiveDirectoryGroup",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Active Directory group name (pre-Windows 2000 name), e.g. mygroup",
              "fullType": "string",
              "name": "groupName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Active Directory",
              "fullType": "long",
              "name": "activeDirectoryId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryGroup"
    },
    {
      "description": "grantActiveDirectoryUser operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Grant Active Directory user",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:federation/activeDirectory/grantActiveDirectoryUser",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Active Directory user name (pre-Windows 2000 name), e.g. jdoe@example.com or jdoe",
              "fullType": "string",
              "name": "username",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the Active Directory",
              "fullType": "long",
              "name": "activeDirectoryId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser"
    },
    {
      "description": "List the dedicatedCloud.Filer objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List global datastores mounted on all virtual datacenters",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer"
    },
    {
      "description": "Datastore",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get datastore",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Filer"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}"
    },
    {
      "description": "checkGlobalCompatible operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check ability to convert datastore to global datastore",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/checkGlobalCompatible/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/checkGlobalCompatible"
    },
    {
      "description": "convertToGlobal operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Convert datastore to global datastore",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/convertToGlobal",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/convertToGlobal"
    },
    {
      "description": "hourlyConsumption operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/me/consumption/usage/current",
            "value": "DEPRECATED"
          },
          "description": "Get datastore hourly consumption",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/hourlyConsumption/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.filer.HourlyConsumption"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption"
    },
    {
      "description": "location operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get datastore location",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/location/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.filer.NodeTypeEnum",
              "description": "Filer cluster node used to get location (default value: master)",
              "fullType": "dedicatedCloud.filer.NodeTypeEnum",
              "name": "node",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "dedicatedCloud.filer.Location"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/location"
    },
    {
      "description": "remove operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove datastore",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/remove",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/remove"
    },
    {
      "description": "List the dedicatedCloud.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List operations associated to datastore",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (like)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/task"
    },
    {
      "description": "Operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}"
    },
    {
      "description": "changeMaintenanceExecutionDate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the execution date of a maintenance operation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/task/changeMaintenanceExecutionDate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "The new execution date",
              "fullType": "datetime",
              "name": "executionDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate"
    },
    {
      "description": "resetTaskState operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch operation currently in error state",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:filer/task/resetTaskState",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Reason of task restart",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState"
    },
    {
      "description": "generateNsxvInventory operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate a NSX-V inventory",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:generateNsxvInventory",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/generateNsxvInventory"
    },
    {
      "description": "generateVxlanToVrackMapping operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate a NSX-V VXLAN to vRack mapping",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:generateVxlanToVrackMapping",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/generateVxlanToVrackMapping"
    },
    {
      "description": "globalTasks operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List filtered operations",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:globalTasks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filter the tasks by datacenter Id",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "date",
              "description": "Filter the tasks by end date (>=)",
              "fullType": "date",
              "name": "endDate.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "date",
              "description": "Filter the tasks by end date (<=)",
              "fullType": "date",
              "name": "endDate.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the tasks by execution date (>=)",
              "fullType": "datetime",
              "name": "executionDate.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the tasks by execution date (<=)",
              "fullType": "datetime",
              "name": "executionDate.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the tasks by filer Id",
              "fullType": "long",
              "name": "filerId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the tasks by host Id",
              "fullType": "long",
              "name": "hostId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the tasks by last modification date (>=)",
              "fullType": "datetime",
              "name": "lastModificationDate.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the tasks by last modification date (<=)",
              "fullType": "datetime",
              "name": "lastModificationDate.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the tasks by name",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the tasks by network access Id",
              "fullType": "long",
              "name": "networkAccessId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the tasks by order Id",
              "fullType": "long",
              "name": "orderId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the tasks by parent task Id",
              "fullType": "long",
              "name": "parentTaskId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.TaskStateEnum[]",
              "description": "Filter the tasks by state",
              "fullType": "dedicatedCloud.TaskStateEnum[]",
              "name": "state",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the tasks by user Id",
              "fullType": "long",
              "name": "userId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the tasks by vlan Id",
              "fullType": "long",
              "name": "vlanId",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/globalTasks"
    },
    {
      "description": "VMware Hybrid Cloud Extension option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get VMware Hybrid Cloud Extension option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hcx/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Hcx"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hcx"
    },
    {
      "description": "canBeDisabled operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Check if VMware Hybrid Cloud Extension option can be disabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hcx/canBeDisabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hcx/canBeDisabled"
    },
    {
      "description": "canBeEnabled operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Check if VMware Hybrid Cloud Extension option can be enabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hcx/canBeEnabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hcx/canBeEnabled"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable VMware Hybrid Cloud Extension option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hcx/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hcx/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Enable VMware Hybrid Cloud Extension option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hcx/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hcx/enable"
    },
    {
      "description": "HDS certification option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get HDS certification option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hds/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Hds"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hds"
    },
    {
      "description": "canBeDisabled operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Check if HDS certification option can be disabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hds/canBeDisabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.optionCompatibility"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hds/canBeDisabled"
    },
    {
      "description": "canBeEnabled operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Check if HDS certification option can be enabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hds/canBeEnabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.optionCompatibility"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hds/canBeEnabled"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Disable HDS certification option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hds/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hds/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Enable HDS certification option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hds/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hds/enable"
    },
    {
      "description": "HIPAA certification option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get HIPAA certification option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hipaa/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Hipaa"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hipaa"
    },
    {
      "description": "canBeDisabled operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Check if HIPAA certification option can be disabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hipaa/canBeDisabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.optionCompatibility"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hipaa/canBeDisabled"
    },
    {
      "description": "canBeEnabled operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Check if HIPAA certification option can be enabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hipaa/canBeEnabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.optionCompatibility"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hipaa/canBeEnabled"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Disable HIPAA certification option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hipaa/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hipaa/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Enable HIPAA certification option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:hipaa/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/hipaa/enable"
    },
    {
      "description": "OVHcloud IAM option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get OVHcloud IAM option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:iam/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Iam"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/iam"
    },
    {
      "description": "addRole operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create IAM role",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:iam/addRole",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Role name, e.g. mygroup",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/iam/addRole"
    },
    {
      "description": "canBeDisabled operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if OVHcloud IAM option can be disabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:iam/canBeDisabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/iam/canBeDisabled"
    },
    {
      "description": "canBeEnabled operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if OVHcloud IAM option can be enabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:iam/canBeEnabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/iam/canBeEnabled"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable OVHcloud IAM option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:iam/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/iam/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable OVHcloud IAM option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:iam/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/iam/enable"
    },
    {
      "description": "List the dedicatedCloud.Ip objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List IP blocks",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:ip/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipv4Block[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/ip"
    },
    {
      "description": "IP block",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get IP block",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:ip/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4Block",
              "description": "IP ex: 213.186.33.34/24",
              "fullType": "ipv4Block",
              "name": "network",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Ip"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/ip/{network}"
    },
    {
      "description": "details operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get details about this IP Block",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:ip/details/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4Block",
              "description": "IP ex: 213.186.33.34/24",
              "fullType": "ipv4Block",
              "name": "network",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.IpDetails[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/ip/{network}/details"
    },
    {
      "description": "List the dedicatedCloud.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List operations associated to IP block",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:ip/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4Block",
              "description": "IP ex: 213.186.33.34/24",
              "fullType": "ipv4Block",
              "name": "network",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (like)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/ip/{network}/task"
    },
    {
      "description": "Operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:ip/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4Block",
              "description": "IP ex: 213.186.33.34/24",
              "fullType": "ipv4Block",
              "name": "network",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}"
    },
    {
      "description": "changeMaintenanceExecutionDate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the execution date of a maintenance operation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:ip/task/changeMaintenanceExecutionDate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "The new execution date",
              "fullType": "datetime",
              "name": "executionDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4Block",
              "description": "IP ex: 213.186.33.34/24",
              "fullType": "ipv4Block",
              "name": "network",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate"
    },
    {
      "description": "resetTaskState operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch operation currently in error state",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:ip/task/resetTaskState",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Reason of task restart",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4Block",
              "description": "IP ex: 213.186.33.34/24",
              "fullType": "ipv4Block",
              "name": "network",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState"
    },
    {
      "description": "newPrices operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get new prices",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:newPrices/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.resourceNewPrices"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/newPrices"
    },
    {
      "description": "VMware NSX-V option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get VMware NSX-V option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:nsx/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Nsx"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/nsx"
    },
    {
      "description": "canBeDisabled operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Check if VMware NSX-V option can be disabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:nsx/canBeDisabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.optionCompatibility"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/nsx/canBeDisabled"
    },
    {
      "description": "canBeEnabled operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Check if VMware NSX-V option can be enabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:nsx/canBeEnabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.optionCompatibility"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/nsx/canBeEnabled"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Disable VMware NSX-V option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:nsx/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/nsx/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Enable VMware NSX-V option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:nsx/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/nsx/enable"
    },
    {
      "description": "VMware NSX-T option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get VMware NSX-T option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:nsxt/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Nsxt"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/nsxt"
    },
    {
      "description": "orderableIpCountries operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get orderable IP blocks countries",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:orderableIpCountries/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.IpCountriesEnum[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/orderableIpCountries"
    },
    {
      "description": "orderNewFilerHourly operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Order hourly global datastore mounted on all virtual datacenters",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:orderNewFilerHourly",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filer profile you want to order",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/orderNewFilerHourly"
    },
    {
      "description": "passwordPolicy operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get password policy",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:passwordPolicy/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.passwordPolicy"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/passwordPolicy"
    },
    {
      "description": "PCI-DSS certification option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get PCI-DSS certification option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:pcidss/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.PciDss"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/pcidss"
    },
    {
      "description": "canBeDisabled operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Check if PCI-DSS certification option can be disabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:pcidss/canBeDisabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.optionCompatibility"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/pcidss/canBeDisabled"
    },
    {
      "description": "canBeEnabled operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Check if PCI-DSS certification option can be enabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:pcidss/canBeEnabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.optionCompatibility"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/pcidss/canBeEnabled"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Disable PCI-DSS certification option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:pcidss/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/pcidss/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Enable PCI-DSS certification option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:pcidss/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/pcidss/enable"
    },
    {
      "description": "resetTriggeredAlarm operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset all hypervisor triggered alarms",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:resetTriggeredAlarm",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/resetTriggeredAlarm"
    },
    {
      "description": "List the dedicatedCloud.Robot objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List robots",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:robot/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/robot"
    },
    {
      "description": "Robot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get robot",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:robot/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of this robot",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Robot"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/robot/{name}"
    },
    {
      "description": "Security option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get security options",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:securityOptions/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.SecurityOption"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/securityOptions"
    },
    {
      "description": "compatibilityMatrix operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get security options compatibility matrix",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:securityOptions/compatibilityMatrix/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Show incompatible security options (enabled by default)",
              "fullType": "boolean",
              "name": "showIncompatible",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Show internal security options",
              "fullType": "boolean",
              "name": "showInternal",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "dedicatedCloud.securityOption.CompatibilityMatrixEntry[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix"
    },
    {
      "description": "dependenciesTree operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get security options dependencies tree",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:securityOptions/dependenciesTree/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.securityOption.SecurityOptionEnum",
              "description": "Target security option",
              "fullType": "dedicatedCloud.securityOption.SecurityOptionEnum",
              "name": "option",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.securityOption.DependenciesTree"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/securityOptions/dependenciesTree"
    },
    {
      "description": "pendingOptions operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get pending activation security options",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:securityOptions/pendingOptions/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.securityOption.SecurityOptionEnum[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/securityOptions/pendingOptions"
    },
    {
      "description": "resumePendingEnabling operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retry pending security option activation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:securityOptions/resumePendingEnabling",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.securityOption.SecurityOptionEnum",
              "description": "Security option to resume enabling",
              "fullType": "dedicatedCloud.securityOption.SecurityOptionEnum",
              "name": "option",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/securityOptions/resumePendingEnabling"
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
              "name": "pccVMware:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
              "name": "pccVMware:apiovh:serviceInfos/edit",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/serviceInfos"
    },
    {
      "description": "servicePack operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service pack information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:servicePack/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.servicePackStatus"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/servicePack"
    },
    {
      "description": "List the dedicatedCloud.ServicePack objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List service packs",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:servicePacks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/servicePacks"
    },
    {
      "description": "Service pack",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service pack",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:servicePacks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the Service Pack",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.ServicePack"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/servicePacks/{name}"
    },
    {
      "description": "List the dedicatedCloud.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List operations",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (like)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/task"
    },
    {
      "description": "Operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/task/{taskId}"
    },
    {
      "description": "changeMaintenanceExecutionDate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the execution date of a maintenance operation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:task/changeMaintenanceExecutionDate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "The new execution date",
              "fullType": "datetime",
              "name": "executionDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate"
    },
    {
      "description": "resetTaskState operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch operation currently in error state",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:task/resetTaskState",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Reason of task restart",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState"
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
              "name": "pccVMware:apiovh:terminate",
              "required": true
            }
          ],
          "longDescription": "Ask for the termination of your service. Admin contact of this service will receive a termination token by email in order to confirm its termination with /confirmTermination endpoint.",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/terminate"
    },
    {
      "description": "List the dedicatedCloud.twoFAWhitelist objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List two factor authentication whitelisted networks",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:twoFAWhitelist/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Create two factor authentication whitelisted network",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:twoFAWhitelist/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description of the exception",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "IP address or network of the remote service, e.g. 123.100.200.0",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/twoFAWhitelist"
    },
    {
      "description": "Two factor authentication whitelisted network",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove two factor authentication whitelisted network",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:twoFAWhitelist/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the trusted IP",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get two factor authentication whitelisted network",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:twoFAWhitelist/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the trusted IP",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.twoFAWhitelist"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}"
    },
    {
      "description": "changeProperties operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update two factor authentication whitelisted network",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:twoFAWhitelist/changeProperties",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description of your whitelist",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of the trusted IP",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties"
    },
    {
      "description": "upgradeHypervisor operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2020-03-01T00:00:00+01:00",
            "deprecatedDate": "2019-12-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dedicatedCloud/{serviceName}/upgradeVcenter",
            "value": "DEPRECATED"
          },
          "description": "Upgrade hypervisor to next version",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:upgradeHypervisor",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/upgradeHypervisor"
    },
    {
      "description": "upgradeVcenter operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Upgrade hypervisor to next version",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:upgradeVcenter",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.releaseEnum",
              "description": "Version information for vCenter upgrade (minor by default)",
              "fullType": "dedicatedCloud.releaseEnum",
              "name": "release",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/upgradeVcenter"
    },
    {
      "description": "List the dedicatedCloud.User objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List users",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (like)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create user",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Is this User able to add ressources in the Datacenter he has access ? (default is no right to add ressource)",
              "fullType": "boolean",
              "name": "canAddRessource",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Is this user able to manage the users rights",
              "fullType": "boolean",
              "name": "canManageRights",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The user email. If this field is empty, user informations will be sent to the dedicatedCloud administrator contact.",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Defines if the user can manage encryption / KMS configuration",
              "fullType": "boolean",
              "name": "encryptionRight",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Date of removal of the user.",
              "fullType": "datetime",
              "name": "expirationDate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "First name of the user",
              "fullType": "string",
              "name": "firstName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Last name of the user",
              "fullType": "string",
              "name": "lastName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of the user (login)",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.right.NetworkRoleEnum",
              "description": "Determine how this user will be able to act on this VMware on OVHcloud v(x)Lans",
              "fullType": "dedicatedCloud.right.NetworkRoleEnum",
              "name": "networkRole",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Is this User able to access nsx interface (requires NSX option)",
              "fullType": "boolean",
              "name": "nsxRight",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "password",
              "description": "The user password. It must fits your VMware on OVHcloud password policy. If this field is empty, a random password will be generated and sent by email.",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Mobile phone number of the user",
              "fullType": "string",
              "name": "phoneNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Defines if the user receives technical alerts",
              "fullType": "boolean",
              "name": "receiveAlerts",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.right.RightEnum",
              "description": "Determine what kind of access the User will have in all Datacenters of your VMware on OVHcloud (default is disabled)",
              "fullType": "dedicatedCloud.right.RightEnum",
              "name": "right",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Defines if the user can confirm security tokens (if a compatible option is enabled)",
              "fullType": "boolean",
              "name": "tokenValidator",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.right.VmNetworkRoleEnum",
              "description": "Determine how this user will be able to act on this VMware on OVHcloud VM Network",
              "fullType": "dedicatedCloud.right.VmNetworkRoleEnum",
              "name": "vmNetworkRole",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user"
    },
    {
      "description": "User",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove user",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update user",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.User"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change user password",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/changePassword",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "New password for this VMware on OVHcloud user. It must fit your VMware on OVHcloud password policy. If this field is empty, a random password will be generated and sent by email.",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/changePassword"
    },
    {
      "description": "changeProperties operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update user",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/changeProperties",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Defines if the user can manage ip failovers",
              "fullType": "boolean",
              "name": "canManageIpFailOvers",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Defines if the user can manage the network",
              "fullType": "boolean",
              "name": "canManageNetwork",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Defines if the user can manage the users rights",
              "fullType": "boolean",
              "name": "canManageRights",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Email address of the user",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Defines if the user can manage encryption / KMS configuration",
              "fullType": "boolean",
              "name": "encryptionRight",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "First name of the user",
              "fullType": "string",
              "name": "firstName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Defines if the user is a full admin in readonly",
              "fullType": "boolean",
              "name": "fullAdminRo",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Last name of the user",
              "fullType": "string",
              "name": "lastName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Is this User able to access nsx interface (requires NSX option)",
              "fullType": "boolean",
              "name": "nsxRight",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Mobile phone number of the user in international format (+prefix.number)",
              "fullType": "string",
              "name": "phoneNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Defines if the user receives technical alerts",
              "fullType": "boolean",
              "name": "receiveAlerts",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Defines if the user can confirm security tokens (if a compatible option is enabled)",
              "fullType": "boolean",
              "name": "tokenValidator",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/changeProperties"
    },
    {
      "description": "confirmPhoneNumber operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Confirm user phone number",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/confirmPhoneNumber",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "Token sent by SMS",
              "fullType": "password",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/confirmPhoneNumber"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable user",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable user",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/enable"
    },
    {
      "description": "List the dedicatedCloud.ObjectRight objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List user object rights",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/objectRight/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
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
          "description": "Create user object right",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/objectRight/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Right propagation on children objects",
              "fullType": "boolean",
              "name": "propagate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.right.RightEnum",
              "description": "User access on the VMware object",
              "fullType": "dedicatedCloud.right.RightEnum",
              "name": "right",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.right.UserObjectRightTypeEnum",
              "description": "Type of the object",
              "fullType": "dedicatedCloud.right.UserObjectRightTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The VMware MoRef of the object",
              "fullType": "string",
              "name": "vmwareObjectId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/objectRight"
    },
    {
      "description": "User object right",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove user object right",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/objectRight/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "objectRightId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get user object right",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/objectRight/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "objectRightId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.ObjectRight"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}"
    },
    {
      "description": "List the dedicatedCloud.Right objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List user datacenter rights",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/right/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/right"
    },
    {
      "description": "User datacenter right",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get user datacenter right",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/right/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "rightId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Right"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update user datacenter right",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/right/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.Right",
              "description": "New object properties",
              "fullType": "dedicatedCloud.Right",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "rightId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}"
    },
    {
      "description": "List the dedicatedCloud.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List operations associated to user",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of name property (like)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/task"
    },
    {
      "description": "Operation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get operation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}"
    },
    {
      "description": "changeMaintenanceExecutionDate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the execution date of a maintenance operation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/task/changeMaintenanceExecutionDate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "The new execution date",
              "fullType": "datetime",
              "name": "executionDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate"
    },
    {
      "description": "resetTaskState operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch operation currently in error state",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:user/task/resetTaskState",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Reason of task restart",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState"
    },
    {
      "description": "vcenterVersion operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get available upgrades for hypervisor",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vcenterVersion/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.vcenter"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vcenterVersion"
    },
    {
      "description": "Vendor information",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get vendor information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vendor/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Vendor"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vendor"
    },
    {
      "description": "objectType operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get vendor object types",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vendor/objectType/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vendor/objectType"
    },
    {
      "description": "ovhId operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get OVHcloud API id for object",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vendor/ovhId/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.VendorObjectTypeEnum",
              "description": "object type",
              "fullType": "dedicatedCloud.VendorObjectTypeEnum",
              "name": "objectType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "object type id",
              "fullType": "string",
              "name": "vendorId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.vendor.OvhId"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vendor/ovhId"
    },
    {
      "description": "List the dedicatedCloud.Vlan objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List vLANs",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vlan/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vlan"
    },
    {
      "description": "vLAN",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get vLAN",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vlan/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "vlanId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Vlan"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vlan/{vlanId}"
    },
    {
      "description": "Virtual machine encryption option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get virtual machine encryption option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vmEncryption/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.VMEncryption"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vmEncryption"
    },
    {
      "description": "List the dedicatedCloud.VMEncryptionAccessNetwork objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List virtual machine encryption KMS servers",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vmEncryption/kms/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Create virtual machine encryption KMS server",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vmEncryption/kms/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description of your option access network",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipv4",
              "description": "IP address of the remote service, e.g. 123.100.200.0",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "SSL thumbprint of the remote service, e.g. A7:61:68:...:61:91:2F",
              "fullType": "string",
              "name": "sslThumbprint",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vmEncryption/kms"
    },
    {
      "description": "Virtual machine encryption KMS server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove virtual machine encryption KMS server",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vmEncryption/kms/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the VM Encryption KMS",
              "fullType": "long",
              "name": "kmsId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get virtual machine encryption KMS server",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vmEncryption/kms/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the VM Encryption KMS",
              "fullType": "long",
              "name": "kmsId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.VMEncryptionAccessNetwork"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}"
    },
    {
      "description": "changeProperties operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update virtual machine encryption KMS server",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vmEncryption/kms/changeProperties",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description of your option access network",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "SSL thumbprint of the remote service, e.g. A7:61:68:...:61:91:2F",
              "fullType": "string",
              "name": "sslThumbprint",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the VM Encryption KMS",
              "fullType": "long",
              "name": "kmsId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties"
    },
    {
      "description": "List the vrack.dedicatedCloud objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List vRacks",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrack/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrack"
    },
    {
      "description": "VMware on OVHcloud vRack link",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove VMware on OVHcloud from vRack",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrack/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "vrack name",
              "fullType": "string",
              "name": "vrack",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get vRack",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrack/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "vrack name",
              "fullType": "string",
              "name": "vrack",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "vrack.dedicatedCloud"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrack/{vrack}"
    },
    {
      "description": "VMware Aria Operations option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get VMware Aria Operations option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Vrops"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrops"
    },
    {
      "description": "canBeDisabled operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if VMware Aria Operations option can be disabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/canBeDisabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.optionCompatibility"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrops/canBeDisabled"
    },
    {
      "description": "canBeEnabled operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if VMware Aria Operations option can be enabled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/canBeEnabled/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.optionCompatibility"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrops/canBeEnabled"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Disable VMware Aria Operations option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/disable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrops/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
            "value": "DEPRECATED"
          },
          "description": "Enable VMware Aria Operations option",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/enable",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrops/enable"
    },
    {
      "description": "List the dedicatedCloud.VropsOutgoingFlow objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List VMware Aria Operations outgoing flows",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/outgoingFlow/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
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
          "description": "Create VMware Aria Operations outgoing flow",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/outgoingFlow/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Outgoing flow description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipv4",
              "description": "IP address of the remote service, e.g. 123.100.200.0",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Remote service port (25, 465, 587 or 2525)",
              "fullType": "long",
              "name": "servicePort",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrops/outgoingFlow"
    },
    {
      "description": "VMware Aria Operations outgoing flows",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove VMware Aria Operations outgoing flow",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/outgoingFlow/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the VMware Aria Operations outgoing flow",
              "fullType": "long",
              "name": "outgoingFlowId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get VMware Aria Operations outgoing flows",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/outgoingFlow/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the VMware Aria Operations outgoing flow",
              "fullType": "long",
              "name": "outgoingFlowId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.VropsOutgoingFlow"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrops/outgoingFlow/{outgoingFlowId}"
    },
    {
      "description": "changeProperties operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update VMware Aria Operations outgoing flow",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/outgoingFlow/changeProperties",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Outgoing flow description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Id of the VMware Aria Operations outgoing flow",
              "fullType": "long",
              "name": "outgoingFlowId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrops/outgoingFlow/{outgoingFlowId}/changeProperties"
    },
    {
      "description": "upgrade operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Upgrade VMware Aria Operations",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "pccVMware:apiovh:vrops/upgrade",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Target version for VMware Aria Operations upgrade",
              "fullType": "string",
              "name": "version",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Task"
        }
      ],
      "path": "/dedicatedCloud/{serviceName}/vrops/upgrade"
    },
    {
      "description": "List the dedicatedCloud.CommercialRange objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List commercial ranges",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicatedCloud/commercialRange"
    },
    {
      "description": "Commercial ranges",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get commercial range",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of this commercial range",
              "fullType": "string",
              "name": "commercialRangeName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.CommercialRange"
        }
      ],
      "path": "/dedicatedCloud/commercialRange/{commercialRangeName}"
    },
    {
      "description": "List the dedicatedCloud.PccZone objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List hosting locations",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:pccVMware/location/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicatedCloud/location"
    },
    {
      "description": "Hosting location",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get hosting location",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:pccVMware/location/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of pccZone",
              "fullType": "string",
              "name": "pccZone",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.PccZone"
        }
      ],
      "path": "/dedicatedCloud/location/{pccZone}"
    },
    {
      "description": "List the dedicatedCloud.HostProfile objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List host profiles on hosting location",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:pccVMware/location/hostProfile/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of pccZone",
              "fullType": "string",
              "name": "pccZone",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicatedCloud/location/{pccZone}/hostProfile"
    },
    {
      "description": "Host profile",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get host profile",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:pccVMware/location/hostProfile/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of Host profile",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of pccZone",
              "fullType": "string",
              "name": "pccZone",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.HostProfile"
        }
      ],
      "path": "/dedicatedCloud/location/{pccZone}/hostProfile/{id}"
    },
    {
      "description": "List the dedicatedCloud.Os objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List hypervisor versions on hosting location",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:pccVMware/location/hypervisor/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of pccZone",
              "fullType": "string",
              "name": "pccZone",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicatedCloud/location/{pccZone}/hypervisor"
    },
    {
      "description": "Hypervisor",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get hypervisor",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:pccVMware/location/hypervisor/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of pccZone",
              "fullType": "string",
              "name": "pccZone",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Short name of hypervisor",
              "fullType": "string",
              "name": "shortName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.Os"
        }
      ],
      "path": "/dedicatedCloud/location/{pccZone}/hypervisor/{shortName}"
    },
    {
      "description": "host operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get hosts stock",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:pccVMware/location/stock/host/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of pccZone",
              "fullType": "string",
              "name": "pccZone",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Minimum reference year",
              "fullType": "long",
              "name": "minYear",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "dedicatedCloud.HostStockProfile[]"
        }
      ],
      "path": "/dedicatedCloud/location/{pccZone}/stock/host"
    },
    {
      "description": "pcc operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get hypervisors stock",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:pccVMware/location/stock/pcc/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of pccZone",
              "fullType": "string",
              "name": "pccZone",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicatedCloud.PccStockProfile[]"
        }
      ],
      "path": "/dedicatedCloud/location/{pccZone}/stock/pcc"
    },
    {
      "description": "zpool operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get datastores stock",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:pccVMware/location/stock/zpool/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of pccZone",
              "fullType": "string",
              "name": "pccZone",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Profile filter",
              "fullType": "string",
              "name": "profileFilter",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "dedicatedCloud.ZpoolStockProfile[]"
        }
      ],
      "path": "/dedicatedCloud/location/{pccZone}/stock/zpool"
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
    "complexType.UnitAndValue<double>": {
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
    "complexType.UnitAndValue<long>": {
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
    "dedicated.DatacenterEnum": {
      "description": "ovh datacenter",
      "enum": [
        "bhs1",
        "bhs2",
        "bhs3",
        "bhs4",
        "bhs5",
        "bhs6",
        "bhs7",
        "bhs8",
        "cch01",
        "crx1",
        "crx2",
        "dc1",
        "eri1",
        "eri2",
        "gra04",
        "gra1",
        "gra2",
        "gra3",
        "gsw",
        "hil1",
        "ieb01",
        "lil1-int1",
        "lim1",
        "lim2",
        "lim3",
        "mr901",
        "p19",
        "rbx",
        "rbx-hz",
        "rbx1",
        "rbx10",
        "rbx2",
        "rbx3",
        "rbx4",
        "rbx5",
        "rbx6",
        "rbx7",
        "rbx8",
        "rbx9",
        "sbg1",
        "sbg2",
        "sbg3",
        "sbg4",
        "sbg5",
        "sgp02",
        "sgp1",
        "syd03",
        "syd1",
        "syd2",
        "vin1",
        "waw1",
        "ynm1",
        "yyz01"
      ],
      "enumType": "string",
      "id": "DatacenterEnum",
      "namespace": "dedicated"
    },
    "dedicatedCloud.AllowedNetwork": {
      "description": "Network allowed on infrastructure firewall",
      "id": "AllowedNetwork",
      "namespace": "dedicatedCloud",
      "properties": {
        "description": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "network": {
          "canBeNull": false,
          "description": "Network name, e.g. 123.100.200.0/32",
          "fullType": "ipv4Block",
          "readOnly": false,
          "required": false,
          "type": "ipv4Block"
        },
        "networkAccessId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "fullType": "dedicatedCloud.AllowedNetworkStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.AllowedNetworkStateEnum"
        }
      }
    },
    "dedicatedCloud.AllowedNetworkStateEnum": {
      "description": "All states an Allowed Network can be in",
      "enum": [
        "allowed",
        "toDelete",
        "toUpdate"
      ],
      "enumType": "string",
      "id": "AllowedNetworkStateEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.AutoScaleConfig": {
      "description": "Autoscale configuration",
      "id": "AutoScaleConfig",
      "namespace": "dedicatedCloud",
      "properties": {
        "cpuMaxThreshold": {
          "canBeNull": false,
          "description": "CPU Max Threshold",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "cpuMinThreshold": {
          "canBeNull": false,
          "description": "CPU Min Threshold",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of AutoScale configurations",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the AutoScale configuration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxNumOfHosts": {
          "canBeNull": false,
          "description": "Maximum number of hosts in the cluster",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "memMaxThreshold": {
          "canBeNull": false,
          "description": "Memory Max Threshold",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "memMinThreshold": {
          "canBeNull": false,
          "description": "Memory Min Threshold",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minNumOfHosts": {
          "canBeNull": false,
          "description": "Minimum number of hosts in the cluster",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "storageMaxThreshold": {
          "canBeNull": false,
          "description": "Storage Max Threshold",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "timeDelayScaleIn": {
          "canBeNull": false,
          "description": "Time delay between two scale-ins in mins",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "timeDelayScaleOut": {
          "canBeNull": false,
          "description": "Time delay between two scale-outs in mins",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "timeDelayStorageScaleOut": {
          "canBeNull": false,
          "description": "Time delay between two storage scale-outs in mins",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.AutoScaleVirtual": {
      "description": "Autoscale option",
      "id": "AutoScaleVirtual",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.Backup": {
      "description": "Backup option",
      "id": "Backup",
      "namespace": "dedicatedCloud",
      "properties": {
        "backupDurationInReport": {
          "canBeNull": true,
          "description": "Duration on email report",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "backupOffer": {
          "canBeNull": true,
          "description": "Backup offer type",
          "fullType": "dedicatedCloud.backup.OfferTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.backup.OfferTypeEnum"
        },
        "backupSizeInReport": {
          "canBeNull": true,
          "description": "Backup size on day on email report",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "diskSizeInReport": {
          "canBeNull": true,
          "description": "Disk size on mail report",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "encryption": {
          "canBeNull": true,
          "description": "Backup is encrypted",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "fullDayInReport": {
          "canBeNull": true,
          "description": "Full day on mail report",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hostname": {
          "canBeNull": true,
          "description": "Name of the backup server virtual machine.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mailAddress": {
          "canBeNull": true,
          "description": "Unique additional email address for backup daily report",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "replicationZone": {
          "canBeNull": true,
          "description": "Backup replication zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "restorePointInReport": {
          "canBeNull": true,
          "description": "RestorePoint number on mail report",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "scheduleHour": {
          "canBeNull": true,
          "description": "Schedule hour for start backup",
          "fullType": "time",
          "readOnly": true,
          "required": false,
          "type": "time"
        },
        "state": {
          "canBeNull": false,
          "description": "This Backup current state",
          "fullType": "dedicatedCloud.BackupStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.BackupStateEnum"
        },
        "vmwareVmId": {
          "canBeNull": true,
          "description": "The moref of the backup server virtual machine",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.BackupJob": {
      "description": "Backup job",
      "id": "BackupJob",
      "namespace": "dedicatedCloud",
      "properties": {
        "allocatedDisk": {
          "canBeNull": true,
          "description": "Disk space allocated to the virtual machine",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "backupDays": {
          "canBeNull": true,
          "description": "List of days your Virtual Machine will be backuped",
          "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.backup.BackupDaysEnum[]"
        },
        "encryption": {
          "canBeNull": true,
          "description": "Backup is encrypted",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "offerType": {
          "canBeNull": true,
          "description": "Offer type of the backup job",
          "fullType": "dedicatedCloud.backup.OfferTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.backup.OfferTypeEnum"
        },
        "retentionTime": {
          "canBeNull": true,
          "description": "Number of days before the backup is deleted",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the backup job",
          "fullType": "dedicatedCloud.backup.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.backup.StateEnum"
        },
        "vmName": {
          "canBeNull": true,
          "description": "Name of the virtual Machine",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.BackupRepository": {
      "description": "Backup repository",
      "id": "BackupRepository",
      "namespace": "dedicatedCloud",
      "properties": {
        "lastSuccessfulReplicationDate": {
          "canBeNull": true,
          "description": "Replication last successful date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "replication": {
          "canBeNull": true,
          "description": "Replication status",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        },
        "replicationZone": {
          "canBeNull": true,
          "description": "Replication zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "repositoryId": {
          "canBeNull": false,
          "description": "Repository Id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "repositoryName": {
          "canBeNull": false,
          "description": "Repository Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "syncStatus": {
          "canBeNull": true,
          "description": "Replication sync status",
          "fullType": "dedicatedCloud.backup.ReplicationSyncStatus",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.backup.ReplicationSyncStatus"
        }
      }
    },
    "dedicatedCloud.BackupStateEnum": {
      "description": "All states a Dedicated Cloud Backup can be in",
      "enum": [
        "disabled",
        "disabling",
        "enabled",
        "enabling",
        "error",
        "migrating",
        "removing"
      ],
      "enumType": "string",
      "id": "BackupStateEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.BillingTypeEnum": {
      "description": "The billing type of this Dedicated Cloud",
      "enum": [
        "demo",
        "monthly"
      ],
      "enumType": "string",
      "id": "BillingTypeEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.BlockRegisterEnum": {
      "description": "The Regional Internet Registry of this IP block",
      "enum": [
        "arin",
        "ripe"
      ],
      "enumType": "string",
      "id": "BlockRegisterEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.Capabilities": {
      "description": "Available features",
      "id": "Capabilities",
      "namespace": "dedicatedCloud",
      "properties": {
        "addRessourceRightStatus": {
          "canBeNull": false,
          "description": "canAddRessource right order status in this VMware on OVHcloud",
          "fullType": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.capabilities.FeatureStatusEnum"
        },
        "backupStatus": {
          "canBeNull": false,
          "description": "Backup feature order status for this VMware on OVHcloud",
          "fullType": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.capabilities.FeatureStatusEnum"
        },
        "canAddUser": {
          "canBeNull": false,
          "description": "if true user can be added in this VMware on OVHcloud (with POST /dedicatedCloud/{serviceName}/user",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "fullAdminRoUserStatus": {
          "canBeNull": false,
          "description": "fullAdminRO user right order status in this VMware on OVHcloud",
          "fullType": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.capabilities.FeatureStatusEnum"
        },
        "nexus1000vStatus": {
          "canBeNull": false,
          "description": "Nexus 1000v feature order status in this VMware on OVHcloud ?",
          "fullType": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.capabilities.FeatureStatusEnum"
        },
        "upgradable": {
          "canBeNull": false,
          "description": "Hypervisor upgrade order status in this VMware on OVHcloud (upgrade with POST /dedicatedCloud/{serviceName}/upgradeHypervisor)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "userAccessPolicyStatus": {
          "canBeNull": false,
          "description": "userAccessPolicy property edition status in PUT /dedicatedCloud/{serviceName}",
          "fullType": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.capabilities.FeatureStatusEnum"
        }
      }
    },
    "dedicatedCloud.Cluster": {
      "description": "Cluster",
      "id": "Cluster",
      "namespace": "dedicatedCloud",
      "properties": {
        "autoscale": {
          "canBeNull": true,
          "description": "AutoScale associated to this cluster",
          "fullType": "dedicatedCloud.cluster.AutoScale",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.cluster.AutoScale"
        },
        "clusterId": {
          "canBeNull": false,
          "description": "Id of the cluster",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "drsMode": {
          "canBeNull": false,
          "description": "Drs mode of the cluster",
          "fullType": "dedicatedCloud.cluster.ClusterDrsModeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.cluster.ClusterDrsModeEnum"
        },
        "drsStatus": {
          "canBeNull": false,
          "description": "Drs status of the cluster",
          "fullType": "dedicatedCloud.cluster.ClusterConfigsStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.cluster.ClusterConfigsStatusEnum"
        },
        "evcMode": {
          "canBeNull": false,
          "description": "Evc mode of the cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "haStatus": {
          "canBeNull": false,
          "description": "High availability status of the cluster",
          "fullType": "dedicatedCloud.cluster.ClusterConfigsStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.cluster.ClusterConfigsStatusEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vmwareClusterId": {
          "canBeNull": false,
          "description": "The VMware MoRef of the cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.CommercialNameEnum": {
      "description": "The commercial name component",
      "enum": [
        "CDI",
        "CDI-HDS",
        "CDI-HIPAA",
        "CDI-NSX",
        "CDI-NSX-T",
        "CDI-NSX-VROPS",
        "CDI-PCIDSS",
        "CDI-UNKNOWN",
        "CDI-VROPS",
        "DC",
        "DC-ANCIENT",
        "DC-ANCIENT-HDS",
        "DC-ANCIENT-HIPAA",
        "DC-ANCIENT-NSX",
        "DC-ANCIENT-NSX-T",
        "DC-ANCIENT-NSX-VROPS",
        "DC-ANCIENT-PCIDSS",
        "DC-ANCIENT-UNKNOWN",
        "DC-ANCIENT-VROPS",
        "DC-HDS",
        "DC-HIPAA",
        "DC-LEGACY",
        "DC-LEGACY-HDS",
        "DC-LEGACY-HIPAA",
        "DC-LEGACY-NSX",
        "DC-LEGACY-NSX-T",
        "DC-LEGACY-NSX-VROPS",
        "DC-LEGACY-PCIDSS",
        "DC-LEGACY-UNKNOWN",
        "DC-LEGACY-VROPS",
        "DC-NSX",
        "DC-NSX-T",
        "DC-NSX-VROPS",
        "DC-PCIDSS",
        "DC-UNKNOWN",
        "DC-VROPS",
        "ESSENTIALS",
        "ESSENTIALS-HDS",
        "ESSENTIALS-HIPAA",
        "ESSENTIALS-NSX",
        "ESSENTIALS-NSX-T",
        "ESSENTIALS-NSX-VROPS",
        "ESSENTIALS-PCIDSS",
        "ESSENTIALS-UNKNOWN",
        "ESSENTIALS-VROPS",
        "NSX-T",
        "NSX-T-DEFAULT",
        "NSX-T-HDS",
        "NSX-T-NSX",
        "NSX-T-NSX-VROPS",
        "NSX-T-PCIDSS",
        "NSX-T-VROPS",
        "NSX-T-VROPS-WITHOUT-NSX",
        "NSX-T-WITHOUT-NSX",
        "PREMIER",
        "PREMIER-DEFAULT",
        "PREMIER-HDS",
        "PREMIER-HIPAA",
        "PREMIER-NSX",
        "PREMIER-NSX-T",
        "PREMIER-NSX-VROPS",
        "PREMIER-PCIDSS",
        "PREMIER-UNKNOWN",
        "PREMIER-VROPS",
        "SDDC",
        "SDDC-DEFAULT",
        "SDDC-HDS",
        "SDDC-HIPAA",
        "SDDC-LEGACY",
        "SDDC-LEGACY-HDS",
        "SDDC-LEGACY-HIPAA",
        "SDDC-LEGACY-PCIDSS",
        "SDDC-LEGACY-UNKNOWN",
        "SDDC-LEGACY-VROPS",
        "SDDC-LEGACY-VROPS-WITHOUT-NSX",
        "SDDC-LEGACY-WITHOUT-NSX",
        "SDDC-PCIDSS",
        "SDDC-UNKNOWN",
        "SDDC-VROPS",
        "SDDC-VROPS-WITHOUT-NSX",
        "SDDC-WITHOUT-NSX",
        "UNKNOWN",
        "UNKNOWN-HDS",
        "UNKNOWN-HIPAA",
        "UNKNOWN-NSX",
        "UNKNOWN-NSX-T",
        "UNKNOWN-NSX-VROPS",
        "UNKNOWN-PCIDSS",
        "UNKNOWN-UNKNOWN",
        "UNKNOWN-VROPS",
        "UNKNOWN-VSPHERE",
        "VSPHERE",
        "VSPHERE-DEFAULT",
        "VSPHERE-HDS",
        "VSPHERE-NSX",
        "VSPHERE-NSX-VROPS",
        "VSPHERE-PCIDSS",
        "VSPHERE-VROPS",
        "VSPHERE-VROPS-WITHOUT-NSX",
        "VSPHERE-WITHOUT-NSX"
      ],
      "enumType": "string",
      "id": "CommercialNameEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.CommercialRange": {
      "description": "Commercial ranges",
      "id": "CommercialRange",
      "namespace": "dedicatedCloud",
      "properties": {
        "allowedHypervisorVersions": {
          "canBeNull": false,
          "description": "The hypervisor versions compliant with this commercial Range",
          "fullType": "dedicatedCloud.HypervisorVersionEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.HypervisorVersionEnum[]"
        },
        "allowedNetworkRoles": {
          "canBeNull": false,
          "description": "The list of NetworkRoles allowed for one user in this commercial range",
          "fullType": "dedicatedCloud.right.NetworkRoleEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.right.NetworkRoleEnum[]"
        },
        "commercialRangeName": {
          "canBeNull": false,
          "description": "The name of this commercial range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "dedicatedCloudVersion": {
          "canBeNull": false,
          "description": "The name of the dedicated Cloud version associated to this commercial range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "range": {
          "canBeNull": true,
          "description": "The range of this Datacenter in this VMware on OVHcloud version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.Datacenter": {
      "description": "Virtual datacenter",
      "id": "Datacenter",
      "namespace": "dedicatedCloud",
      "properties": {
        "commercialName": {
          "canBeNull": false,
          "description": "The commercial name of this Datacenter",
          "fullType": "dedicatedCloud.CommercialNameEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.CommercialNameEnum"
        },
        "commercialRangeName": {
          "canBeNull": false,
          "description": "The commercial range associated to this Datacenter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "datacenterId": {
          "canBeNull": false,
          "description": "Id of the Datacenter",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "horizonViewName": {
          "canBeNull": true,
          "description": "Name of the associated Horizon View service if the VDI option is enabled",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isRemovable": {
          "canBeNull": false,
          "description": "Check if this datacenter is removable (Need to be Empty)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": "Os version installed on your VMware on OVHcloud",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.DvsSecurityPolicy": {
      "description": "A structure describing the vmware DVSSecurityPolicy data object",
      "id": "DvsSecurityPolicy",
      "namespace": "dedicatedCloud",
      "properties": {
        "allowPromiscuous": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.vmwareBoolPolicy"
        },
        "forgedTransmits": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.vmwareBoolPolicy"
        },
        "macChanges": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.vmwareBoolPolicy"
        }
      }
    },
    "dedicatedCloud.Federation": {
      "description": "Active Directory federation option",
      "id": "Federation",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.FederationAccessNetwork": {
      "description": "Federated Active Directory",
      "id": "FederationAccessNetwork",
      "namespace": "dedicatedCloud",
      "properties": {
        "activeDirectoryId": {
          "canBeNull": false,
          "description": "Id of the Active Directory",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "baseDnForGroups": {
          "canBeNull": false,
          "description": "Active Directory base DN for groups",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "baseDnForUsers": {
          "canBeNull": false,
          "description": "Active Directory base DN for users",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of your option access network",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domainAlias": {
          "canBeNull": false,
          "description": "Active Directory NetBIOS name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domainName": {
          "canBeNull": false,
          "description": "Active Directory domain name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP address of the remote service",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "ldapHostname": {
          "canBeNull": true,
          "description": "Active Directory LDAP hostname",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ldapTcpPort": {
          "canBeNull": false,
          "description": "Active Directory LDAP port",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "noSsl": {
          "canBeNull": false,
          "description": "Use unsecure LDAP instead of LDAPS",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "sslThumbprint": {
          "canBeNull": true,
          "description": "SSL thumbprint of the remote service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.optionAccessNetwork.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.optionAccessNetwork.StateEnum"
        },
        "username": {
          "canBeNull": false,
          "description": "Active Directory user name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.Filer": {
      "description": "Datastore",
      "id": "Filer",
      "namespace": "dedicatedCloud",
      "properties": {
        "activeNode": {
          "canBeNull": true,
          "description": "Filer active node.",
          "fullType": "dedicatedCloud.filer.NodeTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.filer.NodeTypeEnum"
        },
        "billingType": {
          "canBeNull": true,
          "description": "Billing type of this filer",
          "fullType": "dedicatedCloud.ressources.BillingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.ressources.BillingTypeEnum"
        },
        "connectionState": {
          "canBeNull": true,
          "description": "Filer connexion state.",
          "fullType": "dedicatedCloud.filer.ConnexionStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.filer.ConnexionStateEnum"
        },
        "filerId": {
          "canBeNull": false,
          "description": "Filer Id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "fullProfile": {
          "canBeNull": false,
          "description": "Human-Readable profile name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isManagedByOvh": {
          "canBeNull": false,
          "description": "Filer accessibility (if true, customer cannot access it)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "master": {
          "canBeNull": false,
          "description": "Filer master node hostname.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Filer name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "profile": {
          "canBeNull": false,
          "description": "Commercial profile name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "resourceName": {
          "canBeNull": true,
          "description": "Resource name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Filer capacity",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "slave": {
          "canBeNull": true,
          "description": "Filer slave node hostname.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "spaceFree": {
          "canBeNull": true,
          "description": "Available space of this datastore, in GB",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "spaceProvisionned": {
          "canBeNull": true,
          "description": "Provisionned space of this datastore, in GB",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "spaceUsed": {
          "canBeNull": true,
          "description": "Used Space of this filer, in GB",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the filer",
          "fullType": "dedicatedCloud.filer.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.filer.StateEnum"
        },
        "vmTotal": {
          "canBeNull": true,
          "description": "Number of virtual machine on the filer",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.GenerationEnum": {
      "description": "The generation of a Dedicated Cloud",
      "enum": [
        "1.0",
        "2.0"
      ],
      "enumType": "string",
      "id": "GenerationEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.Hcx": {
      "description": "VMware Hybrid Cloud Extension option",
      "id": "Hcx",
      "namespace": "dedicatedCloud",
      "properties": {
        "build": {
          "canBeNull": true,
          "description": "Build of the VMware Hybrid Cloud Extension",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        },
        "version": {
          "canBeNull": true,
          "description": "Version of the VMware Hybrid Cloud Extension",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.Hds": {
      "description": "HDS certification option",
      "id": "Hds",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.Hipaa": {
      "description": "HIPAA certification option",
      "id": "Hipaa",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.Host": {
      "description": "Host",
      "id": "Host",
      "namespace": "dedicatedCloud",
      "properties": {
        "billingType": {
          "canBeNull": false,
          "description": "Billing type of the host",
          "fullType": "dedicatedCloud.ressources.BillingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.ressources.BillingTypeEnum"
        },
        "clusterName": {
          "canBeNull": true,
          "description": "Cluster of the host",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "connectionState": {
          "canBeNull": true,
          "description": "Connection state of the host",
          "fullType": "dedicatedCloud.hostSystemConnectionState",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.hostSystemConnectionState"
        },
        "cpu": {
          "canBeNull": false,
          "description": "CPU total frenquency",
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        },
        "cpuMax": {
          "canBeNull": true,
          "description": "The maximum speed of the cpu, in Mhz",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "cpuMaxCore": {
          "canBeNull": true,
          "description": "The speed of the CPU cores. This is an average value if there are multiple speeds. in Mhz",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "cpuNum": {
          "canBeNull": true,
          "description": "Number of physical CPU cores on the host.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "cpuUsed": {
          "canBeNull": true,
          "description": "Current cpu utilization, in Mhz",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "hostId": {
          "canBeNull": false,
          "description": "Id of the host",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "inMaintenance": {
          "canBeNull": true,
          "description": "Host is in maintenance mode",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "memoryUsed": {
          "canBeNull": true,
          "description": "Amount of used memory. Sum of the memory used by all powered on virtual machines and vSphere services on the host. in MB",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the host (IP address)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "parentHostId": {
          "canBeNull": true,
          "description": "Id of the parent host (if any)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "profile": {
          "canBeNull": false,
          "description": "Host profile in a commercial range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "profileCode": {
          "canBeNull": false,
          "description": "Host profile code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "rack": {
          "canBeNull": false,
          "description": "Rack of the host",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ram": {
          "canBeNull": false,
          "description": "Total RAM quantity",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "resourceName": {
          "canBeNull": true,
          "description": "Resource name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the host",
          "fullType": "dedicatedCloud.host.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.host.StateEnum"
        },
        "uptime": {
          "canBeNull": true,
          "description": "Host uptime in second",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vmTotal": {
          "canBeNull": true,
          "description": "Number of Virtual Machine on the host",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vmVcpuTotal": {
          "canBeNull": true,
          "description": "Number of Vcpu use by virtual machines on the host",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.HostProfile": {
      "description": "Host profile",
      "id": "HostProfile",
      "namespace": "dedicatedCloud",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Id of Host profile",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of Host profile",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.HostResilience": {
      "description": "Host resilience test status",
      "id": "HostResilience",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.HostStockHypervisor": {
      "description": "Hypervisor and their availability",
      "id": "HostStockHypervisor",
      "namespace": "dedicatedCloud",
      "properties": {
        "value": {
          "canBeNull": false,
          "description": "Number of available hypervisors",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "version": {
          "canBeNull": false,
          "description": "Version of hypervisor",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.HostStockProcGen": {
      "description": "Processor generation and their availability",
      "id": "HostStockProcGen",
      "namespace": "dedicatedCloud",
      "properties": {
        "cpuGeneration": {
          "canBeNull": false,
          "description": "CPU generation",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Number of available hosts",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.HostStockHypervisor[]"
        }
      }
    },
    "dedicatedCloud.HostStockProfile": {
      "description": "HostProfiles and their availability",
      "id": "HostStockProfile",
      "namespace": "dedicatedCloud",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Id of host profile",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of host profile",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ref": {
          "canBeNull": false,
          "description": "Reference of host profile",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Available hosts",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.HostStockProcGen[]"
        }
      }
    },
    "dedicatedCloud.HypervisorVersionEnum": {
      "description": "The Hypervisor version of this Dedicated Cloud component",
      "enum": [
        "4.1",
        "5.0",
        "5.1",
        "5.5",
        "6.0",
        "6.5",
        "6.7",
        "7.0",
        "8.0",
        "hv3.1",
        "hvdc3.1",
        "nc1.0"
      ],
      "enumType": "string",
      "id": "HypervisorVersionEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.Iam": {
      "description": "OVHcloud IAM option",
      "id": "Iam",
      "namespace": "dedicatedCloud",
      "properties": {
        "identityProviderId": {
          "canBeNull": true,
          "description": "Identity Provider ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.Ip": {
      "description": "IP block",
      "id": "Ip",
      "namespace": "dedicatedCloud",
      "properties": {
        "country": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "gateway": {
          "canBeNull": false,
          "description": "Gateway value",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "netmask": {
          "canBeNull": false,
          "description": "Netmask value",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "network": {
          "canBeNull": false,
          "description": "IP ex: 213.186.33.34/24",
          "fullType": "ipv4Block",
          "readOnly": true,
          "required": false,
          "type": "ipv4Block"
        },
        "networkName": {
          "canBeNull": false,
          "description": "Network name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "register": {
          "canBeNull": false,
          "description": "The Regional Internet Registry of this Ip Block",
          "fullType": "dedicatedCloud.BlockRegisterEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.BlockRegisterEnum"
        },
        "vlanNumber": {
          "canBeNull": false,
          "description": "Vlan where this network is routed",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.IpCountriesEnum": {
      "description": "All countries in which an Ip Block may be ordered",
      "enum": [
        "be",
        "ca",
        "ch",
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
        "us"
      ],
      "enumType": "string",
      "id": "IpCountriesEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.IpDetails": {
      "description": "Details about an Ip",
      "id": "IpDetails",
      "namespace": "dedicatedCloud",
      "properties": {
        "ip": {
          "canBeNull": false,
          "description": "IP address",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "reverse": {
          "canBeNull": true,
          "description": "IP address reverse record",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "usage": {
          "canBeNull": false,
          "description": "IP address usage",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.ipUsageEnum"
        },
        "usageDetails": {
          "canBeNull": true,
          "description": "IP address usage details",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.LogSubscriptionResource": {
      "description": "Log subscription resource",
      "id": "LogSubscriptionResource",
      "namespace": "dedicatedCloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of subscribed resource",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of subscribed resource",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.LogSubscriptionResponse": {
      "description": "synchronous operation after subscribing or unsubscribing to a resource logs",
      "id": "LogSubscriptionResponse",
      "namespace": "dedicatedCloud",
      "properties": {
        "operationId": {
          "canBeNull": false,
          "description": "Identifier of the operation",
          "readOnly": false,
          "required": false,
          "type": "uuid"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Operation owner's service name",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.ManagementInterfaceEnum": {
      "description": "The management interface of this Dedicated Cloud",
      "enum": [
        "azure",
        "openstack",
        "systemcenter",
        "vcloud",
        "vcsa",
        "vsphere"
      ],
      "enumType": "string",
      "id": "ManagementInterfaceEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.Nsx": {
      "description": "VMware NSX-V option",
      "id": "Nsx",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        },
        "url": {
          "canBeNull": true,
          "description": "Url of the NSX API",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.Nsxt": {
      "description": "VMware NSX-T option",
      "id": "Nsxt",
      "namespace": "dedicatedCloud",
      "properties": {
        "datacentersState": {
          "canBeNull": true,
          "description": "Installation status on all datacenters",
          "fullType": "dedicatedCloud.option.DatacenterOptionState[]",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.DatacenterOptionState[]"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the NSX-T option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        },
        "url": {
          "canBeNull": true,
          "description": "Url of the NSX-T interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": true,
          "description": "Version of the NSX-T",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.NsxtEdge": {
      "description": "NSX Edge",
      "id": "NsxtEdge",
      "namespace": "dedicatedCloud",
      "properties": {
        "diskLocation": {
          "canBeNull": true,
          "description": "Location of NSX Edge disks",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP of the NSX Edge",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "moRef": {
          "canBeNull": true,
          "description": "The VMware MoRef of the NSX Edge",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the NSX Edge",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nsxtEdgeId": {
          "canBeNull": false,
          "description": "Id of the NSX Edge",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of the NSX Edge",
          "fullType": "dedicatedCloud.nsxt.NsxtEdgeSizeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.nsxt.NsxtEdgeSizeEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the NSX Edge",
          "fullType": "dedicatedCloud.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.StateEnum"
        }
      }
    },
    "dedicatedCloud.NsxtEdgeResilience": {
      "description": "NSX Edge resilience test status",
      "id": "NsxtEdgeResilience",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.ObjectRight": {
      "description": "User object right",
      "id": "ObjectRight",
      "namespace": "dedicatedCloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the object",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "objectRightId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "propagate": {
          "canBeNull": false,
          "description": "Right propagation on children objects",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "right": {
          "canBeNull": false,
          "description": "User access on the VMware object",
          "fullType": "dedicatedCloud.right.RightEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.right.RightEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the object",
          "fullType": "dedicatedCloud.right.UserObjectRightTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.right.UserObjectRightTypeEnum"
        },
        "vmwareObjectId": {
          "canBeNull": false,
          "description": "The VMware MoRef of the object",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.Os": {
      "description": "Hypervisor",
      "id": "Os",
      "namespace": "dedicatedCloud",
      "properties": {
        "fullName": {
          "canBeNull": false,
          "description": "Full name of hypervisor",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastModificationDate": {
          "canBeNull": false,
          "description": "Last modification of hypervisor",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "shortName": {
          "canBeNull": false,
          "description": "Short name of hypervisor",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.PccStockProfile": {
      "description": "PCC and their availability",
      "id": "PccStockProfile",
      "namespace": "dedicatedCloud",
      "properties": {
        "count": {
          "canBeNull": false,
          "description": "Available PCC",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "mode": {
          "canBeNull": false,
          "description": "Kind of hypervisor",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "realVersion": {
          "canBeNull": false,
          "description": "Hypervisor version",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.PccZone": {
      "description": "Hosting location",
      "id": "PccZone",
      "namespace": "dedicatedCloud",
      "properties": {
        "city": {
          "canBeNull": false,
          "description": "Name of City",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": false,
          "description": "Country code",
          "fullType": "nichandle.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of pccZone",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "pccZone": {
          "canBeNull": false,
          "description": "Name of pccZone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.PciDss": {
      "description": "PCI-DSS certification option",
      "id": "PciDss",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.PrivateGateway": {
      "description": "Private management gateway",
      "id": "PrivateGateway",
      "namespace": "dedicatedCloud",
      "properties": {
        "customerIp": {
          "canBeNull": true,
          "description": "Ip set on your private gateway in your network",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "customerNetmask": {
          "canBeNull": true,
          "description": "Your netmask set on the private gateway",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "customerPortGroup": {
          "canBeNull": true,
          "description": "Portgroup in your VMware on OVHcloud used to deploy the private gateway",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.RestorePoint": {
      "description": "Restore point",
      "id": "RestorePoint",
      "namespace": "dedicatedCloud",
      "properties": {
        "creationTime": {
          "canBeNull": true,
          "description": "Creation time of the restore point",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isCorrupted": {
          "canBeNull": false,
          "description": "Show if the restore point is corrupted",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "restorePointId": {
          "canBeNull": false,
          "description": "Id of the restore point.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "restorePointSize": {
          "canBeNull": false,
          "description": "Size of the restore point",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of the restore point",
          "fullType": "dedicatedCloud.backup.BackupTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.backup.BackupTypeEnum"
        }
      }
    },
    "dedicatedCloud.Right": {
      "description": "User datacenter right",
      "id": "Right",
      "namespace": "dedicatedCloud",
      "properties": {
        "canAddRessource": {
          "canBeNull": false,
          "description": "Determine if the user can add ressources in your VMware on OVHcloud",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "datacenterId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "networkRole": {
          "canBeNull": false,
          "description": "Determine how this user can interact with the VMware on OVHcloud V(x)Lans",
          "fullType": "dedicatedCloud.right.NetworkRoleEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.right.NetworkRoleEnum"
        },
        "right": {
          "canBeNull": false,
          "description": "Determine what kind of access the User will have in this Datacenter of your VMware on OVHcloud",
          "fullType": "dedicatedCloud.right.RightEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.right.RightEnum"
        },
        "rightId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vmNetworkRole": {
          "canBeNull": false,
          "description": "Determine how this user can interact with the VMware on OVHcloud VM Network",
          "fullType": "dedicatedCloud.right.VmNetworkRoleEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.right.VmNetworkRoleEnum"
        }
      }
    },
    "dedicatedCloud.Robot": {
      "description": "Robot",
      "id": "Robot",
      "namespace": "dedicatedCloud",
      "properties": {
        "criticity": {
          "canBeNull": false,
          "description": "The criticity of this robot",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of this robot",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "enabled": {
          "canBeNull": false,
          "description": "Is this robot enabled",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "The name of this robot",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "The type of this robot",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.SecurityOption": {
      "description": "Security option",
      "id": "SecurityOption",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of security options",
          "fullType": "dedicatedCloud.securityOption.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.securityOption.StateEnum"
        }
      }
    },
    "dedicatedCloud.ServicePack": {
      "description": "Service pack",
      "id": "ServicePack",
      "namespace": "dedicatedCloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the Service Pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Options available in the Service Pack",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "dedicatedCloud.StateEnum": {
      "description": "All states a Dedicated Cloud can be in",
      "enum": [
        "available",
        "delivered",
        "disabled",
        "disabling",
        "error",
        "migrating",
        "provisionning",
        "recycling",
        "reserved",
        "toDisable",
        "toProvision",
        "toRecycle",
        "toRemove",
        "toUnprovision",
        "unprovisionning",
        "upgrading"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.SyslogForward": {
      "description": "Log forward to syslog option",
      "id": "SyslogForward",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.SyslogForwardAccessNetwork": {
      "description": "Forward logs from your PCC infrastructure to your syslog",
      "id": "SyslogForwardAccessNetwork",
      "namespace": "dedicatedCloud",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Log forwarding description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP address of the remote service",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "logForwardId": {
          "canBeNull": false,
          "description": "Id of the log forwarder",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "logLevel": {
          "canBeNull": false,
          "description": "Minimal log level",
          "fullType": "dedicatedCloud.syslogForward.LogLevelEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.syslogForward.LogLevelEnum"
        },
        "noSsl": {
          "canBeNull": false,
          "description": "Use unsecure log forwarding",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "servicePort": {
          "canBeNull": false,
          "description": "Remote service port",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sourceType": {
          "canBeNull": false,
          "description": "Possible log sources type",
          "fullType": "dedicatedCloud.syslogForward.SourceTypeEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.syslogForward.SourceTypeEnum[]"
        },
        "sslThumbprint": {
          "canBeNull": true,
          "description": "SSL thumbprint of the remote service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Log fowarder state",
          "fullType": "dedicatedCloud.optionAccessNetwork.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.optionAccessNetwork.StateEnum"
        }
      }
    },
    "dedicatedCloud.Task": {
      "description": "Operation",
      "id": "Task",
      "namespace": "dedicatedCloud",
      "properties": {
        "createdBy": {
          "canBeNull": true,
          "description": "Creator of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "createdFrom": {
          "canBeNull": true,
          "description": "Origin of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "datacenterId": {
          "canBeNull": true,
          "description": "datacenterId of the associated dedicatedCloud.Datacenter object",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": true,
          "description": "Current progress description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "endDate": {
          "canBeNull": true,
          "description": "Task end date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "executionDate": {
          "canBeNull": false,
          "description": "Task execution date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "filerId": {
          "canBeNull": true,
          "description": "filerId of the associated dedicatedCloud.Filer object",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "hostId": {
          "canBeNull": true,
          "description": "hostId of the associated dedicatedCloud.Host object",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastModificationDate": {
          "canBeNull": true,
          "description": "Task last modification date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "maintenanceDateFrom": {
          "canBeNull": true,
          "description": "Maintenance task min allowed execution date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "maintenanceDateTo": {
          "canBeNull": true,
          "description": "Maintenance task max allowed execution date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Task name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "network": {
          "canBeNull": true,
          "description": "network of the associated dedicatedCloud.Ip object",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "networkAccessId": {
          "canBeNull": true,
          "description": "networkAccessId of the associated dedicatedCloud.AllowedNetwork object",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "orderId": {
          "canBeNull": true,
          "description": "orderId of the associated billing.Order object",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "parentTaskId": {
          "canBeNull": true,
          "description": "taskId of the parent dedicatedCloud.Task object",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "progress": {
          "canBeNull": false,
          "description": "Current progress",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Current Task state",
          "fullType": "dedicatedCloud.TaskStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.TaskStateEnum"
        },
        "taskId": {
          "canBeNull": false,
          "description": "Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Task type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "userId": {
          "canBeNull": true,
          "description": "userId of the associated dedicatedCloud.User object",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vlanId": {
          "canBeNull": true,
          "description": "vlanId of the parent dedicatedCloud.Vlan object",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.TaskStateEnum": {
      "description": "All states a Dedicated Cloud Task can be in",
      "enum": [
        "canceled",
        "doing",
        "done",
        "error",
        "fixing",
        "toCancel",
        "toCreate",
        "todo",
        "unknown",
        "waitingForChilds",
        "waitingTodo"
      ],
      "enumType": "string",
      "id": "TaskStateEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.TwoFAWhitelistStateEnum": {
      "description": "All states a Dedicated Cloud two factor authentication whitelist can be in",
      "enum": [
        "enabled",
        "enabling",
        "error",
        "migrating",
        "removed",
        "removing"
      ],
      "enumType": "string",
      "id": "TwoFAWhitelistStateEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.User": {
      "description": "User",
      "id": "User",
      "namespace": "dedicatedCloud",
      "properties": {
        "activationState": {
          "canBeNull": true,
          "description": "Activation state of the user account",
          "fullType": "dedicatedCloud.user.ActivationStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.user.ActivationStateEnum"
        },
        "activeDirectoryId": {
          "canBeNull": true,
          "description": "Deprecated - Linked Federation Active Directory (if any)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "activeDirectoryType": {
          "canBeNull": true,
          "description": "Deprecated - Federation Active Directory User type (if any)",
          "fullType": "dedicatedCloud.user.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.user.TypeEnum"
        },
        "canManageIpFailOvers": {
          "canBeNull": false,
          "description": "Defines if the user can manage ip failovers",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canManageNetwork": {
          "canBeNull": false,
          "description": "Defines if the user can manage the network",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canManageRights": {
          "canBeNull": false,
          "description": "Defines if the user can manage users rights",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "email": {
          "canBeNull": true,
          "description": "Email address of the user",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "encryptionRight": {
          "canBeNull": false,
          "description": "Defines if the user can manage encryption / KMS configuration",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "firstName": {
          "canBeNull": true,
          "description": "First name of the user",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "fullAdminRo": {
          "canBeNull": false,
          "description": "Defines if the user is a full admin in readonly",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "identityProviderId": {
          "canBeNull": true,
          "description": "Linked Identity Provider (if any), can be Federation Active Directory or IAM",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "identityProviderType": {
          "canBeNull": true,
          "description": "Linked Identity Provider type (if any), can be Federation Active Directory or IAM",
          "fullType": "dedicatedCloud.user.IdentityProviderTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.user.IdentityProviderTypeEnum"
        },
        "isEnableManageable": {
          "canBeNull": false,
          "description": "Check if the given VMware on OVHcloud user can be enabled or disabled ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isTokenValidator": {
          "canBeNull": false,
          "description": "Defines if the user can confirm security tokens (if a compatible option is enabled)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastName": {
          "canBeNull": true,
          "description": "Last name of the user",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "login": {
          "canBeNull": false,
          "description": "Login of the user",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the user",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nsxRight": {
          "canBeNull": false,
          "description": "Is this User able to access nsx interface (requires NSX option)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "phoneNumber": {
          "canBeNull": true,
          "description": "Mobile phone number of the user",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "receiveAlerts": {
          "canBeNull": false,
          "description": "Defines if the user receives technical alerts",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the user account",
          "fullType": "dedicatedCloud.user.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.user.StateEnum"
        },
        "type": {
          "canBeNull": true,
          "description": "User type (if any)",
          "fullType": "dedicatedCloud.user.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.user.TypeEnum"
        },
        "userId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.UserAccessPolicyEnum": {
      "description": "Open or restricted access to management interface ?",
      "enum": [
        "filtered",
        "open"
      ],
      "enumType": "string",
      "id": "UserAccessPolicyEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.UserLogoutPolicyEnum": {
      "description": "Which user will be disconnected first in case of quota of maximum connection is reached",
      "enum": [
        "first",
        "last"
      ],
      "enumType": "string",
      "id": "UserLogoutPolicyEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.VMEncryption": {
      "description": "Virtual machine encryption option",
      "id": "VMEncryption",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.VMEncryptionAccessNetwork": {
      "description": "Virtual machine encryption KMS server",
      "id": "VMEncryptionAccessNetwork",
      "namespace": "dedicatedCloud",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description of your option access network",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP address of the remote service",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "kmsId": {
          "canBeNull": false,
          "description": "Id of the VM Encryption KMS",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "kmsTcpPort": {
          "canBeNull": false,
          "description": "VM Encryption KMS TCP port",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sslThumbprint": {
          "canBeNull": false,
          "description": "SSL thumbprint of the remote service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.optionAccessNetwork.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.optionAccessNetwork.StateEnum"
        }
      }
    },
    "dedicatedCloud.Vendor": {
      "description": "Vendor information",
      "id": "Vendor",
      "namespace": "dedicatedCloud",
      "properties": {
        "vendorName": {
          "canBeNull": false,
          "description": "name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.VendorObjectTypeEnum": {
      "description": "Dedicated Cloud vendors objects types",
      "enum": [
        "cluster",
        "datacenter",
        "filer",
        "host",
        "vm"
      ],
      "enumType": "string",
      "id": "VendorObjectTypeEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.Version": {
      "description": "Detailed version",
      "id": "Version",
      "namespace": "dedicatedCloud",
      "properties": {
        "build": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "major": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "minor": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.Vlan": {
      "description": "vLAN",
      "id": "Vlan",
      "namespace": "dedicatedCloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "routingRateLimit": {
          "canBeNull": false,
          "description": "Speed in Mbps",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "fullType": "dedicatedCloud.vlan.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.vlan.StateEnum"
        },
        "type": {
          "canBeNull": false,
          "fullType": "dedicatedCloud.vlan.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.vlan.TypeEnum"
        },
        "vlanId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vlanNumber": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.Vm": {
      "description": "Virtual machine",
      "id": "Vm",
      "namespace": "dedicatedCloud",
      "properties": {
        "backup": {
          "canBeNull": true,
          "description": "Backup associated to this Virtual Machine",
          "fullType": "dedicatedCloud.backup.Backup",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.backup.Backup"
        },
        "cdroms": {
          "canBeNull": true,
          "description": "Virtual machine cdroms devices",
          "fullType": "dedicatedCloud.virtualMachineCdrom[]",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.virtualMachineCdrom[]"
        },
        "clusterName": {
          "canBeNull": true,
          "description": "Cluster of the virtual machine.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cpuMax": {
          "canBeNull": true,
          "description": "Maximum CPU performance, in MHz.",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "cpuNum": {
          "canBeNull": true,
          "description": "Number of processors in the virtual machine.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "cpuReady": {
          "canBeNull": true,
          "description": "Time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In millisecond",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "cpuReadyPercent": {
          "canBeNull": true,
          "description": "Percentage of time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In percent",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "cpuUsed": {
          "canBeNull": true,
          "description": "Current CPU performance, in MHz.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "filers": {
          "canBeNull": true,
          "description": "List of filers in use by the virtual machine.",
          "fullType": "dedicatedCloud.vmFiler[]",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.vmFiler[]"
        },
        "folderName": {
          "canBeNull": true,
          "description": "Folder of the virtual machine.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "guestOsFamily": {
          "canBeNull": true,
          "description": "VMware guest configured OS family",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostName": {
          "canBeNull": true,
          "description": "Name of the host hosting the virtual machine.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "license": {
          "canBeNull": true,
          "description": "Registered managed license",
          "fullType": "dedicatedCloud.spla.KmsLicenseIncludingLegacyEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.spla.KmsLicenseIncludingLegacyEnum"
        },
        "memoryMax": {
          "canBeNull": true,
          "description": "Memory size of the virtual machine, in MB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "memoryTps": {
          "canBeNull": true,
          "description": "Amount of guest memory that is shared with other virtual machines, in Mb",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "memoryUsed": {
          "canBeNull": true,
          "description": "Current memory utilization, in MB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "moRef": {
          "canBeNull": false,
          "description": "moRef of the virtual machine.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the virtual machine.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "netPacketRx": {
          "canBeNull": true,
          "description": "Number of packets received.",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "netPacketTx": {
          "canBeNull": true,
          "description": "Number of packets transmitted.",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "netRx": {
          "canBeNull": true,
          "description": "Rate at which data is received. In KB/s",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "netTx": {
          "canBeNull": true,
          "description": "Rate at which data is transmitted. In KB/s",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "networks": {
          "canBeNull": true,
          "description": "List of the networks link to this virtual machine",
          "fullType": "dedicatedCloud.vmNetwork[]",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.vmNetwork[]"
        },
        "powerState": {
          "canBeNull": false,
          "description": "Power state of the virtual machine.",
          "fullType": "dedicatedCloud.virtualMachinePowerState",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.virtualMachinePowerState"
        },
        "readLatency": {
          "canBeNull": true,
          "description": "Amount of time for a read operation from the virtual disk. In millisecond",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "readPerSecond": {
          "canBeNull": true,
          "description": "Number of read issued per second to the virtual disk. In millisecond",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "readRate": {
          "canBeNull": true,
          "description": "Rate of reading data from the virtual disk. In KB/s",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "roleFt": {
          "canBeNull": true,
          "description": "The index of the current VM in instanceUuids array starting from 1, so 1 means that it is the primary VM.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "snapshotNum": {
          "canBeNull": true,
          "description": "Number of snapshot of the virtual machine.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "stateFt": {
          "canBeNull": true,
          "description": "The fault tolerance state of the virtual machine.",
          "fullType": "dedicatedCloud.virtualMachineFaultToleranceState",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.virtualMachineFaultToleranceState"
        },
        "vmId": {
          "canBeNull": false,
          "description": "Id of the virtual machine.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vmwareTools": {
          "canBeNull": true,
          "description": "Current version status of VMware Tools in the guest operating system.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vmwareToolsVersion": {
          "canBeNull": true,
          "description": "Current version of VMware Tools",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "writeLatency": {
          "canBeNull": true,
          "description": "Amount of time for a write operation from the virtual disk. In millisecond",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "writePerSecond": {
          "canBeNull": true,
          "description": "Number of write issued per second to the virtual disk. In millisecond",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "writeRate": {
          "canBeNull": true,
          "description": "Rate of writing data from the virtual disk. In KB/s",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "dedicatedCloud.Vrops": {
      "description": "VMware Aria Operations option",
      "id": "Vrops",
      "namespace": "dedicatedCloud",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "State of the option",
          "fullType": "dedicatedCloud.option.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        },
        "upgrades": {
          "canBeNull": true,
          "description": "Available upgrades for Aria Operations",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "url": {
          "canBeNull": true,
          "description": "Url of Aria Operations interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vROpsPublicIP": {
          "canBeNull": true,
          "description": "VMware Aria Operation public IP",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "version": {
          "canBeNull": true,
          "description": "Version of Aria Operations",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.VropsOutgoingFlow": {
      "description": "VMware Aria Operations outgoing flows",
      "id": "VropsOutgoingFlow",
      "namespace": "dedicatedCloud",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Outgoing flow description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP address of the remote service",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "outgoingFlowId": {
          "canBeNull": false,
          "description": "Id of the VMware Aria Operations outgoing flow",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "servicePort": {
          "canBeNull": false,
          "description": "Remote service port (25, 465, 587 or 2525)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Outgoing flow state",
          "fullType": "dedicatedCloud.optionAccessNetwork.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.optionAccessNetwork.StateEnum"
        }
      }
    },
    "dedicatedCloud.VsanDatastore": {
      "description": "vSAN datastore",
      "id": "VsanDatastore",
      "namespace": "dedicatedCloud",
      "properties": {
        "clusterId": {
          "canBeNull": false,
          "description": "Id of Cluster.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "connectionState": {
          "canBeNull": true,
          "description": "Datastore connection state.",
          "fullType": "dedicatedCloud.filer.ConnexionStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.filer.ConnexionStateEnum"
        },
        "datacenterId": {
          "canBeNull": false,
          "description": "Id of the datacenter.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "datastoreId": {
          "canBeNull": false,
          "description": "Id of the vsan datastore.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "datastoreName": {
          "canBeNull": false,
          "description": "Name of the datastore.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "spaceFree": {
          "canBeNull": true,
          "description": "Available space of this datastore, in GB",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "spaceProvisioned": {
          "canBeNull": true,
          "description": "Provisioned space of this datastore, in GB",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "spaceUsed": {
          "canBeNull": true,
          "description": "Used Space of this datastore, in GB",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "vmTotal": {
          "canBeNull": true,
          "description": "Number of virtual machine on the datastore",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.ZpoolStockProfile": {
      "description": "Zpool and their availability",
      "id": "ZpoolStockProfile",
      "namespace": "dedicatedCloud",
      "properties": {
        "minimumAvailability": {
          "canBeNull": false,
          "description": "Minimum accepted available zpools",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "profile": {
          "canBeNull": false,
          "description": "Reference of zpool",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "realCount": {
          "canBeNull": false,
          "description": "Available zpools",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.backup.Backup": {
      "description": "Details about a backup",
      "id": "Backup",
      "namespace": "dedicatedCloud.backup",
      "properties": {
        "allocatedDisk": {
          "canBeNull": true,
          "description": "Disk space allocated to the virtual machine (in GB)",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "backupDays": {
          "canBeNull": true,
          "description": "List of days your Virtual Machine will be backuped",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.backup.BackupDaysEnum[]"
        },
        "backupRepositoryId": {
          "canBeNull": true,
          "description": "Associated backup repository Id",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "encryption": {
          "canBeNull": true,
          "description": "Backup is encrypted",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "lastCreationTime": {
          "canBeNull": true,
          "description": "Last creation time of the backup job",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "lastDuration": {
          "canBeNull": true,
          "description": "Last duration of the backup job",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "lastResult": {
          "canBeNull": true,
          "description": "Last result of the backup job",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.backup.JobStateEnum"
        },
        "lastSuccessfulCreationTime": {
          "canBeNull": true,
          "description": "Last successful creation time of the backup job",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "lastSuccessfulDuration": {
          "canBeNull": true,
          "description": "Last successful duration of the backup job",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "offerType": {
          "canBeNull": true,
          "description": "Offer type of the backup job",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.backup.OfferTypeEnum"
        },
        "restorePoints": {
          "canBeNull": true,
          "description": "Restore points of this backup job",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.backup.RestorePoint[]"
        },
        "retentionTime": {
          "canBeNull": true,
          "description": "Number of days before the backup is deleted",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": true,
          "description": "State of the backup job",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.backup.StateEnum"
        }
      }
    },
    "dedicatedCloud.backup.BackupCapabilities": {
      "description": "Details about BackupCapabilities",
      "id": "BackupCapabilities",
      "namespace": "dedicatedCloud.backup",
      "properties": {
        "backupDays": {
          "canBeNull": false,
          "description": "Customized backup days",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "customReport": {
          "canBeNull": false,
          "description": "Customized Backup report",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "dedicatedProxy": {
          "canBeNull": false,
          "description": "Indicates additional backup proxy for large disk size VM",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "encryption": {
          "canBeNull": false,
          "description": "Indicates if backup will be encrypted",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "mailAddress": {
          "canBeNull": false,
          "description": "Indicates if customer can add an additional email address for backup report",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "minimumFullBackups": {
          "canBeNull": false,
          "description": "Minimum number of full backups",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "offerName": {
          "canBeNull": false,
          "description": "Name of offer type",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "proxyPerHost": {
          "canBeNull": false,
          "description": "Backup Proxy per host",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "replication": {
          "canBeNull": false,
          "description": "Backup Replication enabled",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "retention": {
          "canBeNull": false,
          "description": "Restore points",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "scheduleHour": {
          "canBeNull": false,
          "description": "Scheduled hour of backup start customizable",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicatedCloud.backup.BackupDaysEnum": {
      "description": "All the possible Days of Backup",
      "enum": [
        "Friday",
        "Monday",
        "Saturday",
        "Sunday",
        "Thursday",
        "Tuesday",
        "Wednesday"
      ],
      "enumType": "string",
      "id": "BackupDaysEnum",
      "namespace": "dedicatedCloud.backup"
    },
    "dedicatedCloud.backup.BackupTypeEnum": {
      "description": "All the type of a restore point",
      "enum": [
        "full",
        "incremental"
      ],
      "enumType": "string",
      "id": "BackupTypeEnum",
      "namespace": "dedicatedCloud.backup"
    },
    "dedicatedCloud.backup.JobStateEnum": {
      "description": "State of the backup job",
      "enum": [
        "failed",
        "running",
        "stopped",
        "stopping",
        "success",
        "unknown",
        "warning"
      ],
      "enumType": "string",
      "id": "JobStateEnum",
      "namespace": "dedicatedCloud.backup"
    },
    "dedicatedCloud.backup.OfferTypeEnum": {
      "description": "All the offer type of the backup",
      "enum": [
        "advanced",
        "backup",
        "classic",
        "legacy",
        "premium"
      ],
      "enumType": "string",
      "id": "OfferTypeEnum",
      "namespace": "dedicatedCloud.backup"
    },
    "dedicatedCloud.backup.OptimizeMessageEnum": {
      "description": "All messages descriptions for the proxies optimization",
      "enum": [
        "hasMoreBackupJobs",
        "hasMoreProxies",
        "hasSufficientProxies",
        "noBackupJobs"
      ],
      "enumType": "string",
      "id": "OptimizeMessageEnum",
      "namespace": "dedicatedCloud.backup"
    },
    "dedicatedCloud.backup.OptimizeProxies": {
      "description": "Details about proxies Optimization",
      "id": "OptimizeProxies",
      "namespace": "dedicatedCloud.backup",
      "properties": {
        "message": {
          "canBeNull": false,
          "description": "Brief information about recommendation",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.backup.OptimizeMessageEnum"
        },
        "numberOfProxiesDeployed": {
          "canBeNull": false,
          "description": "Number of proxies deployed in the Datacenter",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "numberOfProxiesImpact": {
          "canBeNull": false,
          "description": "Number of proxies get impacted by recommendation",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "recommendation": {
          "canBeNull": false,
          "description": "Action recommended for the optimization",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.backup.OptimizeRecommendationEnum"
        }
      }
    },
    "dedicatedCloud.backup.OptimizeRecommendationEnum": {
      "description": "All recommendations for the proxies optimization",
      "enum": [
        "add",
        "optimized",
        "remove"
      ],
      "enumType": "string",
      "id": "OptimizeRecommendationEnum",
      "namespace": "dedicatedCloud.backup"
    },
    "dedicatedCloud.backup.ReplicationSyncStatus": {
      "description": "All possible replication sync status",
      "enum": [
        "ok",
        "out-of-sync",
        "sync-required",
        "unknown"
      ],
      "enumType": "string",
      "id": "ReplicationSyncStatus",
      "namespace": "dedicatedCloud.backup"
    },
    "dedicatedCloud.backup.RestorePoint": {
      "description": "Details about a restore point",
      "id": "RestorePoint",
      "namespace": "dedicatedCloud.backup",
      "properties": {
        "creationTime": {
          "canBeNull": true,
          "description": "Creation time of the restore point",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "isCorrupted": {
          "canBeNull": true,
          "description": "Show if the restore point is corrupted",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "restorePointId": {
          "canBeNull": false,
          "description": "Id of the restore point",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "size": {
          "canBeNull": true,
          "description": "Size of the restore point",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of the restore point",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.backup.BackupTypeEnum"
        }
      }
    },
    "dedicatedCloud.backup.StateEnum": {
      "description": "All the state of the backup",
      "enum": [
        "deleting",
        "delivered",
        "disabled",
        "disabling",
        "enabling",
        "error",
        "migrating",
        "pending",
        "removed",
        "stopping",
        "toCreate",
        "toDelete",
        "toDisable",
        "toEnable",
        "toStop",
        "unknown"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicatedCloud.backup"
    },
    "dedicatedCloud.capabilities.FeatureStatusEnum": {
      "description": "All Dedicated Cloud feature status available",
      "enum": [
        "active",
        "comingSoon",
        "no"
      ],
      "enumType": "string",
      "id": "FeatureStatusEnum",
      "namespace": "dedicatedCloud.capabilities"
    },
    "dedicatedCloud.cluster.AutoScale": {
      "description": "Details about AutoScale",
      "id": "AutoScale",
      "namespace": "dedicatedCloud.cluster",
      "properties": {
        "autoScaleInHost": {
          "canBeNull": false,
          "description": "Mode of Auto Scale-In Host operation",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.cluster.AutoScaleModeEnum"
        },
        "autoScaleOutHost": {
          "canBeNull": false,
          "description": "Mode of Auto Scale-Out Host operation",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.cluster.AutoScaleModeEnum"
        },
        "autoScaleOutStorage": {
          "canBeNull": false,
          "description": "Mode of Auto Scale-Out Storage operation",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.cluster.AutoScaleModeEnum"
        },
        "configId": {
          "canBeNull": false,
          "description": "AutoScale configuration id",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the AutoScale Service",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "inMaintenanceMode": {
          "canBeNull": false,
          "description": "Maintenace Mode for AutoScale service",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the Autoscale service",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.cluster.AutoScaleModeEnum": {
      "description": "Modes of the AutoScale service",
      "enum": [
        "automatic",
        "manual"
      ],
      "enumType": "string",
      "id": "AutoScaleModeEnum",
      "namespace": "dedicatedCloud.cluster"
    },
    "dedicatedCloud.cluster.ClusterConfigsStatusEnum": {
      "description": "Config status of the cluster",
      "enum": [
        "disabled",
        "enabled",
        "unknown"
      ],
      "enumType": "string",
      "id": "ClusterConfigsStatusEnum",
      "namespace": "dedicatedCloud.cluster"
    },
    "dedicatedCloud.cluster.ClusterDrsModeEnum": {
      "description": "Config status of the cluster",
      "enum": [
        "fullyAutomated",
        "manual",
        "partiallyAutomated"
      ],
      "enumType": "string",
      "id": "ClusterDrsModeEnum",
      "namespace": "dedicatedCloud.cluster"
    },
    "dedicatedCloud.compliantRanges": {
      "description": "compliant range information",
      "id": "compliantRanges",
      "namespace": "dedicatedCloud",
      "properties": {
        "addons": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.requiredAddon[]"
        },
        "estimateRequired": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "upgradeCode": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "upgradeRequired": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicatedCloud.dedicatedCloud": {
      "description": "VMware on OVHcloud",
      "id": "dedicatedCloud",
      "namespace": "dedicatedCloud",
      "properties": {
        "advancedSecurity": {
          "canBeNull": false,
          "description": "Advanced security state",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "bandwidth": {
          "canBeNull": false,
          "description": "The current bandwidth of your VMware on OVHcloud",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "billingType": {
          "canBeNull": false,
          "description": "Billing type of your VMware on OVHcloud",
          "fullType": "dedicatedCloud.BillingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.BillingTypeEnum"
        },
        "canMigrateToVCD": {
          "canBeNull": false,
          "description": "Can the PCC be migrated to VCD",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "certifiedInterfaceUrl": {
          "canBeNull": false,
          "description": "Url to the VMware on OVHcloud certified interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "commercialRange": {
          "canBeNull": false,
          "description": "The current version of your VMware on OVHcloud",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of your VMware on OVHcloud",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "generation": {
          "canBeNull": false,
          "description": "Generation of your VMware on OVHcloud",
          "fullType": "dedicatedCloud.GenerationEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.GenerationEnum"
        },
        "location": {
          "canBeNull": false,
          "description": "Datacenter where your VMware on OVHcloud is physically located",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "managementInterface": {
          "canBeNull": false,
          "description": "The management interface name",
          "fullType": "dedicatedCloud.ManagementInterfaceEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.ManagementInterfaceEnum"
        },
        "productReference": {
          "canBeNull": false,
          "description": "The reference universe information for your VMware on OVHcloud",
          "fullType": "dedicatedCloud.productReferenceEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.productReferenceEnum"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Service name of your VMware on OVHcloud",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "servicePackName": {
          "canBeNull": true,
          "description": "Name of the current service pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "spla": {
          "canBeNull": false,
          "description": "SPLA licensing state",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "sslV3": {
          "canBeNull": true,
          "description": "Enable SSL v3 support. Warning : this option is not recommended as it was recognized as a security breach. If this is enabled, we advise you to enable the filtered User access policy",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your VMware on OVHcloud",
          "fullType": "dedicatedCloud.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.StateEnum"
        },
        "userAccessPolicy": {
          "canBeNull": false,
          "description": "Access policy of your VMware on OVHcloud : opened to every IPs or filtered",
          "fullType": "dedicatedCloud.UserAccessPolicyEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.UserAccessPolicyEnum"
        },
        "userLimitConcurrentSession": {
          "canBeNull": false,
          "description": "The maximum amount of connected users allowed on the VMware on OVHcloud management interface",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "userLogoutPolicy": {
          "canBeNull": false,
          "fullType": "dedicatedCloud.UserLogoutPolicyEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.UserLogoutPolicyEnum"
        },
        "userSessionTimeout": {
          "canBeNull": false,
          "description": "The timeout (in seconds) for the user sessions on the VMware on OVHcloud management interface. 0 value disable the timeout",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "vScopeUrl": {
          "canBeNull": false,
          "description": "Url to the VMware on OVHcloud vScope interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": "Version of the management interface",
          "fullType": "dedicatedCloud.Version",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.Version"
        },
        "webInterfaceUrl": {
          "canBeNull": false,
          "description": "Url to the VMware on OVHcloud web interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.dedicatedCloudWithIAM": {
      "description": "VMware on OVHcloud",
      "id": "dedicatedCloud",
      "namespace": "dedicatedCloud",
      "properties": {
        "advancedSecurity": {
          "canBeNull": false,
          "description": "Advanced security state",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "bandwidth": {
          "canBeNull": false,
          "description": "The current bandwidth of your VMware on OVHcloud",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "billingType": {
          "canBeNull": false,
          "description": "Billing type of your VMware on OVHcloud",
          "fullType": "dedicatedCloud.BillingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.BillingTypeEnum"
        },
        "canMigrateToVCD": {
          "canBeNull": false,
          "description": "Can the PCC be migrated to VCD",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "certifiedInterfaceUrl": {
          "canBeNull": false,
          "description": "Url to the VMware on OVHcloud certified interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "commercialRange": {
          "canBeNull": false,
          "description": "The current version of your VMware on OVHcloud",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of your VMware on OVHcloud",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "generation": {
          "canBeNull": false,
          "description": "Generation of your VMware on OVHcloud",
          "fullType": "dedicatedCloud.GenerationEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.GenerationEnum"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "location": {
          "canBeNull": false,
          "description": "Datacenter where your VMware on OVHcloud is physically located",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "managementInterface": {
          "canBeNull": false,
          "description": "The management interface name",
          "fullType": "dedicatedCloud.ManagementInterfaceEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.ManagementInterfaceEnum"
        },
        "productReference": {
          "canBeNull": false,
          "description": "The reference universe information for your VMware on OVHcloud",
          "fullType": "dedicatedCloud.productReferenceEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.productReferenceEnum"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Service name of your VMware on OVHcloud",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "servicePackName": {
          "canBeNull": true,
          "description": "Name of the current service pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "spla": {
          "canBeNull": false,
          "description": "SPLA licensing state",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "sslV3": {
          "canBeNull": true,
          "description": "Enable SSL v3 support. Warning : this option is not recommended as it was recognized as a security breach. If this is enabled, we advise you to enable the filtered User access policy",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your VMware on OVHcloud",
          "fullType": "dedicatedCloud.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.StateEnum"
        },
        "userAccessPolicy": {
          "canBeNull": false,
          "description": "Access policy of your VMware on OVHcloud : opened to every IPs or filtered",
          "fullType": "dedicatedCloud.UserAccessPolicyEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.UserAccessPolicyEnum"
        },
        "userLimitConcurrentSession": {
          "canBeNull": false,
          "description": "The maximum amount of connected users allowed on the VMware on OVHcloud management interface",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "userLogoutPolicy": {
          "canBeNull": false,
          "fullType": "dedicatedCloud.UserLogoutPolicyEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.UserLogoutPolicyEnum"
        },
        "userSessionTimeout": {
          "canBeNull": false,
          "description": "The timeout (in seconds) for the user sessions on the VMware on OVHcloud management interface. 0 value disable the timeout",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "vScopeUrl": {
          "canBeNull": false,
          "description": "Url to the VMware on OVHcloud vScope interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": "Version of the management interface",
          "fullType": "dedicatedCloud.Version",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.Version"
        },
        "webInterfaceUrl": {
          "canBeNull": false,
          "description": "Url to the VMware on OVHcloud web interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.disasterRecovery.DrpTypeEnum": {
      "description": "Disaster Recovery Plan Types",
      "enum": [
        "onPremise",
        "ovh"
      ],
      "enumType": "string",
      "id": "DrpTypeEnum",
      "namespace": "dedicatedCloud.disasterRecovery"
    },
    "dedicatedCloud.disasterRecovery.LocalSiteDetails": {
      "description": "Information on the local datacenter",
      "id": "LocalSiteDetails",
      "namespace": "dedicatedCloud.disasterRecovery",
      "properties": {
        "endpointPublicIp": {
          "canBeNull": true,
          "description": "Local tunnel endpoint public Ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "role": {
          "canBeNull": false,
          "description": "Zvm mode configured",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.disasterRecovery.SiteRoleEnum"
        },
        "state": {
          "canBeNull": true,
          "description": "State of the local Zvm",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.StateEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of hosting for the local datacenter",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.disasterRecovery.SiteTypeEnum"
        },
        "zertoVersion": {
          "canBeNull": false,
          "description": "Installed version of Zerto",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zvmIp": {
          "canBeNull": true,
          "description": "Local Network Ip of the Zerto virtual manager",
          "readOnly": false,
          "required": false,
          "type": "ip"
        }
      }
    },
    "dedicatedCloud.disasterRecovery.Profile": {
      "description": "State of the disaster recovery option",
      "id": "Profile",
      "namespace": "dedicatedCloud.disasterRecovery",
      "properties": {
        "drpType": {
          "canBeNull": true,
          "description": "Disaster Recovery Plan Type",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.disasterRecovery.DrpTypeEnum"
        },
        "localSiteInformation": {
          "canBeNull": true,
          "description": "Information about the site installed on this Dedicated Cloud",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.disasterRecovery.LocalSiteDetails"
        },
        "remoteSiteInformation": {
          "canBeNull": true,
          "description": "Information about the remote paired site",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.disasterRecovery.RemoteSiteDetails"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the disaster recovery service",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.StateEnum"
        },
        "systemVersion": {
          "canBeNull": false,
          "description": "Technical solution used",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.disasterRecovery.RemoteSiteDetails": {
      "description": "Information on the remote datacenter linked to the local one",
      "id": "RemoteSiteDetails",
      "namespace": "dedicatedCloud.disasterRecovery",
      "properties": {
        "datacenterId": {
          "canBeNull": true,
          "description": "Datacenter Id (if hosted by OVH)",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "datacenterName": {
          "canBeNull": true,
          "description": "Datacenter name (if hosted by OVH)",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastVpnConfig": {
          "canBeNull": true,
          "description": "Last VPN config change date (if type is onPremise)",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "remoteEndpointInternalIp": {
          "canBeNull": true,
          "description": "Stunnel endpoint internal IP (if type is onPremise)",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "remoteEndpointPublicIp": {
          "canBeNull": true,
          "description": "Stunnel endpoint public IP (if type is onPremise)",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "remoteZvmInternalIp": {
          "canBeNull": true,
          "description": "Remote ZVM IP (if type is onPremise)",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "role": {
          "canBeNull": true,
          "description": "Zvm mode configured",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.disasterRecovery.SiteRoleEnum"
        },
        "serviceName": {
          "canBeNull": true,
          "description": "Service name (if hosted by OVH)",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": true,
          "description": "State of the remote Zvm",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.StateEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of hosting for the remote datacenter",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.disasterRecovery.SiteTypeEnum"
        },
        "vpnConfigState": {
          "canBeNull": true,
          "description": "VPN configuration state (if type is onPremise)",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.disasterRecovery.VpnConfigStateEnum"
        },
        "zertoVersion": {
          "canBeNull": true,
          "description": "Installed version of Zerto",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.disasterRecovery.SiteRoleEnum": {
      "description": "Site manager configured mode",
      "enum": [
        "primary",
        "secondary",
        "single"
      ],
      "enumType": "string",
      "id": "SiteRoleEnum",
      "namespace": "dedicatedCloud.disasterRecovery"
    },
    "dedicatedCloud.disasterRecovery.SiteTypeEnum": {
      "description": "Site manager hosting type",
      "enum": [
        "onPremise",
        "ovhPrivateCloud"
      ],
      "enumType": "string",
      "id": "SiteTypeEnum",
      "namespace": "dedicatedCloud.disasterRecovery"
    },
    "dedicatedCloud.disasterRecovery.VpnConfigStateEnum": {
      "description": "Zerto VPN configuration state",
      "enum": [
        "configured",
        "configuring",
        "error",
        "notConfigured",
        "tunnelError"
      ],
      "enumType": "string",
      "id": "VpnConfigStateEnum",
      "namespace": "dedicatedCloud.disasterRecovery"
    },
    "dedicatedCloud.disasterRecovery.ZertoProtectedVm": {
      "description": "Information on virtual machine protected by Zerto",
      "id": "ZertoProtectedVm",
      "namespace": "dedicatedCloud.disasterRecovery",
      "properties": {
        "fromDate": {
          "canBeNull": false,
          "description": "Start of the backup for the requested period",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "protectedSite": {
          "canBeNull": false,
          "description": "Name of the site in which the VM is running",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "recoverySite": {
          "canBeNull": false,
          "description": "Name of the site where the VM is backed up",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vmId": {
          "canBeNull": false,
          "description": "ID of the protected VM",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vmName": {
          "canBeNull": false,
          "description": "Name of the protected VM",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vpgName": {
          "canBeNull": false,
          "description": "Name of the virtual protection group in which the VM is located",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.disasterRecovery.ZertoRemoteVra": {
      "description": "Zerto disaster recovery remote site",
      "id": "ZertoRemoteVra",
      "namespace": "dedicatedCloud.disasterRecovery",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "ID of the remote Vra Network",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "label": {
          "canBeNull": false,
          "description": "Name given to this network",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "remoteEndpointPublicIp": {
          "canBeNull": false,
          "description": "Your onsite endpoint public IP for the secured replication data tunnel",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "remoteVraNetwork": {
          "canBeNull": false,
          "description": "Internal zerto subnet of your onsite infrastructure (ip/cidr)",
          "readOnly": false,
          "required": false,
          "type": "ipBlock"
        },
        "remoteZvmInternalIp": {
          "canBeNull": false,
          "description": "Internal ZVM ip on your onsite infrastructure local network",
          "readOnly": false,
          "required": false,
          "type": "ip"
        }
      }
    },
    "dedicatedCloud.filer.ConnexionStateEnum": {
      "description": "Connexion states for a Dedicated Cloud Filer.",
      "enum": [
        "offline",
        "online"
      ],
      "enumType": "string",
      "id": "ConnexionStateEnum",
      "namespace": "dedicatedCloud.filer"
    },
    "dedicatedCloud.filer.FilerTypeEnum": {
      "description": "All types of filer that are available for restoring a VM",
      "enum": [
        "nas",
        "vsan"
      ],
      "enumType": "string",
      "id": "FilerTypeEnum",
      "namespace": "dedicatedCloud.filer"
    },
    "dedicatedCloud.filer.HourlyConsumption": {
      "description": "Hourly consumption of a filer",
      "id": "HourlyConsumption",
      "namespace": "dedicatedCloud.filer",
      "properties": {
        "consumption": {
          "canBeNull": false,
          "description": "Consumption of the Filer",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dedicatedCloud.filer.Location": {
      "description": "Location of the Filer",
      "id": "Location",
      "namespace": "dedicatedCloud.filer",
      "properties": {
        "datacenter": {
          "canBeNull": false,
          "description": "Datacenter of the Filer.",
          "readOnly": false,
          "required": false,
          "type": "dedicated.DatacenterEnum"
        },
        "rack": {
          "canBeNull": false,
          "description": "Rack of the slave Filer.",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "room": {
          "canBeNull": false,
          "description": "Room of the Filer.",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.filer.NodeTypeEnum": {
      "description": "All nodes types for a Filer",
      "enum": [
        "master",
        "slave"
      ],
      "enumType": "string",
      "id": "NodeTypeEnum",
      "namespace": "dedicatedCloud.filer"
    },
    "dedicatedCloud.filer.Profile": {
      "description": "A Filer profile",
      "id": "Profile",
      "namespace": "dedicatedCloud.filer",
      "properties": {
        "fullName": {
          "canBeNull": false,
          "description": "Human-Readable name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Commercial name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "dedicatedCloud.filer.StateEnum": {
      "description": "All states a Dedicated Cloud Filer can be in",
      "enum": [
        "adding",
        "delivered",
        "error",
        "removing",
        "unknown"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicatedCloud.filer"
    },
    "dedicatedCloud.host.HourlyConsumption": {
      "description": "Hourly consumption of a host",
      "id": "HourlyConsumption",
      "namespace": "dedicatedCloud.host",
      "properties": {
        "consumption": {
          "canBeNull": false,
          "description": "Consumption of the Host.",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update.",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dedicatedCloud.host.Location": {
      "description": "Location of the Host",
      "id": "Location",
      "namespace": "dedicatedCloud.host",
      "properties": {
        "datacenter": {
          "canBeNull": false,
          "description": "Datacenter of the Host.",
          "readOnly": false,
          "required": false,
          "type": "dedicated.DatacenterEnum"
        },
        "rack": {
          "canBeNull": false,
          "description": "Rack of the Host.",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "room": {
          "canBeNull": false,
          "description": "Room of the Host.",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.host.Profile": {
      "description": "A Host profile",
      "id": "Profile",
      "namespace": "dedicatedCloud.host",
      "properties": {
        "core": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "cpu": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ram": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "dedicatedCloud.host.StateEnum": {
      "description": "All states a Dedicated Cloud Host can be in",
      "enum": [
        "adding",
        "delivered",
        "error",
        "removing",
        "unknown"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicatedCloud.host"
    },
    "dedicatedCloud.hostSystemConnectionState": {
      "description": "The connection state of the host",
      "enum": [
        "connected",
        "disconnected",
        "notResponding"
      ],
      "enumType": "string",
      "id": "hostSystemConnectionState",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.ipUsageEnum": {
      "description": "IP address usage",
      "enum": [
        "nsxt",
        "reserved",
        "vm"
      ],
      "enumType": "string",
      "id": "ipUsageEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.ldpKind": {
      "description": "Log kind for your dedicated cloud",
      "id": "ldpKind",
      "namespace": "dedicatedCloud",
      "properties": {
        "additionalReturnedFields": {
          "canBeNull": false,
          "description": "List of additional log fields managed in this log kind",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date of the log kind",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "displayName": {
          "canBeNull": false,
          "description": "Log kind display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "kindId": {
          "canBeNull": false,
          "description": "Log kind ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": false,
          "description": "Log kind name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Last update date of the log kind",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dedicatedCloud.ldpSubscription": {
      "description": "Log subscription for your dedicated cloud",
      "id": "ldpSubscription",
      "namespace": "dedicatedCloud",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date of the subscription",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "kind": {
          "canBeNull": false,
          "description": "Log kind name of this subscription",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "resource": {
          "canBeNull": false,
          "description": "Subscribed resource, where the logs come from",
          "fullType": "dedicatedCloud.LogSubscriptionResource",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.LogSubscriptionResource"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Name of the destination log service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "streamId": {
          "canBeNull": false,
          "description": "Id of the destination log stream",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "subscriptionId": {
          "canBeNull": false,
          "description": "Subscription ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Last update date of the subscription",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dedicatedCloud.nsxt.NsxtEdgeScalingCapability": {
      "description": "Maximum number of NSX-T Edges supported in datacenter",
      "id": "NsxtEdgeScalingCapability",
      "namespace": "dedicatedCloud.nsxt",
      "properties": {
        "number": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.nsxt.NsxtEdgeSizeEnum": {
      "description": "Sizes of NSX-T Edges",
      "enum": [
        "LARGE",
        "MEDIUM",
        "XLARGE"
      ],
      "enumType": "string",
      "id": "NsxtEdgeSizeEnum",
      "namespace": "dedicatedCloud.nsxt"
    },
    "dedicatedCloud.nsxt.NsxtEdgeSizingCapability": {
      "description": "Available sizing of NSX-T Edges supported in datacenter",
      "id": "NsxtEdgeSizingCapability",
      "namespace": "dedicatedCloud.nsxt",
      "properties": {
        "size": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "dedicatedCloud.option.DatacenterOptionState": {
      "description": "States of a Dedicated Cloud Datacenter Option",
      "id": "DatacenterOptionState",
      "namespace": "dedicatedCloud.option",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "ID of the Datacenter",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the Datacenter option",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.option.StateEnum"
        }
      }
    },
    "dedicatedCloud.option.StateEnum": {
      "description": "States of a Dedicated Cloud option",
      "enum": [
        "disabled",
        "disabling",
        "enabled",
        "enabling",
        "error",
        "migrating",
        "unknown"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicatedCloud.option"
    },
    "dedicatedCloud.optionAccessNetwork.StateEnum": {
      "description": "States of a Dedicated Cloud option",
      "enum": [
        "creating",
        "deleting",
        "delivered",
        "error",
        "toCreate",
        "toDelete",
        "toUpdate",
        "unknown",
        "updating"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicatedCloud.optionAccessNetwork"
    },
    "dedicatedCloud.optionCompatibility": {
      "description": "A structure describing option compatibility",
      "id": "optionCompatibility",
      "namespace": "dedicatedCloud",
      "properties": {
        "newCommercialVersion": {
          "canBeNull": false,
          "description": "The new/future commercial version",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "oldCommercialVersion": {
          "canBeNull": false,
          "description": "The old/current commercial version",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.passwordPolicy": {
      "description": "A structure describing the current password policy for your Dedicated Cloud",
      "id": "passwordPolicy",
      "namespace": "dedicatedCloud",
      "properties": {
        "deniedChars": {
          "canBeNull": false,
          "description": "List of denied characters in the password",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "digitMandatory": {
          "canBeNull": false,
          "description": "Whether or not a digit (0-9) is mandatory in the password",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "historyCheck": {
          "canBeNull": false,
          "description": "Number of previous passwords to keep",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "letterMandatory": {
          "canBeNull": false,
          "description": "Whether or not a letter (a-z or A-Z) is mandatory in the password",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "lowercaseLetterMandatory": {
          "canBeNull": false,
          "description": "Whether or not a lowercase letter (a-z) is mandatory in the password",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "maxLength": {
          "canBeNull": false,
          "description": "Maximum lenght of the password",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minLength": {
          "canBeNull": false,
          "description": "Minimum lenght of the password",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "specialMandatory": {
          "canBeNull": false,
          "description": "Whether or not a special character (\\W or _) is mandatory in the password",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "uppercaseLetterMandatory": {
          "canBeNull": false,
          "description": "Whether or not an uppercase letter (A-Z) is mandatory in the password",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "validityPeriod": {
          "canBeNull": false,
          "description": "Password validity period (in days)",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.productReferenceEnum": {
      "description": "The reference universe information for your Dedicated Cloud",
      "enum": [
        "EPCC",
        "MBM"
      ],
      "enumType": "string",
      "id": "productReferenceEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.releaseEnum": {
      "description": "All vCenter upgrade possibility",
      "enum": [
        "major",
        "minor"
      ],
      "enumType": "string",
      "id": "releaseEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.requiredAddon": {
      "description": "required addon information",
      "id": "requiredAddon",
      "namespace": "dedicatedCloud",
      "properties": {
        "planCode": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.resourceNewPrices": {
      "description": "A structure describing the Resource's new price",
      "id": "resourceNewPrices",
      "namespace": "dedicatedCloud",
      "properties": {
        "resources": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.resourceNewPricesEntry[]"
        }
      }
    },
    "dedicatedCloud.resourceNewPricesEntry": {
      "description": "A structure describing the Resource's new price",
      "id": "resourceNewPricesEntry",
      "namespace": "dedicatedCloud",
      "properties": {
        "billingType": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.ressources.BillingTypeEnum"
        },
        "changed": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "newPrice": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "oldPrice": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "resourceType": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.ressources.ResourceTypeEnum"
        }
      }
    },
    "dedicatedCloud.ressources.BillingTypeEnum": {
      "description": "The billing type of this Dedicated Cloud ressource",
      "enum": [
        "freeSpare",
        "hourly",
        "monthly",
        "undefined"
      ],
      "enumType": "string",
      "id": "BillingTypeEnum",
      "namespace": "dedicatedCloud.ressources"
    },
    "dedicatedCloud.ressources.ResourceTypeEnum": {
      "description": "The resource type of this Dedicated Cloud ressource",
      "enum": [
        "host",
        "storage"
      ],
      "enumType": "string",
      "id": "ResourceTypeEnum",
      "namespace": "dedicatedCloud.ressources"
    },
    "dedicatedCloud.right.NetworkRoleEnum": {
      "description": "Determine how this user can act on the Dedicated Cloud vLans or vxLans",
      "enum": [
        "admin",
        "manager",
        "noAccess",
        "readonly"
      ],
      "enumType": "string",
      "id": "NetworkRoleEnum",
      "namespace": "dedicatedCloud.right"
    },
    "dedicatedCloud.right.RightEnum": {
      "description": "All rights a Dedicated Cloud user may be associated with",
      "enum": [
        "admin",
        "disabled",
        "readonly",
        "readwrite"
      ],
      "enumType": "string",
      "id": "RightEnum",
      "namespace": "dedicatedCloud.right"
    },
    "dedicatedCloud.right.UserObjectRightTypeEnum": {
      "description": "All types of objects handled in objectRights",
      "enum": [
        "cluster",
        "datastore",
        "dvportgroup",
        "folder",
        "pool",
        "vm"
      ],
      "enumType": "string",
      "id": "UserObjectRightTypeEnum",
      "namespace": "dedicatedCloud.right"
    },
    "dedicatedCloud.right.VmNetworkRoleEnum": {
      "description": "Determine how this user can act on the Dedicated Cloud vmNetwork",
      "enum": [
        "admin",
        "noAccess",
        "readonly"
      ],
      "enumType": "string",
      "id": "VmNetworkRoleEnum",
      "namespace": "dedicatedCloud.right"
    },
    "dedicatedCloud.securityOption.CompatibilityMatrixEntry": {
      "description": "Representation of a security option",
      "id": "CompatibilityMatrixEntry",
      "namespace": "dedicatedCloud.securityOption",
      "properties": {
        "compatible": {
          "canBeNull": false,
          "description": "Indicates if option is compatible and can be enabled on your Dedicated Cloud",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "Security option description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "enabled": {
          "canBeNull": false,
          "description": "Indicates if option is enabled on your Dedicated Cloud",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Security option name",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.securityOption.SecurityOptionEnum"
        },
        "reason": {
          "canBeNull": true,
          "description": "If your Dedicated Cloud is not compatible with this option, indicates the reason",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.securityOption.ErrorMessage"
        },
        "state": {
          "canBeNull": false,
          "description": "Detailed security option state",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.securityOption.StateEnum"
        }
      }
    },
    "dedicatedCloud.securityOption.DependenciesTree": {
      "description": "Display requirements, conflicts and dependencies of a security option",
      "id": "DependenciesTree",
      "namespace": "dedicatedCloud.securityOption",
      "properties": {
        "conflicts": {
          "canBeNull": false,
          "description": "List of conflicting security options which prevents installing given security option",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.securityOption.SecurityOptionEnum[]"
        },
        "depends": {
          "canBeNull": false,
          "description": "List of dependencies that will also be enabled during an install of given security option",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.securityOption.SecurityOptionEnum[]"
        },
        "requires": {
          "canBeNull": false,
          "description": "List of required security options which must be enabled to install given security option",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.securityOption.SecurityOptionEnum[]"
        }
      }
    },
    "dedicatedCloud.securityOption.ErrorEnum": {
      "description": "Security option management errors",
      "enum": [
        "ACTION_IMPOSSIBLE",
        "ALREADY_DISABLED",
        "ALREADY_ENABLED",
        "BAD_ZONE",
        "BREAKING_REQUIREMENTS",
        "CONFLICTING_OPTIONS",
        "DEFINITIVE_OPTION",
        "GENERIC_ERROR",
        "HAS_UNSUPPORTED_DEPENDENCIES",
        "MISSING_REQUIREMENTS_OPTIONS",
        "NOT_ENABLED",
        "NOT_MANAGEABLE_DIRECTLY",
        "SERVICE_SUSPENDED"
      ],
      "enumType": "string",
      "id": "ErrorEnum",
      "namespace": "dedicatedCloud.securityOption"
    },
    "dedicatedCloud.securityOption.ErrorMessage": {
      "description": "Security option code",
      "id": "ErrorMessage",
      "namespace": "dedicatedCloud.securityOption",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Error code",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.securityOption.ErrorEnum"
        },
        "message": {
          "canBeNull": false,
          "description": "Error message",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.securityOption.SecurityOptionEnum": {
      "description": "Security option identifiers",
      "enum": [
        "accessNetworkFiltered",
        "advancedSecurity",
        "base",
        "contentLibrary",
        "grsecKernel",
        "hds",
        "hids",
        "hipaa",
        "nids",
        "pcidss",
        "privateCustomerVlan",
        "privateGw",
        "sendLogToCustomer",
        "sessionTimeout",
        "sftp",
        "snc",
        "spla",
        "sslV3",
        "tls1.2",
        "tokenValidation",
        "twoFa",
        "twoFaFail2ban",
        "vrliForwarder",
        "waf"
      ],
      "enumType": "string",
      "id": "SecurityOptionEnum",
      "namespace": "dedicatedCloud.securityOption"
    },
    "dedicatedCloud.securityOption.StateEnum": {
      "description": "Security option detailed states",
      "enum": [
        "creating",
        "deleted",
        "deleting",
        "delivered",
        "disabled",
        "pending",
        "toCreate",
        "updating"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicatedCloud.securityOption"
    },
    "dedicatedCloud.servicePackEnum": {
      "description": "List of possible service pack",
      "enum": [
        "default",
        "default-nsxt",
        "hds",
        "hds-nsxt",
        "hipaa",
        "legacy",
        "nsx",
        "nsx-and-vrops",
        "nsxt",
        "pcidss",
        "pcidss-nsxt",
        "vrops",
        "vrops-nsxt"
      ],
      "enumType": "string",
      "id": "servicePackEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.servicePackStateEnum": {
      "description": "List of possible state of the service pack",
      "enum": [
        "activating",
        "active",
        "error",
        "waitingForCustomer"
      ],
      "enumType": "string",
      "id": "servicePackStateEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.servicePackStatus": {
      "description": "Service pack informations",
      "id": "servicePackStatus",
      "namespace": "dedicatedCloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the service pack",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.servicePackEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the service pack",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.servicePackStateEnum"
        }
      }
    },
    "dedicatedCloud.spla.KmsLicenseEnum": {
      "description": "Managed license identifiers",
      "enum": [
        "windows 2016 Datacenter",
        "windows 2016 Standard",
        "windows 2016 Standard SQL2016 Standard",
        "windows 2016 Standard SQL2016 Web",
        "windows 2019 Datacenter",
        "windows 2019 Datacenter Core",
        "windows 2019 Standard",
        "windows 2019 Standard Core",
        "windows 2019 Standard SQL2019 Standard",
        "windows 2019 Standard SQL2019 Web",
        "windows 2019 Standard SQL2022 Standard",
        "windows 2019 Standard SQL2022 Web",
        "windows 2022 Datacenter",
        "windows 2022 Datacenter Core",
        "windows 2022 Datacenter SQL2019 Standard",
        "windows 2022 Datacenter SQL2019 Web",
        "windows 2022 Datacenter SQL2022 Standard",
        "windows 2022 Datacenter SQL2022 Web",
        "windows 2022 Standard",
        "windows 2022 Standard Core",
        "windows 2022 Standard SQL2019 Standard",
        "windows 2022 Standard SQL2019 Web",
        "windows 2022 Standard SQL2022 Standard",
        "windows 2022 Standard SQL2022 Web"
      ],
      "enumType": "string",
      "id": "KmsLicenseEnum",
      "namespace": "dedicatedCloud.spla"
    },
    "dedicatedCloud.spla.KmsLicenseIncludingLegacyEnum": {
      "description": "Managed license identifiers (including legacy ones)",
      "enum": [
        "unknown or unsupported license",
        "windows 2008 R2 Datacenter",
        "windows 2008 R2 Enterprise",
        "windows 2008 R2 Standard",
        "windows 2008 R2 Web",
        "windows 2012 Datacenter",
        "windows 2012 R2 Datacenter",
        "windows 2012 R2 Standard",
        "windows 2012 R2 Standard SQL2016 Standard",
        "windows 2012 R2 Standard SQL2016 Web",
        "windows 2012 Standard",
        "windows 2016 Datacenter",
        "windows 2016 Standard",
        "windows 2016 Standard SQL2016 Standard",
        "windows 2016 Standard SQL2016 Web",
        "windows 2019 Datacenter",
        "windows 2019 Datacenter Core",
        "windows 2019 Standard",
        "windows 2019 Standard Core",
        "windows 2019 Standard SQL2019 Standard",
        "windows 2019 Standard SQL2019 Web",
        "windows 2019 Standard SQL2022 Standard",
        "windows 2019 Standard SQL2022 Web",
        "windows 2022 Datacenter",
        "windows 2022 Datacenter Core",
        "windows 2022 Datacenter SQL2019 Standard",
        "windows 2022 Datacenter SQL2019 Web",
        "windows 2022 Datacenter SQL2022 Standard",
        "windows 2022 Datacenter SQL2022 Web",
        "windows 2022 Standard",
        "windows 2022 Standard Core",
        "windows 2022 Standard SQL2019 Standard",
        "windows 2022 Standard SQL2019 Web",
        "windows 2022 Standard SQL2022 Standard",
        "windows 2022 Standard SQL2022 Web"
      ],
      "enumType": "string",
      "id": "KmsLicenseIncludingLegacyEnum",
      "namespace": "dedicatedCloud.spla"
    },
    "dedicatedCloud.syslogForward.LogLevelEnum": {
      "description": "All possible log levels",
      "enum": [
        "alert",
        "critical",
        "emergency",
        "error",
        "info",
        "notice",
        "warning"
      ],
      "enumType": "string",
      "id": "LogLevelEnum",
      "namespace": "dedicatedCloud.syslogForward"
    },
    "dedicatedCloud.syslogForward.SourceTypeEnum": {
      "description": "Log possible sources",
      "enum": [
        "nsxtEdge"
      ],
      "enumType": "string",
      "id": "SourceTypeEnum",
      "namespace": "dedicatedCloud.syslogForward"
    },
    "dedicatedCloud.twoFAWhitelist": {
      "description": "Two factor authentication whitelisted network",
      "id": "twoFAWhitelist",
      "namespace": "dedicatedCloud",
      "properties": {
        "cidrNetmask": {
          "canBeNull": false,
          "description": "IP netmask (CIDR notation) of the remote service",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the trusted IP",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the trusted IP",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP address of the remote service",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the whitelist",
          "fullType": "dedicatedCloud.TwoFAWhitelistStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicatedCloud.TwoFAWhitelistStateEnum"
        }
      }
    },
    "dedicatedCloud.user.ActivationStateEnum": {
      "description": "All activation states a Dedicated Cloud User can have",
      "enum": [
        "disabled",
        "disabling",
        "enabled",
        "enabling",
        "toDisable",
        "toEnable"
      ],
      "enumType": "string",
      "id": "ActivationStateEnum",
      "namespace": "dedicatedCloud.user"
    },
    "dedicatedCloud.user.IdentityProviderTypeEnum": {
      "description": "The type of the identity provider",
      "enum": [
        "federation",
        "iam"
      ],
      "enumType": "string",
      "id": "IdentityProviderTypeEnum",
      "namespace": "dedicatedCloud.user"
    },
    "dedicatedCloud.user.StateEnum": {
      "description": "All states a Dedicated Cloud User can be in",
      "enum": [
        "creating",
        "deleting",
        "delivered",
        "error"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicatedCloud.user"
    },
    "dedicatedCloud.user.TypeEnum": {
      "description": "The type of the user",
      "enum": [
        "group",
        "user"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "dedicatedCloud.user"
    },
    "dedicatedCloud.vcenter": {
      "description": "A structure describing the vCenter available upgrade for your Dedicated Cloud",
      "id": "vcenter",
      "namespace": "dedicatedCloud",
      "properties": {
        "currentVersion": {
          "canBeNull": false,
          "description": "Current vCenter version",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.Version"
        },
        "lastMajor": {
          "canBeNull": false,
          "description": "Last major vCenter version",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.Version"
        },
        "lastMinor": {
          "canBeNull": false,
          "description": "Last minor vCenter version",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.Version"
        }
      }
    },
    "dedicatedCloud.vendor.OvhId": {
      "description": "Representation of a Vendor object in OVH API",
      "id": "OvhId",
      "namespace": "dedicatedCloud.vendor",
      "properties": {
        "datacenterId": {
          "canBeNull": true,
          "description": "Datacenter id",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "filerId": {
          "canBeNull": true,
          "description": "Filer id",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "hostId": {
          "canBeNull": true,
          "description": "Host id",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "vmId": {
          "canBeNull": true,
          "description": "Vm id",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.virtualDeviceConnectInfoStatus": {
      "description": "The connectable virtual device status",
      "enum": [
        "ok",
        "recoverableError",
        "unrecoverableError",
        "untried"
      ],
      "enumType": "string",
      "id": "virtualDeviceConnectInfoStatus",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.virtualMachineCdrom": {
      "description": "A structure describing the cdrom configuration of a virtual machine",
      "id": "virtualMachineCdrom",
      "namespace": "dedicatedCloud",
      "properties": {
        "connected": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "iso": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.virtualMachineFaultToleranceState": {
      "description": "The fault tolerance state of the virtual machine",
      "enum": [
        "disabled",
        "enabled",
        "needSecondary",
        "notConfigured",
        "running",
        "starting"
      ],
      "enumType": "string",
      "id": "virtualMachineFaultToleranceState",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.virtualMachineLicensingSummary": {
      "description": "A structure describing the licensing of a virtual machine",
      "id": "virtualMachineLicensingSummary",
      "namespace": "dedicatedCloud",
      "properties": {
        "guestOsFamily": {
          "canBeNull": true,
          "description": "Guest Operating System reported by VMware tools",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "license": {
          "canBeNull": false,
          "description": "Attached SPLA licensing",
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.spla.KmsLicenseIncludingLegacyEnum"
        },
        "moRef": {
          "canBeNull": false,
          "description": "VMware Managed object Reference identifier",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Virtual machine name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vmId": {
          "canBeNull": false,
          "description": "Virtual machine identifier",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicatedCloud.virtualMachinePowerState": {
      "description": "The power state of the virtual machine",
      "enum": [
        "deleted",
        "poweredOff",
        "poweredOn",
        "suspended"
      ],
      "enumType": "string",
      "id": "virtualMachinePowerState",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.vlan.StateEnum": {
      "description": "All states a Dedicated Cloud Vlan can be in",
      "enum": [
        "available",
        "delivered",
        "disabled",
        "error",
        "removing",
        "reserved"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "dedicatedCloud.vlan"
    },
    "dedicatedCloud.vlan.TypeEnum": {
      "description": "This Dedicated Cloud vlan type",
      "enum": [
        "admin",
        "free",
        "paid"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "dedicatedCloud.vlan"
    },
    "dedicatedCloud.vmFiler": {
      "description": "A structure describing filers of a the virtual machine",
      "id": "vmFiler",
      "namespace": "dedicatedCloud",
      "properties": {
        "committed": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "disks": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.vmFilerDisk[]"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.vmFilerDisk": {
      "description": "A structure describing filer disks of a the virtual machine",
      "id": "vmFilerDisk",
      "namespace": "dedicatedCloud",
      "properties": {
        "capacity": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "id": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.vmNetwork": {
      "description": "A structure describing the network of a the virtual machine",
      "id": "vmNetwork",
      "namespace": "dedicatedCloud",
      "properties": {
        "allowGuestControl": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "backing": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.vmNetworkBacking"
        },
        "connected": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "controler": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "label": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "macAddress": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "startConnected": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.virtualDeviceConnectInfoStatus"
        }
      }
    },
    "dedicatedCloud.vmNetworkBacking": {
      "description": "A structure describing the backing network of a the virtual machine",
      "id": "vmNetworkBacking",
      "namespace": "dedicatedCloud",
      "properties": {
        "carpState": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "deviceName": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "portGroupKey": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "portKey": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "portKeySecurityPolicy": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.DvsSecurityPolicy"
        },
        "switchUuid": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "dedicatedCloud.vmNetworkBackingTypeEnum"
        },
        "useAutoDetect": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "valueMoref": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicatedCloud.vmNetworkBackingTypeEnum": {
      "description": "The type of the network backing",
      "enum": [
        "DVS",
        "VSS"
      ],
      "enumType": "string",
      "id": "vmNetworkBackingTypeEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.vmwareBoolPolicy": {
      "description": "A structure describing the vmware bool policy data object",
      "id": "vmwareBoolPolicy",
      "namespace": "dedicatedCloud",
      "properties": {
        "inherited": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "value": {
          "canBeNull": false,
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
    "nichandle.CountryEnum": {
      "description": "Countries a nichandle can choose",
      "enum": [
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DG",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EA",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "IC",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "UNKNOWN",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW"
      ],
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "nichandle"
    },
    "order.CurrencyCodeEnum": {
      "enum": [
        "AUD",
        "CAD",
        "CZK",
        "EUR",
        "GBP",
        "INR",
        "LTL",
        "MAD",
        "N/A",
        "PLN",
        "SGD",
        "TND",
        "USD",
        "XOF",
        "points"
      ],
      "enumType": "string",
      "id": "CurrencyCodeEnum",
      "namespace": "order"
    },
    "order.Price": {
      "description": "Price with it's currency and textual representation",
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "double"
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
    },
    "vrack.Task": {
      "description": "vrack tasks",
      "id": "Task",
      "namespace": "vrack",
      "properties": {
        "function": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serviceName": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "vrack.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "vrack.TaskStatusEnum"
        },
        "targetDomain": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "todoDate": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "vrack.TaskStatusEnum": {
      "description": "All states a vRack Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "init",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "vrack"
    },
    "vrack.dedicatedCloud": {
      "description": "VMware on OVHcloud vRack link",
      "id": "dedicatedCloud",
      "namespace": "vrack",
      "properties": {
        "dedicatedCloud": {
          "canBeNull": false,
          "description": "your dedicated cloud service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vlanId": {
          "canBeNull": true,
          "description": "Dedicated cloud vlanId used",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vrack": {
          "canBeNull": false,
          "description": "vrack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    }
  },
  "resourcePath": "/dedicatedCloud"
}