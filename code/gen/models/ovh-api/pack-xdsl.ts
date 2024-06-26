import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/pack/xdsl.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the PACK service",
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
              "name": "packXdsl:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "map[string][]iam.resource.TagFilter",
              "description": "Filter resources on IAM tags",
              "name": "iamTags",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/pack/xdsl"
    },
    {
      "description": "Pack of xDSL services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.PackAdslWithIAM"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:put",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "pack.xdsl.PackAdsl",
              "description": "New object properties",
              "fullType": "pack.xdsl.PackAdsl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/pack/xdsl/{packName}"
    },
    {
      "description": "moveOffer operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Move the access to another address",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:addressMove/moveOffer",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "You explicitly accept the terms of the contract corresponding to your new offer",
              "fullType": "boolean",
              "name": "acceptContracts",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Building identifier, \"null\" if no identifier is available",
              "fullType": "string",
              "name": "building",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Building reference for FTTH and FTTE offers",
              "fullType": "string",
              "name": "buildingReference",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Customer contact phone number",
              "fullType": "string",
              "name": "contactPhone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Door identifier, \"null\" if no identifier is available",
              "fullType": "string",
              "name": "door",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Eligibility reference",
              "fullType": "string",
              "name": "eligibilityReference",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Number of months of re-engagement",
              "fullType": "long",
              "name": "engageMonths",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Floor identifier, \"null\" if no identifier is available",
              "fullType": "string",
              "name": "floor",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "connectivity.eligibility.InstallationTypeEnum",
              "description": "Installation type, only on FTTH technology",
              "fullType": "connectivity.eligibility.InstallationTypeEnum",
              "name": "installationType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Whether or not the current number should be kept",
              "fullType": "boolean",
              "name": "keepCurrentNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "xdsl.eligibility.BookMeetingSlot",
              "description": "Data to book a meeting slot",
              "fullType": "xdsl.eligibility.BookMeetingSlot",
              "name": "meeting",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "pack.xdsl.ModemOptionEnum",
              "description": "Modem choose",
              "fullType": "pack.xdsl.ModemOptionEnum",
              "name": "modem",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Mondial relay ID if a shipping is needed",
              "fullType": "long",
              "name": "mondialRelayId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "The date when the customer is no longer at the current address. Must be between now and +30 days. The default date will be the one in 30 days from now.",
              "fullType": "datetime",
              "name": "moveOutDate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "nicShipping if a shipping is needed",
              "fullType": "string",
              "name": "nicShipping",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Reference of the new offer",
              "fullType": "string",
              "name": "offerName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Allows you to personalize a delivery address for the ONT. If empty, the address will be that of the installation",
              "fullType": "string",
              "name": "ontShippingContact",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "pack.xdsl.migration.OfferOption[]",
              "description": "Options wanted in the new offer",
              "fullType": "pack.xdsl.migration.OfferOption[]",
              "name": "options",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Do you have an Optical Termination Point (Point de Terminaison Optique) at home ?",
              "fullType": "boolean",
              "name": "otp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Reference of the Optical Termination Point",
              "fullType": "string",
              "name": "otpReference",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Product code, an unique identifier for the product from addressMove/offer",
              "fullType": "string",
              "name": "productCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Residence identifier, \"null\" if no identifier is available",
              "fullType": "string",
              "name": "residence",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Stair identifier, \"null\" if no identifier is available",
              "fullType": "string",
              "name": "stair",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "pack.xdsl.migration.OfferServiceToDelete[]",
              "description": "List of domains of services to delete if needed",
              "fullType": "pack.xdsl.migration.OfferServiceToDelete[]",
              "name": "subServicesToDelete",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "pack.xdsl.migration.OfferServiceToKeep[]",
              "description": "List of domains of services to keep if needed",
              "fullType": "pack.xdsl.migration.OfferServiceToKeep[]",
              "name": "subServicesToKeep",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.AsyncTask<long>"
        }
      ],
      "path": "/pack/xdsl/{packName}/addressMove/moveOffer"
    },
    {
      "description": "offers operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the possibilities of address move offers available",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:addressMove/offers/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Eligibility reference",
              "fullType": "string",
              "name": "eligibilityReference",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.AsyncTask<pack.xdsl.addressMove.MoveOfferResponse>"
        }
      ],
      "path": "/pack/xdsl/{packName}/addressMove/offers"
    },
    {
      "description": "servicesToDeleteUnpackTerms operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Calculate services to delete with unpack terms for new offer and options",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:addressMove/servicesToDeleteUnpackTerms/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Eligibility reference",
              "fullType": "string",
              "name": "eligibilityReference",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Reference of the new offer",
              "fullType": "string",
              "name": "offerName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "pack.xdsl.migration.OfferOption[]",
              "description": "Options wanted in the new offer",
              "fullType": "pack.xdsl.migration.OfferOption[]",
              "name": "options",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.migration.SubServicesDetailsToDelete[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/addressMove/servicesToDeleteUnpackTerms"
    },
    {
      "description": "canCancelResiliation operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if the resiliation can be cancelled",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:canCancelResiliation/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/pack/xdsl/{packName}/canCancelResiliation"
    },
    {
      "description": "cancelResiliation operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the ongoing resiliation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:cancelResiliation/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/pack/xdsl/{packName}/cancelResiliation"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:changeContact",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The contact to set as admin contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactAdmin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as billing contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactBilling",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/changeContact"
    },
    {
      "description": "contactOwner operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get contact infos about the owner",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:contactOwner/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.ContactInfos"
        }
      ],
      "path": "/pack/xdsl/{packName}/contactOwner"
    },
    {
      "description": "tlds operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the available tlds for domain order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:domain/options/tlds/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/domain/options/tlds"
    },
    {
      "description": "List the pack.xdsl.DomainService objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Domain services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:domain/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
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
          "description": "Activate a domain service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:domain/services/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "pack.xdsl.DomainActionEnum",
              "description": "Domain action",
              "fullType": "pack.xdsl.DomainActionEnum",
              "name": "action",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Needed for transfer from another registrar",
              "fullType": "string",
              "name": "authInfo",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "TLD of the domain",
              "fullType": "string",
              "name": "tld",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.Task"
        }
      ],
      "path": "/pack/xdsl/{packName}/domain/services"
    },
    {
      "description": "domains operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List the available domains for the Email Pro service",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:emailPro/options/domains/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/emailPro/options/domains"
    },
    {
      "description": "isEmailAvailable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if the given email address is available for an Email Pro activation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:emailPro/options/isEmailAvailable/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The email address",
              "fullType": "string",
              "name": "email",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/pack/xdsl/{packName}/emailPro/options/isEmailAvailable"
    },
    {
      "description": "List the pack.xdsl.EmailProService objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List the Email Pro services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:emailPro/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
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
          "description": "Activate an Email Pro service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:emailPro/services/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The email address",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "The password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.Task"
        }
      ],
      "path": "/pack/xdsl/{packName}/emailPro/services"
    },
    {
      "description": "List the pack.xdsl.ExchangeAccountService objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Exchange 2013 services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:exchangeAccount/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/exchangeAccount/services"
    },
    {
      "description": "Exchange 2013 service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:exchangeAccount/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.ExchangeAccountService"
        }
      ],
      "path": "/pack/xdsl/{packName}/exchangeAccount/services/{domain}"
    },
    {
      "description": "domains operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the available domains",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:exchangeIndividual/options/domains/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/exchangeIndividual/options/domains"
    },
    {
      "description": "isEmailAvailable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Check if the email address is available for service creation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:exchangeIndividual/options/isEmailAvailable/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/pack/xdsl/{packName}/exchangeIndividual/options/isEmailAvailable"
    },
    {
      "description": "List the pack.xdsl.ExchangeOrganizationService objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Exchange 2013 organization services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:exchangeOrganization/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/exchangeOrganization/services"
    },
    {
      "description": "domains operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the hostedemail available domains",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:hostedEmail/options/domains/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/hostedEmail/options/domains"
    },
    {
      "description": "List the pack.xdsl.HostedEmailService objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Hosted email services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:hostedEmail/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
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
          "description": "Activate an hosted email service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:hostedEmail/services/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email address",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "Password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.Task"
        }
      ],
      "path": "/pack/xdsl/{packName}/hostedEmail/services"
    },
    {
      "description": "Hosted email services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete hosted email account",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:hostedEmail/services/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
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
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:hostedEmail/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.HostedEmailService"
        }
      ],
      "path": "/pack/xdsl/{packName}/hostedEmail/services/{domain}"
    },
    {
      "description": "account operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get hosted email account informations",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:hostedEmail/services/account/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.HostedEmail.Account"
        }
      ],
      "path": "/pack/xdsl/{packName}/hostedEmail/services/{domain}/account"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change hosted email account password",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:hostedEmail/services/changePassword",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "New password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/pack/xdsl/{packName}/hostedEmail/services/{domain}/changePassword"
    },
    {
      "description": "configuration operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get hosted email configuration informations",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:hostedEmail/services/configuration/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.HostedEmail.Configuration"
        }
      ],
      "path": "/pack/xdsl/{packName}/hostedEmail/services/{domain}/configuration"
    },
    {
      "description": "migrate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Migrate to the selected offer",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:migration/migrate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "You explicitly accept the terms of the contract corresponding to your new offer",
              "fullType": "boolean",
              "name": "acceptContracts",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Building reference for FTTH and FTTE offers",
              "fullType": "string",
              "name": "buildingReference",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Customer contact phone number",
              "fullType": "string",
              "name": "contactPhone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of months of re-engagement",
              "fullType": "long",
              "name": "engageMonths",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Floor identifier, \"_NA_\" if no identifier is available",
              "fullType": "string",
              "name": "floor",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "connectivity.eligibility.InstallationTypeEnum",
              "description": "Installation type, only on FTTH technology",
              "fullType": "connectivity.eligibility.InstallationTypeEnum",
              "name": "installationType",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "xdsl.eligibility.BookMeetingSlot",
              "description": "Data to book a meeting slot",
              "fullType": "xdsl.eligibility.BookMeetingSlot",
              "name": "meeting",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "pack.xdsl.ModemOptionEnum",
              "description": "Modem choose",
              "fullType": "pack.xdsl.ModemOptionEnum",
              "name": "modem",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Mondial relay ID if a shipping is needed",
              "fullType": "long",
              "name": "mondialRelayId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "nicShipping if a shipping is needed",
              "fullType": "string",
              "name": "nicShipping",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Reference of the new offer",
              "fullType": "string",
              "name": "offerName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Allows you to personalize a delivery address for the ONT. If empty, the address will be that of the installation",
              "fullType": "string",
              "name": "ontShippingContact",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "pack.xdsl.migration.OfferOption[]",
              "description": "Options wanted in the new offer",
              "fullType": "pack.xdsl.migration.OfferOption[]",
              "name": "options",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Do you have an Optical Termination Point (Point de Terminaison Optique) at home ?",
              "fullType": "boolean",
              "name": "otp",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Reference of the Optical Termination Point",
              "fullType": "string",
              "name": "otpReference",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Product code, an unique identifier to designate the chosen offer",
              "fullType": "string",
              "name": "productCode",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Stair identifier, \"_NA_\" if no identifier is available",
              "fullType": "string",
              "name": "stair",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "pack.xdsl.migration.OfferServiceToDelete[]",
              "description": "List of domains of services to delete if needed",
              "fullType": "pack.xdsl.migration.OfferServiceToDelete[]",
              "name": "subServicesToDelete",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "pack.xdsl.migration.OfferServiceToKeep[]",
              "description": "List of domains of services to keep if needed",
              "fullType": "pack.xdsl.migration.OfferServiceToKeep[]",
              "name": "subServicesToKeep",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.Task"
        }
      ],
      "path": "/pack/xdsl/{packName}/migration/migrate"
    },
    {
      "description": "offers operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the possibilities of migration offers available",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:migration/offers/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Building reference for FTTH and FTTE offers",
              "fullType": "string",
              "name": "buildingReference",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.AsyncTask<pack.xdsl.migration.MigrationOfferResponse>"
        }
      ],
      "path": "/pack/xdsl/{packName}/migration/offers"
    },
    {
      "description": "servicesToDeleteUnpackTerms operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Calculate services to delete with unpack terms for an offer and options",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:migration/servicesToDeleteUnpackTerms/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Reference of the new offer",
              "fullType": "string",
              "name": "offerName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "pack.xdsl.migration.OfferOption[]",
              "description": "Options wanted in the new offer",
              "fullType": "pack.xdsl.migration.OfferOption[]",
              "name": "options",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.migration.SubServicesDetailsToDelete[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/migration/servicesToDeleteUnpackTerms"
    },
    {
      "description": "capabilities operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about the promotion code generation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:promotionCode/capabilities/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.promotionCode.Capabilities"
        }
      ],
      "path": "/pack/xdsl/{packName}/promotionCode/capabilities"
    },
    {
      "description": "generate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Creates a task to generate a new promotion code",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:promotionCode/generate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.Task"
        }
      ],
      "path": "/pack/xdsl/{packName}/promotionCode/generate"
    },
    {
      "description": "resiliate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Resiliate the pack",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:resiliate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Effective date of the resiliation",
              "fullType": "datetime",
              "name": "resiliationDate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "pack.xdsl.ResiliationSurvey",
              "description": "Comment about resiliation reasons",
              "fullType": "pack.xdsl.ResiliationSurvey",
              "name": "resiliationSurvey",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "double[]",
              "description": "Ids of service you will keep on resiliation. (you can get it with /pack/xdsl/{packName}/subServices)",
              "fullType": "double[]",
              "name": "servicesToKeep",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.ResiliationFollowUpDetail"
        }
      ],
      "path": "/pack/xdsl/{packName}/resiliate"
    },
    {
      "description": "resiliationFollowUp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about the ongoing resiliation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:resiliationFollowUp/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.ResiliationFollowUpDetail"
        }
      ],
      "path": "/pack/xdsl/{packName}/resiliationFollowUp"
    },
    {
      "description": "resiliationTerms operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get resiliation terms",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:resiliationTerms/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "The desired resiliation date",
              "fullType": "datetime",
              "name": "resiliationDate",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "pack.xdsl.ResiliationTerms"
        }
      ],
      "path": "/pack/xdsl/{packName}/resiliationTerms"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:serviceInfos/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/pack/xdsl/{packName}/serviceInfos"
    },
    {
      "description": "services operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Informations about the services included in the pack",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.ServiceInformation[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/services"
    },
    {
      "description": "shippingAddresses operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Allowed shipping addresses given a context",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:shippingAddresses/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "pack.xdsl.ShippingAddressContextEnum",
              "description": "Context",
              "fullType": "pack.xdsl.ShippingAddressContextEnum",
              "name": "context",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.ShippingAddress[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/shippingAddresses"
    },
    {
      "description": "List the pack.xdsl.Service objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List services contained in the pack",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:subServices/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/subServices"
    },
    {
      "description": "Service link to the pack",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:subServices/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.Service"
        }
      ],
      "path": "/pack/xdsl/{packName}/subServices/{domain}"
    },
    {
      "description": "keepServiceTerms operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give the condition to unpack service from pack",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:subServices/keepServiceTerms/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.UnpackTerms"
        }
      ],
      "path": "/pack/xdsl/{packName}/subServices/{domain}/keepServiceTerms"
    },
    {
      "description": "List the pack.xdsl.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks scheduled for this pack",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:tasks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of function property (=)",
              "fullType": "string",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "pack.xdsl.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "pack.xdsl.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/tasks"
    },
    {
      "description": "Describes the current status of a task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:tasks/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.Task"
        }
      ],
      "path": "/pack/xdsl/{packName}/tasks/{id}"
    },
    {
      "description": "List the pack.xdsl.BillingAccountService objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "VOIP billing accounts",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:voipBillingAccount/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/voipBillingAccount/services"
    },
    {
      "description": "List the pack.xdsl.VoipEcoFaxService objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "VOIP ecofax service",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:voipEcofax/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
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
          "description": "Activate a voicefax service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:voipEcofax/services/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.Task"
        }
      ],
      "path": "/pack/xdsl/{packName}/voipEcofax/services"
    },
    {
      "description": "customShippingAddress operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new shippingId to be used for voipLine service creation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:voipLine/options/customShippingAddress/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Address, including street name",
              "fullType": "string",
              "name": "address",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "City name",
              "fullType": "string",
              "name": "cityName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "First name",
              "fullType": "string",
              "name": "firstName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Last name",
              "fullType": "string",
              "name": "lastName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zip code",
              "fullType": "string",
              "name": "zipCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long"
        }
      ],
      "path": "/pack/xdsl/{packName}/voipLine/options/customShippingAddress"
    },
    {
      "description": "hardwares operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get available hardwares",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:voipLine/options/hardwares/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.VoIPHardware[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/voipLine/options/hardwares"
    },
    {
      "description": "shippingAddresses operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get available shipping addresses",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:voipLine/options/shippingAddresses/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.ShippingAddress[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/voipLine/options/shippingAddresses"
    },
    {
      "description": "List the pack.xdsl.VoipLineService objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "VOIP line services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:voipLine/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
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
          "description": "Activate a voip line service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:voipLine/services/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string[]",
              "description": "List of names from hardwares call",
              "fullType": "string[]",
              "name": "hardwareNames",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Mondial relay ID",
              "fullType": "string",
              "name": "mondialRelayId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Shipping ID for the order",
              "fullType": "string",
              "name": "shippingId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.VoIPLineOrder"
        }
      ],
      "path": "/pack/xdsl/{packName}/voipLine/services"
    },
    {
      "description": "VOIP line services",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:voipLine/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "pack.xdsl.VoipLineService"
        }
      ],
      "path": "/pack/xdsl/{packName}/voipLine/services/{domain}"
    },
    {
      "description": "List the pack.xdsl.XdslAccessService objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "xDSL access services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "packXdsl:apiovh:xdslAccess/services/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your pack",
              "fullType": "string",
              "name": "packName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/pack/xdsl/{packName}/xdslAccess/services"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
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
    "connectivity.eligibility.Building": {
      "description": "Details of a Building",
      "id": "Building",
      "namespace": "connectivity.eligibility",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Building name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nro": {
          "canBeNull": true,
          "description": "Building NRO (Optical main distribution frame)",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "reference": {
          "canBeNull": false,
          "description": "Identifier which refer to a building uniquely",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "stairs": {
          "canBeNull": true,
          "description": "Stairs for this building",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.BuildingStair[]"
        },
        "type": {
          "canBeNull": true,
          "description": "Building type",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.BuildingTypeEnum"
        }
      }
    },
    "connectivity.eligibility.BuildingStair": {
      "description": "Stair details of a Building",
      "id": "BuildingStair",
      "namespace": "connectivity.eligibility",
      "properties": {
        "floors": {
          "canBeNull": false,
          "description": "List of floor indentifier, \"_NA_\" if no identifier is available",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "stair": {
          "canBeNull": false,
          "description": "Stair identifier, \"_NA_\" if no identifier is available",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.BuildingTypeEnum": {
      "description": "Building type",
      "enum": [
        "BUILDING",
        "HOUSE"
      ],
      "enumType": "string",
      "id": "BuildingTypeEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.InstallationTypeEnum": {
      "description": "Installation type, for fiber only",
      "enum": [
        "activate",
        "activate_undefined",
        "create",
        "multiOtp"
      ],
      "enumType": "string",
      "id": "InstallationTypeEnum",
      "namespace": "connectivity.eligibility"
    },
    "iam.ResourceMetadata": {
      "description": "IAM resource metadata embedded in services models",
      "id": "ResourceMetadata",
      "namespace": "iam",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Resource display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique identifier of the resource",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "tags": {
          "canBeNull": true,
          "description": "Resource tags. Tags that were internally computed are prefixed with ovh:",
          "fullType": "map[string]string",
          "readOnly": true,
          "required": false,
          "type": "map[string]string"
        },
        "urn": {
          "canBeNull": false,
          "description": "Unique resource name used in policies",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter": {
      "description": "Resource tag filter",
      "id": "TagFilter",
      "namespace": "iam.resource",
      "properties": {
        "operator": {
          "canBeNull": true,
          "description": "Operator to use in order to filter on the value (defaults to 'EQ')",
          "fullType": "iam.resource.TagFilter.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "iam.resource.TagFilter.OperatorEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Value to use in order to filter tags",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter.OperatorEnum": {
      "description": "Operator that can be used in order to filter resources tags",
      "enum": [
        "EQ"
      ],
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "iam.resource.TagFilter"
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
    },
    "pack.xdsl.AsyncTask<T>": {
      "description": "Async task",
      "generics": [
        "T"
      ],
      "id": "AsyncTask",
      "namespace": "pack.xdsl",
      "properties": {
        "error": {
          "canBeNull": true,
          "description": "Error",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Result of the call",
          "readOnly": false,
          "required": false,
          "type": "T"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the call",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "pack.xdsl.AsyncTaskStatusEnum": {
      "description": "AsyncTask status",
      "enum": [
        "error",
        "ok",
        "pending"
      ],
      "enumType": "string",
      "id": "AsyncTaskStatusEnum",
      "namespace": "pack.xdsl"
    },
    "pack.xdsl.ContactInfos": {
      "description": "Information about the contact",
      "id": "ContactInfos",
      "namespace": "pack.xdsl",
      "properties": {
        "address": {
          "canBeNull": true,
          "description": "contact address",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": true,
          "description": "contact city",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": "contact country",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "email": {
          "canBeNull": false,
          "description": "contact email",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstname": {
          "canBeNull": true,
          "description": "contact firstname",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "contact name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisation": {
          "canBeNull": true,
          "description": "contact organisation",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": true,
          "description": "contact phone",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phoneCountry": {
          "canBeNull": true,
          "description": "contact phoneCountry",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "zip": {
          "canBeNull": true,
          "description": "contact zip",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.DomainActionEnum": {
      "description": "Domain action",
      "enum": [
        "create",
        "trade",
        "transfer"
      ],
      "enumType": "string",
      "id": "DomainActionEnum",
      "namespace": "pack.xdsl"
    },
    "pack.xdsl.ExchangeAccountService": {
      "description": "Exchange 2013 service",
      "id": "ExchangeAccountService",
      "namespace": "pack.xdsl",
      "properties": {
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "exchangeService": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "organizationName": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.HostedEmail.Account": {
      "description": "HostedEmail account",
      "id": "Account",
      "namespace": "pack.xdsl.HostedEmail",
      "properties": {
        "antispamEnabled": {
          "canBeNull": false,
          "description": "Is the anti-spam enabled ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "antivirusEnabled": {
          "canBeNull": false,
          "description": "Is the anti-virus enabled ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "offer": {
          "canBeNull": false,
          "description": "Offer name",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.HostedEmail.AccountOfferEnum"
        },
        "primaryEmailAddress": {
          "canBeNull": false,
          "description": "Primary email address",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "quota": {
          "canBeNull": false,
          "description": "Quota of the mailbox",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "size": {
          "canBeNull": false,
          "description": "Size of the maibox",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "pack.xdsl.HostedEmail.AccountOfferEnum": {
      "description": "Available offers",
      "enum": [
        "individual"
      ],
      "enumType": "string",
      "id": "AccountOfferEnum",
      "namespace": "pack.xdsl.HostedEmail"
    },
    "pack.xdsl.HostedEmail.Configuration": {
      "description": "HostedEmail configuration",
      "id": "Configuration",
      "namespace": "pack.xdsl.HostedEmail",
      "properties": {
        "services": {
          "canBeNull": false,
          "description": "List of services configurations",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.HostedEmail.ConfigurationService[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Status",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.HostedEmail.ConfigurationStatusEnum"
        },
        "webmailUrl": {
          "canBeNull": false,
          "description": "Webmail url",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.HostedEmail.ConfigurationService": {
      "description": "HostedEmail configuration service",
      "id": "ConfigurationService",
      "namespace": "pack.xdsl.HostedEmail",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "Service host",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "Service IP",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "port": {
          "canBeNull": false,
          "description": "Service port",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "service": {
          "canBeNull": false,
          "description": "Service name",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.HostedEmail.ConfigurationServiceEnum"
        },
        "smtpAuth": {
          "canBeNull": true,
          "description": "Does the service use SMTP AUTH ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "startTls": {
          "canBeNull": false,
          "description": "Does the service use STARTTLS ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "pack.xdsl.HostedEmail.ConfigurationServiceEnum": {
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
      "enumType": "string",
      "id": "ConfigurationServiceEnum",
      "namespace": "pack.xdsl.HostedEmail"
    },
    "pack.xdsl.HostedEmail.ConfigurationStatusEnum": {
      "description": "Available configuration statuses",
      "enum": [
        "active",
        "suspended"
      ],
      "enumType": "string",
      "id": "ConfigurationStatusEnum",
      "namespace": "pack.xdsl.HostedEmail"
    },
    "pack.xdsl.HostedEmailService": {
      "description": "Hosted email services",
      "id": "HostedEmailService",
      "namespace": "pack.xdsl",
      "properties": {
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.ModemOptionEnum": {
      "description": "modem type",
      "enum": [
        "no",
        "recycled",
        "yes"
      ],
      "enumType": "string",
      "id": "ModemOptionEnum",
      "namespace": "pack.xdsl"
    },
    "pack.xdsl.PackAdsl": {
      "description": "Pack of xDSL services",
      "id": "PackAdsl",
      "namespace": "pack.xdsl",
      "properties": {
        "capabilities": {
          "canBeNull": false,
          "description": "Capabilities of the pack",
          "fullType": "pack.xdsl.PackCapabilities",
          "readOnly": true,
          "required": false,
          "type": "pack.xdsl.PackCapabilities"
        },
        "description": {
          "canBeNull": true,
          "description": "Customer pack description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "offerDescription": {
          "canBeNull": false,
          "description": "Name of the offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "offerPrice": {
          "canBeNull": false,
          "description": "Price of the offer",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "packName": {
          "canBeNull": false,
          "description": "Name of the xdsl pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.PackAdslWithIAM": {
      "description": "Pack of xDSL services",
      "id": "PackAdsl",
      "namespace": "pack.xdsl",
      "properties": {
        "capabilities": {
          "canBeNull": false,
          "description": "Capabilities of the pack",
          "fullType": "pack.xdsl.PackCapabilities",
          "readOnly": true,
          "required": false,
          "type": "pack.xdsl.PackCapabilities"
        },
        "description": {
          "canBeNull": true,
          "description": "Customer pack description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "offerDescription": {
          "canBeNull": false,
          "description": "Name of the offer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "offerPrice": {
          "canBeNull": false,
          "description": "Price of the offer",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "packName": {
          "canBeNull": false,
          "description": "Name of the xdsl pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.PackCapabilities": {
      "description": "Describe the capabilities of this pack",
      "id": "PackCapabilities",
      "namespace": "pack.xdsl",
      "properties": {
        "canMoveAddress": {
          "canBeNull": false,
          "description": "Whether or not this pack can move address",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "isLegacyOffer": {
          "canBeNull": false,
          "description": "Whether or not this pack is from an old offer",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "isResellerOffer": {
          "canBeNull": false,
          "description": "Whether or not this pack is a reseller offer",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "pack.xdsl.PackDetail": {
      "description": "Information about pack xdsl",
      "id": "PackDetail",
      "namespace": "pack.xdsl",
      "properties": {
        "accessname": {
          "canBeNull": false,
          "description": "Reference of the access",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the access",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": false,
          "description": "Number of the line",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "packname": {
          "canBeNull": false,
          "description": "Name of the pack",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the access",
          "readOnly": false,
          "required": false,
          "type": "xdsl.DslTypeEnum"
        }
      }
    },
    "pack.xdsl.ResiliationFollowUpDetail": {
      "description": "Details about the resiliation",
      "id": "ResiliationFollowUpDetail",
      "namespace": "pack.xdsl",
      "properties": {
        "dateTodo": {
          "canBeNull": false,
          "description": "Date when the resiliation will take effect",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "needModemReturn": {
          "canBeNull": false,
          "description": "If the customer needs to return his modem",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "registrationDate": {
          "canBeNull": false,
          "description": "Date when the resiliation was asked",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the resiliation",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.ResiliationReasonEnum": {
      "description": "Reason of a resiliation",
      "enum": [
        "addressMove",
        "billingProblems",
        "cessationOfActivity",
        "changeOfTerms",
        "changeOperator",
        "eligibilityFtth",
        "ftth",
        "goToCompetitor",
        "other",
        "price",
        "technicalProblems"
      ],
      "enumType": "string",
      "id": "ResiliationReasonEnum",
      "namespace": "pack.xdsl"
    },
    "pack.xdsl.ResiliationSurvey": {
      "description": "Information about the reason for the resiliation",
      "id": "ResiliationSurvey",
      "namespace": "pack.xdsl",
      "properties": {
        "comment": {
          "canBeNull": true,
          "description": "Comment about this resiliation",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "subsidiary": {
          "canBeNull": true,
          "description": "Subsidiary response about this resiliation",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of reason for the resiliation",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.ResiliationReasonEnum"
        }
      }
    },
    "pack.xdsl.ResiliationTerms": {
      "description": "Show the resiliation terms",
      "id": "ResiliationTerms",
      "namespace": "pack.xdsl",
      "properties": {
        "due": {
          "canBeNull": false,
          "description": "Price due at resiliationDate",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "engageDate": {
          "canBeNull": true,
          "description": "Date until which the customer is engaged",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "minResiliationDate": {
          "canBeNull": false,
          "description": "Minimum date at which the pack can be resiliated",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "resiliationDate": {
          "canBeNull": false,
          "description": "Date at which the pack will be resiliated",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "resiliationReasons": {
          "canBeNull": false,
          "description": "List of available resiliation reasons",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.ResiliationReasonEnum[]"
        }
      }
    },
    "pack.xdsl.Service": {
      "description": "Service link to the pack",
      "id": "Service",
      "namespace": "pack.xdsl",
      "properties": {
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "type": {
          "canBeNull": false,
          "fullType": "pack.xdsl.ServiceNameEnum",
          "readOnly": true,
          "required": false,
          "type": "pack.xdsl.ServiceNameEnum"
        }
      }
    },
    "pack.xdsl.ServiceInformation": {
      "description": "Informations about a service",
      "id": "ServiceInformation",
      "namespace": "pack.xdsl",
      "properties": {
        "inCreation": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.ServiceNameEnum"
        },
        "total": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "used": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "pack.xdsl.ServiceNameEnum": {
      "description": "Service name",
      "enum": [
        "domain",
        "emailPro",
        "exchangeAccount",
        "exchangeIndividual",
        "exchangeOrganization",
        "grt10ho",
        "grt20m10ho",
        "grt20m4ho",
        "grt4ho",
        "grt5m10ho",
        "grt5m4ho",
        "grtAlt",
        "grtDsp",
        "grtFt",
        "grtKosc",
        "grtOvh",
        "hostedEmail",
        "modem",
        "overTheBoxHardware",
        "overTheBoxService",
        "voipAlias",
        "voipBillingAccount",
        "voipEcoFax",
        "voipLine",
        "voipTrunk",
        "xdslAccess"
      ],
      "enumType": "string",
      "id": "ServiceNameEnum",
      "namespace": "pack.xdsl"
    },
    "pack.xdsl.ShippingAddress": {
      "description": "Shipping address",
      "id": "ShippingAddress",
      "namespace": "pack.xdsl",
      "properties": {
        "address": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "cityName": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastName": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "shippingId": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zipCode": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.ShippingAddressContextEnum": {
      "description": "Allowed contexts when looking for shipping addresses",
      "enum": [
        "migration",
        "voipLine"
      ],
      "enumType": "string",
      "id": "ShippingAddressContextEnum",
      "namespace": "pack.xdsl"
    },
    "pack.xdsl.Task": {
      "description": "Describes the current status of a task",
      "id": "Task",
      "namespace": "pack.xdsl",
      "properties": {
        "function": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "pack.xdsl.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "pack.xdsl.TaskStatusEnum"
        },
        "updateDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "pack.xdsl.TaskStatusEnum": {
      "description": "Status of a task.",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "problem",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "pack.xdsl"
    },
    "pack.xdsl.UnpackTerms": {
      "description": "Terms to unpack services",
      "id": "UnpackTerms",
      "namespace": "pack.xdsl",
      "properties": {
        "isAllowed": {
          "canBeNull": false,
          "description": "Tells whether or not the service can be unpacked",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "price": {
          "canBeNull": false,
          "description": "Price bill on the unpack action",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "renewPeriod": {
          "canBeNull": false,
          "description": "Renew period in month of the service",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "renewPrice": {
          "canBeNull": false,
          "description": "The price it will cost when it will be renew",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "pack.xdsl.VoIPHardware": {
      "description": "Hardware for VoIP line",
      "id": "VoIPHardware",
      "namespace": "pack.xdsl",
      "properties": {
        "deposit": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "fees": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "image": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "label": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "max": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "needShipping": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "url": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.VoIPLineOrder": {
      "description": "Represents an order of VoIP lines",
      "id": "VoIPLineOrder",
      "namespace": "pack.xdsl",
      "properties": {
        "needPayment": {
          "canBeNull": false,
          "description": "Whether or not this order need to be payed manually",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "orderId": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "orderUrl": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "taskIds": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long[]"
        }
      }
    },
    "pack.xdsl.VoipLineService": {
      "description": "VOIP line services",
      "id": "VoipLineService",
      "namespace": "pack.xdsl",
      "properties": {
        "billingAccount": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.addressMove.MoveOffer": {
      "description": "Address move offer",
      "id": "MoveOffer",
      "namespace": "pack.xdsl.addressMove",
      "properties": {
        "contracts": {
          "canBeNull": false,
          "description": "Contracts details for this offer",
          "readOnly": false,
          "required": false,
          "type": "order.Contract[]"
        },
        "customOntAddress": {
          "canBeNull": false,
          "description": "Tells if the custom ont address is available on the offer",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the offer",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "engageMonths": {
          "canBeNull": true,
          "description": "Number of months of engagement",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "engaged": {
          "canBeNull": false,
          "description": "Tells if the customer is still engaged",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "modemOptions": {
          "canBeNull": true,
          "description": "List of modems for this offer",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migration.OfferModemOption[]"
        },
        "modemReferenceToReturn": {
          "canBeNull": true,
          "description": "Modem reference (Mac or Serial) to be returned",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "needModem": {
          "canBeNull": false,
          "description": "Tells if the offer needs a modem",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "needNewModem": {
          "canBeNull": false,
          "description": "Tells if the customer will have to change its modem",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "offerName": {
          "canBeNull": false,
          "description": "Name of the offer",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Available options for the migration",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migration.OfferAvailableOption[]"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices detailed applicable for this offer",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.PriceOffer"
        },
        "productCodes": {
          "canBeNull": false,
          "description": "List of product from provider available for an offer",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "subServicesToDelete": {
          "canBeNull": false,
          "description": "List of sub services to delete",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migration.SubServiceToDelete[]"
        },
        "url": {
          "canBeNull": false,
          "description": "URL of the offer",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.addressMove.MoveOfferResponse": {
      "description": "List of available Move address offer",
      "id": "MoveOfferResponse",
      "namespace": "pack.xdsl.addressMove",
      "properties": {
        "offers": {
          "canBeNull": false,
          "description": "Array of offers",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.MoveOffer[]"
        }
      }
    },
    "pack.xdsl.addressMove.Price": {
      "description": "Price details for an offer",
      "id": "Price",
      "namespace": "pack.xdsl.addressMove",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description of the price",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": true,
          "description": "Price of the offer",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "pack.xdsl.addressMove.PriceOffer": {
      "description": "Price details for an offer",
      "id": "PriceOffer",
      "namespace": "pack.xdsl.addressMove",
      "properties": {
        "creationLineFees": {
          "canBeNull": false,
          "description": "Creation line fees",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.Price"
        },
        "currentOfferPrice": {
          "canBeNull": false,
          "description": "Price of the current offer",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.Price"
        },
        "due": {
          "canBeNull": false,
          "description": "Upgrade offer price",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.Price"
        },
        "firstYearPromo": {
          "canBeNull": false,
          "description": "Subscription price the first year",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.Price"
        },
        "gtrComfortFees": {
          "canBeNull": true,
          "description": "Install fee for GTR option comfort additional cost",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.Price"
        },
        "installFees": {
          "canBeNull": false,
          "description": "Installation fees",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.Price"
        },
        "modemRental": {
          "canBeNull": false,
          "description": "Price for modem rental",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.Price"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the offer",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.Price"
        },
        "promotion": {
          "canBeNull": true,
          "description": "Promotion, if available",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migrationAndAddressMove.Promotion"
        },
        "providerAI": {
          "canBeNull": true,
          "description": "Subscription price for provider AI additional cost",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.Price"
        },
        "providerOrange": {
          "canBeNull": true,
          "description": "Subscription price for provider ORANGE additional cost",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.addressMove.Price"
        }
      }
    },
    "pack.xdsl.migration.MigrationOffer": {
      "description": "Migration offer",
      "id": "MigrationOffer",
      "namespace": "pack.xdsl.migration",
      "properties": {
        "contractList": {
          "canBeNull": false,
          "description": "DEPRECATED - List of contracts",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "contracts": {
          "canBeNull": false,
          "description": "List of contracts for this offer",
          "readOnly": false,
          "required": false,
          "type": "order.Contract[]"
        },
        "currentOfferPrice": {
          "canBeNull": false,
          "description": "Price of the current offer",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "customOntAddress": {
          "canBeNull": false,
          "description": "Tells if the custom ont address is available on the offer",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the offer",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "due": {
          "canBeNull": true,
          "description": "Price to make the migration",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "engageMonths": {
          "canBeNull": true,
          "description": "Number of months of engagement",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "engaged": {
          "canBeNull": false,
          "description": "Tells if the customer is still engaged",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "engagementMonths": {
          "canBeNull": false,
          "description": "List of number of months possible for engagement",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        },
        "firstYearPromo": {
          "canBeNull": true,
          "description": "Subscription price the first year",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "gtrComfortFees": {
          "canBeNull": true,
          "description": "Install fee for GTR option comfort additional cost",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "installFees": {
          "canBeNull": true,
          "description": "Installation fees",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "modemMacToReturn": {
          "canBeNull": true,
          "description": "Mac address of the modem to be returned",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "modemOptions": {
          "canBeNull": true,
          "description": "List of modems for this offer",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migration.OfferModemOption[]"
        },
        "modemRental": {
          "canBeNull": true,
          "description": "Price for modem rental",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "multiOtp": {
          "canBeNull": false,
          "description": "Tells if the multiOtp is possible on the address",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "needModem": {
          "canBeNull": false,
          "description": "Tells if the offer needs a modem",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "needNewModem": {
          "canBeNull": false,
          "description": "Tells if the customer will have to change its modem",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "offerName": {
          "canBeNull": false,
          "description": "Name of the offer",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "options": {
          "canBeNull": false,
          "description": "Available options for the migration",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migration.OfferAvailableOption[]"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of the offer",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "promotion": {
          "canBeNull": true,
          "description": "Promotion, if available",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migrationAndAddressMove.Promotion"
        },
        "providerAI": {
          "canBeNull": true,
          "description": "Subscription price for provider AI additional cost",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "providerOrange": {
          "canBeNull": true,
          "description": "Subscription price for provider ORANGE additional cost",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "subServicesToDelete": {
          "canBeNull": false,
          "description": "List of sub services to delete",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migration.SubServiceToDelete[]"
        },
        "url": {
          "canBeNull": false,
          "description": "URL of the offer",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.migration.MigrationOfferResponse": {
      "description": "List of available Migration offer",
      "id": "MigrationOfferResponse",
      "namespace": "pack.xdsl.migration",
      "properties": {
        "buildings": {
          "canBeNull": false,
          "description": "Array of buildings",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.Building[]"
        },
        "offers": {
          "canBeNull": false,
          "description": "Array of offers",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migration.MigrationOffer[]"
        }
      }
    },
    "pack.xdsl.migration.OfferAvailableOption": {
      "description": "Available option for the offer",
      "id": "OfferAvailableOption",
      "namespace": "pack.xdsl.migration",
      "properties": {
        "duration": {
          "canBeNull": false,
          "description": "Number of months paid for",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "included": {
          "canBeNull": false,
          "description": "Number of slots included by default in this offer",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the option",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "optional": {
          "canBeNull": false,
          "description": "Number of optional slots that can be puchased",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "optionalPrice": {
          "canBeNull": true,
          "description": "Price of an additional slot. You pay this price everytime the duration is expired",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "pack.xdsl.migration.OfferModemOption": {
      "description": "Available modem option for the offer",
      "id": "OfferModemOption",
      "namespace": "pack.xdsl.migration",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the modem",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": true,
          "description": "Price of for this modem",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "pack.xdsl.migration.OfferOption": {
      "description": "Option of Offer",
      "id": "OfferOption",
      "namespace": "pack.xdsl.migration",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the option",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Number of slots, couting included slots",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "pack.xdsl.migration.OfferServiceToDelete": {
      "description": "Option of Offer",
      "id": "OfferServiceToDelete",
      "namespace": "pack.xdsl.migration",
      "properties": {
        "service": {
          "canBeNull": false,
          "description": "Type of the service",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the service to delete",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.ServiceNameEnum"
        }
      }
    },
    "pack.xdsl.migration.OfferServiceToKeep": {
      "description": "Option of Offer",
      "id": "OfferServiceToKeep",
      "namespace": "pack.xdsl.migration",
      "properties": {
        "service": {
          "canBeNull": false,
          "description": "Type of the service",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the service to keep",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.ServiceNameEnum"
        }
      }
    },
    "pack.xdsl.migration.SubServiceDetails": {
      "description": "Sub service with unpack terms details",
      "id": "SubServiceDetails",
      "namespace": "pack.xdsl.migration",
      "properties": {
        "isAllowed": {
          "canBeNull": false,
          "description": "Tells whether or not the service can be unpacked",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "price": {
          "canBeNull": false,
          "description": "Price bill on the unpack action",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "renewPeriod": {
          "canBeNull": false,
          "description": "Renew period in month of the service",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "renewPrice": {
          "canBeNull": false,
          "description": "The price it will cost when it will be renewed",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "service": {
          "canBeNull": false,
          "description": "sub service name",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "pack.xdsl.migration.SubServiceToDelete": {
      "description": "Sub service to delete",
      "id": "SubServiceToDelete",
      "namespace": "pack.xdsl.migration",
      "properties": {
        "numberToDelete": {
          "canBeNull": false,
          "description": "Number of services to be deleted",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "services": {
          "canBeNull": false,
          "description": "List of domains of sub services",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of service to be deleted",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.ServiceNameEnum"
        }
      }
    },
    "pack.xdsl.migration.SubServicesDetailsToDelete": {
      "description": "Sub services to delete with unpack terms",
      "id": "SubServicesDetailsToDelete",
      "namespace": "pack.xdsl.migration",
      "properties": {
        "numberToDelete": {
          "canBeNull": false,
          "description": "Number of services to be deleted",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "services": {
          "canBeNull": false,
          "description": "List of domains of sub services with unpack terms",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migration.SubServiceDetails[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of service to be deleted",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.ServiceNameEnum"
        }
      }
    },
    "pack.xdsl.migrationAndAddressMove.Promotion": {
      "description": "Migration or address move offer promotion",
      "id": "Promotion",
      "namespace": "pack.xdsl.migrationAndAddressMove",
      "properties": {
        "endDate": {
          "canBeNull": true,
          "description": "Promotion end date, if applicable",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier of the promotion",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "installFee": {
          "canBeNull": true,
          "description": "Details of the promotion for the install fee",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migrationAndAddressMove.PromotionDetails"
        },
        "startDate": {
          "canBeNull": true,
          "description": "Promotion start date, if applicable",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "subscription": {
          "canBeNull": true,
          "description": "Details of the promotion for the subscription",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.migrationAndAddressMove.PromotionDetails"
        }
      }
    },
    "pack.xdsl.migrationAndAddressMove.PromotionDetails": {
      "description": "Migration or address move offer promotion details",
      "id": "PromotionDetails",
      "namespace": "pack.xdsl.migrationAndAddressMove",
      "properties": {
        "discount": {
          "canBeNull": false,
          "description": "Promotion discount",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "duration": {
          "canBeNull": true,
          "description": "Duration of the promotion, if applicable (only for recurrent billing)",
          "readOnly": false,
          "required": false,
          "type": "duration"
        }
      }
    },
    "pack.xdsl.promotionCode.Capabilities": {
      "description": "Informations about a promotion code",
      "id": "Capabilities",
      "namespace": "pack.xdsl.promotionCode",
      "properties": {
        "amount": {
          "canBeNull": false,
          "description": "Amount of the promotion code",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "canGenerate": {
          "canBeNull": false,
          "description": "True if the promotion code generation is available",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "engagement": {
          "canBeNull": false,
          "description": "Number of months of engagement",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "reasonCodes": {
          "canBeNull": false,
          "description": "Enum of the possible errors",
          "readOnly": false,
          "required": false,
          "type": "pack.xdsl.promotionCode.ReasonCodes[]"
        }
      }
    },
    "pack.xdsl.promotionCode.ReasonCodes": {
      "description": "Reasons why the promotion code can not be generated",
      "enum": [
        "noMoreAvailable",
        "offerNotCompatible",
        "serviceNotInOkState",
        "stillEngaged",
        "taskInProgress"
      ],
      "enumType": "string",
      "id": "ReasonCodes",
      "namespace": "pack.xdsl.promotionCode"
    },
    "service.RenewType": {
      "description": "Map a possible renew for a specific service",
      "id": "RenewType",
      "namespace": "service",
      "properties": {
        "automatic": {
          "canBeNull": false,
          "description": "The service is automatically renewed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "service.RenewalTypeEnum": {
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
      "enumType": "string",
      "id": "RenewalTypeEnum",
      "namespace": "service"
    },
    "service.StateEnum": {
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "service"
    },
    "services.Service": {
      "description": "Details about a Service",
      "id": "Service",
      "namespace": "services",
      "properties": {
        "canDeleteAtExpiration": {
          "canBeNull": false,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "engagedUpTo": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "expiration": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "possibleRenewPeriod": {
          "canBeNull": true,
          "description": "All the possible renew period of your service in month",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "renew": {
          "canBeNull": true,
          "description": "Way of handling the renew",
          "fullType": "service.RenewType",
          "readOnly": false,
          "required": false,
          "type": "service.RenewType"
        },
        "renewalType": {
          "canBeNull": false,
          "fullType": "service.RenewalTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "service.StateEnum"
        }
      }
    },
    "xdsl.DslTypeEnum": {
      "description": "Possible DSL technologies",
      "enum": [
        "adsl",
        "ftte",
        "ftth",
        "sdsl",
        "vdsl"
      ],
      "enumType": "string",
      "id": "DslTypeEnum",
      "namespace": "xdsl"
    },
    "xdsl.eligibility.BookMeetingSlot": {
      "description": "Parameters to book a time slot for a meeting",
      "id": "BookMeetingSlot",
      "namespace": "xdsl.eligibility",
      "properties": {
        "fakeMeeting": {
          "canBeNull": false,
          "description": "Whether or not to book a fake meeting slots (if no slots are available)",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "meetingSlot": {
          "canBeNull": true,
          "description": "The time slot to book, null if fakeMeeting is true",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.MeetingSlot"
        },
        "name": {
          "canBeNull": true,
          "description": "The name of the customer",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.eligibility.MeetingSlot": {
      "description": "Represents a time slot for a meeting",
      "id": "MeetingSlot",
      "namespace": "xdsl.eligibility",
      "properties": {
        "endDate": {
          "canBeNull": false,
          "description": "The end of the time slot",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "slotId": {
          "canBeNull": true,
          "description": "Represent a meeting id for a fiber collect operator",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "startDate": {
          "canBeNull": false,
          "description": "The beginning of the time slot",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "uiCode": {
          "canBeNull": false,
          "description": "An opaque string that represents an intervention unit",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    }
  },
  "resourcePath": "/pack/xdsl"
}