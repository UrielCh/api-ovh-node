"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
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
                            "description": "The internal name of your dedicated server",
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
    "models": {
        "dedicated.server.SupportLevelOrderableEnum": {
            "description": "distincts support level",
            "enum": [
                "critical",
                "fastpath",
                "gs"
            ],
            "enumType": "string",
            "id": "SupportLevelOrderableEnum",
            "namespace": "dedicated.server"
        },
        "order.Contract": {
            "description": "A contract",
            "id": "Contract",
            "namespace": "order",
            "properties": {
                "content": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "text"
                },
                "name": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "url": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "order.CurrencyCodeEnum": {
            "enum": [
                "AUD",
                "CAD",
                "CZK",
                "EUR",
                "GBP",
                "LTL",
                "MAD",
                "N/A",
                "PLN",
                "SGD",
                "TND",
                "USD",
                "XOF",
                "points"
            ],
            "enumType": "string",
            "id": "CurrencyCodeEnum",
            "namespace": "order"
        },
        "order.Order": {
            "description": "An order",
            "id": "Order",
            "namespace": "order",
            "properties": {
                "contracts": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "order.Contract[]"
                },
                "details": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "order.OrderDetail[]"
                },
                "orderId": {
                    "canBeNull": true,
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "prices": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "order.OrderPrices"
                },
                "url": {
                    "canBeNull": true,
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "order.OrderDetail": {
            "description": "Detail of an order",
            "id": "OrderDetail",
            "namespace": "order",
            "properties": {
                "description": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "detailType": {
                    "canBeNull": true,
                    "readOnly": false,
                    "required": false,
                    "type": "order.OrderDetailTypeEnum"
                },
                "domain": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "quantity": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "unitPrice": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                }
            }
        },
        "order.OrderDetailTypeEnum": {
            "description": "Product type of item in order",
            "enum": [
                "ACCESSORY",
                "CAUTION",
                "CHOOSED",
                "CONSUMPTION",
                "CREATION",
                "DELIVERY",
                "DURATION",
                "GIFT",
                "INSTALLATION",
                "LICENSE",
                "MUTE",
                "OTHER",
                "OUTPLAN",
                "QUANTITY",
                "REFUND",
                "RENEW",
                "SPECIAL",
                "SWITCH",
                "TRANSFER",
                "VOUCHER"
            ],
            "enumType": "string",
            "id": "OrderDetailTypeEnum",
            "namespace": "order"
        },
        "order.OrderPrices": {
            "description": "Prices of an order",
            "id": "OrderPrices",
            "namespace": "order",
            "properties": {
                "tax": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "withTax": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                },
                "withoutTax": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                }
            }
        },
        "order.Price": {
            "description": "Price with it's currency and textual representation",
            "id": "Price",
            "namespace": "order",
            "properties": {
                "currencyCode": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "order.CurrencyCodeEnum"
                },
                "text": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "value": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "double"
                }
            }
        }
    },
    "resourcePath": "/order"
};
//# sourceMappingURL=order.js.map