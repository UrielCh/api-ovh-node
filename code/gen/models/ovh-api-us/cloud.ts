import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/cloud.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get all cloud pending orders",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Order plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.order.Order[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/order"
    },
    {
      "description": "Product availability",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get product availability",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "OVH subsidiary",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code filter",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.order.rule.Availability",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/order/rule/availability"
    },
    {
      "description": "Operations about the PUBLICCLOUD service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project"
    },
    {
      "description": "Operations about the PUBLICCLOUD service",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.Project",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
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
              "dataType": "cloud.Project",
              "description": "Request Body",
              "fullType": "cloud.Project",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Activate monthly billing on multiple instances",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectActivateMonthlyBillingCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectActivateMonthlyBillingCreation",
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
          "responseType": "cloud.instance.InstanceDetail[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/activateMonthlyBilling"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List Kubernetes available flavors for a region",
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
              "dataType": "cloud.kube.RegionEnum",
              "description": "The region to list available flavors from",
              "fullType": "cloud.kube.RegionEnum",
              "name": "region",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.kube.Flavor[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/capabilities/kube/flavors"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List Kubernetes available regions",
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
          "responseType": "cloud.kube.RegionEnum[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/capabilities/kube/regions"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List all available regions",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/capabilities/loadbalancer/region"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get specific information of a region",
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
          "responseType": "cloud.project.loadbalancer.Region",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/capabilities/loadbalancer/region/{regionName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List product availability",
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
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "OVH subsidiary",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code filter",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Plan family filter",
              "fullType": "string",
              "name": "planFamily",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Product filter",
              "fullType": "string",
              "name": "product",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.capabilities.Availability",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/capabilities/productAvailability"
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
              "description": "The project id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/confirmTermination"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get flavors",
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
              "description": "Flavor region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.flavor.Flavor[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/flavor"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get flavor",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Flavor ID",
              "fullType": "string",
              "name": "flavorId",
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
          "responseType": "cloud.flavor.Flavor",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/flavor/{flavorId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get images",
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
              "description": "Get compatible images with flavor type",
              "fullType": "string",
              "name": "flavorType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "cloud.image.OSTypeEnum",
              "description": "Image OS",
              "fullType": "cloud.image.OSTypeEnum",
              "name": "osType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Image region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.image.Image[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/image"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get image",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image ID",
              "fullType": "string",
              "name": "imageId",
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
          "responseType": "cloud.image.Image",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/image/{imageId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get instance",
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
              "description": "Instance region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.instance.Instance[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectInstanceCreation",
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
          "responseType": "cloud.instance.InstanceDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an instance",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get instance",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "cloud.instance.InstanceDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter an instance",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceUpdate",
              "description": "Request Body",
              "fullType": "cloud.ProjectInstanceUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Activate monthly billing on instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "cloud.instance.InstanceDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return initial credentials of applications installed from public image",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "cloud.instance.ApplicationAccess",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/applicationAccess"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get interfaces",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "cloud.instanceInterface.Interface[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create interface on an instance and attached it to a network",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceInterfaceCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectInstanceInterfaceCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "cloud.instanceInterface.Interface",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/interface"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an interface",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Interface ID",
              "fullType": "string",
              "name": "interfaceId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get interface",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Interface ID",
              "fullType": "string",
              "name": "interfaceId",
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
          "responseType": "cloud.instanceInterface.Interface",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return many statistics about the virtual machine for a given period",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
              "dataType": "cloud.instance.MetricsPeriodEnum",
              "description": "The period the statistics are fetched for",
              "fullType": "cloud.instance.MetricsPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "cloud.instance.MetricsTypeEnum",
              "description": "The type of statistic to be fetched",
              "fullType": "cloud.instance.MetricsTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "cloud.instance.InstanceMetrics",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/monitoring"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reboot an instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceRebootCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectInstanceRebootCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/reboot"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reinstall an instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceReinstallCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectInstanceReinstallCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "cloud.instance.InstanceDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/reinstall"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable or disable rescue mode",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceRescueModeCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectInstanceRescueModeCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "cloud.instance.RescueAdminPassword",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/rescueMode"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Migrate your instance to another flavor",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceResizeCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectInstanceResizeCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "cloud.instance.InstanceDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/resize"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Resume a suspended instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/resume"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Shelve an instance. The resources dedicated to the Public Cloud instance are released. The data of the local storage will be stored, the duration of the operation depends on the size of the local disk. The instance can be unshelved at any time. Meanwhile hourly instances will not be billed. The Snapshot Storage used to store the instance's data will be billed.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/shelve"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Snapshot an instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceSnapshotCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectInstanceSnapshotCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/snapshot"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start an instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/start"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Stop an instance. The resources dedicated to the Public Cloud instances are still reserved. The instance can be restarted at any time. Meanwhile, the same price is charged for the instance.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/stop"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unshelve an instance. The resources dedicated to the Public Cloud instance are restored. The duration of the operation depends on the size of the local disk. Instance billing will get back to normal and the snapshot used to store the instance's data will be deleted.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/unshelve"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get VNC access to your instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance ID",
              "fullType": "string",
              "name": "instanceId",
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
          "responseType": "cloud.instance.InstanceVnc",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/{instanceId}/vnc"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create multiple instances",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceBulkCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectInstanceBulkCreation",
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
          "responseType": "cloud.instance.Instance[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/bulk"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the detail of a group",
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
              "description": "Instance region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.instancegroup.InstanceGroup[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a group",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectInstanceGroupCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectInstanceGroupCreation",
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
          "responseType": "cloud.instancegroup.InstanceGroup",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/group"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a group",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Group ID",
              "fullType": "string",
              "name": "groupId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all groups",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Group ID",
              "fullType": "string",
              "name": "groupId",
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
              "description": "Instance region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.instancegroup.InstanceGroup",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/instance/group/{groupId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get ips",
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
          "responseType": "cloud.ip.CloudIp[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/ip"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get failover ips",
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
          "responseType": "cloud.ip.FailoverIp[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/ip/failover"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get failover ip",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Id",
              "fullType": "string",
              "name": "id",
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
          "responseType": "cloud.ip.FailoverIp",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/ip/failover/{id}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Attach failover ip to an instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectIpFailoverAttachCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectIpFailoverAttachCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Id",
              "fullType": "string",
              "name": "id",
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
          "responseType": "cloud.ip.FailoverIp",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/ip/failover/{id}/attach"
    },
    {
      "description": "Manage your clusters",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List your managed Kubernetes clusters",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new managed Kubernetes cluster",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeCreation",
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
          "responseType": "cloud.kube.Cluster",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube"
    },
    {
      "description": "Manage your clusters",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete your managed Kubernetes cluster",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about your managed Kubernetes cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "cloud.kube.Cluster",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update information about your managed Kubernetes cluster",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeUpdate",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}"
    },
    {
      "description": "Generate a temporary url to retrieve auditlogs",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Generate a temporary url to retrieve auditlogs",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "cloud.kube.AuditLogs",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/auditLogs"
    },
    {
      "description": "List all flavors available",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all flavors available",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "cloud.kube.Flavor[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/flavors"
    },
    {
      "description": "Manage your api-server ip restrictions",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List your ip restrictions on your cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "ipBlock[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Append a list of ip restrictions on your cluster",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeIpRestrictionUpsert",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeIpRestrictionUpsert",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "ipBlock[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Remove the current list and add a list of ip restrictions on your cluster",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeIpRestrictionUpsert",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeIpRestrictionUpsert",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "ipBlock[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/ipRestrictions"
    },
    {
      "description": "Manage your api-server ip restrictions",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete an ip restriction from your cluster",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Ip",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/ipRestrictions/{ip}"
    },
    {
      "description": "Get your cluster configuration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate kubeconfig file",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "cloud.kube.Kubeconfig",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/kubeconfig"
    },
    {
      "description": "Reset your cluster's kubeconfig",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset kubeconfig: Certificates will be regenerated, nodes will be reinstalled",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/kubeconfig/reset"
    },
    {
      "description": "Manage your nodes",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List your nodes",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "cloud.kube.Node[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "deletionDate": "2020-10-01T00:00:00+00:00",
            "deprecatedDate": "2020-07-01T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}",
            "value": "DEPRECATED"
          },
          "description": "Deploy a node for your cluster. This call is deprecated. In the meantime it will create a new node pool for each call. We encourage you to now either create a new nodepool or change the size on an existing one",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeNodeCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeNodeCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "cloud.kube.Node",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/node"
    },
    {
      "description": "Manage your nodes",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a specific node on your cluster. This will also decrease by one the desirednodes value of its nodepool",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Node ID",
              "fullType": "string",
              "name": "nodeId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information on a specific node on your cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Node ID",
              "fullType": "string",
              "name": "nodeId",
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
          "responseType": "cloud.kube.Node",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}"
    },
    {
      "description": "Manage your nodepools",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List your nodepools",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "cloud.kube.NodePool[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a nodepool on your cluster",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeNodePoolCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeNodePoolCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "cloud.kube.NodePool",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/nodepool"
    },
    {
      "description": "Manage your nodepools",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a nodepool from your cluster",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Node pool ID",
              "fullType": "string",
              "name": "nodePoolId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information on a specific nodepool on your cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Node pool ID",
              "fullType": "string",
              "name": "nodePoolId",
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
          "responseType": "cloud.kube.NodePool",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update your nodepool (quota or size)",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeNodePoolUpdate",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeNodePoolUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Node pool ID",
              "fullType": "string",
              "name": "nodePoolId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}"
    },
    {
      "description": "List nodes",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all nodes contained in a nodepool",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Node pool ID",
              "fullType": "string",
              "name": "nodePoolId",
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
          "responseType": "cloud.kube.Node[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}/nodes"
    },
    {
      "description": "Reset your cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeResetCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeResetCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/reset"
    },
    {
      "description": "Restart your cluster control plane",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restarting your control plane apiserver to invalidate cache without downtime (using force will create a slight downtime)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeRestart",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeRestart",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/restart"
    },
    {
      "description": "Update cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Force cluster and node update to the latest patch within minor version or next minor version",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeUpdateCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeUpdateCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/update"
    },
    {
      "description": "Manage the update policy of your cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the update policy of your cluster",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeUpdatePolicyUpdate",
              "description": "Request Body",
              "fullType": "cloud.ProjectKubeUpdatePolicyUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Kube ID",
              "fullType": "string",
              "name": "kubeId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/updatePolicy"
    },
    {
      "description": "List Kubernetes available regions",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2020-10-01T00:00:00+00:00",
            "deprecatedDate": "2020-06-10T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/cloud/project/{serviceName}/capabilities/kube/regions",
            "value": "DEPRECATED"
          },
          "description": "List Kubernetes available regions",
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
          "responseType": "cloud.kube.RegionEnum[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/kube/regions"
    },
    {
      "description": "Manage labs on your Cloud Project",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available public cloud labs",
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
          "responseType": "cloud.Lab[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/lab"
    },
    {
      "description": "Manage labs on your Cloud Project",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get details of a public cloud lab",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Lab ID",
              "fullType": "string",
              "name": "labId",
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
          "responseType": "cloud.Lab",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Activate a lab on your Cloud Project",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Lab ID",
              "fullType": "string",
              "name": "labId",
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
          "responseType": "cloud.Operation",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/lab/{labId}"
    },
    {
      "description": "Manage lab agreements",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List required agreements to active this lab",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Lab ID",
              "fullType": "string",
              "name": "labId",
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
          "responseType": "cloud.LabAgreements",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/lab/{labId}/agreement"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List all load balancer for a tenant",
          "errors": [
            "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
            "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
            "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
            "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
            "Client::BadRequest::UnprocessableEntity",
            "Client::Forbidden::LoadBalancerIsFrozen",
            "Client::Forbidden::NotWhiteListed",
            "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotCreateLoadBalancer",
            "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotDeleteLoadBalancer",
            "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancer",
            "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
            "Server::InternalServerError::CouldNotFindLoadBalancerIP",
            "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
            "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
            "Server::InternalServerError::CouldNotFindRegion",
            "Server::InternalServerError::CouldNotListLoadBalancers",
            "Server::InternalServerError::CouldNotListRegions",
            "Server::InternalServerError::CouldNotParseRequest",
            "Server::InternalServerError::CouldNotUpdateLoadBalancer",
            "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
            "Server::InternalServerError::MarshalingError",
            "Server::InternalServerError::MissingParameterInRequestContext"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "operationId": "listLoadBalancers",
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
          "responseType": "uuid[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a load balancer",
          "errors": [
            "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
            "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
            "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
            "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
            "Client::BadRequest::UnprocessableEntity",
            "Client::Forbidden::LoadBalancerIsFrozen",
            "Client::Forbidden::NotWhiteListed",
            "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotCreateLoadBalancer",
            "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotDeleteLoadBalancer",
            "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancer",
            "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
            "Server::InternalServerError::CouldNotFindLoadBalancerIP",
            "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
            "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
            "Server::InternalServerError::CouldNotFindRegion",
            "Server::InternalServerError::CouldNotListLoadBalancers",
            "Server::InternalServerError::CouldNotListRegions",
            "Server::InternalServerError::CouldNotParseRequest",
            "Server::InternalServerError::CouldNotUpdateLoadBalancer",
            "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
            "Server::InternalServerError::MarshalingError",
            "Server::InternalServerError::MissingParameterInRequestContext"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "operationId": "createLoadBalancer",
          "parameters": [
            {
              "dataType": "cloud.project.LoadBalancerCreation",
              "description": "Request Body",
              "fullType": "cloud.project.LoadBalancerCreation",
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
          "responseType": "cloud.project.LoadBalancer",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/loadbalancer"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete a load balancer",
          "errors": [
            "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
            "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
            "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
            "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
            "Client::BadRequest::UnprocessableEntity",
            "Client::Forbidden::LoadBalancerIsFrozen",
            "Client::Forbidden::NotWhiteListed",
            "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotCreateLoadBalancer",
            "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotDeleteLoadBalancer",
            "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancer",
            "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
            "Server::InternalServerError::CouldNotFindLoadBalancerIP",
            "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
            "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
            "Server::InternalServerError::CouldNotFindRegion",
            "Server::InternalServerError::CouldNotListLoadBalancers",
            "Server::InternalServerError::CouldNotListRegions",
            "Server::InternalServerError::CouldNotParseRequest",
            "Server::InternalServerError::CouldNotUpdateLoadBalancer",
            "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
            "Server::InternalServerError::MarshalingError",
            "Server::InternalServerError::MissingParameterInRequestContext"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "operationId": "deleteLoadBalancer",
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Load balancer ID",
              "fullType": "uuid",
              "name": "loadBalancerId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a load balancer",
          "errors": [
            "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
            "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
            "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
            "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
            "Client::BadRequest::UnprocessableEntity",
            "Client::Forbidden::LoadBalancerIsFrozen",
            "Client::Forbidden::NotWhiteListed",
            "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotCreateLoadBalancer",
            "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotDeleteLoadBalancer",
            "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancer",
            "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
            "Server::InternalServerError::CouldNotFindLoadBalancerIP",
            "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
            "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
            "Server::InternalServerError::CouldNotFindRegion",
            "Server::InternalServerError::CouldNotListLoadBalancers",
            "Server::InternalServerError::CouldNotListRegions",
            "Server::InternalServerError::CouldNotParseRequest",
            "Server::InternalServerError::CouldNotUpdateLoadBalancer",
            "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
            "Server::InternalServerError::MarshalingError",
            "Server::InternalServerError::MissingParameterInRequestContext"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "operationId": "getLoadBalancer",
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Load balancer ID",
              "fullType": "uuid",
              "name": "loadBalancerId",
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
          "responseType": "cloud.project.LoadBalancer",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update a load balancer",
          "errors": [
            "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
            "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
            "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
            "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
            "Client::BadRequest::UnprocessableEntity",
            "Client::Forbidden::LoadBalancerIsFrozen",
            "Client::Forbidden::NotWhiteListed",
            "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotCreateLoadBalancer",
            "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotDeleteLoadBalancer",
            "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancer",
            "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
            "Server::InternalServerError::CouldNotFindLoadBalancerIP",
            "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
            "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
            "Server::InternalServerError::CouldNotFindRegion",
            "Server::InternalServerError::CouldNotListLoadBalancers",
            "Server::InternalServerError::CouldNotListRegions",
            "Server::InternalServerError::CouldNotParseRequest",
            "Server::InternalServerError::CouldNotUpdateLoadBalancer",
            "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
            "Server::InternalServerError::MarshalingError",
            "Server::InternalServerError::MissingParameterInRequestContext"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "operationId": "updateLoadBalancer",
          "parameters": [
            {
              "dataType": "cloud.project.LoadBalancer",
              "description": "Request Body",
              "fullType": "cloud.project.LoadBalancer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Load balancer ID",
              "fullType": "uuid",
              "name": "loadBalancerId",
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
          "responseType": "cloud.project.LoadBalancer",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/loadbalancer/{loadBalancerId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List all versions of the configuration",
          "errors": [
            "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
            "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
            "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
            "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
            "Client::BadRequest::UnprocessableEntity",
            "Client::Forbidden::LoadBalancerIsFrozen",
            "Client::Forbidden::NotWhiteListed",
            "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotCreateLoadBalancer",
            "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotDeleteLoadBalancer",
            "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancer",
            "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
            "Server::InternalServerError::CouldNotFindLoadBalancerIP",
            "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
            "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
            "Server::InternalServerError::CouldNotFindRegion",
            "Server::InternalServerError::CouldNotListLoadBalancers",
            "Server::InternalServerError::CouldNotListRegions",
            "Server::InternalServerError::CouldNotParseRequest",
            "Server::InternalServerError::CouldNotUpdateLoadBalancer",
            "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
            "Server::InternalServerError::MarshalingError",
            "Server::InternalServerError::MissingParameterInRequestContext"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "operationId": "listLoadBalancerConfigurations",
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Load balancer ID",
              "fullType": "uuid",
              "name": "loadBalancerId",
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a configuration",
          "errors": [
            "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
            "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
            "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
            "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
            "Client::BadRequest::UnprocessableEntity",
            "Client::Forbidden::LoadBalancerIsFrozen",
            "Client::Forbidden::NotWhiteListed",
            "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotCreateLoadBalancer",
            "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotDeleteLoadBalancer",
            "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancer",
            "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
            "Server::InternalServerError::CouldNotFindLoadBalancerIP",
            "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
            "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
            "Server::InternalServerError::CouldNotFindRegion",
            "Server::InternalServerError::CouldNotListLoadBalancers",
            "Server::InternalServerError::CouldNotListRegions",
            "Server::InternalServerError::CouldNotParseRequest",
            "Server::InternalServerError::CouldNotUpdateLoadBalancer",
            "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
            "Server::InternalServerError::MarshalingError",
            "Server::InternalServerError::MissingParameterInRequestContext"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "operationId": "createLoadBalancerConfiguration",
          "parameters": [
            {
              "dataType": "cloud.project.loadbalancer.ConfigurationCreation",
              "description": "Request Body",
              "fullType": "cloud.project.loadbalancer.ConfigurationCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Load balancer ID",
              "fullType": "uuid",
              "name": "loadBalancerId",
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
          "responseType": "cloud.project.loadbalancer.Configuration",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete a configuration",
          "errors": [
            "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
            "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
            "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
            "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
            "Client::BadRequest::UnprocessableEntity",
            "Client::Forbidden::LoadBalancerIsFrozen",
            "Client::Forbidden::NotWhiteListed",
            "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotCreateLoadBalancer",
            "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotDeleteLoadBalancer",
            "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancer",
            "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
            "Server::InternalServerError::CouldNotFindLoadBalancerIP",
            "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
            "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
            "Server::InternalServerError::CouldNotFindRegion",
            "Server::InternalServerError::CouldNotListLoadBalancers",
            "Server::InternalServerError::CouldNotListRegions",
            "Server::InternalServerError::CouldNotParseRequest",
            "Server::InternalServerError::CouldNotUpdateLoadBalancer",
            "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
            "Server::InternalServerError::MarshalingError",
            "Server::InternalServerError::MissingParameterInRequestContext"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "operationId": "deleteLoadBalancerConfiguration",
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Load balancer ID",
              "fullType": "uuid",
              "name": "loadBalancerId",
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
              "dataType": "long",
              "description": "Version",
              "fullType": "long",
              "name": "version",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a configuration",
          "errors": [
            "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
            "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
            "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
            "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
            "Client::BadRequest::UnprocessableEntity",
            "Client::Forbidden::LoadBalancerIsFrozen",
            "Client::Forbidden::NotWhiteListed",
            "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotCreateLoadBalancer",
            "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotDeleteLoadBalancer",
            "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancer",
            "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
            "Server::InternalServerError::CouldNotFindLoadBalancerIP",
            "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
            "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
            "Server::InternalServerError::CouldNotFindRegion",
            "Server::InternalServerError::CouldNotListLoadBalancers",
            "Server::InternalServerError::CouldNotListRegions",
            "Server::InternalServerError::CouldNotParseRequest",
            "Server::InternalServerError::CouldNotUpdateLoadBalancer",
            "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
            "Server::InternalServerError::MarshalingError",
            "Server::InternalServerError::MissingParameterInRequestContext"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "operationId": "getLoadBalancerConfiguration",
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Load balancer ID",
              "fullType": "uuid",
              "name": "loadBalancerId",
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
              "dataType": "long",
              "description": "Version",
              "fullType": "long",
              "name": "version",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.project.loadbalancer.Configuration",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration/{version}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Apply a configuration",
          "errors": [
            "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
            "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
            "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
            "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
            "Client::BadRequest::UnprocessableEntity",
            "Client::Forbidden::LoadBalancerIsFrozen",
            "Client::Forbidden::NotWhiteListed",
            "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotCreateLoadBalancer",
            "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotDeleteLoadBalancer",
            "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancer",
            "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
            "Server::InternalServerError::CouldNotFindLoadBalancerIP",
            "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
            "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
            "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
            "Server::InternalServerError::CouldNotFindRegion",
            "Server::InternalServerError::CouldNotListLoadBalancers",
            "Server::InternalServerError::CouldNotListRegions",
            "Server::InternalServerError::CouldNotParseRequest",
            "Server::InternalServerError::CouldNotUpdateLoadBalancer",
            "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
            "Server::InternalServerError::MarshalingError",
            "Server::InternalServerError::MissingParameterInRequestContext"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "operationId": "applyLoadBalancerConfiguration",
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Load balancer ID",
              "fullType": "uuid",
              "name": "loadBalancerId",
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
              "dataType": "long",
              "description": "Version",
              "fullType": "long",
              "name": "version",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.project.loadbalancer.Configuration",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration/{version}/apply"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get planned migrations",
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
          "responseType": "cloud.migration.Migration[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/migration"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get planned migration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Migration id",
              "fullType": "string",
              "name": "migrationId",
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
          "responseType": "cloud.migration.Migration",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update planned migration",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Migration date (RFC3339)",
              "fullType": "datetime",
              "name": "date",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Migration id",
              "fullType": "string",
              "name": "migrationId",
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
          "responseType": "cloud.migration.Migration",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/migration/{migrationId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get private networks",
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
          "responseType": "cloud.network.Network[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new network",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectNetworkPrivateCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectNetworkPrivateCreation",
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
          "responseType": "cloud.network.Network",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/network/private"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete private network",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Network ID",
              "fullType": "string",
              "name": "networkId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get private network",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Network ID",
              "fullType": "string",
              "name": "networkId",
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
          "responseType": "cloud.network.Network",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Rename private network",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectNetworkPrivateUpdate",
              "description": "Request Body",
              "fullType": "cloud.ProjectNetworkPrivateUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Network ID",
              "fullType": "string",
              "name": "networkId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/network/private/{networkId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Activate private network in a new region",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectNetworkPrivateRegionCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectNetworkPrivateRegionCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Network ID",
              "fullType": "string",
              "name": "networkId",
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
          "responseType": "cloud.network.Network",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/network/private/{networkId}/region"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get network subnets",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Network ID",
              "fullType": "string",
              "name": "networkId",
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
          "responseType": "cloud.network.Subnet[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new network subnet",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectNetworkPrivateSubnetCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectNetworkPrivateSubnetCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Network ID",
              "fullType": "string",
              "name": "networkId",
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
          "responseType": "cloud.network.Subnet",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/network/private/{networkId}/subnet"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a network subnet",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Network ID",
              "fullType": "string",
              "name": "networkId",
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
              "description": "Subnet ID",
              "fullType": "string",
              "name": "subnetId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get public networks",
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
          "responseType": "cloud.network.Network[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/network/public"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get OVH playground session to use the openstack terminal",
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
          "responseType": "cloud.openstackClient.Session",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/openstackClient"
    },
    {
      "description": "Manage the operations on your Cloud Project",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List your operations",
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
          "responseType": "cloud.Operation[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/operation"
    },
    {
      "description": "Manage the operations on your Cloud Project",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about one operation",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Operation ID",
              "fullType": "string",
              "name": "operationId",
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
          "responseType": "cloud.Operation",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/operation/{operationId}"
    },
    {
      "description": "List your quota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List quotas",
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
          "responseType": "cloud.quota.Quotas[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/quota"
    },
    {
      "description": "Manage your regions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List your regions",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request access to a region",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectRegionCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectRegionCreation",
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
          "responseType": "cloud.Region",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/region"
    },
    {
      "description": "Manage your regions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about your region",
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
          "responseType": "cloud.Region",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/region/{regionName}"
    },
    {
      "description": "Consult quotas",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List quotas",
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
          "responseType": "cloud.quota.Quotas",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Change project quotas on region",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectRegionQuotaCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectRegionQuotaCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Region name",
              "fullType": "string",
              "name": "regionName",
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
          "responseType": "cloud.Operation",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/region/{regionName}/quota"
    },
    {
      "description": "Get allowed quotas",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get allowed quotas on region",
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
          "responseType": "cloud.quota.AllowedQuota[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/region/{regionName}/quota/allowed"
    },
    {
      "description": "Get storage quotas",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete storage quota on region",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Region name",
              "fullType": "string",
              "name": "regionName",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get storage quotas on region",
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
          "responseType": "cloud.quota.storage.Quota",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update storage quota on region",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.quota.storage.QuotaUpdate",
              "description": "Request Body",
              "fullType": "cloud.quota.storage.QuotaUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Region name",
              "fullType": "string",
              "name": "regionName",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/region/{regionName}/quota/storage"
    },
    {
      "description": "Manage your automated backups",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List your automated backups",
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
          "responseType": "cloud.Backup[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a new automated backup",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectRegionWorkflowBackupCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectRegionWorkflowBackupCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Region name",
              "fullType": "string",
              "name": "regionName",
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
          "responseType": "cloud.Backup",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/region/{regionName}/workflow/backup"
    },
    {
      "description": "Manage your automated backups",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete a backup workflow process",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Backup workflow ID",
              "fullType": "string",
              "name": "backupWorkflowId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get details about a backup workflow process",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Backup workflow ID",
              "fullType": "string",
              "name": "backupWorkflowId",
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
          "responseType": "cloud.Backup",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}"
    },
    {
      "description": "Manage the regions you can add on your project",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List the regions on which you can ask an access to",
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
          "responseType": "cloud.AvailableRegion[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/regionAvailable"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all Roles",
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
          "responseType": "cloud.role.Roles",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/role"
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
              "description": "The project id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
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
              "description": "The project id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/serviceInfos"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get snapshots",
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
              "description": "Get compatible snapshots with flavor type",
              "fullType": "string",
              "name": "flavorType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.image.Image[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/snapshot"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a snapshot",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image ID",
              "fullType": "string",
              "name": "imageId",
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
          "responseType": "cloud.image.Image",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get snapshot details",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image ID",
              "fullType": "string",
              "name": "imageId",
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
          "responseType": "cloud.image.Image",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/snapshot/{imageId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get SSH keys",
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
              "description": "Region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.sshkey.SshKey[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create SSH key",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectSshkeyCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectSshkeyCreation",
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
          "responseType": "cloud.sshkey.SshKeyDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/sshkey"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete SSH key",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Key ID",
              "fullType": "string",
              "name": "keyId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get SSH key",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Key ID",
              "fullType": "string",
              "name": "keyId",
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
          "responseType": "cloud.sshkey.SshKeyDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/sshkey/{keyId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get stacks",
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
          "responseType": "cloud.stack.Stack[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/stack"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get stack",
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
              "description": "Stack ID",
              "fullType": "string",
              "name": "stackId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.stack.Stack",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/stack/{stackId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get OVH playground session with a stack installed to use the openstack terminal",
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
              "description": "Stack ID",
              "fullType": "string",
              "name": "stackId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.openstackClient.Session",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/stack/{stackId}/client"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get storage containers",
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
          "responseType": "cloud.storage.Container[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create container",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectStorageCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectStorageCreation",
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
          "responseType": "cloud.storage.Container",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/storage"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete container",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Container ID",
              "fullType": "string",
              "name": "containerId",
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
              "dataType": "boolean",
              "description": "Recursively delete objects and container",
              "fullType": "boolean",
              "name": "recursive",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get storage container",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Container ID",
              "fullType": "string",
              "name": "containerId",
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
              "dataType": "boolean",
              "description": "Do not return container objects",
              "fullType": "boolean",
              "name": "noObjects",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.storage.ContainerDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update your storage container",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectStorageUpdate",
              "description": "Request Body",
              "fullType": "cloud.ProjectStorageUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Container ID",
              "fullType": "string",
              "name": "containerId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/storage/{containerId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete CORS support on your container",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Container ID",
              "fullType": "string",
              "name": "containerId",
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
              "description": "Delete this origin",
              "fullType": "string",
              "name": "origin",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add CORS support on your container",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectStorageCorsCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectStorageCorsCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Container ID",
              "fullType": "string",
              "name": "containerId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/storage/{containerId}/cors"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a public temporary URL to access to one of your object",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectStoragePublicUrlCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectStoragePublicUrlCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Container ID",
              "fullType": "string",
              "name": "containerId",
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
          "responseType": "cloud.storage.ContainerObjectTempURL",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/storage/{containerId}/publicUrl"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Deploy your container files as a static web site",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Container ID",
              "fullType": "string",
              "name": "containerId",
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
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/storage/{containerId}/static"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create openstack user with only access to this container",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectStorageUserCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectStorageUserCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Container ID",
              "fullType": "string",
              "name": "containerId",
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
          "responseType": "cloud.user.UserDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/storage/{containerId}/user"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2016-11-25T10:00:00+01:00",
            "deprecatedDate": "2016-08-25T10:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/cloud/project/{serviceName}/storage/access",
            "value": "DEPRECATED"
          },
          "description": "Access to storage API",
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
          "responseType": "cloud.storage.ContainerAccess",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Access to storage API",
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
          "responseType": "cloud.storage.ContainerAccess",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/storage/access"
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
              "description": "The project id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/terminate"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all users",
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
          "responseType": "cloud.user.User[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create user",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectUserCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectUserCreation",
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
          "responseType": "cloud.user.UserDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/user"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete user",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get user details",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.user.User",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/user/{userId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get RC file of OpenStack",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "cloud.user.OpenrcVersionEnum",
              "description": "Identity API version",
              "fullType": "cloud.user.OpenrcVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.user.Openrc",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/user/{userId}/openrc"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get rclone configuration file",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "cloud.user.Rclone",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/user/{userId}/rclone"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Regenerate user password",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.user.UserDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/user/{userId}/regeneratePassword"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get user roles",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.role.Role[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a role to a user",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectUserRoleCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectUserRoleCreation",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.user.UserDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update roles of a user",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectUserRoleUpdate",
              "description": "Request Body",
              "fullType": "cloud.ProjectUserRoleUpdate",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.user.UserDetail",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/user/{userId}/role"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove role for a user",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Role ID",
              "fullType": "string",
              "name": "roleId",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get role detail",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Role ID",
              "fullType": "string",
              "name": "roleId",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.role.Role",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/user/{userId}/role/{roleId}"
    },
    {
      "description": "Manage your S3 credentials",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List your S3 credentials",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.user.S3CredentialsWithSecret[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a new S3 credentials for an user",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.user.S3CredentialsWithSecret",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/user/{userId}/s3Credentials"
    },
    {
      "description": "Manage your S3 credentials",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete an S3 credential",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Access",
              "fullType": "string",
              "name": "access",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get details about an S3 credential",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Access",
              "fullType": "string",
              "name": "access",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.user.S3CredentialsWithSecret",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/user/{userId}/s3Credentials/{access}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get token for user",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectUserTokenCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectUserTokenCreation",
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
              "dataType": "long",
              "description": "User ID",
              "fullType": "long",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.authentication.Token",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/user/{userId}/token"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get volumes",
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
              "description": "Volume region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.volume.Volume[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a volume",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectVolumeCreation",
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
          "responseType": "cloud.volume.Volume",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/volume"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a volume",
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
              "description": "Volume ID",
              "fullType": "string",
              "name": "volumeId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get volume details",
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
              "description": "Volume ID",
              "fullType": "string",
              "name": "volumeId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.volume.Volume",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update a volume",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeUpdate",
              "description": "Request Body",
              "fullType": "cloud.ProjectVolumeUpdate",
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
              "description": "Volume ID",
              "fullType": "string",
              "name": "volumeId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.volume.Volume",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/volume/{volumeId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Attach a volume on an instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeAttachCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectVolumeAttachCreation",
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
              "description": "Volume ID",
              "fullType": "string",
              "name": "volumeId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.volume.Volume",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/volume/{volumeId}/attach"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Detach a volume from an instance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeDetachCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectVolumeDetachCreation",
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
              "description": "Volume ID",
              "fullType": "string",
              "name": "volumeId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.volume.Volume",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/volume/{volumeId}/detach"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Snapshot a volume",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeSnapshotCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectVolumeSnapshotCreation",
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
              "description": "Volume ID",
              "fullType": "string",
              "name": "volumeId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.volume.Snapshot",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/volume/{volumeId}/snapshot"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Extend a volume",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cloud.ProjectVolumeUpsizeCreation",
              "description": "Request Body",
              "fullType": "cloud.ProjectVolumeUpsizeCreation",
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
              "description": "Volume ID",
              "fullType": "string",
              "name": "volumeId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.volume.Volume",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/volume/{volumeId}/upsize"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get volume snapshots",
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
              "description": "Snapshots region",
              "fullType": "string",
              "name": "region",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "cloud.volume.Snapshot[]",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/volume/snapshot"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a volume snapshot",
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
              "description": "Snapshot ID",
              "fullType": "string",
              "name": "snapshotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get volume snapshot details",
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
              "description": "Snapshot ID",
              "fullType": "string",
              "name": "snapshotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cloud.volume.Snapshot",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/volume/snapshot/{snapshotId}"
    },
    {
      "description": "Manage the vRack on your Cloud Project",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the linked vRack on your project",
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
          "responseType": "cloud.Vrack",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Order and attach a new vRack on your project",
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
          "responseType": "cloud.Operation",
          "scopes": [
            "all",
            "product/cloud/all"
          ]
        }
      ],
      "path": "/cloud/project/{serviceName}/vrack"
    }
  ],
  "basePath": "https://api.us.ovhcloud.com/1.0",
  "models": {
    "cloud.AccessTypeEnum": {
      "description": "Possible values for project access type",
      "enum": [
        "full",
        "restricted"
      ],
      "enumType": "string",
      "id": "AccessTypeEnum",
      "namespace": "cloud"
    },
    "cloud.AvailableRegion": {
      "description": "Details about an available region that can be activated on your project",
      "id": "AvailableRegion",
      "namespace": "cloud",
      "properties": {
        "continentCode": {
          "canBeNull": false,
          "description": "Region continent code",
          "fullType": "cloud.RegionContinentEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.RegionContinentEnum"
        },
        "datacenterLocation": {
          "canBeNull": false,
          "description": "Location of the datacenter where the region is",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Region name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.Backup": {
      "description": "List your automated backups",
      "id": "Backup",
      "namespace": "cloud",
      "properties": {
        "backupName": {
          "canBeNull": false,
          "description": "Backup name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date of the workflow",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "cron": {
          "canBeNull": false,
          "description": "Workflow cron pattern",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "executions": {
          "canBeNull": true,
          "description": "Executions logs",
          "fullType": "cloud.Execution[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.Execution[]"
        },
        "id": {
          "canBeNull": false,
          "description": "Workflow id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "instanceId": {
          "canBeNull": false,
          "description": "Instance id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Workflow name identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.Component": {
      "description": "Information about the different components available in the region",
      "id": "Component",
      "namespace": "cloud",
      "properties": {
        "endpoint": {
          "canBeNull": false,
          "description": "Endpoint URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Service status",
          "fullType": "cloud.ServiceStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.ServiceStatusEnum"
        }
      }
    },
    "cloud.Execution": {
      "description": "An execution of the backup workflow",
      "id": "Execution",
      "namespace": "cloud",
      "properties": {
        "executedAt": {
          "canBeNull": false,
          "description": "Last date of cron trigger execution",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "state": {
          "canBeNull": false,
          "description": "Execution state",
          "fullType": "cloud.ExecutionStateEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.ExecutionStateEnum"
        },
        "stateInfo": {
          "canBeNull": false,
          "description": "Information about state",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ExecutionState": {
      "description": "Enum values for State",
      "enum": [
        "IDLE",
        "RUNNING",
        "SUCCESS",
        "ERROR",
        "PAUSED"
      ],
      "enumType": "string",
      "id": "ExecutionState",
      "namespace": "cloud"
    },
    "cloud.ExecutionStateEnum": {
      "description": "Enum values for State",
      "enum": [
        "IDLE",
        "RUNNING",
        "SUCCESS",
        "ERROR",
        "PAUSED"
      ],
      "enumType": "string",
      "id": "ExecutionStateEnum",
      "namespace": "cloud"
    },
    "cloud.IpCountryEnum": {
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
      "enumType": "string",
      "id": "IpCountryEnum",
      "namespace": "cloud"
    },
    "cloud.Lab": {
      "description": "A public cloud lab permits to activate a feature in beta",
      "id": "Lab",
      "namespace": "cloud",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Lab ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Lab name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Lab status",
          "fullType": "cloud.LabStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.LabStatusEnum"
        }
      }
    },
    "cloud.LabAgreements": {
      "description": "List of required agreements to activate the lab",
      "id": "LabAgreements",
      "namespace": "cloud",
      "properties": {
        "accepted": {
          "canBeNull": false,
          "description": "List of agreements already accepted to activate the lab",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "toAccept": {
          "canBeNull": false,
          "description": "List of agreements to accept before activate the lab",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        }
      }
    },
    "cloud.LabStatus": {
      "description": "Enum values for Status",
      "enum": [
        "open",
        "activating",
        "activated",
        "closed"
      ],
      "enumType": "string",
      "id": "LabStatus",
      "namespace": "cloud"
    },
    "cloud.LabStatusEnum": {
      "description": "Enum values for Status",
      "enum": [
        "open",
        "activating",
        "activated",
        "closed"
      ],
      "enumType": "string",
      "id": "LabStatusEnum",
      "namespace": "cloud"
    },
    "cloud.Operation": {
      "description": "An operation is an async process on your Project",
      "id": "Operation",
      "namespace": "cloud",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "The action of the operation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "completedAt": {
          "canBeNull": true,
          "description": "The completed date of the operation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "The creation date of the operation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique ID to describe the operation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "progress": {
          "canBeNull": false,
          "description": "The progression in percentage of the operation",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "regions": {
          "canBeNull": true,
          "description": "Affected regions of the operation",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "startedAt": {
          "canBeNull": true,
          "description": "The started date of the operation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Operation status",
          "fullType": "cloud.OperationStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.OperationStatusEnum"
        }
      }
    },
    "cloud.OperationStatus": {
      "description": "Enum values for Status",
      "enum": [
        "created",
        "in-progress",
        "completed",
        "in-error",
        "unknown"
      ],
      "enumType": "string",
      "id": "OperationStatus",
      "namespace": "cloud"
    },
    "cloud.OperationStatusEnum": {
      "description": "Enum values for Status",
      "enum": [
        "created",
        "in-progress",
        "completed",
        "in-error",
        "unknown"
      ],
      "enumType": "string",
      "id": "OperationStatusEnum",
      "namespace": "cloud"
    },
    "cloud.Project": {
      "description": "Project",
      "id": "Project",
      "namespace": "cloud",
      "properties": {
        "access": {
          "canBeNull": false,
          "description": "Project access",
          "fullType": "cloud.AccessTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.AccessTypeEnum"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Project creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of your project",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expiration": {
          "canBeNull": true,
          "description": "Expiration date of your project. After this date, your project will be deleted",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "manualQuota": {
          "canBeNull": false,
          "description": "Manual quota prevent automatic quota upgrade",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "orderId": {
          "canBeNull": true,
          "description": "Project order id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Order plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "projectName": {
          "canBeNull": true,
          "description": "Project name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "project_id": {
          "canBeNull": false,
          "description": "Project id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Current status",
          "fullType": "cloud.project.ProjectStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.ProjectStatusEnum"
        },
        "unleash": {
          "canBeNull": false,
          "description": "Project unleashed",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "cloud.ProjectActivateMonthlyBillingCreation": {
      "description": "Missing description",
      "id": "ProjectActivateMonthlyBillingCreation",
      "namespace": "cloud",
      "properties": {
        "instances": {
          "canBeNull": false,
          "description": "Instance ids and regions",
          "fullType": "cloud.instance.MonthlyInstanceBulkParams[]",
          "readOnly": false,
          "required": true,
          "type": "cloud.instance.MonthlyInstanceBulkParams[]"
        }
      }
    },
    "cloud.ProjectInstanceBulkCreation": {
      "description": "Missing description",
      "id": "ProjectInstanceBulkCreation",
      "namespace": "cloud",
      "properties": {
        "autobackup": {
          "canBeNull": true,
          "description": "Create an autobackup workflow after instance start up",
          "fullType": "cloud.instance.AutoBackup",
          "readOnly": false,
          "required": false,
          "type": "cloud.instance.AutoBackup"
        },
        "flavorId": {
          "canBeNull": false,
          "description": "Instance flavor id",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "groupId": {
          "canBeNull": true,
          "description": "Start instance in group",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "imageId": {
          "canBeNull": true,
          "description": "Instance image id",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "monthlyBilling": {
          "canBeNull": true,
          "description": "Active monthly billing",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Instance name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "networks": {
          "canBeNull": true,
          "description": "Create network interfaces",
          "fullType": "cloud.instance.NetworkBulkParams[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.instance.NetworkBulkParams[]"
        },
        "number": {
          "canBeNull": false,
          "description": "Number of instances you want to create",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "region": {
          "canBeNull": false,
          "description": "Instance region",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "sshKeyId": {
          "canBeNull": true,
          "description": "SSH keypair id",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "userData": {
          "canBeNull": true,
          "description": "Configuration information or scripts to use upon launch",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "volumeId": {
          "canBeNull": true,
          "description": "Specify a volume id to boot from it",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ProjectInstanceCreation": {
      "description": "Missing description",
      "id": "ProjectInstanceCreation",
      "namespace": "cloud",
      "properties": {
        "autobackup": {
          "canBeNull": true,
          "description": "Create an autobackup workflow after instance start up",
          "fullType": "cloud.instance.AutoBackup",
          "readOnly": false,
          "required": false,
          "type": "cloud.instance.AutoBackup"
        },
        "flavorId": {
          "canBeNull": false,
          "description": "Instance flavor id",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "groupId": {
          "canBeNull": true,
          "description": "Start instance in group",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "imageId": {
          "canBeNull": true,
          "description": "Instance image id",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "monthlyBilling": {
          "canBeNull": true,
          "description": "Active monthly billing",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Instance name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "networks": {
          "canBeNull": true,
          "description": "Create network interfaces",
          "fullType": "cloud.instance.NetworkParams[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.instance.NetworkParams[]"
        },
        "region": {
          "canBeNull": false,
          "description": "Instance region",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "sshKeyId": {
          "canBeNull": true,
          "description": "SSH keypair id",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "userData": {
          "canBeNull": true,
          "description": "Configuration information or scripts to use upon launch",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "volumeId": {
          "canBeNull": true,
          "description": "Specify a volume id to boot from it",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ProjectInstanceGroupCreation": {
      "description": "Missing description",
      "id": "ProjectInstanceGroupCreation",
      "namespace": "cloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "instance group name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Instance region",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Instance group type",
          "fullType": "cloud.instancegroup.InstanceGroupTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.instancegroup.InstanceGroupTypeEnum"
        }
      }
    },
    "cloud.ProjectInstanceInterfaceCreation": {
      "description": "Missing description",
      "id": "ProjectInstanceInterfaceCreation",
      "namespace": "cloud",
      "properties": {
        "ip": {
          "canBeNull": true,
          "description": "Static ip (Can only be defined for private networks)",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "networkId": {
          "canBeNull": false,
          "description": "Network id",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectInstanceRebootCreation": {
      "description": "Missing description",
      "id": "ProjectInstanceRebootCreation",
      "namespace": "cloud",
      "properties": {
        "type": {
          "canBeNull": false,
          "description": "Reboot type (default soft)",
          "fullType": "cloud.instance.RebootTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.instance.RebootTypeEnum"
        }
      }
    },
    "cloud.ProjectInstanceReinstallCreation": {
      "description": "Missing description",
      "id": "ProjectInstanceReinstallCreation",
      "namespace": "cloud",
      "properties": {
        "imageId": {
          "canBeNull": false,
          "description": "Image to reinstall",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectInstanceRescueModeCreation": {
      "description": "Missing description",
      "id": "ProjectInstanceRescueModeCreation",
      "namespace": "cloud",
      "properties": {
        "imageId": {
          "canBeNull": true,
          "description": "Image to boot on",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "rescue": {
          "canBeNull": false,
          "description": "Enable rescue mode",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    },
    "cloud.ProjectInstanceResizeCreation": {
      "description": "Missing description",
      "id": "ProjectInstanceResizeCreation",
      "namespace": "cloud",
      "properties": {
        "flavorId": {
          "canBeNull": false,
          "description": "Flavor id",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectInstanceSnapshotCreation": {
      "description": "Missing description",
      "id": "ProjectInstanceSnapshotCreation",
      "namespace": "cloud",
      "properties": {
        "snapshotName": {
          "canBeNull": false,
          "description": "Snapshot name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectInstanceUpdate": {
      "description": "Missing description",
      "id": "ProjectInstanceUpdate",
      "namespace": "cloud",
      "properties": {
        "instanceName": {
          "canBeNull": false,
          "description": "Instance new name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectIpFailoverAttachCreation": {
      "description": "Missing description",
      "id": "ProjectIpFailoverAttachCreation",
      "namespace": "cloud",
      "properties": {
        "instanceId": {
          "canBeNull": false,
          "description": "Attach failover ip to instance",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectKubeCreation": {
      "description": "Missing description",
      "id": "ProjectKubeCreation",
      "namespace": "cloud",
      "properties": {
        "name": {
          "canBeNull": true,
          "description": "Kubernetes cluster name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nodepool": {
          "canBeNull": true,
          "description": "Nodepool to init with cluster creation",
          "fullType": "cloud.ProjectKubeCreationNodePool",
          "readOnly": false,
          "required": false,
          "type": "cloud.ProjectKubeCreationNodePool"
        },
        "privateNetworkId": {
          "canBeNull": true,
          "description": "OpenStack private network (or vrack) ID to bind to cluster",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Kubernetes OpenStack region",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "version": {
          "canBeNull": true,
          "description": "Kubernetes version to install",
          "fullType": "cloud.kube.VersionEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.kube.VersionEnum"
        }
      }
    },
    "cloud.ProjectKubeCreationNodePool": {
      "description": "Missing description",
      "id": "ProjectKubeCreationNodePool",
      "namespace": "cloud",
      "properties": {
        "antiAffinity": {
          "canBeNull": true,
          "description": "Enable anti affinity groups for nodes in the pool",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "autoscale": {
          "canBeNull": true,
          "description": "Enable the auto-scaling on the pool",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "desiredNodes": {
          "canBeNull": true,
          "description": "Number of nodes to instantiate (1 by default)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "flavorName": {
          "canBeNull": true,
          "description": "Nodes flavor",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "maxNodes": {
          "canBeNull": true,
          "description": "Higher limit you accept for the desiredNodes value (100 by default)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minNodes": {
          "canBeNull": true,
          "description": "Lower limit you accept for the desiredNodes value (0 by default)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "monthlyBilled": {
          "canBeNull": true,
          "description": "Enable monthly billing for nodes in the pool",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": true,
          "description": "NodePool name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ProjectKubeIpRestrictionUpsert": {
      "description": "Missing description",
      "id": "ProjectKubeIpRestrictionUpsert",
      "namespace": "cloud",
      "properties": {
        "ips": {
          "canBeNull": true,
          "description": "List of ips to add to the cluster api-server restrictions (format with /subnet available)",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        }
      }
    },
    "cloud.ProjectKubeNodeCreation": {
      "description": "Missing description",
      "id": "ProjectKubeNodeCreation",
      "namespace": "cloud",
      "properties": {
        "flavorName": {
          "canBeNull": false,
          "description": "Flavor name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Node name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ProjectKubeNodePoolCreation": {
      "description": "Missing description",
      "id": "ProjectKubeNodePoolCreation",
      "namespace": "cloud",
      "properties": {
        "antiAffinity": {
          "canBeNull": true,
          "description": "Enable anti affinity groups for nodes in the pool",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "autoscale": {
          "canBeNull": true,
          "description": "Enable the auto-scaling on the pool",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "desiredNodes": {
          "canBeNull": true,
          "description": "Number of nodes to instantiate (1 by default)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "flavorName": {
          "canBeNull": false,
          "description": "Nodes flavor",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "maxNodes": {
          "canBeNull": true,
          "description": "Higher limit you accept for the desiredNodes value (100 by default)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minNodes": {
          "canBeNull": true,
          "description": "Lower limit you accept for the desiredNodes value (0 by default)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "monthlyBilled": {
          "canBeNull": true,
          "description": "Enable monthly billing for nodes in the pool",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": true,
          "description": "NodePool name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ProjectKubeNodePoolUpdate": {
      "description": "Missing description",
      "id": "ProjectKubeNodePoolUpdate",
      "namespace": "cloud",
      "properties": {
        "autoscale": {
          "canBeNull": true,
          "description": "Enable the auto-scaling on the pool",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "desiredNodes": {
          "canBeNull": true,
          "description": "New number of nodes wanted in the nodepool",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maxNodes": {
          "canBeNull": true,
          "description": "New maximal number of nodes wanted in the nodepool",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minNodes": {
          "canBeNull": true,
          "description": "New minimal number of nodes wanted in the nodepool",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "nodesToRemove": {
          "canBeNull": true,
          "description": "Nodes to delete during downscale",
          "fullType": "uuid[]",
          "readOnly": false,
          "required": false,
          "type": "uuid[]"
        }
      }
    },
    "cloud.ProjectKubeOpenIdConnectCreation": {
      "description": "Creation model for OIDC",
      "id": "ProjectKubeOpenIdConnectCreation",
      "namespace": "cloud",
      "properties": {
        "clientId": {
          "canBeNull": false,
          "description": "Client ID",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "issuerUrl": {
          "canBeNull": false,
          "description": "Issuer URL",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectKubeOpenIdConnectUpdate": {
      "description": "Update model for OIDC",
      "id": "ProjectKubeOpenIdConnectUpdate",
      "namespace": "cloud",
      "properties": {
        "clientId": {
          "canBeNull": false,
          "description": "Client ID",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "issuerUrl": {
          "canBeNull": false,
          "description": "Issuer URL",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ProjectKubeResetCreation": {
      "description": "Missing description",
      "id": "ProjectKubeResetCreation",
      "namespace": "cloud",
      "properties": {
        "privateNetworkId": {
          "canBeNull": true,
          "description": "OpenStack private network (or vrack) ID to bind to cluster",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": true,
          "description": "Kubernetes version to use after reset, by default it keeps the current version",
          "fullType": "cloud.kube.VersionEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.kube.VersionEnum"
        },
        "workerNodesPolicy": {
          "canBeNull": true,
          "description": "Worker nodes reset policy, default is delete",
          "fullType": "cloud.kube.ResetWorkerNodesPolicyEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.kube.ResetWorkerNodesPolicyEnum"
        }
      }
    },
    "cloud.ProjectKubeRestart": {
      "description": "Missing description",
      "id": "ProjectKubeRestart",
      "namespace": "cloud",
      "properties": {
        "force": {
          "canBeNull": true,
          "description": "Force restarting control plane apiserver (will create a slight downtime)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "cloud.ProjectKubeUpdate": {
      "description": "Missing description",
      "id": "ProjectKubeUpdate",
      "namespace": "cloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Cluster new name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectKubeUpdateCreation": {
      "description": "Missing description",
      "id": "ProjectKubeUpdateCreation",
      "namespace": "cloud",
      "properties": {
        "strategy": {
          "canBeNull": true,
          "description": "The update strategy to apply on your service (next patch or minor version)",
          "fullType": "cloud.kube.UpdateStrategyEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.kube.UpdateStrategyEnum"
        }
      }
    },
    "cloud.ProjectKubeUpdatePolicyUpdate": {
      "description": "Missing description",
      "id": "ProjectKubeUpdatePolicyUpdate",
      "namespace": "cloud",
      "properties": {
        "updatePolicy": {
          "canBeNull": false,
          "description": "Update policy",
          "fullType": "cloud.kube.UpdatePolicyEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.kube.UpdatePolicyEnum"
        }
      }
    },
    "cloud.ProjectNetworkPrivateCreation": {
      "description": "Missing description",
      "id": "ProjectNetworkPrivateCreation",
      "namespace": "cloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Network name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "regions": {
          "canBeNull": true,
          "description": "Region where to activate private network. No parameters means all region",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "vlanId": {
          "canBeNull": true,
          "description": "Vland id, between 0 and 4000. 0 value means no vlan.",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.ProjectNetworkPrivateRegionCreation": {
      "description": "Missing description",
      "id": "ProjectNetworkPrivateRegionCreation",
      "namespace": "cloud",
      "properties": {
        "region": {
          "canBeNull": false,
          "description": "Region to active on your network",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectNetworkPrivateSubnetCreation": {
      "description": "Missing description",
      "id": "ProjectNetworkPrivateSubnetCreation",
      "namespace": "cloud",
      "properties": {
        "dhcp": {
          "canBeNull": false,
          "description": "Enable DHCP",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "end": {
          "canBeNull": false,
          "description": "Last IP for this region (eg: 192.168.1.24)",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        },
        "network": {
          "canBeNull": false,
          "description": "Global network with cidr (eg: 192.168.1.0/24)",
          "fullType": "ipBlock",
          "readOnly": false,
          "required": true,
          "type": "ipBlock"
        },
        "noGateway": {
          "canBeNull": false,
          "description": "Set to true if you don't want to set a default gateway IP",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "region": {
          "canBeNull": false,
          "description": "Region where this subnet will be created",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "start": {
          "canBeNull": false,
          "description": "First IP for this region (eg: 192.168.1.12)",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        }
      }
    },
    "cloud.ProjectNetworkPrivateSubnetUpdate": {
      "description": "Missing description",
      "id": "ProjectNetworkPrivateSubnetUpdate",
      "namespace": "cloud",
      "properties": {
        "dhcp": {
          "canBeNull": false,
          "description": "Set to true if you don't want to set a default gateway IP",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "disableGateway": {
          "canBeNull": false,
          "description": "Set to true if you want to disable the default gateway",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "gatewayIp": {
          "canBeNull": true,
          "description": "Gateway IP (this field is used if noGateway = false)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ProjectNetworkPrivateUpdate": {
      "description": "Missing description",
      "id": "ProjectNetworkPrivateUpdate",
      "namespace": "cloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectRegionCreation": {
      "description": "Missing description",
      "id": "ProjectRegionCreation",
      "namespace": "cloud",
      "properties": {
        "region": {
          "canBeNull": false,
          "description": "Region to add on your project",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectRegionQuotaCreation": {
      "description": "Missing description",
      "id": "ProjectRegionQuotaCreation",
      "namespace": "cloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the new quota",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectRegionWorkflowBackupCreation": {
      "description": "Missing description",
      "id": "ProjectRegionWorkflowBackupCreation",
      "namespace": "cloud",
      "properties": {
        "cron": {
          "canBeNull": false,
          "description": "Unix Cron pattern (eg: '* * * * *')",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "instanceId": {
          "canBeNull": false,
          "description": "Instance ID to backup",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "maxExecutionCount": {
          "canBeNull": true,
          "description": "Number of execution to process before ending the job. Null value means that the job will never end.",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of your backup job",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "rotation": {
          "canBeNull": false,
          "description": "Number of backup to keep",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "cloud.ProjectSshkeyCreation": {
      "description": "Missing description",
      "id": "ProjectSshkeyCreation",
      "namespace": "cloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "SSH key name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "publicKey": {
          "canBeNull": false,
          "description": "SSH public key",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "region": {
          "canBeNull": true,
          "description": "Region to create SSH key",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ProjectStorageCorsCreation": {
      "description": "Missing description",
      "id": "ProjectStorageCorsCreation",
      "namespace": "cloud",
      "properties": {
        "origin": {
          "canBeNull": false,
          "description": "Allow this origin",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectStorageCreation": {
      "description": "Missing description",
      "id": "ProjectStorageCreation",
      "namespace": "cloud",
      "properties": {
        "archive": {
          "canBeNull": false,
          "description": "Archive container flag",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "containerName": {
          "canBeNull": false,
          "description": "Container name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Region",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectStoragePublicUrlCreation": {
      "description": "Missing description",
      "id": "ProjectStoragePublicUrlCreation",
      "namespace": "cloud",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Temporary URL expiration",
          "fullType": "datetime",
          "readOnly": false,
          "required": true,
          "type": "datetime"
        },
        "objectName": {
          "canBeNull": false,
          "description": "Object name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectStorageUpdate": {
      "description": "Missing description",
      "id": "ProjectStorageUpdate",
      "namespace": "cloud",
      "properties": {
        "containerType": {
          "canBeNull": true,
          "description": "Container type",
          "fullType": "cloud.storage.TypeEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.storage.TypeEnum"
        }
      }
    },
    "cloud.ProjectStorageUserCreation": {
      "description": "Missing description",
      "id": "ProjectStorageUserCreation",
      "namespace": "cloud",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "User description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "right": {
          "canBeNull": false,
          "description": "User right (all, read, write)",
          "fullType": "cloud.storage.RightEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.storage.RightEnum"
        }
      }
    },
    "cloud.ProjectUserCreation": {
      "description": "Missing description",
      "id": "ProjectUserCreation",
      "namespace": "cloud",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "User description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "role": {
          "canBeNull": true,
          "description": "Openstack keystone role name",
          "fullType": "cloud.user.RoleEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.user.RoleEnum"
        },
        "roles": {
          "canBeNull": true,
          "description": "Openstack keystone roles names",
          "fullType": "cloud.user.RoleEnum[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.user.RoleEnum[]"
        }
      }
    },
    "cloud.ProjectUserRoleCreation": {
      "description": "Missing description",
      "id": "ProjectUserRoleCreation",
      "namespace": "cloud",
      "properties": {
        "roleId": {
          "canBeNull": false,
          "description": "Role id",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectUserRoleUpdate": {
      "description": "Missing description",
      "id": "ProjectUserRoleUpdate",
      "namespace": "cloud",
      "properties": {
        "rolesIds": {
          "canBeNull": false,
          "description": "Roles ids",
          "fullType": "string[]",
          "readOnly": false,
          "required": true,
          "type": "string[]"
        }
      }
    },
    "cloud.ProjectUserTokenCreation": {
      "description": "Missing description",
      "id": "ProjectUserTokenCreation",
      "namespace": "cloud",
      "properties": {
        "password": {
          "canBeNull": false,
          "description": "User password",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
    },
    "cloud.ProjectVolumeAttachCreation": {
      "description": "Missing description",
      "id": "ProjectVolumeAttachCreation",
      "namespace": "cloud",
      "properties": {
        "instanceId": {
          "canBeNull": false,
          "description": "Instance id",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectVolumeCreation": {
      "description": "Missing description",
      "id": "ProjectVolumeCreation",
      "namespace": "cloud",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Volume description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "imageId": {
          "canBeNull": true,
          "description": "Id of image to create a bootable volume",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Volume name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Volume region",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Volume size (in GiB)",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "snapshotId": {
          "canBeNull": true,
          "description": "Source snapshot id",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Volume type",
          "fullType": "cloud.volume.VolumeTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.volume.VolumeTypeEnum"
        }
      }
    },
    "cloud.ProjectVolumeDetachCreation": {
      "description": "Missing description",
      "id": "ProjectVolumeDetachCreation",
      "namespace": "cloud",
      "properties": {
        "instanceId": {
          "canBeNull": false,
          "description": "Instance id",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.ProjectVolumeSnapshotCreation": {
      "description": "Missing description",
      "id": "ProjectVolumeSnapshotCreation",
      "namespace": "cloud",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Snapshot description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Snapshot name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ProjectVolumeUpdate": {
      "description": "Missing description",
      "id": "ProjectVolumeUpdate",
      "namespace": "cloud",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Volume description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Volume name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ProjectVolumeUpsizeCreation": {
      "description": "Missing description",
      "id": "ProjectVolumeUpsizeCreation",
      "namespace": "cloud",
      "properties": {
        "size": {
          "canBeNull": false,
          "description": "New volume size (in GiB) (must be greater than current one)",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "cloud.Region": {
      "description": "Details about your region",
      "id": "Region",
      "namespace": "cloud",
      "properties": {
        "continentCode": {
          "canBeNull": false,
          "description": "Region continent code",
          "fullType": "cloud.RegionContinentEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.RegionContinentEnum"
        },
        "datacenterLocation": {
          "canBeNull": false,
          "description": "Location of the datacenter where the region is",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ipCountries": {
          "canBeNull": false,
          "description": "Allowed countries for failover ip",
          "fullType": "cloud.IpCountryEnum[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.IpCountryEnum[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Region name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "services": {
          "canBeNull": false,
          "description": "Details about components status",
          "fullType": "cloud.Component[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.Component[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Openstack region status",
          "fullType": "cloud.RegionStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.RegionStatusEnum"
        }
      }
    },
    "cloud.RegionContinent": {
      "description": "Enum values for ContinentCode",
      "enum": [
        "EU",
        "NA",
        "US",
        "ASIA"
      ],
      "enumType": "string",
      "id": "RegionContinent",
      "namespace": "cloud"
    },
    "cloud.RegionContinentEnum": {
      "description": "Enum values for ContinentCode",
      "enum": [
        "EU",
        "NA",
        "US",
        "ASIA"
      ],
      "enumType": "string",
      "id": "RegionContinentEnum",
      "namespace": "cloud"
    },
    "cloud.RegionStatus": {
      "description": "Enum values for Status",
      "enum": [
        "UP",
        "DOWN",
        "MAINTENANCE"
      ],
      "enumType": "string",
      "id": "RegionStatus",
      "namespace": "cloud"
    },
    "cloud.RegionStatusEnum": {
      "description": "Enum values for Status",
      "enum": [
        "UP",
        "DOWN",
        "MAINTENANCE"
      ],
      "enumType": "string",
      "id": "RegionStatusEnum",
      "namespace": "cloud"
    },
    "cloud.ServiceStatus": {
      "description": "Enum values for Status",
      "enum": [
        "UP",
        "DOWN"
      ],
      "enumType": "string",
      "id": "ServiceStatus",
      "namespace": "cloud"
    },
    "cloud.ServiceStatusEnum": {
      "description": "Enum values for Status",
      "enum": [
        "UP",
        "DOWN"
      ],
      "enumType": "string",
      "id": "ServiceStatusEnum",
      "namespace": "cloud"
    },
    "cloud.StorageContainer": {
      "description": "Container",
      "id": "StorageContainer",
      "namespace": "cloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Container name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "objects": {
          "canBeNull": false,
          "description": "Container objects",
          "fullType": "cloud.StorageObject[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.StorageObject[]"
        },
        "objectsCount": {
          "canBeNull": false,
          "description": "Container total objects count",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "objectsSize": {
          "canBeNull": false,
          "description": "Container total objects size (bytes)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.StorageContainerCreation": {
      "description": "Create a container",
      "id": "StorageContainerCreation",
      "namespace": "cloud",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Container name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.StorageObject": {
      "description": "Object",
      "id": "StorageObject",
      "namespace": "cloud",
      "properties": {
        "etag": {
          "canBeNull": false,
          "description": "ETag",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "key": {
          "canBeNull": false,
          "description": "Key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastModified": {
          "canBeNull": false,
          "description": "Last modification date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "size": {
          "canBeNull": false,
          "description": "Size (bytes)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.Vrack": {
      "description": "A vRack allows to connect your OVH infrastructures accross products and datacenters",
      "id": "Vrack",
      "namespace": "cloud",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description of your vRack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Vrack ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of your vRack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.authentication.Catalog": {
      "description": "Catalog",
      "id": "Catalog",
      "namespace": "cloud.authentication",
      "properties": {
        "endpoints": {
          "canBeNull": false,
          "fullType": "cloud.authentication.Endpoint[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.authentication.Endpoint[]"
        },
        "id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.authentication.Domain": {
      "description": "Domain",
      "id": "Domain",
      "namespace": "cloud.authentication",
      "properties": {
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.authentication.Endpoint": {
      "description": "Endpoint",
      "id": "Endpoint",
      "namespace": "cloud.authentication",
      "properties": {
        "id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "interface": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "legacy_endpoint_id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region_id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "service_id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.authentication.OpenstackToken": {
      "description": "OpenstackToken",
      "id": "OpenstackToken",
      "namespace": "cloud.authentication",
      "properties": {
        "catalog": {
          "canBeNull": false,
          "fullType": "cloud.authentication.Catalog[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.authentication.Catalog[]"
        },
        "expires_at": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "issued_at": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "methods": {
          "canBeNull": false,
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "project": {
          "canBeNull": false,
          "fullType": "cloud.authentication.TokenProject",
          "readOnly": true,
          "required": false,
          "type": "cloud.authentication.TokenProject"
        },
        "roles": {
          "canBeNull": false,
          "fullType": "cloud.authentication.Role[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.authentication.Role[]"
        },
        "user": {
          "canBeNull": false,
          "fullType": "cloud.authentication.UserToken",
          "readOnly": true,
          "required": false,
          "type": "cloud.authentication.UserToken"
        }
      }
    },
    "cloud.authentication.Role": {
      "description": "Role",
      "id": "Role",
      "namespace": "cloud.authentication",
      "properties": {
        "id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.authentication.Token": {
      "description": "Token",
      "id": "Token",
      "namespace": "cloud.authentication",
      "properties": {
        "X-Auth-Token": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "token": {
          "canBeNull": false,
          "fullType": "cloud.authentication.OpenstackToken",
          "readOnly": true,
          "required": false,
          "type": "cloud.authentication.OpenstackToken"
        }
      }
    },
    "cloud.authentication.TokenProject": {
      "description": "TokenProject",
      "id": "TokenProject",
      "namespace": "cloud.authentication",
      "properties": {
        "domain": {
          "canBeNull": false,
          "fullType": "cloud.authentication.Domain",
          "readOnly": true,
          "required": false,
          "type": "cloud.authentication.Domain"
        },
        "id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.authentication.UserToken": {
      "description": "UserToken",
      "id": "UserToken",
      "namespace": "cloud.authentication",
      "properties": {
        "domain": {
          "canBeNull": false,
          "fullType": "cloud.authentication.Domain",
          "readOnly": true,
          "required": false,
          "type": "cloud.authentication.Domain"
        },
        "id": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.capabilities.Availability": {
      "description": "Public Cloud products availability",
      "id": "Availability",
      "namespace": "cloud.capabilities",
      "properties": {
        "plans": {
          "canBeNull": false,
          "description": "Plan availability",
          "fullType": "cloud.capabilities.AvailabilityPlan[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.capabilities.AvailabilityPlan[]"
        },
        "products": {
          "canBeNull": false,
          "description": "Product availability",
          "fullType": "cloud.capabilities.AvailabilityProduct[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.capabilities.AvailabilityProduct[]"
        }
      }
    },
    "cloud.capabilities.AvailabilityPlan": {
      "description": "Public Cloud plan availability",
      "id": "AvailabilityPlan",
      "namespace": "cloud.capabilities",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "regions": {
          "canBeNull": false,
          "description": "Plan is available on those regions",
          "fullType": "cloud.capabilities.AvailabilityRegion[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.capabilities.AvailabilityRegion[]"
        }
      }
    },
    "cloud.capabilities.AvailabilityProduct": {
      "description": "Public Cloud product availability",
      "id": "AvailabilityProduct",
      "namespace": "cloud.capabilities",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Product name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "regions": {
          "canBeNull": false,
          "description": "Product is available on those regions",
          "fullType": "cloud.capabilities.AvailabilityRegion[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.capabilities.AvailabilityRegion[]"
        }
      }
    },
    "cloud.capabilities.AvailabilityRegion": {
      "description": "Details about a region",
      "id": "AvailabilityRegion",
      "namespace": "cloud.capabilities",
      "properties": {
        "continentCode": {
          "canBeNull": false,
          "description": "Region continent code",
          "fullType": "cloud.RegionContinentEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.RegionContinentEnum"
        },
        "datacenter": {
          "canBeNull": false,
          "description": "Location of the datacenter where the region is",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "enabled": {
          "canBeNull": false,
          "description": "Region is enabled",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Region name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.capabilities.Capability": {
      "description": "Capability",
      "id": "Capability",
      "namespace": "cloud.capabilities",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "description": "Capability status",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Capability name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.flavor.Capability": {
      "description": "Flavor capability",
      "id": "Capability",
      "namespace": "cloud.flavor",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "description": "Is the capability enabled",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the capability",
          "fullType": "cloud.flavor.CapabilityNameEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.flavor.CapabilityNameEnum"
        }
      }
    },
    "cloud.flavor.CapabilityNameEnum": {
      "description": "Enum values for flavor capabilities names",
      "enum": [
        "resize",
        "snapshot",
        "volume",
        "failoverip"
      ],
      "enumType": "string",
      "id": "CapabilityNameEnum",
      "namespace": "cloud.flavor"
    },
    "cloud.flavor.Flavor": {
      "description": "Flavor",
      "id": "Flavor",
      "namespace": "cloud.flavor",
      "properties": {
        "available": {
          "canBeNull": false,
          "description": "Available in stock",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "capabilities": {
          "canBeNull": false,
          "description": "Capabilities of the flavor",
          "fullType": "cloud.flavor.Capability[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.flavor.Capability[]"
        },
        "disk": {
          "canBeNull": false,
          "description": "Number of disks",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "Flavor id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "inboundBandwidth": {
          "canBeNull": true,
          "description": "Max capacity of inbound traffic in Mbit/s",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Flavor name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "osType": {
          "canBeNull": false,
          "description": "OS to install on",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "outboundBandwidth": {
          "canBeNull": true,
          "description": "Max capacity of outbound traffic in Mbit/s",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "planCodes": {
          "canBeNull": false,
          "description": "Plan codes to order instances",
          "fullType": "cloud.flavor.FlavorPlanCodes",
          "readOnly": true,
          "required": false,
          "type": "cloud.flavor.FlavorPlanCodes"
        },
        "quota": {
          "canBeNull": false,
          "description": "Number instance you can spawn with your actual quota",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ram": {
          "canBeNull": false,
          "description": "Ram quantity (Gio)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "region": {
          "canBeNull": false,
          "description": "Flavor region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Flavor type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vcpus": {
          "canBeNull": false,
          "description": "Number of VCPUs",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.flavor.FlavorPlanCodes": {
      "description": "FlavorPlanCodes",
      "id": "FlavorPlanCodes",
      "namespace": "cloud.flavor",
      "properties": {
        "hourly": {
          "canBeNull": true,
          "description": "Plan code to order hourly instance",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "monthly": {
          "canBeNull": true,
          "description": "Plan code to order monthly instance",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.image.Image": {
      "description": "Image",
      "id": "Image",
      "namespace": "cloud.image",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Image creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "flavorType": {
          "canBeNull": true,
          "description": "Image usable only for this type of flavor if not null",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Image id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "minDisk": {
          "canBeNull": false,
          "description": "Minimum disks required to use image",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minRam": {
          "canBeNull": false,
          "description": "Minimum RAM required to use image",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Image name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": true,
          "description": "Order plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Image region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Image size (in GiB)",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "status": {
          "canBeNull": false,
          "description": "Image status",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "tags": {
          "canBeNull": true,
          "description": "Tags about the image",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Image type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "user": {
          "canBeNull": false,
          "description": "User to connect with",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "visibility": {
          "canBeNull": false,
          "description": "Image visibility",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.image.OSTypeEnum": {
      "description": "OSTypeEnum",
      "enum": [
        "linux",
        "bsd",
        "windows",
        "baremetal-linux"
      ],
      "enumType": "string",
      "id": "OSTypeEnum",
      "namespace": "cloud.image"
    },
    "cloud.instance.Access": {
      "description": "Access",
      "id": "Access",
      "namespace": "cloud.instance",
      "properties": {
        "login": {
          "canBeNull": false,
          "description": "Login",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "description": "Password",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "type": {
          "canBeNull": false,
          "description": "Application access type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "Url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.instance.ApplicationAccess": {
      "description": "ApplicationAccess",
      "id": "ApplicationAccess",
      "namespace": "cloud.instance",
      "properties": {
        "accesses": {
          "canBeNull": false,
          "description": "List of credentials",
          "fullType": "cloud.instance.Access[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.instance.Access[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Application status",
          "fullType": "cloud.instance.ApplicationAccessStateEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.instance.ApplicationAccessStateEnum"
        }
      }
    },
    "cloud.instance.ApplicationAccessStateEnum": {
      "description": "ApplicationAccessStateEnum",
      "enum": [
        "installing",
        "ok"
      ],
      "enumType": "string",
      "id": "ApplicationAccessStateEnum",
      "namespace": "cloud.instance"
    },
    "cloud.instance.AutoBackup": {
      "description": "Autobackup params at instance creation",
      "id": "AutoBackup",
      "namespace": "cloud.instance",
      "properties": {
        "cron": {
          "canBeNull": false,
          "description": "Unix Cron pattern (eg: '0 0 * * *')",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "rotation": {
          "canBeNull": false,
          "description": "Number of backup to keep",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.instance.Instance": {
      "description": "Instance",
      "id": "Instance",
      "namespace": "cloud.instance",
      "properties": {
        "created": {
          "canBeNull": false,
          "description": "Instance creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "flavorId": {
          "canBeNull": false,
          "description": "Instance flavor id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Instance id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "imageId": {
          "canBeNull": false,
          "description": "Instance image id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ipAddresses": {
          "canBeNull": false,
          "description": "Instance IP addresses",
          "fullType": "cloud.instance.IpAddress[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.instance.IpAddress[]"
        },
        "monthlyBilling": {
          "canBeNull": true,
          "description": "Instance monthly billing status",
          "fullType": "cloud.instance.MonthlyBilling",
          "readOnly": true,
          "required": false,
          "type": "cloud.instance.MonthlyBilling"
        },
        "name": {
          "canBeNull": false,
          "description": "Instance name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "operationIds": {
          "canBeNull": false,
          "description": "Ids of pending public cloud operations",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "planCode": {
          "canBeNull": true,
          "description": "Order plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Instance id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sshKeyId": {
          "canBeNull": true,
          "description": "Instance ssh key id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Instance status",
          "fullType": "cloud.instance.InstanceStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.instance.InstanceStatusEnum"
        }
      }
    },
    "cloud.instance.InstanceDetail": {
      "description": "InstanceDetail",
      "id": "InstanceDetail",
      "namespace": "cloud.instance",
      "properties": {
        "created": {
          "canBeNull": false,
          "description": "Instance creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "flavor": {
          "canBeNull": false,
          "description": "Instance flavor",
          "fullType": "cloud.flavor.Flavor",
          "readOnly": true,
          "required": false,
          "type": "cloud.flavor.Flavor"
        },
        "id": {
          "canBeNull": false,
          "description": "Instance id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "image": {
          "canBeNull": false,
          "description": "Instance image",
          "fullType": "cloud.image.Image",
          "readOnly": true,
          "required": false,
          "type": "cloud.image.Image"
        },
        "ipAddresses": {
          "canBeNull": false,
          "description": "Instance IP addresses",
          "fullType": "cloud.instance.IpAddress[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.instance.IpAddress[]"
        },
        "monthlyBilling": {
          "canBeNull": true,
          "description": "Instance monthly billing status",
          "fullType": "cloud.instance.MonthlyBilling",
          "readOnly": true,
          "required": false,
          "type": "cloud.instance.MonthlyBilling"
        },
        "name": {
          "canBeNull": false,
          "description": "Instance name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "operationIds": {
          "canBeNull": false,
          "description": "Ids of pending public cloud operations",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "planCode": {
          "canBeNull": true,
          "description": "Order plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Instance id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sshKey": {
          "canBeNull": true,
          "description": "Instance SSH key",
          "fullType": "cloud.sshkey.SshKeyDetail",
          "readOnly": true,
          "required": false,
          "type": "cloud.sshkey.SshKeyDetail"
        },
        "status": {
          "canBeNull": false,
          "description": "Instance status",
          "fullType": "cloud.instance.InstanceStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.instance.InstanceStatusEnum"
        }
      }
    },
    "cloud.instance.InstanceMetrics": {
      "description": "InstanceMetrics",
      "id": "InstanceMetrics",
      "namespace": "cloud.instance",
      "properties": {
        "unit": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "fullType": "cloud.instance.InstanceMetricsValue[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.instance.InstanceMetricsValue[]"
        }
      }
    },
    "cloud.instance.InstanceMetricsValue": {
      "description": "InstanceMetricsValue",
      "id": "InstanceMetricsValue",
      "namespace": "cloud.instance",
      "properties": {
        "timestamp": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "cloud.instance.InstanceStatusEnum": {
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
        "RESUMING",
        "SHELVING",
        "UNSHELVING"
      ],
      "enumType": "string",
      "id": "InstanceStatusEnum",
      "namespace": "cloud.instance"
    },
    "cloud.instance.InstanceVnc": {
      "description": "InstanceVnc",
      "id": "InstanceVnc",
      "namespace": "cloud.instance",
      "properties": {
        "type": {
          "canBeNull": false,
          "description": "VNC type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "VNC url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.instance.IpAddress": {
      "description": "IpAddress",
      "id": "IpAddress",
      "namespace": "cloud.instance",
      "properties": {
        "gatewayIp": {
          "canBeNull": true,
          "description": "Gateway IP",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "ip": {
          "canBeNull": false,
          "description": "Instance IP address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "networkId": {
          "canBeNull": false,
          "description": "Network ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Instance IP address type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": "IP version",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.instance.MetricsPeriod": {
      "description": "MetricsPeriod",
      "enum": [
        "lastday",
        "lastmonth",
        "lastweek",
        "lastyear",
        "today"
      ],
      "enumType": "string",
      "id": "MetricsPeriod",
      "namespace": "cloud.instance"
    },
    "cloud.instance.MetricsPeriodEnum": {
      "description": "MetricsPeriod",
      "enum": [
        "lastday",
        "lastmonth",
        "lastweek",
        "lastyear",
        "today"
      ],
      "enumType": "string",
      "id": "MetricsPeriodEnum",
      "namespace": "cloud.instance"
    },
    "cloud.instance.MetricsType": {
      "description": "MetricsType",
      "enum": [
        "mem:used",
        "mem:max",
        "cpu:used",
        "cpu:max",
        "net:tx",
        "net:rx"
      ],
      "enumType": "string",
      "id": "MetricsType",
      "namespace": "cloud.instance"
    },
    "cloud.instance.MetricsTypeEnum": {
      "description": "MetricsType",
      "enum": [
        "mem:used",
        "mem:max",
        "cpu:used",
        "cpu:max",
        "net:tx",
        "net:rx"
      ],
      "enumType": "string",
      "id": "MetricsTypeEnum",
      "namespace": "cloud.instance"
    },
    "cloud.instance.MonthlyBilling": {
      "description": "MonthlyBilling",
      "id": "MonthlyBilling",
      "namespace": "cloud.instance",
      "properties": {
        "since": {
          "canBeNull": false,
          "description": "Monthly billing activated since",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Monthly billing status",
          "fullType": "cloud.instance.MonthlyBillingStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.instance.MonthlyBillingStatusEnum"
        }
      }
    },
    "cloud.instance.MonthlyBillingStatusEnum": {
      "description": "MonthlyBillingStatusEnum",
      "enum": [
        "activationPending",
        "ok"
      ],
      "enumType": "string",
      "id": "MonthlyBillingStatusEnum",
      "namespace": "cloud.instance"
    },
    "cloud.instance.MonthlyInstanceBulkParams": {
      "description": "Instance with region to set as monthly billing",
      "id": "MonthlyInstanceBulkParams",
      "namespace": "cloud.instance",
      "properties": {
        "instanceId": {
          "canBeNull": false,
          "description": "Instance id",
          "fullType": "uuid",
          "readOnly": false,
          "required": false,
          "type": "uuid"
        },
        "region": {
          "canBeNull": false,
          "description": "Region name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.instance.NetworkBulkParams": {
      "description": "NetworkBulkParams",
      "id": "NetworkBulkParams",
      "namespace": "cloud.instance",
      "properties": {
        "networkId": {
          "canBeNull": false,
          "description": "Private or public network Id",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.instance.NetworkParams": {
      "description": "NetworkParams",
      "id": "NetworkParams",
      "namespace": "cloud.instance",
      "properties": {
        "ip": {
          "canBeNull": true,
          "description": "Static ip (Can only be defined for private networks)",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "networkId": {
          "canBeNull": false,
          "description": "Private or public network Id",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.instance.RebootTypeEnum": {
      "description": "RebootTypeEnum",
      "enum": [
        "soft",
        "hard"
      ],
      "enumType": "string",
      "id": "RebootTypeEnum",
      "namespace": "cloud.instance"
    },
    "cloud.instance.RescueAdminPassword": {
      "description": "RescueAdminPassword",
      "id": "RescueAdminPassword",
      "namespace": "cloud.instance",
      "properties": {
        "adminPassword": {
          "canBeNull": true,
          "description": "Admin password to connect to your rescue server with",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        }
      }
    },
    "cloud.instanceInterface.FixedIp": {
      "description": "FixedIp",
      "id": "FixedIp",
      "namespace": "cloud.instanceInterface",
      "properties": {
        "ip": {
          "canBeNull": false,
          "description": "Ip",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "subnetId": {
          "canBeNull": false,
          "description": "Subnetwork Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.instanceInterface.Interface": {
      "description": "Interface",
      "id": "Interface",
      "namespace": "cloud.instanceInterface",
      "properties": {
        "fixedIps": {
          "canBeNull": false,
          "description": "List of ips of the interface",
          "fullType": "cloud.instanceInterface.FixedIp[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.instanceInterface.FixedIp[]"
        },
        "id": {
          "canBeNull": false,
          "description": "Interface unique identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "macAddress": {
          "canBeNull": false,
          "description": "Mac address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "networkId": {
          "canBeNull": false,
          "description": "Network id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Openstack state",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Network type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.instancegroup.InstanceGroup": {
      "description": "InstanceGroup",
      "id": "InstanceGroup",
      "namespace": "cloud.instancegroup",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Instance group id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "instance_ids": {
          "canBeNull": false,
          "description": "Instances ids",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Instance group name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Instance group type",
          "fullType": "cloud.instancegroup.InstanceGroupTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.instancegroup.InstanceGroupTypeEnum"
        }
      }
    },
    "cloud.instancegroup.InstanceGroupTypeEnum": {
      "description": "InstanceGroupTypeEnum",
      "enum": [
        "affinity",
        "anti-affinity"
      ],
      "enumType": "string",
      "id": "InstanceGroupTypeEnum",
      "namespace": "cloud.instancegroup"
    },
    "cloud.ip.CloudIp": {
      "description": "CloudIp",
      "id": "CloudIp",
      "namespace": "cloud.ip",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Ip id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": true,
          "description": "Ip",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "status": {
          "canBeNull": false,
          "description": "Ip status",
          "fullType": "cloud.ip.IpStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.ip.IpStatusEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Ip type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.ip.FailoverIp": {
      "description": "FailoverIp",
      "id": "FailoverIp",
      "namespace": "cloud.ip",
      "properties": {
        "block": {
          "canBeNull": true,
          "description": "IP block",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "continentCode": {
          "canBeNull": true,
          "description": "Ip continent",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "geoloc": {
          "canBeNull": true,
          "description": "Ip location",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Ip id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": true,
          "description": "Ip",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "progress": {
          "canBeNull": false,
          "description": "Current operation progress in percent",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "routedTo": {
          "canBeNull": false,
          "description": "Instance where ip is routed to",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Ip status",
          "fullType": "cloud.ip.IpStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.ip.IpStatusEnum"
        },
        "subType": {
          "canBeNull": false,
          "description": "IP sub type",
          "fullType": "cloud.ip.IpSubTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.ip.IpSubTypeEnum"
        }
      }
    },
    "cloud.ip.IpStatusEnum": {
      "description": "IpStatusEnum",
      "enum": [
        "ok",
        "operationPending"
      ],
      "enumType": "string",
      "id": "IpStatusEnum",
      "namespace": "cloud.ip"
    },
    "cloud.ip.IpSubTypeEnum": {
      "description": "IpSubTypeEnum",
      "enum": [
        "cloud",
        "ovh"
      ],
      "enumType": "string",
      "id": "IpSubTypeEnum",
      "namespace": "cloud.ip"
    },
    "cloud.kube.AuditLogs": {
      "description": "Managed Kubernetes Audit Logs",
      "id": "AuditLogs",
      "namespace": "cloud.kube",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Temporary url expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "Temporary logs URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.kube.Cluster": {
      "description": "Managed Kubernetes cluster description",
      "id": "Cluster",
      "namespace": "cloud.kube",
      "properties": {
        "controlPlaneIsUpToDate": {
          "canBeNull": false,
          "description": "True if control-plane is up to date",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Cluster creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Cluster ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isUpToDate": {
          "canBeNull": false,
          "description": "True if all nodes and control-plane are up to date",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Cluster name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nextUpgradeVersions": {
          "canBeNull": true,
          "description": "Kubernetes versions available for upgrade",
          "fullType": "cloud.kube.UpgradeVersionEnum[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.kube.UpgradeVersionEnum[]"
        },
        "nodesUrl": {
          "canBeNull": false,
          "description": "Cluster nodes URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "privateNetworkId": {
          "canBeNull": true,
          "description": "OpenStack private network (or vrack) ID to bind to cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Cluster region",
          "fullType": "cloud.kube.RegionEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.kube.RegionEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Cluster status",
          "fullType": "cloud.kube.ClusterStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.kube.ClusterStatusEnum"
        },
        "updatePolicy": {
          "canBeNull": false,
          "description": "Cluster update policy",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Cluster last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "Management URL of your cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": "Kubernetes version of your cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.kube.ClusterStatusEnum": {
      "description": "Enum values for Status",
      "enum": [
        "DELETED",
        "DELETING",
        "ERROR",
        "INSTALLING",
        "MAINTENANCE",
        "READY",
        "REDEPLOYING",
        "REOPENING",
        "RESETTING",
        "RESIZING",
        "SUSPENDED",
        "SUSPENDING",
        "UPDATING",
        "USER_ERROR",
        "USER_NODE_NOT_FOUND_ERROR",
        "USER_NODE_SUSPENDED_SERVICE",
        "USER_QUOTA_ERROR"
      ],
      "enumType": "string",
      "id": "ClusterStatusEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.Flavor": {
      "description": "a flavor kind",
      "id": "Flavor",
      "namespace": "cloud.kube",
      "properties": {
        "category": {
          "canBeNull": false,
          "description": "Flavor family",
          "fullType": "cloud.kube.FlavorCategoryEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.kube.FlavorCategoryEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Flavor name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Flavor state",
          "fullType": "cloud.kube.FlavorStateEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.kube.FlavorStateEnum"
        }
      }
    },
    "cloud.kube.FlavorCategoryEnum": {
      "description": "Enum values for category",
      "enum": [
        "b",
        "c",
        "d",
        "g",
        "i",
        "r",
        "t"
      ],
      "enumType": "string",
      "id": "FlavorCategoryEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.FlavorStateEnum": {
      "description": "Enum values for State",
      "enum": [
        "available",
        "unavailable"
      ],
      "enumType": "string",
      "id": "FlavorStateEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.Kubeconfig": {
      "description": "Kubeconfig description",
      "id": "Kubeconfig",
      "namespace": "cloud.kube",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "kubeconfig file",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        }
      }
    },
    "cloud.kube.Node": {
      "description": "Node installed on your cluster",
      "id": "Node",
      "namespace": "cloud.kube",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deployedAt": {
          "canBeNull": true,
          "description": "Node deployment date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "flavor": {
          "canBeNull": false,
          "description": "Flavor name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Node ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "instanceId": {
          "canBeNull": true,
          "description": "Public Cloud instance id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isUpToDate": {
          "canBeNull": false,
          "description": "True if the node is up to date",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": true,
          "description": "Node name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nodePoolId": {
          "canBeNull": false,
          "description": "NodePool parent id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "projectId": {
          "canBeNull": false,
          "description": "Project id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status",
          "fullType": "cloud.kube.NodeStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.kube.NodeStatusEnum"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Node last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "version": {
          "canBeNull": false,
          "description": "Node version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.kube.NodePool": {
      "description": "NodePool created on your cluster to manage your nodes",
      "id": "NodePool",
      "namespace": "cloud.kube",
      "properties": {
        "antiAffinity": {
          "canBeNull": false,
          "description": "Enable anti affinity groups for nodes in the pool",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "autoscale": {
          "canBeNull": false,
          "description": "Enable auto-scaling for the pool",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "availableNodes": {
          "canBeNull": false,
          "description": "Number of nodes which are actually ready in the pool",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "currentNodes": {
          "canBeNull": false,
          "description": "Number of nodes present in the pool",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "desiredNodes": {
          "canBeNull": false,
          "description": "Number of nodes you desire in the pool",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "flavor": {
          "canBeNull": false,
          "description": "Flavor name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "NodePool ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maxNodes": {
          "canBeNull": false,
          "description": "Number of nodes you desire in the pool",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minNodes": {
          "canBeNull": false,
          "description": "Number of nodes you desire in the pool",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "monthlyBilled": {
          "canBeNull": false,
          "description": "Enable monthly billing on all nodes in the pool",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "NodePool resource name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "projectId": {
          "canBeNull": false,
          "description": "Project id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sizeStatus": {
          "canBeNull": false,
          "description": "Status describing the state between number of nodes wanted and available ones",
          "fullType": "cloud.kube.NodePoolSizeStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.kube.NodePoolSizeStatusEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Current status",
          "fullType": "cloud.kube.NodePoolStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.kube.NodePoolStatusEnum"
        },
        "upToDateNodes": {
          "canBeNull": false,
          "description": "Number of nodes with latest version installed in the pool",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "cloud.kube.NodePoolSizeStatusEnum": {
      "description": "Enum values for NodePool size Status",
      "enum": [
        "UNDER_CAPACITY",
        "CAPACITY_OK",
        "OVER_CAPACITY"
      ],
      "enumType": "string",
      "id": "NodePoolSizeStatusEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.NodePoolStatusEnum": {
      "description": "Enum values for NodePool Status",
      "enum": [
        "DELETED",
        "DELETING",
        "ERROR",
        "INSTALLING",
        "MAINTENANCE",
        "READY",
        "REDEPLOYING",
        "REOPENING",
        "RESETTING",
        "RESIZING",
        "SUSPENDED",
        "SUSPENDING",
        "UPDATING",
        "USER_ERROR",
        "USER_NODE_NOT_FOUND_ERROR",
        "USER_NODE_SUSPENDED_SERVICE",
        "USER_QUOTA_ERROR"
      ],
      "enumType": "string",
      "id": "NodePoolStatusEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.NodeStatusEnum": {
      "description": "Enum values for Status",
      "enum": [
        "DELETED",
        "DELETING",
        "ERROR",
        "INSTALLING",
        "MAINTENANCE",
        "READY",
        "REDEPLOYING",
        "REOPENING",
        "RESETTING",
        "RESIZING",
        "SUSPENDED",
        "SUSPENDING",
        "UPDATING",
        "USER_ERROR",
        "USER_NODE_NOT_FOUND_ERROR",
        "USER_NODE_SUSPENDED_SERVICE",
        "USER_QUOTA_ERROR"
      ],
      "enumType": "string",
      "id": "NodeStatusEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.OpenIdConnect": {
      "description": "Managed Kubernetes oidc integration",
      "id": "OpenIdConnect",
      "namespace": "cloud.kube",
      "properties": {
        "clientId": {
          "canBeNull": false,
          "description": "Client ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "issuerUrl": {
          "canBeNull": false,
          "description": "Issuer URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.kube.RegionEnum": {
      "description": "Enum values for available regions",
      "enum": [
        "GRA5",
        "GRA7",
        "BHS5",
        "SBG5",
        "WAW1",
        "SGP1",
        "SYD1",
        "US-EAST-VA-1",
        "US-WEST-OR-1"
      ],
      "enumType": "string",
      "id": "RegionEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.ResetWorkerNodesPolicyEnum": {
      "description": "Enum values for worker nodes reset policy",
      "enum": [
        "reinstall",
        "delete"
      ],
      "enumType": "string",
      "id": "ResetWorkerNodesPolicyEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.UpdatePolicyEnum": {
      "description": "Enum values for UpdatePolicy",
      "enum": [
        "ALWAYS_UPDATE",
        "MINIMAL_DOWNTIME",
        "NEVER_UPDATE"
      ],
      "enumType": "string",
      "id": "UpdatePolicyEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.UpdateStrategyEnum": {
      "description": "Enum values for UpdateStrategy",
      "enum": [
        "LATEST_PATCH",
        "NEXT_MINOR"
      ],
      "enumType": "string",
      "id": "UpdateStrategyEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.UpgradeVersionEnum": {
      "description": "List of available versions for upgrade",
      "enum": [
        "1.16",
        "1.17",
        "1.18",
        "1.19",
        "1.20"
      ],
      "enumType": "string",
      "id": "UpgradeVersionEnum",
      "namespace": "cloud.kube"
    },
    "cloud.kube.VersionEnum": {
      "description": "List of available versions for installation",
      "enum": [
        "1.17",
        "1.18",
        "1.19",
        "1.20"
      ],
      "enumType": "string",
      "id": "VersionEnum",
      "namespace": "cloud.kube"
    },
    "cloud.migration.Migration": {
      "description": "Migration",
      "id": "Migration",
      "namespace": "cloud.migration",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "The planned date of the migration",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "migrationId": {
          "canBeNull": false,
          "description": "Migration Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "resourceId": {
          "canBeNull": false,
          "description": "The id of the resource to migrate",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "resourceType": {
          "canBeNull": false,
          "description": "The type of the resource to migrate",
          "fullType": "cloud.migration.ResourceTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.migration.ResourceTypeEnum"
        }
      }
    },
    "cloud.migration.ResourceTypeEnum": {
      "description": "ResourceTypeEnum",
      "enum": [
        "instance"
      ],
      "enumType": "string",
      "id": "ResourceTypeEnum",
      "namespace": "cloud.migration"
    },
    "cloud.network.IPPool": {
      "description": "IPPool",
      "id": "IPPool",
      "namespace": "cloud.network",
      "properties": {
        "dhcp": {
          "canBeNull": false,
          "description": "Enable DHCP",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "end": {
          "canBeNull": false,
          "description": "Last IP for this region (eg: 192.168.1.24)",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "network": {
          "canBeNull": false,
          "description": "Global network with cidr (eg: 192.168.1.0/24)",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "region": {
          "canBeNull": false,
          "description": "Region where this subnet will be created",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "start": {
          "canBeNull": false,
          "description": "First IP for this region (eg: 192.168.1.12)",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        }
      }
    },
    "cloud.network.Network": {
      "description": "Network",
      "id": "Network",
      "namespace": "cloud.network",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Network id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Network name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "regions": {
          "canBeNull": false,
          "description": "Details about private network in region",
          "fullType": "cloud.network.NetworkRegion[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.network.NetworkRegion[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Network status",
          "fullType": "cloud.network.NetworkStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.network.NetworkStatusEnum"
        },
        "type": {
          "canBeNull": true,
          "description": "Network type",
          "fullType": "cloud.network.NetworkTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.network.NetworkTypeEnum"
        },
        "vlanId": {
          "canBeNull": false,
          "description": "Network VLAN id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.network.NetworkRegion": {
      "description": "NetworkRegion",
      "id": "NetworkRegion",
      "namespace": "cloud.network",
      "properties": {
        "openstackId": {
          "canBeNull": true,
          "description": "Network id on openstack region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Network region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Network region status",
          "fullType": "cloud.network.NetworkRegionStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.network.NetworkRegionStatusEnum"
        }
      }
    },
    "cloud.network.NetworkRegionStatusEnum": {
      "description": "NetworkRegionStatusEnum",
      "enum": [
        "ACTIVE",
        "BUILDING"
      ],
      "enumType": "string",
      "id": "NetworkRegionStatusEnum",
      "namespace": "cloud.network"
    },
    "cloud.network.NetworkStatusEnum": {
      "description": "NetworkStatusEnum",
      "enum": [
        "BUILDING",
        "ACTIVE",
        "DELETING"
      ],
      "enumType": "string",
      "id": "NetworkStatusEnum",
      "namespace": "cloud.network"
    },
    "cloud.network.NetworkTypeEnum": {
      "description": "NetworkTypeEnum",
      "enum": [
        "public",
        "private"
      ],
      "enumType": "string",
      "id": "NetworkTypeEnum",
      "namespace": "cloud.network"
    },
    "cloud.network.Subnet": {
      "description": "Subnet",
      "id": "Subnet",
      "namespace": "cloud.network",
      "properties": {
        "cidr": {
          "canBeNull": false,
          "description": "Subnet CIDR",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "gatewayIp": {
          "canBeNull": true,
          "description": "Gateway IP in the subnet",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "id": {
          "canBeNull": false,
          "description": "Subnet id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ipPools": {
          "canBeNull": false,
          "description": "List of ip pools allocated in subnet",
          "fullType": "cloud.network.IPPool[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.network.IPPool[]"
        }
      }
    },
    "cloud.openstackClient.Profile": {
      "description": "Profile",
      "id": "Profile",
      "namespace": "cloud.openstackClient",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Profile name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.openstackClient.Session": {
      "description": "Session",
      "id": "Session",
      "namespace": "cloud.openstackClient",
      "properties": {
        "expires": {
          "canBeNull": false,
          "description": "Expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Session Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "profile": {
          "canBeNull": false,
          "description": "Profile of the session",
          "fullType": "cloud.openstackClient.Profile",
          "readOnly": true,
          "required": false,
          "type": "cloud.openstackClient.Profile"
        },
        "websocket": {
          "canBeNull": false,
          "description": "Websocket url to use the terminal",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.order.Order": {
      "description": "Order",
      "id": "Order",
      "namespace": "cloud.order",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Order creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "orderId": {
          "canBeNull": false,
          "description": "Order id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Order plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": true,
          "description": "Service created",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "fullType": "cloud.order.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.order.StatusEnum"
        }
      }
    },
    "cloud.order.StatusEnum": {
      "description": "StatusEnum",
      "enum": [
        "unpaid",
        "delivering",
        "delivered",
        "unknown"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloud.order"
    },
    "cloud.order.rule.Availability": {
      "description": "Public Cloud products availability",
      "id": "Availability",
      "namespace": "cloud.order.rule",
      "properties": {
        "plans": {
          "canBeNull": false,
          "description": "Plan availability",
          "fullType": "cloud.order.rule.AvailabilityPlan[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.order.rule.AvailabilityPlan[]"
        },
        "products": {
          "canBeNull": false,
          "description": "Product availability",
          "fullType": "cloud.order.rule.AvailabilityProduct[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.order.rule.AvailabilityProduct[]"
        }
      }
    },
    "cloud.order.rule.AvailabilityPlan": {
      "description": "Public Cloud plan availability",
      "id": "AvailabilityPlan",
      "namespace": "cloud.order.rule",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "regions": {
          "canBeNull": false,
          "description": "Plan is available on those regions",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "cloud.order.rule.AvailabilityProduct": {
      "description": "Public Cloud product availability",
      "id": "AvailabilityProduct",
      "namespace": "cloud.order.rule",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Product name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "regions": {
          "canBeNull": false,
          "description": "Product is available on those regions",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "cloud.project.ApplicationLoadBalancer": {
      "description": "A load balancer to handle application workload",
      "id": "ApplicationLoadBalancer",
      "namespace": "cloud.project",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address to reach the load balancer",
          "fullType": "cloud.project.loadbalancer.Address",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.Address"
        },
        "configuration": {
          "canBeNull": false,
          "description": "Information about version of the configuration",
          "fullType": "cloud.project.loadbalancer.ConfigurationVersion",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.ConfigurationVersion"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date and time of the load balancer",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of the load balancer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "egressAddress": {
          "canBeNull": false,
          "description": "IPs used by the load balancer to contact backend's servers",
          "fullType": "cloud.project.loadbalancer.Addresses",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.Addresses"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the load balancer",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the load balancer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "openstackRegion": {
          "canBeNull": false,
          "description": "Openstack region where the load balancer is hosted",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Region where the load balancer is hosted",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of the load balancer",
          "fullType": "cloud.project.loadbalancer.SizeEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.SizeEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of a load balancer",
          "fullType": "cloud.project.loadbalancer.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.StatusEnum"
        }
      }
    },
    "cloud.project.ApplicationLoadBalancerCreation": {
      "description": "A load balancer to handle application workload",
      "id": "ApplicationLoadBalancerCreation",
      "namespace": "cloud.project",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Description of the load balancer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the load balancer",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the load balancer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "networking": {
          "canBeNull": true,
          "description": "Networking definition",
          "fullType": "cloud.project.loadbalancer.networking.NetworkingCreation",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.networking.NetworkingCreation"
        },
        "openstackRegion": {
          "canBeNull": false,
          "description": "Openstack Region where the load balancer is hosted",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Region where the load balancer is hosted",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "size": {
          "canBeNull": true,
          "description": "Size of the load balancer",
          "fullType": "cloud.project.loadbalancer.SizeEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.SizeEnum"
        }
      }
    },
    "cloud.project.Certificate": {
      "description": "A Certificate to use in your NFVs",
      "id": "Certificate",
      "namespace": "cloud.project",
      "properties": {
        "expireAt": {
          "canBeNull": false,
          "description": "Date after when the certificate is not valid",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "fingerprint": {
          "canBeNull": false,
          "description": "Fingerprint of the cert (prefixed by hashing algorithm used)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique ID of the certificate",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "issuer": {
          "canBeNull": false,
          "description": "Issue of the certificate (extract from certificate)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "kind": {
          "canBeNull": false,
          "description": "Kind of certificate",
          "fullType": "cloud.project.CertificateKindEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.CertificateKindEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the certificate",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serialNumber": {
          "canBeNull": false,
          "description": "Serial number of the certificate (extract from certificate)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serverAlternativeNames": {
          "canBeNull": false,
          "description": "List of SANs (extract from certificate)",
          "fullType": "cloud.project.certificate.ServerAlternativeName[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.certificate.ServerAlternativeName[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Certificate status, to quickly know it can safely be used",
          "fullType": "cloud.project.CertificateStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.CertificateStatusEnum"
        },
        "subject": {
          "canBeNull": false,
          "description": "Subject of the certificate (extract from certificate)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "validAt": {
          "canBeNull": false,
          "description": "Date after when the certificate is valid",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "version": {
          "canBeNull": false,
          "description": "Version of certificate (incremented every time you push a new certificate with the same name)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.project.CertificateAdd": {
      "description": "Add a new certificate",
      "id": "CertificateAdd",
      "namespace": "cloud.project",
      "properties": {
        "import": {
          "canBeNull": true,
          "description": "Import an existing certificate",
          "fullType": "cloud.project.certificate.Import",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.certificate.Import"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the certificate",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.project.CertificateKindEnum": {
      "description": "Certificate kind",
      "enum": [
        "IMPORTED"
      ],
      "enumType": "string",
      "id": "CertificateKindEnum",
      "namespace": "cloud.project"
    },
    "cloud.project.CertificateStatusEnum": {
      "description": "Certificate status",
      "enum": [
        "OK",
        "EXPIRED",
        "NOT_YET_VALID",
        "REVOKED"
      ],
      "enumType": "string",
      "id": "CertificateStatusEnum",
      "namespace": "cloud.project"
    },
    "cloud.project.LoadBalancer": {
      "description": "A load balancer to handle workload",
      "id": "LoadBalancer",
      "namespace": "cloud.project",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address to reach the load balancer",
          "fullType": "cloud.project.loadbalancer.Address",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.Address"
        },
        "configuration": {
          "canBeNull": false,
          "description": "Information about version of the configuration",
          "fullType": "cloud.project.loadbalancer.ConfigurationVersion",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.ConfigurationVersion"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date and time of the load balancer",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of the load balancer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "egressAddress": {
          "canBeNull": false,
          "description": "IPs used by the load balancer to contact backend's servers",
          "fullType": "cloud.project.loadbalancer.Addresses",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.Addresses"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the load balancer",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the load balancer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "networking": {
          "canBeNull": false,
          "description": "Networking definition",
          "fullType": "cloud.project.loadbalancer.networking.Networking",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.networking.Networking"
        },
        "openstackRegion": {
          "canBeNull": false,
          "description": "Openstack region where the load balancer is hosted",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Region where the load balancer is hosted",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of the load balancer",
          "fullType": "cloud.project.loadbalancer.SizeEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.SizeEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of a load balancer",
          "fullType": "cloud.project.loadbalancer.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.StatusEnum"
        }
      }
    },
    "cloud.project.LoadBalancerCreation": {
      "description": "A load balancer to handle workload",
      "id": "LoadBalancerCreation",
      "namespace": "cloud.project",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Description of the load balancer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the load balancer",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the load balancer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "networking": {
          "canBeNull": true,
          "description": "Networking definition",
          "fullType": "cloud.project.loadbalancer.networking.NetworkingCreation",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.networking.NetworkingCreation"
        },
        "openstackRegion": {
          "canBeNull": false,
          "description": "Openstack Region where the load balancer is hosted",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Region where the load balancer is hosted",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "size": {
          "canBeNull": true,
          "description": "Size of the load balancer",
          "fullType": "cloud.project.loadbalancer.SizeEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.SizeEnum"
        }
      }
    },
    "cloud.project.ProjectStatus": {
      "description": "Possible values for project status",
      "enum": [
        "creating",
        "deleted",
        "deleting",
        "ok",
        "suspended"
      ],
      "enumType": "string",
      "id": "ProjectStatus",
      "namespace": "cloud.project"
    },
    "cloud.project.ProjectStatusEnum": {
      "description": "Possible values for project status",
      "enum": [
        "creating",
        "deleted",
        "deleting",
        "ok",
        "suspended"
      ],
      "enumType": "string",
      "id": "ProjectStatusEnum",
      "namespace": "cloud.project"
    },
    "cloud.project.certificate.Import": {
      "description": "Import external certificate",
      "id": "Import",
      "namespace": "cloud.project.certificate",
      "properties": {
        "cert": {
          "canBeNull": false,
          "description": "PEM encoded certificate",
          "fullType": "text",
          "readOnly": false,
          "required": true,
          "type": "text"
        },
        "chain": {
          "canBeNull": true,
          "description": "Optional PEM encoded certificate chain",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "key": {
          "canBeNull": false,
          "description": "PEM encoded certificate private key",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
    },
    "cloud.project.certificate.ServerAlternativeName": {
      "description": "Certificate SAN",
      "id": "ServerAlternativeName",
      "namespace": "cloud.project.certificate",
      "properties": {
        "kind": {
          "canBeNull": false,
          "description": "SAN kind",
          "fullType": "cloud.project.certificate.ServerAlternativeNameKindEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.certificate.ServerAlternativeNameKindEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the given kind",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.project.certificate.ServerAlternativeNameKindEnum": {
      "description": "SAN kind",
      "enum": [
        "EMAIL",
        "DNS",
        "URI",
        "IP"
      ],
      "enumType": "string",
      "id": "ServerAlternativeNameKindEnum",
      "namespace": "cloud.project.certificate"
    },
    "cloud.project.loadbalancer.ActionDispatch": {
      "description": "HTTP load balancer dispatch action",
      "id": "ActionDispatch",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "The backend name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Target name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.project.loadbalancer.ActionRedirect": {
      "description": "HTTP load balancer redirect action",
      "id": "ActionRedirect",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "location": {
          "canBeNull": false,
          "description": "Location url",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "The backend name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "statusCode": {
          "canBeNull": false,
          "description": "StatusCode for redirect action",
          "fullType": "cloud.project.loadbalancer.action.RedirectStatusCodeEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.action.RedirectStatusCodeEnum"
        }
      }
    },
    "cloud.project.loadbalancer.ActionReject": {
      "description": "HTTP load balancer reject action",
      "id": "ActionReject",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "The backend name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "statusCode": {
          "canBeNull": false,
          "description": "StatusCode for reject action",
          "fullType": "cloud.project.loadbalancer.action.RejectStatusCodeEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.action.RejectStatusCodeEnum"
        }
      }
    },
    "cloud.project.loadbalancer.ActionRewrite": {
      "description": "HTTP load balancer rewrite action",
      "id": "ActionRewrite",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "location": {
          "canBeNull": false,
          "description": "Location url",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "The backend name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.project.loadbalancer.Actions": {
      "description": "HTTP load balancer actions",
      "id": "Actions",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "dispatch": {
          "canBeNull": true,
          "description": "List of dispatch actions",
          "fullType": "cloud.project.loadbalancer.ActionDispatch[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.ActionDispatch[]"
        },
        "redirect": {
          "canBeNull": true,
          "description": "List of redirect actions",
          "fullType": "cloud.project.loadbalancer.ActionRedirect[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.ActionRedirect[]"
        },
        "reject": {
          "canBeNull": true,
          "description": "List of reject actions",
          "fullType": "cloud.project.loadbalancer.ActionReject[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.ActionReject[]"
        },
        "rewrite": {
          "canBeNull": true,
          "description": "List of rewrite actions",
          "fullType": "cloud.project.loadbalancer.ActionRewrite[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.ActionRewrite[]"
        }
      }
    },
    "cloud.project.loadbalancer.Address": {
      "description": "Address to reach the load balancer",
      "id": "Address",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "ipv4": {
          "canBeNull": false,
          "description": "IP version 4",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "IP version 6",
          "fullType": "ipv6",
          "readOnly": true,
          "required": false,
          "type": "ipv6"
        }
      }
    },
    "cloud.project.loadbalancer.Addresses": {
      "description": "IP list split in version 4 and 6",
      "id": "Addresses",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "ipv4": {
          "canBeNull": false,
          "description": "IP version 4 list",
          "fullType": "ipv4Block[]",
          "readOnly": true,
          "required": false,
          "type": "ipv4Block[]"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "IP version 6 list",
          "fullType": "ipv6Block[]",
          "readOnly": true,
          "required": false,
          "type": "ipv6Block[]"
        }
      }
    },
    "cloud.project.loadbalancer.ApplicationConfiguration": {
      "description": "An application load balancer configuration",
      "id": "ApplicationConfiguration",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "actions": {
          "canBeNull": true,
          "description": "All actions",
          "fullType": "cloud.project.loadbalancer.Actions",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.Actions"
        },
        "certificates": {
          "canBeNull": false,
          "description": "List of certificate ID",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "conditions": {
          "canBeNull": true,
          "description": "List of conditions",
          "fullType": "cloud.project.loadbalancer.Condition[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.Condition[]"
        },
        "entryPoints": {
          "canBeNull": false,
          "description": "List of entryPoints",
          "fullType": "cloud.project.loadbalancer.EntryPoint[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.EntryPoint[]"
        },
        "networking": {
          "canBeNull": false,
          "description": "networking configuration",
          "fullType": "cloud.project.loadbalancer.configuration.networking.Networking",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.configuration.networking.Networking"
        },
        "targets": {
          "canBeNull": true,
          "description": "List of targets",
          "fullType": "cloud.project.loadbalancer.Target[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.Target[]"
        },
        "version": {
          "canBeNull": false,
          "description": "Identifier and version of the configuration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.project.loadbalancer.ApplicationConfigurationCreation": {
      "description": "An application load balancer configuration",
      "id": "ApplicationConfigurationCreation",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "actions": {
          "canBeNull": true,
          "description": "All actions",
          "fullType": "cloud.project.loadbalancer.Actions",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.Actions"
        },
        "certificates": {
          "canBeNull": false,
          "description": "List of certificate ID",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "conditions": {
          "canBeNull": true,
          "description": "List of conditions",
          "fullType": "cloud.project.loadbalancer.Condition[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.Condition[]"
        },
        "entryPoints": {
          "canBeNull": false,
          "description": "List of entryPoints",
          "fullType": "cloud.project.loadbalancer.EntryPoint[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.EntryPoint[]"
        },
        "networking": {
          "canBeNull": true,
          "description": "networking configuration",
          "fullType": "cloud.project.loadbalancer.configuration.networking.Networking",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.configuration.networking.Networking"
        },
        "targets": {
          "canBeNull": true,
          "description": "List of targets",
          "fullType": "cloud.project.loadbalancer.Target[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.Target[]"
        },
        "version": {
          "canBeNull": false,
          "description": "Identifier and version of the configuration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.project.loadbalancer.Backend": {
      "description": "A load balancer backend",
      "id": "Backend",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "balancer": {
          "canBeNull": true,
          "description": "Use a specific balancer algorithm",
          "fullType": "cloud.project.loadbalancer.backend.BalancerAlgorithmEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.backend.BalancerAlgorithmEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "The backend name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "proxyProtocol": {
          "canBeNull": true,
          "description": "Use proxy protocol on backend",
          "fullType": "cloud.project.loadbalancer.backend.ProxyProtocolEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.backend.ProxyProtocolEnum"
        },
        "servers": {
          "canBeNull": false,
          "description": "List of server in backend",
          "fullType": "cloud.project.loadbalancer.Server[]",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.Server[]"
        },
        "sticky": {
          "canBeNull": true,
          "description": "Enable sticky session, only usable with http-mode frontends",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "cloud.project.loadbalancer.BackendSelector": {
      "description": "Select a load balancer backend",
      "id": "BackendSelector",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "The backend name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "cloud.project.loadbalancer.Condition": {
      "description": "A condition",
      "id": "Condition",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "key": {
          "canBeNull": true,
          "description": "The condition name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "match": {
          "canBeNull": false,
          "description": "Criterion matching operation",
          "fullType": "cloud.project.loadbalancer.condition.MatchEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.condition.MatchEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "The condition name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "negate": {
          "canBeNull": true,
          "description": "Negate the condition",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "Criterion used to chose the appropriate action",
          "fullType": "cloud.project.loadbalancer.condition.TypeEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.condition.TypeEnum"
        },
        "values": {
          "canBeNull": false,
          "description": "The list of values to match",
          "fullType": "string[]",
          "readOnly": false,
          "required": true,
          "type": "string[]"
        }
      }
    },
    "cloud.project.loadbalancer.Configuration": {
      "description": "A load balancer configuration",
      "id": "Configuration",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "backends": {
          "canBeNull": false,
          "description": "List of backends",
          "fullType": "cloud.project.loadbalancer.Backend[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.Backend[]"
        },
        "certificates": {
          "canBeNull": false,
          "description": "List of certificate ID",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "frontends": {
          "canBeNull": false,
          "description": "List of frontends",
          "fullType": "cloud.project.loadbalancer.Frontend[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.Frontend[]"
        },
        "networking": {
          "canBeNull": false,
          "description": "networking configuration",
          "fullType": "cloud.project.loadbalancer.configuration.networking.Networking",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.configuration.networking.Networking"
        },
        "version": {
          "canBeNull": false,
          "description": "Identifier and version of the configuration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.project.loadbalancer.ConfigurationCreation": {
      "description": "A load balancer configuration",
      "id": "ConfigurationCreation",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "backends": {
          "canBeNull": false,
          "description": "List of backends",
          "fullType": "cloud.project.loadbalancer.Backend[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.Backend[]"
        },
        "certificates": {
          "canBeNull": false,
          "description": "List of certificate ID",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "frontends": {
          "canBeNull": false,
          "description": "List of frontends",
          "fullType": "cloud.project.loadbalancer.Frontend[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.Frontend[]"
        },
        "networking": {
          "canBeNull": true,
          "description": "networking configuration",
          "fullType": "cloud.project.loadbalancer.configuration.networking.Networking",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.configuration.networking.Networking"
        },
        "version": {
          "canBeNull": false,
          "description": "Identifier and version of the configuration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.project.loadbalancer.ConfigurationVersion": {
      "description": "Information about version of the configuration",
      "id": "ConfigurationVersion",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "applied": {
          "canBeNull": false,
          "description": "Applied version of the configuration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "latest": {
          "canBeNull": false,
          "description": "Latest version of the configuration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.project.loadbalancer.EntryPoint": {
      "description": "A load balancer entryPoint",
      "id": "EntryPoint",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "defaultTarget": {
          "canBeNull": true,
          "description": "The default target name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "disableH2": {
          "canBeNull": true,
          "description": "Disable HTTP2",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "The frontend name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "portRanges": {
          "canBeNull": true,
          "description": "Port ranges to listen",
          "fullType": "cloud.project.loadbalancer.PortRange[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.PortRange[]"
        },
        "ports": {
          "canBeNull": true,
          "description": "Ports to listen",
          "fullType": "long[]",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        },
        "rules": {
          "canBeNull": false,
          "description": "List of rules",
          "fullType": "cloud.project.loadbalancer.Rule[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.Rule[]"
        },
        "tls": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "cloud.project.loadbalancer.Frontend": {
      "description": "A load balancer frontend",
      "id": "Frontend",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "backends": {
          "canBeNull": false,
          "description": "Selector for backend",
          "fullType": "cloud.project.loadbalancer.BackendSelector[]",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.BackendSelector[]"
        },
        "mode": {
          "canBeNull": true,
          "description": "Load balancing mode",
          "fullType": "cloud.project.loadbalancer.frontend.ModeEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.frontend.ModeEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "The frontend name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "port": {
          "canBeNull": true,
          "description": "Port to listen (deprecated: see ports)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "portRanges": {
          "canBeNull": true,
          "description": "Port ranges to listen",
          "fullType": "cloud.project.loadbalancer.PortRange[]",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.PortRange[]"
        },
        "ports": {
          "canBeNull": true,
          "description": "Ports to listen",
          "fullType": "long[]",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        },
        "tls": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "whitelist": {
          "canBeNull": false,
          "description": "IP range to whitelist",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        }
      }
    },
    "cloud.project.loadbalancer.LoadBalancerSizeCapability": {
      "description": "Network load balancer size capability",
      "id": "LoadBalancerSizeCapability",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "bandwidthMbPerSecond": {
          "canBeNull": false,
          "description": "Bandwidth allowed in Mb/s",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumConnection": {
          "canBeNull": false,
          "description": "Maximum connection allowed on the load balancer",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "newConnectionPerSecond": {
          "canBeNull": false,
          "description": "Number of new connection allowed per second",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of the load balancer",
          "fullType": "cloud.project.loadbalancer.SizeEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.SizeEnum"
        }
      }
    },
    "cloud.project.loadbalancer.PortRange": {
      "description": "A port range",
      "id": "PortRange",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "end": {
          "canBeNull": false,
          "description": "Port range end",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "start": {
          "canBeNull": false,
          "description": "Port range start",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.project.loadbalancer.Region": {
      "description": "Region information",
      "id": "Region",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "region": {
          "canBeNull": false,
          "description": "Region name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.project.loadbalancer.Rule": {
      "description": "A entrypoint rule",
      "id": "Rule",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "The action name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "conditions": {
          "canBeNull": true,
          "description": "The list of condition to match",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "cloud.project.loadbalancer.Server": {
      "description": "A load balancer backend server",
      "id": "Server",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "ip": {
          "canBeNull": false,
          "description": "IP address of a server",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        },
        "name": {
          "canBeNull": false,
          "description": "Server name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "noCheck": {
          "canBeNull": true,
          "description": "Disable health check",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "port": {
          "canBeNull": false,
          "description": "Port that the server listen",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "weight": {
          "canBeNull": true,
          "description": "Weight of the server in the backend",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.project.loadbalancer.SizeEnum": {
      "description": "Size of the load balancer",
      "enum": [
        "S",
        "M",
        "L"
      ],
      "enumType": "string",
      "id": "SizeEnum",
      "namespace": "cloud.project.loadbalancer"
    },
    "cloud.project.loadbalancer.Stats": {
      "description": "Loadbalancer stats",
      "id": "Stats",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "concurrentFlows": {
          "canBeNull": false,
          "description": "Concurrent connections",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "httpRequestsPerSecond": {
          "canBeNull": false,
          "description": "HTTP requests made",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "status": {
          "canBeNull": false,
          "description": "Main loadbalancer status",
          "fullType": "cloud.project.loadbalancer.stats.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.stats.StatusEnum"
        },
        "targets": {
          "canBeNull": false,
          "description": "Targets state",
          "fullType": "cloud.project.loadbalancer.stats.Target[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.stats.Target[]"
        },
        "tcpConnectionsPerSecond": {
          "canBeNull": false,
          "description": "New connections opened per second",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "throughput": {
          "canBeNull": false,
          "description": "Throughput consumed on the entrypoints",
          "fullType": "cloud.project.loadbalancer.stats.Throughput",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.stats.Throughput"
        }
      }
    },
    "cloud.project.loadbalancer.StatusEnum": {
      "description": "Status of a load balancer",
      "enum": [
        "CREATED",
        "APPLYING",
        "RUNNING",
        "DELETING",
        "ERROR",
        "FROZEN"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloud.project.loadbalancer"
    },
    "cloud.project.loadbalancer.Target": {
      "description": "A load balancer target",
      "id": "Target",
      "namespace": "cloud.project.loadbalancer",
      "properties": {
        "balancer": {
          "canBeNull": true,
          "description": "Use a specific balancer algorithm",
          "fullType": "cloud.project.loadbalancer.target.BalancerAlgorithmEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.target.BalancerAlgorithmEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "The backend name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "proxyProtocol": {
          "canBeNull": true,
          "description": "Use proxy protocol on target",
          "fullType": "cloud.project.loadbalancer.target.ProxyProtocolEnum",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.target.ProxyProtocolEnum"
        },
        "servers": {
          "canBeNull": false,
          "description": "List of server in target",
          "fullType": "cloud.project.loadbalancer.Server[]",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.Server[]"
        },
        "sticky": {
          "canBeNull": true,
          "description": "Enable sticky session, only usable with http-mode frontends",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "cloud.project.loadbalancer.action.RedirectStatusCodeEnum": {
      "description": "Available status code for Redirect action",
      "enum": [
        "301",
        "302",
        "303",
        "307",
        "308"
      ],
      "enumType": "string",
      "id": "RedirectStatusCodeEnum",
      "namespace": "cloud.project.loadbalancer.action"
    },
    "cloud.project.loadbalancer.action.RejectStatusCodeEnum": {
      "description": "Available status code for Reject action",
      "enum": [
        "200",
        "400",
        "403",
        "405",
        "408",
        "429",
        "500",
        "502",
        "503",
        "504"
      ],
      "enumType": "string",
      "id": "RejectStatusCodeEnum",
      "namespace": "cloud.project.loadbalancer.action"
    },
    "cloud.project.loadbalancer.backend.BalancerAlgorithmEnum": {
      "description": "Available load balancer backend balancer algorithm",
      "enum": [
        "roundrobin",
        "static-rr",
        "leastconn",
        "first",
        "source"
      ],
      "enumType": "string",
      "id": "BalancerAlgorithmEnum",
      "namespace": "cloud.project.loadbalancer.backend"
    },
    "cloud.project.loadbalancer.backend.ProxyProtocolEnum": {
      "description": "Available load balancer backend proxy-protocol",
      "enum": [
        "v1",
        "v2",
        "v2-ssl",
        "v2-cn"
      ],
      "enumType": "string",
      "id": "ProxyProtocolEnum",
      "namespace": "cloud.project.loadbalancer.backend"
    },
    "cloud.project.loadbalancer.condition.MatchEnum": {
      "description": "Matching operator",
      "enum": [
        "is",
        "start-with",
        "end-with",
        "regex",
        "exists"
      ],
      "enumType": "string",
      "id": "MatchEnum",
      "namespace": "cloud.project.loadbalancer.condition"
    },
    "cloud.project.loadbalancer.condition.TypeEnum": {
      "description": "Matching field",
      "enum": [
        "method",
        "cookie",
        "path",
        "host",
        "header",
        "source",
        "query-param"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "cloud.project.loadbalancer.condition"
    },
    "cloud.project.loadbalancer.configuration.networking.Egress": {
      "description": "Networking configuration egress definition",
      "id": "Egress",
      "namespace": "cloud.project.loadbalancer.configuration.networking",
      "properties": {
        "id": {
          "canBeNull": true,
          "description": "vrack networking id",
          "fullType": "uuid",
          "readOnly": false,
          "required": false,
          "type": "uuid"
        },
        "kind": {
          "canBeNull": false,
          "description": "networking egress kind definition",
          "fullType": "cloud.project.loadbalancer.networking.egress.KindEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.networking.egress.KindEnum"
        }
      }
    },
    "cloud.project.loadbalancer.configuration.networking.Ingress": {
      "description": "Networking configuration ingress definition",
      "id": "Ingress",
      "namespace": "cloud.project.loadbalancer.configuration.networking",
      "properties": {
        "kind": {
          "canBeNull": false,
          "description": "networking configuration ingress kind definition",
          "fullType": "cloud.project.loadbalancer.networking.ingress.KindEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.networking.ingress.KindEnum"
        }
      }
    },
    "cloud.project.loadbalancer.configuration.networking.Networking": {
      "description": "Networking configuration object",
      "id": "Networking",
      "namespace": "cloud.project.loadbalancer.configuration.networking",
      "properties": {
        "egress": {
          "canBeNull": true,
          "description": "Networking configuration definition for egress",
          "fullType": "cloud.project.loadbalancer.configuration.networking.Egress",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.configuration.networking.Egress"
        },
        "ingress": {
          "canBeNull": true,
          "description": "Networking configuration definition for ingress",
          "fullType": "cloud.project.loadbalancer.configuration.networking.Ingress",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.configuration.networking.Ingress"
        }
      }
    },
    "cloud.project.loadbalancer.frontend.ModeEnum": {
      "description": "Available load balancer frontend mode",
      "enum": [
        "TCP"
      ],
      "enumType": "string",
      "id": "ModeEnum",
      "namespace": "cloud.project.loadbalancer.frontend"
    },
    "cloud.project.loadbalancer.networking.Egress": {
      "description": "Networking Egress definition",
      "id": "Egress",
      "namespace": "cloud.project.loadbalancer.networking",
      "properties": {
        "id": {
          "canBeNull": true,
          "description": "vrack networking id",
          "fullType": "uuid",
          "readOnly": false,
          "required": false,
          "type": "uuid"
        },
        "kind": {
          "canBeNull": false,
          "description": "networking egress kind definition",
          "fullType": "cloud.project.loadbalancer.networking.egress.KindEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.networking.egress.KindEnum"
        }
      }
    },
    "cloud.project.loadbalancer.networking.EgressCreation": {
      "description": "Networking Egress definition",
      "id": "EgressCreation",
      "namespace": "cloud.project.loadbalancer.networking",
      "properties": {
        "kind": {
          "canBeNull": false,
          "description": "networking egress kind definition",
          "fullType": "cloud.project.loadbalancer.networking.egress.KindEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.networking.egress.KindEnum"
        }
      }
    },
    "cloud.project.loadbalancer.networking.Ingress": {
      "description": "Networking Ingress definition",
      "id": "Ingress",
      "namespace": "cloud.project.loadbalancer.networking",
      "properties": {
        "kind": {
          "canBeNull": false,
          "description": "networking ingress kind definition",
          "fullType": "cloud.project.loadbalancer.networking.ingress.KindEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.networking.ingress.KindEnum"
        }
      }
    },
    "cloud.project.loadbalancer.networking.IngressCreation": {
      "description": "Networking Ingress definition",
      "id": "IngressCreation",
      "namespace": "cloud.project.loadbalancer.networking",
      "properties": {
        "kind": {
          "canBeNull": false,
          "description": "networking ingress kind definition",
          "fullType": "cloud.project.loadbalancer.networking.ingress.KindEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.project.loadbalancer.networking.ingress.KindEnum"
        }
      }
    },
    "cloud.project.loadbalancer.networking.Networking": {
      "description": "Networking object",
      "id": "Networking",
      "namespace": "cloud.project.loadbalancer.networking",
      "properties": {
        "egress": {
          "canBeNull": false,
          "description": "Networking definition for egress",
          "fullType": "cloud.project.loadbalancer.networking.Egress",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.networking.Egress"
        },
        "ingress": {
          "canBeNull": false,
          "description": "Networking definition for ingress",
          "fullType": "cloud.project.loadbalancer.networking.Ingress",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.networking.Ingress"
        }
      }
    },
    "cloud.project.loadbalancer.networking.NetworkingCreation": {
      "description": "Networking creation object",
      "id": "NetworkingCreation",
      "namespace": "cloud.project.loadbalancer.networking",
      "properties": {
        "egress": {
          "canBeNull": true,
          "description": "Networking definition for egress",
          "fullType": "cloud.project.loadbalancer.networking.EgressCreation",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.networking.EgressCreation"
        },
        "ingress": {
          "canBeNull": true,
          "description": "Networking definition for ingress",
          "fullType": "cloud.project.loadbalancer.networking.IngressCreation",
          "readOnly": false,
          "required": false,
          "type": "cloud.project.loadbalancer.networking.IngressCreation"
        }
      }
    },
    "cloud.project.loadbalancer.networking.egress.KindEnum": {
      "description": "Networking kind",
      "enum": [
        "public",
        "vrack"
      ],
      "enumType": "string",
      "id": "KindEnum",
      "namespace": "cloud.project.loadbalancer.networking.egress"
    },
    "cloud.project.loadbalancer.networking.ingress.KindEnum": {
      "description": "Networking kind",
      "enum": [
        "public"
      ],
      "enumType": "string",
      "id": "KindEnum",
      "namespace": "cloud.project.loadbalancer.networking.ingress"
    },
    "cloud.project.loadbalancer.stats.StatusEnum": {
      "description": "Status of availability of loadbalancer",
      "enum": [
        "HEALTHY",
        "NOT_AVAILABLE"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloud.project.loadbalancer.stats"
    },
    "cloud.project.loadbalancer.stats.Target": {
      "description": "Loadbalancer target stats",
      "id": "Target",
      "namespace": "cloud.project.loadbalancer.stats",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Target name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "servers": {
          "canBeNull": false,
          "description": "Concurrent connections",
          "fullType": "cloud.project.loadbalancer.stats.target.Server[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.stats.target.Server[]"
        }
      }
    },
    "cloud.project.loadbalancer.stats.Throughput": {
      "description": "Loadbalancer bandwidth stats",
      "id": "Throughput",
      "namespace": "cloud.project.loadbalancer.stats",
      "properties": {
        "in": {
          "canBeNull": false,
          "description": "Consumed inbound bandwidth (bytes/s)",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "out": {
          "canBeNull": false,
          "description": "Consumed outbound bandwidth (bytes/s)",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "cloud.project.loadbalancer.stats.target.Server": {
      "description": "Loadbalancer target server stats",
      "id": "Server",
      "namespace": "cloud.project.loadbalancer.stats.target",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Target name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Server status",
          "fullType": "cloud.project.loadbalancer.stats.target.server.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.project.loadbalancer.stats.target.server.StatusEnum"
        }
      }
    },
    "cloud.project.loadbalancer.stats.target.server.StatusEnum": {
      "description": "Status of target's server",
      "enum": [
        "UNKNOWN",
        "INIT",
        "HEALTHY",
        "L4_TIMEOUT_ERROR",
        "L4_CONNECTION_ERROR",
        "L7_TIMEOUT",
        "L7_PROTOCOL_ERROR",
        "L7_RESPONSE_ERROR",
        "ERROR"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "cloud.project.loadbalancer.stats.target.server"
    },
    "cloud.project.loadbalancer.target.BalancerAlgorithmEnum": {
      "description": "Available load balancer target balancer algorithm",
      "enum": [
        "roundrobin",
        "static-rr",
        "leastconn",
        "first",
        "source"
      ],
      "enumType": "string",
      "id": "BalancerAlgorithmEnum",
      "namespace": "cloud.project.loadbalancer.target"
    },
    "cloud.project.loadbalancer.target.ProxyProtocolEnum": {
      "description": "Available load balancer target proxy-protocol",
      "enum": [
        "v1",
        "v2",
        "v2-ssl",
        "v2-cn"
      ],
      "enumType": "string",
      "id": "ProxyProtocolEnum",
      "namespace": "cloud.project.loadbalancer.target"
    },
    "cloud.quota.AllowedQuota": {
      "description": "Quotas",
      "id": "AllowedQuota",
      "namespace": "cloud.quota",
      "properties": {
        "compute": {
          "canBeNull": false,
          "description": "Quotas for compute",
          "fullType": "cloud.quota.ComputeQuota",
          "readOnly": true,
          "required": false,
          "type": "cloud.quota.ComputeQuota"
        },
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "network": {
          "canBeNull": false,
          "description": "Quotas for network",
          "fullType": "cloud.quota.NetworkQuota",
          "readOnly": true,
          "required": false,
          "type": "cloud.quota.NetworkQuota"
        },
        "volume": {
          "canBeNull": false,
          "description": "Quotas for volume",
          "fullType": "cloud.quota.VolumeQuota",
          "readOnly": true,
          "required": false,
          "type": "cloud.quota.VolumeQuota"
        }
      }
    },
    "cloud.quota.ComputeQuota": {
      "description": "Quotas for compute",
      "id": "ComputeQuota",
      "namespace": "cloud.quota",
      "properties": {
        "cores": {
          "canBeNull": false,
          "description": "Maximum total cores allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "instances": {
          "canBeNull": false,
          "description": "Maximum number of instances allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ram": {
          "canBeNull": false,
          "description": "Maximum total ram allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.quota.InstanceUsageQuotas": {
      "description": "Quotas on instances",
      "id": "InstanceUsageQuotas",
      "namespace": "cloud.quota",
      "properties": {
        "maxCores": {
          "canBeNull": false,
          "description": "Maximum total cores allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxInstances": {
          "canBeNull": false,
          "description": "Maximum total cores allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxRam": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "usedCores": {
          "canBeNull": false,
          "description": "Current used cores number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "usedInstances": {
          "canBeNull": false,
          "description": "Current used instances",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "usedRAM": {
          "canBeNull": false,
          "description": "Current used ram",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.quota.KeypairQuotas": {
      "description": "Quotas on keypairs",
      "id": "KeypairQuotas",
      "namespace": "cloud.quota",
      "properties": {
        "maxCount": {
          "canBeNull": false,
          "description": "Maximum keypairs count allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.quota.NetworkQuota": {
      "description": "Quotas for network",
      "id": "NetworkQuota",
      "namespace": "cloud.quota",
      "properties": {
        "networks": {
          "canBeNull": false,
          "description": "Maximum number of networks allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ports": {
          "canBeNull": false,
          "description": "Maximum number of ports allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "subnets": {
          "canBeNull": false,
          "description": "Maximum number of subnets allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.quota.Quotas": {
      "description": "Quotas",
      "id": "Quotas",
      "namespace": "cloud.quota",
      "properties": {
        "instance": {
          "canBeNull": true,
          "description": "Quotas on instances",
          "fullType": "cloud.quota.InstanceUsageQuotas",
          "readOnly": true,
          "required": false,
          "type": "cloud.quota.InstanceUsageQuotas"
        },
        "keypair": {
          "canBeNull": true,
          "description": "Quotas on keypairs",
          "fullType": "cloud.quota.KeypairQuotas",
          "readOnly": true,
          "required": false,
          "type": "cloud.quota.KeypairQuotas"
        },
        "region": {
          "canBeNull": false,
          "description": "Region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "volume": {
          "canBeNull": true,
          "description": "Quotas on volumes",
          "fullType": "cloud.quota.VolumeUsageQuotas",
          "readOnly": true,
          "required": false,
          "type": "cloud.quota.VolumeUsageQuotas"
        }
      }
    },
    "cloud.quota.VolumeQuota": {
      "description": "Quotas for volume",
      "id": "VolumeQuota",
      "namespace": "cloud.quota",
      "properties": {
        "gigabytes": {
          "canBeNull": false,
          "description": "Maximum total volume capacity allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "snapshots": {
          "canBeNull": false,
          "description": "Maximum number of snapshots allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "volumes": {
          "canBeNull": false,
          "description": "Maximum number of volumes allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.quota.VolumeUsageQuotas": {
      "description": "Quotas on volumes",
      "id": "VolumeUsageQuotas",
      "namespace": "cloud.quota",
      "properties": {
        "maxGigabytes": {
          "canBeNull": false,
          "description": "Maximum total volume capacity allowed in your project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "usedGigabytes": {
          "canBeNull": false,
          "description": "Current used volume gigabytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "volumeCount": {
          "canBeNull": false,
          "description": "Current volumes count",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.quota.storage.Quota": {
      "description": "Cloud Storage Quota",
      "id": "Quota",
      "namespace": "cloud.quota.storage",
      "properties": {
        "bytesUsed": {
          "canBeNull": false,
          "description": "Quota used in bytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "containerCount": {
          "canBeNull": false,
          "description": "Number of containers on account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "objectCount": {
          "canBeNull": false,
          "description": "Number of objects on account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "quotaBytes": {
          "canBeNull": true,
          "description": "Quota in bytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.quota.storage.QuotaUpdate": {
      "description": "Update storage quota",
      "id": "QuotaUpdate",
      "namespace": "cloud.quota.storage",
      "properties": {
        "quotaBytes": {
          "canBeNull": false,
          "description": "New quota in bytes",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "cloud.role.Permission": {
      "description": "Role permissions",
      "id": "Permission",
      "namespace": "cloud.role",
      "properties": {
        "label": {
          "canBeNull": false,
          "description": "Permission label",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "roles": {
          "canBeNull": false,
          "description": "Roles having this permission",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "cloud.role.Role": {
      "description": "Role",
      "id": "Role",
      "namespace": "cloud.role",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Role Description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Role id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Role Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "permissions": {
          "canBeNull": false,
          "description": "Permissions granted by this role",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "cloud.role.Roles": {
      "description": "OpenStack role",
      "id": "Roles",
      "namespace": "cloud.role",
      "properties": {
        "roles": {
          "canBeNull": false,
          "description": "OpenStack roles",
          "fullType": "cloud.role.Role[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.role.Role[]"
        },
        "services": {
          "canBeNull": false,
          "description": "OpenStack services",
          "fullType": "cloud.role.Service[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.role.Service[]"
        }
      }
    },
    "cloud.role.Service": {
      "description": "OpenStack service",
      "id": "Service",
      "namespace": "cloud.role",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "permissions": {
          "canBeNull": false,
          "description": "List of permissions",
          "fullType": "cloud.role.Permission[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.role.Permission[]"
        }
      }
    },
    "cloud.sshkey.SshKey": {
      "description": "SshKey",
      "id": "SshKey",
      "namespace": "cloud.sshkey",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "SSH key id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "SSH key name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "publicKey": {
          "canBeNull": false,
          "description": "SSH public key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "regions": {
          "canBeNull": false,
          "description": "SSH key regions",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "cloud.sshkey.SshKeyDetail": {
      "description": "SshKeyDetail",
      "id": "SshKeyDetail",
      "namespace": "cloud.sshkey",
      "properties": {
        "fingerPrint": {
          "canBeNull": false,
          "description": "SSH key fingerprint",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "SSH key id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "SSH key name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "publicKey": {
          "canBeNull": false,
          "description": "SSH public key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "regions": {
          "canBeNull": false,
          "description": "SSH key regions",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "cloud.stack.Content": {
      "description": "Content",
      "id": "Content",
      "namespace": "cloud.stack",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Content",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the content",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.stack.InstructionGuide": {
      "description": "InstructionGuide",
      "id": "InstructionGuide",
      "namespace": "cloud.stack",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Guide introduction content",
          "fullType": "cloud.stack.Content[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.stack.Content[]"
        },
        "language": {
          "canBeNull": false,
          "description": "Guide language",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sections": {
          "canBeNull": false,
          "description": "Sections of the guide",
          "fullType": "cloud.stack.Section[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.stack.Section[]"
        },
        "title": {
          "canBeNull": false,
          "description": "Guide title",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.stack.Section": {
      "description": "Section",
      "id": "Section",
      "namespace": "cloud.stack",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Content of the guide section",
          "fullType": "cloud.stack.Content[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.stack.Content[]"
        },
        "steps": {
          "canBeNull": false,
          "description": "Steps to follow",
          "fullType": "cloud.stack.Step[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.stack.Step[]"
        },
        "title": {
          "canBeNull": false,
          "description": "Title of the guide section",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.stack.Stack": {
      "description": "Stack",
      "id": "Stack",
      "namespace": "cloud.stack",
      "properties": {
        "commit": {
          "canBeNull": false,
          "description": "Stack last commit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Stack description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "gitRepository": {
          "canBeNull": false,
          "description": "GIT repository",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "instructions": {
          "canBeNull": false,
          "description": "Instructions to start the stack",
          "fullType": "cloud.stack.InstructionGuide[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.stack.InstructionGuide[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Stack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "release": {
          "canBeNull": false,
          "description": "Stack release tag",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "uuid": {
          "canBeNull": false,
          "description": "Stack uuid",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.stack.Step": {
      "description": "Step",
      "id": "Step",
      "namespace": "cloud.stack",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Content of the step",
          "fullType": "cloud.stack.Content[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.stack.Content[]"
        },
        "title": {
          "canBeNull": false,
          "description": "Title of the step",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.storage.AddContainerPolicy": {
      "description": "Add storage policy for container",
      "id": "AddContainerPolicy",
      "namespace": "cloud.storage",
      "properties": {
        "objectKey": {
          "canBeNull": false,
          "description": "Container object key",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "roleName": {
          "canBeNull": false,
          "description": "Policy role",
          "fullType": "cloud.storage.PolicyRoleEnum",
          "readOnly": false,
          "required": true,
          "type": "cloud.storage.PolicyRoleEnum"
        }
      }
    },
    "cloud.storage.Container": {
      "description": "Container",
      "id": "Container",
      "namespace": "cloud.storage",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Storage id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Storage name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "storedBytes": {
          "canBeNull": false,
          "description": "Total bytes stored",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "storedObjects": {
          "canBeNull": false,
          "description": "Total objects stored",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.storage.ContainerAccess": {
      "description": "ContainerAccess",
      "id": "ContainerAccess",
      "namespace": "cloud.storage",
      "properties": {
        "endpoints": {
          "canBeNull": false,
          "description": "Storage access endpoints",
          "fullType": "cloud.storage.Endpoint[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.storage.Endpoint[]"
        },
        "token": {
          "canBeNull": false,
          "description": "Storage access token",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.storage.ContainerDetail": {
      "description": "ContainerDetail",
      "id": "ContainerDetail",
      "namespace": "cloud.storage",
      "properties": {
        "archive": {
          "canBeNull": false,
          "description": "Whether this is an archive container or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "containerType": {
          "canBeNull": false,
          "description": "Container type",
          "fullType": "cloud.storage.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.storage.TypeEnum"
        },
        "cors": {
          "canBeNull": false,
          "description": "Origins allowed to make Cross Origin Requests",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Container name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "objects": {
          "canBeNull": false,
          "description": "Objects stored in container",
          "fullType": "cloud.storage.ContainerObject[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.storage.ContainerObject[]"
        },
        "public": {
          "canBeNull": false,
          "description": "Public container (DEPRECATED: see containerType)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "region": {
          "canBeNull": false,
          "description": "Container region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "staticUrl": {
          "canBeNull": false,
          "description": "Container static URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "storedBytes": {
          "canBeNull": false,
          "description": "Total bytes stored",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "storedObjects": {
          "canBeNull": false,
          "description": "Total objects stored",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.storage.ContainerObject": {
      "description": "ContainerObject",
      "id": "ContainerObject",
      "namespace": "cloud.storage",
      "properties": {
        "contentType": {
          "canBeNull": false,
          "description": "Object content type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastModified": {
          "canBeNull": false,
          "description": "Last modification date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Object name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "retrievalDelay": {
          "canBeNull": false,
          "description": "Object retrieval delay (when unsealing)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "retrievalState": {
          "canBeNull": false,
          "description": "Object retrieval state",
          "fullType": "cloud.storage.RetrievalStateEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.storage.RetrievalStateEnum"
        },
        "size": {
          "canBeNull": false,
          "description": "Object size",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "cloud.storage.ContainerObjectTempURL": {
      "description": "ContainerObjectTempURL",
      "id": "ContainerObjectTempURL",
      "namespace": "cloud.storage",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Temporary URL expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "getURL": {
          "canBeNull": false,
          "description": "Temporary URL to get object",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.storage.Endpoint": {
      "description": "Endpoint",
      "id": "Endpoint",
      "namespace": "cloud.storage",
      "properties": {
        "region": {
          "canBeNull": false,
          "description": "Endpoint region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "Endpoint URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.storage.PolicyRaw": {
      "description": "Raw storage policy",
      "id": "PolicyRaw",
      "namespace": "cloud.storage",
      "properties": {
        "policy": {
          "canBeNull": false,
          "description": "Raw storage policy",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.storage.PolicyRoleEnum": {
      "description": "Storage policy role",
      "enum": [
        "admin",
        "deny",
        "readOnly",
        "readWrite"
      ],
      "enumType": "string",
      "id": "PolicyRoleEnum",
      "namespace": "cloud.storage"
    },
    "cloud.storage.RetrievalStateEnum": {
      "description": "RetrievalStateEnum",
      "enum": [
        "sealed",
        "unsealing",
        "unsealed"
      ],
      "enumType": "string",
      "id": "RetrievalStateEnum",
      "namespace": "cloud.storage"
    },
    "cloud.storage.RightEnum": {
      "description": "RightEnum",
      "enum": [
        "all",
        "read",
        "write"
      ],
      "enumType": "string",
      "id": "RightEnum",
      "namespace": "cloud.storage"
    },
    "cloud.storage.TypeEnum": {
      "description": "TypeEnum",
      "enum": [
        "static",
        "public",
        "private"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "cloud.storage"
    },
    "cloud.user.Openrc": {
      "description": "Openrc",
      "id": "Openrc",
      "namespace": "cloud.user",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "openrc file",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.user.OpenrcVersionEnum": {
      "description": "OpenrcVersionEnum",
      "enum": [
        "v2.0",
        "v3"
      ],
      "enumType": "string",
      "id": "OpenrcVersionEnum",
      "namespace": "cloud.user"
    },
    "cloud.user.Rclone": {
      "description": "Rclone",
      "id": "Rclone",
      "namespace": "cloud.user",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "rclone configuration file",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.user.RoleEnum": {
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
        "ai_training_operator",
        "ai_training_read"
      ],
      "enumType": "string",
      "id": "RoleEnum",
      "namespace": "cloud.user"
    },
    "cloud.user.S3CredentialsWithSecret": {
      "description": "S3CredentialsWithSecret",
      "id": "S3CredentialsWithSecret",
      "namespace": "cloud.user",
      "properties": {
        "access": {
          "canBeNull": false,
          "description": "S3 Access key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "secret": {
          "canBeNull": false,
          "description": "S3 Access key secret",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "tenantId": {
          "canBeNull": false,
          "description": "Tenant id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "userId": {
          "canBeNull": false,
          "description": "User id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.user.User": {
      "description": "User",
      "id": "User",
      "namespace": "cloud.user",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "User creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "User description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "User id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "openstackId": {
          "canBeNull": true,
          "description": "User id on openstack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "roles": {
          "canBeNull": false,
          "description": "User roles",
          "fullType": "cloud.role.Role[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.role.Role[]"
        },
        "status": {
          "canBeNull": false,
          "description": "User status",
          "fullType": "cloud.user.UserStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.user.UserStatusEnum"
        },
        "username": {
          "canBeNull": false,
          "description": "Username",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.user.UserDetail": {
      "description": "UserDetail",
      "id": "UserDetail",
      "namespace": "cloud.user",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "User creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "User description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "User id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "openstackId": {
          "canBeNull": true,
          "description": "User id on openstack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "description": "User password",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "roles": {
          "canBeNull": false,
          "description": "User roles",
          "fullType": "cloud.role.Role[]",
          "readOnly": true,
          "required": false,
          "type": "cloud.role.Role[]"
        },
        "status": {
          "canBeNull": false,
          "description": "User status",
          "fullType": "cloud.user.UserStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.user.UserStatusEnum"
        },
        "username": {
          "canBeNull": false,
          "description": "Username",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.user.UserStatusEnum": {
      "description": "UserStatusEnum",
      "enum": [
        "creating",
        "ok",
        "deleting",
        "deleted"
      ],
      "enumType": "string",
      "id": "UserStatusEnum",
      "namespace": "cloud.user"
    },
    "cloud.volume.Snapshot": {
      "description": "Snapshot",
      "id": "Snapshot",
      "namespace": "cloud.volume",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Snapshot creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Snapshot description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Snapshot id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Snapshot name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": true,
          "description": "Order plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Snapshot region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Snapshot size",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Snapshot status",
          "fullType": "cloud.volume.SnapshotStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.volume.SnapshotStatusEnum"
        },
        "volumeId": {
          "canBeNull": false,
          "description": "Volume source id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "cloud.volume.SnapshotStatusEnum": {
      "description": "SnapshotStatusEnum",
      "enum": [
        "creating",
        "available",
        "deleting",
        "error",
        "error_deleting"
      ],
      "enumType": "string",
      "id": "SnapshotStatusEnum",
      "namespace": "cloud.volume"
    },
    "cloud.volume.Volume": {
      "description": "Volume",
      "id": "Volume",
      "namespace": "cloud.volume",
      "properties": {
        "attachedTo": {
          "canBeNull": false,
          "description": "Volume attached to instances id",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "bootable": {
          "canBeNull": false,
          "description": "Volume bootable",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Volume creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Volume description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Volume id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Volume name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": true,
          "description": "Order plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Volume region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Volume size (in GB)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Volume status",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Volume type",
          "fullType": "cloud.volume.VolumeTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "cloud.volume.VolumeTypeEnum"
        }
      }
    },
    "cloud.volume.VolumeTypeEnum": {
      "description": "VolumeTypeEnum",
      "enum": [
        "classic",
        "high-speed"
      ],
      "enumType": "string",
      "id": "VolumeTypeEnum",
      "namespace": "cloud.volume"
    },
    "nichandle.OvhSubsidiaryEnum": {
      "description": "OVH subsidiaries",
      "enum": [
        "CZ",
        "DE",
        "ES",
        "EU",
        "FI",
        "FR",
        "GB",
        "IE",
        "IT",
        "LT",
        "MA",
        "NL",
        "PL",
        "PT",
        "SN",
        "TN",
        "ASIA",
        "AU",
        "CA",
        "QC",
        "SG",
        "WE",
        "WS",
        "US"
      ],
      "enumType": "string",
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle"
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
  "resourcePath": "/cloud"
}