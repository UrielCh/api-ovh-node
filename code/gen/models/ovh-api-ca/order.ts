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
              "dataType": "order.cart.Creation",
              "paramType": "body",
              "fullType": "order.cart.Creation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.Update",
              "paramType": "body",
              "fullType": "order.cart.Update",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
      "path": "/order/cart/{cartId}/cephaas",
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
          "description": "Get informations about Ceph as a Service offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Ceph as a Service item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/cephaas/options",
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
              "description": "Identifier of the Ceph as a Service you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Ceph as a Service options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Ceph as a Service option in your cart"
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
              "dataType": "order.cart.Checkout",
              "paramType": "body",
              "fullType": "order.cart.Checkout",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.CouponCreation",
              "paramType": "body",
              "fullType": "order.cart.CouponCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericDedicatedCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericDedicatedCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericDedicatedOptionsCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericDedicatedOptionsCreation",
              "required": true,
              "description": "Request Body"
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
      "path": "/order/cart/{cartId}/dedicatedCloud",
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
              "dataType": "order.cart.GenericDedicatedCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericDedicatedCreation",
              "required": true,
              "description": "Request Body"
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
      "path": "/order/cart/{cartId}/dedicatedCloud/options",
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
              "dataType": "order.cart.GenericDedicatedOptionsCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericDedicatedOptionsCreation",
              "required": true,
              "description": "Request Body"
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
      "path": "/order/cart/{cartId}/dedicatedDirectSales",
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
          "description": "Get informations about a dedicated Direct Sales server"
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
              "description": "Identifier of a dedicated Direct Sales server offer"
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
          "description": "Post a new dedicated Direct Sales server item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/dedicatedDirectSales/options",
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
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about dedicated Direct Sales server options"
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
              "description": "Identifier of a dedicated Direct Sales server offer"
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
          "description": "Post a new dedicated Direct Sales server option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/dedicatedLabs",
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
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about a dedicated labs server"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new dedicated labs server item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/dedicatedLabs/options",
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
              "description": "Identifier of a dedicated labs server offer"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about dedicated labs server options"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new dedicated labs server option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/dedicatedPciVps",
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
              "dataType": "order.cart.GenericDedicatedCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericDedicatedCreation",
              "required": true,
              "description": "Request Body"
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
      "path": "/order/cart/{cartId}/dedicatedPciVps/options",
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
              "dataType": "order.cart.GenericDedicatedOptionsCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericDedicatedOptionsCreation",
              "required": true,
              "description": "Request Body"
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
      "path": "/order/cart/{cartId}/dedicatedReseller",
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
          "description": "Get informations about a dedicated server for US Reseller"
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
      "path": "/order/cart/{cartId}/dedicatedReseller/options",
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
      "path": "/order/cart/{cartId}/deskaas",
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
          "description": "Get informations about Desk As A Service offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Desk as a service item in your cart"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
      "path": "/order/cart/{cartId}/dns",
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
          "description": "Get informations about DNS zone offer"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new DNS zone item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/dns/options",
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
              "description": "Identifier of the DNS offer you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about DNS options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new DNS option in your cart"
        }
      ],
      "description": "DNS option"
    },
    {
      "path": "/order/cart/{cartId}/domain",
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
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Domain name requested"
            }
          ],
          "responseType": "order.cart.ProductInformation[]",
          "noAuthentication": true,
          "description": "Get informations about a domain name"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericDomainCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericDomainCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new domain in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/domain/options",
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
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Domain name linked to the option"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about domain names options"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericDomainOptionsCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericDomainOptionsCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new domain name option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/enterpriseCloudDatabases",
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
          "description": "Get informations about an Enterprise Cloud Databases cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Add a new Enterprise Cloud Databases cluster item to your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/enterpriseCloudDatabases/options",
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
              "description": "Identifier of an Enterprise Cloud Databases node offer"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get information about Enterprise Cloud Databases options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Add a new Enterprise Cloud Databases node to your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/exchange",
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
          "description": "Get informations about Exchange offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Exchange item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/exchange/options",
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
              "description": "Identifier of the Exchange you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Exchange options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Exchange option in your cart"
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
          "description": "Get informations about IP addresses offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Get informations about IP addresses options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
      "path": "/order/cart/{cartId}/ipReseller",
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
          "noAuthentication": false,
          "description": "Get information about IP addresses reseller offers"
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
              "description": "Identifier of the IP address reseller offer"
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
          "noAuthentication": false,
          "description": "Post a new IP address reseller item in your cart"
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
              "dataType": "order.cart.ItemUpdate",
              "paramType": "body",
              "fullType": "order.cart.ItemUpdate",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.ItemConfigurationCreation",
              "paramType": "body",
              "fullType": "order.cart.ItemConfigurationCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
      "path": "/order/cart/{cartId}/logs",
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
          "description": "Get informations about Logs offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Logs item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/logs/options",
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
              "description": "Identifier of the Logs you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Logs options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Logs option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/nasha",
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
          "description": "Get informations about NAS HA offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new NAS HA item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/nasha/options",
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
              "description": "Identifier of the NAS HA you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about NAS HA options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new NAS HA option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/office365",
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
          "description": "Get informations about Office 365 licenses"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Office 365 item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/office365/options",
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
              "description": "Identifier of a Office 365 main offer"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Office 365 options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Office 365 option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloud",
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
          "description": "Get informations about Hosted Private Cloud offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Hosted Private Cloud item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloud/options",
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
              "description": "Identifier of the Hosted Private Cloud you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Hosted Private Cloud options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Hosted Private Cloud option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudCDI",
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
          "description": "Get informations about Private Cloud CDI offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Private Cloud CDI item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudCDI/options",
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
              "description": "Identifier of the Private Cloud CDI you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Private Cloud CDI options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Private Cloud CDI option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudDC",
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
          "description": "Get informations about Private Cloud Dedicated Cloud offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Private Cloud Dedicated Cloud item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudDC/options",
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
              "description": "Identifier of the Private Cloud Dedicated Cloud you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Private Cloud Dedicated Cloud options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Private Cloud Dedicated Cloud option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudEnterprise",
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
          "description": "Get informations about Hosted Private Cloud offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Hosted Private Cloud item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudEnterprise/options",
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
              "description": "Identifier of the Hosted Private Cloud you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Hosted Private Cloud options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Hosted Private Cloud option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudReseller",
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
          "description": "Get informations about Private Cloud Reseller offers"
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
              "description": "Identifier of the Private Cloud Reseller offer"
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
          "description": "Post a new Private Cloud Reseller item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudReseller/options",
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
              "description": "Identifier of the Private Cloud Reseller you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Private Cloud Reseller options"
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
              "description": "Identifier of a Private Cloud Reseller option offer"
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
          "description": "Post a new Private Cloud Reseller option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudResellerEnterprise",
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
          "description": "Get informations about Private Cloud Reseller Enterprise offers"
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
              "description": "Identifier of the Private Cloud Reseller Enterprise offer"
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
          "description": "Post a new Private Cloud Reseller Enterprise item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudResellerEnterprise/options",
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
              "description": "Identifier of the Private Cloud Reseller Enterprise you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Private Cloud Reseller Enterprise options"
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
              "description": "Identifier of a Private Cloud Reseller Enterprise option offer"
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
          "description": "Post a new Private Cloud Reseller Enterprise option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudSDDC",
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
          "description": "Get informations about Private Cloud SDDC offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Private Cloud SDDC item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateCloudSDDC/options",
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
              "description": "Identifier of the Private Cloud SDDC you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about Private Cloud SDDC options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Private Cloud SDDC option in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/privateSQL",
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
          "description": "Get all privateSQL offers available"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Add a privateSQL in your cart"
        }
      ],
      "description": "Order privateSQL"
    },
    {
      "path": "/order/cart/{cartId}/sslComodo",
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
          "description": "Get informations about SSL Comodo offers"
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
              "description": "Identifier of the SSL Comodo you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about SSL Comodo options"
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
              "description": "Identifier of a SSL Comodo option offer"
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
      "path": "/order/cart/{cartId}/sslGateway",
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
          "description": "Get informations about SSL Gateway offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new SSL Gateway item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/sslGateway/options",
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
              "description": "Identifier of the SSL Gateway you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about SSL Gateway options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new SSL Gateway option in your cart"
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
      "path": "/order/cart/{cartId}/support",
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
          "description": "Get all support offers available"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Add a support offer in your cart"
        }
      ],
      "description": "Order a support offer"
    },
    {
      "path": "/order/cart/{cartId}/veeamcc",
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
          "description": "Get informations about Veeam Cloud Connect offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new Veeam Cloud Connect item in your cart"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
      "path": "/order/cart/{cartId}/vrackReseller",
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
      "path": "/order/cart/{cartId}/webHosting",
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
          "description": "Get informations about webHosting offers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericProductCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericProductCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new webHosting item in your cart"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cart/{cartId}/webHosting/options",
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
              "description": "Identifier of the webHosting you want to consult options"
            }
          ],
          "responseType": "order.cart.GenericOptionDefinition[]",
          "noAuthentication": true,
          "description": "Get informations about webHosting options"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "order.cart.GenericOptionCreation",
              "paramType": "body",
              "fullType": "order.cart.GenericOptionCreation",
              "required": true,
              "description": "Request Body"
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
          "description": "Post a new webHosting option in your cart"
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
              "name": "pricingMode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Pricing mode selected for the purchase of the product"
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
          "description": "Post an additional dedicated option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/dedicated/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/domain",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "whoisOwner",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of whoisOwner property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the DOMAIN service"
    },
    {
      "path": "/order/cartServiceOption/domain/{serviceName}",
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
          "description": "Get informations about additional Domain offer for your service"
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
              "description": "Identifier of the additional Domain offer"
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
          "description": "Post an additional Domain option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/domain/#serviceName#"
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
          "description": "Post an additional Private Cloud Enterprise option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/sharepoint",
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
      "description": "Operations about the SHAREPOINT service"
    },
    {
      "path": "/order/cartServiceOption/sharepoint/{serviceName}",
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
          "description": "Get informations about additional Sharepoint offer for your service"
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
              "description": "Identifier of the additional Sharepoint offer"
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
          "description": "Post an additional Sharepoint option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/sharepoint/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/sslGateway",
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
      "description": "Operations about the SSLGATEWAY service"
    },
    {
      "path": "/order/cartServiceOption/sslGateway/{serviceName}",
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
          "description": "Get informations about additional SSL Gateway offer for your service"
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
              "description": "Identifier of the additional SSL Gateway offer"
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
          "description": "Post an additional SSL Gateway option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/sslGateway/#serviceName#"
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
      "description": "Operations about the VPS service"
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
          "description": "Post an additional VPS option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/vps/#serviceName#"
    },
    {
      "path": "/order/cartServiceOption/webHosting",
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
      "description": "Operations about the HOSTING service"
    },
    {
      "path": "/order/cartServiceOption/webHosting/{serviceName}",
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
          "description": "Get informations about additional Web Hosting offer for your service"
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
              "description": "Identifier of the additional Web Hosting offer"
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
          "description": "Post an additional Web Hosting option in your cart"
        }
      ],
      "description": "Listing offers /order/cartServiceOptions/webHosting/#serviceName#"
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
      "path": "/order/catalog/formatted/deskaas",
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
          "description": "Retrieve information of Desk as a service catalog"
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
      "path": "/order/catalog/formatted/logs",
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
          "description": "Retrieve information of Logs Data Platform catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/privateCloud",
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
          "responseType": "order.catalog.pcc.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Private Cloud catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/privateCloudCDI",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-09-28T00:00:00+01:00",
            "deprecatedDate": "2019-08-28T00:00:00+01:00"
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
          "responseType": "order.catalog.privateCloud.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Private Cloud CDI catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/privateCloudDC",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-09-28T00:00:00+01:00",
            "deprecatedDate": "2019-08-28T00:00:00+01:00"
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
          "responseType": "order.catalog.privateCloud.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Private Cloud Dedicated Cloud catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/privateCloudEnterprise",
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
          "responseType": "order.catalog.pcc.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Hosted Private Cloud Enterprise catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/privateCloudReseller",
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
          "responseType": "order.catalog.pcc.Catalog",
          "noAuthentication": false,
          "description": "Retrieve information of Private Cloud Reseller catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/privateCloudResellerEnterprise",
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
          "responseType": "order.catalog.pcc.Catalog",
          "noAuthentication": false,
          "description": "Retrieve information of Private Cloud Reseller Enterprise catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/privateCloudSDDC",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-09-28T00:00:00+01:00",
            "deprecatedDate": "2019-08-28T00:00:00+01:00"
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
          "responseType": "order.catalog.privateCloud.Catalog",
          "noAuthentication": true,
          "description": "Retrieve information of Private Cloud SDDC catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/catalog/formatted/reseller",
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
          "description": "Retrieve information of Reseller catalog"
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
      "path": "/order/catalog/public/dns",
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
          "description": "Retrieve DNS catalog"
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
      "path": "/order/catalog/public/webHosting",
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
          "description": "Retrieve Web Hosting catalog"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/order/cdn/dedicated",
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
      "description": "Operations about the CDNANYCAST service"
    },
    {
      "path": "/order/cdn/dedicated/new",
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
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a New Dedicated CDN Service"
    },
    {
      "path": "/order/cdn/dedicated/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
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
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a New Dedicated CDN Service"
    },
    {
      "path": "/order/cdn/dedicated/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/cdn/dedicated/{serviceName}/backend",
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
            },
            {
              "name": "backend",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Backend number that will be ordered"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'backend' option"
        }
      ],
      "description": "Order Backend Option"
    },
    {
      "path": "/order/cdn/dedicated/{serviceName}/backend/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "backend",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Backend number that will be ordered"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "backend",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Backend number that will be ordered"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order Backend Option"
    },
    {
      "path": "/order/cdn/dedicated/{serviceName}/cacheRule",
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
            },
            {
              "name": "cacheRule",
              "dataType": "cdnanycast.OrderCacheRuleEnum",
              "paramType": "query",
              "fullType": "cdnanycast.OrderCacheRuleEnum",
              "required": true,
              "description": "cache rule upgrade option to 100 or 1000"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'cacheRule' option"
        }
      ],
      "description": "Upgrade cacheRule Option"
    },
    {
      "path": "/order/cdn/dedicated/{serviceName}/cacheRule/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
              "name": "cacheRule",
              "dataType": "cdnanycast.OrderCacheRuleEnum",
              "paramType": "query",
              "fullType": "cdnanycast.OrderCacheRuleEnum",
              "required": true,
              "description": "cache rule upgrade option to 100 or 1000"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "cacheRule",
              "dataType": "cdnanycast.OrderCacheRuleEnum",
              "paramType": "body",
              "fullType": "cdnanycast.OrderCacheRuleEnum",
              "required": true,
              "description": "cache rule upgrade option to 100 or 1000"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade cacheRule Option"
    },
    {
      "path": "/order/cdn/dedicated/{serviceName}/quota",
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
            },
            {
              "name": "quota",
              "dataType": "cdnanycast.OrderQuotaEnum",
              "paramType": "query",
              "fullType": "cdnanycast.OrderQuotaEnum",
              "required": true,
              "description": "quota number in TB that will be added to the CDN service"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'quota' option"
        }
      ],
      "description": "Order Quota"
    },
    {
      "path": "/order/cdn/dedicated/{serviceName}/quota/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
              "name": "quota",
              "dataType": "cdnanycast.OrderQuotaEnum",
              "paramType": "query",
              "fullType": "cdnanycast.OrderQuotaEnum",
              "required": true,
              "description": "quota number in TB that will be added to the CDN service"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "quota",
              "dataType": "cdnanycast.OrderQuotaEnum",
              "paramType": "body",
              "fullType": "cdnanycast.OrderQuotaEnum",
              "required": true,
              "description": "quota number in TB that will be added to the CDN service"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order Quota"
    },
    {
      "path": "/order/cloud/project",
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
      "path": "/order/cloud/project/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/cloud/project/{serviceName}/credit",
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
            },
            {
              "name": "amount",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Amount to add in your cloud credit"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "amount",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Amount to add in your cloud credit"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order credit usable on your Cloud project"
    },
    {
      "path": "/order/cloud/project/{serviceName}/ip",
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
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Number of failover ip"
            },
            {
              "name": "country",
              "dataType": "vps.ip.GeolocationEnum",
              "paramType": "query",
              "fullType": "vps.ip.GeolocationEnum",
              "required": false,
              "description": "IP geolocation"
            },
            {
              "name": "instanceId",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Instance id where ip will be routed to"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "instanceId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Instance id where ip will be routed to"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Number of failover ip"
            },
            {
              "name": "country",
              "dataType": "vps.ip.GeolocationEnum",
              "paramType": "body",
              "fullType": "vps.ip.GeolocationEnum",
              "required": false,
              "description": "IP geolocation"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order failover ip on your Cloud project"
    },
    {
      "path": "/order/dedicated/housing",
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
      "description": "Operations about the HOUSING service"
    },
    {
      "path": "/order/dedicated/housing/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/dedicated/housing/{serviceName}/APC",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'APC' option"
        }
      ],
      "description": "Order an APC for this bay"
    },
    {
      "path": "/order/dedicated/housing/{serviceName}/APC/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order an APC for this bay"
    },
    {
      "path": "/order/dedicated/nasha/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "datacenter",
              "dataType": "dedicated.NasHAZoneEnum",
              "paramType": "query",
              "fullType": "dedicated.NasHAZoneEnum",
              "required": true,
              "description": "Nas HA localization"
            },
            {
              "name": "model",
              "dataType": "dedicated.NasHAOfferEnum",
              "paramType": "query",
              "fullType": "dedicated.NasHAOfferEnum",
              "required": true,
              "description": "Capacity of Nas HA offer"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new Nas HA"
    },
    {
      "path": "/order/dedicated/nasha/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "datacenter",
              "dataType": "dedicated.NasHAZoneEnum",
              "paramType": "query",
              "fullType": "dedicated.NasHAZoneEnum",
              "required": true,
              "description": "Nas HA localization"
            },
            {
              "name": "model",
              "dataType": "dedicated.NasHAOfferEnum",
              "paramType": "query",
              "fullType": "dedicated.NasHAOfferEnum",
              "required": true,
              "description": "Capacity of Nas HA offer"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "datacenter",
              "dataType": "dedicated.NasHAZoneEnum",
              "paramType": "body",
              "fullType": "dedicated.NasHAZoneEnum",
              "required": true,
              "description": "Nas HA localization"
            },
            {
              "name": "model",
              "dataType": "dedicated.NasHAOfferEnum",
              "paramType": "body",
              "fullType": "dedicated.NasHAOfferEnum",
              "required": true,
              "description": "Capacity of Nas HA offer"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new Nas HA"
    },
    {
      "path": "/order/dedicated/server",
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
      "path": "/order/dedicated/server/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/backupStorage",
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
            },
            {
              "name": "capacity",
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "required": true,
              "description": "The capacity in gigabytes of your backup storage"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'backupStorage' option"
        }
      ],
      "description": "Order a backup storage for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/backupStorage/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "capacity",
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "required": true,
              "description": "The capacity in gigabytes of your backup storage"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "capacity",
              "dataType": "dedicated.server.BackupStorageCapacityEnum",
              "paramType": "body",
              "fullType": "dedicated.server.BackupStorageCapacityEnum",
              "required": true,
              "description": "The capacity in gigabytes of your backup storage"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a backup storage for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/bandwidth",
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
            },
            {
              "name": "bandwidth",
              "dataType": "dedicated.server.BandwidthOrderEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BandwidthOrderEnum",
              "required": true,
              "description": "Bandwidth to allocate"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.BandwidthOrderTypeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BandwidthOrderTypeEnum",
              "required": true,
              "description": "bandwidth type"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'bandwidth' option"
        }
      ],
      "description": "Order bandwidth for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/bandwidth/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "bandwidth",
              "dataType": "dedicated.server.BandwidthOrderEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BandwidthOrderEnum",
              "required": true,
              "description": "Bandwidth to allocate"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.BandwidthOrderTypeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BandwidthOrderTypeEnum",
              "required": true,
              "description": "bandwidth type"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "bandwidth",
              "dataType": "dedicated.server.BandwidthOrderEnum",
              "paramType": "body",
              "fullType": "dedicated.server.BandwidthOrderEnum",
              "required": true,
              "description": "Bandwidth to allocate"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.BandwidthOrderTypeEnum",
              "paramType": "body",
              "fullType": "dedicated.server.BandwidthOrderTypeEnum",
              "required": true,
              "description": "bandwidth type"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order bandwidth for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/bandwidthvRack",
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
            },
            {
              "name": "bandwidth",
              "dataType": "dedicated.server.BandwidthvRackOrderEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BandwidthvRackOrderEnum",
              "required": true,
              "description": "vRack Bandwidth to allocate"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'bandwidthvRack' option"
        }
      ],
      "description": "Order vRack bandwidth for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/bandwidthvRack/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "bandwidth",
              "dataType": "dedicated.server.BandwidthvRackOrderEnum",
              "paramType": "query",
              "fullType": "dedicated.server.BandwidthvRackOrderEnum",
              "required": true,
              "description": "vRack Bandwidth to allocate"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "bandwidth",
              "dataType": "dedicated.server.BandwidthvRackOrderEnum",
              "paramType": "body",
              "fullType": "dedicated.server.BandwidthvRackOrderEnum",
              "required": true,
              "description": "vRack Bandwidth to allocate"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order vRack bandwidth for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/failoverIP",
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
            },
            {
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": true,
              "description": "Ip localization"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'failoverIP' option"
        }
      ],
      "description": "Order a failover IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/failoverIP/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": true,
              "description": "Ip localization"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "body",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": true,
              "description": "Ip localization"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a failover IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/feature",
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
            },
            {
              "name": "feature",
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "paramType": "query",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "required": true,
              "description": "the feature"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'feature' option"
        }
      ],
      "description": "Order a feature for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/feature/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "feature",
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "paramType": "query",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "required": true,
              "description": "the feature"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "feature",
              "dataType": "dedicated.server.OrderableSysFeatureEnum",
              "paramType": "body",
              "fullType": "dedicated.server.OrderableSysFeatureEnum",
              "required": true,
              "description": "the feature"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a feature for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/firewall",
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
            },
            {
              "name": "firewallModel",
              "dataType": "dedicated.server.FirewallModelEnum",
              "paramType": "query",
              "fullType": "dedicated.server.FirewallModelEnum",
              "required": true,
              "description": "Firewall type"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'firewall' option"
        }
      ],
      "description": "order a Firewall for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/firewall/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "firewallModel",
              "dataType": "dedicated.server.FirewallModelEnum",
              "paramType": "query",
              "fullType": "dedicated.server.FirewallModelEnum",
              "required": true,
              "description": "Firewall type"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "firewallModel",
              "dataType": "dedicated.server.FirewallModelEnum",
              "paramType": "body",
              "fullType": "dedicated.server.FirewallModelEnum",
              "required": true,
              "description": "Firewall type"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "order a Firewall for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/ip",
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
            },
            {
              "name": "organisationId",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Your organisation id to add on block informations"
            },
            {
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": false,
              "description": "IP localization"
            },
            {
              "name": "blockSize",
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "required": true,
              "description": "IP block size"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "required": true,
              "description": "The type of IP"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'ip' option"
        }
      ],
      "description": "Order IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/ip/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "organisationId",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Your organisation id to add on block informations"
            },
            {
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": false,
              "description": "IP localization"
            },
            {
              "name": "blockSize",
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "required": true,
              "description": "IP block size"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "required": true,
              "description": "The type of IP"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "blockSize",
              "dataType": "dedicated.server.IpBlockSizeEnum",
              "paramType": "body",
              "fullType": "dedicated.server.IpBlockSizeEnum",
              "required": true,
              "description": "IP block size"
            },
            {
              "name": "type",
              "dataType": "dedicated.server.IpTypeOrderableEnum",
              "paramType": "body",
              "fullType": "dedicated.server.IpTypeOrderableEnum",
              "required": true,
              "description": "The type of IP"
            },
            {
              "name": "organisationId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Your organisation id to add on block informations"
            },
            {
              "name": "country",
              "dataType": "dedicated.server.IpCountryEnum",
              "paramType": "body",
              "fullType": "dedicated.server.IpCountryEnum",
              "required": false,
              "description": "IP localization"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/ipMigration",
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
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "IP migration token"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "query",
              "fullType": "ipBlock",
              "required": true,
              "description": "The IP to move to this server"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'ipMigration' option"
        }
      ],
      "description": "Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/ipMigration/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
              "name": "token",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "IP migration token"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "query",
              "fullType": "ipBlock",
              "required": true,
              "description": "The IP to move to this server"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "IP migration token"
            },
            {
              "name": "ip",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": true,
              "description": "The IP to move to this server"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/kvm",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'kvm' option"
        }
      ],
      "description": "Order a kvm for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/kvm/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a kvm for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/kvmExpress",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'kvmExpress' option"
        }
      ],
      "description": "Order a kvmip express for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/kvmExpress/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a kvmip express for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/professionalUse",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'professionalUse' option"
        }
      ],
      "description": "Order professional use option"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/professionalUse/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
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
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order professional use option"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/staticIP",
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
            },
            {
              "name": "country",
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "required": true,
              "description": "Ip localization"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'staticIP' option"
        }
      ],
      "description": "Order a static IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/staticIP/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "country",
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "paramType": "query",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "required": true,
              "description": "Ip localization"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "country",
              "dataType": "dedicated.server.IpStaticCountryEnum",
              "paramType": "body",
              "fullType": "dedicated.server.IpStaticCountryEnum",
              "required": true,
              "description": "Ip localization"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a static IP for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/traffic",
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
            },
            {
              "name": "traffic",
              "dataType": "dedicated.server.TrafficOrderEnum",
              "paramType": "query",
              "fullType": "dedicated.server.TrafficOrderEnum",
              "required": true,
              "description": "amount of traffic to allocate"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'traffic' option"
        }
      ],
      "description": "Order additionall traffic for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/traffic/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "traffic",
              "dataType": "dedicated.server.TrafficOrderEnum",
              "paramType": "query",
              "fullType": "dedicated.server.TrafficOrderEnum",
              "required": true,
              "description": "amount of traffic to allocate"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "traffic",
              "dataType": "dedicated.server.TrafficOrderEnum",
              "paramType": "body",
              "fullType": "dedicated.server.TrafficOrderEnum",
              "required": true,
              "description": "amount of traffic to allocate"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order additionall traffic for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/usbKey",
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
            },
            {
              "name": "capacity",
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "paramType": "query",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "required": true,
              "description": "Capacity in gigabytes"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'usbKey' option"
        }
      ],
      "description": "Order an USB key for this server"
    },
    {
      "path": "/order/dedicated/server/{serviceName}/usbKey/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "capacity",
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "paramType": "query",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "required": true,
              "description": "Capacity in gigabytes"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "capacity",
              "dataType": "dedicated.server.UsbKeyCapacityEnum",
              "paramType": "body",
              "fullType": "dedicated.server.UsbKeyCapacityEnum",
              "required": true,
              "description": "Capacity in gigabytes"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order an USB key for this server"
    },
    {
      "path": "/order/dedicatedCloud",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
      "path": "/order/dedicatedCloud/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/additionalBandwidth",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
            },
            {
              "name": "bandwidth",
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "required": true,
              "description": "How much additional bandwidth do you want ?"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'additionalBandwidth' option"
        }
      ],
      "description": "Order additional bandwidth in your Private Cloud"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/additionalBandwidth/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "bandwidth",
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "required": true,
              "description": "How much additional bandwidth do you want ?"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "bandwidth",
              "dataType": "dedicatedCloud.AdditionalBandwidthEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.AdditionalBandwidthEnum",
              "required": true,
              "description": "How much additional bandwidth do you want ?"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order additional bandwidth in your Private Cloud"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/filer",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Quantity of filer you want to order (default 1)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'filer' option"
        }
      ],
      "description": "Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/filer/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Quantity of filer you want to order (default 1)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Datacenter where the filer will be mounted (if not precised, will be mounted in each Datacenter of this Private Cloud)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Filer profile you want to order (\"name\" field in a profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Quantity of filer you want to order (default 1)"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles)"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/host",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Datacenter where the Host will be added"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Quantity of hosts you want to order (default 1)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'host' option"
        }
      ],
      "description": "Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/host/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Datacenter where the Host will be added"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Quantity of hosts you want to order (default 1)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Quantity of hosts you want to order (default 1)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Host profile you want to order (\"name\" field of a Profile returned by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Datacenter where the Host will be added"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles)"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/ip",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)"
            },
            {
              "name": "networkName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)"
            },
            {
              "name": "size",
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "required": true,
              "description": "The network ranges orderable"
            },
            {
              "name": "country",
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "required": true,
              "description": "This Ip block country"
            },
            {
              "name": "estimatedClientsNumber",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "How much clients would be hosted on those ips ?"
            },
            {
              "name": "usage",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'ip' option"
        }
      ],
      "description": "Order an IP block for your Private Cloud"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/ip/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
              "name": "description",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)"
            },
            {
              "name": "networkName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)"
            },
            {
              "name": "size",
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "required": true,
              "description": "The network ranges orderable"
            },
            {
              "name": "country",
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "required": true,
              "description": "This Ip block country"
            },
            {
              "name": "estimatedClientsNumber",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "How much clients would be hosted on those ips ?"
            },
            {
              "name": "usage",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (minimum 3 and maximum 250 alphanumeric characters)"
            },
            {
              "name": "networkName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Information visible on whois (between 2 and maximum 20 alphanumeric characters)"
            },
            {
              "name": "size",
              "dataType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.OrderableIpBlockRangeEnum",
              "required": true,
              "description": "The network ranges orderable"
            },
            {
              "name": "country",
              "dataType": "dedicatedCloud.IpCountriesEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.IpCountriesEnum",
              "required": true,
              "description": "This Ip block country"
            },
            {
              "name": "estimatedClientsNumber",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "How much clients would be hosted on those ips ?"
            },
            {
              "name": "usage",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Basic information of how will this bloc be used (as \"web\",\"ssl\",\"cloud\" or other things)"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order an IP block for your Private Cloud"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/spla",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Enable windows templates (SPLA) in your Private Cloud"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/upgradeRessource",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
            },
            {
              "name": "upgradeType",
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "required": true,
              "description": "The type of upgrade you want to process on the ressource(s)"
            },
            {
              "name": "upgradedRessourceId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)"
            },
            {
              "name": "upgradedRessourceType",
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "required": true,
              "description": "The type of ressource you want to upgrade."
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgradeRessource' option"
        }
      ],
      "description": "Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/upgradeRessource/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "upgradeType",
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "required": true,
              "description": "The type of upgrade you want to process on the ressource(s)"
            },
            {
              "name": "upgradedRessourceId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)"
            },
            {
              "name": "upgradedRessourceType",
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "paramType": "query",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "required": true,
              "description": "The type of ressource you want to upgrade."
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "upgradedRessourceId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The id of a particular ressource you want to upgrade in your Private Cloud (useless for \"all\" UpgradeRessourceTypeEnum)"
            },
            {
              "name": "upgradedRessourceType",
              "dataType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.ressources.UpgradeRessourceTypeEnum",
              "required": true,
              "description": "The type of ressource you want to upgrade."
            },
            {
              "name": "upgradeType",
              "dataType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "paramType": "body",
              "fullType": "dedicatedCloud.ressources.UpgradeTypeEnum",
              "required": true,
              "description": "The type of upgrade you want to process on the ressource(s)"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month"
    },
    {
      "path": "/order/dedicatedCloud/{serviceName}/vdi",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
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
            },
            {
              "name": "firstPublicIpAddress",
              "dataType": "ip",
              "paramType": "query",
              "fullType": "ip",
              "required": true,
              "description": "An avaiable ip from one of your Private Cloud public IP blocks"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Datacenter where the VDI option will be enabled"
            },
            {
              "name": "secondPublicIpAddress",
              "dataType": "ip",
              "paramType": "query",
              "fullType": "ip",
              "required": true,
              "description": "Another avaiable ip from one of your Private Cloud public IP blocks"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-07-01T00:00:00+01:00",
            "deprecatedDate": "2019-06-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateCloud"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "secondPublicIpAddress",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "Another avaiable ip from one of your Private Cloud public IP blocks"
            },
            {
              "name": "firstPublicIpAddress",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "An avaiable ip from one of your Private Cloud public IP blocks"
            },
            {
              "name": "datacenterId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Datacenter where the VDI option will be enabled"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order VDI option in a given Datacenter"
    },
    {
      "path": "/order/domain/zone",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/dns"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the DNS service"
    },
    {
      "path": "/order/domain/zone/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/dns"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Name of the zone to create"
            },
            {
              "name": "minimized",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Create only mandatory records"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/dns"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the zone to create"
            },
            {
              "name": "minimized",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Create only mandatory records"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new DNS zone"
    },
    {
      "path": "/order/domain/zone/{zoneName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cartServiceOption/dns/{serviceName}"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/domain/zone/{zoneName}/dnsAnycast",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "POST /order/cartServiceOption/dns/{serviceName}"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'dnsAnycast' option"
        }
      ],
      "description": "Order Anycast"
    },
    {
      "path": "/order/domain/zone/{zoneName}/dnsAnycast/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "POST /order/cartServiceOption/dns/{serviceName}"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "POST /order/cartServiceOption/dns/{serviceName}"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order Anycast"
    },
    {
      "path": "/order/email/exchange",
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
      "description": "Operations about the MSSERVICES service"
    },
    {
      "path": "/order/email/exchange/{organizationName}/service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the EXCHANGE service"
    },
    {
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "storageQuota",
              "dataType": "email.exchange.accountQuotaEnum",
              "paramType": "query",
              "fullType": "email.exchange.accountQuotaEnum",
              "required": false,
              "description": "The storage quota for the account(s) in GB (default = 50)"
            },
            {
              "name": "licence",
              "dataType": "email.exchange.OvhLicenceEnum",
              "paramType": "query",
              "fullType": "email.exchange.OvhLicenceEnum",
              "required": true,
              "description": "Licence type for the account"
            },
            {
              "name": "number",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Number of Accounts to order"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'account' option"
        }
      ],
      "description": "Create an order for an exchange account"
    },
    {
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/account/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "storageQuota",
              "dataType": "email.exchange.accountQuotaEnum",
              "paramType": "query",
              "fullType": "email.exchange.accountQuotaEnum",
              "required": false,
              "description": "The storage quota for the account(s) in GB (default = 50)"
            },
            {
              "name": "licence",
              "dataType": "email.exchange.OvhLicenceEnum",
              "paramType": "query",
              "fullType": "email.exchange.OvhLicenceEnum",
              "required": true,
              "description": "Licence type for the account"
            },
            {
              "name": "number",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Number of Accounts to order"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "storageQuota",
              "dataType": "email.exchange.accountQuotaEnum",
              "paramType": "body",
              "fullType": "email.exchange.accountQuotaEnum",
              "required": false,
              "description": "The storage quota for the account(s) in GB (default = 50)"
            },
            {
              "name": "licence",
              "dataType": "email.exchange.OvhLicenceEnum",
              "paramType": "body",
              "fullType": "email.exchange.OvhLicenceEnum",
              "required": true,
              "description": "Licence type for the account"
            },
            {
              "name": "number",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Number of Accounts to order"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for an exchange account"
    },
    {
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The account you wish to upgrade"
            },
            {
              "name": "newQuota",
              "dataType": "email.exchange.accountQuotaEnum",
              "paramType": "query",
              "fullType": "email.exchange.accountQuotaEnum",
              "required": true,
              "description": "New storage quota for that account"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'accountUpgrade' option"
        }
      ],
      "description": "Create an order to upgrade your hosted account storage"
    },
    {
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/accountUpgrade/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The account you wish to upgrade"
            },
            {
              "name": "newQuota",
              "dataType": "email.exchange.accountQuotaEnum",
              "paramType": "query",
              "fullType": "email.exchange.accountQuotaEnum",
              "required": true,
              "description": "New storage quota for that account"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The account you wish to upgrade"
            },
            {
              "name": "newQuota",
              "dataType": "email.exchange.accountQuotaEnum",
              "paramType": "body",
              "fullType": "email.exchange.accountQuotaEnum",
              "required": true,
              "description": "New storage quota for that account"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order to upgrade your hosted account storage"
    },
    {
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/diskSpace",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for a additional 50GB of space (Exchange 2010 reseller only)"
    },
    {
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/outlook",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "licence",
              "dataType": "email.exchange.OutlookVersionEnum",
              "paramType": "query",
              "fullType": "email.exchange.OutlookVersionEnum",
              "required": true,
              "description": "Outlook version"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Primary email address for account which You want to buy an outlook"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'outlook' option"
        }
      ],
      "description": "Create an order for a outlook licence."
    },
    {
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/outlook/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "licence",
              "dataType": "email.exchange.OutlookVersionEnum",
              "paramType": "query",
              "fullType": "email.exchange.OutlookVersionEnum",
              "required": true,
              "description": "Outlook version"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Primary email address for account which You want to buy an outlook"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "licence",
              "dataType": "email.exchange.OutlookVersionEnum",
              "paramType": "body",
              "fullType": "email.exchange.OutlookVersionEnum",
              "required": true,
              "description": "Outlook version"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Primary email address for account which You want to buy an outlook"
            },
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for a outlook licence."
    },
    {
      "path": "/order/email/exchange/{organizationName}/service/{exchangeService}/upgrade",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "organizationName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Organization name"
            },
            {
              "name": "exchangeService",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Exchange service"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016)"
    },
    {
      "path": "/order/hosting/privateDatabase",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateSQL"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the SQLPRIVE service"
    },
    {
      "path": "/order/hosting/privateDatabase/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateSQL"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "version",
              "dataType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "required": true,
              "description": "Private database available versions"
            },
            {
              "name": "offer",
              "dataType": "hosting.PrivateDatabase.OfferEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.OfferEnum",
              "required": false,
              "description": "Type of offer to deploy this new private database"
            },
            {
              "name": "ram",
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "required": true,
              "description": "Private database ram size"
            },
            {
              "name": "datacenter",
              "dataType": "hosting.PrivateDatabase.DatacenterEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.DatacenterEnum",
              "required": false,
              "description": "Datacenter to deploy this new private database"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order new private database"
    },
    {
      "path": "/order/hosting/privateDatabase/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateSQL"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "required": true,
              "description": "Private database available versions"
            },
            {
              "name": "offer",
              "dataType": "hosting.PrivateDatabase.OfferEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.OfferEnum",
              "required": false,
              "description": "Type of offer to deploy this new private database"
            },
            {
              "name": "ram",
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "required": true,
              "description": "Private database ram size"
            },
            {
              "name": "datacenter",
              "dataType": "hosting.PrivateDatabase.DatacenterEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.DatacenterEnum",
              "required": false,
              "description": "Datacenter to deploy this new private database"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateSQL"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "paramType": "body",
              "fullType": "hosting.PrivateDatabase.OrderableVersionEnum",
              "required": true,
              "description": "Private database available versions"
            },
            {
              "name": "offer",
              "dataType": "hosting.PrivateDatabase.OfferEnum",
              "paramType": "body",
              "fullType": "hosting.PrivateDatabase.OfferEnum",
              "required": false,
              "description": "Type of offer to deploy this new private database"
            },
            {
              "name": "ram",
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "paramType": "body",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "required": true,
              "description": "Private database ram size"
            },
            {
              "name": "datacenter",
              "dataType": "hosting.PrivateDatabase.DatacenterEnum",
              "paramType": "body",
              "fullType": "hosting.PrivateDatabase.DatacenterEnum",
              "required": false,
              "description": "Datacenter to deploy this new private database"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order new private database"
    },
    {
      "path": "/order/hosting/privateDatabase/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateSQL"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/hosting/privateDatabase/{serviceName}/ram",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateSQL"
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
            },
            {
              "name": "ram",
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "required": true,
              "description": "Private database ram size"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'ram' option"
        }
      ],
      "description": "Create an order for change ram size on your private database"
    },
    {
      "path": "/order/hosting/privateDatabase/{serviceName}/ram/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateSQL"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "ram",
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "paramType": "query",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "required": true,
              "description": "Private database ram size"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/privateSQL"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ram",
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "paramType": "body",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "required": true,
              "description": "Private database ram size"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for change ram size on your private database"
    },
    {
      "path": "/order/hosting/web",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the HOSTING service"
    },
    {
      "path": "/order/hosting/web/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "waiveRetractationPeriod",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be processed with waiving retractation period"
            },
            {
              "name": "dnsZone",
              "dataType": "hosting.web.DnsZoneEnum",
              "paramType": "query",
              "fullType": "hosting.web.DnsZoneEnum",
              "required": false,
              "description": "Dns zone modification possibilities ( by default : RESET_ALL )"
            },
            {
              "name": "module",
              "dataType": "hosting.web.module.OrderableNameEnum",
              "paramType": "query",
              "fullType": "hosting.web.module.OrderableNameEnum",
              "required": false,
              "description": "Module installation ready to use"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Domain name which will be linked to this hosting account"
            },
            {
              "name": "offer",
              "dataType": "hosting.web.OfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.OfferEnum",
              "required": true,
              "description": "Offer for your new hosting account"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new hosting account"
    },
    {
      "path": "/order/hosting/web/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "waiveRetractationPeriod",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be processed with waiving retractation period"
            },
            {
              "name": "dnsZone",
              "dataType": "hosting.web.DnsZoneEnum",
              "paramType": "query",
              "fullType": "hosting.web.DnsZoneEnum",
              "required": false,
              "description": "Dns zone modification possibilities ( by default : RESET_ALL )"
            },
            {
              "name": "module",
              "dataType": "hosting.web.module.OrderableNameEnum",
              "paramType": "query",
              "fullType": "hosting.web.module.OrderableNameEnum",
              "required": false,
              "description": "Module installation ready to use"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Domain name which will be linked to this hosting account"
            },
            {
              "name": "offer",
              "dataType": "hosting.web.OfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.OfferEnum",
              "required": true,
              "description": "Offer for your new hosting account"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "dnsZone",
              "dataType": "hosting.web.DnsZoneEnum",
              "paramType": "body",
              "fullType": "hosting.web.DnsZoneEnum",
              "required": false,
              "description": "Dns zone modification possibilities ( by default : RESET_ALL )"
            },
            {
              "name": "module",
              "dataType": "hosting.web.module.OrderableNameEnum",
              "paramType": "body",
              "fullType": "hosting.web.module.OrderableNameEnum",
              "required": false,
              "description": "Module installation ready to use"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Domain name which will be linked to this hosting account"
            },
            {
              "name": "offer",
              "dataType": "hosting.web.OfferEnum",
              "paramType": "body",
              "fullType": "hosting.web.OfferEnum",
              "required": true,
              "description": "Offer for your new hosting account"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new hosting account"
    },
    {
      "path": "/order/hosting/web/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/hosting/web/{serviceName}/bandwidth",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "traffic",
              "dataType": "hosting.web.BandwidthOfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.BandwidthOfferEnum",
              "required": true,
              "description": "Available offers to increase bandwidth quota (unit: GB)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'bandwidth' option"
        }
      ],
      "description": "Order additional bandwidth"
    },
    {
      "path": "/order/hosting/web/{serviceName}/bandwidth/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "traffic",
              "dataType": "hosting.web.BandwidthOfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.BandwidthOfferEnum",
              "required": true,
              "description": "Available offers to increase bandwidth quota (unit: GB)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "traffic",
              "dataType": "hosting.web.BandwidthOfferEnum",
              "paramType": "body",
              "fullType": "hosting.web.BandwidthOfferEnum",
              "required": true,
              "description": "Available offers to increase bandwidth quota (unit: GB)"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order additional bandwidth"
    },
    {
      "path": "/order/hosting/web/{serviceName}/cdn",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "offer",
              "dataType": "hosting.web.CdnOfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.CdnOfferEnum",
              "required": true,
              "description": "Cdn offers you can add to your hosting"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'cdn' option"
        }
      ],
      "description": "Create an order for cdn option"
    },
    {
      "path": "/order/hosting/web/{serviceName}/cdn/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "offer",
              "dataType": "hosting.web.CdnOfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.CdnOfferEnum",
              "required": true,
              "description": "Cdn offers you can add to your hosting"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "offer",
              "dataType": "hosting.web.CdnOfferEnum",
              "paramType": "body",
              "fullType": "hosting.web.CdnOfferEnum",
              "required": true,
              "description": "Cdn offers you can add to your hosting"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for cdn option"
    },
    {
      "path": "/order/hosting/web/{serviceName}/changeMainDomain",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "New domain for change the main domain"
            },
            {
              "name": "mxplan",
              "dataType": "hosting.web.order.MxPlanEnum",
              "paramType": "query",
              "fullType": "hosting.web.order.MxPlanEnum",
              "required": true,
              "description": "MX plan linked to the odl main domain"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'changeMainDomain' option"
        }
      ],
      "description": "Create an order for change the hosting main domain"
    },
    {
      "path": "/order/hosting/web/{serviceName}/changeMainDomain/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "New domain for change the main domain"
            },
            {
              "name": "mxplan",
              "dataType": "hosting.web.order.MxPlanEnum",
              "paramType": "query",
              "fullType": "hosting.web.order.MxPlanEnum",
              "required": true,
              "description": "MX plan linked to the odl main domain"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "New domain for change the main domain"
            },
            {
              "name": "mxplan",
              "dataType": "hosting.web.order.MxPlanEnum",
              "paramType": "body",
              "fullType": "hosting.web.order.MxPlanEnum",
              "required": true,
              "description": "MX plan linked to the odl main domain"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for change the hosting main domain"
    },
    {
      "path": "/order/hosting/web/{serviceName}/extraSqlPerso",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "offer",
              "dataType": "hosting.web.database.SqlPersoOfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.database.SqlPersoOfferEnum",
              "required": true,
              "description": "Offers you can add to your hosting"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'extraSqlPerso' option"
        }
      ],
      "description": "Create an order for extra sql perso"
    },
    {
      "path": "/order/hosting/web/{serviceName}/extraSqlPerso/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "offer",
              "dataType": "hosting.web.database.SqlPersoOfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.database.SqlPersoOfferEnum",
              "required": true,
              "description": "Offers you can add to your hosting"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "offer",
              "dataType": "hosting.web.database.SqlPersoOfferEnum",
              "paramType": "body",
              "fullType": "hosting.web.database.SqlPersoOfferEnum",
              "required": true,
              "description": "Offers you can add to your hosting"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for extra sql perso"
    },
    {
      "path": "/order/hosting/web/{serviceName}/ssl",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'ssl' option"
        }
      ],
      "description": "Create an order for hosted ssl option"
    },
    {
      "path": "/order/hosting/web/{serviceName}/ssl/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for hosted ssl option"
    },
    {
      "path": "/order/hosting/web/{serviceName}/upgrade",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "offer",
              "dataType": "hosting.web.OfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.OfferEnum",
              "required": true,
              "description": "New offers for your hosting account"
            },
            {
              "name": "startTime",
              "dataType": "time",
              "paramType": "query",
              "fullType": "time",
              "required": false,
              "description": "Upgrade start time if it implies a shutdown of the website during few minutes (Format \"HH:MM:ss\")"
            },
            {
              "name": "waiveRetractationPeriod",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be processed with waiving retractation period"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Create an order for upgrade your hosting account"
    },
    {
      "path": "/order/hosting/web/{serviceName}/upgrade/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "offer",
              "dataType": "hosting.web.OfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.OfferEnum",
              "required": true,
              "description": "New offers for your hosting account"
            },
            {
              "name": "startTime",
              "dataType": "time",
              "paramType": "query",
              "fullType": "time",
              "required": false,
              "description": "Upgrade start time if it implies a shutdown of the website during few minutes (Format \"HH:MM:ss\")"
            },
            {
              "name": "waiveRetractationPeriod",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Indicates that order will be processed with waiving retractation period"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/webHosting"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "offer",
              "dataType": "hosting.web.OfferEnum",
              "paramType": "body",
              "fullType": "hosting.web.OfferEnum",
              "required": true,
              "description": "New offers for your hosting account"
            },
            {
              "name": "startTime",
              "dataType": "time",
              "paramType": "body",
              "fullType": "time",
              "required": false,
              "description": "Upgrade start time if it implies a shutdown of the website during few minutes (Format \"HH:MM:ss\")"
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for upgrade your hosting account"
    },
    {
      "path": "/order/license/cloudLinux/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "version",
              "dataType": "license.CloudLinuxVersionEnum",
              "paramType": "query",
              "fullType": "license.CloudLinuxVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/cloudLinux/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "version",
              "dataType": "license.CloudLinuxVersionEnum",
              "paramType": "query",
              "fullType": "license.CloudLinuxVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "version",
              "dataType": "license.CloudLinuxVersionEnum",
              "paramType": "body",
              "fullType": "license.CloudLinuxVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/cpanel",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/cpanel/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/cpanel/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "body",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/cpanel/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/cpanel/{serviceName}/upgrade",
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
            },
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "Wanted new version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license version"
    },
    {
      "path": "/order/license/cpanel/{serviceName}/upgrade/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "Wanted new version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.OrderableCpanelVersionEnum",
              "paramType": "body",
              "fullType": "license.OrderableCpanelVersionEnum",
              "required": true,
              "description": "Wanted new version"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license version"
    },
    {
      "path": "/order/license/directadmin/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "version",
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/directadmin/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "version",
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "version",
              "dataType": "license.OrderableDirectAdminVersionEnum",
              "paramType": "body",
              "fullType": "license.OrderableDirectAdminVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/office/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "officeBusinessQuantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Number of prepaid office business license"
            },
            {
              "name": "officeProPlusQuantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Number of prepaid office pro plus license"
            },
            {
              "name": "giftCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Gift code for office license"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Create an order for an new office tenant"
    },
    {
      "path": "/order/license/office/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "officeBusinessQuantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Number of prepaid office business license"
            },
            {
              "name": "officeProPlusQuantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Number of prepaid office pro plus license"
            },
            {
              "name": "giftCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Gift code for office license"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "officeBusinessQuantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Number of prepaid office business license"
            },
            {
              "name": "officeProPlusQuantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Number of prepaid office pro plus license"
            },
            {
              "name": "giftCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Gift code for office license"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for an new office tenant"
    },
    {
      "path": "/order/license/plesk",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/plesk/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount of language pack numbers to include in this licences"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "query",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "query",
              "fullType": "license.PleskVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/plesk/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount of language pack numbers to include in this licences"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "query",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "query",
              "fullType": "license.PleskVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "body",
              "fullType": "license.PleskVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "body",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "body",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount of language pack numbers to include in this licences"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "body",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "body",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/plesk/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/plesk/{serviceName}/upgrade",
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
            },
            {
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "query",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "query",
              "fullType": "license.PleskVersionEnum",
              "required": false,
              "description": "This license version"
            },
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            },
            {
              "name": "antispam",
              "dataType": "license.OrderableAntispamEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntispamEnum",
              "required": false,
              "description": "The antispam currently enabled on this Plesk License"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/plesk/{serviceName}/upgrade/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "query",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "query",
              "fullType": "license.PleskVersionEnum",
              "required": false,
              "description": "This license version"
            },
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            },
            {
              "name": "antispam",
              "dataType": "license.OrderableAntispamEnum",
              "paramType": "query",
              "fullType": "license.OrderableAntispamEnum",
              "required": false,
              "description": "The antispam currently enabled on this Plesk License"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "languagePackNumber",
              "dataType": "license.OrderablePleskLanguagePackEnum",
              "paramType": "body",
              "fullType": "license.OrderablePleskLanguagePackEnum",
              "required": false,
              "description": "The amount (between 0 and 5) of language pack numbers to include in this licences"
            },
            {
              "name": "version",
              "dataType": "license.PleskVersionEnum",
              "paramType": "body",
              "fullType": "license.PleskVersionEnum",
              "required": false,
              "description": "This license version"
            },
            {
              "name": "wordpressToolkit",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "WordpressToolkit option activation"
            },
            {
              "name": "antivirus",
              "dataType": "license.OrderableAntivirusEnum",
              "paramType": "body",
              "fullType": "license.OrderableAntivirusEnum",
              "required": false,
              "description": "The antivirus to enable on this Plesk license"
            },
            {
              "name": "resellerManagement",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Reseller management option activation"
            },
            {
              "name": "powerpack",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "powerpack current activation state on your license"
            },
            {
              "name": "applicationSet",
              "dataType": "license.PleskApplicationSetEnum",
              "paramType": "body",
              "fullType": "license.PleskApplicationSetEnum",
              "required": false,
              "description": "Wanted application set"
            },
            {
              "name": "antispam",
              "dataType": "license.OrderableAntispamEnum",
              "paramType": "body",
              "fullType": "license.OrderableAntispamEnum",
              "required": false,
              "description": "The antispam currently enabled on this Plesk License"
            },
            {
              "name": "domainNumber",
              "dataType": "license.OrderablePleskDomainNumberEnum",
              "paramType": "body",
              "fullType": "license.OrderablePleskDomainNumberEnum",
              "required": false,
              "description": "This license domain number"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/sqlserver",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/sqlserver/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "query",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/sqlserver/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "query",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "body",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/sqlserver/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/sqlserver/{serviceName}/upgrade",
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
            },
            {
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "query",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/sqlserver/{serviceName}/upgrade/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "query",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.SqlServerVersionEnum",
              "paramType": "body",
              "fullType": "license.SqlServerVersionEnum",
              "required": true,
              "description": "This license version"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/virtuozzo",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/virtuozzo/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
            },
            {
              "name": "version",
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/virtuozzo/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
            },
            {
              "name": "version",
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed"
            },
            {
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "body",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
            },
            {
              "name": "version",
              "dataType": "license.OrderableVirtuozzoVersionEnum",
              "paramType": "body",
              "fullType": "license.OrderableVirtuozzoVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/virtuozzo/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/virtuozzo/{serviceName}/upgrade",
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
            },
            {
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/virtuozzo/{serviceName}/upgrade/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "query",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "containerNumber",
              "dataType": "license.OrderableVirtuozzoContainerNumberEnum",
              "paramType": "body",
              "fullType": "license.OrderableVirtuozzoContainerNumberEnum",
              "required": true,
              "description": "How much container is this license able to manage ..."
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/windows",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/windows/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsOsVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/windows/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "query",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsOsVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "body",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "serviceType",
              "dataType": "license.LicenseTypeEnum",
              "paramType": "body",
              "fullType": "license.LicenseTypeEnum",
              "required": false,
              "description": "# DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility #"
            },
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "body",
              "fullType": "license.WindowsOsVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/windows/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/windows/{serviceName}/upgrade",
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
            },
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsOsVersionEnum",
              "required": false,
              "description": "The windows version you want to enable on your windows license"
            },
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/windows/{serviceName}/upgrade/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsOsVersionEnum",
              "required": false,
              "description": "The windows version you want to enable on your windows license"
            },
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "query",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.WindowsOsVersionEnum",
              "paramType": "body",
              "fullType": "license.WindowsOsVersionEnum",
              "required": false,
              "description": "The windows version you want to enable on your windows license"
            },
            {
              "name": "sqlVersion",
              "dataType": "license.WindowsSqlVersionEnum",
              "paramType": "body",
              "fullType": "license.WindowsSqlVersionEnum",
              "required": false,
              "description": "The SQL Server version to enable on this license Windows license"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/worklight",
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
      "description": "Operations about the LICENSE service"
    },
    {
      "path": "/order/license/worklight/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "lessThan1000Users",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": true,
              "description": "Does your company have less than 1000 potential users"
            },
            {
              "name": "version",
              "dataType": "license.WorkLightVersionEnum",
              "paramType": "query",
              "fullType": "license.WorkLightVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/worklight/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "lessThan1000Users",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": true,
              "description": "Does your company have less than 1000 potential users"
            },
            {
              "name": "version",
              "dataType": "license.WorkLightVersionEnum",
              "paramType": "query",
              "fullType": "license.WorkLightVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "query",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "lessThan1000Users",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Does your company have less than 1000 potential users"
            },
            {
              "name": "version",
              "dataType": "license.WorkLightVersionEnum",
              "paramType": "body",
              "fullType": "license.WorkLightVersionEnum",
              "required": true,
              "description": "This license version"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip on which this license would be installed (for dedicated your main server Ip)"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order a new license on a given Ip with some given options"
    },
    {
      "path": "/order/license/worklight/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/license/worklight/{serviceName}/upgrade",
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
            },
            {
              "name": "version",
              "dataType": "license.WorkLightVersionEnum",
              "paramType": "query",
              "fullType": "license.WorkLightVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/license/worklight/{serviceName}/upgrade/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "version",
              "dataType": "license.WorkLightVersionEnum",
              "paramType": "query",
              "fullType": "license.WorkLightVersionEnum",
              "required": true,
              "description": "This license version"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "license.WorkLightVersionEnum",
              "paramType": "body",
              "fullType": "license.WorkLightVersionEnum",
              "required": true,
              "description": "This license version"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Upgrade this license with some given options"
    },
    {
      "path": "/order/router/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "vrack",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The name of your vrack"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'new' option"
        }
      ],
      "description": "Order router vpn"
    },
    {
      "path": "/order/router/new/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "vrack",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The name of your vrack"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "vrack",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The name of your vrack"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order router vpn"
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
      "description": "Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName#"
    },
    {
      "path": "/order/upgrade/cephaas",
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
      "description": "Operations about the CEPH service"
    },
    {
      "path": "/order/upgrade/cephaas/{serviceName}",
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
      "description": "Listing offers /order/upgrade/cephaas"
    },
    {
      "path": "/order/upgrade/cephaas/{serviceName}/{planCode}",
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
      "description": "Listing offers /order/upgrade/cephaas/#serviceName#"
    },
    {
      "path": "/order/upgrade/cloudDB",
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
      "description": "Operations about the SQLPRIVE service"
    },
    {
      "path": "/order/upgrade/cloudDB/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": false,
          "description": "Retrieve available offers to upgrade your service to"
        }
      ],
      "description": "Listing offers /order/upgrade/cloudDB"
    },
    {
      "path": "/order/upgrade/cloudDB/{domain}/{planCode}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Perform the requested upgrade of your service"
        }
      ],
      "description": "Listing offers /order/upgrade/cloudDB/#serviceName#"
    },
    {
      "path": "/order/upgrade/ipLoadbalancing",
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
      "description": "Operations about the IPLB service"
    },
    {
      "path": "/order/upgrade/ipLoadbalancing/{serviceName}",
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
      "description": "Listing offers /order/upgrade/ipLoadbalancing"
    },
    {
      "path": "/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}",
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
      "description": "Listing offers /order/upgrade/ipLoadbalancing/#serviceName#"
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
      "description": "Listing offers /order/upgrade/licensecPanel/#serviceName#"
    },
    {
      "path": "/order/upgrade/logs",
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
      "description": "Operations about the DBAAS-LOGS service"
    },
    {
      "path": "/order/upgrade/logs/{serviceName}",
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
      "description": "Listing offers /order/upgrade/logs"
    },
    {
      "path": "/order/upgrade/logs/{serviceName}/{planCode}",
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
      "description": "Listing offers /order/upgrade/logs/#serviceName#"
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
      "path": "/order/upgrade/privateSQL",
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
      "description": "Operations about the SQLPRIVE service"
    },
    {
      "path": "/order/upgrade/privateSQL/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "order.cart.GenericProductDefinition[]",
          "noAuthentication": false,
          "description": "Retrieve available offers to upgrade your service to"
        }
      ],
      "description": "Listing offers /order/upgrade/privateSQL"
    },
    {
      "path": "/order/upgrade/privateSQL/{domain}/{planCode}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "planCode",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Plan code"
            }
          ],
          "responseType": "order.upgrade.order.upgrade.OperationAndOrder",
          "noAuthentication": false,
          "description": "Perform the requested upgrade of your service"
        }
      ],
      "description": "Listing offers /order/upgrade/privateSQL/#serviceName#"
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
      "description": "Operations about the VPS service"
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
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
    },
    {
      "path": "/order/upgrade/webHosting",
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
      "description": "Operations about the HOSTING service"
    },
    {
      "path": "/order/upgrade/webHosting/{serviceName}",
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
      "description": "Listing offers /order/upgrade/webHosting"
    },
    {
      "path": "/order/upgrade/webHosting/{serviceName}/{planCode}",
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
      "description": "Listing offers /order/upgrade/webHosting/#serviceName#"
    },
    {
      "path": "/order/veeamCloudConnect",
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
      "description": "Operations about the VEEAMCC service"
    },
    {
      "path": "/order/veeamCloudConnect/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade",
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
            },
            {
              "name": "offer",
              "dataType": "veeamCloudConnect.Offer",
              "paramType": "query",
              "fullType": "veeamCloudConnect.Offer",
              "required": true,
              "description": "The offer on which you want to be upgraded"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Order an upgrade upon your Veeam Cloud Connect account"
    },
    {
      "path": "/order/veeamCloudConnect/{serviceName}/upgrade/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "offer",
              "dataType": "veeamCloudConnect.Offer",
              "paramType": "query",
              "fullType": "veeamCloudConnect.Offer",
              "required": true,
              "description": "The offer on which you want to be upgraded"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "offer",
              "dataType": "veeamCloudConnect.Offer",
              "paramType": "body",
              "fullType": "veeamCloudConnect.Offer",
              "required": true,
              "description": "The offer on which you want to be upgraded"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order an upgrade upon your Veeam Cloud Connect account"
    },
    {
      "path": "/order/vps",
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
      "description": "Operations about the VPS service"
    },
    {
      "path": "/order/vps/{serviceName}",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    },
    {
      "path": "/order/vps/{serviceName}/additionalDisk",
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
            },
            {
              "name": "additionalDiskSize",
              "dataType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "paramType": "query",
              "fullType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "required": true,
              "description": "Size of the additional disk"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'additionalDisk' option"
        }
      ],
      "description": "Order additional disk"
    },
    {
      "path": "/order/vps/{serviceName}/additionalDisk/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "additionalDiskSize",
              "dataType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "paramType": "query",
              "fullType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "required": true,
              "description": "Size of the additional disk"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "additionalDiskSize",
              "dataType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "paramType": "body",
              "fullType": "vps.additionalDisk.AdditionalDiskSizeEnum",
              "required": true,
              "description": "Size of the additional disk"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order additional disk"
    },
    {
      "path": "/order/vps/{serviceName}/automatedBackup",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'automatedBackup' option"
        }
      ],
      "description": "Order Automated Backup Option (vps Cloud only)"
    },
    {
      "path": "/order/vps/{serviceName}/automatedBackup/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order Automated Backup Option (vps Cloud only)"
    },
    {
      "path": "/order/vps/{serviceName}/cpanel",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "replacement": "/order/license/{serviceName}/cpanel/new"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'cpanel' option"
        }
      ],
      "description": "Create an order for a cPanel license"
    },
    {
      "path": "/order/vps/{serviceName}/cpanel/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "replacement": "/order/license/{serviceName}/cpanel/new"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "replacement": "/order/license/{serviceName}/cpanel/new"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for a cPanel license"
    },
    {
      "path": "/order/vps/{serviceName}/ftpbackup",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'ftpbackup' option"
        }
      ],
      "description": "Order FtpBackup Option"
    },
    {
      "path": "/order/vps/{serviceName}/ftpbackup/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order FtpBackup Option"
    },
    {
      "path": "/order/vps/{serviceName}/ip",
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
            },
            {
              "name": "country",
              "dataType": "vps.ip.GeolocationEnum",
              "paramType": "query",
              "fullType": "vps.ip.GeolocationEnum",
              "required": false,
              "description": "Choose a geolocation for your IP Address"
            },
            {
              "name": "number",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Number of IPs to order"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'ip' option"
        }
      ],
      "description": "Order Additional IP"
    },
    {
      "path": "/order/vps/{serviceName}/ip/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "country",
              "dataType": "vps.ip.GeolocationEnum",
              "paramType": "query",
              "fullType": "vps.ip.GeolocationEnum",
              "required": false,
              "description": "Choose a geolocation for your IP Address"
            },
            {
              "name": "number",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Number of IPs to order"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "country",
              "dataType": "vps.ip.GeolocationEnum",
              "paramType": "body",
              "fullType": "vps.ip.GeolocationEnum",
              "required": false,
              "description": "Choose a geolocation for your IP Address"
            },
            {
              "name": "number",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Number of IPs to order"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order Additional IP"
    },
    {
      "path": "/order/vps/{serviceName}/plesk",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "replacement": "/order/license/{serviceName}/plesk/new"
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
            },
            {
              "name": "domainNumber",
              "dataType": "vps.PleskLicenseDomainNumberEnum",
              "paramType": "query",
              "fullType": "vps.PleskLicenseDomainNumberEnum",
              "required": true,
              "description": "Domain number you want to order a licence for"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'plesk' option"
        }
      ],
      "description": "Create an order for a PLESK license"
    },
    {
      "path": "/order/vps/{serviceName}/plesk/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "replacement": "/order/license/{serviceName}/plesk/new"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "domainNumber",
              "dataType": "vps.PleskLicenseDomainNumberEnum",
              "paramType": "query",
              "fullType": "vps.PleskLicenseDomainNumberEnum",
              "required": true,
              "description": "Domain number you want to order a licence for"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2014-07-06:00:00+01:00",
            "deprecatedDate": "2014-05-06T16:00:00+01:00",
            "replacement": "/order/license/{serviceName}/plesk/new"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domainNumber",
              "dataType": "vps.PleskLicenseDomainNumberEnum",
              "paramType": "body",
              "fullType": "vps.PleskLicenseDomainNumberEnum",
              "required": true,
              "description": "Domain number you want to order a licence for"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Create an order for a PLESK license"
    },
    {
      "path": "/order/vps/{serviceName}/snapshot",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'snapshot' option"
        }
      ],
      "description": "Order Snapshot Option"
    },
    {
      "path": "/order/vps/{serviceName}/snapshot/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
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
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order Snapshot Option"
    },
    {
      "path": "/order/vps/{serviceName}/upgrade",
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
            },
            {
              "name": "model",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Model"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'upgrade' option"
        }
      ],
      "description": "Order Upgrade"
    },
    {
      "path": "/order/vps/{serviceName}/upgrade/{duration}",
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            },
            {
              "name": "model",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Model"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "model",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Model"
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
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order Upgrade"
    },
    {
      "path": "/order/vps/{serviceName}/veeam",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2016-01-08:00:00+01:00",
            "deprecatedDate": "2015-12-26T08:00:00+01:00",
            "replacement": "/order/vps/{serviceName}/automatedBackup"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'veeam' option"
        }
      ],
      "description": "Order Veeam Option"
    },
    {
      "path": "/order/vps/{serviceName}/veeam/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2016-01-08:00:00+01:00",
            "deprecatedDate": "2015-12-26T08:00:00+01:00",
            "replacement": "/order/vps/{serviceName}/automatedBackup"
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
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2016-01-08:00:00+01:00",
            "deprecatedDate": "2015-12-26T08:00:00+01:00",
            "replacement": "/order/vps/{serviceName}/automatedBackup"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order Veeam Option"
    },
    {
      "path": "/order/vps/{serviceName}/windows",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed durations for 'windows' option"
        }
      ],
      "description": "Order Windows Option (2015 only)"
    },
    {
      "path": "/order/vps/{serviceName}/windows/{duration}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "duration",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Duration"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order Windows Option (2015 only)"
    },
    {
      "path": "/order/vrack",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2017-07-27T00:00:00+01:00",
            "deprecatedDate": "2017-06-27T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/vrack"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the VRACK service"
    },
    {
      "path": "/order/vrack/new",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2017-07-27T00:00:00+01:00",
            "deprecatedDate": "2017-06-27T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/vrack"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Number of vrack you want to order"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Get prices and contracts information"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2017-07-27T00:00:00+01:00",
            "deprecatedDate": "2017-06-27T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/vrack"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Number of vrack you want to order"
            }
          ],
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Create order"
        }
      ],
      "description": "Order new vrack"
    },
    {
      "path": "/order/vrack/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2017-07-27T00:00:00+01:00",
            "deprecatedDate": "2017-06-27T00:00:00+01:00",
            "replacement": "/order/cart/{cartId}/vrack"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get allowed options"
        }
      ],
      "description": "List available options for this service"
    }
  ],
  "resourcePath": "/order",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "cdnanycast.OrderCacheRuleEnum": {
      "id": "OrderCacheRuleEnum",
      "namespace": "cdnanycast",
      "description": "Available number for cacheRule upgrade",
      "enum": [
        "100",
        "1000"
      ],
      "enumType": "long"
    },
    "cdnanycast.OrderQuotaEnum": {
      "id": "OrderQuotaEnum",
      "namespace": "cdnanycast",
      "description": "Available number for quota order",
      "enum": [
        "1",
        "10",
        "100",
        "1000"
      ],
      "enumType": "long"
    },
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
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "properties": {
        "unit": {
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
    "dedicated.NasHAOfferEnum": {
      "id": "NasHAOfferEnum",
      "namespace": "dedicated",
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
      "enumType": "string"
    },
    "dedicated.NasHAZoneEnum": {
      "id": "NasHAZoneEnum",
      "namespace": "dedicated",
      "description": "Nas HA localization",
      "enum": [
        "bhs",
        "rbx",
        "sbg"
      ],
      "enumType": "string"
    },
    "dedicated.server.BackupStorageCapacityEnum": {
      "id": "BackupStorageCapacityEnum",
      "namespace": "dedicated.server",
      "description": "Different backup storage capacity in gigabytes",
      "enum": [
        "1000",
        "10000",
        "500",
        "5000"
      ],
      "enumType": "long"
    },
    "dedicated.server.BandwidthOrderEnum": {
      "id": "BandwidthOrderEnum",
      "namespace": "dedicated.server",
      "description": " Different Bandwidth orderable in Mbps",
      "enum": [
        "1000",
        "2000",
        "3000"
      ],
      "enumType": "long"
    },
    "dedicated.server.BandwidthOrderTypeEnum": {
      "id": "BandwidthOrderTypeEnum",
      "namespace": "dedicated.server",
      "description": " Different Bandwidth type orderable",
      "enum": [
        "platinum",
        "premium",
        "ultimate"
      ],
      "enumType": "string"
    },
    "dedicated.server.BandwidthvRackOrderEnum": {
      "id": "BandwidthvRackOrderEnum",
      "namespace": "dedicated.server",
      "description": " Different vRack Bandwidth orderable in Mbps",
      "enum": [
        "1000",
        "3000"
      ],
      "enumType": "long"
    },
    "dedicated.server.FirewallModelEnum": {
      "id": "FirewallModelEnum",
      "namespace": "dedicated.server",
      "description": "Firewall model name",
      "enum": [
        "asa5505",
        "asa5510",
        "asa5520"
      ],
      "enumType": "string"
    },
    "dedicated.server.IpBlockSizeEnum": {
      "id": "IpBlockSizeEnum",
      "namespace": "dedicated.server",
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
      "enumType": "long"
    },
    "dedicated.server.IpCountryEnum": {
      "id": "IpCountryEnum",
      "namespace": "dedicated.server",
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
      "enumType": "coreTypes.CountryEnum"
    },
    "dedicated.server.IpStaticCountryEnum": {
      "id": "IpStaticCountryEnum",
      "namespace": "dedicated.server",
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
      "enumType": "string"
    },
    "dedicated.server.IpTypeOrderableEnum": {
      "id": "IpTypeOrderableEnum",
      "namespace": "dedicated.server",
      "description": "Orderable IP type",
      "enum": [
        "failover",
        "static",
        "unshielded"
      ],
      "enumType": "string"
    },
    "dedicated.server.OrderableSysFeatureEnum": {
      "id": "OrderableSysFeatureEnum",
      "namespace": "dedicated.server",
      "description": "Dedicated server orderable features",
      "enum": [
        "backupProtocol",
        "monitoring"
      ],
      "enumType": "string"
    },
    "dedicated.server.TrafficOrderEnum": {
      "id": "TrafficOrderEnum",
      "namespace": "dedicated.server",
      "description": " traffic orderable ",
      "enum": [
        "100Mbps-Unlimited",
        "250Mbps-Unlimited",
        "500Mbps-Unlimited"
      ],
      "enumType": "string"
    },
    "dedicated.server.UsbKeyCapacityEnum": {
      "id": "UsbKeyCapacityEnum",
      "namespace": "dedicated.server",
      "description": " Different USB key capacity in gigabytes",
      "enum": [
        "128",
        "16",
        "256",
        "32",
        "64"
      ],
      "enumType": "long"
    },
    "dedicatedCloud.AdditionalBandwidthEnum": {
      "id": "AdditionalBandwidthEnum",
      "namespace": "dedicatedCloud",
      "description": "All available additional bandwidth amounts in Mbps",
      "enum": [
        "1500"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.IpCountriesEnum": {
      "id": "IpCountriesEnum",
      "namespace": "dedicatedCloud",
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
      "enumType": "coreTypes.CountryEnum"
    },
    "dedicatedCloud.OrderableIpBlockRangeEnum": {
      "id": "OrderableIpBlockRangeEnum",
      "namespace": "dedicatedCloud",
      "description": "All orderable IP Block ranges in your Dedicated Cloud",
      "enum": [
        "24",
        "25",
        "26",
        "27",
        "28"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.ressources.UpgradeRessourceTypeEnum": {
      "id": "UpgradeRessourceTypeEnum",
      "namespace": "dedicatedCloud.ressources",
      "description": "The Dedicated Cloud ressource types that can be upgraded",
      "enum": [
        "account",
        "all",
        "filer",
        "host"
      ],
      "enumType": "string"
    },
    "dedicatedCloud.ressources.UpgradeTypeEnum": {
      "id": "UpgradeTypeEnum",
      "namespace": "dedicatedCloud.ressources",
      "description": "The available billing type upgrade for Dedicated Cloud ressource",
      "enum": [
        "demoToMonthly",
        "freeSpareToHourly",
        "hourlyToMonthly"
      ],
      "enumType": "string"
    },
    "email.exchange.OutlookVersionEnum": {
      "id": "OutlookVersionEnum",
      "namespace": "email.exchange",
      "description": "Outlook version",
      "enum": [
        "mac_x86_2011",
        "mac_x86_2016",
        "windows_x64_2013",
        "windows_x64_2016",
        "windows_x86_2013",
        "windows_x86_2016"
      ],
      "enumType": "string"
    },
    "email.exchange.OvhLicenceEnum": {
      "id": "OvhLicenceEnum",
      "namespace": "email.exchange",
      "description": "OVH licence account",
      "enum": [
        "basic",
        "enterprise",
        "standard"
      ],
      "enumType": "string"
    },
    "email.exchange.accountQuotaEnum": {
      "id": "accountQuotaEnum",
      "namespace": "email.exchange",
      "description": "Storage quota options in GB",
      "enum": [
        "300",
        "50"
      ],
      "enumType": "long"
    },
    "hosting.PrivateDatabase.AvailableRamSizeEnum": {
      "id": "AvailableRamSizeEnum",
      "namespace": "hosting.PrivateDatabase",
      "description": "Private database available ram sizes",
      "enum": [
        "1024",
        "2048",
        "4096",
        "512"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.DatacenterEnum": {
      "id": "DatacenterEnum",
      "namespace": "hosting.PrivateDatabase",
      "description": "Available datacenters",
      "enum": [
        "bhs1",
        "gra1",
        "gra2",
        "p19"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.OfferEnum": {
      "id": "OfferEnum",
      "namespace": "hosting.PrivateDatabase",
      "description": "Available offers",
      "enum": [
        "classic",
        "public"
      ],
      "enumType": "string"
    },
    "hosting.PrivateDatabase.OrderableVersionEnum": {
      "id": "OrderableVersionEnum",
      "namespace": "hosting.PrivateDatabase",
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
        "postgresql_10",
        "postgresql_11",
        "postgresql_12",
        "postgresql_9.4",
        "postgresql_9.5",
        "postgresql_9.6",
        "redis_3.2",
        "redis_4.0"
      ],
      "enumType": "string"
    },
    "hosting.web.BandwidthOfferEnum": {
      "id": "BandwidthOfferEnum",
      "namespace": "hosting.web",
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
      "enumType": "long"
    },
    "hosting.web.CdnOfferEnum": {
      "id": "CdnOfferEnum",
      "namespace": "hosting.web",
      "description": "Hosting's CDN offer",
      "enum": [
        "CDN_BUSINESS",
        "CDN_BUSINESS_FREE"
      ],
      "enumType": "string"
    },
    "hosting.web.DnsZoneEnum": {
      "id": "DnsZoneEnum",
      "namespace": "hosting.web",
      "description": "Dns zone modification possibilities when installing a new hosting",
      "enum": [
        "NO_CHANGE",
        "RESET_ALL",
        "RESET_ONLY_A",
        "RESET_ONLY_MX"
      ],
      "enumType": "string"
    },
    "hosting.web.OfferEnum": {
      "id": "OfferEnum",
      "namespace": "hosting.web",
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
      "enumType": "string"
    },
    "hosting.web.database.SqlPersoOfferEnum": {
      "id": "SqlPersoOfferEnum",
      "namespace": "hosting.web.database",
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
      "enumType": "string"
    },
    "hosting.web.module.OrderableNameEnum": {
      "id": "OrderableNameEnum",
      "namespace": "hosting.web.module",
      "description": "Module's name orderable when order a new hosting",
      "enum": [
        "DRUPAL",
        "JOOMLA",
        "PRESTASHOP",
        "WORDPRESS"
      ],
      "enumType": "string"
    },
    "hosting.web.order.MxPlanEnum": {
      "id": "MxPlanEnum",
      "namespace": "hosting.web.order",
      "description": "MX plan linked to the new main domain",
      "enum": [
        "005",
        "025",
        "100",
        "delete",
        "full"
      ],
      "enumType": "string"
    },
    "license.CloudLinuxVersionEnum": {
      "id": "CloudLinuxVersionEnum",
      "namespace": "license",
      "description": "All versions for CloudLinux product",
      "enum": [
        "SINGLE",
        "WITH_CPANEL",
        "WITH_PLESK12",
        "cloudlinux-license"
      ],
      "enumType": "string"
    },
    "license.LicenseTypeEnum": {
      "id": "LicenseTypeEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.OrderableAntispamEnum": {
      "id": "OrderableAntispamEnum",
      "namespace": "license",
      "description": "All antispam available for Plesk products",
      "enum": [
        "SPAM_ASSASSIN"
      ],
      "enumType": "string"
    },
    "license.OrderableAntivirusEnum": {
      "id": "OrderableAntivirusEnum",
      "namespace": "license",
      "description": "All antivirus available for Plesk products",
      "enum": [
        "DR_WEB",
        "KASPERSKY_UNLIMITED_MAILBOXES",
        "kaspersky"
      ],
      "enumType": "string"
    },
    "license.OrderableCpanelVersionEnum": {
      "id": "OrderableCpanelVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.OrderableDirectAdminVersionEnum": {
      "id": "OrderableDirectAdminVersionEnum",
      "namespace": "license",
      "description": "All versions available for DirectAdmin products",
      "enum": [
        "DIRECTADMIN_1",
        "directadmin-license"
      ],
      "enumType": "string"
    },
    "license.OrderablePleskDomainNumberEnum": {
      "id": "OrderablePleskDomainNumberEnum",
      "namespace": "license",
      "description": "All domain available for Plesk products",
      "enum": [
        "10",
        "100",
        "30",
        "300",
        "hostingsuite",
        "unlimited"
      ],
      "enumType": "string"
    },
    "license.OrderablePleskLanguagePackEnum": {
      "id": "OrderablePleskLanguagePackEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.OrderableVirtuozzoContainerNumberEnum": {
      "id": "OrderableVirtuozzoContainerNumberEnum",
      "namespace": "license",
      "description": "All quantities of container available for a Virtuozzo license",
      "enum": [
        "2_CPU_001_CONTAINER",
        "2_CPU_003_CONTAINER",
        "2_CPU_010_CONTAINER",
        "2_CPU_030_CONTAINER",
        "2_CPU_060_CONTAINER",
        "2_CPU_100_CONTAINER"
      ],
      "enumType": "string"
    },
    "license.OrderableVirtuozzoVersionEnum": {
      "id": "OrderableVirtuozzoVersionEnum",
      "namespace": "license",
      "description": "All versions available for Virtuozzo products",
      "enum": [
        "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
        "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS",
        "virtuozzo-4",
        "virtuozzo-4-for-windows"
      ],
      "enumType": "string"
    },
    "license.PleskApplicationSetEnum": {
      "id": "PleskApplicationSetEnum",
      "namespace": "license",
      "description": "Application set available for Plesk products",
      "enum": [
        "applicationpack",
        "developerpack",
        "power-pack-for-plesk12",
        "powerpack"
      ],
      "enumType": "string"
    },
    "license.PleskVersionEnum": {
      "id": "PleskVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.SqlServerVersionEnum": {
      "id": "SqlServerVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.WindowsOsVersionEnum": {
      "id": "WindowsOsVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.WindowsSqlVersionEnum": {
      "id": "WindowsSqlVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "license.WorkLightVersionEnum": {
      "id": "WorkLightVersionEnum",
      "namespace": "license",
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
      "enumType": "string"
    },
    "nichandle.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "nichandle",
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
      "enumType": "string"
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
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Description of your cart",
          "required": false
        },
        "expire": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Expiration time",
          "required": false
        },
        "items": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Items of your cart",
          "required": false
        },
        "readOnly": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the cart has already been validated",
          "required": false
        }
      }
    },
    "order.cart.Checkout": {
      "id": "Checkout",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "autoPayWithPreferredPaymentMethod": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicates that order will be automatically paid with preferred payment method",
          "required": false
        },
        "waiveRetractationPeriod": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicates that order will be processed with waiving retractation period",
          "required": false
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
          "readOnly": true,
          "description": "Configuration ID",
          "required": false
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Identifier of the resource",
          "required": false
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Path to the resource in API.OVH.COM",
          "required": false
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
          "required": false
        },
        "required": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the configuration item is required",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the configuration item",
          "required": false
        }
      }
    },
    "order.cart.CouponCreation": {
      "id": "CouponCreation",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "coupon": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Coupon identifier",
          "required": true
        }
      }
    },
    "order.cart.Creation": {
      "id": "Creation",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of your cart",
          "required": false
        },
        "expire": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Time of expiration of the cart",
          "required": false
        },
        "ovhSubsidiary": {
          "type": "nichandle.OvhSubsidiaryEnum",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "OVH Subsidiary where you want to order",
          "required": true
        }
      }
    },
    "order.cart.DomainActionEnum": {
      "id": "DomainActionEnum",
      "namespace": "order.cart",
      "description": "Action values for domain product information",
      "enum": [
        "create",
        "transfer",
        "update",
        "trade"
      ],
      "enumType": "string"
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
    "order.cart.GenericDedicatedCreation": {
      "id": "GenericDedicatedCreation",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "duration": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Duration selected for the purchase of the product",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of a dedicated server offer",
          "required": true
        },
        "pricingMode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Pricing mode selected for the purchase of the product",
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Quantity of product desired",
          "required": true
        }
      }
    },
    "order.cart.GenericDedicatedOptionsCreation": {
      "id": "GenericDedicatedOptionsCreation",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "duration": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Duration selected for the purchase of the product",
          "required": true
        },
        "itemId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cart item to be linked",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of a dedicated server offer",
          "required": true
        },
        "pricingMode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Pricing mode selected for the purchase of the product",
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Quantity of product desired",
          "required": true
        }
      }
    },
    "order.cart.GenericDomainCreation": {
      "id": "GenericDomainCreation",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Domain name to order",
          "required": true
        },
        "duration": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": true,
          "readOnly": false,
          "description": "Duration for the product",
          "required": false
        },
        "offerId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Offer unique identifier",
          "required": false
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Quantity to order",
          "required": false
        }
      }
    },
    "order.cart.GenericDomainOptionsCreation": {
      "id": "GenericDomainOptionsCreation",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "duration": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Duration selected for the purchase of the product",
          "required": true
        },
        "itemId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cart item to be linked",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of a domain name option offer",
          "required": true
        },
        "pricingMode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Pricing mode selected for the purchase of the product",
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Quantity of product desired",
          "required": true
        }
      }
    },
    "order.cart.GenericOptionCreation": {
      "id": "GenericOptionCreation",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "duration": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Duration selected for the purchase of the product",
          "required": true
        },
        "itemId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cart item to be linked",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of the option offer",
          "required": true
        },
        "pricingMode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Pricing mode selected for the purchase of the product",
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Quantity of product desired",
          "required": true
        }
      }
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
          "readOnly": true,
          "description": "Define if options of this family are exclusive with each other",
          "required": false
        },
        "family": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option family",
          "required": false
        },
        "mandatory": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Define if an option of this family is mandatory",
          "required": false
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Product offer identifier",
          "required": false
        },
        "prices": {
          "type": "order.cart.GenericProductPricing[]",
          "fullType": "order.cart.GenericProductPricing[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Prices of the product offer",
          "required": false
        },
        "productName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the product",
          "required": false
        },
        "productType": {
          "type": "order.cart.GenericProductTypeEnum",
          "fullType": "order.cart.GenericProductTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Product type",
          "required": false
        }
      }
    },
    "order.cart.GenericProductCreation": {
      "id": "GenericProductCreation",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "duration": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Duration selected for the purchase of the product",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of the offer",
          "required": true
        },
        "pricingMode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Pricing mode selected for the purchase of the product",
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Quantity of product desired",
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
    "order.cart.ItemConfigurationCreation": {
      "id": "ItemConfigurationCreation",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Label for your configuration item",
          "required": true
        },
        "value": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": false,
          "description": "Value or resource URL on API.OVH.COM of your configuration item",
          "required": true
        }
      }
    },
    "order.cart.ItemUpdate": {
      "id": "ItemUpdate",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "duration": {
          "type": "duration",
          "fullType": "duration",
          "canBeNull": false,
          "readOnly": false,
          "description": "New duration for item",
          "required": false
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "New quantity for item",
          "required": false
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
    "order.cart.ProductInformation": {
      "id": "ProductInformation",
      "namespace": "order.cart",
      "description": "Information about a product for Order/Cart",
      "properties": {
        "action": {
          "type": "order.cart.DomainActionEnum",
          "fullType": "order.cart.DomainActionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Action kind",
          "required": false
        },
        "configurations": {
          "type": "order.cart.ConfigurationRequirements[]",
          "fullType": "order.cart.ConfigurationRequirements[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Informations about the configurations required",
          "required": false
        },
        "deliveryTime": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Informations about the estimated delivery time for the product",
          "required": false
        },
        "duration": {
          "type": "duration[]",
          "fullType": "duration[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List all the duration allowed for the product",
          "required": false
        },
        "offer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Informations about the domain's offer (gold|diamond|platinium)",
          "required": false
        },
        "offerId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "ID of the related offer",
          "required": false
        },
        "orderable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the product is orderable or not",
          "required": false
        },
        "phase": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Informations about the domain phase",
          "required": false
        },
        "prices": {
          "type": "order.cart.Price[]",
          "fullType": "order.cart.Price[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Price details of the product",
          "required": false
        },
        "pricingMode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pricing model identifier for this product",
          "required": false
        },
        "productId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Product identifier",
          "required": false
        },
        "quantityMax": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum quantity purchasable for this product",
          "required": false
        }
      }
    },
    "order.cart.Update": {
      "id": "Update",
      "namespace": "order.cart",
      "description": "Missing description",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of your cart",
          "required": false
        },
        "expire": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Time of expiration of the cart",
          "required": false
        }
      }
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
    "order.catalog.pcc.Catalog": {
      "id": "Catalog",
      "namespace": "order.catalog.pcc",
      "description": "Describe a Private Cloud commercial catalog",
      "properties": {
        "catalogId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Catalog ID",
          "required": true
        },
        "catalogName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Catalog name",
          "required": true
        },
        "commercialRanges": {
          "type": "order.catalog.pcc.CommercialRange[]",
          "fullType": "order.catalog.pcc.CommercialRange[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes Commercial Ranges of a Private Cloud",
          "required": true
        },
        "merchantCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "OVH Subsidiary of the Catalog",
          "required": true
        },
        "plans": {
          "type": "order.catalog.ProductPlan[]",
          "fullType": "order.catalog.ProductPlan[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Commercial offers",
          "required": true
        }
      }
    },
    "order.catalog.pcc.CommercialRange": {
      "id": "CommercialRange",
      "namespace": "order.catalog.pcc",
      "description": "Describes the Commercial Range of a Private Cloud",
      "properties": {
        "datacenters": {
          "type": "order.catalog.pcc.Datacenter[]",
          "fullType": "order.catalog.pcc.Datacenter[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes Private Cloud Datacenters",
          "required": true
        },
        "defaultZone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Default datacenter of the commercial range",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the commercial range",
          "required": true
        }
      }
    },
    "order.catalog.pcc.Datacenter": {
      "id": "Datacenter",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Datacenter",
      "properties": {
        "cityCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "City Code of a Datacenter",
          "required": true
        },
        "cityName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "City Name of a Datacenter",
          "required": true
        },
        "countryCode": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Country Code of a Datacenter",
          "required": true
        },
        "defaultHypervisor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the default hypervisor of a Datacenter",
          "required": true
        },
        "hypervisors": {
          "type": "order.catalog.pcc.Hypervisor[]",
          "fullType": "order.catalog.pcc.Hypervisor[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes Private Cloud Hypervisors",
          "required": true
        },
        "mainPlan": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Main plan code to use for a Datacenter",
          "required": true
        },
        "orderable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes if a Private Cloud can be ordered on a Datacenter",
          "required": true
        },
        "orderableOptions": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes if options can be ordered on a Datacenter",
          "required": true
        },
        "orderableResources": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes if resources can be ordered on a Datacenter",
          "required": true
        },
        "storagesNoPack": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of filers add in case of a No Pack order",
          "required": true
        },
        "zoneFullName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone Code of a datacenter",
          "required": true
        },
        "zoneName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone Name of a datacenter",
          "required": true
        }
      }
    },
    "order.catalog.pcc.Host": {
      "id": "Host",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Host",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the host",
          "required": true
        },
        "onInitialOrder": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes if host is orderable on a initial Order",
          "required": true
        },
        "onUpgradeOrder": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes if host is orderable on a upgrade order",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Plan Code",
          "required": true
        },
        "specifications": {
          "type": "order.catalog.pcc.HostSpecifications",
          "fullType": "order.catalog.pcc.HostSpecifications",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes Private Cloud Host specifications",
          "required": true
        },
        "storagesPack": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of filers add in case of a Pack order",
          "required": true
        }
      }
    },
    "order.catalog.pcc.HostCpuSpecifications": {
      "id": "HostCpuSpecifications",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Host CPU",
      "properties": {
        "cores": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of CPU Cores",
          "required": true
        },
        "frequency": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": false,
          "description": "CPU Frequency",
          "required": true
        },
        "generation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "CPU Generation",
          "required": true
        },
        "model": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "CPU Model",
          "required": true
        },
        "socket": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of CPU",
          "required": true
        },
        "threads": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of CPU Threads",
          "required": true
        }
      }
    },
    "order.catalog.pcc.HostMemorySpecifications": {
      "id": "HostMemorySpecifications",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Host Memory",
      "properties": {
        "ram": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Memory Size",
          "required": true
        }
      }
    },
    "order.catalog.pcc.HostNetworkSpecifications": {
      "id": "HostNetworkSpecifications",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Host Network",
      "properties": {
        "nics": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of network interfaces",
          "required": true
        },
        "speed": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Speed of the network interfaces",
          "required": true
        }
      }
    },
    "order.catalog.pcc.HostSpecifications": {
      "id": "HostSpecifications",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Host Hardware",
      "properties": {
        "cpu": {
          "type": "order.catalog.pcc.HostCpuSpecifications",
          "fullType": "order.catalog.pcc.HostCpuSpecifications",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes the CPU specification of a Host",
          "required": true
        },
        "memory": {
          "type": "order.catalog.pcc.HostMemorySpecifications",
          "fullType": "order.catalog.pcc.HostMemorySpecifications",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes the memory specification of a Host",
          "required": true
        },
        "network": {
          "type": "order.catalog.pcc.HostNetworkSpecifications[]",
          "fullType": "order.catalog.pcc.HostNetworkSpecifications[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes the network specification of a Host",
          "required": true
        }
      }
    },
    "order.catalog.pcc.Hypervisor": {
      "id": "Hypervisor",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Hypervisor",
      "properties": {
        "hosts": {
          "type": "order.catalog.pcc.Host[]",
          "fullType": "order.catalog.pcc.Host[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes Private Cloud Hosts",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the hypervisor",
          "required": true
        },
        "options": {
          "type": "order.catalog.pcc.Option[]",
          "fullType": "order.catalog.pcc.Option[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes Private Cloud Options",
          "required": true
        },
        "orderable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes if an hypervisor is orderable",
          "required": true
        },
        "servicePacks": {
          "type": "order.catalog.pcc.ServicePack[]",
          "fullType": "order.catalog.pcc.ServicePack[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes Private Cloud Service Packs",
          "required": true
        },
        "shortName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Short Name of the hypervisor",
          "required": true
        },
        "storages": {
          "type": "order.catalog.pcc.Storage[]",
          "fullType": "order.catalog.pcc.Storage[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes Private Cloud Storages",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the hypervisor",
          "required": true
        }
      }
    },
    "order.catalog.pcc.Option": {
      "id": "Option",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Option",
      "properties": {
        "maxInitialQuantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes the maximum quantity on the initial order",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the option",
          "required": true
        },
        "onInitialOrder": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes if option is orderable on a initial order",
          "required": true
        },
        "onUpgradeOrder": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes if option is orderable on a upgrade order",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Plan Code",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Category of the option",
          "required": true
        }
      }
    },
    "order.catalog.pcc.ServicePack": {
      "id": "ServicePack",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Service Pack",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the service pack",
          "required": true
        },
        "options": {
          "type": "order.catalog.pcc.ServicePackOption[]",
          "fullType": "order.catalog.pcc.ServicePackOption[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes Option include in the service pack",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Plan Code",
          "required": true
        },
        "upgradableTo": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of available service pack upgrades",
          "required": true
        }
      }
    },
    "order.catalog.pcc.ServicePackOption": {
      "id": "ServicePackOption",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud service pack option",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the option",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Plan Code",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Category of the option",
          "required": true
        }
      }
    },
    "order.catalog.pcc.Storage": {
      "id": "Storage",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Storage",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the filer",
          "required": true
        },
        "onInitialOrder": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes if filer is orderable on a initial Order",
          "required": true
        },
        "onUpgradeOrder": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes if filer is orderable on a upgrade order",
          "required": true
        },
        "planCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Plan Code",
          "required": true
        },
        "specifications": {
          "type": "order.catalog.pcc.StorageSpecifications",
          "fullType": "order.catalog.pcc.StorageSpecifications",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describes Private Cloud Storage specifications",
          "required": true
        }
      }
    },
    "order.catalog.pcc.StorageSpecifications": {
      "id": "StorageSpecifications",
      "namespace": "order.catalog.pcc",
      "description": "Describes a Private Cloud Storage",
      "properties": {
        "size": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Size of the storage",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the storage",
          "required": true
        }
      }
    },
    "order.catalog.privateCloud.Capabilities": {
      "id": "Capabilities",
      "namespace": "order.catalog.privateCloud",
      "description": "Describes capabilities of a Private Cloud type of service",
      "properties": {
        "hds": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Define if HDS is part of this type of service",
          "required": true
        },
        "hipaa": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Define if HIPAA is part of this type of service",
          "required": true
        },
        "nsx": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Define if NSX is part of this type of service",
          "required": true
        },
        "pcidss": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Define if PCI-DSS is part of this type of service",
          "required": true
        },
        "vrops": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Define if VROPS is part of this type of service",
          "required": true
        }
      }
    },
    "order.catalog.privateCloud.CapabilitiesListing": {
      "id": "CapabilitiesListing",
      "namespace": "order.catalog.privateCloud",
      "description": "Describe all capabilities of different types of service",
      "properties": {
        "2016v1": {
          "type": "order.catalog.privateCloud.Capabilities",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe capabilities of 2016v1 type of service",
          "required": true
        },
        "2016v2": {
          "type": "order.catalog.privateCloud.Capabilities",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe capabilities of 2016v2 type of service",
          "required": true
        },
        "2016v3": {
          "type": "order.catalog.privateCloud.Capabilities",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe capabilities of 2016v3 type of service",
          "required": true
        },
        "2016v4": {
          "type": "order.catalog.privateCloud.Capabilities",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe capabilities of 2016v4 type of service",
          "required": true
        },
        "2016v5": {
          "type": "order.catalog.privateCloud.Capabilities",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe capabilities of 2016v5 type of service",
          "required": true
        },
        "2016v6": {
          "type": "order.catalog.privateCloud.Capabilities",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe capabilities of 2016v6 type of service",
          "required": true
        },
        "2016v7": {
          "type": "order.catalog.privateCloud.Capabilities",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe capabilities of 2016v7 type of service",
          "required": true
        },
        "default": {
          "type": "order.catalog.privateCloud.Capabilities",
          "fullType": "order.catalog.privateCloud.Capabilities",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe capabilities of default type of service",
          "required": true
        }
      }
    },
    "order.catalog.privateCloud.Catalog": {
      "id": "Catalog",
      "namespace": "order.catalog.privateCloud",
      "description": "Describe a Private Cloud commercial catalog",
      "properties": {
        "catalogId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Catalog ID",
          "required": true
        },
        "catalogName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Catalog name",
          "required": true
        },
        "defaultHypervisor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Default hypervisor for this catalog",
          "required": true
        },
        "defaultZone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Default datacenter for this catalog",
          "required": true
        },
        "merchantCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "OVH Subsidiary of the Catalog",
          "required": true
        },
        "options": {
          "type": "order.catalog.privateCloud.CapabilitiesListing",
          "fullType": "order.catalog.privateCloud.CapabilitiesListing",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe all capabilities of different types of service",
          "required": true
        },
        "zones": {
          "type": "order.catalog.privateCloud.ZonesListing",
          "fullType": "order.catalog.privateCloud.ZonesListing",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone definitions per datacenters",
          "required": true
        }
      }
    },
    "order.catalog.privateCloud.Zone": {
      "id": "Zone",
      "namespace": "order.catalog.privateCloud",
      "description": "Describe a Private Cloud zone",
      "properties": {
        "cityName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "City where Private Cloud instance will be delivered",
          "required": true
        },
        "country": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Country where Private Cloud instance will be delivered",
          "required": true
        },
        "defaultHypervisor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Default hypervisor for this Private Cloud zone",
          "required": true
        },
        "defaultVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Default version for this Private Cloud zone",
          "required": true
        },
        "internalName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Internal name of the zone",
          "required": true
        },
        "plans": {
          "type": "order.catalog.ProductPlan[]",
          "fullType": "order.catalog.ProductPlan[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Commercial offers on this zone",
          "required": true
        }
      }
    },
    "order.catalog.privateCloud.ZonesListing": {
      "id": "ZonesListing",
      "namespace": "order.catalog.privateCloud",
      "description": "Zone definitions per datacenters",
      "properties": {
        "bhs": {
          "type": "order.catalog.privateCloud.Zone",
          "fullType": "order.catalog.privateCloud.Zone",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone definition for BHS datacenter",
          "required": true
        },
        "eri": {
          "type": "order.catalog.privateCloud.Zone",
          "fullType": "order.catalog.privateCloud.Zone",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone definition for ERI datacenter",
          "required": true
        },
        "lim": {
          "type": "order.catalog.privateCloud.Zone",
          "fullType": "order.catalog.privateCloud.Zone",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone definition for LIM datacenter",
          "required": true
        },
        "rbx": {
          "type": "order.catalog.privateCloud.Zone",
          "fullType": "order.catalog.privateCloud.Zone",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone definition for RBX datacenter",
          "required": true
        },
        "sbg": {
          "type": "order.catalog.privateCloud.Zone",
          "fullType": "order.catalog.privateCloud.Zone",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone definition for SBG datacenter",
          "required": true
        },
        "waw": {
          "type": "order.catalog.privateCloud.Zone",
          "fullType": "order.catalog.privateCloud.Zone",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zone definition for WAW datacenter",
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
    },
    "veeamCloudConnect.Offer": {
      "id": "Offer",
      "namespace": "veeamCloudConnect",
      "description": "All orderable Veeam Cloud Connect offers",
      "enum": [
        "advanced",
        "demo",
        "starter"
      ],
      "enumType": "string"
    },
    "vps.PleskLicenseDomainNumberEnum": {
      "id": "PleskLicenseDomainNumberEnum",
      "namespace": "vps",
      "description": "Domain number the plesk license will be valid for",
      "enum": [
        "10",
        "100",
        "300",
        "hostingsuite"
      ],
      "enumType": "string"
    },
    "vps.additionalDisk.AdditionalDiskSizeEnum": {
      "id": "AdditionalDiskSizeEnum",
      "namespace": "vps.additionalDisk",
      "description": "Size of the additional disk in GB",
      "enum": [
        "100",
        "200",
        "50",
        "500"
      ],
      "enumType": "string"
    },
    "vps.ip.GeolocationEnum": {
      "id": "GeolocationEnum",
      "namespace": "vps.ip",
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
      "enumType": "coreTypes.CountryEnum"
    }
  }
}