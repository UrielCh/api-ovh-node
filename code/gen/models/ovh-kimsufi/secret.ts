import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/secret/retrieve",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "id",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "The secret ID"
            }
          ],
          "responseType": "secret.Secret",
          "noAuthentication": true,
          "description": "Retrieve a secret sent by email"
        }
      ],
      "description": "Retrieve a secret sent by email"
    }
  ],
  "resourcePath": "/secret",
  "basePath": "https://eu.api.kimsufi.com/1.0",
  "models": {
    "secret.Secret": {
      "id": "Secret",
      "namespace": "secret",
      "description": "A secret",
      "properties": {
        "expiration": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Expiration time of the secret",
          "required": true
        },
        "secret": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "The secret",
          "required": true
        }
      }
    }
  }
}