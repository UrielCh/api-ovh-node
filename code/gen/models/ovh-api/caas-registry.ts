import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/caas/registry",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the DOCKER service"
    },
    {
      "path": "/caas/registry/{serviceName}",
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
          "responseType": "registry.service",
          "noAuthentication": false,
          "description": "Inspect service."
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
      "path": "/caas/registry/{serviceName}/namespaces",
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
          "description": "List namespace"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "registry.inputNamespace",
              "paramType": "body",
              "fullType": "registry.inputNamespace",
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
          "responseType": "registry.namespace",
          "noAuthentication": false,
          "description": "Create namespace"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
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
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete namespace"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
            }
          ],
          "responseType": "registry.namespace",
          "noAuthentication": false,
          "description": "Inspect namespace"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List all images in namespace"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete image"
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
              "name": "imageId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Image ID"
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
          "responseType": "registry.image",
          "noAuthentication": false,
          "description": "Inspect image"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "registry.inputImage",
              "paramType": "body",
              "fullType": "registry.inputImage",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "imageId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Image ID"
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
          "responseType": "registry.image",
          "noAuthentication": false,
          "description": "Update image"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List image permissions"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "registry.inputPermissions",
              "paramType": "body",
              "fullType": "registry.inputPermissions",
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
              "name": "imageId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Image ID"
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
          "responseType": "registry.permissions",
          "noAuthentication": false,
          "description": "Create image permissions"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/permissions/{permissionId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
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
              "name": "permissionId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Permission ID"
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
              "name": "imageId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Image ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete image permissions."
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "namespaceId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Namespace ID"
            },
            {
              "name": "permissionId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Permission ID"
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
          "responseType": "registry.permissions",
          "noAuthentication": false,
          "description": "Inspect image permissions"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "imageId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Image ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List image tags"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/images/{imageId}/tags/{tagId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "tagId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Tag ID"
            }
          ],
          "responseType": "registry.tag",
          "noAuthentication": false,
          "description": "Inspect image tag"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List namespace permissions"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "registry.inputPermissions",
              "paramType": "body",
              "fullType": "registry.inputPermissions",
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
          "responseType": "registry.permissions",
          "noAuthentication": false,
          "description": "Create namespace permissions"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/namespaces/{namespaceId}/permissions/{permissionId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
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
              "name": "permissionId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Permission ID"
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
          "description": "Delete namespace permissions"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "permissionId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Permission ID"
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
          "responseType": "registry.permissions",
          "noAuthentication": false,
          "description": "Inspect permission"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/serviceInfos",
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
      "path": "/caas/registry/{serviceName}/users",
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
          "description": "List users"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "registry.inputUser",
              "paramType": "body",
              "fullType": "registry.inputUser",
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
          "responseType": "registry.user",
          "noAuthentication": false,
          "description": "Create user"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/users/{userId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "userId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
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
              "name": "userId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User ID"
            }
          ],
          "responseType": "registry.user",
          "noAuthentication": false,
          "description": "Inspect user"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/registry/{serviceName}/users/{userId}/changePassword",
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
              "name": "userId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User ID"
            }
          ],
          "responseType": "registry.user",
          "noAuthentication": false,
          "description": "Update user password"
        }
      ],
      "description": "Missing description"
    }
  ],
  "resourcePath": "/caas/registry",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "registry.image": {
      "id": "image",
      "namespace": "registry",
      "description": "An image stored in a namespace",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The image id",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The image name",
          "required": true
        },
        "public": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether is image is public or private",
          "required": true
        },
        "status": {
          "type": "registry.image.status",
          "fullType": "registry.image.status",
          "canBeNull": false,
          "readOnly": true,
          "description": "The status of the image",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        }
      }
    },
    "registry.image.status": {
      "id": "status",
      "namespace": "registry.image",
      "description": "The status of the image",
      "enum": [
        "DELETING",
        "DEPLOYING",
        "ERROR",
        "OK"
      ],
      "enumType": "string"
    },
    "registry.inputImage": {
      "id": "inputImage",
      "namespace": "registry",
      "description": "A container image",
      "properties": {
        "public": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "image is public",
          "required": true
        }
      }
    },
    "registry.inputNamespace": {
      "id": "inputNamespace",
      "namespace": "registry",
      "description": "A namespace in which a user can either read, write or delete images",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The namespace name",
          "required": true
        }
      }
    },
    "registry.inputPermissions": {
      "id": "inputPermissions",
      "namespace": "registry",
      "description": "Permissions of a user over a namespace",
      "properties": {
        "canRead": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether a user can read images on the namespace",
          "required": true
        },
        "canWrite": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether a user can create images on the namespace",
          "required": true
        },
        "isAdmin": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether a user can delete images on the namespace",
          "required": true
        },
        "status": {
          "type": "registry.permission.status",
          "fullType": "registry.permission.status",
          "canBeNull": false,
          "readOnly": true,
          "description": "The status of the permission",
          "required": true
        },
        "userId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "User Id ",
          "required": true
        }
      }
    },
    "registry.inputUser": {
      "id": "inputUser",
      "namespace": "registry",
      "description": "A registry user account",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "A general description of the user account",
          "required": true
        }
      }
    },
    "registry.namespace": {
      "id": "namespace",
      "namespace": "registry",
      "description": "A namespace in which a user can either read, write or delete images",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The namespace id",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The namespace name",
          "required": true
        },
        "status": {
          "type": "registry.namespace.status",
          "fullType": "registry.namespace.status",
          "canBeNull": false,
          "readOnly": true,
          "description": "The status of the namespace",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        }
      }
    },
    "registry.namespace.status": {
      "id": "status",
      "namespace": "registry.namespace",
      "description": "The status of the namespace",
      "enum": [
        "DELETING",
        "DEPLOYING",
        "ERROR",
        "OK"
      ],
      "enumType": "string"
    },
    "registry.permission.status": {
      "id": "status",
      "namespace": "registry.permission",
      "description": "The status of the permission",
      "enum": [
        "DELETING",
        "DEPLOYING",
        "ERROR",
        "OK"
      ],
      "enumType": "string"
    },
    "registry.permissions": {
      "id": "permissions",
      "namespace": "registry",
      "description": "Permissions of a user over a namespace",
      "properties": {
        "canRead": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether a user can read images on the namespace",
          "required": true
        },
        "canWrite": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether a user can create images on the namespace",
          "required": true
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Permission Id ",
          "required": true
        },
        "isAdmin": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether a user can delete images on the namespace",
          "required": true
        },
        "status": {
          "type": "registry.permission.status",
          "fullType": "registry.permission.status",
          "canBeNull": false,
          "readOnly": true,
          "description": "The status of the permission",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        },
        "userId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "User Id ",
          "required": true
        }
      }
    },
    "registry.service": {
      "id": "service",
      "namespace": "registry",
      "description": "The client subscription to the registry service",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "endpoint": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The endpoint used for docker login",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The service id",
          "required": true
        },
        "maxNamespaces": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximal number of registered namespaces in the service",
          "required": true
        },
        "maxUsers": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximal number of registered users in the service",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The name of the geographical zone the service is located in",
          "required": true
        }
      }
    },
    "registry.tag": {
      "id": "tag",
      "namespace": "registry",
      "description": "An image tag",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The tag id",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The tag name",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        }
      }
    },
    "registry.user": {
      "id": "user",
      "namespace": "registry",
      "description": "A registry user account",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "description": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "A general description of the user account",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The user id",
          "required": true
        },
        "status": {
          "type": "registry.user.status",
          "fullType": "registry.user.status",
          "canBeNull": false,
          "readOnly": true,
          "description": "The status of the user",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The user name",
          "required": true
        }
      }
    },
    "registry.user.status": {
      "id": "status",
      "namespace": "registry.user",
      "description": "The status of the user",
      "enum": [
        "DELETING",
        "DEPLOYING",
        "ERROR",
        "OK"
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