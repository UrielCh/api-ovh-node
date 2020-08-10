import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/order/cart",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of description property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of your OVH order carts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of your cart"
            },
            {
              "name": "expire",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Time of expiration of the cart"
            },
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "body",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "OVH Subsidiary where you want to order"
            }
          ],
          "responseType": "order.cart.Cart",
          "noAuthentication": true,
          "description": "Create a new OVH order cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a cart"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Cart",
          "noAuthentication": true,
          "description": "Retrieve information about a specific cart"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "expire",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Time of expiration of the cart"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of your cart"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Cart",
          "noAuthentication": true,
          "description": "Modify information about a specific cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/assign",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Assign a shopping cart to an loggedin client"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/baremetalServers",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about a baremetal server"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a baremetal server offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new baremetal server item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/baremetalServers/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a baremetal server offer"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about baremetal server options"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a baremetal server offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new baremetal server option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/checkout",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information for your cart"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "autoPayWithPreferredPaymentMethod",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be automatically paid with preferred payment method"
            },
            {
              "name": "waiveRetractationPeriod",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be processed with waiving retractation period"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Validate your shopping and create order"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/cloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Public Cloud offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Public Cloud offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Public Cloud item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/cloud/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Public Cloud you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Public Cloud options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a Public Cloud option offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Public Cloud option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/coupon",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "coupon",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Coupon identifier"
            }
          ],
          "responseType": "void",
          "noAuthentication": true,
          "description": "Delete a coupon from cart"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "Retrieve coupons associated to cart"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "coupon",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Coupon identifier"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "Add a new coupon to cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/dedicated",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of planCode property (=)"
            },
            {
              "name": "family",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of family property (=)"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about a dedicated server"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a dedicated server offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new dedicated server item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/dedicated/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a dedicated server offer"
            },
            {
              "name": "family",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of family property (=)"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about dedicated server options"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a dedicated server offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new dedicated server option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/discover",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Dedicated Discover server offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Dedicated Discover server offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Dedicated Discover server item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/discover/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Dedicated Discover server you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Dedicated Discover server options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a Dedicated Discover server option offer"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Dedicated Discover server option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/ip",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get information about IP addresses offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the IP addresses offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new IP addresses item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/ip/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the IP addresses you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get information about IP addresses options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of an IP addresses option offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new IP addresses option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/ipLoadbalancing",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about IP Load-Balancing offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the IP Load-Balancing offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new IP Load-Balancing item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/ipLoadbalancing/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the IP Load-Balancing you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about IP Load-Balancing options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a IP Load-Balancing option offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new IP Load-Balancing option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/item",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": true,
          "description": "List all the items of a cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/item/{itemId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Item ID"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": true,
          "description": "Delete an item from a cart"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Item ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Retrieve information about a specific item of a cart"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "New quantity for item"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "New duration for item"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Item ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Update some values on a cart item"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/item/{itemId}/configuration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Item ID"
            },
            {
              "name": "label",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of label property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": true,
          "description": "Retrieve all configuration item of the cart item"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "value",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "Value or resource URL on API.OVH.COM of your configuration item"
            },
            {
              "name": "label",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Label for your configuration item"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Item ID"
            }
          ],
          "responseType": "order.cart.ConfigurationItem",
          "noAuthentication": true,
          "description": "Setup configuration item for the product"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/item/{itemId}/configuration/{configurationId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Item ID"
            },
            {
              "name": "configurationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Configuration ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": true,
          "description": "Delete configuration item"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Item ID"
            },
            {
              "name": "configurationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Configuration ID"
            }
          ],
          "responseType": "order.cart.ConfigurationItem",
          "noAuthentication": true,
          "description": "Retrieve configuration item"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/item/{itemId}/requiredConfiguration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Item ID"
            }
          ],
          "responseType": "order.cart.ConfigurationRequirements[]",
          "noAuthentication": true,
          "description": "Retrieve all required configuration item of the cart item"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/licenseCloudLinux",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about CloudLinux licenses offers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the rental of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the CloudLinux license offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the rental of the product"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new CloudLinux license item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/licenseDirectadmin",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Directadmin licenses offers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Directadmin license offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the rental of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the rental of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Directadmin license item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/licensePlesk",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Plesk licenses offers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Plesk license offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the rental of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the rental of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Plesk license item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/licensePlesk/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Plesk license you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Plesk license options"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a Plesk license option offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Plesk license option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/licenseSqlServer",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about SqlServer licenses offers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the SqlServer license offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the rental of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the rental of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new SqlServer license item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/licenseVirtuozzo",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Virtuozzo licenses offers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Virtuozzo license offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the rental of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the rental of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Virtuozzo license item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/licenseVirtuozzo/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Virtuozzo license you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Virtuozzo license options"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a Virtuozzo license option offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Virtuozzo license option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/licenseWindows",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Windows licenses offers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Windows license offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the rental of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the rental of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Windows license item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/licenseWorklight",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Worklight licenses offers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Worklight license offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the rental of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the rental of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Worklight license item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/licensecPanel",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about cPanel licenses offers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the cPanel license offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the rental of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the rental of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new cPanel license item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/ovhCloudConnect",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about OVHcloud Connect offers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the OVHcloud Connect offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new OVHcloud Connect item in your cart"
        }
      ],
      "description": "List of OVHcloud Connect product"
    },
    {
      "path": "/order/cart/{cartId}/sslComodo",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about SSL Comodo offers"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the SSL Comodo offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new SSL Comodo item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/sslComodo/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the SSL Comodo you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about SSL Comodo options"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a SSL Comodo option offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new SSL Comodo option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/summary",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": true,
          "description": "Get a summary of your current order"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/veeamEnterprise",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Veeam Enterprise offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Veeam Enterprise offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Veeam Enterprise item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/veeamEnterprise/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the Veeam Enterprise you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Veeam Enterprise options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a Veeam Enterprise option offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new Veeam Enterprise option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/vps",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about VPS offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the VPS offer"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new VPS item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/vps/options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the VPS you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about VPS options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Cart item to be linked"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of a VPS option offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new VPS option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/vrack",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about vRack offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the vRack offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Cart ID"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": true,
          "description": "Post a new vRack item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cartServiceOption/baremetalServers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the DEDICATED service"
    },
    {
      "path": "/order/cartServiceOption/baremetalServers/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": false,
          "description": "Get informations about additional baremetal servers offer for your service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cart identifier"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the additional baremetal servers offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": false,
          "description": "Post an additional baremetal servers option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/baremetalServers/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/cloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PUBLICCLOUD service"
    },
    {
      "path": "/order/cartServiceOption/cloud/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": false,
          "description": "Get informations about additional Cloud offer for your service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cart identifier"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the additional Cloud offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": false,
          "description": "Post an additional Cloud option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/cloud/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/dedicated",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the DEDICATED service"
    },
    {
      "path": "/order/cartServiceOption/dedicated/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": false,
          "description": "Get informations about additional dedicated offer for your service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cart identifier"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the additional dedicated offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": false,
          "description": "Post an additional dedicated option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/dedicated/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/ipLoadbalancing",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the IPLB service"
    },
    {
      "path": "/order/cartServiceOption/ipLoadbalancing/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": false,
          "description": "Get informations about additional IP Load-Balancing offer for your service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cart identifier"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the additional IP Load-Balancing offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": false,
          "description": "Post an additional IP Load-Balancing option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/logs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the DBAAS-LOGS service"
    },
    {
      "path": "/order/cartServiceOption/logs/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": false,
          "description": "Get informations about additional Logs offer for your service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the additional Logs offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cart identifier"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": false,
          "description": "Post an additional Logs option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/logs/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/privateCloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PCC service"
    },
    {
      "path": "/order/cartServiceOption/privateCloud/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": false,
          "description": "Get informations about additional Private Cloud offer for your service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cart identifier"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the additional private cloud offer"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": false,
          "description": "Post an additional Private Cloud option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/privateCloud/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/privateCloudEnterprise",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PCC service"
    },
    {
      "path": "/order/cartServiceOption/privateCloudEnterprise/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": false,
          "description": "Get informations about additional Private Cloud offer for your service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the additional private cloud offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cart identifier"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": false,
          "description": "Post an additional Private Cloud option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/privateCloudEnterprise/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/privateCloudReseller",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PCC service"
    },
    {
      "path": "/order/cartServiceOption/privateCloudReseller/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": false,
          "description": "Get informations about additional Private Cloud offer for your service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cart identifier"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the additional private cloud offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": false,
          "description": "Post an additional Private Cloud option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/privateCloudResellerEnterprise",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PCC service"
    },
    {
      "path": "/order/cartServiceOption/privateCloudResellerEnterprise/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": false,
          "description": "Get informations about additional Private Cloud Enterprise offer for your service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cart identifier"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the additional private cloud enterprise offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": false,
          "description": "Post an additional Private Cloud Enterprise option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/vps",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PUBLICCLOUD service"
    },
    {
      "path": "/order/cartServiceOption/vps/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": false,
          "description": "Get informations about additional VPS offer for your service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Duration selected for the purchase of the product"
            },
            {
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of product desired"
            },
            {
              "name": "cartId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cart identifier"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Identifier of the additional VPS offer"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.Item",
          "noAuthentication": false,
          "description": "Post an additional VPS option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/vps/#serviceName#"
    },
    {
      "path": "/order/catalog/formatted",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-05-01T00:00:00+01:00",
            "deprecatedDate": "2018-03-26T00:00:00+01:00"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "Retrieve list of catalog name"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/cloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Public Cloud catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/dedicated",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of dedicated server catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/discover",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of dedicated discover offer server catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/ip",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of IP addresses catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/licenseCloudLinux",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of CloudLinux licenses catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/licenseDirectadmin",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Directadmin licenses offers catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/licensePlesk",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Plesk licenses catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/licenseSqlServer",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of SqlServer licenses catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/licenseVirtuozzo",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Virtuozzo licenses catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/licenseWindows",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Windows licenses catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/licenseWorklight",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Worklight licenses catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/licensecPanel",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of cPanel licenses catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/vps",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of VPS catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/public/baremetalServers",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.public.Catalog",
          "noAuthentication": true,
          "description": "Retrieve bare-metal servers catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/public/cloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.public.Catalog",
          "noAuthentication": true,
          "description": "Retrieve Public Cloud catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/public/enterpriseCloudDatabases",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.public.Catalog",
          "noAuthentication": true,
          "description": "Retrieve Enterprise Cloud Databases catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/public/privateCloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.public.Catalog",
          "noAuthentication": true,
          "description": "Retrieve Private Cloud catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/public/privateSQL",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.public.Catalog",
          "noAuthentication": true,
          "description": "Retrieve Private SQL catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/public/telephony",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.public.Catalog",
          "noAuthentication": true,
          "description": "Retrieve Telephony catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/public/vps",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ovhSubsidiary",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": true,
              "description": "Subsidiary of the country you want to consult catalog"
            }
          ],
          "responseType": "order.catalog.public.Catalog",
          "noAuthentication": true,
          "description": "Retrieve VPS catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/upgrade/baremetalPrivateBandwidth",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the DEDICATED-OPTION service"
    },
    {
      "path": "/order/upgrade/baremetalPrivateBandwidth/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": false,
          "description": "Retrieve available offers to upgrade your service to"
        }
      ],
      "description": "Listing offers /order/upgrade/baremetalPrivateBandwidth"
    },
    {
      "path": "/order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Get a provisional order for the selected upgrade of your service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "autoPayWithPreferredPaymentMethod",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be automatically paid with preferred payment method"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Perform the requested upgrade of your service"
        }
      ],
      "description": "Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName#"
    },
    {
      "path": "/order/upgrade/baremetalPublicBandwidth",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the DEDICATED-OPTION service"
    },
    {
      "path": "/order/upgrade/baremetalPublicBandwidth/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": false,
          "description": "Retrieve available offers to upgrade your service to"
        }
      ],
      "description": "Listing offers /order/upgrade/baremetalPublicBandwidth"
    },
    {
      "path": "/order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Get a provisional order for the selected upgrade of your service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "autoPayWithPreferredPaymentMethod",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be automatically paid with preferred payment method"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Perform the requested upgrade of your service"
        }
      ],
      "description": "Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName#"
    },
    {
      "path": "/order/upgrade/licensePlesk",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/upgrade/licensePlesk/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": false,
          "description": "Retrieve available offers to upgrade your service to"
        }
      ],
      "description": "Listing offers /order/upgrade/licensePlesk"
    },
    {
      "path": "/order/upgrade/licensePlesk/{serviceName}/{planCode}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Get a provisional order for the selected upgrade of your service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "autoPayWithPreferredPaymentMethod",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be automatically paid with preferred payment method"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Perform the requested upgrade of your service"
        }
      ],
      "description": "Listing offers /order/upgrade/licensePlesk/#serviceName#"
    },
    {
      "path": "/order/upgrade/licensecPanel",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/upgrade/licensecPanel/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": false,
          "description": "Retrieve available offers to upgrade your service to"
        }
      ],
      "description": "Listing offers /order/upgrade/licensecPanel"
    },
    {
      "path": "/order/upgrade/licensecPanel/{serviceName}/{planCode}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Get a provisional order for the selected upgrade of your service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            },
            {
              "name": "autoPayWithPreferredPaymentMethod",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be automatically paid with preferred payment method"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Perform the requested upgrade of your service"
        }
      ],
      "description": "Listing offers /order/upgrade/licensecPanel/#serviceName#"
    },
    {
      "path": "/order/upgrade/privateCloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PCC service"
    },
    {
      "path": "/order/upgrade/privateCloud/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": false,
          "description": "Retrieve available offers to upgrade your service to"
        }
      ],
      "description": "Listing offers /order/upgrade/privateCloud"
    },
    {
      "path": "/order/upgrade/privateCloud/{serviceName}/{planCode}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Get a provisional order for the selected upgrade of your service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "autoPayWithPreferredPaymentMethod",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be automatically paid with preferred payment method"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Perform the requested upgrade of your service"
        }
      ],
      "description": "Listing offers /order/upgrade/privateCloud/#serviceName#"
    },
    {
      "path": "/order/upgrade/vps",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PUBLICCLOUD service"
    },
    {
      "path": "/order/upgrade/vps/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": false,
          "description": "Retrieve available offers to upgrade your service to"
        }
      ],
      "description": "Listing offers /order/upgrade/vps"
    },
    {
      "path": "/order/upgrade/vps/{serviceName}/{planCode}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Get a provisional order for the selected upgrade of your service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "autoPayWithPreferredPaymentMethod",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be automatically paid with preferred payment method"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Perform the requested upgrade of your service"
        }
      ],
      "description": "Listing offers /order/upgrade/vps/#serviceName#"
    },
    {
      "path": "/order/upgrade/vpsAdditionalDisk",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the PUBLICCLOUD service"
    },
    {
      "path": "/order/upgrade/vpsAdditionalDisk/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": false,
          "description": "Retrieve available offers to upgrade your service to"
        }
      ],
      "description": "Listing offers /order/upgrade/vpsAdditionalDisk"
    },
    {
      "path": "/order/upgrade/vpsAdditionalDisk/{serviceName}/{planCode}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Get a provisional order for the selected upgrade of your service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "autoPayWithPreferredPaymentMethod",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be automatically paid with preferred payment method"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity you want to upgrade to"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Perform the requested upgrade of your service"
        }
      ],
      "description": "Listing offers /order/upgrade/vpsAdditionalDisk/#serviceName#"
    }
  ],
  "resourcePath": "/order",
  "basePath": "https://api.us.ovhcloud.com/1.0",
  "models": {
    "complexType.SafeKeyValue<T>": {
      "id": "SafeKeyValue",
      "namespace": "complexType",
      "description": "Key and value, with proper key strings",
      "generics": [
        "T"
      ],
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "nichandle.OvhSubsidiaryEnum": {
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle",
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
      "enumType": "string"
    },
    "order.Contract": {
      "id": "Contract",
      "namespace": "order",
      "description": "A contract",
      "properties": {
        "content": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "order.CurrencyCodeEnum": {
      "id": "CurrencyCodeEnum",
      "namespace": "order",
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
      "enumType": "string"
    },
    "order.Order": {
      "id": "Order",
      "namespace": "order",
      "description": "An order",
      "properties": {
        "contracts": {
          "type": "order.Contract[]",
          "fullType": "order.Contract[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "details": {
          "type": "order.OrderDetail[]",
          "fullType": "order.OrderDetail[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "prices": {
          "type": "order.OrderPrices",
          "fullType": "order.OrderPrices",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "order.OrderDetail": {
      "id": "OrderDetail",
      "namespace": "order",
      "description": "Detail of an order",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "detailType": {
          "type": "order.OrderDetailTypeEnum",
          "fullType": "order.OrderDetailTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "totalPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "unitPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "order.OrderDetailTypeEnum": {
      "id": "OrderDetailTypeEnum",
      "namespace": "order",
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
      "enumType": "string"
    },
    "order.OrderPrices": {
      "id": "OrderPrices",
      "namespace": "order",
      "description": "Prices of an order",
      "properties": {
        "tax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "withTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "withoutTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "order.Price": {
      "id": "Price",
      "namespace": "order",
      "description": "Price with it's currency and textual representation",
      "properties": {
        "currencyCode": {
          "type": "order.CurrencyCodeEnum",
          "fullType": "order.CurrencyCodeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "order.cart.Cart": {
      "id": "Cart",
      "namespace": "order.cart",
      "description": "A shopping cart",
      "properties": {
        "cartId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cart identifier",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of your cart",
          "required": true
        },
        "expire": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Expiration time",
          "required": false
        },
        "items": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Items of your cart",
          "required": true
        },
        "readOnly": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the cart has already been validated",
          "required": true
        }
      }
    },
    "order.cart.ConfigurationItem": {
      "id": "ConfigurationItem",
      "namespace": "order.cart",
      "description": "Representation of a configuration item for personalizing product",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Configuration ID",
          "required": true
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of the resource",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Path to the resource in API.OVH.COM",
          "required": true
        }
      }
    },
    "order.cart.ConfigurationRequirements": {
      "id": "ConfigurationRequirements",
      "namespace": "order.cart",
      "description": "Information about a configuration",
      "properties": {
        "fields": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Indicates if some particular fields have to be inputed during the creation of `type` resource",
          "required": false
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Label for your configuration item",
          "required": true
        },
        "required": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the configuration item is required",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the configuration item",
          "required": true
        }
      }
    },
    "order.cart.DomainSettings": {
      "id": "DomainSettings",
      "namespace": "order.cart",
      "description": "Representation of domain name order properties",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Domain name requested",
          "required": true
        }
      }
    },
    "order.cart.DurationUnitEnum": {
      "id": "DurationUnitEnum",
      "namespace": "order.cart",
      "description": "Unit that correspond to a duration range",
      "enum": [
        "month",
        "day",
        "none"
      ],
      "enumType": "string"
    },
    "order.cart.GenericOptionDefinition": {
      "id": "GenericOptionDefinition",
      "namespace": "order.cart",
      "description": "Representation of a generic product option",
      "properties": {
        "exclusive": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Define if options of this family are exclusive with each other",
          "required": true
        },
        "family": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Option family",
          "required": true
        },
        "mandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Define if an option of this family is mandatory",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Product offer identifier",
          "required": true
        },
        "prices": {
          "type": "order.cart.GenericProductPricing[]",
          "fullType": "order.cart.GenericProductPricing[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Prices of the product offer",
          "required": true
        },
        "productName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the product",
          "required": true
        },
        "productType": {
          "type": "order.cart.GenericProductTypeEnum",
          "fullType": "order.cart.GenericProductTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Product type",
          "required": true
        }
      }
    },
    "order.cart.GenericProductDefinition": {
      "id": "GenericProductDefinition",
      "namespace": "order.cart",
      "description": "Representation of a generic product",
      "properties": {
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Product offer identifier",
          "required": true
        },
        "prices": {
          "type": "order.cart.GenericProductPricing[]",
          "fullType": "order.cart.GenericProductPricing[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Prices of the product offer",
          "required": true
        },
        "productName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the product",
          "required": true
        },
        "productType": {
          "type": "order.cart.GenericProductTypeEnum",
          "fullType": "order.cart.GenericProductTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Product type",
          "required": true
        }
      }
    },
    "order.cart.GenericProductPricing": {
      "id": "GenericProductPricing",
      "namespace": "order.cart",
      "description": "Representation of a product pricing",
      "properties": {
        "capacities": {
          "type": "order.cart.GenericProductPricingCapacitiesEnum[]",
          "fullType": "order.cart.GenericProductPricingCapacitiesEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Capacities of the pricing (type of pricing)",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of the pricing",
          "required": true
        },
        "duration": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Duration for ordering the product",
          "required": true
        },
        "interval": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Interval of renewal",
          "required": true
        },
        "maximumQuantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum quantity that can be ordered",
          "required": true
        },
        "maximumRepeat": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum repeat for renewal",
          "required": false
        },
        "minimumQuantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum quantity that can be ordered",
          "required": true
        },
        "minimumRepeat": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum repeat for renewal",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price of the product",
          "required": true
        },
        "priceInUcents": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price of the product in micro-centims",
          "required": true
        },
        "pricingMode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Pricing model identifier",
          "required": true
        },
        "pricingType": {
          "type": "order.cart.GenericProductPricingTypeEnum",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Pricing type",
          "required": true
        }
      }
    },
    "order.cart.GenericProductPricingCapacitiesEnum": {
      "id": "GenericProductPricingCapacitiesEnum",
      "namespace": "order.cart",
      "description": "Capacity of a pricing (type)",
      "enum": [
        "installation",
        "renew",
        "upgrade",
        "downgrade",
        "detach"
      ],
      "enumType": "string"
    },
    "order.cart.GenericProductPricingStrategyEnum": {
      "id": "GenericProductPricingStrategyEnum",
      "namespace": "order.cart",
      "description": "Strategy of a Pricing",
      "enum": [
        "stairstep",
        "volume",
        "tiered"
      ],
      "enumType": "string"
    },
    "order.cart.GenericProductPricingTypeEnum": {
      "id": "GenericProductPricingTypeEnum",
      "namespace": "order.cart",
      "description": "Type of a pricing",
      "enum": [
        "rental",
        "consumption",
        "purchase"
      ],
      "enumType": "string"
    },
    "order.cart.GenericProductTypeEnum": {
      "id": "GenericProductTypeEnum",
      "namespace": "order.cart",
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
      "enumType": "string"
    },
    "order.cart.Item": {
      "id": "Item",
      "namespace": "order.cart",
      "description": "Representation of a cart item",
      "properties": {
        "cartId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cart identifier",
          "required": true
        },
        "configurations": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Configuration set for this product",
          "required": false
        },
        "duration": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": true,
          "readOnly": true,
          "description": "Duration for the service",
          "required": false
        },
        "itemId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current product identifier",
          "required": true
        },
        "offerId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer unique identifier of the product added",
          "required": true
        },
        "options": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Options item ID attached to this item",
          "required": true
        },
        "parentItemId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Id of parent item (if item is an option)",
          "required": false
        },
        "prices": {
          "type": "order.cart.Price[]",
          "fullType": "order.cart.Price[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Price of the item",
          "required": true
        },
        "productId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the product added",
          "required": true
        },
        "settings": {
          "type": "order.cart.DomainSettings",
          "fullType": "order.cart.DomainSettings",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain related settings",
          "required": true
        }
      }
    },
    "order.cart.Price": {
      "id": "Price",
      "namespace": "order.cart",
      "description": "Price informations with label",
      "properties": {
        "label": {
          "type": "order.cart.PriceLabelEnum",
          "fullType": "order.cart.PriceLabelEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Label corresponding to a price",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Price of the product",
          "required": true
        }
      }
    },
    "order.cart.PriceLabelEnum": {
      "id": "PriceLabelEnum",
      "namespace": "order.cart",
      "description": "Label corresponding to different type of price",
      "enum": [
        "PRICE",
        "DISCOUNT",
        "FEE",
        "TOTAL",
        "RENEW"
      ],
      "enumType": "string"
    },
    "order.catalog.AddonItem": {
      "id": "AddonItem",
      "namespace": "order.catalog",
      "description": "Describes an Addon",
      "properties": {
        "addons": {
          "type": "order.catalog.AddonOffer[]",
          "fullType": "order.catalog.AddonOffer[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of the addons of this family",
          "required": true
        },
        "exclusive": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether you can only have one instance of this addon family (xor)",
          "required": true
        },
        "family": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Addon family name",
          "required": true
        },
        "mandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicated if addon family must be contracted",
          "required": true
        }
      }
    },
    "order.catalog.AddonOffer": {
      "id": "AddonOffer",
      "namespace": "order.catalog",
      "description": "Describes of Addon offer",
      "properties": {
        "invoiceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name that appears on invoice",
          "required": true
        },
        "plan": {
          "type": "order.catalog.ProductPlan",
          "fullType": "order.catalog.ProductPlan",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes of commercial offer of a product",
          "required": true
        }
      }
    },
    "order.catalog.Catalog": {
      "id": "Catalog",
      "namespace": "order.catalog",
      "description": "Describes a Catalog",
      "properties": {
        "catalogId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of the catalog",
          "required": true
        },
        "merchantCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "OVH Subsidiary concerned by this catalog",
          "required": true
        },
        "plansFamily": {
          "type": "order.catalog.PlansItem[]",
          "fullType": "order.catalog.PlansItem[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of plans of the catalog",
          "required": true
        }
      }
    },
    "order.catalog.ConfigurationItem": {
      "id": "ConfigurationItem",
      "namespace": "order.catalog",
      "description": "Composition of a configuration",
      "properties": {
        "defaultValue": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Default value of the configuration if not provided",
          "required": false
        },
        "isCustom": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicates if the configuration is free for writing (true) or have to follow an enum (false - have to follow values field)",
          "required": true
        },
        "isMandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicates if configuration is required",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Label of the configuration",
          "required": true
        },
        "values": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Values allowed if configuration isn't custom",
          "required": true
        }
      }
    },
    "order.catalog.PlansItem": {
      "id": "PlansItem",
      "namespace": "order.catalog",
      "description": "Describe an item that contains multiple plans",
      "properties": {
        "family": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Family of the product",
          "required": true
        },
        "plans": {
          "type": "order.catalog.ProductPlan[]",
          "fullType": "order.catalog.ProductPlan[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of the plans for this catalog",
          "required": true
        }
      }
    },
    "order.catalog.Pricing": {
      "id": "Pricing",
      "namespace": "order.catalog",
      "description": "Describes a pricing",
      "properties": {
        "capacities": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Install, renew ... What the pricing can be used for",
          "required": true
        },
        "commitment": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Engagement period",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description",
          "required": true
        },
        "interval": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number length of the interval",
          "required": true
        },
        "intervalUnit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Unit interval for duration",
          "required": true
        },
        "maximumQuantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum quantity buyable",
          "required": false
        },
        "maximumRepeat": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum repeat duration",
          "required": false
        },
        "minimumQuantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum quantity",
          "required": true
        },
        "minimumRepeat": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum repeat duration",
          "required": true
        },
        "mustBeCompleted": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether the catalog must reach max repeat before subscription can use another one",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price of the product",
          "required": true
        },
        "priceCapInUcents": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Max price customer will pay at the end of the period (cap)",
          "required": false
        },
        "priceInUcents": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price in microcents",
          "required": true
        },
        "pricingStrategy": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Strategy on which the pricing can change",
          "required": true
        }
      }
    },
    "order.catalog.PricingDefault": {
      "id": "PricingDefault",
      "namespace": "order.catalog",
      "description": "Describe default pricings",
      "properties": {
        "default": {
          "type": "order.catalog.Pricing[]",
          "fullType": "order.catalog.Pricing[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Information about default pricing",
          "required": true
        }
      }
    },
    "order.catalog.Product": {
      "id": "Product",
      "namespace": "order.catalog",
      "description": "Describe a Product in the Catalog",
      "properties": {
        "configurations": {
          "type": "order.catalog.ConfigurationItem[]",
          "fullType": "order.catalog.ConfigurationItem[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of the configurations available for the product",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Designation of the product",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Plan code identifier of the product",
          "required": true
        },
        "technicalDetails": {
          "type": "complexType.SafeKeyValue<string>[]",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Technicals details about product",
          "required": false
        }
      }
    },
    "order.catalog.ProductOfferDetails": {
      "id": "ProductOfferDetails",
      "namespace": "order.catalog",
      "description": "Describe the details of a commercial offer",
      "properties": {
        "metadatas": {
          "type": "complexType.SafeKeyValue<string>[]",
          "fullType": "complexType.SafeKeyValue<string>[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of the metadatas attached",
          "required": true
        },
        "pricings": {
          "type": "order.catalog.PricingDefault",
          "fullType": "order.catalog.PricingDefault",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe default pricings",
          "required": true
        },
        "product": {
          "type": "order.catalog.Product",
          "fullType": "order.catalog.Product",
          "canBeNull": false,
          "readOnly": false,
          "description": "Information about the product",
          "required": true
        }
      }
    },
    "order.catalog.ProductPlan": {
      "id": "ProductPlan",
      "namespace": "order.catalog",
      "description": "Describes of commercial offer of a product",
      "properties": {
        "addonsFamily": {
          "type": "order.catalog.AddonItem[]",
          "fullType": "order.catalog.AddonItem[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of addons",
          "required": true
        },
        "consumptionBillingStrategy": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Strategy that follow the pricing when product is in consumption mode",
          "required": false
        },
        "details": {
          "type": "order.catalog.ProductOfferDetails",
          "fullType": "order.catalog.ProductOfferDetails",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe the details of a commercial offer",
          "required": true
        },
        "invoiceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name that appears on invoice",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Plan code identifier",
          "required": true
        },
        "pricingType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Main mode: rental, consumption",
          "required": true
        }
      }
    },
    "order.catalog.public.AddonFamily": {
      "id": "AddonFamily",
      "namespace": "order.catalog.public",
      "description": "Describes an Addon family for a Commercial offer",
      "properties": {
        "addons": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of Commercial offers that can be ordered as an Addon of the current Commerical offer for the current Family",
          "required": true
        },
        "default": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Default Commercial offer that can be ordered as an Addon of the current Commercial offer for the current Family",
          "required": false
        },
        "exclusive": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether this Addon family is exclusive and can be ordered only once for the main Commercial offer",
          "required": true
        },
        "mandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether this Addon family is mandatory",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Family name",
          "required": true
        }
      }
    },
    "order.catalog.public.Catalog": {
      "id": "Catalog",
      "namespace": "order.catalog.public",
      "description": "Describes a Catalog inside a Subsidiary",
      "properties": {
        "addons": {
          "type": "order.catalog.public.Plan[]",
          "fullType": "order.catalog.public.Plan[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of addons of the catalog",
          "required": true
        },
        "catalogId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Identifier of the catalog",
          "required": true
        },
        "locale": {
          "type": "order.catalog.public.Locale",
          "fullType": "order.catalog.public.Locale",
          "canBeNull": false,
          "readOnly": true,
          "description": "Subsidiary specific information",
          "required": true
        },
        "planFamilies": {
          "type": "order.catalog.public.PlanFamily[]",
          "fullType": "order.catalog.public.PlanFamily[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of plan families of the catalog",
          "required": true
        },
        "plans": {
          "type": "order.catalog.public.Plan[]",
          "fullType": "order.catalog.public.Plan[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of main plans of the catalog",
          "required": true
        },
        "products": {
          "type": "order.catalog.public.Product[]",
          "fullType": "order.catalog.public.Product[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of products of the catalog",
          "required": true
        }
      }
    },
    "order.catalog.public.Configuration": {
      "id": "Configuration",
      "namespace": "order.catalog.public",
      "description": "Describes the Configuration for a Commercial offer",
      "properties": {
        "isCustom": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether the value of this Configuration is custom",
          "required": true
        },
        "isMandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether this Configuration is mandatory",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Identifier of the Configuration",
          "required": true
        },
        "values": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Possible values for this Configuration, if not custom",
          "required": true
        }
      }
    },
    "order.catalog.public.Locale": {
      "id": "Locale",
      "namespace": "order.catalog.public",
      "description": "Describes specifics for a given Subsidiary",
      "properties": {
        "currencyCode": {
          "type": "order.CurrencyCodeEnum",
          "fullType": "order.CurrencyCodeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Currency used by the Subsidiary",
          "required": true
        },
        "subsidiary": {
          "type": "nichandle.OvhSubsidiaryEnum",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current Subsidiary",
          "required": true
        },
        "taxRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Default VAT rate used by the Subsidiary",
          "required": true
        }
      }
    },
    "order.catalog.public.Plan": {
      "id": "Plan",
      "namespace": "order.catalog.public",
      "description": "Describes a Commercial offer inside a Catalog",
      "properties": {
        "addonFamilies": {
          "type": "order.catalog.public.AddonFamily[]",
          "fullType": "order.catalog.public.AddonFamily[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Addon families for this offer",
          "required": true
        },
        "configurations": {
          "type": "order.catalog.public.Configuration[]",
          "fullType": "order.catalog.public.Configuration[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of possible Configurations for this Commercial offer",
          "required": true
        },
        "family": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of the family this Commercial offer belongs to",
          "required": false
        },
        "invoiceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Commercial offer description",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Commercial offer identifier",
          "required": true
        },
        "pricingType": {
          "type": "order.cart.GenericProductPricingTypeEnum",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of Pricing used by this Commercial offer",
          "required": true
        },
        "pricings": {
          "type": "order.catalog.public.Pricing[]",
          "fullType": "order.catalog.public.Pricing[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of possible Pricings for this Commercial offer",
          "required": true
        },
        "product": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Identifier of the Product linked to this Commercial offer",
          "required": true
        }
      }
    },
    "order.catalog.public.PlanFamily": {
      "id": "PlanFamily",
      "namespace": "order.catalog.public",
      "description": "Describes a PlanFamily for a Catalog",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Family name",
          "required": true
        }
      }
    },
    "order.catalog.public.Pricing": {
      "id": "Pricing",
      "namespace": "order.catalog.public",
      "description": "Describes a Pricing for a Commercial offer",
      "properties": {
        "capacities": {
          "type": "order.cart.GenericProductPricingCapacitiesEnum[]",
          "fullType": "order.cart.GenericProductPricingCapacitiesEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Capacities of the Pricing, describes what the Pricing can be used for",
          "required": true
        },
        "commitment": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Engagement period",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pricing description",
          "required": true
        },
        "interval": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Length of the interval",
          "required": true
        },
        "intervalUnit": {
          "type": "order.cart.DurationUnitEnum",
          "fullType": "order.cart.DurationUnitEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unit of the interval",
          "required": true
        },
        "mode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pricing mode",
          "required": true
        },
        "mustBeCompleted": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pricing must be completed",
          "required": true
        },
        "phase": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Phase for the Pricing",
          "required": true
        },
        "price": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Price, in micro-cents",
          "required": true
        },
        "quantity": {
          "type": "order.catalog.public.PricingMinMax",
          "fullType": "order.catalog.public.PricingMinMax",
          "canBeNull": false,
          "readOnly": true,
          "description": "Describes how many times the Commercial offer can be added to the Cart",
          "required": true
        },
        "repeat": {
          "type": "order.catalog.public.PricingMinMax",
          "fullType": "order.catalog.public.PricingMinMax",
          "canBeNull": false,
          "readOnly": true,
          "description": "Describes how many times the interval can be repeated",
          "required": true
        },
        "strategy": {
          "type": "order.cart.GenericProductPricingStrategyEnum",
          "fullType": "order.cart.GenericProductPricingStrategyEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pricing strategy",
          "required": true
        },
        "tax": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Tax that can be applied, in micro-cents",
          "required": true
        },
        "type": {
          "type": "order.cart.GenericProductPricingTypeEnum",
          "fullType": "order.cart.GenericProductPricingTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pricing type",
          "required": true
        }
      }
    },
    "order.catalog.public.PricingMinMax": {
      "id": "PricingMinMax",
      "namespace": "order.catalog.public",
      "description": "Describes minimal and maximal values for a Pricing",
      "properties": {
        "max": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Maximal value",
          "required": false
        },
        "min": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Minimal value",
          "required": true
        }
      }
    },
    "order.catalog.public.Product": {
      "id": "Product",
      "namespace": "order.catalog.public",
      "description": "Describes a Product attached to a Commercial offer",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of the Product",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Identifier of the Product",
          "required": true
        }
      }
    },
    "order.upgrade.Operation": {
      "id": "Operation",
      "namespace": "order.upgrade",
      "description": "Describes an operation",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of the operation",
          "required": true
        },
        "product": {
          "type": "order.upgrade.OperationProduct",
          "fullType": "order.upgrade.OperationProduct",
          "canBeNull": false,
          "readOnly": false,
          "description": "Product concerned by the operation",
          "required": true
        },
        "status": {
          "type": "order.upgrade.OperationStatusEnum",
          "fullType": "order.upgrade.OperationStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the operation",
          "required": true
        },
        "type": {
          "type": "order.upgrade.OperationTypeEnum",
          "fullType": "order.upgrade.OperationTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the operation",
          "required": true
        }
      }
    },
    "order.upgrade.OperationProduct": {
      "id": "OperationProduct",
      "namespace": "order.upgrade",
      "description": "Describes a product inside a operation",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Detailled description of a product",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the product",
          "required": true
        }
      }
    },
    "order.upgrade.OperationStatusEnum": {
      "id": "OperationStatusEnum",
      "namespace": "order.upgrade",
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
      "enumType": "string"
    },
    "order.upgrade.OperationTypeEnum": {
      "id": "OperationTypeEnum",
      "namespace": "order.upgrade",
      "description": "Unit that represent the type of an operation",
      "enum": [
        "UPGRADE"
      ],
      "enumType": "string"
    },
    "order.upgrade.order.upgrade.OperationAndOrder": {
      "id": "OperationAndOrder",
      "namespace": "order.upgrade.order.upgrade",
      "description": "Describes an Operation and the associated Order",
      "properties": {
        "operation": {
          "type": "order.upgrade.Operation",
          "fullType": "order.upgrade.Operation",
          "canBeNull": true,
          "readOnly": false,
          "description": "Upgrade operation",
          "required": false
        },
        "order": {
          "type": "order.Order",
          "fullType": "order.Order",
          "canBeNull": true,
          "readOnly": false,
          "description": "Order placed",
          "required": false
        }
      }
    }
  }
}