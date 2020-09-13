import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/caas/registry.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the DOCKER service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/caas/registry"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Inspect service.",
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
          "responseType": "registry.service"
        }
      ],
      "path": "/caas/registry/{serviceName}"
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
              "description": "The internal ID of your project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/caas/registry/{serviceName}/changeContact"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List namespace",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create namespace",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "registry.inputNamespace",
              "description": "A namespace in which a user can either read, write or delete images",
              "fullType": "registry.inputNamespace",
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
          "responseType": "registry.namespace"
        }
      ],
      "path": "/caas/registry/{serviceName}/namespaces"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete namespace",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Namespace id",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Inspect namespace",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Namespace id",
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
          "responseType": "registry.namespace"
        }
      ],
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List all images in namespace",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Namespace id",
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
          "responseType": "string[]"
        }
      ],
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete image",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image id",
              "fullType": "string",
              "name": "imageId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Namespace id",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Inspect image",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image id",
              "fullType": "string",
              "name": "imageId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Namespace id",
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
          "responseType": "registry.image"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update image",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "registry.inputImage",
              "description": "A container image",
              "fullType": "registry.inputImage",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Image id",
              "fullType": "string",
              "name": "imageId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Namespace id",
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
          "responseType": "registry.image"
        }
      ],
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List image permissions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image id",
              "fullType": "string",
              "name": "imageId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Namespace id",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create image permissions",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "registry.inputPermissions",
              "description": "Permissions of a user over a namespace",
              "fullType": "registry.inputPermissions",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Image id",
              "fullType": "string",
              "name": "imageId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Namespace id",
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
          "responseType": "registry.permissions"
        }
      ],
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete image permissions.",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image id",
              "fullType": "string",
              "name": "imageId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Namespace id",
              "fullType": "string",
              "name": "namespaceId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Permission id",
              "fullType": "string",
              "name": "permissionId",
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
          "description": "Inspect image permissions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image id",
              "fullType": "string",
              "name": "imageId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Namespace id",
              "fullType": "string",
              "name": "namespaceId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Permission id",
              "fullType": "string",
              "name": "permissionId",
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
          "responseType": "registry.permissions"
        }
      ],
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List image tags",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image id",
              "fullType": "string",
              "name": "imageId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Namespace id",
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
          "responseType": "string[]"
        }
      ],
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Inspect image tag",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Image id",
              "fullType": "string",
              "name": "imageId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Namespace id",
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
              "dataType": "string",
              "description": "Tag id",
              "fullType": "string",
              "name": "tagId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "registry.tag"
        }
      ],
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List namespace permissions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Namespace id",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create namespace permissions",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "registry.inputPermissions",
              "description": "Permissions of a user over a namespace",
              "fullType": "registry.inputPermissions",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Namespace id",
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
          "responseType": "registry.permissions"
        }
      ],
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete namespace permissions",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Namespace id",
              "fullType": "string",
              "name": "namespaceId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Permission id",
              "fullType": "string",
              "name": "permissionId",
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
          "description": "Inspect permission",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Namespace id",
              "fullType": "string",
              "name": "namespaceId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Permission id",
              "fullType": "string",
              "name": "permissionId",
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
          "responseType": "registry.permissions"
        }
      ],
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}"
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
              "description": "The internal ID of your project",
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
              "description": "The internal ID of your project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/caas/registry/{serviceName}/serviceInfos"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List users",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create user",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "registry.inputUser",
              "description": "A registry user account",
              "fullType": "registry.inputUser",
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
          "responseType": "registry.user"
        }
      ],
      "path": "/caas/registry/{serviceName}/users"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "dataType": "string",
              "description": "User id",
              "fullType": "string",
              "name": "userId",
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
          "description": "Inspect user",
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
              "description": "User id",
              "fullType": "string",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "registry.user"
        }
      ],
      "path": "/caas/registry/{serviceName}/users/{userId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update user password",
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
              "description": "User id",
              "fullType": "string",
              "name": "userId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "registry.user"
        }
      ],
      "path": "/caas/registry/{serviceName}/users/{userId}/changePassword"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "registry.image": {
      "description": "An image stored in a namespace",
      "id": "image",
      "namespace": "registry",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "The image id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "The image name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "public": {
          "canBeNull": false,
          "description": "Whether is image is public or private",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "description": "The status of the image",
          "fullType": "registry.image.status",
          "readOnly": true,
          "required": false,
          "type": "registry.image.status"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "registry.image.status": {
      "description": "The status of the image",
      "enum": [
        "DELETING",
        "DEPLOYING",
        "ERROR",
        "OK"
      ],
      "enumType": "string",
      "id": "status",
      "namespace": "registry.image"
    },
    "registry.inputImage": {
      "description": "A container image",
      "id": "inputImage",
      "namespace": "registry",
      "properties": {
        "public": {
          "canBeNull": false,
          "description": "image is public",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "registry.inputNamespace": {
      "description": "A namespace in which a user can either read, write or delete images",
      "id": "inputNamespace",
      "namespace": "registry",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "The namespace name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "registry.inputPermissions": {
      "description": "Permissions of a user over a namespace",
      "id": "inputPermissions",
      "namespace": "registry",
      "properties": {
        "canRead": {
          "canBeNull": false,
          "description": "Whether a user can read images on the namespace",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canWrite": {
          "canBeNull": false,
          "description": "Whether a user can create images on the namespace",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "isAdmin": {
          "canBeNull": false,
          "description": "Whether a user can delete images on the namespace",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "description": "The status of the permission",
          "fullType": "registry.permission.status",
          "readOnly": true,
          "required": false,
          "type": "registry.permission.status"
        },
        "userId": {
          "canBeNull": false,
          "description": "User Id ",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "registry.inputUser": {
      "description": "A registry user account",
      "id": "inputUser",
      "namespace": "registry",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "A general description of the user account",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "registry.namespace": {
      "description": "A namespace in which a user can either read, write or delete images",
      "id": "namespace",
      "namespace": "registry",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "The namespace id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "The namespace name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "The status of the namespace",
          "fullType": "registry.namespace.status",
          "readOnly": true,
          "required": false,
          "type": "registry.namespace.status"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "registry.namespace.status": {
      "description": "The status of the namespace",
      "enum": [
        "DELETING",
        "DEPLOYING",
        "ERROR",
        "OK"
      ],
      "enumType": "string",
      "id": "status",
      "namespace": "registry.namespace"
    },
    "registry.permission.status": {
      "description": "The status of the permission",
      "enum": [
        "DELETING",
        "DEPLOYING",
        "ERROR",
        "OK"
      ],
      "enumType": "string",
      "id": "status",
      "namespace": "registry.permission"
    },
    "registry.permissions": {
      "description": "Permissions of a user over a namespace",
      "id": "permissions",
      "namespace": "registry",
      "properties": {
        "canRead": {
          "canBeNull": false,
          "description": "Whether a user can read images on the namespace",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canWrite": {
          "canBeNull": false,
          "description": "Whether a user can create images on the namespace",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Permission Id ",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "isAdmin": {
          "canBeNull": false,
          "description": "Whether a user can delete images on the namespace",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "description": "The status of the permission",
          "fullType": "registry.permission.status",
          "readOnly": true,
          "required": false,
          "type": "registry.permission.status"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "userId": {
          "canBeNull": false,
          "description": "User Id ",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "registry.service": {
      "description": "The client subscription to the registry service",
      "id": "service",
      "namespace": "registry",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "endpoint": {
          "canBeNull": false,
          "description": "The endpoint used for docker login",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "The service id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maxNamespaces": {
          "canBeNull": false,
          "description": "Maximal number of registered namespaces in the service",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxUsers": {
          "canBeNull": false,
          "description": "Maximal number of registered users in the service",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "zone": {
          "canBeNull": false,
          "description": "The name of the geographical zone the service is located in",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "registry.tag": {
      "description": "An image tag",
      "id": "tag",
      "namespace": "registry",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "The tag id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "The tag name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "registry.user": {
      "description": "A registry user account",
      "id": "user",
      "namespace": "registry",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "A general description of the user account",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "The user id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "The status of the user",
          "fullType": "registry.user.status",
          "readOnly": true,
          "required": false,
          "type": "registry.user.status"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "username": {
          "canBeNull": false,
          "description": "The user name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "registry.user.status": {
      "description": "The status of the user",
      "enum": [
        "DELETING",
        "DEPLOYING",
        "ERROR",
        "OK"
      ],
      "enumType": "string",
      "id": "status",
      "namespace": "registry.user"
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
  "resourcePath": "/caas/registry"
}