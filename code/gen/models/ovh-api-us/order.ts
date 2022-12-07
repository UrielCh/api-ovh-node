import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/order.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of your OVH order carts",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of description property (=)",
              "fullType": "string",
              "name": "description",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new OVH order cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description of your cart",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Time of expiration of the cart",
              "fullType": "datetime",
              "name": "expire",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "OVH Subsidiary where you want to order",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "order.cart.Cart"
        }
      ],
      "path": "/order/cart"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a cart",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information about a specific cart",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Cart"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Modify information about a specific cart",
          "httpMethod": "PUT",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description of your cart",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Time of expiration of the cart",
              "fullType": "datetime",
              "name": "expire",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Cart"
        }
      ],
      "path": "/order/cart/{cartId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Assign a shopping cart to an loggedin client",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cart/{cartId}/assign"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about a baremetal server",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new baremetal server item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a baremetal server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/baremetalServers"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about baremetal server options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a baremetal server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new baremetal server option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a baremetal server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/baremetalServers/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about bring your own IP addresses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new bring your own IP addresses item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the bring your own IP addresses offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/bringYourOwnIp"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Ceph as a Service offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Ceph as a Service item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Ceph as a Service offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/cephaas"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information for your cart",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Validate your shopping and create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be automatically paid with preferred payment method",
              "fullType": "boolean",
              "name": "autoPayWithPreferredPaymentMethod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Indicates that order will be processed with waiving retractation period",
              "fullType": "boolean",
              "name": "waiveRetractationPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cart/{cartId}/checkout"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Public Cloud offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Public Cloud item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Public Cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/cloud"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Public Cloud options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Public Cloud you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Public Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a Public Cloud option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/cloud/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a coupon from cart",
          "httpMethod": "DELETE",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Coupon identifier",
              "fullType": "string",
              "name": "coupon",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve coupons associated to cart",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new coupon to cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Coupon identifier",
              "fullType": "string",
              "name": "coupon",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cart/{cartId}/coupon"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about a dedicated server",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of family property (=)",
              "fullType": "string",
              "name": "family",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of planCode property (=)",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new dedicated server item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a dedicated server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/dedicated"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about dedicated server options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of family property (=)",
              "fullType": "string",
              "name": "family",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Identifier of a dedicated server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new dedicated server option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a dedicated server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/dedicated/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Dedicated Discover server offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Dedicated Discover server item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Dedicated Discover server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/discover"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Dedicated Discover server options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Dedicated Discover server you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Dedicated Discover server option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a Dedicated Discover server option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/discover/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about a eco",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of family property (=)",
              "fullType": "string",
              "name": "family",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of planCode property (=)",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new eco item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a eco offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/eco"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about eco options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of family property (=)",
              "fullType": "string",
              "name": "family",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Identifier of a eco offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new eco option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a eco offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/eco/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about IP addresses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new IP addresses item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the IP addresses offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/ip"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about IP addresses options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the IP addresses you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new IP addresses option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of an IP addresses option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/ip/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about IP Load-Balancing offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new IP Load-Balancing item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the IP Load-Balancing offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/ipLoadbalancing"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about IP Load-Balancing options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the IP Load-Balancing you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new IP Load-Balancing option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a IP Load-Balancing option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/ipLoadbalancing/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all the items of a cart",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/order/cart/{cartId}/item"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an item from a cart",
          "httpMethod": "DELETE",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Product item identifier",
              "fullType": "long",
              "name": "itemId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information about a specific item of a cart",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Product item identifier",
              "fullType": "long",
              "name": "itemId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update some values on a cart item",
          "httpMethod": "PUT",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "New duration for item",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "New quantity for item",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Product item identifier",
              "fullType": "long",
              "name": "itemId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/item/{itemId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all configuration item of the cart item",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Product item identifier",
              "fullType": "long",
              "name": "itemId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of label property (=)",
              "fullType": "string",
              "name": "label",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Setup configuration item for the product",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Label for your configuration item",
              "fullType": "string",
              "name": "label",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "text",
              "description": "Value or resource URL on API.OVH.COM of your configuration item",
              "fullType": "text",
              "name": "value",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Product item identifier",
              "fullType": "long",
              "name": "itemId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.ConfigurationItem"
        }
      ],
      "path": "/order/cart/{cartId}/item/{itemId}/configuration"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete configuration item",
          "httpMethod": "DELETE",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Configuration item identifier",
              "fullType": "long",
              "name": "configurationId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Product item identifier",
              "fullType": "long",
              "name": "itemId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve configuration item",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Configuration item identifier",
              "fullType": "long",
              "name": "configurationId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Product item identifier",
              "fullType": "long",
              "name": "itemId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.ConfigurationItem"
        }
      ],
      "path": "/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all required configuration item of the cart item",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Product item identifier",
              "fullType": "long",
              "name": "itemId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.ConfigurationRequirements[]"
        }
      ],
      "path": "/order/cart/{cartId}/item/{itemId}/requiredConfiguration"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about CloudLinux licenses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new CloudLinux license item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the CloudLinux license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the rental of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/licenseCloudLinux"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about cPanel licenses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new cPanel license item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the cPanel license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the rental of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/licensecPanel"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about Directadmin licenses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new Directadmin license item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Directadmin license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the rental of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/licenseDirectadmin"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about Plesk licenses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new Plesk license item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Plesk license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the rental of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/licensePlesk"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about Plesk license options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Plesk license you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new Plesk license option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a Plesk license option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/licensePlesk/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about SqlServer licenses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new SqlServer license item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the SqlServer license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the rental of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/licenseSqlServer"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about Virtuozzo licenses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new Virtuozzo license item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Virtuozzo license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the rental of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/licenseVirtuozzo"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about Virtuozzo license options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Virtuozzo license you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new Virtuozzo license option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a Virtuozzo license option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/licenseVirtuozzo/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about Windows licenses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new Windows license item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Windows license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the rental of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/licenseWindows"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about Worklight licenses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new Worklight license item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Worklight license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the rental of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/licenseWorklight"
    },
    {
      "description": "List of OVHcloud Connect product",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about OVHcloud Connect offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new OVHcloud Connect item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the OVHcloud Connect offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/ovhCloudConnect"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Hosted Dedicated Cloud offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Hosted Dedicated Cloud item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Hosted Dedicated Cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/privateCloud"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Hosted Dedicated Cloud options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Hosted Dedicated Cloud you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Hosted Dedicated Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a Hosted Dedicated Cloud option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/privateCloud/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about SSL Comodo offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new SSL Comodo item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the SSL Comodo offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/sslComodo"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about SSL Comodo options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the SSL Comodo you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new SSL Comodo option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a SSL Comodo option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/sslComodo/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a summary of your current order",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cart/{cartId}/summary"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Veeam Cloud Connect offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Veeam Cloud Connect item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Veeam Cloud Connect offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/veeamcc"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Veeam Cloud Connect options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Veeam Cloud Connect you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Veeam Cloud Connect option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a Veeam Cloud Connect option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/veeamcc/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Veeam Enterprise offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Veeam Enterprise item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Veeam Enterprise offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/veeamEnterprise"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Veeam Enterprise options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the Veeam Enterprise you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Veeam Enterprise option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a Veeam Enterprise option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/veeamEnterprise/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about VPS offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new VPS item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the VPS offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/vps"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about VPS options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the VPS you want to consult options",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new VPS option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a VPS option offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/vps/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about vRack offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new vRack item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the vRack offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/vrack"
    },
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/baremetalServers"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/baremetalServers/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional baremetal servers offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of baremetal servers service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional baremetal servers option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional baremetal servers offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of baremetal servers service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/baremetalServers/{serviceName}"
    },
    {
      "description": "Operations about the PUBLICCLOUD service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/cloud"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/cloud/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Cloud offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of Cloud Project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional Cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of Cloud Project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/cloud/{serviceName}"
    },
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/dedicated"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/dedicated/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional dedicated offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of Dedicated service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional dedicated option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional dedicated offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of Dedicated service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/dedicated/{serviceName}"
    },
    {
      "description": "Operations about the IPLB service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/ipLoadbalancing"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional IP Load-Balancing offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of IP Load-Balancing service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional IP Load-Balancing option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional IP Load-Balancing offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of IP Load-Balancing service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/ipLoadbalancing/{serviceName}"
    },
    {
      "description": "Operations about the DBAAS-LOGS service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/logs"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/logs/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Logs offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of Logs service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Logs option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional Logs offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of Logs service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/logs/{serviceName}"
    },
    {
      "description": "Operations about the PCC service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/privateCloud"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/privateCloud/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Dedicated Cloud offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Dedicated Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional Dedicated Cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/privateCloud/{serviceName}"
    },
    {
      "description": "Operations about the PCC service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/privateCloudEnterprise"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/privateCloudEnterprise/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Dedicated Cloud offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Dedicated Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional Dedicated Cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/privateCloudEnterprise/{serviceName}"
    },
    {
      "description": "Operations about the PCC service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/privateCloudReseller"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Dedicated Cloud offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Dedicated Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional Dedicated Cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/privateCloudReseller/{serviceName}"
    },
    {
      "description": "Operations about the PCC service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/privateCloudResellerEnterprise"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Dedicated Cloud Enterprise offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Dedicated Cloud Enterprise option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional Dedicated Cloud enterprise offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}"
    },
    {
      "description": "Operations about the PUBLICCLOUD service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/vps"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/vps/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about additional VPS offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of your VPS service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post an additional VPS option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional VPS offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your VPS service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/vps/{serviceName}"
    },
    {
      "description": "Operations about the WEBPAAS service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/webPaaS"
    },
    {
      "description": "Listing offers /order/cartServiceOption/webPaaS/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Web PaaS offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The Web PaaS subscription Id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Web PaaS option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional Web PaaS offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Pricing mode selected for the purchase of the product",
              "fullType": "string",
              "name": "pricingMode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The Web PaaS subscription Id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/cartServiceOption/webPaaS/{serviceName}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-05-01T00:00:00+01:00",
            "deprecatedDate": "2018-03-26T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Retrieve list of catalog name",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/catalog/formatted"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of bring your own IP addresses catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/bringYourOwnIp"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of Public Cloud catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/cloud"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of dedicated server catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/dedicated"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information of dedicated discover offer server catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/discover"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of IP addresses catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/ip"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of CloudLinux licenses catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/licenseCloudLinux"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of cPanel licenses catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/licensecPanel"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of Directadmin licenses offers catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/licenseDirectadmin"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of Plesk licenses catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/licensePlesk"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of SqlServer licenses catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/licenseSqlServer"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of Virtuozzo licenses catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/licenseVirtuozzo"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of Windows licenses catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/licenseWindows"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of Worklight licenses catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/licenseWorklight"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information of Dedicated Cloud catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.pcc.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/privateCloud"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of VPS catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/vps"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information of catalog",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the private catalog you want to consult.",
              "fullType": "string",
              "name": "catalogName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult private catalog.",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.pcc.Catalog"
        }
      ],
      "path": "/order/catalog/private/privateCloud"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Anthos catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/anthos"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve bare-metal servers catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.DedicatedServerCatalog"
        }
      ],
      "path": "/order/catalog/public/baremetalServers"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve Public Cloud catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/cloud"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve domain catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/domain"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Eco catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/eco"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve emailpro catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/emailpro"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve exchange catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/exchange"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve License cPanel catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/licensecPanel"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve nasha catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/nasha"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Netapp catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/netapp"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Nutanix clusters catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/nutanix"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve office365Prepaid catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/office365Prepaid"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve officePrepaid catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/officePrepaid"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve OVH Cloud Connect catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/ovhCloudConnect"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Dedicated Cloud catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/privateCloud"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Private Cloud Enterprise catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/privateCloudEnterprise"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve Private SQL catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/privateSQL"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Telephony catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/telephony"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve VPS catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/vps"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Web PaaS catalog",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult catalog",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "ovhSubsidiary",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.catalog.public.Catalog"
        }
      ],
      "path": "/order/catalog/public/webPaaS"
    },
    {
      "description": "Operations about the DEDICATED-OPTION service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/baremetalPrivateBandwidth"
    },
    {
      "description": "Listing offers /order/upgrade/baremetalPrivateBandwidth",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve available offers to upgrade your service to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The dedicated service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/baremetalPrivateBandwidth/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a provisional order for the selected upgrade of your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The dedicated service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be automatically paid with preferred payment method",
              "fullType": "boolean",
              "name": "autoPayWithPreferredPaymentMethod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The dedicated service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the DEDICATED-OPTION service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/baremetalPublicBandwidth"
    },
    {
      "description": "Listing offers /order/upgrade/baremetalPublicBandwidth",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve available offers to upgrade your service to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The dedicated service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/baremetalPublicBandwidth/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a provisional order for the selected upgrade of your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The dedicated service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be automatically paid with preferred payment method",
              "fullType": "boolean",
              "name": "autoPayWithPreferredPaymentMethod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The dedicated service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the CEPH service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/cephaas"
    },
    {
      "description": "Listing offers /order/upgrade/cephaas",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve available offers to upgrade your service to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of Ceph service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/cephaas/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/cephaas/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a provisional order for the selected upgrade of your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of Ceph service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be automatically paid with preferred payment method",
              "fullType": "boolean",
              "name": "autoPayWithPreferredPaymentMethod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of Ceph service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/cephaas/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the LICENSE service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/licensecPanel"
    },
    {
      "description": "Listing offers /order/upgrade/licensecPanel",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve available offers to upgrade your service to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of your cPanel license service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/licensecPanel/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/licensecPanel/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a provisional order for the selected upgrade of your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your cPanel license service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be automatically paid with preferred payment method",
              "fullType": "boolean",
              "name": "autoPayWithPreferredPaymentMethod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your cPanel license service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/licensecPanel/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the LICENSE service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/licensePlesk"
    },
    {
      "description": "Listing offers /order/upgrade/licensePlesk",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve available offers to upgrade your service to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of your Plesk license service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/licensePlesk/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/licensePlesk/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a provisional order for the selected upgrade of your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your Plesk license service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be automatically paid with preferred payment method",
              "fullType": "boolean",
              "name": "autoPayWithPreferredPaymentMethod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your Plesk license service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/licensePlesk/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the PCC service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/privateCloud"
    },
    {
      "description": "Listing offers /order/upgrade/privateCloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve available offers to upgrade your service to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/privateCloud/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/privateCloud/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a provisional order for the selected upgrade of your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be automatically paid with preferred payment method",
              "fullType": "boolean",
              "name": "autoPayWithPreferredPaymentMethod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the PCC service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "/all"
          ]
        }
      ],
      "path": "/order/upgrade/privateCloudManagementFee"
    },
    {
      "description": "Listing offers /order/upgrade/privateCloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve available offers to upgrade your service to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/privateCloudManagementFee/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/privateCloud/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a provisional order for the selected upgrade of your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be automatically paid with preferred payment method",
              "fullType": "boolean",
              "name": "autoPayWithPreferredPaymentMethod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The Dedicated Cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/privateCloudManagementFee/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the PUBLICCLOUD service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/vps"
    },
    {
      "description": "Listing offers /order/upgrade/vps",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve available offers to upgrade your service to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of your VPS service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/vps/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/vps/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a provisional order for the selected upgrade of your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your VPS service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be automatically paid with preferred payment method",
              "fullType": "boolean",
              "name": "autoPayWithPreferredPaymentMethod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your VPS service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/vps/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the PUBLICCLOUD service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/vpsAdditionalDisk"
    },
    {
      "description": "Listing offers /order/upgrade/vpsAdditionalDisk",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve available offers to upgrade your service to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The VPS service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/vpsAdditionalDisk/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/vpsAdditionalDisk/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get a provisional order for the selected upgrade of your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The VPS service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be automatically paid with preferred payment method",
              "fullType": "boolean",
              "name": "autoPayWithPreferredPaymentMethod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The VPS service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder",
          "scopes": [
            "all",
            "order/all"
          ]
        }
      ],
      "path": "/order/upgrade/vpsAdditionalDisk/{serviceName}/{planCode}"
    }
  ],
  "basePath": "https://api.us.ovhcloud.com/1.0",
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "T",
          "readOnly": true,
          "required": false,
          "type": "T"
        }
      }
    },
    "complexType.UnitAndValue<T>": {
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "T"
        }
      }
    },
    "nichandle.CountryEnum": {
      "description": "Countries a nichandle can choose",
      "enum": [
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DG",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EA",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "IC",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "UNKNOWN",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW"
      ],
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "nichandle"
    },
    "nichandle.OvhSubsidiaryEnum": {
      "description": "OVH subsidiaries",
      "enum": [
        "ASIA",
        "AU",
        "CA",
        "CZ",
        "DE",
        "ES",
        "EU",
        "FI",
        "FR",
        "GB",
        "IE",
        "IT",
        "LT",
        "MA",
        "NL",
        "PL",
        "PT",
        "QC",
        "SG",
        "SN",
        "TN",
        "US",
        "WE",
        "WS"
      ],
      "enumType": "string",
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle"
    },
    "order.Contract": {
      "description": "A contract",
      "id": "Contract",
      "namespace": "order",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Terms of the contract",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "URL to download the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.CurrencyCodeEnum": {
      "description": "Currency code",
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
          "description": "List of contracts related to the order",
          "fullType": "order.Contract[]",
          "readOnly": true,
          "required": false,
          "type": "order.Contract[]"
        },
        "details": {
          "canBeNull": false,
          "description": "Details of the order",
          "fullType": "order.OrderDetail[]",
          "readOnly": true,
          "required": false,
          "type": "order.OrderDetail[]"
        },
        "orderId": {
          "canBeNull": true,
          "description": "Identifier of the order",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices of the order including with and without taxes",
          "fullType": "order.OrderPrices",
          "readOnly": true,
          "required": false,
          "type": "order.OrderPrices"
        },
        "url": {
          "canBeNull": true,
          "description": "URL to download the order",
          "fullType": "string",
          "readOnly": true,
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
        "cartItemID": {
          "canBeNull": true,
          "description": "Cart Item ID the details is related to",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the detail",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "detailType": {
          "canBeNull": true,
          "description": "Type of detail",
          "fullType": "order.OrderDetailTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.OrderDetailTypeEnum"
        },
        "domain": {
          "canBeNull": false,
          "description": "Service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "originalTotalPrice": {
          "canBeNull": false,
          "description": "Original price of the detail before reduction application",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of the service",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "reductionTotalPrice": {
          "canBeNull": false,
          "description": "Total price of the reduction",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reductions": {
          "canBeNull": false,
          "description": "List of reductions applied to the detail",
          "fullType": "order.Reduction[]",
          "readOnly": true,
          "required": false,
          "type": "order.Reduction[]"
        },
        "totalPrice": {
          "canBeNull": false,
          "description": "Price total of the services",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": "Unitary price of the service",
          "fullType": "order.Price",
          "readOnly": true,
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
        "originalWithoutTax": {
          "canBeNull": true,
          "description": "Price before reduction application",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reduction": {
          "canBeNull": true,
          "description": "Price concerning the reduced amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "tax": {
          "canBeNull": false,
          "description": "Tax amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withTax": {
          "canBeNull": false,
          "description": "Price with tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withoutTax": {
          "canBeNull": false,
          "description": "Price without tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.Price": {
      "description": "Price with its currency and textual representation",
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": "Currency code",
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "description": "Textual representation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "The effective price",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.Reduction": {
      "description": "Order detail reduction",
      "id": "Reduction",
      "namespace": "order",
      "properties": {
        "context": {
          "canBeNull": false,
          "description": "In which context the reduction is applied",
          "fullType": "order.ReductionContextEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionContextEnum"
        },
        "price": {
          "canBeNull": false,
          "description": "Reduction price applied with this promotion",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "type": {
          "canBeNull": false,
          "description": "Reduction effect, price modification",
          "fullType": "order.ReductionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionTypeEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "The reduction value",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.ReductionContextEnum": {
      "description": "Context of the reduction",
      "enum": [
        "promotion",
        "voucher"
      ],
      "enumType": "string",
      "id": "ReductionContextEnum",
      "namespace": "order"
    },
    "order.ReductionTypeEnum": {
      "description": "Type of reduction",
      "enum": [
        "fixed_amount",
        "forced_amount",
        "percentage"
      ],
      "enumType": "string",
      "id": "ReductionTypeEnum",
      "namespace": "order"
    },
    "order.cart.Cart": {
      "description": "A shopping cart",
      "id": "Cart",
      "namespace": "order.cart",
      "properties": {
        "cartId": {
          "canBeNull": false,
          "description": "Cart identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of your cart",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expire": {
          "canBeNull": true,
          "description": "Expiration time",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "items": {
          "canBeNull": false,
          "description": "Items of your cart",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "readOnly": {
          "canBeNull": false,
          "description": "Indicates if the cart has already been validated",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "order.cart.ConfigurationItem": {
      "description": "Representation of a configuration item for personalizing product",
      "id": "ConfigurationItem",
      "namespace": "order.cart",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Configuration ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "label": {
          "canBeNull": false,
          "description": "Identifier of the resource",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Path to the resource in API.OVH.COM",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.cart.ConfigurationRequirements": {
      "description": "Information about a configuration",
      "id": "ConfigurationRequirements",
      "namespace": "order.cart",
      "properties": {
        "fields": {
          "canBeNull": true,
          "description": "Indicates if some particular fields have to be inputed during the creation of `type` resource",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "label": {
          "canBeNull": false,
          "description": "Label for your configuration item",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "required": {
          "canBeNull": false,
          "description": "Indicates if the configuration item is required",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the configuration item",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.cart.DomainSettings": {
      "description": "Representation of domain name order properties",
      "id": "DomainSettings",
      "namespace": "order.cart",
      "properties": {
        "domain": {
          "canBeNull": false,
          "description": "Domain name requested",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.cart.DurationUnitEnum": {
      "description": "Unit that correspond to a duration range",
      "enum": [
        "month",
        "day",
        "none"
      ],
      "enumType": "string",
      "id": "DurationUnitEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericOptionDefinition": {
      "description": "Representation of a generic product option",
      "id": "GenericOptionDefinition",
      "namespace": "order.cart",
      "properties": {
        "exclusive": {
          "canBeNull": false,
          "description": "Define if options of this family are exclusive with each other",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "family": {
          "canBeNull": false,
          "description": "Option family",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Define if an option of this family is mandatory",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Product offer identifier",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices of the product offer",
          "fullType": "order.cart.GenericProductPricing[]",
          "readOnly": false,
          "required": false,
          "type": "order.cart.GenericProductPricing[]"
        },
        "productName": {
          "canBeNull": false,
          "description": "Name of the product",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "productType": {
          "canBeNull": false,
          "description": "Product type",
          "fullType": "order.cart.GenericProductTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "order.cart.GenericProductTypeEnum"
        }
      }
    },
    "order.cart.GenericProductDefinition": {
      "description": "Representation of a generic product",
      "id": "GenericProductDefinition",
      "namespace": "order.cart",
      "properties": {
        "planCode": {
          "canBeNull": false,
          "description": "Product offer identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices of the product offer",
          "fullType": "order.cart.GenericProductPricing[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricing[]"
        },
        "productName": {
          "canBeNull": false,
          "description": "Name of the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "productType": {
          "canBeNull": false,
          "description": "Product type",
          "fullType": "order.cart.GenericProductTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductTypeEnum"
        }
      }
    },
    "order.cart.GenericProductPricing": {
      "description": "Representation of a product pricing",
      "id": "GenericProductPricing",
      "namespace": "order.cart",
      "properties": {
        "capacities": {
          "canBeNull": false,
          "description": "Capacities of the pricing (type of pricing)",
          "fullType": "order.cart.GenericProductPricingCapacitiesEnum[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingCapacitiesEnum[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the pricing",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "duration": {
          "canBeNull": false,
          "description": "Duration for ordering the product",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "interval": {
          "canBeNull": false,
          "description": "Interval of renewal",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumQuantity": {
          "canBeNull": true,
          "description": "Maximum quantity that can be ordered",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumRepeat": {
          "canBeNull": true,
          "description": "Maximum repeat for renewal",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": false,
          "description": "Minimum quantity that can be ordered",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumRepeat": {
          "canBeNull": false,
          "description": "Minimum repeat for renewal",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price of the product in micro-centims",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing model identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Pricing type",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingTypeEnum"
        }
      }
    },
    "order.cart.GenericProductPricingCapacitiesEnum": {
      "description": "Capacity of a pricing (type)",
      "enum": [
        "consumption",
        "detach",
        "downgrade",
        "dynamic",
        "installation",
        "renew",
        "upgrade"
      ],
      "enumType": "string",
      "id": "GenericProductPricingCapacitiesEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductPricingStrategyEnum": {
      "description": "Strategy of a Pricing",
      "enum": [
        "stairstep",
        "volume",
        "tiered"
      ],
      "enumType": "string",
      "id": "GenericProductPricingStrategyEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductPricingTypeEnum": {
      "description": "Type of a pricing",
      "enum": [
        "consumption",
        "purchase",
        "rental"
      ],
      "enumType": "string",
      "id": "GenericProductPricingTypeEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductTypeEnum": {
      "description": "Type of a product",
      "enum": [
        "cloud_service",
        "delivery",
        "deposit",
        "domain",
        "saas_license",
        "shipping",
        "storage"
      ],
      "enumType": "string",
      "id": "GenericProductTypeEnum",
      "namespace": "order.cart"
    },
    "order.cart.Item": {
      "description": "Representation of a cart item",
      "id": "Item",
      "namespace": "order.cart",
      "properties": {
        "cartId": {
          "canBeNull": false,
          "description": "Cart identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "configurations": {
          "canBeNull": true,
          "description": "Configuration set for this product",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "duration": {
          "canBeNull": true,
          "description": "Duration for the service",
          "fullType": "duration:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "itemId": {
          "canBeNull": false,
          "description": "Current product identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "offerId": {
          "canBeNull": false,
          "description": "Offer unique identifier of the product added",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Options item ID attached to this item",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "parentItemId": {
          "canBeNull": true,
          "description": "Id of parent item (if item is an option)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "prices": {
          "canBeNull": false,
          "description": "Price of the item",
          "fullType": "order.cart.Price[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.Price[]"
        },
        "productId": {
          "canBeNull": false,
          "description": "Type of the product added",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "settings": {
          "canBeNull": false,
          "description": "Domain related settings",
          "fullType": "order.cart.DomainSettings",
          "readOnly": true,
          "required": false,
          "type": "order.cart.DomainSettings"
        }
      }
    },
    "order.cart.Price": {
      "description": "Price informations with label",
      "id": "Price",
      "namespace": "order.cart",
      "properties": {
        "label": {
          "canBeNull": false,
          "description": "Label corresponding to a price",
          "fullType": "order.cart.PriceLabelEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.PriceLabelEnum"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.cart.PriceLabelEnum": {
      "description": "Label corresponding to different type of price",
      "enum": [
        "PRICE",
        "DISCOUNT",
        "FEE",
        "TOTAL",
        "RENEW"
      ],
      "enumType": "string",
      "id": "PriceLabelEnum",
      "namespace": "order.cart"
    },
    "order.catalog.AddonItem": {
      "description": "Describes an Addon",
      "id": "AddonItem",
      "namespace": "order.catalog",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "List of the addons of this family",
          "fullType": "order.catalog.AddonOffer[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.AddonOffer[]"
        },
        "exclusive": {
          "canBeNull": false,
          "description": "Whether you can only have one instance of this addon family (xor)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "family": {
          "canBeNull": false,
          "description": "Addon family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Indicated if addon family must be contracted",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "order.catalog.AddonOffer": {
      "description": "Describes of Addon offer",
      "id": "AddonOffer",
      "namespace": "order.catalog",
      "properties": {
        "default": {
          "canBeNull": true,
          "description": "Default",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Name that appears on invoice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maximumQuantity": {
          "canBeNull": true,
          "description": "Maximum quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": true,
          "description": "Minimum quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "plan": {
          "canBeNull": false,
          "description": "Describes of commercial offer of a product",
          "fullType": "order.catalog.ProductPlan",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.ProductPlan"
        }
      }
    },
    "order.catalog.Catalog": {
      "description": "Describes a Catalog",
      "id": "Catalog",
      "namespace": "order.catalog",
      "properties": {
        "catalogId": {
          "canBeNull": false,
          "description": "Identifier of the catalog",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "merchantCode": {
          "canBeNull": false,
          "description": "OVH Subsidiary concerned by this catalog",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "plansFamily": {
          "canBeNull": false,
          "description": "List of plans of the catalog",
          "fullType": "order.catalog.PlansItem[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.PlansItem[]"
        }
      }
    },
    "order.catalog.ConfigurationItem": {
      "description": "Composition of a configuration",
      "id": "ConfigurationItem",
      "namespace": "order.catalog",
      "properties": {
        "defaultValue": {
          "canBeNull": true,
          "description": "Default value of the configuration if not provided",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isCustom": {
          "canBeNull": false,
          "description": "Indicates if the configuration is free for writing (true) or have to follow an enum (false - have to follow values field)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isMandatory": {
          "canBeNull": false,
          "description": "Indicates if configuration is required",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Label of the configuration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "description": "Values allowed if configuration isn't custom",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "order.catalog.PlansItem": {
      "description": "Describe an item that contains multiple plans",
      "id": "PlansItem",
      "namespace": "order.catalog",
      "properties": {
        "family": {
          "canBeNull": false,
          "description": "Family of the product",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "plans": {
          "canBeNull": false,
          "description": "List of the plans for this catalog",
          "fullType": "order.catalog.ProductPlan[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.ProductPlan[]"
        }
      }
    },
    "order.catalog.Pricing": {
      "description": "Describes a pricing",
      "id": "Pricing",
      "namespace": "order.catalog",
      "properties": {
        "capacities": {
          "canBeNull": false,
          "description": "Install, renew ... What the pricing can be used for",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "commitment": {
          "canBeNull": false,
          "description": "Engagement period",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "interval": {
          "canBeNull": false,
          "description": "Number length of the interval",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "intervalUnit": {
          "canBeNull": false,
          "description": "Unit interval for duration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maximumQuantity": {
          "canBeNull": true,
          "description": "Maximum quantity buyable",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maximumRepeat": {
          "canBeNull": true,
          "description": "Maximum repeat duration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": false,
          "description": "Minimum quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minimumRepeat": {
          "canBeNull": false,
          "description": "Minimum repeat duration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "mustBeCompleted": {
          "canBeNull": false,
          "description": "Whether the catalog must reach max repeat before subscription can use another one",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceCapInUcents": {
          "canBeNull": true,
          "description": "Max price customer will pay at the end of the period (cap)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price in microcents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "pricingStrategy": {
          "canBeNull": false,
          "description": "Strategy on which the pricing can change",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.PricingDefault": {
      "description": "Describe default pricings",
      "id": "PricingDefault",
      "namespace": "order.catalog",
      "properties": {
        "default": {
          "canBeNull": false,
          "description": "Information about default pricing",
          "fullType": "order.catalog.Pricing[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.Pricing[]"
        }
      }
    },
    "order.catalog.Product": {
      "description": "Describe a Product in the Catalog",
      "id": "Product",
      "namespace": "order.catalog",
      "properties": {
        "configurations": {
          "canBeNull": false,
          "description": "List of the configurations available for the product",
          "fullType": "order.catalog.ConfigurationItem[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.ConfigurationItem[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Designation of the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "internalType": {
          "canBeNull": false,
          "description": "Type of product (deposit, etc...)",
          "fullType": "order.cart.GenericProductTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductTypeEnum"
        },
        "metadatas": {
          "canBeNull": true,
          "description": "List of the metadatas attached",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Plan code identifier of the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "subType": {
          "canBeNull": true,
          "description": "Sub type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "technicalDetails": {
          "canBeNull": true,
          "description": "Technicals details about product",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "type": {
          "canBeNull": true,
          "description": "Type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.ProductOfferDetails": {
      "description": "Describe the details of a commercial offer",
      "id": "ProductOfferDetails",
      "namespace": "order.catalog",
      "properties": {
        "blobs": {
          "canBeNull": true,
          "description": "Extra informations of product offer",
          "fullType": "order.catalog.cloud.Blob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.Blob"
        },
        "metadatas": {
          "canBeNull": true,
          "description": "List of the metadatas attached",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "pricings": {
          "canBeNull": false,
          "description": "Describe default pricings",
          "fullType": "order.catalog.PricingDefault",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.PricingDefault"
        },
        "product": {
          "canBeNull": false,
          "description": "Information about the product",
          "fullType": "order.catalog.Product",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.Product"
        }
      }
    },
    "order.catalog.ProductPlan": {
      "description": "Describes of commercial offer of a product",
      "id": "ProductPlan",
      "namespace": "order.catalog",
      "properties": {
        "addonsFamily": {
          "canBeNull": false,
          "description": "List of addons",
          "fullType": "order.catalog.AddonItem[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.AddonItem[]"
        },
        "consumptionBillingStrategy": {
          "canBeNull": true,
          "description": "Strategy that follow the pricing when product is in consumption mode",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "details": {
          "canBeNull": false,
          "description": "Describe the details of a commercial offer",
          "fullType": "order.catalog.ProductOfferDetails",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.ProductOfferDetails"
        },
        "familyName": {
          "canBeNull": true,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Name that appears on invoice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan code identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "prices": {
          "canBeNull": true,
          "description": "List of region prices",
          "fullType": "order.catalog.cloud.RegionPrice[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.RegionPrice[]"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Main mode: rental, consumption",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.cloud.Blob": {
      "description": "Describe extra informations of product offer",
      "id": "Blob",
      "namespace": "order.catalog.cloud",
      "properties": {
        "unit": {
          "canBeNull": true,
          "description": "Unit of billed quantity",
          "fullType": "order.catalog.cloud.Blob.Unit",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.Blob.Unit"
        }
      }
    },
    "order.catalog.cloud.Blob.Unit": {
      "description": "Label of the unit",
      "id": "Unit",
      "namespace": "order.catalog.cloud.Blob",
      "properties": {
        "unit": {
          "canBeNull": false,
          "description": "Unit of billed quantity",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.cloud.RegionPrice": {
      "description": "Describes a region price",
      "id": "RegionPrice",
      "namespace": "order.catalog.cloud",
      "properties": {
        "price": {
          "canBeNull": false,
          "description": "Strategy that follow the pricing when product is in consumption mode",
          "fullType": "order.catalog.cloud.RegionPrice.Price",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.cloud.RegionPrice.Price"
        },
        "region": {
          "canBeNull": false,
          "description": "Region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.cloud.RegionPrice.Price": {
      "description": "Describes a price",
      "id": "Price",
      "namespace": "order.catalog.cloud.RegionPrice",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": "Currency code",
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price in microcents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "text": {
          "canBeNull": false,
          "description": "Price text with currency symbol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Price in currency",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.catalog.pcc.Catalog": {
      "description": "Describe a Dedicated Cloud commercial catalog",
      "id": "Catalog",
      "namespace": "order.catalog.pcc",
      "properties": {
        "catalogId": {
          "canBeNull": false,
          "description": "Catalog ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "catalogName": {
          "canBeNull": false,
          "description": "Catalog name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "commercialRanges": {
          "canBeNull": false,
          "description": "Describes Commercial Ranges of a Dedicated Cloud",
          "fullType": "order.catalog.pcc.CommercialRange[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.CommercialRange[]"
        },
        "merchantCode": {
          "canBeNull": false,
          "description": "OVH Subsidiary of the Catalog",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "plans": {
          "canBeNull": false,
          "description": "Commercial offers",
          "fullType": "order.catalog.ProductPlan[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.ProductPlan[]"
        }
      }
    },
    "order.catalog.pcc.CommercialRange": {
      "description": "Describes the Commercial Range of a Dedicated Cloud",
      "id": "CommercialRange",
      "namespace": "order.catalog.pcc",
      "properties": {
        "datacenters": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Datacenters",
          "fullType": "order.catalog.pcc.Datacenter[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.Datacenter[]"
        },
        "defaultZone": {
          "canBeNull": false,
          "description": "Default datacenter of the commercial range",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the commercial range",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.pcc.Datacenter": {
      "description": "Describes a Dedicated Cloud Datacenter",
      "id": "Datacenter",
      "namespace": "order.catalog.pcc",
      "properties": {
        "cityCode": {
          "canBeNull": false,
          "description": "City Code of a Datacenter",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "cityName": {
          "canBeNull": false,
          "description": "City Name of a Datacenter",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": false,
          "description": "Country Code of a Datacenter",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "defaultHypervisor": {
          "canBeNull": false,
          "description": "Name of the default hypervisor of a Datacenter",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "hypervisors": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Hypervisors",
          "fullType": "order.catalog.pcc.Hypervisor[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.Hypervisor[]"
        },
        "mainPlan": {
          "canBeNull": false,
          "description": "Main plan code to use for a Datacenter",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "managementFees": {
          "canBeNull": true,
          "description": "Describes the management cost of a range of Dedicated Cloud",
          "fullType": "order.catalog.pcc.managementFees",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.managementFees"
        },
        "orderable": {
          "canBeNull": false,
          "description": "Describes if a Dedicated Cloud can be ordered on a Datacenter",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "orderableOptions": {
          "canBeNull": false,
          "description": "Describes if options can be ordered on a Datacenter",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "orderableResources": {
          "canBeNull": false,
          "description": "Describes if resources can be ordered on a Datacenter",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "storagesNoPack": {
          "canBeNull": false,
          "description": "List of filers add in case of a No Pack order",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "zoneFullName": {
          "canBeNull": false,
          "description": "Zone Code of a datacenter",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zoneName": {
          "canBeNull": false,
          "description": "Zone Name of a datacenter",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.pcc.Host": {
      "description": "Describes a Dedicated Cloud Host",
      "id": "Host",
      "namespace": "order.catalog.pcc",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the host",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "onInitialOrder": {
          "canBeNull": false,
          "description": "Describes if host is orderable on a initial Order",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "onUpgradeOrder": {
          "canBeNull": false,
          "description": "Describes if host is orderable on a upgrade order",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "specifications": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Host specifications",
          "fullType": "order.catalog.pcc.HostSpecifications",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.HostSpecifications"
        },
        "storagesPack": {
          "canBeNull": false,
          "description": "List of filers add in case of a Pack order",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "order.catalog.pcc.HostCpuSpecifications": {
      "description": "Describes a Dedicated Cloud Host CPU",
      "id": "HostCpuSpecifications",
      "namespace": "order.catalog.pcc",
      "properties": {
        "cores": {
          "canBeNull": false,
          "description": "Number of CPU Cores",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "frequency": {
          "canBeNull": false,
          "description": "CPU Frequency",
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        },
        "generation": {
          "canBeNull": false,
          "description": "CPU Generation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "model": {
          "canBeNull": false,
          "description": "CPU Model",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "socket": {
          "canBeNull": false,
          "description": "Number of CPU",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "threads": {
          "canBeNull": false,
          "description": "Number of CPU Threads",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.pcc.HostMemorySpecifications": {
      "description": "Describes a Dedicated Cloud Host Memory",
      "id": "HostMemorySpecifications",
      "namespace": "order.catalog.pcc",
      "properties": {
        "ram": {
          "canBeNull": false,
          "description": "Memory Size",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "order.catalog.pcc.HostNetworkSpecifications": {
      "description": "Describes a Dedicated Cloud Host Network",
      "id": "HostNetworkSpecifications",
      "namespace": "order.catalog.pcc",
      "properties": {
        "nics": {
          "canBeNull": false,
          "description": "Number of network interfaces",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "speed": {
          "canBeNull": false,
          "description": "Speed of the network interfaces",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "order.catalog.pcc.HostSpecifications": {
      "description": "Describes a Dedicated Cloud Host Hardware",
      "id": "HostSpecifications",
      "namespace": "order.catalog.pcc",
      "properties": {
        "cpu": {
          "canBeNull": false,
          "description": "Describes the CPU specification of a Host",
          "fullType": "order.catalog.pcc.HostCpuSpecifications",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.HostCpuSpecifications"
        },
        "memory": {
          "canBeNull": false,
          "description": "Describes the memory specification of a Host",
          "fullType": "order.catalog.pcc.HostMemorySpecifications",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.HostMemorySpecifications"
        },
        "network": {
          "canBeNull": false,
          "description": "Describes the network specification of a Host",
          "fullType": "order.catalog.pcc.HostNetworkSpecifications[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.HostNetworkSpecifications[]"
        }
      }
    },
    "order.catalog.pcc.Hypervisor": {
      "description": "Describes a Dedicated Cloud Hypervisor",
      "id": "Hypervisor",
      "namespace": "order.catalog.pcc",
      "properties": {
        "hosts": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Hosts",
          "fullType": "order.catalog.pcc.Host[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.Host[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the hypervisor",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Options",
          "fullType": "order.catalog.pcc.Option[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.Option[]"
        },
        "orderable": {
          "canBeNull": false,
          "description": "Describes if an hypervisor is orderable",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "servicePacks": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Service Packs",
          "fullType": "order.catalog.pcc.ServicePack[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.ServicePack[]"
        },
        "shortName": {
          "canBeNull": false,
          "description": "Short Name of the hypervisor",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "storages": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Storages",
          "fullType": "order.catalog.pcc.Storage[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.Storage[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the hypervisor",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.pcc.Option": {
      "description": "Describes a Dedicated Cloud Option",
      "id": "Option",
      "namespace": "order.catalog.pcc",
      "properties": {
        "maxInitialQuantity": {
          "canBeNull": false,
          "description": "Describes the maximum quantity on the initial order",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the option",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "onInitialOrder": {
          "canBeNull": false,
          "description": "Describes if option is orderable on a initial order",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "onUpgradeOrder": {
          "canBeNull": false,
          "description": "Describes if option is orderable on a upgrade order",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Category of the option",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.pcc.ServicePack": {
      "description": "Describes a Dedicated Cloud Service Pack",
      "id": "ServicePack",
      "namespace": "order.catalog.pcc",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the service pack",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Describes Option include in the service pack",
          "fullType": "order.catalog.pcc.ServicePackOption[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.ServicePackOption[]"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "upgradableTo": {
          "canBeNull": false,
          "description": "List of available service pack upgrades",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "order.catalog.pcc.ServicePackOption": {
      "description": "Describes a Dedicated Cloud service pack option",
      "id": "ServicePackOption",
      "namespace": "order.catalog.pcc",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the option",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Category of the option",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.pcc.Storage": {
      "description": "Describes a Dedicated Cloud Storage",
      "id": "Storage",
      "namespace": "order.catalog.pcc",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the filer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "onInitialOrder": {
          "canBeNull": false,
          "description": "Describes if filer is orderable on a initial Order",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "onUpgradeOrder": {
          "canBeNull": false,
          "description": "Describes if filer is orderable on a upgrade order",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "specifications": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Storage specifications",
          "fullType": "order.catalog.pcc.StorageSpecifications",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.StorageSpecifications"
        }
      }
    },
    "order.catalog.pcc.StorageSpecifications": {
      "description": "Describes a Dedicated Cloud Storage",
      "id": "StorageSpecifications",
      "namespace": "order.catalog.pcc",
      "properties": {
        "size": {
          "canBeNull": false,
          "description": "Size of the storage",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the storage",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.pcc.managementFees": {
      "description": "Describes the management cost of a range of Dedicated Cloud",
      "id": "managementFees",
      "namespace": "order.catalog.pcc",
      "properties": {
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "upgradableTo": {
          "canBeNull": false,
          "description": "List of available range upgrades",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "order.catalog.public.AddonFamily": {
      "description": "Describes an Addon family for a Commercial offer",
      "id": "AddonFamily",
      "namespace": "order.catalog.public",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "List of Commercial offers that can be ordered as an Addon of the current Commerical offer for the current Family",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "default": {
          "canBeNull": true,
          "description": "Default Commercial offer that can be ordered as an Addon of the current Commercial offer for the current Family",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "exclusive": {
          "canBeNull": false,
          "description": "Whether this Addon family is exclusive and can be ordered only once for the main Commercial offer",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Whether this Addon family is mandatory",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.BillingStrategyEnum": {
      "description": "Enum values for Billing Strategy",
      "enum": [
        "max",
        "sum",
        "max_retain",
        "diff",
        "ping",
        "custom"
      ],
      "enumType": "string",
      "id": "BillingStrategyEnum",
      "namespace": "order.catalog.public"
    },
    "order.catalog.public.Catalog": {
      "description": "Describes a Catalog inside a Subsidiary",
      "id": "Catalog",
      "namespace": "order.catalog.public",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "List of addons of the catalog",
          "fullType": "order.catalog.public.Plan[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Plan[]"
        },
        "catalogId": {
          "canBeNull": false,
          "description": "Identifier of the catalog",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "locale": {
          "canBeNull": false,
          "description": "Subsidiary specific information",
          "fullType": "order.catalog.public.Locale",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Locale"
        },
        "planFamilies": {
          "canBeNull": false,
          "description": "List of plan families of the catalog",
          "fullType": "order.catalog.public.PlanFamily[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PlanFamily[]"
        },
        "plans": {
          "canBeNull": false,
          "description": "List of main plans of the catalog",
          "fullType": "order.catalog.public.Plan[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Plan[]"
        },
        "products": {
          "canBeNull": false,
          "description": "List of products of the catalog",
          "fullType": "order.catalog.public.Product[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Product[]"
        }
      }
    },
    "order.catalog.public.Configuration": {
      "description": "Describes the Configuration for a Commercial offer",
      "id": "Configuration",
      "namespace": "order.catalog.public",
      "properties": {
        "isCustom": {
          "canBeNull": false,
          "description": "Whether the value of this Configuration is custom",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isMandatory": {
          "canBeNull": false,
          "description": "Whether this Configuration is mandatory",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Identifier of the Configuration",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "description": "Possible values for this Configuration, if not custom",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "order.catalog.public.ConsumptionConfiguration": {
      "description": "Describes consumption configuration for a Plan",
      "id": "ConsumptionConfiguration",
      "namespace": "order.catalog.public",
      "properties": {
        "billingStrategy": {
          "canBeNull": false,
          "description": "Consumption billing strategy",
          "fullType": "order.catalog.public.BillingStrategyEnum",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.BillingStrategyEnum"
        },
        "pingEndPolicy": {
          "canBeNull": true,
          "description": "Consumption ping end policy used at end of usage",
          "fullType": "order.catalog.public.PingEndPolicyEnum",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PingEndPolicyEnum"
        },
        "prorataUnit": {
          "canBeNull": false,
          "description": "Consumption prorata unit",
          "fullType": "order.catalog.public.ProrataUnitEnum",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProrataUnitEnum"
        }
      }
    },
    "order.catalog.public.DedicatedServerCatalog": {
      "description": "Describes a Dedicated server Catalog inside a Subsidiary",
      "id": "Catalog",
      "namespace": "order.catalog.public",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "List of addons of the catalog",
          "fullType": "order.catalog.public.Plan[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Plan[]"
        },
        "catalogId": {
          "canBeNull": false,
          "description": "Identifier of the catalog",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "locale": {
          "canBeNull": false,
          "description": "Subsidiary specific information",
          "fullType": "order.catalog.public.Locale",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Locale"
        },
        "planFamilies": {
          "canBeNull": false,
          "description": "List of plan families of the catalog",
          "fullType": "order.catalog.public.AddonFamily[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.AddonFamily[]"
        },
        "plans": {
          "canBeNull": false,
          "description": "List of main plans of the catalog",
          "fullType": "order.catalog.public.Plan[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Plan[]"
        },
        "products": {
          "canBeNull": false,
          "description": "List of products of the catalog",
          "fullType": "order.catalog.public.DedicatedServerProduct[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProduct[]"
        }
      }
    },
    "order.catalog.public.DedicatedServerProduct": {
      "description": "Describes a Dedicated Server Product",
      "id": "DedicatedServerProduct",
      "namespace": "order.catalog.public",
      "properties": {
        "blobs": {
          "canBeNull": true,
          "description": "Additional information for this Product",
          "fullType": "order.catalog.public.DedicatedServerProductBlob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlob"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the Product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Identifier of the Product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.DedicatedServerProductBlob": {
      "description": "Describes a Blob for a Dedicated Server",
      "id": "DedicatedServerProductBlob",
      "namespace": "order.catalog.public",
      "properties": {
        "technical": {
          "canBeNull": true,
          "description": "Technical information for Dedicated Server Product",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnical",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnical"
        }
      }
    },
    "order.catalog.public.DedicatedServerProductBlobTechnical": {
      "description": "Describes a Technical Blob for a Dedicated Server",
      "id": "DedicatedServerProductBlobTechnical",
      "namespace": "order.catalog.public",
      "properties": {
        "bandwidth": {
          "canBeNull": true,
          "description": "Network informations",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnicalNetwork"
        },
        "cpu": {
          "canBeNull": true,
          "description": "CPU informations",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnicalCPU"
        },
        "gpu": {
          "canBeNull": true,
          "description": "GPU informations",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnicalGPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnicalGPU"
        },
        "memory": {
          "canBeNull": true,
          "description": "Memory informations",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnicalMemory",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnicalMemory"
        },
        "server": {
          "canBeNull": true,
          "description": "Hardware informations",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnicalServer",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnicalServer"
        },
        "storage": {
          "canBeNull": true,
          "description": "Disks informations",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnicalStorage",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnicalStorage"
        },
        "vrack": {
          "canBeNull": true,
          "description": "vRack informations",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnicalNetwork"
        }
      }
    },
    "order.catalog.public.DedicatedServerProductBlobTechnicalCPU": {
      "description": "Describes a CPU for a Dedicated Server",
      "id": "DedicatedServerProductBlobTechnicalCPU",
      "namespace": "order.catalog.public",
      "properties": {
        "boost": {
          "canBeNull": false,
          "description": "CPU Boost",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "brand": {
          "canBeNull": false,
          "description": "CPU Brand",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cores": {
          "canBeNull": false,
          "description": "Number of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "frequency": {
          "canBeNull": false,
          "description": "Frequency of CPU in GHz",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "model": {
          "canBeNull": false,
          "description": "Displayable name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "score": {
          "canBeNull": false,
          "description": "CPU score",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "threads": {
          "canBeNull": false,
          "description": "Number of threads",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.DedicatedServerProductBlobTechnicalDisk": {
      "description": "Describes a Disk for a Dedicated Server",
      "id": "DedicatedServerProductBlobTechnicalDisk",
      "namespace": "order.catalog.public",
      "properties": {
        "capacity": {
          "canBeNull": false,
          "description": "Disk capacity in Gb",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "interface": {
          "canBeNull": false,
          "description": "Disk interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": false,
          "description": "Number of disks",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "specs": {
          "canBeNull": false,
          "description": "Disk specs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "technology": {
          "canBeNull": false,
          "description": "Disk technology",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.DedicatedServerProductBlobTechnicalFrame": {
      "description": "Describes a Frame for a Dedicated Server",
      "id": "DedicatedServerProductBlobTechnicalFrame",
      "namespace": "order.catalog.public",
      "properties": {
        "model": {
          "canBeNull": false,
          "description": "Frame model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Frame size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.DedicatedServerProductBlobTechnicalGPU": {
      "description": "Describes a GPU for a Dedicated Server",
      "id": "DedicatedServerProductBlobTechnicalGPU",
      "namespace": "order.catalog.public",
      "properties": {
        "memory": {
          "canBeNull": false,
          "description": "GPU memory size",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.DedicatedServerProductBlobTechnicalMemory": {
      "description": "Describes a Memory technical Blob for a Dedicated Server",
      "id": "DedicatedServerProductBlobTechnicalMemory",
      "namespace": "order.catalog.public",
      "properties": {
        "ecc": {
          "canBeNull": false,
          "description": "ECC",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": false,
          "description": "RAM Frequency",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ramType": {
          "canBeNull": false,
          "description": "RAM Type (DDRx...)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of the RAM in Gb",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.DedicatedServerProductBlobTechnicalNetwork": {
      "description": "Describes a Network technical Blob for a Dedicated Server",
      "id": "DedicatedServerProductBlobTechnicalNetwork",
      "namespace": "order.catalog.public",
      "properties": {
        "burst": {
          "canBeNull": true,
          "description": "Network burst",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "guaranteed": {
          "canBeNull": false,
          "description": "Guaranteed Network",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "level": {
          "canBeNull": false,
          "description": "Network level",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "limit": {
          "canBeNull": true,
          "description": "Network limit",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.DedicatedServerProductBlobTechnicalServer": {
      "description": "Describes some technicals informations of a Dedicated Server",
      "id": "DedicatedServerProductBlobTechnicalServer",
      "namespace": "order.catalog.public",
      "properties": {
        "cpu": {
          "canBeNull": false,
          "description": "CPU properties",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnicalCPU"
        },
        "frame": {
          "canBeNull": false,
          "description": "Frame properties",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnicalFrame",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnicalFrame"
        },
        "range": {
          "canBeNull": false,
          "description": "Dedicated server series",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.DedicatedServerProductBlobTechnicalStorage": {
      "description": "Describes a Storage technical Blob for a Dedicated Server",
      "id": "DedicatedServerProductBlobTechnicalStorage",
      "namespace": "order.catalog.public",
      "properties": {
        "disks": {
          "canBeNull": false,
          "description": "Disk properties",
          "fullType": "order.catalog.public.DedicatedServerProductBlobTechnicalDisk[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.DedicatedServerProductBlobTechnicalDisk[]"
        },
        "raid": {
          "canBeNull": false,
          "description": "Raid",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.EngagementConfiguration": {
      "description": "Configuration of an engagement triggered by a given pricing",
      "id": "EngagementConfiguration",
      "namespace": "order.catalog.public",
      "properties": {
        "defaultEndAction": {
          "canBeNull": false,
          "description": "Default action executed once the engagement is fully consumed",
          "fullType": "order.catalog.public.EngagementConfiguration.EndStrategyEnum",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.EngagementConfiguration.EndStrategyEnum"
        },
        "duration": {
          "canBeNull": false,
          "description": "Engagement's duration displayed using ISO8601",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "type": {
          "canBeNull": false,
          "description": "Engagement type, either fully pre-paid (upfront) or periodically paid up to engagement duration (periodic)",
          "fullType": "order.catalog.public.EngagementConfiguration.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.EngagementConfiguration.TypeEnum"
        }
      }
    },
    "order.catalog.public.EngagementConfiguration.EndStrategyEnum": {
      "description": "Strategy applicable at the end of the Engagement",
      "enum": [
        "STOP_ENGAGEMENT_FALLBACK_DEFAULT_PRICE",
        "REACTIVATE_ENGAGEMENT",
        "CANCEL_SERVICE",
        "STOP_ENGAGEMENT_KEEP_PRICE"
      ],
      "enumType": "string",
      "id": "EndStrategyEnum",
      "namespace": "order.catalog.public.EngagementConfiguration"
    },
    "order.catalog.public.EngagementConfiguration.TypeEnum": {
      "description": "Engagement's type, either fully pre-paid (upfront) or periodically paid up to engagement duration (periodic)",
      "enum": [
        "periodic",
        "upfront"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "order.catalog.public.EngagementConfiguration"
    },
    "order.catalog.public.Locale": {
      "description": "Describes specifics for a given Subsidiary",
      "id": "Locale",
      "namespace": "order.catalog.public",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": "Currency used by the Subsidiary",
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "subsidiary": {
          "canBeNull": false,
          "description": "Current Subsidiary",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "taxRate": {
          "canBeNull": false,
          "description": "Default VAT rate used by the Subsidiary",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.catalog.public.PingEndPolicyEnum": {
      "description": "Enum values for Ping End Policy",
      "enum": [
        "prorata",
        "full"
      ],
      "enumType": "string",
      "id": "PingEndPolicyEnum",
      "namespace": "order.catalog.public"
    },
    "order.catalog.public.Plan": {
      "description": "Describes a Commercial offer inside a Catalog",
      "id": "Plan",
      "namespace": "order.catalog.public",
      "properties": {
        "addonFamilies": {
          "canBeNull": false,
          "description": "Addon families for this offer",
          "fullType": "order.catalog.public.AddonFamily[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.AddonFamily[]"
        },
        "configurations": {
          "canBeNull": false,
          "description": "List of possible Configurations for this Commercial offer",
          "fullType": "order.catalog.public.Configuration[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Configuration[]"
        },
        "consumptionConfiguration": {
          "canBeNull": true,
          "description": "Configuration when pricing type is consumption",
          "fullType": "order.catalog.public.ConsumptionConfiguration",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ConsumptionConfiguration"
        },
        "family": {
          "canBeNull": true,
          "description": "Name of the family this Commercial offer belongs to",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Commercial offer description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Commercial offer identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Type of Pricing used by this Commercial offer",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingTypeEnum"
        },
        "pricings": {
          "canBeNull": false,
          "description": "List of possible Pricings for this Commercial offer",
          "fullType": "order.catalog.public.Pricing[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Pricing[]"
        },
        "product": {
          "canBeNull": false,
          "description": "Identifier of the Product linked to this Commercial offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.PlanFamily": {
      "description": "Describes a PlanFamily for a Catalog",
      "id": "PlanFamily",
      "namespace": "order.catalog.public",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.Pricing": {
      "description": "Describes a Pricing for a Commercial offer",
      "id": "Pricing",
      "namespace": "order.catalog.public",
      "properties": {
        "capacities": {
          "canBeNull": false,
          "description": "Capacities of the Pricing, describes what the Pricing can be used for",
          "fullType": "order.cart.GenericProductPricingCapacitiesEnum[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingCapacitiesEnum[]"
        },
        "commitment": {
          "canBeNull": false,
          "description": "Engagement period",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Pricing description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "engagementConfiguration": {
          "canBeNull": true,
          "description": "Engagement Configuration",
          "fullType": "order.catalog.public.EngagementConfiguration",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.EngagementConfiguration"
        },
        "interval": {
          "canBeNull": false,
          "description": "Length of the interval",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "intervalUnit": {
          "canBeNull": false,
          "description": "Unit of the interval",
          "fullType": "order.cart.DurationUnitEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.DurationUnitEnum"
        },
        "mode": {
          "canBeNull": false,
          "description": "Pricing mode",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mustBeCompleted": {
          "canBeNull": false,
          "description": "Pricing must be completed",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "phase": {
          "canBeNull": false,
          "description": "Phase for the Pricing",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "price": {
          "canBeNull": false,
          "description": "Price, in micro-cents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Describes how many times the Commercial offer can be added to the Cart",
          "fullType": "order.catalog.public.PricingMinMax",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PricingMinMax"
        },
        "repeat": {
          "canBeNull": false,
          "description": "Describes how many times the interval can be repeated",
          "fullType": "order.catalog.public.PricingMinMax",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PricingMinMax"
        },
        "strategy": {
          "canBeNull": false,
          "description": "Pricing strategy",
          "fullType": "order.cart.GenericProductPricingStrategyEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingStrategyEnum"
        },
        "tax": {
          "canBeNull": false,
          "description": "Tax that can be applied, in micro-cents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Pricing type",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.GenericProductPricingTypeEnum"
        }
      }
    },
    "order.catalog.public.PricingMinMax": {
      "description": "Describes minimal and maximal values for a Pricing",
      "id": "PricingMinMax",
      "namespace": "order.catalog.public",
      "properties": {
        "max": {
          "canBeNull": true,
          "description": "Maximal value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "min": {
          "canBeNull": false,
          "description": "Minimal value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.Product": {
      "description": "Describes a Product attached to a Commercial offer",
      "id": "Product",
      "namespace": "order.catalog.public",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description of the Product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Identifier of the Product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlob": {
      "description": "Describes a Blob",
      "id": "ProductBlob",
      "namespace": "order.catalog.public",
      "properties": {
        "commercial": {
          "canBeNull": true,
          "description": "Commercial information for Dedicated Server Product",
          "fullType": "order.catalog.public.ProductBlobCommercial",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobCommercial"
        },
        "marketing": {
          "canBeNull": true,
          "description": "Marketing information for VPS Product",
          "fullType": "order.catalog.public.ProductBlobMarketing",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobMarketing"
        },
        "meta": {
          "canBeNull": true,
          "description": "Meta blobs for VPS Product",
          "fullType": "order.catalog.public.ProductBlobMeta",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobMeta"
        },
        "tags": {
          "canBeNull": true,
          "description": "Tags",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "technical": {
          "canBeNull": true,
          "description": "Technical information for Dedicated Server Product",
          "fullType": "order.catalog.public.ProductBlobTechnical",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnical"
        },
        "value": {
          "canBeNull": true,
          "description": "Value for meta blobs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobCommercial": {
      "description": "Describes a Commercial blob",
      "id": "ProductBlobCommercial",
      "namespace": "order.catalog.public",
      "properties": {
        "brick": {
          "canBeNull": true,
          "description": "Brick",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "brickSubtype": {
          "canBeNull": true,
          "description": "Brick subtype",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "connection": {
          "canBeNull": true,
          "description": "Connection",
          "fullType": "order.catalog.public.ProductBlobConnection",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobConnection"
        },
        "features": {
          "canBeNull": true,
          "description": "Features",
          "fullType": "order.catalog.public.ProductBlobCommercialFeatures[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobCommercialFeatures[]"
        },
        "line": {
          "canBeNull": true,
          "description": "Line",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": true,
          "description": "Price",
          "fullType": "order.catalog.public.ProductBlobCommercialPrice",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobCommercialPrice"
        },
        "range": {
          "canBeNull": true,
          "description": "Range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobCommercialFeatures": {
      "description": "Describes Features for a commercial blob",
      "id": "ProductBlobCommercialFeatures",
      "namespace": "order.catalog.public",
      "properties": {
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobCommercialPrice": {
      "description": "Describes a Price for a commercial blob",
      "id": "ProductBlobCommercialPrice",
      "namespace": "order.catalog.public",
      "properties": {
        "display": {
          "canBeNull": true,
          "description": "Display",
          "fullType": "order.catalog.public.ProductBlobCommercialPriceDisplay",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobCommercialPriceDisplay"
        },
        "interval": {
          "canBeNull": true,
          "description": "Interval",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "precision": {
          "canBeNull": true,
          "description": "Precision",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unit": {
          "canBeNull": true,
          "description": "Unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobCommercialPriceDisplay": {
      "description": "Describes a Display a price",
      "id": "ProductBlobCommercialPriceDisplay",
      "namespace": "order.catalog.public",
      "properties": {
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobConnection": {
      "description": "Describes a Connection for a blob for a Dedicated Server",
      "id": "ProductBlobConnection",
      "namespace": "order.catalog.public",
      "properties": {
        "clients": {
          "canBeNull": false,
          "description": "Clients",
          "fullType": "order.catalog.public.ProductBlobConnectionClients",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobConnectionClients"
        },
        "total": {
          "canBeNull": false,
          "description": "Total",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobConnectionClients": {
      "description": "Describes Clients for a Connection for a blob for a Dedicated Server",
      "id": "ProductBlobConnectionClients",
      "namespace": "order.catalog.public",
      "properties": {
        "concurrency": {
          "canBeNull": false,
          "description": "Concurrency",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "number": {
          "canBeNull": false,
          "description": "Number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobMarketing": {
      "description": "Describes a Marketing blob",
      "id": "ProductBlobMarketing",
      "namespace": "order.catalog.public",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Marketing content information for VPS Product",
          "fullType": "order.catalog.public.ProductBlobMarketingContent[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobMarketingContent[]"
        }
      }
    },
    "order.catalog.public.ProductBlobMarketingContent": {
      "description": "Describes a Content for a Marketing blob",
      "id": "ProductBlobMarketingContent",
      "namespace": "order.catalog.public",
      "properties": {
        "key": {
          "canBeNull": false,
          "description": "Key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobMeta": {
      "description": "Describes a Meta blob",
      "id": "ProductBlobMeta",
      "namespace": "order.catalog.public",
      "properties": {
        "configurations": {
          "canBeNull": false,
          "description": "Configurations",
          "fullType": "order.catalog.public.ProductBlobMetaConfigurations[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobMetaConfigurations[]"
        }
      }
    },
    "order.catalog.public.ProductBlobMetaConfigurations": {
      "description": "Describes a Configuration for a meta blob",
      "id": "ProductBlobMetaConfigurations",
      "namespace": "order.catalog.public",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "description": "Values",
          "fullType": "order.catalog.public.ProductBlobMetaConfigurationsValues[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobMetaConfigurationsValues[]"
        }
      }
    },
    "order.catalog.public.ProductBlobMetaConfigurationsValues": {
      "description": "Describes a Values configuration for a meta blob",
      "id": "ProductBlobMetaConfigurationsValues",
      "namespace": "order.catalog.public",
      "properties": {
        "blobs": {
          "canBeNull": false,
          "description": "Blobs",
          "fullType": "order.catalog.public.ProductBlob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlob"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnical": {
      "description": "Describes a Technical Blob",
      "id": "ProductBlobTechnical",
      "namespace": "order.catalog.public",
      "properties": {
        "bandwidth": {
          "canBeNull": true,
          "description": "Network informations",
          "fullType": "order.catalog.public.ProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalNetwork"
        },
        "connection": {
          "canBeNull": true,
          "description": "Connection",
          "fullType": "order.catalog.public.ProductBlobConnection",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobConnection"
        },
        "connectionPerSeconds": {
          "canBeNull": true,
          "description": "Connection per seconds",
          "fullType": "order.catalog.public.ProductBlobTechnicalPerSeconds",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalPerSeconds"
        },
        "cpu": {
          "canBeNull": true,
          "description": "CPU informations",
          "fullType": "order.catalog.public.ProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalCPU"
        },
        "datacenter": {
          "canBeNull": true,
          "description": "Datacenter",
          "fullType": "order.catalog.public.ProductBlobTechnicalDatacenter",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalDatacenter"
        },
        "ephemeralLocalStorage": {
          "canBeNull": true,
          "description": "Ephemeral local storage",
          "fullType": "order.catalog.public.ProductBlobTechnicalEphemeralStorage",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalEphemeralStorage"
        },
        "gpu": {
          "canBeNull": true,
          "description": "GPU informations",
          "fullType": "order.catalog.public.ProductBlobTechnicalGPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalGPU"
        },
        "license": {
          "canBeNull": true,
          "description": "License informations",
          "fullType": "order.catalog.public.ProductBlobTechnicalLicense",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalLicense"
        },
        "memory": {
          "canBeNull": true,
          "description": "Memory informations",
          "fullType": "order.catalog.public.ProductBlobTechnicalMemory",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalMemory"
        },
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nodes": {
          "canBeNull": true,
          "description": "Nodes",
          "fullType": "order.catalog.public.ProductBlobTechnicalNodes",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalNodes"
        },
        "nvme": {
          "canBeNull": true,
          "description": "NVME",
          "fullType": "order.catalog.public.ProductBlobTechnicalNvme",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalNvme"
        },
        "os": {
          "canBeNull": true,
          "description": "OS",
          "fullType": "order.catalog.public.ProductBlobTechnicalOS",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalOS"
        },
        "requestPerSeconds": {
          "canBeNull": true,
          "description": "Connection per seconds",
          "fullType": "order.catalog.public.ProductBlobTechnicalPerSeconds",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalPerSeconds"
        },
        "server": {
          "canBeNull": true,
          "description": "Hardware informations",
          "fullType": "order.catalog.public.ProductBlobTechnicalServer",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalServer"
        },
        "storage": {
          "canBeNull": true,
          "description": "Disks informations",
          "fullType": "order.catalog.public.ProductBlobTechnicalStorage",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalStorage"
        },
        "throughput": {
          "canBeNull": true,
          "description": "Throughput",
          "fullType": "order.catalog.public.ProductBlobTechnicalThroughput",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalThroughput"
        },
        "virtualization": {
          "canBeNull": true,
          "description": "Virtualization",
          "fullType": "order.catalog.public.ProductBlobTechnicalVirtualization",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalVirtualization"
        },
        "volume": {
          "canBeNull": true,
          "description": "Volume",
          "fullType": "order.catalog.public.ProductBlobTechnicalVolume",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalVolume"
        },
        "vrack": {
          "canBeNull": true,
          "description": "vRack informations",
          "fullType": "order.catalog.public.ProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalNetwork"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalCPU": {
      "description": "Describes a CPU for a technical blob",
      "id": "ProductBlobTechnicalCPU",
      "namespace": "order.catalog.public",
      "properties": {
        "boost": {
          "canBeNull": true,
          "description": "CPU Boost",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "brand": {
          "canBeNull": true,
          "description": "CPU Brand",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cores": {
          "canBeNull": true,
          "description": "Number of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "customizable": {
          "canBeNull": true,
          "description": "Customizable",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": true,
          "description": "Frequency of CPU in GHz",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "model": {
          "canBeNull": true,
          "description": "Displayable name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": true,
          "description": "Number of CPU",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "score": {
          "canBeNull": true,
          "description": "CPU score",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "threads": {
          "canBeNull": true,
          "description": "Number of threads",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalDatacenter": {
      "description": "Describes a Datacenter for a technical Blob",
      "id": "ProductBlobTechnicalDatacenter",
      "namespace": "order.catalog.public",
      "properties": {
        "city": {
          "canBeNull": true,
          "description": "City",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": true,
          "description": "Country",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": true,
          "description": "Country code",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "name": {
          "canBeNull": true,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": true,
          "description": "Region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalDisk": {
      "description": "Describes a Disk for a technical blob",
      "id": "ProductBlobTechnicalDisk",
      "namespace": "order.catalog.public",
      "properties": {
        "capacity": {
          "canBeNull": false,
          "description": "Disk capacity in Gb",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "interface": {
          "canBeNull": true,
          "description": "Disk interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "iops": {
          "canBeNull": true,
          "description": "Iops",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "number": {
          "canBeNull": true,
          "description": "Number of disks",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sizeUnit": {
          "canBeNull": true,
          "description": "Size unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "specs": {
          "canBeNull": true,
          "description": "Disk specs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "technology": {
          "canBeNull": true,
          "description": "Disk technology",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "usage": {
          "canBeNull": true,
          "description": "Usage informations",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalEphemeralStorage": {
      "description": "Describes an Ephemeral Storage for technical blob",
      "id": "ProductBlobTechnicalEphemeralStorage",
      "namespace": "order.catalog.public",
      "properties": {
        "disks": {
          "canBeNull": true,
          "description": "Disk properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalDisk[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalDisk[]"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalFrame": {
      "description": "Describes a Frame for a technical blob",
      "id": "ProductBlobTechnicalFrame",
      "namespace": "order.catalog.public",
      "properties": {
        "dualPowerSupply": {
          "canBeNull": false,
          "description": "Dual power supply",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "model": {
          "canBeNull": false,
          "description": "Frame model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Frame size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalGPU": {
      "description": "Describes a GPU for a technical blob",
      "id": "ProductBlobTechnicalGPU",
      "namespace": "order.catalog.public",
      "properties": {
        "brand": {
          "canBeNull": true,
          "description": "GPU brand",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "memory": {
          "canBeNull": false,
          "description": "GPU memory size",
          "fullType": "order.catalog.public.ProductBlobTechnicalMemory",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalMemory"
        },
        "model": {
          "canBeNull": true,
          "description": "GPU model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": true,
          "description": "GPU number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "performance": {
          "canBeNull": true,
          "description": "GPU performance",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalLicense": {
      "description": "Describes a License for a technical Blob",
      "id": "ProductBlobTechnicalLicense",
      "namespace": "order.catalog.public",
      "properties": {
        "application": {
          "canBeNull": true,
          "description": "Application",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cores": {
          "canBeNull": true,
          "description": "Cores informations",
          "fullType": "order.catalog.public.ProductBlobTechnicalLicenseCores",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalLicenseCores"
        },
        "cpu": {
          "canBeNull": true,
          "description": "CPU",
          "fullType": "order.catalog.public.ProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalCPU"
        },
        "distribution": {
          "canBeNull": true,
          "description": "Network informations",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "edition": {
          "canBeNull": true,
          "description": "Edition informations",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "family": {
          "canBeNull": true,
          "description": "Family",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "feature": {
          "canBeNull": true,
          "description": "Feature",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "flavor": {
          "canBeNull": true,
          "description": "Flavor informations",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "images": {
          "canBeNull": true,
          "description": "Images informations",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "nbOfAccount": {
          "canBeNull": true,
          "description": "Number of account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "package": {
          "canBeNull": true,
          "description": "Package",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": true,
          "description": "Version informations",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalLicenseCores": {
      "description": "Describes license cores for a technical blob",
      "id": "ProductBlobTechnicalLicenseCores",
      "namespace": "order.catalog.public",
      "properties": {
        "number": {
          "canBeNull": false,
          "description": "Number of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "total": {
          "canBeNull": true,
          "description": "Total of cores",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalMemory": {
      "description": "Describes a Memory technical Blob",
      "id": "ProductBlobTechnicalMemory",
      "namespace": "order.catalog.public",
      "properties": {
        "customizable": {
          "canBeNull": true,
          "description": "Customizable",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "ecc": {
          "canBeNull": true,
          "description": "ECC",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": true,
          "description": "RAM Frequency",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "interface": {
          "canBeNull": true,
          "description": "Interface",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ramType": {
          "canBeNull": true,
          "description": "RAM Type (DDRx...)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of the RAM in Gb",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "sizeUnit": {
          "canBeNull": true,
          "description": "Size unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalNetwork": {
      "description": "Describes a Network technical Blob",
      "id": "ProductBlobTechnicalNetwork",
      "namespace": "order.catalog.public",
      "properties": {
        "burst": {
          "canBeNull": true,
          "description": "Network burst",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "capacity": {
          "canBeNull": true,
          "description": "Network capacity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "guaranteed": {
          "canBeNull": true,
          "description": "Guaranteed Network",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "interfaces": {
          "canBeNull": true,
          "description": "Network interfaces",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "isMax": {
          "canBeNull": true,
          "description": "Is max?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "level": {
          "canBeNull": true,
          "description": "Network level",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "limit": {
          "canBeNull": true,
          "description": "Network limit",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "shared": {
          "canBeNull": true,
          "description": "Shared",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "traffic": {
          "canBeNull": true,
          "description": "Traffic",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unlimited": {
          "canBeNull": true,
          "description": "Unlimited",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalNodes": {
      "description": "Describes a Node for technical blob",
      "id": "ProductBlobTechnicalNodes",
      "namespace": "order.catalog.public",
      "properties": {
        "number": {
          "canBeNull": false,
          "description": "Number of nodes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalNvme": {
      "description": "Describes a NVME for technical blob",
      "id": "ProductBlobTechnicalNvme",
      "namespace": "order.catalog.public",
      "properties": {
        "disks": {
          "canBeNull": true,
          "description": "Disk properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalDisk[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalDisk[]"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalOS": {
      "description": "Describes an OS for a technical blob",
      "id": "ProductBlobTechnicalOS",
      "namespace": "order.catalog.public",
      "properties": {
        "distribution": {
          "canBeNull": true,
          "description": "Distribution",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "edition": {
          "canBeNull": true,
          "description": "Edition",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "family": {
          "canBeNull": true,
          "description": "Family",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": true,
          "description": "Version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalPerSeconds": {
      "description": "Describes a connection or request per seconds for a technical blob",
      "id": "ProductBlobTechnicalPerSeconds",
      "namespace": "order.catalog.public",
      "properties": {
        "total": {
          "canBeNull": false,
          "description": "Total",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "unit": {
          "canBeNull": true,
          "description": "Unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalRaid": {
      "description": "Describes a Raid for a technical blob",
      "id": "ProductBlobTechnicalRaid",
      "namespace": "order.catalog.public",
      "properties": {
        "cardModel": {
          "canBeNull": true,
          "description": "Card size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cardSize": {
          "canBeNull": true,
          "description": "Card size",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalServer": {
      "description": "Describes some technicals informations for a technical blob",
      "id": "ProductBlobTechnicalServer",
      "namespace": "order.catalog.public",
      "properties": {
        "cpu": {
          "canBeNull": false,
          "description": "CPU properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalCPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalCPU"
        },
        "frame": {
          "canBeNull": false,
          "description": "Frame properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalFrame",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalFrame"
        },
        "network": {
          "canBeNull": true,
          "description": "Network",
          "fullType": "order.catalog.public.ProductBlobTechnicalNetwork",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalNetwork"
        },
        "range": {
          "canBeNull": false,
          "description": "Dedicated server series",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "services": {
          "canBeNull": false,
          "description": "Services properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalServices",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalServices"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalServices": {
      "description": "Describes some technicals informations",
      "id": "ProductBlobTechnicalServices",
      "namespace": "order.catalog.public",
      "properties": {
        "antiddos": {
          "canBeNull": false,
          "description": "Anti DDOS",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "includedBackup": {
          "canBeNull": false,
          "description": "Included backup",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sla": {
          "canBeNull": false,
          "description": "SLA",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalStorage": {
      "description": "Describes a Storage technical Blob",
      "id": "ProductBlobTechnicalStorage",
      "namespace": "order.catalog.public",
      "properties": {
        "disks": {
          "canBeNull": true,
          "description": "Disk properties",
          "fullType": "order.catalog.public.ProductBlobTechnicalDisk[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalDisk[]"
        },
        "hotSwap": {
          "canBeNull": true,
          "description": "Hot Swap",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "raid": {
          "canBeNull": true,
          "description": "Raid",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "raidDetails": {
          "canBeNull": true,
          "description": "Raid details",
          "fullType": "order.catalog.public.ProductBlobTechnicalRaid",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalRaid"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalThroughput": {
      "description": "Describes a Throughput for a technical blob",
      "id": "ProductBlobTechnicalThroughput",
      "namespace": "order.catalog.public",
      "properties": {
        "level": {
          "canBeNull": false,
          "description": "Level",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalVirtualization": {
      "description": "Describes a Virtualization for a Technical Blob",
      "id": "ProductBlobTechnicalVirtualization",
      "namespace": "order.catalog.public",
      "properties": {
        "hypervisor": {
          "canBeNull": true,
          "description": "Hypervisor",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalVolume": {
      "description": "Describes a Volume for a technichal blob",
      "id": "ProductBlobTechnicalVolume",
      "namespace": "order.catalog.public",
      "properties": {
        "capacity": {
          "canBeNull": false,
          "description": "Capacity",
          "fullType": "order.catalog.public.ProductBlobTechnicalVolumeCapacity",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalVolumeCapacity"
        },
        "iops": {
          "canBeNull": false,
          "description": "CPU informations",
          "fullType": "order.catalog.public.ProductBlobTechnicalVolumeIops",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalVolumeIops"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalVolumeCapacity": {
      "description": "Describes a Capacity for a Volume for a technichal blob",
      "id": "ProductBlobTechnicalVolumeCapacity",
      "namespace": "order.catalog.public",
      "properties": {
        "max": {
          "canBeNull": false,
          "description": "Max",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProductBlobTechnicalVolumeIops": {
      "description": "Describes a Iops for a Volume for a technichal blob",
      "id": "ProductBlobTechnicalVolumeIops",
      "namespace": "order.catalog.public",
      "properties": {
        "guaranteed": {
          "canBeNull": false,
          "description": "Guaranteed",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "level": {
          "canBeNull": false,
          "description": "Level",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.ProrataUnitEnum": {
      "description": "Enum values for Prorata Unit",
      "enum": [
        "hour",
        "day"
      ],
      "enumType": "string",
      "id": "ProrataUnitEnum",
      "namespace": "order.catalog.public"
    },
    "order.upgrade.Operation": {
      "description": "Describes an operation",
      "id": "Operation",
      "namespace": "order.upgrade",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Identifier of the operation",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "product": {
          "canBeNull": false,
          "description": "Product concerned by the operation",
          "fullType": "order.upgrade.OperationProduct",
          "readOnly": false,
          "required": false,
          "type": "order.upgrade.OperationProduct"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the operation",
          "fullType": "order.upgrade.OperationStatusEnum",
          "readOnly": false,
          "required": false,
          "type": "order.upgrade.OperationStatusEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the operation",
          "fullType": "order.upgrade.OperationTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "order.upgrade.OperationTypeEnum"
        }
      }
    },
    "order.upgrade.OperationAndOrder": {
      "description": "Describes an Operation and the associated Order",
      "id": "order.upgrade.OperationAndOrder",
      "namespace": "order.upgrade",
      "properties": {
        "operation": {
          "canBeNull": true,
          "description": "Upgrade operation",
          "fullType": "order.upgrade.Operation",
          "readOnly": false,
          "required": false,
          "type": "order.upgrade.Operation"
        },
        "order": {
          "canBeNull": true,
          "description": "Order placed",
          "fullType": "order.Order",
          "readOnly": false,
          "required": false,
          "type": "order.Order"
        }
      }
    },
    "order.upgrade.OperationProduct": {
      "description": "Describes a product inside a operation",
      "id": "OperationProduct",
      "namespace": "order.upgrade",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Detailled description of a product",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the product",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.upgrade.OperationStatusEnum": {
      "description": "Unit that represent the status of an operation",
      "enum": [
        "TODO",
        "DOING",
        "DONE",
        "ERROR",
        "DELAYED",
        "CANCELLED",
        "SCHEDULED"
      ],
      "enumType": "string",
      "id": "OperationStatusEnum",
      "namespace": "order.upgrade"
    },
    "order.upgrade.OperationTypeEnum": {
      "description": "Unit that represent the type of an operation",
      "enum": [
        "UPGRADE"
      ],
      "enumType": "string",
      "id": "OperationTypeEnum",
      "namespace": "order.upgrade"
    }
  },
  "resourcePath": "/order"
}