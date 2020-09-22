"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "Get agreements related to a product",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get agreements related to a product",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.project.ProductNameEnum",
                            "description": "Name of a product supported by cloud projects",
                            "fullType": "cloud.project.ProductNameEnum",
                            "name": "product",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.ProductAgreements"
                }
            ],
            "path": "/cloud/agreements"
        },
        {
            "description": "Start a new cloud project",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-03-01T10:00:00+01:00",
                        "deprecatedDate": "2020-02-10T10:00:00+01:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/order/cart/{cartId}/cloud",
                        "value": "DEPRECATED"
                    },
                    "description": "Start a new cloud project",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Amount of cloud credit to purchase. Unit is base currency.",
                            "fullType": "long",
                            "name": "credit",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Project description",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "password",
                            "description": "Voucher code",
                            "fullType": "password",
                            "name": "voucher",
                            "paramType": "body",
                            "required": false
                        }
                    ],
                    "responseType": "cloud.project.NewProject"
                }
            ],
            "path": "/cloud/createProject"
        },
        {
            "description": "Get information about a cloud project creation",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-03-01T10:00:00+01:00",
                        "deprecatedDate": "2020-02-10T10:00:00+01:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/order/cart/{cartId}/cloud",
                        "value": "DEPRECATED"
                    },
                    "description": "Get information about a cloud project creation",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "password",
                            "description": "Voucher code",
                            "fullType": "password",
                            "name": "voucher",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "cloud.project.NewProjectInfo"
                }
            ],
            "path": "/cloud/createProjectInfo"
        },
        {
            "description": "Check your eligibility to create a Public Cloud order",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Check your eligibility to create a Public Cloud order",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "password",
                            "description": "Voucher code",
                            "fullType": "password",
                            "name": "voucher",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "cloud.project.EligibilityInfo"
                }
            ],
            "path": "/cloud/eligibility"
        },
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
                    "responseType": "cloud.order.Order[]"
                }
            ],
            "path": "/cloud/order"
        },
        {
            "description": "Get services prices",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2018-03-01T00:00:00+01:00",
                        "deprecatedDate": "2017-12-25T00:00:00+01:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/order/catalog/formatted/cloud",
                        "value": "DEPRECATED"
                    },
                    "description": "Get services prices",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "OVH cloud flavor id",
                            "fullType": "string",
                            "name": "flavorId",
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
                    "responseType": "cloud.Price"
                }
            ],
            "path": "/cloud/price"
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
                    "responseType": "string[]"
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
                    "responseType": "cloud.Project"
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}"
        },
        {
            "description": "List the cloud.Acl objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get ACL on your cloud project",
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
                        },
                        {
                            "dataType": "cloud.AclTypeEnum",
                            "description": "Filter the value of type property (=)",
                            "fullType": "cloud.AclTypeEnum",
                            "name": "type",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "string[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Create new ACL",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Deleguates rights to",
                            "fullType": "coreTypes.AccountId:string",
                            "name": "accountId",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "cloud.AclTypeEnum",
                            "description": "Acl type",
                            "fullType": "cloud.AclTypeEnum",
                            "name": "type",
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
                    "responseType": "cloud.Acl"
                }
            ],
            "path": "/cloud/project/{serviceName}/acl"
        },
        {
            "description": "Cloud ACL",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete ACL",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "OVH customer unique identifier",
                            "fullType": "coreTypes.AccountId:string",
                            "name": "accountId",
                            "paramType": "path",
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
                    "responseType": "void"
                },
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
                            "description": "OVH customer unique identifier",
                            "fullType": "coreTypes.AccountId:string",
                            "name": "accountId",
                            "paramType": "path",
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
                    "responseType": "cloud.Acl"
                }
            ],
            "path": "/cloud/project/{serviceName}/acl/{accountId}"
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
                    "responseType": "cloud.instance.InstanceDetail[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/activateMonthlyBilling"
        },
        {
            "description": "List Serving Engine available backends",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List Serving Engine available backends",
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
                    "responseType": "cloud.project.ai.serving.Backend[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/capabilities/serving/backend"
        },
        {
            "description": "List Serving Engine Features",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List Serving Engine Features",
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
                    "responseType": "cloud.project.ai.serving.Features"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/capabilities/serving/feature"
        },
        {
            "description": "List Serving Engine available flavor",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List Serving Engine available flavor",
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
                    "responseType": "cloud.project.ai.serving.Flavor[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/capabilities/serving/flavor"
        },
        {
            "description": "List Serving Engine available frameworks",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List Serving Engine available frameworks",
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
                    "responseType": "cloud.project.ai.serving.Framework[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/capabilities/serving/framework"
        },
        {
            "description": "List Serving Engine Preset Model Images",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List Serving Engine Preset Model Images",
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
                    "responseType": "cloud.project.ai.serving.PresetImage[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/capabilities/serving/presetImage"
        },
        {
            "description": "List Serving Engine available regions",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List Serving Engine available regions",
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
                    "responseType": "string[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/capabilities/serving/region"
        },
        {
            "description": "Manage serving engine namespaces",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List namespaces of the project",
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
                    "responseType": "cloud.project.ai.serving.Namespace[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Create a new namespace",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.project.ai.serving.NamespaceCreation",
                            "description": "Request Body",
                            "fullType": "cloud.project.ai.serving.NamespaceCreation",
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
                    "responseType": "cloud.project.ai.serving.Namespace"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/serving"
        },
        {
            "description": "Manage serving engine namespaces",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete a namespace",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get the namespace information",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "cloud.project.ai.serving.Namespace"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get metrics token and urls compatible with this token",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "cloud.project.ai.serving.Metrics"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/metrics"
        },
        {
            "description": "Manage models",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List models",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "cloud.project.ai.serving.Model[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Create a new model",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.project.ai.serving.ModelDefinition",
                            "description": "Request Body",
                            "fullType": "cloud.project.ai.serving.ModelDefinition",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "cloud.project.ai.serving.Model"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/model"
        },
        {
            "description": "Manage models",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete a model",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Model ID",
                            "fullType": "string",
                            "name": "modelId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get model information",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Model ID",
                            "fullType": "string",
                            "name": "modelId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "cloud.project.ai.serving.Model"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update a model",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Model ID",
                            "fullType": "string",
                            "name": "modelId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "cloud.project.ai.serving.Model"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/model/{modelId}"
        },
        {
            "description": "Attach a registry to your namespace",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Detach the current registry",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get registry information",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "cloud.project.ai.serving.Registry"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Attach a docker registry",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.project.ai.serving.Registry",
                            "description": "Request Body",
                            "fullType": "cloud.project.ai.serving.Registry",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "cloud.project.ai.serving.RegistryResponse"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/registry"
        },
        {
            "description": "Manage tokens",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List tokens",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "cloud.project.ai.serving.Token[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Create a new token",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.project.ai.serving.Token",
                            "description": "Request Body",
                            "fullType": "cloud.project.ai.serving.Token",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                    "responseType": "cloud.project.ai.serving.Token"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/token"
        },
        {
            "description": "Manage tokens",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete a token",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                            "dataType": "uuid",
                            "description": "Token ID",
                            "fullType": "uuid",
                            "name": "tokenId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get token information",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                            "dataType": "uuid",
                            "description": "Token ID",
                            "fullType": "uuid",
                            "name": "tokenId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.ai.serving.Token"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Renew a new token",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Namespace ID",
                            "fullType": "string",
                            "name": "namespaceId",
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
                            "dataType": "uuid",
                            "description": "Token ID",
                            "fullType": "uuid",
                            "name": "tokenId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.ai.serving.Token"
                }
            ],
            "path": "/cloud/project/{serviceName}/ai/serving/{namespaceId}/token/{tokenId}"
        },
        {
            "description": "List the cloud.Alerting objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Manage alerts on your consumption",
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
                    "responseType": "string[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Add new alert",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.AlertingDelayEnum",
                            "description": "Delay between alerts in seconds",
                            "fullType": "cloud.AlertingDelayEnum",
                            "name": "delay",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Email to contact",
                            "fullType": "string",
                            "name": "email",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "Monthly threshold for this alerting in currency",
                            "fullType": "long",
                            "name": "monthlyThreshold",
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
                    "responseType": "cloud.Alerting"
                }
            ],
            "path": "/cloud/project/{serviceName}/alerting"
        },
        {
            "description": "Cloud alerting consumption",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete alerting",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Alerting unique UUID",
                            "fullType": "string",
                            "name": "id",
                            "paramType": "path",
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
                    "responseType": "void"
                },
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
                            "description": "Alerting unique UUID",
                            "fullType": "string",
                            "name": "id",
                            "paramType": "path",
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
                    "responseType": "cloud.Alerting"
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
                            "dataType": "cloud.Alerting",
                            "description": "New object properties",
                            "fullType": "cloud.Alerting",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Alerting unique UUID",
                            "fullType": "string",
                            "name": "id",
                            "paramType": "path",
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/alerting/{id}"
        },
        {
            "description": "List the cloud.AlertingAlert objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "See alerts",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Alerting unique UUID",
                            "fullType": "string",
                            "name": "id",
                            "paramType": "path",
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
                    "responseType": "long[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/alerting/{id}/alert"
        },
        {
            "description": "Cloud alert on your consumption",
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
                            "dataType": "long",
                            "description": "Alert id",
                            "fullType": "long",
                            "name": "alertId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Alerting unique UUID",
                            "fullType": "string",
                            "name": "id",
                            "paramType": "path",
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
                    "responseType": "cloud.AlertingAlert"
                }
            ],
            "path": "/cloud/project/{serviceName}/alerting/{id}/alert/{alertId}"
        },
        {
            "description": "bill operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get your project bills",
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
                        },
                        {
                            "dataType": "datetime",
                            "description": "Get bills from",
                            "fullType": "datetime",
                            "name": "from",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "datetime",
                            "description": "Get bills to",
                            "fullType": "datetime",
                            "name": "to",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.Bill[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/bill"
        },
        {
            "description": "cancel operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Cancel project creation",
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/cancel"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List container registry capabilities per region",
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
                    "responseType": "cloud.containerRegistry.Capability[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/capabilities/containerRegistry"
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
                    "responseType": "cloud.kube.Flavor[]"
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
                    "responseType": "cloud.kube.RegionEnum[]"
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
                    "responseType": "string[]"
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
                    "responseType": "cloud.project.loadbalancer.Region"
                }
            ],
            "path": "/cloud/project/{serviceName}/capabilities/loadbalancer/region/{regionName}"
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
                            "description": "The project id",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/changeContact"
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
                    "responseType": "string"
                }
            ],
            "path": "/cloud/project/{serviceName}/confirmTermination"
        },
        {
            "description": "consumption operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get your project consumption",
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
                        },
                        {
                            "dataType": "datetime",
                            "description": "Get usage from",
                            "fullType": "datetime",
                            "name": "from",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "datetime",
                            "description": "Get usage to",
                            "fullType": "datetime",
                            "name": "to",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.ProjectUsage"
                }
            ],
            "path": "/cloud/project/{serviceName}/consumption"
        },
        {
            "description": "Manage registries",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List registries of the project",
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
                    "responseType": "cloud.containerRegistry.Registry[]"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Create a new registry",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.ProjectContainerRegistryCreation",
                            "description": "Request Body",
                            "fullType": "cloud.ProjectContainerRegistryCreation",
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
                    "responseType": "cloud.containerRegistry.Registry"
                }
            ],
            "path": "/cloud/project/{serviceName}/containerRegistry"
        },
        {
            "description": "Manage registries",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Delete a registry",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "RegistryID",
                            "fullType": "string",
                            "name": "registryID",
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
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get the registry information",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "RegistryID",
                            "fullType": "string",
                            "name": "registryID",
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
                    "responseType": "cloud.containerRegistry.Registry"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Update the registry",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.ProjectContainerRegistryUpdate",
                            "description": "Request Body",
                            "fullType": "cloud.ProjectContainerRegistryUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "RegistryID",
                            "fullType": "string",
                            "name": "registryID",
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/containerRegistry/{registryID}"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get available plans for the current registry.",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "RegistryID",
                            "fullType": "string",
                            "name": "registryID",
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
                    "responseType": "cloud.containerRegistry.Plan[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/containerRegistry/{registryID}/capabilities/plan"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Show the actual plan of the registry.",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "RegistryID",
                            "fullType": "string",
                            "name": "registryID",
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
                    "responseType": "cloud.containerRegistry.Plan"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Update the plan of a registry.",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.containerRegistry.PlanUpdate",
                            "description": "Request Body",
                            "fullType": "cloud.containerRegistry.PlanUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "RegistryID",
                            "fullType": "string",
                            "name": "registryID",
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/containerRegistry/{registryID}/plan"
        },
        {
            "description": "Manage users",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List registry user",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "RegistryID",
                            "fullType": "string",
                            "name": "registryID",
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
                    "responseType": "cloud.containerRegistry.User[]"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Create a new registry user",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.ProjectContainerRegistryUsersCreation",
                            "description": "Request Body",
                            "fullType": "cloud.ProjectContainerRegistryUsersCreation",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "RegistryID",
                            "fullType": "string",
                            "name": "registryID",
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
                    "responseType": "cloud.containerRegistry.User"
                }
            ],
            "path": "/cloud/project/{serviceName}/containerRegistry/{registryID}/users"
        },
        {
            "description": "Manage users",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Delete a registry user",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "RegistryID",
                            "fullType": "string",
                            "name": "registryID",
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
                            "description": "UserID",
                            "fullType": "string",
                            "name": "userID",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}"
        },
        {
            "description": "List the cloud.Credit objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get your credit",
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
                    "responseType": "long[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Add credit to your project",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Voucher code",
                            "fullType": "string",
                            "name": "code",
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/credit"
        },
        {
            "description": "Cloud credit",
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
                            "dataType": "long",
                            "description": "Credit id",
                            "fullType": "long",
                            "name": "id",
                            "paramType": "path",
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
                    "responseType": "cloud.Credit"
                }
            ],
            "path": "/cloud/project/{serviceName}/credit/{id}"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get authorization status",
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
                    "responseType": "cloud.project.dataProcessing.AuthorizationStatus"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Authorization of Data Processing service by allowing access to your object storage containers",
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/dataProcessing/authorization"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Data processing capabilities",
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
                    "responseType": "cloud.project.dataProcessing.Capability[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/dataProcessing/capabilities"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List all jobs",
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
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Submit a job",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.project.dataProcessing.Job",
                            "description": "Request Body",
                            "fullType": "cloud.project.dataProcessing.Job",
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
                    "responseType": "cloud.project.dataProcessing.Job"
                }
            ],
            "path": "/cloud/project/{serviceName}/dataProcessing/jobs"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Kill job with given id",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Job ID",
                            "fullType": "uuid",
                            "name": "jobId",
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
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get jobs information",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Job ID",
                            "fullType": "uuid",
                            "name": "jobId",
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
                    "responseType": "cloud.project.dataProcessing.Job"
                }
            ],
            "path": "/cloud/project/{serviceName}/dataProcessing/jobs/{jobId}"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get the logs of a job",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "uuid",
                            "description": "Job ID",
                            "fullType": "uuid",
                            "name": "jobId",
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
                            "description": "From how long ago we want logs. Example: from=now-2h. Or since when we want the logs. Example: 2019-10-28T12:00:00.000 (must be UTC).",
                            "fullType": "string",
                            "name": "from",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "cloud.project.dataProcessing.JobLogs"
                }
            ],
            "path": "/cloud/project/{serviceName}/dataProcessing/jobs/{jobId}/logs"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get metrics token and urls compatible with this token",
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
                    "responseType": "cloud.project.dataProcessing.Metrics"
                }
            ],
            "path": "/cloud/project/{serviceName}/dataProcessing/metrics"
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
                    "responseType": "cloud.flavor.Flavor[]"
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
                    "responseType": "cloud.flavor.Flavor"
                }
            ],
            "path": "/cloud/project/{serviceName}/flavor/{flavorId}"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2019-12-04T10:00:00+01:00",
                        "deprecatedDate": "2019-11-04T10:00:00+01:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project/{serviceName}/usage/forecast",
                        "value": "DEPRECATED"
                    },
                    "description": "Get your consumption forecast",
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
                            "dataType": "datetime",
                            "description": "Forecast until date",
                            "fullType": "datetime",
                            "name": "toDate",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.forecast.ProjectForecast"
                }
            ],
            "path": "/cloud/project/{serviceName}/forecast"
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
                    "responseType": "cloud.image.Image[]"
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
                    "responseType": "cloud.image.Image"
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
                    "responseType": "cloud.instance.Instance[]"
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
                    "responseType": "cloud.instance.InstanceDetail"
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
                    "responseType": "cloud.instance.Instance[]"
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
                    "responseType": "cloud.instancegroup.InstanceGroup[]"
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
                    "responseType": "cloud.instancegroup.InstanceGroup"
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
                    "responseType": "void"
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
                    "responseType": "cloud.instancegroup.InstanceGroup"
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
                    "responseType": "void"
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
                    "responseType": "cloud.instance.InstanceDetail"
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
                    "responseType": "void"
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
                    "responseType": "cloud.instance.InstanceDetail"
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
                    "responseType": "cloud.instance.ApplicationAccess"
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
                    "responseType": "cloud.instanceInterface.Interface[]"
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
                    "responseType": "cloud.instanceInterface.Interface"
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
                    "responseType": "void"
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
                    "responseType": "cloud.instanceInterface.Interface"
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
                    "responseType": "cloud.instance.InstanceMetrics"
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
                    "responseType": "void"
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
                    "responseType": "cloud.instance.InstanceDetail"
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
                    "responseType": "cloud.instance.RescueAdminPassword"
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
                    "responseType": "cloud.instance.InstanceDetail"
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
                    "responseType": "void"
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
                    "responseType": "void"
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
                    "responseType": "void"
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
                    "description": "Stop an instance",
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
                    "responseType": "void"
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
                    "responseType": "cloud.instance.InstanceVnc"
                }
            ],
            "path": "/cloud/project/{serviceName}/instance/{instanceId}/vnc"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
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
                    "responseType": "string[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/capabilities/stream/region"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Get connection information from a region",
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
                    "responseType": "cloud.project.io.stream.Region"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/capabilities/stream/region/{regionName}"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "List all stream for a tenant",
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
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Create a stream",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.project.io.StreamCreation",
                            "description": "Request Body",
                            "fullType": "cloud.project.io.StreamCreation",
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
                    "responseType": "cloud.project.io.Stream"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/stream"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Delete a stream",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Get a stream",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.io.Stream"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Update a stream",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.project.io.Stream",
                            "description": "Request Body",
                            "fullType": "cloud.project.io.Stream",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.io.Stream"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/stream/{streamId}"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Retrieve statistics of the stream",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.io.StreamStats"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/stream/{streamId}/stats"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "List all subscriptions for a stream",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Create a new subscription",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.project.io.stream.SubscriptionCreation",
                            "description": "Request Body",
                            "fullType": "cloud.project.io.stream.SubscriptionCreation",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.io.stream.Subscription"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/stream/{streamId}/subscription"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Delete a subscription",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Subscription ID",
                            "fullType": "uuid",
                            "name": "subscriptionId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Get a subscription",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Subscription ID",
                            "fullType": "uuid",
                            "name": "subscriptionId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.io.stream.Subscription"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Reset a cursor",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Subscription ID",
                            "fullType": "uuid",
                            "name": "subscriptionId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}/resetCursor"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Retrieve statistics of the subscription",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Subscription ID",
                            "fullType": "uuid",
                            "name": "subscriptionId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.io.stream.SubscriptionStats"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}/stats"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "List all tokens for a stream",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "uuid[]"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Create a token",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cloud.project.io.stream.TokenCreation",
                            "description": "Request Body",
                            "fullType": "cloud.project.io.stream.TokenCreation",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.io.stream.Token"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/stream/{streamId}/token"
        },
        {
            "description": "",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Delete a token",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Token ID",
                            "fullType": "uuid",
                            "name": "tokenId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "deletionDate": "2020-10-01T00:00:00+00:00",
                        "deprecatedDate": "2020-09-15T00:00:00+00:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/cloud/project",
                        "value": "DEPRECATED"
                    },
                    "description": "Get token",
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
                            "dataType": "uuid",
                            "description": "Stream ID",
                            "fullType": "uuid",
                            "name": "streamId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "uuid",
                            "description": "Token ID",
                            "fullType": "uuid",
                            "name": "tokenId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.project.io.stream.Token"
                }
            ],
            "path": "/cloud/project/{serviceName}/io/stream/{streamId}/token/{tokenId}"
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
                    "responseType": "cloud.ip.CloudIp[]"
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
                    "responseType": "cloud.ip.FailoverIp[]"
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
                    "responseType": "cloud.ip.FailoverIp"
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
                    "responseType": "cloud.ip.FailoverIp"
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
                    "responseType": "string[]"
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
                    "responseType": "cloud.kube.Cluster"
                }
            ],
            "path": "/cloud/project/{serviceName}/kube"
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
                    "responseType": "cloud.kube.RegionEnum[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/kube/regions"
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
                    "responseType": "void"
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
                    "responseType": "cloud.kube.Cluster"
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/kube/{kubeId}"
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
                    "responseType": "cloud.kube.Flavor[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/kube/{kubeId}/flavors"
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
                    "responseType": "cloud.kube.Kubeconfig"
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
                    "responseType": "void"
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
                    "responseType": "cloud.kube.Node[]"
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
                    "responseType": "cloud.kube.Node"
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
                    "responseType": "void"
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
                    "responseType": "cloud.kube.Node"
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
                    "responseType": "cloud.kube.NodePool[]"
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
                    "responseType": "cloud.kube.NodePool"
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
                    "responseType": "void"
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
                    "responseType": "cloud.kube.NodePool"
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
                    "responseType": "void"
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
                    "responseType": "cloud.kube.Node[]"
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/kube/{kubeId}/reset"
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
                    "responseType": "void"
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/kube/{kubeId}/updatePolicy"
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
                    "responseType": "cloud.Lab[]"
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
                    "responseType": "cloud.Lab"
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
                    "responseType": "cloud.Operation"
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
                    "responseType": "cloud.LabAgreements"
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
                    "responseType": "uuid[]"
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
                    "responseType": "cloud.project.LoadBalancer"
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
                    "responseType": "void"
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
                    "responseType": "cloud.project.LoadBalancer"
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
                    "responseType": "cloud.project.LoadBalancer"
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
                    "responseType": "long[]"
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
                    "responseType": "cloud.project.loadbalancer.Configuration"
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
                    "responseType": "void"
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
                    "responseType": "cloud.project.loadbalancer.Configuration"
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
                    "responseType": "cloud.project.loadbalancer.Configuration"
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
                    "responseType": "cloud.migration.Migration[]"
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
                            "description": "Migration ID",
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
                    "responseType": "cloud.migration.Migration"
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
                            "dataType": "cloud.ProjectMigrationUpdate",
                            "description": "Request Body",
                            "fullType": "cloud.ProjectMigrationUpdate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Migration ID",
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
                    "responseType": "cloud.migration.Migration"
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
                    "responseType": "cloud.network.Network[]"
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
                    "responseType": "cloud.network.Network"
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
                    "responseType": "void"
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
                    "responseType": "cloud.network.Network"
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
                    "responseType": "void"
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
                    "responseType": "cloud.network.Network"
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
                    "responseType": "cloud.network.Subnet[]"
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
                    "responseType": "cloud.network.Subnet"
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
                    "responseType": "void"
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
                    "responseType": "cloud.network.Network[]"
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
                    "responseType": "cloud.openstackClient.Session"
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
                    "responseType": "cloud.Operation[]"
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
                    "responseType": "cloud.Operation"
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
                    "responseType": "cloud.quota.Quotas[]"
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
                    "responseType": "string[]"
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
                    "responseType": "cloud.Region"
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
                    "responseType": "cloud.Region"
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
                    "responseType": "cloud.quota.Quotas"
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
                    "responseType": "cloud.Operation"
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
                    "responseType": "cloud.quota.AllowedQuota[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/region/{regionName}/quota/allowed"
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
                    "responseType": "cloud.Backup[]"
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
                    "responseType": "cloud.Backup"
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
                    "responseType": "void"
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
                    "responseType": "cloud.Backup"
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
                    "responseType": "cloud.AvailableRegion[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/regionAvailable"
        },
        {
            "description": "retain operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Do not expire the project, and retain it. You will have to pay for the resources you will use after using this call",
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/retain"
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
                    "responseType": "cloud.role.Roles"
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
                    "responseType": "services.Service"
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
                    "responseType": "void"
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
                    "responseType": "cloud.image.Image[]"
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
                    "responseType": "cloud.image.Image"
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
                    "responseType": "cloud.image.Image"
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
                    "responseType": "cloud.sshkey.SshKey[]"
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
                    "responseType": "cloud.sshkey.SshKeyDetail"
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
                    "responseType": "void"
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
                    "responseType": "cloud.sshkey.SshKeyDetail"
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
                    "responseType": "cloud.stack.Stack[]"
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
                    "responseType": "cloud.stack.Stack"
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
                    "responseType": "cloud.openstackClient.Session"
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
                    "responseType": "cloud.storage.Container[]"
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
                    "responseType": "cloud.storage.Container"
                }
            ],
            "path": "/cloud/project/{serviceName}/storage"
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
                    "responseType": "cloud.storage.ContainerAccess"
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
                    "responseType": "cloud.storage.ContainerAccess"
                }
            ],
            "path": "/cloud/project/{serviceName}/storage/access"
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
                        }
                    ],
                    "responseType": "void"
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
                    "responseType": "cloud.storage.ContainerDetail"
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
                    "responseType": "void"
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
                    "responseType": "void"
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
                    "responseType": "void"
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
                    "responseType": "cloud.storage.ContainerObjectTempURL"
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
                    "responseType": "void"
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
                    "responseType": "cloud.user.UserDetail"
                }
            ],
            "path": "/cloud/project/{serviceName}/storage/{containerId}/user"
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
                    "responseType": "string"
                }
            ],
            "path": "/cloud/project/{serviceName}/terminate"
        },
        {
            "description": "unleash operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request more quota on your /cloud project",
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
                    "responseType": "void"
                }
            ],
            "path": "/cloud/project/{serviceName}/unleash"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get current usage",
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
                    "responseType": "cloud.usage.UsageCurrent"
                }
            ],
            "path": "/cloud/project/{serviceName}/usage/current"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get usage forecast",
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
                    "responseType": "cloud.usage.UsageForecast"
                }
            ],
            "path": "/cloud/project/{serviceName}/usage/forecast"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Usage information details",
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
                            "dataType": "datetime",
                            "description": "Filter results having date superior to from",
                            "fullType": "datetime",
                            "name": "from",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "datetime",
                            "description": "Filter results having date inferior to",
                            "fullType": "datetime",
                            "name": "to",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "cloud.usage.UsageHistory[]"
                }
            ],
            "path": "/cloud/project/{serviceName}/usage/history"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Usage information details",
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
                            "description": "Usage ID",
                            "fullType": "string",
                            "name": "usageId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cloud.usage.UsageHistoryDetail"
                }
            ],
            "path": "/cloud/project/{serviceName}/usage/history/{usageId}"
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
                    "responseType": "cloud.user.User[]"
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
                    "responseType": "cloud.user.UserDetail"
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
                    "responseType": "void"
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
                    "responseType": "cloud.user.User"
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
                    "responseType": "cloud.user.Openrc"
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
                    "responseType": "cloud.user.Rclone"
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
                    "responseType": "cloud.user.UserDetail"
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
                    "responseType": "cloud.role.Role[]"
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
                    "responseType": "cloud.user.UserDetail"
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
                    "responseType": "cloud.user.UserDetail"
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
                    "responseType": "void"
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
                    "responseType": "cloud.role.Role"
                }
            ],
            "path": "/cloud/project/{serviceName}/user/{userId}/role/{roleId}"
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
                    "responseType": "cloud.authentication.Token"
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
                    "responseType": "cloud.volume.Volume[]"
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
                    "responseType": "cloud.volume.Volume"
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
                    "responseType": "cloud.volume.Snapshot[]"
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
                    "responseType": "void"
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
                    "responseType": "cloud.volume.Snapshot"
                }
            ],
            "path": "/cloud/project/{serviceName}/volume/snapshot/{snapshotId}"
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
                    "responseType": "void"
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
                    "responseType": "cloud.volume.Volume"
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
                    "responseType": "cloud.volume.Volume"
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
                    "responseType": "cloud.volume.Volume"
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
                    "responseType": "cloud.volume.Volume"
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
                    "responseType": "cloud.volume.Snapshot"
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
                    "responseType": "cloud.volume.Volume"
                }
            ],
            "path": "/cloud/project/{serviceName}/volume/{volumeId}/upsize"
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
                    "responseType": "cloud.Vrack"
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
                    "responseType": "cloud.Operation"
                }
            ],
            "path": "/cloud/project/{serviceName}/vrack"
        },
        {
            "description": "Get services prices for a subsidiary",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get services prices for a subsidiary",
                    "httpMethod": "GET",
                    "noAuthentication": true,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "OVH cloud flavor id",
                            "fullType": "string",
                            "name": "flavorId",
                            "paramType": "query",
                            "required": false
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
                            "description": "Region",
                            "fullType": "string",
                            "name": "region",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "cloud.Price"
                }
            ],
            "path": "/cloud/subsidiaryPrice"
        }
    ],
    "basePath": "https://eu.api.ovh.com/1.0",
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
        "cloud.Acl": {
            "description": "Cloud ACL",
            "id": "Acl",
            "namespace": "cloud",
            "properties": {
                "accountId": {
                    "canBeNull": false,
                    "description": "OVH customer unique identifier",
                    "fullType": "coreTypes.AccountId:string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "type": {
                    "canBeNull": false,
                    "description": "ACL type",
                    "fullType": "cloud.AclTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.AclTypeEnum"
                }
            }
        },
        "cloud.AclTypeEnum": {
            "description": "Possible values for ACL type",
            "enum": [
                "readOnly",
                "readWrite"
            ],
            "enumType": "string",
            "id": "AclTypeEnum",
            "namespace": "cloud"
        },
        "cloud.Alerting": {
            "description": "Cloud alerting consumption",
            "id": "Alerting",
            "namespace": "cloud",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Alerting creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "delay": {
                    "canBeNull": false,
                    "description": "Delay between alerts in seconds",
                    "fullType": "cloud.AlertingDelayEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.AlertingDelayEnum"
                },
                "email": {
                    "canBeNull": false,
                    "description": "Email to contact",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "formattedMonthlyThreshold": {
                    "canBeNull": false,
                    "description": "Formatted monthly threshold for this alerting",
                    "fullType": "order.Price",
                    "readOnly": true,
                    "required": false,
                    "type": "order.Price"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Alerting unique UUID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "monthlyThreshold": {
                    "canBeNull": false,
                    "description": "Monthly threshold for this alerting",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloud.AlertingAlert": {
            "description": "Cloud alert on your consumption",
            "id": "AlertingAlert",
            "namespace": "cloud",
            "properties": {
                "alertDate": {
                    "canBeNull": false,
                    "description": "Alert date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "alertId": {
                    "canBeNull": false,
                    "description": "Alert id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "emails": {
                    "canBeNull": false,
                    "description": "Alert sent to",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                }
            }
        },
        "cloud.AlertingDelayEnum": {
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
            "enumType": "long",
            "id": "AlertingDelayEnum",
            "namespace": "cloud"
        },
        "cloud.ArchiveStoragePrice": {
            "description": "Details about archive storage pricing",
            "id": "ArchiveStoragePrice",
            "namespace": "cloud",
            "properties": {
                "monthlyPrice": {
                    "canBeNull": false,
                    "description": "Monthly archive storage price (for 1GB stored per month)",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Archive region",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
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
        "cloud.BandwidthStoragePrice": {
            "description": "Details about bandwidth storage pricing",
            "id": "BandwidthStoragePrice",
            "namespace": "cloud",
            "properties": {
                "price": {
                    "canBeNull": false,
                    "description": "Bandwidth storage price (for 1GB)",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Bandwidth storage region",
                    "readOnly": false,
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
        "cloud.Credit": {
            "description": "Cloud credit",
            "id": "Credit",
            "namespace": "cloud",
            "properties": {
                "available_credit": {
                    "canBeNull": false,
                    "description": "Available credit",
                    "fullType": "order.Price",
                    "readOnly": true,
                    "required": false,
                    "type": "order.Price"
                },
                "bill": {
                    "canBeNull": true,
                    "description": "Credit bill id",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "description": {
                    "canBeNull": true,
                    "description": "Credit description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Credit id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "products": {
                    "canBeNull": true,
                    "description": "Use credits on following products",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "total_credit": {
                    "canBeNull": false,
                    "description": "Total credit",
                    "fullType": "order.Price",
                    "readOnly": true,
                    "required": false,
                    "type": "order.Price"
                },
                "used_credit": {
                    "canBeNull": false,
                    "description": "Used credit",
                    "fullType": "order.Price",
                    "readOnly": true,
                    "required": false,
                    "type": "order.Price"
                },
                "validity": {
                    "canBeNull": true,
                    "description": "Credit validity",
                    "fullType": "cloud.common.VoucherValidity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.common.VoucherValidity"
                },
                "voucher": {
                    "canBeNull": true,
                    "description": "Voucher code",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
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
        "cloud.FlavorPrice": {
            "description": "Details about flavor pricing",
            "id": "FlavorPrice",
            "namespace": "cloud",
            "properties": {
                "flavorId": {
                    "canBeNull": false,
                    "description": "Flavor id",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "flavorName": {
                    "canBeNull": false,
                    "description": "Flavor name",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "monthlyPrice": {
                    "canBeNull": true,
                    "description": "Monthly flavor price",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "price": {
                    "canBeNull": false,
                    "description": "Hourly flavor price",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Flavor region",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
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
        "cloud.Price": {
            "description": "A structure defining prices for cloud services",
            "id": "Price",
            "namespace": "cloud",
            "properties": {
                "archive": {
                    "canBeNull": false,
                    "description": "Price for archive storage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.ArchiveStoragePrice[]"
                },
                "bandwidthArchiveIn": {
                    "canBeNull": false,
                    "description": "Price for incoming bandwidth on archive storage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.BandwidthStoragePrice[]"
                },
                "bandwidthArchiveOut": {
                    "canBeNull": false,
                    "description": "Price for outgoing bandwidth on archive storage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.BandwidthStoragePrice[]"
                },
                "bandwidthStorage": {
                    "canBeNull": false,
                    "description": "Price for bandwidth storage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.BandwidthStoragePrice[]"
                },
                "instances": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.FlavorPrice[]"
                },
                "projectCreation": {
                    "canBeNull": false,
                    "description": "Price for project creation",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "snapshots": {
                    "canBeNull": false,
                    "description": "Prices for snapshots",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.SnapshotPrice[]"
                },
                "storage": {
                    "canBeNull": false,
                    "description": "Price for storage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.StoragePrice[]"
                },
                "volumes": {
                    "canBeNull": false,
                    "description": "Prices for volumes",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.VolumePrice[]"
                }
            }
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
        "cloud.ProjectContainerRegistryCreation": {
            "description": "Missing description",
            "id": "ProjectContainerRegistryCreation",
            "namespace": "cloud",
            "properties": {
                "name": {
                    "canBeNull": false,
                    "description": "Name of the new registry",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "planID": {
                    "canBeNull": false,
                    "description": "ID of the plan to use for the new registry",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region where to deploy the registry.  Get available regions with /cloud/project/{serviceName}/capabilities/containerRegistry.",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.ProjectContainerRegistryUpdate": {
            "description": "Missing description",
            "id": "ProjectContainerRegistryUpdate",
            "namespace": "cloud",
            "properties": {
                "name": {
                    "canBeNull": false,
                    "description": "New registry name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.ProjectContainerRegistryUsersCreation": {
            "description": "Missing description",
            "id": "ProjectContainerRegistryUsersCreation",
            "namespace": "cloud",
            "properties": {
                "email": {
                    "canBeNull": true,
                    "description": "New user email",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "login": {
                    "canBeNull": true,
                    "description": "New user login",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
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
                    "description": "Nodepool to init with cluster creation (this facultative parameter is experimental)",
                    "fullType": "cloud.ProjectKubeCreationNodePool",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.ProjectKubeCreationNodePool"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Kubernetes region",
                    "fullType": "cloud.kube.ClusterCreationRegionEnum",
                    "readOnly": false,
                    "required": true,
                    "type": "cloud.kube.ClusterCreationRegionEnum"
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
                }
            }
        },
        "cloud.ProjectKubeResetCreation": {
            "description": "Missing description",
            "id": "ProjectKubeResetCreation",
            "namespace": "cloud",
            "properties": {
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
        "cloud.ProjectMigrationUpdate": {
            "description": "Missing description",
            "id": "ProjectMigrationUpdate",
            "namespace": "cloud",
            "properties": {
                "date": {
                    "canBeNull": false,
                    "description": "Migration date (RFC3339)",
                    "fullType": "datetime",
                    "readOnly": false,
                    "required": true,
                    "type": "datetime"
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
        "cloud.SnapshotPrice": {
            "description": "Details about snapshot pricing",
            "id": "SnapshotPrice",
            "namespace": "cloud",
            "properties": {
                "monthlyPrice": {
                    "canBeNull": false,
                    "description": "Monthly flavor price (for 1GB per month)",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "price": {
                    "canBeNull": false,
                    "description": "Hourly snapshot price (for 1GB per hour)",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Snapshot region",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.StoragePrice": {
            "description": "Details about storage pricing",
            "id": "StoragePrice",
            "namespace": "cloud",
            "properties": {
                "monthlyPrice": {
                    "canBeNull": false,
                    "description": "Monthly storage price (for 1GB stored per month)",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "price": {
                    "canBeNull": false,
                    "description": "Hourly storage price (for 1GB stored per hour)",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Storage region",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.VolumePrice": {
            "description": "Details about volume pricing",
            "id": "VolumePrice",
            "namespace": "cloud",
            "properties": {
                "monthlyPrice": {
                    "canBeNull": false,
                    "description": "Monthly volume price (for 1GB per month)",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "price": {
                    "canBeNull": false,
                    "description": "Hourly volume price (for 1GB per hour)",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Volume region",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "volumeName": {
                    "canBeNull": false,
                    "description": "Volume name",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
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
        "cloud.billingView.BandwidthInstance": {
            "description": "BandwidthInstance",
            "id": "BandwidthInstance",
            "namespace": "cloud.billingView",
            "properties": {
                "quantity": {
                    "canBeNull": false,
                    "description": "Total bandwidth in GiB",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.BandwidthStorage": {
            "description": "BandwidthStorage",
            "id": "BandwidthStorage",
            "namespace": "cloud.billingView",
            "properties": {
                "quantity": {
                    "canBeNull": false,
                    "description": "Total bandwidth in GiB",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.Component": {
            "description": "Component",
            "id": "Component",
            "namespace": "cloud.billingView",
            "properties": {
                "name": {
                    "canBeNull": false,
                    "description": "Name of the component",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "quantity": {
                    "canBeNull": false,
                    "description": "Total quantity for the component",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price for this component",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.HourlyInstance": {
            "description": "HourlyInstance",
            "id": "HourlyInstance",
            "namespace": "cloud.billingView",
            "properties": {
                "details": {
                    "canBeNull": false,
                    "description": "Details about hourly instances",
                    "fullType": "cloud.billingView.HourlyInstanceDetail[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyInstanceDetail[]"
                },
                "quantity": {
                    "canBeNull": false,
                    "description": "Hours of run instances",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "reference": {
                    "canBeNull": false,
                    "description": "Instance reference",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Instance region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.HourlyInstanceBandwidth": {
            "description": "HourlyInstanceBandwidth",
            "id": "HourlyInstanceBandwidth",
            "namespace": "cloud.billingView",
            "properties": {
                "incomingBandwidth": {
                    "canBeNull": true,
                    "description": "Instance incoming bandwidth details",
                    "fullType": "cloud.billingView.BandwidthInstance",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.BandwidthInstance"
                },
                "outgoingBandwidth": {
                    "canBeNull": true,
                    "description": "Instance outgoing bandwidth details",
                    "fullType": "cloud.billingView.BandwidthInstance",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.BandwidthInstance"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.HourlyInstanceDetail": {
            "description": "HourlyInstanceDetail",
            "id": "HourlyInstanceDetail",
            "namespace": "cloud.billingView",
            "properties": {
                "instanceId": {
                    "canBeNull": false,
                    "description": "Instance ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "quantity": {
                    "canBeNull": false,
                    "description": "Hours of run instances",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.HourlyInstanceOption": {
            "description": "HourlyInstanceOption",
            "id": "HourlyInstanceOption",
            "namespace": "cloud.billingView",
            "properties": {
                "details": {
                    "canBeNull": false,
                    "description": "Details about hourly instances option",
                    "fullType": "cloud.billingView.HourlyInstanceOptionDetail[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyInstanceOptionDetail[]"
                },
                "quantity": {
                    "canBeNull": false,
                    "description": "Quantity of instance hours running with this option",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "reference": {
                    "canBeNull": false,
                    "description": "Instance reference",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Instance region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.HourlyInstanceOptionDetail": {
            "description": "HourlyInstanceOptionDetail",
            "id": "HourlyInstanceOptionDetail",
            "namespace": "cloud.billingView",
            "properties": {
                "instanceId": {
                    "canBeNull": false,
                    "description": "Instance ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "quantity": {
                    "canBeNull": false,
                    "description": "Quantity of instance hours running with this option",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.HourlyResources": {
            "description": "HourlyResources",
            "id": "HourlyResources",
            "namespace": "cloud.billingView",
            "properties": {
                "instance": {
                    "canBeNull": false,
                    "description": "Details about hourly instances",
                    "fullType": "cloud.billingView.HourlyInstance[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyInstance[]"
                },
                "instanceBandwidth": {
                    "canBeNull": false,
                    "description": "Details about instances bandwidth consumption",
                    "fullType": "cloud.billingView.HourlyInstanceBandwidth[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyInstanceBandwidth[]"
                },
                "instanceOption": {
                    "canBeNull": false,
                    "description": "Details about hourly instances options",
                    "fullType": "cloud.billingView.HourlyInstanceOption[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyInstanceOption[]"
                },
                "snapshot": {
                    "canBeNull": false,
                    "description": "Details about hourly snapshots",
                    "fullType": "cloud.billingView.HourlySnapshot[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlySnapshot[]"
                },
                "storage": {
                    "canBeNull": false,
                    "description": "Details about hourly storage",
                    "fullType": "cloud.billingView.HourlyStorage[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyStorage[]"
                },
                "volume": {
                    "canBeNull": false,
                    "description": "Details about hourly volumes",
                    "fullType": "cloud.billingView.HourlyVolume[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyVolume[]"
                }
            }
        },
        "cloud.billingView.HourlySnapshot": {
            "description": "HourlySnapshot",
            "id": "HourlySnapshot",
            "namespace": "cloud.billingView",
            "properties": {
                "instance": {
                    "canBeNull": true,
                    "description": "Instance snapshot details",
                    "fullType": "cloud.billingView.InstanceSnapshot",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.InstanceSnapshot"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                },
                "volume": {
                    "canBeNull": true,
                    "description": "Volume snapshot details",
                    "fullType": "cloud.billingView.VolumeSnapshot",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.VolumeSnapshot"
                }
            }
        },
        "cloud.billingView.HourlyStorage": {
            "description": "HourlyStorage",
            "id": "HourlyStorage",
            "namespace": "cloud.billingView",
            "properties": {
                "incomingBandwidth": {
                    "canBeNull": true,
                    "description": "Storage incoming bandwidth details",
                    "fullType": "cloud.billingView.BandwidthStorage",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.BandwidthStorage"
                },
                "outgoingBandwidth": {
                    "canBeNull": true,
                    "description": "Storage outgoing bandwidth details",
                    "fullType": "cloud.billingView.BandwidthStorage",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.BandwidthStorage"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "stored": {
                    "canBeNull": true,
                    "description": "Information about stored data",
                    "fullType": "cloud.billingView.StoredStorage",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.StoredStorage"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Storage type",
                    "fullType": "cloud.billingView.StorageTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.StorageTypeEnum"
                }
            }
        },
        "cloud.billingView.HourlyVolume": {
            "description": "HourlyVolume",
            "id": "HourlyVolume",
            "namespace": "cloud.billingView",
            "properties": {
                "details": {
                    "canBeNull": false,
                    "description": "Detail about volume consumption",
                    "fullType": "cloud.billingView.HourlyVolumeDetail[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyVolumeDetail[]"
                },
                "quantity": {
                    "canBeNull": false,
                    "description": "Total GiBh of volume",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Volume type",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.billingView.HourlyVolumeDetail": {
            "description": "HourlyVolumeDetail",
            "id": "HourlyVolumeDetail",
            "namespace": "cloud.billingView",
            "properties": {
                "quantity": {
                    "canBeNull": false,
                    "description": "GiBh of volume",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                },
                "volumeId": {
                    "canBeNull": false,
                    "description": "Volume ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.billingView.InstanceSnapshot": {
            "description": "InstanceSnapshot",
            "id": "InstanceSnapshot",
            "namespace": "cloud.billingView",
            "properties": {
                "quantity": {
                    "canBeNull": false,
                    "description": "GiBh stored",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.MonthlyInstance": {
            "description": "MonthlyInstance",
            "id": "MonthlyInstance",
            "namespace": "cloud.billingView",
            "properties": {
                "details": {
                    "canBeNull": false,
                    "description": "Details about monthly instances",
                    "fullType": "cloud.billingView.MonthlyInstanceDetail[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.MonthlyInstanceDetail[]"
                },
                "reference": {
                    "canBeNull": false,
                    "description": "Instance reference",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Instance region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.MonthlyInstanceDetail": {
            "description": "MonthlyInstanceDetail",
            "id": "MonthlyInstanceDetail",
            "namespace": "cloud.billingView",
            "properties": {
                "activation": {
                    "canBeNull": false,
                    "description": "Monthly instance activation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "instanceId": {
                    "canBeNull": false,
                    "description": "Instance ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.MonthlyInstanceOption": {
            "description": "MonthlyInstanceOption",
            "id": "MonthlyInstanceOption",
            "namespace": "cloud.billingView",
            "properties": {
                "details": {
                    "canBeNull": false,
                    "description": "Details about monthly instances",
                    "fullType": "cloud.billingView.MonthlyInstanceOptionDetail[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.MonthlyInstanceOptionDetail[]"
                },
                "reference": {
                    "canBeNull": false,
                    "description": "Instance reference",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Instance region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.MonthlyInstanceOptionDetail": {
            "description": "MonthlyInstanceOptionDetail",
            "id": "MonthlyInstanceOptionDetail",
            "namespace": "cloud.billingView",
            "properties": {
                "instanceId": {
                    "canBeNull": false,
                    "description": "Instance ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.MonthlyResources": {
            "description": "MonthlyResources",
            "id": "MonthlyResources",
            "namespace": "cloud.billingView",
            "properties": {
                "instance": {
                    "canBeNull": false,
                    "description": "Details about monthly instances",
                    "fullType": "cloud.billingView.MonthlyInstance[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.MonthlyInstance[]"
                },
                "instanceOption": {
                    "canBeNull": false,
                    "description": "Details about monthly instances options",
                    "fullType": "cloud.billingView.MonthlyInstanceOption[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.MonthlyInstanceOption[]"
                }
            }
        },
        "cloud.billingView.Quantity": {
            "description": "Quantity",
            "id": "Quantity",
            "namespace": "cloud.billingView",
            "properties": {
                "unit": {
                    "canBeNull": false,
                    "description": "Quantity unit",
                    "fullType": "cloud.billingView.UnitQuantityEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.UnitQuantityEnum"
                },
                "value": {
                    "canBeNull": false,
                    "description": "Quantity value",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.RegionalizedResource": {
            "description": "RegionalizedResource",
            "id": "RegionalizedResource",
            "namespace": "cloud.billingView",
            "properties": {
                "components": {
                    "canBeNull": false,
                    "description": "List of components",
                    "fullType": "cloud.billingView.Component[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Component[]"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region of the resource",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.billingView.StorageTypeEnum": {
            "description": "StorageTypeEnum",
            "enum": [
                "pcs",
                "pca"
            ],
            "enumType": "string",
            "id": "StorageTypeEnum",
            "namespace": "cloud.billingView"
        },
        "cloud.billingView.StoredStorage": {
            "description": "StoredStorage",
            "id": "StoredStorage",
            "namespace": "cloud.billingView",
            "properties": {
                "quantity": {
                    "canBeNull": false,
                    "description": "GiBh stored",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.TypedResources": {
            "description": "TypedResources",
            "id": "TypedResources",
            "namespace": "cloud.billingView",
            "properties": {
                "resources": {
                    "canBeNull": false,
                    "description": "Resources per region",
                    "fullType": "cloud.billingView.RegionalizedResource[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.RegionalizedResource[]"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Type of the resources",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.billingView.UnitQuantity": {
            "description": "UnitQuantity",
            "enum": [
                "GiB",
                "GiBh",
                "Hour"
            ],
            "enumType": "string",
            "id": "UnitQuantity",
            "namespace": "cloud.billingView"
        },
        "cloud.billingView.UnitQuantityEnum": {
            "description": "UnitQuantity",
            "enum": [
                "GiB",
                "GiBh",
                "Hour",
                "Minute",
                "Second",
                "Unit"
            ],
            "enumType": "string",
            "id": "UnitQuantityEnum",
            "namespace": "cloud.billingView"
        },
        "cloud.billingView.UsedCredit": {
            "description": "UsedCredit",
            "id": "UsedCredit",
            "namespace": "cloud.billingView",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Credit description",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Credit ID",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "usedAmount": {
                    "canBeNull": false,
                    "description": "Total credit used",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.UsedCredits": {
            "description": "UsedCredits",
            "id": "UsedCredits",
            "namespace": "cloud.billingView",
            "properties": {
                "details": {
                    "canBeNull": false,
                    "description": "Details about credits that will be used",
                    "fullType": "cloud.billingView.UsedCredit[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.UsedCredit[]"
                },
                "totalCredit": {
                    "canBeNull": false,
                    "description": "Total credit that will be used to pay the bill",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.billingView.VolumeSnapshot": {
            "description": "VolumeSnapshot",
            "id": "VolumeSnapshot",
            "namespace": "cloud.billingView",
            "properties": {
                "quantity": {
                    "canBeNull": false,
                    "description": "GiBh stored",
                    "fullType": "cloud.billingView.Quantity",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.Quantity"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": "Total price",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
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
        "cloud.common.VoucherValidity": {
            "description": "Voucher validity range",
            "id": "VoucherValidity",
            "namespace": "cloud.common",
            "properties": {
                "from": {
                    "canBeNull": true,
                    "description": "Valid from",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "to": {
                    "canBeNull": true,
                    "description": "Valid to",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "cloud.containerRegistry.Capability": {
            "description": "The container registry capability for a single region",
            "id": "Capability",
            "namespace": "cloud.containerRegistry",
            "properties": {
                "plans": {
                    "canBeNull": false,
                    "description": "Available plans in the region",
                    "fullType": "cloud.containerRegistry.Plan[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.containerRegistry.Plan[]"
                },
                "regionName": {
                    "canBeNull": false,
                    "description": "The region name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.containerRegistry.Features": {
            "description": "Features list, enabled or not",
            "id": "Features",
            "namespace": "cloud.containerRegistry",
            "properties": {
                "vulnerability": {
                    "canBeNull": false,
                    "description": "Vulnerability scanning",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "cloud.containerRegistry.Limits": {
            "description": "Limitation of a docker registry",
            "id": "Limits",
            "namespace": "cloud.containerRegistry",
            "properties": {
                "imageStorage": {
                    "canBeNull": false,
                    "description": "Docker image storage limits in bytes",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "parallelRequest": {
                    "canBeNull": false,
                    "description": "Parallel requests on Docker image API (/v2 Docker registry API)",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloud.containerRegistry.Plan": {
            "description": "Plan of the registry",
            "id": "Plan",
            "namespace": "cloud.containerRegistry",
            "properties": {
                "code": {
                    "canBeNull": false,
                    "description": "Plan code from catalog",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "createdAt": {
                    "canBeNull": false,
                    "description": "Plan creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "features": {
                    "canBeNull": false,
                    "description": "Features of the plan",
                    "fullType": "cloud.containerRegistry.Features",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.containerRegistry.Features"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Plan ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Plan name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "registryLimits": {
                    "canBeNull": false,
                    "description": "Container registry limits",
                    "fullType": "cloud.containerRegistry.Limits",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.containerRegistry.Limits"
                },
                "updatedAt": {
                    "canBeNull": false,
                    "description": "Plan last update date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "cloud.containerRegistry.PlanUpdate": {
            "description": "Missing description",
            "id": "PlanUpdate",
            "namespace": "cloud.containerRegistry",
            "properties": {
                "planID": {
                    "canBeNull": false,
                    "description": "Plan ID to apply to the registry",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.containerRegistry.Registry": {
            "description": "Managed docker registry",
            "id": "Registry",
            "namespace": "cloud.containerRegistry",
            "properties": {
                "createdAt": {
                    "canBeNull": false,
                    "description": "Registry creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Registry ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Registry name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "projectID": {
                    "canBeNull": false,
                    "description": "Project ID of your registry",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region of the registry.",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "size": {
                    "canBeNull": false,
                    "description": "Current size of the registry (bytes)",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Registry status",
                    "fullType": "cloud.containerRegistry.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.containerRegistry.StatusEnum"
                },
                "updatedAt": {
                    "canBeNull": false,
                    "description": "Registry last update date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "url": {
                    "canBeNull": false,
                    "description": "Access url of the registry",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "version": {
                    "canBeNull": false,
                    "description": "Version of your registry",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.containerRegistry.StatusEnum": {
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
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "cloud.containerRegistry"
        },
        "cloud.containerRegistry.User": {
            "description": "Docker registry user",
            "id": "User",
            "namespace": "cloud.containerRegistry",
            "properties": {
                "email": {
                    "canBeNull": false,
                    "description": "User email",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "User ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "password": {
                    "canBeNull": true,
                    "description": "User password",
                    "fullType": "password",
                    "readOnly": true,
                    "required": false,
                    "type": "password"
                },
                "user": {
                    "canBeNull": false,
                    "description": "User name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.containerRegistry.registry.RegionEnum": {
            "description": "Region of the registry",
            "enum": [
                "GRA7"
            ],
            "enumType": "string",
            "id": "RegionEnum",
            "namespace": "cloud.containerRegistry.registry"
        },
        "cloud.containerRegistry.registry.Registry": {
            "description": "Managed docker registry",
            "id": "Registry",
            "namespace": "cloud.containerRegistry.registry",
            "properties": {
                "createdAt": {
                    "canBeNull": false,
                    "description": "Registry creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Registry ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Registry name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "projectID": {
                    "canBeNull": false,
                    "description": "Project ID of your registry",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region of the registry",
                    "fullType": "cloud.containerRegistry.registry.RegionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.containerRegistry.registry.RegionEnum"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Registry status",
                    "fullType": "cloud.containerRegistry.registry.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.containerRegistry.registry.StatusEnum"
                },
                "updatedAt": {
                    "canBeNull": false,
                    "description": "Registry last update date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "url": {
                    "canBeNull": false,
                    "description": "Access url of the registry",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "version": {
                    "canBeNull": false,
                    "description": "Version of your registry",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.containerRegistry.registry.StatusEnum": {
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
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "cloud.containerRegistry.registry"
        },
        "cloud.containerRegistry.user.User": {
            "description": "Docker registry user",
            "id": "User",
            "namespace": "cloud.containerRegistry.user",
            "properties": {
                "email": {
                    "canBeNull": false,
                    "description": "User email",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "User ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "password": {
                    "canBeNull": true,
                    "description": "User password",
                    "fullType": "password",
                    "readOnly": true,
                    "required": false,
                    "type": "password"
                },
                "user": {
                    "canBeNull": false,
                    "description": "User name",
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
        "cloud.forecast.ProjectForecast": {
            "description": "ProjectForecast",
            "id": "ProjectForecast",
            "namespace": "cloud.forecast",
            "properties": {
                "lastMetric": {
                    "canBeNull": false,
                    "description": "Time when we got last metric",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "projectForecast": {
                    "canBeNull": false,
                    "description": "Forecast for your whole project",
                    "fullType": "order.Price",
                    "readOnly": true,
                    "required": false,
                    "type": "order.Price"
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
                "windows"
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
                "RESUMING"
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
        "cloud.kube.ClusterCreationRegionEnum": {
            "description": "Enum values for available regions when creating a cluster",
            "enum": [
                "GRA5",
                "GRA7",
                "BHS5",
                "SBG5"
            ],
            "enumType": "string",
            "id": "ClusterCreationRegionEnum",
            "namespace": "cloud.kube"
        },
        "cloud.kube.ClusterStatus": {
            "description": "Enum values for Status",
            "enum": [
                "INSTALLING",
                "UPDATING",
                "RESETTING",
                "SUSPENDING",
                "REOPENING",
                "DELETING",
                "SUSPENDED",
                "ERROR",
                "USER_ERROR",
                "USER_QUOTA_ERROR",
                "READY"
            ],
            "enumType": "string",
            "id": "ClusterStatus",
            "namespace": "cloud.kube"
        },
        "cloud.kube.ClusterStatusEnum": {
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
        "cloud.kube.FlavorCategory": {
            "description": "Enum values for category",
            "enum": [
                "c",
                "g",
                "t",
                "b",
                "r"
            ],
            "enumType": "string",
            "id": "FlavorCategory",
            "namespace": "cloud.kube"
        },
        "cloud.kube.FlavorCategoryEnum": {
            "description": "Enum values for category",
            "enum": [
                "c",
                "g",
                "t",
                "b",
                "r",
                "i"
            ],
            "enumType": "string",
            "id": "FlavorCategoryEnum",
            "namespace": "cloud.kube"
        },
        "cloud.kube.FlavorState": {
            "description": "Enum values for State",
            "enum": [
                "available",
                "unavailable"
            ],
            "enumType": "string",
            "id": "FlavorState",
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
                "INSTALLING",
                "UPDATING",
                "REDEPLOYING",
                "RESIZING",
                "RESETTING",
                "DELETING",
                "ERROR",
                "READY"
            ],
            "enumType": "string",
            "id": "NodePoolStatusEnum",
            "namespace": "cloud.kube"
        },
        "cloud.kube.NodeStatus": {
            "description": "Enum values for Status",
            "enum": [
                "INSTALLING",
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
            "enumType": "string",
            "id": "NodeStatus",
            "namespace": "cloud.kube"
        },
        "cloud.kube.NodeStatusEnum": {
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
            "enumType": "string",
            "id": "NodeStatusEnum",
            "namespace": "cloud.kube"
        },
        "cloud.kube.Region": {
            "description": "Enum values for available regions",
            "enum": [
                "GRA5",
                "GRA7",
                "BHS5"
            ],
            "enumType": "string",
            "id": "Region",
            "namespace": "cloud.kube"
        },
        "cloud.kube.RegionEnum": {
            "description": "Enum values for available regions",
            "enum": [
                "GRA5",
                "GRA7",
                "BHS5",
                "SBG5"
            ],
            "enumType": "string",
            "id": "RegionEnum",
            "namespace": "cloud.kube"
        },
        "cloud.kube.ResetWorkerNodesPolicy": {
            "description": "Enum values for worker nodes reset policy",
            "enum": [
                "reinstall",
                "delete"
            ],
            "enumType": "string",
            "id": "ResetWorkerNodesPolicy",
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
        "cloud.kube.UpdatePolicy": {
            "description": "Enum values for UpdatePolicy",
            "enum": [
                "ALWAYS_UPDATE",
                "MINIMAL_DOWNTIME",
                "NEVER_UPDATE"
            ],
            "enumType": "string",
            "id": "UpdatePolicy",
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
        "cloud.kube.UpdateStrategy": {
            "description": "Enum values for UpdateStrategy",
            "enum": [
                "LATEST_PATCH",
                "NEXT_MINOR"
            ],
            "enumType": "string",
            "id": "UpdateStrategy",
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
        "cloud.kube.UpgradeVersion": {
            "description": "List of available versions for upgrade",
            "enum": [
                "1.12",
                "1.13",
                "1.14",
                "1.15",
                "1.16"
            ],
            "enumType": "string",
            "id": "UpgradeVersion",
            "namespace": "cloud.kube"
        },
        "cloud.kube.UpgradeVersionEnum": {
            "description": "List of available versions for upgrade",
            "enum": [
                "1.14",
                "1.15",
                "1.16",
                "1.17",
                "1.18"
            ],
            "enumType": "string",
            "id": "UpgradeVersionEnum",
            "namespace": "cloud.kube"
        },
        "cloud.kube.Version": {
            "description": "List of available versions for installation",
            "enum": [
                "1.13",
                "1.14",
                "1.15"
            ],
            "enumType": "string",
            "id": "Version",
            "namespace": "cloud.kube"
        },
        "cloud.kube.VersionEnum": {
            "description": "List of available versions for installation",
            "enum": [
                "1.15",
                "1.16",
                "1.17",
                "1.18"
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
        "cloud.project.BandwidthStorageUsage": {
            "description": "Usage information for current month on your project",
            "id": "BandwidthStorageUsage",
            "namespace": "cloud.project",
            "properties": {
                "downloadedBytes": {
                    "canBeNull": false,
                    "description": "Downloaded bytes from your containers",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "total": {
                    "canBeNull": false,
                    "description": "Cost for your storage bandwidth",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                }
            }
        },
        "cloud.project.Bill": {
            "description": "Project bill",
            "id": "Bill",
            "namespace": "cloud.project",
            "properties": {
                "billId": {
                    "canBeNull": false,
                    "description": "Bill id",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Bill type",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.BillTypeEnum"
                }
            }
        },
        "cloud.project.BillTypeEnum": {
            "description": "Possible values for bill type",
            "enum": [
                "creditPurchased",
                "monthlyConsumption",
                "monthlyInstanceActivation"
            ],
            "enumType": "string",
            "id": "BillTypeEnum",
            "namespace": "cloud.project"
        },
        "cloud.project.CurrentUsage": {
            "description": "Usage information for current month on your project",
            "id": "CurrentUsage",
            "namespace": "cloud.project",
            "properties": {
                "instances": {
                    "canBeNull": false,
                    "description": "Instances usage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.InstancesUsage"
                },
                "snapshots": {
                    "canBeNull": false,
                    "description": "Snapshots usage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.SnapshotsUsage"
                },
                "storage": {
                    "canBeNull": false,
                    "description": "Storage usage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.StorageUsage"
                },
                "total": {
                    "canBeNull": false,
                    "description": "Total cost for the project",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "volumeSnapshots": {
                    "canBeNull": false,
                    "description": "Snapshots usage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.SnapshotsUsage"
                },
                "volumes": {
                    "canBeNull": false,
                    "description": "Volumes usage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.VolumesUsage"
                }
            }
        },
        "cloud.project.EligibilityAction": {
            "description": "Possible eligibility actions",
            "enum": [
                "addPaymentMethod",
                "askIncreaseProjectsQuota",
                "challengePaymentMethod",
                "verifyPaypal"
            ],
            "enumType": "string",
            "id": "EligibilityAction",
            "namespace": "cloud.project"
        },
        "cloud.project.EligibilityInfo": {
            "description": "Eligibility information",
            "id": "EligibilityInfo",
            "namespace": "cloud.project",
            "properties": {
                "actionsRequired": {
                    "canBeNull": true,
                    "description": "Actions to perform to be eligible",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.EligibilityAction[]"
                },
                "minimumCredit": {
                    "canBeNull": true,
                    "description": "Cloud project order",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "paymentMethodsAuthorized": {
                    "canBeNull": true,
                    "description": "Payment method accepted to order Public Cloud project",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.PaymentMethodAuthorized[]"
                },
                "voucher": {
                    "canBeNull": true,
                    "description": "Information about voucher code",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.NewProjectInfoVoucher"
                }
            }
        },
        "cloud.project.InstanceMonthlyBilling": {
            "description": "Instance monthly billing details",
            "id": "InstanceMonthlyBilling",
            "namespace": "cloud.project",
            "properties": {
                "activatedOn": {
                    "canBeNull": false,
                    "description": "Monthly billing activation date",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "cost": {
                    "canBeNull": false,
                    "description": "Cost",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                }
            }
        },
        "cloud.project.InstanceUsageDetail": {
            "description": "Instance usage",
            "id": "InstanceUsageDetail",
            "namespace": "cloud.project",
            "properties": {
                "hourly": {
                    "canBeNull": true,
                    "description": "Hourly price",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "instanceId": {
                    "canBeNull": false,
                    "description": "Instance id",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "monthly": {
                    "canBeNull": true,
                    "description": "Monthly price",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.InstanceMonthlyBilling"
                },
                "monthlyBilling": {
                    "canBeNull": false,
                    "description": "Is monthly billing enabled",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "reference": {
                    "canBeNull": false,
                    "description": "Reference",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.InstancesUsage": {
            "description": "Instances usage for current month",
            "id": "InstancesUsage",
            "namespace": "cloud.project",
            "properties": {
                "detail": {
                    "canBeNull": false,
                    "description": "Instance usage details",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.InstanceUsageDetail[]"
                },
                "total": {
                    "canBeNull": false,
                    "description": "Total cost for the instances",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                }
            }
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
                "region": {
                    "canBeNull": false,
                    "description": "Regions where the load balancer is hosted",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
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
                "region": {
                    "canBeNull": false,
                    "description": "Regions where the load balancer is hosted",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.project.NewProject": {
            "description": "New cloud project",
            "id": "NewProject",
            "namespace": "cloud.project",
            "properties": {
                "agreements": {
                    "canBeNull": true,
                    "description": "Agreement to valid",
                    "readOnly": false,
                    "required": false,
                    "type": "long[]"
                },
                "credit": {
                    "canBeNull": true,
                    "description": "Cloud credit",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.NewProjectCredit"
                },
                "description": {
                    "canBeNull": true,
                    "description": "Cloud project description",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "orderId": {
                    "canBeNull": true,
                    "description": "Cloud project order id",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "project": {
                    "canBeNull": true,
                    "description": "Cloud project",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Project creation status",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.NewProjectStatusEnum"
                }
            }
        },
        "cloud.project.NewProjectCredit": {
            "description": "Credit details",
            "id": "NewProjectCredit",
            "namespace": "cloud.project",
            "properties": {
                "description": {
                    "canBeNull": true,
                    "description": "Credit description",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Credit id",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "products": {
                    "canBeNull": true,
                    "description": "Use credits on following products",
                    "readOnly": false,
                    "required": false,
                    "type": "string[]"
                },
                "total_credit": {
                    "canBeNull": false,
                    "description": "Total credit",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "validity": {
                    "canBeNull": true,
                    "description": "Credit validity",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.common.VoucherValidity"
                }
            }
        },
        "cloud.project.NewProjectInfo": {
            "description": "New cloud project informations",
            "id": "NewProjectInfo",
            "namespace": "cloud.project",
            "properties": {
                "agreements": {
                    "canBeNull": true,
                    "description": "Agreement to valid",
                    "readOnly": false,
                    "required": false,
                    "type": "long[]"
                },
                "error": {
                    "canBeNull": true,
                    "description": "Error to fix before trying to create a new Public Cloud project",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.NewProjectInfoError"
                },
                "order": {
                    "canBeNull": true,
                    "description": "Cloud project order",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "voucher": {
                    "canBeNull": true,
                    "description": "Information about voucher code",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.NewProjectInfoVoucher"
                }
            }
        },
        "cloud.project.NewProjectInfoError": {
            "description": "Error that can occur when creating a Public Cloud project",
            "id": "NewProjectInfoError",
            "namespace": "cloud.project",
            "properties": {
                "code": {
                    "canBeNull": false,
                    "description": "Error code",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.NewProjectInfoErrorCodeEnum"
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
        "cloud.project.NewProjectInfoErrorCodeEnum": {
            "description": "Possible values for error code on project creation",
            "enum": [
                "accountNotEligible",
                "challengePaymentMethodRequested",
                "invalidPaymentMean",
                "maxProjectsLimitReached",
                "paypalAccountNotVerified",
                "unpaidDebts"
            ],
            "enumType": "string",
            "id": "NewProjectInfoErrorCodeEnum",
            "namespace": "cloud.project"
        },
        "cloud.project.NewProjectInfoVoucher": {
            "description": "Information about voucher",
            "id": "NewProjectInfoVoucher",
            "namespace": "cloud.project",
            "properties": {
                "credit": {
                    "canBeNull": false,
                    "description": "Credit added thanks to the voucher",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "paymentMethodRequired": {
                    "canBeNull": false,
                    "description": "A valid registered payment method is required to use the voucher",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "cloud.project.NewProjectStatusEnum": {
            "description": "Possible values for new project status",
            "enum": [
                "creating",
                "ok",
                "validationPending",
                "waitingAgreementsValidation"
            ],
            "enumType": "string",
            "id": "NewProjectStatusEnum",
            "namespace": "cloud.project"
        },
        "cloud.project.PaymentMethodAuthorized": {
            "description": "List of accepted payment methods",
            "enum": [
                "bankAccount",
                "credit",
                "creditCard",
                "paypal"
            ],
            "enumType": "string",
            "id": "PaymentMethodAuthorized",
            "namespace": "cloud.project"
        },
        "cloud.project.ProductAgreements": {
            "description": "Product agreements",
            "id": "ProductAgreements",
            "namespace": "cloud.project",
            "properties": {
                "agreementsToValidate": {
                    "canBeNull": true,
                    "description": "Agreements to validate",
                    "readOnly": false,
                    "required": false,
                    "type": "long[]"
                },
                "agreementsValidated": {
                    "canBeNull": true,
                    "description": "Agreements already validated",
                    "readOnly": false,
                    "required": false,
                    "type": "long[]"
                }
            }
        },
        "cloud.project.ProductNameEnum": {
            "description": "Possible values for cloud project product name",
            "enum": [
                "registry"
            ],
            "enumType": "string",
            "id": "ProductNameEnum",
            "namespace": "cloud.project"
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
        "cloud.project.ProjectUsage": {
            "description": "Usage information on your project",
            "id": "ProjectUsage",
            "namespace": "cloud.project",
            "properties": {
                "current": {
                    "canBeNull": false,
                    "description": "Current usage details",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.CurrentUsage"
                }
            }
        },
        "cloud.project.SnapshotUsageDetail": {
            "description": "Snapshot usage",
            "id": "SnapshotUsageDetail",
            "namespace": "cloud.project",
            "properties": {
                "price": {
                    "canBeNull": false,
                    "description": "Snapshot price",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Snapshot region",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "storedSize": {
                    "canBeNull": false,
                    "description": "Stored snapshot size in gigabytes",
                    "readOnly": false,
                    "required": false,
                    "type": "complexType.UnitAndValue<double>"
                }
            }
        },
        "cloud.project.SnapshotsUsage": {
            "description": "Snapshots usage for current month",
            "id": "SnapshotsUsage",
            "namespace": "cloud.project",
            "properties": {
                "detail": {
                    "canBeNull": false,
                    "description": "Snapshots usage details",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.SnapshotUsageDetail[]"
                },
                "total": {
                    "canBeNull": false,
                    "description": "Total cost for the snapshots",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                }
            }
        },
        "cloud.project.StorageUsage": {
            "description": "Usage information for current month on your project",
            "id": "StorageUsage",
            "namespace": "cloud.project",
            "properties": {
                "bandwidth": {
                    "canBeNull": false,
                    "description": "Storage bandwidth usage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.BandwidthStorageUsage[]"
                },
                "total": {
                    "canBeNull": false,
                    "description": "Cost for your storage in all your containers",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "volume": {
                    "canBeNull": false,
                    "description": "Storage volume usage",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.StorageVolumeUsage[]"
                }
            }
        },
        "cloud.project.StorageVolumeUsage": {
            "description": "Storage volume used on your project",
            "id": "StorageVolumeUsage",
            "namespace": "cloud.project",
            "properties": {
                "region": {
                    "canBeNull": false,
                    "description": "Region",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "storedBytes": {
                    "canBeNull": false,
                    "description": "Bytes stored in your containers",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "total": {
                    "canBeNull": false,
                    "description": "Cost for your storage bandwidth",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                }
            }
        },
        "cloud.project.VolumeType": {
            "description": "Possible values for volume type",
            "enum": [
                "classic",
                "high-speed"
            ],
            "enumType": "string",
            "id": "VolumeType",
            "namespace": "cloud.project"
        },
        "cloud.project.VolumeUsageDetail": {
            "description": "Volume usage",
            "id": "VolumeUsageDetail",
            "namespace": "cloud.project",
            "properties": {
                "price": {
                    "canBeNull": false,
                    "description": "Volume price",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "volumeCapacity": {
                    "canBeNull": false,
                    "description": "Volume capacity in gigabytes",
                    "readOnly": false,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "volumeId": {
                    "canBeNull": false,
                    "description": "Volume id",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "volumeType": {
                    "canBeNull": false,
                    "description": "Volume type",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.VolumeType"
                }
            }
        },
        "cloud.project.VolumesUsage": {
            "description": "Volumes usage for current month",
            "id": "VolumesUsage",
            "namespace": "cloud.project",
            "properties": {
                "detail": {
                    "canBeNull": false,
                    "description": "Volume usage details",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.VolumeUsageDetail[]"
                },
                "total": {
                    "canBeNull": false,
                    "description": "Total cost for the volumes",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                }
            }
        },
        "cloud.project.ai.serving.APIStatusEnum": {
            "description": "Status of API",
            "enum": [
                "pending",
                "starting",
                "running",
                "scaling",
                "waking",
                "sleeping"
            ],
            "enumType": "string",
            "id": "APIStatusEnum",
            "namespace": "cloud.project.ai.serving"
        },
        "cloud.project.ai.serving.AutoscalingSpec": {
            "description": "Autoscaling specification",
            "id": "AutoscalingSpec",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "cpuAverageUtilization": {
                    "canBeNull": true,
                    "description": "CPU utilization threshold beyond which a scale is triggered",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "maxReplicas": {
                    "canBeNull": true,
                    "description": "Maximum number of replicas",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "memoryAverageUtilization": {
                    "canBeNull": true,
                    "description": "Memory utilization threshold beyond which a scale is triggered",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "minReplicas": {
                    "canBeNull": true,
                    "description": "Minimum number of replicas",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloud.project.ai.serving.Backend": {
            "description": "Backend serving the model",
            "id": "Backend",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "id": {
                    "canBeNull": false,
                    "description": "Backend ID",
                    "fullType": "cloud.project.ai.serving.BackendIdEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.BackendIdEnum"
                },
                "link": {
                    "canBeNull": false,
                    "description": "Link to the backend project",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Backend name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.serving.BackendIdEnum": {
            "description": "Backend serving the model",
            "enum": [
                "serving-runtime",
                "bentoml"
            ],
            "enumType": "string",
            "id": "BackendIdEnum",
            "namespace": "cloud.project.ai.serving"
        },
        "cloud.project.ai.serving.Features": {
            "description": "Features of Serving Engine",
            "id": "Features",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "chooseBackend": {
                    "canBeNull": false,
                    "description": "Capability to choose backend",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "cloud.project.ai.serving.Flavor": {
            "description": "Compute Flavor for the Serving Engine",
            "id": "Flavor",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "cpuCore": {
                    "canBeNull": false,
                    "description": "Number of CPU core of the flavor",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description of the flavor",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Flavor ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "ramMB": {
                    "canBeNull": false,
                    "description": "RAM of the flavor (in MB)",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloud.project.ai.serving.Framework": {
            "description": "Framework of the model",
            "id": "Framework",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "backends": {
                    "canBeNull": false,
                    "description": "Backends handling this framework",
                    "fullType": "cloud.project.ai.serving.BackendIdEnum[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.BackendIdEnum[]"
                },
                "docPage": {
                    "canBeNull": false,
                    "description": "Documentation page",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Framework ID",
                    "fullType": "cloud.project.ai.serving.FrameworkIdEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.FrameworkIdEnum"
                },
                "link": {
                    "canBeNull": false,
                    "description": "Link to the framework project",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "logo": {
                    "canBeNull": false,
                    "description": "Framework logo",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Framework name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "recommendedBackend": {
                    "canBeNull": false,
                    "description": "Recommended backend for this framework",
                    "fullType": "cloud.project.ai.serving.BackendIdEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.BackendIdEnum"
                },
                "version": {
                    "canBeNull": false,
                    "description": "Framework version",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.serving.FrameworkIdEnum": {
            "description": "Framework of the model",
            "enum": [
                "onnx",
                "tensorflow_1",
                "torch",
                "huggingface",
                "fastai",
                "pmml",
                "flow"
            ],
            "enumType": "string",
            "id": "FrameworkIdEnum",
            "namespace": "cloud.project.ai.serving"
        },
        "cloud.project.ai.serving.Metrics": {
            "description": "Metrics information",
            "id": "Metrics",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "endpoints": {
                    "canBeNull": false,
                    "description": "Metrics endpoint query platforms",
                    "fullType": "cloud.project.ai.serving.MetricsEndpoint[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.MetricsEndpoint[]"
                },
                "token": {
                    "canBeNull": false,
                    "description": "Metrics token linked to the project",
                    "fullType": "password",
                    "readOnly": true,
                    "required": false,
                    "type": "password"
                }
            }
        },
        "cloud.project.ai.serving.MetricsEndpoint": {
            "description": "User Metrics Endpoints",
            "id": "MetricsEndpoint",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "name": {
                    "canBeNull": false,
                    "description": "Name of endpoint",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "url": {
                    "canBeNull": false,
                    "description": "URL of endpoint",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.serving.Model": {
            "description": "A deployed machine learning model",
            "id": "Model",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "apiStatus": {
                    "canBeNull": false,
                    "description": "Api status",
                    "fullType": "cloud.project.ai.serving.APIStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.APIStatusEnum"
                },
                "createdAt": {
                    "canBeNull": false,
                    "description": "Model creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Model id",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "replicas": {
                    "canBeNull": true,
                    "description": "Number of API currently running",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "url": {
                    "canBeNull": true,
                    "description": "Model url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "version": {
                    "canBeNull": true,
                    "description": "API Deployed version",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "versionStatus": {
                    "canBeNull": false,
                    "description": "Last version status",
                    "fullType": "cloud.project.ai.serving.VersionStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.VersionStatusEnum"
                },
                "workflowTemplate": {
                    "canBeNull": true,
                    "description": "Workflow Template used to build the model",
                    "fullType": "cloud.project.ai.serving.WorkflowTemplateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.WorkflowTemplateEnum"
                },
                "workflowTemplateParameters": {
                    "canBeNull": false,
                    "description": "Workflow Template Parameters used to build the model",
                    "fullType": "cloud.project.ai.serving.ModelWorkflowTemplateParameter",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.ModelWorkflowTemplateParameter"
                }
            }
        },
        "cloud.project.ai.serving.ModelDefinition": {
            "description": "Missing description",
            "id": "ModelDefinition",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "autoscalingSpec": {
                    "canBeNull": true,
                    "description": "Autoscaling specification",
                    "fullType": "cloud.project.ai.serving.AutoscalingSpec",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.ai.serving.AutoscalingSpec"
                },
                "backend": {
                    "canBeNull": true,
                    "description": "Backend which will serve your model",
                    "fullType": "cloud.project.ai.serving.BackendIdEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.ai.serving.BackendIdEnum"
                },
                "flavor": {
                    "canBeNull": false,
                    "description": "Flavor id",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "framework": {
                    "canBeNull": true,
                    "description": "Framework of your model",
                    "fullType": "cloud.project.ai.serving.FrameworkIdEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.ai.serving.FrameworkIdEnum"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Model id",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "imageId": {
                    "canBeNull": true,
                    "description": "Preset image to deploy",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "storagePath": {
                    "canBeNull": true,
                    "description": "Path in the object storage container that contains your model",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "workflowTemplate": {
                    "canBeNull": true,
                    "description": "Workflow template to use",
                    "fullType": "cloud.project.ai.serving.WorkflowTemplateEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.ai.serving.WorkflowTemplateEnum"
                }
            }
        },
        "cloud.project.ai.serving.ModelWorkflowTemplateParameter": {
            "description": "Parameters of the Workflow that build",
            "id": "ModelWorkflowTemplateParameter",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "backend": {
                    "canBeNull": true,
                    "description": "Backend which will serve your model",
                    "fullType": "cloud.project.ai.serving.BackendIdEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.BackendIdEnum"
                },
                "framework": {
                    "canBeNull": true,
                    "description": "Framework of your model",
                    "fullType": "cloud.project.ai.serving.FrameworkIdEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.serving.FrameworkIdEnum"
                },
                "imageId": {
                    "canBeNull": true,
                    "description": "Preset Model Image used to deploy your model",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "storagePath": {
                    "canBeNull": true,
                    "description": "Path in the object storage container that contains your model",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.serving.Namespace": {
            "description": "A serving engine namespace",
            "id": "Namespace",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "clusterId": {
                    "canBeNull": false,
                    "description": "Cluster id",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "container": {
                    "canBeNull": false,
                    "description": "Object storage container",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "containerId": {
                    "canBeNull": false,
                    "description": "Object storage container id",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "createdAt": {
                    "canBeNull": false,
                    "description": "Name creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description of namespace",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "hubUrl": {
                    "canBeNull": false,
                    "description": "Hub Service url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Namespace id",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Current region of the namespace",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "url": {
                    "canBeNull": false,
                    "description": "Cluster url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.serving.NamespaceCreation": {
            "description": "Missing description",
            "id": "NamespaceCreation",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "container": {
                    "canBeNull": false,
                    "description": "Object storage container name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description of namespace",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.serving.PresetImage": {
            "description": "A Image of a built serving model",
            "id": "PresetImage",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Model Image Description",
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
                "link": {
                    "canBeNull": true,
                    "description": "Link to the Opensource Model",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Model Image Name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "ramRequirementMB": {
                    "canBeNull": true,
                    "description": "RAM requirement per model instantiated (in MB)",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloud.project.ai.serving.Registry": {
            "description": "Representation of a registry",
            "id": "Registry",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "custom": {
                    "canBeNull": false,
                    "description": "True if user have a registry attached",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "password": {
                    "canBeNull": true,
                    "description": "Docker registry password",
                    "fullType": "password",
                    "readOnly": false,
                    "required": true,
                    "type": "password"
                },
                "url": {
                    "canBeNull": true,
                    "description": "Docker registry URL",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "username": {
                    "canBeNull": true,
                    "description": "Docker registry username",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.serving.RegistryResponse": {
            "description": "Missing description",
            "id": "RegistryResponse",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "message": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.serving.Token": {
            "description": "A token to access / manage a machine learning Model",
            "id": "Token",
            "namespace": "cloud.project.ai.serving",
            "properties": {
                "createdAt": {
                    "canBeNull": false,
                    "description": "Token creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "groups": {
                    "canBeNull": false,
                    "description": "A list of access group to grant",
                    "fullType": "cloud.project.ai.serving.TokenGroupEnum[]",
                    "readOnly": false,
                    "required": true,
                    "type": "cloud.project.ai.serving.TokenGroupEnum[]"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Token id",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "resource": {
                    "canBeNull": false,
                    "description": "Access resource of the token. You can provide: a strict id that will exactly match the resource id or a fuzzy string that ends with * to match multiple resource starting with the same prefix or a * to match all your resources",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "token": {
                    "canBeNull": true,
                    "description": "The JWT Token",
                    "fullType": "password",
                    "readOnly": true,
                    "required": false,
                    "type": "password"
                }
            }
        },
        "cloud.project.ai.serving.TokenGroupEnum": {
            "description": "A serving engine access group",
            "enum": [
                "model-management",
                "model-evaluation"
            ],
            "enumType": "string",
            "id": "TokenGroupEnum",
            "namespace": "cloud.project.ai.serving"
        },
        "cloud.project.ai.serving.VersionStatusEnum": {
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
            "enumType": "string",
            "id": "VersionStatusEnum",
            "namespace": "cloud.project.ai.serving"
        },
        "cloud.project.ai.serving.WorkflowTemplateEnum": {
            "description": "The workflow Template to use",
            "enum": [
                "build-image",
                "preset-image"
            ],
            "enumType": "string",
            "id": "WorkflowTemplateEnum",
            "namespace": "cloud.project.ai.serving"
        },
        "cloud.project.ai.training.AuthorizationStatus": {
            "description": "Authorization status",
            "id": "AuthorizationStatus",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "authorized": {
                    "canBeNull": false,
                    "description": "True if project is authorized to use Training Platform service",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "cloud.project.ai.training.Data": {
            "description": "Training Platform Data Object",
            "id": "Data",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "account": {
                    "canBeNull": false,
                    "description": "Account ID that own the data",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "container": {
                    "canBeNull": false,
                    "description": "Public Cloud Storage container to attach",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "containerRegion": {
                    "canBeNull": false,
                    "description": "Public Cloud Storage Region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "created": {
                    "canBeNull": false,
                    "description": "Data creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Data id",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": true,
                    "description": "Data name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "pullDate": {
                    "canBeNull": true,
                    "description": "Date of the last pull sync",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "pullStatus": {
                    "canBeNull": true,
                    "description": "Pull Sync Status",
                    "fullType": "cloud.project.ai.training.DataSyncStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.training.DataSyncStatusEnum"
                },
                "pushDate": {
                    "canBeNull": true,
                    "description": "Date of the last push sync",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "pushStatus": {
                    "canBeNull": true,
                    "description": "Push Sync Status",
                    "fullType": "cloud.project.ai.training.DataSyncStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.training.DataSyncStatusEnum"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region of the data",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "user": {
                    "canBeNull": false,
                    "description": "User name that own the data",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.training.DataSpec": {
            "description": "Training Platform Data Spec Object",
            "id": "DataSpec",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "container": {
                    "canBeNull": false,
                    "description": "Public Cloud Storage container to attach",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "containerRegion": {
                    "canBeNull": false,
                    "description": "Public Cloud Storage Region",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Data name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region of the data",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "sync": {
                    "canBeNull": false,
                    "description": "Sync the data with Object Storage just after the data is created",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "user": {
                    "canBeNull": false,
                    "description": "User that own the data",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.training.DataSyncDirectionEnum": {
            "description": "Data Sync Direction",
            "enum": [
                "from-object-storage",
                "to-object-storage"
            ],
            "enumType": "string",
            "id": "DataSyncDirectionEnum",
            "namespace": "cloud.project.ai.training"
        },
        "cloud.project.ai.training.DataSyncRequest": {
            "description": "Training Platform Data Sync Request Object",
            "id": "DataSyncRequest",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "direction": {
                    "canBeNull": false,
                    "description": "Direction of the sync",
                    "fullType": "cloud.project.ai.training.DataSyncDirectionEnum",
                    "readOnly": false,
                    "required": true,
                    "type": "cloud.project.ai.training.DataSyncDirectionEnum"
                }
            }
        },
        "cloud.project.ai.training.DataSyncStatusEnum": {
            "description": "Data Sync Direction",
            "enum": [
                "running",
                "pending",
                "error",
                "done"
            ],
            "enumType": "string",
            "id": "DataSyncStatusEnum",
            "namespace": "cloud.project.ai.training"
        },
        "cloud.project.ai.training.Features": {
            "description": "Training Platform Data Object",
            "id": "Features",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "lab": {
                    "canBeNull": false,
                    "description": "Inform if the Training Platform is in Lab mode or not",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "registry": {
                    "canBeNull": false,
                    "description": "Capability to add registry",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "cloud.project.ai.training.Gpu": {
            "description": "Training Platform Gpu Object",
            "id": "Gpu",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "maxGpus": {
                    "canBeNull": false,
                    "description": "Maximum gpu available in the region",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "type": {
                    "canBeNull": false,
                    "description": "The GPU Type",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.training.Job": {
            "description": "Training Platform Job Object",
            "id": "Job",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "accessUrl": {
                    "canBeNull": true,
                    "description": "Job access url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "command": {
                    "canBeNull": false,
                    "description": "Job command",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "created": {
                    "canBeNull": false,
                    "description": "Job creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "data": {
                    "canBeNull": false,
                    "description": "Job Data linked",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Job Id",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "image": {
                    "canBeNull": false,
                    "description": "Job docker image",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Job name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region of the job",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "resourceUsageUrl": {
                    "canBeNull": true,
                    "description": "Job resource usage url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "resources": {
                    "canBeNull": false,
                    "description": "Job resources",
                    "fullType": "cloud.project.ai.training.JobResource",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.training.JobResource"
                },
                "state": {
                    "canBeNull": false,
                    "description": "Job status",
                    "fullType": "cloud.project.ai.training.JobStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.training.JobStatusEnum"
                },
                "totalRuntime": {
                    "canBeNull": true,
                    "description": "Job Total runtime in second",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "updatedOn": {
                    "canBeNull": false,
                    "description": "Job update date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "user": {
                    "canBeNull": false,
                    "description": "User name that own the Job",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.training.JobLogs": {
            "description": "Job Logs",
            "id": "JobLogs",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "lastActivity": {
                    "canBeNull": true,
                    "description": "Last activity date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "logs": {
                    "canBeNull": false,
                    "description": "Logs lines",
                    "fullType": "cloud.project.ai.training.LogLine[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.ai.training.LogLine[]"
                }
            }
        },
        "cloud.project.ai.training.JobResource": {
            "description": "Training Platform Job Resource Object",
            "id": "JobResource",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "gpu": {
                    "canBeNull": true,
                    "description": "GPU resources of the Job",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloud.project.ai.training.JobSpec": {
            "description": "Training Platform Job Spec Object to create a job",
            "id": "JobSpec",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "command": {
                    "canBeNull": false,
                    "description": "Job command",
                    "fullType": "string[]",
                    "readOnly": false,
                    "required": false,
                    "type": "string[]"
                },
                "data": {
                    "canBeNull": false,
                    "description": "Job Data linked",
                    "fullType": "string[]",
                    "readOnly": false,
                    "required": false,
                    "type": "string[]"
                },
                "image": {
                    "canBeNull": false,
                    "description": "Job docker image",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "name": {
                    "canBeNull": true,
                    "description": "Job name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region of the job",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "resources": {
                    "canBeNull": false,
                    "description": "Job resources",
                    "fullType": "cloud.project.ai.training.JobResource",
                    "readOnly": false,
                    "required": true,
                    "type": "cloud.project.ai.training.JobResource"
                },
                "user": {
                    "canBeNull": false,
                    "description": "User that spawn the job",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.training.JobStatusEnum": {
            "description": "Status of the job",
            "enum": [
                "CANCELLED",
                "CANCELLING",
                "FAILED",
                "INTERRUPTED",
                "SUCCEEDED",
                "QUEUING",
                "QUEUED",
                "RUNNING"
            ],
            "enumType": "string",
            "id": "JobStatusEnum",
            "namespace": "cloud.project.ai.training"
        },
        "cloud.project.ai.training.LogLine": {
            "description": "Log line",
            "id": "LogLine",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "content": {
                    "canBeNull": true,
                    "description": "Content of the log",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "timestamp": {
                    "canBeNull": true,
                    "description": "Datetime of the log",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "cloud.project.ai.training.PresetImage": {
            "description": "A Image of a preset data science image",
            "id": "PresetImage",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Model Image Description",
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
                "link": {
                    "canBeNull": true,
                    "description": "Link to the Opensource Model",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "logo": {
                    "canBeNull": true,
                    "description": "Framework logo",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Model Image Name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.training.Region": {
            "description": "AI Training Region",
            "id": "Region",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "cliInstallUrl": {
                    "canBeNull": false,
                    "description": "Client Install Url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "consoleUrl": {
                    "canBeNull": false,
                    "description": "Region Console Url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "documentationUrl": {
                    "canBeNull": false,
                    "description": "Documentation Url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Region id",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "version": {
                    "canBeNull": false,
                    "description": "Region version",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.training.Registry": {
            "description": "Representation of a registry",
            "id": "Registry",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "custom": {
                    "canBeNull": false,
                    "description": "True if user have a registry attached",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "password": {
                    "canBeNull": true,
                    "description": "Docker registry password",
                    "fullType": "password",
                    "readOnly": false,
                    "required": true,
                    "type": "password"
                },
                "url": {
                    "canBeNull": true,
                    "description": "Docker registry URL",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "username": {
                    "canBeNull": true,
                    "description": "Docker registry username",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.project.ai.training.RegistryResponse": {
            "description": "Registry attachment response",
            "id": "RegistryResponse",
            "namespace": "cloud.project.ai.training",
            "properties": {
                "message": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.dataProcessing.AuthorizationStatus": {
            "description": "Authorization status",
            "id": "AuthorizationStatus",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "authorized": {
                    "canBeNull": false,
                    "description": "True is project is authorized to use Data Processing service",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "cloud.project.dataProcessing.CapabilitiesEngineParameter": {
            "description": "Engine parameters",
            "id": "CapabilitiesEngineParameter",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "default": {
                    "canBeNull": true,
                    "description": "Default value of parameter",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description of parameter",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "mandatory": {
                    "canBeNull": false,
                    "description": "Parameter is mandatory or not",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of parameter",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Type of parameter",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "validator": {
                    "canBeNull": false,
                    "description": "Validator of parameter",
                    "fullType": "cloud.project.dataProcessing.ParameterValidator",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.dataProcessing.ParameterValidator"
                }
            }
        },
        "cloud.project.dataProcessing.CapabilitiesTemplate": {
            "description": "Engine Template",
            "id": "CapabilitiesTemplate",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "cores": {
                    "canBeNull": false,
                    "description": "Number of cores of the template",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "id": {
                    "canBeNull": false,
                    "description": "ID of the template",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "memory": {
                    "canBeNull": false,
                    "description": "Memory in bytes of the template",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloud.project.dataProcessing.Capability": {
            "description": "Capabilities of data processing service",
            "id": "Capability",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "availableVersions": {
                    "canBeNull": false,
                    "description": "Available versions of the engine",
                    "fullType": "cloud.project.dataProcessing.EngineVersion[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.dataProcessing.EngineVersion[]"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of the engine",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "parameters": {
                    "canBeNull": false,
                    "description": "Parameters of the engine",
                    "fullType": "cloud.project.dataProcessing.CapabilitiesEngineParameter[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.dataProcessing.CapabilitiesEngineParameter[]"
                },
                "templates": {
                    "canBeNull": false,
                    "description": "Templates of the engine",
                    "fullType": "cloud.project.dataProcessing.CapabilitiesTemplate[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.dataProcessing.CapabilitiesTemplate[]"
                }
            }
        },
        "cloud.project.dataProcessing.EngineParameter": {
            "description": "Parameters of the engine",
            "id": "EngineParameter",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "name": {
                    "canBeNull": false,
                    "description": "Name of parameters",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "value": {
                    "canBeNull": false,
                    "description": "Value of parameters",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.project.dataProcessing.EngineVersion": {
            "description": "Engine version",
            "id": "EngineVersion",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "availableRegions": {
                    "canBeNull": false,
                    "description": "List of region available of the version",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description of the engine",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of the version",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.dataProcessing.Job": {
            "description": "Job information",
            "id": "Job",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "containerName": {
                    "canBeNull": false,
                    "description": "Name of the container where the code and the log of the job is",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "creationDate": {
                    "canBeNull": true,
                    "description": "Creation date of the job",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "endDate": {
                    "canBeNull": true,
                    "description": "End date of the job",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "engine": {
                    "canBeNull": false,
                    "description": "Engine of the job",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "engineParameters": {
                    "canBeNull": false,
                    "description": "Parameters of job engine",
                    "fullType": "cloud.project.dataProcessing.EngineParameter[]",
                    "readOnly": false,
                    "required": true,
                    "type": "cloud.project.dataProcessing.EngineParameter[]"
                },
                "engineVersion": {
                    "canBeNull": false,
                    "description": "Version of the engine",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "UUID of the job",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Openstack region of the job",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "startDate": {
                    "canBeNull": true,
                    "description": "Start date of the job",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Current state of the job",
                    "fullType": "cloud.project.dataProcessing.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.dataProcessing.StatusEnum"
                }
            }
        },
        "cloud.project.dataProcessing.JobLogs": {
            "description": "Job Logs",
            "id": "JobLogs",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "logs": {
                    "canBeNull": false,
                    "description": "Logs lines",
                    "fullType": "cloud.project.dataProcessing.LogLine[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.dataProcessing.LogLine[]"
                },
                "logsAddress": {
                    "canBeNull": true,
                    "description": "Address log url",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "startDate": {
                    "canBeNull": false,
                    "description": "Start date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "cloud.project.dataProcessing.LogLine": {
            "description": "Log line",
            "id": "LogLine",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "content": {
                    "canBeNull": false,
                    "description": "Content of the log",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Id of the log",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "timestamp": {
                    "canBeNull": false,
                    "description": "Datetime of the log",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "cloud.project.dataProcessing.Metrics": {
            "description": "Metrics information",
            "id": "Metrics",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "endpoints": {
                    "canBeNull": false,
                    "description": "Metrics endpoint query platforms",
                    "fullType": "cloud.project.dataProcessing.MetricsEndpoint[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.dataProcessing.MetricsEndpoint[]"
                },
                "token": {
                    "canBeNull": false,
                    "description": "Metrics token linked to the project",
                    "fullType": "password",
                    "readOnly": true,
                    "required": false,
                    "type": "password"
                }
            }
        },
        "cloud.project.dataProcessing.MetricsEndpoint": {
            "description": "Job Logs",
            "id": "MetricsEndpoint",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "name": {
                    "canBeNull": false,
                    "description": "Name of endpoint",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "url": {
                    "canBeNull": false,
                    "description": "URL of endpoint",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.dataProcessing.ParameterValidator": {
            "description": "Conditions to which the value of parameter must conform",
            "id": "ParameterValidator",
            "namespace": "cloud.project.dataProcessing",
            "properties": {
                "max": {
                    "canBeNull": true,
                    "description": "Maximal value of parameter",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                },
                "min": {
                    "canBeNull": true,
                    "description": "Minimal value of parameter",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                },
                "regex": {
                    "canBeNull": true,
                    "description": "Regex to match value of parameter",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.dataProcessing.StatusEnum": {
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
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "cloud.project.dataProcessing"
        },
        "cloud.project.io.Stream": {
            "description": "A stream to send data",
            "id": "Stream",
            "namespace": "cloud.project.io",
            "properties": {
                "backlog": {
                    "canBeNull": false,
                    "description": "Backlog of the stream in RFC3339 (duration)",
                    "fullType": "duration",
                    "readOnly": false,
                    "required": false,
                    "type": "duration"
                },
                "description": {
                    "canBeNull": true,
                    "description": "Description of the stream",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "ID of the stream",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "kind": {
                    "canBeNull": false,
                    "description": "Kind of persistence for the stream.",
                    "fullType": "cloud.project.io.StreamKindEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.io.StreamKindEnum"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of the stream",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "regions": {
                    "canBeNull": false,
                    "description": "Regions where the stream is available",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "retention": {
                    "canBeNull": false,
                    "description": "Retention of the stream in RFC3339 (duration)",
                    "fullType": "duration",
                    "readOnly": false,
                    "required": false,
                    "type": "duration"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Status of the stream.",
                    "fullType": "cloud.project.io.StreamStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.io.StreamStatusEnum"
                },
                "throttling": {
                    "canBeNull": false,
                    "description": "Throttling of the stream (number of message allowed per second for the stream)",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloud.project.io.StreamCreation": {
            "description": "Create a stream of data",
            "id": "StreamCreation",
            "namespace": "cloud.project.io",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Description of the stream",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "kind": {
                    "canBeNull": false,
                    "description": "Kind of the stream",
                    "fullType": "cloud.project.io.StreamKindEnum",
                    "readOnly": false,
                    "required": true,
                    "type": "cloud.project.io.StreamKindEnum"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of the stream",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region where the stream will be available",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.project.io.StreamKindEnum": {
            "description": "Kind of persistence for the stream",
            "enum": [
                "NON_PERSISTENT",
                "PERSISTENT"
            ],
            "enumType": "string",
            "id": "StreamKindEnum",
            "namespace": "cloud.project.io"
        },
        "cloud.project.io.StreamStats": {
            "description": "Get statistics of a stream",
            "id": "StreamStats",
            "namespace": "cloud.project.io",
            "properties": {
                "usage": {
                    "canBeNull": false,
                    "description": "Number of messages per second",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.project.io.StreamStatusEnum": {
            "description": "Status of the stream",
            "enum": [
                "INSTALLING",
                "RUNNING",
                "ERROR"
            ],
            "enumType": "string",
            "id": "StreamStatusEnum",
            "namespace": "cloud.project.io"
        },
        "cloud.project.io.stream.Region": {
            "description": "Region information",
            "id": "Region",
            "namespace": "cloud.project.io.stream",
            "properties": {
                "endpoint": {
                    "canBeNull": false,
                    "description": "Endpoint of the region",
                    "fullType": "cloud.project.io.stream.RegionEndpoint",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.io.stream.RegionEndpoint"
                },
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
        "cloud.project.io.stream.RegionEndpoint": {
            "description": "Region information",
            "id": "RegionEndpoint",
            "namespace": "cloud.project.io.stream",
            "properties": {
                "pulsar": {
                    "canBeNull": false,
                    "description": "Pulsar endpoint of the stream",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.io.stream.Subscription": {
            "description": "Create a consumer on a stream",
            "id": "Subscription",
            "namespace": "cloud.project.io.stream",
            "properties": {
                "id": {
                    "canBeNull": false,
                    "description": "ID of the subscription",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "kind": {
                    "canBeNull": false,
                    "description": "Kind of the subscription",
                    "fullType": "cloud.project.io.stream.SubscriptionKindEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.io.stream.SubscriptionKindEnum"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of the subscription",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cloud.project.io.stream.SubscriptionCreation": {
            "description": "Create a subscription on a stream",
            "id": "SubscriptionCreation",
            "namespace": "cloud.project.io.stream",
            "properties": {
                "name": {
                    "canBeNull": false,
                    "description": "Name of the subscription",
                    "fullType": "string",
                    "readOnly": false,
                    "required": true,
                    "type": "string"
                }
            }
        },
        "cloud.project.io.stream.SubscriptionKindEnum": {
            "description": "Kind of the subscription",
            "enum": [
                "SHARED",
                "KEY_SHARED",
                "EXCLUSIVE",
                "FAILOVER"
            ],
            "enumType": "string",
            "id": "SubscriptionKindEnum",
            "namespace": "cloud.project.io.stream"
        },
        "cloud.project.io.stream.SubscriptionStats": {
            "description": "Get statistic of a subscription",
            "id": "SubscriptionStats",
            "namespace": "cloud.project.io.stream",
            "properties": {
                "lag": {
                    "canBeNull": false,
                    "description": "Messages waiting to be consumed",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cloud.project.io.stream.Token": {
            "description": "Token to access a stream",
            "id": "Token",
            "namespace": "cloud.project.io.stream",
            "properties": {
                "action": {
                    "canBeNull": false,
                    "description": "Action of the token",
                    "fullType": "cloud.project.io.stream.TokenActionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.io.stream.TokenActionEnum"
                },
                "id": {
                    "canBeNull": false,
                    "description": "ID of the token",
                    "fullType": "uuid",
                    "readOnly": true,
                    "required": false,
                    "type": "uuid"
                },
                "token": {
                    "canBeNull": false,
                    "description": "Access token",
                    "fullType": "password",
                    "readOnly": true,
                    "required": false,
                    "type": "password"
                }
            }
        },
        "cloud.project.io.stream.TokenActionEnum": {
            "description": "Action of the token",
            "enum": [
                "CONSUME",
                "PRODUCE",
                "BOTH"
            ],
            "enumType": "string",
            "id": "TokenActionEnum",
            "namespace": "cloud.project.io.stream"
        },
        "cloud.project.io.stream.TokenCreation": {
            "description": "Create a token to access a stream",
            "id": "TokenCreation",
            "namespace": "cloud.project.io.stream",
            "properties": {
                "action": {
                    "canBeNull": false,
                    "description": "Action of the token",
                    "fullType": "cloud.project.io.stream.TokenActionEnum",
                    "readOnly": false,
                    "required": true,
                    "type": "cloud.project.io.stream.TokenActionEnum"
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
                "frontends": {
                    "canBeNull": false,
                    "description": "List of frontends",
                    "fullType": "cloud.project.loadbalancer.Frontend[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.project.loadbalancer.Frontend[]"
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
                "frontends": {
                    "canBeNull": false,
                    "description": "List of frontends",
                    "fullType": "cloud.project.loadbalancer.Frontend[]",
                    "readOnly": false,
                    "required": false,
                    "type": "cloud.project.loadbalancer.Frontend[]"
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
                    "canBeNull": false,
                    "description": "Port to listen",
                    "fullType": "long",
                    "readOnly": false,
                    "required": true,
                    "type": "long"
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
        "cloud.project.loadbalancer.frontend.ModeEnum": {
            "description": "Available load balancer frontend mode",
            "enum": [
                "HTTP",
                "TCP"
            ],
            "enumType": "string",
            "id": "ModeEnum",
            "namespace": "cloud.project.loadbalancer.frontend"
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
        "cloud.usage.PaymentTypeEnum": {
            "description": "PaymentTypeEnum",
            "enum": [
                "pre",
                "post"
            ],
            "enumType": "string",
            "id": "PaymentTypeEnum",
            "namespace": "cloud.usage"
        },
        "cloud.usage.Period": {
            "description": "Period",
            "id": "Period",
            "namespace": "cloud.usage",
            "properties": {
                "from": {
                    "canBeNull": false,
                    "description": "Usage from",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "to": {
                    "canBeNull": false,
                    "description": "Usage to",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "cloud.usage.UsageBill": {
            "description": "UsageBill",
            "id": "UsageBill",
            "namespace": "cloud.usage",
            "properties": {
                "bill_id": {
                    "canBeNull": false,
                    "description": "ID of the bill",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "credit": {
                    "canBeNull": false,
                    "description": "Amount of credits used in this bill (not necessarily on part)",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                },
                "part": {
                    "canBeNull": false,
                    "description": "Amount of the bill that accounts for services for the usage period, credits not taken into account",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                },
                "payment_type": {
                    "canBeNull": false,
                    "description": "Payment type",
                    "fullType": "cloud.usage.PaymentTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.usage.PaymentTypeEnum"
                },
                "total": {
                    "canBeNull": false,
                    "description": "Total amount of the bill, credits not taken into account",
                    "fullType": "double",
                    "readOnly": true,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "cloud.usage.UsageCurrent": {
            "description": "UsageCurrent",
            "id": "UsageCurrent",
            "namespace": "cloud.usage",
            "properties": {
                "hourlyUsage": {
                    "canBeNull": true,
                    "description": "Hourly usage",
                    "fullType": "cloud.billingView.HourlyResources",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyResources"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Entry last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "monthlyUsage": {
                    "canBeNull": true,
                    "description": "Monthly usage",
                    "fullType": "cloud.billingView.MonthlyResources",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.MonthlyResources"
                },
                "period": {
                    "canBeNull": false,
                    "description": "Usage dates (from/to)",
                    "fullType": "cloud.usage.Period",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.usage.Period"
                },
                "resourcesUsage": {
                    "canBeNull": true,
                    "description": "Resource usage (billed per hour/minute/second/unit)",
                    "fullType": "cloud.billingView.TypedResources[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.TypedResources[]"
                }
            }
        },
        "cloud.usage.UsageCurrentBills": {
            "description": "UsageCurrentBills",
            "id": "UsageCurrentBills",
            "namespace": "cloud.usage",
            "properties": {
                "bills": {
                    "canBeNull": false,
                    "description": "Bills related to the current usage",
                    "fullType": "cloud.usage.UsageBill[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.usage.UsageBill[]"
                }
            }
        },
        "cloud.usage.UsageForecast": {
            "description": "UsageForecast",
            "id": "UsageForecast",
            "namespace": "cloud.usage",
            "properties": {
                "hourlyUsage": {
                    "canBeNull": true,
                    "description": "Hourly forecast",
                    "fullType": "cloud.billingView.HourlyResources",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyResources"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Entry last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "monthlyUsage": {
                    "canBeNull": true,
                    "description": "Monthly forecast",
                    "fullType": "cloud.billingView.MonthlyResources",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.MonthlyResources"
                },
                "period": {
                    "canBeNull": false,
                    "description": "Forecast dates (from/to)",
                    "fullType": "cloud.usage.Period",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.usage.Period"
                },
                "resourcesUsage": {
                    "canBeNull": true,
                    "description": "Resource usage forecast (billed per hour/minute/second/unit)",
                    "fullType": "cloud.billingView.TypedResources[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.TypedResources[]"
                },
                "usableCredits": {
                    "canBeNull": true,
                    "description": "Usable credit to pay next bill",
                    "fullType": "cloud.billingView.UsedCredits",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.UsedCredits"
                }
            }
        },
        "cloud.usage.UsageHistory": {
            "description": "UsageHistory",
            "id": "UsageHistory",
            "namespace": "cloud.usage",
            "properties": {
                "id": {
                    "canBeNull": false,
                    "description": "Usage id",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Entry last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "period": {
                    "canBeNull": false,
                    "description": "Usage dates (from/to)",
                    "fullType": "cloud.usage.Period",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.usage.Period"
                }
            }
        },
        "cloud.usage.UsageHistoryDetail": {
            "description": "UsageHistoryDetail",
            "id": "UsageHistoryDetail",
            "namespace": "cloud.usage",
            "properties": {
                "hourlyUsage": {
                    "canBeNull": true,
                    "description": "Hourly usage",
                    "fullType": "cloud.billingView.HourlyResources",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.HourlyResources"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Usage id",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Entry last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "monthlyUsage": {
                    "canBeNull": true,
                    "description": "Monthly usage",
                    "fullType": "cloud.billingView.MonthlyResources",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.MonthlyResources"
                },
                "period": {
                    "canBeNull": false,
                    "description": "Usage dates (from/to)",
                    "fullType": "cloud.usage.Period",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.usage.Period"
                },
                "resourcesUsage": {
                    "canBeNull": true,
                    "description": "Resource usage (billed per hour/minute/second/unit)",
                    "fullType": "cloud.billingView.TypedResources[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.billingView.TypedResources[]"
                }
            }
        },
        "cloud.usage.UsageHistoryDetailBills": {
            "description": "UsageHistoryDetailBills",
            "id": "UsageHistoryDetailBills",
            "namespace": "cloud.usage",
            "properties": {
                "bills": {
                    "canBeNull": false,
                    "description": "Bills related to the usage",
                    "fullType": "cloud.usage.UsageBill[]",
                    "readOnly": true,
                    "required": false,
                    "type": "cloud.usage.UsageBill[]"
                }
            }
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
                "ai_training_operator"
            ],
            "enumType": "string",
            "id": "RoleEnum",
            "namespace": "cloud.user"
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
        "nichandle.OvhSubsidiaryEnum": {
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
            "enumType": "string",
            "id": "OvhSubsidiaryEnum",
            "namespace": "nichandle"
        },
        "order.CurrencyCodeEnum": {
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
        }
    },
    "resourcePath": "/cloud"
};
//# sourceMappingURL=cloud.js.map