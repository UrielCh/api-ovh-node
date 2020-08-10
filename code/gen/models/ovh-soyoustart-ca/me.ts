import {Schema} from '../../src/schema';

export const schema: Schema = {
  "resourcePath": "/me",
  "apis": [
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.FidelityMovement",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.FidelityMovement",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "name": "movementId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ]
        }
      ],
      "path": "/me/fidelityAccount/movements/{movementId}",
      "description": "Details about a fidelity account"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "httpMethod": "GET",
          "description": "List of entries of the fidelity account",
          "parameters": [
            {
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false,
              "dataType": "datetime"
            },
            {
              "fullType": "datetime",
              "name": "date.from",
              "required": false,
              "paramType": "query",
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/me/fidelityAccount/movements",
      "description": "List the billing.FidelityMovement objects"
    },
    {
      "operations": [
        {
          "responseFullType": "billing.FidelityAccount",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.FidelityAccount",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": []
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.FidelityAccount",
              "required": true,
              "paramType": "body",
              "name": null,
              "fullType": "billing.FidelityAccount",
              "description": "New object properties"
            }
          ],
          "description": "Alter this object properties",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT"
        }
      ],
      "description": "Balance of the fidelity account",
      "path": "/me/fidelityAccount"
    },
    {
      "path": "/me/fidelityAccount/creditOrder",
      "description": "creditOrder operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Order",
          "httpMethod": "POST",
          "description": "Generate an order that can be paid in order to credit the fidelity account",
          "parameters": [
            {
              "description": "The amount of points you want to credit your fidelity account of",
              "dataType": "long",
              "required": true,
              "paramType": "body",
              "name": "amount",
              "fullType": "long"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "path": "/me/paymentMean/paypal/{id}",
      "description": "Paypal account info",
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "billing.Paypal",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": "Id of the object"
            }
          ],
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "billing.Paypal"
        },
        {
          "httpMethod": "PUT",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Alter this object properties",
          "parameters": [
            {
              "name": null,
              "fullType": "billing.Paypal",
              "dataType": "billing.Paypal",
              "required": true,
              "paramType": "body",
              "description": "New object properties"
            },
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": "Id of the object"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "fullType": "long",
              "name": "id",
              "description": "Id of the object"
            }
          ],
          "description": "Disable payment through this PayPal account",
          "httpMethod": "DELETE",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "description": "challenge operations",
      "path": "/me/paymentMean/paypal/{id}/challenge",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "description": "Challenge your bank account",
          "parameters": [
            {
              "description": "Payload to answer the challenge",
              "dataType": "string",
              "paramType": "body",
              "required": true,
              "name": "challenge",
              "fullType": "string"
            },
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "fullType": "long",
              "description": "Id of the object"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "description": "chooseAsDefaultPaymentMean operations",
      "path": "/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean",
      "operations": [
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Choose this Paypal agreement as your default payment mean. Will cancel the previous choice.",
          "parameters": [
            {
              "description": "Id of the object",
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "description": "List the billing.Paypal objects",
      "path": "/me/paymentMean/paypal",
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "description": "List of Paypal accounts usable for payments on this account",
          "parameters": [],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "long[]"
        },
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.PaymentMeanValidation",
          "httpMethod": "POST",
          "description": "Enable payment through a new PayPal account",
          "parameters": [
            {
              "description": "Callback URL where the customer will be redirected to after validation",
              "name": "returnUrl",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false
            },
            {
              "description": "Set as default payment mean once validated",
              "fullType": "boolean",
              "name": "setDefault",
              "required": false,
              "paramType": "body",
              "dataType": "boolean"
            },
            {
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false,
              "dataType": "string",
              "description": "Custom description of this account"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "billing.PaymentMeanValidation"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Challenge your bank account",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Payload to answer the challenge",
              "fullType": "string",
              "name": "challenge",
              "paramType": "body",
              "required": true,
              "dataType": "string"
            },
            {
              "description": "Id of the object",
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "path": "/me/paymentMean/creditCard/{id}/challenge",
      "description": "challenge operations"
    },
    {
      "path": "/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean",
      "description": "chooseAsDefaultPaymentMean operations",
      "operations": [
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "fullType": "long",
              "description": "Id of the object"
            }
          ],
          "description": "Choose this credit card as your default payment mean. Will cancel the previous choice.",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST"
        }
      ]
    },
    {
      "description": "Credit card informations",
      "path": "/me/paymentMean/creditCard/{id}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.CreditCard",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": "Id of the object",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "fullType": "long"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.CreditCard"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "billing.CreditCard",
              "name": null,
              "paramType": "body",
              "required": true,
              "dataType": "billing.CreditCard",
              "description": "New object properties"
            },
            {
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "description": "Alter this object properties"
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id",
              "description": "Id of the object"
            }
          ],
          "noAuthentication": false,
          "description": "Disable payment through this credit card",
          "httpMethod": "DELETE",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "path": "/me/paymentMean/creditCard",
      "description": "List the billing.CreditCard objects",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "description": "List of credit cards"
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "required": false,
              "paramType": "body",
              "name": "setDefault",
              "fullType": "boolean",
              "description": "Set as default payment mean once validated"
            },
            {
              "description": "Custom description of this account",
              "name": "description",
              "fullType": "string",
              "dataType": "string",
              "required": false,
              "paramType": "body"
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "returnUrl",
              "description": "Callback URL where the customer will be redirected to after validation"
            }
          ],
          "description": "Add a new credit card",
          "responseType": "billing.PaymentMeanValidation",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "billing.PaymentMeanValidation"
        }
      ]
    },
    {
      "description": "List the billing.DeferredPaymentAccount objects",
      "path": "/me/paymentMean/deferredPaymentAccount",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "description": "List of authorized deferred payment account for this customer"
        }
      ]
    },
    {
      "path": "/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean",
      "description": "chooseAsDefaultPaymentMean operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "parameters": [
            {
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "fullType": "long",
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Allow you to use deferred payment. Will cancel the previous choice.",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST"
        }
      ]
    },
    {
      "path": "/me/paymentMean/deferredPaymentAccount/{id}",
      "description": "Deferred payment account info",
      "operations": [
        {
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.DeferredPaymentAccount",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "billing.DeferredPaymentAccount"
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "name": null,
              "fullType": "billing.DeferredPaymentAccount",
              "dataType": "billing.DeferredPaymentAccount",
              "paramType": "body",
              "required": true,
              "description": "New object properties"
            },
            {
              "description": null,
              "fullType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "dataType": "long"
            }
          ],
          "description": "Alter this object properties",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.BankAccountStateEnum",
              "paramType": "query",
              "required": false,
              "name": "state",
              "fullType": "billing.BankAccountStateEnum",
              "description": "Filter the value of state property (=)"
            }
          ],
          "description": "List of bank accounts",
          "resellerOnly": false,
          "responseFullType": "long[]"
        },
        {
          "resellerOnly": false,
          "responseFullType": "billing.PaymentMeanValidation",
          "httpMethod": "POST",
          "responseType": "billing.PaymentMeanValidation",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Custom description of this account",
              "fullType": "string",
              "name": "description",
              "required": false,
              "paramType": "body",
              "dataType": "string"
            },
            {
              "description": "Account owner's name",
              "fullType": "string",
              "name": "ownerName",
              "paramType": "body",
              "required": true,
              "dataType": "string"
            },
            {
              "name": "bic",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "description": "Account's BIC"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "ownerAddress",
              "description": "Account owner's address"
            },
            {
              "description": "Set as default payment mean once validated",
              "paramType": "body",
              "required": false,
              "dataType": "boolean",
              "fullType": "boolean",
              "name": "setDefault"
            },
            {
              "description": "Account's IBAN",
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "iban",
              "fullType": "string"
            }
          ],
          "description": "Enable payment through a new account"
        }
      ],
      "path": "/me/paymentMean/bankAccount",
      "description": "List the billing.BankAccount objects"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "fullType": "long",
              "description": "Id of the object"
            }
          ],
          "description": "Choose this bank account as your default payment mean. Will cancel the previous choice."
        }
      ],
      "path": "/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean",
      "description": "chooseAsDefaultPaymentMean operations"
    },
    {
      "description": "challenge operations",
      "path": "/me/paymentMean/bankAccount/{id}/challenge",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Payload to answer the challenge",
              "fullType": "string",
              "name": "challenge",
              "required": true,
              "paramType": "body",
              "dataType": "string"
            },
            {
              "description": "Id of the object",
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Challenge your bank account"
        }
      ]
    },
    {
      "path": "/me/paymentMean/bankAccount/{id}",
      "description": "SEPA bank account info",
      "operations": [
        {
          "responseType": "billing.BankAccount",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id",
              "description": "Id of the object"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "responseFullType": "billing.BankAccount",
          "resellerOnly": false
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "description": "Alter this object properties",
          "parameters": [
            {
              "description": "New object properties",
              "required": true,
              "paramType": "body",
              "dataType": "billing.BankAccount",
              "fullType": "billing.BankAccount",
              "name": null
            },
            {
              "description": "Id of the object",
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "PUT"
        },
        {
          "description": "Disable payment through this account",
          "parameters": [
            {
              "description": "Id of the object",
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "DELETE",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "path": "/me/installationTemplate",
      "description": "List the dedicated.installationTemplate.Templates objects",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "description": "Your customized operating system installation templates",
          "parameters": [],
          "noAuthentication": false
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "name": "name",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": true,
              "description": "Your template name"
            },
            {
              "paramType": "body",
              "required": true,
              "dataType": "dedicated.TemplateOsLanguageEnum",
              "fullType": "dedicated.TemplateOsLanguageEnum",
              "name": "defaultLanguage",
              "description": null
            },
            {
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "baseTemplateName",
              "description": "OVH template name yours will be based on, choose one among the list given by compatibleTemplates function"
            }
          ],
          "noAuthentication": false,
          "description": "Create a template"
        }
      ]
    },
    {
      "path": "/me/installationTemplate/{templateName}",
      "description": "Available installation templates",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.installationTemplate.Templates",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "templateName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "This template name"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "dedicated.installationTemplate.Templates",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "dedicated.installationTemplate.Templates",
              "name": null,
              "paramType": "body",
              "required": true,
              "dataType": "dedicated.installationTemplate.Templates",
              "description": "New object properties"
            },
            {
              "description": "This template name",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "templateName"
            }
          ],
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "DELETE",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "remove this template",
          "parameters": [
            {
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "description": "Check the integrity of this template",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "templateName",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "This template name"
            }
          ],
          "responseFullType": "void",
          "resellerOnly": false
        }
      ],
      "description": "checkIntegrity operations",
      "path": "/me/installationTemplate/{templateName}/checkIntegrity"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "templateName",
              "description": "This template name"
            },
            {
              "description": "name of this partitioning scheme",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "schemeName",
              "fullType": "string"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "dedicated.installationTemplate.templatePartitioningSchemes",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "dedicated.installationTemplate.templatePartitioningSchemes"
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "fullType": "dedicated.installationTemplate.templatePartitioningSchemes",
              "name": null,
              "paramType": "body",
              "required": true,
              "dataType": "dedicated.installationTemplate.templatePartitioningSchemes",
              "description": "New object properties"
            },
            {
              "description": "This template name",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "templateName"
            },
            {
              "description": "name of this partitioning scheme",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Alter this object properties",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "remove this scheme of partition",
          "parameters": [
            {
              "description": "This template name",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "templateName"
            },
            {
              "description": "name of this partitioning scheme",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "schemeName",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "DELETE"
        }
      ],
      "description": "Partitioning schemes available on this template",
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}"
    },
    {
      "description": "Hardware RAID defined in this partitioning scheme",
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}",
      "operations": [
        {
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "This template name",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "templateName"
            },
            {
              "description": "name of this partitioning scheme",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "schemeName",
              "fullType": "string"
            },
            {
              "description": "Hardware RAID name",
              "fullType": "string",
              "name": "name",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "dedicated.installationTemplate.hardwareRaid",
          "resellerOnly": false,
          "responseFullType": "dedicated.installationTemplate.hardwareRaid"
        },
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "parameters": [
            {
              "name": null,
              "fullType": "dedicated.installationTemplate.hardwareRaid",
              "dataType": "dedicated.installationTemplate.hardwareRaid",
              "required": true,
              "paramType": "body",
              "description": "New object properties"
            },
            {
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            },
            {
              "fullType": "string",
              "name": "schemeName",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "description": "name of this partitioning scheme"
            },
            {
              "description": "Hardware RAID name",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "name",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "This template name",
              "name": "templateName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "schemeName",
              "description": "name of this partitioning scheme"
            },
            {
              "description": "Hardware RAID name",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "name",
              "fullType": "string"
            }
          ],
          "description": "Remove this RAID",
          "httpMethod": "DELETE",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "This template name"
            },
            {
              "description": "name of this partitioning scheme",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "schemeName",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Hardware RAIDs defined in this partitioning scheme",
          "resellerOnly": false,
          "responseFullType": "string[]"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "body",
              "name": "step",
              "fullType": "long",
              "description": "Specifies the creation order of the hardware RAID"
            },
            {
              "name": "disks",
              "fullType": "string[]",
              "dataType": "string[]",
              "paramType": "body",
              "required": true,
              "description": "Disk list. Syntax is cX:dY for disks and [cX:dY, cX:dY] for groups. With X and Y resp. the controler id and the disk id."
            },
            {
              "name": "name",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": true,
              "description": "Hardware RAID name"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "dedicated.TemplateOsHardwareRaidEnum",
              "fullType": "dedicated.TemplateOsHardwareRaidEnum",
              "name": "mode",
              "description": "RAID mode"
            },
            {
              "description": "This template name",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "templateName",
              "fullType": "string"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "schemeName",
              "description": "name of this partitioning scheme"
            }
          ],
          "description": "Add an hardware RAID in this partitioning scheme"
        }
      ],
      "description": "List the dedicated.installationTemplate.hardwareRaid objects",
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid"
    },
    {
      "description": "List the dedicated.installationTemplate.templatePartitions objects",
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition",
      "operations": [
        {
          "description": "Partitions defined in this partitioning scheme",
          "parameters": [
            {
              "name": "templateName",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": "This template name"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "schemeName",
              "description": "name of this partitioning scheme"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "string[]"
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "parameters": [
            {
              "description": "partition mount point",
              "name": "mountpoint",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "body"
            },
            {
              "description": null,
              "name": "raid",
              "fullType": "long",
              "dataType": "long",
              "required": false,
              "paramType": "body"
            },
            {
              "description": null,
              "name": "step",
              "fullType": "long",
              "dataType": "long",
              "required": true,
              "paramType": "body"
            },
            {
              "description": null,
              "name": "type",
              "fullType": "dedicated.TemplatePartitionTypeEnum",
              "dataType": "dedicated.TemplatePartitionTypeEnum",
              "required": true,
              "paramType": "body"
            },
            {
              "description": "Partition filesytem",
              "name": "filesystem",
              "fullType": "dedicated.TemplateOsFileSystemEnum",
              "dataType": "dedicated.TemplateOsFileSystemEnum",
              "required": true,
              "paramType": "body"
            },
            {
              "description": "The volume name needed for proxmox distribution",
              "name": "volumeName",
              "fullType": "string",
              "dataType": "string",
              "required": false,
              "paramType": "body"
            },
            {
              "description": "size of partition in Mb, 0 => rest of the space",
              "name": "size",
              "fullType": "long",
              "dataType": "long",
              "required": true,
              "paramType": "body"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "templateName",
              "fullType": "string",
              "description": "This template name"
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "schemeName",
              "fullType": "string",
              "description": "name of this partitioning scheme"
            }
          ],
          "noAuthentication": false,
          "description": "Add a partition in this partitioning scheme",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "dedicated.installationTemplate.templatePartitions",
          "responseType": "dedicated.installationTemplate.templatePartitions",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "templateName",
              "description": "This template name"
            },
            {
              "description": "name of this partitioning scheme",
              "name": "schemeName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "mountpoint",
              "fullType": "string",
              "description": "partition mount point"
            }
          ],
          "description": "Get this object properties"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "PUT",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "name": null,
              "fullType": "dedicated.installationTemplate.templatePartitions",
              "dataType": "dedicated.installationTemplate.templatePartitions",
              "paramType": "body",
              "required": true,
              "description": "New object properties"
            },
            {
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "This template name"
            },
            {
              "description": "name of this partitioning scheme",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "schemeName"
            },
            {
              "description": "partition mount point",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "mountpoint",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Alter this object properties"
        },
        {
          "description": "remove this partition",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "This template name",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "templateName",
              "fullType": "string"
            },
            {
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "name of this partitioning scheme"
            },
            {
              "description": "partition mount point",
              "name": "mountpoint",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "DELETE",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "responseFullType": "void",
          "resellerOnly": false
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}",
      "description": " Partitions defined in this partitioning scheme"
    },
    {
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "templateName",
              "description": "This template name"
            }
          ],
          "description": "Partitioning schemes available on this template"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "description": "Add a scheme of partition",
          "parameters": [
            {
              "fullType": "string",
              "name": "name",
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "description": "name of this partitioning scheme"
            },
            {
              "name": "priority",
              "fullType": "long",
              "dataType": "long",
              "required": true,
              "paramType": "body",
              "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "templateName",
              "description": "This template name"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/me/installationTemplate/{templateName}/partitionScheme",
      "description": "List the dedicated.installationTemplate.templatePartitioningSchemes objects"
    },
    {
      "description": "List the billing.Deposit objects",
      "path": "/me/deposit",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "required": false,
              "paramType": "query",
              "name": "orderId",
              "fullType": "long",
              "description": "Filter the value of orderId property (=)"
            },
            {
              "required": false,
              "paramType": "query",
              "dataType": "datetime",
              "fullType": "datetime",
              "name": "date.from",
              "description": "Filter the value of date property (>=)"
            },
            {
              "description": "Filter the value of date property (<=)",
              "required": false,
              "paramType": "query",
              "dataType": "datetime",
              "fullType": "datetime",
              "name": "date.to"
            }
          ],
          "description": "List of all the deposits made to your prepaid account or debt account",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET"
        }
      ]
    },
    {
      "path": "/me/deposit/{depositId}/payment",
      "description": "Details about a payment",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "depositId",
              "description": null
            }
          ],
          "description": "Get this object properties",
          "responseType": "billing.Payment",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "responseFullType": "billing.Payment",
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "Information about a Deposit entry",
      "path": "/me/deposit/{depositId}/details/{depositDetailId}",
      "operations": [
        {
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            },
            {
              "description": null,
              "name": "depositDetailId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.DepositDetail",
          "resellerOnly": false,
          "responseFullType": "billing.DepositDetail"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Give access to all entries of this deposit",
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ],
      "path": "/me/deposit/{depositId}/details",
      "description": "List the billing.DepositDetail objects"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "description": "Get invoices paid by this deposit",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "name": "depositId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills",
      "description": "List the billing.Bill objects"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.Payment",
          "responseType": "billing.Payment",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "name": "depositId",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "description": null,
              "name": "billId",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "description": "Get this object properties"
        }
      ],
      "description": "Details about a payment",
      "path": "/me/deposit/{depositId}/paidBills/{billId}/payment"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}",
      "description": "Details about a Bill",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.Bill",
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Bill",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "name": "depositId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": null
            }
          ]
        }
      ]
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            },
            {
              "description": null,
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "billId",
              "fullType": "string"
            },
            {
              "description": null,
              "fullType": "string",
              "name": "billDetailId",
              "required": true,
              "paramType": "path",
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "billing.BillDetail",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "billing.BillDetail"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}",
      "description": "Information about a Bill entry"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "description": "Give access to all entries of the bill",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "name": "depositId",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            },
            {
              "description": null,
              "name": "billId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/details",
      "description": "List the billing.BillDetail objects"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "debt.Debt",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "description": null,
              "name": "depositId",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            },
            {
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "billId",
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "debt.Debt"
        }
      ],
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt",
      "description": "State of a debt"
    },
    {
      "description": "pay operations",
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/pay",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "description": "Create an order in order to pay this order's debt",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "depositId"
            },
            {
              "description": null,
              "name": "billId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Order"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "All operations related to these debts",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Filter the value of depositOrderId property (=)",
              "paramType": "query",
              "required": false,
              "dataType": "long",
              "fullType": "long",
              "name": "depositOrderId"
            },
            {
              "name": "depositId",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": null
            },
            {
              "description": null,
              "name": "billId",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "long[]"
        }
      ],
      "description": "List the debt.Operation objects",
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation"
    },
    {
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}",
      "description": "Operation that happend on a debt",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "debt.Operation",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "depositId",
              "fullType": "string"
            },
            {
              "name": "billId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": null
            },
            {
              "name": "operationId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": null
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "debt.Operation",
          "httpMethod": "GET"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "debt.entry.AssociatedObject",
          "description": "Return main data about the object related to this debt operation",
          "parameters": [
            {
              "name": "depositId",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "description": null
            },
            {
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "name": "billId",
              "fullType": "string",
              "description": null
            },
            {
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "required": true,
              "paramType": "path",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "debt.entry.AssociatedObject",
          "httpMethod": "GET"
        }
      ],
      "description": "associatedObject operations",
      "path": "/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Deposit",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "name": "depositId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "resellerOnly": false,
          "responseFullType": "billing.Deposit"
        }
      ],
      "description": "Details about a deposit",
      "path": "/me/deposit/{depositId}"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "geolocation.ContinentCountryLocation",
          "description": "Fetch visitor country & region",
          "parameters": [],
          "noAuthentication": true,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "geolocation.ContinentCountryLocation",
          "httpMethod": "POST"
        }
      ],
      "description": "Route for getting visitor's country and continent",
      "path": "/me/geolocation"
    },
    {
      "description": "List the nichandle.accessRestriction.TOTPAccount objects",
      "path": "/me/accessRestriction/totp",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "description": "List of TOTP accounts",
          "noAuthentication": false,
          "parameters": []
        },
        {
          "httpMethod": "POST",
          "responseType": "nichandle.accessRestriction.TOTPSecret",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [],
          "noAuthentication": false,
          "description": "Add a TOTP access restriction",
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.TOTPSecret"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.TOTPAccount",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.accessRestriction.TOTPAccount"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Alter this object properties",
          "parameters": [
            {
              "description": "New object properties",
              "dataType": "nichandle.accessRestriction.TOTPAccount",
              "paramType": "body",
              "required": true,
              "name": null,
              "fullType": "nichandle.accessRestriction.TOTPAccount"
            },
            {
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "PUT",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "DELETE",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Delete this Two-Factor",
          "parameters": [
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/me/accessRestriction/totp/{id}",
      "description": "TOTP Two-Factor Authentication"
    },
    {
      "path": "/me/accessRestriction/totp/{id}/disable",
      "description": "disable operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "dataType": "password",
              "fullType": "password",
              "name": "code",
              "description": "OTP code given by the application"
            },
            {
              "description": "The Id of the restriction",
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "description": "Disable this TOTP account"
        }
      ]
    },
    {
      "path": "/me/accessRestriction/totp/{id}/validate",
      "description": "validate operations",
      "operations": [
        {
          "parameters": [
            {
              "description": "OTP code given by the application",
              "name": "code",
              "fullType": "password",
              "dataType": "password",
              "required": true,
              "paramType": "body"
            },
            {
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "fullType": "long",
              "description": "The Id of the restriction"
            }
          ],
          "noAuthentication": false,
          "description": "Validate your TOTP account",
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "dataType": "password",
              "fullType": "password",
              "name": "code",
              "description": "OTP code given by the application"
            },
            {
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "description": "Enable this TOTP account",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST"
        }
      ],
      "path": "/me/accessRestriction/totp/{id}/enable",
      "description": "enable operations"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Disable this SMS account",
          "parameters": [
            {
              "description": "SMS code send by a cellphone",
              "dataType": "password",
              "paramType": "body",
              "required": true,
              "name": "code",
              "fullType": "password"
            },
            {
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "fullType": "long",
              "description": "The Id of the restriction"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/me/accessRestriction/sms/{id}/disable",
      "description": "disable operations"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Enable this SMS account",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "SMS code send by a cellphone",
              "required": true,
              "paramType": "body",
              "dataType": "password",
              "fullType": "password",
              "name": "code"
            },
            {
              "description": "The Id of the restriction",
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void"
        }
      ],
      "description": "enable operations",
      "path": "/me/accessRestriction/sms/{id}/enable"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "paramType": "body",
              "required": true,
              "dataType": "password",
              "fullType": "password",
              "name": "code",
              "description": "SMS code send to a cellphone"
            },
            {
              "description": "The Id of the restriction",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "description": "Validate your SMS account"
        }
      ],
      "description": "validate operations",
      "path": "/me/accessRestriction/sms/{id}/validate"
    },
    {
      "path": "/me/accessRestriction/sms/{id}/sendCode",
      "description": "sendCode operations",
      "operations": [
        {
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "fullType": "long",
              "description": "The Id of the restriction"
            }
          ],
          "noAuthentication": false,
          "description": "Send a SMS to this account",
          "httpMethod": "POST",
          "responseType": "nichandle.accessRestriction.SmsCode",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseFullType": "nichandle.accessRestriction.SmsCode",
          "resellerOnly": false
        }
      ]
    },
    {
      "path": "/me/accessRestriction/sms/{id}",
      "description": "Sms Two-Factor Authentication",
      "operations": [
        {
          "responseFullType": "nichandle.accessRestriction.SmsAccount",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.accessRestriction.SmsAccount",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": "The Id of the restriction",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false
        },
        {
          "httpMethod": "PUT",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "description": "New object properties",
              "fullType": "nichandle.accessRestriction.SmsAccount",
              "name": null,
              "required": true,
              "paramType": "body",
              "dataType": "nichandle.accessRestriction.SmsAccount"
            },
            {
              "description": "The Id of the restriction",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "fullType": "long"
            }
          ],
          "noAuthentication": false,
          "description": "Alter this object properties",
          "responseFullType": "void",
          "resellerOnly": false
        },
        {
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "fullType": "long",
              "description": "The Id of the restriction"
            }
          ],
          "description": "Delete this Two-Factor",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "description": "List of Sms accounts",
          "noAuthentication": false,
          "parameters": [],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "httpMethod": "GET"
        },
        {
          "responseFullType": "nichandle.accessRestriction.SmsSecret",
          "resellerOnly": false,
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.accessRestriction.SmsSecret",
          "description": "Add a SMS access restriction",
          "parameters": [
            {
              "description": "Cell phone number to register",
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "phone"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/me/accessRestriction/sms",
      "description": "List the nichandle.accessRestriction.SmsAccount objects"
    },
    {
      "path": "/me/accessRestriction/ipDefaultRule",
      "description": "IP Restriction default rule",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.IpRestrictionDefaultRule",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "nichandle.IpRestrictionDefaultRule"
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "name": null,
              "fullType": "nichandle.IpRestrictionDefaultRule",
              "dataType": "nichandle.IpRestrictionDefaultRule",
              "required": true,
              "paramType": "body"
            }
          ],
          "description": "Alter this object properties",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "description": "enable operations",
      "path": "/me/accessRestriction/backupCode/enable",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Enable this SOTP account",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "OTP code given by the application",
              "name": "code",
              "fullType": "password",
              "dataType": "password",
              "paramType": "body",
              "required": true
            }
          ],
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Disable this SOTP account",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "OTP code given by the application",
              "dataType": "password",
              "paramType": "body",
              "required": true,
              "name": "code",
              "fullType": "password"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "path": "/me/accessRestriction/backupCode/disable",
      "description": "disable operations"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.SOTPValidate",
          "description": "Validate your SOTP account",
          "parameters": [
            {
              "description": "OTP code given by the application",
              "required": true,
              "paramType": "body",
              "dataType": "password",
              "fullType": "password",
              "name": "code"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.accessRestriction.SOTPValidate"
        }
      ],
      "path": "/me/accessRestriction/backupCode/validate",
      "description": "validate operations"
    },
    {
      "path": "/me/accessRestriction/backupCode",
      "description": "SOTP Two-Factor Authentication",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.SOTPAccount",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.accessRestriction.SOTPAccount",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": []
        },
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.SOTPSecret",
          "parameters": [],
          "noAuthentication": false,
          "description": "Add a SOTP access restriction",
          "httpMethod": "POST",
          "responseType": "nichandle.accessRestriction.SOTPSecret",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "parameters": [],
          "noAuthentication": false,
          "description": "Delete this Two-Factor",
          "httpMethod": "DELETE",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "description": "Login restrictions on a development version of the Manager",
      "path": "/me/accessRestriction/developerMode",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.DeveloperModeRestriction",
          "parameters": [],
          "noAuthentication": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "nichandle.DeveloperModeRestriction",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        },
        {
          "parameters": [
            {
              "name": null,
              "fullType": "nichandle.DeveloperModeRestriction",
              "dataType": "nichandle.DeveloperModeRestriction",
              "paramType": "body",
              "required": true,
              "description": "New object properties"
            }
          ],
          "noAuthentication": false,
          "description": "Alter this object properties",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.IpRestriction",
          "resellerOnly": false,
          "responseFullType": "nichandle.IpRestriction"
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "fullType": "nichandle.IpRestriction",
              "name": null,
              "required": true,
              "paramType": "body",
              "dataType": "nichandle.IpRestriction"
            },
            {
              "description": "The Id of the restriction",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "description": "Alter this object properties",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT",
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "httpMethod": "DELETE",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Delete this restriction rule",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "description": "List of all IP Restrictions",
      "path": "/me/accessRestriction/ip/{id}"
    },
    {
      "description": "List the nichandle.IpRestriction objects",
      "path": "/me/accessRestriction/ip",
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [],
          "description": "List of IP restrictions",
          "resellerOnly": false,
          "responseFullType": "long[]"
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "boolean",
              "name": "warning",
              "paramType": "body",
              "required": true,
              "dataType": "boolean",
              "description": "Send an email if someone try to access with this IP address"
            },
            {
              "description": "An IP range where we will apply the rule",
              "required": true,
              "paramType": "body",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "name": "ip"
            },
            {
              "description": "Accept or deny IP access",
              "required": true,
              "paramType": "body",
              "dataType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
              "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
              "name": "rule"
            }
          ],
          "description": "Add an IP access restriction"
        }
      ]
    },
    {
      "description": "U2F Two-Factor Authentication",
      "path": "/me/accessRestriction/u2f/{id}",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "dataType": "long"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "nichandle.accessRestriction.U2FAccount",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.U2FAccount"
        },
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "name": null,
              "fullType": "nichandle.accessRestriction.U2FAccount",
              "dataType": "nichandle.accessRestriction.U2FAccount",
              "required": true,
              "paramType": "body",
              "description": "New object properties"
            },
            {
              "description": "The Id of the restriction",
              "fullType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "dataType": "long"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "fullType": "long",
              "description": "The Id of the restriction"
            }
          ],
          "description": "Delete this Two-Factor"
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "POST",
          "responseType": "nichandle.accessRestriction.U2FSignChallenge",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": "The Id of the restriction"
            }
          ],
          "description": "Get an U2F Challenge",
          "responseFullType": "nichandle.accessRestriction.U2FSignChallenge",
          "resellerOnly": false
        }
      ],
      "description": "challenge operations",
      "path": "/me/accessRestriction/u2f/{id}/challenge"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "paramType": "body",
              "required": true,
              "name": "signatureData",
              "fullType": "password",
              "description": null
            },
            {
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "fullType": "string",
              "name": "clientData",
              "description": null
            },
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "description": "The Id of the restriction"
            }
          ],
          "description": "Disable this U2F account",
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "description": "disable operations",
      "path": "/me/accessRestriction/u2f/{id}/disable"
    },
    {
      "description": "validate operations",
      "path": "/me/accessRestriction/u2f/{id}/validate",
      "operations": [
        {
          "parameters": [
            {
              "fullType": "password",
              "name": "registrationData",
              "paramType": "body",
              "required": true,
              "dataType": "password",
              "description": null
            },
            {
              "description": null,
              "name": "clientData",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": true
            },
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": "The Id of the restriction"
            }
          ],
          "noAuthentication": false,
          "description": "Validate your U2F account",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Enable this U2F account",
          "parameters": [
            {
              "description": null,
              "dataType": "password",
              "paramType": "body",
              "required": true,
              "name": "signatureData",
              "fullType": "password"
            },
            {
              "description": null,
              "name": "clientData",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "body"
            },
            {
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "name": "id",
              "fullType": "long",
              "description": "The Id of the restriction"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "description": "enable operations",
      "path": "/me/accessRestriction/u2f/{id}/enable"
    },
    {
      "operations": [
        {
          "responseFullType": "long[]",
          "resellerOnly": false,
          "parameters": [],
          "noAuthentication": false,
          "description": "List of U2F accounts",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET"
        },
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.accessRestriction.U2FRegisterChallenge",
          "description": "Add a U2F access restriction",
          "noAuthentication": false,
          "parameters": [],
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.accessRestriction.U2FRegisterChallenge"
        }
      ],
      "description": "List the nichandle.accessRestriction.U2FAccount objects",
      "path": "/me/accessRestriction/u2f"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.Nichandle",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.Nichandle",
          "httpMethod": "GET"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Alter this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "name": null,
              "fullType": "nichandle.Nichandle",
              "dataType": "nichandle.Nichandle",
              "required": true,
              "paramType": "body",
              "description": "New object properties"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "PUT"
        }
      ],
      "path": "/me",
      "description": "Details about your OVH identifier"
    },
    {
      "description": "refuse operations",
      "path": "/me/task/contactChange/{id}/refuse",
      "operations": [
        {
          "parameters": [
            {
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "description": "The token you received by email for this request"
            },
            {
              "description": null,
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "description": "Refuse this change request",
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "dataType": "long"
            }
          ],
          "description": "This call will send you a new email, containing a new token"
        }
      ],
      "path": "/me/task/contactChange/{id}/resendEmail",
      "description": "resendEmail operations"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "name": "token",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": true,
              "description": "The token you received by email for this request"
            },
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Accept this change request"
        }
      ],
      "path": "/me/task/contactChange/{id}/accept",
      "description": "accept operations"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "nichandle.contactChange.Task",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "nichandle.contactChange.Task"
        }
      ],
      "description": "Task running a contact change on a service",
      "path": "/me/task/contactChange/{id}"
    },
    {
      "operations": [
        {
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "fullType": "nichandle.changeContact.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false,
              "dataType": "nichandle.changeContact.TaskStateEnum",
              "description": "Filter the value of state property (like)"
            },
            {
              "description": "Filter the value of toAccount property (like)",
              "dataType": "string",
              "required": false,
              "paramType": "query",
              "name": "toAccount",
              "fullType": "coreTypes.AccountId:string"
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "query",
              "name": "askingAccount",
              "fullType": "coreTypes.AccountId:string",
              "description": "Filter the value of askingAccount property (like)"
            }
          ],
          "noAuthentication": false,
          "description": "List of service contact change tasks you are involved in",
          "responseFullType": "long[]",
          "resellerOnly": false
        }
      ],
      "description": "List the nichandle.contactChange.Task objects",
      "path": "/me/task/contactChange"
    },
    {
      "path": "/me/task/emailChange/{id}/refuse",
      "description": "refuse operations",
      "operations": [
        {
          "description": "Refuse this change request",
          "parameters": [
            {
              "fullType": "string",
              "name": "token",
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "description": "The token you received by email for this request"
            },
            {
              "description": null,
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "path": "/me/task/emailChange/{id}",
      "description": "Task running an email change on an account",
      "operations": [
        {
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "fullType": "long"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.emailChange.Task",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "nichandle.emailChange.Task"
        }
      ]
    },
    {
      "description": "accept operations",
      "path": "/me/task/emailChange/{id}/accept",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Accept this change request",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "token",
              "fullType": "string",
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "description": "The token you received by email for this request"
            },
            {
              "description": null,
              "fullType": "long",
              "name": "id",
              "required": true,
              "paramType": "path",
              "dataType": "long"
            }
          ]
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nichandle.changeEmail.TaskStateEnum",
              "required": false,
              "paramType": "query",
              "name": "state",
              "fullType": "nichandle.changeEmail.TaskStateEnum",
              "description": "Filter the value of state property (like)"
            }
          ],
          "description": "List of email change tasks you are involved in",
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "long[]"
        }
      ],
      "description": "List the nichandle.emailChange.Task objects",
      "path": "/me/task/emailChange"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "dataType": "string",
              "paramType": "query",
              "required": false,
              "name": "domain",
              "fullType": "string",
              "description": "Filter the value of domain property (like)"
            },
            {
              "paramType": "query",
              "required": false,
              "dataType": "domain.OperationStatusEnum",
              "fullType": "domain.OperationStatusEnum",
              "name": "status",
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "fullType": "domain.NicOperationFunctionEnum",
              "dataType": "domain.NicOperationFunctionEnum",
              "required": false,
              "paramType": "query",
              "description": "Filter the value of function property (like)"
            }
          ],
          "noAuthentication": false,
          "description": "List of domain task"
        }
      ],
      "description": "List the nichandle.DomainTask objects",
      "path": "/me/task/domain"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Relaunch the task",
          "parameters": [
            {
              "description": "Id of the task",
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "relaunch operations",
      "path": "/me/task/domain/{id}/relaunch"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.DomainTaskProgressBar",
          "httpMethod": "GET",
          "responseType": "nichandle.DomainTaskProgressBar",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "parameters": [
            {
              "description": "Id of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "path": "/me/task/domain/{id}/progressbar",
      "description": "Domain operation progress"
    },
    {
      "description": "Domain operation argument",
      "path": "/me/task/domain/{id}/argument/{key}",
      "operations": [
        {
          "parameters": [
            {
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": "Id of the task"
            },
            {
              "description": "Key of the argument",
              "name": "key",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "nichandle.DomainTaskArgument",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "nichandle.DomainTaskArgument"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "name": null,
              "fullType": "nichandle.DomainTaskArgument",
              "dataType": "nichandle.DomainTaskArgument",
              "paramType": "body",
              "required": true,
              "description": "New object properties"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id",
              "description": "Id of the task"
            },
            {
              "description": "Key of the argument",
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "key",
              "fullType": "string"
            }
          ],
          "description": "Alter this object properties"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "List of arguments",
          "parameters": [
            {
              "description": "Id of the task",
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "description": "List the nichandle.DomainTaskArgument objects",
      "path": "/me/task/domain/{id}/argument"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": "Id of the task"
            }
          ],
          "description": "Cancel the task",
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ],
      "path": "/me/task/domain/{id}/cancel",
      "description": "cancel operations"
    },
    {
      "path": "/me/task/domain/{id}",
      "description": "Domain tasks",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.DomainTask",
          "httpMethod": "GET",
          "responseType": "nichandle.DomainTask",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": "Id of the task"
            }
          ],
          "description": "Get this object properties"
        }
      ]
    },
    {
      "description": "accelerate operations",
      "path": "/me/task/domain/{id}/accelerate",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Accelerate the task",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Id of the task",
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.SubAccount",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": "Id of the object",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "fullType": "long"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "nichandle.SubAccount"
        },
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "parameters": [
            {
              "description": "New object properties",
              "required": true,
              "paramType": "body",
              "dataType": "nichandle.SubAccount",
              "fullType": "nichandle.SubAccount",
              "name": null
            },
            {
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "void",
          "resellerOnly": false
        }
      ],
      "path": "/me/subAccount/{id}",
      "description": "Sub Account"
    },
    {
      "path": "/me/subAccount/{id}/createConsumerKey",
      "description": "createConsumerKey operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.SubAccountConsumerKey",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id",
              "description": "Id of the object"
            }
          ],
          "noAuthentication": false,
          "description": "Create a consumer key for the current application",
          "httpMethod": "POST",
          "responseType": "nichandle.SubAccountConsumerKey",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [],
          "noAuthentication": false,
          "description": "List of sub-accounts",
          "resellerOnly": false,
          "responseFullType": "long[]"
        },
        {
          "resellerOnly": false,
          "responseFullType": "long",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long",
          "httpMethod": "POST",
          "description": "Create a new sub-account",
          "parameters": [
            {
              "description": "Description of the new sub-account",
              "name": "description",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/me/subAccount",
      "description": "List the nichandle.SubAccount objects"
    },
    {
      "description": "API Application",
      "path": "/me/api/application/{applicationId}",
      "operations": [
        {
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "name": "applicationId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "api.Application",
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "api.Application"
        },
        {
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "applicationId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Remove this application. It will revoke all credential belonging to this application.",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "path": "/me/api/application",
      "description": "List the api.Application objects",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [],
          "description": "List of your Api Application"
        }
      ]
    },
    {
      "path": "/me/api/credential/{credentialId}",
      "description": "API Credential",
      "operations": [
        {
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "name": "credentialId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "api.Credential",
          "resellerOnly": false,
          "responseFullType": "api.Credential"
        },
        {
          "description": "Alter this object properties",
          "parameters": [
            {
              "description": "New object properties",
              "fullType": "api.Credential",
              "name": null,
              "paramType": "body",
              "required": true,
              "dataType": "api.Credential"
            },
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "credentialId"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "PUT",
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "httpMethod": "DELETE",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "description": "Remove this credential",
          "parameters": [
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "credentialId"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "api.Application",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "name": "credentialId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "api.Application"
        }
      ],
      "path": "/me/api/credential/{credentialId}/application",
      "description": "API Application"
    },
    {
      "description": "List the api.Credential objects",
      "path": "/me/api/credential",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "name": "applicationId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "query",
              "required": false,
              "description": "Filter the value of applicationId property (like)"
            },
            {
              "dataType": "auth.CredentialStateEnum",
              "required": false,
              "paramType": "query",
              "name": "status",
              "fullType": "auth.CredentialStateEnum",
              "description": "Filter the value of status property (=)"
            }
          ],
          "description": "List of your Api Credentials"
        }
      ]
    },
    {
      "path": "/me/notification/email/history/{id}",
      "description": "Email notification",
      "operations": [
        {
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.emailNotification",
          "resellerOnly": false,
          "responseFullType": "nichandle.emailNotification"
        }
      ]
    },
    {
      "path": "/me/notification/email/history",
      "description": "List the nichandle.emailNotification objects",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [],
          "description": "List of all your email notifications",
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseFullType": "long[]",
          "resellerOnly": false
        }
      ]
    },
    {
      "path": "/me/mailingList/availableLists",
      "description": "availableLists operations",
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "description": "List of mailing list you can subscribe",
          "parameters": [],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ]
    },
    {
      "description": "subscribe operations",
      "path": "/me/mailingList/subscribe",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "email",
              "description": "Email you want to subscribe to"
            },
            {
              "description": "Mailing list",
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "mailingList",
              "fullType": "string"
            }
          ],
          "noAuthentication": false,
          "description": "Subscribe an email to a restricted mailing list"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "description": "List of all OVH things you can subscribe to",
          "noAuthentication": false,
          "parameters": []
        }
      ],
      "description": "List the nichandle.Subscription objects",
      "path": "/me/subscription"
    },
    {
      "description": "List of all OVH things you can subscribe to",
      "path": "/me/subscription/{subscriptionType}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.Subscription",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "The type of subscription",
              "name": "subscriptionType",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.Subscription"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Alter this object properties",
          "parameters": [
            {
              "description": "New object properties",
              "dataType": "nichandle.Subscription",
              "required": true,
              "paramType": "body",
              "name": null,
              "fullType": "nichandle.Subscription"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "subscriptionType",
              "fullType": "string",
              "description": "The type of subscription"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "PUT",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "description": "List of all the bills the logged account has",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Filter the value of orderId property (=)",
              "required": false,
              "paramType": "query",
              "dataType": "long",
              "fullType": "long",
              "name": "orderId"
            },
            {
              "description": "Filter the value of date property (<=)",
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false,
              "dataType": "datetime"
            },
            {
              "description": "Filter the value of date property (>=)",
              "required": false,
              "paramType": "query",
              "dataType": "datetime",
              "fullType": "datetime",
              "name": "date.from"
            },
            {
              "description": "Filter the value of category property (=)",
              "dataType": "billing.CategoryEnum",
              "required": false,
              "paramType": "query",
              "name": "category",
              "fullType": "billing.CategoryEnum"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "httpMethod": "GET"
        }
      ],
      "path": "/me/bill",
      "description": "List the billing.Bill objects"
    },
    {
      "path": "/me/bill/export",
      "description": "Exports a bundle of invoices",
      "operations": [
        {
          "description": "Exports a bundle of invoices",
          "parameters": [
            {
              "description": "Start interval of the export",
              "name": "startDate",
              "fullType": "datetime",
              "dataType": "datetime",
              "paramType": "body",
              "required": false
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "string[]",
              "fullType": "string[]",
              "name": "ids",
              "description": "A list of ids to export"
            },
            {
              "description": "The file type of the archive",
              "fullType": "billing.ArchiveTypeEnum",
              "name": "archiveType",
              "paramType": "body",
              "required": true,
              "dataType": "billing.ArchiveTypeEnum"
            },
            {
              "description": "End interval of the export",
              "fullType": "datetime",
              "name": "endDate",
              "paramType": "body",
              "required": false,
              "dataType": "datetime"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "description": "Details about a payment",
      "path": "/me/bill/{billId}/payment",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.Payment",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "billId"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Payment"
        }
      ]
    },
    {
      "operations": [
        {
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "name": "depositOrderId",
              "paramType": "query",
              "required": false,
              "dataType": "long",
              "description": "Filter the value of depositOrderId property (=)"
            },
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "billId"
            }
          ],
          "description": "All operations related to these debts",
          "resellerOnly": false,
          "responseFullType": "long[]"
        }
      ],
      "description": "List the debt.Operation objects",
      "path": "/me/bill/{billId}/debt/operation"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "name": "billId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": null
            },
            {
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": null
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "debt.Operation",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "debt.Operation"
        }
      ],
      "description": "Operation that happend on a debt",
      "path": "/me/bill/{billId}/debt/operation/{operationId}"
    },
    {
      "path": "/me/bill/{billId}/debt/operation/{operationId}/associatedObject",
      "description": "associatedObject operations",
      "operations": [
        {
          "description": "Return main data about the object related to this debt operation",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            },
            {
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "debt.entry.AssociatedObject",
          "responseFullType": "debt.entry.AssociatedObject",
          "resellerOnly": false
        }
      ]
    },
    {
      "description": "State of a debt",
      "path": "/me/bill/{billId}/debt",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "debt.Debt",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "billId",
              "fullType": "string"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "debt.Debt",
          "httpMethod": "GET"
        }
      ]
    },
    {
      "operations": [
        {
          "responseType": "billing.Order",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "billId",
              "fullType": "string",
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Create an order in order to pay this order's debt",
          "resellerOnly": false,
          "responseFullType": "billing.Order"
        }
      ],
      "description": "pay operations",
      "path": "/me/bill/{billId}/debt/pay"
    },
    {
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "description": "Give access to all entries of the bill",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "name": "billId",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ]
        }
      ],
      "path": "/me/bill/{billId}/details",
      "description": "List the billing.BillDetail objects"
    },
    {
      "path": "/me/bill/{billId}/details/{billDetailId}",
      "description": "Information about a Bill entry",
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.BillDetail",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "name": "billId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "billDetailId",
              "description": null
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "billing.BillDetail"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "billing.Bill",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Bill",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "billId",
              "fullType": "string"
            }
          ]
        }
      ],
      "description": "Details about a Bill",
      "path": "/me/bill/{billId}"
    },
    {
      "operations": [
        {
          "description": "List of all the orders the logged account has",
          "parameters": [
            {
              "description": "Filter the value of date property (<=)",
              "required": false,
              "paramType": "query",
              "dataType": "datetime",
              "fullType": "datetime",
              "name": "date.to"
            },
            {
              "description": "Filter the value of date property (>=)",
              "name": "date.from",
              "fullType": "datetime",
              "dataType": "datetime",
              "paramType": "query",
              "required": false
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "responseFullType": "long[]",
          "resellerOnly": false
        }
      ],
      "description": "List the billing.Order objects",
      "path": "/me/order"
    },
    {
      "description": "details operations",
      "path": "/me/order/{orderId}/consumption/details",
      "operations": [
        {
          "description": "Retrieve order's detailed consumption information as a file",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Format of the file",
              "dataType": "consumption.ConsumptionExportFormatsEnum",
              "required": true,
              "paramType": "query",
              "name": "fileFormat",
              "fullType": "consumption.ConsumptionExportFormatsEnum"
            },
            {
              "description": null,
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "orderId",
              "fullType": "long"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.order.ConsumptionDetails",
          "httpMethod": "GET",
          "responseFullType": "billing.order.ConsumptionDetails",
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Give access to all entries of the order",
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "responseFullType": "long[]",
          "resellerOnly": false
        }
      ],
      "description": "List the billing.OrderDetail objects",
      "path": "/me/order/{orderId}/details"
    },
    {
      "path": "/me/order/{orderId}/details/{orderDetailId}",
      "description": "Information about a Bill entry",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.OrderDetail",
          "httpMethod": "GET",
          "responseType": "billing.OrderDetail",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "name": "orderId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": null
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "orderDetailId",
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.ItemDetail",
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "billing.ItemDetail",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "name": "orderId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            },
            {
              "name": "orderDetailId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": null
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "Extensions of a detail",
      "path": "/me/order/{orderId}/details/{orderDetailId}/extension"
    },
    {
      "description": "followUp operations",
      "path": "/me/order/{orderId}/followUp",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.order.FollowUp[]",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "orderId",
              "fullType": "long",
              "description": null
            }
          ],
          "description": "Return tracking of the order",
          "responseType": "billing.order.FollowUp[]",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.order.PaymentMethods",
          "description": "List of registered payment method you can use to pay this order",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "name": "orderId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "billing.order.PaymentMethods"
        }
      ],
      "path": "/me/order/{orderId}/paymentMethods",
      "description": "paymentMethods operations"
    },
    {
      "description": "Details about an Order",
      "path": "/me/order/{orderId}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "orderId",
              "fullType": "long",
              "description": null
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "billing.Order",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.Order",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "orderId",
              "fullType": "long",
              "description": null
            }
          ],
          "description": "Create an order in order to pay this order's debt",
          "httpMethod": "POST",
          "responseType": "billing.Order",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ],
      "path": "/me/order/{orderId}/debt/pay",
      "description": "pay operations"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "debt.Debt",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "orderId"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "debt.Debt"
        }
      ],
      "path": "/me/order/{orderId}/debt",
      "description": "State of a debt"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "debt.Operation",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "orderId",
              "fullType": "long"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "operationId",
              "description": null
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "debt.Operation",
          "httpMethod": "GET"
        }
      ],
      "description": "Operation that happend on a debt",
      "path": "/me/order/{orderId}/debt/operation/{operationId}"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "debt.entry.AssociatedObject",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "orderId",
              "description": null
            },
            {
              "description": null,
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "description": "Return main data about the object related to this debt operation",
          "httpMethod": "GET",
          "responseType": "debt.entry.AssociatedObject",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ],
      "description": "associatedObject operations",
      "path": "/me/order/{orderId}/debt/operation/{operationId}/associatedObject"
    },
    {
      "description": "List the debt.Operation objects",
      "path": "/me/order/{orderId}/debt/operation",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "description": "All operations related to these debts",
          "parameters": [
            {
              "description": "Filter the value of depositOrderId property (=)",
              "required": false,
              "paramType": "query",
              "dataType": "long",
              "fullType": "long",
              "name": "depositOrderId"
            },
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "orderId"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "httpMethod": "GET"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.order.AssociatedObject",
          "parameters": [
            {
              "name": "orderId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Return main data about the object the processing of the order generated",
          "responseType": "billing.order.AssociatedObject",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET"
        }
      ],
      "path": "/me/order/{orderId}/associatedObject",
      "description": "associatedObject operations"
    },
    {
      "path": "/me/order/{orderId}/payWithRegisteredPaymentMean",
      "description": "payWithRegisteredPaymentMean operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Pay with an already registered payment mean",
          "parameters": [
            {
              "description": "The registered payment mean you want to use",
              "name": "paymentMean",
              "fullType": "billing.ReusablePaymentMeanEnum",
              "dataType": "billing.ReusablePaymentMeanEnum",
              "paramType": "body",
              "required": true
            },
            {
              "fullType": "long",
              "name": "paymentMeanId",
              "paramType": "body",
              "required": false,
              "dataType": "long",
              "description": "Id of registered payment mean, mandatory for bankAccount, creditCard and paypal"
            },
            {
              "description": null,
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "orderId",
              "fullType": "long"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST"
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "billing.order.PaymentMeans",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "orderId",
              "description": null
            }
          ],
          "description": "Return main data about the object the processing of the order generated",
          "resellerOnly": false,
          "responseFullType": "billing.order.PaymentMeans"
        }
      ],
      "description": "paymentMeans operations",
      "path": "/me/order/{orderId}/paymentMeans"
    },
    {
      "operations": [
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.order.PayWithPaymentMethod",
              "required": true,
              "paramType": "body",
              "name": "paymentMethod",
              "fullType": "billing.order.PayWithPaymentMethod",
              "description": "Payment method informations for pay"
            },
            {
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": null
            }
          ],
          "description": "Pay with a payment method reference"
        }
      ],
      "path": "/me/order/{orderId}/pay",
      "description": "pay operations"
    },
    {
      "description": "Details about a payment",
      "path": "/me/order/{orderId}/payment",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "name": "orderId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": null
            }
          ],
          "description": "Get this object properties",
          "responseType": "billing.Payment",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "billing.Payment"
        }
      ]
    },
    {
      "path": "/me/order/{orderId}/availableRegisteredPaymentMean",
      "description": "availableRegisteredPaymentMean operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.order.RegisteredPaymentMean[]",
          "description": "List of registered payment mean you can use to pay this order",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.order.RegisteredPaymentMean[]",
          "httpMethod": "GET"
        }
      ]
    },
    {
      "path": "/me/order/{orderId}/retraction",
      "description": "retraction operations",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "description": "Request retraction of order",
          "parameters": [
            {
              "description": "The reason why you want to retract",
              "fullType": "billing.order.RetractionReasonEnum",
              "name": "reason",
              "paramType": "body",
              "required": true,
              "dataType": "billing.order.RetractionReasonEnum"
            },
            {
              "description": "An optional comment of why you want to retract",
              "fullType": "text",
              "name": "comment",
              "paramType": "body",
              "required": false,
              "dataType": "text"
            },
            {
              "description": null,
              "name": "orderId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "description": "status operations",
      "path": "/me/order/{orderId}/status",
      "operations": [
        {
          "description": "Return status of order",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "orderId",
              "fullType": "long"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.order.OrderStatusEnum",
          "responseFullType": "billing.order.OrderStatusEnum",
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.Bill",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "name": "orderId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Bill"
        }
      ],
      "path": "/me/order/{orderId}/bill",
      "description": "Details about a Bill"
    },
    {
      "description": "Details about a Refund",
      "path": "/me/order/{orderId}/refund",
      "operations": [
        {
          "responseFullType": "billing.Refund",
          "resellerOnly": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "orderId",
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "responseType": "billing.Refund",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.VoucherStatus",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "voucher",
              "description": "Voucher value"
            }
          ],
          "description": "Verify existing voucher",
          "httpMethod": "POST",
          "responseType": "nichandle.VoucherStatus",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ],
      "description": "checkValidity operations",
      "path": "/me/voucher/checkValidity"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "dataType": "long",
              "required": false,
              "paramType": "query",
              "name": "orderId",
              "fullType": "long",
              "description": "Filter the value of orderId property (=)"
            },
            {
              "dataType": "datetime",
              "required": false,
              "paramType": "query",
              "name": "date.to",
              "fullType": "datetime",
              "description": "Filter the value of date property (<=)"
            },
            {
              "fullType": "datetime",
              "name": "date.from",
              "paramType": "query",
              "required": false,
              "dataType": "datetime",
              "description": "Filter the value of date property (>=)"
            }
          ],
          "noAuthentication": false,
          "description": "List of all the withdrawals made from your prepaid account",
          "responseFullType": "string[]",
          "resellerOnly": false
        }
      ],
      "description": "List the billing.Withdrawal objects",
      "path": "/me/withdrawal"
    },
    {
      "path": "/me/withdrawal/{withdrawalId}/payment",
      "description": "Details about a payment",
      "operations": [
        {
          "responseType": "billing.Payment",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "withdrawalId",
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "billing.Payment"
        }
      ]
    },
    {
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.WithdrawalDetail",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "withdrawalId"
            },
            {
              "description": null,
              "name": "withdrawalDetailId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseFullType": "billing.WithdrawalDetail",
          "resellerOnly": false
        }
      ],
      "path": "/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}",
      "description": "Information about a Withdrawal entry"
    },
    {
      "path": "/me/withdrawal/{withdrawalId}/details",
      "description": "List the billing.WithdrawalDetail objects",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "parameters": [
            {
              "name": "withdrawalId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Give access to all entries of this withdrawal",
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "path": "/me/withdrawal/{withdrawalId}",
      "description": "Details about a withdrawal",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.Withdrawal",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Withdrawal",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "fullType": "string",
              "name": "withdrawalId",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "description": "Customer public SSH key, can be used for rescue netboot or server access after reinstallation",
      "path": "/me/sshKey/{keyName}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.sshKey",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": "Name of this public SSH key",
              "fullType": "string",
              "name": "keyName",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.sshKey"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "httpMethod": "PUT",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "body",
              "dataType": "nichandle.sshKey",
              "fullType": "nichandle.sshKey",
              "name": null,
              "description": "New object properties"
            },
            {
              "description": "Name of this public SSH key",
              "name": "keyName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "description": "Alter this object properties"
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "httpMethod": "DELETE",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "fullType": "string",
              "name": "keyName",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "Name of this public SSH key"
            }
          ],
          "noAuthentication": false,
          "description": "Remove this public SSH key"
        }
      ]
    },
    {
      "description": "List the nichandle.sshKey objects",
      "path": "/me/sshKey",
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [],
          "description": "List of your public SSH keys",
          "responseFullType": "string[]",
          "resellerOnly": false
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "keyName",
              "fullType": "string",
              "description": "name of the new public SSH key"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "key",
              "fullType": "string",
              "description": "ASCII encoded public SSH key to add"
            }
          ],
          "description": "Add a new public SSH key",
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Document id",
              "name": "id",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.document.Document",
          "resellerOnly": false,
          "responseFullType": "nichandle.document.Document"
        },
        {
          "parameters": [
            {
              "name": null,
              "fullType": "nichandle.document.Document",
              "dataType": "nichandle.document.Document",
              "paramType": "body",
              "required": true,
              "description": "New object properties"
            },
            {
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "Document id"
            }
          ],
          "noAuthentication": false,
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Delete a document",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Document id",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "id"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "DELETE"
        }
      ],
      "path": "/me/document/{id}",
      "description": "List of documents added on your account"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "description": "List of documents added in your account"
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "complexType.SafeKeyValue<string>[]",
              "required": false,
              "paramType": "body",
              "name": "tags",
              "fullType": "complexType.SafeKeyValue<string>[]",
              "description": "File tags"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "name",
              "fullType": "string",
              "description": "File name"
            }
          ],
          "description": "Create new document",
          "responseType": "nichandle.document.Document",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "nichandle.document.Document"
        }
      ],
      "path": "/me/document",
      "description": "List the nichandle.document.Document objects"
    },
    {
      "operations": [
        {
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "origin",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": true,
              "description": "Allow this origin"
            }
          ],
          "description": "Add CORS support on your container",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "description": "Add CORS support on your container",
      "path": "/me/document/cors"
    },
    {
      "path": "/me/passwordRecover",
      "description": "Request a password recover",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Request a password recover",
          "parameters": [
            {
              "description": "Your OVH Account Id",
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "ovhId"
            },
            {
              "description": "Company of your OVH Account Id",
              "name": "ovhCompany",
              "fullType": "nichandle.OvhCompanyEnum",
              "dataType": "nichandle.OvhCompanyEnum",
              "paramType": "body",
              "required": true
            }
          ],
          "noAuthentication": true,
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void"
        }
      ]
    },
    {
      "path": "/me/sla",
      "description": "List the billing.SlaOperation objects",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "parameters": [],
          "noAuthentication": false,
          "description": "List active SLA"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "boolean",
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "boolean",
          "description": "Check whether this SLA can be applied on your services",
          "parameters": [
            {
              "description": "Id of the object",
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id"
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/me/sla/{id}/canBeApplied",
      "description": "canBeApplied operations"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.SlaOperationService[]",
          "description": "Get services impacted by this SLA",
          "parameters": [
            {
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.SlaOperationService[]"
        }
      ],
      "path": "/me/sla/{id}/services",
      "description": "services operations"
    },
    {
      "description": "SLA properties",
      "path": "/me/sla/{id}",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.SlaOperation",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": "Id of the object"
            }
          ],
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "billing.SlaOperation",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "path": "/me/sla/{id}/status",
      "description": "status operations",
      "operations": [
        {
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "fullType": "long",
              "description": "Id of the object"
            }
          ],
          "noAuthentication": false,
          "description": "Get the status request of this SLA",
          "httpMethod": "GET",
          "responseType": "string",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "string"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "description": "Ask for SLA application",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Id of the object",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "id",
              "fullType": "long"
            }
          ]
        }
      ],
      "path": "/me/sla/{id}/apply",
      "description": "apply operations"
    },
    {
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "debt.entry.AssociatedObject",
          "httpMethod": "GET",
          "description": "Return main data about the object related to this debt operation",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            },
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "operationId"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "debt.entry.AssociatedObject"
        }
      ],
      "description": "associatedObject operations",
      "path": "/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject"
    },
    {
      "operations": [
        {
          "responseType": "debt.Operation",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "debtId",
              "fullType": "long",
              "description": null
            },
            {
              "fullType": "long",
              "name": "operationId",
              "paramType": "path",
              "required": true,
              "dataType": "long",
              "description": null
            }
          ],
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "debt.Operation"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}/operation/{operationId}",
      "description": "Operation that happend on a debt"
    },
    {
      "description": "List the debt.Operation objects",
      "path": "/me/debtAccount/debt/{debtId}/operation",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "description": "All operations related to these debts",
          "parameters": [
            {
              "description": "Filter the value of depositOrderId property (=)",
              "fullType": "long",
              "name": "depositOrderId",
              "paramType": "query",
              "required": false,
              "dataType": "long"
            },
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "debtId"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "debt.Debt",
          "description": "Get this object properties",
          "parameters": [
            {
              "description": null,
              "fullType": "long",
              "name": "debtId",
              "paramType": "path",
              "required": true,
              "dataType": "long"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "debt.Debt"
        }
      ],
      "path": "/me/debtAccount/debt/{debtId}",
      "description": "State of a debt"
    },
    {
      "description": "pay operations",
      "path": "/me/debtAccount/debt/{debtId}/pay",
      "operations": [
        {
          "description": "Create an order in order to pay this order's debt",
          "noAuthentication": false,
          "parameters": [
            {
              "description": null,
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "debtId"
            }
          ],
          "httpMethod": "POST",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Order",
          "responseFullType": "billing.Order",
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "long[]",
          "description": "All debts related to your account",
          "noAuthentication": false,
          "parameters": [],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]"
        }
      ],
      "description": "List the debt.Debt objects",
      "path": "/me/debtAccount/debt"
    },
    {
      "description": "Debt balance of the account",
      "path": "/me/debtAccount",
      "operations": [
        {
          "responseType": "debt.Balance",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "description": "Get this object properties",
          "responseFullType": "debt.Balance",
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "description": "Create an order in order to pay all your due debts",
          "parameters": [],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Order",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "billing.Order"
        }
      ],
      "path": "/me/debtAccount/pay",
      "description": "pay operations"
    },
    {
      "operations": [
        {
          "responseFullType": "long[]",
          "resellerOnly": false,
          "description": "Retrieve all contact that you created",
          "parameters": [],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "httpMethod": "GET"
        },
        {
          "description": "Create a new contact",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Address of the contact",
              "dataType": "contact.Address",
              "required": true,
              "paramType": "body",
              "name": "address",
              "fullType": "contact.Address"
            },
            {
              "name": "cellPhone",
              "fullType": "phoneNumber",
              "dataType": "phoneNumber",
              "paramType": "body",
              "required": false,
              "description": "Cellphone number"
            },
            {
              "fullType": "phoneNumber",
              "name": "phone",
              "paramType": "body",
              "required": true,
              "dataType": "phoneNumber",
              "description": "Landline phone number"
            },
            {
              "description": "Fax phone number",
              "name": "fax",
              "fullType": "phoneNumber",
              "dataType": "phoneNumber",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "date",
              "required": false,
              "paramType": "body",
              "name": "birthDay",
              "fullType": "date",
              "description": "Birthday date"
            },
            {
              "description": "City of birth",
              "name": "birthCity",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false
            },
            {
              "fullType": "string",
              "name": "birthZip",
              "paramType": "body",
              "required": false,
              "dataType": "string",
              "description": "Birth Zipcode"
            },
            {
              "description": "Birth Country",
              "name": "birthCountry",
              "fullType": "nichandle.CountryEnum",
              "dataType": "nichandle.CountryEnum",
              "paramType": "body",
              "required": false
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "vat",
              "description": "VAT number"
            },
            {
              "description": "Company national identification number",
              "fullType": "string",
              "name": "companyNationalIdentificationNumber",
              "paramType": "body",
              "required": false,
              "dataType": "string"
            },
            {
              "description": "National identification number",
              "required": false,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "nationalIdentificationNumber"
            },
            {
              "description": "Type of your organisation",
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "organisationType",
              "fullType": "string"
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "organisationName",
              "fullType": "string",
              "description": "Name of your organisation"
            },
            {
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "description": "Email address"
            },
            {
              "description": "First name",
              "name": "firstName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": true
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "nichandle.GenderEnum",
              "fullType": "nichandle.GenderEnum",
              "name": "gender",
              "description": "Gender"
            },
            {
              "dataType": "nichandle.LanguageEnum",
              "required": true,
              "paramType": "body",
              "name": "language",
              "fullType": "nichandle.LanguageEnum",
              "description": "Language"
            },
            {
              "description": "Nationality",
              "dataType": "nichandle.CountryEnum",
              "required": false,
              "paramType": "body",
              "name": "nationality",
              "fullType": "nichandle.CountryEnum"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "lastName",
              "fullType": "string",
              "description": "Last name"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "nichandle.LegalFormEnum",
              "fullType": "nichandle.LegalFormEnum",
              "name": "legalForm",
              "description": "Legal form of the contact"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "contact.Contact",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "contact.Contact"
        }
      ],
      "description": "Missing description",
      "path": "/me/contact"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "contact.Contact",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "contactId",
              "description": "Contact Identifier"
            }
          ],
          "description": "Retrieve information about a contact",
          "responseType": "contact.Contact",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET"
        },
        {
          "description": "Update an existing contact",
          "parameters": [
            {
              "description": "Contact Identifier",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "contactId",
              "fullType": "long"
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "contact.Address",
              "fullType": "contact.Address",
              "name": "address",
              "description": "Address of the contact"
            },
            {
              "dataType": "phoneNumber",
              "required": false,
              "paramType": "body",
              "name": "cellPhone",
              "fullType": "phoneNumber",
              "description": "Cellphone number"
            },
            {
              "fullType": "phoneNumber",
              "name": "phone",
              "paramType": "body",
              "required": false,
              "dataType": "phoneNumber",
              "description": "Landline phone number"
            },
            {
              "description": "Fax phone number",
              "dataType": "phoneNumber",
              "required": false,
              "paramType": "body",
              "name": "fax",
              "fullType": "phoneNumber"
            },
            {
              "dataType": "date",
              "required": false,
              "paramType": "body",
              "name": "birthDay",
              "fullType": "date",
              "description": "Birthday date"
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "birthCity",
              "fullType": "string",
              "description": "City of birth"
            },
            {
              "name": "birthZip",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false,
              "description": "Birth Zipcode"
            },
            {
              "fullType": "nichandle.CountryEnum",
              "name": "birthCountry",
              "paramType": "body",
              "required": false,
              "dataType": "nichandle.CountryEnum",
              "description": "Birth Country"
            },
            {
              "description": "VAT number",
              "fullType": "string",
              "name": "vat",
              "paramType": "body",
              "required": false,
              "dataType": "string"
            },
            {
              "description": "Company national identification number",
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "companyNationalIdentificationNumber",
              "fullType": "string"
            },
            {
              "name": "nationalIdentificationNumber",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false,
              "description": "National identification number"
            },
            {
              "name": "organisationType",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false,
              "description": "Type of your organisation"
            },
            {
              "name": "organisationName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false,
              "description": "Name of your organisation"
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "email",
              "fullType": "string",
              "description": "Email address"
            },
            {
              "fullType": "string",
              "name": "firstName",
              "paramType": "body",
              "required": false,
              "dataType": "string",
              "description": "First name"
            },
            {
              "description": "Gender",
              "name": "gender",
              "fullType": "nichandle.GenderEnum",
              "dataType": "nichandle.GenderEnum",
              "paramType": "body",
              "required": false
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "nichandle.LanguageEnum",
              "fullType": "nichandle.LanguageEnum",
              "name": "language",
              "description": "Language"
            },
            {
              "description": "Nationality",
              "required": false,
              "paramType": "body",
              "dataType": "nichandle.CountryEnum",
              "fullType": "nichandle.CountryEnum",
              "name": "nationality"
            },
            {
              "description": "Last name",
              "name": "lastName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "nichandle.LegalFormEnum",
              "required": false,
              "paramType": "body",
              "name": "legalForm",
              "fullType": "nichandle.LegalFormEnum",
              "description": "Legal form of the contact"
            }
          ],
          "noAuthentication": false,
          "httpMethod": "PUT",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "contact.Contact",
          "resellerOnly": false,
          "responseFullType": "contact.Contact"
        }
      ],
      "description": "Missing description",
      "path": "/me/contact/{contactId}"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "contact.FieldInformation[]",
          "httpMethod": "GET",
          "responseType": "contact.FieldInformation[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "contactId",
              "fullType": "long",
              "description": "Contact Identifier"
            }
          ],
          "noAuthentication": false,
          "description": "Display mandatory/read-only informations of a contact"
        }
      ],
      "path": "/me/contact/{contactId}/fields",
      "description": "Missing description"
    },
    {
      "operations": [
        {
          "responseFullType": "nichandle.NicAutorenewInfos",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.NicAutorenewInfos",
          "httpMethod": "GET",
          "description": "Get this object properties",
          "noAuthentication": false,
          "parameters": []
        },
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "parameters": [
            {
              "description": "New object properties",
              "dataType": "nichandle.NicAutorenewInfos",
              "required": true,
              "paramType": "body",
              "name": null,
              "fullType": "nichandle.NicAutorenewInfos"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "description": "Activate auto renew for this nic",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Day of autorenew",
              "required": true,
              "paramType": "body",
              "dataType": "long",
              "fullType": "long",
              "name": "renewDay"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "path": "/me/autorenew",
      "description": "Auto renewal information"
    },
    {
      "operations": [
        {
          "responseType": "nichandle.Ipv4Org",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "organisationId",
              "fullType": "string",
              "description": null
            }
          ],
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "nichandle.Ipv4Org"
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "PUT",
          "description": "Alter this object properties",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New object properties",
              "name": null,
              "fullType": "nichandle.Ipv4Org",
              "dataType": "nichandle.Ipv4Org",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "organisationId",
              "fullType": "string",
              "description": null
            }
          ]
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "organisationId",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": null
            }
          ],
          "description": "Delete this organisation",
          "httpMethod": "DELETE",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "description": "Details about an IP block organisation",
      "path": "/me/ipOrganisation/{organisationId}"
    },
    {
      "path": "/me/ipOrganisation",
      "description": "List the nichandle.Ipv4Org objects",
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [],
          "description": "List of organisations"
        },
        {
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "abuse_mailbox",
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "description": null
            },
            {
              "description": null,
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "lastname",
              "fullType": "string"
            },
            {
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "address",
              "fullType": "string",
              "description": null
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "zip",
              "description": null
            },
            {
              "description": null,
              "dataType": "nichandle.CountryEnum",
              "required": true,
              "paramType": "body",
              "name": "country",
              "fullType": "nichandle.CountryEnum"
            },
            {
              "fullType": "string",
              "name": "city",
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "description": null
            },
            {
              "description": null,
              "name": "phone",
              "fullType": "phoneNumber",
              "dataType": "phoneNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "nichandle.IpRegistryEnum",
              "required": true,
              "paramType": "body",
              "name": "registry",
              "fullType": "nichandle.IpRegistryEnum",
              "description": null
            },
            {
              "description": null,
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "firstname",
              "fullType": "string"
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "state",
              "fullType": "string",
              "description": null
            }
          ],
          "description": "Add an organisation",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "responseType": "billing.AutomaticPaymentMean",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [],
          "noAuthentication": false,
          "description": "List available payment methods in this Nic's country",
          "resellerOnly": false,
          "responseFullType": "billing.AutomaticPaymentMean"
        }
      ],
      "path": "/me/availableAutomaticPaymentMeans",
      "description": "availableAutomaticPaymentMeans operations"
    },
    {
      "path": "/me/ipxeScript/{name}",
      "description": "Customer IPXE scripts",
      "operations": [
        {
          "parameters": [
            {
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true,
              "dataType": "string",
              "description": "Name of this script"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "responseType": "nichandle.ipxe",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "nichandle.ipxe"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "name",
              "fullType": "string",
              "description": "Name of this script"
            }
          ],
          "description": "Remove this IPXE Script",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "DELETE"
        }
      ]
    },
    {
      "operations": [
        {
          "description": "List of all your IPXE scripts",
          "noAuthentication": false,
          "parameters": [],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "resellerOnly": false,
          "responseFullType": "string[]"
        },
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.ipxe",
          "httpMethod": "POST",
          "responseType": "nichandle.ipxe",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "description": "A personnal description of this script"
            },
            {
              "description": "name of your script",
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "name"
            },
            {
              "description": "Content of your IPXE script",
              "fullType": "text",
              "name": "script",
              "paramType": "body",
              "required": true,
              "dataType": "text"
            }
          ],
          "description": "Add an IPXE script"
        }
      ],
      "description": "List the nichandle.ipxe objects",
      "path": "/me/ipxeScript"
    },
    {
      "description": "Groups linked to this account",
      "path": "/me/identity/group",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "description": "Retrieve all groups of this account",
          "parameters": [],
          "noAuthentication": false
        },
        {
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true,
              "dataType": "string",
              "description": "Group's name"
            },
            {
              "description": "Group's description",
              "name": "description",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false
            },
            {
              "name": "role",
              "fullType": "nichandle.Authentication.RoleEnum",
              "dataType": "nichandle.Authentication.RoleEnum",
              "paramType": "body",
              "required": false,
              "description": "Group's Role"
            }
          ],
          "description": "Create a new group",
          "httpMethod": "POST",
          "responseType": "nichandle.Authentication.Group",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "nichandle.Authentication.Group"
        }
      ]
    },
    {
      "path": "/me/identity/group/{group}",
      "description": "A group linked to this account",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "nichandle.Authentication.Group",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "group",
              "description": "Group's name"
            }
          ],
          "description": "Get this object properties",
          "responseType": "nichandle.Authentication.Group",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET"
        },
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "DELETE",
          "description": "Delete this object",
          "parameters": [
            {
              "description": "Group's name",
              "fullType": "string",
              "name": "group",
              "paramType": "path",
              "required": true,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "void"
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "group",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "Group's name"
            },
            {
              "name": "description",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": false,
              "description": "Group's description"
            },
            {
              "fullType": "nichandle.Authentication.RoleEnum",
              "name": "role",
              "paramType": "body",
              "required": false,
              "dataType": "nichandle.Authentication.RoleEnum",
              "description": "Group's role"
            }
          ],
          "noAuthentication": false,
          "description": "Alter a group"
        }
      ]
    },
    {
      "description": "Users linked to this account",
      "path": "/me/identity/user",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "string[]",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "parameters": [],
          "noAuthentication": false,
          "description": "Retrieve all users of this account"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "description": "Create a new user",
          "parameters": [
            {
              "description": "User's login",
              "name": "login",
              "fullType": "string",
              "dataType": "string",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "description",
              "fullType": "string",
              "description": "User's description"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "email",
              "description": "User's email"
            },
            {
              "description": "User's password",
              "required": true,
              "paramType": "body",
              "dataType": "password",
              "fullType": "password",
              "name": "password"
            },
            {
              "description": "User's group",
              "fullType": "string",
              "name": "group",
              "paramType": "body",
              "required": false,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST"
        }
      ]
    },
    {
      "description": "A user linked to this account",
      "path": "/me/identity/user/{user}/enable",
      "operations": [
        {
          "description": "Enable this user",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "User's login",
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "user"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "POST",
          "responseFullType": "void",
          "resellerOnly": false
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "name": "user",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "User's login"
            }
          ],
          "noAuthentication": false,
          "description": "Disable this user",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "path": "/me/identity/user/{user}/disable",
      "description": "A user linked to this account"
    },
    {
      "description": "A user linked to this account",
      "path": "/me/identity/user/{user}",
      "operations": [
        {
          "responseFullType": "nichandle.User",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseType": "nichandle.User",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "user",
              "description": "User's login"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "user",
              "fullType": "string",
              "description": "User's login"
            }
          ],
          "description": "Delete this object",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "DELETE"
        },
        {
          "responseFullType": "void",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "void",
          "httpMethod": "PUT",
          "description": "Alter a user",
          "parameters": [
            {
              "description": "User's login",
              "name": "user",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "email",
              "fullType": "string",
              "description": "User's email"
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "description",
              "fullType": "string",
              "description": "User's description"
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "group",
              "description": "User's group"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "description": "List of OVH accounts the logged account has",
          "noAuthentication": false,
          "parameters": [],
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]"
        }
      ],
      "description": "List the billing.OvhAccount objects",
      "path": "/me/ovhAccount"
    },
    {
      "path": "/me/ovhAccount/{ovhAccountId}/movements/{movementId}",
      "description": "Details about an OVH account",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "ovhAccountId",
              "fullType": "string",
              "description": null
            },
            {
              "name": "movementId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": null
            }
          ],
          "description": "Get this object properties",
          "responseType": "billing.Movement",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "billing.Movement"
        }
      ]
    },
    {
      "path": "/me/ovhAccount/{ovhAccountId}/movements",
      "description": "List the billing.Movement objects",
      "operations": [
        {
          "responseFullType": "long[]",
          "resellerOnly": false,
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "fullType": "datetime",
              "name": "date.to",
              "paramType": "query",
              "required": false,
              "dataType": "datetime",
              "description": "Filter the value of date property (<=)"
            },
            {
              "description": "Filter the value of date property (>=)",
              "name": "date.from",
              "fullType": "datetime",
              "dataType": "datetime",
              "paramType": "query",
              "required": false
            },
            {
              "name": "ovhAccountId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Details about an entry of the OVH account"
        }
      ]
    },
    {
      "description": "retrieveMoney operations",
      "path": "/me/ovhAccount/{ovhAccountId}/retrieveMoney",
      "operations": [
        {
          "responseFullType": "billing.Order",
          "resellerOnly": false,
          "responseType": "billing.Order",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "body",
              "name": "bankAccountId",
              "fullType": "long",
              "description": "A valid bank account"
            },
            {
              "name": "amount",
              "fullType": "long",
              "dataType": "long",
              "paramType": "body",
              "required": true,
              "description": "The amount in cents you want to transfer"
            },
            {
              "name": "ovhAccountId",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": null
            }
          ],
          "noAuthentication": false,
          "description": "Transfer money from ovhAccount to your bank account"
        }
      ]
    },
    {
      "description": "creditOrder operations",
      "path": "/me/ovhAccount/{ovhAccountId}/creditOrder",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "billing.Order",
          "httpMethod": "POST",
          "description": "Generate an order that can be paid in order to credit the OVH account",
          "parameters": [
            {
              "description": "The amount in cents you want to credit your account of",
              "dataType": "long",
              "required": true,
              "paramType": "body",
              "name": "amount",
              "fullType": "long"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "ovhAccountId",
              "description": null
            }
          ],
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "billing.Order"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "billing.OvhAccount",
          "responseType": "billing.OvhAccount",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "required": true,
              "paramType": "path",
              "name": "ovhAccountId",
              "fullType": "string",
              "description": null
            }
          ],
          "description": "Get this object properties"
        },
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "billing.OvhAccount",
              "required": true,
              "paramType": "body",
              "name": null,
              "fullType": "billing.OvhAccount",
              "description": "New object properties"
            },
            {
              "required": true,
              "paramType": "path",
              "dataType": "string",
              "fullType": "string",
              "name": "ovhAccountId",
              "description": null
            }
          ],
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ],
      "description": "Details about an OVH account",
      "path": "/me/ovhAccount/{ovhAccountId}"
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "datetime",
              "name": "endDate",
              "paramType": "body",
              "required": false,
              "dataType": "datetime",
              "description": "End interval of the export"
            },
            {
              "description": "The file type of the archive",
              "dataType": "billing.ArchiveTypeEnum",
              "required": true,
              "paramType": "body",
              "name": "archiveType",
              "fullType": "billing.ArchiveTypeEnum"
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "string[]",
              "fullType": "string[]",
              "name": "ids",
              "description": "A list of ids to export"
            },
            {
              "description": "Start interval of the export",
              "fullType": "datetime",
              "name": "startDate",
              "paramType": "body",
              "required": false,
              "dataType": "datetime"
            }
          ],
          "description": "Exports a bundle of refunds",
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ],
      "path": "/me/refund/export",
      "description": "Exports a bundle of refunds"
    },
    {
      "path": "/me/changeEmail",
      "description": "changeEmail operations",
      "operations": [
        {
          "description": "Initiate an email change procedure",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "New email to associate to your account",
              "dataType": "string",
              "required": true,
              "paramType": "body",
              "name": "newEmail",
              "fullType": "string"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "nichandle.emailChange.Task",
          "httpMethod": "POST",
          "resellerOnly": false,
          "responseFullType": "nichandle.emailChange.Task"
        }
      ]
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "fullType": "string",
              "name": "name",
              "paramType": "query",
              "required": false,
              "dataType": "string",
              "description": "Certificate definition name"
            }
          ],
          "noAuthentication": false,
          "description": "Get all certificates of the account",
          "httpMethod": "GET",
          "responseType": "string[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "string[]"
        }
      ],
      "description": "Get all certificates of the account",
      "path": "/me/certificates"
    },
    {
      "path": "/me/payment/transaction",
      "description": "Retrieve payment method transaction ID list",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "long",
              "name": "paymentMethodId",
              "paramType": "query",
              "required": false,
              "dataType": "long",
              "description": "Payment method ID"
            },
            {
              "description": "Transaction status",
              "fullType": "me.payment.method.Transaction.Status",
              "name": "status",
              "paramType": "query",
              "required": false,
              "dataType": "me.payment.method.Transaction.Status"
            }
          ],
          "description": "Retrieve associated payment method transaction ID list",
          "responseType": "long[]",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "long[]"
        }
      ]
    },
    {
      "operations": [
        {
          "responseType": "me.payment.method.Transaction",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "transactionId",
              "fullType": "long",
              "description": "Payment method transaction ID"
            }
          ],
          "description": "Get associated payment method transaction",
          "resellerOnly": false,
          "responseFullType": "me.payment.method.Transaction"
        }
      ],
      "path": "/me/payment/transaction/{transactionId}",
      "description": "Manage payment method transaction"
    },
    {
      "operations": [
        {
          "description": "Retrieve payment method ID list",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Status",
              "dataType": "me.payment.method.PaymentMethod.Status",
              "required": false,
              "paramType": "query",
              "name": "status",
              "fullType": "me.payment.method.PaymentMethod.Status"
            },
            {
              "fullType": "string",
              "name": "paymentType",
              "paramType": "query",
              "required": false,
              "dataType": "string",
              "description": "Payment method type"
            }
          ],
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "long[]",
          "resellerOnly": false,
          "responseFullType": "long[]"
        },
        {
          "description": "Pay an order and register a new payment method if necessary",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "URL's necessary to register",
              "fullType": "me.payment.method.CallbackUrl",
              "name": "callbackUrl",
              "paramType": "body",
              "required": true,
              "dataType": "me.payment.method.CallbackUrl"
            },
            {
              "description": "Is this payment method set as the default one",
              "fullType": "boolean",
              "name": "default",
              "paramType": "body",
              "required": false,
              "dataType": "boolean"
            },
            {
              "description": "Customer personalized description",
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "description",
              "fullType": "string"
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "long",
              "fullType": "long",
              "name": "orderId",
              "description": "The ID of one order to pay it"
            },
            {
              "description": "Payment type",
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "paymentType"
            },
            {
              "description": "Register this payment method if it's possible (by default it's false and do a oneshot transaction)",
              "fullType": "boolean",
              "name": "register",
              "paramType": "body",
              "required": false,
              "dataType": "boolean"
            }
          ],
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "me.payment.method.Register.ValidationResult",
          "httpMethod": "POST",
          "responseFullType": "me.payment.method.Register.ValidationResult",
          "resellerOnly": false
        }
      ],
      "path": "/me/payment/method",
      "description": "Manage payment method"
    },
    {
      "description": "Manage payment method",
      "path": "/me/payment/method/{paymentMethodId}",
      "operations": [
        {
          "responseType": "me.payment.method.PaymentMethod",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "paymentMethodId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": "Payment method ID"
            }
          ],
          "noAuthentication": false,
          "description": "Get one payment method",
          "resellerOnly": false,
          "responseFullType": "me.payment.method.PaymentMethod"
        },
        {
          "description": "Edit payment method",
          "parameters": [
            {
              "description": "Payment method ID",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "paymentMethodId",
              "fullType": "long"
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "boolean",
              "fullType": "boolean",
              "name": "default",
              "description": "Set this method like default"
            },
            {
              "description": "Customer personalized description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false,
              "dataType": "string"
            }
          ],
          "noAuthentication": false,
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "billing.PaymentMethod",
          "httpMethod": "PUT",
          "responseFullType": "billing.PaymentMethod",
          "resellerOnly": false
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "me.payment.method.PaymentMethod",
          "httpMethod": "DELETE",
          "description": "Cancel one payment method",
          "noAuthentication": false,
          "parameters": [
            {
              "description": "Payment method ID",
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "paymentMethodId",
              "fullType": "long"
            }
          ],
          "resellerOnly": false,
          "responseFullType": "me.payment.method.PaymentMethod"
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "me.payment.method.PaymentMethod",
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "paymentMethodId",
              "fullType": "long",
              "description": "Payment method ID"
            },
            {
              "dataType": "long",
              "required": false,
              "paramType": "body",
              "name": "expirationMonth",
              "fullType": "long",
              "description": "Expiration month"
            },
            {
              "required": false,
              "paramType": "body",
              "dataType": "long",
              "fullType": "long",
              "name": "expirationYear",
              "description": "Expiration year"
            },
            {
              "description": "Registration ID",
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "registrationId",
              "fullType": "string"
            },
            {
              "dataType": "string",
              "required": false,
              "paramType": "body",
              "name": "formSessionId",
              "fullType": "string",
              "description": "Form Session ID"
            }
          ],
          "noAuthentication": false,
          "description": "Finalize one payment method registration",
          "responseType": "me.payment.method.PaymentMethod",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/finalize",
      "description": "Finalize one payment method registration"
    },
    {
      "operations": [
        {
          "httpMethod": "POST",
          "responseType": "me.payment.method.PaymentMethod",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "required": true,
              "paramType": "path",
              "name": "paymentMethodId",
              "fullType": "long",
              "description": "Payment method ID"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "name": "challenge",
              "description": "Challenge"
            }
          ],
          "description": "Challenge one payment method",
          "resellerOnly": false,
          "responseFullType": "me.payment.method.PaymentMethod"
        }
      ],
      "path": "/me/payment/method/{paymentMethodId}/challenge",
      "description": "Challenge your payment method"
    },
    {
      "operations": [
        {
          "responseFullType": "me.payment.method.AvailablePaymentMethod[]",
          "resellerOnly": false,
          "description": "Retrieve available payment method",
          "parameters": [],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "me.payment.method.AvailablePaymentMethod[]"
        }
      ],
      "description": "Available payment methods",
      "path": "/me/payment/availableMethods"
    },
    {
      "path": "/me/consent/{campaignName}/decision",
      "description": "Get decision value for a consent campaign",
      "operations": [
        {
          "responseFullType": "me.consent.Consent",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseType": "me.consent.Consent",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "name": "campaignName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "Consent campaign name"
            }
          ],
          "noAuthentication": false,
          "description": "Get decision value for a consent campaign"
        },
        {
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "campaignName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "Consent campaign name"
            },
            {
              "required": true,
              "paramType": "body",
              "dataType": "boolean",
              "fullType": "boolean",
              "name": "value",
              "description": "Decision value"
            }
          ],
          "description": "Update decision of a consent campaign",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "name": "campaignName",
              "fullType": "string",
              "dataType": "string",
              "paramType": "path",
              "required": true,
              "description": "Consent campaign name"
            }
          ],
          "description": "Retrieve information about a consent campaign",
          "responseType": "me.consent.Campaign",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "resellerOnly": false,
          "responseFullType": "me.consent.Campaign"
        }
      ],
      "description": "Retrieve information about a consent campaign",
      "path": "/me/consent/{campaignName}"
    },
    {
      "path": "/me/consent",
      "description": "List all consent campaign available",
      "operations": [
        {
          "resellerOnly": false,
          "responseFullType": "me.consent.Campaign[]",
          "description": "List all consent campaign available",
          "parameters": [],
          "noAuthentication": false,
          "httpMethod": "GET",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "me.consent.Campaign[]"
        }
      ]
    },
    {
      "path": "/me/agreements",
      "description": "List the agreements.ContractAgreement objects",
      "operations": [
        {
          "responseFullType": "long[]",
          "resellerOnly": false,
          "httpMethod": "GET",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "fullType": "agreements.AgreementStateEnum",
              "name": "agreed",
              "paramType": "query",
              "required": false,
              "dataType": "agreements.AgreementStateEnum",
              "description": "Filter the value of agreed property (like)"
            },
            {
              "name": "contractId",
              "fullType": "long",
              "dataType": "long",
              "paramType": "query",
              "required": false,
              "description": "Filter the value of contractId property (like)"
            }
          ],
          "description": "List of contracts signed between you and OVH"
        }
      ]
    },
    {
      "path": "/me/agreements/{id}",
      "description": "Contract agreement",
      "operations": [
        {
          "responseType": "agreements.ContractAgreement",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id",
              "description": "Id of the contract"
            }
          ],
          "description": "Get this object properties",
          "resellerOnly": false,
          "responseFullType": "agreements.ContractAgreement"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "string",
          "resellerOnly": false,
          "httpMethod": "POST",
          "responseType": "string",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "noAuthentication": false,
          "parameters": [
            {
              "name": "id",
              "fullType": "long",
              "dataType": "long",
              "paramType": "path",
              "required": true,
              "description": "Id of the contract"
            }
          ],
          "description": "Accept this contract"
        }
      ],
      "path": "/me/agreements/{id}/accept",
      "description": "accept operations"
    },
    {
      "description": "Contract of service",
      "path": "/me/agreements/{id}/contract",
      "operations": [
        {
          "parameters": [
            {
              "required": true,
              "paramType": "path",
              "dataType": "long",
              "fullType": "long",
              "name": "id",
              "description": "Id of the contract"
            }
          ],
          "noAuthentication": false,
          "description": "Get this object properties",
          "httpMethod": "GET",
          "responseType": "agreements.Contract",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "agreements.Contract"
        }
      ]
    },
    {
      "operations": [
        {
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "parameters": [],
          "noAuthentication": false,
          "description": "Initiate a password change procedure",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "description": "changePassword operations",
      "path": "/me/changePassword"
    }
  ],
  "models": {
    "billing.Deposit": {
      "namespace": "billing",
      "properties": {
        "orderId": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "description": null,
          "readOnly": true
        },
        "paymentInfo": {
          "description": null,
          "readOnly": true,
          "type": "debt.associatedObject.PaymentInfo",
          "fullType": "debt.associatedObject.PaymentInfo",
          "canBeNull": true
        },
        "depositId": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": null
        },
        "amount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "description": null,
          "readOnly": true
        },
        "password": {
          "description": null,
          "readOnly": true,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "date": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime"
        },
        "pdfUrl": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        }
      },
      "description": "Details about a deposit",
      "id": "Deposit"
    },
    "api.Credential": {
      "namespace": "api",
      "description": "API Credential",
      "id": "Credential",
      "properties": {
        "lastUse": {
          "readOnly": true,
          "description": null,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true
        },
        "status": {
          "type": "auth.CredentialStateEnum",
          "fullType": "auth.CredentialStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": null
        },
        "expiration": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "description": null,
          "readOnly": true
        },
        "allowedIPs": {
          "readOnly": false,
          "description": "If defined, list of ip blocks which are allowed to call API with this credential",
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true
        },
        "applicationId": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "readOnly": true,
          "description": null
        },
        "rules": {
          "canBeNull": false,
          "fullType": "auth.AccessRule[]",
          "type": "auth.AccessRule[]",
          "description": null,
          "readOnly": true
        },
        "creation": {
          "description": null,
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        },
        "ovhSupport": {
          "readOnly": true,
          "description": "States whether this credential has been created by yourself or by the OVH support team",
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean"
        },
        "credentialId": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "description": null,
          "readOnly": true
        }
      }
    },
    "debt.associatedObject.PaymentInfo": {
      "namespace": "debt.associatedObject",
      "id": "PaymentInfo",
      "description": "The payment infos linked to this debt entry",
      "properties": {
        "paymentType": {
          "description": "Payment mean used for this debt operation",
          "type": "billing.PaymentMeanEnum",
          "canBeNull": false
        },
        "publicLabel": {
          "canBeNull": true,
          "type": "string",
          "description": "Public payment mean label"
        },
        "description": {
          "description": "Optional customer description",
          "canBeNull": true,
          "type": "string"
        }
      }
    },
    "http.MethodEnum": {
      "enumType": "string",
      "id": "MethodEnum",
      "description": "All HTTP methods available",
      "enum": [
        "DELETE",
        "GET",
        "POST",
        "PUT"
      ],
      "namespace": "http"
    },
    "nichandle.emailChange.Task": {
      "namespace": "nichandle.emailChange",
      "properties": {
        "dateDone": {
          "readOnly": true,
          "description": "End date of that request",
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true
        },
        "newEmail": {
          "description": "The email address to change for",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "state": {
          "type": "nichandle.changeEmail.TaskStateEnum",
          "fullType": "nichandle.changeEmail.TaskStateEnum",
          "canBeNull": false,
          "description": "Current state of the request",
          "readOnly": true
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "readOnly": true,
          "description": null
        },
        "dateRequest": {
          "description": "Creation date of that request",
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        }
      },
      "id": "Task",
      "description": "Task running an email change on an account"
    },
    "debt.entry.StatusEnum": {
      "namespace": "debt.entry",
      "enum": [
        "CANCELLED",
        "DONE",
        "FAILED",
        "PAID",
        "PENDING",
        "TODO"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "description": "All status a debt entry can be in"
    },
    "nichandle.LanguageEnum": {
      "namespace": "nichandle",
      "description": "Languages a nichandle can choose",
      "id": "LanguageEnum",
      "enumType": "string",
      "enum": [
        "cs_CZ",
        "de_DE",
        "en_AU",
        "en_CA",
        "en_GB",
        "en_IE",
        "en_US",
        "es_ES",
        "fi_FI",
        "fr_CA",
        "fr_FR",
        "fr_MA",
        "fr_SN",
        "fr_TN",
        "it_IT",
        "lt_LT",
        "nl_NL",
        "pl_PL",
        "pt_PT"
      ]
    },
    "nichandle.accessRestriction.SmsAccount": {
      "properties": {
        "id": {
          "type": "long",
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "description": "The Id of the restriction"
        },
        "description": {
          "readOnly": false,
          "description": "Description of this phone",
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "lastUsedDate": {
          "fullType": "datetime",
          "canBeNull": true,
          "type": "datetime",
          "readOnly": true,
          "description": "Last used date"
        },
        "creationDate": {
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "readOnly": true,
          "description": "Creation date"
        },
        "phoneNumber": {
          "readOnly": true,
          "description": "Associated phone number",
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "status": {
          "fullType": "nichandle.accessRestriction.SmsStatusEnum",
          "canBeNull": false,
          "type": "nichandle.accessRestriction.SmsStatusEnum",
          "readOnly": true,
          "description": "Status of this account"
        }
      },
      "id": "SmsAccount",
      "description": "Sms Two-Factor Authentication",
      "namespace": "nichandle.accessRestriction"
    },
    "billing.paymentMethod.PaymentSubTypeEnum": {
      "namespace": "billing.paymentMethod",
      "enum": [
        "AMERICAN_EXPRESS",
        "MASTERCARD",
        "VISA"
      ],
      "description": "List of payment sub type enum",
      "id": "PaymentSubTypeEnum",
      "enumType": "string"
    },
    "billing.PaymentMethod": {
      "properties": {
        "creationDate": {
          "description": "Creation date of the payment method",
          "canBeNull": false,
          "type": "date"
        },
        "default": {
          "description": "Is this payment method set as the default one",
          "canBeNull": true,
          "type": "boolean"
        },
        "status": {
          "description": "Payment method status enum",
          "type": "billing.paymentMethod.StatusEnum",
          "canBeNull": false
        },
        "paymentType": {
          "type": "billing.paymentMethod.PaymentTypeEnum",
          "canBeNull": false,
          "description": "Payment type"
        },
        "publicLabel": {
          "canBeNull": false,
          "type": "string",
          "description": "Public payment method label"
        },
        "description": {
          "description": "Customer personalized description",
          "canBeNull": false,
          "type": "string"
        },
        "id": {
          "description": "Payment method id",
          "canBeNull": false,
          "type": "long"
        },
        "paymentSubType": {
          "description": "Payment sub type",
          "type": "billing.paymentMethod.PaymentSubTypeEnum",
          "canBeNull": true
        },
        "billingContactId": {
          "type": "long",
          "canBeNull": false,
          "description": "Billing contact ID"
        }
      },
      "description": "Available payment methods",
      "id": "PaymentMethod",
      "namespace": "billing"
    },
    "me.consent.CampaignTypeEnum": {
      "namespace": "me.consent",
      "enum": [
        "OPTIN",
        "OPTOUT"
      ],
      "enumType": "string",
      "id": "CampaignTypeEnum",
      "description": "Campaign type"
    },
    "nichandle.accessRestriction.TOTPSecret": {
      "properties": {
        "id": {
          "type": "long",
          "canBeNull": false,
          "description": null
        },
        "qrcodeHelper": {
          "type": "password",
          "canBeNull": false,
          "description": null
        },
        "secret": {
          "description": null,
          "canBeNull": false,
          "type": "password"
        }
      },
      "id": "TOTPSecret",
      "description": "Describe TOTP secret keys",
      "namespace": "nichandle.accessRestriction"
    },
    "billing.order.paymentMean.HttpParameterChoice": {
      "properties": {
        "value": {
          "description": null,
          "type": "string",
          "canBeNull": false
        },
        "name": {
          "description": null,
          "type": "string",
          "canBeNull": false
        }
      },
      "id": "HttpParameterChoice",
      "description": "Choice for an HTTP multi value parameter",
      "namespace": "billing.order.paymentMean"
    },
    "nichandle.changeContact.ContactTypeEnum": {
      "namespace": "nichandle.changeContact",
      "enum": [
        "contactAdmin",
        "contactBilling",
        "contactTech"
      ],
      "id": "ContactTypeEnum",
      "description": "Allowed types of contact who can be changed by change contact task",
      "enumType": "string"
    },
    "billing.ItemDetail.OrderPlanProduct": {
      "namespace": "billing.ItemDetail",
      "description": "Product data from order",
      "id": "OrderPlanProduct",
      "properties": {
        "name": {
          "description": "Name of the product used when ordering through /order/cart",
          "canBeNull": true,
          "type": "string"
        }
      }
    },
    "contact.FieldInformation": {
      "namespace": "contact",
      "properties": {
        "fieldName": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "description": "Name of the field concerned by restrictions",
          "readOnly": false
        },
        "readOnly": {
          "description": "Indicates if the field can't be edited",
          "readOnly": false,
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false
        },
        "mandatory": {
          "readOnly": false,
          "description": "Indicates if the field is mandatory when editing",
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean"
        }
      },
      "id": "FieldInformation",
      "description": "Extras informations about a field"
    },
    "billing.voucherAccount.OperationEnum": {
      "namespace": "billing.voucherAccount",
      "description": "Operations a voucher account movement can represent",
      "id": "OperationEnum",
      "enumType": "string",
      "enum": [
        "cancel-credit",
        "cancel-debit",
        "cancel-pre-debit",
        "credit",
        "debit",
        "pre-credit",
        "pre-debit"
      ]
    },
    "debt.Operation": {
      "properties": {
        "amount": {
          "description": "Amount of the operation",
          "readOnly": true,
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false
        },
        "status": {
          "readOnly": true,
          "description": "Status of the operation",
          "type": "debt.entry.StatusEnum",
          "fullType": "debt.entry.StatusEnum",
          "canBeNull": false
        },
        "type": {
          "canBeNull": true,
          "fullType": "debt.entry.OperationEnum",
          "type": "debt.entry.OperationEnum",
          "description": "Type of movement this operation represents",
          "readOnly": true
        },
        "date": {
          "description": "Date the operation took place on",
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        },
        "operationId": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "depositOrderId": {
          "readOnly": true,
          "description": "Order id associated to the deposit",
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        }
      },
      "description": "Operation that happend on a debt",
      "id": "Operation",
      "namespace": "debt"
    },
    "billing.order.PaymentMean": {
      "namespace": "billing.order",
      "description": "All data needed to use a payment mean",
      "id": "PaymentMean",
      "properties": {
        "parameters": {
          "type": "billing.order.paymentMean.HttpParameter[]",
          "canBeNull": false,
          "description": null
        },
        "url": {
          "type": "string",
          "canBeNull": false,
          "description": null
        },
        "subType": {
          "canBeNull": true,
          "type": "string",
          "description": null
        },
        "htmlForm": {
          "description": null,
          "canBeNull": true,
          "type": "text"
        },
        "httpMethod": {
          "description": null,
          "type": "string",
          "canBeNull": false
        },
        "fee": {
          "canBeNull": false,
          "type": "double",
          "description": null
        },
        "logo": {
          "description": null,
          "canBeNull": true,
          "type": "string"
        }
      }
    },
    "nichandle.emailNotification": {
      "id": "emailNotification",
      "description": "Email notification",
      "properties": {
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime",
          "readOnly": true,
          "description": "This email date"
        },
        "subject": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "This email subject"
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "description": "This email Id",
          "readOnly": true
        },
        "body": {
          "readOnly": true,
          "description": "This email body",
          "type": "text",
          "fullType": "text",
          "canBeNull": false
        }
      },
      "namespace": "nichandle"
    },
    "nichandle.accessRestriction.U2FRegisterChallenge": {
      "properties": {
        "request": {
          "description": null,
          "type": "nichandle.accessRestriction.U2FRegistrationRequest",
          "canBeNull": false
        },
        "id": {
          "description": null,
          "canBeNull": false,
          "type": "long"
        },
        "applicationId": {
          "canBeNull": false,
          "type": "string",
          "description": null
        }
      },
      "description": "U2F Register Request",
      "id": "U2FRegisterChallenge",
      "namespace": "nichandle.accessRestriction"
    },
    "billing.order.PayWithPaymentMethod": {
      "namespace": "billing.order",
      "properties": {
        "id": {
          "description": "ID of payment method for pay this order",
          "canBeNull": false,
          "type": "long"
        }
      },
      "description": "Pay with payment method parameter",
      "id": "PayWithPaymentMethod"
    },
    "billing.ItemDetail": {
      "description": "Extensions of a detail",
      "id": "ItemDetail",
      "properties": {
        "order": {
          "fullType": "billing.ItemDetail.Order",
          "canBeNull": false,
          "type": "billing.ItemDetail.Order",
          "description": null,
          "readOnly": true
        }
      },
      "namespace": "billing"
    },
    "nichandle.DomainTask": {
      "properties": {
        "canCancel": {
          "readOnly": true,
          "description": "Can cancel the task",
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "status": {
          "type": "domain.OperationStatusEnum",
          "canBeNull": false,
          "fullType": "domain.OperationStatusEnum",
          "readOnly": true,
          "description": "Status of the task"
        },
        "canAccelerate": {
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "description": "Can accelerate the task",
          "readOnly": true
        },
        "doneDate": {
          "fullType": "datetime",
          "canBeNull": true,
          "type": "datetime",
          "description": "Done date of the task",
          "readOnly": true
        },
        "function": {
          "fullType": "domain.NicOperationFunctionEnum",
          "canBeNull": false,
          "type": "domain.NicOperationFunctionEnum",
          "description": "Function of the task",
          "readOnly": true
        },
        "creationDate": {
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "readOnly": true,
          "description": "Creation date of the task"
        },
        "comment": {
          "description": "Comment about the task",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "domain": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "readOnly": true,
          "description": "Domain of the task"
        },
        "lastUpdate": {
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime",
          "description": "Last update date of the task",
          "readOnly": true
        },
        "id": {
          "fullType": "long",
          "canBeNull": false,
          "type": "long",
          "description": "Id of the task",
          "readOnly": true
        },
        "todoDate": {
          "readOnly": true,
          "description": "Todo date of the task",
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime"
        },
        "canRelaunch": {
          "description": "Can relaunch the task",
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "description": "Domain tasks",
      "id": "DomainTask",
      "namespace": "nichandle"
    },
    "complexType.SafeKeyValue<T>": {
      "namespace": "complexType",
      "properties": {
        "key": {
          "type": "string",
          "canBeNull": false,
          "description": null
        },
        "value": {
          "description": null,
          "canBeNull": false,
          "type": "T"
        }
      },
      "generics": [
        "T"
      ],
      "id": "SafeKeyValue",
      "description": "Key and value, with proper key strings"
    },
    "nichandle.IpRestrictionDefaultRule": {
      "namespace": "nichandle",
      "id": "IpRestrictionDefaultRule",
      "description": "IP Restriction default rule",
      "properties": {
        "warning": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "description": "Send an email if someone try to access",
          "readOnly": false
        },
        "rule": {
          "type": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Accept or deny access"
        }
      }
    },
    "billing.ReusablePaymentMeanEnum": {
      "namespace": "billing",
      "enumType": "string",
      "id": "ReusablePaymentMeanEnum",
      "description": "Reusable payment mean type",
      "enum": [
        "CREDIT_CARD",
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL",
        "bankAccount",
        "creditCard",
        "fidelityAccount",
        "ovhAccount",
        "paypal"
      ]
    },
    "domain.DocumentFormatsEnum": {
      "enum": [
        "gif",
        "jpeg",
        "jpg",
        "pdf",
        "png"
      ],
      "enumType": "string",
      "id": "DocumentFormatsEnum",
      "description": "Document file format",
      "namespace": "domain"
    },
    "me.payment.method.CallbackUrl": {
      "namespace": "me.payment.method",
      "properties": {
        "pending": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "readOnly": false,
          "description": "URL when payment method is in validation"
        },
        "failure": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": "URL when registration failed",
          "readOnly": false
        },
        "error": {
          "description": "URL when registration encounters an error",
          "readOnly": false,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "cancel": {
          "description": "URL when customer cancels the action",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "success": {
          "readOnly": false,
          "description": "URL when payment method registration success",
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        }
      },
      "id": "CallbackUrl",
      "description": "Callback URL's to register a new payment method"
    },
    "nichandle.ipxe": {
      "namespace": "nichandle",
      "properties": {
        "name": {
          "readOnly": true,
          "description": "Name of this script",
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "script": {
          "fullType": "text",
          "canBeNull": false,
          "type": "text",
          "description": "Content of your IPXE script",
          "readOnly": true
        }
      },
      "id": "ipxe",
      "description": "Customer IPXE scripts"
    },
    "billing.order.PaymentMeans": {
      "id": "PaymentMeans",
      "description": "TODO",
      "properties": {
        "creditCard": {
          "description": null,
          "canBeNull": true,
          "type": "billing.order.PaymentMean[]"
        },
        "edinar": {
          "description": null,
          "canBeNull": true,
          "type": "billing.order.PaymentMean[]"
        },
        "ovhAccount": {
          "description": null,
          "canBeNull": true,
          "type": "billing.order.PaymentMean[]"
        },
        "multibanco": {
          "description": null,
          "canBeNull": true,
          "type": "billing.order.PaymentMean[]"
        },
        "paypal": {
          "type": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "description": null
        },
        "ideal": {
          "canBeNull": true,
          "type": "billing.order.PaymentMean[]",
          "description": null
        },
        "promotion": {
          "type": "billing.order.PaymentMean[]",
          "canBeNull": true,
          "description": null
        },
        "fidelityPoints": {
          "description": null,
          "type": "billing.order.PaymentMean[]",
          "canBeNull": true
        }
      },
      "namespace": "billing.order"
    },
    "payment.method.Icon": {
      "namespace": "payment.method",
      "description": "Payment icon",
      "id": "Icon",
      "properties": {
        "data": {
          "canBeNull": true,
          "type": "string",
          "description": "Icon data in base64"
        },
        "name": {
          "description": "Icon name",
          "type": "string",
          "canBeNull": true
        }
      }
    },
    "nichandle.accessRestriction.SmsCode": {
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "challenge": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        }
      },
      "id": "SmsCode",
      "description": "Send secret code"
    },
    "billing.CreditCardStateEnum": {
      "enumType": "string",
      "description": "State of you credit card",
      "id": "CreditCardStateEnum",
      "enum": [
        "expired",
        "tooManyFailures",
        "valid"
      ],
      "namespace": "billing"
    },
    "order.Price": {
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "type": "order.CurrencyCodeEnum",
          "canBeNull": false,
          "description": null
        },
        "value": {
          "canBeNull": false,
          "type": "double",
          "description": null
        },
        "text": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        }
      },
      "description": "Price with it's currency and textual representation",
      "id": "Price"
    },
    "api.Application": {
      "description": "API Application",
      "id": "Application",
      "properties": {
        "applicationId": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "description": null,
          "readOnly": true
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "readOnly": true,
          "description": null
        },
        "applicationKey": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "description": null,
          "readOnly": true
        },
        "status": {
          "canBeNull": false,
          "fullType": "api.ApplicationStatusEnum",
          "type": "api.ApplicationStatusEnum",
          "description": null,
          "readOnly": true
        }
      },
      "namespace": "api"
    },
    "nichandle.DomainTaskArgument": {
      "id": "DomainTaskArgument",
      "description": "Domain operation argument",
      "properties": {
        "minimumSize": {
          "type": "long",
          "canBeNull": true,
          "fullType": "long",
          "description": "Minimum of the content length that you can send",
          "readOnly": true
        },
        "key": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "description": "Key of the argument",
          "readOnly": true
        },
        "value": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "description": "Value of the argument",
          "readOnly": false
        },
        "acceptedValues": {
          "description": "List of accepted values",
          "readOnly": true,
          "fullType": "string[]",
          "canBeNull": true,
          "type": "string[]"
        },
        "description": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "description": "Description of the argument",
          "readOnly": true
        },
        "readOnly": {
          "readOnly": true,
          "description": "True if the argument is in read only",
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean"
        },
        "template": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "readOnly": true,
          "description": "Template of the content"
        },
        "fields": {
          "fullType": "xander.ContactFieldEnum[]",
          "canBeNull": true,
          "type": "xander.ContactFieldEnum[]",
          "description": "List of impacted field names",
          "readOnly": true
        },
        "acceptedFormats": {
          "type": "domain.DocumentFormatsEnum[]",
          "canBeNull": true,
          "fullType": "domain.DocumentFormatsEnum[]",
          "readOnly": true,
          "description": "List of accepted formats"
        },
        "type": {
          "description": "Type of the argument",
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "maximumSize": {
          "readOnly": true,
          "description": "Maximum of the content length that you can send",
          "fullType": "long",
          "canBeNull": true,
          "type": "long"
        }
      },
      "namespace": "nichandle"
    },
    "nichandle.UserStatus": {
      "namespace": "nichandle",
      "enumType": "string",
      "description": "Status of a User",
      "id": "UserStatus",
      "enum": [
        "OK",
        "DISABLED",
        "PASSWORD_CHANGE_REQUIRED"
      ]
    },
    "order.CurrencyCodeEnum": {
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
      "enumType": "string",
      "description": "",
      "id": "CurrencyCodeEnum"
    },
    "coreTypes.ContinentEnum": {
      "enum": [
        "africa",
        "antartica",
        "asia",
        "europe",
        "north-america",
        "oceania",
        "south-america"
      ],
      "description": "Continents",
      "id": "ContinentEnum",
      "enumType": "string",
      "namespace": "coreTypes"
    },
    "domain.NicOperationFunctionEnum": {
      "description": "Operation functions",
      "id": "NicOperationFunctionEnum",
      "enumType": "string",
      "enum": [
        "ContactControl",
        "DnsAnycastActivate",
        "DnsAnycastDeactivate",
        "DnssecDisable",
        "DnssecEnable",
        "DnssecResigning",
        "DnssecRollKsk",
        "DnssecRollZsk",
        "DomainContactControl",
        "DomainContactUpdate",
        "DomainControl",
        "DomainCreate",
        "DomainDelete",
        "DomainDnsUpdate",
        "DomainDsUpdate",
        "DomainHold",
        "DomainHostCreate",
        "DomainHostDelete",
        "DomainHostUpdate",
        "DomainIncomingTransfer",
        "DomainLock",
        "DomainOutgoingTransfer",
        "DomainRenew",
        "DomainRestore",
        "DomainTrade",
        "ZoneImport"
      ],
      "namespace": "domain"
    },
    "billing.SlaOperation": {
      "properties": {
        "date": {
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime",
          "description": "Date of the event that led to SLA",
          "readOnly": true
        },
        "name": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": "Sla operation name",
          "readOnly": true
        },
        "endDate": {
          "readOnly": true,
          "description": "Date of the end of the SLA",
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime"
        },
        "id": {
          "type": "long",
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "description": "SLA identifier"
        },
        "description": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "description": "Description of the SLA operation for this incident"
        },
        "startDate": {
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime",
          "description": "Date of the start of the SLA",
          "readOnly": true
        }
      },
      "id": "SlaOperation",
      "description": "SLA properties",
      "namespace": "billing"
    },
    "nichandle.SubAccount": {
      "properties": {
        "description": {
          "description": "This sub-account description",
          "readOnly": false,
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "id": {
          "readOnly": true,
          "description": "This sub-account id",
          "fullType": "long",
          "canBeNull": false,
          "type": "long"
        },
        "creationDate": {
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "readOnly": true,
          "description": "Creation date"
        }
      },
      "id": "SubAccount",
      "description": "Sub Account",
      "namespace": "nichandle"
    },
    "contact.Address": {
      "namespace": "contact",
      "description": "Representation of an Address",
      "id": "Address",
      "properties": {
        "otherDetails": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "description": "Others details",
          "readOnly": false
        },
        "line3": {
          "readOnly": false,
          "description": "Third line of the address",
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "line1": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": "First line of the address",
          "readOnly": false
        },
        "city": {
          "description": "City",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "province": {
          "description": "Province name",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "country": {
          "type": "nichandle.CountryEnum",
          "canBeNull": false,
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "description": "Country"
        },
        "zip": {
          "readOnly": false,
          "description": "Zipcode",
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "line2": {
          "readOnly": false,
          "description": "Second line of the address",
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        }
      }
    },
    "billing.PaymentMeanValidation": {
      "properties": {
        "url": {
          "type": "string",
          "canBeNull": false,
          "description": null
        },
        "validationType": {
          "type": "billing.PaymentMeanValidationType",
          "canBeNull": false,
          "description": null
        },
        "submitUrl": {
          "type": "string",
          "canBeNull": true,
          "description": null
        },
        "id": {
          "canBeNull": false,
          "type": "long",
          "description": null
        }
      },
      "description": "A validation required to add a payment mean",
      "id": "PaymentMeanValidation",
      "namespace": "billing"
    },
    "billing.order.followUp.StepEnum": {
      "enum": [
        "AVAILABLE",
        "DELIVERING",
        "VALIDATED",
        "VALIDATING"
      ],
      "enumType": "string",
      "id": "StepEnum",
      "description": "Status of order follow-up",
      "namespace": "billing.order.followUp"
    },
    "billing.ArchiveTypeEnum": {
      "namespace": "billing",
      "enum": [
        "csv",
        "zip"
      ],
      "enumType": "string",
      "description": "List of available archive types",
      "id": "ArchiveTypeEnum"
    },
    "billing.WithdrawalDetail": {
      "namespace": "billing",
      "properties": {
        "withdrawalDetailId": {
          "readOnly": true,
          "description": null,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "description": null,
          "readOnly": true
        },
        "unitPrice": {
          "readOnly": true,
          "description": null,
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false
        },
        "quantity": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "description": null,
          "readOnly": true
        },
        "description": {
          "description": null,
          "readOnly": true,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "totalPrice": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price"
        }
      },
      "description": "Information about a Withdrawal entry",
      "id": "WithdrawalDetail"
    },
    "me.payment.method.AvailablePaymentMethod": {
      "namespace": "me.payment.method",
      "properties": {
        "registerableWithTransaction": {
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
          "readOnly": false
        },
        "registerable": {
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "description": "Payment method type is registerable ?",
          "readOnly": false
        },
        "paymentType": {
          "readOnly": false,
          "description": "Payment method type",
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "integration": {
          "description": "Payment method integration type",
          "readOnly": false,
          "type": "payment.method.IntegrationType",
          "canBeNull": false,
          "fullType": "payment.method.IntegrationType"
        },
        "icon": {
          "type": "me.payment.method.Icon",
          "canBeNull": false,
          "fullType": "me.payment.method.Icon",
          "description": "Payment method type icon",
          "readOnly": false
        },
        "oneshot": {
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "description": "Payment method type is possible to pay in oneshot mode ?"
        }
      },
      "id": "AvailablePaymentMethod",
      "description": "Available payment method object"
    },
    "billing.FidelityMovement": {
      "properties": {
        "operation": {
          "readOnly": true,
          "description": null,
          "canBeNull": false,
          "fullType": "billing.fidelityAccount.OperationEnum",
          "type": "billing.fidelityAccount.OperationEnum"
        },
        "previousBalance": {
          "description": null,
          "readOnly": true,
          "type": "long",
          "fullType": "long",
          "canBeNull": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": null
        },
        "movementId": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "fullType": "long",
          "canBeNull": false
        },
        "order": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "fullType": "long",
          "canBeNull": false
        },
        "balance": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "fullType": "long",
          "canBeNull": false
        },
        "amount": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": null
        }
      },
      "description": "Details about a fidelity account",
      "id": "FidelityMovement",
      "namespace": "billing"
    },
    "billing.order.RetractionReasonEnum": {
      "namespace": "billing.order",
      "id": "RetractionReasonEnum",
      "description": "Retraction reason type",
      "enumType": "string",
      "enum": [
        "competitor",
        "difficulty",
        "expensive",
        "other",
        "performance",
        "reliability",
        "unused"
      ]
    },
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "generics": [
        "T"
      ],
      "description": "A numeric value tagged with its unit",
      "properties": {
        "value": {
          "description": null,
          "canBeNull": false,
          "type": "T"
        },
        "unit": {
          "canBeNull": false,
          "type": "string",
          "description": null
        }
      },
      "namespace": "complexType"
    },
    "billing.ItemDetail.OrderActionEnum": {
      "namespace": "billing.ItemDetail",
      "description": "List of order actions",
      "id": "OrderActionEnum",
      "enumType": "string",
      "enum": [
        "consumption",
        "installation",
        "renew",
        "upgrade"
      ]
    },
    "billing.BankAccount": {
      "properties": {
        "validationDocumentLink": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "fullType": "string",
          "canBeNull": true
        },
        "iban": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": null
        },
        "bic": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": null,
          "readOnly": true
        },
        "id": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "fullType": "long",
          "canBeNull": false
        },
        "description": {
          "canBeNull": true,
          "fullType": "string",
          "type": "string",
          "description": "Custom description of this account",
          "readOnly": false
        },
        "uniqueReference": {
          "description": null,
          "readOnly": true,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "icon": {
          "description": "Payment method type icon",
          "readOnly": true,
          "type": "billing.paymentMethod.IconData",
          "fullType": "billing.paymentMethod.IconData",
          "canBeNull": true
        },
        "mandateSignatureDate": {
          "description": null,
          "readOnly": true,
          "canBeNull": true,
          "fullType": "date",
          "type": "date"
        },
        "creationDate": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "date",
          "type": "date"
        },
        "defaultPaymentMean": {
          "description": null,
          "readOnly": true,
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false
        },
        "state": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "billing.BankAccountStateEnum",
          "type": "billing.BankAccountStateEnum"
        },
        "ownerName": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "ownerAddress": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        }
      },
      "description": "SEPA bank account info",
      "id": "BankAccount",
      "namespace": "billing"
    },
    "dedicated.installationTemplate.templatePartitions": {
      "namespace": "dedicated.installationTemplate",
      "id": "templatePartitions",
      "description": " Partitions defined in this partitioning scheme",
      "properties": {
        "filesystem": {
          "fullType": "dedicated.TemplateOsFileSystemEnum",
          "canBeNull": false,
          "type": "dedicated.TemplateOsFileSystemEnum",
          "readOnly": false,
          "description": "Partition filesytem"
        },
        "mountpoint": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "readOnly": false,
          "description": "partition mount point"
        },
        "type": {
          "description": null,
          "readOnly": false,
          "type": "dedicated.TemplatePartitionTypeEnum",
          "canBeNull": false,
          "fullType": "dedicated.TemplatePartitionTypeEnum"
        },
        "raid": {
          "description": "raid partition type",
          "readOnly": false,
          "fullType": "dedicated.server.PartitionRaidEnum",
          "canBeNull": true,
          "type": "dedicated.server.PartitionRaidEnum"
        },
        "size": {
          "type": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "description": "size of partition in Mb, 0 => rest of the space"
        },
        "volumeName": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "description": "The volume name needed for proxmox distribution",
          "readOnly": false
        },
        "order": {
          "type": "long",
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "description": "specifies the creation order of the partition on the disk"
        }
      }
    },
    "billing.order.followUp.StatusEnum": {
      "enum": [
        "DOING",
        "DONE",
        "ERROR",
        "TODO"
      ],
      "enumType": "string",
      "description": "Step status of order follow-up",
      "id": "StatusEnum",
      "namespace": "billing.order.followUp"
    },
    "debt.associatedObject.TypeEnum": {
      "id": "TypeEnum",
      "description": "Type of objects an order can be linked to",
      "enumType": "string",
      "enum": [
        "Bill",
        "DebtOperation",
        "Deposit",
        "Order",
        "OvhAccountMovement",
        "Refund",
        "Withdrawal"
      ],
      "namespace": "debt.associatedObject"
    },
    "nichandle.Authentication.Provider": {
      "properties": {
        "ssoServiceUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": "IdP's Single Sign On Service Url",
          "readOnly": true
        },
        "idpSigningCertificate": {
          "type": "nichandle.Authentication.Certificate",
          "fullType": "nichandle.Authentication.Certificate",
          "canBeNull": false,
          "readOnly": true,
          "description": "IdP's signing certificate"
        },
        "groupAttributeName": {
          "description": "SAML Group attribute name",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "description": "Last update of the identity provider",
          "readOnly": true
        },
        "creation": {
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime",
          "readOnly": true,
          "description": "Creation date of the identity provider"
        }
      },
      "id": "Provider",
      "description": "A SAML 2.0 provider",
      "namespace": "nichandle.Authentication"
    },
    "nichandle.accessRestriction.U2FSignRequest": {
      "description": "Describe U2F SignRequest",
      "id": "U2FSignRequest",
      "properties": {
        "challenge": {
          "description": null,
          "type": "string",
          "canBeNull": false
        },
        "version": {
          "description": null,
          "type": "string",
          "canBeNull": false
        },
        "keyHandle": {
          "description": null,
          "type": "string",
          "canBeNull": false
        }
      },
      "namespace": "nichandle.accessRestriction"
    },
    "api.ApplicationStatusEnum": {
      "enumType": "string",
      "id": "ApplicationStatusEnum",
      "description": "List of state of an Api Application",
      "enum": [
        "active",
        "blocked",
        "inactive",
        "trusted"
      ],
      "namespace": "api"
    },
    "nichandle.NichandleSmsNotification": {
      "id": "NichandleSmsNotification",
      "description": "SMS notifications",
      "properties": {
        "status": {
          "fullType": "nichandle.NotificationStatusEnum",
          "canBeNull": false,
          "type": "nichandle.NotificationStatusEnum",
          "description": "Status of your notification",
          "readOnly": true
        },
        "phoneNumber": {
          "description": "The phone number you want to receive notification on",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "updateDate": {
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime",
          "description": "Last update date",
          "readOnly": true
        },
        "creationDate": {
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime",
          "description": "Creation date",
          "readOnly": true
        },
        "abuse": {
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "description": "Receive notification for abuse reports",
          "readOnly": true
        }
      },
      "namespace": "nichandle"
    },
    "nichandle.StateEnum": {
      "namespace": "nichandle",
      "enumType": "string",
      "id": "StateEnum",
      "description": "States a nichandle can be in",
      "enum": [
        "complete",
        "incomplete"
      ]
    },
    "billing.FidelityAccount": {
      "namespace": "billing",
      "properties": {
        "balance": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "canBeNull": false,
          "fullType": "long"
        },
        "alertThreshold": {
          "fullType": "long",
          "canBeNull": true,
          "type": "long",
          "readOnly": false,
          "description": null
        },
        "canBeCredited": {
          "readOnly": true,
          "description": null,
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "openDate": {
          "readOnly": true,
          "description": null,
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime"
        },
        "lastUpdate": {
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "readOnly": true,
          "description": null
        }
      },
      "id": "FidelityAccount",
      "description": "Balance of the fidelity account"
    },
    "nichandle.accessRestriction.SOTPValidate": {
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "remainingCodes": {
          "description": null,
          "type": "long",
          "canBeNull": false
        }
      },
      "id": "SOTPValidate",
      "description": "Describe SOTP validation status"
    },
    "nichandle.Subscription": {
      "id": "Subscription",
      "description": "List of all OVH things you can subscribe to",
      "properties": {
        "registered": {
          "readOnly": false,
          "description": "Determine whether you are registered or not",
          "type": "boolean",
          "canBeNull": true,
          "fullType": "boolean"
        },
        "type": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "description": "The type of subscription",
          "readOnly": true
        }
      },
      "namespace": "nichandle"
    },
    "nichandle.document.Document": {
      "description": "List of documents added on your account",
      "id": "Document",
      "properties": {
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "readOnly": true,
          "description": "Document name"
        },
        "creationDate": {
          "description": "Document creation",
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        },
        "putUrl": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "readOnly": true,
          "description": "URL used to put document"
        },
        "getUrl": {
          "description": "URL used to get document",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "tags": {
          "canBeNull": false,
          "fullType": "complexType.SafeKeyValue<string>[]",
          "type": "complexType.SafeKeyValue<string>[]",
          "readOnly": true,
          "description": "Document tags"
        },
        "expirationDate": {
          "readOnly": false,
          "description": "Document expiration",
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true
        },
        "size": {
          "readOnly": true,
          "description": "Document size (in bytes)",
          "type": "long",
          "fullType": "long",
          "canBeNull": false
        },
        "id": {
          "readOnly": true,
          "description": "Document id",
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "validationDate": {
          "readOnly": true,
          "description": "Document validation",
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true
        }
      },
      "namespace": "nichandle.document"
    },
    "billing.CreditBalance": {
      "namespace": "billing",
      "id": "CreditBalance",
      "description": "Credit balance applied on an Order",
      "properties": {
        "amount": {
          "readOnly": true,
          "description": "Amount applied from the balance",
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false
        },
        "balanceName": {
          "readOnly": true,
          "description": "Credit balance name",
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        }
      }
    },
    "dedicated.TemplateOsFileSystemEnum": {
      "namespace": "dedicated",
      "description": "Filesystems available",
      "id": "TemplateOsFileSystemEnum",
      "enumType": "string",
      "enum": [
        "btrfs",
        "ext3",
        "ext4",
        "ntfs",
        "reiserfs",
        "swap",
        "ufs",
        "xfs",
        "zfs"
      ]
    },
    "dedicated.TemplateOsUsageEnum": {
      "enum": [
        "basic",
        "customer",
        "hosting",
        "other",
        "readyToUse",
        "virtualisation"
      ],
      "enumType": "string",
      "id": "TemplateOsUsageEnum",
      "description": "Os usage definition",
      "namespace": "dedicated"
    },
    "nichandle.accessRestriction.SOTPStatusEnum": {
      "namespace": "nichandle.accessRestriction",
      "enumType": "string",
      "description": "Status of SOTP account",
      "id": "SOTPStatusEnum",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ]
    },
    "debt.entry.OperationEnum": {
      "namespace": "debt.entry",
      "description": "All operations a debt entry can represent",
      "id": "OperationEnum",
      "enumType": "string",
      "enum": [
        "CANCEL",
        "CASH_MANUAL",
        "CHECK_MANUAL",
        "CREDITCARD",
        "CREDITCARD_AUTOMATIC",
        "CREDITCARD_MANUAL",
        "CREDIT_ACCOUNT_AUTOMATIC",
        "EDINAR_MANUAL",
        "IDEAL_MANUAL",
        "MULTIBANCO_MANUAL",
        "ORDER",
        "PAYPAL_AUTOMATIC",
        "PAYPAL_MANUAL",
        "PAYU_MANUAL",
        "RECOVERY_TRANSFER_AUTOMATIC",
        "REFUND",
        "REFUND_CHECK",
        "REFUND_CREDITCARD",
        "REFUND_CREDIT_ACCOUNT",
        "REFUND_LOSS",
        "REFUND_PAYPAL",
        "REFUND_PAYU",
        "REFUND_SEPA",
        "REFUND_TRANSFER",
        "REFUND_UNKNOWN",
        "SEPA_AUTOMATIC",
        "TRANSFER_MANUAL",
        "UNPAID_CHECK",
        "UNPAID_CREDITCARD",
        "UNPAID_CREDIT_ACCOUNT",
        "UNPAID_PAYPAL",
        "UNPAID_SEPA",
        "UNPAID_WITHDRAW",
        "WARRANT_MANUAL",
        "WITHDRAW_AUTOMATIC"
      ]
    },
    "nichandle.accessRestriction.U2FSignChallenge": {
      "properties": {
        "applicationId": {
          "canBeNull": false,
          "type": "string",
          "description": null
        },
        "request": {
          "description": null,
          "type": "nichandle.accessRestriction.U2FSignRequest",
          "canBeNull": false
        }
      },
      "description": "U2F Register Request",
      "id": "U2FSignChallenge",
      "namespace": "nichandle.accessRestriction"
    },
    "nichandle.DomainTaskProgressBar": {
      "namespace": "nichandle",
      "properties": {
        "followUpSteps": {
          "fullType": "domain.OperationStep[]",
          "canBeNull": true,
          "type": "domain.OperationStep[]",
          "readOnly": true,
          "description": "all the steps of operation"
        },
        "expectedDoneDate": {
          "fullType": "datetime",
          "canBeNull": true,
          "type": "datetime",
          "readOnly": true,
          "description": "The estimated end date of the task"
        },
        "taskActions": {
          "readOnly": true,
          "description": "Action possible on task",
          "type": "domain.OperationActionEnum[]",
          "canBeNull": false,
          "fullType": "domain.OperationActionEnum[]"
        },
        "progress": {
          "description": "Progress percentage of the task",
          "readOnly": true,
          "type": "long",
          "canBeNull": false,
          "fullType": "long"
        },
        "currentStep": {
          "readOnly": true,
          "description": "Current step of the operation",
          "fullType": "domain.OperationStep",
          "canBeNull": false,
          "type": "domain.OperationStep"
        },
        "taskStatus": {
          "fullType": "domain.OperationStatusEnum",
          "canBeNull": false,
          "type": "domain.OperationStatusEnum",
          "description": "The status of the task",
          "readOnly": true
        },
        "lastUpdateDate": {
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "description": "The last update date of the task"
        }
      },
      "id": "DomainTaskProgressBar",
      "description": "Domain operation progress"
    },
    "domain.OperationStatusEnum": {
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "description": "Operation status",
      "id": "OperationStatusEnum",
      "namespace": "domain"
    },
    "nichandle.sshKey": {
      "namespace": "nichandle",
      "id": "sshKey",
      "description": "Customer public SSH key, can be used for rescue netboot or server access after reinstallation",
      "properties": {
        "key": {
          "readOnly": true,
          "description": "ASCII encoded public SSH key",
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "keyName": {
          "readOnly": true,
          "description": "Name of this public SSH key",
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "default": {
          "readOnly": false,
          "description": "True when this public SSH key is used for rescue mode and reinstallations",
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean"
        }
      }
    },
    "dedicated.server.PartitionRaidEnum": {
      "description": "partition raid type",
      "id": "PartitionRaidEnum",
      "enumType": "string",
      "enum": [
        "0",
        "1",
        "10",
        "5",
        "6"
      ],
      "namespace": "dedicated.server"
    },
    "billing.Order": {
      "id": "Order",
      "description": "Details about an Order",
      "properties": {
        "password": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "readOnly": true,
          "description": null
        },
        "pdfUrl": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "readOnly": true,
          "description": null
        },
        "date": {
          "description": null,
          "readOnly": true,
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime"
        },
        "tax": {
          "description": null,
          "readOnly": true,
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false
        },
        "retractionDate": {
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime",
          "description": null,
          "readOnly": true
        },
        "url": {
          "description": null,
          "readOnly": true,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "priceWithoutTax": {
          "description": null,
          "readOnly": true,
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price"
        },
        "orderId": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "fullType": "long",
          "canBeNull": false
        },
        "priceWithTax": {
          "readOnly": true,
          "description": null,
          "type": "order.Price",
          "canBeNull": false,
          "fullType": "order.Price"
        },
        "expirationDate": {
          "canBeNull": true,
          "fullType": "datetime",
          "type": "datetime",
          "readOnly": true,
          "description": null
        }
      },
      "namespace": "billing"
    },
    "me.payment.method.Icon": {
      "namespace": "me.payment.method",
      "properties": {
        "name": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "description": "Icon name",
          "readOnly": false
        },
        "data": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "description": "Icon in base64",
          "readOnly": false
        }
      },
      "id": "Icon",
      "description": "Icon"
    },
    "coreTypes.CountryEnum": {
      "namespace": "coreTypes",
      "enumType": "string",
      "id": "CountryEnum",
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
      ]
    },
    "nichandle.DeveloperModeRestriction": {
      "properties": {
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Allow login on your account on a development version of the Manager"
        }
      },
      "description": "Login restrictions on a development version of the Manager",
      "id": "DeveloperModeRestriction",
      "namespace": "nichandle"
    },
    "billing.PaymentMeanEnum": {
      "id": "PaymentMeanEnum",
      "description": "All payment means you might have use on an OVH order",
      "enumType": "string",
      "enum": [
        "cash",
        "chargeback",
        "cheque",
        "creditAccount",
        "creditCard",
        "debtAccount",
        "deposit",
        "digitalLaunchPad",
        "edinar",
        "fidelityPoints",
        "free",
        "ideal",
        "incubatorAccount",
        "mandat",
        "multibanco",
        "none",
        "ovhAccount",
        "paymentMandate",
        "paypal",
        "payu",
        "platnosci",
        "refund",
        "transfer",
        "withdrawal"
      ],
      "namespace": "billing"
    },
    "dedicated.TemplateOsTypeEnum": {
      "namespace": "dedicated",
      "enumType": "string",
      "description": "Os type",
      "id": "TemplateOsTypeEnum",
      "enum": [
        "bsd",
        "linux",
        "solaris",
        "windows"
      ]
    },
    "nichandle.accessRestriction.U2FAccount": {
      "id": "U2FAccount",
      "description": "U2F Two-Factor Authentication",
      "properties": {
        "status": {
          "readOnly": true,
          "description": "Status of this account",
          "fullType": "nichandle.accessRestriction.U2FStatusEnum",
          "canBeNull": false,
          "type": "nichandle.accessRestriction.U2FStatusEnum"
        },
        "id": {
          "readOnly": true,
          "description": "The Id of the restriction",
          "type": "long",
          "canBeNull": false,
          "fullType": "long"
        },
        "description": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": "Description of this U2F key",
          "readOnly": false
        },
        "lastUsedDate": {
          "readOnly": true,
          "description": "Last used date",
          "fullType": "datetime",
          "canBeNull": true,
          "type": "datetime"
        },
        "creationDate": {
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "description": "Creation date",
          "readOnly": true
        }
      },
      "namespace": "nichandle.accessRestriction"
    },
    "nichandle.NicAutorenewInfos": {
      "properties": {
        "lastRenew": {
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "description": "give the last renew"
        },
        "active": {
          "description": "Renewal active or not",
          "readOnly": false,
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean"
        },
        "renewDay": {
          "description": "give the renewal day",
          "readOnly": false,
          "type": "long",
          "canBeNull": false,
          "fullType": "long"
        }
      },
      "id": "NicAutorenewInfos",
      "description": "Auto renewal information",
      "namespace": "nichandle"
    },
    "me.payment.method.PaymentMethod": {
      "properties": {
        "lastUpdate": {
          "readOnly": false,
          "description": "Last update date",
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime"
        },
        "label": {
          "description": "Payment method public label",
          "readOnly": false,
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        },
        "paymentMeanId": {
          "canBeNull": true,
          "fullType": "long",
          "type": "long",
          "description": "Payment mean ID associated to this payment method",
          "readOnly": false
        },
        "billingContactId": {
          "canBeNull": true,
          "fullType": "long",
          "type": "long",
          "readOnly": false,
          "description": "Associated billing contact ID"
        },
        "paymentSubType": {
          "description": "Payment method sub-type",
          "readOnly": false,
          "type": "string",
          "fullType": "string",
          "canBeNull": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "description": "Custom customer description",
          "readOnly": false
        },
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "description": "Expiration date",
          "readOnly": false
        },
        "icon": {
          "canBeNull": false,
          "fullType": "me.payment.method.Icon",
          "type": "me.payment.method.Icon",
          "description": "Payment method type icon",
          "readOnly": false
        },
        "paymentType": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "description": "Payment method type",
          "readOnly": false
        },
        "status": {
          "canBeNull": false,
          "fullType": "me.payment.method.PaymentMethod.Status",
          "type": "me.payment.method.PaymentMethod.Status",
          "description": "Payment method status",
          "readOnly": false
        },
        "default": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Creation date"
        },
        "paymentMethodId": {
          "readOnly": false,
          "description": "Payment method ID",
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "creationDate": {
          "readOnly": false,
          "description": "Creation date",
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        }
      },
      "id": "PaymentMethod",
      "description": "Payment method object",
      "namespace": "me.payment.method"
    },
    "billing.SlaOperationService": {
      "namespace": "billing",
      "description": "Describe all services impacted by SLA",
      "id": "SlaOperationService",
      "properties": {
        "slaPlan": {
          "canBeNull": false,
          "type": "string",
          "description": "SLA plan description"
        },
        "slaApplication": {
          "type": "string",
          "canBeNull": false,
          "description": "SLA plan application"
        },
        "description": {
          "canBeNull": false,
          "type": "string",
          "description": "Service description"
        },
        "serviceName": {
          "description": "Impacted service name",
          "canBeNull": false,
          "type": "string"
        }
      }
    },
    "billing.order.associatedObject.TypeEnum": {
      "namespace": "billing.order.associatedObject",
      "enumType": "string",
      "description": "Type of objects an order can be linked to",
      "id": "TypeEnum",
      "enum": [
        "Bill",
        "Deposit",
        "Refund",
        "Withdrawal"
      ]
    },
    "billing.CategoryEnum": {
      "namespace": "billing",
      "id": "CategoryEnum",
      "description": "Types of plans",
      "enumType": "string",
      "enum": [
        "autorenew",
        "earlyrenewal",
        "purchase",
        "purchase-cloud",
        "purchase-servers",
        "purchase-telecom",
        "purchase-web"
      ]
    },
    "me.payment.method.PaymentMethod.Status": {
      "namespace": "me.payment.method.PaymentMethod",
      "enum": [
        "CANCELED",
        "CANCELING",
        "CREATED",
        "ERROR",
        "EXPIRED",
        "CREATING",
        "MAINTENANCE",
        "PAUSED",
        "VALID"
      ],
      "id": "Status",
      "description": "Payment method status enum",
      "enumType": "string"
    },
    "dedicated.installationTemplate.templatePartitioningSchemes": {
      "description": "Partitioning schemes available on this template",
      "id": "templatePartitioningSchemes",
      "properties": {
        "name": {
          "readOnly": false,
          "description": "name of this partitioning scheme",
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "priority": {
          "type": "long",
          "canBeNull": false,
          "fullType": "long",
          "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
          "readOnly": false
        }
      },
      "namespace": "dedicated.installationTemplate"
    },
    "billing.DeferredPaymentAccount": {
      "properties": {
        "defaultPaymentMean": {
          "description": null,
          "readOnly": true,
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "creationDate": {
          "readOnly": true,
          "description": null,
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime"
        },
        "description": {
          "readOnly": false,
          "description": "Custom description of this account",
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "state": {
          "description": null,
          "readOnly": true,
          "type": "billing.DeferredPaymentAccountStatusEnum",
          "canBeNull": false,
          "fullType": "billing.DeferredPaymentAccountStatusEnum"
        },
        "id": {
          "readOnly": true,
          "description": null,
          "fullType": "long",
          "canBeNull": false,
          "type": "long"
        },
        "icon": {
          "readOnly": true,
          "description": "Payment method type icon",
          "type": "billing.paymentMethod.IconData",
          "canBeNull": true,
          "fullType": "billing.paymentMethod.IconData"
        },
        "label": {
          "readOnly": true,
          "description": "Deferred account type",
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        }
      },
      "id": "DeferredPaymentAccount",
      "description": "Deferred payment account info",
      "namespace": "billing"
    },
    "agreements.ContractAgreement": {
      "properties": {
        "agreed": {
          "readOnly": true,
          "description": "State of the agreement",
          "type": "agreements.AgreementStateEnum",
          "fullType": "agreements.AgreementStateEnum",
          "canBeNull": false
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date the agreed contract was effective"
        },
        "contractId": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "description": "Id of the agreed contract",
          "readOnly": true
        },
        "id": {
          "readOnly": true,
          "description": "Id of the contract",
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        }
      },
      "id": "ContractAgreement",
      "description": "Contract agreement",
      "namespace": "agreements"
    },
    "nichandle.Authentication.Certificate": {
      "namespace": "nichandle.Authentication",
      "description": "X509 Certificate",
      "id": "Certificate",
      "properties": {
        "expiration": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "description": "Certificate's expiration",
          "readOnly": true
        },
        "subject": {
          "description": "Certificate's subject",
          "readOnly": true,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        }
      }
    },
    "nichandle.NotificationStatusEnum": {
      "enum": [
        "ok",
        "waitingForValidation"
      ],
      "enumType": "string",
      "id": "NotificationStatusEnum",
      "description": "Status of your notification",
      "namespace": "nichandle"
    },
    "billing.order.OrderStatusEnum": {
      "namespace": "billing.order",
      "enumType": "string",
      "id": "OrderStatusEnum",
      "description": "All possible order status",
      "enum": [
        "cancelled",
        "cancelling",
        "checking",
        "delivered",
        "delivering",
        "documentsRequested",
        "notPaid",
        "unknown"
      ]
    },
    "debt.Debt": {
      "properties": {
        "orderId": {
          "readOnly": true,
          "description": "The order the debt relates to",
          "type": "long",
          "fullType": "long",
          "canBeNull": false
        },
        "dueDate": {
          "readOnly": true,
          "description": "If specified, the debt will not be recovered before that date",
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true
        },
        "unmaturedAmount": {
          "readOnly": true,
          "description": "Unmatured amount for deferred payment term",
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price"
        },
        "todoAmount": {
          "readOnly": true,
          "description": "Reserved amount awaiting payment",
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false
        },
        "dueAmount": {
          "readOnly": true,
          "description": "Amount you still owe for that debt",
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false
        },
        "status": {
          "description": "Status of a debt",
          "readOnly": true,
          "type": "debt.entry.StatusDebtOrderEnum",
          "fullType": "debt.entry.StatusDebtOrderEnum",
          "canBeNull": false
        },
        "amount": {
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price",
          "readOnly": true,
          "description": "Original amount of the debt"
        },
        "debtId": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime",
          "readOnly": true,
          "description": "Date the debt was created on"
        },
        "pendingAmount": {
          "description": "Amount currently being processed",
          "readOnly": true,
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false
        }
      },
      "id": "Debt",
      "description": "State of a debt",
      "namespace": "debt"
    },
    "billing.PaypalStateEnum": {
      "namespace": "billing",
      "enum": [
        "tooManyFailures",
        "valid"
      ],
      "enumType": "string",
      "description": "State of you paypal account",
      "id": "PaypalStateEnum"
    },
    "nichandle.changeContact.TaskStateEnum": {
      "enum": [
        "aborted",
        "checkValidity",
        "doing",
        "done",
        "error",
        "expired",
        "refused",
        "todo",
        "validatingByCustomers"
      ],
      "id": "TaskStateEnum",
      "description": "State of contact change task",
      "enumType": "string",
      "namespace": "nichandle.changeContact"
    },
    "nichandle.CountryEnum": {
      "namespace": "nichandle",
      "enumType": "string",
      "id": "CountryEnum",
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
      ]
    },
    "domain.OperationActionEnum": {
      "namespace": "domain",
      "enum": [
        "canCancel",
        "canCorrect",
        "canRelaunch",
        "canReset"
      ],
      "enumType": "string",
      "description": "operation Action",
      "id": "OperationActionEnum"
    },
    "billing.VoucherMovement": {
      "namespace": "billing",
      "description": "Details about a voucher account",
      "id": "VoucherMovement",
      "properties": {
        "balance": {
          "description": null,
          "readOnly": true,
          "type": "order.Price",
          "canBeNull": false,
          "fullType": "order.Price"
        },
        "order": {
          "fullType": "long",
          "canBeNull": false,
          "type": "long",
          "description": null,
          "readOnly": true
        },
        "amount": {
          "readOnly": true,
          "description": null,
          "type": "order.Price",
          "canBeNull": false,
          "fullType": "order.Price"
        },
        "date": {
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime",
          "description": null,
          "readOnly": true
        },
        "operation": {
          "readOnly": true,
          "description": null,
          "type": "billing.voucherAccount.OperationEnum",
          "canBeNull": false,
          "fullType": "billing.voucherAccount.OperationEnum"
        },
        "description": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "description": null
        },
        "previousBalance": {
          "readOnly": true,
          "description": null,
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price"
        },
        "movementId": {
          "readOnly": true,
          "description": null,
          "fullType": "long",
          "canBeNull": false,
          "type": "long"
        }
      }
    },
    "dedicated.TemplateOsProperties": {
      "properties": {
        "customHostname": {
          "type": "string",
          "canBeNull": true,
          "description": "Set up the server using the provided hostname instead of the default hostname"
        },
        "changeLog": {
          "canBeNull": true,
          "type": "text",
          "description": "Template change log details"
        },
        "sshKeyName": {
          "description": "Name of the ssh key that should be installed. Password login will be disabled",
          "type": "string",
          "canBeNull": true
        },
        "rating": {
          "type": "long",
          "canBeNull": true,
          "description": ""
        },
        "postInstallationScriptReturn": {
          "type": "string",
          "canBeNull": true,
          "description": "indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu"
        },
        "useDistributionKernel": {
          "canBeNull": true,
          "type": "boolean",
          "description": "Use the distribution's native kernel instead of the recommended OVH Kernel"
        },
        "postInstallationScriptLink": {
          "description": "Indicate the URL where your postinstall customisation script is located",
          "type": "string",
          "canBeNull": true
        }
      },
      "description": "A structure describing properties customizables about this dedicated installation template",
      "id": "TemplateOsProperties",
      "namespace": "dedicated"
    },
    "nichandle.accessRestriction.SOTPSecret": {
      "namespace": "nichandle.accessRestriction",
      "properties": {
        "codes": {
          "description": null,
          "type": "string[]",
          "canBeNull": false
        }
      },
      "description": "Describe SOTP secret keys",
      "id": "SOTPSecret"
    },
    "billing.order.paymentMean.HttpParameter": {
      "description": "Parameter to give to a payment page",
      "id": "HttpParameter",
      "properties": {
        "value": {
          "type": "string",
          "canBeNull": true,
          "description": null
        },
        "choice": {
          "type": "billing.order.paymentMean.HttpParameterChoice[]",
          "canBeNull": true,
          "description": null
        },
        "name": {
          "type": "string",
          "canBeNull": false,
          "description": null
        }
      },
      "namespace": "billing.order.paymentMean"
    },
    "billing.paymentMethod.PaymentTypeEnum": {
      "namespace": "billing.paymentMethod",
      "description": "List of payment type enum",
      "id": "PaymentTypeEnum",
      "enumType": "string",
      "enum": [
        "BANK_ACCOUNT",
        "CREDIT_CARD",
        "DEFERRED_PAYMENT_ACCOUNT",
        "ENTERPRISE",
        "INTERNAL_TRUSTED_ACCOUNT",
        "PAYPAL"
      ]
    },
    "nichandle.IpRegistryEnum": {
      "namespace": "nichandle",
      "id": "IpRegistryEnum",
      "description": "Ip registries",
      "enumType": "string",
      "enum": [
        "ARIN",
        "RIPE"
      ]
    },
    "billing.ItemDetail.Order": {
      "description": "Order data for this Detail",
      "id": "Order",
      "properties": {
        "action": {
          "canBeNull": true,
          "type": "billing.ItemDetail.OrderActionEnum",
          "description": "The meaning of this order detail"
        },
        "plan": {
          "description": "Plan from /order/cart",
          "type": "billing.ItemDetail.OrderPlan",
          "canBeNull": false
        },
        "configurations": {
          "type": "billing.ItemDetail.OrderConfiguration[]",
          "canBeNull": false,
          "description": "Configurations chosen during the order"
        }
      },
      "namespace": "billing.ItemDetail"
    },
    "nichandle.accessRestriction.SmsSecret": {
      "namespace": "nichandle.accessRestriction",
      "description": "Describe secret key",
      "id": "SmsSecret",
      "properties": {
        "remainingTry": {
          "description": null,
          "type": "long",
          "canBeNull": false
        },
        "id": {
          "canBeNull": false,
          "type": "long",
          "description": null
        }
      }
    },
    "nichandle.OvhSubsidiaryEnum": {
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
      "id": "OvhSubsidiaryEnum",
      "description": "OVH subsidiaries",
      "enumType": "string",
      "namespace": "nichandle"
    },
    "billing.DepositDetail": {
      "namespace": "billing",
      "description": "Information about a Deposit entry",
      "id": "DepositDetail",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": null,
          "readOnly": true
        },
        "totalPrice": {
          "readOnly": true,
          "description": null,
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false
        },
        "quantity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": null
        },
        "unitPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price",
          "readOnly": true,
          "description": null
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "readOnly": true,
          "description": null
        },
        "depositDetailId": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "readOnly": true,
          "description": null
        }
      }
    },
    "dedicated.TemplateOsHardwareRaidEnum": {
      "namespace": "dedicated",
      "enumType": "string",
      "description": "Hardware RAID enum",
      "id": "TemplateOsHardwareRaidEnum",
      "enum": [
        "raid0",
        "raid1",
        "raid10",
        "raid5",
        "raid50",
        "raid6",
        "raid60"
      ]
    },
    "nichandle.ManagerPreference": {
      "description": "Manager preference",
      "id": "ManagerPreference",
      "properties": {
        "key": {
          "description": "This preference key",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "value": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": false,
          "description": "This preference value"
        }
      },
      "namespace": "nichandle"
    },
    "billing.ItemDetail.OrderConfiguration": {
      "namespace": "billing.ItemDetail",
      "properties": {
        "label": {
          "canBeNull": false,
          "type": "string",
          "description": "Label of the configuration"
        },
        "value": {
          "description": "Value of the configuration",
          "type": "string",
          "canBeNull": false
        }
      },
      "description": "Configuration of order",
      "id": "OrderConfiguration"
    },
    "payment.method.IntegrationType": {
      "enum": [
        "DONE",
        "IFRAME_VANTIV",
        "IN_CONTEXT",
        "REDIRECT"
      ],
      "enumType": "string",
      "id": "IntegrationType",
      "description": "Payment method integration type",
      "namespace": "payment.method"
    },
    "dedicated.server.SupportsUEFIEnum": {
      "enum": [
        "no",
        "only",
        "yes"
      ],
      "enumType": "string",
      "description": "supports UEFI setup",
      "id": "SupportsUEFIEnum",
      "namespace": "dedicated.server"
    },
    "agreements.Contract": {
      "id": "Contract",
      "description": "Contract of service",
      "properties": {
        "name": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "description": "Name of of the contract",
          "readOnly": true
        },
        "active": {
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean",
          "readOnly": true,
          "description": "Is this contract currently active or not ?"
        },
        "pdf": {
          "description": "URL you can download the contract at",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "date": {
          "readOnly": true,
          "description": "Date the contract was created on",
          "type": "date",
          "canBeNull": false,
          "fullType": "date"
        },
        "text": {
          "description": "Full text of the contract",
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        }
      },
      "namespace": "agreements"
    },
    "billing.paymentMethod.IconData": {
      "namespace": "billing.paymentMethod",
      "id": "IconData",
      "description": "Payment method type icon",
      "properties": {
        "name": {
          "type": "string",
          "canBeNull": true,
          "description": "Icon name"
        },
        "data": {
          "description": "Icon in base64",
          "canBeNull": true,
          "type": "string"
        }
      }
    },
    "xander.ContactFieldEnum": {
      "namespace": "xander",
      "description": "Available contact fields",
      "id": "ContactFieldEnum",
      "enumType": "string",
      "enum": [
        "address.city",
        "address.country",
        "address.line1",
        "address.line2",
        "address.line3",
        "address.otherDetails",
        "address.province",
        "address.zip",
        "birthCity",
        "birthCountry",
        "birthDay",
        "birthZip",
        "cellPhone",
        "companyNationalIdentificationNumber",
        "email",
        "fax",
        "firstName",
        "gender",
        "language",
        "lastName",
        "legalForm",
        "nationalIdentificationNumber",
        "nationality",
        "organisationName",
        "organisationType",
        "phone",
        "spareEmail",
        "vat"
      ]
    },
    "nichandle.Currency": {
      "namespace": "nichandle",
      "properties": {
        "symbol": {
          "canBeNull": false,
          "type": "string",
          "description": "Currency symbol"
        },
        "code": {
          "canBeNull": false,
          "type": "string",
          "description": "Currency code"
        }
      },
      "description": "Customer currency",
      "id": "Currency"
    },
    "billing.order.followUp.History": {
      "namespace": "billing.order.followUp",
      "properties": {
        "description": {
          "type": "string",
          "canBeNull": false,
          "description": "History description of order follow-up"
        },
        "label": {
          "canBeNull": false,
          "type": "billing.order.followUp.HistoryStatusEnum",
          "description": "History label of order follow-up"
        },
        "date": {
          "type": "datetime",
          "canBeNull": false,
          "description": "History date of order follow-up"
        }
      },
      "description": "Step history of order follow-up",
      "id": "History"
    },
    "geolocation.ContinentCountryLocation": {
      "namespace": "geolocation",
      "id": "ContinentCountryLocation",
      "description": "Representation of country and continent from visitor IP",
      "properties": {
        "continent": {
          "type": "coreTypes.ContinentEnum",
          "fullType": "coreTypes.ContinentEnum",
          "canBeNull": false,
          "description": "Continent",
          "readOnly": true
        },
        "countryCode": {
          "type": "coreTypes.CountryEnum",
          "fullType": "coreTypes.CountryEnum",
          "canBeNull": false,
          "description": "Country iso code",
          "readOnly": true
        },
        "ip": {
          "canBeNull": false,
          "fullType": "ip",
          "type": "ip",
          "readOnly": true,
          "description": "The IP address processed, the user's origin one"
        }
      }
    },
    "billing.order.PaymentMethods": {
      "properties": {
        "registered": {
          "canBeNull": false,
          "type": "long[]",
          "description": "IDs of registered payment method usable on this order"
        },
        "available": {
          "canBeNull": false,
          "type": "payment.method.AvailablePaymentMethod[]",
          "description": "Payment method available on this order"
        }
      },
      "id": "PaymentMethods",
      "description": "Payment methods",
      "namespace": "billing.order"
    },
    "billing.order.FollowUp": {
      "namespace": "billing.order",
      "properties": {
        "history": {
          "description": "Step history of order follow-up",
          "type": "billing.order.followUp.History[]",
          "canBeNull": false
        },
        "status": {
          "description": "Step status of order follow-up",
          "canBeNull": false,
          "type": "billing.order.followUp.StatusEnum"
        },
        "step": {
          "description": "Step of order follow-up",
          "type": "billing.order.followUp.StepEnum",
          "canBeNull": false
        }
      },
      "id": "FollowUp",
      "description": "Follow up history of an order"
    },
    "nichandle.Ipv4Org": {
      "namespace": "nichandle",
      "description": "Details about an IP block organisation",
      "id": "Ipv4Org",
      "properties": {
        "state": {
          "canBeNull": true,
          "fullType": "string",
          "type": "string",
          "description": null,
          "readOnly": false
        },
        "organisationId": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": null,
          "readOnly": true
        },
        "country": {
          "description": null,
          "readOnly": false,
          "canBeNull": false,
          "fullType": "nichandle.CountryEnum",
          "type": "nichandle.CountryEnum"
        },
        "zip": {
          "readOnly": false,
          "description": null,
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "city": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "description": null,
          "readOnly": false
        },
        "phone": {
          "fullType": "phoneNumber",
          "canBeNull": false,
          "type": "phoneNumber",
          "description": null,
          "readOnly": false
        },
        "firstname": {
          "description": null,
          "readOnly": false,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "registry": {
          "readOnly": true,
          "description": null,
          "type": "nichandle.IpRegistryEnum",
          "canBeNull": false,
          "fullType": "nichandle.IpRegistryEnum"
        },
        "lastname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": null
        },
        "abuse_mailbox": {
          "description": null,
          "readOnly": false,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "address": {
          "readOnly": false,
          "description": null,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        }
      }
    },
    "auth.CredentialStateEnum": {
      "enum": [
        "expired",
        "pendingValidation",
        "refused",
        "validated"
      ],
      "enumType": "string",
      "id": "CredentialStateEnum",
      "description": "All states a Credential can be in",
      "namespace": "auth"
    },
    "billing.Bill": {
      "namespace": "billing",
      "properties": {
        "pdfUrl": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "date": {
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime",
          "description": null,
          "readOnly": true
        },
        "password": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "category": {
          "type": "billing.CategoryEnum",
          "canBeNull": false,
          "fullType": "billing.CategoryEnum",
          "readOnly": true,
          "description": null
        },
        "priceWithoutTax": {
          "type": "order.Price",
          "canBeNull": false,
          "fullType": "order.Price",
          "description": null,
          "readOnly": true
        },
        "url": {
          "description": null,
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "tax": {
          "readOnly": true,
          "description": null,
          "type": "order.Price",
          "canBeNull": false,
          "fullType": "order.Price"
        },
        "billId": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "description": null,
          "readOnly": true
        },
        "orderId": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "canBeNull": false,
          "fullType": "long"
        },
        "priceWithTax": {
          "type": "order.Price",
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "description": null
        }
      },
      "description": "Details about a Bill",
      "id": "Bill"
    },
    "dedicated.server.BitFormatEnum": {
      "namespace": "dedicated.server",
      "enum": [
        "32",
        "64"
      ],
      "description": "Available os bit format",
      "id": "BitFormatEnum",
      "enumType": "long"
    },
    "dedicated.installationTemplate.Templates": {
      "id": "Templates",
      "description": "Available installation templates",
      "properties": {
        "supportsUEFI": {
          "fullType": "dedicated.server.SupportsUEFIEnum",
          "canBeNull": true,
          "type": "dedicated.server.SupportsUEFIEnum",
          "readOnly": true,
          "description": "This distribution supports UEFI setup"
        },
        "supportsGptLabel": {
          "fullType": "boolean",
          "canBeNull": true,
          "type": "boolean",
          "readOnly": true,
          "description": "This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB"
        },
        "supportsSqlServer": {
          "description": "This distribution supports the microsoft SQL server",
          "readOnly": true,
          "type": "boolean",
          "canBeNull": true,
          "fullType": "boolean"
        },
        "family": {
          "type": "dedicated.TemplateOsTypeEnum",
          "canBeNull": false,
          "fullType": "dedicated.TemplateOsTypeEnum",
          "readOnly": true,
          "description": "this template family type"
        },
        "lastModification": {
          "readOnly": true,
          "description": "Date of last modification of the base image",
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime"
        },
        "description": {
          "description": "information about this template",
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "bitFormat": {
          "description": "this template  bit format",
          "readOnly": true,
          "fullType": "dedicated.server.BitFormatEnum",
          "canBeNull": false,
          "type": "dedicated.server.BitFormatEnum"
        },
        "customization": {
          "readOnly": false,
          "description": "Customizable template properties ",
          "fullType": "dedicated.TemplateOsProperties",
          "canBeNull": true,
          "type": "dedicated.TemplateOsProperties"
        },
        "lvmReady": {
          "fullType": "boolean",
          "canBeNull": true,
          "type": "boolean",
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "readOnly": true
        },
        "availableLanguages": {
          "readOnly": true,
          "description": "list of all language available for this template",
          "fullType": "dedicated.TemplateOsLanguageEnum[]",
          "canBeNull": false,
          "type": "dedicated.TemplateOsLanguageEnum[]"
        },
        "hardRaidConfiguration": {
          "fullType": "boolean",
          "canBeNull": true,
          "type": "boolean",
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "readOnly": true
        },
        "beta": {
          "description": "This distribution is new, and although tested and functional, may still display odd behaviour",
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": true,
          "type": "boolean"
        },
        "filesystems": {
          "type": "dedicated.TemplateOsFileSystemEnum[]",
          "canBeNull": false,
          "fullType": "dedicated.TemplateOsFileSystemEnum[]",
          "readOnly": true,
          "description": "list of all filesystems  available for this template"
        },
        "templateName": {
          "readOnly": false,
          "description": "This template name",
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "distribution": {
          "description": "the distribution this template is based on",
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "supportsDistributionKernel": {
          "description": "This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel",
          "readOnly": true,
          "fullType": "boolean",
          "canBeNull": true,
          "type": "boolean"
        },
        "supportsRTM": {
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "description": "This distribution supports RTM software",
          "readOnly": true
        },
        "deprecated": {
          "type": "boolean",
          "canBeNull": true,
          "fullType": "boolean",
          "readOnly": true,
          "description": "is this distribution deprecated"
        },
        "defaultLanguage": {
          "description": "the default language of this template",
          "readOnly": false,
          "type": "dedicated.TemplateOsLanguageEnum",
          "canBeNull": false,
          "fullType": "dedicated.TemplateOsLanguageEnum"
        },
        "category": {
          "type": "dedicated.TemplateOsUsageEnum",
          "canBeNull": false,
          "fullType": "dedicated.TemplateOsUsageEnum",
          "readOnly": true,
          "description": "category of this template (informative only)"
        }
      },
      "namespace": "dedicated.installationTemplate"
    },
    "billing.order.RegisteredPaymentMean": {
      "description": "A registered payment mean",
      "id": "RegisteredPaymentMean",
      "properties": {
        "paymentMean": {
          "type": "billing.ReusablePaymentMeanEnum",
          "canBeNull": false,
          "description": null
        }
      },
      "namespace": "billing.order"
    },
    "billing.order.ConsumptionDetails": {
      "namespace": "billing.order",
      "properties": {
        "taskId": {
          "canBeNull": false,
          "type": "long",
          "description": "Consumption details export task's identifier"
        },
        "message": {
          "description": "Request's state description",
          "type": "string",
          "canBeNull": true
        },
        "fileFormat": {
          "type": "consumption.ConsumptionExportFormatsEnum",
          "canBeNull": true,
          "description": "Format of the file"
        },
        "taskStatus": {
          "canBeNull": false,
          "type": "consumption.ConsumptionExportTaskStatusEnum",
          "description": "Consumption details export task's status"
        },
        "fileURL": {
          "description": "Temporary URL to download detailed consumption",
          "canBeNull": true,
          "type": "string"
        }
      },
      "id": "ConsumptionDetails",
      "description": "Detailed consumption's retrieval information"
    },
    "nichandle.changeEmail.TaskStateEnum": {
      "enum": [
        "aborted",
        "done",
        "refused",
        "todo"
      ],
      "id": "TaskStateEnum",
      "description": "State of email change task",
      "enumType": "string",
      "namespace": "nichandle.changeEmail"
    },
    "billing.paymentMethod.StatusEnum": {
      "enum": [
        "BLOCKED",
        "BLOCKED_BY_CUSTOMER",
        "BROKEN",
        "CANCELED",
        "CANCELED_BY_CUSTOMER",
        "CREATED",
        "ERROR",
        "EXPIRED",
        "PAUSED",
        "VALID",
        "VALID_FOR_CREDIT"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "description": "List of payment method status enum",
      "namespace": "billing.paymentMethod"
    },
    "billing.BillDetail": {
      "properties": {
        "domain": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "quantity": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "description": null,
          "readOnly": true
        },
        "periodStart": {
          "description": null,
          "readOnly": true,
          "type": "date",
          "fullType": "date",
          "canBeNull": true
        },
        "description": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "billDetailId": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "readOnly": true,
          "description": null
        },
        "unitPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price",
          "readOnly": true,
          "description": null
        },
        "totalPrice": {
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price",
          "description": null,
          "readOnly": true
        },
        "periodEnd": {
          "readOnly": true,
          "description": null,
          "canBeNull": true,
          "fullType": "date",
          "type": "date"
        }
      },
      "description": "Information about a Bill entry",
      "id": "BillDetail",
      "namespace": "billing"
    },
    "nichandle.accessRestriction.SmsStatusEnum": {
      "namespace": "nichandle.accessRestriction",
      "id": "SmsStatusEnum",
      "description": "Status of the Sms account",
      "enumType": "string",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ]
    },
    "billing.Refund": {
      "namespace": "billing",
      "properties": {
        "priceWithTax": {
          "readOnly": true,
          "description": null,
          "type": "order.Price",
          "canBeNull": false,
          "fullType": "order.Price"
        },
        "refundId": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "readOnly": true,
          "description": null
        },
        "orderId": {
          "fullType": "long",
          "canBeNull": false,
          "type": "long",
          "readOnly": true,
          "description": null
        },
        "url": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": null,
          "readOnly": true
        },
        "originalBillId": {
          "readOnly": true,
          "description": null,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "priceWithoutTax": {
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price",
          "readOnly": true,
          "description": null
        },
        "tax": {
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price",
          "readOnly": true,
          "description": null
        },
        "password": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "readOnly": true,
          "description": null
        },
        "date": {
          "readOnly": true,
          "description": null,
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime"
        },
        "pdfUrl": {
          "description": null,
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        }
      },
      "id": "Refund",
      "description": "Details about a Refund"
    },
    "nichandle.accessRestriction.IpRestrictionRuleEnum": {
      "namespace": "nichandle.accessRestriction",
      "description": "Accept or deny IP access",
      "id": "IpRestrictionRuleEnum",
      "enumType": "string",
      "enum": [
        "accept",
        "deny"
      ]
    },
    "me.payment.method.Transaction.Status": {
      "namespace": "me.payment.method.Transaction",
      "id": "Status",
      "description": "Payment transaction status enum",
      "enumType": "string",
      "enum": [
        "CANCELED",
        "CANCELING",
        "CONFIRMING",
        "CREATED",
        "ERROR",
        "FAILED",
        "READY",
        "SUCCESS"
      ]
    },
    "billing.OrderDetail": {
      "properties": {
        "unitPrice": {
          "readOnly": true,
          "description": null,
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price"
        },
        "orderDetailId": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "canBeNull": false,
          "fullType": "long"
        },
        "quantity": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "description": {
          "description": null,
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "totalPrice": {
          "type": "order.Price",
          "canBeNull": false,
          "fullType": "order.Price",
          "readOnly": true,
          "description": null
        },
        "cancelled": {
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean",
          "readOnly": true,
          "description": null
        },
        "domain": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        }
      },
      "id": "OrderDetail",
      "description": "Information about a Bill entry",
      "namespace": "billing"
    },
    "billing.Paypal": {
      "properties": {
        "description": {
          "readOnly": false,
          "description": "Custom description of this account",
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "id": {
          "readOnly": true,
          "description": null,
          "type": "long",
          "canBeNull": false,
          "fullType": "long"
        },
        "email": {
          "description": null,
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "agreementId": {
          "readOnly": true,
          "description": null,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "state": {
          "readOnly": true,
          "description": null,
          "type": "billing.PaypalStateEnum",
          "canBeNull": false,
          "fullType": "billing.PaypalStateEnum"
        },
        "creationDate": {
          "readOnly": true,
          "description": null,
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime"
        },
        "defaultPaymentMean": {
          "description": null,
          "readOnly": true,
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "icon": {
          "type": "billing.paymentMethod.IconData",
          "canBeNull": true,
          "fullType": "billing.paymentMethod.IconData",
          "description": "Payment method type icon",
          "readOnly": true
        }
      },
      "id": "Paypal",
      "description": "Paypal account info",
      "namespace": "billing"
    },
    "billing.ItemDetail.OrderPlan": {
      "namespace": "billing.ItemDetail",
      "description": "Plan data from order",
      "id": "OrderPlan",
      "properties": {
        "product": {
          "canBeNull": false,
          "type": "billing.ItemDetail.OrderPlanProduct",
          "description": "Product from /order/cart"
        },
        "quantity": {
          "description": "Quantity ordered",
          "type": "long",
          "canBeNull": true
        },
        "code": {
          "type": "string",
          "canBeNull": true,
          "description": "Plan code used when ordering through /order/cart"
        },
        "duration": {
          "description": "Duration chosen when ordering through /order/cart (ISO 8601)",
          "canBeNull": true,
          "type": "string"
        },
        "pricingMode": {
          "canBeNull": true,
          "type": "string",
          "description": "Pricing mode used when ordering through /order/cart"
        }
      }
    },
    "me.payment.method.Transaction": {
      "properties": {
        "amount": {
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price",
          "description": "Transaction amount",
          "readOnly": false
        },
        "status": {
          "readOnly": false,
          "description": "Transaction status",
          "type": "me.payment.method.Transaction.Status",
          "canBeNull": false,
          "fullType": "me.payment.method.Transaction.Status"
        },
        "type": {
          "description": "Transaction type",
          "readOnly": false,
          "fullType": "me.payment.method.Transaction.Type",
          "canBeNull": false,
          "type": "me.payment.method.Transaction.Type"
        },
        "transactionId": {
          "fullType": "long",
          "canBeNull": false,
          "type": "long",
          "readOnly": false,
          "description": "Transaction ID"
        },
        "creationDate": {
          "description": "Creation date",
          "readOnly": false,
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime"
        }
      },
      "description": "Payment method transaction object",
      "id": "Transaction",
      "namespace": "me.payment.method"
    },
    "consumption.ConsumptionExportFormatsEnum": {
      "namespace": "consumption",
      "enumType": "string",
      "description": "Export file format",
      "id": "ConsumptionExportFormatsEnum",
      "enum": [
        "csv"
      ]
    },
    "billing.PaymentMeanValidationType": {
      "namespace": "billing",
      "enum": [
        "creditAccount",
        "documentToSend",
        "simpleValidation"
      ],
      "enumType": "string",
      "id": "PaymentMeanValidationType",
      "description": "All the validation you may have to do"
    },
    "me.consent.Decision": {
      "properties": {
        "timestamp": {
          "description": "Consent decision datetime",
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime"
        },
        "value": {
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "description": "Consent decision value"
        }
      },
      "id": "Decision",
      "description": "Customer consent decision",
      "namespace": "me.consent"
    },
    "billing.order.AssociatedObject": {
      "properties": {
        "type": {
          "description": null,
          "type": "billing.order.associatedObject.TypeEnum",
          "canBeNull": true
        },
        "id": {
          "description": null,
          "canBeNull": true,
          "type": "string"
        }
      },
      "id": "AssociatedObject",
      "description": "The object the processing of the order leaded to",
      "namespace": "billing.order"
    },
    "billing.DeferredPaymentAccountStatusEnum": {
      "namespace": "billing",
      "enum": [
        "valid"
      ],
      "description": "Status of your deferred invoice payment account",
      "id": "DeferredPaymentAccountStatusEnum",
      "enumType": "string"
    },
    "dedicated.installationTemplate.hardwareRaid": {
      "description": "Hardware RAID defined in this partitioning scheme",
      "id": "hardwareRaid",
      "properties": {
        "disks": {
          "canBeNull": false,
          "fullType": "string[]",
          "type": "string[]",
          "description": "Disk list",
          "readOnly": false
        },
        "step": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "description": "Specifies the creation order of the hardware RAID",
          "readOnly": false
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "type": "string",
          "readOnly": false,
          "description": "Hardware RAID name"
        },
        "mode": {
          "description": "RAID mode",
          "readOnly": false,
          "canBeNull": false,
          "fullType": "dedicated.TemplateOsHardwareRaidEnum",
          "type": "dedicated.TemplateOsHardwareRaidEnum"
        }
      },
      "namespace": "dedicated.installationTemplate"
    },
    "debt.entry.StatusDebtOrderEnum": {
      "enum": [
        "PAID",
        "REFUNDED",
        "TO_BE_PAID",
        "UNMATURED",
        "UNPAID"
      ],
      "description": "All status a debt HistoryOrder entry can be in",
      "id": "StatusDebtOrderEnum",
      "enumType": "string",
      "namespace": "debt.entry"
    },
    "nichandle.accessRestriction.U2FRegistrationRequest": {
      "properties": {
        "challenge": {
          "canBeNull": false,
          "type": "string",
          "description": null
        },
        "version": {
          "canBeNull": false,
          "type": "string",
          "description": null
        }
      },
      "id": "U2FRegistrationRequest",
      "description": "Describe U2F RegistrationRequest",
      "namespace": "nichandle.accessRestriction"
    },
    "billing.CreditCard": {
      "namespace": "billing",
      "description": "Credit card informations",
      "id": "CreditCard",
      "properties": {
        "icon": {
          "fullType": "billing.paymentMethod.IconData",
          "canBeNull": true,
          "type": "billing.paymentMethod.IconData",
          "description": "Payment method type icon",
          "readOnly": true
        },
        "state": {
          "readOnly": true,
          "description": null,
          "fullType": "billing.CreditCardStateEnum",
          "canBeNull": false,
          "type": "billing.CreditCardStateEnum"
        },
        "defaultPaymentMean": {
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean",
          "description": null,
          "readOnly": true
        },
        "type": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "description": null
        },
        "threeDsValidated": {
          "readOnly": true,
          "description": "True if this credit card has been registered with a successful 3DSecure challenge",
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "description": {
          "description": "Custom description of this account",
          "readOnly": false,
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "id": {
          "type": "long",
          "canBeNull": false,
          "fullType": "long",
          "description": null,
          "readOnly": true
        },
        "number": {
          "description": null,
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "expirationDate": {
          "type": "date",
          "canBeNull": false,
          "fullType": "date",
          "description": null,
          "readOnly": true
        }
      }
    },
    "nichandle.accessRestriction.U2FStatusEnum": {
      "namespace": "nichandle.accessRestriction",
      "description": "Status of U2F account",
      "id": "U2FStatusEnum",
      "enumType": "string",
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation"
      ]
    },
    "nichandle.contactChange.Task": {
      "namespace": "nichandle.contactChange",
      "properties": {
        "dateRequest": {
          "description": "Date at which the request has been made",
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        },
        "serviceDomain": {
          "description": "The service on which the task runs",
          "readOnly": true,
          "type": "string",
          "fullType": "string",
          "canBeNull": true
        },
        "id": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "fromAccount": {
          "description": "Account to change contact from",
          "readOnly": true,
          "type": "string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false
        },
        "askingAccount": {
          "description": "Account who asked the contact change",
          "readOnly": true,
          "type": "string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": true
        },
        "dateDone": {
          "description": "Date at which the contact change has been finished",
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true
        },
        "state": {
          "readOnly": true,
          "description": "Current state of the request",
          "type": "nichandle.changeContact.TaskStateEnum",
          "fullType": "nichandle.changeContact.TaskStateEnum",
          "canBeNull": false
        },
        "contactTypes": {
          "canBeNull": false,
          "fullType": "nichandle.changeContact.ContactTypeEnum[]",
          "type": "nichandle.changeContact.ContactTypeEnum[]",
          "description": "Contacts to be changed",
          "readOnly": true
        },
        "toAccount": {
          "description": "Account to change contact to",
          "readOnly": true,
          "type": "string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false
        }
      },
      "description": "Task running a contact change on a service",
      "id": "Task"
    },
    "billing.order.followUp.HistoryStatusEnum": {
      "enum": [
        "DELIVERY",
        "FRAUD_CHECK",
        "FRAUD_DOCS_REQUESTED",
        "FRAUD_MANUAL_REVIEW",
        "FRAUD_REFUSED",
        "INVOICE_IN_PROGRESS",
        "INVOICE_SENT",
        "ORDER_ACCEPTED",
        "ORDER_STARTED",
        "PAYMENT_CONFIRMED",
        "PAYMENT_INITIATED",
        "PAYMENT_RECEIVED",
        "REGISTERED_PAYMENT_INITIATED"
      ],
      "enumType": "string",
      "description": "History label of order follow-up",
      "id": "HistoryStatusEnum",
      "namespace": "billing.order.followUp"
    },
    "nichandle.accessRestriction.TOTPAccount": {
      "namespace": "nichandle.accessRestriction",
      "description": "TOTP Two-Factor Authentication",
      "id": "TOTPAccount",
      "properties": {
        "status": {
          "description": "Status of this account",
          "readOnly": true,
          "type": "nichandle.accessRestriction.TOTPStatusEnum",
          "fullType": "nichandle.accessRestriction.TOTPStatusEnum",
          "canBeNull": false
        },
        "description": {
          "description": "Description of this TOTP",
          "readOnly": false,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "id": {
          "description": "The Id of the restriction",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "long",
          "type": "long"
        },
        "lastUsedDate": {
          "readOnly": true,
          "description": "Last used date",
          "canBeNull": true,
          "fullType": "datetime",
          "type": "datetime"
        },
        "creationDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "type": "datetime",
          "readOnly": true,
          "description": "Creation date"
        }
      }
    },
    "billing.AutomaticPaymentMean": {
      "namespace": "billing",
      "id": "AutomaticPaymentMean",
      "description": "Available automatic payment means",
      "properties": {
        "bankAccount": {
          "type": "boolean",
          "canBeNull": false,
          "description": "Bank Account"
        },
        "paypal": {
          "canBeNull": false,
          "type": "boolean",
          "description": "Paypal account"
        },
        "deferredPaymentAccount": {
          "description": "Deferred invoice payment account for authorized customers",
          "type": "boolean",
          "canBeNull": false
        },
        "creditCard": {
          "canBeNull": false,
          "type": "boolean",
          "description": "Credit Card"
        }
      }
    },
    "nichandle.Nichandle": {
      "properties": {
        "birthDay": {
          "readOnly": false,
          "description": null,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "organisation": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "description": null
        },
        "phoneCountry": {
          "readOnly": false,
          "description": null,
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "type": "nichandle.CountryEnum"
        },
        "spareEmail": {
          "description": null,
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "currency": {
          "readOnly": true,
          "description": "Customer currency",
          "type": "nichandle.Currency",
          "canBeNull": false,
          "fullType": "nichandle.Currency"
        },
        "corporationType": {
          "readOnly": false,
          "description": null,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "phone": {
          "description": null,
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "firstname": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "description": null,
          "readOnly": false
        },
        "name": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "description": null,
          "readOnly": false
        },
        "birthCity": {
          "description": null,
          "readOnly": false,
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "zip": {
          "readOnly": false,
          "description": null,
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "ovhCompany": {
          "type": "nichandle.OvhCompanyEnum",
          "canBeNull": false,
          "fullType": "nichandle.OvhCompanyEnum",
          "readOnly": true,
          "description": null
        },
        "state": {
          "type": "nichandle.StateEnum",
          "canBeNull": false,
          "fullType": "nichandle.StateEnum",
          "readOnly": true,
          "description": null
        },
        "address": {
          "readOnly": false,
          "description": null,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "language": {
          "readOnly": false,
          "description": null,
          "fullType": "nichandle.LanguageEnum",
          "canBeNull": true,
          "type": "nichandle.LanguageEnum"
        },
        "italianSDI": {
          "readOnly": false,
          "description": null,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "legalform": {
          "readOnly": false,
          "description": null,
          "fullType": "nichandle.LegalFormEnum",
          "canBeNull": false,
          "type": "nichandle.LegalFormEnum"
        },
        "nationalIdentificationNumber": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "description": null
        },
        "nichandle": {
          "readOnly": true,
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "type": "string"
        },
        "email": {
          "description": null,
          "readOnly": true,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "fax": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "description": null,
          "readOnly": false
        },
        "customerCode": {
          "readOnly": true,
          "description": "Your customer code (a numerical value used for identification when contacting support via phone call)",
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "companyNationalIdentificationNumber": {
          "description": null,
          "readOnly": false,
          "fullType": "string",
          "canBeNull": true,
          "type": "string"
        },
        "ovhSubsidiary": {
          "description": null,
          "readOnly": true,
          "type": "nichandle.OvhSubsidiaryEnum",
          "canBeNull": false,
          "fullType": "nichandle.OvhSubsidiaryEnum"
        },
        "country": {
          "description": null,
          "readOnly": false,
          "type": "nichandle.CountryEnum",
          "canBeNull": false,
          "fullType": "nichandle.CountryEnum"
        },
        "city": {
          "readOnly": false,
          "description": null,
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        },
        "vat": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "description": null
        },
        "sex": {
          "description": null,
          "readOnly": false,
          "fullType": "nichandle.GenderEnum",
          "canBeNull": true,
          "type": "nichandle.GenderEnum"
        },
        "area": {
          "readOnly": false,
          "description": null,
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        }
      },
      "description": "Details about your OVH identifier",
      "id": "Nichandle",
      "namespace": "nichandle"
    },
    "me.consent.Campaign": {
      "namespace": "me.consent",
      "id": "Campaign",
      "description": "Consent campaign",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": "Campaign name",
          "readOnly": true
        },
        "type": {
          "canBeNull": false,
          "fullType": "me.consent.CampaignTypeEnum",
          "type": "me.consent.CampaignTypeEnum",
          "description": "Campaign type",
          "readOnly": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": "Campaign description",
          "readOnly": true
        }
      }
    },
    "debt.entry.AssociatedObject": {
      "namespace": "debt.entry",
      "description": "The object linked to this debt entry",
      "id": "AssociatedObject",
      "properties": {
        "type": {
          "type": "debt.associatedObject.TypeEnum",
          "canBeNull": true,
          "description": null
        },
        "paymentInfo": {
          "description": null,
          "canBeNull": true,
          "type": "debt.associatedObject.PaymentInfo"
        },
        "id": {
          "description": null,
          "type": "string",
          "canBeNull": true
        },
        "subId": {
          "type": "string",
          "canBeNull": true,
          "description": null
        }
      }
    },
    "billing.fidelityAccount.OperationEnum": {
      "enum": [
        "bonus",
        "cancel-bonus",
        "cancel-credit",
        "cancel-debit",
        "cancel-pre-debit",
        "credit",
        "debit",
        "pre-credit",
        "pre-debit"
      ],
      "id": "OperationEnum",
      "description": "Operations a fidelity account movement can represent",
      "enumType": "string",
      "namespace": "billing.fidelityAccount"
    },
    "auth.AccessRule": {
      "id": "AccessRule",
      "description": "Access rule required for the application",
      "properties": {
        "path": {
          "description": null,
          "canBeNull": false,
          "type": "string"
        },
        "method": {
          "description": null,
          "type": "http.MethodEnum",
          "canBeNull": false
        }
      },
      "namespace": "auth"
    },
    "nichandle.SubAccountConsumerKey": {
      "namespace": "nichandle",
      "properties": {
        "consumerKey": {
          "type": "string",
          "canBeNull": false,
          "description": "The consumer key"
        }
      },
      "description": "Credentials to interact with the api on behalf of the sub-account",
      "id": "SubAccountConsumerKey"
    },
    "nichandle.accessRestriction.TOTPStatusEnum": {
      "enum": [
        "disabled",
        "enabled",
        "needCodeValidation",
        "needEmailValidation"
      ],
      "description": "Status of TOTP account",
      "id": "TOTPStatusEnum",
      "enumType": "string",
      "namespace": "nichandle.accessRestriction"
    },
    "nichandle.accessRestriction.SOTPAccount": {
      "namespace": "nichandle.accessRestriction",
      "description": "SOTP Two-Factor Authentication",
      "id": "SOTPAccount",
      "properties": {
        "status": {
          "fullType": "nichandle.accessRestriction.SOTPStatusEnum",
          "canBeNull": false,
          "type": "nichandle.accessRestriction.SOTPStatusEnum",
          "description": "Status of this account",
          "readOnly": true
        },
        "remaining": {
          "type": "long",
          "canBeNull": false,
          "fullType": "long",
          "description": "Number of remaining codes",
          "readOnly": true
        },
        "creationDate": {
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime",
          "description": "Creation date",
          "readOnly": true
        },
        "lastUsedDate": {
          "type": "datetime",
          "canBeNull": true,
          "fullType": "datetime",
          "description": "Last used date",
          "readOnly": true
        }
      }
    },
    "nichandle.IpRestriction": {
      "namespace": "nichandle",
      "properties": {
        "rule": {
          "readOnly": false,
          "description": "Accept or deny IP access",
          "type": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "fullType": "nichandle.accessRestriction.IpRestrictionRuleEnum",
          "canBeNull": false
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "type": "long",
          "readOnly": true,
          "description": "The Id of the restriction"
        },
        "ip": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "An IP range where we will apply the rule"
        },
        "warning": {
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean",
          "readOnly": false,
          "description": "Send an email if someone try to access with this IP address"
        }
      },
      "description": "List of all IP Restrictions",
      "id": "IpRestriction"
    },
    "nichandle.OvhCompanyEnum": {
      "namespace": "nichandle",
      "enumType": "string",
      "id": "OvhCompanyEnum",
      "description": "OVH subsidiaries",
      "enum": [
        "kimsufi",
        "ovh",
        "soyoustart"
      ]
    },
    "billing.BankAccountStateEnum": {
      "enumType": "string",
      "description": "List of bank account states",
      "id": "BankAccountStateEnum",
      "enum": [
        "blockedForIncidents",
        "pendingValidation",
        "valid"
      ],
      "namespace": "billing"
    },
    "domain.OperationStep": {
      "id": "OperationStep",
      "description": "One step from an operation",
      "properties": {
        "step": {
          "type": "string",
          "canBeNull": false,
          "description": "Name of the step"
        },
        "description": {
          "type": "string",
          "canBeNull": false,
          "description": "Description of the step"
        },
        "executionDuration": {
          "type": "long",
          "canBeNull": false,
          "description": "Execution time of the step"
        }
      },
      "namespace": "domain"
    },
    "nichandle.Authentication.Group": {
      "properties": {
        "lastUpdate": {
          "readOnly": true,
          "description": "Last update of this group",
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime"
        },
        "role": {
          "description": "Group's role",
          "readOnly": false,
          "type": "nichandle.Authentication.RoleEnum",
          "canBeNull": false,
          "fullType": "nichandle.Authentication.RoleEnum"
        },
        "name": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "description": "Group's name"
        },
        "creation": {
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "description": "Creation date of this group",
          "readOnly": true
        },
        "description": {
          "description": "Group's description",
          "readOnly": false,
          "fullType": "string",
          "canBeNull": false,
          "type": "string"
        },
        "defaultGroup": {
          "readOnly": false,
          "description": "True if it is an default group. This kind of group can't be edited or deleted",
          "fullType": "boolean",
          "canBeNull": false,
          "type": "boolean"
        }
      },
      "description": "A group",
      "id": "Group",
      "namespace": "nichandle.Authentication"
    },
    "billing.Payment": {
      "namespace": "billing",
      "id": "Payment",
      "description": "Details about a payment",
      "properties": {
        "paymentDate": {
          "description": null,
          "readOnly": true,
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime"
        },
        "paymentIdentifier": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "description": null,
          "readOnly": true
        },
        "paymentType": {
          "fullType": "billing.PaymentMeanEnum",
          "canBeNull": false,
          "type": "billing.PaymentMeanEnum",
          "readOnly": true,
          "description": null
        }
      }
    },
    "me.consent.Consent": {
      "properties": {
        "value": {
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "description": "Current consent value",
          "readOnly": true
        },
        "type": {
          "fullType": "me.consent.CampaignTypeEnum",
          "canBeNull": false,
          "type": "me.consent.CampaignTypeEnum",
          "description": "Campaign type",
          "readOnly": true
        },
        "campaign": {
          "description": "Campaign name",
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "history": {
          "fullType": "me.consent.Decision[]",
          "canBeNull": false,
          "type": "me.consent.Decision[]",
          "description": "Consent decisions history for this campaign",
          "readOnly": true
        }
      },
      "id": "Consent",
      "description": "Customer consent information for a campaign",
      "namespace": "me.consent"
    },
    "consumption.ConsumptionExportTaskStatusEnum": {
      "namespace": "consumption",
      "description": "Export task status",
      "id": "ConsumptionExportTaskStatusEnum",
      "enumType": "string",
      "enum": [
        "DOING",
        "DONE",
        "ERROR",
        "TODO"
      ]
    },
    "dedicated.TemplatePartitionTypeEnum": {
      "enum": [
        "logical",
        "lv",
        "primary"
      ],
      "id": "TemplatePartitionTypeEnum",
      "description": "partition type",
      "enumType": "string",
      "namespace": "dedicated"
    },
    "me.payment.method.Transaction.Type": {
      "namespace": "me.payment.method.Transaction",
      "enum": [
        "CREDIT",
        "DEBIT"
      ],
      "enumType": "string",
      "description": "Payment transaction type enum",
      "id": "Type"
    },
    "nichandle.Authentication.RoleEnum": {
      "enumType": "string",
      "id": "RoleEnum",
      "description": "Permission given on the account",
      "enum": [
        "REGULAR",
        "ADMIN",
        "UNPRIVILEGED"
      ],
      "namespace": "nichandle"
    },
    "me.payment.method.Register.ValidationResult": {
      "properties": {
        "validationType": {
          "fullType": "payment.method.IntegrationType",
          "canBeNull": false,
          "type": "payment.method.IntegrationType",
          "description": "Register validation type",
          "readOnly": false
        },
        "paymentMethodId": {
          "fullType": "long",
          "canBeNull": false,
          "type": "long",
          "readOnly": false,
          "description": "Register new payment method ID"
        },
        "url": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "description": "Register validation URL"
        },
        "organizationId": {
          "type": "string",
          "canBeNull": true,
          "fullType": "string",
          "description": "Organization ID",
          "readOnly": false
        },
        "formSessionId": {
          "fullType": "string",
          "canBeNull": true,
          "type": "string",
          "description": "Form session ID",
          "readOnly": false
        },
        "merchantId": {
          "description": "Merchant ID",
          "readOnly": false,
          "type": "string",
          "canBeNull": true,
          "fullType": "string"
        }
      },
      "description": "Register validation payload result",
      "id": "ValidationResult",
      "namespace": "me.payment.method.Register"
    },
    "dedicated.TemplateOsLanguageEnum": {
      "id": "TemplateOsLanguageEnum",
      "description": "all language available",
      "enumType": "string",
      "enum": [
        "ar",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "et",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "nb",
        "nl",
        "no",
        "pl",
        "pt",
        "ro",
        "ru",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "tu",
        "uk",
        "zh-Hans-CN",
        "zh-Hans-HK"
      ],
      "namespace": "dedicated"
    },
    "debt.Balance": {
      "description": "Debt balance of the account",
      "id": "Balance",
      "properties": {
        "pendingAmount": {
          "description": "Amount currently being processed",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price"
        },
        "dueAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "description": "Amount of debts the account has",
          "readOnly": true
        },
        "todoAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "description": "Reserved amount awaiting payment",
          "readOnly": true
        },
        "unmaturedAmount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unmatured amount for deferred payment term"
        },
        "active": {
          "readOnly": true,
          "description": null,
          "canBeNull": false,
          "fullType": "boolean",
          "type": "boolean"
        }
      },
      "namespace": "debt"
    },
    "billing.Withdrawal": {
      "properties": {
        "withdrawalId": {
          "readOnly": true,
          "description": null,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "description": null,
          "readOnly": true
        },
        "url": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "date": {
          "description": null,
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        },
        "pdfUrl": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "password": {
          "readOnly": true,
          "description": null,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        },
        "amount": {
          "canBeNull": false,
          "fullType": "order.Price",
          "type": "order.Price",
          "description": null,
          "readOnly": true
        },
        "country": {
          "description": null,
          "readOnly": true,
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        }
      },
      "description": "Details about a withdrawal",
      "id": "Withdrawal",
      "namespace": "billing"
    },
    "billing.VoucherAccount": {
      "id": "VoucherAccount",
      "description": "Details about a Voucher account",
      "properties": {
        "balance": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "description": null,
          "readOnly": true
        },
        "openDate": {
          "description": null,
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        },
        "lastUpdate": {
          "description": null,
          "readOnly": true,
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false
        },
        "voucherAccountId": {
          "description": null,
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "type": "string"
        }
      },
      "namespace": "billing"
    },
    "nichandle.LegalFormEnum": {
      "namespace": "nichandle",
      "enum": [
        "administration",
        "association",
        "corporation",
        "individual",
        "other",
        "personalcorporation"
      ],
      "enumType": "string",
      "description": "Legal forms a nichandle can be registered as",
      "id": "LegalFormEnum"
    },
    "nichandle.GenderEnum": {
      "description": "All genders a person can choose",
      "id": "GenderEnum",
      "enumType": "string",
      "enum": [
        "female",
        "male"
      ],
      "namespace": "nichandle"
    },
    "billing.OvhAccount": {
      "id": "OvhAccount",
      "description": "Details about an OVH account",
      "properties": {
        "ovhAccountId": {
          "type": "string",
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "description": null
        },
        "canBeCredited": {
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "description": null
        },
        "openDate": {
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime",
          "description": null,
          "readOnly": true
        },
        "lastUpdate": {
          "description": null,
          "readOnly": true,
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime"
        },
        "balance": {
          "description": null,
          "readOnly": true,
          "type": "order.Price",
          "canBeNull": false,
          "fullType": "order.Price"
        },
        "isActive": {
          "description": null,
          "readOnly": true,
          "type": "boolean",
          "canBeNull": false,
          "fullType": "boolean"
        },
        "alertThreshold": {
          "description": null,
          "readOnly": false,
          "type": "long",
          "canBeNull": true,
          "fullType": "long"
        }
      },
      "namespace": "billing"
    },
    "nichandle.User": {
      "properties": {
        "description": {
          "description": "User's description",
          "readOnly": false,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "email": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": "User's email",
          "readOnly": false
        },
        "login": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": "User's login suffix",
          "readOnly": true
        },
        "lastUpdate": {
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime",
          "readOnly": true,
          "description": "Last update of this user"
        },
        "creation": {
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime",
          "description": "Creation date of this user",
          "readOnly": true
        },
        "passwordLastUpdate": {
          "description": "When the user changed his password for the last time",
          "readOnly": true,
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime"
        },
        "group": {
          "fullType": "string",
          "canBeNull": false,
          "type": "string",
          "description": "User's group",
          "readOnly": false
        },
        "status": {
          "description": "Current user's status",
          "readOnly": true,
          "type": "nichandle.UserStatus",
          "canBeNull": false,
          "fullType": "nichandle.UserStatus"
        }
      },
      "id": "User",
      "description": "A user",
      "namespace": "nichandle"
    },
    "contact.Contact": {
      "id": "Contact",
      "description": "Representation of a Contact",
      "properties": {
        "address": {
          "description": "Address for this contact",
          "readOnly": false,
          "type": "contact.Address",
          "fullType": "contact.Address",
          "canBeNull": false
        },
        "language": {
          "readOnly": false,
          "description": "Language",
          "canBeNull": false,
          "fullType": "nichandle.LanguageEnum",
          "type": "nichandle.LanguageEnum"
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "description": "Email address",
          "readOnly": false
        },
        "id": {
          "readOnly": true,
          "description": "Contact Identifier",
          "type": "long",
          "fullType": "long",
          "canBeNull": false
        },
        "fax": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Fax number"
        },
        "legalForm": {
          "canBeNull": false,
          "fullType": "nichandle.LegalFormEnum",
          "type": "nichandle.LegalFormEnum",
          "description": "Legal form of the contact",
          "readOnly": false
        },
        "nationalIdentificationNumber": {
          "readOnly": false,
          "description": "National identification number of the contact",
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        },
        "companyNationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "description": "National identification number of your company",
          "readOnly": false
        },
        "nationality": {
          "readOnly": false,
          "description": "Nationality",
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true
        },
        "cellPhone": {
          "canBeNull": true,
          "fullType": "phoneNumber",
          "type": "phoneNumber",
          "description": "Cellphone number",
          "readOnly": false
        },
        "lastName": {
          "readOnly": false,
          "description": "Last name",
          "type": "string",
          "fullType": "string",
          "canBeNull": false
        },
        "birthCountry": {
          "canBeNull": true,
          "fullType": "nichandle.CountryEnum",
          "type": "nichandle.CountryEnum",
          "readOnly": false,
          "description": "Birth Country"
        },
        "vat": {
          "canBeNull": true,
          "fullType": "string",
          "type": "string",
          "readOnly": false,
          "description": "VAT number"
        },
        "organisationType": {
          "canBeNull": true,
          "fullType": "string",
          "type": "string",
          "description": "Organisation type",
          "readOnly": false
        },
        "birthDay": {
          "readOnly": false,
          "description": "Birth date",
          "canBeNull": true,
          "fullType": "date",
          "type": "date"
        },
        "birthZip": {
          "canBeNull": true,
          "fullType": "string",
          "type": "string",
          "description": "Birth Zipcode",
          "readOnly": false
        },
        "spareEmail": {
          "readOnly": false,
          "description": "Spare email address",
          "canBeNull": true,
          "fullType": "string",
          "type": "string"
        },
        "organisationName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Organisation name"
        },
        "gender": {
          "canBeNull": true,
          "fullType": "nichandle.GenderEnum",
          "type": "nichandle.GenderEnum",
          "readOnly": false,
          "description": "Gender"
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "First name"
        },
        "phone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Telephone number"
        },
        "birthCity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Birth city"
        }
      },
      "namespace": "contact"
    },
    "payment.method.AvailablePaymentMethod": {
      "properties": {
        "oneshot": {
          "type": "boolean",
          "canBeNull": false,
          "description": "Payment method type is possible to pay in oneshot mode ?"
        },
        "paymentType": {
          "canBeNull": false,
          "type": "string",
          "description": "Payment method type"
        },
        "integration": {
          "description": "Graphical payment integration to use",
          "type": "payment.method.IntegrationType",
          "canBeNull": false
        },
        "icon": {
          "type": "payment.method.Icon",
          "canBeNull": false,
          "description": "Payment method type icon"
        },
        "registerable": {
          "canBeNull": false,
          "type": "boolean",
          "description": "Payment method type is registerable ?"
        },
        "registerableWithTransaction": {
          "description": "Payment method type is registerable with the possibility to pay in same time an order ?",
          "type": "boolean",
          "canBeNull": false
        }
      },
      "id": "AvailablePaymentMethod",
      "description": "Available payment methods",
      "namespace": "payment.method"
    },
    "nichandle.VoucherStatus": {
      "namespace": "nichandle",
      "id": "VoucherStatus",
      "description": "Voucher Status and Information",
      "properties": {
        "validity": {
          "description": "Is voucher valid",
          "type": "boolean",
          "canBeNull": false
        }
      }
    },
    "agreements.AgreementStateEnum": {
      "namespace": "agreements",
      "description": "The current state of a contract agreement",
      "id": "AgreementStateEnum",
      "enumType": "string",
      "enum": [
        "ko",
        "obsolete",
        "ok",
        "todo"
      ]
    },
    "billing.Movement": {
      "namespace": "billing",
      "description": "Details about an OVH account",
      "id": "Movement",
      "properties": {
        "balance": {
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price",
          "readOnly": true,
          "description": null
        },
        "order": {
          "description": null,
          "readOnly": true,
          "type": "long",
          "canBeNull": false,
          "fullType": "long"
        },
        "date": {
          "readOnly": true,
          "description": null,
          "fullType": "datetime",
          "canBeNull": false,
          "type": "datetime"
        },
        "amount": {
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price",
          "readOnly": true,
          "description": null
        },
        "previousBalance": {
          "fullType": "order.Price",
          "canBeNull": false,
          "type": "order.Price",
          "readOnly": true,
          "description": null
        },
        "description": {
          "description": null,
          "readOnly": true,
          "type": "string",
          "canBeNull": false,
          "fullType": "string"
        },
        "operation": {
          "type": "billing.ovhAccount.OperationEnum",
          "canBeNull": false,
          "fullType": "billing.ovhAccount.OperationEnum",
          "readOnly": true,
          "description": null
        },
        "movementId": {
          "description": null,
          "readOnly": true,
          "type": "long",
          "canBeNull": false,
          "fullType": "long"
        }
      }
    },
    "billing.ovhAccount.OperationEnum": {
      "namespace": "billing.ovhAccount",
      "description": "Operations an OVH account movement can represent",
      "id": "OperationEnum",
      "enumType": "string",
      "enum": [
        "cancel-credit",
        "cancel-debit",
        "cancel-pre-debit",
        "credit",
        "debit",
        "pre-credit",
        "pre-debit"
      ]
    }
  },
  "apiVersion": "1.0",
  "basePath": "https://ca.api.soyoustart.com/1.0"
}