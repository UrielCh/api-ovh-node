import {Schema} from '../../src/schema';

// imported from https://eu.api.kimsufi.com:443/1.0/order.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations about the DEDICATED service",
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
      "path": "/order/dedicated/server"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed options",
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
      "path": "/order/dedicated/server/{serviceName}"
    }
  ],
  "basePath": "https://eu.api.kimsufi.com/1.0",
  "resourcePath": "/order"
}