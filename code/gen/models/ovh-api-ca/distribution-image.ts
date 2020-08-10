import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/distribution/image/{serviceType}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceType",
              "dataType": "distribution.image.service",
              "paramType": "path",
              "fullType": "distribution.image.service",
              "required": true,
              "description": "Service type"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "List images for a service"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/distribution/image/{serviceType}/{imageName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceType",
              "dataType": "distribution.image.service",
              "paramType": "path",
              "fullType": "distribution.image.service",
              "required": true,
              "description": "Service type"
            },
            {
              "name": "imageName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Image name"
            }
          ],
          "responseType": "distribution.image",
          "noAuthentication": true,
          "description": "Show image details"
        }
      ],
      "description": "Missing description"
    }
  ],
  "resourcePath": "/distribution/image",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "distribution.image": {
      "id": "image",
      "namespace": "distribution",
      "description": "Information about installed package for a given image",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The image name",
          "required": true
        },
        "packages": {
          "type": "distribution.image.package[]",
          "fullType": "distribution.image.package[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Packages informations",
          "required": true
        },
        "properties": {
          "type": "distribution.image.properties",
          "fullType": "distribution.image.properties",
          "canBeNull": false,
          "readOnly": true,
          "description": "Image properties",
          "required": true
        },
        "service": {
          "type": "distribution.image.service",
          "fullType": "distribution.image.service",
          "canBeNull": false,
          "readOnly": true,
          "description": "The service type name",
          "required": true
        }
      }
    },
    "distribution.image.package": {
      "id": "package",
      "namespace": "distribution.image",
      "description": "An image package description",
      "properties": {
        "alias": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Package alias",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Package name",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Package version",
          "required": true
        }
      }
    },
    "distribution.image.properties": {
      "id": "properties",
      "namespace": "distribution.image",
      "description": "Description not available",
      "properties": {
        "category": {
          "type": "distribution.image.properties.category",
          "fullType": "distribution.image.properties.category",
          "canBeNull": false,
          "readOnly": true,
          "description": "The image category",
          "required": true
        }
      }
    },
    "distribution.image.properties.category": {
      "id": "category",
      "namespace": "distribution.image.properties",
      "description": "Description not available",
      "enum": [
        "none",
        "bare",
        "panel",
        "cms",
        "development",
        "desktop"
      ],
      "enumType": "string"
    },
    "distribution.image.service": {
      "id": "service",
      "namespace": "distribution.image",
      "description": "Description not available",
      "enum": [
        "vps",
        "dedicated",
        "cloud",
        "dedicatedCloud"
      ],
      "enumType": "string"
    }
  }
}