import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/cloud/agreements",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "product",
              "dataType": "cloud.project.ProductNameEnum",
              "paramType": "query",
              "fullType": "cloud.project.ProductNameEnum",
              "required": true,
              "description": "Name of a product supported by cloud projects"
            }
          ],
          "responseType": "cloud.project.ProductAgreements",
          "noAuthentication": false,
          "description": "Get agreements related to a product"
        }
      ],
      "description": "Get agreements related to a product"
    },
    {
      "path": "/cloud/createProject",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-03-01T10:00:00+01:00",
            "deprecatedDate": "2020-02-10T10:00:00+01:00",
            "replacement": "/order/cart/{cartId}/cloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "credit",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Amount of cloud credit to purchase. Unit is base currency."
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Project description"
            },
            {
              "name": "voucher",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": false,
              "description": "Voucher code"
            }
          ],
          "responseType": "cloud.project.NewProject",
          "noAuthentication": false,
          "description": "Start a new cloud project"
        }
      ],
      "description": "Start a new cloud project"
    },
    {
      "path": "/cloud/createProjectInfo",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-03-01T10:00:00+01:00",
            "deprecatedDate": "2020-02-10T10:00:00+01:00",
            "replacement": "/order/cart/{cartId}/cloud"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "voucher",
              "dataType": "password",
              "paramType": "query",
              "fullType": "password",
              "required": false,
              "description": "Voucher code"
            }
          ],
          "responseType": "cloud.project.NewProjectInfo",
          "noAuthentication": false,
          "description": "Get information about a cloud project creation"
        }
      ],
      "description": "Get information about a cloud project creation"
    },
    {
      "path": "/cloud/eligibility",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "voucher",
              "dataType": "password",
              "paramType": "query",
              "fullType": "password",
              "required": false,
              "description": "Voucher code"
            }
          ],
          "responseType": "cloud.project.EligibilityInfo",
          "noAuthentication": false,
          "description": "Check your eligibility to create a Public Cloud order"
        }
      ],
      "description": "Check your eligibility to create a Public Cloud order"
    },
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
      "path": "/cloud/price",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-03-01T00:00:00+01:00",
            "deprecatedDate": "2017-12-25T00:00:00+01:00",
            "replacement": "/order/catalog/formatted/cloud"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Region"
            },
            {
              "name": "flavorId",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "OVH cloud flavor id"
            }
          ],
          "responseType": "cloud.Price",
          "noAuthentication": false,
          "description": "Get services prices"
        }
      ],
      "description": "Get services prices"
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
      "path": "/cloud/project/{serviceName}/acl",
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
              "name": "type",
              "dataType": "cloud.AclTypeEnum",
              "paramType": "query",
              "fullType": "cloud.AclTypeEnum",
              "required": false,
              "description": "Filter the value of type property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get ACL on your cloud project"
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
              "dataType": "cloud.AclTypeEnum",
              "paramType": "body",
              "fullType": "cloud.AclTypeEnum",
              "required": true,
              "description": "Acl type"
            },
            {
              "name": "accountId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Deleguates rights to"
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
          "responseType": "cloud.Acl",
          "noAuthentication": false,
          "description": "Create new ACL"
        }
      ],
      "description": "List the cloud.Acl objects"
    },
    {
      "path": "/cloud/project/{serviceName}/acl/{accountId}",
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
              "name": "accountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete ACL"
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
              "name": "accountId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Account ID"
            }
          ],
          "responseType": "cloud.Acl",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Cloud ACL"
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
      "path": "/cloud/project/{serviceName}/ai/capabilities/serving/flavor",
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
          "responseType": "cloud.project.ai.serving.Flavor[]",
          "noAuthentication": false,
          "description": "List Serving Engine available flavor"
        }
      ],
      "description": "List Serving Engine available flavor"
    },
    {
      "path": "/cloud/project/{serviceName}/ai/capabilities/serving/presetImage",
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
          "responseType": "cloud.project.ai.serving.PresetImage[]",
          "noAuthentication": false,
          "description": "List Serving Engine Preset Model Images"
        }
      ],
      "description": "List Serving Engine Preset Model Images"
    },
    {
      "path": "/cloud/project/{serviceName}/ai/capabilities/serving/region",
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
          "description": "List Serving Engine available regions"
        }
      ],
      "description": "List Serving Engine available regions"
    },
    {
      "path": "/cloud/project/{serviceName}/ai/serving",
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
          "responseType": "cloud.project.ai.serving.Namespace[]",
          "noAuthentication": false,
          "description": "List namespaces of the project"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.project.ai.serving.NamespaceCreation",
              "paramType": "body",
              "fullType": "cloud.project.ai.serving.NamespaceCreation",
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
          "responseType": "cloud.project.ai.serving.Namespace",
          "noAuthentication": false,
          "description": "Create a new namespace"
        }
      ],
      "description": "Manage serving engine namespaces"
    },
    {
      "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}",
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a namespace"
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.Namespace",
          "noAuthentication": false,
          "description": "Get the namespace information"
        }
      ],
      "description": "Manage serving engine namespaces"
    },
    {
      "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/metrics",
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.Metrics",
          "noAuthentication": false,
          "description": "Get metrics token and urls compatible with this token"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/model",
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.Model[]",
          "noAuthentication": false,
          "description": "List models"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.project.ai.serving.ModelDefinition",
              "paramType": "body",
              "fullType": "cloud.project.ai.serving.ModelDefinition",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
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
          "responseType": "cloud.project.ai.serving.Model",
          "noAuthentication": false,
          "description": "Create a new model"
        }
      ],
      "description": "Manage models"
    },
    {
      "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/model/{modelId}",
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
              "name": "modelId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Model ID"
            },
            {
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a model"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
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
              "name": "modelId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Model ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.Model",
          "noAuthentication": false,
          "description": "Get model information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
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
              "name": "modelId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Model ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.Model",
          "noAuthentication": false,
          "description": "Update a model"
        }
      ],
      "description": "Manage models"
    },
    {
      "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/registry",
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Detach the current registry"
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.Registry",
          "noAuthentication": false,
          "description": "Get registry information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.project.ai.serving.Registry",
              "paramType": "body",
              "fullType": "cloud.project.ai.serving.Registry",
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.RegistryResponse",
          "noAuthentication": false,
          "description": "Attach a docker registry"
        }
      ],
      "description": "Attach a registry to your namespace"
    },
    {
      "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/token",
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.Token[]",
          "noAuthentication": false,
          "description": "List tokens"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.project.ai.serving.Token",
              "paramType": "body",
              "fullType": "cloud.project.ai.serving.Token",
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.Token",
          "noAuthentication": false,
          "description": "Create a new token"
        }
      ],
      "description": "Manage tokens"
    },
    {
      "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/token/{tokenId}",
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            },
            {
              "name": "tokenId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Token ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a token"
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            },
            {
              "name": "tokenId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Token ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.Token",
          "noAuthentication": false,
          "description": "Get token information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            },
            {
              "name": "tokenId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Token ID"
            }
          ],
          "responseType": "cloud.project.ai.serving.Token",
          "noAuthentication": false,
          "description": "Renew a new token"
        }
      ],
      "description": "Manage tokens"
    },
    {
      "path": "/cloud/project/{serviceName}/alerting",
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
          "description": "Manage alerts on your consumption"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Email to contact"
            },
            {
              "name": "delay",
              "dataType": "cloud.AlertingDelayEnum",
              "paramType": "body",
              "fullType": "cloud.AlertingDelayEnum",
              "required": true,
              "description": "Delay between alerts in seconds"
            },
            {
              "name": "monthlyThreshold",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Monthly threshold for this alerting in currency"
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
          "responseType": "cloud.Alerting",
          "noAuthentication": false,
          "description": "Add new alert"
        }
      ],
      "description": "List the cloud.Alerting objects"
    },
    {
      "path": "/cloud/project/{serviceName}/alerting/{id}",
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
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete alerting"
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
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "cloud.Alerting",
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
              "dataType": "cloud.Alerting",
              "paramType": "body",
              "fullType": "cloud.Alerting",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Cloud alerting consumption"
    },
    {
      "path": "/cloud/project/{serviceName}/alerting/{id}/alert",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "See alerts"
        }
      ],
      "description": "List the cloud.AlertingAlert objects"
    },
    {
      "path": "/cloud/project/{serviceName}/alerting/{id}/alert/{alertId}",
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
            },
            {
              "name": "alertId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Alert ID"
            }
          ],
          "responseType": "cloud.AlertingAlert",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Cloud alert on your consumption"
    },
    {
      "path": "/cloud/project/{serviceName}/bill",
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
              "name": "to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": true,
              "description": "Get bills to"
            },
            {
              "name": "from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": true,
              "description": "Get bills from"
            }
          ],
          "responseType": "cloud.project.Bill[]",
          "noAuthentication": false,
          "description": "Get your project bills"
        }
      ],
      "description": "bill operations"
    },
    {
      "path": "/cloud/project/{serviceName}/cancel",
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Cancel project creation"
        }
      ],
      "description": "cancel operations"
    },
    {
      "path": "/cloud/project/{serviceName}/capabilities/containerRegistry",
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
          "responseType": "cloud.containerRegistry.Capability[]",
          "noAuthentication": false,
          "description": "List container registry capabilities per region"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/capabilities/kube/flavors",
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
              "dataType": "cloud.kube.RegionEnum",
              "paramType": "query",
              "fullType": "cloud.kube.RegionEnum",
              "required": false,
              "description": "The region to list available flavors from"
            }
          ],
          "responseType": "cloud.kube.Flavor[]",
          "noAuthentication": false,
          "description": "List Kubernetes available flavors for a region"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/capabilities/kube/regions",
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
          "responseType": "cloud.kube.RegionEnum[]",
          "noAuthentication": false,
          "description": "List Kubernetes available regions"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/capabilities/loadbalancer/region",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List all available regions"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/capabilities/loadbalancer/region/{regionName}",
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
          "responseType": "cloud.project.loadbalancer.Region",
          "noAuthentication": false,
          "description": "Get specific information of a region"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
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
              "name": "contactBilling",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as billing contact"
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
      "path": "/cloud/project/{serviceName}/consumption",
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
              "name": "from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": true,
              "description": "Get usage from"
            },
            {
              "name": "to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": true,
              "description": "Get usage to"
            }
          ],
          "responseType": "cloud.project.ProjectUsage",
          "noAuthentication": false,
          "description": "Get your project consumption"
        }
      ],
      "description": "consumption operations"
    },
    {
      "path": "/cloud/project/{serviceName}/containerRegistry",
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
          "responseType": "cloud.containerRegistry.Registry[]",
          "noAuthentication": false,
          "description": "List registries of the project"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectContainerRegistryCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectContainerRegistryCreation",
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
          "responseType": "cloud.containerRegistry.Registry",
          "noAuthentication": false,
          "description": "Create a new registry"
        }
      ],
      "description": "Manage registries"
    },
    {
      "path": "/cloud/project/{serviceName}/containerRegistry/{registryID}",
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
              "name": "registryID",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "RegistryID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a registry"
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
              "name": "registryID",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "RegistryID"
            }
          ],
          "responseType": "cloud.containerRegistry.Registry",
          "noAuthentication": false,
          "description": "Get the registry information"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.ProjectContainerRegistryUpdate",
              "paramType": "body",
              "fullType": "cloud.ProjectContainerRegistryUpdate",
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
              "name": "registryID",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "RegistryID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Update the registry"
        }
      ],
      "description": "Manage registries"
    },
    {
      "path": "/cloud/project/{serviceName}/containerRegistry/{registryID}/capabilities/plan",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "registryID",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "RegistryID"
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
          "responseType": "cloud.containerRegistry.Plan[]",
          "noAuthentication": false,
          "description": "Get available plans for the current registry."
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/containerRegistry/{registryID}/plan",
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
              "name": "registryID",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "RegistryID"
            }
          ],
          "responseType": "cloud.containerRegistry.Plan",
          "noAuthentication": false,
          "description": "Show the actual plan of the registry."
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.containerRegistry.PlanUpdate",
              "paramType": "body",
              "fullType": "cloud.containerRegistry.PlanUpdate",
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
              "name": "registryID",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "RegistryID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Update the plan of a registry."
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/containerRegistry/{registryID}/users",
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
              "name": "registryID",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "RegistryID"
            }
          ],
          "responseType": "cloud.containerRegistry.User[]",
          "noAuthentication": false,
          "description": "List registry user"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectContainerRegistryUsersCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectContainerRegistryUsersCreation",
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
              "name": "registryID",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "RegistryID"
            }
          ],
          "responseType": "cloud.containerRegistry.User",
          "noAuthentication": false,
          "description": "Create a new registry user"
        }
      ],
      "description": "Manage users"
    },
    {
      "path": "/cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}",
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
              "name": "registryID",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "RegistryID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a registry user"
        }
      ],
      "description": "Manage users"
    },
    {
      "path": "/cloud/project/{serviceName}/credit",
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
          "description": "Get your credit"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Voucher code"
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
          "description": "Add credit to your project"
        }
      ],
      "description": "List the cloud.Credit objects"
    },
    {
      "path": "/cloud/project/{serviceName}/credit/{id}",
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
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "cloud.Credit",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Cloud credit"
    },
    {
      "path": "/cloud/project/{serviceName}/dataProcessing/authorization",
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
          "responseType": "cloud.project.dataProcessing.AuthorizationStatus",
          "noAuthentication": false,
          "description": "Get authorization status"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Authorization of Data Processing service by allowing access to your object storage containers"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/dataProcessing/capabilities",
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
          "responseType": "cloud.project.dataProcessing.Capability[]",
          "noAuthentication": false,
          "description": "Data processing capabilities"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/dataProcessing/jobs",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List all jobs"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.project.dataProcessing.Job",
              "paramType": "body",
              "fullType": "cloud.project.dataProcessing.Job",
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
          "responseType": "cloud.project.dataProcessing.Job",
          "noAuthentication": false,
          "description": "Submit a job"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/dataProcessing/jobs/{jobId}",
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
              "name": "jobId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Job ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Kill job with given id"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "jobId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Job ID"
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
          "responseType": "cloud.project.dataProcessing.Job",
          "noAuthentication": false,
          "description": "Get jobs information"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/dataProcessing/jobs/{jobId}/logs",
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
              "name": "jobId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Job ID"
            },
            {
              "name": "from",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "From how long ago we want logs. Example: from=now-2h. Or since when we want the logs. Example: 2019-10-28T12:00:00.000 (must be UTC)."
            }
          ],
          "responseType": "cloud.project.dataProcessing.JobLogs",
          "noAuthentication": false,
          "description": "Get the logs of a job"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/dataProcessing/metrics",
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
          "responseType": "cloud.project.dataProcessing.Metrics",
          "noAuthentication": false,
          "description": "Get metrics token and urls compatible with this token"
        }
      ],
      "description": ""
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
      "path": "/cloud/project/{serviceName}/forecast",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-04T10:00:00+01:00",
            "deprecatedDate": "2019-11-04T10:00:00+01:00",
            "replacement": "/cloud/project/{serviceName}/usage/forecast"
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
              "name": "toDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": true,
              "description": "Forecast until date"
            }
          ],
          "responseType": "cloud.forecast.ProjectForecast",
          "noAuthentication": false,
          "description": "Get your consumption forecast"
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
              "name": "interfaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Interface ID"
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
          "responseType": "cloud.instance.InstanceVnc",
          "noAuthentication": false,
          "description": "Get VNC access to your instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/io/capabilities/stream/region",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List all available regions"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/io/capabilities/stream/region/{regionName}",
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
          "responseType": "cloud.project.io.stream.Region",
          "noAuthentication": false,
          "description": "Get connection information from a region"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/io/stream",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List all stream for a tenant"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.project.io.StreamCreation",
              "paramType": "body",
              "fullType": "cloud.project.io.StreamCreation",
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
          "responseType": "cloud.project.io.Stream",
          "noAuthentication": false,
          "description": "Create a stream"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/io/stream/{streamId}",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a stream"
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "cloud.project.io.Stream",
          "noAuthentication": false,
          "description": "Get a stream"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.project.io.Stream",
              "paramType": "body",
              "fullType": "cloud.project.io.Stream",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "cloud.project.io.Stream",
          "noAuthentication": false,
          "description": "Update a stream"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/io/stream/{streamId}/stats",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
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
          "responseType": "cloud.project.io.StreamStats",
          "noAuthentication": false,
          "description": "Retrieve statistics of the stream"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/io/stream/{streamId}/subscription",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List all subscriptions for a stream"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.project.io.stream.SubscriptionCreation",
              "paramType": "body",
              "fullType": "cloud.project.io.stream.SubscriptionCreation",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "cloud.project.io.stream.Subscription",
          "noAuthentication": false,
          "description": "Create a new subscription"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            },
            {
              "name": "subscriptionId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Subscription ID"
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
          "description": "Delete a subscription"
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            },
            {
              "name": "subscriptionId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Subscription ID"
            }
          ],
          "responseType": "cloud.project.io.stream.Subscription",
          "noAuthentication": false,
          "description": "Get a subscription"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}/resetCursor",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            },
            {
              "name": "subscriptionId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Subscription ID"
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
          "description": "Reset a cursor"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}/stats",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "subscriptionId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Subscription ID"
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "cloud.project.io.stream.SubscriptionStats",
          "noAuthentication": false,
          "description": "Retrieve statistics of the subscription"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/io/stream/{streamId}/token",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List all tokens for a stream"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.project.io.stream.TokenCreation",
              "paramType": "body",
              "fullType": "cloud.project.io.stream.TokenCreation",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "cloud.project.io.stream.Token",
          "noAuthentication": false,
          "description": "Create a token"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/io/stream/{streamId}/token/{tokenId}",
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            },
            {
              "name": "tokenId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Token ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a token"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "tokenId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Token ID"
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
              "name": "streamId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Stream ID"
            }
          ],
          "responseType": "cloud.project.io.stream.Token",
          "noAuthentication": false,
          "description": "Get token"
        }
      ],
      "description": ""
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
      "path": "/cloud/project/{serviceName}/kube",
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
          "description": "List your managed Kubernetes clusters"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectKubeCreation",
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
          "responseType": "cloud.kube.Cluster",
          "noAuthentication": false,
          "description": "Create a new managed Kubernetes cluster"
        }
      ],
      "description": "Manage your clusters"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/regions",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-10-01T00:00:00+00:00",
            "deprecatedDate": "2020-06-10T00:00:00+00:00",
            "replacement": "/cloud/project/{serviceName}/capabilities/kube/regions"
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
          "responseType": "cloud.kube.RegionEnum[]",
          "noAuthentication": false,
          "description": "List Kubernetes available regions"
        }
      ],
      "description": "List Kubernetes available regions"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
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
          "description": "Delete your managed Kubernetes cluster"
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            }
          ],
          "responseType": "cloud.kube.Cluster",
          "noAuthentication": false,
          "description": "Get information about your managed Kubernetes cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeUpdate",
              "paramType": "body",
              "fullType": "cloud.ProjectKubeUpdate",
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Update information about your managed Kubernetes cluster"
        }
      ],
      "description": "Manage your clusters"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/flavors",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
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
          "responseType": "cloud.kube.Flavor[]",
          "noAuthentication": false,
          "description": "List all flavors available"
        }
      ],
      "description": "List all flavors available"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/kubeconfig",
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            }
          ],
          "responseType": "cloud.kube.Kubeconfig",
          "noAuthentication": false,
          "description": "Generate kubeconfig file"
        }
      ],
      "description": "Get your cluster configuration"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/kubeconfig/reset",
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Reset kubeconfig: Certificates will be regenerated, nodes will be reinstalled"
        }
      ],
      "description": "Reset your cluster's kubeconfig"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/node",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
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
          "responseType": "cloud.kube.Node[]",
          "noAuthentication": false,
          "description": "List your nodes"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2020-10-01T00:00:00+00:00",
            "deprecatedDate": "2020-07-01T00:00:00+00:00",
            "replacement": "/cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeNodeCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectKubeNodeCreation",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
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
          "responseType": "cloud.kube.Node",
          "noAuthentication": false,
          "description": "Deploy a node for your cluster. This call is deprecated. In the meantime it will create a new node pool for each call. We encourage you to now either create a new nodepool or change the size on an existing one"
        }
      ],
      "description": "Manage your nodes"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "nodeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Node ID"
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a specific node on your cluster. This will also decrease by one the desirednodes value of its nodepool"
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            },
            {
              "name": "nodeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Node ID"
            }
          ],
          "responseType": "cloud.kube.Node",
          "noAuthentication": false,
          "description": "Get information on a specific node on your cluster"
        }
      ],
      "description": "Manage your nodes"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/nodepool",
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            }
          ],
          "responseType": "cloud.kube.NodePool[]",
          "noAuthentication": false,
          "description": "List your nodepools"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeNodePoolCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectKubeNodePoolCreation",
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            }
          ],
          "responseType": "cloud.kube.NodePool",
          "noAuthentication": false,
          "description": "Create a nodepool on your cluster"
        }
      ],
      "description": "Manage your nodepools"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}",
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            },
            {
              "name": "nodePoolId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Node pool ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a nodepool from your cluster"
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            },
            {
              "name": "nodePoolId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Node pool ID"
            }
          ],
          "responseType": "cloud.kube.NodePool",
          "noAuthentication": false,
          "description": "Get information on a specific nodepool on your cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeNodePoolUpdate",
              "paramType": "body",
              "fullType": "cloud.ProjectKubeNodePoolUpdate",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "nodePoolId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Node pool ID"
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Update your nodepool (quota or size)"
        }
      ],
      "description": "Manage your nodepools"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}/nodes",
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            },
            {
              "name": "nodePoolId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Node pool ID"
            }
          ],
          "responseType": "cloud.kube.Node[]",
          "noAuthentication": false,
          "description": "List all nodes contained in a nodepool"
        }
      ],
      "description": "List nodes"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/reset",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeResetCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectKubeResetCreation",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
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
          "description": "Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled"
        }
      ],
      "description": "Reset your cluster"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/update",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeUpdateCreation",
              "paramType": "body",
              "fullType": "cloud.ProjectKubeUpdateCreation",
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Force cluster and node update to the latest patch within minor version or next minor version"
        }
      ],
      "description": "Update cluster"
    },
    {
      "path": "/cloud/project/{serviceName}/kube/{kubeId}/updatePolicy",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.ProjectKubeUpdatePolicyUpdate",
              "paramType": "body",
              "fullType": "cloud.ProjectKubeUpdatePolicyUpdate",
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
              "name": "kubeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Kube ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Change the update policy of your cluster"
        }
      ],
      "description": "Manage the update policy of your cluster"
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
          "responseType": "cloud.LabAgreements",
          "noAuthentication": false,
          "description": "List required agreements to active this lab"
        }
      ],
      "description": "Manage lab agreements"
    },
    {
      "path": "/cloud/project/{serviceName}/loadbalancer",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "listLoadBalancers",
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
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List all load balancer for a tenant"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "createLoadBalancer",
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.project.LoadBalancerCreation",
              "paramType": "body",
              "fullType": "cloud.project.LoadBalancerCreation",
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
          "responseType": "cloud.project.LoadBalancer",
          "noAuthentication": false,
          "description": "Create a load balancer"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/loadbalancer/{loadBalancerId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "deleteLoadBalancer",
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
              "name": "loadBalancerId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Load balancer ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a load balancer"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "getLoadBalancer",
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
              "name": "loadBalancerId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Load balancer ID"
            }
          ],
          "responseType": "cloud.project.LoadBalancer",
          "noAuthentication": false,
          "description": "Get a load balancer"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "updateLoadBalancer",
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cloud.project.LoadBalancer",
              "paramType": "body",
              "fullType": "cloud.project.LoadBalancer",
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
              "name": "loadBalancerId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Load balancer ID"
            }
          ],
          "responseType": "cloud.project.LoadBalancer",
          "noAuthentication": false,
          "description": "Update a load balancer"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "listLoadBalancerConfigurations",
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "loadBalancerId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Load balancer ID"
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
          "description": "List all versions of the configuration"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "createLoadBalancerConfiguration",
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "cloud.project.loadbalancer.ConfigurationCreation",
              "paramType": "body",
              "fullType": "cloud.project.loadbalancer.ConfigurationCreation",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "loadBalancerId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Load balancer ID"
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
          "responseType": "cloud.project.loadbalancer.Configuration",
          "noAuthentication": false,
          "description": "Create a configuration"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration/{version}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "deleteLoadBalancerConfiguration",
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "loadBalancerId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Load balancer ID"
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
              "name": "version",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Version"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a configuration"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "getLoadBalancerConfiguration",
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
              "name": "version",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Version"
            },
            {
              "name": "loadBalancerId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Load balancer ID"
            }
          ],
          "responseType": "cloud.project.loadbalancer.Configuration",
          "noAuthentication": false,
          "description": "Get a configuration"
        }
      ],
      "description": ""
    },
    {
      "path": "/cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration/{version}/apply",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "operationId": "applyLoadBalancerConfiguration",
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Version"
            },
            {
              "name": "loadBalancerId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Load balancer ID"
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
          "responseType": "cloud.project.loadbalancer.Configuration",
          "noAuthentication": false,
          "description": "Apply a configuration"
        }
      ],
      "description": ""
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "migrationId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Migration ID"
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
              "dataType": "cloud.ProjectMigrationUpdate",
              "paramType": "body",
              "fullType": "cloud.ProjectMigrationUpdate",
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
              "name": "migrationId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Migration ID"
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
              "name": "backupWorkflowId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Backup workflow ID"
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
      "path": "/cloud/project/{serviceName}/retain",
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Do not expire the project, and retain it. You will have to pay for the resources you will use after using this call"
        }
      ],
      "description": "retain operations"
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
              "name": "imageId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Image ID"
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
      "path": "/cloud/project/{serviceName}/unleash",
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Request more quota on your /cloud project"
        }
      ],
      "description": "unleash operations"
    },
    {
      "path": "/cloud/project/{serviceName}/usage/current",
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
          "responseType": "cloud.usage.UsageCurrent",
          "noAuthentication": false,
          "description": "Get current usage"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/usage/forecast",
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
          "responseType": "cloud.usage.UsageForecast",
          "noAuthentication": false,
          "description": "Get usage forecast"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/usage/history",
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
              "name": "from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter results having date superior to from"
            },
            {
              "name": "to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter results having date inferior to"
            }
          ],
          "responseType": "cloud.usage.UsageHistory[]",
          "noAuthentication": false,
          "description": "Usage information details"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/cloud/project/{serviceName}/usage/history/{usageId}",
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
              "name": "usageId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Usage ID"
            }
          ],
          "responseType": "cloud.usage.UsageHistoryDetail",
          "noAuthentication": false,
          "description": "Usage information details"
        }
      ],
      "description": "Missing description"
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
              "name": "userId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "User ID"
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
              "name": "volumeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume ID"
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
              "name": "volumeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Volume ID"
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
    },
    {
      "path": "/cloud/subsidiaryPrice",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "region",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Region"
            },
            {
              "name": "flavorId",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "OVH cloud flavor id"
            },
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "OVH subsidiary"
            }
          ],
          "responseType": "cloud.Price",
          "noAuthentication": true,
          "description": "Get services prices for a subsidiary"
        }
      ],
      "description": "Get services prices for a subsidiary"
    }
  ],
  "resourcePath": "/cloud",
  "basePath": "https://eu.api.ovh.com/1.0",
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
    "cloud.Acl": {
      "id": "Acl",
      "namespace": "cloud",
      "description": "Cloud ACL",
      "properties": {
        "accountId": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "description": "OVH customer unique identifier",
          "required": true
        },
        "type": {
          "type": "cloud.AclTypeEnum",
          "fullType": "cloud.AclTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "ACL type",
          "required": true
        }
      }
    },
    "cloud.AclTypeEnum": {
      "id": "AclTypeEnum",
      "namespace": "cloud",
      "description": "Possible values for ACL type",
      "enum": [
        "readOnly",
        "readWrite"
      ],
      "enumType": "string"
    },
    "cloud.Alerting": {
      "id": "Alerting",
      "namespace": "cloud",
      "description": "Cloud alerting consumption",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Alerting creation date",
          "required": true
        },
        "delay": {
          "type": "cloud.AlertingDelayEnum",
          "fullType": "cloud.AlertingDelayEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Delay between alerts in seconds",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email to contact",
          "required": true
        },
        "formattedMonthlyThreshold": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Formatted monthly threshold for this alerting",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Alerting unique UUID",
          "required": true
        },
        "monthlyThreshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Monthly threshold for this alerting",
          "required": true
        }
      }
    },
    "cloud.AlertingAlert": {
      "id": "AlertingAlert",
      "namespace": "cloud",
      "description": "Cloud alert on your consumption",
      "properties": {
        "alertDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Alert date",
          "required": true
        },
        "alertId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Alert id",
          "required": true
        },
        "emails": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Alert sent to",
          "required": true
        }
      }
    },
    "cloud.AlertingDelayEnum": {
      "id": "AlertingDelayEnum",
      "namespace": "cloud",
      "description": "Possible values for delay between two alerts in seconds",
      "enum": [
        "10800",
        "172800",
        "21600",
        "259200",
        "3600",
        "43200",
        "604800",
        "86400"
      ],
      "enumType": "long"
    },
    "cloud.ArchiveStoragePrice": {
      "id": "ArchiveStoragePrice",
      "namespace": "cloud",
      "description": "Details about archive storage pricing",
      "properties": {
        "monthlyPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Monthly archive storage price (for 1GB stored per month)",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Archive region",
          "required": true
        }
      }
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
    "cloud.BandwidthStoragePrice": {
      "id": "BandwidthStoragePrice",
      "namespace": "cloud",
      "description": "Details about bandwidth storage pricing",
      "properties": {
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Bandwidth storage price (for 1GB)",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Bandwidth storage region",
          "required": true
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
    "cloud.Credit": {
      "id": "Credit",
      "namespace": "cloud",
      "description": "Cloud credit",
      "properties": {
        "available_credit": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Available credit",
          "required": true
        },
        "bill": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Credit bill id",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Credit description",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Credit id",
          "required": true
        },
        "products": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Use credits on following products",
          "required": false
        },
        "total_credit": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total credit",
          "required": true
        },
        "used_credit": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Used credit",
          "required": true
        },
        "validity": {
          "type": "cloud.common.VoucherValidity",
          "fullType": "cloud.common.VoucherValidity",
          "canBeNull": true,
          "readOnly": true,
          "description": "Credit validity",
          "required": false
        },
        "voucher": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Voucher code",
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
    "cloud.FlavorPrice": {
      "id": "FlavorPrice",
      "namespace": "cloud",
      "description": "Details about flavor pricing",
      "properties": {
        "flavorId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Flavor id",
          "required": true
        },
        "flavorName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Flavor name",
          "required": true
        },
        "monthlyPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "description": "Monthly flavor price",
          "required": false
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hourly flavor price",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Flavor region",
          "required": true
        }
      }
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
    "cloud.Price": {
      "id": "Price",
      "namespace": "cloud",
      "description": "A structure defining prices for cloud services",
      "properties": {
        "archive": {
          "type": "cloud.ArchiveStoragePrice[]",
          "fullType": "cloud.ArchiveStoragePrice[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price for archive storage",
          "required": true
        },
        "bandwidthArchiveIn": {
          "type": "cloud.BandwidthStoragePrice[]",
          "fullType": "cloud.BandwidthStoragePrice[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price for incoming bandwidth on archive storage",
          "required": true
        },
        "bandwidthArchiveOut": {
          "type": "cloud.BandwidthStoragePrice[]",
          "fullType": "cloud.BandwidthStoragePrice[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price for outgoing bandwidth on archive storage",
          "required": true
        },
        "bandwidthStorage": {
          "type": "cloud.BandwidthStoragePrice[]",
          "fullType": "cloud.BandwidthStoragePrice[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price for bandwidth storage",
          "required": true
        },
        "instances": {
          "type": "cloud.FlavorPrice[]",
          "fullType": "cloud.FlavorPrice[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "projectCreation": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price for project creation",
          "required": true
        },
        "snapshots": {
          "type": "cloud.SnapshotPrice[]",
          "fullType": "cloud.SnapshotPrice[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Prices for snapshots",
          "required": true
        },
        "storage": {
          "type": "cloud.StoragePrice[]",
          "fullType": "cloud.StoragePrice[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price for storage",
          "required": true
        },
        "volumes": {
          "type": "cloud.VolumePrice[]",
          "fullType": "cloud.VolumePrice[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Prices for volumes",
          "required": true
        }
      }
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
    "cloud.ProjectContainerRegistryCreation": {
      "id": "ProjectContainerRegistryCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the new registry",
          "required": true
        },
        "planID": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "ID of the plan to use for the new registry",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region where to deploy the registry.  Get available regions with /cloud/project/{serviceName}/capabilities/containerRegistry.",
          "required": true
        }
      }
    },
    "cloud.ProjectContainerRegistryUpdate": {
      "id": "ProjectContainerRegistryUpdate",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "New registry name",
          "required": true
        }
      }
    },
    "cloud.ProjectContainerRegistryUsersCreation": {
      "id": "ProjectContainerRegistryUsersCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "New user email",
          "required": false
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "New user login",
          "required": false
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
    "cloud.ProjectKubeCreation": {
      "id": "ProjectKubeCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Kubernetes cluster name",
          "required": false
        },
        "nodepool": {
          "type": "cloud.ProjectKubeCreationNodePool",
          "fullType": "cloud.ProjectKubeCreationNodePool",
          "canBeNull": true,
          "readOnly": false,
          "description": "Nodepool to init with cluster creation (this facultative parameter is experimental)",
          "required": false
        },
        "region": {
          "type": "cloud.kube.ClusterCreationRegionEnum",
          "fullType": "cloud.kube.ClusterCreationRegionEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Kubernetes region",
          "required": true
        },
        "version": {
          "type": "cloud.kube.VersionEnum",
          "fullType": "cloud.kube.VersionEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Kubernetes version to install",
          "required": false
        }
      }
    },
    "cloud.ProjectKubeCreationNodePool": {
      "id": "ProjectKubeCreationNodePool",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "desiredNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of nodes to instantiate (1 by default)",
          "required": false
        },
        "flavorName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Nodes flavor",
          "required": false
        },
        "maxNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Higher limit you accept for the desiredNodes value (100 by default)",
          "required": false
        },
        "minNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Lower limit you accept for the desiredNodes value (0 by default)",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "NodePool name",
          "required": false
        }
      }
    },
    "cloud.ProjectKubeNodeCreation": {
      "id": "ProjectKubeNodeCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "flavorName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Flavor name",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Node name",
          "required": false
        }
      }
    },
    "cloud.ProjectKubeNodePoolCreation": {
      "id": "ProjectKubeNodePoolCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "desiredNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of nodes to instantiate (1 by default)",
          "required": false
        },
        "flavorName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Nodes flavor",
          "required": true
        },
        "maxNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Higher limit you accept for the desiredNodes value (100 by default)",
          "required": false
        },
        "minNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Lower limit you accept for the desiredNodes value (0 by default)",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "NodePool name",
          "required": false
        }
      }
    },
    "cloud.ProjectKubeNodePoolUpdate": {
      "id": "ProjectKubeNodePoolUpdate",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "desiredNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "New number of nodes wanted in the nodepool",
          "required": false
        },
        "maxNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "New maximal number of nodes wanted in the nodepool",
          "required": false
        },
        "minNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "New minimal number of nodes wanted in the nodepool",
          "required": false
        }
      }
    },
    "cloud.ProjectKubeResetCreation": {
      "id": "ProjectKubeResetCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "version": {
          "type": "cloud.kube.VersionEnum",
          "fullType": "cloud.kube.VersionEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Kubernetes version to use after reset, by default it keeps the current version",
          "required": false
        },
        "workerNodesPolicy": {
          "type": "cloud.kube.ResetWorkerNodesPolicyEnum",
          "fullType": "cloud.kube.ResetWorkerNodesPolicyEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Worker nodes reset policy, default is delete",
          "required": false
        }
      }
    },
    "cloud.ProjectKubeUpdate": {
      "id": "ProjectKubeUpdate",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cluster new name",
          "required": true
        }
      }
    },
    "cloud.ProjectKubeUpdateCreation": {
      "id": "ProjectKubeUpdateCreation",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "strategy": {
          "type": "cloud.kube.UpdateStrategyEnum",
          "fullType": "cloud.kube.UpdateStrategyEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "The update strategy to apply on your service (next patch or minor version)",
          "required": false
        }
      }
    },
    "cloud.ProjectKubeUpdatePolicyUpdate": {
      "id": "ProjectKubeUpdatePolicyUpdate",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "updatePolicy": {
          "type": "cloud.kube.UpdatePolicyEnum",
          "fullType": "cloud.kube.UpdatePolicyEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Update policy",
          "required": true
        }
      }
    },
    "cloud.ProjectMigrationUpdate": {
      "id": "ProjectMigrationUpdate",
      "namespace": "cloud",
      "description": "Missing description",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Migration date (RFC3339)",
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
    "cloud.SnapshotPrice": {
      "id": "SnapshotPrice",
      "namespace": "cloud",
      "description": "Details about snapshot pricing",
      "properties": {
        "monthlyPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Monthly flavor price (for 1GB per month)",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hourly snapshot price (for 1GB per hour)",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Snapshot region",
          "required": true
        }
      }
    },
    "cloud.StoragePrice": {
      "id": "StoragePrice",
      "namespace": "cloud",
      "description": "Details about storage pricing",
      "properties": {
        "monthlyPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Monthly storage price (for 1GB stored per month)",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hourly storage price (for 1GB stored per hour)",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Storage region",
          "required": true
        }
      }
    },
    "cloud.VolumePrice": {
      "id": "VolumePrice",
      "namespace": "cloud",
      "description": "Details about volume pricing",
      "properties": {
        "monthlyPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Monthly volume price (for 1GB per month)",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hourly volume price (for 1GB per hour)",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volume region",
          "required": true
        },
        "volumeName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volume name",
          "required": true
        }
      }
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
    "cloud.billingView.BandwidthInstance": {
      "id": "BandwidthInstance",
      "namespace": "cloud.billingView",
      "description": "BandwidthInstance",
      "properties": {
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total bandwidth in GiB",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.BandwidthStorage": {
      "id": "BandwidthStorage",
      "namespace": "cloud.billingView",
      "description": "BandwidthStorage",
      "properties": {
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total bandwidth in GiB",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.Component": {
      "id": "Component",
      "namespace": "cloud.billingView",
      "description": "Component",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the component",
          "required": false
        },
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total quantity for the component",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price for this component",
          "required": false
        }
      }
    },
    "cloud.billingView.HourlyInstance": {
      "id": "HourlyInstance",
      "namespace": "cloud.billingView",
      "description": "HourlyInstance",
      "properties": {
        "details": {
          "type": "cloud.billingView.HourlyInstanceDetail[]",
          "fullType": "cloud.billingView.HourlyInstanceDetail[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about hourly instances",
          "required": false
        },
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hours of run instances",
          "required": false
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance reference",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance region",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.HourlyInstanceBandwidth": {
      "id": "HourlyInstanceBandwidth",
      "namespace": "cloud.billingView",
      "description": "HourlyInstanceBandwidth",
      "properties": {
        "incomingBandwidth": {
          "type": "cloud.billingView.BandwidthInstance",
          "fullType": "cloud.billingView.BandwidthInstance",
          "canBeNull": true,
          "readOnly": true,
          "description": "Instance incoming bandwidth details",
          "required": false
        },
        "outgoingBandwidth": {
          "type": "cloud.billingView.BandwidthInstance",
          "fullType": "cloud.billingView.BandwidthInstance",
          "canBeNull": true,
          "readOnly": true,
          "description": "Instance outgoing bandwidth details",
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
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.HourlyInstanceDetail": {
      "id": "HourlyInstanceDetail",
      "namespace": "cloud.billingView",
      "description": "HourlyInstanceDetail",
      "properties": {
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance ID",
          "required": false
        },
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hours of run instances",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.HourlyInstanceOption": {
      "id": "HourlyInstanceOption",
      "namespace": "cloud.billingView",
      "description": "HourlyInstanceOption",
      "properties": {
        "details": {
          "type": "cloud.billingView.HourlyInstanceOptionDetail[]",
          "fullType": "cloud.billingView.HourlyInstanceOptionDetail[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about hourly instances option",
          "required": false
        },
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quantity of instance hours running with this option",
          "required": false
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance reference",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance region",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.HourlyInstanceOptionDetail": {
      "id": "HourlyInstanceOptionDetail",
      "namespace": "cloud.billingView",
      "description": "HourlyInstanceOptionDetail",
      "properties": {
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance ID",
          "required": false
        },
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quantity of instance hours running with this option",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.HourlyResources": {
      "id": "HourlyResources",
      "namespace": "cloud.billingView",
      "description": "HourlyResources",
      "properties": {
        "instance": {
          "type": "cloud.billingView.HourlyInstance[]",
          "fullType": "cloud.billingView.HourlyInstance[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about hourly instances",
          "required": false
        },
        "instanceBandwidth": {
          "type": "cloud.billingView.HourlyInstanceBandwidth[]",
          "fullType": "cloud.billingView.HourlyInstanceBandwidth[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about instances bandwidth consumption",
          "required": false
        },
        "instanceOption": {
          "type": "cloud.billingView.HourlyInstanceOption[]",
          "fullType": "cloud.billingView.HourlyInstanceOption[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about hourly instances options",
          "required": false
        },
        "snapshot": {
          "type": "cloud.billingView.HourlySnapshot[]",
          "fullType": "cloud.billingView.HourlySnapshot[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about hourly snapshots",
          "required": false
        },
        "storage": {
          "type": "cloud.billingView.HourlyStorage[]",
          "fullType": "cloud.billingView.HourlyStorage[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about hourly storage",
          "required": false
        },
        "volume": {
          "type": "cloud.billingView.HourlyVolume[]",
          "fullType": "cloud.billingView.HourlyVolume[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about hourly volumes",
          "required": false
        }
      }
    },
    "cloud.billingView.HourlySnapshot": {
      "id": "HourlySnapshot",
      "namespace": "cloud.billingView",
      "description": "HourlySnapshot",
      "properties": {
        "instance": {
          "type": "cloud.billingView.InstanceSnapshot",
          "fullType": "cloud.billingView.InstanceSnapshot",
          "canBeNull": true,
          "readOnly": true,
          "description": "Instance snapshot details",
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
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        },
        "volume": {
          "type": "cloud.billingView.VolumeSnapshot",
          "fullType": "cloud.billingView.VolumeSnapshot",
          "canBeNull": true,
          "readOnly": true,
          "description": "Volume snapshot details",
          "required": false
        }
      }
    },
    "cloud.billingView.HourlyStorage": {
      "id": "HourlyStorage",
      "namespace": "cloud.billingView",
      "description": "HourlyStorage",
      "properties": {
        "incomingBandwidth": {
          "type": "cloud.billingView.BandwidthStorage",
          "fullType": "cloud.billingView.BandwidthStorage",
          "canBeNull": true,
          "readOnly": true,
          "description": "Storage incoming bandwidth details",
          "required": false
        },
        "outgoingBandwidth": {
          "type": "cloud.billingView.BandwidthStorage",
          "fullType": "cloud.billingView.BandwidthStorage",
          "canBeNull": true,
          "readOnly": true,
          "description": "Storage outgoing bandwidth details",
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
        "stored": {
          "type": "cloud.billingView.StoredStorage",
          "fullType": "cloud.billingView.StoredStorage",
          "canBeNull": true,
          "readOnly": true,
          "description": "Information about stored data",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        },
        "type": {
          "type": "cloud.billingView.StorageTypeEnum",
          "fullType": "cloud.billingView.StorageTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Storage type",
          "required": false
        }
      }
    },
    "cloud.billingView.HourlyVolume": {
      "id": "HourlyVolume",
      "namespace": "cloud.billingView",
      "description": "HourlyVolume",
      "properties": {
        "details": {
          "type": "cloud.billingView.HourlyVolumeDetail[]",
          "fullType": "cloud.billingView.HourlyVolumeDetail[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Detail about volume consumption",
          "required": false
        },
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total GiBh of volume",
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
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume type",
          "required": false
        }
      }
    },
    "cloud.billingView.HourlyVolumeDetail": {
      "id": "HourlyVolumeDetail",
      "namespace": "cloud.billingView",
      "description": "HourlyVolumeDetail",
      "properties": {
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "GiBh of volume",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        },
        "volumeId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Volume ID",
          "required": false
        }
      }
    },
    "cloud.billingView.InstanceSnapshot": {
      "id": "InstanceSnapshot",
      "namespace": "cloud.billingView",
      "description": "InstanceSnapshot",
      "properties": {
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "GiBh stored",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.MonthlyInstance": {
      "id": "MonthlyInstance",
      "namespace": "cloud.billingView",
      "description": "MonthlyInstance",
      "properties": {
        "details": {
          "type": "cloud.billingView.MonthlyInstanceDetail[]",
          "fullType": "cloud.billingView.MonthlyInstanceDetail[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about monthly instances",
          "required": false
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance reference",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance region",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.MonthlyInstanceDetail": {
      "id": "MonthlyInstanceDetail",
      "namespace": "cloud.billingView",
      "description": "MonthlyInstanceDetail",
      "properties": {
        "activation": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Monthly instance activation",
          "required": false
        },
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance ID",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.MonthlyInstanceOption": {
      "id": "MonthlyInstanceOption",
      "namespace": "cloud.billingView",
      "description": "MonthlyInstanceOption",
      "properties": {
        "details": {
          "type": "cloud.billingView.MonthlyInstanceOptionDetail[]",
          "fullType": "cloud.billingView.MonthlyInstanceOptionDetail[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about monthly instances",
          "required": false
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance reference",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance region",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.MonthlyInstanceOptionDetail": {
      "id": "MonthlyInstanceOptionDetail",
      "namespace": "cloud.billingView",
      "description": "MonthlyInstanceOptionDetail",
      "properties": {
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Instance ID",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.MonthlyResources": {
      "id": "MonthlyResources",
      "namespace": "cloud.billingView",
      "description": "MonthlyResources",
      "properties": {
        "instance": {
          "type": "cloud.billingView.MonthlyInstance[]",
          "fullType": "cloud.billingView.MonthlyInstance[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about monthly instances",
          "required": false
        },
        "instanceOption": {
          "type": "cloud.billingView.MonthlyInstanceOption[]",
          "fullType": "cloud.billingView.MonthlyInstanceOption[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about monthly instances options",
          "required": false
        }
      }
    },
    "cloud.billingView.Quantity": {
      "id": "Quantity",
      "namespace": "cloud.billingView",
      "description": "Quantity",
      "properties": {
        "unit": {
          "type": "cloud.billingView.UnitQuantityEnum",
          "fullType": "cloud.billingView.UnitQuantityEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quantity unit",
          "required": false
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quantity value",
          "required": false
        }
      }
    },
    "cloud.billingView.RegionalizedResource": {
      "id": "RegionalizedResource",
      "namespace": "cloud.billingView",
      "description": "RegionalizedResource",
      "properties": {
        "components": {
          "type": "cloud.billingView.Component[]",
          "fullType": "cloud.billingView.Component[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of components",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region of the resource",
          "required": false
        }
      }
    },
    "cloud.billingView.StorageTypeEnum": {
      "id": "StorageTypeEnum",
      "namespace": "cloud.billingView",
      "description": "StorageTypeEnum",
      "enum": [
        "pcs",
        "pca"
      ],
      "enumType": "string"
    },
    "cloud.billingView.StoredStorage": {
      "id": "StoredStorage",
      "namespace": "cloud.billingView",
      "description": "StoredStorage",
      "properties": {
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "GiBh stored",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.billingView.TypedResources": {
      "id": "TypedResources",
      "namespace": "cloud.billingView",
      "description": "TypedResources",
      "properties": {
        "resources": {
          "type": "cloud.billingView.RegionalizedResource[]",
          "fullType": "cloud.billingView.RegionalizedResource[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Resources per region",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the resources",
          "required": false
        }
      }
    },
    "cloud.billingView.UnitQuantityEnum": {
      "id": "UnitQuantityEnum",
      "namespace": "cloud.billingView",
      "description": "UnitQuantity",
      "enum": [
        "GiB",
        "GiBh",
        "Hour",
        "Minute",
        "Second",
        "Unit"
      ],
      "enumType": "string"
    },
    "cloud.billingView.UsedCredit": {
      "id": "UsedCredit",
      "namespace": "cloud.billingView",
      "description": "UsedCredit",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Credit description",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Credit ID",
          "required": false
        },
        "usedAmount": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total credit used",
          "required": false
        }
      }
    },
    "cloud.billingView.UsedCredits": {
      "id": "UsedCredits",
      "namespace": "cloud.billingView",
      "description": "UsedCredits",
      "properties": {
        "details": {
          "type": "cloud.billingView.UsedCredit[]",
          "fullType": "cloud.billingView.UsedCredit[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Details about credits that will be used",
          "required": false
        },
        "totalCredit": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total credit that will be used to pay the bill",
          "required": false
        }
      }
    },
    "cloud.billingView.VolumeSnapshot": {
      "id": "VolumeSnapshot",
      "namespace": "cloud.billingView",
      "description": "VolumeSnapshot",
      "properties": {
        "quantity": {
          "type": "cloud.billingView.Quantity",
          "fullType": "cloud.billingView.Quantity",
          "canBeNull": false,
          "readOnly": true,
          "description": "GiBh stored",
          "required": false
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Total price",
          "required": false
        }
      }
    },
    "cloud.common.VoucherValidity": {
      "id": "VoucherValidity",
      "namespace": "cloud.common",
      "description": "Voucher validity range",
      "properties": {
        "from": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Valid from",
          "required": false
        },
        "to": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Valid to",
          "required": false
        }
      }
    },
    "cloud.containerRegistry.Capability": {
      "id": "Capability",
      "namespace": "cloud.containerRegistry",
      "description": "The container registry capability for a single region",
      "properties": {
        "plans": {
          "type": "cloud.containerRegistry.Plan[]",
          "fullType": "cloud.containerRegistry.Plan[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Available plans in the region",
          "required": false
        },
        "regionName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The region name",
          "required": false
        }
      }
    },
    "cloud.containerRegistry.Features": {
      "id": "Features",
      "namespace": "cloud.containerRegistry",
      "description": "Features list, enabled or not",
      "properties": {
        "vulnerability": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Vulnerability scanning",
          "required": false
        }
      }
    },
    "cloud.containerRegistry.Limits": {
      "id": "Limits",
      "namespace": "cloud.containerRegistry",
      "description": "Limitation of a docker registry",
      "properties": {
        "imageStorage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Docker image storage limits in bytes",
          "required": false
        },
        "parallelRequest": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Parallel requests on Docker image API (/v2 Docker registry API)",
          "required": false
        }
      }
    },
    "cloud.containerRegistry.Plan": {
      "id": "Plan",
      "namespace": "cloud.containerRegistry",
      "description": "Plan of the registry",
      "properties": {
        "code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Plan code from catalog",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Plan creation date",
          "required": false
        },
        "features": {
          "type": "cloud.containerRegistry.Features",
          "fullType": "cloud.containerRegistry.Features",
          "canBeNull": false,
          "readOnly": true,
          "description": "Features of the plan",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Plan ID",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Plan name",
          "required": false
        },
        "registryLimits": {
          "type": "cloud.containerRegistry.Limits",
          "fullType": "cloud.containerRegistry.Limits",
          "canBeNull": false,
          "readOnly": true,
          "description": "Container registry limits",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Plan last update date",
          "required": false
        }
      }
    },
    "cloud.containerRegistry.PlanUpdate": {
      "id": "PlanUpdate",
      "namespace": "cloud.containerRegistry",
      "description": "Missing description",
      "properties": {
        "planID": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Plan ID to apply to the registry",
          "required": true
        }
      }
    },
    "cloud.containerRegistry.Registry": {
      "id": "Registry",
      "namespace": "cloud.containerRegistry",
      "description": "Managed docker registry",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Registry creation date",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Registry ID",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Registry name",
          "required": false
        },
        "projectID": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Project ID of your registry",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region of the registry.",
          "required": false
        },
        "size": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current size of the registry (bytes)",
          "required": false
        },
        "status": {
          "type": "cloud.containerRegistry.StatusEnum",
          "fullType": "cloud.containerRegistry.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Registry status",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Registry last update date",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Access url of the registry",
          "required": false
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Version of your registry",
          "required": false
        }
      }
    },
    "cloud.containerRegistry.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloud.containerRegistry",
      "description": "Status of the registry",
      "enum": [
        "ERROR",
        "READY",
        "DELETED",
        "SUSPENDED",
        "INSTALLING",
        "UPDATING",
        "RESTORING",
        "SUSPENDING",
        "DELETING"
      ],
      "enumType": "string"
    },
    "cloud.containerRegistry.User": {
      "id": "User",
      "namespace": "cloud.containerRegistry",
      "description": "Docker registry user",
      "properties": {
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User email",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User ID",
          "required": false
        },
        "password": {
          "type": "password",
          "fullType": "password",
          "canBeNull": true,
          "readOnly": true,
          "description": "User password",
          "required": false
        },
        "user": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "User name",
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
    "cloud.forecast.ProjectForecast": {
      "id": "ProjectForecast",
      "namespace": "cloud.forecast",
      "description": "ProjectForecast",
      "properties": {
        "lastMetric": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Time when we got last metric",
          "required": true
        },
        "projectForecast": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Forecast for your whole project",
          "required": true
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
    "cloud.kube.Cluster": {
      "id": "Cluster",
      "namespace": "cloud.kube",
      "description": "Managed Kubernetes cluster description",
      "properties": {
        "controlPlaneIsUpToDate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True if control-plane is up to date",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster creation date",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster ID",
          "required": false
        },
        "isUpToDate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True if all nodes and control-plane are up to date",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster name",
          "required": false
        },
        "nextUpgradeVersions": {
          "type": "cloud.kube.UpgradeVersionEnum[]",
          "fullType": "cloud.kube.UpgradeVersionEnum[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Kubernetes versions available for upgrade",
          "required": false
        },
        "nodesUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster nodes URL",
          "required": false
        },
        "region": {
          "type": "cloud.kube.RegionEnum",
          "fullType": "cloud.kube.RegionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster region",
          "required": false
        },
        "status": {
          "type": "cloud.kube.ClusterStatusEnum",
          "fullType": "cloud.kube.ClusterStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster status",
          "required": false
        },
        "updatePolicy": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster update policy",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster last update date",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Management URL of your cluster",
          "required": false
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Kubernetes version of your cluster",
          "required": false
        }
      }
    },
    "cloud.kube.ClusterCreationRegionEnum": {
      "id": "ClusterCreationRegionEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for available regions when creating a cluster",
      "enum": [
        "GRA5",
        "GRA7",
        "BHS5",
        "SBG5"
      ],
      "enumType": "string"
    },
    "cloud.kube.ClusterStatusEnum": {
      "id": "ClusterStatusEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for Status",
      "enum": [
        "INSTALLING",
        "UPDATING",
        "REDEPLOYING",
        "RESETTING",
        "SUSPENDING",
        "REOPENING",
        "DELETING",
        "SUSPENDED",
        "MAINTENANCE",
        "ERROR",
        "USER_ERROR",
        "USER_QUOTA_ERROR",
        "READY"
      ],
      "enumType": "string"
    },
    "cloud.kube.Flavor": {
      "id": "Flavor",
      "namespace": "cloud.kube",
      "description": "a flavor kind",
      "properties": {
        "category": {
          "type": "cloud.kube.FlavorCategoryEnum",
          "fullType": "cloud.kube.FlavorCategoryEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flavor family",
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
        "state": {
          "type": "cloud.kube.FlavorStateEnum",
          "fullType": "cloud.kube.FlavorStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flavor state",
          "required": false
        }
      }
    },
    "cloud.kube.FlavorCategoryEnum": {
      "id": "FlavorCategoryEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for category",
      "enum": [
        "c",
        "g",
        "t",
        "b",
        "r",
        "i"
      ],
      "enumType": "string"
    },
    "cloud.kube.FlavorStateEnum": {
      "id": "FlavorStateEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for State",
      "enum": [
        "available",
        "unavailable"
      ],
      "enumType": "string"
    },
    "cloud.kube.Kubeconfig": {
      "id": "Kubeconfig",
      "namespace": "cloud.kube",
      "description": "Kubeconfig description",
      "properties": {
        "content": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": true,
          "description": "kubeconfig file",
          "required": false
        }
      }
    },
    "cloud.kube.Node": {
      "id": "Node",
      "namespace": "cloud.kube",
      "description": "Node installed on your cluster",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": false
        },
        "deployedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Node deployment date",
          "required": false
        },
        "flavor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flavor name",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Node ID",
          "required": false
        },
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Public Cloud instance id",
          "required": false
        },
        "isUpToDate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True if the node is up to date",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Node name",
          "required": false
        },
        "nodePoolId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "NodePool parent id",
          "required": false
        },
        "projectId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Project id",
          "required": false
        },
        "status": {
          "type": "cloud.kube.NodeStatusEnum",
          "fullType": "cloud.kube.NodeStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Node last update date",
          "required": false
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Node version",
          "required": false
        }
      }
    },
    "cloud.kube.NodePool": {
      "id": "NodePool",
      "namespace": "cloud.kube",
      "description": "NodePool created on your cluster to manage your nodes",
      "properties": {
        "availableNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of nodes which are actually ready in the pool",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": false
        },
        "currentNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of nodes present in the pool",
          "required": false
        },
        "desiredNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of nodes you desire in the pool",
          "required": false
        },
        "flavor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flavor name",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "NodePool ID",
          "required": false
        },
        "maxNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of nodes you desire in the pool",
          "required": false
        },
        "minNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of nodes you desire in the pool",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "NodePool resource name",
          "required": false
        },
        "projectId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Project id",
          "required": false
        },
        "sizeStatus": {
          "type": "cloud.kube.NodePoolSizeStatusEnum",
          "fullType": "cloud.kube.NodePoolSizeStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status describing the state between number of nodes wanted and available ones",
          "required": false
        },
        "status": {
          "type": "cloud.kube.NodePoolStatusEnum",
          "fullType": "cloud.kube.NodePoolStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current status",
          "required": false
        },
        "upToDateNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of nodes with latest version installed in the pool",
          "required": false
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last update date",
          "required": false
        }
      }
    },
    "cloud.kube.NodePoolSizeStatusEnum": {
      "id": "NodePoolSizeStatusEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for NodePool size Status",
      "enum": [
        "UNDER_CAPACITY",
        "CAPACITY_OK",
        "OVER_CAPACITY"
      ],
      "enumType": "string"
    },
    "cloud.kube.NodePoolStatusEnum": {
      "id": "NodePoolStatusEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for NodePool Status",
      "enum": [
        "INSTALLING",
        "UPDATING",
        "REDEPLOYING",
        "RESIZING",
        "RESETTING",
        "DELETING",
        "ERROR",
        "READY"
      ],
      "enumType": "string"
    },
    "cloud.kube.NodeStatusEnum": {
      "id": "NodeStatusEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for Status",
      "enum": [
        "INSTALLING",
        "REDEPLOYING",
        "UPDATING",
        "RESETTING",
        "SUSPENDING",
        "REOPENING",
        "DELETING",
        "SUSPENDED",
        "ERROR",
        "USER_ERROR",
        "USER_QUOTA_ERROR",
        "USER_NODE_NOT_FOUND_ERROR",
        "USER_NODE_SUSPENDED_SERVICE",
        "READY"
      ],
      "enumType": "string"
    },
    "cloud.kube.RegionEnum": {
      "id": "RegionEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for available regions",
      "enum": [
        "GRA5",
        "GRA7",
        "BHS5",
        "SBG5"
      ],
      "enumType": "string"
    },
    "cloud.kube.ResetWorkerNodesPolicyEnum": {
      "id": "ResetWorkerNodesPolicyEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for worker nodes reset policy",
      "enum": [
        "reinstall",
        "delete"
      ],
      "enumType": "string"
    },
    "cloud.kube.UpdatePolicyEnum": {
      "id": "UpdatePolicyEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for UpdatePolicy",
      "enum": [
        "ALWAYS_UPDATE",
        "MINIMAL_DOWNTIME",
        "NEVER_UPDATE"
      ],
      "enumType": "string"
    },
    "cloud.kube.UpdateStrategyEnum": {
      "id": "UpdateStrategyEnum",
      "namespace": "cloud.kube",
      "description": "Enum values for UpdateStrategy",
      "enum": [
        "LATEST_PATCH",
        "NEXT_MINOR"
      ],
      "enumType": "string"
    },
    "cloud.kube.UpgradeVersionEnum": {
      "id": "UpgradeVersionEnum",
      "namespace": "cloud.kube",
      "description": "List of available versions for upgrade",
      "enum": [
        "1.14",
        "1.15",
        "1.16",
        "1.17",
        "1.18"
      ],
      "enumType": "string"
    },
    "cloud.kube.VersionEnum": {
      "id": "VersionEnum",
      "namespace": "cloud.kube",
      "description": "List of available versions for installation",
      "enum": [
        "1.15",
        "1.16",
        "1.17",
        "1.18"
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
          "required": false
        },
        "migrationId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Migration Id",
          "required": false
        },
        "resourceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The id of the resource to migrate",
          "required": false
        },
        "resourceType": {
          "type": "cloud.migration.ResourceTypeEnum",
          "fullType": "cloud.migration.ResourceTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The type of the resource to migrate",
          "required": false
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
    "cloud.project.BandwidthStorageUsage": {
      "id": "BandwidthStorageUsage",
      "namespace": "cloud.project",
      "description": "Usage information for current month on your project",
      "properties": {
        "downloadedBytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Downloaded bytes from your containers",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region",
          "required": true
        },
        "total": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cost for your storage bandwidth",
          "required": true
        }
      }
    },
    "cloud.project.Bill": {
      "id": "Bill",
      "namespace": "cloud.project",
      "description": "Project bill",
      "properties": {
        "billId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Bill id",
          "required": true
        },
        "type": {
          "type": "cloud.project.BillTypeEnum",
          "fullType": "cloud.project.BillTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Bill type",
          "required": true
        }
      }
    },
    "cloud.project.BillTypeEnum": {
      "id": "BillTypeEnum",
      "namespace": "cloud.project",
      "description": "Possible values for bill type",
      "enum": [
        "creditPurchased",
        "monthlyConsumption",
        "monthlyInstanceActivation"
      ],
      "enumType": "string"
    },
    "cloud.project.CurrentUsage": {
      "id": "CurrentUsage",
      "namespace": "cloud.project",
      "description": "Usage information for current month on your project",
      "properties": {
        "instances": {
          "type": "cloud.project.InstancesUsage",
          "fullType": "cloud.project.InstancesUsage",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instances usage",
          "required": true
        },
        "snapshots": {
          "type": "cloud.project.SnapshotsUsage",
          "fullType": "cloud.project.SnapshotsUsage",
          "canBeNull": false,
          "readOnly": false,
          "description": "Snapshots usage",
          "required": true
        },
        "storage": {
          "type": "cloud.project.StorageUsage",
          "fullType": "cloud.project.StorageUsage",
          "canBeNull": false,
          "readOnly": false,
          "description": "Storage usage",
          "required": true
        },
        "total": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total cost for the project",
          "required": true
        },
        "volumeSnapshots": {
          "type": "cloud.project.SnapshotsUsage",
          "fullType": "cloud.project.SnapshotsUsage",
          "canBeNull": false,
          "readOnly": false,
          "description": "Snapshots usage",
          "required": true
        },
        "volumes": {
          "type": "cloud.project.VolumesUsage",
          "fullType": "cloud.project.VolumesUsage",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volumes usage",
          "required": true
        }
      }
    },
    "cloud.project.EligibilityAction": {
      "id": "EligibilityAction",
      "namespace": "cloud.project",
      "description": "Possible eligibility actions",
      "enum": [
        "addPaymentMethod",
        "askIncreaseProjectsQuota",
        "challengePaymentMethod",
        "verifyPaypal"
      ],
      "enumType": "string"
    },
    "cloud.project.EligibilityInfo": {
      "id": "EligibilityInfo",
      "namespace": "cloud.project",
      "description": "Eligibility information",
      "properties": {
        "actionsRequired": {
          "type": "cloud.project.EligibilityAction[]",
          "fullType": "cloud.project.EligibilityAction[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Actions to perform to be eligible",
          "required": false
        },
        "minimumCredit": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cloud project order",
          "required": false
        },
        "paymentMethodsAuthorized": {
          "type": "cloud.project.PaymentMethodAuthorized[]",
          "fullType": "cloud.project.PaymentMethodAuthorized[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Payment method accepted to order Public Cloud project",
          "required": false
        },
        "voucher": {
          "type": "cloud.project.NewProjectInfoVoucher",
          "fullType": "cloud.project.NewProjectInfoVoucher",
          "canBeNull": true,
          "readOnly": false,
          "description": "Information about voucher code",
          "required": false
        }
      }
    },
    "cloud.project.InstanceMonthlyBilling": {
      "id": "InstanceMonthlyBilling",
      "namespace": "cloud.project",
      "description": "Instance monthly billing details",
      "properties": {
        "activatedOn": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Monthly billing activation date",
          "required": true
        },
        "cost": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cost",
          "required": true
        }
      }
    },
    "cloud.project.InstanceUsageDetail": {
      "id": "InstanceUsageDetail",
      "namespace": "cloud.project",
      "description": "Instance usage",
      "properties": {
        "hourly": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "description": "Hourly price",
          "required": false
        },
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance id",
          "required": true
        },
        "monthly": {
          "type": "cloud.project.InstanceMonthlyBilling",
          "fullType": "cloud.project.InstanceMonthlyBilling",
          "canBeNull": true,
          "readOnly": false,
          "description": "Monthly price",
          "required": false
        },
        "monthlyBilling": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is monthly billing enabled",
          "required": true
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Reference",
          "required": true
        }
      }
    },
    "cloud.project.InstancesUsage": {
      "id": "InstancesUsage",
      "namespace": "cloud.project",
      "description": "Instances usage for current month",
      "properties": {
        "detail": {
          "type": "cloud.project.InstanceUsageDetail[]",
          "fullType": "cloud.project.InstanceUsageDetail[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Instance usage details",
          "required": true
        },
        "total": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total cost for the instances",
          "required": true
        }
      }
    },
    "cloud.project.LoadBalancer": {
      "id": "LoadBalancer",
      "namespace": "cloud.project",
      "description": "A load balancer to handle workload",
      "properties": {
        "address": {
          "type": "cloud.project.loadbalancer.Address",
          "fullType": "cloud.project.loadbalancer.Address",
          "canBeNull": false,
          "readOnly": true,
          "description": "Address to reach the load balancer",
          "required": false
        },
        "configuration": {
          "type": "cloud.project.loadbalancer.ConfigurationVersion",
          "fullType": "cloud.project.loadbalancer.ConfigurationVersion",
          "canBeNull": false,
          "readOnly": true,
          "description": "Information about version of the configuration",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Description of the load balancer",
          "required": false
        },
        "egressAddress": {
          "type": "cloud.project.loadbalancer.Addresses",
          "fullType": "cloud.project.loadbalancer.Addresses",
          "canBeNull": false,
          "readOnly": true,
          "description": "IPs used by the load balancer to contact backend's servers",
          "required": false
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the load balancer",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the load balancer",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Regions where the load balancer is hosted",
          "required": false
        },
        "status": {
          "type": "cloud.project.loadbalancer.StatusEnum",
          "fullType": "cloud.project.loadbalancer.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of a load balancer",
          "required": false
        }
      }
    },
    "cloud.project.LoadBalancerCreation": {
      "id": "LoadBalancerCreation",
      "namespace": "cloud.project",
      "description": "A load balancer to handle workload",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Description of the load balancer",
          "required": false
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the load balancer",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the load balancer",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Regions where the load balancer is hosted",
          "required": true
        }
      }
    },
    "cloud.project.NewProject": {
      "id": "NewProject",
      "namespace": "cloud.project",
      "description": "New cloud project",
      "properties": {
        "agreements": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Agreement to valid",
          "required": false
        },
        "credit": {
          "type": "cloud.project.NewProjectCredit",
          "fullType": "cloud.project.NewProjectCredit",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cloud credit",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cloud project description",
          "required": false
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cloud project order id",
          "required": false
        },
        "project": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cloud project",
          "required": false
        },
        "status": {
          "type": "cloud.project.NewProjectStatusEnum",
          "fullType": "cloud.project.NewProjectStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Project creation status",
          "required": true
        }
      }
    },
    "cloud.project.NewProjectCredit": {
      "id": "NewProjectCredit",
      "namespace": "cloud.project",
      "description": "Credit details",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Credit description",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Credit id",
          "required": true
        },
        "products": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Use credits on following products",
          "required": false
        },
        "total_credit": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total credit",
          "required": true
        },
        "validity": {
          "type": "cloud.common.VoucherValidity",
          "fullType": "cloud.common.VoucherValidity",
          "canBeNull": true,
          "readOnly": false,
          "description": "Credit validity",
          "required": false
        }
      }
    },
    "cloud.project.NewProjectInfo": {
      "id": "NewProjectInfo",
      "namespace": "cloud.project",
      "description": "New cloud project informations",
      "properties": {
        "agreements": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Agreement to valid",
          "required": false
        },
        "error": {
          "type": "cloud.project.NewProjectInfoError",
          "fullType": "cloud.project.NewProjectInfoError",
          "canBeNull": true,
          "readOnly": false,
          "description": "Error to fix before trying to create a new Public Cloud project",
          "required": false
        },
        "order": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cloud project order",
          "required": false
        },
        "voucher": {
          "type": "cloud.project.NewProjectInfoVoucher",
          "fullType": "cloud.project.NewProjectInfoVoucher",
          "canBeNull": true,
          "readOnly": false,
          "description": "Information about voucher code",
          "required": false
        }
      }
    },
    "cloud.project.NewProjectInfoError": {
      "id": "NewProjectInfoError",
      "namespace": "cloud.project",
      "description": "Error that can occur when creating a Public Cloud project",
      "properties": {
        "code": {
          "type": "cloud.project.NewProjectInfoErrorCodeEnum",
          "fullType": "cloud.project.NewProjectInfoErrorCodeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Error code",
          "required": true
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Error message",
          "required": true
        }
      }
    },
    "cloud.project.NewProjectInfoErrorCodeEnum": {
      "id": "NewProjectInfoErrorCodeEnum",
      "namespace": "cloud.project",
      "description": "Possible values for error code on project creation",
      "enum": [
        "accountNotEligible",
        "challengePaymentMethodRequested",
        "invalidPaymentMean",
        "maxProjectsLimitReached",
        "paypalAccountNotVerified",
        "unpaidDebts"
      ],
      "enumType": "string"
    },
    "cloud.project.NewProjectInfoVoucher": {
      "id": "NewProjectInfoVoucher",
      "namespace": "cloud.project",
      "description": "Information about voucher",
      "properties": {
        "credit": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Credit added thanks to the voucher",
          "required": true
        },
        "paymentMethodRequired": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "A valid registered payment method is required to use the voucher",
          "required": true
        }
      }
    },
    "cloud.project.NewProjectStatusEnum": {
      "id": "NewProjectStatusEnum",
      "namespace": "cloud.project",
      "description": "Possible values for new project status",
      "enum": [
        "creating",
        "ok",
        "validationPending",
        "waitingAgreementsValidation"
      ],
      "enumType": "string"
    },
    "cloud.project.PaymentMethodAuthorized": {
      "id": "PaymentMethodAuthorized",
      "namespace": "cloud.project",
      "description": "List of accepted payment methods",
      "enum": [
        "bankAccount",
        "credit",
        "creditCard",
        "paypal"
      ],
      "enumType": "string"
    },
    "cloud.project.ProductAgreements": {
      "id": "ProductAgreements",
      "namespace": "cloud.project",
      "description": "Product agreements",
      "properties": {
        "agreementsToValidate": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Agreements to validate",
          "required": false
        },
        "agreementsValidated": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Agreements already validated",
          "required": false
        }
      }
    },
    "cloud.project.ProductNameEnum": {
      "id": "ProductNameEnum",
      "namespace": "cloud.project",
      "description": "Possible values for cloud project product name",
      "enum": [
        "registry"
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
    "cloud.project.ProjectUsage": {
      "id": "ProjectUsage",
      "namespace": "cloud.project",
      "description": "Usage information on your project",
      "properties": {
        "current": {
          "type": "cloud.project.CurrentUsage",
          "fullType": "cloud.project.CurrentUsage",
          "canBeNull": false,
          "readOnly": false,
          "description": "Current usage details",
          "required": true
        }
      }
    },
    "cloud.project.SnapshotUsageDetail": {
      "id": "SnapshotUsageDetail",
      "namespace": "cloud.project",
      "description": "Snapshot usage",
      "properties": {
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Snapshot price",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Snapshot region",
          "required": true
        },
        "storedSize": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Stored snapshot size in gigabytes",
          "required": true
        }
      }
    },
    "cloud.project.SnapshotsUsage": {
      "id": "SnapshotsUsage",
      "namespace": "cloud.project",
      "description": "Snapshots usage for current month",
      "properties": {
        "detail": {
          "type": "cloud.project.SnapshotUsageDetail[]",
          "fullType": "cloud.project.SnapshotUsageDetail[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Snapshots usage details",
          "required": true
        },
        "total": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total cost for the snapshots",
          "required": true
        }
      }
    },
    "cloud.project.StorageUsage": {
      "id": "StorageUsage",
      "namespace": "cloud.project",
      "description": "Usage information for current month on your project",
      "properties": {
        "bandwidth": {
          "type": "cloud.project.BandwidthStorageUsage[]",
          "fullType": "cloud.project.BandwidthStorageUsage[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Storage bandwidth usage",
          "required": true
        },
        "total": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cost for your storage in all your containers",
          "required": true
        },
        "volume": {
          "type": "cloud.project.StorageVolumeUsage[]",
          "fullType": "cloud.project.StorageVolumeUsage[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Storage volume usage",
          "required": true
        }
      }
    },
    "cloud.project.StorageVolumeUsage": {
      "id": "StorageVolumeUsage",
      "namespace": "cloud.project",
      "description": "Storage volume used on your project",
      "properties": {
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region",
          "required": true
        },
        "storedBytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Bytes stored in your containers",
          "required": true
        },
        "total": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cost for your storage bandwidth",
          "required": true
        }
      }
    },
    "cloud.project.VolumeType": {
      "id": "VolumeType",
      "namespace": "cloud.project",
      "description": "Possible values for volume type",
      "enum": [
        "classic",
        "high-speed"
      ],
      "enumType": "string"
    },
    "cloud.project.VolumeUsageDetail": {
      "id": "VolumeUsageDetail",
      "namespace": "cloud.project",
      "description": "Volume usage",
      "properties": {
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volume price",
          "required": true
        },
        "volumeCapacity": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volume capacity in gigabytes",
          "required": true
        },
        "volumeId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volume id",
          "required": true
        },
        "volumeType": {
          "type": "cloud.project.VolumeType",
          "fullType": "cloud.project.VolumeType",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volume type",
          "required": true
        }
      }
    },
    "cloud.project.VolumesUsage": {
      "id": "VolumesUsage",
      "namespace": "cloud.project",
      "description": "Volumes usage for current month",
      "properties": {
        "detail": {
          "type": "cloud.project.VolumeUsageDetail[]",
          "fullType": "cloud.project.VolumeUsageDetail[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Volume usage details",
          "required": true
        },
        "total": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total cost for the volumes",
          "required": true
        }
      }
    },
    "cloud.project.ai.serving.APIStatusEnum": {
      "id": "APIStatusEnum",
      "namespace": "cloud.project.ai.serving",
      "description": "Status of API",
      "enum": [
        "pending",
        "starting",
        "running",
        "scaling",
        "waking",
        "sleeping"
      ],
      "enumType": "string"
    },
    "cloud.project.ai.serving.AutoscalingSpec": {
      "id": "AutoscalingSpec",
      "namespace": "cloud.project.ai.serving",
      "description": "Autoscaling specification",
      "properties": {
        "cpuAverageUtilization": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "CPU utilization threshold beyond which a scale is triggered",
          "required": false
        },
        "maxReplicas": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum number of replicas",
          "required": false
        },
        "memoryAverageUtilization": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Memory utilization threshold beyond which a scale is triggered",
          "required": false
        },
        "minReplicas": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Minimum number of replicas",
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.Flavor": {
      "id": "Flavor",
      "namespace": "cloud.project.ai.serving",
      "description": "Compute Flavor for the Serving Engine",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of the flavor",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flavor ID",
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.Metrics": {
      "id": "Metrics",
      "namespace": "cloud.project.ai.serving",
      "description": "Metrics information",
      "properties": {
        "endpoints": {
          "type": "cloud.project.ai.serving.MetricsEndpoint[]",
          "fullType": "cloud.project.ai.serving.MetricsEndpoint[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metrics endpoint query platforms",
          "required": false
        },
        "token": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metrics token linked to the project",
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.MetricsEndpoint": {
      "id": "MetricsEndpoint",
      "namespace": "cloud.project.ai.serving",
      "description": "User Metrics Endpoints",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of endpoint",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "URL of endpoint",
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.Model": {
      "id": "Model",
      "namespace": "cloud.project.ai.serving",
      "description": "A deployed machine learning model",
      "properties": {
        "apiStatus": {
          "type": "cloud.project.ai.serving.APIStatusEnum",
          "fullType": "cloud.project.ai.serving.APIStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Api status",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Model creation date",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Model id",
          "required": false
        },
        "replicas": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of API currently running",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Model url",
          "required": false
        },
        "version": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "API Deployed version",
          "required": false
        },
        "versionStatus": {
          "type": "cloud.project.ai.serving.VersionStatusEnum",
          "fullType": "cloud.project.ai.serving.VersionStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last version status",
          "required": false
        },
        "workflowTemplate": {
          "type": "cloud.project.ai.serving.WorkflowTemplateEnum",
          "fullType": "cloud.project.ai.serving.WorkflowTemplateEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Workflow Template used to build the model",
          "required": false
        },
        "workflowTemplateParameters": {
          "type": "cloud.project.ai.serving.ModelWorkflowTemplateParameter",
          "fullType": "cloud.project.ai.serving.ModelWorkflowTemplateParameter",
          "canBeNull": false,
          "readOnly": true,
          "description": "Workflow Template Parameters used to build the model",
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.ModelDefinition": {
      "id": "ModelDefinition",
      "namespace": "cloud.project.ai.serving",
      "description": "Missing description",
      "properties": {
        "autoscalingSpec": {
          "type": "cloud.project.ai.serving.AutoscalingSpec",
          "fullType": "cloud.project.ai.serving.AutoscalingSpec",
          "canBeNull": true,
          "readOnly": false,
          "description": "Autoscaling specification",
          "required": false
        },
        "flavor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Flavor id",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Model id",
          "required": true
        },
        "imageId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Preset image to deploy",
          "required": false
        },
        "storagePath": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Path in the object storage container that contains your model",
          "required": false
        },
        "workflowTemplate": {
          "type": "cloud.project.ai.serving.WorkflowTemplateEnum",
          "fullType": "cloud.project.ai.serving.WorkflowTemplateEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Workflow template to use",
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.ModelWorkflowTemplateParameter": {
      "id": "ModelWorkflowTemplateParameter",
      "namespace": "cloud.project.ai.serving",
      "description": "Parameters of the Workflow that build",
      "properties": {
        "imageId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Preset Model Image used to deploy your model",
          "required": false
        },
        "storagePath": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Path in the object storage container that contains your model",
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.Namespace": {
      "id": "Namespace",
      "namespace": "cloud.project.ai.serving",
      "description": "A serving engine namespace",
      "properties": {
        "clusterId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster id",
          "required": false
        },
        "container": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Object storage container",
          "required": false
        },
        "containerId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Object storage container id",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name creation date",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of namespace",
          "required": false
        },
        "hubUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hub Service url",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Namespace id",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current region of the namespace",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster url",
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.NamespaceCreation": {
      "id": "NamespaceCreation",
      "namespace": "cloud.project.ai.serving",
      "description": "Missing description",
      "properties": {
        "container": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Object storage container name",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of namespace",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region name",
          "required": true
        }
      }
    },
    "cloud.project.ai.serving.PresetImage": {
      "id": "PresetImage",
      "namespace": "cloud.project.ai.serving",
      "description": "A Image of a built serving model",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Model Image Description",
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
        "link": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Link to the Opensource Model",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Model Image Name",
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.Registry": {
      "id": "Registry",
      "namespace": "cloud.project.ai.serving",
      "description": "Representation of a registry",
      "properties": {
        "custom": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True if user have a registry attached",
          "required": false
        },
        "password": {
          "type": "password",
          "fullType": "password",
          "canBeNull": true,
          "readOnly": false,
          "description": "Docker registry password",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Docker registry URL",
          "required": true
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Docker registry username",
          "required": true
        }
      }
    },
    "cloud.project.ai.serving.RegistryResponse": {
      "id": "RegistryResponse",
      "namespace": "cloud.project.ai.serving",
      "description": "Missing description",
      "properties": {
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.Token": {
      "id": "Token",
      "namespace": "cloud.project.ai.serving",
      "description": "A token to access / manage a machine learning Model",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Token creation date",
          "required": false
        },
        "groups": {
          "type": "cloud.project.ai.serving.TokenGroupEnum[]",
          "fullType": "cloud.project.ai.serving.TokenGroupEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "A list of access group to grant",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Token id",
          "required": false
        },
        "resource": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Access resource of the token. You can provide: a strict id that will exactly match the resource id or a fuzzy string that ends with * to match multiple resource starting with the same prefix or a * to match all your resources",
          "required": true
        },
        "token": {
          "type": "password",
          "fullType": "password",
          "canBeNull": true,
          "readOnly": true,
          "description": "The JWT Token",
          "required": false
        }
      }
    },
    "cloud.project.ai.serving.TokenGroupEnum": {
      "id": "TokenGroupEnum",
      "namespace": "cloud.project.ai.serving",
      "description": "A serving engine access group",
      "enum": [
        "model-management",
        "model-evaluation"
      ],
      "enumType": "string"
    },
    "cloud.project.ai.serving.VersionStatusEnum": {
      "id": "VersionStatusEnum",
      "namespace": "cloud.project.ai.serving",
      "description": "Status of current version",
      "enum": [
        "pending",
        "building",
        "built",
        "build-error",
        "deploying",
        "deployed",
        "rollback",
        "failed"
      ],
      "enumType": "string"
    },
    "cloud.project.ai.serving.WorkflowTemplateEnum": {
      "id": "WorkflowTemplateEnum",
      "namespace": "cloud.project.ai.serving",
      "description": "The workflow Template to use",
      "enum": [
        "build-image",
        "preset-image"
      ],
      "enumType": "string"
    },
    "cloud.project.dataProcessing.AuthorizationStatus": {
      "id": "AuthorizationStatus",
      "namespace": "cloud.project.dataProcessing",
      "description": "Authorization status",
      "properties": {
        "authorized": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True is project is authorized to use Data Processing service",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.CapabilitiesEngineParameter": {
      "id": "CapabilitiesEngineParameter",
      "namespace": "cloud.project.dataProcessing",
      "description": "Engine parameters",
      "properties": {
        "default": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Default value of parameter",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of parameter",
          "required": false
        },
        "mandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Parameter is mandatory or not",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of parameter",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of parameter",
          "required": false
        },
        "validator": {
          "type": "cloud.project.dataProcessing.ParameterValidator",
          "fullType": "cloud.project.dataProcessing.ParameterValidator",
          "canBeNull": false,
          "readOnly": true,
          "description": "Validator of parameter",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.CapabilitiesTemplate": {
      "id": "CapabilitiesTemplate",
      "namespace": "cloud.project.dataProcessing",
      "description": "Engine Template",
      "properties": {
        "cores": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of cores of the template",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the template",
          "required": false
        },
        "memory": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Memory in bytes of the template",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.Capability": {
      "id": "Capability",
      "namespace": "cloud.project.dataProcessing",
      "description": "Capabilities of data processing service",
      "properties": {
        "availableVersions": {
          "type": "cloud.project.dataProcessing.EngineVersion[]",
          "fullType": "cloud.project.dataProcessing.EngineVersion[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Available versions of the engine",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the engine",
          "required": false
        },
        "parameters": {
          "type": "cloud.project.dataProcessing.CapabilitiesEngineParameter[]",
          "fullType": "cloud.project.dataProcessing.CapabilitiesEngineParameter[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Parameters of the engine",
          "required": false
        },
        "templates": {
          "type": "cloud.project.dataProcessing.CapabilitiesTemplate[]",
          "fullType": "cloud.project.dataProcessing.CapabilitiesTemplate[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Templates of the engine",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.EngineParameter": {
      "id": "EngineParameter",
      "namespace": "cloud.project.dataProcessing",
      "description": "Parameters of the engine",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of parameters",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Value of parameters",
          "required": true
        }
      }
    },
    "cloud.project.dataProcessing.EngineVersion": {
      "id": "EngineVersion",
      "namespace": "cloud.project.dataProcessing",
      "description": "Engine version",
      "properties": {
        "availableRegions": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of region available of the version",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of the engine",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the version",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.Job": {
      "id": "Job",
      "namespace": "cloud.project.dataProcessing",
      "description": "Job information",
      "properties": {
        "containerName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the container where the code and the log of the job is",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation date of the job",
          "required": false
        },
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "End date of the job",
          "required": false
        },
        "engine": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Engine of the job",
          "required": true
        },
        "engineParameters": {
          "type": "cloud.project.dataProcessing.EngineParameter[]",
          "fullType": "cloud.project.dataProcessing.EngineParameter[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Parameters of job engine",
          "required": true
        },
        "engineVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Version of the engine",
          "required": true
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "UUID of the job",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Openstack region of the job",
          "required": true
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Start date of the job",
          "required": false
        },
        "status": {
          "type": "cloud.project.dataProcessing.StatusEnum",
          "fullType": "cloud.project.dataProcessing.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of the job",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.JobLogs": {
      "id": "JobLogs",
      "namespace": "cloud.project.dataProcessing",
      "description": "Job Logs",
      "properties": {
        "logs": {
          "type": "cloud.project.dataProcessing.LogLine[]",
          "fullType": "cloud.project.dataProcessing.LogLine[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Logs lines",
          "required": false
        },
        "logsAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Address log url",
          "required": false
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Start date",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.LogLine": {
      "id": "LogLine",
      "namespace": "cloud.project.dataProcessing",
      "description": "Log line",
      "properties": {
        "content": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Content of the log",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the log",
          "required": false
        },
        "timestamp": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Datetime of the log",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.Metrics": {
      "id": "Metrics",
      "namespace": "cloud.project.dataProcessing",
      "description": "Metrics information",
      "properties": {
        "endpoints": {
          "type": "cloud.project.dataProcessing.MetricsEndpoint[]",
          "fullType": "cloud.project.dataProcessing.MetricsEndpoint[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metrics endpoint query platforms",
          "required": false
        },
        "token": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metrics token linked to the project",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.MetricsEndpoint": {
      "id": "MetricsEndpoint",
      "namespace": "cloud.project.dataProcessing",
      "description": "Job Logs",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of endpoint",
          "required": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "URL of endpoint",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.ParameterValidator": {
      "id": "ParameterValidator",
      "namespace": "cloud.project.dataProcessing",
      "description": "Conditions to which the value of parameter must conform",
      "properties": {
        "max": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Maximal value of parameter",
          "required": false
        },
        "min": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "Minimal value of parameter",
          "required": false
        },
        "regex": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Regex to match value of parameter",
          "required": false
        }
      }
    },
    "cloud.project.dataProcessing.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloud.project.dataProcessing",
      "description": "Possible state of the job",
      "enum": [
        "UNKNOWN",
        "PENDING",
        "SUBMITTED",
        "RUNNING",
        "CANCELLING",
        "FAILED",
        "TERMINATED",
        "COMPLETED"
      ],
      "enumType": "string"
    },
    "cloud.project.io.Stream": {
      "id": "Stream",
      "namespace": "cloud.project.io",
      "description": "A stream to send data",
      "properties": {
        "backlog": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Backlog of the stream in RFC3339 (duration)",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Description of the stream",
          "required": false
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the stream",
          "required": false
        },
        "kind": {
          "type": "cloud.project.io.StreamKindEnum",
          "fullType": "cloud.project.io.StreamKindEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Kind of persistence for the stream.",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the stream",
          "required": false
        },
        "regions": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Regions where the stream is available",
          "required": false
        },
        "retention": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Retention of the stream in RFC3339 (duration)",
          "required": false
        },
        "status": {
          "type": "cloud.project.io.StreamStatusEnum",
          "fullType": "cloud.project.io.StreamStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the stream.",
          "required": false
        },
        "throttling": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Throttling of the stream (number of message allowed per second for the stream)",
          "required": false
        }
      }
    },
    "cloud.project.io.StreamCreation": {
      "id": "StreamCreation",
      "namespace": "cloud.project.io",
      "description": "Create a stream of data",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of the stream",
          "required": true
        },
        "kind": {
          "type": "cloud.project.io.StreamKindEnum",
          "fullType": "cloud.project.io.StreamKindEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Kind of the stream",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the stream",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Region where the stream will be available",
          "required": true
        }
      }
    },
    "cloud.project.io.StreamKindEnum": {
      "id": "StreamKindEnum",
      "namespace": "cloud.project.io",
      "description": "Kind of persistence for the stream",
      "enum": [
        "NON_PERSISTENT",
        "PERSISTENT"
      ],
      "enumType": "string"
    },
    "cloud.project.io.StreamStats": {
      "id": "StreamStats",
      "namespace": "cloud.project.io",
      "description": "Get statistics of a stream",
      "properties": {
        "usage": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of messages per second",
          "required": false
        }
      }
    },
    "cloud.project.io.StreamStatusEnum": {
      "id": "StreamStatusEnum",
      "namespace": "cloud.project.io",
      "description": "Status of the stream",
      "enum": [
        "INSTALLING",
        "RUNNING",
        "ERROR"
      ],
      "enumType": "string"
    },
    "cloud.project.io.stream.Region": {
      "id": "Region",
      "namespace": "cloud.project.io.stream",
      "description": "Region information",
      "properties": {
        "endpoint": {
          "type": "cloud.project.io.stream.RegionEndpoint",
          "fullType": "cloud.project.io.stream.RegionEndpoint",
          "canBeNull": false,
          "readOnly": true,
          "description": "Endpoint of the region",
          "required": false
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region name",
          "required": false
        }
      }
    },
    "cloud.project.io.stream.RegionEndpoint": {
      "id": "RegionEndpoint",
      "namespace": "cloud.project.io.stream",
      "description": "Region information",
      "properties": {
        "pulsar": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pulsar endpoint of the stream",
          "required": false
        }
      }
    },
    "cloud.project.io.stream.Subscription": {
      "id": "Subscription",
      "namespace": "cloud.project.io.stream",
      "description": "Create a consumer on a stream",
      "properties": {
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the subscription",
          "required": false
        },
        "kind": {
          "type": "cloud.project.io.stream.SubscriptionKindEnum",
          "fullType": "cloud.project.io.stream.SubscriptionKindEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Kind of the subscription",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the subscription",
          "required": false
        }
      }
    },
    "cloud.project.io.stream.SubscriptionCreation": {
      "id": "SubscriptionCreation",
      "namespace": "cloud.project.io.stream",
      "description": "Create a subscription on a stream",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the subscription",
          "required": true
        }
      }
    },
    "cloud.project.io.stream.SubscriptionKindEnum": {
      "id": "SubscriptionKindEnum",
      "namespace": "cloud.project.io.stream",
      "description": "Kind of the subscription",
      "enum": [
        "SHARED",
        "KEY_SHARED",
        "EXCLUSIVE",
        "FAILOVER"
      ],
      "enumType": "string"
    },
    "cloud.project.io.stream.SubscriptionStats": {
      "id": "SubscriptionStats",
      "namespace": "cloud.project.io.stream",
      "description": "Get statistic of a subscription",
      "properties": {
        "lag": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Messages waiting to be consumed",
          "required": false
        }
      }
    },
    "cloud.project.io.stream.Token": {
      "id": "Token",
      "namespace": "cloud.project.io.stream",
      "description": "Token to access a stream",
      "properties": {
        "action": {
          "type": "cloud.project.io.stream.TokenActionEnum",
          "fullType": "cloud.project.io.stream.TokenActionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Action of the token",
          "required": false
        },
        "id": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the token",
          "required": false
        },
        "token": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": true,
          "description": "Access token",
          "required": false
        }
      }
    },
    "cloud.project.io.stream.TokenActionEnum": {
      "id": "TokenActionEnum",
      "namespace": "cloud.project.io.stream",
      "description": "Action of the token",
      "enum": [
        "CONSUME",
        "PRODUCE",
        "BOTH"
      ],
      "enumType": "string"
    },
    "cloud.project.io.stream.TokenCreation": {
      "id": "TokenCreation",
      "namespace": "cloud.project.io.stream",
      "description": "Create a token to access a stream",
      "properties": {
        "action": {
          "type": "cloud.project.io.stream.TokenActionEnum",
          "fullType": "cloud.project.io.stream.TokenActionEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Action of the token",
          "required": true
        }
      }
    },
    "cloud.project.loadbalancer.Address": {
      "id": "Address",
      "namespace": "cloud.project.loadbalancer",
      "description": "Address to reach the load balancer",
      "properties": {
        "ipv4": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP version 4",
          "required": false
        },
        "ipv6": {
          "type": "ipv6",
          "fullType": "ipv6",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP version 6",
          "required": false
        }
      }
    },
    "cloud.project.loadbalancer.Addresses": {
      "id": "Addresses",
      "namespace": "cloud.project.loadbalancer",
      "description": "IP list split in version 4 and 6",
      "properties": {
        "ipv4": {
          "type": "ipv4Block[]",
          "fullType": "ipv4Block[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP version 4 list",
          "required": false
        },
        "ipv6": {
          "type": "ipv6Block[]",
          "fullType": "ipv6Block[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP version 6 list",
          "required": false
        }
      }
    },
    "cloud.project.loadbalancer.Backend": {
      "id": "Backend",
      "namespace": "cloud.project.loadbalancer",
      "description": "A load balancer backend",
      "properties": {
        "balancer": {
          "type": "cloud.project.loadbalancer.backend.BalancerAlgorithmEnum",
          "fullType": "cloud.project.loadbalancer.backend.BalancerAlgorithmEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Use a specific balancer algorithm",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The backend name",
          "required": true
        },
        "proxyProtocol": {
          "type": "cloud.project.loadbalancer.backend.ProxyProtocolEnum",
          "fullType": "cloud.project.loadbalancer.backend.ProxyProtocolEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Use proxy protocol on backend",
          "required": false
        },
        "servers": {
          "type": "cloud.project.loadbalancer.Server[]",
          "fullType": "cloud.project.loadbalancer.Server[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of server in backend",
          "required": true
        }
      }
    },
    "cloud.project.loadbalancer.BackendSelector": {
      "id": "BackendSelector",
      "namespace": "cloud.project.loadbalancer",
      "description": "Select a load balancer backend",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The backend name",
          "required": true
        }
      }
    },
    "cloud.project.loadbalancer.Configuration": {
      "id": "Configuration",
      "namespace": "cloud.project.loadbalancer",
      "description": "A load balancer configuration",
      "properties": {
        "backends": {
          "type": "cloud.project.loadbalancer.Backend[]",
          "fullType": "cloud.project.loadbalancer.Backend[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of backends",
          "required": false
        },
        "frontends": {
          "type": "cloud.project.loadbalancer.Frontend[]",
          "fullType": "cloud.project.loadbalancer.Frontend[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of frontends",
          "required": false
        },
        "version": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Identifier and version of the configuration",
          "required": false
        }
      }
    },
    "cloud.project.loadbalancer.ConfigurationCreation": {
      "id": "ConfigurationCreation",
      "namespace": "cloud.project.loadbalancer",
      "description": "A load balancer configuration",
      "properties": {
        "backends": {
          "type": "cloud.project.loadbalancer.Backend[]",
          "fullType": "cloud.project.loadbalancer.Backend[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of backends",
          "required": false
        },
        "frontends": {
          "type": "cloud.project.loadbalancer.Frontend[]",
          "fullType": "cloud.project.loadbalancer.Frontend[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of frontends",
          "required": false
        },
        "version": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Identifier and version of the configuration",
          "required": false
        }
      }
    },
    "cloud.project.loadbalancer.ConfigurationVersion": {
      "id": "ConfigurationVersion",
      "namespace": "cloud.project.loadbalancer",
      "description": "Information about version of the configuration",
      "properties": {
        "applied": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Applied version of the configuration",
          "required": false
        },
        "latest": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Latest version of the configuration",
          "required": false
        }
      }
    },
    "cloud.project.loadbalancer.Frontend": {
      "id": "Frontend",
      "namespace": "cloud.project.loadbalancer",
      "description": "A load balancer frontend",
      "properties": {
        "backends": {
          "type": "cloud.project.loadbalancer.BackendSelector[]",
          "fullType": "cloud.project.loadbalancer.BackendSelector[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Selector for backend",
          "required": true
        },
        "mode": {
          "type": "cloud.project.loadbalancer.frontend.ModeEnum",
          "fullType": "cloud.project.loadbalancer.frontend.ModeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Load balancing mode",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The frontend name",
          "required": true
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Port to listen",
          "required": true
        },
        "whitelist": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "IP range to whitelist",
          "required": false
        }
      }
    },
    "cloud.project.loadbalancer.Region": {
      "id": "Region",
      "namespace": "cloud.project.loadbalancer",
      "description": "Region information",
      "properties": {
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Region name",
          "required": false
        }
      }
    },
    "cloud.project.loadbalancer.Server": {
      "id": "Server",
      "namespace": "cloud.project.loadbalancer",
      "description": "A load balancer backend server",
      "properties": {
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "IP address of a server",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Server name",
          "required": true
        },
        "noCheck": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Disable health check",
          "required": false
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Port that the server listen",
          "required": true
        },
        "weight": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Weight of the server in the backend",
          "required": false
        }
      }
    },
    "cloud.project.loadbalancer.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "cloud.project.loadbalancer",
      "description": "Status of a load balancer",
      "enum": [
        "CREATED",
        "APPLYING",
        "RUNNING",
        "DELETING",
        "ERROR",
        "FROZEN"
      ],
      "enumType": "string"
    },
    "cloud.project.loadbalancer.backend.BalancerAlgorithmEnum": {
      "id": "BalancerAlgorithmEnum",
      "namespace": "cloud.project.loadbalancer.backend",
      "description": "Available load balancer backend balancer algorithm",
      "enum": [
        "roundrobin",
        "static-rr",
        "leastconn",
        "first",
        "source"
      ],
      "enumType": "string"
    },
    "cloud.project.loadbalancer.backend.ProxyProtocolEnum": {
      "id": "ProxyProtocolEnum",
      "namespace": "cloud.project.loadbalancer.backend",
      "description": "Available load balancer backend proxy-protocol",
      "enum": [
        "v1",
        "v2",
        "v2-ssl",
        "v2-cn"
      ],
      "enumType": "string"
    },
    "cloud.project.loadbalancer.frontend.ModeEnum": {
      "id": "ModeEnum",
      "namespace": "cloud.project.loadbalancer.frontend",
      "description": "Available load balancer frontend mode",
      "enum": [
        "HTTP",
        "TCP"
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
    "cloud.usage.Period": {
      "id": "Period",
      "namespace": "cloud.usage",
      "description": "Period",
      "properties": {
        "from": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Usage from",
          "required": false
        },
        "to": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Usage to",
          "required": false
        }
      }
    },
    "cloud.usage.UsageCurrent": {
      "id": "UsageCurrent",
      "namespace": "cloud.usage",
      "description": "UsageCurrent",
      "properties": {
        "hourlyUsage": {
          "type": "cloud.billingView.HourlyResources",
          "fullType": "cloud.billingView.HourlyResources",
          "canBeNull": true,
          "readOnly": true,
          "description": "Hourly usage",
          "required": false
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Entry last update",
          "required": false
        },
        "monthlyUsage": {
          "type": "cloud.billingView.MonthlyResources",
          "fullType": "cloud.billingView.MonthlyResources",
          "canBeNull": true,
          "readOnly": true,
          "description": "Monthly usage",
          "required": false
        },
        "period": {
          "type": "cloud.usage.Period",
          "fullType": "cloud.usage.Period",
          "canBeNull": false,
          "readOnly": true,
          "description": "Usage dates (from/to)",
          "required": false
        },
        "resourcesUsage": {
          "type": "cloud.billingView.TypedResources[]",
          "fullType": "cloud.billingView.TypedResources[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Resource usage (billed per hour/minute/second/unit)",
          "required": false
        }
      }
    },
    "cloud.usage.UsageForecast": {
      "id": "UsageForecast",
      "namespace": "cloud.usage",
      "description": "UsageForecast",
      "properties": {
        "hourlyUsage": {
          "type": "cloud.billingView.HourlyResources",
          "fullType": "cloud.billingView.HourlyResources",
          "canBeNull": true,
          "readOnly": true,
          "description": "Hourly forecast",
          "required": false
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Entry last update",
          "required": false
        },
        "monthlyUsage": {
          "type": "cloud.billingView.MonthlyResources",
          "fullType": "cloud.billingView.MonthlyResources",
          "canBeNull": true,
          "readOnly": true,
          "description": "Monthly forecast",
          "required": false
        },
        "period": {
          "type": "cloud.usage.Period",
          "fullType": "cloud.usage.Period",
          "canBeNull": false,
          "readOnly": true,
          "description": "Forecast dates (from/to)",
          "required": false
        },
        "resourcesUsage": {
          "type": "cloud.billingView.TypedResources[]",
          "fullType": "cloud.billingView.TypedResources[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Resource usage forecast (billed per hour/minute/second/unit)",
          "required": false
        },
        "usableCredits": {
          "type": "cloud.billingView.UsedCredits",
          "fullType": "cloud.billingView.UsedCredits",
          "canBeNull": true,
          "readOnly": true,
          "description": "Usable credit to pay next bill",
          "required": false
        }
      }
    },
    "cloud.usage.UsageHistory": {
      "id": "UsageHistory",
      "namespace": "cloud.usage",
      "description": "UsageHistory",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Usage id",
          "required": false
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Entry last update",
          "required": false
        },
        "period": {
          "type": "cloud.usage.Period",
          "fullType": "cloud.usage.Period",
          "canBeNull": false,
          "readOnly": true,
          "description": "Usage dates (from/to)",
          "required": false
        }
      }
    },
    "cloud.usage.UsageHistoryDetail": {
      "id": "UsageHistoryDetail",
      "namespace": "cloud.usage",
      "description": "UsageHistoryDetail",
      "properties": {
        "hourlyUsage": {
          "type": "cloud.billingView.HourlyResources",
          "fullType": "cloud.billingView.HourlyResources",
          "canBeNull": true,
          "readOnly": true,
          "description": "Hourly usage",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Usage id",
          "required": false
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Entry last update",
          "required": false
        },
        "monthlyUsage": {
          "type": "cloud.billingView.MonthlyResources",
          "fullType": "cloud.billingView.MonthlyResources",
          "canBeNull": true,
          "readOnly": true,
          "description": "Monthly usage",
          "required": false
        },
        "period": {
          "type": "cloud.usage.Period",
          "fullType": "cloud.usage.Period",
          "canBeNull": false,
          "readOnly": true,
          "description": "Usage dates (from/to)",
          "required": false
        },
        "resourcesUsage": {
          "type": "cloud.billingView.TypedResources[]",
          "fullType": "cloud.billingView.TypedResources[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Resource usage (billed per hour/minute/second/unit)",
          "required": false
        }
      }
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
    "nichandle.OvhSubsidiaryEnum": {
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle",
      "description": "OVH subsidiaries",
      "enum": [
        "ASIA",
        "AU",
        "CA",
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
        "QC",
        "SG",
        "SN",
        "TN",
        "US",
        "WE",
        "WS"
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
    }
  }
}