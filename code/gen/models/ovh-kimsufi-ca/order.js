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
                    "resellerOnly": false,
                    "responseFullType": "string[]",
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
                    "resellerOnly": false,
                    "responseFullType": "string[]",
                    "responseType": "string[]"
                }
            ],
            "path": "/order/dedicated/server/{serviceName}"
        }
    ],
    "basePath": "https://ca.api.kimsufi.com/1.0",
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
                    "description": null,
                    "type": "text"
                },
                "name": {
                    "canBeNull": false,
                    "description": null,
                    "type": "string"
                },
                "url": {
                    "canBeNull": false,
                    "description": null,
                    "type": "string"
                }
            }
        },
        "order.CurrencyCodeEnum": {
            "description": "",
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
                    "description": null,
                    "type": "order.Contract[]"
                },
                "details": {
                    "canBeNull": false,
                    "description": null,
                    "type": "order.OrderDetail[]"
                },
                "orderId": {
                    "canBeNull": true,
                    "description": null,
                    "type": "long"
                },
                "prices": {
                    "canBeNull": false,
                    "description": null,
                    "type": "order.OrderPrices"
                },
                "url": {
                    "canBeNull": true,
                    "description": null,
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
                    "description": null,
                    "type": "string"
                },
                "detailType": {
                    "canBeNull": true,
                    "description": null,
                    "type": "order.OrderDetailTypeEnum"
                },
                "domain": {
                    "canBeNull": false,
                    "description": null,
                    "type": "string"
                },
                "quantity": {
                    "canBeNull": false,
                    "description": null,
                    "type": "long"
                },
                "totalPrice": {
                    "canBeNull": false,
                    "description": null,
                    "type": "order.Price"
                },
                "unitPrice": {
                    "canBeNull": false,
                    "description": null,
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
                    "description": null,
                    "type": "order.Price"
                },
                "withTax": {
                    "canBeNull": false,
                    "description": null,
                    "type": "order.Price"
                },
                "withoutTax": {
                    "canBeNull": false,
                    "description": null,
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
                    "description": null,
                    "type": "order.CurrencyCodeEnum"
                },
                "text": {
                    "canBeNull": false,
                    "description": null,
                    "type": "string"
                },
                "value": {
                    "canBeNull": false,
                    "description": null,
                    "type": "double"
                }
            }
        }
    },
    "resourcePath": "/order"
};
//# sourceMappingURL=order.js.map