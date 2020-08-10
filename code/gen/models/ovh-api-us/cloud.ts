import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/cloud/order",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Order plan code"
            }
          ],
          "responseType": "cloud.order.Order[]",
          "noAuthentication": false,
          "description": "Get all cloud pending orders"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project",
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
      "description": "Operations about the PUBLICCLOUD service"
    },
    {
      "path": "/cloud/project/{serviceName}",
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
          "responseType": "cloud.Project",
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
              "dataType": "cloud.Project",
              "paramType": "body",
              "fullType": "cloud.Project",
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
      "description": "Operations about the PUBLICCLOUD service"
    },
    {
      "path": "/cloud/project/{serviceName}/activateMonthlyBilling",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectActivateMonthlyBillingCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectActivateMonthlyBillingCreation",
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
          "responseType": "cloud.instance.InstanceDetail[]",
          "noAuthentication": false,
          "description": "Activate monthly billing on multiple instances"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/confirmTermination",
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
      "path": "/cloud/project/{serviceName}/flavor",
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
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Flavor region"
            }
          ],
          "responseType": "cloud.flavor.Flavor[]",
          "noAuthentication": false,
          "description": "Get flavors"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/flavor/{flavorId}",
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
              "name": "flavorId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Flavor ID"
            }
          ],
          "responseType": "cloud.flavor.Flavor",
          "noAuthentication": false,
          "description": "Get flavor"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/image",
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
              "name": "flavorType",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Get compatible images with flavor type"
            },
            {
              "name": "osType",
              "dataType": "cloud.image.OSTypeEnum",
              "paramType": "query",
              "fullType": "cloud.image.OSTypeEnum",
              "required": false,
              "description": "Image OS"
            },
            {
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Image region"
            }
          ],
          "responseType": "cloud.image.Image[]",
          "noAuthentication": false,
          "description": "Get images"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/image/{imageId}",
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
              "name": "imageId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Image ID"
            }
          ],
          "responseType": "cloud.image.Image",
          "noAuthentication": false,
          "description": "Get image"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance",
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
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Instance region"
            }
          ],
          "responseType": "cloud.instance.Instance[]",
          "noAuthentication": false,
          "description": "Get instance"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectInstanceCreation",
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
          "responseType": "cloud.instance.InstanceDetail",
          "noAuthentication": false,
          "description": "Create a new instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/bulk",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceBulkCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectInstanceBulkCreation",
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
          "responseType": "cloud.instance.Instance[]",
          "noAuthentication": false,
          "description": "Create multiple instances"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/group",
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
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Instance region"
            }
          ],
          "responseType": "cloud.instancegroup.InstanceGroup[]",
          "noAuthentication": false,
          "description": "Get the detail of a group"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceGroupCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectInstanceGroupCreation",
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
          "responseType": "cloud.instancegroup.InstanceGroup",
          "noAuthentication": false,
          "description": "Create a group"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/group/{groupId}",
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
              "name": "groupId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Group ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a group"
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
              "name": "groupId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Group ID"
            },
            {
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Instance region"
            }
          ],
          "responseType": "cloud.instancegroup.InstanceGroup",
          "noAuthentication": false,
          "description": "Get all groups"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
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
          "description": "Delete an instance"
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "cloud.instance.InstanceDetail",
          "noAuthentication": false,
          "description": "Get instance"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceUpdate",
              "paramType": "body",
              "fullType": "cloud.ProjectInstanceUpdate",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter an instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "cloud.instance.InstanceDetail",
          "noAuthentication": false,
          "description": "Activate monthly billing on instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/applicationAccess",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "cloud.instance.ApplicationAccess",
          "noAuthentication": false,
          "description": "Return initial credentials of applications installed from public image"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/interface",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "cloud.instanceInterface.Interface[]",
          "noAuthentication": false,
          "description": "Get interfaces"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceInterfaceCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectInstanceInterfaceCreation",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
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
          "responseType": "cloud.instanceInterface.Interface",
          "noAuthentication": false,
          "description": "Create interface on an instance and attached it to a network"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            },
            {
              "name": "interfaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Interface ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete an interface"
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            },
            {
              "name": "interfaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Interface ID"
            }
          ],
          "responseType": "cloud.instanceInterface.Interface",
          "noAuthentication": false,
          "description": "Get interface"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/monitoring",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            },
            {
              "name": "period",
              "dataType": "cloud.instance.MetricsPeriodEnum",
              "paramType": "query",
              "fullType": "cloud.instance.MetricsPeriodEnum",
              "required": true,
              "description": "The period the statistics are fetched for"
            },
            {
              "name": "type",
              "dataType": "cloud.instance.MetricsTypeEnum",
              "paramType": "query",
              "fullType": "cloud.instance.MetricsTypeEnum",
              "required": true,
              "description": "The type of statistic to be fetched"
            }
          ],
          "responseType": "cloud.instance.InstanceMetrics",
          "noAuthentication": false,
          "description": "Return many statistics about the virtual machine for a given period"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/reboot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceRebootCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectInstanceRebootCreation",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
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
          "description": "Reboot an instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/reinstall",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceReinstallCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectInstanceReinstallCreation",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "cloud.instance.InstanceDetail",
          "noAuthentication": false,
          "description": "Reinstall an instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/rescueMode",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceRescueModeCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectInstanceRescueModeCreation",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "cloud.instance.RescueAdminPassword",
          "noAuthentication": false,
          "description": "Enable or disable rescue mode"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/resize",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceResizeCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectInstanceResizeCreation",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "cloud.instance.InstanceDetail",
          "noAuthentication": false,
          "description": "Migrate your instance to another flavor"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/resume",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Resume a suspended instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/snapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceSnapshotCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectInstanceSnapshotCreation",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Snapshot an instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/start",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Start an instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/stop",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Stop an instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/vnc",
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
              "name": "instanceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Instance ID"
            }
          ],
          "responseType": "cloud.instance.InstanceVnc",
          "noAuthentication": false,
          "description": "Get VNC access to your instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/ip",
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
          "responseType": "cloud.ip.CloudIp[]",
          "noAuthentication": false,
          "description": "Get ips"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/ip/failover",
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
          "responseType": "cloud.ip.FailoverIp[]",
          "noAuthentication": false,
          "description": "Get failover ips"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/ip/failover/{id}",
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
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "cloud.ip.FailoverIp",
          "noAuthentication": false,
          "description": "Get failover ip"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/ip/failover/{id}/attach",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectIpFailoverAttachCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectIpFailoverAttachCreation",
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
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "cloud.ip.FailoverIp",
          "noAuthentication": false,
          "description": "Attach failover ip to an instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/lab",
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
          "responseType": "cloud.Lab[]",
          "noAuthentication": false,
          "description": "List available public cloud labs"
        }
      ],
      "description": "Manage labs on your Cloud Project"
    },
    {
      "path": "/cloud/project/{serviceName}/lab/{labId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "labId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lab ID"
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
          "responseType": "cloud.Lab",
          "noAuthentication": false,
          "description": "Get details of a public cloud lab"
        },
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
              "name": "labId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lab ID"
            }
          ],
          "responseType": "cloud.Operation",
          "noAuthentication": false,
          "description": "Activate a lab on your Cloud Project"
        }
      ],
      "description": "Manage labs on your Cloud Project"
    },
    {
      "path": "/cloud/project/{serviceName}/lab/{labId}/agreement",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "labId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lab ID"
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
          "responseType": "cloud.LabAgreements",
          "noAuthentication": false,
          "description": "List required agreements to active this lab"
        }
      ],
      "description": "Manage lab agreements"
    },
    {
      "path": "/cloud/project/{serviceName}/migration",
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
          "responseType": "cloud.migration.Migration[]",
          "noAuthentication": false,
          "description": "Get planned migrations"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/migration/{migrationId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "migrationId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Migration ID"
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
          "responseType": "cloud.migration.Migration",
          "noAuthentication": false,
          "description": "Get planned migration"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "date",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "Migration date (RFC3339)"
            },
            {
              "name": "migrationId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Migration ID"
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
          "responseType": "cloud.migration.Migration",
          "noAuthentication": false,
          "description": "Update planned migration"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/network/private",
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
          "responseType": "cloud.network.Network[]",
          "noAuthentication": false,
          "description": "Get private networks"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectNetworkPrivateCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectNetworkPrivateCreation",
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
          "responseType": "cloud.network.Network",
          "noAuthentication": false,
          "description": "Create a new network"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/network/private/{networkId}",
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
              "name": "networkId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Network ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete private network"
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
              "name": "networkId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Network ID"
            }
          ],
          "responseType": "cloud.network.Network",
          "noAuthentication": false,
          "description": "Get private network"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.ProjectNetworkPrivateUpdate",
              "paramType": "body",
              "fullType": "cloud.ProjectNetworkPrivateUpdate",
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
              "name": "networkId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Network ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Rename private network"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/network/private/{networkId}/region",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectNetworkPrivateRegionCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectNetworkPrivateRegionCreation",
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
              "name": "networkId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Network ID"
            }
          ],
          "responseType": "cloud.network.Network",
          "noAuthentication": false,
          "description": "Activate private network in a new region"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/network/private/{networkId}/subnet",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "networkId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Network ID"
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
          "responseType": "cloud.network.Subnet[]",
          "noAuthentication": false,
          "description": "Get network subnets"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectNetworkPrivateSubnetCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectNetworkPrivateSubnetCreation",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "networkId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Network ID"
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
          "responseType": "cloud.network.Subnet",
          "noAuthentication": false,
          "description": "Create a new network subnet"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "subnetId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Subnet ID"
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
              "name": "networkId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Network ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a network subnet"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/network/public",
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
          "responseType": "cloud.network.Network[]",
          "noAuthentication": false,
          "description": "Get public networks"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/openstackClient",
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
          "responseType": "cloud.openstackClient.Session",
          "noAuthentication": false,
          "description": "Get OVH playground session to use the openstack terminal"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/operation",
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
          "responseType": "cloud.Operation[]",
          "noAuthentication": false,
          "description": "List your operations"
        }
      ],
      "description": "Manage the operations on your Cloud Project"
    },
    {
      "path": "/cloud/project/{serviceName}/operation/{operationId}",
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
              "name": "operationId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Operation ID"
            }
          ],
          "responseType": "cloud.Operation",
          "noAuthentication": false,
          "description": "Get information about one operation"
        }
      ],
      "description": "Manage the operations on your Cloud Project"
    },
    {
      "path": "/cloud/project/{serviceName}/quota",
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
          "responseType": "cloud.quota.Quotas[]",
          "noAuthentication": false,
          "description": "List quotas"
        }
      ],
      "description": "List your quota"
    },
    {
      "path": "/cloud/project/{serviceName}/region",
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
          "description": "List your regions"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectRegionCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectRegionCreation",
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
          "responseType": "cloud.Region",
          "noAuthentication": false,
          "description": "Request access to a region"
        }
      ],
      "description": "Manage your regions"
    },
    {
      "path": "/cloud/project/{serviceName}/region/{regionName}",
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
              "name": "regionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Region name"
            }
          ],
          "responseType": "cloud.Region",
          "noAuthentication": false,
          "description": "Get information about your region"
        }
      ],
      "description": "Manage your regions"
    },
    {
      "path": "/cloud/project/{serviceName}/region/{regionName}/quota",
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
          "responseType": "cloud.quota.Quotas",
          "noAuthentication": false,
          "description": "List quotas"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectRegionQuotaCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectRegionQuotaCreation",
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
              "name": "regionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Region name"
            }
          ],
          "responseType": "cloud.Operation",
          "noAuthentication": false,
          "description": "Change project quotas on region"
        }
      ],
      "description": "Consult quotas"
    },
    {
      "path": "/cloud/project/{serviceName}/region/{regionName}/quota/allowed",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "cloud.quota.AllowedQuota[]",
          "noAuthentication": false,
          "description": "Get allowed quotas on region"
        }
      ],
      "description": "Get allowed quotas"
    },
    {
      "path": "/cloud/project/{serviceName}/region/{regionName}/workflow/backup",
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
              "name": "regionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Region name"
            }
          ],
          "responseType": "cloud.Backup[]",
          "noAuthentication": false,
          "description": "List your automated backups"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectRegionWorkflowBackupCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectRegionWorkflowBackupCreation",
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
              "name": "regionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Region name"
            }
          ],
          "responseType": "cloud.Backup",
          "noAuthentication": false,
          "description": "Create a new automated backup"
        }
      ],
      "description": "Manage your automated backups"
    },
    {
      "path": "/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}",
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
              "name": "regionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Region name"
            },
            {
              "name": "backupWorkflowId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Backup workflow ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a backup workflow process"
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
              "name": "regionName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Region name"
            },
            {
              "name": "backupWorkflowId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Backup workflow ID"
            }
          ],
          "responseType": "cloud.Backup",
          "noAuthentication": false,
          "description": "Get details about a backup workflow process"
        }
      ],
      "description": "Manage your automated backups"
    },
    {
      "path": "/cloud/project/{serviceName}/regionAvailable",
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
          "responseType": "cloud.AvailableRegion[]",
          "noAuthentication": false,
          "description": "List the regions on which you can ask an access to"
        }
      ],
      "description": "Manage the regions you can add on your project"
    },
    {
      "path": "/cloud/project/{serviceName}/role",
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
          "responseType": "cloud.role.Roles",
          "noAuthentication": false,
          "description": "Get all Roles"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/serviceInfos",
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
      "path": "/cloud/project/{serviceName}/snapshot",
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
              "name": "flavorType",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Get compatible snapshots with flavor type"
            },
            {
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Region"
            }
          ],
          "responseType": "cloud.image.Image[]",
          "noAuthentication": false,
          "description": "Get snapshots"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/snapshot/{imageId}",
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
              "name": "imageId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Image ID"
            }
          ],
          "responseType": "cloud.image.Image",
          "noAuthentication": false,
          "description": "Delete a snapshot"
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
              "name": "imageId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Image ID"
            }
          ],
          "responseType": "cloud.image.Image",
          "noAuthentication": false,
          "description": "Get snapshot details"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/sshkey",
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
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Region"
            }
          ],
          "responseType": "cloud.sshkey.SshKey[]",
          "noAuthentication": false,
          "description": "Get SSH keys"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectSshkeyCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectSshkeyCreation",
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
          "responseType": "cloud.sshkey.SshKeyDetail",
          "noAuthentication": false,
          "description": "Create SSH key"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/sshkey/{keyId}",
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
              "name": "keyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete SSH key"
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
              "name": "keyId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key ID"
            }
          ],
          "responseType": "cloud.sshkey.SshKeyDetail",
          "noAuthentication": false,
          "description": "Get SSH key"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/stack",
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
          "responseType": "cloud.stack.Stack[]",
          "noAuthentication": false,
          "description": "Get stacks"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/stack/{stackId}",
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
              "name": "stackId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Stack ID"
            }
          ],
          "responseType": "cloud.stack.Stack",
          "noAuthentication": false,
          "description": "Get stack"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/stack/{stackId}/client",
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
              "name": "stackId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Stack ID"
            }
          ],
          "responseType": "cloud.openstackClient.Session",
          "noAuthentication": false,
          "description": "Get OVH playground session with a stack installed to use the openstack terminal"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/storage",
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
          "responseType": "cloud.storage.Container[]",
          "noAuthentication": false,
          "description": "Get storage containers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectStorageCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectStorageCreation",
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
          "responseType": "cloud.storage.Container",
          "noAuthentication": false,
          "description": "Create container"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/storage/access",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2016-11-25T10:00:00+01:00",
            "deprecatedDate": "2016-08-25T10:00:00+01:00",
            "replacement": "/cloud/project/{serviceName}/storage/access"
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
          "responseType": "cloud.storage.ContainerAccess",
          "noAuthentication": false,
          "description": "Access to storage API"
        },
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
          "responseType": "cloud.storage.ContainerAccess",
          "noAuthentication": false,
          "description": "Access to storage API"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/storage/{containerId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "containerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Container ID"
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
          "description": "Delete container"
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
              "name": "containerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Container ID"
            },
            {
              "name": "noObjects",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Do not return container objects"
            }
          ],
          "responseType": "cloud.storage.ContainerDetail",
          "noAuthentication": false,
          "description": "Get storage container"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.ProjectStorageUpdate",
              "paramType": "body",
              "fullType": "cloud.ProjectStorageUpdate",
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
              "name": "containerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Container ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Update your storage container"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/storage/{containerId}/cors",
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
              "name": "containerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Container ID"
            },
            {
              "name": "origin",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Delete this origin"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete CORS support on your container"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectStorageCorsCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectStorageCorsCreation",
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
              "name": "containerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Container ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Add CORS support on your container"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/storage/{containerId}/publicUrl",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectStoragePublicUrlCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectStoragePublicUrlCreation",
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
              "name": "containerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Container ID"
            }
          ],
          "responseType": "cloud.storage.ContainerObjectTempURL",
          "noAuthentication": false,
          "description": "Get a public temporary URL to access to one of your object"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/storage/{containerId}/static",
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
              "name": "containerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Container ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Deploy your container files as a static web site"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/storage/{containerId}/user",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectStorageUserCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectStorageUserCreation",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "containerId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Container ID"
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
          "responseType": "cloud.user.UserDetail",
          "noAuthentication": false,
          "description": "Create openstack user with only access to this container"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/terminate",
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
      "path": "/cloud/project/{serviceName}/user",
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
          "responseType": "cloud.user.User[]",
          "noAuthentication": false,
          "description": "Get all users"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectUserCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectUserCreation",
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
          "responseType": "cloud.user.UserDetail",
          "noAuthentication": false,
          "description": "Create user"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/user/{userId}",
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete user"
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
            }
          ],
          "responseType": "cloud.user.User",
          "noAuthentication": false,
          "description": "Get user details"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/user/{userId}/openrc",
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
            },
            {
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Region"
            },
            {
              "name": "version",
              "dataType": "cloud.user.OpenrcVersionEnum",
              "paramType": "query",
              "fullType": "cloud.user.OpenrcVersionEnum",
              "required": false,
              "description": "Identity API version"
            }
          ],
          "responseType": "cloud.user.Openrc",
          "noAuthentication": false,
          "description": "Get RC file of OpenStack"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/user/{userId}/rclone",
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
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Region"
            }
          ],
          "responseType": "cloud.user.Rclone",
          "noAuthentication": false,
          "description": "Get rclone configuration file"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/user/{userId}/regeneratePassword",
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
          "responseType": "cloud.user.UserDetail",
          "noAuthentication": false,
          "description": "Regenerate user password"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/user/{userId}/role",
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
          "responseType": "cloud.role.Role[]",
          "noAuthentication": false,
          "description": "Get user roles"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectUserRoleCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectUserRoleCreation",
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
            }
          ],
          "responseType": "cloud.user.UserDetail",
          "noAuthentication": false,
          "description": "Add a role to a user"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.ProjectUserRoleUpdate",
              "paramType": "body",
              "fullType": "cloud.ProjectUserRoleUpdate",
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
            }
          ],
          "responseType": "cloud.user.UserDetail",
          "noAuthentication": false,
          "description": "Update roles of a user"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/user/{userId}/role/{roleId}",
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
              "name": "roleId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Role ID"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Remove role for a user"
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
            },
            {
              "name": "roleId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Role ID"
            }
          ],
          "responseType": "cloud.role.Role",
          "noAuthentication": false,
          "description": "Get role detail"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/user/{userId}/token",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectUserTokenCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectUserTokenCreation",
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
            }
          ],
          "responseType": "cloud.authentication.Token",
          "noAuthentication": false,
          "description": "Get token for user"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/volume",
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
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Volume region"
            }
          ],
          "responseType": "cloud.volume.Volume[]",
          "noAuthentication": false,
          "description": "Get volumes"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectVolumeCreation",
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
          "responseType": "cloud.volume.Volume",
          "noAuthentication": false,
          "description": "Create a volume"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/volume/snapshot",
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
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Snapshots region"
            }
          ],
          "responseType": "cloud.volume.Snapshot[]",
          "noAuthentication": false,
          "description": "Get volume snapshots"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/volume/snapshot/{snapshotId}",
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
              "name": "snapshotId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Snapshot ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a volume snapshot"
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
              "name": "snapshotId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Snapshot ID"
            }
          ],
          "responseType": "cloud.volume.Snapshot",
          "noAuthentication": false,
          "description": "Get volume snapshot details"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/volume/{volumeId}",
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
              "name": "volumeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a volume"
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
              "name": "volumeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume ID"
            }
          ],
          "responseType": "cloud.volume.Volume",
          "noAuthentication": false,
          "description": "Get volume details"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeUpdate",
              "paramType": "body",
              "fullType": "cloud.ProjectVolumeUpdate",
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
              "name": "volumeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume ID"
            }
          ],
          "responseType": "cloud.volume.Volume",
          "noAuthentication": false,
          "description": "Update a volume"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/volume/{volumeId}/attach",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeAttachCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectVolumeAttachCreation",
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
              "name": "volumeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume ID"
            }
          ],
          "responseType": "cloud.volume.Volume",
          "noAuthentication": false,
          "description": "Attach a volume on an instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/volume/{volumeId}/detach",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeDetachCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectVolumeDetachCreation",
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
              "name": "volumeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume ID"
            }
          ],
          "responseType": "cloud.volume.Volume",
          "noAuthentication": false,
          "description": "Detach a volume from an instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/volume/{volumeId}/snapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeSnapshotCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectVolumeSnapshotCreation",
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
              "name": "volumeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume ID"
            }
          ],
          "responseType": "cloud.volume.Snapshot",
          "noAuthentication": false,
          "description": "Snapshot a volume"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/volume/{volumeId}/upsize",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeUpsizeCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectVolumeUpsizeCreation",
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
              "name": "volumeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume ID"
            }
          ],
          "responseType": "cloud.volume.Volume",
          "noAuthentication": false,
          "description": "Extend a volume"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/vrack",
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
          "responseType": "cloud.Vrack",
          "noAuthentication": false,
          "description": "Get the linked vRack on your project"
        },
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
          "responseType": "cloud.Operation",
          "noAuthentication": false,
          "description": "Order and attach a new vRack on your project"
        }
      ],
      "description": "Manage the vRack on your Cloud Project"
    }
  ],
  "resourcePath": "/cloud",
  "basePath": "https://api.us.ovhcloud.com/1.0",
  "models": {
    "cloud.AccessTypeEnum": {
      "id": "AccessTypeEnum",
      "namespace": "cloud",
      "description": "Possible values for project access type",
      "enum": [
        "full",
        "restricted"
      ],
      "enumType": "string"
    },
    "cloud.AvailableRegion": {
      "id": "AvailableRegion",
      "namespace": "cloud",
      "description": "Details about an available region that can be activated on your project",
      "properties": {
        "continentCode": {
          "type": "cloud.RegionContinentEnum",
          "fullType": "cloud.RegionContinentEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region continent code",
          "required": false
        },
        "datacenterLocation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Location of the datacenter where the region is",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region name",
          "required": false
        }
      }
    },
    "cloud.Backup": {
      "id": "Backup",
      "namespace": "cloud",
      "description": "List your automated backups",
      "properties": {
        "backupName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Backup name",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the workflow",
          "required": false
        },
        "cron": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Workflow cron pattern",
          "required": false
        },
        "executions": {
          "type": "cloud.Execution[]",
          "fullType": "cloud.Execution[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Executions logs",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Workflow id",
          "required": false
        },
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance id",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Workflow name identifier",
          "required": false
        }
      }
    },
    "cloud.Component": {
      "id": "Component",
      "namespace": "cloud",
      "description": "Information about the different components available in the region",
      "properties": {
        "endpoint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Endpoint URL",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service name",
          "required": false
        },
        "status": {
          "type": "cloud.ServiceStatusEnum",
          "fullType": "cloud.ServiceStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service status",
          "required": false
        }
      }
    },
    "cloud.Execution": {
      "id": "Execution",
      "namespace": "cloud",
      "description": "An execution of the backup workflow",
      "properties": {
        "executedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last date of cron trigger execution",
          "required": false
        },
        "state": {
          "type": "cloud.ExecutionStateEnum",
          "fullType": "cloud.ExecutionStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Execution state",
          "required": false
        },
        "stateInfo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Information about state",
          "required": false
        }
      }
    },
    "cloud.ExecutionStateEnum": {
      "id": "ExecutionStateEnum",
      "namespace": "cloud",
      "description": "Enum values for State",
      "enum": [
        "IDLE",
        "RUNNING",
        "SUCCESS",
        "ERROR",
        "PAUSED"
      ],
      "enumType": "string"
    },
    "cloud.IpCountryEnum": {
      "id": "IpCountryEnum",
      "namespace": "cloud",
      "description": "Enum values for IpCountry",
      "enum": [
        "au",
        "be",
        "ca",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "ie",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "sg",
        "uk",
        "us"
      ],
      "enumType": "string"
    },
    "cloud.Lab": {
      "id": "Lab",
      "namespace": "cloud",
      "description": "A public cloud lab permits to activate a feature in beta",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Lab ID",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Lab name",
          "required": false
        },
        "status": {
          "type": "cloud.LabStatusEnum",
          "fullType": "cloud.LabStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Lab status",
          "required": false
        }
      }
    },
    "cloud.LabAgreements": {
      "id": "LabAgreements",
      "namespace": "cloud",
      "description": "List of required agreements to activate the lab",
      "properties": {
        "accepted": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of agreements already accepted to activate the lab",
          "required": false
        },
        "toAccept": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of agreements to accept before activate the lab",
          "required": false
        }
      }
    },
    "cloud.LabStatusEnum": {
      "id": "LabStatusEnum",
      "namespace": "cloud",
      "description": "Enum values for Status",
      "enum": [
        "open",
        "activating",
        "activated",
        "closed"
      ],
      "enumType": "string"
    },
    "cloud.Operation": {
      "id": "Operation",
      "namespace": "cloud",
      "description": "An operation is an async process on your Project",
      "properties": {
        "action": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The action of the operation",
          "required": false
        },
        "completedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "The completed date of the operation",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The creation date of the operation",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unique ID to describe the operation",
          "required": false
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The progression in percentage of the operation",
          "required": false
        },
        "regions": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Affected regions of the operation",
          "required": false
        },
        "startedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "The started date of the operation",
          "required": false
        },
        "status": {
          "type": "cloud.OperationStatusEnum",
          "fullType": "cloud.OperationStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Operation status",
          "required": false
        }
      }
    },
    "cloud.OperationStatusEnum": {
      "id": "OperationStatusEnum",
      "namespace": "cloud",
      "description": "Enum values for Status",
      "enum": [
        "created",
        "in-progress",
        "completed",
        "in-error",
        "unknown"
      ],
      "enumType": "string"
    },
    "cloud.Project": {
      "id": "Project",
      "namespace": "cloud",
      "description": "Project",
      "properties": {
        "access": {
          "type": "cloud.AccessTypeEnum",
          "fullType": "cloud.AccessTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Project access",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Project creation date",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Description of your project",
          "required": false
        },
        "expiration": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Expiration date of your project. After this date, your project will be deleted",
          "required": false
        },
        "manualQuota": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Manual quota prevent automatic quota upgrade",
          "required": false
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Project order id",
          "required": false
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Order plan code",
          "required": false
        },
        "projectName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Project name",
          "required": false
        },
        "project_id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Project id",
          "required": false
        },
        "status": {
          "type": "cloud.project.ProjectStatusEnum",
          "fullType": "cloud.project.ProjectStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current status",
          "required": false
        },
        "unleash": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Project unleashed",
          "required": false
        }
      }
    },
    "cloud.ProjectActivateMonthlyBillingCreation": {
      "id": "ProjectActivateMonthlyBillingCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "instances": {
          "type": "cloud.instance.MonthlyInstanceBulkParams[]",
          "fullType": "cloud.instance.MonthlyInstanceBulkParams[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance ids and regions",
          "required": true
        }
      }
    },
    "cloud.ProjectInstanceBulkCreation": {
      "id": "ProjectInstanceBulkCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "autobackup": {
          "type": "cloud.instance.AutoBackup",
          "fullType": "cloud.instance.AutoBackup",
          "canBeNull": true,
          "readOnly": false,
          "description": "Create an autobackup workflow after instance start up",
          "required": false
        },
        "flavorId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance flavor id",
          "required": true
        },
        "groupId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Start instance in group",
          "required": false
        },
        "imageId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Instance image id",
          "required": false
        },
        "monthlyBilling": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Active monthly billing",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance name",
          "required": true
        },
        "networks": {
          "type": "cloud.instance.NetworkBulkParams[]",
          "fullType": "cloud.instance.NetworkBulkParams[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Create network interfaces",
          "required": false
        },
        "number": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of instances you want to create",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance region",
          "required": true
        },
        "sshKeyId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "SSH keypair id",
          "required": false
        },
        "userData": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": false,
          "description": "Configuration information or scripts to use upon launch",
          "required": false
        },
        "volumeId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Specify a volume id to boot from it",
          "required": false
        }
      }
    },
    "cloud.ProjectInstanceCreation": {
      "id": "ProjectInstanceCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "autobackup": {
          "type": "cloud.instance.AutoBackup",
          "fullType": "cloud.instance.AutoBackup",
          "canBeNull": true,
          "readOnly": false,
          "description": "Create an autobackup workflow after instance start up",
          "required": false
        },
        "flavorId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance flavor id",
          "required": true
        },
        "groupId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Start instance in group",
          "required": false
        },
        "imageId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Instance image id",
          "required": false
        },
        "monthlyBilling": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Active monthly billing",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance name",
          "required": true
        },
        "networks": {
          "type": "cloud.instance.NetworkParams[]",
          "fullType": "cloud.instance.NetworkParams[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Create network interfaces",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance region",
          "required": true
        },
        "sshKeyId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "SSH keypair id",
          "required": false
        },
        "userData": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": false,
          "description": "Configuration information or scripts to use upon launch",
          "required": false
        },
        "volumeId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Specify a volume id to boot from it",
          "required": false
        }
      }
    },
    "cloud.ProjectInstanceGroupCreation": {
      "id": "ProjectInstanceGroupCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "instance group name",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance region",
          "required": true
        },
        "type": {
          "type": "cloud.instancegroup.InstanceGroupTypeEnum",
          "fullType": "cloud.instancegroup.InstanceGroupTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance group type",
          "required": true
        }
      }
    },
    "cloud.ProjectInstanceInterfaceCreation": {
      "id": "ProjectInstanceInterfaceCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "Static ip (Can only be defined for private networks)",
          "required": false
        },
        "networkId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Network id",
          "required": true
        }
      }
    },
    "cloud.ProjectInstanceRebootCreation": {
      "id": "ProjectInstanceRebootCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "type": {
          "type": "cloud.instance.RebootTypeEnum",
          "fullType": "cloud.instance.RebootTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Reboot type (default soft)",
          "required": true
        }
      }
    },
    "cloud.ProjectInstanceReinstallCreation": {
      "id": "ProjectInstanceReinstallCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "imageId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Image to reinstall",
          "required": true
        }
      }
    },
    "cloud.ProjectInstanceRescueModeCreation": {
      "id": "ProjectInstanceRescueModeCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "imageId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Image to boot on",
          "required": false
        },
        "rescue": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Enable rescue mode",
          "required": true
        }
      }
    },
    "cloud.ProjectInstanceResizeCreation": {
      "id": "ProjectInstanceResizeCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "flavorId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Flavor id",
          "required": true
        }
      }
    },
    "cloud.ProjectInstanceSnapshotCreation": {
      "id": "ProjectInstanceSnapshotCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "snapshotName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Snapshot name",
          "required": true
        }
      }
    },
    "cloud.ProjectInstanceUpdate": {
      "id": "ProjectInstanceUpdate",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "instanceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance new name",
          "required": true
        }
      }
    },
    "cloud.ProjectIpFailoverAttachCreation": {
      "id": "ProjectIpFailoverAttachCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Attach failover ip to instance",
          "required": true
        }
      }
    },
    "cloud.ProjectNetworkPrivateCreation": {
      "id": "ProjectNetworkPrivateCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Network name",
          "required": true
        },
        "regions": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Region where to activate private network. No parameters means all region",
          "required": false
        },
        "vlanId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Vland id, between 0 and 4000. 0 value means no vlan.",
          "required": false
        }
      }
    },
    "cloud.ProjectNetworkPrivateRegionCreation": {
      "id": "ProjectNetworkPrivateRegionCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region to active on your network",
          "required": true
        }
      }
    },
    "cloud.ProjectNetworkPrivateSubnetCreation": {
      "id": "ProjectNetworkPrivateSubnetCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "dhcp": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Enable DHCP",
          "required": true
        },
        "end": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last IP for this region (eg: 192.168.1.24)",
          "required": true
        },
        "network": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": false,
          "description": "Global network with cidr (eg: 192.168.1.0/24)",
          "required": true
        },
        "noGateway": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Set to true if you don't want to set a default gateway IP",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region where this subnet will be created",
          "required": true
        },
        "start": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "First IP for this region (eg: 192.168.1.12)",
          "required": true
        }
      }
    },
    "cloud.ProjectNetworkPrivateUpdate": {
      "id": "ProjectNetworkPrivateUpdate",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "name",
          "required": true
        }
      }
    },
    "cloud.ProjectRegionCreation": {
      "id": "ProjectRegionCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region to add on your project",
          "required": true
        }
      }
    },
    "cloud.ProjectRegionQuotaCreation": {
      "id": "ProjectRegionQuotaCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the new quota",
          "required": true
        }
      }
    },
    "cloud.ProjectRegionWorkflowBackupCreation": {
      "id": "ProjectRegionWorkflowBackupCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "cron": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Unix Cron pattern (eg: '* * * * *')",
          "required": true
        },
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance ID to backup",
          "required": true
        },
        "maxExecutionCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of execution to process before ending the job. Null value means that the job will never end.",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of your backup job",
          "required": true
        },
        "rotation": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of backup to keep",
          "required": true
        }
      }
    },
    "cloud.ProjectSshkeyCreation": {
      "id": "ProjectSshkeyCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "SSH key name",
          "required": true
        },
        "publicKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "SSH public key",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Region to create SSH key",
          "required": false
        }
      }
    },
    "cloud.ProjectStorageCorsCreation": {
      "id": "ProjectStorageCorsCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "origin": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Allow this origin",
          "required": true
        }
      }
    },
    "cloud.ProjectStorageCreation": {
      "id": "ProjectStorageCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "archive": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Archive container flag",
          "required": true
        },
        "containerName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Container name",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region",
          "required": true
        }
      }
    },
    "cloud.ProjectStoragePublicUrlCreation": {
      "id": "ProjectStoragePublicUrlCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Temporary URL expiration",
          "required": true
        },
        "objectName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Object name",
          "required": true
        }
      }
    },
    "cloud.ProjectStorageUpdate": {
      "id": "ProjectStorageUpdate",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "containerType": {
          "type": "cloud.storage.TypeEnum",
          "fullType": "cloud.storage.TypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Container type",
          "required": false
        }
      }
    },
    "cloud.ProjectStorageUserCreation": {
      "id": "ProjectStorageUserCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "User description",
          "required": false
        },
        "right": {
          "type": "cloud.storage.RightEnum",
          "fullType": "cloud.storage.RightEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "User right (all, read, write)",
          "required": true
        }
      }
    },
    "cloud.ProjectUserCreation": {
      "id": "ProjectUserCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "User description",
          "required": false
        },
        "role": {
          "type": "cloud.user.RoleEnum",
          "fullType": "cloud.user.RoleEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Openstack keystone role name",
          "required": false
        },
        "roles": {
          "type": "cloud.user.RoleEnum[]",
          "fullType": "cloud.user.RoleEnum[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Openstack keystone roles names",
          "required": false
        }
      }
    },
    "cloud.ProjectUserRoleCreation": {
      "id": "ProjectUserRoleCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "roleId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Role id",
          "required": true
        }
      }
    },
    "cloud.ProjectUserRoleUpdate": {
      "id": "ProjectUserRoleUpdate",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "rolesIds": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Roles ids",
          "required": true
        }
      }
    },
    "cloud.ProjectUserTokenCreation": {
      "id": "ProjectUserTokenCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "password": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "User password",
          "required": true
        }
      }
    },
    "cloud.ProjectVolumeAttachCreation": {
      "id": "ProjectVolumeAttachCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance id",
          "required": true
        }
      }
    },
    "cloud.ProjectVolumeCreation": {
      "id": "ProjectVolumeCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Volume description",
          "required": false
        },
        "imageId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Id of image to create a bootable volume",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Volume name",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volume region",
          "required": true
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volume size (in GiB)",
          "required": true
        },
        "snapshotId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Source snapshot id",
          "required": false
        },
        "type": {
          "type": "cloud.volume.VolumeTypeEnum",
          "fullType": "cloud.volume.VolumeTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volume type",
          "required": true
        }
      }
    },
    "cloud.ProjectVolumeDetachCreation": {
      "id": "ProjectVolumeDetachCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance id",
          "required": true
        }
      }
    },
    "cloud.ProjectVolumeSnapshotCreation": {
      "id": "ProjectVolumeSnapshotCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Snapshot description",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Snapshot name",
          "required": false
        }
      }
    },
    "cloud.ProjectVolumeUpdate": {
      "id": "ProjectVolumeUpdate",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Volume description",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Volume name",
          "required": false
        }
      }
    },
    "cloud.ProjectVolumeUpsizeCreation": {
      "id": "ProjectVolumeUpsizeCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "New volume size (in GiB) (must be greater than current one)",
          "required": true
        }
      }
    },
    "cloud.Region": {
      "id": "Region",
      "namespace": "cloud",
      "description": "Details about your region",
      "properties": {
        "continentCode": {
          "type": "cloud.RegionContinentEnum",
          "fullType": "cloud.RegionContinentEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region continent code",
          "required": false
        },
        "datacenterLocation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Location of the datacenter where the region is",
          "required": false
        },
        "ipCountries": {
          "type": "cloud.IpCountryEnum[]",
          "fullType": "cloud.IpCountryEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Allowed countries for failover ip",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region name",
          "required": false
        },
        "services": {
          "type": "cloud.Component[]",
          "fullType": "cloud.Component[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about components status",
          "required": false
        },
        "status": {
          "type": "cloud.RegionStatusEnum",
          "fullType": "cloud.RegionStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Openstack region status",
          "required": false
        }
      }
    },
    "cloud.RegionContinentEnum": {
      "id": "RegionContinentEnum",
      "namespace": "cloud",
      "description": "Enum values for ContinentCode",
      "enum": [
        "EU",
        "NA",
        "US",
        "ASIA"
      ],
      "enumType": "string"
    },
    "cloud.RegionStatusEnum": {
      "id": "RegionStatusEnum",
      "namespace": "cloud",
      "description": "Enum values for Status",
      "enum": [
        "UP",
        "DOWN",
        "MAINTENANCE"
      ],
      "enumType": "string"
    },
    "cloud.ServiceStatusEnum": {
      "id": "ServiceStatusEnum",
      "namespace": "cloud",
      "description": "Enum values for Status",
      "enum": [
        "UP",
        "DOWN"
      ],
      "enumType": "string"
    },
    "cloud.Vrack": {
      "id": "Vrack",
      "namespace": "cloud",
      "description": "A vRack allows to connect your OVH infrastructures accross products and datacenters",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of your vRack",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Vrack ID",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of your vRack",
          "required": false
        }
      }
    },
    "cloud.authentication.Catalog": {
      "id": "Catalog",
      "namespace": "cloud.authentication",
      "description": "Catalog",
      "properties": {
        "endpoints": {
          "type": "cloud.authentication.Endpoint[]",
          "fullType": "cloud.authentication.Endpoint[]",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.authentication.Domain": {
      "id": "Domain",
      "namespace": "cloud.authentication",
      "description": "Domain",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.authentication.Endpoint": {
      "id": "Endpoint",
      "namespace": "cloud.authentication",
      "description": "Endpoint",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "interface": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "legacy_endpoint_id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "region_id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "service_id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.authentication.OpenstackToken": {
      "id": "OpenstackToken",
      "namespace": "cloud.authentication",
      "description": "OpenstackToken",
      "properties": {
        "catalog": {
          "type": "cloud.authentication.Catalog[]",
          "fullType": "cloud.authentication.Catalog[]",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "expires_at": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "issued_at": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "methods": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "project": {
          "type": "cloud.authentication.TokenProject",
          "fullType": "cloud.authentication.TokenProject",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "roles": {
          "type": "cloud.authentication.Role[]",
          "fullType": "cloud.authentication.Role[]",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "user": {
          "type": "cloud.authentication.UserToken",
          "fullType": "cloud.authentication.UserToken",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.authentication.Role": {
      "id": "Role",
      "namespace": "cloud.authentication",
      "description": "Role",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.authentication.Token": {
      "id": "Token",
      "namespace": "cloud.authentication",
      "description": "Token",
      "properties": {
        "X-Auth-Token": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "token": {
          "type": "cloud.authentication.OpenstackToken",
          "fullType": "cloud.authentication.OpenstackToken",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.authentication.TokenProject": {
      "id": "TokenProject",
      "namespace": "cloud.authentication",
      "description": "TokenProject",
      "properties": {
        "domain": {
          "type": "cloud.authentication.Domain",
          "fullType": "cloud.authentication.Domain",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.authentication.UserToken": {
      "id": "UserToken",
      "namespace": "cloud.authentication",
      "description": "UserToken",
      "properties": {
        "domain": {
          "type": "cloud.authentication.Domain",
          "fullType": "cloud.authentication.Domain",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.flavor.Capability": {
      "id": "Capability",
      "namespace": "cloud.flavor",
      "description": "Flavor capability",
      "properties": {
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is the capability enabled",
          "required": false
        },
        "name": {
          "type": "cloud.flavor.CapabilityNameEnum",
          "fullType": "cloud.flavor.CapabilityNameEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the capability",
          "required": false
        }
      }
    },
    "cloud.flavor.CapabilityNameEnum": {
      "id": "CapabilityNameEnum",
      "namespace": "cloud.flavor",
      "description": "Enum values for flavor capabilities names",
      "enum": [
        "resize",
        "snapshot",
        "volume",
        "failoverip"
      ],
      "enumType": "string"
    },
    "cloud.flavor.Flavor": {
      "id": "Flavor",
      "namespace": "cloud.flavor",
      "description": "Flavor",
      "properties": {
        "available": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Available in stock",
          "required": false
        },
        "capabilities": {
          "type": "cloud.flavor.Capability[]",
          "fullType": "cloud.flavor.Capability[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Capabilities of the flavor",
          "required": false
        },
        "disk": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of disks",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flavor id",
          "required": false
        },
        "inboundBandwidth": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Max capacity of inbound traffic in Mbit/s",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flavor name",
          "required": false
        },
        "osType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "OS to install on",
          "required": false
        },
        "outboundBandwidth": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Max capacity of outbound traffic in Mbit/s",
          "required": false
        },
        "planCodes": {
          "type": "cloud.flavor.FlavorPlanCodes",
          "fullType": "cloud.flavor.FlavorPlanCodes",
          "canBeNull": false,
          "readOnly": true,
          "description": "Plan codes to order instances",
          "required": false
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number instance you can spawn with your actual quota",
          "required": false
        },
        "ram": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ram quantity (Gio)",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flavor region",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flavor type",
          "required": false
        },
        "vcpus": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of VCPUs",
          "required": false
        }
      }
    },
    "cloud.flavor.FlavorPlanCodes": {
      "id": "FlavorPlanCodes",
      "namespace": "cloud.flavor",
      "description": "FlavorPlanCodes",
      "properties": {
        "hourly": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Plan code to order hourly instance",
          "required": false
        },
        "monthly": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Plan code to order monthly instance",
          "required": false
        }
      }
    },
    "cloud.image.Image": {
      "id": "Image",
      "namespace": "cloud.image",
      "description": "Image",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Image creation date",
          "required": false
        },
        "flavorType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Image usable only for this type of flavor if not null",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Image id",
          "required": false
        },
        "minDisk": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Minimum disks required to use image",
          "required": false
        },
        "minRam": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Minimum RAM required to use image",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Image name",
          "required": false
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Order plan code",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Image region",
          "required": false
        },
        "size": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Image size (in GiB)",
          "required": false
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Image status",
          "required": false
        },
        "tags": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Tags about the image",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Image type",
          "required": false
        },
        "user": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User to connect with",
          "required": false
        },
        "visibility": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Image visibility",
          "required": false
        }
      }
    },
    "cloud.image.OSTypeEnum": {
      "id": "OSTypeEnum",
      "namespace": "cloud.image",
      "description": "OSTypeEnum",
      "enum": [
        "linux",
        "bsd",
        "windows"
      ],
      "enumType": "string"
    },
    "cloud.instance.Access": {
      "id": "Access",
      "namespace": "cloud.instance",
      "description": "Access",
      "properties": {
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Login",
          "required": false
        },
        "password": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": true,
          "description": "Password",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Application access type",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Url",
          "required": false
        }
      }
    },
    "cloud.instance.ApplicationAccess": {
      "id": "ApplicationAccess",
      "namespace": "cloud.instance",
      "description": "ApplicationAccess",
      "properties": {
        "accesses": {
          "type": "cloud.instance.Access[]",
          "fullType": "cloud.instance.Access[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of credentials",
          "required": false
        },
        "status": {
          "type": "cloud.instance.ApplicationAccessStateEnum",
          "fullType": "cloud.instance.ApplicationAccessStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Application status",
          "required": false
        }
      }
    },
    "cloud.instance.ApplicationAccessStateEnum": {
      "id": "ApplicationAccessStateEnum",
      "namespace": "cloud.instance",
      "description": "ApplicationAccessStateEnum",
      "enum": [
        "installing",
        "ok"
      ],
      "enumType": "string"
    },
    "cloud.instance.AutoBackup": {
      "id": "AutoBackup",
      "namespace": "cloud.instance",
      "description": "Autobackup params at instance creation",
      "properties": {
        "cron": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Unix Cron pattern (eg: '0 0 * * *')",
          "required": false
        },
        "rotation": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of backup to keep",
          "required": false
        }
      }
    },
    "cloud.instance.Instance": {
      "id": "Instance",
      "namespace": "cloud.instance",
      "description": "Instance",
      "properties": {
        "created": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance creation date",
          "required": false
        },
        "flavorId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance flavor id",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance id",
          "required": false
        },
        "imageId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance image id",
          "required": false
        },
        "ipAddresses": {
          "type": "cloud.instance.IpAddress[]",
          "fullType": "cloud.instance.IpAddress[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance IP addresses",
          "required": false
        },
        "monthlyBilling": {
          "type": "cloud.instance.MonthlyBilling",
          "fullType": "cloud.instance.MonthlyBilling",
          "canBeNull": true,
          "readOnly": true,
          "description": "Instance monthly billing status",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance name",
          "required": false
        },
        "operationIds": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ids of pending public cloud operations",
          "required": false
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Order plan code",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance id",
          "required": false
        },
        "sshKeyId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Instance ssh key id",
          "required": false
        },
        "status": {
          "type": "cloud.instance.InstanceStatusEnum",
          "fullType": "cloud.instance.InstanceStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance status",
          "required": false
        }
      }
    },
    "cloud.instance.InstanceDetail": {
      "id": "InstanceDetail",
      "namespace": "cloud.instance",
      "description": "InstanceDetail",
      "properties": {
        "created": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance creation date",
          "required": false
        },
        "flavor": {
          "type": "cloud.flavor.Flavor",
          "fullType": "cloud.flavor.Flavor",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance flavor",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance id",
          "required": false
        },
        "image": {
          "type": "cloud.image.Image",
          "fullType": "cloud.image.Image",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance image",
          "required": false
        },
        "ipAddresses": {
          "type": "cloud.instance.IpAddress[]",
          "fullType": "cloud.instance.IpAddress[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance IP addresses",
          "required": false
        },
        "monthlyBilling": {
          "type": "cloud.instance.MonthlyBilling",
          "fullType": "cloud.instance.MonthlyBilling",
          "canBeNull": true,
          "readOnly": true,
          "description": "Instance monthly billing status",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance name",
          "required": false
        },
        "operationIds": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ids of pending public cloud operations",
          "required": false
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Order plan code",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance id",
          "required": false
        },
        "sshKey": {
          "type": "cloud.sshkey.SshKeyDetail",
          "fullType": "cloud.sshkey.SshKeyDetail",
          "canBeNull": true,
          "readOnly": true,
          "description": "Instance SSH key",
          "required": false
        },
        "status": {
          "type": "cloud.instance.InstanceStatusEnum",
          "fullType": "cloud.instance.InstanceStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance status",
          "required": false
        }
      }
    },
    "cloud.instance.InstanceMetrics": {
      "id": "InstanceMetrics",
      "namespace": "cloud.instance",
      "description": "InstanceMetrics",
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "values": {
          "type": "cloud.instance.InstanceMetricsValue[]",
          "fullType": "cloud.instance.InstanceMetricsValue[]",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.instance.InstanceMetricsValue": {
      "id": "InstanceMetricsValue",
      "namespace": "cloud.instance",
      "description": "InstanceMetricsValue",
      "properties": {
        "timestamp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.instance.InstanceStatusEnum": {
      "id": "InstanceStatusEnum",
      "namespace": "cloud.instance",
      "description": "InstanceStatusEnum",
      "enum": [
        "ACTIVE",
        "BUILDING",
        "DELETED",
        "DELETING",
        "ERROR",
        "HARD_REBOOT",
        "PASSWORD",
        "PAUSED",
        "REBOOT",
        "REBUILD",
        "RESCUED",
        "RESIZED",
        "REVERT_RESIZE",
        "SOFT_DELETED",
        "STOPPED",
        "SUSPENDED",
        "UNKNOWN",
        "VERIFY_RESIZE",
        "MIGRATING",
        "RESIZE",
        "BUILD",
        "SHUTOFF",
        "RESCUE",
        "SHELVED",
        "SHELVED_OFFLOADED",
        "RESCUING",
        "UNRESCUING",
        "SNAPSHOTTING",
        "RESUMING"
      ],
      "enumType": "string"
    },
    "cloud.instance.InstanceVnc": {
      "id": "InstanceVnc",
      "namespace": "cloud.instance",
      "description": "InstanceVnc",
      "properties": {
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "VNC type",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "VNC url",
          "required": false
        }
      }
    },
    "cloud.instance.IpAddress": {
      "id": "IpAddress",
      "namespace": "cloud.instance",
      "description": "IpAddress",
      "properties": {
        "gatewayIp": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Gateway IP",
          "required": false
        },
        "ip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance IP address",
          "required": false
        },
        "networkId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network ID",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance IP address type",
          "required": false
        },
        "version": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP version",
          "required": false
        }
      }
    },
    "cloud.instance.MetricsPeriodEnum": {
      "id": "MetricsPeriodEnum",
      "namespace": "cloud.instance",
      "description": "MetricsPeriod",
      "enum": [
        "lastday",
        "lastmonth",
        "lastweek",
        "lastyear",
        "today"
      ],
      "enumType": "string"
    },
    "cloud.instance.MetricsTypeEnum": {
      "id": "MetricsTypeEnum",
      "namespace": "cloud.instance",
      "description": "MetricsType",
      "enum": [
        "mem:used",
        "mem:max",
        "cpu:used",
        "cpu:max",
        "net:tx",
        "net:rx"
      ],
      "enumType": "string"
    },
    "cloud.instance.MonthlyBilling": {
      "id": "MonthlyBilling",
      "namespace": "cloud.instance",
      "description": "MonthlyBilling",
      "properties": {
        "since": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Monthly billing activated since",
          "required": false
        },
        "status": {
          "type": "cloud.instance.MonthlyBillingStatusEnum",
          "fullType": "cloud.instance.MonthlyBillingStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Monthly billing status",
          "required": false
        }
      }
    },
    "cloud.instance.MonthlyBillingStatusEnum": {
      "id": "MonthlyBillingStatusEnum",
      "namespace": "cloud.instance",
      "description": "MonthlyBillingStatusEnum",
      "enum": [
        "activationPending",
        "ok"
      ],
      "enumType": "string"
    },
    "cloud.instance.MonthlyInstanceBulkParams": {
      "id": "MonthlyInstanceBulkParams",
      "namespace": "cloud.instance",
      "description": "Instance with region to set as monthly billing",
      "properties": {
        "instanceId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance id",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region name",
          "required": false
        }
      }
    },
    "cloud.instance.NetworkBulkParams": {
      "id": "NetworkBulkParams",
      "namespace": "cloud.instance",
      "description": "NetworkBulkParams",
      "properties": {
        "networkId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Private or public network Id",
          "required": false
        }
      }
    },
    "cloud.instance.NetworkParams": {
      "id": "NetworkParams",
      "namespace": "cloud.instance",
      "description": "NetworkParams",
      "properties": {
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "Static ip (Can only be defined for private networks)",
          "required": false
        },
        "networkId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Private or public network Id",
          "required": false
        }
      }
    },
    "cloud.instance.RebootTypeEnum": {
      "id": "RebootTypeEnum",
      "namespace": "cloud.instance",
      "description": "RebootTypeEnum",
      "enum": [
        "soft",
        "hard"
      ],
      "enumType": "string"
    },
    "cloud.instance.RescueAdminPassword": {
      "id": "RescueAdminPassword",
      "namespace": "cloud.instance",
      "description": "RescueAdminPassword",
      "properties": {
        "adminPassword": {
          "type": "password",
          "fullType": "password",
          "canBeNull": true,
          "readOnly": true,
          "description": "Admin password to connect to your rescue server with",
          "required": false
        }
      }
    },
    "cloud.instanceInterface.FixedIp": {
      "id": "FixedIp",
      "namespace": "cloud.instanceInterface",
      "description": "FixedIp",
      "properties": {
        "ip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ip",
          "required": false
        },
        "subnetId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Subnetwork Id",
          "required": false
        }
      }
    },
    "cloud.instanceInterface.Interface": {
      "id": "Interface",
      "namespace": "cloud.instanceInterface",
      "description": "Interface",
      "properties": {
        "fixedIps": {
          "type": "cloud.instanceInterface.FixedIp[]",
          "fullType": "cloud.instanceInterface.FixedIp[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of ips of the interface",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Interface unique identifier",
          "required": false
        },
        "macAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Mac address",
          "required": false
        },
        "networkId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network id",
          "required": false
        },
        "state": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Openstack state",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network type",
          "required": false
        }
      }
    },
    "cloud.instancegroup.InstanceGroup": {
      "id": "InstanceGroup",
      "namespace": "cloud.instancegroup",
      "description": "InstanceGroup",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance group id",
          "required": false
        },
        "instance_ids": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instances ids",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance group name",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "region",
          "required": false
        },
        "type": {
          "type": "cloud.instancegroup.InstanceGroupTypeEnum",
          "fullType": "cloud.instancegroup.InstanceGroupTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance group type",
          "required": false
        }
      }
    },
    "cloud.instancegroup.InstanceGroupTypeEnum": {
      "id": "InstanceGroupTypeEnum",
      "namespace": "cloud.instancegroup",
      "description": "InstanceGroupTypeEnum",
      "enum": [
        "affinity",
        "anti-affinity"
      ],
      "enumType": "string"
    },
    "cloud.ip.CloudIp": {
      "id": "CloudIp",
      "namespace": "cloud.ip",
      "description": "CloudIp",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ip id",
          "required": false
        },
        "ip": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ip",
          "required": false
        },
        "status": {
          "type": "cloud.ip.IpStatusEnum",
          "fullType": "cloud.ip.IpStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ip status",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ip type",
          "required": false
        }
      }
    },
    "cloud.ip.FailoverIp": {
      "id": "FailoverIp",
      "namespace": "cloud.ip",
      "description": "FailoverIp",
      "properties": {
        "block": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP block",
          "required": false
        },
        "continentCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ip continent",
          "required": false
        },
        "geoloc": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ip location",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ip id",
          "required": false
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ip",
          "required": false
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current operation progress in percent",
          "required": false
        },
        "routedTo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance where ip is routed to",
          "required": false
        },
        "status": {
          "type": "cloud.ip.IpStatusEnum",
          "fullType": "cloud.ip.IpStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ip status",
          "required": false
        },
        "subType": {
          "type": "cloud.ip.IpSubTypeEnum",
          "fullType": "cloud.ip.IpSubTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP sub type",
          "required": false
        }
      }
    },
    "cloud.ip.IpStatusEnum": {
      "id": "IpStatusEnum",
      "namespace": "cloud.ip",
      "description": "IpStatusEnum",
      "enum": [
        "ok",
        "operationPending"
      ],
      "enumType": "string"
    },
    "cloud.ip.IpSubTypeEnum": {
      "id": "IpSubTypeEnum",
      "namespace": "cloud.ip",
      "description": "IpSubTypeEnum",
      "enum": [
        "cloud",
        "ovh"
      ],
      "enumType": "string"
    },
    "cloud.migration.Migration": {
      "id": "Migration",
      "namespace": "cloud.migration",
      "description": "Migration",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The planned date of the migration",
          "required": true
        },
        "migrationId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Migration Id",
          "required": true
        },
        "resourceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The id of the resource to migrate",
          "required": true
        },
        "resourceType": {
          "type": "cloud.migration.ResourceTypeEnum",
          "fullType": "cloud.migration.ResourceTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The type of the resource to migrate",
          "required": true
        }
      }
    },
    "cloud.migration.ResourceTypeEnum": {
      "id": "ResourceTypeEnum",
      "namespace": "cloud.migration",
      "description": "ResourceTypeEnum",
      "enum": [
        "instance"
      ],
      "enumType": "string"
    },
    "cloud.network.IPPool": {
      "id": "IPPool",
      "namespace": "cloud.network",
      "description": "IPPool",
      "properties": {
        "dhcp": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Enable DHCP",
          "required": false
        },
        "end": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last IP for this region (eg: 192.168.1.24)",
          "required": false
        },
        "network": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "Global network with cidr (eg: 192.168.1.0/24)",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region where this subnet will be created",
          "required": false
        },
        "start": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "First IP for this region (eg: 192.168.1.12)",
          "required": false
        }
      }
    },
    "cloud.network.Network": {
      "id": "Network",
      "namespace": "cloud.network",
      "description": "Network",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network id",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network name",
          "required": false
        },
        "regions": {
          "type": "cloud.network.NetworkRegion[]",
          "fullType": "cloud.network.NetworkRegion[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about private network in region",
          "required": false
        },
        "status": {
          "type": "cloud.network.NetworkStatusEnum",
          "fullType": "cloud.network.NetworkStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network status",
          "required": false
        },
        "type": {
          "type": "cloud.network.NetworkTypeEnum",
          "fullType": "cloud.network.NetworkTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Network type",
          "required": false
        },
        "vlanId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network VLAN id",
          "required": false
        }
      }
    },
    "cloud.network.NetworkRegion": {
      "id": "NetworkRegion",
      "namespace": "cloud.network",
      "description": "NetworkRegion",
      "properties": {
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network region",
          "required": false
        },
        "status": {
          "type": "cloud.network.NetworkRegionStatusEnum",
          "fullType": "cloud.network.NetworkRegionStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network region status",
          "required": false
        }
      }
    },
    "cloud.network.NetworkRegionStatusEnum": {
      "id": "NetworkRegionStatusEnum",
      "namespace": "cloud.network",
      "description": "NetworkRegionStatusEnum",
      "enum": [
        "ACTIVE",
        "BUILDING"
      ],
      "enumType": "string"
    },
    "cloud.network.NetworkStatusEnum": {
      "id": "NetworkStatusEnum",
      "namespace": "cloud.network",
      "description": "NetworkStatusEnum",
      "enum": [
        "BUILDING",
        "ACTIVE",
        "DELETING"
      ],
      "enumType": "string"
    },
    "cloud.network.NetworkTypeEnum": {
      "id": "NetworkTypeEnum",
      "namespace": "cloud.network",
      "description": "NetworkTypeEnum",
      "enum": [
        "public",
        "private"
      ],
      "enumType": "string"
    },
    "cloud.network.Subnet": {
      "id": "Subnet",
      "namespace": "cloud.network",
      "description": "Subnet",
      "properties": {
        "cidr": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "Subnet CIDR",
          "required": false
        },
        "gatewayIp": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Gateway IP in the subnet",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Subnet id",
          "required": false
        },
        "ipPools": {
          "type": "cloud.network.IPPool[]",
          "fullType": "cloud.network.IPPool[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of ip pools allocated in subnet",
          "required": false
        }
      }
    },
    "cloud.openstackClient.Profile": {
      "id": "Profile",
      "namespace": "cloud.openstackClient",
      "description": "Profile",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Profile name",
          "required": false
        }
      }
    },
    "cloud.openstackClient.Session": {
      "id": "Session",
      "namespace": "cloud.openstackClient",
      "description": "Session",
      "properties": {
        "expires": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Expiration date",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Session Id",
          "required": false
        },
        "profile": {
          "type": "cloud.openstackClient.Profile",
          "fullType": "cloud.openstackClient.Profile",
          "canBeNull": false,
          "readOnly": true,
          "description": "Profile of the session",
          "required": false
        },
        "websocket": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Websocket url to use the terminal",
          "required": false
        }
      }
    },
    "cloud.order.Order": {
      "id": "Order",
      "namespace": "cloud.order",
      "description": "Order",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Order creation date",
          "required": true
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Order id",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Order plan code",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Service created",
          "required": false
        },
        "status": {
          "type": "cloud.order.StatusEnum",
          "fullType": "cloud.order.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cloud.order.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloud.order",
      "description": "StatusEnum",
      "enum": [
        "unpaid",
        "delivering",
        "delivered",
        "unknown"
      ],
      "enumType": "string"
    },
    "cloud.project.ProjectStatusEnum": {
      "id": "ProjectStatusEnum",
      "namespace": "cloud.project",
      "description": "Possible values for project status",
      "enum": [
        "creating",
        "deleted",
        "deleting",
        "ok",
        "suspended"
      ],
      "enumType": "string"
    },
    "cloud.quota.AllowedQuota": {
      "id": "AllowedQuota",
      "namespace": "cloud.quota",
      "description": "Quotas",
      "properties": {
        "compute": {
          "type": "cloud.quota.ComputeQuota",
          "fullType": "cloud.quota.ComputeQuota",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quotas for compute",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name",
          "required": false
        },
        "network": {
          "type": "cloud.quota.NetworkQuota",
          "fullType": "cloud.quota.NetworkQuota",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quotas for network",
          "required": false
        },
        "volume": {
          "type": "cloud.quota.VolumeQuota",
          "fullType": "cloud.quota.VolumeQuota",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quotas for volume",
          "required": false
        }
      }
    },
    "cloud.quota.ComputeQuota": {
      "id": "ComputeQuota",
      "namespace": "cloud.quota",
      "description": "Quotas for compute",
      "properties": {
        "cores": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum total cores allowed in your project",
          "required": false
        },
        "instances": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of instances allowed in your project",
          "required": false
        },
        "ram": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum total ram allowed in your project",
          "required": false
        }
      }
    },
    "cloud.quota.InstanceUsageQuotas": {
      "id": "InstanceUsageQuotas",
      "namespace": "cloud.quota",
      "description": "Quotas on instances",
      "properties": {
        "maxCores": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum total cores allowed in your project",
          "required": false
        },
        "maxInstances": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum total cores allowed in your project",
          "required": false
        },
        "maxRam": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "usedCores": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current used cores number",
          "required": false
        },
        "usedInstances": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current used instances",
          "required": false
        },
        "usedRAM": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current used ram",
          "required": false
        }
      }
    },
    "cloud.quota.KeypairQuotas": {
      "id": "KeypairQuotas",
      "namespace": "cloud.quota",
      "description": "Quotas on keypairs",
      "properties": {
        "maxCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum keypairs count allowed in your project",
          "required": false
        }
      }
    },
    "cloud.quota.NetworkQuota": {
      "id": "NetworkQuota",
      "namespace": "cloud.quota",
      "description": "Quotas for network",
      "properties": {
        "networks": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of networks allowed in your project",
          "required": false
        },
        "ports": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of ports allowed in your project",
          "required": false
        },
        "subnets": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of subnets allowed in your project",
          "required": false
        }
      }
    },
    "cloud.quota.Quotas": {
      "id": "Quotas",
      "namespace": "cloud.quota",
      "description": "Quotas",
      "properties": {
        "instance": {
          "type": "cloud.quota.InstanceUsageQuotas",
          "fullType": "cloud.quota.InstanceUsageQuotas",
          "canBeNull": true,
          "readOnly": true,
          "description": "Quotas on instances",
          "required": false
        },
        "keypair": {
          "type": "cloud.quota.KeypairQuotas",
          "fullType": "cloud.quota.KeypairQuotas",
          "canBeNull": true,
          "readOnly": true,
          "description": "Quotas on keypairs",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region",
          "required": false
        },
        "volume": {
          "type": "cloud.quota.VolumeUsageQuotas",
          "fullType": "cloud.quota.VolumeUsageQuotas",
          "canBeNull": true,
          "readOnly": true,
          "description": "Quotas on volumes",
          "required": false
        }
      }
    },
    "cloud.quota.VolumeQuota": {
      "id": "VolumeQuota",
      "namespace": "cloud.quota",
      "description": "Quotas for volume",
      "properties": {
        "gigabytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum total volume capacity allowed in your project",
          "required": false
        },
        "snapshots": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of snapshots allowed in your project",
          "required": false
        },
        "volumes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of volumes allowed in your project",
          "required": false
        }
      }
    },
    "cloud.quota.VolumeUsageQuotas": {
      "id": "VolumeUsageQuotas",
      "namespace": "cloud.quota",
      "description": "Quotas on volumes",
      "properties": {
        "maxGigabytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum total volume capacity allowed in your project",
          "required": false
        },
        "usedGigabytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current used volume gigabytes",
          "required": false
        },
        "volumeCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current volumes count",
          "required": false
        }
      }
    },
    "cloud.role.Permission": {
      "id": "Permission",
      "namespace": "cloud.role",
      "description": "Role permissions",
      "properties": {
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Permission label",
          "required": false
        },
        "roles": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Roles having this permission",
          "required": false
        }
      }
    },
    "cloud.role.Role": {
      "id": "Role",
      "namespace": "cloud.role",
      "description": "Role",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Role Description",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Role id",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Role Name",
          "required": false
        },
        "permissions": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Permissions granted by this role",
          "required": false
        }
      }
    },
    "cloud.role.Roles": {
      "id": "Roles",
      "namespace": "cloud.role",
      "description": "OpenStack role",
      "properties": {
        "roles": {
          "type": "cloud.role.Role[]",
          "fullType": "cloud.role.Role[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "OpenStack roles",
          "required": false
        },
        "services": {
          "type": "cloud.role.Service[]",
          "fullType": "cloud.role.Service[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "OpenStack services",
          "required": false
        }
      }
    },
    "cloud.role.Service": {
      "id": "Service",
      "namespace": "cloud.role",
      "description": "OpenStack service",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the service",
          "required": false
        },
        "permissions": {
          "type": "cloud.role.Permission[]",
          "fullType": "cloud.role.Permission[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of permissions",
          "required": false
        }
      }
    },
    "cloud.sshkey.SshKey": {
      "id": "SshKey",
      "namespace": "cloud.sshkey",
      "description": "SshKey",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "SSH key id",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "SSH key name",
          "required": false
        },
        "publicKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "SSH public key",
          "required": false
        },
        "regions": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "SSH key regions",
          "required": false
        }
      }
    },
    "cloud.sshkey.SshKeyDetail": {
      "id": "SshKeyDetail",
      "namespace": "cloud.sshkey",
      "description": "SshKeyDetail",
      "properties": {
        "fingerPrint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "SSH key fingerprint",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "SSH key id",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "SSH key name",
          "required": false
        },
        "publicKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "SSH public key",
          "required": false
        },
        "regions": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "SSH key regions",
          "required": false
        }
      }
    },
    "cloud.stack.Content": {
      "id": "Content",
      "namespace": "cloud.stack",
      "description": "Content",
      "properties": {
        "content": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Content",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the content",
          "required": false
        }
      }
    },
    "cloud.stack.InstructionGuide": {
      "id": "InstructionGuide",
      "namespace": "cloud.stack",
      "description": "InstructionGuide",
      "properties": {
        "content": {
          "type": "cloud.stack.Content[]",
          "fullType": "cloud.stack.Content[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Guide introduction content",
          "required": false
        },
        "language": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Guide language",
          "required": false
        },
        "sections": {
          "type": "cloud.stack.Section[]",
          "fullType": "cloud.stack.Section[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sections of the guide",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Guide title",
          "required": false
        }
      }
    },
    "cloud.stack.Section": {
      "id": "Section",
      "namespace": "cloud.stack",
      "description": "Section",
      "properties": {
        "content": {
          "type": "cloud.stack.Content[]",
          "fullType": "cloud.stack.Content[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Content of the guide section",
          "required": false
        },
        "steps": {
          "type": "cloud.stack.Step[]",
          "fullType": "cloud.stack.Step[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Steps to follow",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Title of the guide section",
          "required": false
        }
      }
    },
    "cloud.stack.Stack": {
      "id": "Stack",
      "namespace": "cloud.stack",
      "description": "Stack",
      "properties": {
        "commit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stack last commit",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stack description",
          "required": false
        },
        "gitRepository": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "GIT repository",
          "required": false
        },
        "instructions": {
          "type": "cloud.stack.InstructionGuide[]",
          "fullType": "cloud.stack.InstructionGuide[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instructions to start the stack",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stack name",
          "required": false
        },
        "release": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stack release tag",
          "required": false
        },
        "uuid": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Stack uuid",
          "required": false
        }
      }
    },
    "cloud.stack.Step": {
      "id": "Step",
      "namespace": "cloud.stack",
      "description": "Step",
      "properties": {
        "content": {
          "type": "cloud.stack.Content[]",
          "fullType": "cloud.stack.Content[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Content of the step",
          "required": false
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Title of the step",
          "required": false
        }
      }
    },
    "cloud.storage.Container": {
      "id": "Container",
      "namespace": "cloud.storage",
      "description": "Container",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Storage id",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Storage name",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        },
        "storedBytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total bytes stored",
          "required": false
        },
        "storedObjects": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total objects stored",
          "required": false
        }
      }
    },
    "cloud.storage.ContainerAccess": {
      "id": "ContainerAccess",
      "namespace": "cloud.storage",
      "description": "ContainerAccess",
      "properties": {
        "endpoints": {
          "type": "cloud.storage.Endpoint[]",
          "fullType": "cloud.storage.Endpoint[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Storage access endpoints",
          "required": false
        },
        "token": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Storage access token",
          "required": false
        }
      }
    },
    "cloud.storage.ContainerDetail": {
      "id": "ContainerDetail",
      "namespace": "cloud.storage",
      "description": "ContainerDetail",
      "properties": {
        "archive": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether this is an archive container or not",
          "required": false
        },
        "containerType": {
          "type": "cloud.storage.TypeEnum",
          "fullType": "cloud.storage.TypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Container type",
          "required": false
        },
        "cors": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Origins allowed to make Cross Origin Requests",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Container name",
          "required": false
        },
        "objects": {
          "type": "cloud.storage.ContainerObject[]",
          "fullType": "cloud.storage.ContainerObject[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Objects stored in container",
          "required": false
        },
        "public": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Public container (DEPRECATED: see containerType)",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Container region",
          "required": false
        },
        "staticUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Container static URL",
          "required": false
        },
        "storedBytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total bytes stored",
          "required": false
        },
        "storedObjects": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total objects stored",
          "required": false
        }
      }
    },
    "cloud.storage.ContainerObject": {
      "id": "ContainerObject",
      "namespace": "cloud.storage",
      "description": "ContainerObject",
      "properties": {
        "contentType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Object content type",
          "required": false
        },
        "lastModified": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last modification date",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Object name",
          "required": false
        },
        "retrievalDelay": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Object retrieval delay (when unsealing)",
          "required": false
        },
        "retrievalState": {
          "type": "cloud.storage.RetrievalStateEnum",
          "fullType": "cloud.storage.RetrievalStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Object retrieval state",
          "required": false
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Object size",
          "required": false
        }
      }
    },
    "cloud.storage.ContainerObjectTempURL": {
      "id": "ContainerObjectTempURL",
      "namespace": "cloud.storage",
      "description": "ContainerObjectTempURL",
      "properties": {
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Temporary URL expiration date",
          "required": false
        },
        "getURL": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Temporary URL to get object",
          "required": false
        }
      }
    },
    "cloud.storage.Endpoint": {
      "id": "Endpoint",
      "namespace": "cloud.storage",
      "description": "Endpoint",
      "properties": {
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Endpoint region",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Endpoint URL",
          "required": false
        }
      }
    },
    "cloud.storage.RetrievalStateEnum": {
      "id": "RetrievalStateEnum",
      "namespace": "cloud.storage",
      "description": "RetrievalStateEnum",
      "enum": [
        "sealed",
        "unsealing",
        "unsealed"
      ],
      "enumType": "string"
    },
    "cloud.storage.RightEnum": {
      "id": "RightEnum",
      "namespace": "cloud.storage",
      "description": "RightEnum",
      "enum": [
        "all",
        "read",
        "write"
      ],
      "enumType": "string"
    },
    "cloud.storage.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "cloud.storage",
      "description": "TypeEnum",
      "enum": [
        "static",
        "public",
        "private"
      ],
      "enumType": "string"
    },
    "cloud.user.Openrc": {
      "id": "Openrc",
      "namespace": "cloud.user",
      "description": "Openrc",
      "properties": {
        "content": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "openrc file",
          "required": false
        }
      }
    },
    "cloud.user.OpenrcVersionEnum": {
      "id": "OpenrcVersionEnum",
      "namespace": "cloud.user",
      "description": "OpenrcVersionEnum",
      "enum": [
        "v2.0",
        "v3"
      ],
      "enumType": "string"
    },
    "cloud.user.Rclone": {
      "id": "Rclone",
      "namespace": "cloud.user",
      "description": "Rclone",
      "properties": {
        "content": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "rclone configuration file",
          "required": false
        }
      }
    },
    "cloud.user.RoleEnum": {
      "id": "RoleEnum",
      "namespace": "cloud.user",
      "description": "RoleEnum",
      "enum": [
        "admin",
        "authentication",
        "administrator",
        "compute_operator",
        "infrastructure_supervisor",
        "network_security_operator",
        "network_operator",
        "backup_operator",
        "image_operator",
        "volume_operator",
        "objectstore_operator",
        "ai_training_operator"
      ],
      "enumType": "string"
    },
    "cloud.user.User": {
      "id": "User",
      "namespace": "cloud.user",
      "description": "User",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "User creation date",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User description",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "User id",
          "required": false
        },
        "roles": {
          "type": "cloud.role.Role[]",
          "fullType": "cloud.role.Role[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "User roles",
          "required": false
        },
        "status": {
          "type": "cloud.user.UserStatusEnum",
          "fullType": "cloud.user.UserStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "User status",
          "required": false
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Username",
          "required": false
        }
      }
    },
    "cloud.user.UserDetail": {
      "id": "UserDetail",
      "namespace": "cloud.user",
      "description": "UserDetail",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "User creation date",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User description",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "User id",
          "required": false
        },
        "password": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User password",
          "required": false
        },
        "roles": {
          "type": "cloud.role.Role[]",
          "fullType": "cloud.role.Role[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "User roles",
          "required": false
        },
        "status": {
          "type": "cloud.user.UserStatusEnum",
          "fullType": "cloud.user.UserStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "User status",
          "required": false
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Username",
          "required": false
        }
      }
    },
    "cloud.user.UserStatusEnum": {
      "id": "UserStatusEnum",
      "namespace": "cloud.user",
      "description": "UserStatusEnum",
      "enum": [
        "creating",
        "ok",
        "deleting",
        "deleted"
      ],
      "enumType": "string"
    },
    "cloud.volume.Snapshot": {
      "id": "Snapshot",
      "namespace": "cloud.volume",
      "description": "Snapshot",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot creation date",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot description",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot id",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot name",
          "required": false
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Order plan code",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot region",
          "required": false
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot size",
          "required": false
        },
        "status": {
          "type": "cloud.volume.SnapshotStatusEnum",
          "fullType": "cloud.volume.SnapshotStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Snapshot status",
          "required": false
        },
        "volumeId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume source id",
          "required": false
        }
      }
    },
    "cloud.volume.SnapshotStatusEnum": {
      "id": "SnapshotStatusEnum",
      "namespace": "cloud.volume",
      "description": "SnapshotStatusEnum",
      "enum": [
        "creating",
        "available",
        "deleting",
        "error",
        "error_deleting"
      ],
      "enumType": "string"
    },
    "cloud.volume.Volume": {
      "id": "Volume",
      "namespace": "cloud.volume",
      "description": "Volume",
      "properties": {
        "attachedTo": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume attached to instances id",
          "required": false
        },
        "bootable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume bootable",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume creation date",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume description",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume id",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume name",
          "required": false
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Order plan code",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume region",
          "required": false
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume size (in GB)",
          "required": false
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume status",
          "required": false
        },
        "type": {
          "type": "cloud.volume.VolumeTypeEnum",
          "fullType": "cloud.volume.VolumeTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume type",
          "required": false
        }
      }
    },
    "cloud.volume.VolumeTypeEnum": {
      "id": "VolumeTypeEnum",
      "namespace": "cloud.volume",
      "description": "VolumeTypeEnum",
      "enum": [
        "classic",
        "high-speed"
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