import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/contact.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Get form characteristics",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get form characteristics",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "contact.FormCharacteristic[]"
        }
      ],
      "path": "/contact/form"
    },
    {
      "description": "Send form following characteristics of /contact/form",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Send form following characteristics of /contact/form",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "complexType.SafeKeyValue<string>[]",
              "description": "Form informations",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "name": "form",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Form type",
              "fullType": "string",
              "name": "type",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/contact/form/send"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "complexType.SafeKeyValue<T>": {
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "properties": {
        "key": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "T",
          "readOnly": false,
          "required": true,
          "type": "T"
        }
      }
    },
    "contact.FormCharacteristic": {
      "description": "Form characteristics",
      "id": "FormCharacteristic",
      "namespace": "contact",
      "properties": {
        "keys": {
          "canBeNull": false,
          "description": "Form keys to send",
          "fullType": "contact.KeyFormCharacteristic[]",
          "readOnly": false,
          "required": true,
          "type": "contact.KeyFormCharacteristic[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Form type",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "contact.KeyFormCharacteristic": {
      "description": "Form key description",
      "id": "KeyFormCharacteristic",
      "namespace": "contact",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "Key name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "required": {
          "canBeNull": false,
          "description": "Key required or not",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    }
  },
  "resourcePath": "/contact"
}