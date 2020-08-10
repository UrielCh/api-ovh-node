import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/ovhCloudConnect",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the OVHcloud Connect service"
    },
    {
      "path": "/ovhCloudConnect/{serviceName}",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "ovhcloudconnect.Service",
          "noAuthentication": false,
          "description": "Get service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "ovhcloudconnect.Update",
              "paramType": "body",
              "fullType": "ovhcloudconnect.Update",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Modify service"
        }
      ],
      "description": "Operations about the OVHcloud Connect service"
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactTech",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as tech contact"
            },
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
      "path": "/ovhCloudConnect/{serviceName}/config/pop",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get Pop Configuration linked to of a OVHcloud Connect Service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "ovhcloudconnect.PopConfig",
              "paramType": "body",
              "fullType": "ovhcloudconnect.PopConfig",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "noAuthentication": false,
          "description": "Create a Pop Configuration"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/config/pop/{popId}",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "popId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pop ID"
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "noAuthentication": false,
          "description": "Delete a Pop Configuration"
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "popId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pop ID"
            }
          ],
          "responseType": "ovhcloudconnect.PopConfig",
          "noAuthentication": false,
          "description": "Get Pop Configuration of a OVHcloud Connect Service"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "popId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pop ID"
            },
            {
              "name": "serviceName",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get Datacenter Configuration linked to of a OVHcloud Connect Service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "ovhcloudconnect.DatacenterConfig",
              "paramType": "body",
              "fullType": "ovhcloudconnect.DatacenterConfig",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "popId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pop ID"
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "noAuthentication": false,
          "description": "Create a Datacenter Configuration"
        }
      ],
      "description": "Datacenter Configuration"
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "popId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pop ID"
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
          "responseType": "ovhcloudconnect.Task",
          "noAuthentication": false,
          "description": "Delete a Datacenter Configuration"
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "popId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pop ID"
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
          "responseType": "ovhcloudconnect.DatacenterConfig",
          "noAuthentication": false,
          "description": "Get Datacenter Configuration of a OVHcloud Connect Service"
        }
      ],
      "description": "Datacenter Configuration"
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "popId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pop ID"
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get Datacenter Extra Configuration linked to of a OVHcloud Connect Service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "ovhcloudconnect.DatacenterExtraConfig",
              "paramType": "body",
              "fullType": "ovhcloudconnect.DatacenterExtraConfig",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "popId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pop ID"
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
          "responseType": "ovhcloudconnect.Task",
          "noAuthentication": false,
          "description": "Create a Datacenter Extra Configuration"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "popId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pop ID"
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
              "name": "extraId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Extra ID"
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "noAuthentication": false,
          "description": "Delete a Datacenter Extra Configuration"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "popId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pop ID"
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
              "name": "extraId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Extra ID"
            },
            {
              "name": "serviceName",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "ovhcloudconnect.DatacenterExtraConfig",
          "noAuthentication": false,
          "description": "Get Datacenter Extra Configuration of a OVHcloud Connect Service"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/confirmTermination",
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
      "path": "/ovhCloudConnect/{serviceName}/datacenter",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List available Datacenter"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/datacenter/{id}",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
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
          "responseType": "ovhcloudconnect.Datacenter",
          "noAuthentication": false,
          "description": "Get Datacenter"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/interface",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List interfaces linked to the Service"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/interface/{id}",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
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
          "responseType": "ovhcloudconnect.Interface",
          "noAuthentication": false,
          "description": "Get the Interface information"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/interface/{id}/lock",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "ovhcloudconnect.Task",
          "noAuthentication": false,
          "description": "Lock the port"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/interface/{id}/unlock",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
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
          "responseType": "ovhcloudconnect.Task",
          "noAuthentication": false,
          "description": "Unlock the port"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/loa",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Generate a loa for a service"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/serviceInfos",
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
      "path": "/ovhCloudConnect/{serviceName}/serviceKey",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get Keys linked to a OVHcloud Connect Service"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/serviceKey/{serviceKeyId}",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "serviceKeyId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Service key ID"
            }
          ],
          "responseType": "ovhcloudconnect.Key",
          "noAuthentication": false,
          "description": "Get Key linked to a OVHcloud Connect Service"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/serviceKey/{serviceKeyId}/regenerate",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "serviceKeyId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Service key ID"
            }
          ],
          "responseType": "ovhcloudconnect.Key",
          "noAuthentication": false,
          "description": "Regenerate Service Key linked to a OVHcloud Connect Service"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/serviceKey/{serviceKeyId}/send",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "ovhcloudconnect.To",
              "paramType": "body",
              "fullType": "ovhcloudconnect.To",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "serviceKeyId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Service key ID"
            }
          ],
          "responseType": "ovhcloudconnect.SendKeyAnswer",
          "noAuthentication": false,
          "description": "Send key value to customer"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/task",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Get Task linked to a OVHcloud Connect Service"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/task/{id}",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
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
          "responseType": "ovhcloudconnect.Task",
          "noAuthentication": false,
          "description": "Get Tasks linked to a OVHcloud Connect Service"
        }
      ],
      "description": ""
    },
    {
      "path": "/ovhCloudConnect/{serviceName}/terminate",
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
    }
  ],
  "resourcePath": "/ovhCloudConnect",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "ovhcloudconnect.Datacenter": {
      "id": "Datacenter",
      "namespace": "ovhcloudconnect",
      "description": "OVHcloud Connect Datacenter",
      "properties": {
        "available": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Get availability to add new configuration on it",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the datacenter",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "name of the datacenter",
          "required": false
        }
      }
    },
    "ovhcloudconnect.DatacenterConfig": {
      "id": "DatacenterConfig",
      "namespace": "ovhcloudconnect",
      "description": "OVHcloud Connect Service Datacenter Configuration",
      "properties": {
        "datacenterId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of the datacenter linked",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the Datacenter configuration",
          "required": false
        },
        "ovhBgpArea": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "OVH Private AS",
          "required": false
        },
        "status": {
          "type": "ovhcloudconnect.popConfig.StatusEnum",
          "fullType": "ovhcloudconnect.popConfig.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the pop configuration",
          "required": false
        },
        "subnet": {
          "type": "ipv4Block",
          "fullType": "ipv4Block",
          "canBeNull": true,
          "readOnly": false,
          "description": "Subnet should be a /28 min",
          "required": false
        }
      }
    },
    "ovhcloudconnect.DatacenterExtraConfig": {
      "id": "DatacenterExtraConfig",
      "namespace": "ovhcloudconnect",
      "description": "OVHcloud Connect Service Datacenter Extra Configuration",
      "properties": {
        "bgpNeighborArea": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "BGP AS number",
          "required": false
        },
        "bgpNeighborIp": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": false,
          "description": "Router IP for BGP",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the extra configuration ",
          "required": false
        },
        "nextHop": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": false,
          "description": "Static route next hop",
          "required": false
        },
        "status": {
          "type": "ovhcloudconnect.popConfig.StatusEnum",
          "fullType": "ovhcloudconnect.popConfig.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the pop configuration",
          "required": false
        },
        "subnet": {
          "type": "ipv4Block",
          "fullType": "ipv4Block",
          "canBeNull": true,
          "readOnly": false,
          "description": "Static route ip",
          "required": false
        },
        "type": {
          "type": "ovhcloudconnect.datacenterExtraConfig.TypeEnum",
          "fullType": "ovhcloudconnect.datacenterExtraConfig.TypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the configuration",
          "required": true
        }
      }
    },
    "ovhcloudconnect.Interface": {
      "id": "Interface",
      "namespace": "ovhcloudconnect",
      "description": "OVHcloud Connect Interface",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Interface reference",
          "required": false
        },
        "incomingLightStatus": {
          "type": "ovhcloudconnect.interface.LightStatusEnum",
          "fullType": "ovhcloudconnect.interface.LightStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the light received on the port (checked every 5 min)",
          "required": false
        },
        "lightLastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the last light change detected",
          "required": false
        },
        "outgoingLightStatus": {
          "type": "ovhcloudconnect.interface.LightStatusEnum",
          "fullType": "ovhcloudconnect.interface.LightStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the light emitted on the port (checked every 5 min)",
          "required": false
        },
        "status": {
          "type": "ovhcloudconnect.interface.StatusEnum",
          "fullType": "ovhcloudconnect.interface.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the port",
          "required": false
        }
      }
    },
    "ovhcloudconnect.Key": {
      "id": "Key",
      "namespace": "ovhcloudconnect",
      "description": "OVHcloud Connect Service Key",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service Key id",
          "required": false
        },
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Reference of the service",
          "required": false
        },
        "provider": {
          "type": "ovhcloudconnect.key.ProviderEnum",
          "fullType": "ovhcloudconnect.key.ProviderEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service Key provider",
          "required": false
        },
        "status": {
          "type": "ovhcloudconnect.key.StatusEnum",
          "fullType": "ovhcloudconnect.key.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service Key status",
          "required": false
        }
      }
    },
    "ovhcloudconnect.PopConfig": {
      "id": "PopConfig",
      "namespace": "ovhcloudconnect",
      "description": "OVHcloud Connect Service Pop Configuration",
      "properties": {
        "customerBgpArea": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Customer Private AS",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the Pop Configuration",
          "required": false
        },
        "interfaceId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of the interface",
          "required": true
        },
        "ovhBgpArea": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "OVH Private AS",
          "required": false
        },
        "status": {
          "type": "ovhcloudconnect.popConfig.StatusEnum",
          "fullType": "ovhcloudconnect.popConfig.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the pop configuration",
          "required": false
        },
        "subnet": {
          "type": "ipv4Block",
          "fullType": "ipv4Block",
          "canBeNull": true,
          "readOnly": false,
          "description": "Subnet should be a /30, first IP for OVH, second IP for customer",
          "required": false
        },
        "type": {
          "type": "ovhcloudconnect.popConfig.TypeEnum",
          "fullType": "ovhcloudconnect.popConfig.TypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the pop configuration",
          "required": true
        }
      }
    },
    "ovhcloudconnect.SendKeyAnswer": {
      "id": "SendKeyAnswer",
      "namespace": "ovhcloudconnect",
      "description": "OVHcloud Connect send key answer",
      "properties": {
        "messageCode": {
          "type": "ovhcloudconnect.messageCode.Enum",
          "fullType": "ovhcloudconnect.messageCode.Enum",
          "canBeNull": false,
          "readOnly": true,
          "description": "message code for UX to display appropriate text",
          "required": false
        }
      }
    },
    "ovhcloudconnect.Service": {
      "id": "Service",
      "namespace": "ovhcloudconnect",
      "description": "OVHcloud Connect Service",
      "properties": {
        "bandwidth": {
          "type": "ovhcloudconnect.service.BandwidthEnum",
          "fullType": "ovhcloudconnect.service.BandwidthEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service bandwidth",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service description",
          "required": false
        },
        "interfaceList": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of interfaces linked to a service",
          "required": false
        },
        "pop": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pop reference where the service is delivered",
          "required": false
        },
        "portQuantity": {
          "type": "ovhcloudconnect.service.PortEnum",
          "fullType": "ovhcloudconnect.service.PortEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Port quantity",
          "required": false
        },
        "product": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Product name of the service",
          "required": false
        },
        "provider": {
          "type": "ovhcloudconnect.service.ProviderEnum",
          "fullType": "ovhcloudconnect.service.ProviderEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service provider",
          "required": false
        },
        "status": {
          "type": "ovhcloudconnect.service.StatusEnum",
          "fullType": "ovhcloudconnect.service.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service status",
          "required": false
        },
        "uuid": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service UUID",
          "required": false
        },
        "vrack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "vrack linked to the service",
          "required": false
        }
      }
    },
    "ovhcloudconnect.Task": {
      "id": "Task",
      "namespace": "ovhcloudconnect",
      "description": "OVHcloud Connect Task",
      "properties": {
        "function": {
          "type": "ovhcloudconnect.task.FunctionEnum",
          "fullType": "ovhcloudconnect.task.FunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task function",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task id",
          "required": false
        },
        "resourceId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Reference of the created resource",
          "required": false
        },
        "status": {
          "type": "ovhcloudconnect.task.StatusEnum",
          "fullType": "ovhcloudconnect.task.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": false
        }
      }
    },
    "ovhcloudconnect.To": {
      "id": "To",
      "namespace": "ovhcloudconnect",
      "description": "OVHcloud Connect email",
      "properties": {
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email address to send the key",
          "required": true
        }
      }
    },
    "ovhcloudconnect.Update": {
      "id": "Update",
      "namespace": "ovhcloudconnect",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "New description for your service",
          "required": false
        }
      }
    },
    "ovhcloudconnect.datacenterExtraConfig.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "ovhcloudconnect.datacenterExtraConfig",
      "description": "Enum values for Datacenter Extra Configuration Type",
      "enum": [
        "bgp",
        "network"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.interface.LightStatusEnum": {
      "id": "LightStatusEnum",
      "namespace": "ovhcloudconnect.interface",
      "description": "Enum values for the light status",
      "enum": [
        "up",
        "down",
        "unknown"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.interface.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "ovhcloudconnect.interface",
      "description": "Enum values for interface status",
      "enum": [
        "enabled",
        "disabled"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.key.ProviderEnum": {
      "id": "ProviderEnum",
      "namespace": "ovhcloudconnect.key",
      "description": "Enum values for service key provider",
      "enum": [
        "megaport",
        "equinix",
        "internal"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.key.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "ovhcloudconnect.key",
      "description": "Enum values for service key status",
      "enum": [
        "doing",
        "active",
        "cancelled",
        "terminated",
        "toCheck"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.messageCode.Enum": {
      "id": "Enum",
      "namespace": "ovhcloudconnect.messageCode",
      "description": "Enum values for messageCode",
      "enum": [
        "mailSent"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.popConfig.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "ovhcloudconnect.popConfig",
      "description": "Enum values for Pop Configuration Status",
      "enum": [
        "init",
        "active",
        "toDelete"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.popConfig.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "ovhcloudconnect.popConfig",
      "description": "Enum values for Pop Configuration Type",
      "enum": [
        "l2",
        "l3"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.service.BandwidthEnum": {
      "id": "BandwidthEnum",
      "namespace": "ovhcloudconnect.service",
      "description": "Enum values for bandwidth",
      "enum": [
        "200m",
        "500m",
        "1g",
        "2g",
        "5g",
        "10g"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.service.PortEnum": {
      "id": "PortEnum",
      "namespace": "ovhcloudconnect.service",
      "description": "Enum values for port quantity",
      "enum": [
        "1",
        "2"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.service.ProviderEnum": {
      "id": "ProviderEnum",
      "namespace": "ovhcloudconnect.service",
      "description": "Enum values for service provider",
      "enum": [
        "megaport",
        "equinix",
        "internal",
        "OVHcloud"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.service.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "ovhcloudconnect.service",
      "description": "Enum values for the Service",
      "enum": [
        "active",
        "closed"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.task.FunctionEnum": {
      "id": "FunctionEnum",
      "namespace": "ovhcloudconnect.task",
      "description": "Enum values for Task function",
      "enum": [
        "lockInterface",
        "unlockInterface",
        "addPopConfiguration",
        "delPopConfiguration",
        "addDatacenterConfiguration",
        "delDatacenterConfiguration",
        "addDatacenterExtraConfiguration",
        "delDatacenterExtraConfiguration"
      ],
      "enumType": "string"
    },
    "ovhcloudconnect.task.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "ovhcloudconnect.task",
      "description": "Enum values for Task status",
      "enum": [
        "todo",
        "doing",
        "done",
        "error"
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