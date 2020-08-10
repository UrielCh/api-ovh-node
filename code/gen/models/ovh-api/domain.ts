import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/domain",
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
      "path": "/domain/configurationRule",
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
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The domain to get the configuration rule for"
            },
            {
              "name": "action",
              "dataType": "domain.ActionEnum",
              "paramType": "query",
              "fullType": "domain.ActionEnum",
              "required": true,
              "description": "Depending on the action, the applied rule will change (transfer vs create)"
            }
          ],
          "responseType": "domain.configuration.rules.Rule",
          "noAuthentication": true,
          "description": "Get configuration rule applied for a domain in a given action"
        }
      ],
      "description": ""
    },
    {
      "path": "/domain/configurationRule/check",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "domain.configuration.rules.RuleData",
              "paramType": "body",
              "fullType": "domain.configuration.rules.RuleData",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The domain to check the rule data for"
            },
            {
              "name": "action",
              "dataType": "domain.ActionEnum",
              "paramType": "query",
              "fullType": "domain.ActionEnum",
              "required": true,
              "description": "Depending on the action, the applied rule will change (transfer vs create)"
            }
          ],
          "responseType": "void",
          "noAuthentication": true,
          "description": "Validate a rule data for a specified domain"
        }
      ],
      "description": ""
    },
    {
      "path": "/domain/contact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "domain.Contact[]",
          "noAuthentication": false,
          "description": "List all contacts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "domain.Contact",
              "paramType": "body",
              "fullType": "domain.Contact",
              "required": true,
              "description": "Request Body"
            }
          ],
          "responseType": "domain.Contact",
          "noAuthentication": false,
          "description": "Create a contact"
        }
      ],
      "description": "Operations on contacts"
    },
    {
      "path": "/domain/contact/{contactId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "contactId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Contact ID"
            }
          ],
          "responseType": "domain.Contact",
          "noAuthentication": false,
          "description": "Get details about a contact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "domain.Contact",
              "paramType": "body",
              "fullType": "domain.Contact",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "contactId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Contact ID"
            }
          ],
          "responseType": "domain.Contact",
          "noAuthentication": false,
          "description": "Update a contact"
        }
      ],
      "description": "Operations on contacts"
    },
    {
      "path": "/domain/data/afnicAssociationInformation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Retrieve all association information according to Afnic"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "declarationDate",
              "dataType": "date",
              "paramType": "body",
              "fullType": "date",
              "required": true,
              "description": "Date of the declaration of the association"
            },
            {
              "name": "publicationDate",
              "dataType": "date",
              "paramType": "body",
              "fullType": "date",
              "required": true,
              "description": "Date of the publication of the declaration of the association"
            },
            {
              "name": "publicationNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Number of the publication of the declaration of the association"
            },
            {
              "name": "publicationPageNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Page number of the publication of the declaration of the association"
            },
            {
              "name": "contactId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Contact ID related to the association contact information"
            }
          ],
          "responseType": "domain.data.AssociationContact",
          "noAuthentication": false,
          "description": "Post a new association information according to Afnic"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/data/afnicAssociationInformation/{associationInformationId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "associationInformationId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Association information ID"
            }
          ],
          "responseType": "domain.data.AssociationContact",
          "noAuthentication": false,
          "description": "Retrieve an association information according to Afnic"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/data/afnicCorporationTrademarkInformation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Retrieve all corporation trademark information according to Afnic"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "inpiNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Number of the Inpi declaration"
            },
            {
              "name": "inpiTrademarkOwner",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Owner of the trademark"
            },
            {
              "name": "contactId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Contact ID related to the Inpi additional information"
            }
          ],
          "responseType": "domain.data.AfnicCorporationTrademarkContact",
          "noAuthentication": false,
          "description": "Post a new corporation trademark information according to Afnic"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "afnicCorporationTrademarkId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Afnic corporation trademark ID"
            }
          ],
          "responseType": "domain.data.AfnicCorporationTrademarkContact",
          "noAuthentication": false,
          "description": "Retrieve a corporation trademark information according to Afnic"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/data/claimNotice",
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
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "domain.data.claimNotice.ClaimNotice",
          "noAuthentication": true,
          "description": "Retrieve claim notices associated to a domain"
        }
      ],
      "description": "Retrive claim notices"
    },
    {
      "path": "/domain/data/extension",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "country",
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "paramType": "query",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "required": false,
              "description": "Ovh subsidiary targeted"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "List all the extensions for a specific country"
        }
      ],
      "description": "List all the extensions for a specific country"
    },
    {
      "path": "/domain/data/proContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Retrieve all your Pro Contact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "jobDescription",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Description of your job"
            },
            {
              "name": "authority",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Authority that certify your profesional status"
            },
            {
              "name": "authorityWebsite",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Website of the authority that certify your profesional status"
            },
            {
              "name": "licenseNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "License number given by the authority"
            },
            {
              "name": "contactId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Contact ID that refer to that .pro information"
            }
          ],
          "responseType": "domain.data.ProContact",
          "noAuthentication": false,
          "description": "Post new information about .pro contact information"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/data/proContact/{proContactId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "proContactId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Pro contact ID"
            }
          ],
          "responseType": "domain.data.ProContact",
          "noAuthentication": false,
          "description": "Retrieve information about a Pro Contact"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/data/smd",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "protectedLabels.label",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of protectedLabels.label property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List all your SMD files"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "data",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "SMD content file"
            }
          ],
          "responseType": "domain.data.Smd",
          "noAuthentication": false,
          "description": "Post a new SMD file"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/data/smd/{smdId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "smdId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Smd ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a SMD file"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "smdId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Smd ID"
            }
          ],
          "responseType": "domain.data.Smd",
          "noAuthentication": false,
          "description": "Retrieve information about a SMD file"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "data",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "SMD content file"
            },
            {
              "name": "smdId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Smd ID"
            }
          ],
          "responseType": "domain.data.Smd",
          "noAuthentication": false,
          "description": "Modify an existing SMD file"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/rules",
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
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Cart ID concerned for the rules"
            },
            {
              "name": "itemId",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Item ID concerned for the rules"
            }
          ],
          "responseType": "domain.Rule",
          "noAuthentication": true,
          "description": "List all the rules for a specific cartId/itemId"
        }
      ],
      "description": "Rules for creating a domain"
    },
    {
      "path": "/domain/zone",
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
      "description": "Operations about the DNS service"
    },
    {
      "path": "/domain/zone/{zoneName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "domain.zone.Zone",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Zone dns Management"
    },
    {
      "path": "/domain/zone/{zoneName}/capabilities",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "zone.Capabilities",
          "noAuthentication": false,
          "description": "Zone capabilities"
        }
      ],
      "description": "capabilities operations"
    },
    {
      "path": "/domain/zone/{zoneName}/changeContact",
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
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
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
      "path": "/domain/zone/{zoneName}/confirmTermination",
      "operations": [
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
              "description": "The termination token sent by mail to the admin contact"
            },
            {
              "name": "futureUse",
              "dataType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "fullType": "service.TerminationFutureUseEnum",
              "required": false,
              "description": "What next after your termination request"
            },
            {
              "name": "reason",
              "dataType": "service.TerminationReasonEnum",
              "paramType": "body",
              "fullType": "service.TerminationReasonEnum",
              "required": false,
              "description": "Reason of your termination request"
            },
            {
              "name": "commentary",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Commentary about your termination request"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Confirm termination of your service"
        }
      ],
      "description": "Confirm termination of your service"
    },
    {
      "path": "/domain/zone/{zoneName}/dnssec",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Disable Dnssec"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "domain.zone.Dnssec",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Enable Dnssec"
        }
      ],
      "description": "Manage Dnssec for this zone"
    },
    {
      "path": "/domain/zone/{zoneName}/dynHost/login",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            },
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of subDomain property (like)"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of login property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "DynHost' logins"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "loginSuffix",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Suffix that will be concatenated to the zoneName to create the login"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password of the login"
            },
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Subdomain that the login will be allowed to update (use * to allow all)"
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
          "responseType": "domain.zone.DynHostLogin",
          "noAuthentication": false,
          "description": "Create a new DynHost login"
        }
      ],
      "description": "List the domain.zone.DynHostLogin objects"
    },
    {
      "path": "/domain/zone/{zoneName}/dynHost/login/{login}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a DynHost login"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "domain.zone.DynHostLogin",
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
              "dataType": "domain.zone.DynHostLogin",
              "paramType": "body",
              "fullType": "domain.zone.DynHostLogin",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Manage DynHost login"
    },
    {
      "path": "/domain/zone/{zoneName}/dynHost/login/{login}/changePassword",
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
              "description": "New password of the DynHost login"
            },
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Change password of the DynHost login"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/domain/zone/{zoneName}/dynHost/record",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            },
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of subDomain property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "DynHost' records"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Subdomain of the DynHost record"
            },
            {
              "name": "ip",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "Ip address of the DynHost record"
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
          "responseType": "domain.zone.DynHostRecord",
          "noAuthentication": false,
          "description": "Create a new DynHost record (Don't forget to refresh the zone)"
        }
      ],
      "description": "List the domain.zone.DynHostRecord objects"
    },
    {
      "path": "/domain/zone/{zoneName}/dynHost/record/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a DynHost record (Don't forget to refresh the zone)"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "domain.zone.DynHostRecord",
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
              "dataType": "domain.zone.DynHostRecord",
              "paramType": "body",
              "fullType": "domain.zone.DynHostRecord",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "DynHost record"
    },
    {
      "path": "/domain/zone/{zoneName}/export",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "text",
          "noAuthentication": false,
          "description": "Export zone"
        }
      ],
      "description": "export operations"
    },
    {
      "path": "/domain/zone/{zoneName}/history",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
            },
            {
              "name": "creationDate.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDate property (>=)"
            },
            {
              "name": "creationDate.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDate property (<=)"
            }
          ],
          "responseType": "datetime[]",
          "noAuthentication": false,
          "description": "Zone restore points"
        }
      ],
      "description": "List the domain.zone.ZoneRestorePoint objects"
    },
    {
      "path": "/domain/zone/{zoneName}/history/{creationDate}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "creationDate",
              "dataType": "datetime",
              "paramType": "path",
              "fullType": "datetime",
              "required": true,
              "description": "Creation date"
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
          "responseType": "domain.zone.ZoneRestorePoint",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Zone restore point"
    },
    {
      "path": "/domain/zone/{zoneName}/history/{creationDate}/restore",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "creationDate",
              "dataType": "datetime",
              "paramType": "path",
              "fullType": "datetime",
              "required": true,
              "description": "Creation date"
            }
          ],
          "responseType": "domain.zone.Task",
          "noAuthentication": false,
          "description": "Restore the DNS zone"
        }
      ],
      "description": "restore operations"
    },
    {
      "path": "/domain/zone/{zoneName}/import",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "zoneFile",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "Zone file that will be imported"
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
          "responseType": "domain.zone.Task",
          "noAuthentication": false,
          "description": "Import zone"
        }
      ],
      "description": "import operations"
    },
    {
      "path": "/domain/zone/{zoneName}/record",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            },
            {
              "name": "fieldType",
              "dataType": "zone.NamedResolutionFieldTypeEnum",
              "paramType": "query",
              "fullType": "zone.NamedResolutionFieldTypeEnum",
              "required": false,
              "description": "Filter the value of fieldType property (like)"
            },
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of subDomain property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Records of the zone"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "target",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Resource record target"
            },
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Resource record subdomain"
            },
            {
              "name": "ttl",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "Resource record ttl"
            },
            {
              "name": "fieldType",
              "dataType": "zone.NamedResolutionFieldTypeEnum",
              "paramType": "body",
              "fullType": "zone.NamedResolutionFieldTypeEnum",
              "required": true,
              "description": "Resource record Name"
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
          "responseType": "domain.zone.Record",
          "noAuthentication": false,
          "description": "Create a new DNS record (Don't forget to refresh the zone)"
        }
      ],
      "description": "List the domain.zone.Record objects"
    },
    {
      "path": "/domain/zone/{zoneName}/record/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a DNS record (Don't forget to refresh the zone)"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "domain.zone.Record",
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
              "dataType": "domain.zone.Record",
              "paramType": "body",
              "fullType": "domain.zone.Record",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Zone resource records"
    },
    {
      "path": "/domain/zone/{zoneName}/redirection",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            },
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of subDomain property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Redirections"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "title",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Title for invisible redirection"
            },
            {
              "name": "subDomain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "subdomain to redirect"
            },
            {
              "name": "type",
              "dataType": "zone.RedirectionTypeEnum",
              "paramType": "body",
              "fullType": "zone.RedirectionTypeEnum",
              "required": true,
              "description": "Redirection type"
            },
            {
              "name": "keywords",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Keywords for invisible redirection"
            },
            {
              "name": "target",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Target of the redirection"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Desciption for invisible redirection"
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
          "responseType": "domain.zone.Redirection",
          "noAuthentication": false,
          "description": "Create a new redirection (Don't forget to refresh the zone)"
        }
      ],
      "description": "List the domain.zone.Redirection objects"
    },
    {
      "path": "/domain/zone/{zoneName}/redirection/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a redirection (Don't forget to refresh the zone)"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "domain.zone.Redirection",
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
              "dataType": "domain.zone.Redirection",
              "paramType": "body",
              "fullType": "domain.zone.Redirection",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Redirection"
    },
    {
      "path": "/domain/zone/{zoneName}/refresh",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Apply zone modification on DNS servers"
        }
      ],
      "description": "refresh operations"
    },
    {
      "path": "/domain/zone/{zoneName}/reset",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "minimized",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Create only mandatory records"
            },
            {
              "name": "DnsRecords",
              "dataType": "zone.ResetRecord[]",
              "paramType": "body",
              "fullType": "zone.ResetRecord[]",
              "required": false,
              "description": "Records that will be set after reset"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Reset the DNS zone"
        }
      ],
      "description": "reset operations"
    },
    {
      "path": "/domain/zone/{zoneName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "zoneName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Zone name"
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
      "path": "/domain/zone/{zoneName}/soa",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "domain.zone.Soa",
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
              "dataType": "domain.zone.Soa",
              "paramType": "body",
              "fullType": "domain.zone.Soa",
              "required": true,
              "description": "Request Body"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Zone Start Of Authority"
    },
    {
      "path": "/domain/zone/{zoneName}/status",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "zone.Status",
          "noAuthentication": false,
          "description": "Zone status"
        }
      ],
      "description": "status operations"
    },
    {
      "path": "/domain/zone/{zoneName}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            },
            {
              "name": "function",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of function property (like)"
            },
            {
              "name": "status",
              "dataType": "domain.OperationStatusEnum",
              "paramType": "query",
              "fullType": "domain.OperationStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Domain pending tasks"
        }
      ],
      "description": "List the domain.zone.Task objects"
    },
    {
      "path": "/domain/zone/{zoneName}/task/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
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
          "responseType": "domain.zone.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Tasks associated to a zone"
    },
    {
      "path": "/domain/zone/{zoneName}/task/{id}/accelerate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Accelerate the task"
        }
      ],
      "description": "accelerate operations"
    },
    {
      "path": "/domain/zone/{zoneName}/task/{id}/cancel",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Cancel the task"
        }
      ],
      "description": "cancel operations"
    },
    {
      "path": "/domain/zone/{zoneName}/task/{id}/relaunch",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Relaunch the task"
        }
      ],
      "description": "relaunch operations"
    },
    {
      "path": "/domain/zone/{zoneName}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your service"
        }
      ],
      "description": "Terminate your service"
    },
    {
      "path": "/domain/{serviceName}",
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
          "responseType": "domain.Domain",
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
              "dataType": "domain.Domain",
              "paramType": "body",
              "fullType": "domain.Domain",
              "required": true,
              "description": "Request Body"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Domain name administration"
    },
    {
      "path": "/domain/{serviceName}/activateZone",
      "operations": [
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
              "name": "minimized",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Create only mandatory records"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Activate the DNS zone for this domain"
        }
      ],
      "description": "activateZone operations"
    },
    {
      "path": "/domain/{serviceName}/authInfo",
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
          "responseType": "password",
          "noAuthentication": false,
          "description": "Return authInfo code if the domain is unlocked"
        }
      ],
      "description": "authInfo operations"
    },
    {
      "path": "/domain/{serviceName}/changeContact",
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
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
      "path": "/domain/{serviceName}/configurations/obfuscatedEmails",
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
          "responseType": "domain.configurations.ObfuscatedEmails[]",
          "noAuthentication": false,
          "description": "Retrieve obfuscated emails configuration"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "contacts",
              "dataType": "domain.ContactAllTypesEnum[]",
              "paramType": "body",
              "fullType": "domain.ContactAllTypesEnum[]",
              "required": true,
              "description": "Contact types where obfuscated emails can be activated"
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
          "responseType": "domain.configurations.ObfuscatedEmails[]",
          "noAuthentication": false,
          "description": "Save a new obfuscated emails configuration"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/{serviceName}/configurations/obfuscatedEmails/refresh",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contacts",
              "dataType": "domain.ContactAllTypesEnum[]",
              "paramType": "body",
              "fullType": "domain.ContactAllTypesEnum[]",
              "required": true,
              "description": "Contact types where obfuscated emails will be refreshed"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Refresh an obfuscated emails configuration"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/{serviceName}/configurations/optin",
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
          "responseType": "domain.configurations.Optin[]",
          "noAuthentication": false,
          "description": "Retrieve optin configuration"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "optin",
              "dataType": "domain.configurations.Optin[]",
              "paramType": "body",
              "fullType": "domain.configurations.Optin[]",
              "required": true,
              "description": "New configuration about optin"
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
          "responseType": "domain.configurations.Optin[]",
          "noAuthentication": false,
          "description": "Save a new optin configuration"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/{serviceName}/dsRecord",
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
              "name": "status",
              "dataType": "dnssec.KeyStatusEnum",
              "paramType": "query",
              "fullType": "dnssec.KeyStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "flags",
              "dataType": "dnssec.KeyFlagEnum",
              "paramType": "query",
              "fullType": "dnssec.KeyFlagEnum",
              "required": false,
              "description": "Filter the value of flags property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of domain's DS Records"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "keys",
              "dataType": "dnssec.Key[]",
              "paramType": "body",
              "fullType": "dnssec.Key[]",
              "required": true,
              "description": "New Keys"
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
          "responseType": "domain.Task",
          "noAuthentication": false,
          "description": "Update DS records"
        }
      ],
      "description": "List the domain.DnssecKey objects"
    },
    {
      "path": "/domain/{serviceName}/dsRecord/{id}",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "domain.DnssecKey",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Domain's DNSSEC Key"
    },
    {
      "path": "/domain/{serviceName}/email/obfuscated/refresh",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-02-01T00:00:00+01:00",
            "deprecatedDate": "2018-11-19T00:00:00+01:00",
            "replacement": "/domain/{serviceName}/configurations/obfuscatedEmails/refresh"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactType",
              "dataType": "domain.DomainContactTypeEnum[]",
              "paramType": "body",
              "fullType": "domain.DomainContactTypeEnum[]",
              "required": true,
              "description": "Contact type"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Regenerate the obfuscated email address"
        }
      ],
      "description": "refresh operations"
    },
    {
      "path": "/domain/{serviceName}/glueRecord",
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
              "name": "host",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of host property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of glue record"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ips",
              "dataType": "ip[]",
              "paramType": "body",
              "fullType": "ip[]",
              "required": true,
              "description": "Ips of the glue record"
            },
            {
              "name": "host",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Host of the glue record"
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
          "responseType": "domain.Task",
          "noAuthentication": false,
          "description": "Create a glue record"
        }
      ],
      "description": "List the domain.GlueRecord objects"
    },
    {
      "path": "/domain/{serviceName}/glueRecord/{host}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "host",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Host"
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
          "responseType": "domain.Task",
          "noAuthentication": false,
          "description": "Delete the glue record"
        },
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
              "name": "host",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Host"
            }
          ],
          "responseType": "domain.GlueRecord",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Glue record"
    },
    {
      "path": "/domain/{serviceName}/glueRecord/{host}/update",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ips",
              "dataType": "ip[]",
              "paramType": "body",
              "fullType": "ip[]",
              "required": true,
              "description": "Ips of the glue record"
            },
            {
              "name": "host",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Host"
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
          "responseType": "domain.Task",
          "noAuthentication": false,
          "description": "Update the glue record"
        }
      ],
      "description": "update operations"
    },
    {
      "path": "/domain/{serviceName}/nameServer",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of current name servers"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "nameServer",
              "dataType": "domain.DomainNs[]",
              "paramType": "body",
              "fullType": "domain.DomainNs[]",
              "required": true,
              "description": "New name server"
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
          "responseType": "domain.Task",
          "noAuthentication": false,
          "description": "Add new name server"
        }
      ],
      "description": "List the domain.CurrentNameServer objects"
    },
    {
      "path": "/domain/{serviceName}/nameServer/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "domain.Task",
          "noAuthentication": false,
          "description": "Delete a name server"
        },
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "domain.CurrentNameServer",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "CurrentNameServer"
    },
    {
      "path": "/domain/{serviceName}/nameServer/{id}/status",
      "operations": [
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "domain.DomainNsStatus",
          "noAuthentication": false,
          "description": "Get name server status"
        }
      ],
      "description": "status operations"
    },
    {
      "path": "/domain/{serviceName}/nameServers/update",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "nameServers",
              "dataType": "domain.DomainNs[]",
              "paramType": "body",
              "fullType": "domain.DomainNs[]",
              "required": true,
              "description": "New name servers"
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
          "responseType": "domain.Task",
          "noAuthentication": false,
          "description": "Update DNS servers"
        }
      ],
      "description": "update operations"
    },
    {
      "path": "/domain/{serviceName}/option",
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
          "responseType": "domain.DomainOptionEnum[]",
          "noAuthentication": false,
          "description": "List of domain options"
        }
      ],
      "description": "List the domain.Option objects"
    },
    {
      "path": "/domain/{serviceName}/option/{option}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
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
              "name": "option",
              "dataType": "domain.DomainOptionEnum",
              "paramType": "path",
              "fullType": "domain.DomainOptionEnum",
              "required": true,
              "description": "Option"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Release a given option"
        },
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
              "name": "option",
              "dataType": "domain.DomainOptionEnum",
              "paramType": "path",
              "fullType": "domain.DomainOptionEnum",
              "required": true,
              "description": "Option"
            }
          ],
          "responseType": "domain.Option",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about the options of a domain"
    },
    {
      "path": "/domain/{serviceName}/options",
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
          "responseType": "domain.services.options.Options",
          "noAuthentication": false,
          "description": "Retrieve data about the options associated to a domain"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/{serviceName}/owo",
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
              "name": "field",
              "dataType": "domain.WhoisObfuscatorFieldsEnum",
              "paramType": "query",
              "fullType": "domain.WhoisObfuscatorFieldsEnum",
              "required": false,
              "description": "Filter the value of field property (=)"
            }
          ],
          "responseType": "domain.WhoisObfuscatorFieldsEnum[]",
          "noAuthentication": false,
          "description": "List of whois obfuscators"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "fields",
              "dataType": "domain.WhoisObfuscatorFieldsEnum[]",
              "paramType": "body",
              "fullType": "domain.WhoisObfuscatorFieldsEnum[]",
              "required": true,
              "description": "Fields to obfuscate"
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
          "responseType": "domain.WhoisObfuscatorFieldsEnum[]",
          "noAuthentication": false,
          "description": "Add whois obfuscators"
        }
      ],
      "description": "List the domain.Owo objects"
    },
    {
      "path": "/domain/{serviceName}/owo/{field}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
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
              "name": "field",
              "dataType": "domain.WhoisObfuscatorFieldsEnum",
              "paramType": "path",
              "fullType": "domain.WhoisObfuscatorFieldsEnum",
              "required": true,
              "description": "Field"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a whois obfuscator"
        },
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
              "name": "field",
              "dataType": "domain.WhoisObfuscatorFieldsEnum",
              "paramType": "path",
              "fullType": "domain.WhoisObfuscatorFieldsEnum",
              "required": true,
              "description": "Field"
            }
          ],
          "responseType": "domain.Owo",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Obfuscate whois"
    },
    {
      "path": "/domain/{serviceName}/rules/emailsObfuscation",
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
          "responseType": "domain.ContactAllTypesEnum[]",
          "noAuthentication": false,
          "description": "Retrieve emails obfuscation rule"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/{serviceName}/rules/optin",
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
          "responseType": "domain.rules.Optin[]",
          "noAuthentication": false,
          "description": "Retrieve optin rule"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/domain/{serviceName}/serviceInfos",
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
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
      "path": "/domain/{serviceName}/task",
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
              "name": "status",
              "dataType": "domain.OperationStatusEnum",
              "paramType": "query",
              "fullType": "domain.OperationStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of function property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Domain pending tasks"
        }
      ],
      "description": "List the domain.Task objects"
    },
    {
      "path": "/domain/{serviceName}/task/{id}",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "domain.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Tasks associated to domain"
    },
    {
      "path": "/domain/{serviceName}/task/{id}/accelerate",
      "operations": [
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Accelerate the task"
        }
      ],
      "description": "accelerate operations"
    },
    {
      "path": "/domain/{serviceName}/task/{id}/cancel",
      "operations": [
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Cancel the task"
        }
      ],
      "description": "cancel operations"
    },
    {
      "path": "/domain/{serviceName}/task/{id}/relaunch",
      "operations": [
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Relaunch the task"
        }
      ],
      "description": "relaunch operations"
    },
    {
      "path": "/domain/{serviceName}/ukOutgoingTransfer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Tag of the new registrar"
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
          "responseType": "domain.Task",
          "noAuthentication": false,
          "description": "Schedule an outgoing transfer task for this domain (.uk only)"
        }
      ],
      "description": "ukOutgoingTransfer operations"
    },
    {
      "path": "/domain/{serviceName}/ukRegistrars",
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
          "responseType": "domain.UkRegistrar[]",
          "noAuthentication": false,
          "description": "Return the list of all .uk registrars"
        }
      ],
      "description": "ukRegistrars operations"
    }
  ],
  "resourcePath": "/domain",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "dnssec.DnssecStatusEnum": {
      "id": "DnssecStatusEnum",
      "namespace": "dnssec",
      "description": "Dnssec Status",
      "enum": [
        "disableInProgress",
        "disabled",
        "enableInProgress",
        "enabled"
      ],
      "enumType": "string"
    },
    "dnssec.Key": {
      "id": "Key",
      "namespace": "dnssec",
      "description": "Key type",
      "properties": {
        "algorithm": {
          "type": "dnssec.KeyAlgorithmEnum",
          "fullType": "dnssec.KeyAlgorithmEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Algorithm",
          "required": true
        },
        "flags": {
          "type": "dnssec.KeyFlagEnum",
          "fullType": "dnssec.KeyFlagEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Flag of the dnssec key",
          "required": true
        },
        "publicKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Public key",
          "required": true
        },
        "tag": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Key tag",
          "required": true
        }
      }
    },
    "dnssec.KeyAlgorithmEnum": {
      "id": "KeyAlgorithmEnum",
      "namespace": "dnssec",
      "description": "Dnssec Algorithm\n                        ###\n                        5  : RSASHA1\n                        7  : RSASHA1-NSEC3-SHA1\n                        8  : RSASHA256\n                        10 : RSASHA512\n                        13 : ECDSAP256SHA256\n                        14 : ECDSAP384SHA384",
      "enum": [
        "10",
        "13",
        "14",
        "5",
        "7",
        "8"
      ],
      "enumType": "long"
    },
    "dnssec.KeyFlagEnum": {
      "id": "KeyFlagEnum",
      "namespace": "dnssec",
      "description": "Dnssec Key Flag Type\n                        ###\n                        256 : Zone Signing Key (ZSK)\n                        257 : Key  Signing Key (KSK)",
      "enum": [
        "256",
        "257"
      ],
      "enumType": "long"
    },
    "dnssec.KeyStatusEnum": {
      "id": "KeyStatusEnum",
      "namespace": "dnssec",
      "description": "\n                Generated : The key has been created, but has not yet been used for anything.\n                ###\n                Published : The DNSKEY record is published in the zone, but predecessors of the key may be held in caches.\n                ###\n                Ready     : The new key data has been published for long enough to guarantee that any previous versions of the DNSKEY RRset have expired from caches.\n                ###\n                Active    : The key has started to be used to sign RRsets.\n                ###\n                Retired   : A successor key has become active and this key is no longer being used to generate RRSIGs.\n                ###\n                Removed   : The key has been removed from the zone.\n                ###\n                Revoked   : The key is published for a period with the \"revoke\" bit set as a way of notifying validating resolvers that have configured it as an trust anchor that it is about to be removed from the zone.",
      "enum": [
        "active",
        "generated",
        "published",
        "removed",
        "retired",
        "revoked"
      ],
      "enumType": "string"
    },
    "domain.ActionEnum": {
      "id": "ActionEnum",
      "namespace": "domain",
      "description": "An action to execute on a domain name",
      "enum": [
        "create",
        "transfer",
        "update",
        "trade"
      ],
      "enumType": "string"
    },
    "domain.Contact": {
      "id": "Contact",
      "namespace": "domain",
      "description": "A contact contains the personal data of a user",
      "properties": {
        "accreditationCountry": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Country of lawyer accreditation",
          "required": false
        },
        "accreditationId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Lawyer accreditation number",
          "required": false
        },
        "accreditationOrganism": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Organism of lawyer accreditation",
          "required": false
        },
        "accreditationYear": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Year of lawyer accreditation",
          "required": false
        },
        "address": {
          "type": "domain.ContactAddress",
          "fullType": "domain.ContactAddress",
          "canBeNull": true,
          "readOnly": false,
          "description": "The address of the contact",
          "required": false
        },
        "birthCity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "City of birth",
          "required": false
        },
        "birthCountry": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Birth Country",
          "required": false
        },
        "birthDay": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": false,
          "description": "Birth date",
          "required": false
        },
        "birthZip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Birth Zipcode",
          "required": false
        },
        "cellPhone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Cellphone number",
          "required": false
        },
        "companyNationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Company National Identification Number",
          "required": false
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Email address",
          "required": false
        },
        "enterpriseId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Enterprise identifier",
          "required": false
        },
        "fax": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Fax number",
          "required": false
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "First name",
          "required": false
        },
        "gender": {
          "type": "nichandle.GenderEnum",
          "fullType": "nichandle.GenderEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Gender",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unique identifier",
          "required": false
        },
        "insee": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "INSEE identifier",
          "required": false
        },
        "language": {
          "type": "nichandle.LanguageEnum",
          "fullType": "nichandle.LanguageEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Language",
          "required": false
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Last name",
          "required": false
        },
        "legalForm": {
          "type": "nichandle.LegalFormEnum",
          "fullType": "nichandle.LegalFormEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "legalFormCategory": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "category of legalForm",
          "required": false
        },
        "nationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "National Identification Number",
          "required": false
        },
        "nationality": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Nationality",
          "required": false
        },
        "organisationAccountable": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "To whom is the organisation accountable",
          "required": false
        },
        "organisationFunding": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "What is the source of funding",
          "required": false
        },
        "organisationFundingOther": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Explain the source of funding if organisationFunding is other",
          "required": false
        },
        "organisationName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of organisation",
          "required": false
        },
        "organisationRole": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Role of your organisation",
          "required": false
        },
        "organisationRoleOther": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Explain the role of your organisation if organisationRole is other",
          "required": false
        },
        "organisationStaffStatus": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Status of the staff",
          "required": false
        },
        "organisationStaffStatusOther": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Explain the status of the staff if organisationStaffStatus is other",
          "required": false
        },
        "organisationType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "type of organisation",
          "required": false
        },
        "organisationTypeOther": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Explain the type of organisation if organisationType is other",
          "required": false
        },
        "phone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Phone number",
          "required": false
        },
        "registrantDocumentType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Type of registrant document",
          "required": false
        },
        "registrantDocumentTypeOther": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Explain the type of registrant document if registrantDocumentType is other",
          "required": false
        },
        "roleInOrganisation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The role in the organisation",
          "required": false
        },
        "vat": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "VAT number",
          "required": false
        },
        "website": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Website",
          "required": false
        }
      }
    },
    "domain.ContactAddress": {
      "id": "ContactAddress",
      "namespace": "domain",
      "description": "Missing description",
      "properties": {
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "City",
          "required": false
        },
        "country": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Country",
          "required": false
        },
        "line1": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Address line 1",
          "required": false
        },
        "line2": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Address line 2",
          "required": false
        },
        "line3": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Address line 3",
          "required": false
        },
        "otherDetails": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Others details",
          "required": false
        },
        "province": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Province",
          "required": false
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Zip code",
          "required": false
        }
      }
    },
    "domain.ContactAllTypesEnum": {
      "id": "ContactAllTypesEnum",
      "namespace": "domain",
      "description": "Contact type fields",
      "enum": [
        "admin",
        "all",
        "billing",
        "owner",
        "tech"
      ],
      "enumType": "string"
    },
    "domain.CurrentNameServer": {
      "id": "CurrentNameServer",
      "namespace": "domain",
      "description": "CurrentNameServer",
      "properties": {
        "host": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Host of the name server",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the name server",
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ip of the name server",
          "required": false
        },
        "isUsed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "isUsed flag of the name server",
          "required": true
        },
        "toDelete": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "toDelete flag of the name server",
          "required": true
        }
      }
    },
    "domain.Data": {
      "id": "Data",
      "namespace": "domain",
      "description": "A domain data",
      "properties": {
        "audience": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Domain name audience",
          "required": false
        },
        "authInfo": {
          "type": "password",
          "fullType": "password",
          "canBeNull": true,
          "readOnly": false,
          "description": "Auth Info",
          "required": false
        },
        "isFor": {
          "type": "domain.IsForEnum[]",
          "fullType": "domain.IsForEnum[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Purposes of the domain",
          "required": false
        },
        "otherPurpose": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Domain name other purpose",
          "required": false
        },
        "reason": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Reason of the purchase of this domain",
          "required": false
        },
        "represent": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Represented company",
          "required": false
        }
      }
    },
    "domain.DnssecKey": {
      "id": "DnssecKey",
      "namespace": "domain",
      "description": "Domain's DNSSEC Key",
      "properties": {
        "algorithm": {
          "type": "dnssec.KeyAlgorithmEnum",
          "fullType": "dnssec.KeyAlgorithmEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Algorithm number of the DNSSEC key",
          "required": true
        },
        "flags": {
          "type": "dnssec.KeyFlagEnum",
          "fullType": "dnssec.KeyFlagEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Flag of the DNSSEC key",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the DNSSEC key",
          "required": true
        },
        "publicKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Public key",
          "required": true
        },
        "status": {
          "type": "dnssec.KeyStatusEnum",
          "fullType": "dnssec.KeyStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Key status of the DNSSEC key",
          "required": true
        },
        "tag": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Tag of the DNSSEC key",
          "required": true
        }
      }
    },
    "domain.Domain": {
      "id": "Domain",
      "namespace": "domain",
      "description": "Domain name administration",
      "properties": {
        "dnssecSupported": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is DNSSEC implemented for this domain name's tld",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain name",
          "required": true
        },
        "glueRecordIpv6Supported": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Does the registry support ipv6 glue record",
          "required": true
        },
        "glueRecordMultiIpSupported": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Does the registry support multi ip glue record",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last update date",
          "required": true
        },
        "nameServerType": {
          "type": "domain.DomainNsTypeEnum",
          "fullType": "domain.DomainNsTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name servers type",
          "required": true
        },
        "offer": {
          "type": "domain.OfferEnum",
          "fullType": "domain.OfferEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain's offer",
          "required": true
        },
        "owoSupported": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is whois obfuscation supported by this domain name's registry",
          "required": true
        },
        "parentService": {
          "type": "domain.ParentService",
          "fullType": "domain.ParentService",
          "canBeNull": true,
          "readOnly": true,
          "description": "Parent service",
          "required": false
        },
        "transferLockStatus": {
          "type": "domain.DomainLockStatusEnum",
          "fullType": "domain.DomainLockStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Transfer lock status",
          "required": true
        },
        "whoisOwner": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact Owner (you can edit it via /me/contact/<ID>)",
          "required": true
        }
      }
    },
    "domain.DomainContactTypeEnum": {
      "id": "DomainContactTypeEnum",
      "namespace": "domain",
      "description": "All contact type for a domain",
      "enum": [
        "admin",
        "billing",
        "owner",
        "tech"
      ],
      "enumType": "string"
    },
    "domain.DomainLockStatusEnum": {
      "id": "DomainLockStatusEnum",
      "namespace": "domain",
      "description": "Domain lock status",
      "enum": [
        "locked",
        "locking",
        "unavailable",
        "unlocked",
        "unlocking"
      ],
      "enumType": "string"
    },
    "domain.DomainNs": {
      "id": "DomainNs",
      "namespace": "domain",
      "description": "Name server",
      "properties": {
        "host": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Host",
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "Ip",
          "required": false
        }
      }
    },
    "domain.DomainNsStateEnum": {
      "id": "DomainNsStateEnum",
      "namespace": "domain",
      "description": "DNS server state",
      "enum": [
        "ko",
        "ok"
      ],
      "enumType": "string"
    },
    "domain.DomainNsStatus": {
      "id": "DomainNsStatus",
      "namespace": "domain",
      "description": "DNS server status",
      "properties": {
        "state": {
          "type": "domain.DomainNsStateEnum",
          "fullType": "domain.DomainNsStateEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not the DNS server is working",
          "required": true
        },
        "type": {
          "type": "domain.DomainNsTypeEnum",
          "fullType": "domain.DomainNsTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not the DNS server is managed by OVH",
          "required": true
        },
        "usedSince": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Date from which the DNS server is used by the domain",
          "required": false
        }
      }
    },
    "domain.DomainNsTypeEnum": {
      "id": "DomainNsTypeEnum",
      "namespace": "domain",
      "description": "DomainNS Type",
      "enum": [
        "external",
        "hosted"
      ],
      "enumType": "string"
    },
    "domain.DomainOptionEnum": {
      "id": "DomainOptionEnum",
      "namespace": "domain",
      "description": "All options a domain can have",
      "enum": [
        "dnsAnycast"
      ],
      "enumType": "string"
    },
    "domain.DomainOptionStateEnum": {
      "id": "DomainOptionStateEnum",
      "namespace": "domain",
      "description": "All states a domain Option can be in",
      "enum": [
        "released",
        "subscribed"
      ],
      "enumType": "string"
    },
    "domain.GlueRecord": {
      "id": "GlueRecord",
      "namespace": "domain",
      "description": "Glue record",
      "properties": {
        "host": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Host of the glue record",
          "required": true
        },
        "ips": {
          "type": "ip[]",
          "fullType": "ip[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ips of the glue record",
          "required": true
        }
      }
    },
    "domain.IsForEnum": {
      "id": "IsForEnum",
      "namespace": "domain",
      "description": "Possible purposes of the domain",
      "enum": [
        "campaign_website",
        "educational_website",
        "information_website",
        "transactional_website",
        "redirect_page",
        "emails",
        "other_purpose"
      ],
      "enumType": "string"
    },
    "domain.OfferEnum": {
      "id": "OfferEnum",
      "namespace": "domain",
      "description": "Offer",
      "enum": [
        "diamond",
        "gold",
        "platinum"
      ],
      "enumType": "string"
    },
    "domain.OperationStatusEnum": {
      "id": "OperationStatusEnum",
      "namespace": "domain",
      "description": "Operation status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "domain.OptinFieldsEnum": {
      "id": "OptinFieldsEnum",
      "namespace": "domain",
      "description": "Whois optin fields",
      "enum": [
        "address",
        "city",
        "country",
        "email",
        "fax",
        "name",
        "organisation",
        "phone",
        "province",
        "zip"
      ],
      "enumType": "string"
    },
    "domain.Option": {
      "id": "Option",
      "namespace": "domain",
      "description": "Information about the options of a domain",
      "properties": {
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Expiration date of the option",
          "required": true
        },
        "option": {
          "type": "domain.DomainOptionEnum",
          "fullType": "domain.DomainOptionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The option name",
          "required": true
        },
        "state": {
          "type": "domain.DomainOptionStateEnum",
          "fullType": "domain.DomainOptionStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The state of the option",
          "required": true
        }
      }
    },
    "domain.Owo": {
      "id": "Owo",
      "namespace": "domain",
      "description": "Obfuscate whois",
      "properties": {
        "field": {
          "type": "domain.WhoisObfuscatorFieldsEnum",
          "fullType": "domain.WhoisObfuscatorFieldsEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Obfuscated field",
          "required": true
        }
      }
    },
    "domain.ParentService": {
      "id": "ParentService",
      "namespace": "domain",
      "description": "Parent service",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the parent service",
          "required": true
        },
        "type": {
          "type": "domain.ParentServiceTypeEnum",
          "fullType": "domain.ParentServiceTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the parent service",
          "required": true
        }
      }
    },
    "domain.ParentServiceTypeEnum": {
      "id": "ParentServiceTypeEnum",
      "namespace": "domain",
      "description": "Parent service type enum",
      "enum": [
        "/allDom"
      ],
      "enumType": "string"
    },
    "domain.Rule": {
      "id": "Rule",
      "namespace": "domain",
      "description": "Description not available",
      "properties": {
        "allowedValues": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "fields": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "innerConfigurations": {
          "type": "domain.Rule[]",
          "fullType": "domain.Rule[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "required": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "domain.Task": {
      "id": "Task",
      "namespace": "domain",
      "description": "Tasks associated to domain",
      "properties": {
        "canAccelerate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Can accelerate the task",
          "required": true
        },
        "canCancel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Can cancel the task",
          "required": true
        },
        "canRelaunch": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Can relaunch the task",
          "required": true
        },
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Comment about the task",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the task",
          "required": true
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Done date of the task",
          "required": false
        },
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function of the task",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the task",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last update date of the task",
          "required": true
        },
        "status": {
          "type": "domain.OperationStatusEnum",
          "fullType": "domain.OperationStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the task",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Todo date of the task",
          "required": true
        }
      }
    },
    "domain.UkRegistrar": {
      "id": "UkRegistrar",
      "namespace": "domain",
      "description": "Representation of a UK Registrar (used for outgoing transfer)",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Registrar name",
          "required": true
        },
        "tag": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Registrar tag",
          "required": true
        }
      }
    },
    "domain.WhoisObfuscatorFieldsEnum": {
      "id": "WhoisObfuscatorFieldsEnum",
      "namespace": "domain",
      "description": "Whois obfuscable fields",
      "enum": [
        "address",
        "email",
        "phone"
      ],
      "enumType": "string"
    },
    "domain.configuration.rules.Constraint": {
      "id": "Constraint",
      "namespace": "domain.configuration.rules",
      "description": "A configuration rule defines validation to launch when executing an action on a domain (create, trade...). Depending on the extension, the rule may be different",
      "properties": {
        "conditions": {
          "type": "domain.configuration.rules.Rule",
          "fullType": "domain.configuration.rules.Rule",
          "canBeNull": true,
          "readOnly": true,
          "description": "Whether this constraint is applied or not",
          "required": false
        },
        "contexts": {
          "type": "domain.configuration.rules.ContextEnum[]",
          "fullType": "domain.configuration.rules.ContextEnum[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "The context on which the constraint applies",
          "required": false
        },
        "operator": {
          "type": "domain.configuration.rules.OperatorEnum",
          "fullType": "domain.configuration.rules.OperatorEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "The operator of the constraint",
          "required": false
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The value to match against",
          "required": false
        },
        "values": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "The values to match against",
          "required": false
        }
      }
    },
    "domain.configuration.rules.ContextEnum": {
      "id": "ContextEnum",
      "namespace": "domain.configuration.rules",
      "description": "Used in rule to tell if rule (or part of the rule) is applicable for a given context",
      "enum": [
        "update",
        "create",
        "transfer",
        "trade",
        "order",
        "premium",
        "accept_conditions",
        "claims",
        "reason",
        "protected_code"
      ],
      "enumType": "string"
    },
    "domain.configuration.rules.OperatorEnum": {
      "id": "OperatorEnum",
      "namespace": "domain.configuration.rules",
      "description": "Operator use in configuration rule to check content of a field",
      "enum": [
        "eq",
        "ne",
        "gt",
        "gte",
        "lt",
        "lte",
        "maxlength",
        "minlength",
        "between",
        "contains",
        "notcontains",
        "empty",
        "notempty",
        "match",
        "shouldbetrue",
        "required",
        "readonly"
      ],
      "enumType": "string"
    },
    "domain.configuration.rules.Rule": {
      "id": "Rule",
      "namespace": "domain.configuration.rules",
      "description": "A configuration rule defines validation to launch when executing an action on a domain (create, trade...). Depending on the extension, the rule may be different",
      "properties": {
        "and": {
          "type": "domain.configuration.rules.Rule[]",
          "fullType": "domain.configuration.rules.Rule[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "An \"and\" operator on multiple rules",
          "required": false
        },
        "conditions": {
          "type": "domain.configuration.rules.Rule",
          "fullType": "domain.configuration.rules.Rule",
          "canBeNull": true,
          "readOnly": true,
          "description": "Whether this rule is applied or not",
          "required": false
        },
        "constraints": {
          "type": "domain.configuration.rules.Constraint[]",
          "fullType": "domain.configuration.rules.Constraint[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "The constraints of the rule",
          "required": false
        },
        "contexts": {
          "type": "domain.configuration.rules.ContextEnum[]",
          "fullType": "domain.configuration.rules.ContextEnum[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "The context on which the rule applies",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The description of the rule",
          "required": false
        },
        "fields": {
          "type": "domain.configuration.rules.Rule",
          "fullType": "domain.configuration.rules.Rule",
          "canBeNull": true,
          "readOnly": true,
          "description": "The fields with specific rules",
          "required": false
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The label of the rule",
          "required": false
        },
        "or": {
          "type": "domain.configuration.rules.Rule[]",
          "fullType": "domain.configuration.rules.Rule[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "An \"or\" operator on multiple rules",
          "required": false
        },
        "placeholder": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The default value used for the rule",
          "required": false
        },
        "type": {
          "type": "domain.configuration.rules.TypeEnum",
          "fullType": "domain.configuration.rules.TypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "The type of the object the rule applies on",
          "required": false
        }
      }
    },
    "domain.configuration.rules.RuleData": {
      "id": "RuleData",
      "namespace": "domain.configuration.rules",
      "description": "A rule data contains the fields that must be validated against a rule",
      "properties": {
        "adminAccount": {
          "type": "nichandle.Nichandle",
          "fullType": "nichandle.Nichandle",
          "canBeNull": true,
          "readOnly": true,
          "description": "The admin contact data",
          "required": false
        },
        "domain": {
          "type": "domain.Data",
          "fullType": "domain.Data",
          "canBeNull": true,
          "readOnly": true,
          "description": "The domain data",
          "required": false
        },
        "extras": {
          "type": "domain.configuration.rules.RuleExtraData",
          "fullType": "domain.configuration.rules.RuleExtraData",
          "canBeNull": true,
          "readOnly": true,
          "description": "The extra data of the rule",
          "required": false
        },
        "owner": {
          "type": "domain.Contact",
          "fullType": "domain.Contact",
          "canBeNull": true,
          "readOnly": true,
          "description": "The owner contact data",
          "required": false
        },
        "techAccount": {
          "type": "nichandle.Nichandle",
          "fullType": "nichandle.Nichandle",
          "canBeNull": true,
          "readOnly": true,
          "description": "The tech contact data",
          "required": false
        }
      }
    },
    "domain.configuration.rules.RuleExtraData": {
      "id": "RuleExtraData",
      "namespace": "domain.configuration.rules",
      "description": "The extra data contain additional rule data fields",
      "properties": {
        "acceptCondition": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Whether you accept the domain specific conditions or not",
          "required": false
        },
        "authInfo": {
          "type": "password",
          "fullType": "password",
          "canBeNull": true,
          "readOnly": true,
          "description": "The auth info code for the domain",
          "required": false
        }
      }
    },
    "domain.configuration.rules.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "domain.configuration.rules",
      "description": "Type of rule configuration",
      "enum": [
        "string",
        "text",
        "bool",
        "number",
        "json",
        "contact",
        "domain",
        "date_ISO8601"
      ],
      "enumType": "string"
    },
    "domain.configurations.ObfuscatedEmails": {
      "id": "ObfuscatedEmails",
      "namespace": "domain.configurations",
      "description": "Representation of the obfuscated emails configuration",
      "properties": {
        "type": {
          "type": "domain.ContactAllTypesEnum",
          "fullType": "domain.ContactAllTypesEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact's type associated to the obfuscated email",
          "required": true
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Obfuscated email value",
          "required": true
        }
      }
    },
    "domain.configurations.Optin": {
      "id": "Optin",
      "namespace": "domain.configurations",
      "description": "Representation of the optin configuration",
      "properties": {
        "fields": {
          "type": "domain.OptinFieldsEnum[]",
          "fullType": "domain.OptinFieldsEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Displayed fields",
          "required": true
        },
        "type": {
          "type": "domain.ContactAllTypesEnum",
          "fullType": "domain.ContactAllTypesEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's type associated to the optin configuration",
          "required": true
        }
      }
    },
    "domain.data.AfnicCorporationTrademarkContact": {
      "id": "AfnicCorporationTrademarkContact",
      "namespace": "domain.data",
      "description": "Representation of an Inpi additional information for a corporation",
      "properties": {
        "contactId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact ID related to the Inpi additional information",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Corporation Inpi additional information ID",
          "required": true
        },
        "inpiNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of the Inpi declaration",
          "required": true
        },
        "inpiTrademarkOwner": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Owner of the trademark",
          "required": true
        }
      }
    },
    "domain.data.AssociationContact": {
      "id": "AssociationContact",
      "namespace": "domain.data",
      "description": "Representation of a Association additional information",
      "properties": {
        "contactId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact ID related to the association contact information",
          "required": true
        },
        "declarationDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date of the declaration of the association",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Association additional information ID",
          "required": true
        },
        "publicationDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date of the publication of the declaration of the association",
          "required": true
        },
        "publicationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of the publication of the declaration of the association",
          "required": true
        },
        "publicationPageNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Page number of the publication of the declaration of the association",
          "required": true
        }
      }
    },
    "domain.data.ProContact": {
      "id": "ProContact",
      "namespace": "domain.data",
      "description": "Representation of an .pro Contact Resource",
      "properties": {
        "authority": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Authority that certify your profesional status",
          "required": true
        },
        "authorityWebsite": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Website of the authority that certify your profesional status",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": ".pro Contact ID",
          "required": true
        },
        "jobDescription": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of your job",
          "required": true
        },
        "licenseNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "License number given by the authority",
          "required": true
        }
      }
    },
    "domain.data.Smd": {
      "id": "Smd",
      "namespace": "domain.data",
      "description": "Representation of a SMD Resource file",
      "properties": {
        "data": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": false,
          "description": "SMD file content",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "SMD file ID",
          "required": true
        },
        "notAfter": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Date when information about SMD file aren't valid anymore",
          "required": false
        },
        "notBefore": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Date before when information about SMD file aren't valid yet",
          "required": false
        },
        "protectedLabels": {
          "type": "domain.data.SmdLabel[]",
          "fullType": "domain.data.SmdLabel[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of the labels that are protected with that SMD file",
          "required": true
        },
        "smdId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "TMCH Internal identifier",
          "required": false
        }
      }
    },
    "domain.data.SmdLabel": {
      "id": "SmdLabel",
      "namespace": "domain.data",
      "description": "Representation of a protected label",
      "properties": {
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Label that is protected",
          "required": true
        },
        "trademark": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Trademark associated to the protected label",
          "required": true
        }
      }
    },
    "domain.data.claimNotice.Address": {
      "id": "Address",
      "namespace": "domain.data.claimNotice",
      "description": "Address for a claim notice holder",
      "properties": {
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "City",
          "required": false
        },
        "countryCode": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Country code",
          "required": false
        },
        "fax": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": true,
          "description": "Fax number",
          "required": false
        },
        "faxExtension": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Fax number extension",
          "required": false
        },
        "postalCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Postal zip code",
          "required": false
        },
        "stateOrProvince": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "State of province",
          "required": false
        },
        "streets": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Array of street name",
          "required": false
        },
        "voice": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": true,
          "description": "Phone number",
          "required": false
        },
        "voiceExtension": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Phone number extension",
          "required": false
        }
      }
    },
    "domain.data.claimNotice.ClaimNotice": {
      "id": "ClaimNotice",
      "namespace": "domain.data.claimNotice",
      "description": "Definition of claim notices applying to a domain name",
      "properties": {
        "claims": {
          "type": "domain.data.claimNotice.ClaimNoticeDecision[]",
          "fullType": "domain.data.claimNotice.ClaimNoticeDecision[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Array of claim notice for the domain",
          "required": false
        },
        "endingDate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ending date of claim notice",
          "required": false
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Claim notice ID",
          "required": false
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Label referring to claim notice",
          "required": false
        },
        "startingDate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Beginning date of claim notice",
          "required": false
        },
        "type": {
          "type": "domain.data.claimNotice.ClaimNoticeTypeEnum",
          "fullType": "domain.data.claimNotice.ClaimNoticeTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Type of claim notice",
          "required": false
        }
      }
    },
    "domain.data.claimNotice.ClaimNoticeDecision": {
      "id": "ClaimNoticeDecision",
      "namespace": "domain.data.claimNotice",
      "description": "Definition of a single claim notice",
      "properties": {
        "classifications": {
          "type": "domain.data.claimNotice.Classification[]",
          "fullType": "domain.data.claimNotice.Classification[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Classifications where trademark claim notice apply",
          "required": false
        },
        "courtDecisions": {
          "type": "domain.data.claimNotice.CourtDecision[]",
          "fullType": "domain.data.claimNotice.CourtDecision[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Array of court decisions related to claim notice",
          "required": false
        },
        "goodsAndServices": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Goods and services on which apply claim notice",
          "required": false
        },
        "jurisdiction": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of jurisdiction",
          "required": false
        },
        "jurisdictionCountryCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Jurisdiction country code",
          "required": false
        },
        "markName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Mark name implicated in claim notice",
          "required": false
        },
        "trademarkContacts": {
          "type": "domain.data.claimNotice.Contact[]",
          "fullType": "domain.data.claimNotice.Contact[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Trademark contacts",
          "required": false
        },
        "trademarkHolders": {
          "type": "domain.data.claimNotice.Contact[]",
          "fullType": "domain.data.claimNotice.Contact[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Trademark holders",
          "required": false
        },
        "trademarkUDRP": {
          "type": "domain.data.claimNotice.UDRP[]",
          "fullType": "domain.data.claimNotice.UDRP[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Trademark UDRP informations",
          "required": false
        }
      }
    },
    "domain.data.claimNotice.ClaimNoticeTypeEnum": {
      "id": "ClaimNoticeTypeEnum",
      "namespace": "domain.data.claimNotice",
      "description": "Type of claim notice",
      "enum": [
        "UK",
        "TRADEMARK"
      ],
      "enumType": "string"
    },
    "domain.data.claimNotice.Classification": {
      "id": "Classification",
      "namespace": "domain.data.claimNotice",
      "description": "Definition of a trademark claim notice classification",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Summary of the classification",
          "required": false
        },
        "number": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Code of the classification",
          "required": false
        }
      }
    },
    "domain.data.claimNotice.Contact": {
      "id": "Contact",
      "namespace": "domain.data.claimNotice",
      "description": "Contact definition of a claim notice holder",
      "properties": {
        "address": {
          "type": "domain.data.claimNotice.Address",
          "fullType": "domain.data.claimNotice.Address",
          "canBeNull": false,
          "readOnly": true,
          "description": "Address of holder",
          "required": false
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Email address",
          "required": false
        },
        "entitlement": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Legitimacy of holder",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of claim notice holder",
          "required": false
        },
        "organisation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Organisation name",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Type of contact",
          "required": false
        }
      }
    },
    "domain.data.claimNotice.CourtDecision": {
      "id": "CourtDecision",
      "namespace": "domain.data.claimNotice",
      "description": "Definition of a court decision",
      "properties": {
        "countryCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Country code",
          "required": false
        },
        "courtName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Court name",
          "required": false
        },
        "referenceNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Reference number of court decision",
          "required": false
        },
        "regions": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Regions where court decision apply",
          "required": false
        }
      }
    },
    "domain.data.claimNotice.UDRP": {
      "id": "UDRP",
      "namespace": "domain.data.claimNotice",
      "description": "Definition of a UDRP procedure",
      "properties": {
        "caseNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Case number",
          "required": false
        },
        "udrpProvider": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "UDRP Provider",
          "required": false
        }
      }
    },
    "domain.rules.Optin": {
      "id": "Optin",
      "namespace": "domain.rules",
      "description": "Representation of the optin rule",
      "properties": {
        "fields": {
          "type": "domain.OptinFieldsEnum[]",
          "fullType": "domain.OptinFieldsEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Displayed fields",
          "required": true
        },
        "type": {
          "type": "domain.ContactAllTypesEnum",
          "fullType": "domain.ContactAllTypesEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact's type associated to the optin rule",
          "required": true
        }
      }
    },
    "domain.services.options.Option": {
      "id": "Option",
      "namespace": "domain.services.options",
      "description": "Data of a domain option",
      "properties": {
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service name of the option",
          "required": true
        }
      }
    },
    "domain.services.options.Options": {
      "id": "Options",
      "namespace": "domain.services.options",
      "description": "Representation of the domain options",
      "properties": {
        "hosting": {
          "type": "domain.services.options.Option",
          "fullType": "domain.services.options.Option",
          "canBeNull": true,
          "readOnly": true,
          "description": "Hosting option",
          "required": false
        },
        "offer": {
          "type": "domain.services.options.Option",
          "fullType": "domain.services.options.Option",
          "canBeNull": true,
          "readOnly": true,
          "description": "Offer option (Diamond, Platinum)",
          "required": false
        },
        "zone": {
          "type": "domain.services.options.Option",
          "fullType": "domain.services.options.Option",
          "canBeNull": true,
          "readOnly": true,
          "description": "DNS zone option",
          "required": false
        }
      }
    },
    "domain.zone.Dnssec": {
      "id": "Dnssec",
      "namespace": "domain.zone",
      "description": "Manage Dnssec for this zone",
      "properties": {
        "status": {
          "type": "dnssec.DnssecStatusEnum",
          "fullType": "dnssec.DnssecStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "domain.zone.DynHostLogin": {
      "id": "DynHostLogin",
      "namespace": "domain.zone",
      "description": "Manage DynHost login",
      "properties": {
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Login",
          "required": true
        },
        "subDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Subdomain that the login will be allowed to update (* to allow all)",
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Zone",
          "required": true
        }
      }
    },
    "domain.zone.DynHostRecord": {
      "id": "DynHostRecord",
      "namespace": "domain.zone",
      "description": "DynHost record",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the DynHost record",
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ip address of the DynHost record",
          "required": true
        },
        "subDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Subdomain of the DynHost record",
          "required": false
        },
        "ttl": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "DynHost record ttl",
          "required": false
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Zone of the DynHost record",
          "required": true
        }
      }
    },
    "domain.zone.Record": {
      "id": "Record",
      "namespace": "domain.zone",
      "description": "Zone resource records",
      "properties": {
        "fieldType": {
          "type": "zone.NamedResolutionFieldTypeEnum",
          "fullType": "zone.NamedResolutionFieldTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Resource record Name",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the zone resource record",
          "required": true
        },
        "subDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Resource record subdomain",
          "required": false
        },
        "target": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Resource record target",
          "required": true
        },
        "ttl": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Resource record ttl",
          "required": false
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Resource record zone",
          "required": true
        }
      }
    },
    "domain.zone.Redirection": {
      "id": "Redirection",
      "namespace": "domain.zone",
      "description": "Redirection",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Desciption for invisible redirection",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the redirection",
          "required": true
        },
        "keywords": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Keywords for invisible redirection",
          "required": false
        },
        "subDomain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "subdomain to redirect",
          "required": false
        },
        "target": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Target of the redirection",
          "required": true
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Title for invisible redirection",
          "required": false
        },
        "type": {
          "type": "zone.RedirectionTypeEnum",
          "fullType": "zone.RedirectionTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Redirection type",
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Redirection zone",
          "required": true
        }
      }
    },
    "domain.zone.Soa": {
      "id": "Soa",
      "namespace": "domain.zone",
      "description": "Zone Start Of Authority",
      "properties": {
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email address of the DNS Administrator",
          "required": true
        },
        "expire": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "When a zone transfer fails, a countdown clock begins. When the number of seconds set in the expire field elapses, the nameserver stops answering for that zone file",
          "required": true
        },
        "nxDomainTtl": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Non-Existent Domain TTL, if the name server returns a negative response, the remote server should wait the number of seconds set in the nxDomainTtl field before trying again",
          "required": true
        },
        "refresh": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The refresh value determines the interval in seconds between successful zone transfers of the entire zone file from a nameserver to another.",
          "required": true
        },
        "serial": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The serial number is used to indicate which copy of the zone file is the most current. When editing zone files, you must increment the serial number",
          "required": true
        },
        "server": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Primary authoritative server",
          "required": true
        },
        "ttl": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Time To Live in seconds",
          "required": true
        }
      }
    },
    "domain.zone.Task": {
      "id": "Task",
      "namespace": "domain.zone",
      "description": "Tasks associated to a zone",
      "properties": {
        "canAccelerate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Can accelerate the task",
          "required": true
        },
        "canCancel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Can cancel the task",
          "required": true
        },
        "canRelaunch": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Can relaunch the task",
          "required": true
        },
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Comment about the task",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the task",
          "required": true
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Done date of the task",
          "required": false
        },
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function of the task",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of the task",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last update date of the task",
          "required": true
        },
        "status": {
          "type": "domain.OperationStatusEnum",
          "fullType": "domain.OperationStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the task",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Todo date of the task",
          "required": true
        }
      }
    },
    "domain.zone.Zone": {
      "id": "Zone",
      "namespace": "domain.zone",
      "description": "Zone dns Management",
      "properties": {
        "dnssecSupported": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is DNSSEC supported by this zone",
          "required": true
        },
        "hasDnsAnycast": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "hasDnsAnycast flag of the DNS zone",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last update date of the DNS zone",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Zone name",
          "required": true
        },
        "nameServers": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name servers that host the DNS zone",
          "required": true
        }
      }
    },
    "domain.zone.ZoneRestorePoint": {
      "id": "ZoneRestorePoint",
      "namespace": "domain.zone",
      "description": "Zone restore point",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of backup creation",
          "required": true
        },
        "zoneFileUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "URL to get backup content",
          "required": true
        }
      }
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
    "nichandle.Currency": {
      "id": "Currency",
      "namespace": "nichandle",
      "description": "Customer currency",
      "properties": {
        "code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Currency code",
          "required": false
        },
        "symbol": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Currency symbol",
          "required": false
        }
      }
    },
    "nichandle.GenderEnum": {
      "id": "GenderEnum",
      "namespace": "nichandle",
      "description": "All genders a person can choose",
      "enum": [
        "female",
        "male"
      ],
      "enumType": "string"
    },
    "nichandle.LanguageEnum": {
      "id": "LanguageEnum",
      "namespace": "nichandle",
      "description": "Languages a nichandle can choose",
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
      ],
      "enumType": "string"
    },
    "nichandle.LegalFormEnum": {
      "id": "LegalFormEnum",
      "namespace": "nichandle",
      "description": "Legal forms a nichandle can be registered as",
      "enum": [
        "administration",
        "association",
        "corporation",
        "individual",
        "other",
        "personalcorporation"
      ],
      "enumType": "string"
    },
    "nichandle.Nichandle": {
      "id": "Nichandle",
      "namespace": "nichandle",
      "description": "Details about your OVH identifier",
      "properties": {
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Address of nichandle",
          "required": false
        },
        "area": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Area of nichandle",
          "required": false
        },
        "birthCity": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "City of birth",
          "required": false
        },
        "birthDay": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Birth date",
          "required": false
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "City of nichandle",
          "required": false
        },
        "companyNationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Company National Identification Number",
          "required": false
        },
        "corporationType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Corporation type",
          "required": false
        },
        "country": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Customer country",
          "required": false
        },
        "currency": {
          "type": "nichandle.Currency",
          "fullType": "nichandle.Currency",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer currency",
          "required": false
        },
        "customerCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Your customer code (a numerical value used for identification when contacting support via phone call)",
          "required": false
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Email address",
          "required": false
        },
        "fax": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Fax number",
          "required": false
        },
        "firstname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "First name",
          "required": false
        },
        "italianSDI": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Italian SDI",
          "required": false
        },
        "language": {
          "type": "nichandle.LanguageEnum",
          "fullType": "nichandle.LanguageEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Language",
          "required": false
        },
        "legalform": {
          "type": "nichandle.LegalFormEnum",
          "fullType": "nichandle.LegalFormEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Customer legal form",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Customer name",
          "required": false
        },
        "nationalIdentificationNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "National Identification Number",
          "required": false
        },
        "nichandle": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Customer identifier",
          "required": false
        },
        "organisation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of organisation",
          "required": false
        },
        "ovhCompany": {
          "type": "nichandle.OvhCompanyEnum",
          "fullType": "nichandle.OvhCompanyEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "OVH subsidiary",
          "required": false
        },
        "ovhSubsidiary": {
          "type": "nichandle.OvhSubsidiaryEnum",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "OVH subsidiary",
          "required": false
        },
        "phone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Phone number",
          "required": false
        },
        "phoneCountry": {
          "type": "nichandle.CountryEnum",
          "fullType": "nichandle.CountryEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "sex": {
          "type": "nichandle.GenderEnum",
          "fullType": "nichandle.GenderEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Gender",
          "required": false
        },
        "spareEmail": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Spare email",
          "required": false
        },
        "state": {
          "type": "nichandle.StateEnum",
          "fullType": "nichandle.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Nichandle state",
          "required": false
        },
        "vat": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "VAT number",
          "required": false
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Zipcode",
          "required": false
        }
      }
    },
    "nichandle.OvhCompanyEnum": {
      "id": "OvhCompanyEnum",
      "namespace": "nichandle",
      "description": "OVH subsidiaries",
      "enum": [
        "kimsufi",
        "ovh",
        "soyoustart"
      ],
      "enumType": "string"
    },
    "nichandle.OvhSubsidiaryEnum": {
      "id": "OvhSubsidiaryEnum",
      "namespace": "nichandle",
      "description": "OVH subsidiaries",
      "enum": [
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
        "SN",
        "TN"
      ],
      "enumType": "string"
    },
    "nichandle.StateEnum": {
      "id": "StateEnum",
      "namespace": "nichandle",
      "description": "States a nichandle can be in",
      "enum": [
        "complete",
        "incomplete"
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
    "service.TerminationFutureUseEnum": {
      "id": "TerminationFutureUseEnum",
      "namespace": "service",
      "description": "All future uses you can provide for a service termination",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string"
    },
    "service.TerminationReasonEnum": {
      "id": "TerminationReasonEnum",
      "namespace": "service",
      "description": "All reasons you can provide for a service termination",
      "enum": [
        "FEATURES_DONT_SUIT_ME",
        "LACK_OF_PERFORMANCES",
        "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
        "MIGRATED_TO_COMPETITOR",
        "NOT_ENOUGH_RECOGNITION",
        "NOT_NEEDED_ANYMORE",
        "NOT_RELIABLE",
        "NO_ANSWER",
        "OTHER",
        "PRODUCT_DIMENSION_DONT_SUIT_ME",
        "PRODUCT_TOOLS_DONT_SUIT_ME",
        "TOO_EXPENSIVE",
        "TOO_HARD_TO_USE",
        "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
    "zone.Capabilities": {
      "id": "Capabilities",
      "namespace": "zone",
      "description": "Zone capabilities",
      "properties": {
        "dynHost": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "True if dynHost available for this zone",
          "required": true
        }
      }
    },
    "zone.NamedResolutionFieldTypeEnum": {
      "id": "NamedResolutionFieldTypeEnum",
      "namespace": "zone",
      "description": "Resource record fieldType",
      "enum": [
        "A",
        "AAAA",
        "CAA",
        "CNAME",
        "DKIM",
        "DMARC",
        "LOC",
        "MX",
        "NAPTR",
        "NS",
        "PTR",
        "SPF",
        "SRV",
        "SSHFP",
        "TLSA",
        "TXT"
      ],
      "enumType": "string"
    },
    "zone.RedirectionTypeEnum": {
      "id": "RedirectionTypeEnum",
      "namespace": "zone",
      "description": "Redirection type enum : visible -> Redirection by http code 302, visiblePermanent -> Redirection by http code 301, invisible -> Redirection by html frame",
      "enum": [
        "invisible",
        "visible",
        "visiblePermanent"
      ],
      "enumType": "string"
    },
    "zone.ResetRecord": {
      "id": "ResetRecord",
      "namespace": "zone",
      "description": "Resource record",
      "properties": {
        "fieldType": {
          "type": "zone.ResettableNamedResolutionFieldTypeEnum",
          "fullType": "zone.ResettableNamedResolutionFieldTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "target": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Resource record target",
          "required": true
        }
      }
    },
    "zone.ResettableNamedResolutionFieldTypeEnum": {
      "id": "ResettableNamedResolutionFieldTypeEnum",
      "namespace": "zone",
      "description": "Resource record type",
      "enum": [
        "A",
        "MX"
      ],
      "enumType": "string"
    },
    "zone.Status": {
      "id": "Status",
      "namespace": "zone",
      "description": "Zone status",
      "properties": {
        "errors": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Error list",
          "required": false
        },
        "isDeployed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "True if the zone has successfully been deployed",
          "required": true
        },
        "warnings": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Warning list",
          "required": false
        }
      }
    }
  }
}