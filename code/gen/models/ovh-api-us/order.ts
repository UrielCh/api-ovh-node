import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/order.json

export const schema: Schema = {
  "apiVersion": "1",
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
          "responseType": "string[]"
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
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
          "description": "Retrieve information about a specific cart",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/order/cart/{cartId}/assign"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about a baremetal server",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart ID",
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
          "description": "Post a new baremetal server item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Identifier of a baremetal server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart ID",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about baremetal server options",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart ID",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new baremetal server option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "dataType": "long",
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart ID",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information for your cart",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
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
              "description": "Cart ID",
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
              "description": "Identifier of the Public Cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of planCode property (=)",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of family property (=)",
              "fullType": "string",
              "name": "family",
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
              "description": "Identifier of a dedicated server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a dedicated server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of family property (=)",
              "fullType": "string",
              "name": "family",
              "paramType": "query",
              "required": false
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
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Identifier of the Dedicated Discover server offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart ID",
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
          "description": "Get information about IP addresses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart ID",
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
              "fullType": "string",
              "name": "duration",
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
              "description": "Identifier of the IP addresses offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Identifier of the IP Load-Balancing offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Item ID",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Item ID",
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
              "dataType": "long",
              "description": "New quantity for item",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "New duration for item",
              "fullType": "string",
              "name": "duration",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Item ID",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Item ID",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Item ID",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Item ID",
              "fullType": "long",
              "name": "itemId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Configuration ID",
              "fullType": "long",
              "name": "configurationId",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Item ID",
              "fullType": "long",
              "name": "itemId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Configuration ID",
              "fullType": "long",
              "name": "configurationId",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Item ID",
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
              "description": "Cart ID",
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
              "description": "Identifier of the CloudLinux license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
          "description": "Get informations about Directadmin licenses offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Identifier of the Directadmin license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Identifier of the Plesk license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Duration selected for the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Identifier of the SqlServer license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Identifier of the Virtuozzo license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "fullType": "string",
              "name": "duration",
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
              "description": "Identifier of the Windows license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Identifier of the Worklight license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Identifier of the cPanel license offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the rental of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
      "description": "List of OVHcloud Connect product",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about OVHcloud Connect offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart ID",
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
          "description": "Post a new OVHcloud Connect item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about SSL Comodo offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Identifier of the SSL Comodo offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
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
          "description": "Get informations about Veeam Enterprise offers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart ID",
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
              "fullType": "string",
              "name": "duration",
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
              "description": "Identifier of the Veeam Enterprise offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Identifier of the VPS offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "dataType": "long",
              "description": "Quantity of product desired",
              "fullType": "long",
              "name": "quantity",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "dataType": "string",
              "description": "Cart ID",
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
              "description": "Cart ID",
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
              "description": "Identifier of the vRack offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Cart ID",
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
          "description": "Post an additional baremetal servers option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
              "description": "Identifier of the additional Cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
              "description": "Identifier of the additional dedicated offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
          "description": "Post an additional IP Load-Balancing option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
              "description": "Identifier of the additional Logs offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
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
          "responseType": "string[]"
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
          "description": "Get informations about additional Private Cloud offer for your service",
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Private Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Identifier of the additional private cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
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
          "responseType": "string[]"
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
          "description": "Get informations about additional Private Cloud offer for your service",
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Private Cloud option in your cart",
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
              "description": "Identifier of the additional private cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
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
          "responseType": "string[]"
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
          "description": "Get informations about additional Private Cloud offer for your service",
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Private Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
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
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional private cloud offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
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
          "responseType": "string[]"
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
          "description": "Get informations about additional Private Cloud Enterprise offer for your service",
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Private Cloud Enterprise option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the additional private cloud enterprise offer",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
          "description": "Post an additional VPS option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "string",
              "name": "duration",
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
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cartServiceOption/vps/{serviceName}"
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
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "order.catalog.public.Catalog"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Enterprise Cloud Databases catalog",
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
      "path": "/order/catalog/public/enterpriseCloudDatabases"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Private Cloud catalog",
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/licensePlesk/{serviceName}/{planCode}"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/licensecPanel/{serviceName}/{planCode}"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
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
          "responseType": "string[]"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
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
              "description": "Plan code",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder"
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
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "T",
          "readOnly": false,
          "required": true,
          "type": "T"
        }
      }
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
          "fullType": "text",
          "readOnly": false,
          "required": true,
          "type": "text"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
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
          "fullType": "order.Contract[]",
          "readOnly": false,
          "required": true,
          "type": "order.Contract[]"
        },
        "details": {
          "canBeNull": false,
          "fullType": "order.OrderDetail[]",
          "readOnly": false,
          "required": true,
          "type": "order.OrderDetail[]"
        },
        "orderId": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "prices": {
          "canBeNull": false,
          "fullType": "order.OrderPrices",
          "readOnly": false,
          "required": true,
          "type": "order.OrderPrices"
        },
        "url": {
          "canBeNull": true,
          "fullType": "string",
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
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "detailType": {
          "canBeNull": true,
          "fullType": "order.OrderDetailTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "order.OrderDetailTypeEnum"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "totalPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": false,
          "required": true,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": false,
          "required": true,
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
          "fullType": "order.Price",
          "readOnly": false,
          "required": true,
          "type": "order.Price"
        },
        "withTax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": false,
          "required": true,
          "type": "order.Price"
        },
        "withoutTax": {
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": false,
          "required": true,
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
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": false,
          "required": true,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        }
      }
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
          "required": true,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of your cart",
          "fullType": "string",
          "readOnly": false,
          "required": true,
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
          "required": true,
          "type": "long[]"
        },
        "readOnly": {
          "canBeNull": false,
          "description": "Indicates if the cart has already been validated",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "long"
        },
        "label": {
          "canBeNull": false,
          "description": "Identifier of the resource",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Path to the resource in API.OVH.COM",
          "fullType": "string",
          "readOnly": false,
          "required": true,
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
          "required": true,
          "type": "string"
        },
        "required": {
          "canBeNull": false,
          "description": "Indicates if the configuration item is required",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the configuration item",
          "fullType": "string",
          "readOnly": true,
          "required": true,
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
          "required": true,
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
          "required": true,
          "type": "boolean"
        },
        "family": {
          "canBeNull": false,
          "description": "Option family",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Define if an option of this family is mandatory",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Product offer identifier",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices of the product offer",
          "fullType": "order.cart.GenericProductPricing[]",
          "readOnly": false,
          "required": true,
          "type": "order.cart.GenericProductPricing[]"
        },
        "productName": {
          "canBeNull": false,
          "description": "Name of the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "productType": {
          "canBeNull": false,
          "description": "Product type",
          "fullType": "order.cart.GenericProductTypeEnum",
          "readOnly": false,
          "required": true,
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
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices of the product offer",
          "fullType": "order.cart.GenericProductPricing[]",
          "readOnly": false,
          "required": true,
          "type": "order.cart.GenericProductPricing[]"
        },
        "productName": {
          "canBeNull": false,
          "description": "Name of the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "productType": {
          "canBeNull": false,
          "description": "Product type",
          "fullType": "order.cart.GenericProductTypeEnum",
          "readOnly": false,
          "required": true,
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
          "readOnly": false,
          "required": true,
          "type": "order.cart.GenericProductPricingCapacitiesEnum[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the pricing",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "duration": {
          "canBeNull": false,
          "description": "Duration for ordering the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "interval": {
          "canBeNull": false,
          "description": "Interval of renewal",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "maximumQuantity": {
          "canBeNull": false,
          "description": "Maximum quantity that can be ordered",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "maximumRepeat": {
          "canBeNull": true,
          "description": "Maximum repeat for renewal",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": false,
          "description": "Minimum quantity that can be ordered",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "minimumRepeat": {
          "canBeNull": false,
          "description": "Minimum repeat for renewal",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": false,
          "required": true,
          "type": "order.Price"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price of the product in micro-centims",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing model identifier",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Pricing type",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "order.cart.GenericProductPricingTypeEnum"
        }
      }
    },
    "order.cart.GenericProductPricingCapacitiesEnum": {
      "description": "Capacity of a pricing (type)",
      "enum": [
        "installation",
        "renew",
        "upgrade",
        "downgrade",
        "detach"
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
        "rental",
        "consumption",
        "purchase"
      ],
      "enumType": "string",
      "id": "GenericProductPricingTypeEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericProductTypeEnum": {
      "description": "Type of a product",
      "enum": [
        "delivery",
        "deposit",
        "shipping",
        "cloud_service",
        "saas_license",
        "storage",
        "domain"
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
          "required": true,
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
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "itemId": {
          "canBeNull": false,
          "description": "Current product identifier",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "offerId": {
          "canBeNull": false,
          "description": "Offer unique identifier of the product added",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Options item ID attached to this item",
          "fullType": "long[]",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "order.cart.Price[]"
        },
        "productId": {
          "canBeNull": false,
          "description": "Type of the product added",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "settings": {
          "canBeNull": false,
          "description": "Domain related settings",
          "fullType": "order.cart.DomainSettings",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "order.cart.PriceLabelEnum"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": true,
          "required": true,
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
          "readOnly": false,
          "required": true,
          "type": "order.catalog.AddonOffer[]"
        },
        "exclusive": {
          "canBeNull": false,
          "description": "Whether you can only have one instance of this addon family (xor)",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "family": {
          "canBeNull": false,
          "description": "Addon family name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Indicated if addon family must be contracted",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    },
    "order.catalog.AddonOffer": {
      "description": "Describes of Addon offer",
      "id": "AddonOffer",
      "namespace": "order.catalog",
      "properties": {
        "invoiceName": {
          "canBeNull": false,
          "description": "Name that appears on invoice",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "plan": {
          "canBeNull": false,
          "description": "Describes of commercial offer of a product",
          "fullType": "order.catalog.ProductPlan",
          "readOnly": false,
          "required": true,
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
          "required": true,
          "type": "long"
        },
        "merchantCode": {
          "canBeNull": false,
          "description": "OVH Subsidiary concerned by this catalog",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "plansFamily": {
          "canBeNull": false,
          "description": "List of plans of the catalog",
          "fullType": "order.catalog.PlansItem[]",
          "readOnly": false,
          "required": true,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "isCustom": {
          "canBeNull": false,
          "description": "Indicates if the configuration is free for writing (true) or have to follow an enum (false - have to follow values field)",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "isMandatory": {
          "canBeNull": false,
          "description": "Indicates if configuration is required",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Label of the configuration",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "description": "Values allowed if configuration isn't custom",
          "fullType": "string[]",
          "readOnly": false,
          "required": true,
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
          "required": true,
          "type": "string"
        },
        "plans": {
          "canBeNull": false,
          "description": "List of the plans for this catalog",
          "fullType": "order.catalog.ProductPlan[]",
          "readOnly": false,
          "required": true,
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
          "readOnly": false,
          "required": true,
          "type": "string[]"
        },
        "commitment": {
          "canBeNull": false,
          "description": "Engagement period",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "interval": {
          "canBeNull": false,
          "description": "Number length of the interval",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "intervalUnit": {
          "canBeNull": false,
          "description": "Unit interval for duration",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "maximumQuantity": {
          "canBeNull": true,
          "description": "Maximum quantity buyable",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maximumRepeat": {
          "canBeNull": true,
          "description": "Maximum repeat duration",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minimumQuantity": {
          "canBeNull": false,
          "description": "Minimum quantity",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "minimumRepeat": {
          "canBeNull": false,
          "description": "Minimum repeat duration",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "mustBeCompleted": {
          "canBeNull": false,
          "description": "Whether the catalog must reach max repeat before subscription can use another one",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": false,
          "required": true,
          "type": "order.Price"
        },
        "priceCapInUcents": {
          "canBeNull": true,
          "description": "Max price customer will pay at the end of the period (cap)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "priceInUcents": {
          "canBeNull": false,
          "description": "Price in microcents",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "pricingStrategy": {
          "canBeNull": false,
          "description": "Strategy on which the pricing can change",
          "fullType": "string",
          "readOnly": false,
          "required": true,
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
          "readOnly": false,
          "required": true,
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
          "readOnly": false,
          "required": true,
          "type": "order.catalog.ConfigurationItem[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Designation of the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Plan code identifier of the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "technicalDetails": {
          "canBeNull": true,
          "description": "Technicals details about product",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": false,
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        }
      }
    },
    "order.catalog.ProductOfferDetails": {
      "description": "Describe the details of a commercial offer",
      "id": "ProductOfferDetails",
      "namespace": "order.catalog",
      "properties": {
        "metadatas": {
          "canBeNull": false,
          "description": "List of the metadatas attached",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "readOnly": false,
          "required": true,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "pricings": {
          "canBeNull": false,
          "description": "Describe default pricings",
          "fullType": "order.catalog.PricingDefault",
          "readOnly": false,
          "required": true,
          "type": "order.catalog.PricingDefault"
        },
        "product": {
          "canBeNull": false,
          "description": "Information about the product",
          "fullType": "order.catalog.Product",
          "readOnly": false,
          "required": true,
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
          "readOnly": false,
          "required": true,
          "type": "order.catalog.AddonItem[]"
        },
        "consumptionBillingStrategy": {
          "canBeNull": true,
          "description": "Strategy that follow the pricing when product is in consumption mode",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "details": {
          "canBeNull": false,
          "description": "Describe the details of a commercial offer",
          "fullType": "order.catalog.ProductOfferDetails",
          "readOnly": false,
          "required": true,
          "type": "order.catalog.ProductOfferDetails"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Name that appears on invoice",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan code identifier",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Main mode: rental, consumption",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
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
          "required": true,
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
          "required": true,
          "type": "boolean"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Whether this Addon family is mandatory",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
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
          "required": true,
          "type": "order.catalog.public.Plan[]"
        },
        "catalogId": {
          "canBeNull": false,
          "description": "Identifier of the catalog",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "locale": {
          "canBeNull": false,
          "description": "Subsidiary specific information",
          "fullType": "order.catalog.public.Locale",
          "readOnly": true,
          "required": true,
          "type": "order.catalog.public.Locale"
        },
        "planFamilies": {
          "canBeNull": false,
          "description": "List of plan families of the catalog",
          "fullType": "order.catalog.public.PlanFamily[]",
          "readOnly": true,
          "required": true,
          "type": "order.catalog.public.PlanFamily[]"
        },
        "plans": {
          "canBeNull": false,
          "description": "List of main plans of the catalog",
          "fullType": "order.catalog.public.Plan[]",
          "readOnly": true,
          "required": true,
          "type": "order.catalog.public.Plan[]"
        },
        "products": {
          "canBeNull": false,
          "description": "List of products of the catalog",
          "fullType": "order.catalog.public.Product[]",
          "readOnly": true,
          "required": true,
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
          "required": true,
          "type": "boolean"
        },
        "isMandatory": {
          "canBeNull": false,
          "description": "Whether this Configuration is mandatory",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Identifier of the Configuration",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "description": "Possible values for this Configuration, if not custom",
          "fullType": "string[]",
          "readOnly": true,
          "required": true,
          "type": "string[]"
        }
      }
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
          "required": true,
          "type": "order.CurrencyCodeEnum"
        },
        "subsidiary": {
          "canBeNull": false,
          "description": "Current Subsidiary",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": true,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "taxRate": {
          "canBeNull": false,
          "description": "Default VAT rate used by the Subsidiary",
          "fullType": "double",
          "readOnly": true,
          "required": true,
          "type": "double"
        }
      }
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
          "required": true,
          "type": "order.catalog.public.AddonFamily[]"
        },
        "configurations": {
          "canBeNull": false,
          "description": "List of possible Configurations for this Commercial offer",
          "fullType": "order.catalog.public.Configuration[]",
          "readOnly": true,
          "required": true,
          "type": "order.catalog.public.Configuration[]"
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
          "required": true,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Commercial offer identifier",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Type of Pricing used by this Commercial offer",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "readOnly": true,
          "required": true,
          "type": "order.cart.GenericProductPricingTypeEnum"
        },
        "pricings": {
          "canBeNull": false,
          "description": "List of possible Pricings for this Commercial offer",
          "fullType": "order.catalog.public.Pricing[]",
          "readOnly": true,
          "required": true,
          "type": "order.catalog.public.Pricing[]"
        },
        "product": {
          "canBeNull": false,
          "description": "Identifier of the Product linked to this Commercial offer",
          "fullType": "string",
          "readOnly": true,
          "required": true,
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
          "required": true,
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
          "required": true,
          "type": "order.cart.GenericProductPricingCapacitiesEnum[]"
        },
        "commitment": {
          "canBeNull": false,
          "description": "Engagement period",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Pricing description",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "interval": {
          "canBeNull": false,
          "description": "Length of the interval",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "intervalUnit": {
          "canBeNull": false,
          "description": "Unit of the interval",
          "fullType": "order.cart.DurationUnitEnum",
          "readOnly": true,
          "required": true,
          "type": "order.cart.DurationUnitEnum"
        },
        "mode": {
          "canBeNull": false,
          "description": "Pricing mode",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "mustBeCompleted": {
          "canBeNull": false,
          "description": "Pricing must be completed",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "phase": {
          "canBeNull": false,
          "description": "Phase for the Pricing",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "price": {
          "canBeNull": false,
          "description": "Price, in micro-cents",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Describes how many times the Commercial offer can be added to the Cart",
          "fullType": "order.catalog.public.PricingMinMax",
          "readOnly": true,
          "required": true,
          "type": "order.catalog.public.PricingMinMax"
        },
        "repeat": {
          "canBeNull": false,
          "description": "Describes how many times the interval can be repeated",
          "fullType": "order.catalog.public.PricingMinMax",
          "readOnly": true,
          "required": true,
          "type": "order.catalog.public.PricingMinMax"
        },
        "strategy": {
          "canBeNull": false,
          "description": "Pricing strategy",
          "fullType": "order.cart.GenericProductPricingStrategyEnum",
          "readOnly": true,
          "required": true,
          "type": "order.cart.GenericProductPricingStrategyEnum"
        },
        "tax": {
          "canBeNull": false,
          "description": "Tax that can be applied, in micro-cents",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Pricing type",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "readOnly": true,
          "required": true,
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
          "required": true,
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
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Identifier of the Product",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
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
          "required": true,
          "type": "long"
        },
        "product": {
          "canBeNull": false,
          "description": "Product concerned by the operation",
          "fullType": "order.upgrade.OperationProduct",
          "readOnly": false,
          "required": true,
          "type": "order.upgrade.OperationProduct"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the operation",
          "fullType": "order.upgrade.OperationStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "order.upgrade.OperationStatusEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the operation",
          "fullType": "order.upgrade.OperationTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "order.upgrade.OperationTypeEnum"
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
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
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
    },
    "order.upgrade.order.upgrade.OperationAndOrder": {
      "description": "Describes an Operation and the associated Order",
      "id": "OperationAndOrder",
      "namespace": "order.upgrade.order.upgrade",
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
    }
  },
  "resourcePath": "/order"
}