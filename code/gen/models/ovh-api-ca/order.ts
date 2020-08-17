import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/order.json

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
              "dataType": "order.cart.Creation",
              "description": "Request Body",
              "fullType": "order.cart.Creation",
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
              "dataType": "order.cart.Update",
              "description": "Request Body",
              "fullType": "order.cart.Update",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
          "description": "Get informations about Ceph as a Service offers",
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
          "description": "Post a new Ceph as a Service item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
          "description": "Get informations about Ceph as a Service options",
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
              "description": "Identifier of the Ceph as a Service you want to consult options",
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
          "description": "Post a new Ceph as a Service option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/cephaas/options"
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
              "dataType": "order.cart.Checkout",
              "description": "Request Body",
              "fullType": "order.cart.Checkout",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
              "dataType": "order.cart.CouponCreation",
              "description": "Request Body",
              "fullType": "order.cart.CouponCreation",
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
              "dataType": "order.cart.GenericDedicatedCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericDedicatedCreation",
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
              "dataType": "order.cart.GenericDedicatedOptionsCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericDedicatedOptionsCreation",
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
              "dataType": "order.cart.GenericDedicatedCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericDedicatedCreation",
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
      "path": "/order/cart/{cartId}/dedicatedCloud"
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
              "dataType": "order.cart.GenericDedicatedOptionsCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericDedicatedOptionsCreation",
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
      "path": "/order/cart/{cartId}/dedicatedCloud/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about a dedicated Direct Sales server",
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
          "description": "Post a new dedicated Direct Sales server item in your cart",
          "httpMethod": "POST",
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
              "description": "Identifier of a dedicated Direct Sales server offer",
              "fullType": "string",
              "name": "planCode",
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
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/dedicatedDirectSales"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about dedicated Direct Sales server options",
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new dedicated Direct Sales server option in your cart",
          "httpMethod": "POST",
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
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a dedicated Direct Sales server offer",
              "fullType": "string",
              "name": "planCode",
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
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/dedicatedDirectSales/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about a dedicated labs server",
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
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new dedicated labs server item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/dedicatedLabs"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about dedicated labs server options",
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
              "description": "Identifier of a dedicated labs server offer",
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
          "description": "Post a new dedicated labs server option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/dedicatedLabs/options"
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
              "dataType": "order.cart.GenericDedicatedCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericDedicatedCreation",
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
      "path": "/order/cart/{cartId}/dedicatedPciVps"
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
              "dataType": "order.cart.GenericDedicatedOptionsCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericDedicatedOptionsCreation",
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
      "path": "/order/cart/{cartId}/dedicatedPciVps/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about a dedicated server for US Reseller",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new dedicated server item in your cart",
          "httpMethod": "POST",
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
              "description": "Identifier of a dedicated server offer",
              "fullType": "string",
              "name": "planCode",
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
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/dedicatedReseller"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new dedicated server option in your cart",
          "httpMethod": "POST",
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
              "fullType": "duration",
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
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/dedicatedReseller/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Desk As A Service offers",
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
          "description": "Post a new Desk as a service item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/deskaas"
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
          "description": "Get informations about DNS zone offer",
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
          "description": "Post a new DNS zone item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/dns"
    },
    {
      "description": "DNS option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about DNS options",
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
              "description": "Identifier of the DNS offer you want to consult options",
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
          "description": "Post a new DNS option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/dns/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about a domain name",
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
              "description": "Domain name requested",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.cart.ProductInformation[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Post a new domain in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericDomainCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericDomainCreation",
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
      "path": "/order/cart/{cartId}/domain"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about domain names options",
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
              "description": "Domain name linked to the option",
              "fullType": "string",
              "name": "domain",
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
          "description": "Post a new domain name option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericDomainOptionsCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericDomainOptionsCreation",
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
      "path": "/order/cart/{cartId}/domain/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about an Enterprise Cloud Databases cluster",
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
          "description": "Add a new Enterprise Cloud Databases cluster item to your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/enterpriseCloudDatabases"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about Enterprise Cloud Databases options",
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
              "description": "Identifier of an Enterprise Cloud Databases node offer",
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
          "description": "Add a new Enterprise Cloud Databases node to your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/enterpriseCloudDatabases/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Exchange offers",
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
          "description": "Post a new Exchange item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/exchange"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Exchange options",
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
              "description": "Identifier of the Exchange you want to consult options",
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
          "description": "Post a new Exchange option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/exchange/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about IP addresses offers",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
          "description": "Get informations about IP addresses options",
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
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
          "description": "Get information about IP addresses reseller offers",
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
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new IP address reseller item in your cart",
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
            },
            {
              "dataType": "string",
              "description": "Identifier of the IP address reseller offer",
              "fullType": "string",
              "name": "planCode",
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
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/ipReseller"
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
              "dataType": "order.cart.ItemUpdate",
              "description": "Request Body",
              "fullType": "order.cart.ItemUpdate",
              "paramType": "body",
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
              "dataType": "order.cart.ItemConfigurationCreation",
              "description": "Request Body",
              "fullType": "order.cart.ItemConfigurationCreation",
              "paramType": "body",
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
              "description": "Cart ID",
              "fullType": "string",
              "name": "cartId",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Logs offers",
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
          "description": "Post a new Logs item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/logs"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Logs options",
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
              "description": "Identifier of the Logs you want to consult options",
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
          "description": "Post a new Logs option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/logs/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about NAS HA offers",
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
          "description": "Post a new NAS HA item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/nasha"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about NAS HA options",
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
              "description": "Identifier of the NAS HA you want to consult options",
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
          "description": "Post a new NAS HA option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/nasha/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Office 365 licenses",
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
          "description": "Post a new Office 365 item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/office365"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Office 365 options",
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
              "description": "Identifier of a Office 365 main offer",
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
          "description": "Post a new Office 365 option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/office365/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Hosted Private Cloud offers",
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
          "description": "Post a new Hosted Private Cloud item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
          "description": "Get informations about Hosted Private Cloud options",
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
              "description": "Identifier of the Hosted Private Cloud you want to consult options",
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
          "description": "Post a new Hosted Private Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/privateCloud/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Private Cloud CDI offers",
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
          "description": "Post a new Private Cloud CDI item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/privateCloudCDI"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Private Cloud CDI options",
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
              "description": "Identifier of the Private Cloud CDI you want to consult options",
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
          "description": "Post a new Private Cloud CDI option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/privateCloudCDI/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Private Cloud Dedicated Cloud offers",
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
          "description": "Post a new Private Cloud Dedicated Cloud item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/privateCloudDC"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Private Cloud Dedicated Cloud options",
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
              "description": "Identifier of the Private Cloud Dedicated Cloud you want to consult options",
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
          "description": "Post a new Private Cloud Dedicated Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/privateCloudDC/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Hosted Private Cloud offers",
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
          "description": "Post a new Hosted Private Cloud item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/privateCloudEnterprise"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Hosted Private Cloud options",
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
              "description": "Identifier of the Hosted Private Cloud you want to consult options",
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
          "description": "Post a new Hosted Private Cloud option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/privateCloudEnterprise/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Private Cloud Reseller offers",
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
          "description": "Post a new Private Cloud Reseller item in your cart",
          "httpMethod": "POST",
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
              "description": "Identifier of the Private Cloud Reseller offer",
              "fullType": "string",
              "name": "planCode",
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
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/privateCloudReseller"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Private Cloud Reseller options",
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
              "description": "Identifier of the Private Cloud Reseller you want to consult options",
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
          "description": "Post a new Private Cloud Reseller option in your cart",
          "httpMethod": "POST",
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
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a Private Cloud Reseller option offer",
              "fullType": "string",
              "name": "planCode",
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
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/privateCloudReseller/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Private Cloud Reseller Enterprise offers",
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
          "description": "Post a new Private Cloud Reseller Enterprise item in your cart",
          "httpMethod": "POST",
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
              "description": "Identifier of the Private Cloud Reseller Enterprise offer",
              "fullType": "string",
              "name": "planCode",
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
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/privateCloudResellerEnterprise"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Private Cloud Reseller Enterprise options",
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
              "description": "Identifier of the Private Cloud Reseller Enterprise you want to consult options",
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
          "description": "Post a new Private Cloud Reseller Enterprise option in your cart",
          "httpMethod": "POST",
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
              "description": "Cart item to be linked",
              "fullType": "long",
              "name": "itemId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of a Private Cloud Reseller Enterprise option offer",
              "fullType": "string",
              "name": "planCode",
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
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/privateCloudResellerEnterprise/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Private Cloud SDDC offers",
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
          "description": "Post a new Private Cloud SDDC item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/privateCloudSDDC"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about Private Cloud SDDC options",
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
              "description": "Identifier of the Private Cloud SDDC you want to consult options",
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
          "description": "Post a new Private Cloud SDDC option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/privateCloudSDDC/options"
    },
    {
      "description": "Order privateSQL",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all privateSQL offers available",
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
          "description": "Add a privateSQL in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/privateSQL"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new SSL Comodo item in your cart",
          "httpMethod": "POST",
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
              "description": "Identifier of the SSL Comodo offer",
              "fullType": "string",
              "name": "planCode",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new SSL Comodo option in your cart",
          "httpMethod": "POST",
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
              "fullType": "duration",
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
          "description": "Get informations about SSL Gateway offers",
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
          "description": "Post a new SSL Gateway item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/sslGateway"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about SSL Gateway options",
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
              "description": "Identifier of the SSL Gateway you want to consult options",
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
          "description": "Post a new SSL Gateway option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/sslGateway/options"
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
      "description": "Order a support offer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all support offers available",
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
          "description": "Add a support offer in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/support"
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
          "description": "Post a new Veeam Cloud Connect item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
              "paramType": "path",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
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
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cart/{cartId}/vrackReseller"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about webHosting offers",
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
          "description": "Post a new webHosting item in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericProductCreation",
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
      "path": "/order/cart/{cartId}/webHosting"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about webHosting options",
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
              "description": "Identifier of the webHosting you want to consult options",
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
          "description": "Post a new webHosting option in your cart",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "description": "Request Body",
              "fullType": "order.cart.GenericOptionCreation",
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
      "path": "/order/cart/{cartId}/webHosting/options"
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
              "description": "The internal ID of baremetal servers service",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
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
              "description": "The internal ID of baremetal servers service",
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
              "description": "The internal ID of Cloud Project",
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
              "fullType": "duration",
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
              "description": "The internal ID of Cloud Project",
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
              "description": "The internal ID of Dedicated service",
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
              "fullType": "duration",
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
              "description": "The internal ID of Dedicated service",
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
      "description": "Operations about the DOMAIN service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of whoisOwner property (=)",
              "fullType": "string",
              "name": "whoisOwner",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cartServiceOption/domain"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/domain/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Domain offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of Domain service",
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
          "description": "Post an additional Domain option in your cart",
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
              "description": "Identifier of the additional Domain offer",
              "fullType": "string",
              "name": "planCode",
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
              "description": "The internal ID of Domain service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cartServiceOption/domain/{serviceName}"
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
              "description": "The internal ID of IP Load-Balancing service",
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
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
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
              "description": "The internal ID of IP Load-Balancing service",
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
              "description": "The internal ID of Logs service",
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
              "fullType": "duration",
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
              "description": "The internal ID of Logs service",
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
              "description": "The private cloud service name",
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
              "fullType": "duration",
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
              "description": "The private cloud service name",
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
              "description": "The private cloud service name",
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
              "fullType": "duration",
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
              "description": "The private cloud service name",
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
              "description": "The private cloud service name",
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
              "fullType": "duration",
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
              "description": "The private cloud service name",
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
              "description": "The private cloud service name",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
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
              "description": "The private cloud service name",
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
      "description": "Operations about the SHAREPOINT service",
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
      "path": "/order/cartServiceOption/sharepoint"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/sharepoint/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Sharepoint offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of Sharepoint service",
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
          "description": "Post an additional Sharepoint option in your cart",
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
              "description": "Identifier of the additional Sharepoint offer",
              "fullType": "string",
              "name": "planCode",
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
              "description": "The internal ID of Sharepoint service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cartServiceOption/sharepoint/{serviceName}"
    },
    {
      "description": "Operations about the SSLGATEWAY service",
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
      "path": "/order/cartServiceOption/sslGateway"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/sslGateway/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional SSL Gateway offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of SSL Gateway service",
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
          "description": "Post an additional SSL Gateway option in your cart",
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
              "description": "Identifier of the additional SSL Gateway offer",
              "fullType": "string",
              "name": "planCode",
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
              "description": "The internal ID of SSL Gateway service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cartServiceOption/sslGateway/{serviceName}"
    },
    {
      "description": "Operations about the VPS service",
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
              "description": "The internal ID of your VPS service",
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
              "description": "Cart identifier",
              "fullType": "string",
              "name": "cartId",
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
              "description": "Duration selected for the purchase of the product",
              "fullType": "duration",
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
              "description": "The internal ID of your VPS service",
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
      "description": "Operations about the HOSTING service",
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
      "path": "/order/cartServiceOption/webHosting"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/webHosting/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Web Hosting offer for your service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of Web Hosting service",
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
          "description": "Post an additional Web Hosting option in your cart",
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
              "description": "Identifier of the additional Web Hosting offer",
              "fullType": "string",
              "name": "planCode",
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
              "description": "The internal ID of Web Hosting service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cartServiceOption/webHosting/{serviceName}"
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of Desk as a service catalog",
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
      "path": "/order/catalog/formatted/deskaas"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information of Logs Data Platform catalog",
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
      "path": "/order/catalog/formatted/logs"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information of Private Cloud catalog",
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
            "deletionDate": "2019-09-28T00:00:00+01:00",
            "deprecatedDate": "2019-08-28T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Retrieve information of Private Cloud CDI catalog",
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
          "responseType": "order.catalog.privateCloud.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/privateCloudCDI"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-09-28T00:00:00+01:00",
            "deprecatedDate": "2019-08-28T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Retrieve information of Private Cloud Dedicated Cloud catalog",
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
          "responseType": "order.catalog.privateCloud.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/privateCloudDC"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information of Hosted Private Cloud Enterprise catalog",
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
      "path": "/order/catalog/formatted/privateCloudEnterprise"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information of Private Cloud Reseller catalog",
          "httpMethod": "GET",
          "noAuthentication": false,
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
      "path": "/order/catalog/formatted/privateCloudReseller"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information of Private Cloud Reseller Enterprise catalog",
          "httpMethod": "GET",
          "noAuthentication": false,
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
      "path": "/order/catalog/formatted/privateCloudResellerEnterprise"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-09-28T00:00:00+01:00",
            "deprecatedDate": "2019-08-28T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Retrieve information of Private Cloud SDDC catalog",
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
          "responseType": "order.catalog.privateCloud.Catalog"
        }
      ],
      "path": "/order/catalog/formatted/privateCloudSDDC"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve information of Reseller catalog",
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
      "path": "/order/catalog/formatted/reseller"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve DNS catalog",
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
      "path": "/order/catalog/public/dns"
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
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve Web Hosting catalog",
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
      "path": "/order/catalog/public/webHosting"
    },
    {
      "description": "Operations about the CDNANYCAST service",
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
      "path": "/order/cdn/dedicated"
    },
    {
      "description": "Order a New Dedicated CDN Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cdn/dedicated/new"
    },
    {
      "description": "Order a New Dedicated CDN Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/cdn/dedicated/new/{duration}"
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
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cdn/dedicated/{serviceName}"
    },
    {
      "description": "Order Backend Option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'backend' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Backend number that will be ordered",
              "fullType": "long",
              "name": "backend",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cdn/dedicated/{serviceName}/backend"
    },
    {
      "description": "Order Backend Option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Backend number that will be ordered",
              "fullType": "long",
              "name": "backend",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Backend number that will be ordered",
              "fullType": "long",
              "name": "backend",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/cdn/dedicated/{serviceName}/backend/{duration}"
    },
    {
      "description": "Upgrade cacheRule Option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'cacheRule' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cdnanycast.OrderCacheRuleEnum",
              "description": "cache rule upgrade option to 100 or 1000",
              "fullType": "cdnanycast.OrderCacheRuleEnum",
              "name": "cacheRule",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cdn/dedicated/{serviceName}/cacheRule"
    },
    {
      "description": "Upgrade cacheRule Option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cdnanycast.OrderCacheRuleEnum",
              "description": "cache rule upgrade option to 100 or 1000",
              "fullType": "cdnanycast.OrderCacheRuleEnum",
              "name": "cacheRule",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cdnanycast.OrderCacheRuleEnum",
              "description": "cache rule upgrade option to 100 or 1000",
              "fullType": "cdnanycast.OrderCacheRuleEnum",
              "name": "cacheRule",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/cdn/dedicated/{serviceName}/cacheRule/{duration}"
    },
    {
      "description": "Order Quota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'quota' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cdnanycast.OrderQuotaEnum",
              "description": "quota number in TB that will be added to the CDN service",
              "fullType": "cdnanycast.OrderQuotaEnum",
              "name": "quota",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cdn/dedicated/{serviceName}/quota"
    },
    {
      "description": "Order Quota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cdnanycast.OrderQuotaEnum",
              "description": "quota number in TB that will be added to the CDN service",
              "fullType": "cdnanycast.OrderQuotaEnum",
              "name": "quota",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cdnanycast.OrderQuotaEnum",
              "description": "quota number in TB that will be added to the CDN service",
              "fullType": "cdnanycast.OrderQuotaEnum",
              "name": "quota",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/cdn/dedicated/{serviceName}/quota/{duration}"
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
      "path": "/order/cloud/project"
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
              "description": "The project id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cloud/project/{serviceName}"
    },
    {
      "description": "Order credit usable on your Cloud project",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Amount to add in your cloud credit",
              "fullType": "long",
              "name": "amount",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The project id",
              "fullType": "string",
              "name": "serviceName",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Amount to add in your cloud credit",
              "fullType": "long",
              "name": "amount",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The project id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/cloud/project/{serviceName}/credit"
    },
    {
      "description": "Order failover ip on your Cloud project",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance id where ip will be routed to",
              "fullType": "string",
              "name": "instanceId",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Number of failover ip",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "vps.ip.GeolocationEnum",
              "description": "IP geolocation",
              "fullType": "vps.ip.GeolocationEnum",
              "name": "country",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The project id",
              "fullType": "string",
              "name": "serviceName",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Instance id where ip will be routed to",
              "fullType": "string",
              "name": "instanceId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Number of failover ip",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "vps.ip.GeolocationEnum",
              "description": "IP geolocation",
              "fullType": "vps.ip.GeolocationEnum",
              "name": "country",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The project id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/cloud/project/{serviceName}/ip"
    },
    {
      "description": "Operations about the HOUSING service",
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
      "path": "/order/dedicated/housing"
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
              "description": "The internal name of your Housing bay",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/housing/{serviceName}"
    },
    {
      "description": "Order an APC for this bay",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'APC' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Housing bay",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/housing/{serviceName}/APC"
    },
    {
      "description": "Order an APC for this bay",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Housing bay",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Housing bay",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/housing/{serviceName}/APC/{duration}"
    },
    {
      "description": "Order a new Nas HA",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.NasHAOfferEnum",
              "description": "Capacity of Nas HA offer",
              "fullType": "dedicated.NasHAOfferEnum",
              "name": "model",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.NasHAZoneEnum",
              "description": "Nas HA localization",
              "fullType": "dedicated.NasHAZoneEnum",
              "name": "datacenter",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicated/nasha/new"
    },
    {
      "description": "Order a new Nas HA",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.NasHAOfferEnum",
              "description": "Capacity of Nas HA offer",
              "fullType": "dedicated.NasHAOfferEnum",
              "name": "model",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.NasHAZoneEnum",
              "description": "Nas HA localization",
              "fullType": "dedicated.NasHAZoneEnum",
              "name": "datacenter",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.NasHAOfferEnum",
              "description": "Capacity of Nas HA offer",
              "fullType": "dedicated.NasHAOfferEnum",
              "name": "model",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.NasHAZoneEnum",
              "description": "Nas HA localization",
              "fullType": "dedicated.NasHAZoneEnum",
              "name": "datacenter",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/nasha/new/{duration}"
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
    },
    {
      "description": "Order a backup storage for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'backupStorage' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "description": "The capacity in gigabytes of your backup storage",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/backupStorage"
    },
    {
      "description": "Order a backup storage for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "description": "The capacity in gigabytes of your backup storage",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "description": "The capacity in gigabytes of your backup storage",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/backupStorage/{duration}"
    },
    {
      "description": "Order bandwidth for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'bandwidth' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BandwidthOrderTypeEnum",
              "description": "bandwidth type",
              "fullType": "dedicated.server.BandwidthOrderTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.server.BandwidthOrderEnum",
              "description": "Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthOrderEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/bandwidth"
    },
    {
      "description": "Order bandwidth for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BandwidthOrderTypeEnum",
              "description": "bandwidth type",
              "fullType": "dedicated.server.BandwidthOrderTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.server.BandwidthOrderEnum",
              "description": "Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthOrderEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BandwidthOrderTypeEnum",
              "description": "bandwidth type",
              "fullType": "dedicated.server.BandwidthOrderTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.BandwidthOrderEnum",
              "description": "Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthOrderEnum",
              "name": "bandwidth",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/bandwidth/{duration}"
    },
    {
      "description": "Order vRack bandwidth for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'bandwidthvRack' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BandwidthvRackOrderEnum",
              "description": "vRack Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthvRackOrderEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/bandwidthvRack"
    },
    {
      "description": "Order vRack bandwidth for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BandwidthvRackOrderEnum",
              "description": "vRack Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthvRackOrderEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BandwidthvRackOrderEnum",
              "description": "vRack Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthvRackOrderEnum",
              "name": "bandwidth",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}"
    },
    {
      "description": "Order a failover IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'failoverIP' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/failoverIP"
    },
    {
      "description": "Order a failover IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/failoverIP/{duration}"
    },
    {
      "description": "Order a feature for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'feature' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "name": "feature",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/feature"
    },
    {
      "description": "Order a feature for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "name": "feature",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "name": "feature",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/feature/{duration}"
    },
    {
      "description": "order a Firewall for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'firewall' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.FirewallModelEnum",
              "description": "Firewall type",
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/firewall"
    },
    {
      "description": "order a Firewall for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.FirewallModelEnum",
              "description": "Firewall type",
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.FirewallModelEnum",
              "description": "Firewall type",
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/firewall/{duration}"
    },
    {
      "description": "Order IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'ip' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "IP localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "description": "The type of IP",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your organisation id to add on block informations",
              "fullType": "string",
              "name": "organisationId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "description": "IP block size",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "name": "blockSize",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/ip"
    },
    {
      "description": "Order IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "IP localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "description": "The type of IP",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your organisation id to add on block informations",
              "fullType": "string",
              "name": "organisationId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "description": "IP block size",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "name": "blockSize",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpCountryEnum",
              "description": "IP localization",
              "fullType": "dedicated.server.IpCountryEnum",
              "name": "country",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "description": "The type of IP",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your organisation id to add on block informations",
              "fullType": "string",
              "name": "organisationId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "description": "IP block size",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "name": "blockSize",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/ip/{duration}"
    },
    {
      "description": "Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'ipMigration' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "IP migration token",
              "fullType": "string",
              "name": "token",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "The IP to move to this server",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/ipMigration"
    },
    {
      "description": "Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "IP migration token",
              "fullType": "string",
              "name": "token",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "The IP to move to this server",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "IP migration token",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "The IP to move to this server",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/ipMigration/{duration}"
    },
    {
      "description": "Order a kvm for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'kvm' option",
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
      "path": "/order/dedicated/server/{serviceName}/kvm"
    },
    {
      "description": "Order a kvm for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
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
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/kvm/{duration}"
    },
    {
      "description": "Order a kvmip express for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'kvmExpress' option",
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
      "path": "/order/dedicated/server/{serviceName}/kvmExpress"
    },
    {
      "description": "Order a kvmip express for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
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
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/kvmExpress/{duration}"
    },
    {
      "description": "Order professional use option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'professionalUse' option",
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
      "path": "/order/dedicated/server/{serviceName}/professionalUse"
    },
    {
      "description": "Order professional use option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
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
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/professionalUse/{duration}"
    },
    {
      "description": "Order a static IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'staticIP' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/staticIP"
    },
    {
      "description": "Order a static IP for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "description": "Ip localization",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/staticIP/{duration}"
    },
    {
      "description": "Order additionall traffic for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'traffic' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.TrafficOrderEnum",
              "description": "amount of traffic to allocate",
              "fullType": "dedicated.server.TrafficOrderEnum",
              "name": "traffic",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/traffic"
    },
    {
      "description": "Order additionall traffic for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.TrafficOrderEnum",
              "description": "amount of traffic to allocate",
              "fullType": "dedicated.server.TrafficOrderEnum",
              "name": "traffic",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.TrafficOrderEnum",
              "description": "amount of traffic to allocate",
              "fullType": "dedicated.server.TrafficOrderEnum",
              "name": "traffic",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/traffic/{duration}"
    },
    {
      "description": "Order an USB key for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'usbKey' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "description": "Capacity in gigabytes",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "name": "capacity",
              "paramType": "query",
              "required": true
            },
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
      "path": "/order/dedicated/server/{serviceName}/usbKey"
    },
    {
      "description": "Order an USB key for this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "description": "Capacity in gigabytes",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "name": "capacity",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "description": "Capacity in gigabytes",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "name": "capacity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your dedicated server",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/usbKey/{duration}"
    },
    {
      "description": "Operations about the PCC service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}"
    },
    {
      "description": "Order additional bandwidth in your Private Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'additionalBandwidth' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "description": "How much additional bandwidth do you want ?",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/additionalBandwidth"
    },
    {
      "description": "Order additional bandwidth in your Private Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "description": "How much additional bandwidth do you want ?",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "description": "How much additional bandwidth do you want ?",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "name": "bandwidth",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}"
    },
    {
      "description": "Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'filer' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity of filer you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/filer"
    },
    {
      "description": "Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity of filer you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Quantity of filer you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/filer/{duration}"
    },
    {
      "description": "Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'host' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Quantity of hosts you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Datacenter where the Host will be added",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/host"
    },
    {
      "description": "Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Quantity of hosts you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Datacenter where the Host will be added",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Quantity of hosts you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Datacenter where the Host will be added",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/host/{duration}"
    },
    {
      "description": "Order an IP block for your Private Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'ip' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)",
              "fullType": "string",
              "name": "description",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "description": "The network ranges orderable",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "name": "size",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)",
              "fullType": "string",
              "name": "networkName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "description": "This Ip block country",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)",
              "fullType": "string",
              "name": "usage",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "How much clients would be hosted on those ips ?",
              "fullType": "long",
              "name": "estimatedClientsNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/ip"
    },
    {
      "description": "Order an IP block for your Private Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)",
              "fullType": "string",
              "name": "description",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "description": "The network ranges orderable",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "name": "size",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)",
              "fullType": "string",
              "name": "networkName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "description": "This Ip block country",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)",
              "fullType": "string",
              "name": "usage",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "How much clients would be hosted on those ips ?",
              "fullType": "long",
              "name": "estimatedClientsNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "description": "The network ranges orderable",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "name": "size",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)",
              "fullType": "string",
              "name": "networkName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "description": "This Ip block country",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)",
              "fullType": "string",
              "name": "usage",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "How much clients would be hosted on those ips ?",
              "fullType": "long",
              "name": "estimatedClientsNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/ip/{duration}"
    },
    {
      "description": "Enable windows templates (SPLA) in your Private Cloud",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/spla"
    },
    {
      "description": "Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'upgradeRessource' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "description": "The type of ressource you want to upgrade.",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "name": "upgradedRessourceType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)",
              "fullType": "long",
              "name": "upgradedRessourceId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "description": "The type of upgrade you want to process on the ressource(s)",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "name": "upgradeType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/upgradeRessource"
    },
    {
      "description": "Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "description": "The type of ressource you want to upgrade.",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "name": "upgradedRessourceType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)",
              "fullType": "long",
              "name": "upgradedRessourceId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "description": "The type of upgrade you want to process on the ressource(s)",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "name": "upgradeType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "description": "The type of ressource you want to upgrade.",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "name": "upgradedRessourceType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)",
              "fullType": "long",
              "name": "upgradedRessourceId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "description": "The type of upgrade you want to process on the ressource(s)",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "name": "upgradeType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}"
    },
    {
      "description": "Order VDI option in a given Datacenter",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "An avaiable ip from one of your Private Cloud public IP blocks",
              "fullType": "ip",
              "name": "firstPublicIpAddress",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Another avaiable ip from one of your Private Cloud public IP blocks",
              "fullType": "ip",
              "name": "secondPublicIpAddress",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Datacenter where the VDI option will be enabled",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "An avaiable ip from one of your Private Cloud public IP blocks",
              "fullType": "ip",
              "name": "firstPublicIpAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Another avaiable ip from one of your Private Cloud public IP blocks",
              "fullType": "ip",
              "name": "secondPublicIpAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Datacenter where the VDI option will be enabled",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/vdi"
    },
    {
      "description": "Operations about the DNS service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/dns",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/domain/zone"
    },
    {
      "description": "Order a new DNS zone",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/dns",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Create only mandatory records",
              "fullType": "boolean",
              "name": "minimized",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of the zone to create",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/dns",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Create only mandatory records",
              "fullType": "boolean",
              "name": "minimized",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of the zone to create",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/domain/zone/new"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cartServiceOption/dns/{serviceName}",
            "value": "DEPRECATED"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/domain/zone/{zoneName}"
    },
    {
      "description": "Order Anycast",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "POST /order/cartServiceOption/dns/{serviceName}",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'dnsAnycast' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/domain/zone/{zoneName}/dnsAnycast"
    },
    {
      "description": "Order Anycast",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "POST /order/cartServiceOption/dns/{serviceName}",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "POST /order/cartServiceOption/dns/{serviceName}",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/domain/zone/{zoneName}/dnsAnycast/{duration}"
    },
    {
      "description": "Operations about the MSSERVICES service",
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
      "path": "/order/email/exchange"
    },
    {
      "description": "Operations about the EXCHANGE service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/email/exchange/{organizationName}/service"
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}"
    },
    {
      "description": "Create an order for an exchange account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'account' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Number of Accounts to order",
              "fullType": "long",
              "name": "number",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "email.exchange.accountQuotaEnum",
              "description": "The storage quota for the account(s) in GB (default = 50)",
              "fullType": "email.exchange.accountQuotaEnum",
              "name": "storageQuota",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "email.exchange.OvhLicenceEnum",
              "description": "Licence type for the account",
              "fullType": "email.exchange.OvhLicenceEnum",
              "name": "licence",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/account"
    },
    {
      "description": "Create an order for an exchange account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Number of Accounts to order",
              "fullType": "long",
              "name": "number",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "email.exchange.accountQuotaEnum",
              "description": "The storage quota for the account(s) in GB (default = 50)",
              "fullType": "email.exchange.accountQuotaEnum",
              "name": "storageQuota",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "email.exchange.OvhLicenceEnum",
              "description": "Licence type for the account",
              "fullType": "email.exchange.OvhLicenceEnum",
              "name": "licence",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Number of Accounts to order",
              "fullType": "long",
              "name": "number",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "email.exchange.accountQuotaEnum",
              "description": "The storage quota for the account(s) in GB (default = 50)",
              "fullType": "email.exchange.accountQuotaEnum",
              "name": "storageQuota",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "email.exchange.OvhLicenceEnum",
              "description": "Licence type for the account",
              "fullType": "email.exchange.OvhLicenceEnum",
              "name": "licence",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}"
    },
    {
      "description": "Create an order to upgrade your hosted account storage",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'accountUpgrade' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.accountQuotaEnum",
              "description": "New storage quota for that account",
              "fullType": "email.exchange.accountQuotaEnum",
              "name": "newQuota",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The account you wish to upgrade",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade"
    },
    {
      "description": "Create an order to upgrade your hosted account storage",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.accountQuotaEnum",
              "description": "New storage quota for that account",
              "fullType": "email.exchange.accountQuotaEnum",
              "name": "newQuota",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The account you wish to upgrade",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.accountQuotaEnum",
              "description": "New storage quota for that account",
              "fullType": "email.exchange.accountQuotaEnum",
              "name": "newQuota",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The account you wish to upgrade",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}"
    },
    {
      "description": "Create an order for a additional 50GB of space (Exchange 2010 reseller only)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace"
    },
    {
      "description": "Create an order for a outlook licence.",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'outlook' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.OutlookVersionEnum",
              "description": "Outlook version",
              "fullType": "email.exchange.OutlookVersionEnum",
              "name": "licence",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Primary email address for account which You want to buy an outlook",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/outlook"
    },
    {
      "description": "Create an order for a outlook licence.",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.OutlookVersionEnum",
              "description": "Outlook version",
              "fullType": "email.exchange.OutlookVersionEnum",
              "name": "licence",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Primary email address for account which You want to buy an outlook",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.OutlookVersionEnum",
              "description": "Outlook version",
              "fullType": "email.exchange.OutlookVersionEnum",
              "name": "licence",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Primary email address for account which You want to buy an outlook",
              "fullType": "string",
              "name": "primaryEmailAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}"
    },
    {
      "description": "Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your exchange service",
              "fullType": "string",
              "name": "exchangeService",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade"
    },
    {
      "description": "Operations about the SQLPRIVE service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateSQL",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/privateDatabase"
    },
    {
      "description": "Order new private database",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateSQL",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "description": "Private database ram size",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "name": "ram",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "hosting.PrivateDatabase.DatacenterEnum",
              "description": "Datacenter to deploy this new private database",
              "fullType": "hosting.PrivateDatabase.DatacenterEnum",
              "name": "datacenter",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hosting.PrivateDatabase.OfferEnum",
              "description": "Type of offer to deploy this new private database",
              "fullType": "hosting.PrivateDatabase.OfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "description": "Private database available versions",
              "fullType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/privateDatabase/new"
    },
    {
      "description": "Order new private database",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateSQL",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "description": "Private database ram size",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "name": "ram",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "hosting.PrivateDatabase.DatacenterEnum",
              "description": "Datacenter to deploy this new private database",
              "fullType": "hosting.PrivateDatabase.DatacenterEnum",
              "name": "datacenter",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hosting.PrivateDatabase.OfferEnum",
              "description": "Type of offer to deploy this new private database",
              "fullType": "hosting.PrivateDatabase.OfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "description": "Private database available versions",
              "fullType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateSQL",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "description": "Private database ram size",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "name": "ram",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "hosting.PrivateDatabase.DatacenterEnum",
              "description": "Datacenter to deploy this new private database",
              "fullType": "hosting.PrivateDatabase.DatacenterEnum",
              "name": "datacenter",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "hosting.PrivateDatabase.OfferEnum",
              "description": "Type of offer to deploy this new private database",
              "fullType": "hosting.PrivateDatabase.OfferEnum",
              "name": "offer",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "description": "Private database available versions",
              "fullType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/hosting/privateDatabase/new/{duration}"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateSQL",
            "value": "DEPRECATED"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/privateDatabase/{serviceName}"
    },
    {
      "description": "Create an order for change ram size on your private database",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateSQL",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'ram' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "description": "Private database ram size",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "name": "ram",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/privateDatabase/{serviceName}/ram"
    },
    {
      "description": "Create an order for change ram size on your private database",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateSQL",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "description": "Private database ram size",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "name": "ram",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateSQL",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "description": "Private database ram size",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "name": "ram",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your private database",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/hosting/privateDatabase/{serviceName}/ram/{duration}"
    },
    {
      "description": "Operations about the HOSTING service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/web"
    },
    {
      "description": "Order a new hosting account",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.module.OrderableNameEnum",
              "description": "Module installation ready to use",
              "fullType": "hosting.web.module.OrderableNameEnum",
              "name": "module",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hosting.web.OfferEnum",
              "description": "Offer for your new hosting account",
              "fullType": "hosting.web.OfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Indicates that order will be processed with waiving retractation period",
              "fullType": "boolean",
              "name": "waiveRetractationPeriod",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain name which will be linked to this hosting account",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "hosting.web.DnsZoneEnum",
              "description": "Dns zone modification possibilities ( by default : RESET_ALL )",
              "fullType": "hosting.web.DnsZoneEnum",
              "name": "dnsZone",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/web/new"
    },
    {
      "description": "Order a new hosting account",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.module.OrderableNameEnum",
              "description": "Module installation ready to use",
              "fullType": "hosting.web.module.OrderableNameEnum",
              "name": "module",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hosting.web.OfferEnum",
              "description": "Offer for your new hosting account",
              "fullType": "hosting.web.OfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Indicates that order will be processed with waiving retractation period",
              "fullType": "boolean",
              "name": "waiveRetractationPeriod",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain name which will be linked to this hosting account",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "hosting.web.DnsZoneEnum",
              "description": "Dns zone modification possibilities ( by default : RESET_ALL )",
              "fullType": "hosting.web.DnsZoneEnum",
              "name": "dnsZone",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.module.OrderableNameEnum",
              "description": "Module installation ready to use",
              "fullType": "hosting.web.module.OrderableNameEnum",
              "name": "module",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "hosting.web.OfferEnum",
              "description": "Offer for your new hosting account",
              "fullType": "hosting.web.OfferEnum",
              "name": "offer",
              "paramType": "body",
              "required": true
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
              "description": "Domain name which will be linked to this hosting account",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "hosting.web.DnsZoneEnum",
              "description": "Dns zone modification possibilities ( by default : RESET_ALL )",
              "fullType": "hosting.web.DnsZoneEnum",
              "name": "dnsZone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/hosting/web/new/{duration}"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/web/{serviceName}"
    },
    {
      "description": "Order additional bandwidth",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'bandwidth' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.BandwidthOfferEnum",
              "description": "Available offers to increase bandwidth quota (unit: GB)",
              "fullType": "hosting.web.BandwidthOfferEnum",
              "name": "traffic",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/bandwidth"
    },
    {
      "description": "Order additional bandwidth",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.BandwidthOfferEnum",
              "description": "Available offers to increase bandwidth quota (unit: GB)",
              "fullType": "hosting.web.BandwidthOfferEnum",
              "name": "traffic",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.BandwidthOfferEnum",
              "description": "Available offers to increase bandwidth quota (unit: GB)",
              "fullType": "hosting.web.BandwidthOfferEnum",
              "name": "traffic",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/bandwidth/{duration}"
    },
    {
      "description": "Create an order for cdn option",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'cdn' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.CdnOfferEnum",
              "description": "Cdn offers you can add to your hosting",
              "fullType": "hosting.web.CdnOfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/cdn"
    },
    {
      "description": "Create an order for cdn option",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.CdnOfferEnum",
              "description": "Cdn offers you can add to your hosting",
              "fullType": "hosting.web.CdnOfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.CdnOfferEnum",
              "description": "Cdn offers you can add to your hosting",
              "fullType": "hosting.web.CdnOfferEnum",
              "name": "offer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/cdn/{duration}"
    },
    {
      "description": "Create an order for change the hosting main domain",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'changeMainDomain' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "New domain for change the main domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "hosting.web.order.MxPlanEnum",
              "description": "MX plan linked to the odl main domain",
              "fullType": "hosting.web.order.MxPlanEnum",
              "name": "mxplan",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/changeMainDomain"
    },
    {
      "description": "Create an order for change the hosting main domain",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "New domain for change the main domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "hosting.web.order.MxPlanEnum",
              "description": "MX plan linked to the odl main domain",
              "fullType": "hosting.web.order.MxPlanEnum",
              "name": "mxplan",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "New domain for change the main domain",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "hosting.web.order.MxPlanEnum",
              "description": "MX plan linked to the odl main domain",
              "fullType": "hosting.web.order.MxPlanEnum",
              "name": "mxplan",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/changeMainDomain/{duration}"
    },
    {
      "description": "Create an order for extra sql perso",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'extraSqlPerso' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.database.SqlPersoOfferEnum",
              "description": "Offers you can add to your hosting",
              "fullType": "hosting.web.database.SqlPersoOfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/extraSqlPerso"
    },
    {
      "description": "Create an order for extra sql perso",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.database.SqlPersoOfferEnum",
              "description": "Offers you can add to your hosting",
              "fullType": "hosting.web.database.SqlPersoOfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "hosting.web.database.SqlPersoOfferEnum",
              "description": "Offers you can add to your hosting",
              "fullType": "hosting.web.database.SqlPersoOfferEnum",
              "name": "offer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/extraSqlPerso/{duration}"
    },
    {
      "description": "Create an order for hosted ssl option",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'ssl' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/ssl"
    },
    {
      "description": "Create an order for hosted ssl option",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/ssl/{duration}"
    },
    {
      "description": "Create an order for upgrade your hosting account",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be processed with waiving retractation period",
              "fullType": "boolean",
              "name": "waiveRetractationPeriod",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hosting.web.OfferEnum",
              "description": "New offers for your hosting account",
              "fullType": "hosting.web.OfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "time",
              "description": "Upgrade start time if it implies a shutdown of the website during few minutes (Format \"HH:MM:ss\")",
              "fullType": "time",
              "name": "startTime",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/upgrade"
    },
    {
      "description": "Create an order for upgrade your hosting account",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be processed with waiving retractation period",
              "fullType": "boolean",
              "name": "waiveRetractationPeriod",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "hosting.web.OfferEnum",
              "description": "New offers for your hosting account",
              "fullType": "hosting.web.OfferEnum",
              "name": "offer",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "time",
              "description": "Upgrade start time if it implies a shutdown of the website during few minutes (Format \"HH:MM:ss\")",
              "fullType": "time",
              "name": "startTime",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/webHosting",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Indicates that order will be processed with waiving retractation period",
              "fullType": "boolean",
              "name": "waiveRetractationPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "hosting.web.OfferEnum",
              "description": "New offers for your hosting account",
              "fullType": "hosting.web.OfferEnum",
              "name": "offer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "time",
              "description": "Upgrade start time if it implies a shutdown of the website during few minutes (Format \"HH:MM:ss\")",
              "fullType": "time",
              "name": "startTime",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your hosting",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/hosting/web/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.CloudLinuxVersionEnum",
              "description": "This license version",
              "fullType": "license.CloudLinuxVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/cloudLinux/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.CloudLinuxVersionEnum",
              "description": "This license version",
              "fullType": "license.CloudLinuxVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.CloudLinuxVersionEnum",
              "description": "This license version",
              "fullType": "license.CloudLinuxVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/cloudLinux/new/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
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
      "path": "/order/license/cpanel"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/cpanel/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/cpanel/new/{duration}"
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
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/cpanel/{serviceName}"
    },
    {
      "description": "Upgrade this license version",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "Wanted new version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/cpanel/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license version",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "Wanted new version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "Wanted new version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/cpanel/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/directadmin/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/directadmin/new/{duration}"
    },
    {
      "description": "Create an order for an new office tenant",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Gift code for office license",
              "fullType": "string",
              "name": "giftCode",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of prepaid office business license",
              "fullType": "long",
              "name": "officeBusinessQuantity",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of prepaid office pro plus license",
              "fullType": "long",
              "name": "officeProPlusQuantity",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/office/new"
    },
    {
      "description": "Create an order for an new office tenant",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Gift code for office license",
              "fullType": "string",
              "name": "giftCode",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of prepaid office business license",
              "fullType": "long",
              "name": "officeBusinessQuantity",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of prepaid office pro plus license",
              "fullType": "long",
              "name": "officeProPlusQuantity",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Gift code for office license",
              "fullType": "string",
              "name": "giftCode",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of prepaid office business license",
              "fullType": "long",
              "name": "officeBusinessQuantity",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of prepaid office pro plus license",
              "fullType": "long",
              "name": "officeProPlusQuantity",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/office/new/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
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
      "path": "/order/license/plesk"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/plesk/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/plesk/new/{duration}"
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
              "description": "The name of your Plesk license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/plesk/{serviceName}"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableAntispamEnum",
              "description": "The antispam currently enabled on this Plesk License",
              "fullType": "license.OrderableAntispamEnum",
              "name": "antispam",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of your Plesk license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/plesk/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableAntispamEnum",
              "description": "The antispam currently enabled on this Plesk License",
              "fullType": "license.OrderableAntispamEnum",
              "name": "antispam",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of your Plesk license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderableAntispamEnum",
              "description": "The antispam currently enabled on this Plesk License",
              "fullType": "license.OrderableAntispamEnum",
              "name": "antispam",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "powerpack current activation state on your license",
              "fullType": "boolean",
              "name": "powerpack",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Reseller management option activation",
              "fullType": "boolean",
              "name": "resellerManagement",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of your Plesk license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/plesk/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
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
      "path": "/order/license/sqlserver"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/sqlserver/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/sqlserver/new/{duration}"
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
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/sqlserver/{serviceName}"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/sqlserver/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/sqlserver/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
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
      "path": "/order/license/virtuozzo"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/virtuozzo/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/virtuozzo/new/{duration}"
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
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/virtuozzo/{serviceName}"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/virtuozzo/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/virtuozzo/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
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
      "path": "/order/license/windows"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "This license version",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/windows/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "This license version",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "This license version",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/windows/new/{duration}"
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
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/windows/{serviceName}"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "The windows version you want to enable on your windows license",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/windows/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "The windows version you want to enable on your windows license",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "The windows version you want to enable on your windows license",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/windows/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Operations about the LICENSE service",
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
      "path": "/order/license/worklight"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.WorkLightVersionEnum",
              "description": "This license version",
              "fullType": "license.WorkLightVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Does your company have less than 1000 potential users",
              "fullType": "boolean",
              "name": "lessThan1000Users",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/worklight/new"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "license.WorkLightVersionEnum",
              "description": "This license version",
              "fullType": "license.WorkLightVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Does your company have less than 1000 potential users",
              "fullType": "boolean",
              "name": "lessThan1000Users",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "license.WorkLightVersionEnum",
              "description": "This license version",
              "fullType": "license.WorkLightVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Does your company have less than 1000 potential users",
              "fullType": "boolean",
              "name": "lessThan1000Users",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/worklight/new/{duration}"
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
              "description": "The name of your WorkLight license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/worklight/{serviceName}"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.WorkLightVersionEnum",
              "description": "This license version",
              "fullType": "license.WorkLightVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your WorkLight license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/worklight/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade this license with some given options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.WorkLightVersionEnum",
              "description": "This license version",
              "fullType": "license.WorkLightVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your WorkLight license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.WorkLightVersionEnum",
              "description": "This license version",
              "fullType": "license.WorkLightVersionEnum",
              "name": "version",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your WorkLight license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/worklight/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order router vpn",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your vrack",
              "fullType": "string",
              "name": "vrack",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/router/new"
    },
    {
      "description": "Order router vpn",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your vrack",
              "fullType": "string",
              "name": "vrack",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your vrack",
              "fullType": "string",
              "name": "vrack",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/router/new/{duration}"
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
              "description": "The dedicated service name",
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
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
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
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The dedicated service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
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
              "description": "The dedicated service name",
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
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
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
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The dedicated service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
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
          "responseType": "string[]"
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
          "responseType": "order.cart.GenericProductDefinition[]"
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
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
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
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The internal ID of Ceph service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/cephaas/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the SQLPRIVE service",
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
      "path": "/order/upgrade/cloudDB"
    },
    {
      "description": "Listing offers /order/upgrade/cloudDB",
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
              "description": "The internal ID of your cloudDB service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        }
      ],
      "path": "/order/upgrade/cloudDB/{domain}"
    },
    {
      "description": "Listing offers /order/upgrade/cloudDB/#serviceName#",
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
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your cloudDB service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The internal ID of your cloudDB service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/cloudDB/{domain}/{planCode}"
    },
    {
      "description": "Operations about the IPLB service",
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
      "path": "/order/upgrade/ipLoadbalancing"
    },
    {
      "description": "Listing offers /order/upgrade/ipLoadbalancing",
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
              "description": "The internal ID of your IPLB service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        }
      ],
      "path": "/order/upgrade/ipLoadbalancing/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/ipLoadbalancing/#serviceName#",
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
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your IPLB service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The internal ID of your IPLB service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}"
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
              "description": "The internal ID of your Plesk license service",
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
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
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
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The internal ID of your Plesk license service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
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
              "description": "The internal ID of your cPanel license service",
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
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
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
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The internal ID of your cPanel license service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/licensecPanel/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the DBAAS-LOGS service",
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
      "path": "/order/upgrade/logs"
    },
    {
      "description": "Listing offers /order/upgrade/logs",
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
              "description": "The internal ID of DBaaS Logs service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        }
      ],
      "path": "/order/upgrade/logs/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/logs/#serviceName#",
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
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of DBaaS Logs service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The internal ID of DBaaS Logs service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/logs/{serviceName}/{planCode}"
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
              "description": "The private cloud service name",
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
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
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
            },
            {
              "dataType": "string",
              "description": "The private cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The private cloud service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/privateCloud/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the SQLPRIVE service",
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
      "path": "/order/upgrade/privateSQL"
    },
    {
      "description": "Listing offers /order/upgrade/privateSQL",
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
              "description": "The internal ID of your private SQL service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        }
      ],
      "path": "/order/upgrade/privateSQL/{domain}"
    },
    {
      "description": "Listing offers /order/upgrade/privateSQL/#serviceName#",
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
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your private SQL service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The internal ID of your private SQL service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/privateSQL/{domain}/{planCode}"
    },
    {
      "description": "Operations about the VPS service",
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
              "description": "The internal ID of your VPS service",
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
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
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
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The internal ID of your VPS service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
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
              "description": "The VPS service name",
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
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
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
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The VPS service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/vpsAdditionalDisk/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the HOSTING service",
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
      "path": "/order/upgrade/webHosting"
    },
    {
      "description": "Listing offers /order/upgrade/webHosting",
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
              "description": "The internal ID of your webhosting service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]"
        }
      ],
      "path": "/order/upgrade/webHosting/{serviceName}"
    },
    {
      "description": "Listing offers /order/upgrade/webHosting/#serviceName#",
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
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal ID of your webhosting service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
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
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
              "paramType": "path",
              "required": true
            },
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
              "description": "The internal ID of your webhosting service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/webHosting/{serviceName}/{planCode}"
    },
    {
      "description": "Operations about the VEEAMCC service",
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
      "path": "/order/veeamCloudConnect"
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
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/veeamCloudConnect/{serviceName}"
    },
    {
      "description": "Order an upgrade upon your Veeam Cloud Connect account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "veeamCloudConnect.Offer",
              "description": "The offer on which you want to be upgraded",
              "fullType": "veeamCloudConnect.Offer",
              "name": "offer",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade"
    },
    {
      "description": "Order an upgrade upon your Veeam Cloud Connect account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "veeamCloudConnect.Offer",
              "description": "The offer on which you want to be upgraded",
              "fullType": "veeamCloudConnect.Offer",
              "name": "offer",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "veeamCloudConnect.Offer",
              "description": "The offer on which you want to be upgraded",
              "fullType": "veeamCloudConnect.Offer",
              "name": "offer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Operations about the VPS service",
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
      "path": "/order/vps"
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
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}"
    },
    {
      "description": "Order additional disk",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'additionalDisk' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "description": "Size of the additional disk",
              "fullType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "name": "additionalDiskSize",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}/additionalDisk"
    },
    {
      "description": "Order additional disk",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "description": "Size of the additional disk",
              "fullType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "name": "additionalDiskSize",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "description": "Size of the additional disk",
              "fullType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "name": "additionalDiskSize",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/additionalDisk/{duration}"
    },
    {
      "description": "Order Automated Backup Option (vps Cloud only)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'automatedBackup' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}/automatedBackup"
    },
    {
      "description": "Order Automated Backup Option (vps Cloud only)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/automatedBackup/{duration}"
    },
    {
      "description": "Create an order for a cPanel license",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/cpanel/new",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'cpanel' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}/cpanel"
    },
    {
      "description": "Create an order for a cPanel license",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/cpanel/new",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/cpanel/new",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/cpanel/{duration}"
    },
    {
      "description": "Order FtpBackup Option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'ftpbackup' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}/ftpbackup"
    },
    {
      "description": "Order FtpBackup Option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/ftpbackup/{duration}"
    },
    {
      "description": "Order Additional IP",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'ip' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.ip.GeolocationEnum",
              "description": "Choose a geolocation for your IP Address",
              "fullType": "vps.ip.GeolocationEnum",
              "name": "country",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of IPs to order",
              "fullType": "long",
              "name": "number",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}/ip"
    },
    {
      "description": "Order Additional IP",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.ip.GeolocationEnum",
              "description": "Choose a geolocation for your IP Address",
              "fullType": "vps.ip.GeolocationEnum",
              "name": "country",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of IPs to order",
              "fullType": "long",
              "name": "number",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.ip.GeolocationEnum",
              "description": "Choose a geolocation for your IP Address",
              "fullType": "vps.ip.GeolocationEnum",
              "name": "country",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of IPs to order",
              "fullType": "long",
              "name": "number",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/ip/{duration}"
    },
    {
      "description": "Create an order for a PLESK license",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/plesk/new",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'plesk' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.PleskLicenseDomainNumberEnum",
              "description": "Domain number you want to order a licence for",
              "fullType": "vps.PleskLicenseDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}/plesk"
    },
    {
      "description": "Create an order for a PLESK license",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/plesk/new",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.PleskLicenseDomainNumberEnum",
              "description": "Domain number you want to order a licence for",
              "fullType": "vps.PleskLicenseDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/plesk/new",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "vps.PleskLicenseDomainNumberEnum",
              "description": "Domain number you want to order a licence for",
              "fullType": "vps.PleskLicenseDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/plesk/{duration}"
    },
    {
      "description": "Order Snapshot Option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'snapshot' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}/snapshot"
    },
    {
      "description": "Order Snapshot Option",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/snapshot/{duration}"
    },
    {
      "description": "Order Upgrade",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Model",
              "fullType": "string",
              "name": "model",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}/upgrade"
    },
    {
      "description": "Order Upgrade",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Model",
              "fullType": "string",
              "name": "model",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Model",
              "fullType": "string",
              "name": "model",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order Veeam Option",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2016-01-08:00:00+01:00",
            "deprecatedDate": "2015-12-26T08:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/vps/{serviceName}/automatedBackup",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'veeam' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}/veeam"
    },
    {
      "description": "Order Veeam Option",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2016-01-08:00:00+01:00",
            "deprecatedDate": "2015-12-26T08:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/vps/{serviceName}/automatedBackup",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2016-01-08:00:00+01:00",
            "deprecatedDate": "2015-12-26T08:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/vps/{serviceName}/automatedBackup",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/veeam/{duration}"
    },
    {
      "description": "Order Windows Option (2015 only)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'windows' option",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vps/{serviceName}/windows"
    },
    {
      "description": "Order Windows Option (2015 only)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your VPS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/windows/{duration}"
    },
    {
      "description": "Operations about the VRACK service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2017-07-27T00:00:00+01:00",
            "deprecatedDate": "2017-06-27T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/vrack",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vrack"
    },
    {
      "description": "Order new vrack",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2017-07-27T00:00:00+01:00",
            "deprecatedDate": "2017-06-27T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/vrack",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Number of vrack you want to order",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2017-07-27T00:00:00+01:00",
            "deprecatedDate": "2017-06-27T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/vrack",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Number of vrack you want to order",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vrack/new"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2017-07-27T00:00:00+01:00",
            "deprecatedDate": "2017-06-27T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/vrack",
            "value": "DEPRECATED"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your vrack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vrack/{serviceName}"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "cdnanycast.OrderCacheRuleEnum": {
      "description": "Available number for cacheRule upgrade",
      "enum": [
        "100",
        "1000"
      ],
      "enumType": "long",
      "id": "OrderCacheRuleEnum",
      "namespace": "cdnanycast"
    },
    "cdnanycast.OrderQuotaEnum": {
      "description": "Available number for quota order",
      "enum": [
        "1",
        "10",
        "100",
        "1000"
      ],
      "enumType": "long",
      "id": "OrderQuotaEnum",
      "namespace": "cdnanycast"
    },
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
    "coreTypes.CountryEnum": {
      "description": "ISO country codes",
      "enum": [
        "ac",
        "ad",
        "ae",
        "af",
        "ag",
        "ai",
        "al",
        "am",
        "an",
        "ao",
        "aq",
        "ar",
        "as",
        "at",
        "au",
        "aw",
        "ax",
        "az",
        "ba",
        "bb",
        "bd",
        "be",
        "bf",
        "bg",
        "bh",
        "bi",
        "bj",
        "bl",
        "bm",
        "bn",
        "bo",
        "bq",
        "br",
        "bs",
        "bt",
        "bv",
        "bw",
        "by",
        "bz",
        "ca",
        "cc",
        "cd",
        "cf",
        "cg",
        "ch",
        "ci",
        "ck",
        "cl",
        "cm",
        "cn",
        "co",
        "cr",
        "cs",
        "cu",
        "cv",
        "cw",
        "cx",
        "cy",
        "cz",
        "de",
        "dj",
        "dk",
        "dm",
        "do",
        "dz",
        "ec",
        "ee",
        "eg",
        "eh",
        "er",
        "es",
        "et",
        "fc",
        "fd",
        "fi",
        "fj",
        "fk",
        "fm",
        "fo",
        "fr",
        "fx",
        "ga",
        "gb",
        "gd",
        "ge",
        "gf",
        "gg",
        "gh",
        "gi",
        "gl",
        "gm",
        "gn",
        "gp",
        "gq",
        "gr",
        "gs",
        "gt",
        "gu",
        "gw",
        "gy",
        "hk",
        "hm",
        "hn",
        "hr",
        "ht",
        "hu",
        "id",
        "ie",
        "il",
        "im",
        "in",
        "io",
        "iq",
        "ir",
        "is",
        "it",
        "je",
        "jm",
        "jo",
        "jp",
        "ke",
        "kg",
        "kh",
        "ki",
        "km",
        "kn",
        "kp",
        "kr",
        "kw",
        "ky",
        "kz",
        "la",
        "lb",
        "lc",
        "li",
        "lk",
        "lr",
        "ls",
        "lt",
        "lu",
        "lv",
        "ly",
        "ma",
        "mc",
        "md",
        "me",
        "mf",
        "mg",
        "mh",
        "mk",
        "ml",
        "mm",
        "mn",
        "mo",
        "mp",
        "mq",
        "mr",
        "ms",
        "mt",
        "mu",
        "mv",
        "mw",
        "mx",
        "my",
        "mz",
        "na",
        "nc",
        "ne",
        "nf",
        "ng",
        "ni",
        "nl",
        "no",
        "np",
        "nr",
        "nu",
        "nz",
        "om",
        "pa",
        "pe",
        "pf",
        "pg",
        "ph",
        "pk",
        "pl",
        "pm",
        "pn",
        "pr",
        "ps",
        "pt",
        "pw",
        "py",
        "qa",
        "qc",
        "re",
        "ro",
        "rs",
        "ru",
        "rw",
        "sa",
        "sb",
        "sc",
        "sd",
        "se",
        "sg",
        "sh",
        "si",
        "sj",
        "sk",
        "sl",
        "sm",
        "sn",
        "so",
        "sr",
        "ss",
        "st",
        "sv",
        "sx",
        "sy",
        "sz",
        "tc",
        "td",
        "tf",
        "tg",
        "th",
        "tj",
        "tk",
        "tl",
        "tm",
        "tn",
        "to",
        "tp",
        "tr",
        "tt",
        "tv",
        "tw",
        "tz",
        "ua",
        "ug",
        "uk",
        "um",
        "us",
        "uy",
        "uz",
        "va",
        "vc",
        "ve",
        "vg",
        "vi",
        "vn",
        "vu",
        "we",
        "wf",
        "ws",
        "ye",
        "yt",
        "yu",
        "za",
        "zm",
        "zw"
      ],
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "coreTypes"
    },
    "dedicated.NasHAOfferEnum": {
      "description": "ovh Nas HA offer",
      "enum": [
        "1200g",
        "13200g",
        "19200g",
        "2400g",
        "26400g",
        "3600g",
        "7200g"
      ],
      "enumType": "string",
      "id": "NasHAOfferEnum",
      "namespace": "dedicated"
    },
    "dedicated.NasHAZoneEnum": {
      "description": "Nas HA localization",
      "enum": [
        "bhs",
        "rbx",
        "sbg"
      ],
      "enumType": "string",
      "id": "NasHAZoneEnum",
      "namespace": "dedicated"
    },
    "dedicated.housing.HaRoutingOfferEnum": {
      "description": "Housing bay High Availablility offers",
      "enum": [
        "ha2x2",
        "ha2x4"
      ],
      "enumType": "string",
      "id": "HaRoutingOfferEnum",
      "namespace": "dedicated.housing"
    },
    "dedicated.server.BackupStorageCapacityEnum": {
      "description": "Different backup storage capacity in gigabytes",
      "enum": [
        "1000",
        "10000",
        "500",
        "5000"
      ],
      "enumType": "long",
      "id": "BackupStorageCapacityEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BandwidthOrderEnum": {
      "description": " Different Bandwidth orderable in Mbps",
      "enum": [
        "1000",
        "2000",
        "3000"
      ],
      "enumType": "long",
      "id": "BandwidthOrderEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BandwidthOrderTypeEnum": {
      "description": " Different Bandwidth type orderable",
      "enum": [
        "platinum",
        "premium",
        "ultimate"
      ],
      "enumType": "string",
      "id": "BandwidthOrderTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.BandwidthvRackOrderEnum": {
      "description": " Different vRack Bandwidth orderable in Mbps",
      "enum": [
        "1000",
        "3000"
      ],
      "enumType": "long",
      "id": "BandwidthvRackOrderEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.FirewallModelEnum": {
      "description": "Firewall model name",
      "enum": [
        "asa5505",
        "asa5510",
        "asa5520"
      ],
      "enumType": "string",
      "id": "FirewallModelEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpBlockSizeEnum": {
      "description": "IP block size",
      "enum": [
        "1",
        "128",
        "16",
        "256",
        "32",
        "4",
        "64",
        "8"
      ],
      "enumType": "long",
      "id": "IpBlockSizeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpCountryEnum": {
      "description": "Available localization for this static IP",
      "enum": [
        "au",
        "be",
        "ca",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "ie",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "sg",
        "uk",
        "us"
      ],
      "enumType": "coreTypes.CountryEnum",
      "id": "IpCountryEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpStaticCountryEnum": {
      "description": "Available localization for this static IP",
      "enum": [
        "be",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "ie",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "uk"
      ],
      "enumType": "string",
      "id": "IpStaticCountryEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.IpTypeOrderableEnum": {
      "description": "Orderable IP type",
      "enum": [
        "failover",
        "static",
        "unshielded"
      ],
      "enumType": "string",
      "id": "IpTypeOrderableEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.OrderableSysFeatureEnum": {
      "description": "Dedicated server orderable features",
      "enum": [
        "backupProtocol",
        "monitoring"
      ],
      "enumType": "string",
      "id": "OrderableSysFeatureEnum",
      "namespace": "dedicated.server"
    },
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
    "dedicated.server.TrafficOrderEnum": {
      "description": " traffic orderable ",
      "enum": [
        "100Mbps-Unlimited",
        "250Mbps-Unlimited",
        "500Mbps-Unlimited"
      ],
      "enumType": "string",
      "id": "TrafficOrderEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.UsbKeyCapacityEnum": {
      "description": " Different USB key capacity in gigabytes",
      "enum": [
        "128",
        "16",
        "256",
        "32",
        "64"
      ],
      "enumType": "long",
      "id": "UsbKeyCapacityEnum",
      "namespace": "dedicated.server"
    },
    "dedicatedCloud.AdditionalBandwidthEnum": {
      "description": "All available additional bandwidth amounts in Mbps",
      "enum": [
        "1500"
      ],
      "enumType": "string",
      "id": "AdditionalBandwidthEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.IpCountriesEnum": {
      "description": "All countries in which an Ip Block may be ordered",
      "enum": [
        "be",
        "ca",
        "ch",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "gb",
        "ie",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "us"
      ],
      "enumType": "coreTypes.CountryEnum",
      "id": "IpCountriesEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.OrderableIpBlockRangeEnum": {
      "description": "All orderable IP Block ranges in your Dedicated Cloud",
      "enum": [
        "24",
        "25",
        "26",
        "27",
        "28"
      ],
      "enumType": "string",
      "id": "OrderableIpBlockRangeEnum",
      "namespace": "dedicatedCloud"
    },
    "dedicatedCloud.ressources.UpgradeRessourceTypeEnum": {
      "description": "The Dedicated Cloud ressource types that can be upgraded",
      "enum": [
        "account",
        "all",
        "filer",
        "host"
      ],
      "enumType": "string",
      "id": "UpgradeRessourceTypeEnum",
      "namespace": "dedicatedCloud.ressources"
    },
    "dedicatedCloud.ressources.UpgradeTypeEnum": {
      "description": "The available billing type upgrade for Dedicated Cloud ressource",
      "enum": [
        "demoToMonthly",
        "freeSpareToHourly",
        "hourlyToMonthly"
      ],
      "enumType": "string",
      "id": "UpgradeTypeEnum",
      "namespace": "dedicatedCloud.ressources"
    },
    "email.exchange.OutlookVersionEnum": {
      "description": "Outlook version",
      "enum": [
        "mac_x86_2011",
        "mac_x86_2016",
        "windows_x64_2013",
        "windows_x64_2016",
        "windows_x86_2013",
        "windows_x86_2016"
      ],
      "enumType": "string",
      "id": "OutlookVersionEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.OvhLicenceEnum": {
      "description": "OVH licence account",
      "enum": [
        "basic",
        "enterprise",
        "standard"
      ],
      "enumType": "string",
      "id": "OvhLicenceEnum",
      "namespace": "email.exchange"
    },
    "email.exchange.accountQuotaEnum": {
      "description": "Storage quota options in GB",
      "enum": [
        "300",
        "50"
      ],
      "enumType": "long",
      "id": "accountQuotaEnum",
      "namespace": "email.exchange"
    },
    "hosting.PrivateDatabase.AvailableRamSizeEnum": {
      "description": "Private database available ram sizes",
      "enum": [
        "1024",
        "2048",
        "4096",
        "512"
      ],
      "enumType": "string",
      "id": "AvailableRamSizeEnum",
      "namespace": "hosting.PrivateDatabase"
    },
    "hosting.PrivateDatabase.DatacenterEnum": {
      "description": "Available datacenters",
      "enum": [
        "bhs1",
        "gra1",
        "gra2",
        "p19"
      ],
      "enumType": "string",
      "id": "DatacenterEnum",
      "namespace": "hosting.PrivateDatabase"
    },
    "hosting.PrivateDatabase.OfferEnum": {
      "description": "Available offers",
      "enum": [
        "classic",
        "public"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "hosting.PrivateDatabase"
    },
    "hosting.PrivateDatabase.OrderableVersionEnum": {
      "description": "Private database orderable versions",
      "enum": [
        "mariadb_10.1",
        "mariadb_10.2",
        "mariadb_10.3",
        "mariadb_10.4",
        "mariadb_10.5",
        "mongodb_3.4",
        "mongodb_4.0",
        "mysql_5.5",
        "mysql_5.6",
        "mysql_5.7",
        "mysql_8.0",
        "postgresql_10",
        "postgresql_11",
        "postgresql_12",
        "postgresql_9.4",
        "postgresql_9.5",
        "postgresql_9.6",
        "redis_3.2",
        "redis_4.0"
      ],
      "enumType": "string",
      "id": "OrderableVersionEnum",
      "namespace": "hosting.PrivateDatabase"
    },
    "hosting.web.BandwidthOfferEnum": {
      "description": "Available offers to increase bandwidth quota (unit in GB)",
      "enum": [
        "10",
        "100",
        "1000",
        "10000",
        "20",
        "250",
        "30",
        "40",
        "50",
        "500"
      ],
      "enumType": "long",
      "id": "BandwidthOfferEnum",
      "namespace": "hosting.web"
    },
    "hosting.web.CdnOfferEnum": {
      "description": "Hosting's CDN offer",
      "enum": [
        "CDN_BUSINESS",
        "CDN_BUSINESS_FREE"
      ],
      "enumType": "string",
      "id": "CdnOfferEnum",
      "namespace": "hosting.web"
    },
    "hosting.web.DnsZoneEnum": {
      "description": "Dns zone modification possibilities when installing a new hosting",
      "enum": [
        "NO_CHANGE",
        "RESET_ALL",
        "RESET_ONLY_A",
        "RESET_ONLY_MX"
      ],
      "enumType": "string",
      "id": "DnsZoneEnum",
      "namespace": "hosting.web"
    },
    "hosting.web.OfferEnum": {
      "description": "Hosting's offer",
      "enum": [
        "CLOUDWEB_1",
        "CLOUDWEB_2",
        "CLOUDWEB_3",
        "KS",
        "PERFORMANCE_1",
        "PERFORMANCE_2",
        "PERFORMANCE_3",
        "PERFORMANCE_4",
        "PERSO",
        "PRO",
        "START"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "hosting.web"
    },
    "hosting.web.database.SqlPersoOfferEnum": {
      "description": "Sql perso's offer enum",
      "enum": [
        "SQLPERSO_1_BASES_400_MB",
        "SQLPERSO_1_BASES_800_MB",
        "SQLPERSO_20_BASES_100_MB",
        "SQLPERSO_20_BASES_200_MB",
        "SQLPERSO_2_BASES_400_MB",
        "SQLPERSO_2_BASES_800_MB",
        "SQLPERSO_50_BASES_100_MB",
        "SQLPERSO_50_BASES_200_MB",
        "SQLPERSO_5_BASES_100_MB",
        "SQLPERSO_5_BASES_200_MB",
        "SQLPERSO_5_BASES_400_MB",
        "SQLPERSO_5_BASES_800_MB"
      ],
      "enumType": "string",
      "id": "SqlPersoOfferEnum",
      "namespace": "hosting.web.database"
    },
    "hosting.web.module.OrderableNameEnum": {
      "description": "Module's name orderable when order a new hosting",
      "enum": [
        "DRUPAL",
        "JOOMLA",
        "PRESTASHOP",
        "WORDPRESS"
      ],
      "enumType": "string",
      "id": "OrderableNameEnum",
      "namespace": "hosting.web.module"
    },
    "hosting.web.order.MxPlanEnum": {
      "description": "MX plan linked to the new main domain",
      "enum": [
        "005",
        "025",
        "100",
        "delete",
        "full"
      ],
      "enumType": "string",
      "id": "MxPlanEnum",
      "namespace": "hosting.web.order"
    },
    "license.CloudLinuxVersionEnum": {
      "description": "All versions for CloudLinux product",
      "enum": [
        "SINGLE",
        "WITH_CPANEL",
        "WITH_PLESK12",
        "cloudlinux-license"
      ],
      "enumType": "string",
      "id": "CloudLinuxVersionEnum",
      "namespace": "license"
    },
    "license.LicenseTypeEnum": {
      "description": "Possible values for license type",
      "enum": [
        "dedicated",
        "dedicatedCloud",
        "dedicatedFailover",
        "failover",
        "vm",
        "vps",
        "vps_ceph",
        "vps_classic",
        "vps_cloud",
        "vps_cloud_2016",
        "vps_ssd"
      ],
      "enumType": "string",
      "id": "LicenseTypeEnum",
      "namespace": "license"
    },
    "license.OrderableAntispamEnum": {
      "description": "All antispam available for Plesk products",
      "enum": [
        "SPAM_ASSASSIN"
      ],
      "enumType": "string",
      "id": "OrderableAntispamEnum",
      "namespace": "license"
    },
    "license.OrderableAntivirusEnum": {
      "description": "All antivirus available for Plesk products",
      "enum": [
        "DR_WEB",
        "KASPERSKY_UNLIMITED_MAILBOXES",
        "kaspersky"
      ],
      "enumType": "string",
      "id": "OrderableAntivirusEnum",
      "namespace": "license"
    },
    "license.OrderableCpanelVersionEnum": {
      "description": "All versions available for Cpanel products",
      "enum": [
        "VERSION_11_FOR_LINUX",
        "VERSION_11_FOR_VIRTUOZZO",
        "VERSION_11_FOR_VPS",
        "cpanel-license-premier-cloud-1000-accounts",
        "cpanel-license-premier-cloud-10000-accounts",
        "cpanel-license-premier-cloud-1100-accounts",
        "cpanel-license-premier-cloud-1200-accounts",
        "cpanel-license-premier-cloud-1300-accounts",
        "cpanel-license-premier-cloud-1400-accounts",
        "cpanel-license-premier-cloud-1500-accounts",
        "cpanel-license-premier-cloud-1600-accounts",
        "cpanel-license-premier-cloud-1700-accounts",
        "cpanel-license-premier-cloud-1800-accounts",
        "cpanel-license-premier-cloud-1900-accounts",
        "cpanel-license-premier-cloud-2000-accounts",
        "cpanel-license-premier-cloud-2100-accounts",
        "cpanel-license-premier-cloud-2200-accounts",
        "cpanel-license-premier-cloud-2300-accounts",
        "cpanel-license-premier-cloud-2400-accounts",
        "cpanel-license-premier-cloud-2500-accounts",
        "cpanel-license-premier-cloud-2600-accounts",
        "cpanel-license-premier-cloud-2700-accounts",
        "cpanel-license-premier-cloud-2800-accounts",
        "cpanel-license-premier-cloud-2900-accounts",
        "cpanel-license-premier-cloud-300-accounts",
        "cpanel-license-premier-cloud-3000-accounts",
        "cpanel-license-premier-cloud-3100-accounts",
        "cpanel-license-premier-cloud-3200-accounts",
        "cpanel-license-premier-cloud-3300-accounts",
        "cpanel-license-premier-cloud-3400-accounts",
        "cpanel-license-premier-cloud-3500-accounts",
        "cpanel-license-premier-cloud-3600-accounts",
        "cpanel-license-premier-cloud-3700-accounts",
        "cpanel-license-premier-cloud-3800-accounts",
        "cpanel-license-premier-cloud-3900-accounts",
        "cpanel-license-premier-cloud-400-accounts",
        "cpanel-license-premier-cloud-4000-accounts",
        "cpanel-license-premier-cloud-4100-accounts",
        "cpanel-license-premier-cloud-4200-accounts",
        "cpanel-license-premier-cloud-4300-accounts",
        "cpanel-license-premier-cloud-4400-accounts",
        "cpanel-license-premier-cloud-4500-accounts",
        "cpanel-license-premier-cloud-4600-accounts",
        "cpanel-license-premier-cloud-4700-accounts",
        "cpanel-license-premier-cloud-4800-accounts",
        "cpanel-license-premier-cloud-4900-accounts",
        "cpanel-license-premier-cloud-500-accounts",
        "cpanel-license-premier-cloud-5000-accounts",
        "cpanel-license-premier-cloud-5100-accounts",
        "cpanel-license-premier-cloud-5200-accounts",
        "cpanel-license-premier-cloud-5300-accounts",
        "cpanel-license-premier-cloud-5400-accounts",
        "cpanel-license-premier-cloud-5500-accounts",
        "cpanel-license-premier-cloud-5600-accounts",
        "cpanel-license-premier-cloud-5700-accounts",
        "cpanel-license-premier-cloud-5800-accounts",
        "cpanel-license-premier-cloud-5900-accounts",
        "cpanel-license-premier-cloud-600-accounts",
        "cpanel-license-premier-cloud-6000-accounts",
        "cpanel-license-premier-cloud-6100-accounts",
        "cpanel-license-premier-cloud-6200-accounts",
        "cpanel-license-premier-cloud-6300-accounts",
        "cpanel-license-premier-cloud-6400-accounts",
        "cpanel-license-premier-cloud-6500-accounts",
        "cpanel-license-premier-cloud-6600-accounts",
        "cpanel-license-premier-cloud-6700-accounts",
        "cpanel-license-premier-cloud-6800-accounts",
        "cpanel-license-premier-cloud-6900-accounts",
        "cpanel-license-premier-cloud-700-accounts",
        "cpanel-license-premier-cloud-7000-accounts",
        "cpanel-license-premier-cloud-7100-accounts",
        "cpanel-license-premier-cloud-7200-accounts",
        "cpanel-license-premier-cloud-7300-accounts",
        "cpanel-license-premier-cloud-7400-accounts",
        "cpanel-license-premier-cloud-7500-accounts",
        "cpanel-license-premier-cloud-7600-accounts",
        "cpanel-license-premier-cloud-7700-accounts",
        "cpanel-license-premier-cloud-7800-accounts",
        "cpanel-license-premier-cloud-7900-accounts",
        "cpanel-license-premier-cloud-800-accounts",
        "cpanel-license-premier-cloud-8000-accounts",
        "cpanel-license-premier-cloud-8100-accounts",
        "cpanel-license-premier-cloud-8200-accounts",
        "cpanel-license-premier-cloud-8300-accounts",
        "cpanel-license-premier-cloud-8400-accounts",
        "cpanel-license-premier-cloud-8500-accounts",
        "cpanel-license-premier-cloud-8600-accounts",
        "cpanel-license-premier-cloud-8700-accounts",
        "cpanel-license-premier-cloud-8800-accounts",
        "cpanel-license-premier-cloud-8900-accounts",
        "cpanel-license-premier-cloud-900-accounts",
        "cpanel-license-premier-cloud-9000-accounts",
        "cpanel-license-premier-cloud-9100-accounts",
        "cpanel-license-premier-cloud-9200-accounts",
        "cpanel-license-premier-cloud-9300-accounts",
        "cpanel-license-premier-cloud-9400-accounts",
        "cpanel-license-premier-cloud-9500-accounts",
        "cpanel-license-premier-cloud-9600-accounts",
        "cpanel-license-premier-cloud-9700-accounts",
        "cpanel-license-premier-cloud-9800-accounts",
        "cpanel-license-premier-cloud-9900-accounts",
        "cpanel-license-premier-metal-1000-accounts",
        "cpanel-license-premier-metal-10000-accounts",
        "cpanel-license-premier-metal-1100-accounts",
        "cpanel-license-premier-metal-1200-accounts",
        "cpanel-license-premier-metal-1300-accounts",
        "cpanel-license-premier-metal-1400-accounts",
        "cpanel-license-premier-metal-1500-accounts",
        "cpanel-license-premier-metal-1600-accounts",
        "cpanel-license-premier-metal-1700-accounts",
        "cpanel-license-premier-metal-1800-accounts",
        "cpanel-license-premier-metal-1900-accounts",
        "cpanel-license-premier-metal-2000-accounts",
        "cpanel-license-premier-metal-2100-accounts",
        "cpanel-license-premier-metal-2200-accounts",
        "cpanel-license-premier-metal-2300-accounts",
        "cpanel-license-premier-metal-2400-accounts",
        "cpanel-license-premier-metal-2500-accounts",
        "cpanel-license-premier-metal-2600-accounts",
        "cpanel-license-premier-metal-2700-accounts",
        "cpanel-license-premier-metal-2800-accounts",
        "cpanel-license-premier-metal-2900-accounts",
        "cpanel-license-premier-metal-300-accounts",
        "cpanel-license-premier-metal-3000-accounts",
        "cpanel-license-premier-metal-3100-accounts",
        "cpanel-license-premier-metal-3200-accounts",
        "cpanel-license-premier-metal-3300-accounts",
        "cpanel-license-premier-metal-3400-accounts",
        "cpanel-license-premier-metal-3500-accounts",
        "cpanel-license-premier-metal-3600-accounts",
        "cpanel-license-premier-metal-3700-accounts",
        "cpanel-license-premier-metal-3800-accounts",
        "cpanel-license-premier-metal-3900-accounts",
        "cpanel-license-premier-metal-400-accounts",
        "cpanel-license-premier-metal-4000-accounts",
        "cpanel-license-premier-metal-4100-accounts",
        "cpanel-license-premier-metal-4200-accounts",
        "cpanel-license-premier-metal-4300-accounts",
        "cpanel-license-premier-metal-4400-accounts",
        "cpanel-license-premier-metal-4500-accounts",
        "cpanel-license-premier-metal-4600-accounts",
        "cpanel-license-premier-metal-4700-accounts",
        "cpanel-license-premier-metal-4800-accounts",
        "cpanel-license-premier-metal-4900-accounts",
        "cpanel-license-premier-metal-500-accounts",
        "cpanel-license-premier-metal-5000-accounts",
        "cpanel-license-premier-metal-5100-accounts",
        "cpanel-license-premier-metal-5200-accounts",
        "cpanel-license-premier-metal-5300-accounts",
        "cpanel-license-premier-metal-5400-accounts",
        "cpanel-license-premier-metal-5500-accounts",
        "cpanel-license-premier-metal-5600-accounts",
        "cpanel-license-premier-metal-5700-accounts",
        "cpanel-license-premier-metal-5800-accounts",
        "cpanel-license-premier-metal-5900-accounts",
        "cpanel-license-premier-metal-600-accounts",
        "cpanel-license-premier-metal-6000-accounts",
        "cpanel-license-premier-metal-6100-accounts",
        "cpanel-license-premier-metal-6200-accounts",
        "cpanel-license-premier-metal-6300-accounts",
        "cpanel-license-premier-metal-6400-accounts",
        "cpanel-license-premier-metal-6500-accounts",
        "cpanel-license-premier-metal-6600-accounts",
        "cpanel-license-premier-metal-6700-accounts",
        "cpanel-license-premier-metal-6800-accounts",
        "cpanel-license-premier-metal-6900-accounts",
        "cpanel-license-premier-metal-700-accounts",
        "cpanel-license-premier-metal-7000-accounts",
        "cpanel-license-premier-metal-7100-accounts",
        "cpanel-license-premier-metal-7200-accounts",
        "cpanel-license-premier-metal-7300-accounts",
        "cpanel-license-premier-metal-7400-accounts",
        "cpanel-license-premier-metal-7500-accounts",
        "cpanel-license-premier-metal-7600-accounts",
        "cpanel-license-premier-metal-7700-accounts",
        "cpanel-license-premier-metal-7800-accounts",
        "cpanel-license-premier-metal-7900-accounts",
        "cpanel-license-premier-metal-800-accounts",
        "cpanel-license-premier-metal-8000-accounts",
        "cpanel-license-premier-metal-8100-accounts",
        "cpanel-license-premier-metal-8200-accounts",
        "cpanel-license-premier-metal-8300-accounts",
        "cpanel-license-premier-metal-8400-accounts",
        "cpanel-license-premier-metal-8500-accounts",
        "cpanel-license-premier-metal-8600-accounts",
        "cpanel-license-premier-metal-8700-accounts",
        "cpanel-license-premier-metal-8800-accounts",
        "cpanel-license-premier-metal-8900-accounts",
        "cpanel-license-premier-metal-900-accounts",
        "cpanel-license-premier-metal-9000-accounts",
        "cpanel-license-premier-metal-9100-accounts",
        "cpanel-license-premier-metal-9200-accounts",
        "cpanel-license-premier-metal-9300-accounts",
        "cpanel-license-premier-metal-9400-accounts",
        "cpanel-license-premier-metal-9500-accounts",
        "cpanel-license-premier-metal-9600-accounts",
        "cpanel-license-premier-metal-9700-accounts",
        "cpanel-license-premier-metal-9800-accounts",
        "cpanel-license-premier-metal-9900-accounts",
        "cpanel-license-version-11",
        "cpanel-license-version-11-for-virtuozzo",
        "cpanel-license-version-11-for-vps",
        "version-admin-cloud",
        "version-premier-cloud-100",
        "version-premier-cloud-1000",
        "version-premier-cloud-10000",
        "version-premier-cloud-1100",
        "version-premier-cloud-1200",
        "version-premier-cloud-1300",
        "version-premier-cloud-1400",
        "version-premier-cloud-1500",
        "version-premier-cloud-1600",
        "version-premier-cloud-1700",
        "version-premier-cloud-1800",
        "version-premier-cloud-1900",
        "version-premier-cloud-200",
        "version-premier-cloud-2000",
        "version-premier-cloud-2100",
        "version-premier-cloud-2200",
        "version-premier-cloud-2300",
        "version-premier-cloud-2400",
        "version-premier-cloud-2500",
        "version-premier-cloud-2600",
        "version-premier-cloud-2700",
        "version-premier-cloud-2800",
        "version-premier-cloud-2900",
        "version-premier-cloud-300",
        "version-premier-cloud-3000",
        "version-premier-cloud-3100",
        "version-premier-cloud-3200",
        "version-premier-cloud-3300",
        "version-premier-cloud-3400",
        "version-premier-cloud-3500",
        "version-premier-cloud-3600",
        "version-premier-cloud-3700",
        "version-premier-cloud-3800",
        "version-premier-cloud-3900",
        "version-premier-cloud-400",
        "version-premier-cloud-4000",
        "version-premier-cloud-4100",
        "version-premier-cloud-4200",
        "version-premier-cloud-4300",
        "version-premier-cloud-4400",
        "version-premier-cloud-4500",
        "version-premier-cloud-4600",
        "version-premier-cloud-4700",
        "version-premier-cloud-4800",
        "version-premier-cloud-4900",
        "version-premier-cloud-500",
        "version-premier-cloud-5000",
        "version-premier-cloud-5100",
        "version-premier-cloud-5200",
        "version-premier-cloud-5300",
        "version-premier-cloud-5400",
        "version-premier-cloud-5500",
        "version-premier-cloud-5600",
        "version-premier-cloud-5700",
        "version-premier-cloud-5800",
        "version-premier-cloud-5900",
        "version-premier-cloud-600",
        "version-premier-cloud-6000",
        "version-premier-cloud-6100",
        "version-premier-cloud-6200",
        "version-premier-cloud-6300",
        "version-premier-cloud-6400",
        "version-premier-cloud-6500",
        "version-premier-cloud-6600",
        "version-premier-cloud-6700",
        "version-premier-cloud-6800",
        "version-premier-cloud-6900",
        "version-premier-cloud-700",
        "version-premier-cloud-7000",
        "version-premier-cloud-7100",
        "version-premier-cloud-7200",
        "version-premier-cloud-7300",
        "version-premier-cloud-7400",
        "version-premier-cloud-7500",
        "version-premier-cloud-7600",
        "version-premier-cloud-7700",
        "version-premier-cloud-7800",
        "version-premier-cloud-7900",
        "version-premier-cloud-800",
        "version-premier-cloud-8000",
        "version-premier-cloud-8100",
        "version-premier-cloud-8200",
        "version-premier-cloud-8300",
        "version-premier-cloud-8400",
        "version-premier-cloud-8500",
        "version-premier-cloud-8600",
        "version-premier-cloud-8700",
        "version-premier-cloud-8800",
        "version-premier-cloud-8900",
        "version-premier-cloud-900",
        "version-premier-cloud-9000",
        "version-premier-cloud-9100",
        "version-premier-cloud-9200",
        "version-premier-cloud-9300",
        "version-premier-cloud-9400",
        "version-premier-cloud-9500",
        "version-premier-cloud-9600",
        "version-premier-cloud-9700",
        "version-premier-cloud-9800",
        "version-premier-cloud-9900",
        "version-premier-metal-1000",
        "version-premier-metal-10000",
        "version-premier-metal-1100",
        "version-premier-metal-1200",
        "version-premier-metal-1300",
        "version-premier-metal-1400",
        "version-premier-metal-1500",
        "version-premier-metal-1600",
        "version-premier-metal-1700",
        "version-premier-metal-1800",
        "version-premier-metal-1900",
        "version-premier-metal-2000",
        "version-premier-metal-2100",
        "version-premier-metal-2200",
        "version-premier-metal-2300",
        "version-premier-metal-2400",
        "version-premier-metal-2500",
        "version-premier-metal-2600",
        "version-premier-metal-2700",
        "version-premier-metal-2800",
        "version-premier-metal-2900",
        "version-premier-metal-300",
        "version-premier-metal-3000",
        "version-premier-metal-3100",
        "version-premier-metal-3200",
        "version-premier-metal-3300",
        "version-premier-metal-3400",
        "version-premier-metal-3500",
        "version-premier-metal-3600",
        "version-premier-metal-3700",
        "version-premier-metal-3800",
        "version-premier-metal-3900",
        "version-premier-metal-400",
        "version-premier-metal-4000",
        "version-premier-metal-4100",
        "version-premier-metal-4200",
        "version-premier-metal-4300",
        "version-premier-metal-4400",
        "version-premier-metal-4500",
        "version-premier-metal-4600",
        "version-premier-metal-4700",
        "version-premier-metal-4800",
        "version-premier-metal-4900",
        "version-premier-metal-500",
        "version-premier-metal-5000",
        "version-premier-metal-5100",
        "version-premier-metal-5200",
        "version-premier-metal-5300",
        "version-premier-metal-5400",
        "version-premier-metal-5500",
        "version-premier-metal-5600",
        "version-premier-metal-5700",
        "version-premier-metal-5800",
        "version-premier-metal-5900",
        "version-premier-metal-600",
        "version-premier-metal-6000",
        "version-premier-metal-6100",
        "version-premier-metal-6200",
        "version-premier-metal-6300",
        "version-premier-metal-6400",
        "version-premier-metal-6500",
        "version-premier-metal-6600",
        "version-premier-metal-6700",
        "version-premier-metal-6800",
        "version-premier-metal-6900",
        "version-premier-metal-700",
        "version-premier-metal-7000",
        "version-premier-metal-7100",
        "version-premier-metal-7200",
        "version-premier-metal-7300",
        "version-premier-metal-7400",
        "version-premier-metal-7500",
        "version-premier-metal-7600",
        "version-premier-metal-7700",
        "version-premier-metal-7800",
        "version-premier-metal-7900",
        "version-premier-metal-800",
        "version-premier-metal-8000",
        "version-premier-metal-8100",
        "version-premier-metal-8200",
        "version-premier-metal-8300",
        "version-premier-metal-8400",
        "version-premier-metal-8500",
        "version-premier-metal-8600",
        "version-premier-metal-8700",
        "version-premier-metal-8800",
        "version-premier-metal-8900",
        "version-premier-metal-900",
        "version-premier-metal-9000",
        "version-premier-metal-9100",
        "version-premier-metal-9200",
        "version-premier-metal-9300",
        "version-premier-metal-9400",
        "version-premier-metal-9500",
        "version-premier-metal-9600",
        "version-premier-metal-9700",
        "version-premier-metal-9800",
        "version-premier-metal-9900",
        "version-pro-cloud",
        "version-solo-cloud",
        "version-solo-metal"
      ],
      "enumType": "string",
      "id": "OrderableCpanelVersionEnum",
      "namespace": "license"
    },
    "license.OrderableDirectAdminVersionEnum": {
      "description": "All versions available for DirectAdmin products",
      "enum": [
        "DIRECTADMIN_1",
        "directadmin-license"
      ],
      "enumType": "string",
      "id": "OrderableDirectAdminVersionEnum",
      "namespace": "license"
    },
    "license.OrderablePleskDomainNumberEnum": {
      "description": "All domain available for Plesk products",
      "enum": [
        "10",
        "100",
        "30",
        "300",
        "hostingsuite",
        "unlimited"
      ],
      "enumType": "string",
      "id": "OrderablePleskDomainNumberEnum",
      "namespace": "license"
    },
    "license.OrderablePleskLanguagePackEnum": {
      "description": "All language pack numbers available for Plesk products",
      "enum": [
        "1",
        "1-extra-language-for-plesk12",
        "2",
        "2-extra-languages-for-plesk12",
        "3",
        "3-extra-languages-for-plesk12",
        "4",
        "4-extra-languages-for-plesk12",
        "5",
        "5-extra-languages-for-plesk12",
        "unlimited",
        "unlimited-extra-languages-for-plesk12"
      ],
      "enumType": "string",
      "id": "OrderablePleskLanguagePackEnum",
      "namespace": "license"
    },
    "license.OrderableVirtuozzoContainerNumberEnum": {
      "description": "All quantities of container available for a Virtuozzo license",
      "enum": [
        "2_CPU_001_CONTAINER",
        "2_CPU_003_CONTAINER",
        "2_CPU_010_CONTAINER",
        "2_CPU_030_CONTAINER",
        "2_CPU_060_CONTAINER",
        "2_CPU_100_CONTAINER"
      ],
      "enumType": "string",
      "id": "OrderableVirtuozzoContainerNumberEnum",
      "namespace": "license"
    },
    "license.OrderableVirtuozzoVersionEnum": {
      "description": "All versions available for Virtuozzo products",
      "enum": [
        "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
        "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS",
        "virtuozzo-4",
        "virtuozzo-4-for-windows"
      ],
      "enumType": "string",
      "id": "OrderableVirtuozzoVersionEnum",
      "namespace": "license"
    },
    "license.PleskApplicationSetEnum": {
      "description": "Application set available for Plesk products",
      "enum": [
        "applicationpack",
        "developerpack",
        "power-pack-for-plesk12",
        "powerpack"
      ],
      "enumType": "string",
      "id": "PleskApplicationSetEnum",
      "namespace": "license"
    },
    "license.PleskVersionEnum": {
      "description": "All versions available for Plesk products",
      "enum": [
        "PLESK_10_AND_LATER",
        "PLESK_10_AND_LATER_FOR_KVM",
        "PLESK_10_AND_LATER_FOR_VMWARE",
        "PLESK_10_AND_LATER_FOR_VZ",
        "PLESK_10_AND_LATER_FOR_WIN",
        "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE",
        "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ",
        "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN",
        "PLESK_10_AND_LATER_FOR_XEN",
        "PLESK_12_VPS_WEB_ADMIN",
        "PLESK_12_VPS_WEB_APP",
        "PLESK_12_VPS_WEB_HOST",
        "PLESK_12_VPS_WEB_HOST_CLNX",
        "PLESK_12_VPS_WEB_PRO",
        "PLESK_12_VPS_WEB_PRO_CLNX",
        "PLESK_12_WEB_ADMIN",
        "PLESK_12_WEB_APP",
        "PLESK_12_WEB_HOST",
        "PLESK_12_WEB_HOST_CLNX",
        "PLESK_12_WEB_PRO",
        "PLESK_12_WEB_PRO_CLNX",
        "PLESK_75_RELOADED",
        "PLESK_80",
        "PLESK_80_FOR_VZ",
        "PLESK_81_FOR_WIN",
        "PLESK_9",
        "PLESK_95",
        "PLESK_95_FOR_VZ",
        "PLESK_95_FOR_WIN",
        "PLESK_9_FOR_VZ",
        "PLESK_9_FOR_WIN",
        "PLESK_ONYX_VPS_WEB_ADMIN",
        "PLESK_ONYX_VPS_WEB_APP",
        "PLESK_ONYX_VPS_WEB_HOST",
        "PLESK_ONYX_VPS_WEB_HOST_CLNX",
        "PLESK_ONYX_VPS_WEB_PRO",
        "PLESK_ONYX_VPS_WEB_PRO_CLNX",
        "PLESK_ONYX_WEB_ADMIN",
        "PLESK_ONYX_WEB_APP",
        "PLESK_ONYX_WEB_HOST",
        "PLESK_ONYX_WEB_HOST_CLNX",
        "PLESK_ONYX_WEB_PRO",
        "PLESK_ONYX_WEB_PRO_CLNX",
        "plesk-12-webadmin-for-vps",
        "plesk-12-webhost",
        "plesk-12-webhost-for-vps",
        "plesk-12-webpro",
        "plesk-12-webpro-for-vps"
      ],
      "enumType": "string",
      "id": "PleskVersionEnum",
      "namespace": "license"
    },
    "license.SqlServerVersionEnum": {
      "description": "All versions for SQL Server product",
      "enum": [
        "SQL_SERVER_2008_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2008_STANDARD_EDITION_4_CPU",
        "SQL_SERVER_2008_WEB_EDITION_2_CPU",
        "SQL_SERVER_2008_WEB_EDITION_4_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2012_WEB_EDITION_10_CORES",
        "SQL_SERVER_2012_WEB_EDITION_12_CORES",
        "SQL_SERVER_2012_WEB_EDITION_16_CORES",
        "SQL_SERVER_2012_WEB_EDITION_18_CORES",
        "SQL_SERVER_2012_WEB_EDITION_20_CORES",
        "SQL_SERVER_2012_WEB_EDITION_24_CORES",
        "SQL_SERVER_2012_WEB_EDITION_32_CORES",
        "SQL_SERVER_2012_WEB_EDITION_4_CORES",
        "SQL_SERVER_2012_WEB_EDITION_6_CORES",
        "SQL_SERVER_2012_WEB_EDITION_8_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2014_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2014_WEB_EDITION_10_CORES",
        "SQL_SERVER_2014_WEB_EDITION_12_CORES",
        "SQL_SERVER_2014_WEB_EDITION_16_CORES",
        "SQL_SERVER_2014_WEB_EDITION_18_CORES",
        "SQL_SERVER_2014_WEB_EDITION_20_CORES",
        "SQL_SERVER_2014_WEB_EDITION_24_CORES",
        "SQL_SERVER_2014_WEB_EDITION_4_CORES",
        "SQL_SERVER_2014_WEB_EDITION_6_CORES",
        "SQL_SERVER_2014_WEB_EDITION_8_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_14_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2016_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2016_WEB_EDITION_10_CORES",
        "SQL_SERVER_2016_WEB_EDITION_12_CORES",
        "SQL_SERVER_2016_WEB_EDITION_14_CORES",
        "SQL_SERVER_2016_WEB_EDITION_16_CORES",
        "SQL_SERVER_2016_WEB_EDITION_4_CORES",
        "SQL_SERVER_2016_WEB_EDITION_6_CORES",
        "SQL_SERVER_2016_WEB_EDITION_8_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_14_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_22_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_26_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_28_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_30_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2017_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2017_WEB_EDITION_10_CORES",
        "SQL_SERVER_2017_WEB_EDITION_12_CORES",
        "SQL_SERVER_2017_WEB_EDITION_14_CORES",
        "SQL_SERVER_2017_WEB_EDITION_16_CORES",
        "SQL_SERVER_2017_WEB_EDITION_18_CORES",
        "SQL_SERVER_2017_WEB_EDITION_20_CORES",
        "SQL_SERVER_2017_WEB_EDITION_22_CORES",
        "SQL_SERVER_2017_WEB_EDITION_24_CORES",
        "SQL_SERVER_2017_WEB_EDITION_26_CORES",
        "SQL_SERVER_2017_WEB_EDITION_28_CORES",
        "SQL_SERVER_2017_WEB_EDITION_30_CORES",
        "SQL_SERVER_2017_WEB_EDITION_32_CORES",
        "SQL_SERVER_2017_WEB_EDITION_4_CORES",
        "SQL_SERVER_2017_WEB_EDITION_6_CORES",
        "SQL_SERVER_2017_WEB_EDITION_8_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_14_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_22_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_26_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_28_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_30_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2019_WEB_EDITION_10_CORES",
        "SQL_SERVER_2019_WEB_EDITION_12_CORES",
        "SQL_SERVER_2019_WEB_EDITION_14_CORES",
        "SQL_SERVER_2019_WEB_EDITION_16_CORES",
        "SQL_SERVER_2019_WEB_EDITION_18_CORES",
        "SQL_SERVER_2019_WEB_EDITION_20_CORES",
        "SQL_SERVER_2019_WEB_EDITION_22_CORES",
        "SQL_SERVER_2019_WEB_EDITION_24_CORES",
        "SQL_SERVER_2019_WEB_EDITION_26_CORES",
        "SQL_SERVER_2019_WEB_EDITION_28_CORES",
        "SQL_SERVER_2019_WEB_EDITION_30_CORES",
        "SQL_SERVER_2019_WEB_EDITION_32_CORES",
        "SQL_SERVER_2019_WEB_EDITION_4_CORES",
        "SQL_SERVER_2019_WEB_EDITION_6_CORES",
        "SQL_SERVER_2019_WEB_EDITION_8_CORES",
        "sql-server-2008-license-standard-edition-2-cpu",
        "sql-server-2008-license-standard-edition-4-cpu",
        "sql-server-2008-license-web-edition-2-cpu",
        "sql-server-2008-license-web-edition-4-cpu",
        "sql-server-2012-license-standard-edition-10-cores",
        "sql-server-2012-license-standard-edition-12-cores",
        "sql-server-2012-license-standard-edition-16-cores",
        "sql-server-2012-license-standard-edition-18-cores",
        "sql-server-2012-license-standard-edition-2-cpu",
        "sql-server-2012-license-standard-edition-20-cores",
        "sql-server-2012-license-standard-edition-24-cores",
        "sql-server-2012-license-standard-edition-32-cores",
        "sql-server-2012-license-standard-edition-4-cores",
        "sql-server-2012-license-standard-edition-6-cores",
        "sql-server-2012-license-standard-edition-8-cores",
        "sql-server-2012-license-web-edition-10-cores",
        "sql-server-2012-license-web-edition-12-cores",
        "sql-server-2012-license-web-edition-16-cores",
        "sql-server-2012-license-web-edition-18-cores",
        "sql-server-2012-license-web-edition-20-cores",
        "sql-server-2012-license-web-edition-24-cores",
        "sql-server-2012-license-web-edition-32-cores",
        "sql-server-2012-license-web-edition-4-cores",
        "sql-server-2012-license-web-edition-6-cores",
        "sql-server-2012-license-web-edition-8-cores",
        "sql-server-2014-license-standard-edition-10-cores",
        "sql-server-2014-license-standard-edition-12-cores",
        "sql-server-2014-license-standard-edition-16-cores",
        "sql-server-2014-license-standard-edition-18-cores",
        "sql-server-2014-license-standard-edition-20-cores",
        "sql-server-2014-license-standard-edition-24-cores",
        "sql-server-2014-license-standard-edition-4-cores",
        "sql-server-2014-license-standard-edition-6-cores",
        "sql-server-2014-license-standard-edition-8-cores",
        "sql-server-2014-license-web-edition-10-cores",
        "sql-server-2014-license-web-edition-12-cores",
        "sql-server-2014-license-web-edition-16-cores",
        "sql-server-2014-license-web-edition-18-cores",
        "sql-server-2014-license-web-edition-20-cores",
        "sql-server-2014-license-web-edition-24-cores",
        "sql-server-2014-license-web-edition-4-cores",
        "sql-server-2014-license-web-edition-6-cores",
        "sql-server-2014-license-web-edition-8-cores",
        "sql-server-2016-license-standard-edition-10-cores",
        "sql-server-2016-license-standard-edition-12-cores",
        "sql-server-2016-license-standard-edition-14-cores",
        "sql-server-2016-license-standard-edition-16-cores",
        "sql-server-2016-license-standard-edition-4-cores",
        "sql-server-2016-license-standard-edition-6-cores",
        "sql-server-2016-license-standard-edition-8-cores",
        "sql-server-2016-license-web-edition-10-cores",
        "sql-server-2016-license-web-edition-12-cores",
        "sql-server-2016-license-web-edition-14-cores",
        "sql-server-2016-license-web-edition-16-cores",
        "sql-server-2016-license-web-edition-4-cores",
        "sql-server-2016-license-web-edition-6-cores",
        "sql-server-2016-license-web-edition-8-cores",
        "sql-server-2017-license-standard-edition-10-cores",
        "sql-server-2017-license-standard-edition-12-cores",
        "sql-server-2017-license-standard-edition-14-cores",
        "sql-server-2017-license-standard-edition-16-cores",
        "sql-server-2017-license-standard-edition-18-cores",
        "sql-server-2017-license-standard-edition-20-cores",
        "sql-server-2017-license-standard-edition-22-cores",
        "sql-server-2017-license-standard-edition-24-cores",
        "sql-server-2017-license-standard-edition-26-cores",
        "sql-server-2017-license-standard-edition-28-cores",
        "sql-server-2017-license-standard-edition-30-cores",
        "sql-server-2017-license-standard-edition-32-cores",
        "sql-server-2017-license-standard-edition-4-cores",
        "sql-server-2017-license-standard-edition-6-cores",
        "sql-server-2017-license-standard-edition-8-cores",
        "sql-server-2017-license-web-edition-10-cores",
        "sql-server-2017-license-web-edition-12-cores",
        "sql-server-2017-license-web-edition-14-cores",
        "sql-server-2017-license-web-edition-16-cores",
        "sql-server-2017-license-web-edition-18-cores",
        "sql-server-2017-license-web-edition-20-cores",
        "sql-server-2017-license-web-edition-22-cores",
        "sql-server-2017-license-web-edition-24-cores",
        "sql-server-2017-license-web-edition-26-cores",
        "sql-server-2017-license-web-edition-28-cores",
        "sql-server-2017-license-web-edition-30-cores",
        "sql-server-2017-license-web-edition-32-cores",
        "sql-server-2017-license-web-edition-4-cores",
        "sql-server-2017-license-web-edition-6-cores",
        "sql-server-2017-license-web-edition-8-cores",
        "sql-server-2019-license-standard-edition-10-cores",
        "sql-server-2019-license-standard-edition-12-cores",
        "sql-server-2019-license-standard-edition-14-cores",
        "sql-server-2019-license-standard-edition-16-cores",
        "sql-server-2019-license-standard-edition-18-cores",
        "sql-server-2019-license-standard-edition-20-cores",
        "sql-server-2019-license-standard-edition-22-cores",
        "sql-server-2019-license-standard-edition-24-cores",
        "sql-server-2019-license-standard-edition-26-cores",
        "sql-server-2019-license-standard-edition-28-cores",
        "sql-server-2019-license-standard-edition-30-cores",
        "sql-server-2019-license-standard-edition-32-cores",
        "sql-server-2019-license-standard-edition-4-cores",
        "sql-server-2019-license-standard-edition-6-cores",
        "sql-server-2019-license-standard-edition-8-cores",
        "sql-server-2019-license-web-edition-10-cores",
        "sql-server-2019-license-web-edition-12-cores",
        "sql-server-2019-license-web-edition-14-cores",
        "sql-server-2019-license-web-edition-16-cores",
        "sql-server-2019-license-web-edition-18-cores",
        "sql-server-2019-license-web-edition-20-cores",
        "sql-server-2019-license-web-edition-22-cores",
        "sql-server-2019-license-web-edition-24-cores",
        "sql-server-2019-license-web-edition-26-cores",
        "sql-server-2019-license-web-edition-28-cores",
        "sql-server-2019-license-web-edition-30-cores",
        "sql-server-2019-license-web-edition-32-cores",
        "sql-server-2019-license-web-edition-4-cores",
        "sql-server-2019-license-web-edition-6-cores",
        "sql-server-2019-license-web-edition-8-cores"
      ],
      "enumType": "string",
      "id": "SqlServerVersionEnum",
      "namespace": "license"
    },
    "license.WindowsOsVersionEnum": {
      "description": "All versions for Windows products",
      "enum": [
        "WINDOWS_SERVER_2003_ENTERPRISE_EDITION",
        "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU",
        "WINDOWS_SERVER_2003_STANDARD_EDITION",
        "WINDOWS_SERVER_2003_WEB_EDITION",
        "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU",
        "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION",
        "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION",
        "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_DATACENTER_EDITION",
        "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_ENTERPRISE_EDITION",
        "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_STANDARD_EDITION",
        "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_WEB_EDITION",
        "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU",
        "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU",
        "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION",
        "WINDOWS_SERVER_2012_DATACENTER_EDITION",
        "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU",
        "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU",
        "WINDOWS_SERVER_2012_ENTERPRISE_EDITION",
        "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU",
        "WINDOWS_SERVER_2012_STANDARD_EDITION",
        "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU",
        "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU",
        "WINDOWS_SERVER_2012_WEB_EDITION",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES",
        "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES",
        "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES",
        "windows-server-2008-license-datacenter-edition-1-cpu",
        "windows-server-2008-license-datacenter-edition-2-cpu",
        "windows-server-2008-license-datacenter-edition-4-cpu",
        "windows-server-2008-license-enterprise-edition-1-cpu",
        "windows-server-2008-license-enterprise-edition-2-cpu",
        "windows-server-2008-license-enterprise-edition-4-cpu",
        "windows-server-2008-license-standard-edition-1-cpu",
        "windows-server-2008-license-standard-edition-2-cpu",
        "windows-server-2008-license-standard-edition-4-cpu",
        "windows-server-2008-license-web-edition-1-cpu",
        "windows-server-2008-license-web-edition-2-cpu",
        "windows-server-2008-license-web-edition-4-cpu",
        "windows-server-2012-license-datacenter-edition-1-cpu",
        "windows-server-2012-license-datacenter-edition-2-cpu",
        "windows-server-2012-license-datacenter-edition-4-cpu",
        "windows-server-2012-license-standard-edition-1-cpu",
        "windows-server-2012-license-standard-edition-2-cpu",
        "windows-server-2012-license-standard-edition-4-cpu",
        "windows-server-2016-license-datacenter-edition-1-cpu-10-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-12-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-14-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-16-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-18-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-20-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-22-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-24-cores",
        "windows-server-2016-license-datacenter-edition-1-cpu-8-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-10-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-12-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-14-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-16-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-18-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-20-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-22-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-24-cores",
        "windows-server-2016-license-datacenter-edition-2-cpu-8-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-10-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-12-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-14-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-16-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-18-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-20-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-22-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-24-cores",
        "windows-server-2016-license-datacenter-edition-4-cpu-8-cores",
        "windows-server-2016-license-standard-edition-1-cpu-10-cores",
        "windows-server-2016-license-standard-edition-1-cpu-12-cores",
        "windows-server-2016-license-standard-edition-1-cpu-14-cores",
        "windows-server-2016-license-standard-edition-1-cpu-16-cores",
        "windows-server-2016-license-standard-edition-1-cpu-18-cores",
        "windows-server-2016-license-standard-edition-1-cpu-20-cores",
        "windows-server-2016-license-standard-edition-1-cpu-22-cores",
        "windows-server-2016-license-standard-edition-1-cpu-24-cores",
        "windows-server-2016-license-standard-edition-1-cpu-8-cores",
        "windows-server-2016-license-standard-edition-2-cpu-10-cores",
        "windows-server-2016-license-standard-edition-2-cpu-12-cores",
        "windows-server-2016-license-standard-edition-2-cpu-14-cores",
        "windows-server-2016-license-standard-edition-2-cpu-16-cores",
        "windows-server-2016-license-standard-edition-2-cpu-18-cores",
        "windows-server-2016-license-standard-edition-2-cpu-20-cores",
        "windows-server-2016-license-standard-edition-2-cpu-22-cores",
        "windows-server-2016-license-standard-edition-2-cpu-24-cores",
        "windows-server-2016-license-standard-edition-2-cpu-8-cores",
        "windows-server-2016-license-standard-edition-4-cpu-10-cores",
        "windows-server-2016-license-standard-edition-4-cpu-12-cores",
        "windows-server-2016-license-standard-edition-4-cpu-14-cores",
        "windows-server-2016-license-standard-edition-4-cpu-16-cores",
        "windows-server-2016-license-standard-edition-4-cpu-18-cores",
        "windows-server-2016-license-standard-edition-4-cpu-20-cores",
        "windows-server-2016-license-standard-edition-4-cpu-22-cores",
        "windows-server-2016-license-standard-edition-4-cpu-24-cores",
        "windows-server-2016-license-standard-edition-4-cpu-8-cores",
        "windows-server-2019-license-datacenter-edition-10-cores",
        "windows-server-2019-license-datacenter-edition-12-cores",
        "windows-server-2019-license-datacenter-edition-14-cores",
        "windows-server-2019-license-datacenter-edition-16-cores",
        "windows-server-2019-license-datacenter-edition-18-cores",
        "windows-server-2019-license-datacenter-edition-20-cores",
        "windows-server-2019-license-datacenter-edition-22-cores",
        "windows-server-2019-license-datacenter-edition-24-cores",
        "windows-server-2019-license-datacenter-edition-26-cores",
        "windows-server-2019-license-datacenter-edition-28-cores",
        "windows-server-2019-license-datacenter-edition-30-cores",
        "windows-server-2019-license-datacenter-edition-32-cores",
        "windows-server-2019-license-datacenter-edition-34-cores",
        "windows-server-2019-license-datacenter-edition-36-cores",
        "windows-server-2019-license-datacenter-edition-38-cores",
        "windows-server-2019-license-datacenter-edition-40-cores",
        "windows-server-2019-license-datacenter-edition-42-cores",
        "windows-server-2019-license-datacenter-edition-44-cores",
        "windows-server-2019-license-datacenter-edition-46-cores",
        "windows-server-2019-license-datacenter-edition-48-cores",
        "windows-server-2019-license-datacenter-edition-50-cores",
        "windows-server-2019-license-datacenter-edition-52-cores",
        "windows-server-2019-license-datacenter-edition-54-cores",
        "windows-server-2019-license-datacenter-edition-56-cores",
        "windows-server-2019-license-datacenter-edition-58-cores",
        "windows-server-2019-license-datacenter-edition-60-cores",
        "windows-server-2019-license-datacenter-edition-62-cores",
        "windows-server-2019-license-datacenter-edition-64-cores",
        "windows-server-2019-license-datacenter-edition-8-cores",
        "windows-server-2019-license-standard-edition-10-cores",
        "windows-server-2019-license-standard-edition-12-cores",
        "windows-server-2019-license-standard-edition-14-cores",
        "windows-server-2019-license-standard-edition-16-cores",
        "windows-server-2019-license-standard-edition-18-cores",
        "windows-server-2019-license-standard-edition-20-cores",
        "windows-server-2019-license-standard-edition-22-cores",
        "windows-server-2019-license-standard-edition-24-cores",
        "windows-server-2019-license-standard-edition-26-cores",
        "windows-server-2019-license-standard-edition-28-cores",
        "windows-server-2019-license-standard-edition-30-cores",
        "windows-server-2019-license-standard-edition-32-cores",
        "windows-server-2019-license-standard-edition-34-cores",
        "windows-server-2019-license-standard-edition-36-cores",
        "windows-server-2019-license-standard-edition-38-cores",
        "windows-server-2019-license-standard-edition-40-cores",
        "windows-server-2019-license-standard-edition-42-cores",
        "windows-server-2019-license-standard-edition-44-cores",
        "windows-server-2019-license-standard-edition-46-cores",
        "windows-server-2019-license-standard-edition-48-cores",
        "windows-server-2019-license-standard-edition-50-cores",
        "windows-server-2019-license-standard-edition-52-cores",
        "windows-server-2019-license-standard-edition-54-cores",
        "windows-server-2019-license-standard-edition-56-cores",
        "windows-server-2019-license-standard-edition-58-cores",
        "windows-server-2019-license-standard-edition-60-cores",
        "windows-server-2019-license-standard-edition-62-cores",
        "windows-server-2019-license-standard-edition-64-cores",
        "windows-server-2019-license-standard-edition-8-cores"
      ],
      "enumType": "string",
      "id": "WindowsOsVersionEnum",
      "namespace": "license"
    },
    "license.WindowsSqlVersionEnum": {
      "description": "All SQL Server versions for Windows products",
      "enum": [
        "SQL_SERVER_2008_STANDARD_EDITION",
        "SQL_SERVER_2008_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2008_WEB_EDITION",
        "SQL_SERVER_2008_WEB_EDITION_2_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION",
        "SQL_SERVER_2012_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_2_CPU",
        "SQL_SERVER_2012_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2012_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2012_WEB_EDITION_12_CORES",
        "SQL_SERVER_2012_WEB_EDITION_16_CORES",
        "SQL_SERVER_2012_WEB_EDITION_18_CORES",
        "SQL_SERVER_2012_WEB_EDITION_20_CORES",
        "SQL_SERVER_2012_WEB_EDITION_24_CORES",
        "SQL_SERVER_2012_WEB_EDITION_32_CORES",
        "SQL_SERVER_2012_WEB_EDITION_4_CORES",
        "SQL_SERVER_2012_WEB_EDITION_6_CORES",
        "SQL_SERVER_2012_WEB_EDITION_8_CORES"
      ],
      "enumType": "string",
      "id": "WindowsSqlVersionEnum",
      "namespace": "license"
    },
    "license.WorkLightVersionEnum": {
      "description": "All versions for WorkLight product",
      "enum": [
        "VERSION-6.1U.1CPU",
        "VERSION-6.1U.2CPU",
        "VERSION-6.2U.1CPU",
        "VERSION-6.2U.2CPU",
        "VERSION-6.EVALUATION",
        "worklight-license-version-6-1cpu-1u",
        "worklight-license-version-6-1cpu-2u",
        "worklight-license-version-6-2cpu-1u",
        "worklight-license-version-6-2cpu-2u"
      ],
      "enumType": "string",
      "id": "WorkLightVersionEnum",
      "namespace": "license"
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
        "QC",
        "SG",
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
        "percentage",
        "forced_amount",
        "fixed_amount"
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "expire": {
          "canBeNull": true,
          "description": "Expiration time",
          "fullType": "datetime",
          "readOnly": true,
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
    "order.cart.Checkout": {
      "description": "Missing description",
      "id": "Checkout",
      "namespace": "order.cart",
      "properties": {
        "autoPayWithPreferredPaymentMethod": {
          "canBeNull": false,
          "description": "Indicates that order will be automatically paid with preferred payment method",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "waiveRetractationPeriod": {
          "canBeNull": false,
          "description": "Indicates that order will be processed with waiving retractation period",
          "fullType": "boolean",
          "readOnly": false,
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
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "label": {
          "canBeNull": false,
          "description": "Identifier of the resource",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Path to the resource in API.OVH.COM",
          "fullType": "string",
          "readOnly": true,
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
    "order.cart.CouponCreation": {
      "description": "Missing description",
      "id": "CouponCreation",
      "namespace": "order.cart",
      "properties": {
        "coupon": {
          "canBeNull": false,
          "description": "Coupon identifier",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "order.cart.Creation": {
      "description": "Missing description",
      "id": "Creation",
      "namespace": "order.cart",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description of your cart",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expire": {
          "canBeNull": false,
          "description": "Time of expiration of the cart",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "ovhSubsidiary": {
          "canBeNull": false,
          "description": "OVH Subsidiary where you want to order",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": false,
          "required": true,
          "type": "nichandle.OvhSubsidiaryEnum"
        }
      }
    },
    "order.cart.DomainActionEnum": {
      "description": "Action values for domain product information",
      "enum": [
        "create",
        "transfer",
        "update",
        "trade"
      ],
      "enumType": "string",
      "id": "DomainActionEnum",
      "namespace": "order.cart"
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
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.cart.DurationUnitEnum": {
      "description": "Unit corresponding to a duration range",
      "enum": [
        "month",
        "day",
        "none"
      ],
      "enumType": "string",
      "id": "DurationUnitEnum",
      "namespace": "order.cart"
    },
    "order.cart.GenericDedicatedCreation": {
      "description": "Missing description",
      "id": "GenericDedicatedCreation",
      "namespace": "order.cart",
      "properties": {
        "duration": {
          "canBeNull": false,
          "description": "Duration selected for the purchase of the product",
          "fullType": "duration",
          "readOnly": false,
          "required": true,
          "type": "duration"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Identifier of a dedicated server offer",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing mode selected for the purchase of the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of product desired",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "order.cart.GenericDedicatedOptionsCreation": {
      "description": "Missing description",
      "id": "GenericDedicatedOptionsCreation",
      "namespace": "order.cart",
      "properties": {
        "duration": {
          "canBeNull": false,
          "description": "Duration selected for the purchase of the product",
          "fullType": "duration",
          "readOnly": false,
          "required": true,
          "type": "duration"
        },
        "itemId": {
          "canBeNull": false,
          "description": "Cart item to be linked",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Identifier of a dedicated server offer",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing mode selected for the purchase of the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of product desired",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "order.cart.GenericDomainCreation": {
      "description": "Missing description",
      "id": "GenericDomainCreation",
      "namespace": "order.cart",
      "properties": {
        "domain": {
          "canBeNull": false,
          "description": "Domain name to order",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "duration": {
          "canBeNull": true,
          "description": "Duration for the product",
          "fullType": "duration",
          "readOnly": false,
          "required": false,
          "type": "duration"
        },
        "offerId": {
          "canBeNull": true,
          "description": "Offer unique identifier",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": true,
          "description": "Quantity to order",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.cart.GenericDomainOptionsCreation": {
      "description": "Missing description",
      "id": "GenericDomainOptionsCreation",
      "namespace": "order.cart",
      "properties": {
        "duration": {
          "canBeNull": false,
          "description": "Duration selected for the purchase of the product",
          "fullType": "duration",
          "readOnly": false,
          "required": true,
          "type": "duration"
        },
        "itemId": {
          "canBeNull": false,
          "description": "Cart item to be linked",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Identifier of a domain name option offer",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing mode selected for the purchase of the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of product desired",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "order.cart.GenericOptionCreation": {
      "description": "Missing description",
      "id": "GenericOptionCreation",
      "namespace": "order.cart",
      "properties": {
        "duration": {
          "canBeNull": false,
          "description": "Duration selected for the purchase of the product",
          "fullType": "duration",
          "readOnly": false,
          "required": true,
          "type": "duration"
        },
        "itemId": {
          "canBeNull": false,
          "description": "Cart item to be linked",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Identifier of the option offer",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing mode selected for the purchase of the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of product desired",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
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
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "family": {
          "canBeNull": false,
          "description": "Option family",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Define if an option of this family is mandatory",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
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
    "order.cart.GenericProductCreation": {
      "description": "Missing description",
      "id": "GenericProductCreation",
      "namespace": "order.cart",
      "properties": {
        "duration": {
          "canBeNull": false,
          "description": "Duration selected for the purchase of the product",
          "fullType": "duration",
          "readOnly": false,
          "required": true,
          "type": "duration"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Identifier of the offer",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing mode selected for the purchase of the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of product desired",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
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
          "canBeNull": false,
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
    "order.cart.ItemConfigurationCreation": {
      "description": "Missing description",
      "id": "ItemConfigurationCreation",
      "namespace": "order.cart",
      "properties": {
        "label": {
          "canBeNull": false,
          "description": "Label for your configuration item",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value or resource URL on API.OVH.COM of your configuration item",
          "fullType": "text",
          "readOnly": false,
          "required": true,
          "type": "text"
        }
      }
    },
    "order.cart.ItemUpdate": {
      "description": "Missing description",
      "id": "ItemUpdate",
      "namespace": "order.cart",
      "properties": {
        "duration": {
          "canBeNull": false,
          "description": "New duration for item",
          "fullType": "duration",
          "readOnly": false,
          "required": false,
          "type": "duration"
        },
        "quantity": {
          "canBeNull": false,
          "description": "New quantity for item",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
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
    "order.cart.ProductInformation": {
      "description": "Information about a product for Order/Cart",
      "id": "ProductInformation",
      "namespace": "order.cart",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "Action kind",
          "fullType": "order.cart.DomainActionEnum",
          "readOnly": true,
          "required": false,
          "type": "order.cart.DomainActionEnum"
        },
        "configurations": {
          "canBeNull": false,
          "description": "Informations about the configurations required",
          "fullType": "order.cart.ConfigurationRequirements[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.ConfigurationRequirements[]"
        },
        "deliveryTime": {
          "canBeNull": false,
          "description": "Informations about the estimated delivery time for the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "duration": {
          "canBeNull": false,
          "description": "List all the duration allowed for the product",
          "fullType": "duration[]",
          "readOnly": true,
          "required": false,
          "type": "duration[]"
        },
        "offer": {
          "canBeNull": true,
          "description": "Informations about the domain's offer (gold|diamond|platinium)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "offerId": {
          "canBeNull": true,
          "description": "ID of the related offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "orderable": {
          "canBeNull": false,
          "description": "Indicates if the product is orderable or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "phase": {
          "canBeNull": false,
          "description": "Informations about the domain phase",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "prices": {
          "canBeNull": true,
          "description": "Price details of the product",
          "fullType": "order.cart.Price[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.Price[]"
        },
        "pricingMode": {
          "canBeNull": false,
          "description": "Pricing model identifier for this product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "productId": {
          "canBeNull": false,
          "description": "Product identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantityMax": {
          "canBeNull": false,
          "description": "Maximum quantity purchasable for this product",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.cart.Update": {
      "description": "Missing description",
      "id": "Update",
      "namespace": "order.cart",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description of your cart",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expire": {
          "canBeNull": false,
          "description": "Time of expiration of the cart",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
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
          "required": false,
          "type": "order.catalog.AddonOffer[]"
        },
        "exclusive": {
          "canBeNull": false,
          "description": "Whether you can only have one instance of this addon family (xor)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "family": {
          "canBeNull": false,
          "description": "Addon family name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Indicated if addon family must be contracted",
          "fullType": "boolean",
          "readOnly": false,
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
        "invoiceName": {
          "canBeNull": false,
          "description": "Name that appears on invoice",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "plan": {
          "canBeNull": false,
          "description": "Describes of commercial offer of a product",
          "fullType": "order.catalog.ProductPlan",
          "readOnly": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "isCustom": {
          "canBeNull": false,
          "description": "Indicates if the configuration is free for writing (true) or have to follow an enum (false - have to follow values field)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "isMandatory": {
          "canBeNull": false,
          "description": "Indicates if configuration is required",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Label of the configuration",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "description": "Values allowed if configuration isn't custom",
          "fullType": "string[]",
          "readOnly": false,
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
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "commitment": {
          "canBeNull": false,
          "description": "Engagement period",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "interval": {
          "canBeNull": false,
          "description": "Number length of the interval",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "intervalUnit": {
          "canBeNull": false,
          "description": "Unit interval for duration",
          "fullType": "string",
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "long"
        },
        "minimumRepeat": {
          "canBeNull": false,
          "description": "Minimum repeat duration",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "mustBeCompleted": {
          "canBeNull": false,
          "description": "Whether the catalog must reach max repeat before subscription can use another one",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the product",
          "fullType": "order.Price",
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "long"
        },
        "pricingStrategy": {
          "canBeNull": false,
          "description": "Strategy on which the pricing can change",
          "fullType": "string",
          "readOnly": false,
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
          "readOnly": false,
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
          "readOnly": false,
          "required": false,
          "type": "order.catalog.ConfigurationItem[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Designation of the product",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Plan code identifier of the product",
          "fullType": "string",
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "complexType.SafeKeyValue<string>[]"
        },
        "pricings": {
          "canBeNull": false,
          "description": "Describe default pricings",
          "fullType": "order.catalog.PricingDefault",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.PricingDefault"
        },
        "product": {
          "canBeNull": false,
          "description": "Information about the product",
          "fullType": "order.catalog.Product",
          "readOnly": false,
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
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "order.catalog.ProductOfferDetails"
        },
        "invoiceName": {
          "canBeNull": false,
          "description": "Name that appears on invoice",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan code identifier",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "pricingType": {
          "canBeNull": false,
          "description": "Main mode: rental, consumption",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.pcc.Catalog": {
      "description": "Describe a Private Cloud commercial catalog",
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
          "description": "Describes Commercial Ranges of a Private Cloud",
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
      "description": "Describes the Commercial Range of a Private Cloud",
      "id": "CommercialRange",
      "namespace": "order.catalog.pcc",
      "properties": {
        "datacenters": {
          "canBeNull": false,
          "description": "Describes Private Cloud Datacenters",
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
      "description": "Describes a Private Cloud Datacenter",
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
          "description": "Describes Private Cloud Hypervisors",
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
        "orderable": {
          "canBeNull": false,
          "description": "Describes if a Private Cloud can be ordered on a Datacenter",
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
      "description": "Describes a Private Cloud Host",
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
          "description": "Describes Private Cloud Host specifications",
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
      "description": "Describes a Private Cloud Host CPU",
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
      "description": "Describes a Private Cloud Host Memory",
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
      "description": "Describes a Private Cloud Host Network",
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
      "description": "Describes a Private Cloud Host Hardware",
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
      "description": "Describes a Private Cloud Hypervisor",
      "id": "Hypervisor",
      "namespace": "order.catalog.pcc",
      "properties": {
        "hosts": {
          "canBeNull": false,
          "description": "Describes Private Cloud Hosts",
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
          "description": "Describes Private Cloud Options",
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
          "description": "Describes Private Cloud Service Packs",
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
          "description": "Describes Private Cloud Storages",
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
      "description": "Describes a Private Cloud Option",
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
      "description": "Describes a Private Cloud Service Pack",
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
      "description": "Describes a Private Cloud service pack option",
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
      "description": "Describes a Private Cloud Storage",
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
          "description": "Describes Private Cloud Storage specifications",
          "fullType": "order.catalog.pcc.StorageSpecifications",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.pcc.StorageSpecifications"
        }
      }
    },
    "order.catalog.pcc.StorageSpecifications": {
      "description": "Describes a Private Cloud Storage",
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
    "order.catalog.privateCloud.Capabilities": {
      "description": "Describes capabilities of a Private Cloud type of service",
      "id": "Capabilities",
      "namespace": "order.catalog.privateCloud",
      "properties": {
        "hds": {
          "canBeNull": false,
          "description": "Define if HDS is part of this type of service",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "hipaa": {
          "canBeNull": false,
          "description": "Define if HIPAA is part of this type of service",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "nsx": {
          "canBeNull": false,
          "description": "Define if NSX is part of this type of service",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "pcidss": {
          "canBeNull": false,
          "description": "Define if PCI-DSS is part of this type of service",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "vrops": {
          "canBeNull": false,
          "description": "Define if VROPS is part of this type of service",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "order.catalog.privateCloud.CapabilitiesListing": {
      "description": "Describe all capabilities of different types of service",
      "id": "CapabilitiesListing",
      "namespace": "order.catalog.privateCloud",
      "properties": {
        "2016v1": {
          "canBeNull": false,
          "description": "Describe capabilities of 2016v1 type of service",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Capabilities"
        },
        "2016v2": {
          "canBeNull": false,
          "description": "Describe capabilities of 2016v2 type of service",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Capabilities"
        },
        "2016v3": {
          "canBeNull": false,
          "description": "Describe capabilities of 2016v3 type of service",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Capabilities"
        },
        "2016v4": {
          "canBeNull": false,
          "description": "Describe capabilities of 2016v4 type of service",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Capabilities"
        },
        "2016v5": {
          "canBeNull": false,
          "description": "Describe capabilities of 2016v5 type of service",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Capabilities"
        },
        "2016v6": {
          "canBeNull": false,
          "description": "Describe capabilities of 2016v6 type of service",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Capabilities"
        },
        "2016v7": {
          "canBeNull": false,
          "description": "Describe capabilities of 2016v7 type of service",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Capabilities"
        },
        "default": {
          "canBeNull": false,
          "description": "Describe capabilities of default type of service",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Capabilities"
        }
      }
    },
    "order.catalog.privateCloud.Catalog": {
      "description": "Describe a Private Cloud commercial catalog",
      "id": "Catalog",
      "namespace": "order.catalog.privateCloud",
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
        "defaultHypervisor": {
          "canBeNull": false,
          "description": "Default hypervisor for this catalog",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "defaultZone": {
          "canBeNull": false,
          "description": "Default datacenter for this catalog",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "merchantCode": {
          "canBeNull": false,
          "description": "OVH Subsidiary of the Catalog",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Describe all capabilities of different types of service",
          "fullType": "order.catalog.privateCloud.CapabilitiesListing",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.CapabilitiesListing"
        },
        "zones": {
          "canBeNull": false,
          "description": "Zone definitions per datacenters",
          "fullType": "order.catalog.privateCloud.ZonesListing",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.ZonesListing"
        }
      }
    },
    "order.catalog.privateCloud.Zone": {
      "description": "Describe a Private Cloud zone",
      "id": "Zone",
      "namespace": "order.catalog.privateCloud",
      "properties": {
        "cityName": {
          "canBeNull": false,
          "description": "City where Private Cloud instance will be delivered",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": "Country where Private Cloud instance will be delivered",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "defaultHypervisor": {
          "canBeNull": false,
          "description": "Default hypervisor for this Private Cloud zone",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "defaultVersion": {
          "canBeNull": false,
          "description": "Default version for this Private Cloud zone",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "internalName": {
          "canBeNull": false,
          "description": "Internal name of the zone",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "plans": {
          "canBeNull": false,
          "description": "Commercial offers on this zone",
          "fullType": "order.catalog.ProductPlan[]",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.ProductPlan[]"
        }
      }
    },
    "order.catalog.privateCloud.ZonesListing": {
      "description": "Zone definitions per datacenters",
      "id": "ZonesListing",
      "namespace": "order.catalog.privateCloud",
      "properties": {
        "bhs": {
          "canBeNull": false,
          "description": "Zone definition for BHS datacenter",
          "fullType": "order.catalog.privateCloud.Zone",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Zone"
        },
        "eri": {
          "canBeNull": false,
          "description": "Zone definition for ERI datacenter",
          "fullType": "order.catalog.privateCloud.Zone",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Zone"
        },
        "lim": {
          "canBeNull": false,
          "description": "Zone definition for LIM datacenter",
          "fullType": "order.catalog.privateCloud.Zone",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Zone"
        },
        "rbx": {
          "canBeNull": false,
          "description": "Zone definition for RBX datacenter",
          "fullType": "order.catalog.privateCloud.Zone",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Zone"
        },
        "sbg": {
          "canBeNull": false,
          "description": "Zone definition for SBG datacenter",
          "fullType": "order.catalog.privateCloud.Zone",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Zone"
        },
        "waw": {
          "canBeNull": false,
          "description": "Zone definition for WAW datacenter",
          "fullType": "order.catalog.privateCloud.Zone",
          "readOnly": false,
          "required": false,
          "type": "order.catalog.privateCloud.Zone"
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
    },
    "veeamCloudConnect.Offer": {
      "description": "All orderable Veeam Cloud Connect offers",
      "enum": [
        "advanced",
        "demo",
        "starter"
      ],
      "enumType": "string",
      "id": "Offer",
      "namespace": "veeamCloudConnect"
    },
    "vps.PleskLicenseDomainNumberEnum": {
      "description": "Domain number the plesk license will be valid for",
      "enum": [
        "10",
        "100",
        "300",
        "hostingsuite"
      ],
      "enumType": "string",
      "id": "PleskLicenseDomainNumberEnum",
      "namespace": "vps"
    },
    "vps.additionalDisk.AdditionalDiskSizeEnum": {
      "description": "Size of the additional disk in GB",
      "enum": [
        "100",
        "200",
        "50",
        "500"
      ],
      "enumType": "string",
      "id": "AdditionalDiskSizeEnum",
      "namespace": "vps.additionalDisk"
    },
    "vps.ip.GeolocationEnum": {
      "description": "Geolocation of the IP Address",
      "enum": [
        "au",
        "be",
        "ca",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "gb",
        "ie",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "sg",
        "uk",
        "us"
      ],
      "enumType": "coreTypes.CountryEnum",
      "id": "GeolocationEnum",
      "namespace": "vps.ip"
    },
    "vrack.BlockCountryEnum": {
      "description": "Possible localization for block",
      "enum": [
        "be",
        "cz",
        "de",
        "es",
        "fi",
        "fr",
        "ie",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "uk"
      ],
      "enumType": "coreTypes.CountryEnum",
      "id": "BlockCountryEnum",
      "namespace": "vrack"
    },
    "vrack.BlockSizeEnum": {
      "description": "Possible values for block size",
      "enum": [
        "128",
        "16",
        "256",
        "32",
        "4",
        "64",
        "8"
      ],
      "enumType": "string",
      "id": "BlockSizeEnum",
      "namespace": "vrack"
    }
  },
  "resourcePath": "/order"
}