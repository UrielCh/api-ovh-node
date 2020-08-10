import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/pack/xdsl",
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
      "description": "Operations about the PACK service"
    },
    {
      "path": "/pack/xdsl/{packName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.PackAdsl",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "pack.xdsl.PackAdsl",
              "paramType": "body",
              "fullType": "pack.xdsl.PackAdsl",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Pack of xDSL services"
    },
    {
      "path": "/pack/xdsl/{packName}/addressMove/eligibility",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "address",
              "dataType": "xdsl.eligibility.Address",
              "paramType": "body",
              "fullType": "xdsl.eligibility.Address",
              "required": false,
              "description": "The address to test, if no lineNumber"
            },
            {
              "name": "lineNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The line number to test, if no address"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.AsyncTask<pack.xdsl.addressMove.Eligibility>",
          "noAuthentication": false,
          "description": "Eligibility to move the access"
        }
      ],
      "description": "eligibility operations"
    },
    {
      "path": "/pack/xdsl/{packName}/addressMove/move",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "landline",
              "dataType": "pack.xdsl.addressMove.Landline",
              "paramType": "body",
              "fullType": "pack.xdsl.addressMove.Landline",
              "required": false,
              "description": "Data identifying the landline at the new address, if available"
            },
            {
              "name": "moveOutDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "The date when the customer is no longer at the current address. Must be between now and +30 days"
            },
            {
              "name": "keepCurrentNumber",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Whether or not the current number should be kept"
            },
            {
              "name": "creation",
              "dataType": "pack.xdsl.addressMove.Creation",
              "paramType": "body",
              "fullType": "pack.xdsl.addressMove.Creation",
              "required": false,
              "description": "The data to create a new line if lineNumber is not available"
            },
            {
              "name": "offerCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The offerCode from addressMove/eligibility"
            },
            {
              "name": "provider",
              "dataType": "xdsl.eligibility.ProviderEnum",
              "paramType": "body",
              "fullType": "xdsl.eligibility.ProviderEnum",
              "required": false,
              "description": "Provider of the new line"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.AsyncTask<long>",
          "noAuthentication": false,
          "description": "Move the Xdsl access to another address"
        }
      ],
      "description": "move operations"
    },
    {
      "path": "/pack/xdsl/{packName}/addressMove/moveFtth",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-11-22T10:00:00+01:00",
            "deprecatedDate": "2019-10-22T10:00:00+01:00",
            "replacement": "/pack/xdsl/{packName}/addressMove/moveOffer"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "floor",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Floor identifier, \"null\" if no identifier is available"
            },
            {
              "name": "otpReference",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Reference of the Optical Termination Point"
            },
            {
              "name": "moveOutDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "The date when the customer is no longer at the current address. Must be between now and +30 days. The default date will be the one in 30 days from now."
            },
            {
              "name": "stair",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Stair identifier, \"null\" if no identifier is available"
            },
            {
              "name": "otp",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Do you have an Optical Termination Point (Point de Terminaison Optique) at home ?"
            },
            {
              "name": "buildingReference",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Building reference for FTTH offers"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.AsyncTask<long>",
          "noAuthentication": false,
          "description": "Move the FTTH access to another address"
        }
      ],
      "description": "moveFtth operations"
    },
    {
      "path": "/pack/xdsl/{packName}/addressMove/moveOffer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "acceptContracts",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "You explicitly accept the terms of the contract corresponding to your new offer"
            },
            {
              "name": "floor",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Floor identifier, \"null\" if no identifier is available"
            },
            {
              "name": "moveOutDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "The date when the customer is no longer at the current address. Must be between now and +30 days. The default date will be the one in 30 days from now."
            },
            {
              "name": "offerName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reference of the new offer"
            },
            {
              "name": "nicShipping",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "nicShipping if a shipping is needed"
            },
            {
              "name": "engageMonths",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Number of months of re-engagement"
            },
            {
              "name": "eligibilityReference",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Eligibility reference"
            },
            {
              "name": "keepCurrentNumber",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Whether or not the current number should be kept"
            },
            {
              "name": "stair",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Stair identifier, \"null\" if no identifier is available"
            },
            {
              "name": "meeting",
              "dataType": "xdsl.eligibility.BookMeetingSlot",
              "paramType": "body",
              "fullType": "xdsl.eligibility.BookMeetingSlot",
              "required": false,
              "description": "Data to book a meeting slot"
            },
            {
              "name": "options",
              "dataType": "pack.xdsl.migration.OfferOption[]",
              "paramType": "body",
              "fullType": "pack.xdsl.migration.OfferOption[]",
              "required": false,
              "description": "Options wanted in the new offer"
            },
            {
              "name": "productCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Product code, an unique identifier for the product from addressMove/offer"
            },
            {
              "name": "mondialRelayId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Mondial relay ID if a shipping is needed"
            },
            {
              "name": "buildingReference",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Building reference for FTTH offers"
            },
            {
              "name": "subServicesToDelete",
              "dataType": "pack.xdsl.migration.OfferServiceToDelete[]",
              "paramType": "body",
              "fullType": "pack.xdsl.migration.OfferServiceToDelete[]",
              "required": false,
              "description": "List of domains of services to delete if needed"
            },
            {
              "name": "otpReference",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Reference of the Optical Termination Point"
            },
            {
              "name": "otp",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Do you have an Optical Termination Point (Point de Terminaison Optique) at home ?"
            },
            {
              "name": "contactPhone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Customer contact phone number"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.AsyncTask<long>",
          "noAuthentication": false,
          "description": "Move the access to another address"
        }
      ],
      "description": "moveOffer operations"
    },
    {
      "path": "/pack/xdsl/{packName}/addressMove/offers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "eligibilityReference",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Eligibility reference"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.AsyncTask<pack.xdsl.addressMove.MoveOfferResponse>",
          "noAuthentication": false,
          "description": "Get the possibilities of address move offers available"
        }
      ],
      "description": "offers operations"
    },
    {
      "path": "/pack/xdsl/{packName}/canCancelResiliation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Check if the resiliation can be cancelled"
        }
      ],
      "description": "canCancelResiliation operations"
    },
    {
      "path": "/pack/xdsl/{packName}/cancelResiliation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Cancel the ongoing resiliation"
        }
      ],
      "description": "cancelResiliation operations"
    },
    {
      "path": "/pack/xdsl/{packName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactAdmin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as admin contact"
            },
            {
              "name": "contactTech",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as tech contact"
            },
            {
              "name": "contactBilling",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as billing contact"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Launch a contact change procedure"
        }
      ],
      "description": "Change the contacts of this service"
    },
    {
      "path": "/pack/xdsl/{packName}/contactOwner",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.ContactInfos",
          "noAuthentication": false,
          "description": "Get contact infos about the owner"
        }
      ],
      "description": "contactOwner operations"
    },
    {
      "path": "/pack/xdsl/{packName}/domain/options/tlds",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get the available tlds for domain order"
        }
      ],
      "description": "tlds operations"
    },
    {
      "path": "/pack/xdsl/{packName}/domain/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Domain services"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            },
            {
              "name": "tld",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "TLD of the domain"
            },
            {
              "name": "authInfo",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Needed for transfer from another registrar"
            },
            {
              "name": "action",
              "dataType": "pack.xdsl.DomainActionEnum",
              "paramType": "body",
              "fullType": "pack.xdsl.DomainActionEnum",
              "required": true,
              "description": "Domain action"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Activate a domain service"
        }
      ],
      "description": "List the pack.xdsl.DomainService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/emailPro/options/domains",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List the available domains for the Email Pro service"
        }
      ],
      "description": "domains operations"
    },
    {
      "path": "/pack/xdsl/{packName}/emailPro/options/isEmailAvailable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The email address"
            }
          ],
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Check if the given email address is available for an Email Pro activation"
        }
      ],
      "description": "isEmailAvailable operations"
    },
    {
      "path": "/pack/xdsl/{packName}/emailPro/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List the Email Pro services"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "The password"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The email address"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Activate an Email Pro service"
        }
      ],
      "description": "List the pack.xdsl.EmailProService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/exchangeAccount/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Exchange 2013 services"
        }
      ],
      "description": "List the pack.xdsl.ExchangeAccountService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/exchangeAccount/services/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "pack.xdsl.ExchangeAccountService",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Exchange 2013 service"
    },
    {
      "path": "/pack/xdsl/{packName}/exchangeIndividual/options/domains",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get the available domains"
        }
      ],
      "description": "domains operations"
    },
    {
      "path": "/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Check if the email address is available for service creation"
        }
      ],
      "description": "isEmailAvailable operations"
    },
    {
      "path": "/pack/xdsl/{packName}/exchangeIndividual/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Exchange services"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2016-06-30:00:00+01:00",
            "deprecatedDate": "2016-05-30T08:00:00+01:00",
            "replacement": "/email/exchange/{organizationName}/service/{exchangeService}/account"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Email address"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Activate an exchange service"
        }
      ],
      "description": "List the pack.xdsl.ExchangeIndividual objects"
    },
    {
      "path": "/pack/xdsl/{packName}/exchangeLite/options/isEmailAvailable",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Check if the email address is available for service creation"
        }
      ],
      "description": "isEmailAvailable operations"
    },
    {
      "path": "/pack/xdsl/{packName}/exchangeLite/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Exchange lite services"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2016-06-30:00:00+01:00",
            "deprecatedDate": "2016-05-30T08:00:00+01:00",
            "replacement": "/email/exchange/{organizationName}/service/{exchangeService}/account"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Last name"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "First name"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Display name"
            },
            {
              "name": "initials",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Initials"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Email address"
            },
            {
              "name": "antispam",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Antispam protection"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Activate a exchange lite service"
        }
      ],
      "description": "List the pack.xdsl.ExchangeLiteService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/exchangeLite/services/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "pack.xdsl.ExchangeLiteService",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Exchange account service"
    },
    {
      "path": "/pack/xdsl/{packName}/exchangeOrganization/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Exchange 2013 organization services"
        }
      ],
      "description": "List the pack.xdsl.ExchangeOrganizationService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/hostedEmail/options/domains",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get the hostedemail available domains"
        }
      ],
      "description": "domains operations"
    },
    {
      "path": "/pack/xdsl/{packName}/hostedEmail/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Hosted email services"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Email address"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Activate an hosted email service"
        }
      ],
      "description": "List the pack.xdsl.HostedEmailService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/hostedEmail/services/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete hosted email account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "pack.xdsl.HostedEmailService",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Hosted email services"
    },
    {
      "path": "/pack/xdsl/{packName}/hostedEmail/services/{domain}/account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "pack.xdsl.HostedEmail.Account",
          "noAuthentication": false,
          "description": "Get hosted email account informations"
        }
      ],
      "description": "account operations"
    },
    {
      "path": "/pack/xdsl/{packName}/hostedEmail/services/{domain}/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "New password"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Change hosted email account password"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/pack/xdsl/{packName}/hostedEmail/services/{domain}/configuration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "pack.xdsl.HostedEmail.Configuration",
          "noAuthentication": false,
          "description": "Get hosted email configuration informations"
        }
      ],
      "description": "configuration operations"
    },
    {
      "path": "/pack/xdsl/{packName}/hubic/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Hubic perso services"
        }
      ],
      "description": "List the pack.xdsl.Hubic objects"
    },
    {
      "path": "/pack/xdsl/{packName}/hubic/services/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "pack.xdsl.Hubic",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Hubic service"
    },
    {
      "path": "/pack/xdsl/{packName}/hubic/services/{domain}/details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "pack.xdsl.AsyncTask<xdsl.hubic.HubicDetailsResponse>",
          "noAuthentication": false,
          "description": "Details associated to a voucher"
        }
      ],
      "description": "details operations"
    },
    {
      "path": "/pack/xdsl/{packName}/migration/migrate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "subServicesToDelete",
              "dataType": "pack.xdsl.migration.OfferServiceToDelete[]",
              "paramType": "body",
              "fullType": "pack.xdsl.migration.OfferServiceToDelete[]",
              "required": false,
              "description": "List of domains of services to delete if needed"
            },
            {
              "name": "nicShipping",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "nicShipping if a shipping is needed"
            },
            {
              "name": "otpReference",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Reference of the Optical Termination Point"
            },
            {
              "name": "engageMonths",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Number of months of re-engagement"
            },
            {
              "name": "mondialRelayId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Mondial relay ID if a shipping is needed"
            },
            {
              "name": "otp",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Do you have an Optical Termination Point (Point de Terminaison Optique) at home ?"
            },
            {
              "name": "stair",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Stair identifier, \"_NA_\" if no identifier is available"
            },
            {
              "name": "offerName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reference of the new offer"
            },
            {
              "name": "options",
              "dataType": "pack.xdsl.migration.OfferOption[]",
              "paramType": "body",
              "fullType": "pack.xdsl.migration.OfferOption[]",
              "required": false,
              "description": "Options wanted in the new offer"
            },
            {
              "name": "floor",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Floor identifier, \"_NA_\" if no identifier is available"
            },
            {
              "name": "acceptContracts",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "You explicitly accept the terms of the contract corresponding to your new offer"
            },
            {
              "name": "contactPhone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Customer contact phone number"
            },
            {
              "name": "buildingReference",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Building reference for FTTH offers"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Migrate to the selected offer"
        }
      ],
      "description": "migrate operations"
    },
    {
      "path": "/pack/xdsl/{packName}/migration/offers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>",
          "noAuthentication": false,
          "description": "Get the possibilities of migration offers available"
        }
      ],
      "description": "offers operations"
    },
    {
      "path": "/pack/xdsl/{packName}/migration/servicesToDelete",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "options",
              "dataType": "pack.xdsl.migration.OfferOption[]",
              "paramType": "body",
              "fullType": "pack.xdsl.migration.OfferOption[]",
              "required": false,
              "description": "Options wanted in the new offer"
            },
            {
              "name": "offerName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Reference of the new offer"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.migration.SubServiceToDelete[]",
          "noAuthentication": false,
          "description": "Calculate services to delete with new offer and options"
        }
      ],
      "description": "servicesToDelete operations"
    },
    {
      "path": "/pack/xdsl/{packName}/promotionCode/capabilities",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.promotionCode.Capabilities",
          "noAuthentication": false,
          "description": "Get informations about the promotion code generation"
        }
      ],
      "description": "capabilities operations"
    },
    {
      "path": "/pack/xdsl/{packName}/promotionCode/generate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Creates a task to generate a new promotion code"
        }
      ],
      "description": "generate operations"
    },
    {
      "path": "/pack/xdsl/{packName}/resiliate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "resiliationSurvey",
              "dataType": "pack.xdsl.ResiliationSurvey",
              "paramType": "body",
              "fullType": "pack.xdsl.ResiliationSurvey",
              "required": true,
              "description": "Comment about resiliation reasons"
            },
            {
              "name": "resiliationDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Effective date of the resiliation"
            },
            {
              "name": "servicesToKeep",
              "dataType": "double[]",
              "paramType": "body",
              "fullType": "double[]",
              "required": false,
              "description": "Ids of service you will keep on resiliation. (you can get it with /pack/xdsl/{packName}/subServices)"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.ResiliationFollowUpDetail",
          "noAuthentication": false,
          "description": "Resiliate the pack"
        }
      ],
      "description": "resiliate operations"
    },
    {
      "path": "/pack/xdsl/{packName}/resiliationFollowUp",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.ResiliationFollowUpDetail",
          "noAuthentication": false,
          "description": "Get information about the ongoing resiliation"
        }
      ],
      "description": "resiliationFollowUp operations"
    },
    {
      "path": "/pack/xdsl/{packName}/resiliationTerms",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            },
            {
              "name": "resiliationDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "The desired resiliation date"
            }
          ],
          "responseType": "pack.xdsl.ResiliationTerms",
          "noAuthentication": false,
          "description": "Get resiliation terms"
        }
      ],
      "description": "resiliationTerms operations"
    },
    {
      "path": "/pack/xdsl/{packName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "services.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "services.Service",
              "paramType": "body",
              "fullType": "services.Service",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Details about a Service"
    },
    {
      "path": "/pack/xdsl/{packName}/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.ServiceInformation[]",
          "noAuthentication": false,
          "description": "Informations about the services included in the pack"
        }
      ],
      "description": "services operations"
    },
    {
      "path": "/pack/xdsl/{packName}/shippingAddresses",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            },
            {
              "name": "context",
              "dataType": "pack.xdsl.ShippingAddressContextEnum",
              "paramType": "query",
              "fullType": "pack.xdsl.ShippingAddressContextEnum",
              "required": true,
              "description": "Context"
            }
          ],
          "responseType": "pack.xdsl.ShippingAddress[]",
          "noAuthentication": false,
          "description": "Allowed shipping addresses given a context"
        }
      ],
      "description": "shippingAddresses operations"
    },
    {
      "path": "/pack/xdsl/{packName}/siteBuilderFull/options/domains",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.SiteBuilderDomain[]",
          "noAuthentication": false,
          "description": "Get the available domains"
        }
      ],
      "description": "domains operations"
    },
    {
      "path": "/pack/xdsl/{packName}/siteBuilderFull/options/templates",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.SiteBuilderTemplate[]",
          "noAuthentication": false,
          "description": "Get the available templates"
        }
      ],
      "description": "templates operations"
    },
    {
      "path": "/pack/xdsl/{packName}/siteBuilderFull/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Sitebuilder full services"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "subdomain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Subdomain"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            },
            {
              "name": "templateId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Template ID"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Activate a sitebuilder full service"
        }
      ],
      "description": "List the pack.xdsl.SiteBuilderFullService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/siteBuilderStart/options/domains",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.SiteBuilderDomain[]",
          "noAuthentication": false,
          "description": "Get the available domains"
        }
      ],
      "description": "domains operations"
    },
    {
      "path": "/pack/xdsl/{packName}/siteBuilderStart/options/templates",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.SiteBuilderTemplate[]",
          "noAuthentication": false,
          "description": "Get the available templates"
        }
      ],
      "description": "templates operations"
    },
    {
      "path": "/pack/xdsl/{packName}/siteBuilderStart/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Sitebuilder start services"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "templateId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Template ID"
            },
            {
              "name": "subdomain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Subdomain"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Activate a sitebuilder full service"
        }
      ],
      "description": "List the pack.xdsl.SiteBuilderStartService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/subServices",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List services contained in the pack"
        }
      ],
      "description": "List the pack.xdsl.Service objects"
    },
    {
      "path": "/pack/xdsl/{packName}/subServices/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Service link to the pack"
    },
    {
      "path": "/pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "pack.xdsl.UnpackTerms",
          "noAuthentication": false,
          "description": "Give the condition to unpack service from pack"
        }
      ],
      "description": "keepServiceTerms operations"
    },
    {
      "path": "/pack/xdsl/{packName}/tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            },
            {
              "name": "status",
              "dataType": "pack.xdsl.TaskStatusEnum",
              "paramType": "query",
              "fullType": "pack.xdsl.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of function property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks scheduled for this pack"
        }
      ],
      "description": "List the pack.xdsl.Task objects"
    },
    {
      "path": "/pack/xdsl/{packName}/tasks/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Describes the current status of a task"
    },
    {
      "path": "/pack/xdsl/{packName}/voipBillingAccount/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "VOIP billing accounts"
        }
      ],
      "description": "List the pack.xdsl.BillingAccountService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/voipEcofax/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "VOIP ecofax service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.Task",
          "noAuthentication": false,
          "description": "Activate a voicefax service"
        }
      ],
      "description": "List the pack.xdsl.VoipEcoFaxService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/voipLine/options/customShippingAddress",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Last name"
            },
            {
              "name": "zipCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Zip code"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "First name"
            },
            {
              "name": "cityName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "City name"
            },
            {
              "name": "address",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Address, including street name"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "long",
          "noAuthentication": false,
          "description": "Create a new shippingId to be used for voipLine service creation"
        }
      ],
      "description": "customShippingAddress operations"
    },
    {
      "path": "/pack/xdsl/{packName}/voipLine/options/hardwares",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.VoIPHardware[]",
          "noAuthentication": false,
          "description": "Get available hardwares"
        }
      ],
      "description": "hardwares operations"
    },
    {
      "path": "/pack/xdsl/{packName}/voipLine/options/shippingAddresses",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.ShippingAddress[]",
          "noAuthentication": false,
          "description": "Get available shipping addresses"
        }
      ],
      "description": "shippingAddresses operations"
    },
    {
      "path": "/pack/xdsl/{packName}/voipLine/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "VOIP line services"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "hardwareNames",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": true,
              "description": "List of names from hardwares call"
            },
            {
              "name": "mondialRelayId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Mondial relay ID"
            },
            {
              "name": "shippingId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Shipping ID for the order"
            },
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "pack.xdsl.VoIPLineOrder",
          "noAuthentication": false,
          "description": "Activate a voip line service"
        }
      ],
      "description": "List the pack.xdsl.VoipLineService objects"
    },
    {
      "path": "/pack/xdsl/{packName}/voipLine/services/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
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
          "responseType": "pack.xdsl.VoipLineService",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "VOIP line services"
    },
    {
      "path": "/pack/xdsl/{packName}/xdslAccess/services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "packName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Pack name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "xDSL access services"
        }
      ],
      "description": "List the pack.xdsl.XdslAccessService objects"
    }
  ],
  "resourcePath": "/pack/xdsl",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
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
    "connectivity.eligibility.Building": {
      "id": "Building",
      "namespace": "connectivity.eligibility",
      "description": "Details of a Building",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Building name",
          "required": true
        },
        "nro": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Building NRO (Optical main distribution frame)",
          "required": false
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier which refer to a building uniquely",
          "required": true
        },
        "stairs": {
          "type": "connectivity.eligibility.BuildingStair[]",
          "fullType": "connectivity.eligibility.BuildingStair[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Stairs for this building",
          "required": true
        },
        "type": {
          "type": "connectivity.eligibility.BuildingTypeEnum",
          "fullType": "connectivity.eligibility.BuildingTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Building type",
          "required": true
        }
      }
    },
    "connectivity.eligibility.BuildingStair": {
      "id": "BuildingStair",
      "namespace": "connectivity.eligibility",
      "description": "Stair details of a Building",
      "properties": {
        "floors": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of floor indentifier, \"_NA_\" if no identifier is available",
          "required": true
        },
        "stair": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Stair identifier, \"_NA_\" if no identifier is available",
          "required": true
        }
      }
    },
    "connectivity.eligibility.BuildingTypeEnum": {
      "id": "BuildingTypeEnum",
      "namespace": "connectivity.eligibility",
      "description": "Building type",
      "enum": [
        "BUILDING",
        "HOUSE"
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
    "pack.xdsl.AsyncTask<T>": {
      "id": "AsyncTask",
      "namespace": "pack.xdsl",
      "description": "Async task",
      "generics": [
        "T"
      ],
      "properties": {
        "error": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Error",
          "required": false
        },
        "result": {
          "type": "T",
          "fullType": "T",
          "canBeNull": true,
          "readOnly": false,
          "description": "Result of the call",
          "required": false
        },
        "status": {
          "type": "pack.xdsl.AsyncTaskStatusEnum",
          "fullType": "pack.xdsl.AsyncTaskStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the call",
          "required": true
        }
      }
    },
    "pack.xdsl.AsyncTaskStatusEnum": {
      "id": "AsyncTaskStatusEnum",
      "namespace": "pack.xdsl",
      "description": "AsyncTask status",
      "enum": [
        "error",
        "ok",
        "pending"
      ],
      "enumType": "string"
    },
    "pack.xdsl.ContactInfos": {
      "id": "ContactInfos",
      "namespace": "pack.xdsl",
      "description": "Information about the contact",
      "properties": {
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "contact address",
          "required": false
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "contact city",
          "required": false
        },
        "country": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "contact country",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "contact email",
          "required": true
        },
        "firstname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "contact firstname",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "contact name",
          "required": false
        },
        "organisation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "contact organisation",
          "required": false
        },
        "phone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "contact phone",
          "required": false
        },
        "phoneCountry": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "contact phoneCountry",
          "required": false
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "contact zip",
          "required": false
        }
      }
    },
    "pack.xdsl.DomainActionEnum": {
      "id": "DomainActionEnum",
      "namespace": "pack.xdsl",
      "description": "Domain action",
      "enum": [
        "create",
        "trade",
        "transfer"
      ],
      "enumType": "string"
    },
    "pack.xdsl.ExchangeAccountService": {
      "id": "ExchangeAccountService",
      "namespace": "pack.xdsl",
      "description": "Exchange 2013 service",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "exchangeService": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "organizationName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "pack.xdsl.ExchangeLiteService": {
      "id": "ExchangeLiteService",
      "namespace": "pack.xdsl",
      "description": "Exchange account service",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "pack.xdsl.HostedEmail.Account": {
      "id": "Account",
      "namespace": "pack.xdsl.HostedEmail",
      "description": "HostedEmail account",
      "properties": {
        "antispamEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the anti-spam enabled ?",
          "required": true
        },
        "antivirusEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the anti-virus enabled ?",
          "required": true
        },
        "offer": {
          "type": "pack.xdsl.HostedEmail.AccountOfferEnum",
          "fullType": "pack.xdsl.HostedEmail.AccountOfferEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Offer name",
          "required": true
        },
        "primaryEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Primary email address",
          "required": true
        },
        "quota": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Quota of the mailbox",
          "required": true
        },
        "size": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Size of the maibox",
          "required": true
        }
      }
    },
    "pack.xdsl.HostedEmail.AccountOfferEnum": {
      "id": "AccountOfferEnum",
      "namespace": "pack.xdsl.HostedEmail",
      "description": "Available offers",
      "enum": [
        "individual"
      ],
      "enumType": "string"
    },
    "pack.xdsl.HostedEmail.Configuration": {
      "id": "Configuration",
      "namespace": "pack.xdsl.HostedEmail",
      "description": "HostedEmail configuration",
      "properties": {
        "services": {
          "type": "pack.xdsl.HostedEmail.ConfigurationService[]",
          "fullType": "pack.xdsl.HostedEmail.ConfigurationService[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of services configurations",
          "required": true
        },
        "status": {
          "type": "pack.xdsl.HostedEmail.ConfigurationStatusEnum",
          "fullType": "pack.xdsl.HostedEmail.ConfigurationStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status",
          "required": true
        },
        "webmailUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Webmail url",
          "required": true
        }
      }
    },
    "pack.xdsl.HostedEmail.ConfigurationService": {
      "id": "ConfigurationService",
      "namespace": "pack.xdsl.HostedEmail",
      "description": "HostedEmail configuration service",
      "properties": {
        "host": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Service host",
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Service IP",
          "required": true
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Service port",
          "required": true
        },
        "service": {
          "type": "pack.xdsl.HostedEmail.ConfigurationServiceEnum",
          "fullType": "pack.xdsl.HostedEmail.ConfigurationServiceEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Service name",
          "required": true
        },
        "smtpAuth": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Does the service use SMTP AUTH ?",
          "required": false
        },
        "startTls": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Does the service use STARTTLS ?",
          "required": true
        }
      }
    },
    "pack.xdsl.HostedEmail.ConfigurationServiceEnum": {
      "id": "ConfigurationServiceEnum",
      "namespace": "pack.xdsl.HostedEmail",
      "description": "Available types of service",
      "enum": [
        "imap",
        "imaps",
        "pop3",
        "pop3s",
        "smtp",
        "smtps",
        "submission"
      ],
      "enumType": "string"
    },
    "pack.xdsl.HostedEmail.ConfigurationStatusEnum": {
      "id": "ConfigurationStatusEnum",
      "namespace": "pack.xdsl.HostedEmail",
      "description": "Available configuration statuses",
      "enum": [
        "active",
        "suspended"
      ],
      "enumType": "string"
    },
    "pack.xdsl.HostedEmailService": {
      "id": "HostedEmailService",
      "namespace": "pack.xdsl",
      "description": "Hosted email services",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "pack.xdsl.Hubic": {
      "id": "Hubic",
      "namespace": "pack.xdsl",
      "description": "Hubic service",
      "properties": {
        "bytes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Size of the hubic account in bytes",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "isUsed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicate if the voucher is used or not",
          "required": true
        },
        "size": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Human readable size of the hubic account",
          "required": true
        },
        "voucher": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Voucher to enter on HubiC website to activate the account",
          "required": false
        }
      }
    },
    "pack.xdsl.PackAdsl": {
      "id": "PackAdsl",
      "namespace": "pack.xdsl",
      "description": "Pack of xDSL services",
      "properties": {
        "capabilities": {
          "type": "pack.xdsl.PackCapabilities",
          "fullType": "pack.xdsl.PackCapabilities",
          "canBeNull": false,
          "readOnly": true,
          "description": "Capabilities of the pack",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Customer pack description",
          "required": false
        },
        "offerDescription": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the offer",
          "required": true
        },
        "offerPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": true,
          "description": "Price of the offer",
          "required": true
        },
        "packName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the xdsl pack",
          "required": true
        }
      }
    },
    "pack.xdsl.PackCapabilities": {
      "id": "PackCapabilities",
      "namespace": "pack.xdsl",
      "description": "Describe the capabilities of this pack",
      "properties": {
        "canMoveAddress": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not this pack can move address",
          "required": true
        },
        "isLegacyOffer": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not this pack is from an old offer",
          "required": true
        }
      }
    },
    "pack.xdsl.ResiliationFollowUpDetail": {
      "id": "ResiliationFollowUpDetail",
      "namespace": "pack.xdsl",
      "description": "Details about the resiliation",
      "properties": {
        "dateTodo": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date when the resiliation will take effect",
          "required": true
        },
        "needModemReturn": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If the customer needs to return his modem",
          "required": true
        },
        "registrationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date when the resiliation was asked",
          "required": true
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the resiliation",
          "required": true
        }
      }
    },
    "pack.xdsl.ResiliationReasonEnum": {
      "id": "ResiliationReasonEnum",
      "namespace": "pack.xdsl",
      "description": "Reason of a resiliation",
      "enum": [
        "addressMove",
        "billingProblems",
        "cessationOfActivity",
        "changeOfTerms",
        "ftth",
        "goToCompetitor",
        "other",
        "technicalProblems"
      ],
      "enumType": "string"
    },
    "pack.xdsl.ResiliationSurvey": {
      "id": "ResiliationSurvey",
      "namespace": "pack.xdsl",
      "description": "Information about the reason for the resiliation",
      "properties": {
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Comment about this resiliation",
          "required": false
        },
        "type": {
          "type": "pack.xdsl.ResiliationReasonEnum",
          "fullType": "pack.xdsl.ResiliationReasonEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of reason for the resiliation",
          "required": true
        }
      }
    },
    "pack.xdsl.ResiliationTerms": {
      "id": "ResiliationTerms",
      "namespace": "pack.xdsl",
      "description": "Show the resiliation terms",
      "properties": {
        "due": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price due at resiliationDate",
          "required": true
        },
        "engageDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Date until which the customer is engaged",
          "required": false
        },
        "minResiliationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum date at which the pack can be resiliated",
          "required": true
        },
        "resiliationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date at which the pack will be resiliated",
          "required": true
        },
        "resiliationReasons": {
          "type": "pack.xdsl.ResiliationReasonEnum[]",
          "fullType": "pack.xdsl.ResiliationReasonEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of available resiliation reasons",
          "required": true
        }
      }
    },
    "pack.xdsl.Service": {
      "id": "Service",
      "namespace": "pack.xdsl",
      "description": "Service link to the pack",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "id": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "type": {
          "type": "pack.xdsl.ServiceNameEnum",
          "fullType": "pack.xdsl.ServiceNameEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "pack.xdsl.ServiceInformation": {
      "id": "ServiceInformation",
      "namespace": "pack.xdsl",
      "description": "Informations about a service",
      "properties": {
        "inCreation": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "pack.xdsl.ServiceNameEnum",
          "fullType": "pack.xdsl.ServiceNameEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "total": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "used": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "pack.xdsl.ServiceNameEnum": {
      "id": "ServiceNameEnum",
      "namespace": "pack.xdsl",
      "description": "Service name",
      "enum": [
        "domain",
        "emailPro",
        "exchangeAccount",
        "exchangeIndividual",
        "exchangeLite",
        "exchangeOrganization",
        "hostedEmail",
        "hubic",
        "modem",
        "overTheBoxHardware",
        "overTheBoxService",
        "siteBuilderFull",
        "siteBuilderStart",
        "voipAlias",
        "voipBillingAccount",
        "voipEcoFax",
        "voipLine",
        "voipTrunk",
        "xdslAccess"
      ],
      "enumType": "string"
    },
    "pack.xdsl.ShippingAddress": {
      "id": "ShippingAddress",
      "namespace": "pack.xdsl",
      "description": "Shipping address",
      "properties": {
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "cityName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "countryCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "shippingId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "zipCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "pack.xdsl.ShippingAddressContextEnum": {
      "id": "ShippingAddressContextEnum",
      "namespace": "pack.xdsl",
      "description": "Allowed contexts when looking for shipping addresses",
      "enum": [
        "migration",
        "voipLine"
      ],
      "enumType": "string"
    },
    "pack.xdsl.SiteBuilderDomain": {
      "id": "SiteBuilderDomain",
      "namespace": "pack.xdsl",
      "description": "SiteBuilder available domain infos",
      "properties": {
        "defaultSubDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "pack.xdsl.SiteBuilderTemplate": {
      "id": "SiteBuilderTemplate",
      "namespace": "pack.xdsl",
      "description": "SiteBuilder template infos",
      "properties": {
        "bkId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
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
        "previewImg": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "thumbImage": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "pack.xdsl.Task": {
      "id": "Task",
      "namespace": "pack.xdsl",
      "description": "Describes the current status of a task",
      "properties": {
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "pack.xdsl.TaskStatusEnum",
          "fullType": "pack.xdsl.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "updateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "pack.xdsl.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "pack.xdsl",
      "description": "Status of a task.",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "problem",
        "todo"
      ],
      "enumType": "string"
    },
    "pack.xdsl.UnpackTerms": {
      "id": "UnpackTerms",
      "namespace": "pack.xdsl",
      "description": "Terms to unpack services",
      "properties": {
        "isAllowed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Tells whether or not the service can be unpacked",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price bill on the unpack action",
          "required": true
        },
        "renewPeriod": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Renew period in month of the service",
          "required": true
        },
        "renewPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "The price it will cost when it will be renew",
          "required": true
        }
      }
    },
    "pack.xdsl.VoIPHardware": {
      "id": "VoIPHardware",
      "namespace": "pack.xdsl",
      "description": "Hardware for VoIP line",
      "properties": {
        "deposit": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "fees": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "image": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "max": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "needShipping": {
          "type": "boolean",
          "fullType": "boolean",
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
    "pack.xdsl.VoIPLineOrder": {
      "id": "VoIPLineOrder",
      "namespace": "pack.xdsl",
      "description": "Represents an order of VoIP lines",
      "properties": {
        "needPayment": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not this order need to be payed manually",
          "required": true
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "orderUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "taskIds": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "pack.xdsl.VoipLineService": {
      "id": "VoipLineService",
      "namespace": "pack.xdsl",
      "description": "VOIP line services",
      "properties": {
        "billingAccount": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "pack.xdsl.addressMove.Creation": {
      "id": "Creation",
      "namespace": "pack.xdsl.addressMove",
      "description": "The parameters needed to create a new landline",
      "properties": {
        "address": {
          "type": "xdsl.eligibility.Address",
          "fullType": "xdsl.eligibility.Address",
          "canBeNull": false,
          "readOnly": false,
          "description": "The address",
          "required": true
        },
        "meeting": {
          "type": "xdsl.eligibility.BookMeetingSlot",
          "fullType": "xdsl.eligibility.BookMeetingSlot",
          "canBeNull": false,
          "readOnly": false,
          "description": "Data to book a meeting slot",
          "required": true
        }
      }
    },
    "pack.xdsl.addressMove.Eligibility": {
      "id": "Eligibility",
      "namespace": "pack.xdsl.addressMove",
      "description": "Eligibility",
      "properties": {
        "keepCurrentPortability": {
          "type": "xdsl.eligibility.Portability",
          "fullType": "xdsl.eligibility.Portability",
          "canBeNull": true,
          "readOnly": false,
          "description": "Tells if the current number portability can be kept after the address move. Null if no number were ported.",
          "required": false
        },
        "offers": {
          "type": "pack.xdsl.addressMove.Offer[]",
          "fullType": "pack.xdsl.addressMove.Offer[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "The available offers at this address",
          "required": true
        }
      }
    },
    "pack.xdsl.addressMove.Landline": {
      "id": "Landline",
      "namespace": "pack.xdsl.addressMove",
      "description": "The parameters needed to activate the access on a landline",
      "properties": {
        "lineNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The number of the landline",
          "required": true
        },
        "portLineNumber": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not tha lineNumber should be ported to OVH, if eligibile",
          "required": true
        },
        "rio": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "A token to prove the ownership of the line number, needed to port the number",
          "required": false
        },
        "status": {
          "type": "xdsl.eligibility.LandlineStatusEnum",
          "fullType": "xdsl.eligibility.LandlineStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The status of the landline",
          "required": true
        },
        "unbundling": {
          "type": "xdsl.DeconsolidationEnum",
          "fullType": "xdsl.DeconsolidationEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The unbundling of the landline",
          "required": true
        }
      }
    },
    "pack.xdsl.addressMove.MoveOffer": {
      "id": "MoveOffer",
      "namespace": "pack.xdsl.addressMove",
      "description": "Address move offer",
      "properties": {
        "contracts": {
          "type": "order.Contract[]",
          "fullType": "order.Contract[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contracts details for this offer",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of the offer",
          "required": true
        },
        "engageMonths": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of months of engagement",
          "required": false
        },
        "modemReferenceToReturn": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Modem reference (Mac or Serial) to be returned",
          "required": false
        },
        "needModem": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Tells if the offer needs a modem",
          "required": true
        },
        "needNewModem": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Tells if the customer will have to change its modem",
          "required": true
        },
        "offerName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the offer",
          "required": true
        },
        "options": {
          "type": "pack.xdsl.migration.OfferAvailableOption[]",
          "fullType": "pack.xdsl.migration.OfferAvailableOption[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Available options for the migration",
          "required": true
        },
        "prices": {
          "type": "pack.xdsl.addressMove.PriceOffer",
          "fullType": "pack.xdsl.addressMove.PriceOffer",
          "canBeNull": false,
          "readOnly": false,
          "description": "Prices detailed applicable for this offer",
          "required": true
        },
        "productCodes": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of product from provider available for an offer",
          "required": true
        },
        "subServicesToDelete": {
          "type": "pack.xdsl.migration.SubServiceToDelete[]",
          "fullType": "pack.xdsl.migration.SubServiceToDelete[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of sub services to delete",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "URL of the offer",
          "required": true
        }
      }
    },
    "pack.xdsl.addressMove.MoveOfferResponse": {
      "id": "MoveOfferResponse",
      "namespace": "pack.xdsl.addressMove",
      "description": "List of available Move address offer",
      "properties": {
        "offers": {
          "type": "pack.xdsl.addressMove.MoveOffer[]",
          "fullType": "pack.xdsl.addressMove.MoveOffer[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Array of offers",
          "required": true
        }
      }
    },
    "pack.xdsl.addressMove.Offer": {
      "id": "Offer",
      "namespace": "pack.xdsl.addressMove",
      "description": "An offer",
      "properties": {
        "address": {
          "type": "xdsl.eligibility.Address",
          "fullType": "xdsl.eligibility.Address",
          "canBeNull": false,
          "readOnly": false,
          "description": "Address of the landline",
          "required": true
        },
        "estimatedDownload": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The estimated download synchronisation in kbps",
          "required": true
        },
        "estimatedUpload": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The estimated upload synchronisation in kbps",
          "required": true
        },
        "lineSectionsLength": {
          "type": "xdsl.LineSectionLength[]",
          "fullType": "xdsl.LineSectionLength[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Detailed information about the sections between the DSLAM and the telephone jack",
          "required": true
        },
        "lineStatus": {
          "type": "xdsl.eligibility.LandlineStatusEnum",
          "fullType": "xdsl.eligibility.LandlineStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The status of the landline",
          "required": true
        },
        "meetingSlots": {
          "type": "xdsl.eligibility.MeetingSlots",
          "fullType": "xdsl.eligibility.MeetingSlots",
          "canBeNull": true,
          "readOnly": false,
          "description": "Available meeting slots for the creation of this offer.",
          "required": false
        },
        "nra": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The NRA of the landline",
          "required": true
        },
        "offerCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The code of the offer",
          "required": true
        },
        "portability": {
          "type": "xdsl.eligibility.Portability",
          "fullType": "xdsl.eligibility.Portability",
          "canBeNull": false,
          "readOnly": false,
          "description": "Tells whether the tested number can be ported to OVH or not",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "The price of this offer",
          "required": true
        },
        "provider": {
          "type": "xdsl.eligibility.ProviderEnum",
          "fullType": "xdsl.eligibility.ProviderEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the request",
          "required": true
        },
        "reseller": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether this is a reseller offer or not",
          "required": true
        },
        "syncDownload": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The download synchronisation in kbps",
          "required": true
        },
        "syncUpload": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The upload synchronisation in kbps",
          "required": true
        },
        "type": {
          "type": "xdsl.DslTypeEnum",
          "fullType": "xdsl.DslTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "DSL technology",
          "required": true
        },
        "unbundling": {
          "type": "xdsl.DeconsolidationEnum",
          "fullType": "xdsl.DeconsolidationEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The unbundling type",
          "required": true
        }
      }
    },
    "pack.xdsl.addressMove.Price": {
      "id": "Price",
      "namespace": "pack.xdsl.addressMove",
      "description": "Price details for an offer",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of the price",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "description": "Price of the offer",
          "required": false
        }
      }
    },
    "pack.xdsl.addressMove.PriceOffer": {
      "id": "PriceOffer",
      "namespace": "pack.xdsl.addressMove",
      "description": "Price details for an offer",
      "properties": {
        "currentOfferPrice": {
          "type": "pack.xdsl.addressMove.Price",
          "fullType": "pack.xdsl.addressMove.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price of the current offer",
          "required": true
        },
        "due": {
          "type": "pack.xdsl.addressMove.Price",
          "fullType": "pack.xdsl.addressMove.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Upgrade offer price",
          "required": true
        },
        "firstYearPromo": {
          "type": "pack.xdsl.addressMove.Price",
          "fullType": "pack.xdsl.addressMove.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Subscription price the first year",
          "required": true
        },
        "installFees": {
          "type": "pack.xdsl.addressMove.Price",
          "fullType": "pack.xdsl.addressMove.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Installation fees",
          "required": true
        },
        "modemRental": {
          "type": "pack.xdsl.addressMove.Price",
          "fullType": "pack.xdsl.addressMove.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price for modem rental",
          "required": true
        },
        "price": {
          "type": "pack.xdsl.addressMove.Price",
          "fullType": "pack.xdsl.addressMove.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price of the offer",
          "required": true
        }
      }
    },
    "pack.xdsl.migration.MigrationOffer": {
      "id": "MigrationOffer",
      "namespace": "pack.xdsl.migration",
      "description": "Migration offer",
      "properties": {
        "contractList": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "DEPRECATED - List of contracts",
          "required": true
        },
        "contracts": {
          "type": "order.Contract[]",
          "fullType": "order.Contract[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of contracts for this offer",
          "required": true
        },
        "currentOfferPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price of the current offer",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of the offer",
          "required": true
        },
        "due": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "description": "Price to make the migration",
          "required": false
        },
        "engageMonths": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of months of engagement",
          "required": false
        },
        "engagementMonths": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of number of months possible for engagement",
          "required": true
        },
        "firstYearPromo": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "description": "Subscription price the first year",
          "required": false
        },
        "installFees": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "description": "Installation fees",
          "required": false
        },
        "modemMacToReturn": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Mac address of the modem to be returned",
          "required": false
        },
        "modemRental": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "description": "Price for modem rental",
          "required": false
        },
        "needModem": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Tells if the offer needs a modem",
          "required": true
        },
        "needNewModem": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Tells if the customer will have to change its modem",
          "required": true
        },
        "offerName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the offer",
          "required": true
        },
        "options": {
          "type": "pack.xdsl.migration.OfferAvailableOption[]",
          "fullType": "pack.xdsl.migration.OfferAvailableOption[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Available options for the migration",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price of the offer",
          "required": true
        },
        "subServicesToDelete": {
          "type": "pack.xdsl.migration.SubServiceToDelete[]",
          "fullType": "pack.xdsl.migration.SubServiceToDelete[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of sub services to delete",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "URL of the offer",
          "required": true
        }
      }
    },
    "pack.xdsl.migration.MigrationOfferResponse": {
      "id": "MigrationOfferResponse",
      "namespace": "pack.xdsl.migration",
      "description": "List of available Migration offer",
      "properties": {
        "buildings": {
          "type": "connectivity.eligibility.Building[]",
          "fullType": "connectivity.eligibility.Building[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Array of buildings",
          "required": true
        },
        "offers": {
          "type": "pack.xdsl.migration.MigrationOffer[]",
          "fullType": "pack.xdsl.migration.MigrationOffer[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Array of offers",
          "required": true
        }
      }
    },
    "pack.xdsl.migration.OfferAvailableOption": {
      "id": "OfferAvailableOption",
      "namespace": "pack.xdsl.migration",
      "description": "Available option for the offer",
      "properties": {
        "duration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of months paid for",
          "required": true
        },
        "included": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of slots included by default in this offer",
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
        "optional": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of optional slots that can be puchased",
          "required": true
        },
        "optionalPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": true,
          "readOnly": false,
          "description": "Price of an additional slot. You pay this price everytime the duration is expired",
          "required": false
        }
      }
    },
    "pack.xdsl.migration.OfferOption": {
      "id": "OfferOption",
      "namespace": "pack.xdsl.migration",
      "description": "Option of Offer",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the option",
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of slots, couting included slots",
          "required": true
        }
      }
    },
    "pack.xdsl.migration.OfferServiceToDelete": {
      "id": "OfferServiceToDelete",
      "namespace": "pack.xdsl.migration",
      "description": "Option of Offer",
      "properties": {
        "service": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the service",
          "required": true
        },
        "type": {
          "type": "pack.xdsl.ServiceNameEnum",
          "fullType": "pack.xdsl.ServiceNameEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the service to delete",
          "required": true
        }
      }
    },
    "pack.xdsl.migration.SubServiceToDelete": {
      "id": "SubServiceToDelete",
      "namespace": "pack.xdsl.migration",
      "description": "Sub service to delete",
      "properties": {
        "numberToDelete": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of services to be deleted",
          "required": true
        },
        "services": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of domains of sub services",
          "required": true
        },
        "type": {
          "type": "pack.xdsl.ServiceNameEnum",
          "fullType": "pack.xdsl.ServiceNameEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of service to be deleted",
          "required": true
        }
      }
    },
    "pack.xdsl.promotionCode.Capabilities": {
      "id": "Capabilities",
      "namespace": "pack.xdsl.promotionCode",
      "description": "Informations about a promotion code",
      "properties": {
        "amount": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Amount of the promotion code",
          "required": true
        },
        "canGenerate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "True if the promotion code generation is available",
          "required": true
        },
        "engagement": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of months of engagement",
          "required": true
        },
        "reasonCodes": {
          "type": "pack.xdsl.promotionCode.ReasonCodes[]",
          "fullType": "pack.xdsl.promotionCode.ReasonCodes[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Enum of the possible errors",
          "required": true
        }
      }
    },
    "pack.xdsl.promotionCode.ReasonCodes": {
      "id": "ReasonCodes",
      "namespace": "pack.xdsl.promotionCode",
      "description": "Reasons why the promotion code can not be generated",
      "enum": [
        "noMoreAvailable",
        "offerNotCompatible",
        "serviceNotInOkState",
        "stillEngaged",
        "taskInProgress"
      ],
      "enumType": "string"
    },
    "service.RenewType": {
      "id": "RenewType",
      "namespace": "service",
      "description": "Map a possible renew for a specific service",
      "properties": {
        "automatic": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service is automatically renewed",
          "required": true
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service will be deleted at expiration",
          "required": true
        },
        "forced": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "The service forced to be renewed",
          "required": true
        },
        "manualPayment": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "The service needs to be manually renewed and paid",
          "required": false
        },
        "period": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "period of renew in month",
          "required": false
        }
      }
    },
    "service.RenewalTypeEnum": {
      "id": "RenewalTypeEnum",
      "namespace": "service",
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
      "enumType": "string"
    },
    "service.StateEnum": {
      "id": "StateEnum",
      "namespace": "service",
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "enumType": "string"
    },
    "services.Service": {
      "id": "Service",
      "namespace": "services",
      "description": "Details about a Service",
      "properties": {
        "canDeleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "required": true
        },
        "contactAdmin": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "contactBilling": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "contactTech": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "creation": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "engagedUpTo": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "expiration": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "possibleRenewPeriod": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "All the possible renew period of your service in month",
          "required": false
        },
        "renew": {
          "type": "service.RenewType",
          "fullType": "service.RenewType",
          "canBeNull": true,
          "readOnly": false,
          "description": "Way of handling the renew",
          "required": false
        },
        "renewalType": {
          "type": "service.RenewalTypeEnum",
          "fullType": "service.RenewalTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "serviceId": {
          "type": "coreTypes.ServiceId:long",
          "fullType": "coreTypes.ServiceId:long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "service.StateEnum",
          "fullType": "service.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "xdsl.DeconsolidationEnum": {
      "id": "DeconsolidationEnum",
      "namespace": "xdsl",
      "description": "Deconsolidation of the line.",
      "enum": [
        "createNeighbour",
        "creation",
        "creationNeighbour",
        "partial",
        "total"
      ],
      "enumType": "string"
    },
    "xdsl.DslTypeEnum": {
      "id": "DslTypeEnum",
      "namespace": "xdsl",
      "description": "Possible DSL technologies",
      "enum": [
        "adsl",
        "ftth",
        "sdsl",
        "vdsl"
      ],
      "enumType": "string"
    },
    "xdsl.LineSectionLength": {
      "id": "LineSectionLength",
      "namespace": "xdsl",
      "properties": {
        "diameter": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The diameter of this section in millimeters",
          "required": true
        },
        "length": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The length of this section in meters",
          "required": true
        }
      }
    },
    "xdsl.eligibility.Address": {
      "id": "Address",
      "namespace": "xdsl.eligibility",
      "description": "Represents an address",
      "properties": {
        "building": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the building, if any",
          "required": false
        },
        "city": {
          "type": "xdsl.eligibility.City",
          "fullType": "xdsl.eligibility.City",
          "canBeNull": false,
          "readOnly": false,
          "description": "Informations about the city",
          "required": true
        },
        "door": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Identifier of the door, if any",
          "required": false
        },
        "floor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Identifier of the floor, if any",
          "required": false
        },
        "logo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Identifier of the historical operator landmark, if any",
          "required": false
        },
        "owner": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Owner of the line, this information can be restricted",
          "required": false
        },
        "residence": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the residence, if any",
          "required": false
        },
        "stair": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Identifier of the stair, if any",
          "required": false
        },
        "street": {
          "type": "xdsl.eligibility.Street",
          "fullType": "xdsl.eligibility.Street",
          "canBeNull": true,
          "readOnly": false,
          "description": "Informations about the street",
          "required": false
        },
        "streetNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number on the street",
          "required": false
        }
      }
    },
    "xdsl.eligibility.BookMeetingSlot": {
      "id": "BookMeetingSlot",
      "namespace": "xdsl.eligibility",
      "description": "Parameters to book a time slot for a meeting",
      "properties": {
        "fakeMeeting": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not to book a fake meeting slots (if no slots are available)",
          "required": true
        },
        "meetingSlot": {
          "type": "xdsl.eligibility.MeetingSlot",
          "fullType": "xdsl.eligibility.MeetingSlot",
          "canBeNull": true,
          "readOnly": false,
          "description": "The time slot to book, null if fakeMeeting is true",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The name of the customer",
          "required": false
        }
      }
    },
    "xdsl.eligibility.City": {
      "id": "City",
      "namespace": "xdsl.eligibility",
      "description": "Represent a city",
      "properties": {
        "inseeCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "INSEE code of the city",
          "required": true
        },
        "locality": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Locality (subset of a city)",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the city",
          "required": true
        },
        "zipCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zip code of the city",
          "required": true
        }
      }
    },
    "xdsl.eligibility.CodeAndMessage": {
      "id": "CodeAndMessage",
      "namespace": "xdsl.eligibility",
      "description": "A message and its code",
      "properties": {
        "code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "A code identifying the message",
          "required": true
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "A message",
          "required": true
        }
      }
    },
    "xdsl.eligibility.LandlineStatusEnum": {
      "id": "LandlineStatusEnum",
      "namespace": "xdsl.eligibility",
      "description": "Status of a landline",
      "enum": [
        "active",
        "inactive"
      ],
      "enumType": "string"
    },
    "xdsl.eligibility.MeetingSlot": {
      "id": "MeetingSlot",
      "namespace": "xdsl.eligibility",
      "description": "Represents a time slot for a meeting",
      "properties": {
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "The end of the time slot",
          "required": true
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "The beginning of the time slot",
          "required": true
        },
        "uiCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "An opaque string that represents an intervention unit",
          "required": true
        }
      }
    },
    "xdsl.eligibility.MeetingSlots": {
      "id": "MeetingSlots",
      "namespace": "xdsl.eligibility",
      "description": "List of available meeting time slots",
      "properties": {
        "canBookFakeMeeting": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not it is possible to book a fake meeting",
          "required": true
        },
        "meetingSlots": {
          "type": "xdsl.eligibility.MeetingSlot[]",
          "fullType": "xdsl.eligibility.MeetingSlot[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "A time slot",
          "required": true
        }
      }
    },
    "xdsl.eligibility.Portability": {
      "id": "Portability",
      "namespace": "xdsl.eligibility",
      "description": "Eligibility of the portability of the line number",
      "properties": {
        "comments": {
          "type": "xdsl.eligibility.CodeAndMessage[]",
          "fullType": "xdsl.eligibility.CodeAndMessage[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "The reason(s) of the negative portability eligibility",
          "required": true
        },
        "eligible": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not it is possible to port the line number. If false, commentList contains the reason(s)",
          "required": true
        },
        "underCondition": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not the portability is possible under condition. If true, warningList contains the reason(s)",
          "required": true
        },
        "warnings": {
          "type": "xdsl.eligibility.CodeAndMessage[]",
          "fullType": "xdsl.eligibility.CodeAndMessage[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "The special condition(s) of the portability",
          "required": true
        }
      }
    },
    "xdsl.eligibility.ProviderEnum": {
      "id": "ProviderEnum",
      "namespace": "xdsl.eligibility",
      "description": "The providers",
      "enum": [
        "axione",
        "ft",
        "kosc",
        "ovh",
        "sfr"
      ],
      "enumType": "string"
    },
    "xdsl.eligibility.Street": {
      "id": "Street",
      "namespace": "xdsl.eligibility",
      "description": "Represent a street",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the street",
          "required": true
        },
        "rivoliCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "RIVOLI identifier of the street",
          "required": true
        }
      }
    },
    "xdsl.hubic.HubicDetailsResponse": {
      "id": "HubicDetailsResponse",
      "namespace": "xdsl.hubic",
      "description": "Details that the user used for his voucher",
      "properties": {
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Mail used for the voucher",
          "required": true
        }
      }
    }
  }
}