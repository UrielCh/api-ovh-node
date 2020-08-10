import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/secret.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Retrieve a secret sent by email",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve a secret sent by email",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "password",
              "description": "The secret ID",
              "fullType": "password",
              "name": "id",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "secret.Secret"
        }
      ],
      "path": "/secret/retrieve"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "secret.Secret": {
      "description": "A secret",
      "id": "Secret",
      "namespace": "secret",
      "properties": {
        "expiration": {
          "canBeNull": false,
          "description": "Expiration time of the secret",
          "fullType": "datetime",
          "readOnly": false,
          "required": true,
          "type": "datetime"
        },
        "secret": {
          "canBeNull": false,
          "description": "The secret",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
    }
  },
  "resourcePath": "/secret"
}