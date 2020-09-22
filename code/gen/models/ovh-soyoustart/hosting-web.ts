import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/hosting/web.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "cdn.availableOptions": {
      "description": "Option name",
      "id": "availableOptions",
      "namespace": "cdn",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Option name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    }
  },
  "resourcePath": "/hosting/web"
}