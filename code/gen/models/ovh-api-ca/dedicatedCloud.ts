import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/dedicatedCloud",
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
      "description": "Operations about the PCC service"
    },
    {
      "path": "/dedicatedCloud/commercialRange",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "List of commercial Ranges available in a Dedicated Cloud"
        }
      ],
      "description": "List the dedicatedCloud.CommercialRange objects"
    },
    {
      "path": "/dedicatedCloud/commercialRange/{commercialRangeName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "commercialRangeName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Commercial range name"
            }
          ],
          "responseType": "dedicatedCloud.CommercialRange",
          "noAuthentication": true,
          "description": "Get this object properties"
        }
      ],
      "description": "The commercial ranges actually available in your Private Cloud"
    },
    {
      "path": "/dedicatedCloud/location",
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
          "description": "List of locations available in a Dedicated Cloud"
        }
      ],
      "description": "List the dedicatedCloud.PccZone objects"
    },
    {
      "path": "/dedicatedCloud/location/{pccZone}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "pccZone",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pcc zone"
            }
          ],
          "responseType": "dedicatedCloud.PccZone",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "PccZones actually available in Private Cloud"
    },
    {
      "path": "/dedicatedCloud/location/{pccZone}/hostProfile",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "pccZone",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pcc zone"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Offered host profile"
        }
      ],
      "description": "List the dedicatedCloud.HostProfile objects"
    },
    {
      "path": "/dedicatedCloud/location/{pccZone}/hostProfile/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "pccZone",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pcc zone"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "dedicatedCloud.HostProfile",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Host profiles actually available in Private Cloud"
    },
    {
      "path": "/dedicatedCloud/location/{pccZone}/hypervisor",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "pccZone",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pcc zone"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Offered hypervisor version"
        }
      ],
      "description": "List the dedicatedCloud.Os objects"
    },
    {
      "path": "/dedicatedCloud/location/{pccZone}/hypervisor/{shortName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "shortName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Short name"
            },
            {
              "name": "pccZone",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pcc zone"
            }
          ],
          "responseType": "dedicatedCloud.Os",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Hypervisors actually available in Private Cloud"
    },
    {
      "path": "/dedicatedCloud/location/{pccZone}/stock/host",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "pccZone",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pcc zone"
            },
            {
              "name": "minYear",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Minimum reference year"
            }
          ],
          "responseType": "dedicatedCloud.HostStockProfile[]",
          "noAuthentication": false,
          "description": "Available host stock"
        }
      ],
      "description": "host operations"
    },
    {
      "path": "/dedicatedCloud/location/{pccZone}/stock/pcc",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "pccZone",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pcc zone"
            }
          ],
          "responseType": "dedicatedCloud.PccStockProfile[]",
          "noAuthentication": false,
          "description": "Available PCC stock"
        }
      ],
      "description": "pcc operations"
    },
    {
      "path": "/dedicatedCloud/location/{pccZone}/stock/zpool",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "pccZone",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pcc zone"
            },
            {
              "name": "profileFilter",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Profile filter"
            }
          ],
          "responseType": "dedicatedCloud.ZpoolStockProfile[]",
          "noAuthentication": false,
          "description": "Available zpool stock"
        }
      ],
      "description": "zpool operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}",
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
          "responseType": "dedicatedCloud.dedicatedCloud",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-03-10T00:00:00+01:00",
            "deprecatedDate": "2019-01-10T00:00:00+01:00",
            "replacement": "/dedicatedCloud/{serviceName}/changeProperties"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "dedicatedCloud.dedicatedCloud",
              "paramType": "body",
              "fullType": "dedicatedCloud.dedicatedCloud",
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Private Cloud"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Networks allowed to access to this Private Cloud management interface"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description for your ACL"
            },
            {
              "name": "network",
              "dataType": "ipv4Block",
              "paramType": "body",
              "fullType": "ipv4Block",
              "required": true,
              "description": "Network name, e.g. 123.100.200.0/32"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Create a new Allowed network for your dedicatedCloud"
        }
      ],
      "description": "List the dedicatedCloud.AllowedNetwork objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}",
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
              "name": "networkAccessId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Network access ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove this network from your Private Cloud"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "networkAccessId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Network access ID"
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
          "responseType": "dedicatedCloud.AllowedNetwork",
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
              "dataType": "dedicatedCloud.AllowedNetwork",
              "paramType": "body",
              "fullType": "dedicatedCloud.AllowedNetwork",
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
              "name": "networkAccessId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Network access ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Network allowed to connect to the Private Cloud management interface"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "networkAccessId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Network access ID"
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
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            },
            {
              "name": "state",
              "dataType": "dedicatedCloud.TaskStateEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with this allowed network"
        }
      ],
      "description": "List the dedicatedCloud.Task objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}",
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
            },
            {
              "name": "networkAccessId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Network access ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a Private Cloud component"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "executionDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "The new execution date"
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
              "name": "networkAccessId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Network access ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet."
        }
      ],
      "description": "changeMaintenanceExecutionDate operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reason of task restart"
            },
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
            },
            {
              "name": "networkAccessId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Network access ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Restart task in error."
        }
      ],
      "description": "resetTaskState operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/capabilities",
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
          "responseType": "dedicatedCloud.Capabilities",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "The features available in your Private Cloud"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactBilling",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as billing contact"
            },
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
      "path": "/dedicatedCloud/{serviceName}/changeProperties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "userLimitConcurrentSession",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The maximum amount of connected users allowed on the Private Cloud management interface"
            },
            {
              "name": "sslV3",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Enable SSL v3 support. Warning: this option is not recommended as it was recognized as a security breach. If this is enabled, we advise you to enable the filtered User access policy"
            },
            {
              "name": "userAccessPolicy",
              "dataType": "dedicatedCloud.UserAccessPolicyEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.UserAccessPolicyEnum",
              "required": false,
              "description": "Access policy of your Private Cloud: opened to every IPs or filtered"
            },
            {
              "name": "userLogoutPolicy",
              "dataType": "dedicatedCloud.UserLogoutPolicyEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.UserLogoutPolicyEnum",
              "required": false,
              "description": "Logout policy of your Private Cloud"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of your Private Cloud"
            },
            {
              "name": "userSessionTimeout",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The timeout (in seconds) for the user sessions on the Private Cloud management interface. 0 value disable the timeout"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Update this Private Cloud properties."
        }
      ],
      "description": "changeProperties operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/commercialRange/compliance",
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
          "description": "Get the name of the commercial ranges compliant with your Private Cloud"
        }
      ],
      "description": "compliance operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/commercialRange/orderable",
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
          "description": "Get the name of the commercial ranges orderable in your Private Cloud"
        }
      ],
      "description": "orderable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/confirmTermination",
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
      "path": "/dedicatedCloud/{serviceName}/datacenter",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Datacenters associated with this Private Cloud"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "vrackName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Name of the Vrack link to the new datacenter."
            },
            {
              "name": "commercialRangeName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The commercial range of this new datacenter. You can see what commercial ranges are orderable on this API section : /dedicatedCloud/commercialRange/"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Add a new Datacenter in your Private Cloud"
        }
      ],
      "description": "List the dedicatedCloud.Datacenter objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove this Datacenter from your Private Cloud. (It has to be empty in order to be removable)"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Datacenter",
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
              "dataType": "dedicatedCloud.Datacenter",
              "paramType": "body",
              "fullType": "dedicatedCloud.Datacenter",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Private Cloud Datacenter"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
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
          "responseType": "dedicatedCloud.Backup",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Backup configured on a given Datacenter"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/canOptimizeProxies",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.backup.OptimizeProxies",
          "noAuthentication": false,
          "description": "Generates recommendation for Backup Proxies optimization"
        }
      ],
      "description": "canOptimizeProxies operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "fullDayInReport",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Full day on mail report"
            },
            {
              "name": "diskSizeInReport",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Disk size on mail report"
            },
            {
              "name": "backupDurationInReport",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Duration on email report"
            },
            {
              "name": "restorePointInReport",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "RestorePoint number on mail report"
            },
            {
              "name": "backupOffer",
              "dataType": "dedicatedCloud.backup.OfferTypeEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.backup.OfferTypeEnum",
              "required": true,
              "description": "Backup offer type"
            },
            {
              "name": "backupSizeInReport",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Backup size on day on email report"
            },
            {
              "name": "mailAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Unique additional email address for backup daily report"
            },
            {
              "name": "scheduleHour",
              "dataType": "time",
              "paramType": "body",
              "fullType": "time",
              "required": false,
              "description": "Schedule hour for start backup. UTC Timezone"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Edit the backup on a Private Cloud"
        }
      ],
      "description": "changeProperties operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable",
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable backup solution on a Private Cloud"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "backupOffer",
              "dataType": "dedicatedCloud.backup.OfferTypeEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.backup.OfferTypeEnum",
              "required": false,
              "description": "Backup offer type"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable backup solution on a Private Cloud"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/offerCapabilities",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.backup.BackupCapabilities[]",
          "noAuthentication": false,
          "description": "List backup offer capabilities"
        }
      ],
      "description": "offerCapabilities operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/optimizeProxies",
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Optimizes number of Backup Proxies required for given Datacenter"
        }
      ],
      "description": "optimizeProxies operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/checkBackupJobs",
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Check whether your backup jobs are correctly set in your current datacenter, use this when your virtual machines have been migrated through another datacenter"
        }
      ],
      "description": "checkBackupJobs operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "secondaryDatacenterId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Your secondary datacenter id"
            },
            {
              "name": "secondaryServiceName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Your secondary dedicatedCloud"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable Zerto"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "secondaryDatacenterId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Your secondary datacenter id"
            },
            {
              "name": "secondaryEndpointIp",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "Your secondary OVH Private Cloud public IP for the secured replication data tunnel endpoint"
            },
            {
              "name": "primaryEndpointIp",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "Your primary OVH Private Cloud public IP for the secured replication data tunnel endpoint"
            },
            {
              "name": "secondaryServiceName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Your secondary OVH Private Cloud"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable Zerto replication between 2 OVH dedicated Clouds"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/generateZsspPassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-03-31T00:00:00+01:00",
            "deprecatedDate": "2020-02-10T00:00:00+01:00"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Generate a new password for Zerto Self Service Portal and receive it by email."
        }
      ],
      "description": "generateZsspPassword operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/state",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-03-31T00:00:00+01:00",
            "deprecatedDate": "2020-02-10T00:00:00+01:00",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/status"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.disasterRecovery.Profile",
          "noAuthentication": false,
          "description": "Get the current state of Zerto deployment on your dedicated Cloud."
        }
      ],
      "description": "state operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/status",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
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
          "responseType": "dedicatedCloud.disasterRecovery.Profile",
          "noAuthentication": false,
          "description": "Get the current state of Zerto deployment on your dedicated Cloud."
        }
      ],
      "description": "status operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "remoteVraNetwork",
              "dataType": "ipv4Block",
              "paramType": "body",
              "fullType": "ipv4Block",
              "required": false,
              "description": "Internal zerto subnet of your onsite infrastructure (ip/cidr)"
            },
            {
              "name": "remoteEndpointPublicIp",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Your onsite endpoint public IP for the secured replication data tunnel"
            },
            {
              "name": "remoteZvmInternalIp",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Internal ZVM ip of your onsite infrastructure"
            },
            {
              "name": "remoteEndpointInternalIp",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Your onsite endpoint internal IP for the secured replication data tunnel"
            },
            {
              "name": "preSharedKey",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Pre-Shared Key to secure data transfer between both sites"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Configure vpn between your OVH Private Cloud and your onsite infrastructure"
        }
      ],
      "description": "configureVpn operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "ipv4Block",
          "noAuthentication": false,
          "description": "Get the default localVraNetwork subnet suggested by OVH"
        }
      ],
      "description": "defaultLocalVraNetwork operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable Single site Zerto"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ovhEndpointIp",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "Your OVH Private Cloud public IP for the secured replication data tunnel endpoint"
            },
            {
              "name": "remoteVraNetwork",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "Internal zerto subnet of your onsite infrastructure (ip/cidr)"
            },
            {
              "name": "localVraNetwork",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "Internal zerto subnet for your OVH Private Cloud (ip/cidr)"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable Zerto replication between your OVH Private Cloud and your onsite infrastructure"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
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
          "description": "Filers associated with this Datacenter"
        }
      ],
      "description": "List the dedicatedCloud.Filer objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
            }
          ],
          "responseType": "dedicatedCloud.Filer",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud Filer"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/me/consumption/usage/current"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.filer.HourlyConsumption",
          "noAuthentication": false,
          "description": "Hourly consumption associated with this Filer"
        }
      ],
      "description": "hourlyConsumption operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/location",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
            },
            {
              "name": "node",
              "dataType": "dedicatedCloud.filer.NodeTypeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.filer.NodeTypeEnum",
              "required": false,
              "description": "Filer cluster node used to get location (default value: master)"
            }
          ],
          "responseType": "dedicatedCloud.filer.Location",
          "noAuthentication": false,
          "description": "Location of the Filer"
        }
      ],
      "description": "location operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove the filer from your Private Cloud."
        }
      ],
      "description": "remove operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            },
            {
              "name": "state",
              "dataType": "dedicatedCloud.TaskStateEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with this Filer"
        }
      ],
      "description": "List the dedicatedCloud.Task objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
            },
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a Private Cloud component"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "executionDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "The new execution date"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet."
        }
      ],
      "description": "changeMaintenanceExecutionDate operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reason of task restart"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Restart task in error."
        }
      ],
      "description": "resetTaskState operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Hosts associated with this Datacenter"
        }
      ],
      "description": "List the dedicatedCloud.Host objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
            }
          ],
          "responseType": "dedicatedCloud.Host",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud Host"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reason of spare add"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Add a spare host to your Private Cloud."
        }
      ],
      "description": "addHostSpare operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/me/consumption/usage/current"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.host.HourlyConsumption",
          "noAuthentication": false,
          "description": "Hourly consumption associated with this host."
        }
      ],
      "description": "hourlyConsumption operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/location",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
            }
          ],
          "responseType": "dedicatedCloud.host.Location",
          "noAuthentication": false,
          "description": "Location of the host"
        }
      ],
      "description": "location operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove",
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove the host from your Private Cloud."
        }
      ],
      "description": "remove operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
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
          "responseType": "dedicatedCloud.HostResilience",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Host resilience test hability"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/canBeEnabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Check if resilience test can be performed"
        }
      ],
      "description": "canBeEnabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/disable",
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable resilience test (reconnect the network of your host)"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/enable",
      "operations": [
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
              "description": "Duration test in minutes. Host will be reconnected after this period (min:10min, max:24h, default:1h)"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable resilience test (disconnnect the network of your host)"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
            },
            {
              "name": "state",
              "dataType": "dedicatedCloud.TaskStateEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with this Host"
        }
      ],
      "description": "List the dedicatedCloud.Task objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
            },
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a Private Cloud component"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "executionDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "The new execution date"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet."
        }
      ],
      "description": "changeMaintenanceExecutionDate operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reason of task restart"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Host ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Restart task in error."
        }
      ],
      "description": "resetTaskState operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly",
      "operations": [
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
              "description": "Filer profile you want to order"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Order a new hourly Filer in a given Datacenter"
        }
      ],
      "description": "orderNewFilerHourly operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly",
      "operations": [
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
              "description": "Host profile you want to order"
            },
            {
              "name": "vmwareClusterId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Id of the cluster you want the host to be added (\"domain-cXX\")"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Order a new hourly Host in a given Datacenter"
        }
      ],
      "description": "orderNewHostHourly operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.filer.Profile[]",
          "noAuthentication": false,
          "description": "List available filers in a given Private Cloud Datacenter"
        }
      ],
      "description": "orderableFilerProfiles operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.host.Profile[]",
          "noAuthentication": false,
          "description": "List available hosts in a given Private Cloud Datacenter"
        }
      ],
      "description": "orderableHostProfiles operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.PrivateGateway",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private management gateway deployed in your Private Cloud to block all public access"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/disable",
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove the private gateway in your Private Cloud and open public access."
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "netmask",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "Your netmask to set on the private gateway"
            },
            {
              "name": "portgroup",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Portgroup in your Private Cloud used to deploy the private gateway"
            },
            {
              "name": "ip",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "Ip to set on your private gateway in your network"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Deploy a private gateway on your Private Cloud to block all public access"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "state",
              "dataType": "dedicatedCloud.TaskStateEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with this Datacenter"
        }
      ],
      "description": "List the dedicatedCloud.Task objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a Private Cloud component"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "executionDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "The new execution date"
            },
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet."
        }
      ],
      "description": "changeMaintenanceExecutionDate operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reason of task restart"
            },
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Restart task in error."
        }
      ],
      "description": "resetTaskState operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm",
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Virtual machiness associated with this Datacenter"
        }
      ],
      "description": "List the dedicatedCloud.Vm objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.Vm",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud Virtual Machine"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.BackupJob",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "backupDays",
              "dataType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "paramType": "body",
              "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "required": true,
              "description": "List of days your Virtual Machine will be backuped"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Edit a backup job"
        }
      ],
      "description": "Private Cloud Backup Job"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable backup solution on this virtual Machine"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "backupDays",
              "dataType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "paramType": "body",
              "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "required": true,
              "description": "Backup offer type"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable backup solution on this virtual Machine"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Restore point associated to this Backup Job"
        }
      ],
      "description": "List the dedicatedCloud.RestorePoint objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
            },
            {
              "name": "restorePointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Restore point ID"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            }
          ],
          "responseType": "dedicatedCloud.RestorePoint",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud Restore Point"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-01-01T00:00:00+01:00",
            "deprecatedDate": "2017-10-03T00:00:00+01:00",
            "replacement": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Id of the filer where we should restore this Backup."
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
            },
            {
              "name": "restorePointId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Restore point ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Restore this restore point"
        }
      ],
      "description": "restore operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup",
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable backup on this virtual Machine"
        }
      ],
      "description": "disableBackup operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "backupDays",
              "dataType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "paramType": "body",
              "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "required": true,
              "description": "List of days your Virtual Machine will be backuped"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Edit backup on this virtual Machine"
        }
      ],
      "description": "editBackup operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "backupDays",
              "dataType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "paramType": "body",
              "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
              "required": true,
              "description": "List of days your Virtual Machine will be backuped"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable backup on this virtual Machine"
        }
      ],
      "description": "enableBackup operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Id of the filer where we should restore this Backup"
            },
            {
              "name": "restorePointId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Id of the restorePoint you want to restore"
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
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Datacenter ID"
            },
            {
              "name": "vmId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vm ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Restore this restore point"
        }
      ],
      "description": "restoreBackup operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/federation",
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
          "responseType": "dedicatedCloud.Federation",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud Active Directory Federation option"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/federation/activeDirectory",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Active Directories linked to this Private Cloud"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of your option access network"
            },
            {
              "name": "baseDnForUsers",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Active Directory base DN for users, e.g. dc=example,dc=com"
            },
            {
              "name": "username",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Active Directory username, e.g. jdoe@example.com"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Active Directory domain name, e.g. example.com"
            },
            {
              "name": "domainAlias",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Active Directory NetBIOS name, e.g. example"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Active Directory password"
            },
            {
              "name": "baseDnForGroups",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Active Directory base DN for groups, e.g. dc=example,dc=com"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "IP address of the remote service, e.g. 123.100.200.0"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Add a new option user access"
        }
      ],
      "description": "List the dedicatedCloud.FederationAccessNetwork objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}",
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
              "name": "activeDirectoryId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Active directory ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove an option user access"
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
              "name": "activeDirectoryId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Active directory ID"
            }
          ],
          "responseType": "dedicatedCloud.FederationAccessNetwork",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud federation option access network"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties",
      "operations": [
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
              "description": "Active Directory password"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of your option access network"
            },
            {
              "name": "username",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Active Directory username, e.g. jdoe@example.com"
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
              "name": "activeDirectoryId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Active directory ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change Active Directory properties"
        }
      ],
      "description": "changeProperties operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "username",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Active Directory username, e.g. jdoe@example.com"
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
              "name": "activeDirectoryId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Active directory ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Grant Active Directory user"
        }
      ],
      "description": "grantActiveDirectoryUser operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/filer",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Filers mounted on all Datacenters of your Private Cloud Vsphere"
        }
      ],
      "description": "List the dedicatedCloud.Filer objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}",
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
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
            }
          ],
          "responseType": "dedicatedCloud.Filer",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud Filer"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/me/consumption/usage/current"
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
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
            }
          ],
          "responseType": "dedicatedCloud.filer.HourlyConsumption",
          "noAuthentication": false,
          "description": "Hourly consumption associated with this Filer"
        }
      ],
      "description": "hourlyConsumption operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/location",
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
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
            },
            {
              "name": "node",
              "dataType": "dedicatedCloud.filer.NodeTypeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.filer.NodeTypeEnum",
              "required": false,
              "description": "Filer cluster node used to get location (default value: master)"
            }
          ],
          "responseType": "dedicatedCloud.filer.Location",
          "noAuthentication": false,
          "description": "Location of the Filer"
        }
      ],
      "description": "location operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/remove",
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
            },
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove the filer from your Private Cloud."
        }
      ],
      "description": "remove operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
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
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            },
            {
              "name": "state",
              "dataType": "dedicatedCloud.TaskStateEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with this Filer"
        }
      ],
      "description": "List the dedicatedCloud.Task objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}",
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
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a Private Cloud component"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "executionDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "The new execution date"
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
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet."
        }
      ],
      "description": "changeMaintenanceExecutionDate operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reason of task restart"
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
              "name": "filerId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Filer ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Restart task in error."
        }
      ],
      "description": "resetTaskState operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/globalTasks",
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
              "name": "endDate.from",
              "dataType": "date",
              "paramType": "query",
              "fullType": "date",
              "required": false,
              "description": "Filter the tasks by end date (>=)"
            },
            {
              "name": "state",
              "dataType": "dedicatedCloud.TaskStateEnum[]",
              "paramType": "query",
              "fullType": "dedicatedCloud.TaskStateEnum[]",
              "required": false,
              "description": "Filter the tasks by state"
            },
            {
              "name": "lastModificationDate.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the tasks by last modification date (<=)"
            },
            {
              "name": "vlanId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the tasks by vlan Id"
            },
            {
              "name": "hostId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the tasks by host Id"
            },
            {
              "name": "networkAccessId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the tasks by network access Id"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the tasks by datacenter Id"
            },
            {
              "name": "filerId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the tasks by filer Id"
            },
            {
              "name": "executionDate.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the tasks by execution date (>=)"
            },
            {
              "name": "endDate.to",
              "dataType": "date",
              "paramType": "query",
              "fullType": "date",
              "required": false,
              "description": "Filter the tasks by end date (<=)"
            },
            {
              "name": "lastModificationDate.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the tasks by last modification date (>=)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the tasks by name"
            },
            {
              "name": "parentTaskId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the tasks by parent task Id"
            },
            {
              "name": "orderId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the tasks by order Id"
            },
            {
              "name": "userId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the tasks by user Id"
            },
            {
              "name": "executionDate.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the tasks by execution date (<=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get filtered tasks associated with this Private Cloud"
        }
      ],
      "description": "globalTasks operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hcx",
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
          "responseType": "dedicatedCloud.Hcx",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud VMware Hybrid Cloud Extension option"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hcx/canBeDisabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Check if VMware Hybrid Cloud Extension option can be disabled"
        }
      ],
      "description": "canBeDisabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hcx/canBeEnabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Check if VMware Hybrid Cloud Extension option can be enabled"
        }
      ],
      "description": "canBeEnabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hcx/disable",
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable VMware Hybrid Cloud Extension option"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hcx/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable VMware Hybrid Cloud Extension option"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hds",
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
          "responseType": "dedicatedCloud.Hds",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "The Private Cloud Hds option"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hds/canBeDisabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.optionCompatibility",
          "noAuthentication": false,
          "description": "Check if Hds option can be disabled"
        }
      ],
      "description": "canBeDisabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hds/canBeEnabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.optionCompatibility",
          "noAuthentication": false,
          "description": "Check if Hds option can be enabled"
        }
      ],
      "description": "canBeEnabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hds/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable Hds option"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hds/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable Hds option"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hipaa",
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
          "responseType": "dedicatedCloud.Hipaa",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "The Private Cloud Hipaa option"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hipaa/canBeDisabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.optionCompatibility",
          "noAuthentication": false,
          "description": "Check if Hipaa option can be disabled"
        }
      ],
      "description": "canBeDisabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hipaa/canBeEnabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.optionCompatibility",
          "noAuthentication": false,
          "description": "Check if Hipaa option can be enabled"
        }
      ],
      "description": "canBeEnabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hipaa/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable Hipaa option"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/hipaa/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable Hipaa option"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/ip",
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
          "responseType": "ipv4Block[]",
          "noAuthentication": false,
          "description": "Ip Blocks attached to this Private Cloud"
        }
      ],
      "description": "List the dedicatedCloud.Ip objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/ip/{network}",
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
              "name": "network",
              "dataType": "ipv4Block",
              "paramType": "path",
              "fullType": "ipv4Block",
              "required": true,
              "description": "Network"
            }
          ],
          "responseType": "dedicatedCloud.Ip",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "IP Blocks associated with a Private Cloud"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/ip/{network}/details",
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
              "name": "network",
              "dataType": "ipv4Block",
              "paramType": "path",
              "fullType": "ipv4Block",
              "required": true,
              "description": "Network"
            }
          ],
          "responseType": "dedicatedCloud.IpDetails[]",
          "noAuthentication": false,
          "description": "List details about this IP Block"
        }
      ],
      "description": "details operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/ip/{network}/task",
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
              "name": "network",
              "dataType": "ipv4Block",
              "paramType": "path",
              "fullType": "ipv4Block",
              "required": true,
              "description": "Network"
            },
            {
              "name": "state",
              "dataType": "dedicatedCloud.TaskStateEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with this IP Block"
        }
      ],
      "description": "List the dedicatedCloud.Task objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}",
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
              "name": "network",
              "dataType": "ipv4Block",
              "paramType": "path",
              "fullType": "ipv4Block",
              "required": true,
              "description": "Network"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a Private Cloud component"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "executionDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "The new execution date"
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
              "name": "network",
              "dataType": "ipv4Block",
              "paramType": "path",
              "fullType": "ipv4Block",
              "required": true,
              "description": "Network"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet."
        }
      ],
      "description": "changeMaintenanceExecutionDate operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reason of task restart"
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
              "name": "network",
              "dataType": "ipv4Block",
              "paramType": "path",
              "fullType": "ipv4Block",
              "required": true,
              "description": "Network"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Restart task in error."
        }
      ],
      "description": "resetTaskState operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/newPrices",
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
          "responseType": "dedicatedCloud.resourceNewPrices",
          "noAuthentication": false,
          "description": "Get the new Prices for your Private Cloud"
        }
      ],
      "description": "newPrices operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/nsx",
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
          "responseType": "dedicatedCloud.Nsx",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "The Private Cloud Nsx option"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/nsx/canBeDisabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.optionCompatibility",
          "noAuthentication": false,
          "description": "Check if Nsx option can be disabled"
        }
      ],
      "description": "canBeDisabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/nsx/canBeEnabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.optionCompatibility",
          "noAuthentication": false,
          "description": "Check if Nsx option can be enabled"
        }
      ],
      "description": "canBeEnabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/nsx/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable Nsx option"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/nsx/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable Nsx option"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/orderNewFilerHourly",
      "operations": [
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
              "description": "Filer profile you want to order"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Order a new hourly Filer mounted in every Datacenter of a given Private Cloud"
        }
      ],
      "description": "orderNewFilerHourly operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/orderableIpCountries",
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
          "responseType": "dedicatedCloud.IpCountriesEnum[]",
          "noAuthentication": false,
          "description": "Get the countries you can select in /order/dedicatedCloud/{serviceName}/ip"
        }
      ],
      "description": "orderableIpCountries operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/passwordPolicy",
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
          "responseType": "dedicatedCloud.passwordPolicy",
          "noAuthentication": false,
          "description": "Get the current password policy for your Private Cloud"
        }
      ],
      "description": "passwordPolicy operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/pcidss",
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
          "responseType": "dedicatedCloud.PciDss",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "The Private Cloud PCI-DSS option"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/pcidss/canBeDisabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.optionCompatibility",
          "noAuthentication": false,
          "description": "Check if PCI-DSS option can be disabled"
        }
      ],
      "description": "canBeDisabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/pcidss/canBeEnabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.optionCompatibility",
          "noAuthentication": false,
          "description": "Check if PCI-DSS option can be enabled"
        }
      ],
      "description": "canBeEnabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/pcidss/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable PCI-DSS option"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/pcidss/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable PCI-DSS option"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/resetTriggeredAlarm",
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Reset all triggered alarms on PCC"
        }
      ],
      "description": "resetTriggeredAlarm operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/robot",
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
          "description": "Robots that can run on this Private Cloud"
        }
      ],
      "description": "List the dedicatedCloud.Robot objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/robot/{name}",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "dedicatedCloud.Robot",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "The robots used in Private Cloud"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/serviceInfos",
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
      "path": "/dedicatedCloud/{serviceName}/servicePack",
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
          "responseType": "dedicatedCloud.servicePackStatus",
          "noAuthentication": false,
          "description": "Retrieve the service pack informations"
        }
      ],
      "description": "servicePack operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/servicePacks",
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
          "description": "Service Pack compliant with the current Private Cloud"
        }
      ],
      "description": "List the dedicatedCloud.ServicePack objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/servicePacks/{name}",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "dedicatedCloud.ServicePack",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "List of Service Pack compliant with the current Private Cloud"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/task",
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
              "name": "state",
              "dataType": "dedicatedCloud.TaskStateEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with this Private Cloud"
        }
      ],
      "description": "List the dedicatedCloud.Task objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/task/{taskId}",
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a Private Cloud component"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "executionDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "The new execution date"
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
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet."
        }
      ],
      "description": "changeMaintenanceExecutionDate operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reason of task restart"
            },
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Restart task in error."
        }
      ],
      "description": "resetTaskState operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/terminate",
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
      "path": "/dedicatedCloud/{serviceName}/twoFAWhitelist",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Ip allowed to bypass the two factor authentication on this Private Cloud management interface"
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
              "description": "IP address of the remote service, e.g. 123.100.200.0"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Description of the exception"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Add a whitelisted ip on the two factor authentication"
        }
      ],
      "description": "List the dedicatedCloud.twoFAWhitelist objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove a whitelisted ip on the two factor authentication"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "dedicatedCloud.twoFAWhitelist",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Trust IP which can bypass the two factor authentication"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of your whitelist"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change Private Cloud Two facter authentication whitelist properties"
        }
      ],
      "description": "changeProperties operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/upgradeHypervisor",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-03-01T00:00:00+01:00",
            "deprecatedDate": "2019-12-16T00:00:00+01:00",
            "replacement": "/dedicatedCloud/{serviceName}/upgradeVcenter"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Upgrade your hypervisor to the next released version"
        }
      ],
      "description": "upgradeHypervisor operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/upgradeVcenter",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "release",
              "dataType": "dedicatedCloud.releaseEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.releaseEnum",
              "required": false,
              "description": "Version information for vCenter upgrade (minor by default)"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Upgrade your vCenter to the next released version"
        }
      ],
      "description": "upgradeVcenter operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user",
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
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Private Cloud users"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "phoneNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Mobile phone number of the user"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The user email. If this field is empty, user informations will be sent to the dedicatedCloud administrator contact."
            },
            {
              "name": "vmNetworkRole",
              "dataType": "dedicatedCloud.right.VmNetworkRoleEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.right.VmNetworkRoleEnum",
              "required": false,
              "description": "Determine how this user will be able to act on this Private Cloud VM Network"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the user (login)"
            },
            {
              "name": "canManageRights",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Is this user able to manage the users rights"
            },
            {
              "name": "networkRole",
              "dataType": "dedicatedCloud.right.NetworkRoleEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.right.NetworkRoleEnum",
              "required": false,
              "description": "Determine how this user will be able to act on this Private Cloud v(x)Lans"
            },
            {
              "name": "nsxRight",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Is this User able to access nsx interface (requires NSX option)"
            },
            {
              "name": "canAddRessource",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Is this User able to add ressources in the Datacenter he has access ? (default is no right to add ressource)"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "First name of the user"
            },
            {
              "name": "receiveAlerts",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Defines if the user receives technical alerts"
            },
            {
              "name": "tokenValidator",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Defines if the user can confirm security tokens (if a compatible option is enabled)"
            },
            {
              "name": "right",
              "dataType": "dedicatedCloud.right.RightEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.right.RightEnum",
              "required": false,
              "description": "Determine what kind of access the User will have in all Datacenters of your Private Cloud (default is disabled)"
            },
            {
              "name": "expirationDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Date of removal of the user."
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": false,
              "description": "The user password. It must fits your Private Cloud password policy. If this field is empty, a random password will be generated and sent by email."
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Last name of the user"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Create a new User in your Private Cloud"
        }
      ],
      "description": "List the dedicatedCloud.User objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove a given user from your Private Cloud"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
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
          "responseType": "dedicatedCloud.User",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud User"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/changePassword",
      "operations": [
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
              "required": false,
              "description": "New password for this Private Cloud user. It must fits your Private Cloud password policy. If this field is empty, a random password will be generated and sent by email."
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change Private Cloud user password"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/changeProperties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "receiveAlerts",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Defines if the user receives technical alerts"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Last name of the user"
            },
            {
              "name": "canManageRights",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Defines if the user can manage the users rights"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "First name of the user"
            },
            {
              "name": "tokenValidator",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Defines if the user can confirm security tokens (if a compatible option is enabled)"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Email address of the user"
            },
            {
              "name": "phoneNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Mobile phone number of the user in international format (+prefix.number)"
            },
            {
              "name": "nsxRight",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Is this User able to access nsx interface (requires NSX option)"
            },
            {
              "name": "fullAdminRo",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Defines if the user is a full admin in readonly"
            },
            {
              "name": "canManageNetwork",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Defines if the user can manage the network"
            },
            {
              "name": "canManageIpFailOvers",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Defines if the user can manage ip failovers"
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change Private Cloud user properties"
        }
      ],
      "description": "changeProperties operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/disable",
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
            },
            {
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable the given Private Cloud user "
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/enable",
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
            },
            {
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable the given Private Cloud user "
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/metricsToken",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
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
          "responseType": "dedicatedCloud.metricsToken",
          "noAuthentication": false,
          "description": "Get Metrics Token to query vScope Graphs data "
        }
      ],
      "description": "metricsToken operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/objectRight",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
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
          "description": "User rights on an object"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "type",
              "dataType": "dedicatedCloud.right.UserObjectRightTypeEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.right.UserObjectRightTypeEnum",
              "required": true,
              "description": "Type of the object"
            },
            {
              "name": "vmwareObjectId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The VMware MoRef of the object"
            },
            {
              "name": "right",
              "dataType": "dedicatedCloud.right.RightEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.right.RightEnum",
              "required": true,
              "description": "User access on the VMware object"
            },
            {
              "name": "propagate",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Right propagation on children objects"
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Add a new object right to user in datacenter on Private Cloud"
        }
      ],
      "description": "List the dedicatedCloud.ObjectRight objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}",
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            },
            {
              "name": "objectRightId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Object right ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove an object right from user in datacenter on Private Cloud"
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            },
            {
              "name": "objectRightId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Object right ID"
            }
          ],
          "responseType": "dedicatedCloud.ObjectRight",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud User object right"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/right",
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "User rights in a given Datacenters"
        }
      ],
      "description": "List the dedicatedCloud.Right objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}",
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            },
            {
              "name": "rightId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Right ID"
            }
          ],
          "responseType": "dedicatedCloud.Right",
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
              "dataType": "dedicatedCloud.Right",
              "paramType": "body",
              "fullType": "dedicatedCloud.Right",
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            },
            {
              "name": "rightId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Right ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Private Cloud User right"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/task",
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            },
            {
              "name": "state",
              "dataType": "dedicatedCloud.TaskStateEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.TaskStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with this User"
        }
      ],
      "description": "List the dedicatedCloud.Task objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}",
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a Private Cloud component"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "executionDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "The new execution date"
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet."
        }
      ],
      "description": "changeMaintenanceExecutionDate operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reason of task restart"
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Restart task in error."
        }
      ],
      "description": "resetTaskState operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vcenterVersion",
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
          "responseType": "dedicatedCloud.vcenter",
          "noAuthentication": false,
          "description": "Get available upgrade for your vCenter"
        }
      ],
      "description": "vcenterVersion operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vendor",
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
          "responseType": "dedicatedCloud.Vendor",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "The Private Cloud Vendor option"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vendor/objectType",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get available object types"
        }
      ],
      "description": "objectType operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vendor/ovhId",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "objectType",
              "dataType": "dedicatedCloud.VendorObjectTypeEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.VendorObjectTypeEnum",
              "required": true,
              "description": "object type"
            },
            {
              "name": "vendorId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "object type id"
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
          "responseType": "dedicatedCloud.vendor.OvhId",
          "noAuthentication": false,
          "description": "Get ovh id from object type"
        }
      ],
      "description": "ovhId operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vlan",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Private Cloud vlans"
        }
      ],
      "description": "List the dedicatedCloud.Vlan objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vlan/{vlanId}",
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
              "name": "vlanId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Vlan ID"
            }
          ],
          "responseType": "dedicatedCloud.Vlan",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud Vlan"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vmEncryption",
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
          "responseType": "dedicatedCloud.VMEncryption",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud VM Encryption option"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vmEncryption/kms",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "VM Encryption KMS linked to this Private Cloud"
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
              "description": "IP address of the remote service, e.g. 123.100.200.0"
            },
            {
              "name": "sslThumbprint",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "SSL thumbprint of the remote service, e.g. A7:61:68:...:61:91:2F"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of your option access network"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Add a new option user access"
        }
      ],
      "description": "List the dedicatedCloud.VMEncryptionAccessNetwork objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}",
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
              "name": "kmsId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Kms ID"
            }
          ],
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Remove an option user access"
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
              "name": "kmsId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Kms ID"
            }
          ],
          "responseType": "dedicatedCloud.VMEncryptionAccessNetwork",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Private Cloud VM Encryption option access network"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of your option access network"
            },
            {
              "name": "sslThumbprint",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "SSL thumbprint of the remote service, e.g. A7:61:68:...:61:91:2F"
            },
            {
              "name": "kmsId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Kms ID"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Change option user access properties"
        }
      ],
      "description": "changeProperties operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vrack",
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
          "description": "This Private Cloud vrack"
        }
      ],
      "description": "List the vrack.dedicatedCloud objects"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vrack/{vrack}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "vrack",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Vrack"
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
          "responseType": "vrack.Task",
          "noAuthentication": false,
          "description": "remove this dedicatedCloud (VmNetwork) from this vrack"
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
              "name": "vrack",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Vrack"
            }
          ],
          "responseType": "vrack.dedicatedCloud",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "vrack dedicated cloud interface"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vrops",
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
          "responseType": "dedicatedCloud.Vrops",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "The Private Cloud vRealize Operations option"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vrops/canBeDisabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.optionCompatibility",
          "noAuthentication": false,
          "description": "Check if vRealize Operations option can be disabled"
        }
      ],
      "description": "canBeDisabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vrops/canBeEnabled",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.optionCompatibility",
          "noAuthentication": false,
          "description": "Check if vRealize Operations option can be enabled"
        }
      ],
      "description": "canBeEnabled operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vrops/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Disable vRealize Operations option"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/dedicatedCloud/{serviceName}/vrops/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "dedicatedCloud.Task",
          "noAuthentication": false,
          "description": "Enable vRealize Operations option"
        }
      ],
      "description": "enable operations"
    }
  ],
  "resourcePath": "/dedicatedCloud",
  "basePath": "https://ca.api.ovh.com/1.0",
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
    "dedicated.DatacenterEnum": {
      "id": "DatacenterEnum",
      "namespace": "dedicated",
      "description": "ovh datacenter",
      "enum": [
        "bhs1",
        "bhs2",
        "bhs3",
        "bhs4",
        "bhs5",
        "bhs6",
        "bhs7",
        "dc1",
        "eri1",
        "gra1",
        "gra2",
        "gsw",
        "hil1",
        "lim1",
        "p19",
        "rbx-hz",
        "rbx1",
        "rbx2",
        "rbx3",
        "rbx4",
        "rbx5",
        "rbx6",
        "rbx7",
        "rbx8",
        "sbg1",
        "sbg2",
        "sbg3",
        "sbg4",
        "sgp1",
        "syd1",
        "vin1",
        "waw1"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.AllowedNetwork": {
      "id": "AllowedNetwork",
      "namespace": "dedicatedCloud",
      "description": "Network allowed to connect to the Private Cloud management interface",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "network": {
          "type": "ipv4Block",
          "fullType": "ipv4Block",
          "canBeNull": false,
          "readOnly": false,
          "description": "Network name, e.g. 123.100.200.0/32",
          "required": true
        },
        "networkAccessId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "state": {
          "type": "dedicatedCloud.AllowedNetworkStateEnum",
          "fullType": "dedicatedCloud.AllowedNetworkStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "dedicatedCloud.AllowedNetworkStateEnum": {
      "id": "AllowedNetworkStateEnum",
      "namespace": "dedicatedCloud",
      "description": "All states an Allowed Network can be in",
      "enum": [
        "allowed",
        "toDelete",
        "toUpdate"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.Backup": {
      "id": "Backup",
      "namespace": "dedicatedCloud",
      "description": "Backup configured on a given Datacenter",
      "properties": {
        "backupDurationInReport": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Duration on email report",
          "required": false
        },
        "backupOffer": {
          "type": "dedicatedCloud.backup.OfferTypeEnum",
          "fullType": "dedicatedCloud.backup.OfferTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Backup offer type",
          "required": false
        },
        "backupSizeInReport": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Backup size on day on email report",
          "required": false
        },
        "diskSizeInReport": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Disk size on mail report",
          "required": false
        },
        "encryption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Backup is encrypted",
          "required": false
        },
        "fullDayInReport": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Full day on mail report",
          "required": false
        },
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of the backup server virtual machine.",
          "required": false
        },
        "mailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Unique additional email address for backup daily report",
          "required": false
        },
        "replicationZone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Backup replication zone",
          "required": false
        },
        "restorePointInReport": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "RestorePoint number on mail report",
          "required": false
        },
        "scheduleHour": {
          "type": "time",
          "fullType": "time",
          "canBeNull": true,
          "readOnly": true,
          "description": "Schedule hour for start backup",
          "required": false
        },
        "state": {
          "type": "dedicatedCloud.BackupStateEnum",
          "fullType": "dedicatedCloud.BackupStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "This Backup current state",
          "required": true
        },
        "vmwareVmId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The moref of the backup server virtual machine",
          "required": false
        }
      }
    },
    "dedicatedCloud.BackupJob": {
      "id": "BackupJob",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud Backup Job",
      "properties": {
        "allocatedDisk": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Disk space allocated to the virtual machine",
          "required": false
        },
        "backupDays": {
          "type": "dedicatedCloud.backup.BackupDaysEnum[]",
          "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "List of days your Virtual Machine will be backuped",
          "required": false
        },
        "encryption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Backup is encrypted",
          "required": false
        },
        "offerType": {
          "type": "dedicatedCloud.backup.OfferTypeEnum",
          "fullType": "dedicatedCloud.backup.OfferTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Offer type of the backup job",
          "required": false
        },
        "retentionTime": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of days before the backup is deleted",
          "required": false
        },
        "state": {
          "type": "dedicatedCloud.backup.StateEnum",
          "fullType": "dedicatedCloud.backup.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the backup job",
          "required": true
        },
        "vmName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of the virtual Machine",
          "required": false
        }
      }
    },
    "dedicatedCloud.BackupStateEnum": {
      "id": "BackupStateEnum",
      "namespace": "dedicatedCloud",
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
      "enumType": "string"
    },
    "dedicatedCloud.BillingTypeEnum": {
      "id": "BillingTypeEnum",
      "namespace": "dedicatedCloud",
      "description": "The billing type of this Dedicated Cloud",
      "enum": [
        "demo",
        "monthly"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.BlockRegisterEnum": {
      "id": "BlockRegisterEnum",
      "namespace": "dedicatedCloud",
      "description": "The Regional Internet Registry of this IP block",
      "enum": [
        "arin",
        "ripe"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.Capabilities": {
      "id": "Capabilities",
      "namespace": "dedicatedCloud",
      "description": "The features available in your Private Cloud",
      "properties": {
        "addRessourceRightStatus": {
          "type": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "fullType": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "canAddRessource right order status in this Private Cloud",
          "required": true
        },
        "backupStatus": {
          "type": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "fullType": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Backup feature order status for this Private Cloud",
          "required": true
        },
        "canAddUser": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "if true user can be added in this Private Cloud (with POST /dedicatedCloud/{serviceName}/user",
          "required": true
        },
        "fullAdminRoUserStatus": {
          "type": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "fullType": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "fullAdminRO user right order status in this Private Cloud",
          "required": true
        },
        "nexus1000vStatus": {
          "type": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "fullType": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Nexus 1000v feature order status in this Private Cloud ?",
          "required": true
        },
        "upgradable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hypervisor upgrade order status in this Private Cloud (upgrade with POST /dedicatedCloud/{serviceName}/upgradeHypervisor)",
          "required": true
        },
        "userAccessPolicyStatus": {
          "type": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "fullType": "dedicatedCloud.capabilities.FeatureStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "userAccessPolicy property edition status in PUT /dedicatedCloud/{serviceName}",
          "required": true
        }
      }
    },
    "dedicatedCloud.CommercialNameEnum": {
      "id": "CommercialNameEnum",
      "namespace": "dedicatedCloud",
      "description": "The commercial name component",
      "enum": [
        "DC",
        "DC-ANCIENT",
        "DC-ANCIENT-HDS",
        "DC-ANCIENT-HIPAA",
        "DC-ANCIENT-NSX",
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
        "DC-LEGACY-NSX-VROPS",
        "DC-LEGACY-PCIDSS",
        "DC-LEGACY-UNKNOWN",
        "DC-LEGACY-VROPS",
        "DC-NSX",
        "DC-NSX-VROPS",
        "DC-PCIDSS",
        "DC-UNKNOWN",
        "DC-VROPS",
        "SDDC",
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
        "UNKNOWN-NSX-VROPS",
        "UNKNOWN-PCIDSS",
        "UNKNOWN-UNKNOWN",
        "UNKNOWN-VROPS"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.CommercialRange": {
      "id": "CommercialRange",
      "namespace": "dedicatedCloud",
      "description": "The commercial ranges actually available in your Private Cloud",
      "properties": {
        "allowedHypervisorVersions": {
          "type": "dedicatedCloud.HypervisorVersionEnum[]",
          "fullType": "dedicatedCloud.HypervisorVersionEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "The hypervisor versions compliant with this commercial Range",
          "required": true
        },
        "allowedNetworkRoles": {
          "type": "dedicatedCloud.right.NetworkRoleEnum[]",
          "fullType": "dedicatedCloud.right.NetworkRoleEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "The list of NetworkRoles allowed for one user in this commercial range",
          "required": true
        },
        "commercialRangeName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The name of this commercial range",
          "required": true
        },
        "dedicatedCloudVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The name of the dedicated Cloud version associated to this commercial range",
          "required": true
        },
        "range": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The range of this Datacenter in this Private Cloud version",
          "required": false
        }
      }
    },
    "dedicatedCloud.Datacenter": {
      "id": "Datacenter",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud Datacenter",
      "properties": {
        "commercialName": {
          "type": "dedicatedCloud.CommercialNameEnum",
          "fullType": "dedicatedCloud.CommercialNameEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The commercial name of this Datacenter",
          "required": true
        },
        "commercialRangeName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The commercial range associated to this Datacenter",
          "required": true
        },
        "datacenterId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "horizonViewName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of the associated Horizon View service if the VDI option is enabled",
          "required": false
        },
        "isRemovable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Check if this datacenter is removable (Need to be Empty)",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Os version installed on your Private Cloud",
          "required": true
        }
      }
    },
    "dedicatedCloud.Federation": {
      "id": "Federation",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud Active Directory Federation option",
      "properties": {
        "state": {
          "type": "dedicatedCloud.option.StateEnum",
          "fullType": "dedicatedCloud.option.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        }
      }
    },
    "dedicatedCloud.FederationAccessNetwork": {
      "id": "FederationAccessNetwork",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud federation option access network",
      "properties": {
        "activeDirectoryId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the Active Directory",
          "required": true
        },
        "baseDnForGroups": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Active Directory base DN for groups",
          "required": true
        },
        "baseDnForUsers": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Active Directory base DN for users",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of your option access network",
          "required": true
        },
        "domainAlias": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Active Directory NetBIOS name",
          "required": true
        },
        "domainName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Active Directory domain name",
          "required": true
        },
        "ip": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP address of the remote service",
          "required": true
        },
        "ldapTcpPort": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Active Directory LDAP port",
          "required": true
        },
        "sslThumbprint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "SSL thumbprint of the remote service",
          "required": false
        },
        "state": {
          "type": "dedicatedCloud.optionAccessNetwork.StateEnum",
          "fullType": "dedicatedCloud.optionAccessNetwork.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Active Directory username",
          "required": true
        }
      }
    },
    "dedicatedCloud.Filer": {
      "id": "Filer",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud Filer",
      "properties": {
        "billingType": {
          "type": "dedicatedCloud.ressources.BillingTypeEnum",
          "fullType": "dedicatedCloud.ressources.BillingTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Billing type of this filer",
          "required": false
        },
        "filerId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Filer Id",
          "required": true
        },
        "fullProfile": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Human-Readable profile name",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Filer name",
          "required": true
        },
        "profile": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Commercial profile name",
          "required": true
        },
        "size": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Filer capacity",
          "required": true
        },
        "spaceFree": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Available space of this datastore, in GB",
          "required": false
        },
        "spaceProvisionned": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Provisionned space of this datastore, in GB",
          "required": false
        },
        "spaceUsed": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Used Space of this filer, in GB",
          "required": false
        },
        "state": {
          "type": "dedicatedCloud.filer.StateEnum",
          "fullType": "dedicatedCloud.filer.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the filer",
          "required": true
        },
        "vmTotal": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of virtual machine on the filer",
          "required": false
        }
      }
    },
    "dedicatedCloud.GenerationEnum": {
      "id": "GenerationEnum",
      "namespace": "dedicatedCloud",
      "description": "The generation of a Private Cloud",
      "enum": [
        "1.0",
        "2.0"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.Hcx": {
      "id": "Hcx",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud VMware Hybrid Cloud Extension option",
      "properties": {
        "build": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Build of the VMware Hybrid Cloud Extension",
          "required": false
        },
        "state": {
          "type": "dedicatedCloud.option.StateEnum",
          "fullType": "dedicatedCloud.option.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Version of the VMware Hybrid Cloud Extension",
          "required": false
        }
      }
    },
    "dedicatedCloud.Hds": {
      "id": "Hds",
      "namespace": "dedicatedCloud",
      "description": "The Private Cloud Hds option",
      "properties": {
        "state": {
          "type": "dedicatedCloud.option.StateEnum",
          "fullType": "dedicatedCloud.option.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        }
      }
    },
    "dedicatedCloud.Hipaa": {
      "id": "Hipaa",
      "namespace": "dedicatedCloud",
      "description": "The Private Cloud Hipaa option",
      "properties": {
        "state": {
          "type": "dedicatedCloud.option.StateEnum",
          "fullType": "dedicatedCloud.option.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        }
      }
    },
    "dedicatedCloud.Host": {
      "id": "Host",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud Host",
      "properties": {
        "billingType": {
          "type": "dedicatedCloud.ressources.BillingTypeEnum",
          "fullType": "dedicatedCloud.ressources.BillingTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Billing type of the host",
          "required": true
        },
        "clusterName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Cluster of the host",
          "required": false
        },
        "connectionState": {
          "type": "dedicatedCloud.hostSystemConnectionState",
          "fullType": "dedicatedCloud.hostSystemConnectionState",
          "canBeNull": true,
          "readOnly": true,
          "description": "Connection state of the host",
          "required": false
        },
        "cpu": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": true,
          "description": "CPU total frenquency",
          "required": true
        },
        "cpuMax": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The maximum speed of the cpu, in Mhz",
          "required": false
        },
        "cpuMaxCore": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The speed of the CPU cores. This is an average value if there are multiple speeds. in Mhz",
          "required": false
        },
        "cpuNum": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of physical CPU cores on the host.",
          "required": false
        },
        "cpuUsed": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current cpu utilization, in Mhz",
          "required": false
        },
        "hostId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the host",
          "required": true
        },
        "inMaintenance": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Host is in maintenance mode",
          "required": false
        },
        "memoryUsed": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Amount of used memory. Sum of the memory used by all powered on virtual machines and vSphere services on the host. in MB",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the host (IP address)",
          "required": true
        },
        "parentHostId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Id of the parent host (if any)",
          "required": false
        },
        "profile": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Host profile in a commercial range",
          "required": true
        },
        "profileCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Host profile code",
          "required": true
        },
        "rack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Rack of the host",
          "required": true
        },
        "ram": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total RAM quantity",
          "required": true
        },
        "state": {
          "type": "dedicatedCloud.host.StateEnum",
          "fullType": "dedicatedCloud.host.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the host",
          "required": true
        },
        "uptime": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Host uptime in second",
          "required": false
        },
        "vmTotal": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of Virtual Machine on the host",
          "required": false
        },
        "vmVcpuTotal": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of Vcpu use by virtual machines on the host",
          "required": false
        }
      }
    },
    "dedicatedCloud.HostProfile": {
      "id": "HostProfile",
      "namespace": "dedicatedCloud",
      "description": "Host profiles actually available in Private Cloud",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of Host profile",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of Host profile",
          "required": true
        }
      }
    },
    "dedicatedCloud.HostResilience": {
      "id": "HostResilience",
      "namespace": "dedicatedCloud",
      "description": "Host resilience test hability",
      "properties": {
        "state": {
          "type": "dedicatedCloud.option.StateEnum",
          "fullType": "dedicatedCloud.option.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        }
      }
    },
    "dedicatedCloud.HostStockHypervisor": {
      "id": "HostStockHypervisor",
      "namespace": "dedicatedCloud",
      "description": "Hypervisor and their availability",
      "properties": {
        "value": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of available hypervisors",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Version of hypervisor",
          "required": true
        }
      }
    },
    "dedicatedCloud.HostStockProcGen": {
      "id": "HostStockProcGen",
      "namespace": "dedicatedCloud",
      "description": "Processor generation and their availability",
      "properties": {
        "cpuGeneration": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "CPU generation",
          "required": true
        },
        "value": {
          "type": "dedicatedCloud.HostStockHypervisor[]",
          "fullType": "dedicatedCloud.HostStockHypervisor[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of available hosts",
          "required": true
        }
      }
    },
    "dedicatedCloud.HostStockProfile": {
      "id": "HostStockProfile",
      "namespace": "dedicatedCloud",
      "description": "HostProfiles and their availability",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Id of host profile",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of host profile",
          "required": true
        },
        "ref": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Reference of host profile",
          "required": true
        },
        "value": {
          "type": "dedicatedCloud.HostStockProcGen[]",
          "fullType": "dedicatedCloud.HostStockProcGen[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Available hosts",
          "required": true
        }
      }
    },
    "dedicatedCloud.HypervisorVersionEnum": {
      "id": "HypervisorVersionEnum",
      "namespace": "dedicatedCloud",
      "description": "The Hypervisor version of this Dedicated Cloud component",
      "enum": [
        "4.1",
        "5.0",
        "5.1",
        "5.5",
        "6.0",
        "6.5",
        "6.7",
        "hv3.1",
        "hvdc3.1",
        "nc1.0"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.Ip": {
      "id": "Ip",
      "namespace": "dedicatedCloud",
      "description": "IP Blocks associated with a Private Cloud",
      "properties": {
        "country": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "gateway": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "Gateway value",
          "required": true
        },
        "netmask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "Netmask value",
          "required": true
        },
        "network": {
          "type": "ipv4Block",
          "fullType": "ipv4Block",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP ex: 213.186.33.34/24",
          "required": true
        },
        "networkName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network name",
          "required": true
        },
        "register": {
          "type": "dedicatedCloud.BlockRegisterEnum",
          "fullType": "dedicatedCloud.BlockRegisterEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The Regional Internet Registry of this Ip Block",
          "required": true
        },
        "vlanNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Vlan where this network is routed",
          "required": true
        }
      }
    },
    "dedicatedCloud.IpCountriesEnum": {
      "id": "IpCountriesEnum",
      "namespace": "dedicatedCloud",
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
      "enumType": "coreTypes.CountryEnum"
    },
    "dedicatedCloud.IpDetails": {
      "id": "IpDetails",
      "namespace": "dedicatedCloud",
      "description": "Details about an Ip",
      "properties": {
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "IP address",
          "required": true
        },
        "reverse": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "IP address reverse record",
          "required": false
        },
        "usage": {
          "type": "dedicatedCloud.ipUsageEnum",
          "fullType": "dedicatedCloud.ipUsageEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "IP address usage",
          "required": true
        },
        "usageDetails": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "IP address usage details",
          "required": false
        }
      }
    },
    "dedicatedCloud.ManagementInterfaceEnum": {
      "id": "ManagementInterfaceEnum",
      "namespace": "dedicatedCloud",
      "description": "The management interface of this Dedicated Cloud",
      "enum": [
        "azure",
        "openstack",
        "systemcenter",
        "vcloud",
        "vcsa",
        "vsphere"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.Nsx": {
      "id": "Nsx",
      "namespace": "dedicatedCloud",
      "description": "The Private Cloud Nsx option",
      "properties": {
        "state": {
          "type": "dedicatedCloud.option.StateEnum",
          "fullType": "dedicatedCloud.option.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Url of the NSX API",
          "required": false
        }
      }
    },
    "dedicatedCloud.ObjectRight": {
      "id": "ObjectRight",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud User object right",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the object",
          "required": true
        },
        "objectRightId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "propagate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Right propagation on children objects",
          "required": true
        },
        "right": {
          "type": "dedicatedCloud.right.RightEnum",
          "fullType": "dedicatedCloud.right.RightEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "User access on the VMware object",
          "required": true
        },
        "type": {
          "type": "dedicatedCloud.right.UserObjectRightTypeEnum",
          "fullType": "dedicatedCloud.right.UserObjectRightTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the object",
          "required": true
        },
        "vmwareObjectId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The VMware MoRef of the object",
          "required": true
        }
      }
    },
    "dedicatedCloud.Os": {
      "id": "Os",
      "namespace": "dedicatedCloud",
      "description": "Hypervisors actually available in Private Cloud",
      "properties": {
        "fullName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Full name of hypervisor",
          "required": true
        },
        "lastModificationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last modification of hypervisor",
          "required": true
        },
        "shortName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Short name of hypervisor",
          "required": true
        }
      }
    },
    "dedicatedCloud.PccStockProfile": {
      "id": "PccStockProfile",
      "namespace": "dedicatedCloud",
      "description": "PCC and their availability",
      "properties": {
        "count": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Available PCC",
          "required": true
        },
        "mode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Kind of hypervisor",
          "required": true
        },
        "realVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hypervisor version",
          "required": true
        }
      }
    },
    "dedicatedCloud.PccZone": {
      "id": "PccZone",
      "namespace": "dedicatedCloud",
      "description": "PccZones actually available in Private Cloud",
      "properties": {
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of City",
          "required": true
        },
        "countryCode": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Country code",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of pccZone",
          "required": true
        },
        "pccZone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of pccZone",
          "required": true
        }
      }
    },
    "dedicatedCloud.PciDss": {
      "id": "PciDss",
      "namespace": "dedicatedCloud",
      "description": "The Private Cloud PCI-DSS option",
      "properties": {
        "state": {
          "type": "dedicatedCloud.option.StateEnum",
          "fullType": "dedicatedCloud.option.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        }
      }
    },
    "dedicatedCloud.PrivateGateway": {
      "id": "PrivateGateway",
      "namespace": "dedicatedCloud",
      "description": "Private management gateway deployed in your Private Cloud to block all public access",
      "properties": {
        "customerIp": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ip set on your private gateway in your network",
          "required": false
        },
        "customerNetmask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Your netmask set on the private gateway",
          "required": false
        },
        "customerPortGroup": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Portgroup in your Private Cloud used to deploy the private gateway",
          "required": false
        },
        "state": {
          "type": "dedicatedCloud.option.StateEnum",
          "fullType": "dedicatedCloud.option.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        }
      }
    },
    "dedicatedCloud.RestorePoint": {
      "id": "RestorePoint",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud Restore Point",
      "properties": {
        "creationTime": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation time of the restore point",
          "required": false
        },
        "isCorrupted": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Show if the restore point is corrupted",
          "required": true
        },
        "restorePointId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the restore point.",
          "required": true
        },
        "restorePointSize": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Size of the restore point",
          "required": true
        },
        "type": {
          "type": "dedicatedCloud.backup.BackupTypeEnum",
          "fullType": "dedicatedCloud.backup.BackupTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Type of the restore point",
          "required": false
        }
      }
    },
    "dedicatedCloud.Right": {
      "id": "Right",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud User right",
      "properties": {
        "canAddRessource": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Determine if the user can add ressources in your Private Cloud",
          "required": true
        },
        "datacenterId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "networkRole": {
          "type": "dedicatedCloud.right.NetworkRoleEnum",
          "fullType": "dedicatedCloud.right.NetworkRoleEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Determine how this user can interact with the Private Cloud V(x)Lans",
          "required": true
        },
        "right": {
          "type": "dedicatedCloud.right.RightEnum",
          "fullType": "dedicatedCloud.right.RightEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Determine what kind of access the User will have in this Datacenter of your Private Cloud",
          "required": true
        },
        "rightId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "vmNetworkRole": {
          "type": "dedicatedCloud.right.VmNetworkRoleEnum",
          "fullType": "dedicatedCloud.right.VmNetworkRoleEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Determine how this user can interact with the Private Cloud VM Network",
          "required": true
        }
      }
    },
    "dedicatedCloud.Robot": {
      "id": "Robot",
      "namespace": "dedicatedCloud",
      "description": "The robots used in Private Cloud",
      "properties": {
        "criticity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The criticity of this robot",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Description of this robot",
          "required": false
        },
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is this robot enabled",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The name of this robot",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The type of this robot",
          "required": true
        }
      }
    },
    "dedicatedCloud.ServicePack": {
      "id": "ServicePack",
      "namespace": "dedicatedCloud",
      "description": "List of Service Pack compliant with the current Private Cloud",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the Service Pack",
          "required": true
        },
        "options": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Options available in the Service Pack",
          "required": true
        }
      }
    },
    "dedicatedCloud.StateEnum": {
      "id": "StateEnum",
      "namespace": "dedicatedCloud",
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
        "unprovisionning"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.Task": {
      "id": "Task",
      "namespace": "dedicatedCloud",
      "description": "Operation on a Private Cloud component",
      "properties": {
        "createdBy": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creator of the task",
          "required": false
        },
        "createdFrom": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Origin of the task",
          "required": false
        },
        "datacenterId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "datacenterId of the associated dedicatedCloud.Datacenter object",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current progress description",
          "required": false
        },
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task end date",
          "required": false
        },
        "executionDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task execution date",
          "required": true
        },
        "filerId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "filerId of the associated dedicatedCloud.Filer object",
          "required": false
        },
        "hostId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "hostId of the associated dedicatedCloud.Host object",
          "required": false
        },
        "lastModificationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task last modification date",
          "required": false
        },
        "maintenanceDateFrom": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Maintenance task min allowed execution date",
          "required": false
        },
        "maintenanceDateTo": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Maintenance task max allowed execution date",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task name",
          "required": true
        },
        "network": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "network of the associated dedicatedCloud.Ip object",
          "required": false
        },
        "networkAccessId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "networkAccessId of the associated dedicatedCloud.AllowedNetwork object",
          "required": false
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "orderId of the associated billing.Order object",
          "required": false
        },
        "parentTaskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "taskId of the parent dedicatedCloud.Task object",
          "required": false
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current progress",
          "required": true
        },
        "state": {
          "type": "dedicatedCloud.TaskStateEnum",
          "fullType": "dedicatedCloud.TaskStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current Task state",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task id",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task type",
          "required": true
        },
        "userId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "userId of the associated dedicatedCloud.User object",
          "required": false
        },
        "vlanId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "vlanId of the parent dedicatedCloud.Vlan object",
          "required": false
        }
      }
    },
    "dedicatedCloud.TaskStateEnum": {
      "id": "TaskStateEnum",
      "namespace": "dedicatedCloud",
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
      "enumType": "string"
    },
    "dedicatedCloud.TwoFAWhitelistStateEnum": {
      "id": "TwoFAWhitelistStateEnum",
      "namespace": "dedicatedCloud",
      "description": "All states a Dedicated Cloud two factor authentication whitelist can be in",
      "enum": [
        "enabled",
        "enabling",
        "error",
        "migrating",
        "removed",
        "removing"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.User": {
      "id": "User",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud User",
      "properties": {
        "activationState": {
          "type": "dedicatedCloud.user.ActivationStateEnum",
          "fullType": "dedicatedCloud.user.ActivationStateEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Activation state of the user account",
          "required": false
        },
        "canManageIpFailOvers": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Defines if the user can manage ip failovers",
          "required": true
        },
        "canManageNetwork": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Defines if the user can manage the network",
          "required": true
        },
        "canManageRights": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Defines if the user can manage users rights",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Email address of the user",
          "required": false
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "First name of the user",
          "required": false
        },
        "fullAdminRo": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Defines if the user is a full admin in readonly",
          "required": true
        },
        "isEnableManageable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Check if the given Private Cloud user can be enabled or disabled ?",
          "required": true
        },
        "isTokenValidator": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Defines if the user can confirm security tokens (if a compatible option is enabled)",
          "required": true
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last name of the user",
          "required": false
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Login of the user",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the user",
          "required": true
        },
        "nsxRight": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is this User able to access nsx interface (requires NSX option)",
          "required": true
        },
        "phoneNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Mobile phone number of the user",
          "required": false
        },
        "receiveAlerts": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Defines if the user receives technical alerts",
          "required": true
        },
        "state": {
          "type": "dedicatedCloud.user.StateEnum",
          "fullType": "dedicatedCloud.user.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the user account",
          "required": true
        },
        "userId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "dedicatedCloud.UserAccessPolicyEnum": {
      "id": "UserAccessPolicyEnum",
      "namespace": "dedicatedCloud",
      "description": "Open or restricted access to management interface ?",
      "enum": [
        "filtered",
        "open"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.UserLogoutPolicyEnum": {
      "id": "UserLogoutPolicyEnum",
      "namespace": "dedicatedCloud",
      "description": "Which user will be disconnected first in case of quota of maximum connection is reached",
      "enum": [
        "first",
        "last"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.VMEncryption": {
      "id": "VMEncryption",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud VM Encryption option",
      "properties": {
        "state": {
          "type": "dedicatedCloud.option.StateEnum",
          "fullType": "dedicatedCloud.option.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        }
      }
    },
    "dedicatedCloud.VMEncryptionAccessNetwork": {
      "id": "VMEncryptionAccessNetwork",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud VM Encryption option access network",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of your option access network",
          "required": true
        },
        "ip": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP address of the remote service",
          "required": true
        },
        "kmsId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the VM Encryption KMS",
          "required": true
        },
        "kmsTcpPort": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "VM Encryption KMS TCP port",
          "required": true
        },
        "sslThumbprint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "SSL thumbprint of the remote service",
          "required": true
        },
        "state": {
          "type": "dedicatedCloud.optionAccessNetwork.StateEnum",
          "fullType": "dedicatedCloud.optionAccessNetwork.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        }
      }
    },
    "dedicatedCloud.Vendor": {
      "id": "Vendor",
      "namespace": "dedicatedCloud",
      "description": "The Private Cloud Vendor option",
      "properties": {
        "vendorName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "name",
          "required": true
        }
      }
    },
    "dedicatedCloud.VendorObjectTypeEnum": {
      "id": "VendorObjectTypeEnum",
      "namespace": "dedicatedCloud",
      "description": "Dedicated Cloud vendors objects types",
      "enum": [
        "cluster",
        "datacenter",
        "filer",
        "host",
        "vm"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.Version": {
      "id": "Version",
      "namespace": "dedicatedCloud",
      "description": "Detailed version",
      "properties": {
        "build": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "major": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "minor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "dedicatedCloud.Vlan": {
      "id": "Vlan",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud Vlan",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "routingRateLimit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Speed in Mbps",
          "required": true
        },
        "state": {
          "type": "dedicatedCloud.vlan.StateEnum",
          "fullType": "dedicatedCloud.vlan.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "type": {
          "type": "dedicatedCloud.vlan.TypeEnum",
          "fullType": "dedicatedCloud.vlan.TypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "vlanId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "vlanNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "dedicatedCloud.Vm": {
      "id": "Vm",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud Virtual Machine",
      "properties": {
        "backup": {
          "type": "dedicatedCloud.backup.Backup",
          "fullType": "dedicatedCloud.backup.Backup",
          "canBeNull": true,
          "readOnly": true,
          "description": "Backup associated to this Virtual Machine",
          "required": false
        },
        "cdroms": {
          "type": "dedicatedCloud.virtualMachineCdrom[]",
          "fullType": "dedicatedCloud.virtualMachineCdrom[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Virtual machine cdroms devices",
          "required": false
        },
        "clusterName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Cluster of the virtual machine.",
          "required": false
        },
        "cpuMax": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Maximum CPU performance, in MHz.",
          "required": false
        },
        "cpuNum": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of processors in the virtual machine.",
          "required": false
        },
        "cpuReady": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In millisecond",
          "required": false
        },
        "cpuReadyPercent": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Percentage of time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In percent",
          "required": false
        },
        "cpuUsed": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current CPU performance, in MHz.",
          "required": false
        },
        "filers": {
          "type": "dedicatedCloud.vmFiler[]",
          "fullType": "dedicatedCloud.vmFiler[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "List of filers in use by the virtual machine.",
          "required": false
        },
        "folderName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Folder of the virtual machine.",
          "required": false
        },
        "hostName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of the host hosting the virtual machine.",
          "required": false
        },
        "memoryMax": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Memory size of the virtual machine, in MB",
          "required": false
        },
        "memoryTps": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Amount of guest memory that is shared with other virtual machines, in Mb",
          "required": false
        },
        "memoryUsed": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current memory utilization, in MB",
          "required": false
        },
        "moRef": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "moRef of the virtual machine.",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of the virtual machine.",
          "required": false
        },
        "netPacketRx": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of packets received.",
          "required": false
        },
        "netPacketTx": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of packets transmitted.",
          "required": false
        },
        "netRx": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Rate at which data is received. In KB/s",
          "required": false
        },
        "netTx": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Rate at which data is transmitted. In KB/s",
          "required": false
        },
        "networks": {
          "type": "dedicatedCloud.vmNetwork[]",
          "fullType": "dedicatedCloud.vmNetwork[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "List of the networks link to this virtual machine",
          "required": false
        },
        "powerState": {
          "type": "dedicatedCloud.virtualMachinePowerState",
          "fullType": "dedicatedCloud.virtualMachinePowerState",
          "canBeNull": false,
          "readOnly": true,
          "description": "Power state of the virtual machine.",
          "required": true
        },
        "readLatency": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Amount of time for a read operation from the virtual disk. In millisecond",
          "required": false
        },
        "readPerSecond": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of read issued per second to the virtual disk. In millisecond",
          "required": false
        },
        "readRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Rate of reading data from the virtual disk. In KB/s",
          "required": false
        },
        "roleFt": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The index of the current VM in instanceUuids array starting from 1, so 1 means that it is the primary VM.",
          "required": false
        },
        "snapshotNum": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of snapshot of the virtual machine.",
          "required": false
        },
        "stateFt": {
          "type": "dedicatedCloud.virtualMachineFaultToleranceState",
          "fullType": "dedicatedCloud.virtualMachineFaultToleranceState",
          "canBeNull": true,
          "readOnly": true,
          "description": "The fault tolerance state of the virtual machine.",
          "required": false
        },
        "vmId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the virtual machine.",
          "required": true
        },
        "vmwareTools": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current version status of VMware Tools in the guest operating system.",
          "required": false
        },
        "vmwareToolsVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current version of VMware Tools",
          "required": false
        },
        "writeLatency": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Amount of time for a write operation from the virtual disk. In millisecond",
          "required": false
        },
        "writePerSecond": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of write issued per second to the virtual disk. In millisecond",
          "required": false
        },
        "writeRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Rate of writing data from the virtual disk. In KB/s",
          "required": false
        }
      }
    },
    "dedicatedCloud.Vrops": {
      "id": "Vrops",
      "namespace": "dedicatedCloud",
      "description": "The Private Cloud vRealize Operations option",
      "properties": {
        "state": {
          "type": "dedicatedCloud.option.StateEnum",
          "fullType": "dedicatedCloud.option.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the option",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Url of the vRealize Operations interface",
          "required": false
        }
      }
    },
    "dedicatedCloud.ZpoolStockProfile": {
      "id": "ZpoolStockProfile",
      "namespace": "dedicatedCloud",
      "description": "Zpool and their availability",
      "properties": {
        "minimumAvailability": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum accepted available zpools",
          "required": true
        },
        "profile": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Reference of zpool",
          "required": true
        },
        "realCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Available zpools",
          "required": true
        }
      }
    },
    "dedicatedCloud.backup.Backup": {
      "id": "Backup",
      "namespace": "dedicatedCloud.backup",
      "description": "Details about a backup",
      "properties": {
        "allocatedDisk": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Disk space allocated to the virtual machine (in GB)",
          "required": false
        },
        "backupDays": {
          "type": "dedicatedCloud.backup.BackupDaysEnum[]",
          "fullType": "dedicatedCloud.backup.BackupDaysEnum[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of days your Virtual Machine will be backuped",
          "required": false
        },
        "encryption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Backup is encrypted",
          "required": false
        },
        "lastCreationTime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Last creation time of the backup job",
          "required": false
        },
        "lastDuration": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Last duration of the backup job",
          "required": false
        },
        "lastResult": {
          "type": "dedicatedCloud.backup.JobStateEnum",
          "fullType": "dedicatedCloud.backup.JobStateEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Last result of the backup job",
          "required": false
        },
        "lastSuccessfulCreationTime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Last successful creation time of the backup job",
          "required": false
        },
        "lastSuccessfulDuration": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Last successful duration of the backup job",
          "required": false
        },
        "offerType": {
          "type": "dedicatedCloud.backup.OfferTypeEnum",
          "fullType": "dedicatedCloud.backup.OfferTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Offer type of the backup job",
          "required": false
        },
        "restorePoints": {
          "type": "dedicatedCloud.backup.RestorePoint[]",
          "fullType": "dedicatedCloud.backup.RestorePoint[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Restore points of this backup job",
          "required": false
        },
        "retentionTime": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of days before the backup is deleted",
          "required": false
        },
        "state": {
          "type": "dedicatedCloud.backup.StateEnum",
          "fullType": "dedicatedCloud.backup.StateEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "State of the backup job",
          "required": false
        }
      }
    },
    "dedicatedCloud.backup.BackupCapabilities": {
      "id": "BackupCapabilities",
      "namespace": "dedicatedCloud.backup",
      "description": "Details about BackupCapabilities",
      "properties": {
        "backupDays": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Customized backup days",
          "required": true
        },
        "customReport": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Customized Backup report",
          "required": true
        },
        "dedicatedProxy": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicates additional backup proxy for large disk size VM",
          "required": true
        },
        "encryption": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicates if backup will be encrypted",
          "required": true
        },
        "mailAddress": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicates if customer can add an additional email address for backup report",
          "required": true
        },
        "minimumFullBackups": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum number of full backups",
          "required": true
        },
        "offerName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of offer type",
          "required": true
        },
        "proxyPerHost": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Backup Proxy per host",
          "required": true
        },
        "replication": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Backup Replication enabled",
          "required": true
        },
        "retention": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Restore points",
          "required": true
        },
        "scheduleHour": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Scheduled hour of backup start customizable",
          "required": true
        }
      }
    },
    "dedicatedCloud.backup.BackupDaysEnum": {
      "id": "BackupDaysEnum",
      "namespace": "dedicatedCloud.backup",
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
      "enumType": "string"
    },
    "dedicatedCloud.backup.BackupTypeEnum": {
      "id": "BackupTypeEnum",
      "namespace": "dedicatedCloud.backup",
      "description": "All the type of a restore point",
      "enum": [
        "full",
        "incremental"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.backup.JobStateEnum": {
      "id": "JobStateEnum",
      "namespace": "dedicatedCloud.backup",
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
      "enumType": "string"
    },
    "dedicatedCloud.backup.OfferTypeEnum": {
      "id": "OfferTypeEnum",
      "namespace": "dedicatedCloud.backup",
      "description": "All the offer type of the backup",
      "enum": [
        "advanced",
        "backup",
        "classic",
        "legacy",
        "premium"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.backup.OptimizeMessageEnum": {
      "id": "OptimizeMessageEnum",
      "namespace": "dedicatedCloud.backup",
      "description": "All messages descriptions for the proxies optimization",
      "enum": [
        "hasMoreBackupJobs",
        "hasMoreProxies",
        "hasSufficientProxies",
        "noBackupJobs"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.backup.OptimizeProxies": {
      "id": "OptimizeProxies",
      "namespace": "dedicatedCloud.backup",
      "description": "Details about proxies Optimization",
      "properties": {
        "message": {
          "type": "dedicatedCloud.backup.OptimizeMessageEnum",
          "fullType": "dedicatedCloud.backup.OptimizeMessageEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Brief information about recommendation",
          "required": true
        },
        "numberOfProxiesDeployed": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of proxies deployed in the Datacenter",
          "required": true
        },
        "numberOfProxiesImpact": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of proxies get impacted by recommendation",
          "required": true
        },
        "recommendation": {
          "type": "dedicatedCloud.backup.OptimizeRecommendationEnum",
          "fullType": "dedicatedCloud.backup.OptimizeRecommendationEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Action recommended for the optimization",
          "required": true
        }
      }
    },
    "dedicatedCloud.backup.OptimizeRecommendationEnum": {
      "id": "OptimizeRecommendationEnum",
      "namespace": "dedicatedCloud.backup",
      "description": "All recommendations for the proxies optimization",
      "enum": [
        "add",
        "optimized",
        "remove"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.backup.RestorePoint": {
      "id": "RestorePoint",
      "namespace": "dedicatedCloud.backup",
      "description": "Details about a restore point",
      "properties": {
        "creationTime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Creation time of the restore point",
          "required": false
        },
        "isCorrupted": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Show if the restore point is corrupted",
          "required": false
        },
        "restorePointId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Id of the restore point",
          "required": true
        },
        "size": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Size of the restore point",
          "required": false
        },
        "type": {
          "type": "dedicatedCloud.backup.BackupTypeEnum",
          "fullType": "dedicatedCloud.backup.BackupTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Type of the restore point",
          "required": false
        }
      }
    },
    "dedicatedCloud.backup.StateEnum": {
      "id": "StateEnum",
      "namespace": "dedicatedCloud.backup",
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
      "enumType": "string"
    },
    "dedicatedCloud.capabilities.FeatureStatusEnum": {
      "id": "FeatureStatusEnum",
      "namespace": "dedicatedCloud.capabilities",
      "description": "All Dedicated Cloud feature status available",
      "enum": [
        "active",
        "comingSoon",
        "no"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.dedicatedCloud": {
      "id": "dedicatedCloud",
      "namespace": "dedicatedCloud",
      "description": "Private Cloud",
      "properties": {
        "advancedSecurity": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Advanced security state",
          "required": true
        },
        "bandwidth": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The current bandwidth of your Private Cloud",
          "required": true
        },
        "billingType": {
          "type": "dedicatedCloud.BillingTypeEnum",
          "fullType": "dedicatedCloud.BillingTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Billing type of your Private Cloud",
          "required": true
        },
        "certifiedInterfaceUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Url to the Private Cloud certified interface",
          "required": true
        },
        "commercialRange": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The current version of your Private Cloud",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of your Private Cloud",
          "required": true
        },
        "generation": {
          "type": "dedicatedCloud.GenerationEnum",
          "fullType": "dedicatedCloud.GenerationEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Generation of your Private Cloud",
          "required": true
        },
        "location": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Datacenter where your Private Cloud is physically located",
          "required": true
        },
        "managementInterface": {
          "type": "dedicatedCloud.ManagementInterfaceEnum",
          "fullType": "dedicatedCloud.ManagementInterfaceEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The management interface name",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service name of your Private Cloud",
          "required": true
        },
        "servicePackName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of the current service pack",
          "required": false
        },
        "spla": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "SPLA licensing state",
          "required": true
        },
        "sslV3": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Enable SSL v3 support. Warning : this option is not recommended as it was recognized as a security breach. If this is enabled, we advise you to enable the filtered User access policy",
          "required": false
        },
        "state": {
          "type": "dedicatedCloud.StateEnum",
          "fullType": "dedicatedCloud.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of your Private Cloud",
          "required": true
        },
        "userAccessPolicy": {
          "type": "dedicatedCloud.UserAccessPolicyEnum",
          "fullType": "dedicatedCloud.UserAccessPolicyEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Access policy of your Private Cloud : opened to every IPs or filtered",
          "required": true
        },
        "userLimitConcurrentSession": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The maximum amount of connected users allowed on the Private Cloud management interface",
          "required": true
        },
        "userLogoutPolicy": {
          "type": "dedicatedCloud.UserLogoutPolicyEnum",
          "fullType": "dedicatedCloud.UserLogoutPolicyEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "userSessionTimeout": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The timeout (in seconds) for the user sessions on the Private Cloud management interface. 0 value disable the timeout",
          "required": true
        },
        "vScopeUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Url to the Private Cloud vScope interface",
          "required": true
        },
        "version": {
          "type": "dedicatedCloud.Version",
          "fullType": "dedicatedCloud.Version",
          "canBeNull": false,
          "readOnly": true,
          "description": "Version of the management interface",
          "required": true
        },
        "webInterfaceUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Url to the Private Cloud web interface",
          "required": true
        }
      }
    },
    "dedicatedCloud.disasterRecovery.DrpTypeEnum": {
      "id": "DrpTypeEnum",
      "namespace": "dedicatedCloud.disasterRecovery",
      "description": "Disaster Recovery Plan Types",
      "enum": [
        "onPremise",
        "ovh"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.disasterRecovery.LocalSiteDetails": {
      "id": "LocalSiteDetails",
      "namespace": "dedicatedCloud.disasterRecovery",
      "description": "Information on the local datacenter",
      "properties": {
        "role": {
          "type": "dedicatedCloud.disasterRecovery.SiteRoleEnum",
          "fullType": "dedicatedCloud.disasterRecovery.SiteRoleEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zvm mode configured",
          "required": true
        },
        "state": {
          "type": "dedicatedCloud.StateEnum",
          "fullType": "dedicatedCloud.StateEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "State of the local Zvm",
          "required": false
        },
        "type": {
          "type": "dedicatedCloud.disasterRecovery.SiteTypeEnum",
          "fullType": "dedicatedCloud.disasterRecovery.SiteTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of hosting for the local datacenter",
          "required": true
        },
        "zertoVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Installed version of Zerto",
          "required": true
        },
        "zvmIp": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "Local Network Ip of the Zerto virtual manager",
          "required": false
        }
      }
    },
    "dedicatedCloud.disasterRecovery.Profile": {
      "id": "Profile",
      "namespace": "dedicatedCloud.disasterRecovery",
      "description": "State of the disaster recovery option",
      "properties": {
        "drpType": {
          "type": "dedicatedCloud.disasterRecovery.DrpTypeEnum",
          "fullType": "dedicatedCloud.disasterRecovery.DrpTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Disaster Recovery Plan Type",
          "required": false
        },
        "localSiteInformation": {
          "type": "dedicatedCloud.disasterRecovery.LocalSiteDetails",
          "fullType": "dedicatedCloud.disasterRecovery.LocalSiteDetails",
          "canBeNull": true,
          "readOnly": false,
          "description": "Information about the site installed on this Private Cloud",
          "required": false
        },
        "remoteSiteInformation": {
          "type": "dedicatedCloud.disasterRecovery.RemoteSiteDetails",
          "fullType": "dedicatedCloud.disasterRecovery.RemoteSiteDetails",
          "canBeNull": true,
          "readOnly": false,
          "description": "Information about the remote paired site",
          "required": false
        },
        "state": {
          "type": "dedicatedCloud.StateEnum",
          "fullType": "dedicatedCloud.StateEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "State of the disaster recovery service",
          "required": true
        },
        "systemVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Technical solution used",
          "required": true
        }
      }
    },
    "dedicatedCloud.disasterRecovery.RemoteSiteDetails": {
      "id": "RemoteSiteDetails",
      "namespace": "dedicatedCloud.disasterRecovery",
      "description": "Information on the remote datacenter linked to the local one",
      "properties": {
        "datacenterId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Datacenter Id (if hosted by OVH)",
          "required": false
        },
        "datacenterName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Datacenter name (if hosted by OVH)",
          "required": false
        },
        "lastVpnConfig": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Last VPN config change date (if type is onPremise)",
          "required": false
        },
        "remoteEndpointInternalIp": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": false,
          "description": "Stunnel endpoint internal IP (if type is onPremise)",
          "required": false
        },
        "remoteEndpointPublicIp": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": false,
          "description": "Stunnel endpoint public IP (if type is onPremise)",
          "required": false
        },
        "remoteZvmInternalIp": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": false,
          "description": "Remote ZVM IP (if type is onPremise)",
          "required": false
        },
        "role": {
          "type": "dedicatedCloud.disasterRecovery.SiteRoleEnum",
          "fullType": "dedicatedCloud.disasterRecovery.SiteRoleEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Zvm mode configured",
          "required": false
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Service name (if hosted by OVH)",
          "required": false
        },
        "state": {
          "type": "dedicatedCloud.StateEnum",
          "fullType": "dedicatedCloud.StateEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "State of the remote Zvm",
          "required": false
        },
        "type": {
          "type": "dedicatedCloud.disasterRecovery.SiteTypeEnum",
          "fullType": "dedicatedCloud.disasterRecovery.SiteTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of hosting for the remote datacenter",
          "required": true
        },
        "vpnConfigState": {
          "type": "dedicatedCloud.disasterRecovery.VpnConfigStateEnum",
          "fullType": "dedicatedCloud.disasterRecovery.VpnConfigStateEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "VPN configuration state (if type is onPremise)",
          "required": false
        },
        "zertoVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Installed version of Zerto",
          "required": false
        }
      }
    },
    "dedicatedCloud.disasterRecovery.SiteRoleEnum": {
      "id": "SiteRoleEnum",
      "namespace": "dedicatedCloud.disasterRecovery",
      "description": "Site manager configured mode",
      "enum": [
        "primary",
        "secondary",
        "single"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.disasterRecovery.SiteTypeEnum": {
      "id": "SiteTypeEnum",
      "namespace": "dedicatedCloud.disasterRecovery",
      "description": "Site manager hosting type",
      "enum": [
        "onPremise",
        "ovhPrivateCloud"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.disasterRecovery.VpnConfigStateEnum": {
      "id": "VpnConfigStateEnum",
      "namespace": "dedicatedCloud.disasterRecovery",
      "description": "Zerto VPN configuration state",
      "enum": [
        "configured",
        "configuring",
        "error",
        "notConfigured",
        "tunnelError"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.filer.HourlyConsumption": {
      "id": "HourlyConsumption",
      "namespace": "dedicatedCloud.filer",
      "description": "Hourly consumption of a filer",
      "properties": {
        "consumption": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Consumption of the Filer",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last update",
          "required": true
        }
      }
    },
    "dedicatedCloud.filer.Location": {
      "id": "Location",
      "namespace": "dedicatedCloud.filer",
      "description": "Location of the Filer",
      "properties": {
        "datacenter": {
          "type": "dedicated.DatacenterEnum",
          "fullType": "dedicated.DatacenterEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Datacenter of the Filer.",
          "required": true
        },
        "rack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Rack of the slave Filer.",
          "required": true
        },
        "room": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Room of the Filer.",
          "required": true
        }
      }
    },
    "dedicatedCloud.filer.NodeTypeEnum": {
      "id": "NodeTypeEnum",
      "namespace": "dedicatedCloud.filer",
      "description": "All nodes types for a Filer",
      "enum": [
        "master",
        "slave"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.filer.Profile": {
      "id": "Profile",
      "namespace": "dedicatedCloud.filer",
      "description": "A Filer profile",
      "properties": {
        "fullName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Human-Readable name",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Commercial name",
          "required": true
        },
        "size": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "dedicatedCloud.filer.StateEnum": {
      "id": "StateEnum",
      "namespace": "dedicatedCloud.filer",
      "description": "All states a Dedicated Cloud Filer can be in",
      "enum": [
        "adding",
        "delivered",
        "error",
        "removing",
        "unknown"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.host.HourlyConsumption": {
      "id": "HourlyConsumption",
      "namespace": "dedicatedCloud.host",
      "description": "Hourly consumption of a host",
      "properties": {
        "consumption": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Consumption of the Host.",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last update.",
          "required": true
        }
      }
    },
    "dedicatedCloud.host.Location": {
      "id": "Location",
      "namespace": "dedicatedCloud.host",
      "description": "Location of the Host",
      "properties": {
        "datacenter": {
          "type": "dedicated.DatacenterEnum",
          "fullType": "dedicated.DatacenterEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Datacenter of the Host.",
          "required": true
        },
        "rack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Rack of the Host.",
          "required": true
        },
        "room": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Room of the Host.",
          "required": true
        }
      }
    },
    "dedicatedCloud.host.Profile": {
      "id": "Profile",
      "namespace": "dedicatedCloud.host",
      "description": "A Host profile",
      "properties": {
        "core": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "cpu": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "ram": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "dedicatedCloud.host.StateEnum": {
      "id": "StateEnum",
      "namespace": "dedicatedCloud.host",
      "description": "All states a Dedicated Cloud Host can be in",
      "enum": [
        "adding",
        "delivered",
        "error",
        "removing",
        "unknown"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.hostSystemConnectionState": {
      "id": "hostSystemConnectionState",
      "namespace": "dedicatedCloud",
      "description": "The connection state of the host",
      "enum": [
        "connected",
        "disconnected",
        "notResponding"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.ipUsageEnum": {
      "id": "ipUsageEnum",
      "namespace": "dedicatedCloud",
      "description": "IP address usage",
      "enum": [
        "reserved",
        "vm"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.metricsToken": {
      "id": "metricsToken",
      "namespace": "dedicatedCloud",
      "description": "A structure describing metrics token for vScope graphs data",
      "properties": {
        "opentsdbEndpoint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Endpoint to query graphs using opentsdb protocol",
          "required": true
        },
        "token": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "Token used to connect to Metrics in order to query data",
          "required": true
        },
        "warpEndpoint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Endpoint to query graphs using warp10 protocol",
          "required": true
        }
      }
    },
    "dedicatedCloud.option.StateEnum": {
      "id": "StateEnum",
      "namespace": "dedicatedCloud.option",
      "description": "States of a Private Cloud option",
      "enum": [
        "disabled",
        "disabling",
        "enabled",
        "enabling",
        "error",
        "migrating",
        "unknown"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.optionAccessNetwork.StateEnum": {
      "id": "StateEnum",
      "namespace": "dedicatedCloud.optionAccessNetwork",
      "description": "States of a Private Cloud option",
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
      "enumType": "string"
    },
    "dedicatedCloud.optionCompatibility": {
      "id": "optionCompatibility",
      "namespace": "dedicatedCloud",
      "description": "A structure describing option compatibility",
      "properties": {
        "newCommercialVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The new/future commercial version",
          "required": true
        },
        "oldCommercialVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The old/current commercial version",
          "required": true
        }
      }
    },
    "dedicatedCloud.passwordPolicy": {
      "id": "passwordPolicy",
      "namespace": "dedicatedCloud",
      "description": "A structure describing the current password policy for your Dedicated Cloud",
      "properties": {
        "deniedChars": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of denied characters in the password",
          "required": true
        },
        "digitMandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not a digit (0-9) is mandatory in the password",
          "required": true
        },
        "historyCheck": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of previous passwords to keep",
          "required": true
        },
        "letterMandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not a letter (a-z or A-Z) is mandatory in the password",
          "required": true
        },
        "lowercaseLetterMandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not a lowercase letter (a-z) is mandatory in the password",
          "required": true
        },
        "maxLength": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum lenght of the password",
          "required": true
        },
        "minLength": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum lenght of the password",
          "required": true
        },
        "specialMandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not a special character (\\W or _) is mandatory in the password",
          "required": true
        },
        "uppercaseLetterMandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not an uppercase letter (A-Z) is mandatory in the password",
          "required": true
        },
        "validityPeriod": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Password validity period (in days)",
          "required": true
        }
      }
    },
    "dedicatedCloud.releaseEnum": {
      "id": "releaseEnum",
      "namespace": "dedicatedCloud",
      "description": "All vCenter upgrade possibility",
      "enum": [
        "major",
        "minor"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.resourceNewPrices": {
      "id": "resourceNewPrices",
      "namespace": "dedicatedCloud",
      "description": "A structure describing the Resource's new price",
      "properties": {
        "resources": {
          "type": "dedicatedCloud.resourceNewPricesEntry[]",
          "fullType": "dedicatedCloud.resourceNewPricesEntry[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "dedicatedCloud.resourceNewPricesEntry": {
      "id": "resourceNewPricesEntry",
      "namespace": "dedicatedCloud",
      "description": "A structure describing the Resource's new price",
      "properties": {
        "billingType": {
          "type": "dedicatedCloud.ressources.BillingTypeEnum",
          "fullType": "dedicatedCloud.ressources.BillingTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "changed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "newPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "oldPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "resourceType": {
          "type": "dedicatedCloud.ressources.ResourceTypeEnum",
          "fullType": "dedicatedCloud.ressources.ResourceTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "dedicatedCloud.ressources.BillingTypeEnum": {
      "id": "BillingTypeEnum",
      "namespace": "dedicatedCloud.ressources",
      "description": "The billing type of this Dedicated Cloud ressource",
      "enum": [
        "freeSpare",
        "hourly",
        "monthly",
        "undefined"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.ressources.ResourceTypeEnum": {
      "id": "ResourceTypeEnum",
      "namespace": "dedicatedCloud.ressources",
      "description": "The resource type of this Dedicated Cloud ressource",
      "enum": [
        "host",
        "storage"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.right.NetworkRoleEnum": {
      "id": "NetworkRoleEnum",
      "namespace": "dedicatedCloud.right",
      "description": "Determine how this user can act on the Dedicated Cloud vLans or vxLans",
      "enum": [
        "admin",
        "manager",
        "noAccess",
        "readonly"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.right.RightEnum": {
      "id": "RightEnum",
      "namespace": "dedicatedCloud.right",
      "description": "All rights a Dedicated Cloud user may be associated with",
      "enum": [
        "admin",
        "disabled",
        "readonly",
        "readwrite"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.right.UserObjectRightTypeEnum": {
      "id": "UserObjectRightTypeEnum",
      "namespace": "dedicatedCloud.right",
      "description": "All types of objects handled in objectRights",
      "enum": [
        "cluster",
        "datastore",
        "dvportgroup",
        "folder",
        "pool",
        "vm"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.right.VmNetworkRoleEnum": {
      "id": "VmNetworkRoleEnum",
      "namespace": "dedicatedCloud.right",
      "description": "Determine how this user can act on the Dedicated Cloud vmNetwork",
      "enum": [
        "admin",
        "noAccess",
        "readonly"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.servicePackEnum": {
      "id": "servicePackEnum",
      "namespace": "dedicatedCloud",
      "description": "List of possible service pack",
      "enum": [
        "default",
        "hds",
        "hipaa",
        "legacy",
        "nsx",
        "nsx-and-vrops",
        "pcidss",
        "vrops"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.servicePackStateEnum": {
      "id": "servicePackStateEnum",
      "namespace": "dedicatedCloud",
      "description": "List of possible state of the service pack",
      "enum": [
        "activating",
        "active",
        "error",
        "waitingForCustomer"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.servicePackStatus": {
      "id": "servicePackStatus",
      "namespace": "dedicatedCloud",
      "description": "Service pack informations",
      "properties": {
        "name": {
          "type": "dedicatedCloud.servicePackEnum",
          "fullType": "dedicatedCloud.servicePackEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the service pack",
          "required": true
        },
        "state": {
          "type": "dedicatedCloud.servicePackStateEnum",
          "fullType": "dedicatedCloud.servicePackStateEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "State of the service pack",
          "required": true
        }
      }
    },
    "dedicatedCloud.twoFAWhitelist": {
      "id": "twoFAWhitelist",
      "namespace": "dedicatedCloud",
      "description": "Trust IP which can bypass the two factor authentication",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of the trusted IP",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the trusted IP",
          "required": true
        },
        "ip": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP address of the remote service",
          "required": true
        },
        "state": {
          "type": "dedicatedCloud.TwoFAWhitelistStateEnum",
          "fullType": "dedicatedCloud.TwoFAWhitelistStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the whitelist",
          "required": true
        }
      }
    },
    "dedicatedCloud.user.ActivationStateEnum": {
      "id": "ActivationStateEnum",
      "namespace": "dedicatedCloud.user",
      "description": "All activation states a Dedicated Cloud User can have",
      "enum": [
        "disabled",
        "disabling",
        "enabled",
        "enabling",
        "toDisable",
        "toEnable"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.user.StateEnum": {
      "id": "StateEnum",
      "namespace": "dedicatedCloud.user",
      "description": "All states a Dedicated Cloud User can be in",
      "enum": [
        "creating",
        "deleting",
        "delivered",
        "error"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.vcenter": {
      "id": "vcenter",
      "namespace": "dedicatedCloud",
      "description": "A structure describing the vCenter available upgrade for your Dedicated Cloud",
      "properties": {
        "currentVersion": {
          "type": "dedicatedCloud.Version",
          "fullType": "dedicatedCloud.Version",
          "canBeNull": false,
          "readOnly": false,
          "description": "Current vCenter version",
          "required": true
        },
        "lastMajor": {
          "type": "dedicatedCloud.Version",
          "fullType": "dedicatedCloud.Version",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last major vCenter version",
          "required": true
        },
        "lastMinor": {
          "type": "dedicatedCloud.Version",
          "fullType": "dedicatedCloud.Version",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last minor vCenter version",
          "required": true
        }
      }
    },
    "dedicatedCloud.vendor.OvhId": {
      "id": "OvhId",
      "namespace": "dedicatedCloud.vendor",
      "description": "Representation of a Vendor object in OVH API",
      "properties": {
        "datacenterId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Datacenter id",
          "required": false
        },
        "filerId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Filer id",
          "required": false
        },
        "hostId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Host id",
          "required": false
        },
        "vmId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Vm id",
          "required": false
        }
      }
    },
    "dedicatedCloud.virtualDeviceConnectInfoStatus": {
      "id": "virtualDeviceConnectInfoStatus",
      "namespace": "dedicatedCloud",
      "description": "The connectable virtual device status",
      "enum": [
        "ok",
        "recoverableError",
        "unrecoverableError",
        "untried"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.virtualMachineCdrom": {
      "id": "virtualMachineCdrom",
      "namespace": "dedicatedCloud",
      "description": "A structure describing the cdrom configuration of a virtual machine",
      "properties": {
        "connected": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "iso": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "dedicatedCloud.virtualMachineFaultToleranceState": {
      "id": "virtualMachineFaultToleranceState",
      "namespace": "dedicatedCloud",
      "description": "The fault tolerance state of the virtual machine",
      "enum": [
        "disabled",
        "enabled",
        "needSecondary",
        "notConfigured",
        "running",
        "starting"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.virtualMachinePowerState": {
      "id": "virtualMachinePowerState",
      "namespace": "dedicatedCloud",
      "description": "The power state of the virtual machine",
      "enum": [
        "deleted",
        "poweredOff",
        "poweredOn",
        "suspended"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.vlan.StateEnum": {
      "id": "StateEnum",
      "namespace": "dedicatedCloud.vlan",
      "description": "All states a Dedicated Cloud Vlan can be in",
      "enum": [
        "available",
        "delivered",
        "disabled",
        "error",
        "removing",
        "reserved"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.vlan.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "dedicatedCloud.vlan",
      "description": "This Dedicated Cloud vlan type",
      "enum": [
        "admin",
        "free",
        "paid"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.vmFiler": {
      "id": "vmFiler",
      "namespace": "dedicatedCloud",
      "description": "A structure describing filers of a the virtual machine",
      "properties": {
        "committed": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "disks": {
          "type": "dedicatedCloud.vmFilerDisk[]",
          "fullType": "dedicatedCloud.vmFilerDisk[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "dedicatedCloud.vmFilerDisk": {
      "id": "vmFilerDisk",
      "namespace": "dedicatedCloud",
      "description": "A structure describing filer disks of a the virtual machine",
      "properties": {
        "capacity": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "dedicatedCloud.vmNetwork": {
      "id": "vmNetwork",
      "namespace": "dedicatedCloud",
      "description": "A structure describing the network of a the virtual machine",
      "properties": {
        "allowGuestControl": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "backing": {
          "type": "dedicatedCloud.vmNetworkBacking",
          "fullType": "dedicatedCloud.vmNetworkBacking",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "connected": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "controler": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "macAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "startConnected": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "status": {
          "type": "dedicatedCloud.virtualDeviceConnectInfoStatus",
          "fullType": "dedicatedCloud.virtualDeviceConnectInfoStatus",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "dedicatedCloud.vmNetworkBacking": {
      "id": "vmNetworkBacking",
      "namespace": "dedicatedCloud",
      "description": "A structure describing the backing network of a the virtual machine",
      "properties": {
        "deviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "portGroupKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "portKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "switchUuid": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "type": {
          "type": "dedicatedCloud.vmNetworkBackingTypeEnum",
          "fullType": "dedicatedCloud.vmNetworkBackingTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "useAutoDetect": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "valueMoref": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "dedicatedCloud.vmNetworkBackingTypeEnum": {
      "id": "vmNetworkBackingTypeEnum",
      "namespace": "dedicatedCloud",
      "description": "The type of the network backing",
      "enum": [
        "DVS",
        "VSS"
      ],
      "enumType": "string"
    },
    "nichandle.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "nichandle",
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
      "enumType": "string"
    },
    "order.CurrencyCodeEnum": {
      "id": "CurrencyCodeEnum",
      "namespace": "order",
      "enum": [
        "AUD",
        "CAD",
        "CZK",
        "EUR",
        "GBP",
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
      "enumType": "string"
    },
    "order.Price": {
      "id": "Price",
      "namespace": "order",
      "description": "Price with it's currency and textual representation",
      "properties": {
        "currencyCode": {
          "type": "order.CurrencyCodeEnum",
          "fullType": "order.CurrencyCodeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
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
    },
    "vrack.Task": {
      "id": "Task",
      "namespace": "vrack",
      "description": "vrack tasks",
      "properties": {
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "status": {
          "type": "vrack.TaskStatusEnum",
          "fullType": "vrack.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "targetDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        }
      }
    },
    "vrack.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "vrack",
      "description": "All states a vRack Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "init",
        "todo"
      ],
      "enumType": "string"
    },
    "vrack.dedicatedCloud": {
      "id": "dedicatedCloud",
      "namespace": "vrack",
      "description": "vrack dedicated cloud interface",
      "properties": {
        "dedicatedCloud": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "your dedicated cloud service",
          "required": true
        },
        "vlanId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Dedicated cloud vlanId used",
          "required": false
        },
        "vrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "vrack name",
          "required": true
        }
      }
    }
  }
}