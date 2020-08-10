import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/distribution/image.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List images for a service",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "distribution.image.service",
              "description": "Service type",
              "fullType": "distribution.image.service",
              "name": "serviceType",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/distribution/image/{serviceType}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Show image details",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "distribution.image.service",
              "description": "Service type",
              "fullType": "distribution.image.service",
              "name": "serviceType",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Image name",
              "fullType": "string",
              "name": "imageName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "distribution.image"
        }
      ],
      "path": "/distribution/image/{serviceType}/{imageName}"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "distribution.image": {
      "description": "Information about installed package for a given image",
      "id": "image",
      "namespace": "distribution",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "The image name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "packages": {
          "canBeNull": false,
          "description": "Packages informations",
          "fullType": "distribution.image.package[]",
          "readOnly": true,
          "required": true,
          "type": "distribution.image.package[]"
        },
        "properties": {
          "canBeNull": false,
          "description": "Image properties",
          "fullType": "distribution.image.properties",
          "readOnly": true,
          "required": true,
          "type": "distribution.image.properties"
        },
        "service": {
          "canBeNull": false,
          "description": "The service type name",
          "fullType": "distribution.image.service",
          "readOnly": true,
          "required": true,
          "type": "distribution.image.service"
        }
      }
    },
    "distribution.image.package": {
      "description": "An image package description",
      "id": "package",
      "namespace": "distribution.image",
      "properties": {
        "alias": {
          "canBeNull": false,
          "description": "Package alias",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Package name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": "Package version",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "distribution.image.properties": {
      "description": "Description not available",
      "id": "properties",
      "namespace": "distribution.image",
      "properties": {
        "category": {
          "canBeNull": false,
          "description": "The image category",
          "fullType": "distribution.image.properties.category",
          "readOnly": true,
          "required": true,
          "type": "distribution.image.properties.category"
        }
      }
    },
    "distribution.image.properties.category": {
      "description": "Description not available",
      "enum": [
        "none",
        "bare",
        "panel",
        "cms",
        "development",
        "desktop"
      ],
      "enumType": "string",
      "id": "category",
      "namespace": "distribution.image.properties"
    },
    "distribution.image.service": {
      "description": "Description not available",
      "enum": [
        "vps",
        "dedicated",
        "cloud",
        "dedicatedCloud"
      ],
      "enumType": "string",
      "id": "service",
      "namespace": "distribution.image"
    }
  },
  "resourcePath": "/distribution/image"
}