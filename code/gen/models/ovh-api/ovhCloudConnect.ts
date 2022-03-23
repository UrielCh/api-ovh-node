import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/ovhCloudConnect.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the OVHcloud Connect service",
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
          "responseType": "uuid[]",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect"
    },
    {
      "description": "Operations about the OVHcloud Connect service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Service",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Modify service",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ovhcloudconnect.Update",
              "description": "Request Body",
              "fullType": "ovhcloudconnect.Update",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
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
              "description": "Your OVHcloud Connect service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/changeContact"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Pop Configuration linked to of a OVHcloud Connect Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a Pop Configuration",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ovhcloudconnect.PopConfig",
              "description": "Request Body",
              "fullType": "ovhcloudconnect.PopConfig",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/config/pop"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a Pop Configuration",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Pop ID",
              "fullType": "long",
              "name": "popId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Pop Configuration of a OVHcloud Connect Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Pop ID",
              "fullType": "long",
              "name": "popId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.PopConfig",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/config/pop/{popId}"
    },
    {
      "description": "Datacenter Configuration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Datacenter Configuration linked to of a OVHcloud Connect Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Pop ID",
              "fullType": "long",
              "name": "popId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a Datacenter Configuration",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ovhcloudconnect.DatacenterConfig",
              "description": "Request Body",
              "fullType": "ovhcloudconnect.DatacenterConfig",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Pop ID",
              "fullType": "long",
              "name": "popId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter"
    },
    {
      "description": "Datacenter Configuration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a Datacenter Configuration",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter ID",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Pop ID",
              "fullType": "long",
              "name": "popId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Datacenter Configuration of a OVHcloud Connect Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter ID",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Pop ID",
              "fullType": "long",
              "name": "popId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.DatacenterConfig",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Datacenter Extra Configuration linked to of a OVHcloud Connect Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter ID",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Pop ID",
              "fullType": "long",
              "name": "popId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a Datacenter Extra Configuration",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ovhcloudconnect.DatacenterExtraConfig",
              "description": "Request Body",
              "fullType": "ovhcloudconnect.DatacenterExtraConfig",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Datacenter ID",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Pop ID",
              "fullType": "long",
              "name": "popId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a Datacenter Extra Configuration",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter ID",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Extra ID",
              "fullType": "long",
              "name": "extraId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Pop ID",
              "fullType": "long",
              "name": "popId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Datacenter Extra Configuration of a OVHcloud Connect Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter ID",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Extra ID",
              "fullType": "long",
              "name": "extraId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Pop ID",
              "fullType": "long",
              "name": "popId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.DatacenterExtraConfig",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}"
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
              "description": "Your OVHcloud Connect service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/confirmTermination"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available Datacenter",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/datacenter"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Datacenter",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Datacenter",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/datacenter/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List interfaces linked to the Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/interface"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the Interface information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Interface",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/interface/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Lock the port",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/interface/{id}/lock"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Statistics for an OCC interface for a given type",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ovhcloudconnect.interface.MetricsPeriodEnum",
              "description": "The period the statistics are fetched for",
              "fullType": "ovhcloudconnect.interface.MetricsPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ovhcloudconnect.interface.MetricsTypeEnum",
              "description": "The type of statistic to be fetched",
              "fullType": "ovhcloudconnect.interface.MetricsTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Metrics[]",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/interface/{id}/statistics"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unlock the port",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/interface/{id}/unlock"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate a loa for a service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/loa"
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
              "description": "Your OVHcloud Connect service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
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
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your OVHcloud Connect service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/serviceInfos"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Keys linked to a OVHcloud Connect Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/serviceKey"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Key linked to a OVHcloud Connect Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Service key ID",
              "fullType": "long",
              "name": "serviceKeyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Key",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/serviceKey/{serviceKeyId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Regenerate Service Key linked to a OVHcloud Connect Service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Service key ID",
              "fullType": "long",
              "name": "serviceKeyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Key",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/serviceKey/{serviceKeyId}/regenerate"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Send key value to customer",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ovhcloudconnect.To",
              "description": "Request Body",
              "fullType": "ovhcloudconnect.To",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Service key ID",
              "fullType": "long",
              "name": "serviceKeyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.SendKeyAnswer",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/serviceKey/{serviceKeyId}/send"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Task linked to a OVHcloud Connect Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/task"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get Tasks linked to a OVHcloud Connect Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/task/{id}"
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
              "description": "Your OVHcloud Connect service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/ovhcloudconnect/all"
          ]
        }
      ],
      "path": "/ovhCloudConnect/{serviceName}/terminate"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "ovhcloudconnect.Datacenter": {
      "description": "OVHcloud Connect Datacenter",
      "id": "Datacenter",
      "namespace": "ovhcloudconnect",
      "properties": {
        "available": {
          "canBeNull": false,
          "description": "Get availability to add new configuration on it",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the datacenter",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "name of the datacenter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ovhcloudconnect.DatacenterConfig": {
      "description": "OVHcloud Connect Service Datacenter Configuration",
      "id": "DatacenterConfig",
      "namespace": "ovhcloudconnect",
      "properties": {
        "datacenterId": {
          "canBeNull": false,
          "description": "ID of the datacenter linked",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the Datacenter configuration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ovhBgpArea": {
          "canBeNull": false,
          "description": "OVH Private AS",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the pop configuration",
          "fullType": "ovhcloudconnect.popConfig.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.popConfig.StatusEnum"
        },
        "subnet": {
          "canBeNull": true,
          "description": "Subnet should be a /28 min",
          "fullType": "ipv4Block",
          "readOnly": false,
          "required": false,
          "type": "ipv4Block"
        }
      }
    },
    "ovhcloudconnect.DatacenterExtraConfig": {
      "description": "OVHcloud Connect Service Datacenter Extra Configuration",
      "id": "DatacenterExtraConfig",
      "namespace": "ovhcloudconnect",
      "properties": {
        "bgpNeighborArea": {
          "canBeNull": true,
          "description": "BGP AS number",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "bgpNeighborIp": {
          "canBeNull": true,
          "description": "Router IP for BGP",
          "fullType": "ipv4",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the extra configuration ",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "nextHop": {
          "canBeNull": true,
          "description": "Static route next hop",
          "fullType": "ipv4",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the pop configuration",
          "fullType": "ovhcloudconnect.popConfig.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.popConfig.StatusEnum"
        },
        "subnet": {
          "canBeNull": true,
          "description": "Static route ip",
          "fullType": "ipv4Block",
          "readOnly": false,
          "required": false,
          "type": "ipv4Block"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the configuration",
          "fullType": "ovhcloudconnect.datacenterExtraConfig.TypeEnum",
          "readOnly": false,
          "required": true,
          "type": "ovhcloudconnect.datacenterExtraConfig.TypeEnum"
        }
      }
    },
    "ovhcloudconnect.Interface": {
      "description": "OVHcloud Connect Interface",
      "id": "Interface",
      "namespace": "ovhcloudconnect",
      "properties": {
        "deviceDisplayName": {
          "canBeNull": true,
          "description": "Patch panel name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "deviceRackDisplayName": {
          "canBeNull": true,
          "description": "Equipment name in the rack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Interface reference",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "incomingLightStatus": {
          "canBeNull": false,
          "description": "Status of the light received on the port (checked every 5 min)",
          "fullType": "ovhcloudconnect.interface.LightStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.interface.LightStatusEnum"
        },
        "incomingLightValue": {
          "canBeNull": true,
          "description": "Value of the light received on the port (checked every 5 min)",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "interfaceName": {
          "canBeNull": true,
          "description": "Port location",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "interfaceTerminationType": {
          "canBeNull": true,
          "description": "Fiber termination type",
          "fullType": "ovhcloudconnect.interface.TerminationTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.interface.TerminationTypeEnum"
        },
        "lightLastUpdate": {
          "canBeNull": false,
          "description": "Date of the last light change detected",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "outgoingLightStatus": {
          "canBeNull": false,
          "description": "Status of the light emitted on the port (checked every 5 min)",
          "fullType": "ovhcloudconnect.interface.LightStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.interface.LightStatusEnum"
        },
        "outgoingLightValue": {
          "canBeNull": true,
          "description": "Value of the light emitted on the port (checked every 5 min)",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the port",
          "fullType": "ovhcloudconnect.interface.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.interface.StatusEnum"
        }
      }
    },
    "ovhcloudconnect.Key": {
      "description": "OVHcloud Connect Service Key",
      "id": "Key",
      "namespace": "ovhcloudconnect",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Service Key id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "key": {
          "canBeNull": false,
          "description": "Reference of the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "provider": {
          "canBeNull": false,
          "description": "Service Key provider",
          "fullType": "ovhcloudconnect.service.ProviderEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.service.ProviderEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Service Key status",
          "fullType": "ovhcloudconnect.key.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.key.StatusEnum"
        }
      }
    },
    "ovhcloudconnect.Metrics": {
      "description": "OVHcloud Connect Metrics",
      "id": "Metrics",
      "namespace": "ovhcloudconnect",
      "properties": {
        "timestamp": {
          "canBeNull": false,
          "description": "timestamp corresponding to the value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": false,
          "fullType": "ovhcloudconnect.MetricsValue",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.MetricsValue"
        }
      }
    },
    "ovhcloudconnect.MetricsValue": {
      "description": "OVHcloud Connect Metrics value",
      "id": "MetricsValue",
      "namespace": "ovhcloudconnect",
      "properties": {
        "unit": {
          "canBeNull": false,
          "description": "Unit in which the value is expressed",
          "fullType": "ovhcloudconnect.interface.MetricsUnitEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.interface.MetricsUnitEnum"
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
    "ovhcloudconnect.PopConfig": {
      "description": "OVHcloud Connect Service Pop Configuration",
      "id": "PopConfig",
      "namespace": "ovhcloudconnect",
      "properties": {
        "customerBgpArea": {
          "canBeNull": false,
          "description": "Customer Private AS",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the Pop Configuration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "interfaceId": {
          "canBeNull": false,
          "description": "ID of the interface",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "ovhBgpArea": {
          "canBeNull": false,
          "description": "OVH Private AS",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the pop configuration",
          "fullType": "ovhcloudconnect.popConfig.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.popConfig.StatusEnum"
        },
        "subnet": {
          "canBeNull": true,
          "description": "Subnet should be a /30, first IP for OVH, second IP for customer",
          "fullType": "ipv4Block",
          "readOnly": false,
          "required": false,
          "type": "ipv4Block"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the pop configuration",
          "fullType": "ovhcloudconnect.popConfig.TypeEnum",
          "readOnly": false,
          "required": true,
          "type": "ovhcloudconnect.popConfig.TypeEnum"
        }
      }
    },
    "ovhcloudconnect.SendKeyAnswer": {
      "description": "OVHcloud Connect send key answer",
      "id": "SendKeyAnswer",
      "namespace": "ovhcloudconnect",
      "properties": {
        "messageCode": {
          "canBeNull": false,
          "description": "message code for UX to display appropriate text",
          "fullType": "ovhcloudconnect.messageCode.Enum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.messageCode.Enum"
        }
      }
    },
    "ovhcloudconnect.Service": {
      "description": "OVHcloud Connect Service",
      "id": "Service",
      "namespace": "ovhcloudconnect",
      "properties": {
        "bandwidth": {
          "canBeNull": false,
          "description": "Service bandwidth",
          "fullType": "ovhcloudconnect.service.BandwidthEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.service.BandwidthEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "Service description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "interfaceList": {
          "canBeNull": false,
          "description": "List of interfaces linked to a service",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "pop": {
          "canBeNull": false,
          "description": "Pop reference where the service is delivered",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "portQuantity": {
          "canBeNull": false,
          "description": "Port quantity",
          "fullType": "ovhcloudconnect.service.PortEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.service.PortEnum"
        },
        "product": {
          "canBeNull": false,
          "description": "Product name of the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "provider": {
          "canBeNull": false,
          "description": "Service provider",
          "fullType": "ovhcloudconnect.service.ProviderEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.service.ProviderEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Service status",
          "fullType": "ovhcloudconnect.service.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.service.StatusEnum"
        },
        "uuid": {
          "canBeNull": false,
          "description": "Service UUID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "vrack": {
          "canBeNull": true,
          "description": "vrack linked to the service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "ovhcloudconnect.Task": {
      "description": "OVHcloud Connect Task",
      "id": "Task",
      "namespace": "ovhcloudconnect",
      "properties": {
        "function": {
          "canBeNull": false,
          "description": "Task function",
          "fullType": "ovhcloudconnect.task.FunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.task.FunctionEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "resourceId": {
          "canBeNull": false,
          "description": "Reference of the created resource",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "ovhcloudconnect.task.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "ovhcloudconnect.task.StatusEnum"
        }
      }
    },
    "ovhcloudconnect.To": {
      "description": "OVHcloud Connect email",
      "id": "To",
      "namespace": "ovhcloudconnect",
      "properties": {
        "email": {
          "canBeNull": false,
          "description": "Email address to send the key",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "ovhcloudconnect.Update": {
      "description": "Missing description",
      "id": "Update",
      "namespace": "ovhcloudconnect",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "New description for your service",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "ovhcloudconnect.datacenterExtraConfig.TypeEnum": {
      "description": "Enum values for Datacenter Extra Configuration Type",
      "enum": [
        "bgp",
        "network"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "ovhcloudconnect.datacenterExtraConfig"
    },
    "ovhcloudconnect.interface.LightStatusEnum": {
      "description": "Enum values for the light status",
      "enum": [
        "down",
        "unknown",
        "up"
      ],
      "enumType": "string",
      "id": "LightStatusEnum",
      "namespace": "ovhcloudconnect.interface"
    },
    "ovhcloudconnect.interface.MetricsPeriodEnum": {
      "description": "Enum values for the period of the statistics",
      "enum": [
        "daily",
        "hourly",
        "weekly"
      ],
      "enumType": "string",
      "id": "MetricsPeriodEnum",
      "namespace": "ovhcloudconnect.interface"
    },
    "ovhcloudconnect.interface.MetricsTypeEnum": {
      "description": "Enum values for the type of the statistics",
      "enum": [
        "error:download",
        "error:upload",
        "light:in",
        "light:out",
        "traffic:download",
        "traffic:upload"
      ],
      "enumType": "string",
      "id": "MetricsTypeEnum",
      "namespace": "ovhcloudconnect.interface"
    },
    "ovhcloudconnect.interface.MetricsUnitEnum": {
      "description": "Enum values for the unit of the statistics",
      "enum": [
        "bytes/s",
        "dbm",
        "error/s"
      ],
      "enumType": "string",
      "id": "MetricsUnitEnum",
      "namespace": "ovhcloudconnect.interface"
    },
    "ovhcloudconnect.interface.StatusEnum": {
      "description": "Enum values for interface status",
      "enum": [
        "disabled",
        "enabled",
        "reserved"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "ovhcloudconnect.interface"
    },
    "ovhcloudconnect.interface.TerminationTypeEnum": {
      "description": "Enum values for the termination type",
      "enum": [
        "LC/PC",
        "SC/PC"
      ],
      "enumType": "string",
      "id": "TerminationTypeEnum",
      "namespace": "ovhcloudconnect.interface"
    },
    "ovhcloudconnect.key.StatusEnum": {
      "description": "Enum values for service key status",
      "enum": [
        "active",
        "cancelled",
        "doing",
        "terminated",
        "toCheck"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "ovhcloudconnect.key"
    },
    "ovhcloudconnect.messageCode.Enum": {
      "description": "Enum values for messageCode",
      "enum": [
        "mailSent"
      ],
      "enumType": "string",
      "id": "Enum",
      "namespace": "ovhcloudconnect.messageCode"
    },
    "ovhcloudconnect.popConfig.StatusEnum": {
      "description": "Enum values for Pop Configuration Status",
      "enum": [
        "active",
        "init",
        "toDelete"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "ovhcloudconnect.popConfig"
    },
    "ovhcloudconnect.popConfig.TypeEnum": {
      "description": "Enum values for Pop Configuration Type",
      "enum": [
        "l2",
        "l3"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "ovhcloudconnect.popConfig"
    },
    "ovhcloudconnect.service.BandwidthEnum": {
      "description": "Enum values for bandwidth",
      "enum": [
        "100g",
        "100m",
        "10g",
        "1g",
        "200m",
        "2g",
        "500m",
        "5g"
      ],
      "enumType": "string",
      "id": "BandwidthEnum",
      "namespace": "ovhcloudconnect.service"
    },
    "ovhcloudconnect.service.PortEnum": {
      "description": "Enum values for port quantity",
      "enum": [
        "1",
        "2"
      ],
      "enumType": "string",
      "id": "PortEnum",
      "namespace": "ovhcloudconnect.service"
    },
    "ovhcloudconnect.service.ProviderEnum": {
      "description": "Enum values for service provider",
      "enum": [
        "OVHcloud",
        "equinix",
        "fibrenoire",
        "intercloud",
        "internal",
        "interxion",
        "megaport",
        "orange",
        "risq"
      ],
      "enumType": "string",
      "id": "ProviderEnum",
      "namespace": "ovhcloudconnect.service"
    },
    "ovhcloudconnect.service.StatusEnum": {
      "description": "Enum values for the Service",
      "enum": [
        "active",
        "closed"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "ovhcloudconnect.service"
    },
    "ovhcloudconnect.task.FunctionEnum": {
      "description": "Enum values for Task function",
      "enum": [
        "addDatacenterConfiguration",
        "addDatacenterExtraConfiguration",
        "addPopConfiguration",
        "addVrack",
        "delDatacenterConfiguration",
        "delDatacenterExtraConfiguration",
        "delPopConfiguration",
        "lockInterface",
        "removeVrack",
        "unlockInterface"
      ],
      "enumType": "string",
      "id": "FunctionEnum",
      "namespace": "ovhcloudconnect.task"
    },
    "ovhcloudconnect.task.StatusEnum": {
      "description": "Enum values for Task status",
      "enum": [
        "doing",
        "done",
        "error",
        "pause",
        "todo"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "ovhcloudconnect.task"
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
  "resourcePath": "/ovhCloudConnect"
}