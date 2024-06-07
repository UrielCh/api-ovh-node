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
          "iamActions": [
            {
              "name": "account:apiovh:order/cart/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/cart/delete",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/cart/assign",
              "required": true
            }
          ],
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
          "description": "Get information about a baremetal server",
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
          "description": "Get information about baremetal server options",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about bring your own IP addresses offers",
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
          "description": "Post a new bring your own IP addresses item in your cart",
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
          "description": "Get information about Ceph as a Service offers",
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
          "description": "Get information about Ceph as a Service options",
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
          "iamActions": [
            {
              "name": "account:apiovh:order/cart/checkout/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/cart/checkout/create",
              "required": true
            }
          ],
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
          "description": "Get information about Public Cloud offers",
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
          "description": "Get information about Public Cloud options",
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
      "description": "Order a cloud db",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all cloud db offers available",
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
          "description": "Add a cloudDB in your cart",
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
      "path": "/order/cart/{cartId}/cloudDB"
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
          "description": "Get information about a dedicated server",
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
          "description": "Get information about dedicated server options",
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
          "description": "Get information about a dedicated server",
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
          "description": "Get information about dedicated server options",
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
      "path": "/order/cart/{cartId}/dedicatedCloud/options"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about a dedicated Direct Sales server",
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
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new dedicated Direct Sales server item in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
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
      "path": "/order/cart/{cartId}/dedicatedDirectSales"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about dedicated Direct Sales server options",
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new dedicated Direct Sales server option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
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
          "description": "Get information about a dedicated labs server",
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
          "description": "Get information about dedicated labs server options",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about dedicatedLegacy",
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
          "description": "Post a new dedicatedLegacy item in your cart",
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
      "path": "/order/cart/{cartId}/dedicatedLegacy"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about the options of Ovh offers",
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
              "description": "Identifier of an Ovh offer",
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
          "description": "Post a new Ovh option in your cart",
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
      "path": "/order/cart/{cartId}/dedicatedLegacy/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about a dedicated server",
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
          "description": "Get information about dedicated server options",
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
          "description": "Get information about a dedicated server for US Reseller",
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
          "description": "Post a new dedicated server item in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
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
          "description": "Get information about dedicated server options",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new dedicated server option in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
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
          "description": "Get information about Desk As A Service offers",
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
          "description": "Get information about Dedicated Discover server offers",
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
          "description": "Get information about Dedicated Discover server options",
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
          "description": "Get information about DNS zone offer",
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
          "description": "Get information about DNS options",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about a domain name",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new domain name in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about domain names options",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about a eco",
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
          "description": "Post a new eco item in your cart",
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
      "path": "/order/cart/{cartId}/eco"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about the options of a Eco",
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
              "description": "Identifier of a Eco offer",
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
          "description": "Post a new Eco option in your cart",
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
          "description": "Get information about Exchange offers",
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
          "description": "Get information about Exchange options",
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
          "description": "Get information about IP Load-Balancing offers",
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
          "description": "Get information about IP Load-Balancing options",
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
          "iamActions": [
            {
              "name": "account:apiovh:order/cart/ipReseller/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/cart/ipReseller/create",
              "required": true
            }
          ],
          "noAuthentication": false,
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
              "description": "Identifier of the IP address reseller offer",
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
              "dataType": "order.cart.ItemConfigurationCreation",
              "description": "Request Body",
              "fullType": "order.cart.ItemConfigurationCreation",
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
              "description": "Configuration ID",
              "fullType": "long",
              "name": "configurationId",
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
              "description": "Configuration ID",
              "fullType": "long",
              "name": "configurationId",
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get information about CloudLinux licenses offers",
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
          "description": "Get information about cPanel licenses offers",
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get information about Directadmin licenses offers",
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
          "description": "Get information about Plesk licenses offers",
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
          "description": "Get information about Plesk license options",
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
          "description": "Get information about SqlServer licenses offers",
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get information about Virtuozzo licenses offers",
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
          "description": "Get information about Windows licenses offers",
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get information about Worklight licenses offers",
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about Logs offers",
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
          "description": "Get information about Logs options",
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
          "description": "Get information about NAS HA offers",
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
          "description": "Get information about NAS HA options",
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
      "description": "Order a NetApp offer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about NetApp offers",
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
          "description": "Post a new NetApp offer item in your cart",
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
      "path": "/order/cart/{cartId}/netapp"
    },
    {
      "description": "NetApp Options",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about NetApp options",
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
              "description": "Identifier of the NetApp offer you want to consult options",
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
          "description": "Post a new NetApp option in your cart",
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
      "path": "/order/cart/{cartId}/netapp/options"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about a Nutanix",
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
          "description": "Post a new Nutanix item in your cart",
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
      "path": "/order/cart/{cartId}/nutanix"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about the options of a Nutanix",
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
              "description": "Identifier of a Nutanix offer",
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
          "description": "Post a new Nutanix option in your cart",
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
      "path": "/order/cart/{cartId}/nutanix/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about Office 365 licenses",
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
          "description": "Get information about Office 365 options",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about a officePrepaid",
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
          "description": "Post a new officePrepaid item in your cart",
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
      "path": "/order/cart/{cartId}/officePrepaid"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about officePrepaid options",
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
              "description": "Identifier of a officePrepaid offer",
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
          "description": "Post a new officePrepaid option in your cart",
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
      "path": "/order/cart/{cartId}/officePrepaid/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about OVHcloud Connect offers",
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
          "description": "Get information about a packs professional services",
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
          "description": "Post a new packs professional services item in your cart",
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
      "path": "/order/cart/{cartId}/packsProfessionalServices"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about packs professional services options",
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
              "description": "Identifier of a packs professional services offer",
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
          "description": "Post a new packs professional services option in your cart",
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
      "path": "/order/cart/{cartId}/packsProfessionalServices/options"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about Hosted Private Cloud offers",
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
          "description": "Get information about Hosted Private Cloud options",
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
          "description": "Get information about Private Cloud CDI offers",
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
          "description": "Get information about Private Cloud CDI options",
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
          "description": "Get information about Private Cloud Dedicated Cloud offers",
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
          "description": "Get information about Private Cloud Dedicated Cloud options",
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
          "description": "Get information about Hosted Private Cloud offers",
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
          "description": "Get information about Hosted Private Cloud options",
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
          "description": "Get information about Private Cloud Reseller offers",
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
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Private Cloud Reseller item in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
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
          "description": "Get information about Private Cloud Reseller options",
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
          "noAuthentication": false,
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
          "description": "Get information about Private Cloud Reseller Enterprise offers",
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
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new Private Cloud Reseller Enterprise item in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
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
          "description": "Get information about Private Cloud Reseller Enterprise options",
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
          "noAuthentication": false,
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
          "description": "Get information about Private Cloud SDDC offers",
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
          "description": "Get information about Private Cloud SDDC options",
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
          "description": "Get information about SSL Comodo offers",
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
          "description": "Post a new SSL Comodo item in your cart",
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
          "description": "Get information about SSL Comodo options",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new SSL Comodo option in your cart",
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
          "description": "Get information about SSL Gateway offers",
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
          "description": "Get information about SSL Gateway options",
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
          "description": "Get information about Veeam Cloud Connect offers",
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
          "description": "Get information about Veeam Enterprise offers",
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
          "description": "Get information about Veeam Enterprise options",
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
          "description": "Get information about VPS offers",
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
          "description": "Get information about VPS options",
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
          "description": "Get information about vRack offers",
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
          "description": "Get information about vRack offers",
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
          "responseType": "order.cart.GenericProductDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new vRack item in your cart",
          "httpMethod": "POST",
          "noAuthentication": false,
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
          "description": "Get information about webHosting offers",
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
          "description": "Get information about webHosting options",
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/baremetalServers/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/baremetalServers/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/baremetalServers/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/cloud/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/cloud/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/cloud/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/dedicated/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/dedicated/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/dedicated/create",
              "required": true
            }
          ],
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
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cartServiceOption/dedicated/{serviceName}"
    },
    {
      "description": "Operations about the DNS service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/dns/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cartServiceOption/dns"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/dns/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about additional Domain offer for your service",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/dns/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of DNS service",
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/dns/create",
              "required": true
            }
          ],
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
              "description": "Identifier of the additional Domain offer",
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
              "description": "The internal ID of DNS service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cartServiceOption/dns/{serviceName}"
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/domain/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/domain/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/domain/create",
              "required": true
            }
          ],
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
              "description": "Identifier of the additional Domain offer",
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/ipLoadbalancing/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/ipLoadbalancing/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/ipLoadbalancing/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/logs/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/logs/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/logs/create",
              "required": true
            }
          ],
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
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cartServiceOption/logs/{serviceName}"
    },
    {
      "description": "Operations about the CLUSTER service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/nutanix/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cartServiceOption/nutanix"
    },
    {
      "description": "Listing offers /order/cartServiceOptions/nutanix/#serviceName#",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get informations about additional Nutanix offer for your service",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/nutanix/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of nutanix service",
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
          "description": "Post an additional nutanix option in your cart",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/nutanix/create",
              "required": true
            }
          ],
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
              "description": "Identifier of the additional nutanix offer",
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
              "description": "The internal ID of nutanix service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.cart.Item"
        }
      ],
      "path": "/order/cartServiceOption/nutanix/{serviceName}"
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloud/get",
              "required": true
            }
          ],
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
          "description": "Get informations about additional Dedicated Cloud offer for your service",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloud/get",
              "required": true
            }
          ],
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Dedicated Cloud option in your cart",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloud/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloudEnterprise/get",
              "required": true
            }
          ],
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
          "description": "Get informations about additional Dedicated Cloud offer for your service",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloudEnterprise/get",
              "required": true
            }
          ],
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Dedicated Cloud option in your cart",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloudEnterprise/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloudReseller/get",
              "required": true
            }
          ],
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
          "description": "Get informations about additional Dedicated Cloud offer for your service",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloudReseller/get",
              "required": true
            }
          ],
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Dedicated Cloud option in your cart",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloudReseller/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloudResellerEnterprise/get",
              "required": true
            }
          ],
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
          "description": "Get informations about additional Dedicated Cloud Enterprise offer for your service",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloudResellerEnterprise/get",
              "required": true
            }
          ],
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Dedicated Cloud Enterprise option in your cart",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/privateCloudResellerEnterprise/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/sharepoint/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/sharepoint/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/sharepoint/create",
              "required": true
            }
          ],
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
              "description": "Identifier of the additional Sharepoint offer",
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/sslGateway/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/sslGateway/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/sslGateway/create",
              "required": true
            }
          ],
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
              "description": "Identifier of the additional SSL Gateway offer",
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/vps/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/vps/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/vps/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/webHosting/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/webHosting/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/webHosting/create",
              "required": true
            }
          ],
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
              "description": "Identifier of the additional Web Hosting offer",
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
      "description": "Operations about the WEBPAAS service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/webPaaS/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
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
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/webPaaS/get",
              "required": true
            }
          ],
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
          "responseType": "order.cart.GenericOptionDefinition[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post an additional Web PaaS option in your cart",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:cartServiceOption/webPaaS/create",
              "required": true
            }
          ],
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
          "responseType": "order.cart.Item"
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
          "responseType": "order.catalog.dedicated.Catalog"
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
          "responseType": "order.catalog.dedicated.Catalog"
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
            "deletionDate": "2023-02-23T00:00:00Z",
            "deprecatedDate": "2023-01-23T10:00:00Z",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
            "deletionDate": "2019-09-28T00:00:00+01:00",
            "deprecatedDate": "2019-08-28T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Retrieve information of Dedicated Cloud CDI catalog",
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
          "description": "Retrieve information of Hosted Dedicated Cloud Enterprise catalog",
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
          "description": "Retrieve information of Dedicated Cloud Reseller catalog",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/catalog/formatted/privateCloudReseller/get",
              "required": true
            }
          ],
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
          "description": "Retrieve information of Dedicated Cloud Reseller Enterprise catalog",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/catalog/formatted/privateCloudResellerEnterprise/get",
              "required": true
            }
          ],
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
          "description": "Retrieve information of Dedicated Cloud SDDC catalog",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information of catalog",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/catalog/private/privateCloud/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the private catalog you want to consult",
              "fullType": "string",
              "name": "catalogName",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Subsidiary of the country you want to consult private catalog",
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
          "description": "Retrieve Cloud DB catalog",
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
      "path": "/order/catalog/public/cloudDB"
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
      "description": "",
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
          "description": "Retrieve Email Domain catalog",
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
      "path": "/order/catalog/public/emailDomain"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
      "description": "Operations linked to IP Load Balancing catalog",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve IP Load Balancing catalog",
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
      "path": "/order/catalog/public/ipLoadbalancing"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve Logs catalog",
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
      "path": "/order/catalog/public/logs"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
      "description": "",
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
      "description": "",
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
          "description": "Retrieve Office Prepaid catalog",
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
            "description": "Beta version",
            "value": "BETA"
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
      "description": "Operations linked to packs professional services catalog",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve packs_professional_services catalog",
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
      "path": "/order/catalog/public/packsProfessionalServices"
    },
    {
      "description": "",
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
      "description": "",
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
      "description": "Operations about the CDNANYCAST service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/cdn/dedicated"
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
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/backend/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Backend number that will be ordered",
              "fullType": "long",
              "name": "backend",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/backend/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "long",
              "description": "Backend number that will be ordered",
              "fullType": "long",
              "name": "backend",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/backend/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/cacheRule/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "cdnanycast.OrderCacheRuleEnum",
              "description": "cache rule upgrade option to 100 or 1000",
              "fullType": "cdnanycast.OrderCacheRuleEnum",
              "name": "cacheRule",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/cacheRule/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "cdnanycast.OrderCacheRuleEnum",
              "description": "cache rule upgrade option to 100 or 1000",
              "fullType": "cdnanycast.OrderCacheRuleEnum",
              "name": "cacheRule",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/cacheRule/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/quota/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your CDN offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "cdnanycast.OrderQuotaEnum",
              "description": "quota number in TB that will be added to the CDN service",
              "fullType": "cdnanycast.OrderQuotaEnum",
              "name": "quota",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/quota/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "cdnanycast.OrderQuotaEnum",
              "description": "quota number in TB that will be added to the CDN service",
              "fullType": "cdnanycast.OrderQuotaEnum",
              "name": "quota",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:cdn/dedicated/quota/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/cdn/dedicated/{serviceName}/quota/{duration}"
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
          "iamActions": [
            {
              "name": "account:apiovh:order/cdn/dedicated/new/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/cdn/dedicated/new/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/cdn/dedicated/new/create",
              "required": true
            }
          ],
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
      "description": "Operations about the PUBLICCLOUD service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:cloud/project/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cloud/project/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:cloud/project/credit/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The project id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Amount to add in your cloud credit",
              "fullType": "long",
              "name": "amount",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:cloud/project/credit/create",
              "required": true
            }
          ],
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
      "description": "Operations about the HOUSING service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/housing/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/housing/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/housing/APC/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/housing/APC/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Housing bay",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/housing/APC/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Housing bay",
              "fullType": "string",
              "name": "serviceName",
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
      "description": "Operations about the DEDICATED service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/backupStorage/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "description": "The capacity in gigabytes of your backup storage",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/backupStorage/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "description": "The capacity in gigabytes of your backup storage",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "name": "capacity",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/backupStorage/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/bandwidth/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.BandwidthOrderEnum",
              "description": "Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthOrderEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.server.BandwidthOrderTypeEnum",
              "description": "bandwidth type",
              "fullType": "dedicated.server.BandwidthOrderTypeEnum",
              "name": "type",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/bandwidth/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "dedicated.server.BandwidthOrderEnum",
              "description": "Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthOrderEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicated.server.BandwidthOrderTypeEnum",
              "description": "bandwidth type",
              "fullType": "dedicated.server.BandwidthOrderTypeEnum",
              "name": "type",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/bandwidth/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BandwidthOrderEnum",
              "description": "Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthOrderEnum",
              "name": "bandwidth",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.server.BandwidthOrderTypeEnum",
              "description": "bandwidth type",
              "fullType": "dedicated.server.BandwidthOrderTypeEnum",
              "name": "type",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/bandwidthvRack/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.BandwidthvRackOrderEnum",
              "description": "vRack Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthvRackOrderEnum",
              "name": "bandwidth",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/bandwidthvRack/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "dedicated.server.BandwidthvRackOrderEnum",
              "description": "vRack Bandwidth to allocate",
              "fullType": "dedicated.server.BandwidthvRackOrderEnum",
              "name": "bandwidth",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/bandwidthvRack/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}"
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/feature/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "name": "feature",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/feature/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "description": "the feature",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "name": "feature",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/feature/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/firewall/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.FirewallModelEnum",
              "description": "Firewall type",
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/firewall/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "dedicated.server.FirewallModelEnum",
              "description": "Firewall type",
              "fullType": "dedicated.server.FirewallModelEnum",
              "name": "firewallModel",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/firewall/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/firewall/{duration}"
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/ipMigration/get",
              "required": true
            }
          ],
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
              "dataType": "ipBlock",
              "description": "The IP to move to this server",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "IP migration token",
              "fullType": "string",
              "name": "token",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/ipMigration/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "ipBlock",
              "description": "The IP to move to this server",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "IP migration token",
              "fullType": "string",
              "name": "token",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/ipMigration/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "IP migration token",
              "fullType": "string",
              "name": "token",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/kvm/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/kvm/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/kvm/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/kvmExpress/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/kvmExpress/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/kvmExpress/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/professionalUse/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/professionalUse/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/professionalUse/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/dedicated/server/{serviceName}/professionalUse/{duration}"
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/traffic/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.TrafficOrderEnum",
              "description": "amount of traffic to allocate",
              "fullType": "dedicated.server.TrafficOrderEnum",
              "name": "traffic",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/traffic/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "dedicated.server.TrafficOrderEnum",
              "description": "amount of traffic to allocate",
              "fullType": "dedicated.server.TrafficOrderEnum",
              "name": "traffic",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/traffic/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/usbKey/get",
              "required": true
            }
          ],
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
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "description": "Capacity in gigabytes",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "name": "capacity",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/usbKey/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "description": "Capacity in gigabytes",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "name": "capacity",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:dedicated/server/usbKey/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "description": "List VMware on OVHcloud service options",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/get",
              "required": true
            }
          ],
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
      "description": "Order additional bandwidth for your VMware on OVHcloud",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/additionalBandwidth/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "description": "How much additional bandwidth do you want ?",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "name": "bandwidth",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/additionalBandwidth"
    },
    {
      "description": "Order additional bandwidth for your VMware on OVHcloud",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/additionalBandwidth/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "description": "How much additional bandwidth do you want ?",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "name": "bandwidth",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/additionalBandwidth/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/filer/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Datacenter where the filer will be mounted (if not specified, will be mounted in each Datacenter of this VMware on OVHcloud)",
              "fullType": "long",
              "name": "datacenterId",
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
              "dataType": "long",
              "description": "Quantity of filer you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/filer/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "long",
              "description": "Datacenter where the filer will be mounted (if not specified, will be mounted in each Datacenter of this VMware on OVHcloud)",
              "fullType": "long",
              "name": "datacenterId",
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
              "dataType": "long",
              "description": "Quantity of filer you want to order (default 1)",
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
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/filer/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter where the filer will be mounted (if not specified, will be mounted in each Datacenter of this VMware on OVHcloud)",
              "fullType": "long",
              "name": "datacenterId",
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
              "dataType": "long",
              "description": "Quantity of filer you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/host/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of hosts you want to order (default 1)",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/host/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "long",
              "description": "Datacenter where the Host will be added",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "query",
              "required": true
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
              "description": "Quantity of hosts you want to order (default 1)",
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
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/privateCloud",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/host/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
      "path": "/order/dedicatedCloud/{serviceName}/host/{duration}"
    },
    {
      "description": "Order an IP block for your VMware on OVHcloud",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/ip/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)",
              "fullType": "string",
              "name": "description",
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
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)",
              "fullType": "string",
              "name": "networkName",
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
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)",
              "fullType": "string",
              "name": "usage",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/dedicatedCloud/{serviceName}/ip"
    },
    {
      "description": "Order an IP block for your VMware on OVHcloud",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/ip/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "description": "This Ip block country",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)",
              "fullType": "string",
              "name": "description",
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
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)",
              "fullType": "string",
              "name": "networkName",
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
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)",
              "fullType": "string",
              "name": "usage",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/ip/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)",
              "fullType": "string",
              "name": "description",
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
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)",
              "fullType": "string",
              "name": "networkName",
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
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)",
              "fullType": "string",
              "name": "usage",
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
      "path": "/order/dedicatedCloud/{serviceName}/ip/{duration}"
    },
    {
      "description": "Enable windows templates (SPLA) in your VMware on OVHcloud",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/spla/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/spla/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/upgradeRessource/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The id of a particular ressource you want to upgrade in your VMware on OVHcloud (useless for \"all\" UpgradeRessourceTypeEnum)",
              "fullType": "long",
              "name": "upgradedRessourceId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "description": "The type of ressource you want to upgrade.",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "name": "upgradedRessourceType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "description": "The type of upgrade you want to process on the ressource(s)",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "name": "upgradeType",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/upgradeRessource/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "long",
              "description": "The id of a particular ressource you want to upgrade in your VMware on OVHcloud (useless for \"all\" UpgradeRessourceTypeEnum)",
              "fullType": "long",
              "name": "upgradedRessourceId",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "description": "The type of ressource you want to upgrade.",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "name": "upgradedRessourceType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "description": "The type of upgrade you want to process on the ressource(s)",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "name": "upgradeType",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/upgradeRessource/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The id of a particular ressource you want to upgrade in your VMware on OVHcloud (useless for \"all\" UpgradeRessourceTypeEnum)",
              "fullType": "long",
              "name": "upgradedRessourceId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "description": "The type of ressource you want to upgrade.",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "name": "upgradedRessourceType",
              "paramType": "body",
              "required": true
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/vdi/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
              "dataType": "ip",
              "description": "An available ip from one of your VMware on OVHcloud public IP blocks",
              "fullType": "ip",
              "name": "firstPublicIpAddress",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Another available ip from one of your VMware on OVHcloud public IP blocks",
              "fullType": "ip",
              "name": "secondPublicIpAddress",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:pccVMware/vdi/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Datacenter where the VDI option will be enabled",
              "fullType": "long",
              "name": "datacenterId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "An available ip from one of your VMware on OVHcloud public IP blocks",
              "fullType": "ip",
              "name": "firstPublicIpAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "Another available ip from one of your VMware on OVHcloud public IP blocks",
              "fullType": "ip",
              "name": "secondPublicIpAddress",
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
          "iamActions": [
            {
              "name": "order:apiovh:domain/zone/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/domain/zone"
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
          "iamActions": [
            {
              "name": "order:apiovh:domain/zone/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:domain/zone/dnsAnycast/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:domain/zone/dnsAnycast/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
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
          "iamActions": [
            {
              "name": "order:apiovh:domain/zone/dnsAnycast/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
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
          "iamActions": [
            {
              "name": "order:apiovh:domain/zone/new/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:domain/zone/new/create",
              "required": true
            }
          ],
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
      "description": "Operations about the MSSERVICES service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/account/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/account/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/account/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "email.exchange.OvhLicenceEnum",
              "description": "Licence type for the account",
              "fullType": "email.exchange.OvhLicenceEnum",
              "name": "licence",
              "paramType": "body",
              "required": true
            },
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
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/accountUpgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/accountUpgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/accountUpgrade/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/diskSpace/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/diskSpace/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/outlook/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/outlook/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
              "paramType": "path",
              "required": true
            },
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/outlook/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
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
          "iamActions": [
            {
              "name": "order:apiovh:email/exchange/service/upgrade/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "description": "The internal name of your exchange organization",
              "fullType": "string",
              "name": "organizationName",
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
          "iamActions": [
            {
              "name": "order:apiovh:hosting/web/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/hosting/web"
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
          "iamActions": [
            {
              "name": "order:apiovh:hosting/web/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:hosting/web/upgrade/get",
              "required": true
            }
          ],
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
              "dataType": "boolean",
              "description": "Indicates that order will be processed with waiving retractation period",
              "fullType": "boolean",
              "name": "waiveRetractationPeriod",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            {
              "name": "order:apiovh:hosting/web/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "boolean",
              "description": "Indicates that order will be processed with waiving retractation period",
              "fullType": "boolean",
              "name": "waiveRetractationPeriod",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            {
              "name": "order:apiovh:hosting/web/upgrade/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
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
              "dataType": "boolean",
              "description": "Indicates that order will be processed with waiving retractation period",
              "fullType": "boolean",
              "name": "waiveRetractationPeriod",
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
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/cloudLinux/new/get",
              "required": true
            }
          ],
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
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/cloudLinux/new/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
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
              "dataType": "license.CloudLinuxVersionEnum",
              "description": "This license version",
              "fullType": "license.CloudLinuxVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/cloudLinux/new/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:license/cpanel/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/cpanel"
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
          "iamActions": [
            {
              "name": "order:apiovh:license/cpanel/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:license/cpanel/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "Wanted new version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:license/cpanel/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "Wanted new version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:license/cpanel/upgrade/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/cpanel/new/get",
              "required": true
            }
          ],
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
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/cpanel/new/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableCpanelVersionEnum",
              "name": "version",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/cpanel/new/create",
              "required": true
            }
          ],
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
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderableCpanelVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableCpanelVersionEnum",
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
      "path": "/order/license/cpanel/new/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/directadmin/new/get",
              "required": true
            }
          ],
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
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
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
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/directadmin/new/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/directadmin/new/create",
              "required": true
            }
          ],
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
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableDirectAdminVersionEnum",
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/office/new/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/office/new/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/office/new/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:license/plesk/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/plesk"
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
          "iamActions": [
            {
              "name": "order:apiovh:license/plesk/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:license/plesk/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Plesk license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
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
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
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
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
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
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
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
          "iamActions": [
            {
              "name": "order:apiovh:license/plesk/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
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
              "dataType": "license.OrderableAntispamEnum",
              "description": "The antispam currently enabled on this Plesk License",
              "fullType": "license.OrderableAntispamEnum",
              "name": "antispam",
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
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
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
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
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
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
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
          "iamActions": [
            {
              "name": "order:apiovh:license/plesk/upgrade/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableAntispamEnum",
              "description": "The antispam currently enabled on this Plesk License",
              "fullType": "license.OrderableAntispamEnum",
              "name": "antispam",
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
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
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
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
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
              "dataType": "license.PleskVersionEnum",
              "description": "This license version",
              "fullType": "license.PleskVersionEnum",
              "name": "version",
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
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/plesk/{serviceName}/upgrade/{duration}"
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/plesk/new/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
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
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": false
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
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
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
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
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
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/plesk/new/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
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
              "dataType": "license.PleskApplicationSetEnum",
              "description": "Wanted application set",
              "fullType": "license.PleskApplicationSetEnum",
              "name": "applicationSet",
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
              "dataType": "ipv4",
              "description": "Ip on which this license would be installed",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
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
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
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
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/plesk/new/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.OrderableAntivirusEnum",
              "description": "The antivirus to enable on this Plesk license",
              "fullType": "license.OrderableAntivirusEnum",
              "name": "antivirus",
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
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "description": "This license domain number",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "body",
              "required": false
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
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "description": "The amount of language pack numbers to include in this licences",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "name": "languagePackNumber",
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
              "dataType": "license.LicenseTypeEnum",
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #",
              "fullType": "license.LicenseTypeEnum",
              "name": "serviceType",
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
              "dataType": "boolean",
              "description": "WordpressToolkit option activation",
              "fullType": "boolean",
              "name": "wordpressToolkit",
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
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:license/sqlserver/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/sqlserver"
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
          "iamActions": [
            {
              "name": "order:apiovh:license/sqlserver/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:license/sqlserver/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your SQL Server license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:license/sqlserver/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:license/sqlserver/upgrade/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/sqlserver/{serviceName}/upgrade/{duration}"
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/sqlserver/new/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/sqlserver/new/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
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
              "dataType": "license.SqlServerVersionEnum",
              "description": "This license version",
              "fullType": "license.SqlServerVersionEnum",
              "name": "version",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/sqlserver/new/create",
              "required": true
            }
          ],
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
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:license/virtuozzo/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/virtuozzo"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:license/virtuozzo/get",
              "required": true
            }
          ],
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
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:license/virtuozzo/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Virtuozzo license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "query",
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
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:license/virtuozzo/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:license/virtuozzo/upgrade/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/virtuozzo/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/virtuozzo/new/get",
              "required": true
            }
          ],
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
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
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
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/virtuozzo/new/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "description": "How much container is this license able to manage ...",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "name": "containerNumber",
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
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/virtuozzo/new/create",
              "required": true
            }
          ],
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
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "description": "This license version",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
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
      "path": "/order/license/virtuozzo/new/{duration}"
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
          "iamActions": [
            {
              "name": "order:apiovh:license/windows/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/windows"
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
          "iamActions": [
            {
              "name": "order:apiovh:license/windows/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:license/windows/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Windows license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
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
              "dataType": "license.WindowsOsVersionEnum",
              "description": "The windows version you want to enable on your windows license",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            {
              "name": "order:apiovh:license/windows/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
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
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "The windows version you want to enable on your windows license",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": false
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
          "iamActions": [
            {
              "name": "order:apiovh:license/windows/upgrade/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.WindowsSqlVersionEnum",
              "description": "The SQL Server version to enable on this license Windows license",
              "fullType": "license.WindowsSqlVersionEnum",
              "name": "sqlVersion",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "license.WindowsOsVersionEnum",
              "description": "The windows version you want to enable on your windows license",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/windows/{serviceName}/upgrade/{duration}"
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/windows/new/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/windows/new/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
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
              "dataType": "license.WindowsOsVersionEnum",
              "description": "This license version",
              "fullType": "license.WindowsOsVersionEnum",
              "name": "version",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "account:apiovh:order/license/windows/new/create",
              "required": true
            }
          ],
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
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:license/worklight/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/license/worklight"
    },
    {
      "description": "List available options for this service",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed options",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:license/worklight/get",
              "required": true
            }
          ],
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
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:license/worklight/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your WorkLight license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.WorkLightVersionEnum",
              "description": "This license version",
              "fullType": "license.WorkLightVersionEnum",
              "name": "version",
              "paramType": "query",
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
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:license/worklight/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "license.WorkLightVersionEnum",
              "description": "This license version",
              "fullType": "license.WorkLightVersionEnum",
              "name": "version",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:license/worklight/upgrade/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/license/worklight/{serviceName}/upgrade/{duration}"
    },
    {
      "description": "Order a new license on a given Ip with some given options",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'new' option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/worklight/new/get",
              "required": true
            }
          ],
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
              "dataType": "boolean",
              "description": "Does your company have less than 1000 potential users",
              "fullType": "boolean",
              "name": "lessThan1000Users",
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
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/worklight/new/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
              "required": true
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
              "dataType": "boolean",
              "description": "Does your company have less than 1000 potential users",
              "fullType": "boolean",
              "name": "lessThan1000Users",
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
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2023-02-16T00:00:00+01:00",
            "deprecatedDate": "2023-01-16T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:order/license/worklight/new/create",
              "required": true
            }
          ],
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
              "dataType": "boolean",
              "description": "Does your company have less than 1000 potential users",
              "fullType": "boolean",
              "name": "lessThan1000Users",
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
      "description": "Operations about the DEDICATED-OPTION service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/baremetalPrivateBandwidth/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/baremetalPrivateBandwidth/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/baremetalPrivateBandwidth/get",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/baremetalPrivateBandwidth/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/baremetalPublicBandwidth/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/baremetalPublicBandwidth/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/baremetalPublicBandwidth/get",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/baremetalPublicBandwidth/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/cephaas/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/cephaas/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/cephaas/get",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/cephaas/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/cloudDB/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/cloudDB/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/cloudDB/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of your cloudDB service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
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
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/cloudDB/create",
              "required": true
            }
          ],
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
              "description": "The internal ID of your cloudDB service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/ipLoadbalancing/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/ipLoadbalancing/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/ipLoadbalancing/get",
              "required": true
            }
          ],
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
              "description": "The internal ID of your IPLB service",
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/ipLoadbalancing/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/licensecPanel/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/licensecPanel/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/licensecPanel/get",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/licensecPanel/create",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/licensePlesk/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/licensePlesk/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/licensePlesk/get",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/licensePlesk/create",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/licensePlesk/{serviceName}/{planCode}"
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/logs/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/logs/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/logs/get",
              "required": true
            }
          ],
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
              "description": "The internal ID of DBaaS Logs service",
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/logs/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateCloud/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateCloud/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateCloud/get",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateCloud/create",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateCloudManagementFee/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateCloudManagementFee/get",
              "required": true
            }
          ],
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
          "responseType": "order.cart.GenericProductDefinition[]"
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateCloudManagementFee/get",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateCloudManagementFee/create",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        }
      ],
      "path": "/order/upgrade/privateCloudManagementFee/{serviceName}/{planCode}"
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateSQL/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateSQL/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateSQL/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of your private SQL service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
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
              "dataType": "long",
              "description": "Quantity you want to upgrade to",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/privateSQL/create",
              "required": true
            }
          ],
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
              "description": "The internal ID of your private SQL service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Plan code of the offer you want to upgrade to",
              "fullType": "string",
              "name": "planCode",
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/vps/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/vps/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/vps/get",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/vps/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/vpsAdditionalDisk/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/vpsAdditionalDisk/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/vpsAdditionalDisk/get",
              "required": true
            }
          ],
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/vpsAdditionalDisk/create",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/webHosting/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/webHosting/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/webHosting/get",
              "required": true
            }
          ],
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
              "description": "The internal ID of your webhosting service",
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
          "responseType": "order.upgrade.OperationAndOrder"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Perform the requested upgrade of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:upgrade/webHosting/create",
              "required": true
            }
          ],
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
          "description": "Veeam Cloud Connect order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:veeamCloudConnect/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:veeamCloudConnect/get",
              "required": true
            }
          ],
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
      "description": "Upgrade Veeam Cloud Connect offer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get allowed durations for 'upgrade' option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:veeamCloudConnect/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "veeamCloudConnect.Offer",
              "description": "The offer on which you want to be upgraded",
              "fullType": "veeamCloudConnect.Offer",
              "name": "offer",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade"
    },
    {
      "description": "Upgrade Veeam Cloud Connect offer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:veeamCloudConnect/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "veeamCloudConnect.Offer",
              "description": "The offer on which you want to be upgraded",
              "fullType": "veeamCloudConnect.Offer",
              "name": "offer",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:veeamCloudConnect/upgrade/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/additionalDisk/get",
              "required": true
            }
          ],
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
              "dataType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "description": "Size of the additional disk",
              "fullType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "name": "additionalDiskSize",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/additionalDisk/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "description": "Size of the additional disk",
              "fullType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "name": "additionalDiskSize",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/additionalDisk/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/automatedBackup/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/automatedBackup/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:vps/automatedBackup/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
            "deletionDate": "2014-07-06T00:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/cpanel/new",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'cpanel' option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:vps/cpanel/get",
              "required": true
            }
          ],
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
            "deletionDate": "2014-07-06T00:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/cpanel/new",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:vps/cpanel/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2014-07-06T00:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/cpanel/new",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:vps/cpanel/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/ftpbackup/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/ftpbackup/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:vps/ftpbackup/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/order/vps/{serviceName}/ftpbackup/{duration}"
    },
    {
      "description": "Create an order for a PLESK license",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2014-07-06T00:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/plesk/new",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'plesk' option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:vps/plesk/get",
              "required": true
            }
          ],
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
              "dataType": "vps.PleskLicenseDomainNumberEnum",
              "description": "Domain number you want to order a licence for",
              "fullType": "vps.PleskLicenseDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
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
            "deletionDate": "2014-07-06T00:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/plesk/new",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:vps/plesk/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "dataType": "vps.PleskLicenseDomainNumberEnum",
              "description": "Domain number you want to order a licence for",
              "fullType": "vps.PleskLicenseDomainNumberEnum",
              "name": "domainNumber",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2014-07-06T00:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/license/{serviceName}/plesk/new",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:vps/plesk/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/snapshot/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/snapshot/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:vps/snapshot/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/upgrade/get",
              "required": true
            }
          ],
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
              "description": "Model",
              "fullType": "string",
              "name": "model",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/upgrade/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
              "description": "Model",
              "fullType": "string",
              "name": "model",
              "paramType": "query",
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/upgrade/create",
              "required": true
            }
          ],
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
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
            "deletionDate": "2016-01-08T00:00:00+01:00",
            "deprecatedDate": "2015-12-26T08:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/vps/{serviceName}/automatedBackup",
            "value": "DEPRECATED"
          },
          "description": "Get allowed durations for 'veeam' option",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:vps/veeam/get",
              "required": true
            }
          ],
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
            "deletionDate": "2016-01-08T00:00:00+01:00",
            "deprecatedDate": "2015-12-26T08:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/vps/{serviceName}/automatedBackup",
            "value": "DEPRECATED"
          },
          "description": "Get prices and contracts information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "order:apiovh:vps/veeam/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "deletionDate": "2016-01-08T00:00:00+01:00",
            "deprecatedDate": "2015-12-26T08:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/vps/{serviceName}/automatedBackup",
            "value": "DEPRECATED"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:vps/veeam/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/windows/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "order:apiovh:vps/windows/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "responseType": "order.Order"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "order:apiovh:vps/windows/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Duration",
              "fullType": "string",
              "name": "duration",
              "paramType": "path",
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
          "iamActions": [
            {
              "name": "order:apiovh:vrack/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/order/vrack"
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
          "iamActions": [
            {
              "name": "order:apiovh:vrack/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/vrack/new/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "account:apiovh:order/vrack/new/create",
              "required": true
            }
          ],
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
    "complexType.SafeKeyValue<string>": {
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
          "description": "Unit of the value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "T",
          "readOnly": true,
          "required": false,
          "type": "T"
        }
      }
    },
    "complexType.UnitAndValue<double>": {
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "description": "Unit of the value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "T",
          "readOnly": true,
          "required": false,
          "type": "T"
        }
      }
    },
    "complexType.UnitAndValue<long>": {
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "description": "Unit of the value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "T",
          "readOnly": true,
          "required": false,
          "type": "T"
        }
      }
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
        "500",
        "1000",
        "5000",
        "10000"
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
        "4",
        "8",
        "16",
        "32",
        "64",
        "128",
        "256"
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
        "in",
        "it",
        "lt",
        "nl",
        "pl",
        "pt",
        "sg",
        "uk",
        "us"
      ],
      "enumType": "string",
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
        "16",
        "32",
        "64",
        "128",
        "256"
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
      "enumType": "string",
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
        "mac_x86_2016",
        "mac_x86_2019",
        "mac_x86_2021",
        "windows_x64_2016",
        "windows_x64_2019",
        "windows_x64_2021",
        "windows_x86_2016",
        "windows_x86_2019",
        "windows_x86_2021"
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
        "50",
        "300"
      ],
      "enumType": "long",
      "id": "accountQuotaEnum",
      "namespace": "email.exchange"
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
        "POWER_BETA_1",
        "PRO",
        "START",
        "hosting-free-100m",
        "hosting-performance-1",
        "hosting-performance-2",
        "hosting-performance-3",
        "hosting-performance-4",
        "hosting-perso",
        "hosting-pro",
        "hosting-starter",
        "hosting-starter-ovh"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "hosting.web"
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
        "cpanel-license-admin-cloud",
        "cpanel-license-plus-cloud",
        "cpanel-license-premier-cloud-100-accounts",
        "cpanel-license-premier-cloud-1000-accounts",
        "cpanel-license-premier-cloud-10000-accounts",
        "cpanel-license-premier-cloud-1100-accounts",
        "cpanel-license-premier-cloud-1200-accounts",
        "cpanel-license-premier-cloud-1300-accounts",
        "cpanel-license-premier-cloud-1400-accounts",
        "cpanel-license-premier-cloud-150-accounts",
        "cpanel-license-premier-cloud-1500-accounts",
        "cpanel-license-premier-cloud-1600-accounts",
        "cpanel-license-premier-cloud-1700-accounts",
        "cpanel-license-premier-cloud-1800-accounts",
        "cpanel-license-premier-cloud-1900-accounts",
        "cpanel-license-premier-cloud-200-accounts",
        "cpanel-license-premier-cloud-2000-accounts",
        "cpanel-license-premier-cloud-2100-accounts",
        "cpanel-license-premier-cloud-2200-accounts",
        "cpanel-license-premier-cloud-2300-accounts",
        "cpanel-license-premier-cloud-2400-accounts",
        "cpanel-license-premier-cloud-250-accounts",
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
        "cpanel-license-premier-metal-100-accounts",
        "cpanel-license-premier-metal-1000-accounts",
        "cpanel-license-premier-metal-10000-accounts",
        "cpanel-license-premier-metal-1100-accounts",
        "cpanel-license-premier-metal-1200-accounts",
        "cpanel-license-premier-metal-1300-accounts",
        "cpanel-license-premier-metal-1400-accounts",
        "cpanel-license-premier-metal-150-accounts",
        "cpanel-license-premier-metal-1500-accounts",
        "cpanel-license-premier-metal-1600-accounts",
        "cpanel-license-premier-metal-1700-accounts",
        "cpanel-license-premier-metal-1800-accounts",
        "cpanel-license-premier-metal-1900-accounts",
        "cpanel-license-premier-metal-200-accounts",
        "cpanel-license-premier-metal-2000-accounts",
        "cpanel-license-premier-metal-2100-accounts",
        "cpanel-license-premier-metal-2200-accounts",
        "cpanel-license-premier-metal-2300-accounts",
        "cpanel-license-premier-metal-2400-accounts",
        "cpanel-license-premier-metal-250-accounts",
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
        "cpanel-license-pro-cloud",
        "cpanel-license-solo-cloud",
        "cpanel-license-solo-metal",
        "cpanel-license-version-11",
        "cpanel-license-version-11-for-virtuozzo",
        "cpanel-license-version-11-for-vps",
        "version-admin-cloud",
        "version-plus-cloud",
        "version-premier-cloud-100",
        "version-premier-cloud-1000",
        "version-premier-cloud-10000",
        "version-premier-cloud-1100",
        "version-premier-cloud-1200",
        "version-premier-cloud-1300",
        "version-premier-cloud-1400",
        "version-premier-cloud-150",
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
        "version-premier-cloud-250",
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
        "version-premier-metal-100",
        "version-premier-metal-1000",
        "version-premier-metal-10000",
        "version-premier-metal-1100",
        "version-premier-metal-1200",
        "version-premier-metal-1300",
        "version-premier-metal-1400",
        "version-premier-metal-150",
        "version-premier-metal-1500",
        "version-premier-metal-1600",
        "version-premier-metal-1700",
        "version-premier-metal-1800",
        "version-premier-metal-1900",
        "version-premier-metal-200",
        "version-premier-metal-2000",
        "version-premier-metal-2100",
        "version-premier-metal-2200",
        "version-premier-metal-2300",
        "version-premier-metal-2400",
        "version-premier-metal-250",
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
        "1-extra-language-for-plesk12-for-vps",
        "2",
        "2-extra-languages-for-plesk12",
        "2-extra-languages-for-plesk12-for-vps",
        "3",
        "3-extra-languages-for-plesk12",
        "3-extra-languages-for-plesk12-for-vps",
        "4",
        "4-extra-languages-for-plesk12",
        "4-extra-languages-for-plesk12-for-vps",
        "5",
        "5-extra-languages-for-plesk12",
        "5-extra-languages-for-plesk12-for-vps",
        "unlimited",
        "unlimited-extra-languages-for-plesk12",
        "unlimited-extra-languages-for-plesk12-for-vps"
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
        "plesk-12-webadmin",
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
        "SQL_SERVER_2019_ENTERPRISE_EDITION_10_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_128_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_12_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_14_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_16_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_18_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_20_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_22_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_24_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_26_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_28_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_30_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_32_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_34_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_36_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_38_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_40_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_42_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_44_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_46_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_48_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_4_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_50_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_52_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_54_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_56_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_58_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_60_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_62_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_64_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_6_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_8_CORES",
        "SQL_SERVER_2019_ENTERPRISE_EDITION_96_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_128_CORES",
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
        "SQL_SERVER_2019_STANDARD_EDITION_34_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_36_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_38_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_40_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_42_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_44_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_46_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_48_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_50_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_52_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_54_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_56_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_58_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_60_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_62_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_64_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2019_STANDARD_EDITION_96_CORES",
        "SQL_SERVER_2019_WEB_EDITION_10_CORES",
        "SQL_SERVER_2019_WEB_EDITION_128_CORES",
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
        "SQL_SERVER_2019_WEB_EDITION_34_CORES",
        "SQL_SERVER_2019_WEB_EDITION_36_CORES",
        "SQL_SERVER_2019_WEB_EDITION_38_CORES",
        "SQL_SERVER_2019_WEB_EDITION_40_CORES",
        "SQL_SERVER_2019_WEB_EDITION_42_CORES",
        "SQL_SERVER_2019_WEB_EDITION_44_CORES",
        "SQL_SERVER_2019_WEB_EDITION_46_CORES",
        "SQL_SERVER_2019_WEB_EDITION_48_CORES",
        "SQL_SERVER_2019_WEB_EDITION_4_CORES",
        "SQL_SERVER_2019_WEB_EDITION_50_CORES",
        "SQL_SERVER_2019_WEB_EDITION_52_CORES",
        "SQL_SERVER_2019_WEB_EDITION_54_CORES",
        "SQL_SERVER_2019_WEB_EDITION_56_CORES",
        "SQL_SERVER_2019_WEB_EDITION_58_CORES",
        "SQL_SERVER_2019_WEB_EDITION_60_CORES",
        "SQL_SERVER_2019_WEB_EDITION_62_CORES",
        "SQL_SERVER_2019_WEB_EDITION_64_CORES",
        "SQL_SERVER_2019_WEB_EDITION_6_CORES",
        "SQL_SERVER_2019_WEB_EDITION_8_CORES",
        "SQL_SERVER_2019_WEB_EDITION_96_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_10_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_128_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_12_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_14_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_16_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_18_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_20_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_22_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_24_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_26_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_28_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_30_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_32_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_34_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_36_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_38_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_40_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_42_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_44_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_46_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_48_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_4_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_50_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_52_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_54_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_56_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_58_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_60_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_62_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_64_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_6_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_8_CORES",
        "SQL_SERVER_2022_ENTERPRISE_EDITION_96_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_10_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_128_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_12_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_14_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_16_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_18_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_20_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_22_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_24_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_26_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_28_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_30_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_32_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_34_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_36_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_38_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_40_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_42_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_44_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_46_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_48_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_4_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_50_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_52_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_54_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_56_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_58_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_60_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_62_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_64_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_6_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_8_CORES",
        "SQL_SERVER_2022_STANDARD_EDITION_96_CORES",
        "SQL_SERVER_2022_WEB_EDITION_10_CORES",
        "SQL_SERVER_2022_WEB_EDITION_128_CORES",
        "SQL_SERVER_2022_WEB_EDITION_12_CORES",
        "SQL_SERVER_2022_WEB_EDITION_14_CORES",
        "SQL_SERVER_2022_WEB_EDITION_16_CORES",
        "SQL_SERVER_2022_WEB_EDITION_18_CORES",
        "SQL_SERVER_2022_WEB_EDITION_20_CORES",
        "SQL_SERVER_2022_WEB_EDITION_22_CORES",
        "SQL_SERVER_2022_WEB_EDITION_24_CORES",
        "SQL_SERVER_2022_WEB_EDITION_26_CORES",
        "SQL_SERVER_2022_WEB_EDITION_28_CORES",
        "SQL_SERVER_2022_WEB_EDITION_30_CORES",
        "SQL_SERVER_2022_WEB_EDITION_32_CORES",
        "SQL_SERVER_2022_WEB_EDITION_34_CORES",
        "SQL_SERVER_2022_WEB_EDITION_36_CORES",
        "SQL_SERVER_2022_WEB_EDITION_38_CORES",
        "SQL_SERVER_2022_WEB_EDITION_40_CORES",
        "SQL_SERVER_2022_WEB_EDITION_42_CORES",
        "SQL_SERVER_2022_WEB_EDITION_44_CORES",
        "SQL_SERVER_2022_WEB_EDITION_46_CORES",
        "SQL_SERVER_2022_WEB_EDITION_48_CORES",
        "SQL_SERVER_2022_WEB_EDITION_4_CORES",
        "SQL_SERVER_2022_WEB_EDITION_50_CORES",
        "SQL_SERVER_2022_WEB_EDITION_52_CORES",
        "SQL_SERVER_2022_WEB_EDITION_54_CORES",
        "SQL_SERVER_2022_WEB_EDITION_56_CORES",
        "SQL_SERVER_2022_WEB_EDITION_58_CORES",
        "SQL_SERVER_2022_WEB_EDITION_60_CORES",
        "SQL_SERVER_2022_WEB_EDITION_62_CORES",
        "SQL_SERVER_2022_WEB_EDITION_64_CORES",
        "SQL_SERVER_2022_WEB_EDITION_6_CORES",
        "SQL_SERVER_2022_WEB_EDITION_8_CORES",
        "SQL_SERVER_2022_WEB_EDITION_96_CORES",
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
        "sql-server-2019-license-enterprise-edition-10-cores",
        "sql-server-2019-license-enterprise-edition-12-cores",
        "sql-server-2019-license-enterprise-edition-128-cores",
        "sql-server-2019-license-enterprise-edition-14-cores",
        "sql-server-2019-license-enterprise-edition-16-cores",
        "sql-server-2019-license-enterprise-edition-18-cores",
        "sql-server-2019-license-enterprise-edition-20-cores",
        "sql-server-2019-license-enterprise-edition-22-cores",
        "sql-server-2019-license-enterprise-edition-24-cores",
        "sql-server-2019-license-enterprise-edition-26-cores",
        "sql-server-2019-license-enterprise-edition-28-cores",
        "sql-server-2019-license-enterprise-edition-30-cores",
        "sql-server-2019-license-enterprise-edition-32-cores",
        "sql-server-2019-license-enterprise-edition-34-cores",
        "sql-server-2019-license-enterprise-edition-36-cores",
        "sql-server-2019-license-enterprise-edition-38-cores",
        "sql-server-2019-license-enterprise-edition-4-cores",
        "sql-server-2019-license-enterprise-edition-40-cores",
        "sql-server-2019-license-enterprise-edition-42-cores",
        "sql-server-2019-license-enterprise-edition-44-cores",
        "sql-server-2019-license-enterprise-edition-46-cores",
        "sql-server-2019-license-enterprise-edition-48-cores",
        "sql-server-2019-license-enterprise-edition-50-cores",
        "sql-server-2019-license-enterprise-edition-52-cores",
        "sql-server-2019-license-enterprise-edition-54-cores",
        "sql-server-2019-license-enterprise-edition-56-cores",
        "sql-server-2019-license-enterprise-edition-58-cores",
        "sql-server-2019-license-enterprise-edition-6-cores",
        "sql-server-2019-license-enterprise-edition-60-cores",
        "sql-server-2019-license-enterprise-edition-62-cores",
        "sql-server-2019-license-enterprise-edition-64-cores",
        "sql-server-2019-license-enterprise-edition-8-cores",
        "sql-server-2019-license-enterprise-edition-96-cores",
        "sql-server-2019-license-standard-edition-10-cores",
        "sql-server-2019-license-standard-edition-12-cores",
        "sql-server-2019-license-standard-edition-128-cores",
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
        "sql-server-2019-license-standard-edition-34-cores",
        "sql-server-2019-license-standard-edition-36-cores",
        "sql-server-2019-license-standard-edition-38-cores",
        "sql-server-2019-license-standard-edition-4-cores",
        "sql-server-2019-license-standard-edition-40-cores",
        "sql-server-2019-license-standard-edition-42-cores",
        "sql-server-2019-license-standard-edition-44-cores",
        "sql-server-2019-license-standard-edition-46-cores",
        "sql-server-2019-license-standard-edition-48-cores",
        "sql-server-2019-license-standard-edition-50-cores",
        "sql-server-2019-license-standard-edition-52-cores",
        "sql-server-2019-license-standard-edition-54-cores",
        "sql-server-2019-license-standard-edition-56-cores",
        "sql-server-2019-license-standard-edition-58-cores",
        "sql-server-2019-license-standard-edition-6-cores",
        "sql-server-2019-license-standard-edition-60-cores",
        "sql-server-2019-license-standard-edition-62-cores",
        "sql-server-2019-license-standard-edition-64-cores",
        "sql-server-2019-license-standard-edition-8-cores",
        "sql-server-2019-license-standard-edition-96-cores",
        "sql-server-2019-license-web-edition-10-cores",
        "sql-server-2019-license-web-edition-12-cores",
        "sql-server-2019-license-web-edition-128-cores",
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
        "sql-server-2019-license-web-edition-34-cores",
        "sql-server-2019-license-web-edition-36-cores",
        "sql-server-2019-license-web-edition-38-cores",
        "sql-server-2019-license-web-edition-4-cores",
        "sql-server-2019-license-web-edition-40-cores",
        "sql-server-2019-license-web-edition-42-cores",
        "sql-server-2019-license-web-edition-44-cores",
        "sql-server-2019-license-web-edition-46-cores",
        "sql-server-2019-license-web-edition-48-cores",
        "sql-server-2019-license-web-edition-50-cores",
        "sql-server-2019-license-web-edition-52-cores",
        "sql-server-2019-license-web-edition-54-cores",
        "sql-server-2019-license-web-edition-56-cores",
        "sql-server-2019-license-web-edition-58-cores",
        "sql-server-2019-license-web-edition-6-cores",
        "sql-server-2019-license-web-edition-60-cores",
        "sql-server-2019-license-web-edition-62-cores",
        "sql-server-2019-license-web-edition-64-cores",
        "sql-server-2019-license-web-edition-8-cores",
        "sql-server-2019-license-web-edition-96-cores",
        "sql-server-2022-license-enterprise-edition-10-cores",
        "sql-server-2022-license-enterprise-edition-12-cores",
        "sql-server-2022-license-enterprise-edition-128-cores",
        "sql-server-2022-license-enterprise-edition-14-cores",
        "sql-server-2022-license-enterprise-edition-16-cores",
        "sql-server-2022-license-enterprise-edition-18-cores",
        "sql-server-2022-license-enterprise-edition-20-cores",
        "sql-server-2022-license-enterprise-edition-22-cores",
        "sql-server-2022-license-enterprise-edition-24-cores",
        "sql-server-2022-license-enterprise-edition-26-cores",
        "sql-server-2022-license-enterprise-edition-28-cores",
        "sql-server-2022-license-enterprise-edition-30-cores",
        "sql-server-2022-license-enterprise-edition-32-cores",
        "sql-server-2022-license-enterprise-edition-34-cores",
        "sql-server-2022-license-enterprise-edition-36-cores",
        "sql-server-2022-license-enterprise-edition-38-cores",
        "sql-server-2022-license-enterprise-edition-4-cores",
        "sql-server-2022-license-enterprise-edition-40-cores",
        "sql-server-2022-license-enterprise-edition-42-cores",
        "sql-server-2022-license-enterprise-edition-44-cores",
        "sql-server-2022-license-enterprise-edition-46-cores",
        "sql-server-2022-license-enterprise-edition-48-cores",
        "sql-server-2022-license-enterprise-edition-50-cores",
        "sql-server-2022-license-enterprise-edition-52-cores",
        "sql-server-2022-license-enterprise-edition-54-cores",
        "sql-server-2022-license-enterprise-edition-56-cores",
        "sql-server-2022-license-enterprise-edition-58-cores",
        "sql-server-2022-license-enterprise-edition-6-cores",
        "sql-server-2022-license-enterprise-edition-60-cores",
        "sql-server-2022-license-enterprise-edition-62-cores",
        "sql-server-2022-license-enterprise-edition-64-cores",
        "sql-server-2022-license-enterprise-edition-8-cores",
        "sql-server-2022-license-enterprise-edition-96-cores",
        "sql-server-2022-license-standard-edition-10-cores",
        "sql-server-2022-license-standard-edition-12-cores",
        "sql-server-2022-license-standard-edition-128-cores",
        "sql-server-2022-license-standard-edition-14-cores",
        "sql-server-2022-license-standard-edition-16-cores",
        "sql-server-2022-license-standard-edition-18-cores",
        "sql-server-2022-license-standard-edition-20-cores",
        "sql-server-2022-license-standard-edition-22-cores",
        "sql-server-2022-license-standard-edition-24-cores",
        "sql-server-2022-license-standard-edition-26-cores",
        "sql-server-2022-license-standard-edition-28-cores",
        "sql-server-2022-license-standard-edition-30-cores",
        "sql-server-2022-license-standard-edition-32-cores",
        "sql-server-2022-license-standard-edition-34-cores",
        "sql-server-2022-license-standard-edition-36-cores",
        "sql-server-2022-license-standard-edition-38-cores",
        "sql-server-2022-license-standard-edition-4-cores",
        "sql-server-2022-license-standard-edition-40-cores",
        "sql-server-2022-license-standard-edition-42-cores",
        "sql-server-2022-license-standard-edition-44-cores",
        "sql-server-2022-license-standard-edition-46-cores",
        "sql-server-2022-license-standard-edition-48-cores",
        "sql-server-2022-license-standard-edition-50-cores",
        "sql-server-2022-license-standard-edition-52-cores",
        "sql-server-2022-license-standard-edition-54-cores",
        "sql-server-2022-license-standard-edition-56-cores",
        "sql-server-2022-license-standard-edition-58-cores",
        "sql-server-2022-license-standard-edition-6-cores",
        "sql-server-2022-license-standard-edition-60-cores",
        "sql-server-2022-license-standard-edition-62-cores",
        "sql-server-2022-license-standard-edition-64-cores",
        "sql-server-2022-license-standard-edition-8-cores",
        "sql-server-2022-license-standard-edition-96-cores",
        "sql-server-2022-license-web-edition-10-cores",
        "sql-server-2022-license-web-edition-12-cores",
        "sql-server-2022-license-web-edition-128-cores",
        "sql-server-2022-license-web-edition-14-cores",
        "sql-server-2022-license-web-edition-16-cores",
        "sql-server-2022-license-web-edition-18-cores",
        "sql-server-2022-license-web-edition-20-cores",
        "sql-server-2022-license-web-edition-22-cores",
        "sql-server-2022-license-web-edition-24-cores",
        "sql-server-2022-license-web-edition-26-cores",
        "sql-server-2022-license-web-edition-28-cores",
        "sql-server-2022-license-web-edition-30-cores",
        "sql-server-2022-license-web-edition-32-cores",
        "sql-server-2022-license-web-edition-34-cores",
        "sql-server-2022-license-web-edition-36-cores",
        "sql-server-2022-license-web-edition-38-cores",
        "sql-server-2022-license-web-edition-4-cores",
        "sql-server-2022-license-web-edition-40-cores",
        "sql-server-2022-license-web-edition-42-cores",
        "sql-server-2022-license-web-edition-44-cores",
        "sql-server-2022-license-web-edition-46-cores",
        "sql-server-2022-license-web-edition-48-cores",
        "sql-server-2022-license-web-edition-50-cores",
        "sql-server-2022-license-web-edition-52-cores",
        "sql-server-2022-license-web-edition-54-cores",
        "sql-server-2022-license-web-edition-56-cores",
        "sql-server-2022-license-web-edition-58-cores",
        "sql-server-2022-license-web-edition-6-cores",
        "sql-server-2022-license-web-edition-60-cores",
        "sql-server-2022-license-web-edition-62-cores",
        "sql-server-2022-license-web-edition-64-cores",
        "sql-server-2022-license-web-edition-8-cores",
        "sql-server-2022-license-web-edition-96-cores"
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
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_128_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_256_CORES",
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
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_512_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES",
        "WINDOWS_SERVER_2019_DATACENTER_EDITION_96_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_128_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_256_CORES",
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
        "WINDOWS_SERVER_2019_STANDARD_EDITION_512_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES",
        "WINDOWS_SERVER_2019_STANDARD_EDITION_96_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_10_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_128_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_12_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_14_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_16_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_18_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_20_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_22_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_24_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_256_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_26_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_28_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_30_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_32_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_34_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_36_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_38_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_40_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_42_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_44_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_46_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_48_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_50_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_512_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_52_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_54_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_56_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_58_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_60_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_62_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_64_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_8_CORES",
        "WINDOWS_SERVER_2022_DATACENTER_EDITION_96_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_10_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_128_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_12_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_14_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_16_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_18_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_20_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_22_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_24_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_256_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_26_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_28_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_30_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_32_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_34_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_36_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_38_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_40_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_42_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_44_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_46_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_48_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_50_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_512_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_52_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_54_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_56_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_58_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_60_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_62_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_64_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_8_CORES",
        "WINDOWS_SERVER_2022_STANDARD_EDITION_96_CORES",
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
        "windows-server-2019-license-datacenter-edition-128-cores",
        "windows-server-2019-license-datacenter-edition-14-cores",
        "windows-server-2019-license-datacenter-edition-16-cores",
        "windows-server-2019-license-datacenter-edition-18-cores",
        "windows-server-2019-license-datacenter-edition-20-cores",
        "windows-server-2019-license-datacenter-edition-22-cores",
        "windows-server-2019-license-datacenter-edition-24-cores",
        "windows-server-2019-license-datacenter-edition-256-cores",
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
        "windows-server-2019-license-datacenter-edition-512-cores",
        "windows-server-2019-license-datacenter-edition-52-cores",
        "windows-server-2019-license-datacenter-edition-54-cores",
        "windows-server-2019-license-datacenter-edition-56-cores",
        "windows-server-2019-license-datacenter-edition-58-cores",
        "windows-server-2019-license-datacenter-edition-60-cores",
        "windows-server-2019-license-datacenter-edition-62-cores",
        "windows-server-2019-license-datacenter-edition-64-cores",
        "windows-server-2019-license-datacenter-edition-8-cores",
        "windows-server-2019-license-datacenter-edition-96-cores",
        "windows-server-2019-license-standard-edition-10-cores",
        "windows-server-2019-license-standard-edition-12-cores",
        "windows-server-2019-license-standard-edition-128-cores",
        "windows-server-2019-license-standard-edition-14-cores",
        "windows-server-2019-license-standard-edition-16-cores",
        "windows-server-2019-license-standard-edition-18-cores",
        "windows-server-2019-license-standard-edition-20-cores",
        "windows-server-2019-license-standard-edition-22-cores",
        "windows-server-2019-license-standard-edition-24-cores",
        "windows-server-2019-license-standard-edition-256-cores",
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
        "windows-server-2019-license-standard-edition-512-cores",
        "windows-server-2019-license-standard-edition-52-cores",
        "windows-server-2019-license-standard-edition-54-cores",
        "windows-server-2019-license-standard-edition-56-cores",
        "windows-server-2019-license-standard-edition-58-cores",
        "windows-server-2019-license-standard-edition-60-cores",
        "windows-server-2019-license-standard-edition-62-cores",
        "windows-server-2019-license-standard-edition-64-cores",
        "windows-server-2019-license-standard-edition-8-cores",
        "windows-server-2019-license-standard-edition-96-cores",
        "windows-server-2022-license-datacenter-edition-10-cores",
        "windows-server-2022-license-datacenter-edition-12-cores",
        "windows-server-2022-license-datacenter-edition-128-cores",
        "windows-server-2022-license-datacenter-edition-14-cores",
        "windows-server-2022-license-datacenter-edition-16-cores",
        "windows-server-2022-license-datacenter-edition-18-cores",
        "windows-server-2022-license-datacenter-edition-20-cores",
        "windows-server-2022-license-datacenter-edition-22-cores",
        "windows-server-2022-license-datacenter-edition-24-cores",
        "windows-server-2022-license-datacenter-edition-256-cores",
        "windows-server-2022-license-datacenter-edition-26-cores",
        "windows-server-2022-license-datacenter-edition-28-cores",
        "windows-server-2022-license-datacenter-edition-30-cores",
        "windows-server-2022-license-datacenter-edition-32-cores",
        "windows-server-2022-license-datacenter-edition-34-cores",
        "windows-server-2022-license-datacenter-edition-36-cores",
        "windows-server-2022-license-datacenter-edition-38-cores",
        "windows-server-2022-license-datacenter-edition-40-cores",
        "windows-server-2022-license-datacenter-edition-42-cores",
        "windows-server-2022-license-datacenter-edition-44-cores",
        "windows-server-2022-license-datacenter-edition-46-cores",
        "windows-server-2022-license-datacenter-edition-48-cores",
        "windows-server-2022-license-datacenter-edition-50-cores",
        "windows-server-2022-license-datacenter-edition-512-cores",
        "windows-server-2022-license-datacenter-edition-52-cores",
        "windows-server-2022-license-datacenter-edition-54-cores",
        "windows-server-2022-license-datacenter-edition-56-cores",
        "windows-server-2022-license-datacenter-edition-58-cores",
        "windows-server-2022-license-datacenter-edition-60-cores",
        "windows-server-2022-license-datacenter-edition-62-cores",
        "windows-server-2022-license-datacenter-edition-64-cores",
        "windows-server-2022-license-datacenter-edition-8-cores",
        "windows-server-2022-license-datacenter-edition-96-cores",
        "windows-server-2022-license-standard-edition-10-cores",
        "windows-server-2022-license-standard-edition-12-cores",
        "windows-server-2022-license-standard-edition-128-cores",
        "windows-server-2022-license-standard-edition-14-cores",
        "windows-server-2022-license-standard-edition-16-cores",
        "windows-server-2022-license-standard-edition-18-cores",
        "windows-server-2022-license-standard-edition-20-cores",
        "windows-server-2022-license-standard-edition-22-cores",
        "windows-server-2022-license-standard-edition-24-cores",
        "windows-server-2022-license-standard-edition-256-cores",
        "windows-server-2022-license-standard-edition-26-cores",
        "windows-server-2022-license-standard-edition-28-cores",
        "windows-server-2022-license-standard-edition-30-cores",
        "windows-server-2022-license-standard-edition-32-cores",
        "windows-server-2022-license-standard-edition-34-cores",
        "windows-server-2022-license-standard-edition-36-cores",
        "windows-server-2022-license-standard-edition-38-cores",
        "windows-server-2022-license-standard-edition-40-cores",
        "windows-server-2022-license-standard-edition-42-cores",
        "windows-server-2022-license-standard-edition-44-cores",
        "windows-server-2022-license-standard-edition-46-cores",
        "windows-server-2022-license-standard-edition-48-cores",
        "windows-server-2022-license-standard-edition-50-cores",
        "windows-server-2022-license-standard-edition-512-cores",
        "windows-server-2022-license-standard-edition-52-cores",
        "windows-server-2022-license-standard-edition-54-cores",
        "windows-server-2022-license-standard-edition-56-cores",
        "windows-server-2022-license-standard-edition-58-cores",
        "windows-server-2022-license-standard-edition-60-cores",
        "windows-server-2022-license-standard-edition-62-cores",
        "windows-server-2022-license-standard-edition-64-cores",
        "windows-server-2022-license-standard-edition-8-cores",
        "windows-server-2022-license-standard-edition-96-cores"
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
        "IN",
        "QC",
        "SG",
        "WE",
        "WS"
      ],
      "enumType": "string",
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle"
    },
    "order.ContextTypeEnum": {
      "description": "Application context of a promotion",
      "enum": [
        "discover",
        "standard",
        "welcome"
      ],
      "enumType": "string",
      "id": "ContextTypeEnum",
      "namespace": "order"
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
        "INR",
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
        "priceInUcents": {
          "canBeNull": true,
          "description": "Price in microcents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
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
        "description": {
          "canBeNull": false,
          "description": "Promotion description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Reduction price applied with this promotion",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reductionDescription": {
          "canBeNull": false,
          "description": "Reduction description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
        "trade",
        "transfer",
        "update"
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
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.cart.DurationUnitEnum": {
      "description": "Unit corresponding to a duration range",
      "enum": [
        "day",
        "hour",
        "month",
        "none"
      ],
      "enumType": "string",
      "id": "DurationUnitEnum",
      "namespace": "order.cart"
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
        "planCode": {
          "canBeNull": true,
          "description": "Identifier of the commercial offer",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": true,
          "description": "Pricing mode selected for the purchase of the product",
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
        "tiered",
        "volume"
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
        "implementation_services",
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
          "canBeNull": true,
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
          "description": "Item settings",
          "fullType": "order.cart.ItemSettings",
          "readOnly": true,
          "required": false,
          "type": "order.cart.ItemSettings"
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
    "order.cart.ItemSettings": {
      "description": "Order item settings",
      "id": "ItemSettings",
      "namespace": "order.cart",
      "properties": {
        "planCode": {
          "canBeNull": true,
          "description": "Order plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": true,
          "description": "Pricing mode selected for the purchase of the product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": true,
          "description": "Quantity of product desired",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
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
      "description": "Price information with label",
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
        },
        "promotions": {
          "canBeNull": true,
          "description": "Promotions on the product",
          "fullType": "order.cart.Promotion[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.Promotion[]"
        }
      }
    },
    "order.cart.PriceLabelEnum": {
      "description": "Label corresponding to different type of price",
      "enum": [
        "DISCOUNT",
        "FEE",
        "PRICE",
        "RENEW",
        "TOTAL"
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
          "description": "Information about the configurations required",
          "fullType": "order.cart.ConfigurationRequirements[]",
          "readOnly": true,
          "required": false,
          "type": "order.cart.ConfigurationRequirements[]"
        },
        "deliveryTime": {
          "canBeNull": false,
          "description": "Information about the estimated delivery time for the product",
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
          "description": "Information about the domain's offer (gold|diamond|platinium)",
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
          "description": "Information about the domain phase",
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
    "order.cart.Promotion": {
      "description": "Describes a promotion of a product",
      "id": "Promotion",
      "namespace": "order.cart",
      "properties": {
        "bundleWithPlanCodes": {
          "canBeNull": false,
          "description": "Bundle with plan code",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "endDate": {
          "canBeNull": true,
          "description": "Promotion end date using rfc3339",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the promotion",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Price",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Promotion start date using rfc3339",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "tags": {
          "canBeNull": true,
          "description": "Promotion tags",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Promotion type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "merchantCode": {
          "canBeNull": false,
          "description": "OVH Subsidiary concerned by this catalog",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "plans": {
          "canBeNull": true,
          "description": "List of plans of the catalog",
          "fullType": "order.catalog.ProductPlan[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.ProductPlan[]"
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
          "description": "Extra information of product offer",
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
      "description": "Describe extra information of product offer",
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
    "order.catalog.dedicated.Catalog": {
      "description": "Describes a dedicated Catalog",
      "id": "Catalog",
      "namespace": "order.catalog.dedicated",
      "properties": {
        "families": {
          "canBeNull": false,
          "description": "Families of the catalog",
          "fullType": "order.catalog.dedicated.Family[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Family[]"
        },
        "metadatas": {
          "canBeNull": false,
          "description": "Metadata of the catalog",
          "fullType": "order.catalog.dedicated.Metadata",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Metadata"
        },
        "products": {
          "canBeNull": false,
          "description": "Products of the catalog",
          "fullType": "order.catalog.dedicated.Product[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product[]"
        },
        "techDetails": {
          "canBeNull": false,
          "description": "Technical details",
          "fullType": "order.catalog.dedicated.TechDetails[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.TechDetails[]"
        }
      }
    },
    "order.catalog.dedicated.Family": {
      "description": "Describes a Family",
      "id": "Family",
      "namespace": "order.catalog.dedicated",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "products": {
          "canBeNull": false,
          "description": "Family products",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "order.catalog.dedicated.Metadata": {
      "description": "Describes a Metadata",
      "id": "Metadata",
      "namespace": "order.catalog.dedicated",
      "properties": {
        "catalog": {
          "canBeNull": false,
          "description": "Identifier of the catalog",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "core": {
          "canBeNull": false,
          "description": "Core",
          "fullType": "order.catalog.dedicated.Metadata.Capacities",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Metadata.Capacities"
        },
        "currency": {
          "canBeNull": false,
          "description": "Currency",
          "fullType": "order.catalog.dedicated.Metadata.Currency",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Metadata.Currency"
        },
        "datacenters": {
          "canBeNull": false,
          "description": "List of datacenters",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "frequency": {
          "canBeNull": false,
          "description": "Frequency",
          "fullType": "order.catalog.dedicated.Metadata.Frequency",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Metadata.Frequency"
        },
        "merchant": {
          "canBeNull": false,
          "description": "Merchant",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "price": {
          "canBeNull": false,
          "description": "Price",
          "fullType": "order.catalog.dedicated.Metadata.Price",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Metadata.Price"
        },
        "ram": {
          "canBeNull": false,
          "description": "RAM",
          "fullType": "order.catalog.dedicated.Metadata.Capacities",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Metadata.Capacities"
        },
        "thread": {
          "canBeNull": false,
          "description": "Thread",
          "fullType": "order.catalog.dedicated.Metadata.Capacities",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Metadata.Capacities"
        },
        "timestamp": {
          "canBeNull": false,
          "description": "Timestamp",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.dedicated.Metadata.Capacities": {
      "description": "Describes a Capacity",
      "id": "Capacities",
      "namespace": "order.catalog.dedicated.Metadata",
      "properties": {
        "max": {
          "canBeNull": false,
          "description": "Max",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "min": {
          "canBeNull": false,
          "description": "Min",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.dedicated.Metadata.Currency": {
      "description": "Describes a Currency",
      "id": "Currency",
      "namespace": "order.catalog.dedicated.Metadata",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Currency code",
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "Currency description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "symbol": {
          "canBeNull": false,
          "description": "Currency symbol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.dedicated.Metadata.Frequency": {
      "description": "Describes a Frequency",
      "id": "Frequency",
      "namespace": "order.catalog.dedicated.Metadata",
      "properties": {
        "max": {
          "canBeNull": false,
          "description": "Max",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "min": {
          "canBeNull": false,
          "description": "Min",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.catalog.dedicated.Metadata.Price": {
      "description": "Describes a Price",
      "id": "Price",
      "namespace": "order.catalog.dedicated.Metadata",
      "properties": {
        "max": {
          "canBeNull": false,
          "description": "Max",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "min": {
          "canBeNull": false,
          "description": "Min",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.catalog.dedicated.Product": {
      "description": "Describes a product",
      "id": "Product",
      "namespace": "order.catalog.dedicated",
      "properties": {
        "addonsFamily": {
          "canBeNull": false,
          "description": "List of addon family",
          "fullType": "order.catalog.dedicated.Product.AddonFamily[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.AddonFamily[]"
        },
        "code": {
          "canBeNull": false,
          "description": "Code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "compatibilities": {
          "canBeNull": true,
          "description": "List of compatibility",
          "fullType": "order.catalog.dedicated.Product.Compatibility[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Compatibility[]"
        },
        "datacenters": {
          "canBeNull": false,
          "description": "Datacenters",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "derivatives": {
          "canBeNull": true,
          "description": "List of derivative",
          "fullType": "order.catalog.dedicated.Product.AddonItem[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.AddonItem[]"
        },
        "family": {
          "canBeNull": false,
          "description": "Family",
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
        "isChildOf": {
          "canBeNull": true,
          "description": "Name of the parent",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isParentOf": {
          "canBeNull": true,
          "description": "Name of the children",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices",
          "fullType": "order.catalog.dedicated.Product.Price",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Price"
        },
        "specifications": {
          "canBeNull": false,
          "description": "Specifications",
          "fullType": "order.catalog.dedicated.Product.Specification",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Specification"
        }
      }
    },
    "order.catalog.dedicated.Product.AddonFamily": {
      "description": "Describes an addon family",
      "id": "AddonFamily",
      "namespace": "order.catalog.dedicated.Product",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "List of addon",
          "fullType": "order.catalog.dedicated.Product.AddonItem[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.AddonItem[]"
        },
        "family": {
          "canBeNull": false,
          "description": "Family name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.dedicated.Product.AddonItem": {
      "description": "Describes an addon",
      "id": "AddonItem",
      "namespace": "order.catalog.dedicated.Product",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Addon code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "datacenters": {
          "canBeNull": true,
          "description": "List of datacenter",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Addon name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": true,
          "description": "Options",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Addon price",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.catalog.dedicated.Product.Compatibility": {
      "description": "Describes a Compatibility",
      "id": "Compatibility",
      "namespace": "order.catalog.dedicated.Product",
      "properties": {
        "plan": {
          "canBeNull": false,
          "description": "Plan name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "restrictions": {
          "canBeNull": true,
          "description": "List of restriction",
          "fullType": "order.catalog.dedicated.Product.Compatibility.Restriction[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Compatibility.Restriction[]"
        },
        "specificities": {
          "canBeNull": true,
          "description": "List of restriction",
          "fullType": "order.catalog.dedicated.TechDetails.Plan.Specificity[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.TechDetails.Plan.Specificity[]"
        }
      }
    },
    "order.catalog.dedicated.Product.Compatibility.Restriction": {
      "description": "Describes a Restriction",
      "id": "Restriction",
      "namespace": "order.catalog.dedicated.Product.Compatibility",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sections": {
          "canBeNull": false,
          "description": "List of section",
          "fullType": "order.catalog.dedicated.Product.Compatibility.Restriction.Section[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Compatibility.Restriction.Section[]"
        }
      }
    },
    "order.catalog.dedicated.Product.Compatibility.Restriction.Section": {
      "description": "Describes a Section",
      "id": "Section",
      "namespace": "order.catalog.dedicated.Product.Compatibility.Restriction",
      "properties": {
        "comment": {
          "canBeNull": false,
          "description": "Comment",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "plans": {
          "canBeNull": false,
          "description": "List of plan",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
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
    "order.catalog.dedicated.Product.Price": {
      "description": "Describes a Prices",
      "id": "Price",
      "namespace": "order.catalog.dedicated.Product",
      "properties": {
        "default": {
          "canBeNull": false,
          "description": "Default price",
          "fullType": "order.catalog.dedicated.Product.Price.Default",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Price.Default"
        },
        "hardzone": {
          "canBeNull": true,
          "description": "Hardzone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "week": {
          "canBeNull": true,
          "description": "Week",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.dedicated.Product.Price.Default": {
      "description": "Describes a Default price",
      "id": "Default",
      "namespace": "order.catalog.dedicated.Product.Price",
      "properties": {
        "installation": {
          "canBeNull": true,
          "description": "Installation price",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "renew": {
          "canBeNull": true,
          "description": "Renew price",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.catalog.dedicated.Product.Specification": {
      "description": "Describes a Specification for a product",
      "id": "Specification",
      "namespace": "order.catalog.dedicated.Product",
      "properties": {
        "cpu": {
          "canBeNull": true,
          "description": "CPU",
          "fullType": "order.catalog.dedicated.Product.Specification.CPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Specification.CPU"
        },
        "disks": {
          "canBeNull": true,
          "description": "List of disk",
          "fullType": "order.catalog.dedicated.Product.Specification.Disk[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Specification.Disk[]"
        },
        "gpu": {
          "canBeNull": true,
          "description": "GPU",
          "fullType": "order.catalog.dedicated.Product.Specification.GPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Specification.GPU"
        },
        "memory": {
          "canBeNull": true,
          "description": "Memory",
          "fullType": "order.catalog.dedicated.Product.Specification.Memory",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Specification.Memory"
        },
        "network": {
          "canBeNull": false,
          "description": "Network",
          "fullType": "order.catalog.dedicated.Product.Specification.Network",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.Product.Specification.Network"
        }
      }
    },
    "order.catalog.dedicated.Product.Specification.CPU": {
      "description": "Describes a CPU",
      "id": "CPU",
      "namespace": "order.catalog.dedicated.Product.Specification",
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
        "planCode": {
          "canBeNull": true,
          "description": "Plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "order.catalog.dedicated.Product.Specification.Disk": {
      "description": "Describes a Disk",
      "id": "Disk",
      "namespace": "order.catalog.dedicated.Product.Specification",
      "properties": {
        "number": {
          "canBeNull": false,
          "description": "Disk number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "planCode": {
          "canBeNull": true,
          "description": "Plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "raid": {
          "canBeNull": false,
          "description": "Disk raid",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Disk size",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Disk type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.dedicated.Product.Specification.GPU": {
      "description": "Describes a GPU",
      "id": "GPU",
      "namespace": "order.catalog.dedicated.Product.Specification",
      "properties": {
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
          "description": "GPU number",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "planCode": {
          "canBeNull": true,
          "description": "Plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.dedicated.Product.Specification.Memory": {
      "description": "Describes a Memory",
      "id": "Memory",
      "namespace": "order.catalog.dedicated.Product.Specification",
      "properties": {
        "planCode": {
          "canBeNull": true,
          "description": "Plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": true,
          "description": "Memory size",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": true,
          "description": "Memory type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.dedicated.Product.Specification.Network": {
      "description": "Describes a Network",
      "id": "Network",
      "namespace": "order.catalog.dedicated.Product.Specification",
      "properties": {
        "failover": {
          "canBeNull": false,
          "description": "Failover",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "internal": {
          "canBeNull": false,
          "description": "Internal",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "outgoing": {
          "canBeNull": false,
          "description": "Outgoing",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "private": {
          "canBeNull": false,
          "description": "Private",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "privateBandwidth": {
          "canBeNull": false,
          "description": "Private bandwidth",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.dedicated.TechDetails": {
      "description": "Describes technical details",
      "id": "TechDetails",
      "namespace": "order.catalog.dedicated",
      "properties": {
        "plans": {
          "canBeNull": false,
          "description": "List of plan",
          "fullType": "order.catalog.dedicated.TechDetails.Plan[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.TechDetails.Plan[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Technical type",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.dedicated.TechDetails.Plan": {
      "description": "Describes a Plan",
      "id": "Plan",
      "namespace": "order.catalog.dedicated.TechDetails",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Plan code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "specificities": {
          "canBeNull": false,
          "description": "List of specificity",
          "fullType": "order.catalog.dedicated.TechDetails.Plan.Specificity[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.dedicated.TechDetails.Plan.Specificity[]"
        }
      }
    },
    "order.catalog.dedicated.TechDetails.Plan.Specificity": {
      "description": "Describes a Specificity for a plan",
      "id": "Specificity",
      "namespace": "order.catalog.dedicated.TechDetails.Plan",
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
        "active": {
          "canBeNull": false,
          "description": "Describe if a catalog is Active",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "catalogId": {
          "canBeNull": false,
          "description": "Catalog ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "catalogName": {
          "canBeNull": false,
          "description": "Catalog name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "commercialRanges": {
          "canBeNull": false,
          "description": "Describes Commercial Ranges of a Dedicated Cloud",
          "fullType": "order.catalog.pcc.CommercialRange[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.CommercialRange[]"
        },
        "merchantCode": {
          "canBeNull": false,
          "description": "OVH Subsidiary of the Catalog",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "plans": {
          "canBeNull": false,
          "description": "Commercial offers",
          "fullType": "order.catalog.ProductPlan[]",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.Datacenter[]"
        },
        "defaultZone": {
          "canBeNull": false,
          "description": "Default datacenter of the commercial range",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the commercial range",
          "fullType": "string",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "cityName": {
          "canBeNull": true,
          "description": "City Name of a Datacenter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": false,
          "description": "Country Code of a Datacenter",
          "fullType": "nichandle.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "defaultHypervisor": {
          "canBeNull": false,
          "description": "Name of the default hypervisor of a Datacenter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hypervisors": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Hypervisors",
          "fullType": "order.catalog.pcc.Hypervisor[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.Hypervisor[]"
        },
        "mainPlan": {
          "canBeNull": false,
          "description": "Main plan code to use for a Datacenter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "managementFees": {
          "canBeNull": true,
          "description": "Describes the management cost of a range of Dedicated Cloud",
          "fullType": "order.catalog.pcc.managementFees",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.managementFees"
        },
        "orderable": {
          "canBeNull": false,
          "description": "Describes if a Dedicated Cloud can be ordered on a Datacenter",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "orderableOptions": {
          "canBeNull": false,
          "description": "Describes if options can be ordered on a Datacenter",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "orderableResources": {
          "canBeNull": false,
          "description": "Describes if resources can be ordered on a Datacenter",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "storagesNoPack": {
          "canBeNull": false,
          "description": "List of filers add in case of a No Pack order",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "zoneFullName": {
          "canBeNull": false,
          "description": "Zone Code of a datacenter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "zoneName": {
          "canBeNull": false,
          "description": "Zone Name of a datacenter",
          "fullType": "string",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "onInitialOrder": {
          "canBeNull": false,
          "description": "Describes if host is orderable on a initial Order",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "onUpgradeOrder": {
          "canBeNull": false,
          "description": "Describes if host is orderable on a upgrade order",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "specifications": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Host specifications",
          "fullType": "order.catalog.pcc.HostSpecifications",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.HostSpecifications"
        },
        "storagesPack": {
          "canBeNull": true,
          "description": "List of filers add in case of a Pack order",
          "fullType": "string[]",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "frequency": {
          "canBeNull": false,
          "description": "CPU Frequency",
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        },
        "generation": {
          "canBeNull": false,
          "description": "CPU Generation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "model": {
          "canBeNull": false,
          "description": "CPU Model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "socket": {
          "canBeNull": false,
          "description": "Number of CPU",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "threads": {
          "canBeNull": false,
          "description": "Number of CPU Threads",
          "fullType": "long",
          "readOnly": true,
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
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "speed": {
          "canBeNull": false,
          "description": "Speed of the network interfaces",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.HostCpuSpecifications"
        },
        "memory": {
          "canBeNull": false,
          "description": "Describes the memory specification of a Host",
          "fullType": "order.catalog.pcc.HostMemorySpecifications",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.HostMemorySpecifications"
        },
        "network": {
          "canBeNull": false,
          "description": "Describes the network specification of a Host",
          "fullType": "order.catalog.pcc.HostNetworkSpecifications[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.HostNetworkSpecifications[]"
        },
        "storage": {
          "canBeNull": false,
          "fullType": "order.catalog.pcc.HostStorageSpecifications",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.HostStorageSpecifications"
        }
      }
    },
    "order.catalog.pcc.HostStorageSpecifications": {
      "description": "Describes a Dedicated Cloud Host Storage",
      "id": "HostStorageSpecifications",
      "namespace": "order.catalog.pcc",
      "properties": {
        "size": {
          "canBeNull": false,
          "description": "Size of storage",
          "fullType": "order.catalog.pcc.PccUnitAndValue",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.PccUnitAndValue"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of storage",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.Host[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the hypervisor",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Options",
          "fullType": "order.catalog.pcc.Option[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.Option[]"
        },
        "orderable": {
          "canBeNull": false,
          "description": "Describes if an hypervisor is orderable",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "servicePacks": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Service Packs",
          "fullType": "order.catalog.pcc.ServicePack[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.ServicePack[]"
        },
        "shortName": {
          "canBeNull": false,
          "description": "Short Name of the hypervisor",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "storages": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Storages",
          "fullType": "order.catalog.pcc.Storage[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.Storage[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the hypervisor",
          "fullType": "string",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the option",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "onInitialOrder": {
          "canBeNull": false,
          "description": "Describes if option is orderable on a initial order",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "onUpgradeOrder": {
          "canBeNull": false,
          "description": "Describes if option is orderable on a upgrade order",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "showInOrderFunnel": {
          "canBeNull": true,
          "description": "Whether to show in order funnel or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "Category of the option",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.pcc.PccUnitAndValue": {
      "description": "Describes unit and value for a Private Cloud",
      "id": "PccUnitAndValue",
      "namespace": "order.catalog.pcc",
      "properties": {
        "unit": {
          "canBeNull": false,
          "description": "Unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.pcc.ServicePack": {
      "description": "Describes a Dedicated Cloud Service Pack",
      "id": "ServicePack",
      "namespace": "order.catalog.pcc",
      "properties": {
        "disabledElementForOrderType": {
          "canBeNull": true,
          "description": "Disabled element for order type",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the service pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Describes Option include in the service pack",
          "fullType": "order.catalog.pcc.ServicePackOption[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.pcc.ServicePackOption[]"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "showInOrderFunnel": {
          "canBeNull": true,
          "description": "Whether to show in order funnel or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "upgradableTo": {
          "canBeNull": false,
          "description": "List of available service pack upgrades",
          "fullType": "string[]",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Category of the option",
          "fullType": "string",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "onInitialOrder": {
          "canBeNull": false,
          "description": "Describes if filer is orderable on a initial Order",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "onUpgradeOrder": {
          "canBeNull": false,
          "description": "Describes if filer is orderable on a upgrade order",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "specifications": {
          "canBeNull": false,
          "description": "Describes Dedicated Cloud Storage specifications",
          "fullType": "order.catalog.pcc.StorageSpecifications",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the storage",
          "fullType": "string",
          "readOnly": true,
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
        "disabledElementForOrderType": {
          "canBeNull": true,
          "description": "Disabled element for order type",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan Code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "upgradableTo": {
          "canBeNull": false,
          "description": "List of available range upgrades",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "order.catalog.privateCloud.Capabilities": {
      "description": "Describes capabilities of a Dedicated Cloud type of service",
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
      "description": "Describe a Dedicated Cloud commercial catalog",
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
      "description": "Describe a Dedicated Cloud zone",
      "id": "Zone",
      "namespace": "order.catalog.privateCloud",
      "properties": {
        "cityName": {
          "canBeNull": false,
          "description": "City where Dedicated Cloud instance will be delivered",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": "Country where Dedicated Cloud instance will be delivered",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "defaultHypervisor": {
          "canBeNull": false,
          "description": "Default hypervisor for this Dedicated Cloud zone",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "defaultVersion": {
          "canBeNull": false,
          "description": "Default version for this Dedicated Cloud zone",
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
          "canBeNull": true,
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
          "canBeNull": true,
          "description": "Whether this Addon family is exclusive and can be ordered only once for the main Commercial offer",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "mandatory": {
          "canBeNull": true,
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
        "custom",
        "diff",
        "max",
        "max_retain",
        "ping",
        "sum"
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
          "canBeNull": true,
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
      "id": "DedicatedServerCatalog",
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
          "fullType": "order.catalog.public.ProductBlob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlob"
        },
        "configurations": {
          "canBeNull": false,
          "description": "List of possible Configurations for this Commercial offer",
          "fullType": "order.catalog.public.Configuration[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Configuration[]"
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
          "description": "Engagement's duration",
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
        "CANCEL_SERVICE",
        "REACTIVATE_ENGAGEMENT",
        "STOP_ENGAGEMENT_FALLBACK_DEFAULT_PRICE",
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
        "full",
        "prorata"
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
        "blobs": {
          "canBeNull": true,
          "description": "Blobs",
          "fullType": "order.catalog.public.ProductBlob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlob"
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
        "promotions": {
          "canBeNull": true,
          "description": "Promotions",
          "fullType": "order.catalog.public.Promotion[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Promotion[]"
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
        "blobs": {
          "canBeNull": true,
          "description": "Product blobs",
          "fullType": "order.catalog.public.ProductBlob",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlob"
        },
        "configurations": {
          "canBeNull": true,
          "description": "List of possible Configurations for this Commercial offer",
          "fullType": "order.catalog.public.Configuration[]",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.Configuration[]"
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
          "description": "Network information",
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
          "description": "CPU information",
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
          "description": "GPU information",
          "fullType": "order.catalog.public.ProductBlobTechnicalGPU",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalGPU"
        },
        "license": {
          "canBeNull": true,
          "description": "License information",
          "fullType": "order.catalog.public.ProductBlobTechnicalLicense",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalLicense"
        },
        "memory": {
          "canBeNull": true,
          "description": "Memory information",
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
        "provider": {
          "canBeNull": true,
          "description": "Provider",
          "fullType": "order.catalog.public.ProductBlobTechnicalProvider",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalProvider"
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
          "description": "Hardware information",
          "fullType": "order.catalog.public.ProductBlobTechnicalServer",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.ProductBlobTechnicalServer"
        },
        "storage": {
          "canBeNull": true,
          "description": "Disks information",
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
          "description": "vRack information",
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
        "maxFrequency": {
          "canBeNull": true,
          "description": "Maximum frequency of CPU in GHz",
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
        },
        "type": {
          "canBeNull": true,
          "description": "Type of CPU",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
        "maximumCapacity": {
          "canBeNull": false,
          "description": "Maximum disk capacity in Gb",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
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
          "description": "Usage information",
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
          "description": "Cores information",
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
          "description": "Network information",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "edition": {
          "canBeNull": true,
          "description": "Edition information",
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
          "description": "Flavor information",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "images": {
          "canBeNull": true,
          "description": "Images information",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "nbOfAccount": {
          "canBeNull": true,
          "description": "Number of accounts",
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
          "description": "Version information",
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
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "limit": {
          "canBeNull": true,
          "description": "Network limit",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "max": {
          "canBeNull": false,
          "description": "Maximum",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "maxUnit": {
          "canBeNull": false,
          "description": "Unit of maximum",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
        "unit": {
          "canBeNull": false,
          "description": "Unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "order.catalog.public.ProductBlobTechnicalProvider": {
      "description": "Describes a provider for a technical blob",
      "id": "ProductBlobTechnicalProvider",
      "namespace": "order.catalog.public",
      "properties": {
        "pointsOfPresence": {
          "canBeNull": false,
          "description": "Number of points of presence",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "reference": {
          "canBeNull": true,
          "description": "Reference",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
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
      "description": "Describes some technicals information for a technical blob",
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
      "description": "Describes some technicals information",
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
          "canBeNull": true,
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
          "description": "CPU information",
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
        },
        "max": {
          "canBeNull": false,
          "description": "Maximum IOPS",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxUnit": {
          "canBeNull": false,
          "description": "Unit of maximum IOPS",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "unit": {
          "canBeNull": false,
          "description": "Unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.catalog.public.Promotion": {
      "description": "Describes a Promotion inside a Catalog",
      "id": "Promotion",
      "namespace": "order.catalog.public",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Promotion description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "discount": {
          "canBeNull": false,
          "description": "Promotion discount",
          "fullType": "order.catalog.public.PromotionDiscountTotal",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PromotionDiscountTotal"
        },
        "duration": {
          "canBeNull": true,
          "description": "Promotion duration",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "endDate": {
          "canBeNull": true,
          "description": "Promotion end date using rfc3339",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "isGlobalQuantityLimited": {
          "canBeNull": false,
          "description": "Is the global quantity of the promotion limited?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Promotion name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": true,
          "description": "Promotion quantity",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Promotion start date using rfc3339",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "total": {
          "canBeNull": false,
          "description": "Promotion total",
          "fullType": "order.catalog.public.PromotionDiscountTotal",
          "readOnly": true,
          "required": false,
          "type": "order.catalog.public.PromotionDiscountTotal"
        },
        "type": {
          "canBeNull": false,
          "description": "Promotion type",
          "fullType": "order.ReductionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionTypeEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Promotion value",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "order.catalog.public.PromotionDiscountTotal": {
      "description": "Describes a Promotion discount or total inside a Catalog",
      "id": "PromotionDiscountTotal",
      "namespace": "order.catalog.public",
      "properties": {
        "tax": {
          "canBeNull": false,
          "description": "Tax",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": false,
          "description": "Value",
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
        "day",
        "hour",
        "month"
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
        "CANCELLED",
        "DELAYED",
        "DOING",
        "DONE",
        "ERROR",
        "SCHEDULED",
        "TODO"
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
      "enumType": "string",
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
      "enumType": "string",
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