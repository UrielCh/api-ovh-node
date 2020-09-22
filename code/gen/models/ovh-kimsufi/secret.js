"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
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
    "basePath": "https://eu.api.kimsufi.com/1.0",
    "models": {
        "secret.Secret": {
            "description": "A secret",
            "id": "Secret",
            "namespace": "secret",
            "properties": {
                "expiration": {
                    "canBeNull": false,
                    "description": "Expiration time of the secret",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "secret": {
                    "canBeNull": false,
                    "description": "The secret",
                    "readOnly": false,
                    "required": false,
                    "type": "password"
                }
            }
        }
    },
    "resourcePath": "/secret"
};
//# sourceMappingURL=secret.js.map