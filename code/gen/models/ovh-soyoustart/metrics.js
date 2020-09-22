"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "Operations about the METRICS service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "List available services",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [],
                    "responseType": "string[]"
                }
            ],
            "path": "/metrics"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get service",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of your service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "metrics.api.Service"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Modify service",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "New description for your service",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Name of your service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "metrics.api.Service"
                }
            ],
            "path": "/metrics/{serviceName}"
        },
        {
            "description": "Change the contacts of this service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Launch a contact change procedure",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The contact to set as admin contact",
                            "fullType": "coreTypes.AccountId:string",
                            "name": "contactAdmin",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "The contact to set as billing contact",
                            "fullType": "coreTypes.AccountId:string",
                            "name": "contactBilling",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "The contact to set as tech contact",
                            "fullType": "coreTypes.AccountId:string",
                            "name": "contactTech",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "The internal ID of your metrics",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/metrics/{serviceName}/changeContact"
        },
        {
            "description": "Confirm termination of your service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Confirm termination of your service",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Commentary about your termination request",
                            "fullType": "string",
                            "name": "commentary",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "service.TerminationFutureUseEnum",
                            "description": "What next after your termination request",
                            "fullType": "service.TerminationFutureUseEnum",
                            "name": "futureUse",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "service.TerminationReasonEnum",
                            "description": "Reason of your termination request",
                            "fullType": "service.TerminationReasonEnum",
                            "name": "reason",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "The termination token sent by mail to the admin contact",
                            "fullType": "string",
                            "name": "token",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal ID of your metrics",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/metrics/{serviceName}/confirmTermination"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get consumption for your service",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of your service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "Last 'm' minutes. Default is 60min",
                            "fullType": "long",
                            "name": "duration",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "metrics.api.Consumption"
                }
            ],
            "path": "/metrics/{serviceName}/consumption"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Find TokenID for a specific token",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "access token",
                            "fullType": "string",
                            "name": "accessToken",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Name of your service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/metrics/{serviceName}/lookup/token"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Set overquota",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "New value for overquota",
                            "fullType": "long",
                            "name": "quota",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Name of your service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/metrics/{serviceName}/quota"
        },
        {
            "description": "Details about a Service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get this object properties",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal ID of your metrics",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "services.Service"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Alter this object properties",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "services.Service",
                            "description": "New object properties",
                            "fullType": "services.Service",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal ID of your metrics",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/metrics/{serviceName}/serviceInfos"
        },
        {
            "description": "Terminate your service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Terminate your service",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal ID of your metrics",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/metrics/{serviceName}/terminate"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get list of tokens",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of your service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Create a token",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Description for the new token",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "metrics.api.Label[]",
                            "description": "Labels for the new token",
                            "fullType": "metrics.api.Label[]",
                            "name": "labels",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "metrics.api.PermissionEnum",
                            "description": "Type of the new token. Read or Write",
                            "fullType": "metrics.api.PermissionEnum",
                            "name": "permission",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Name of your service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "metrics.api.Token"
                }
            ],
            "path": "/metrics/{serviceName}/token"
        },
        {
            "description": "Missing description",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Revoke a token",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of your service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "ID of the desired token",
                            "fullType": "string",
                            "name": "tokenId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Get a specific token",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of your service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "ID of the desired token",
                            "fullType": "string",
                            "name": "tokenId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "metrics.api.Token"
                },
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Modify a token",
                    "httpMethod": "PUT",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "New description for your token",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Name of your service",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "ID of the desired token",
                            "fullType": "string",
                            "name": "tokenId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "metrics.api.Token"
                }
            ],
            "path": "/metrics/{serviceName}/token/{tokenId}"
        }
    ],
    "basePath": "https://eu.api.soyoustart.com/1.0",
    "models": {
        "metrics.api.Consumption": {
            "description": "Structure holding the consumption",
            "id": "Consumption",
            "namespace": "metrics.api",
            "properties": {
                "ddp": {
                    "canBeNull": false,
                    "description": "Current Daily data points",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "mads": {
                    "canBeNull": false,
                    "description": "Current monthly active data streams",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "metrics.api.Label": {
            "description": "Structure holding the elements about a label",
            "id": "Label",
            "namespace": "metrics.api",
            "properties": {
                "key": {
                    "canBeNull": false,
                    "description": "Label key",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "value": {
                    "canBeNull": false,
                    "description": "Label value",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "metrics.api.OfferTypeEnum": {
            "description": "Type of the service",
            "enum": [
                "cloud",
                "live"
            ],
            "enumType": "string",
            "id": "OfferTypeEnum",
            "namespace": "metrics.api"
        },
        "metrics.api.Option": {
            "description": "Structure holding the options for a service",
            "id": "Option",
            "namespace": "metrics.api",
            "properties": {
                "ddp": {
                    "canBeNull": false,
                    "description": "Daily data points",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "lastModification": {
                    "canBeNull": false,
                    "description": "Time of last modification",
                    "fullType": "datetime",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "mads": {
                    "canBeNull": false,
                    "description": "Monthly active device streams",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "metrics.api.PermissionEnum": {
            "description": "Description not available",
            "enum": [
                "read",
                "write"
            ],
            "enumType": "string",
            "id": "PermissionEnum",
            "namespace": "metrics.api"
        },
        "metrics.api.Region": {
            "description": "Structure holding the elements about a region",
            "id": "Region",
            "namespace": "metrics.api",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Description of a region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of a region",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "metrics.api.Service": {
            "description": "Structure holding the elements about a service",
            "id": "Service",
            "namespace": "metrics.api",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "description": "Description of a service",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of a service",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "offer": {
                    "canBeNull": false,
                    "description": "Offer used for the service",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "quota": {
                    "canBeNull": false,
                    "description": "Quota used for the service",
                    "fullType": "metrics.api.Option",
                    "readOnly": false,
                    "required": false,
                    "type": "metrics.api.Option"
                },
                "region": {
                    "canBeNull": false,
                    "description": "Region holding the service",
                    "fullType": "metrics.api.Region",
                    "readOnly": true,
                    "required": false,
                    "type": "metrics.api.Region"
                },
                "shouldUpgrade": {
                    "canBeNull": false,
                    "description": "Indicator if the service should be upgraded based on current quota and offer",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Status of a service",
                    "fullType": "metrics.api.ServiceStatusEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "metrics.api.ServiceStatusEnum"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Type of the service: cloud or live",
                    "fullType": "metrics.api.OfferTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "metrics.api.OfferTypeEnum"
                }
            }
        },
        "metrics.api.ServiceStatusEnum": {
            "description": "Status of of the service",
            "enum": [
                "new",
                "alive",
                "disabled",
                "dead"
            ],
            "enumType": "string",
            "id": "ServiceStatusEnum",
            "namespace": "metrics.api"
        },
        "metrics.api.Token": {
            "description": "Structure holding the elements about a token",
            "id": "Token",
            "namespace": "metrics.api",
            "properties": {
                "access": {
                    "canBeNull": false,
                    "description": "The actual access token",
                    "fullType": "password",
                    "readOnly": true,
                    "required": false,
                    "type": "password"
                },
                "createdAt": {
                    "canBeNull": false,
                    "description": "Token creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "description": {
                    "canBeNull": false,
                    "description": "Description of the token",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "expiredAt": {
                    "canBeNull": false,
                    "description": "Token expiration date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Id of the token",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "isRevoked": {
                    "canBeNull": false,
                    "description": "Is your token revoked?",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "labels": {
                    "canBeNull": false,
                    "description": "Labels for the token if set",
                    "fullType": "metrics.api.Label[]",
                    "readOnly": true,
                    "required": false,
                    "type": "metrics.api.Label[]"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Token type: read or write",
                    "fullType": "metrics.api.PermissionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "metrics.api.PermissionEnum"
                }
            }
        },
        "service.RenewType": {
            "description": "Map a possible renew for a specific service",
            "id": "RenewType",
            "namespace": "service",
            "properties": {
                "automatic": {
                    "canBeNull": false,
                    "description": "The service is automatically renewed",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "deleteAtExpiration": {
                    "canBeNull": false,
                    "description": "The service will be deleted at expiration",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "forced": {
                    "canBeNull": false,
                    "description": "The service forced to be renewed",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "manualPayment": {
                    "canBeNull": true,
                    "description": "The service needs to be manually renewed and paid",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "period": {
                    "canBeNull": true,
                    "description": "period of renew in month",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "service.RenewalTypeEnum": {
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
            "enumType": "string",
            "id": "RenewalTypeEnum",
            "namespace": "service"
        },
        "service.StateEnum": {
            "enum": [
                "expired",
                "inCreation",
                "ok",
                "pendingDebt",
                "unPaid"
            ],
            "enumType": "string",
            "id": "StateEnum",
            "namespace": "service"
        },
        "service.TerminationFutureUseEnum": {
            "description": "All future uses you can provide for a service termination",
            "enum": [
                "NOT_REPLACING_SERVICE",
                "OTHER",
                "SUBSCRIBE_AN_OTHER_SERVICE",
                "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
                "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
            ],
            "enumType": "string",
            "id": "TerminationFutureUseEnum",
            "namespace": "service"
        },
        "service.TerminationReasonEnum": {
            "description": "All reasons you can provide for a service termination",
            "enum": [
                "FEATURES_DONT_SUIT_ME",
                "LACK_OF_PERFORMANCES",
                "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
                "MIGRATED_TO_COMPETITOR",
                "NOT_ENOUGH_RECOGNITION",
                "NOT_NEEDED_ANYMORE",
                "NOT_RELIABLE",
                "NO_ANSWER",
                "OTHER",
                "PRODUCT_DIMENSION_DONT_SUIT_ME",
                "PRODUCT_TOOLS_DONT_SUIT_ME",
                "TOO_EXPENSIVE",
                "TOO_HARD_TO_USE",
                "UNSATIFIED_BY_CUSTOMER_SUPPORT"
            ],
            "enumType": "string",
            "id": "TerminationReasonEnum",
            "namespace": "service"
        },
        "services.Service": {
            "description": "Details about a Service",
            "id": "Service",
            "namespace": "services",
            "properties": {
                "canDeleteAtExpiration": {
                    "canBeNull": false,
                    "description": "Indicates that the service can be set up to be deleted at expiration",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "contactAdmin": {
                    "canBeNull": false,
                    "fullType": "coreTypes.AccountId:string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "contactBilling": {
                    "canBeNull": false,
                    "fullType": "coreTypes.AccountId:string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "contactTech": {
                    "canBeNull": false,
                    "fullType": "coreTypes.AccountId:string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "creation": {
                    "canBeNull": false,
                    "fullType": "date",
                    "readOnly": true,
                    "required": false,
                    "type": "date"
                },
                "domain": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "engagedUpTo": {
                    "canBeNull": true,
                    "fullType": "date",
                    "readOnly": true,
                    "required": false,
                    "type": "date"
                },
                "expiration": {
                    "canBeNull": false,
                    "fullType": "date",
                    "readOnly": true,
                    "required": false,
                    "type": "date"
                },
                "possibleRenewPeriod": {
                    "canBeNull": true,
                    "description": "All the possible renew period of your service in month",
                    "fullType": "long[]",
                    "readOnly": true,
                    "required": false,
                    "type": "long[]"
                },
                "renew": {
                    "canBeNull": true,
                    "description": "Way of handling the renew",
                    "fullType": "service.RenewType",
                    "readOnly": false,
                    "required": false,
                    "type": "service.RenewType"
                },
                "renewalType": {
                    "canBeNull": false,
                    "fullType": "service.RenewalTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "service.RenewalTypeEnum"
                },
                "serviceId": {
                    "canBeNull": false,
                    "fullType": "coreTypes.ServiceId:long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "status": {
                    "canBeNull": false,
                    "fullType": "service.StateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "service.StateEnum"
                }
            }
        }
    },
    "resourcePath": "/metrics"
};
//# sourceMappingURL=metrics.js.map