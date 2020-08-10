import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/contact/form",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "contact.FormCharacteristic[]",
          "noAuthentication": true,
          "description": "Get form characteristics"
        }
      ],
      "description": "Get form characteristics"
    },
    {
      "path": "/contact/form/send",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "type",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Form type"
            },
            {
              "name": "form",
              "dataType": "complexType.SafeKeyValue<string>[]",
              "paramType": "body",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "required": true,
              "description": "Form informations"
            }
          ],
          "responseType": "void",
          "noAuthentication": true,
          "description": "Send form following characteristics of /contact/form"
        }
      ],
      "description": "Send form following characteristics of /contact/form"
    }
  ],
  "resourcePath": "/contact",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "complexType.SafeKeyValue<T>": {
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "properties": {
        "key": {
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
    "contact.FormCharacteristic": {
      "id": "FormCharacteristic",
      "namespace": "contact",
      "description": "Form characteristics",
      "properties": {
        "keys": {
          "type": "contact.KeyFormCharacteristic[]",
          "fullType": "contact.KeyFormCharacteristic[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Form keys to send",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Form type",
          "required": true
        }
      }
    },
    "contact.KeyFormCharacteristic": {
      "id": "KeyFormCharacteristic",
      "namespace": "contact",
      "description": "Form key description",
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Key name",
          "required": true
        },
        "required": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Key required or not",
          "required": true
        }
      }
    }
  }
}