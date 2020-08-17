import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/domain.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
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
      "path": "/domain"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get configuration rule applied for a domain in a given action",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "The domain to get the configuration rule for",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "domain.ActionEnum",
              "description": "Depending on the action, the applied rule will change (transfer vs create)",
              "fullType": "domain.ActionEnum",
              "name": "action",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "domain.configuration.rules.Rule"
        }
      ],
      "path": "/domain/configurationRule"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Validate a rule data for a specified domain",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "domain.configuration.rules.RuleData",
              "description": "Request Body",
              "fullType": "domain.configuration.rules.RuleData",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The domain to check the rule data for",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "domain.ActionEnum",
              "description": "Depending on the action, the applied rule will change (transfer vs create)",
              "fullType": "domain.ActionEnum",
              "name": "action",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/configurationRule/check"
    },
    {
      "description": "Operations on contacts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all contacts",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "domain.Contact[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a contact",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.Contact",
              "description": "Request Body",
              "fullType": "domain.Contact",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "domain.Contact"
        }
      ],
      "path": "/domain/contact"
    },
    {
      "description": "Operations on contacts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get details about a contact",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Contact ID",
              "fullType": "long",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Contact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update a contact",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.Contact",
              "description": "Request Body",
              "fullType": "domain.Contact",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Contact ID",
              "fullType": "long",
              "name": "contactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Contact"
        }
      ],
      "path": "/domain/contact/{contactId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all association information according to Afnic",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new association information according to Afnic",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "date",
              "description": "Date of the declaration of the association",
              "fullType": "date",
              "name": "declarationDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "date",
              "description": "Date of the publication of the declaration of the association",
              "fullType": "date",
              "name": "publicationDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Number of the publication of the declaration of the association",
              "fullType": "string",
              "name": "publicationNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Page number of the publication of the declaration of the association",
              "fullType": "string",
              "name": "publicationPageNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Contact ID related to the association contact information",
              "fullType": "long",
              "name": "contactId",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "domain.data.AssociationContact"
        }
      ],
      "path": "/domain/data/afnicAssociationInformation"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve an association information according to Afnic",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Association Information ID",
              "fullType": "long",
              "name": "associationInformationId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.data.AssociationContact"
        }
      ],
      "path": "/domain/data/afnicAssociationInformation/{associationInformationId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all corporation trademark information according to Afnic",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post a new corporation trademark information according to Afnic",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number of the Inpi declaration",
              "fullType": "string",
              "name": "inpiNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Owner of the trademark",
              "fullType": "string",
              "name": "inpiTrademarkOwner",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Contact ID related to the Inpi additional information",
              "fullType": "long",
              "name": "contactId",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "domain.data.AfnicCorporationTrademarkContact"
        }
      ],
      "path": "/domain/data/afnicCorporationTrademarkInformation"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve a corporation trademark information according to Afnic",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Corporation Inpi Information ID",
              "fullType": "long",
              "name": "afnicCorporationTrademarkId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.data.AfnicCorporationTrademarkContact"
        }
      ],
      "path": "/domain/data/afnicCorporationTrademarkInformation/{afnicCorporationTrademarkId}"
    },
    {
      "description": "Retrive claim notices",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve claim notices associated to a domain",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain name",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "domain.data.claimNotice.ClaimNotice"
        }
      ],
      "path": "/domain/data/claimNotice"
    },
    {
      "description": "List all the extensions for a specific country",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all the extensions for a specific country",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "nichandle.OvhSubsidiaryEnum",
              "description": "Ovh subsidiary targeted",
              "fullType": "nichandle.OvhSubsidiaryEnum",
              "name": "country",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/domain/data/extension"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve all your Pro Contact",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Post new information about .pro contact information",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Description of your job",
              "fullType": "string",
              "name": "jobDescription",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Authority that certify your profesional status",
              "fullType": "string",
              "name": "authority",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Website of the authority that certify your profesional status",
              "fullType": "string",
              "name": "authorityWebsite",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "License number given by the authority",
              "fullType": "string",
              "name": "licenseNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Contact ID that refer to that .pro information",
              "fullType": "long",
              "name": "contactId",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "domain.data.ProContact"
        }
      ],
      "path": "/domain/data/proContact"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve information about a Pro Contact",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "ProContact ID",
              "fullType": "long",
              "name": "proContactId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.data.ProContact"
        }
      ],
      "path": "/domain/data/proContact/{proContactId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all your SMD files",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of protectedLabels.label property (=)",
              "fullType": "string",
              "name": "protectedLabels.label",
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
          "description": "Post a new SMD file",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "SMD content file",
              "fullType": "text",
              "name": "data",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "domain.data.Smd"
        }
      ],
      "path": "/domain/data/smd"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a SMD file",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "SMD ID",
              "fullType": "long",
              "name": "smdId",
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
          "description": "Retrieve information about a SMD file",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "SMD ID",
              "fullType": "long",
              "name": "smdId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.data.Smd"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Modify an existing SMD file",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "SMD ID",
              "fullType": "long",
              "name": "smdId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "text",
              "description": "SMD content file",
              "fullType": "text",
              "name": "data",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "domain.data.Smd"
        }
      ],
      "path": "/domain/data/smd/{smdId}"
    },
    {
      "description": "Rules for creating a domain",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List all the rules for a specific cartId/itemId",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cart ID concerned for the rules",
              "fullType": "string",
              "name": "cartId",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Item ID concerned for the rules",
              "fullType": "long",
              "name": "itemId",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "domain.Rule"
        }
      ],
      "path": "/domain/rules"
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
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/domain/zone"
    },
    {
      "description": "Zone dns Management",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
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
          "responseType": "domain.zone.Zone"
        }
      ],
      "path": "/domain/zone/{zoneName}"
    },
    {
      "description": "capabilities operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Zone capabilities",
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
          "responseType": "zone.Capabilities"
        }
      ],
      "path": "/domain/zone/{zoneName}/capabilities"
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
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
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
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/domain/zone/{zoneName}/changeContact"
    },
    {
      "description": "Confirm termination of your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Confirm termination of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "service.TerminationFutureUseEnum",
              "description": "What next after your termination request",
              "fullType": "service.TerminationFutureUseEnum",
              "name": "futureUse",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "service.TerminationReasonEnum",
              "description": "Reason of your termination request",
              "fullType": "service.TerminationReasonEnum",
              "name": "reason",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Commentary about your termination request",
              "fullType": "string",
              "name": "commentary",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The termination token sent by mail to the admin contact",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
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
          "responseType": "string"
        }
      ],
      "path": "/domain/zone/{zoneName}/confirmTermination"
    },
    {
      "description": "Manage Dnssec for this zone",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Disable Dnssec",
          "httpMethod": "DELETE",
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
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
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
          "responseType": "domain.zone.Dnssec"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Enable Dnssec",
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
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/dnssec"
    },
    {
      "description": "export operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Export zone",
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
          "responseType": "text"
        }
      ],
      "path": "/domain/zone/{zoneName}/export"
    },
    {
      "description": "List the domain.zone.ZoneRestorePoint objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Zone restore points",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDate property (<=)",
              "fullType": "datetime",
              "name": "creationDate.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDate property (>=)",
              "fullType": "datetime",
              "name": "creationDate.from",
              "paramType": "query",
              "required": false
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
          "responseType": "datetime[]"
        }
      ],
      "path": "/domain/zone/{zoneName}/history"
    },
    {
      "description": "Zone restore point",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
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
              "dataType": "datetime",
              "description": "Date of backup creation",
              "fullType": "datetime",
              "name": "creationDate",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.ZoneRestorePoint"
        }
      ],
      "path": "/domain/zone/{zoneName}/history/{creationDate}"
    },
    {
      "description": "restore operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Restore the DNS zone",
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
              "dataType": "datetime",
              "description": "Date of backup creation",
              "fullType": "datetime",
              "name": "creationDate",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Task"
        }
      ],
      "path": "/domain/zone/{zoneName}/history/{creationDate}/restore"
    },
    {
      "description": "import operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Import zone",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "Zone file that will be imported",
              "fullType": "text",
              "name": "zoneFile",
              "paramType": "body",
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
          "responseType": "domain.zone.Task"
        }
      ],
      "path": "/domain/zone/{zoneName}/import"
    },
    {
      "description": "List the domain.zone.Record objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Records of the zone",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of subDomain property (like)",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "zone.NamedResolutionFieldTypeEnum",
              "description": "Filter the value of fieldType property (like)",
              "fullType": "zone.NamedResolutionFieldTypeEnum",
              "name": "fieldType",
              "paramType": "query",
              "required": false
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
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new DNS record (Don't forget to refresh the zone)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "zone.NamedResolutionFieldTypeEnum",
              "description": "Resource record Name",
              "fullType": "zone.NamedResolutionFieldTypeEnum",
              "name": "fieldType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Resource record ttl",
              "fullType": "long",
              "name": "ttl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Resource record subdomain",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Resource record target",
              "fullType": "string",
              "name": "target",
              "paramType": "body",
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
          "responseType": "domain.zone.Record"
        }
      ],
      "path": "/domain/zone/{zoneName}/record"
    },
    {
      "description": "Zone resource records",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a DNS record (Don't forget to refresh the zone)",
          "httpMethod": "DELETE",
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Record"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.zone.Record",
              "description": "New object properties",
              "fullType": "domain.zone.Record",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/record/{id}"
    },
    {
      "description": "List the domain.zone.Redirection objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Redirections",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of subDomain property (like)",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "query",
              "required": false
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
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new redirection (Don't forget to refresh the zone)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Desciption for invisible redirection",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Title for invisible redirection",
              "fullType": "string",
              "name": "title",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Target of the redirection",
              "fullType": "string",
              "name": "target",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "subdomain to redirect",
              "fullType": "string",
              "name": "subDomain",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Keywords for invisible redirection",
              "fullType": "string",
              "name": "keywords",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "zone.RedirectionTypeEnum",
              "description": "Redirection type",
              "fullType": "zone.RedirectionTypeEnum",
              "name": "type",
              "paramType": "body",
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
          "responseType": "domain.zone.Redirection"
        }
      ],
      "path": "/domain/zone/{zoneName}/redirection"
    },
    {
      "description": "Redirection",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a redirection (Don't forget to refresh the zone)",
          "httpMethod": "DELETE",
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Redirection"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.zone.Redirection",
              "description": "New object properties",
              "fullType": "domain.zone.Redirection",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/redirection/{id}"
    },
    {
      "description": "refresh operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Apply zone modification on DNS servers",
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
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/refresh"
    },
    {
      "description": "reset operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset the DNS zone",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "zone.ResetRecord[]",
              "description": "Records that will be set after reset",
              "fullType": "zone.ResetRecord[]",
              "name": "DnsRecords",
              "paramType": "body",
              "required": false
            },
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
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/reset"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
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
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
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
              "description": "The internal name of your zone",
              "fullType": "string",
              "name": "zoneName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/serviceInfos"
    },
    {
      "description": "Zone Start Of Authority",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
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
          "responseType": "domain.zone.Soa"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.zone.Soa",
              "description": "New object properties",
              "fullType": "domain.zone.Soa",
              "paramType": "body",
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
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/soa"
    },
    {
      "description": "status operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Zone status",
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
          "responseType": "zone.Status"
        }
      ],
      "path": "/domain/zone/{zoneName}/status"
    },
    {
      "description": "List the domain.zone.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Domain pending tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.OperationStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "domain.OperationStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of function property (like)",
              "fullType": "string",
              "name": "function",
              "paramType": "query",
              "required": false
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
          "responseType": "long[]"
        }
      ],
      "path": "/domain/zone/{zoneName}/task"
    },
    {
      "description": "Tasks associated to a zone",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.zone.Task"
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}"
    },
    {
      "description": "accelerate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accelerate the task",
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}/accelerate"
    },
    {
      "description": "cancel operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the task",
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}/cancel"
    },
    {
      "description": "relaunch operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch the task",
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/zone/{zoneName}/task/{id}/relaunch"
    },
    {
      "description": "Terminate your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Terminate your service",
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
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/domain/zone/{zoneName}/terminate"
    },
    {
      "description": "Domain name administration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Domain"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.Domain",
              "description": "New object properties",
              "fullType": "domain.Domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}"
    },
    {
      "description": "activateZone operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/order/cart/{cartId}/dns",
            "value": "DEPRECATED"
          },
          "description": "Activate the DNS zone for this domain",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/activateZone"
    },
    {
      "description": "authInfo operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return authInfo code if the domain is unlocked",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "password"
        }
      ],
      "path": "/domain/{serviceName}/authInfo"
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
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/domain/{serviceName}/changeContact"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve obfuscated emails configuration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.ObfuscatedEmail[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Save a new obfuscated emails configuration",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.ContactAllTypesEnum[]",
              "description": "Contact types where obfuscated emails can be activated",
              "fullType": "domain.ContactAllTypesEnum[]",
              "name": "contacts",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.ObfuscatedEmail[]"
        }
      ],
      "path": "/domain/{serviceName}/configurations/obfuscatedEmails"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Refresh an obfuscated emails configuration",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.ContactAllTypesEnum[]",
              "description": "Contact types where obfuscated emails will be refreshed",
              "fullType": "domain.ContactAllTypesEnum[]",
              "name": "contacts",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/configurations/obfuscatedEmails/refresh"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve optin configuration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.Optin[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Save a new optin configuration",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.configurations.Optin[]",
              "description": "New configuration about optin",
              "fullType": "domain.configurations.Optin[]",
              "name": "optin",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.configurations.Optin[]"
        }
      ],
      "path": "/domain/{serviceName}/configurations/optin"
    },
    {
      "description": "List the domain.DnssecKey objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of domain's DS Records",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dnssec.KeyFlagEnum",
              "description": "Filter the value of flags property (=)",
              "fullType": "dnssec.KeyFlagEnum",
              "name": "flags",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dnssec.KeyStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "dnssec.KeyStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update DS records",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dnssec.Key[]",
              "description": "New Keys",
              "fullType": "dnssec.Key[]",
              "name": "keys",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/dsRecord"
    },
    {
      "description": "Domain's DNSSEC Key",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.DnssecKey"
        }
      ],
      "path": "/domain/{serviceName}/dsRecord/{id}"
    },
    {
      "description": "refresh operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-02-01T00:00:00+01:00",
            "deprecatedDate": "2018-11-19T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/domain/{serviceName}/configurations/obfuscatedEmails/refresh",
            "value": "DEPRECATED"
          },
          "description": "Regenerate the obfuscated email address",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.DomainContactTypeEnum[]",
              "description": "Contact type",
              "fullType": "domain.DomainContactTypeEnum[]",
              "name": "contactType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/email/obfuscated/refresh"
    },
    {
      "description": "List the domain.GlueRecord objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of glue record",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Filter the value of host property (like)",
              "fullType": "string",
              "name": "host",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
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
          "description": "Create a glue record",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Host of the glue record",
              "fullType": "string",
              "name": "host",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip[]",
              "description": "Ips of the glue record",
              "fullType": "ip[]",
              "name": "ips",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/glueRecord"
    },
    {
      "description": "Glue record",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the glue record",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Host of the glue record",
              "fullType": "string",
              "name": "host",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Host of the glue record",
              "fullType": "string",
              "name": "host",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.GlueRecord"
        }
      ],
      "path": "/domain/{serviceName}/glueRecord/{host}"
    },
    {
      "description": "update operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update the glue record",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip[]",
              "description": "Ips of the glue record",
              "fullType": "ip[]",
              "name": "ips",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Host of the glue record",
              "fullType": "string",
              "name": "host",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/glueRecord/{host}/update"
    },
    {
      "description": "List the domain.CurrentNameServer objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of current name servers",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add new name server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.DomainNs[]",
              "description": "New name server",
              "fullType": "domain.DomainNs[]",
              "name": "nameServer",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/nameServer"
    },
    {
      "description": "CurrentNameServer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a name server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.CurrentNameServer"
        }
      ],
      "path": "/domain/{serviceName}/nameServer/{id}"
    },
    {
      "description": "status operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get name server status",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.DomainNsStatus"
        }
      ],
      "path": "/domain/{serviceName}/nameServer/{id}/status"
    },
    {
      "description": "update operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update DNS servers",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.DomainNs[]",
              "description": "New name servers",
              "fullType": "domain.DomainNs[]",
              "name": "nameServers",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/nameServers/update"
    },
    {
      "description": "List the domain.Option objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of domain options",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.DomainOptionEnum[]"
        }
      ],
      "path": "/domain/{serviceName}/option"
    },
    {
      "description": "Information about the options of a domain",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Release a given option",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "domain.DomainOptionEnum",
              "description": "The option name",
              "fullType": "domain.DomainOptionEnum",
              "name": "option",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "domain.DomainOptionEnum",
              "description": "The option name",
              "fullType": "domain.DomainOptionEnum",
              "name": "option",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Option"
        }
      ],
      "path": "/domain/{serviceName}/option/{option}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve data about the options associated to a domain",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.ServiceOptions"
        }
      ],
      "path": "/domain/{serviceName}/options"
    },
    {
      "description": "List the domain.Owo objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of whois obfuscators",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.WhoisObfuscatorFieldsEnum",
              "description": "Filter the value of field property (=)",
              "fullType": "domain.WhoisObfuscatorFieldsEnum",
              "name": "field",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.WhoisObfuscatorFieldsEnum[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add whois obfuscators",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.WhoisObfuscatorFieldsEnum[]",
              "description": "Fields to obfuscate",
              "fullType": "domain.WhoisObfuscatorFieldsEnum[]",
              "name": "fields",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.WhoisObfuscatorFieldsEnum[]"
        }
      ],
      "path": "/domain/{serviceName}/owo"
    },
    {
      "description": "Obfuscate whois",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a whois obfuscator",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "domain.WhoisObfuscatorFieldsEnum",
              "description": "Obfuscated field",
              "fullType": "domain.WhoisObfuscatorFieldsEnum",
              "name": "field",
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "domain.WhoisObfuscatorFieldsEnum",
              "description": "Obfuscated field",
              "fullType": "domain.WhoisObfuscatorFieldsEnum",
              "name": "field",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Owo"
        }
      ],
      "path": "/domain/{serviceName}/owo/{field}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve emails obfuscation rule",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.ContactAllTypesEnum[]"
        }
      ],
      "path": "/domain/{serviceName}/rules/emailsObfuscation"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Retrieve optin rule",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.rules.Optin[]"
        }
      ],
      "path": "/domain/{serviceName}/rules/optin"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
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
          "description": "Alter this object properties",
          "httpMethod": "PUT",
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
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/serviceInfos"
    },
    {
      "description": "List the domain.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Domain pending tasks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "domain.OperationStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "domain.OperationStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of function property (like)",
              "fullType": "string",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/domain/{serviceName}/task"
    },
    {
      "description": "Tasks associated to domain",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/task/{id}"
    },
    {
      "description": "accelerate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Accelerate the task",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/task/{id}/accelerate"
    },
    {
      "description": "cancel operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the task",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/task/{id}/cancel"
    },
    {
      "description": "relaunch operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Relaunch the task",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/domain/{serviceName}/task/{id}/relaunch"
    },
    {
      "description": "ukOutgoingTransfer operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Schedule an outgoing transfer task for this domain (.uk only)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Tag of the new registrar",
              "fullType": "string",
              "name": "tag",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.Task"
        }
      ],
      "path": "/domain/{serviceName}/ukOutgoingTransfer"
    },
    {
      "description": "ukRegistrars operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the list of all .uk registrars",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your domain",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "domain.UkRegistrar[]"
        }
      ],
      "path": "/domain/{serviceName}/ukRegistrars"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "dnssec.DnssecStatusEnum": {
      "description": "Dnssec Status",
      "enum": [
        "disableInProgress",
        "disabled",
        "enableInProgress",
        "enabled"
      ],
      "enumType": "string",
      "id": "DnssecStatusEnum",
      "namespace": "dnssec"
    },
    "dnssec.Key": {
      "description": "Key type",
      "id": "Key",
      "namespace": "dnssec",
      "properties": {
        "algorithm": {
          "canBeNull": false,
          "description": "Algorithm",
          "readOnly": false,
          "required": false,
          "type": "dnssec.KeyAlgorithmEnum"
        },
        "flags": {
          "canBeNull": false,
          "description": "Flag of the dnssec key",
          "readOnly": false,
          "required": false,
          "type": "dnssec.KeyFlagEnum"
        },
        "publicKey": {
          "canBeNull": false,
          "description": "Public key",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "tag": {
          "canBeNull": false,
          "description": "Key tag",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dnssec.KeyAlgorithmEnum": {
      "description": "Dnssec Algorithm\n                        ###\n                        5  : RSASHA1\n                        7  : RSASHA1-NSEC3-SHA1\n                        8  : RSASHA256\n                        10 : RSASHA512\n                        13 : ECDSAP256SHA256\n                        14 : ECDSAP384SHA384",
      "enum": [
        "10",
        "13",
        "14",
        "5",
        "7",
        "8"
      ],
      "enumType": "long",
      "id": "KeyAlgorithmEnum",
      "namespace": "dnssec"
    },
    "dnssec.KeyFlagEnum": {
      "description": "Dnssec Key Flag Type\n                        ###\n                        256 : Zone Signing Key (ZSK)\n                        257 : Key  Signing Key (KSK)",
      "enum": [
        "256",
        "257"
      ],
      "enumType": "long",
      "id": "KeyFlagEnum",
      "namespace": "dnssec"
    },
    "dnssec.KeyStatusEnum": {
      "description": "\n                Generated : The key has been created, but has not yet been used for anything.\n                ###\n                Published : The DNSKEY record is published in the zone, but predecessors of the key may be held in caches.\n                ###\n                Ready     : The new key data has been published for long enough to guarantee that any previous versions of the DNSKEY RRset have expired from caches.\n                ###\n                Active    : The key has started to be used to sign RRsets.\n                ###\n                Retired   : A successor key has become active and this key is no longer being used to generate RRSIGs.\n                ###\n                Removed   : The key has been removed from the zone.\n                ###\n                Revoked   : The key is published for a period with the \"revoke\" bit set as a way of notifying validating resolvers that have configured it as an trust anchor that it is about to be removed from the zone.",
      "enum": [
        "active",
        "generated",
        "published",
        "removed",
        "retired",
        "revoked"
      ],
      "enumType": "string",
      "id": "KeyStatusEnum",
      "namespace": "dnssec"
    },
    "domain.ActionEnum": {
      "description": "An action to execute on a domain name",
      "enum": [
        "create",
        "transfer",
        "update",
        "trade"
      ],
      "enumType": "string",
      "id": "ActionEnum",
      "namespace": "domain"
    },
    "domain.Contact": {
      "description": "A contact contains the personal data of a user",
      "id": "Contact",
      "namespace": "domain",
      "properties": {
        "accreditationCountry": {
          "canBeNull": true,
          "description": "Country of lawyer accreditation",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "accreditationId": {
          "canBeNull": true,
          "description": "Lawyer accreditation number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "accreditationOrganism": {
          "canBeNull": true,
          "description": "Organism of lawyer accreditation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "accreditationYear": {
          "canBeNull": true,
          "description": "Year of lawyer accreditation",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "address": {
          "canBeNull": true,
          "description": "The address of the contact",
          "fullType": "domain.ContactAddress",
          "readOnly": false,
          "required": false,
          "type": "domain.ContactAddress"
        },
        "birthCity": {
          "canBeNull": true,
          "description": "City of birth",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "birthCountry": {
          "canBeNull": true,
          "description": "Birth Country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "birthDay": {
          "canBeNull": true,
          "description": "Birth date",
          "fullType": "date",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "birthZip": {
          "canBeNull": true,
          "description": "Birth Zipcode",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "cellPhone": {
          "canBeNull": true,
          "description": "Cellphone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "companyNationalIdentificationNumber": {
          "canBeNull": true,
          "description": "Company National Identification Number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": true,
          "description": "Email address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "enterpriseId": {
          "canBeNull": true,
          "description": "Enterprise identifier",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "fax": {
          "canBeNull": true,
          "description": "Fax number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": true,
          "description": "First name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "gender": {
          "canBeNull": true,
          "description": "Gender",
          "fullType": "nichandle.GenderEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.GenderEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "insee": {
          "canBeNull": true,
          "description": "INSEE identifier",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "language": {
          "canBeNull": true,
          "description": "Language",
          "fullType": "nichandle.LanguageEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LanguageEnum"
        },
        "lastName": {
          "canBeNull": true,
          "description": "Last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "legalForm": {
          "canBeNull": true,
          "fullType": "nichandle.LegalFormEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LegalFormEnum"
        },
        "legalFormCategory": {
          "canBeNull": true,
          "description": "category of legalForm",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nationalIdentificationNumber": {
          "canBeNull": true,
          "description": "National Identification Number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nationality": {
          "canBeNull": true,
          "description": "Nationality",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "organisationAccountable": {
          "canBeNull": true,
          "description": "To whom is the organisation accountable",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationFunding": {
          "canBeNull": true,
          "description": "What is the source of funding",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationFundingOther": {
          "canBeNull": true,
          "description": "Explain the source of funding if organisationFunding is other",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationName": {
          "canBeNull": true,
          "description": "Name of organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationRole": {
          "canBeNull": true,
          "description": "Role of your organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationRoleOther": {
          "canBeNull": true,
          "description": "Explain the role of your organisation if organisationRole is other",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationStaffStatus": {
          "canBeNull": true,
          "description": "Status of the staff",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationStaffStatusOther": {
          "canBeNull": true,
          "description": "Explain the status of the staff if organisationStaffStatus is other",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationType": {
          "canBeNull": true,
          "description": "type of organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisationTypeOther": {
          "canBeNull": true,
          "description": "Explain the type of organisation if organisationType is other",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": true,
          "description": "Phone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "registrantDocumentType": {
          "canBeNull": true,
          "description": "Type of registrant document",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "registrantDocumentTypeOther": {
          "canBeNull": true,
          "description": "Explain the type of registrant document if registrantDocumentType is other",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "roleInOrganisation": {
          "canBeNull": true,
          "description": "The role in the organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vat": {
          "canBeNull": true,
          "description": "VAT number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "website": {
          "canBeNull": true,
          "description": "Website",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.ContactAddress": {
      "description": "Missing description",
      "id": "ContactAddress",
      "namespace": "domain",
      "properties": {
        "city": {
          "canBeNull": true,
          "description": "City",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": true,
          "description": "Country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "line1": {
          "canBeNull": true,
          "description": "Address line 1",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "line2": {
          "canBeNull": true,
          "description": "Address line 2",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "line3": {
          "canBeNull": true,
          "description": "Address line 3",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "otherDetails": {
          "canBeNull": true,
          "description": "Others details",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "province": {
          "canBeNull": true,
          "description": "Province",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": true,
          "description": "Zip code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.ContactAllTypesEnum": {
      "description": "Contact type fields",
      "enum": [
        "admin",
        "all",
        "billing",
        "owner",
        "tech"
      ],
      "enumType": "string",
      "id": "ContactAllTypesEnum",
      "namespace": "domain"
    },
    "domain.CurrentNameServer": {
      "description": "CurrentNameServer",
      "id": "CurrentNameServer",
      "namespace": "domain",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "Host of the name server",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the name server",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ip": {
          "canBeNull": true,
          "description": "Ip of the name server",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "isUsed": {
          "canBeNull": false,
          "description": "isUsed flag of the name server",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "toDelete": {
          "canBeNull": false,
          "description": "toDelete flag of the name server",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "domain.Data": {
      "description": "A domain data",
      "id": "Data",
      "namespace": "domain",
      "properties": {
        "audience": {
          "canBeNull": true,
          "description": "Domain name audience",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "authInfo": {
          "canBeNull": true,
          "description": "Auth Info",
          "fullType": "password",
          "readOnly": false,
          "required": false,
          "type": "password"
        },
        "isFor": {
          "canBeNull": true,
          "description": "Purposes of the domain",
          "fullType": "domain.IsForEnum[]",
          "readOnly": false,
          "required": false,
          "type": "domain.IsForEnum[]"
        },
        "otherPurpose": {
          "canBeNull": true,
          "description": "Domain name other purpose",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "reason": {
          "canBeNull": true,
          "description": "Reason of the purchase of this domain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "represent": {
          "canBeNull": true,
          "description": "Represented company",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.DnssecKey": {
      "description": "Domain's DNSSEC Key",
      "id": "DnssecKey",
      "namespace": "domain",
      "properties": {
        "algorithm": {
          "canBeNull": false,
          "description": "Algorithm number of the DNSSEC key",
          "fullType": "dnssec.KeyAlgorithmEnum",
          "readOnly": true,
          "required": false,
          "type": "dnssec.KeyAlgorithmEnum"
        },
        "flags": {
          "canBeNull": false,
          "description": "Flag of the DNSSEC key",
          "fullType": "dnssec.KeyFlagEnum",
          "readOnly": true,
          "required": false,
          "type": "dnssec.KeyFlagEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the DNSSEC key",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "publicKey": {
          "canBeNull": false,
          "description": "Public key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Key status of the DNSSEC key",
          "fullType": "dnssec.KeyStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dnssec.KeyStatusEnum"
        },
        "tag": {
          "canBeNull": false,
          "description": "Tag of the DNSSEC key",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.Domain": {
      "description": "Domain name administration",
      "id": "Domain",
      "namespace": "domain",
      "properties": {
        "dnssecSupported": {
          "canBeNull": false,
          "description": "Is DNSSEC implemented for this domain name's tld",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "domain": {
          "canBeNull": false,
          "description": "Domain name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "glueRecordIpv6Supported": {
          "canBeNull": false,
          "description": "Does the registry support ipv6 glue record",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "glueRecordMultiIpSupported": {
          "canBeNull": false,
          "description": "Does the registry support multi ip glue record",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "nameServerType": {
          "canBeNull": false,
          "description": "Name servers type",
          "fullType": "domain.DomainNsTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.DomainNsTypeEnum"
        },
        "offer": {
          "canBeNull": false,
          "description": "Domain's offer",
          "fullType": "domain.OfferEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.OfferEnum"
        },
        "owoSupported": {
          "canBeNull": false,
          "description": "Is whois obfuscation supported by this domain name's registry",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "parentService": {
          "canBeNull": true,
          "description": "Parent service",
          "fullType": "domain.ParentService",
          "readOnly": true,
          "required": false,
          "type": "domain.ParentService"
        },
        "transferLockStatus": {
          "canBeNull": false,
          "description": "Transfer lock status",
          "fullType": "domain.DomainLockStatusEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.DomainLockStatusEnum"
        },
        "whoisOwner": {
          "canBeNull": false,
          "description": "Contact Owner (you can edit it via /me/contact/<ID>)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.DomainContactTypeEnum": {
      "description": "All contact type for a domain",
      "enum": [
        "admin",
        "billing",
        "owner",
        "tech"
      ],
      "enumType": "string",
      "id": "DomainContactTypeEnum",
      "namespace": "domain"
    },
    "domain.DomainLockStatusEnum": {
      "description": "Domain lock status",
      "enum": [
        "locked",
        "locking",
        "unavailable",
        "unlocked",
        "unlocking"
      ],
      "enumType": "string",
      "id": "DomainLockStatusEnum",
      "namespace": "domain"
    },
    "domain.DomainNs": {
      "description": "Name server",
      "id": "DomainNs",
      "namespace": "domain",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "Host",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": true,
          "description": "Ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        }
      }
    },
    "domain.DomainNsStateEnum": {
      "description": "DNS server state",
      "enum": [
        "ko",
        "ok"
      ],
      "enumType": "string",
      "id": "DomainNsStateEnum",
      "namespace": "domain"
    },
    "domain.DomainNsStatus": {
      "description": "DNS server status",
      "id": "DomainNsStatus",
      "namespace": "domain",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "Whether or not the DNS server is working",
          "readOnly": false,
          "required": false,
          "type": "domain.DomainNsStateEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Whether or not the DNS server is managed by OVH",
          "readOnly": false,
          "required": false,
          "type": "domain.DomainNsTypeEnum"
        },
        "usedSince": {
          "canBeNull": true,
          "description": "Date from which the DNS server is used by the domain",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "domain.DomainNsTypeEnum": {
      "description": "DomainNS Type",
      "enum": [
        "external",
        "hosted"
      ],
      "enumType": "string",
      "id": "DomainNsTypeEnum",
      "namespace": "domain"
    },
    "domain.DomainOptionEnum": {
      "description": "All options a domain can have",
      "enum": [
        "dnsAnycast"
      ],
      "enumType": "string",
      "id": "DomainOptionEnum",
      "namespace": "domain"
    },
    "domain.DomainOptionStateEnum": {
      "description": "All states a domain Option can be in",
      "enum": [
        "released",
        "subscribed"
      ],
      "enumType": "string",
      "id": "DomainOptionStateEnum",
      "namespace": "domain"
    },
    "domain.GlueRecord": {
      "description": "Glue record",
      "id": "GlueRecord",
      "namespace": "domain",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "Host of the glue record",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ips": {
          "canBeNull": false,
          "description": "Ips of the glue record",
          "fullType": "ip[]",
          "readOnly": true,
          "required": false,
          "type": "ip[]"
        }
      }
    },
    "domain.IsForEnum": {
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
      "enumType": "string",
      "id": "IsForEnum",
      "namespace": "domain"
    },
    "domain.OfferEnum": {
      "description": "Offer",
      "enum": [
        "diamond",
        "gold",
        "platinum"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "domain"
    },
    "domain.OperationStatusEnum": {
      "description": "Operation status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "OperationStatusEnum",
      "namespace": "domain"
    },
    "domain.OptinFieldsEnum": {
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
      "enumType": "string",
      "id": "OptinFieldsEnum",
      "namespace": "domain"
    },
    "domain.Option": {
      "description": "Information about the options of a domain",
      "id": "Option",
      "namespace": "domain",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Expiration date of the option",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "option": {
          "canBeNull": false,
          "description": "The option name",
          "fullType": "domain.DomainOptionEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainOptionEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "The state of the option",
          "fullType": "domain.DomainOptionStateEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.DomainOptionStateEnum"
        }
      }
    },
    "domain.Owo": {
      "description": "Obfuscate whois",
      "id": "Owo",
      "namespace": "domain",
      "properties": {
        "field": {
          "canBeNull": false,
          "description": "Obfuscated field",
          "fullType": "domain.WhoisObfuscatorFieldsEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.WhoisObfuscatorFieldsEnum"
        }
      }
    },
    "domain.ParentService": {
      "description": "Parent service",
      "id": "ParentService",
      "namespace": "domain",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the parent service",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the parent service",
          "readOnly": false,
          "required": false,
          "type": "domain.ParentServiceTypeEnum"
        }
      }
    },
    "domain.ParentServiceTypeEnum": {
      "description": "Parent service type enum",
      "enum": [
        "/allDom"
      ],
      "enumType": "string",
      "id": "ParentServiceTypeEnum",
      "namespace": "domain"
    },
    "domain.Rule": {
      "description": "Description not available",
      "id": "Rule",
      "namespace": "domain",
      "properties": {
        "allowedValues": {
          "canBeNull": true,
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "fields": {
          "canBeNull": true,
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "innerConfigurations": {
          "canBeNull": true,
          "fullType": "domain.Rule[]",
          "readOnly": false,
          "required": false,
          "type": "domain.Rule[]"
        },
        "label": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "required": {
          "canBeNull": true,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.ServiceOption": {
      "description": "Data of a domain option",
      "id": "Option",
      "namespace": "domain.services.options",
      "properties": {
        "serviceName": {
          "canBeNull": false,
          "description": "Service name of the option",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.ServiceOptions": {
      "description": "Representation of the domain options",
      "id": "Options",
      "namespace": "domain.services.options",
      "properties": {
        "hosting": {
          "canBeNull": true,
          "description": "Hosting option",
          "fullType": "domain.ServiceOption",
          "readOnly": true,
          "required": false,
          "type": "domain.ServiceOption"
        },
        "offer": {
          "canBeNull": true,
          "description": "Offer option (Diamond, Platinum)",
          "fullType": "domain.ServiceOption",
          "readOnly": true,
          "required": false,
          "type": "domain.ServiceOption"
        },
        "zone": {
          "canBeNull": true,
          "description": "DNS zone option",
          "fullType": "domain.ServiceOption",
          "readOnly": true,
          "required": false,
          "type": "domain.ServiceOption"
        }
      }
    },
    "domain.Task": {
      "description": "Tasks associated to domain",
      "id": "Task",
      "namespace": "domain",
      "properties": {
        "canAccelerate": {
          "canBeNull": false,
          "description": "Can accelerate the task",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canCancel": {
          "canBeNull": false,
          "description": "Can cancel the task",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canRelaunch": {
          "canBeNull": false,
          "description": "Can relaunch the task",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "comment": {
          "canBeNull": true,
          "description": "Comment about the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Done date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the task",
          "fullType": "domain.OperationStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.OperationStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Todo date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "domain.UkRegistrar": {
      "description": "Representation of a UK Registrar (used for outgoing transfer)",
      "id": "UkRegistrar",
      "namespace": "domain",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Registrar name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "tag": {
          "canBeNull": false,
          "description": "Registrar tag",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.WhoisObfuscatorFieldsEnum": {
      "description": "Whois obfuscable fields",
      "enum": [
        "address",
        "email",
        "phone"
      ],
      "enumType": "string",
      "id": "WhoisObfuscatorFieldsEnum",
      "namespace": "domain"
    },
    "domain.configuration.rules.Constraint": {
      "description": "A configuration rule defines validation to launch when executing an action on a domain (create, trade...). Depending on the extension, the rule may be different",
      "id": "Constraint",
      "namespace": "domain.configuration.rules",
      "properties": {
        "conditions": {
          "canBeNull": true,
          "description": "Whether this constraint is applied or not",
          "fullType": "domain.configuration.rules.Rule",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Rule"
        },
        "contexts": {
          "canBeNull": true,
          "description": "The context on which the constraint applies",
          "fullType": "domain.configuration.rules.ContextEnum[]",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.ContextEnum[]"
        },
        "operator": {
          "canBeNull": true,
          "description": "The operator of the constraint",
          "fullType": "domain.configuration.rules.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.OperatorEnum"
        },
        "value": {
          "canBeNull": true,
          "description": "The value to match against",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": true,
          "description": "The values to match against",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "domain.configuration.rules.ContextEnum": {
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
      "enumType": "string",
      "id": "ContextEnum",
      "namespace": "domain.configuration.rules"
    },
    "domain.configuration.rules.OperatorEnum": {
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
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "domain.configuration.rules"
    },
    "domain.configuration.rules.Rule": {
      "description": "A configuration rule defines validation to launch when executing an action on a domain (create, trade...). Depending on the extension, the rule may be different",
      "id": "Rule",
      "namespace": "domain.configuration.rules",
      "properties": {
        "and": {
          "canBeNull": true,
          "description": "An \"and\" operator on multiple rules",
          "fullType": "domain.configuration.rules.Rule[]",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Rule[]"
        },
        "conditions": {
          "canBeNull": true,
          "description": "Whether this rule is applied or not",
          "fullType": "domain.configuration.rules.Rule",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Rule"
        },
        "constraints": {
          "canBeNull": true,
          "description": "The constraints of the rule",
          "fullType": "domain.configuration.rules.Constraint[]",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Constraint[]"
        },
        "contexts": {
          "canBeNull": true,
          "description": "The context on which the rule applies",
          "fullType": "domain.configuration.rules.ContextEnum[]",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.ContextEnum[]"
        },
        "description": {
          "canBeNull": true,
          "description": "The description of the rule",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "fields": {
          "canBeNull": true,
          "description": "The fields with specific rules",
          "fullType": "domain.configuration.rules.Rule",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Rule"
        },
        "label": {
          "canBeNull": true,
          "description": "The label of the rule",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "or": {
          "canBeNull": true,
          "description": "An \"or\" operator on multiple rules",
          "fullType": "domain.configuration.rules.Rule[]",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.Rule[]"
        },
        "placeholder": {
          "canBeNull": true,
          "description": "The default value used for the rule",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": "The type of the object the rule applies on",
          "fullType": "domain.configuration.rules.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.TypeEnum"
        }
      }
    },
    "domain.configuration.rules.RuleData": {
      "description": "A rule data contains the fields that must be validated against a rule",
      "id": "RuleData",
      "namespace": "domain.configuration.rules",
      "properties": {
        "adminAccount": {
          "canBeNull": true,
          "description": "The admin contact data",
          "fullType": "nichandle.Nichandle",
          "readOnly": true,
          "required": false,
          "type": "nichandle.Nichandle"
        },
        "domain": {
          "canBeNull": true,
          "description": "The domain data",
          "fullType": "domain.Data",
          "readOnly": true,
          "required": false,
          "type": "domain.Data"
        },
        "extras": {
          "canBeNull": true,
          "description": "The extra data of the rule",
          "fullType": "domain.configuration.rules.RuleExtraData",
          "readOnly": true,
          "required": false,
          "type": "domain.configuration.rules.RuleExtraData"
        },
        "owner": {
          "canBeNull": true,
          "description": "The owner contact data",
          "fullType": "domain.Contact",
          "readOnly": true,
          "required": false,
          "type": "domain.Contact"
        },
        "techAccount": {
          "canBeNull": true,
          "description": "The tech contact data",
          "fullType": "nichandle.Nichandle",
          "readOnly": true,
          "required": false,
          "type": "nichandle.Nichandle"
        }
      }
    },
    "domain.configuration.rules.RuleExtraData": {
      "description": "The extra data contain additional rule data fields",
      "id": "RuleExtraData",
      "namespace": "domain.configuration.rules",
      "properties": {
        "acceptCondition": {
          "canBeNull": true,
          "description": "Whether you accept the domain specific conditions or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "authInfo": {
          "canBeNull": true,
          "description": "The auth info code for the domain",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        }
      }
    },
    "domain.configuration.rules.TypeEnum": {
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
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "domain.configuration.rules"
    },
    "domain.configurations.CustomFields": {
      "description": "Representation of the domain custom fields",
      "id": "CustomFields",
      "namespace": "domain.configurations",
      "properties": {
        "audience": {
          "canBeNull": true,
          "description": "Domain name audience",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "authInfo": {
          "canBeNull": true,
          "description": "Auth Info",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "isFor": {
          "canBeNull": true,
          "description": "Purposes of the domain",
          "fullType": "domain.IsForEnum[]",
          "readOnly": false,
          "required": false,
          "type": "domain.IsForEnum[]"
        },
        "otherPurpose": {
          "canBeNull": true,
          "description": "Domain name other purpose",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "reason": {
          "canBeNull": true,
          "description": "Why you want to buy this domain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "represent": {
          "canBeNull": true,
          "description": "Represented company",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.configurations.ObfuscatedEmail": {
      "description": "Representation of the obfuscated emails configuration",
      "id": "ObfuscatedEmails",
      "namespace": "domain.configurations",
      "properties": {
        "type": {
          "canBeNull": false,
          "description": "Contact's type associated to the obfuscated email",
          "fullType": "domain.ContactAllTypesEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.ContactAllTypesEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Obfuscated email value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.configurations.Optin": {
      "description": "Representation of the optin configuration",
      "id": "Optin",
      "namespace": "domain.configurations",
      "properties": {
        "fields": {
          "canBeNull": false,
          "description": "Displayed fields",
          "fullType": "domain.OptinFieldsEnum[]",
          "readOnly": false,
          "required": false,
          "type": "domain.OptinFieldsEnum[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Contact's type associated to the optin configuration",
          "fullType": "domain.ContactAllTypesEnum",
          "readOnly": false,
          "required": false,
          "type": "domain.ContactAllTypesEnum"
        }
      }
    },
    "domain.data.AfnicCorporationTrademarkContact": {
      "description": "Representation of an Inpi additional information for a corporation",
      "id": "AfnicCorporationTrademarkContact",
      "namespace": "domain.data",
      "properties": {
        "contactId": {
          "canBeNull": false,
          "description": "Contact ID related to the Inpi additional information",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "Corporation Inpi additional information ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "inpiNumber": {
          "canBeNull": false,
          "description": "Number of the Inpi declaration",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "inpiTrademarkOwner": {
          "canBeNull": false,
          "description": "Owner of the trademark",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.AssociationContact": {
      "description": "Representation of a Association additional information",
      "id": "AssociationContact",
      "namespace": "domain.data",
      "properties": {
        "contactId": {
          "canBeNull": false,
          "description": "Contact ID related to the association contact information",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "declarationDate": {
          "canBeNull": false,
          "description": "Date of the declaration of the association",
          "fullType": "date",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "id": {
          "canBeNull": false,
          "description": "Association additional information ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "publicationDate": {
          "canBeNull": false,
          "description": "Date of the publication of the declaration of the association",
          "fullType": "date",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "publicationNumber": {
          "canBeNull": false,
          "description": "Number of the publication of the declaration of the association",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "publicationPageNumber": {
          "canBeNull": false,
          "description": "Page number of the publication of the declaration of the association",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.ProContact": {
      "description": "Representation of an .pro Contact Resource",
      "id": "ProContact",
      "namespace": "domain.data",
      "properties": {
        "authority": {
          "canBeNull": false,
          "description": "Authority that certify your profesional status",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "authorityWebsite": {
          "canBeNull": false,
          "description": "Website of the authority that certify your profesional status",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": ".pro Contact ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "jobDescription": {
          "canBeNull": false,
          "description": "Description of your job",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "licenseNumber": {
          "canBeNull": false,
          "description": "License number given by the authority",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.Smd": {
      "description": "Representation of a SMD Resource file",
      "id": "Smd",
      "namespace": "domain.data",
      "properties": {
        "data": {
          "canBeNull": false,
          "description": "SMD file content",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "id": {
          "canBeNull": false,
          "description": "SMD file ID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "notAfter": {
          "canBeNull": true,
          "description": "Date when information about SMD file aren't valid anymore",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "notBefore": {
          "canBeNull": true,
          "description": "Date before when information about SMD file aren't valid yet",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "protectedLabels": {
          "canBeNull": false,
          "description": "List of the labels that are protected with that SMD file",
          "fullType": "domain.data.SmdLabel[]",
          "readOnly": false,
          "required": false,
          "type": "domain.data.SmdLabel[]"
        },
        "smdId": {
          "canBeNull": true,
          "description": "TMCH Internal identifier",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.SmdLabel": {
      "description": "Representation of a protected label",
      "id": "SmdLabel",
      "namespace": "domain.data",
      "properties": {
        "label": {
          "canBeNull": false,
          "description": "Label that is protected",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "trademark": {
          "canBeNull": false,
          "description": "Trademark associated to the protected label",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.claimNotice.Address": {
      "description": "Address for a claim notice holder",
      "id": "Address",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "city": {
          "canBeNull": true,
          "description": "City",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": true,
          "description": "Country code",
          "fullType": "nichandle.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "fax": {
          "canBeNull": true,
          "description": "Fax number",
          "fullType": "phoneNumber",
          "readOnly": true,
          "required": false,
          "type": "phoneNumber"
        },
        "faxExtension": {
          "canBeNull": true,
          "description": "Fax number extension",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "postalCode": {
          "canBeNull": true,
          "description": "Postal zip code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "stateOrProvince": {
          "canBeNull": true,
          "description": "State of province",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "streets": {
          "canBeNull": false,
          "description": "Array of street name",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "voice": {
          "canBeNull": true,
          "description": "Phone number",
          "fullType": "phoneNumber",
          "readOnly": true,
          "required": false,
          "type": "phoneNumber"
        },
        "voiceExtension": {
          "canBeNull": true,
          "description": "Phone number extension",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.claimNotice.ClaimNotice": {
      "description": "Definition of claim notices applying to a domain name",
      "id": "ClaimNotice",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "claims": {
          "canBeNull": true,
          "description": "Array of claim notice for the domain",
          "fullType": "domain.data.claimNotice.ClaimNoticeDecision[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.ClaimNoticeDecision[]"
        },
        "endingDate": {
          "canBeNull": false,
          "description": "Ending date of claim notice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Claim notice ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "label": {
          "canBeNull": false,
          "description": "Label referring to claim notice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startingDate": {
          "canBeNull": true,
          "description": "Beginning date of claim notice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of claim notice",
          "fullType": "domain.data.claimNotice.ClaimNoticeTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.ClaimNoticeTypeEnum"
        }
      }
    },
    "domain.data.claimNotice.ClaimNoticeDecision": {
      "description": "Definition of a single claim notice",
      "id": "ClaimNoticeDecision",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "classifications": {
          "canBeNull": false,
          "description": "Classifications where trademark claim notice apply",
          "fullType": "domain.data.claimNotice.Classification[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.Classification[]"
        },
        "courtDecisions": {
          "canBeNull": false,
          "description": "Array of court decisions related to claim notice",
          "fullType": "domain.data.claimNotice.CourtDecision[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.CourtDecision[]"
        },
        "goodsAndServices": {
          "canBeNull": false,
          "description": "Goods and services on which apply claim notice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "jurisdiction": {
          "canBeNull": false,
          "description": "Name of jurisdiction",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "jurisdictionCountryCode": {
          "canBeNull": false,
          "description": "Jurisdiction country code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "markName": {
          "canBeNull": false,
          "description": "Mark name implicated in claim notice",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "trademarkContacts": {
          "canBeNull": false,
          "description": "Trademark contacts",
          "fullType": "domain.data.claimNotice.Contact[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.Contact[]"
        },
        "trademarkHolders": {
          "canBeNull": false,
          "description": "Trademark holders",
          "fullType": "domain.data.claimNotice.Contact[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.Contact[]"
        },
        "trademarkUDRP": {
          "canBeNull": false,
          "description": "Trademark UDRP informations",
          "fullType": "domain.data.claimNotice.UDRP[]",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.UDRP[]"
        }
      }
    },
    "domain.data.claimNotice.ClaimNoticeTypeEnum": {
      "description": "Type of claim notice",
      "enum": [
        "UK",
        "TRADEMARK"
      ],
      "enumType": "string",
      "id": "ClaimNoticeTypeEnum",
      "namespace": "domain.data.claimNotice"
    },
    "domain.data.claimNotice.Classification": {
      "description": "Definition of a trademark claim notice classification",
      "id": "Classification",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Summary of the classification",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": false,
          "description": "Code of the classification",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.claimNotice.Contact": {
      "description": "Contact definition of a claim notice holder",
      "id": "Contact",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address of holder",
          "fullType": "domain.data.claimNotice.Address",
          "readOnly": true,
          "required": false,
          "type": "domain.data.claimNotice.Address"
        },
        "email": {
          "canBeNull": true,
          "description": "Email address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "entitlement": {
          "canBeNull": true,
          "description": "Legitimacy of holder",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of claim notice holder",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "organisation": {
          "canBeNull": true,
          "description": "Organisation name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": true,
          "description": "Type of contact",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.data.claimNotice.CourtDecision": {
      "description": "Definition of a court decision",
      "id": "CourtDecision",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "countryCode": {
          "canBeNull": false,
          "description": "Country code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "courtName": {
          "canBeNull": false,
          "description": "Court name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "referenceNumber": {
          "canBeNull": false,
          "description": "Reference number of court decision",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "regions": {
          "canBeNull": false,
          "description": "Regions where court decision apply",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "domain.data.claimNotice.UDRP": {
      "description": "Definition of a UDRP procedure",
      "id": "UDRP",
      "namespace": "domain.data.claimNotice",
      "properties": {
        "caseNumber": {
          "canBeNull": false,
          "description": "Case number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "udrpProvider": {
          "canBeNull": false,
          "description": "UDRP Provider",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.rules.Optin": {
      "description": "Representation of the optin rule",
      "id": "Optin",
      "namespace": "domain.rules",
      "properties": {
        "fields": {
          "canBeNull": false,
          "description": "Displayed fields",
          "fullType": "domain.OptinFieldsEnum[]",
          "readOnly": true,
          "required": false,
          "type": "domain.OptinFieldsEnum[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Contact's type associated to the optin rule",
          "fullType": "domain.ContactAllTypesEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.ContactAllTypesEnum"
        }
      }
    },
    "domain.zone.Anycast": {
      "description": "DNS Anycast service",
      "id": "Anycast",
      "namespace": "domain.zone",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Zone name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.zone.Dnssec": {
      "description": "Manage Dnssec for this zone",
      "id": "Dnssec",
      "namespace": "domain.zone",
      "properties": {
        "status": {
          "canBeNull": false,
          "fullType": "dnssec.DnssecStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dnssec.DnssecStatusEnum"
        }
      }
    },
    "domain.zone.Record": {
      "description": "Zone resource records",
      "id": "Record",
      "namespace": "domain.zone",
      "properties": {
        "fieldType": {
          "canBeNull": false,
          "description": "Resource record Name",
          "fullType": "zone.NamedResolutionFieldTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "zone.NamedResolutionFieldTypeEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the zone resource record",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "subDomain": {
          "canBeNull": true,
          "description": "Resource record subdomain",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Resource record target",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ttl": {
          "canBeNull": true,
          "description": "Resource record ttl",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "zone": {
          "canBeNull": false,
          "description": "Resource record zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.zone.Redirection": {
      "description": "Redirection",
      "id": "Redirection",
      "namespace": "domain.zone",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Desciption for invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the redirection",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "keywords": {
          "canBeNull": true,
          "description": "Keywords for invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "subDomain": {
          "canBeNull": true,
          "description": "subdomain to redirect",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "description": "Target of the redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "title": {
          "canBeNull": true,
          "description": "Title for invisible redirection",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Redirection type",
          "fullType": "zone.RedirectionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "zone.RedirectionTypeEnum"
        },
        "zone": {
          "canBeNull": false,
          "description": "Redirection zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "domain.zone.Soa": {
      "description": "Zone Start Of Authority",
      "id": "Soa",
      "namespace": "domain.zone",
      "properties": {
        "email": {
          "canBeNull": false,
          "description": "Email address of the DNS Administrator",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "expire": {
          "canBeNull": false,
          "description": "When a zone transfer fails, a countdown clock begins. When the number of seconds set in the expire field elapses, the nameserver stops answering for that zone file",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "nxDomainTtl": {
          "canBeNull": false,
          "description": "Non-Existent Domain TTL, if the name server returns a negative response, the remote server should wait the number of seconds set in the nxDomainTtl field before trying again",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "refresh": {
          "canBeNull": false,
          "description": "The refresh value determines the interval in seconds between successful zone transfers of the entire zone file from a nameserver to another.",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "serial": {
          "canBeNull": false,
          "description": "The serial number is used to indicate which copy of the zone file is the most current. When editing zone files, you must increment the serial number",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "server": {
          "canBeNull": false,
          "description": "Primary authoritative server",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ttl": {
          "canBeNull": false,
          "description": "Time To Live in seconds",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "domain.zone.Task": {
      "description": "Tasks associated to a zone",
      "id": "Task",
      "namespace": "domain.zone",
      "properties": {
        "canAccelerate": {
          "canBeNull": false,
          "description": "Can accelerate the task",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canCancel": {
          "canBeNull": false,
          "description": "Can cancel the task",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canRelaunch": {
          "canBeNull": false,
          "description": "Can relaunch the task",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "comment": {
          "canBeNull": true,
          "description": "Comment about the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Done date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the task",
          "fullType": "domain.OperationStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "domain.OperationStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Todo date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "domain.zone.Zone": {
      "description": "Zone dns Management",
      "id": "Zone",
      "namespace": "domain.zone",
      "properties": {
        "dnssecSupported": {
          "canBeNull": false,
          "description": "Is DNSSEC supported by this zone",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hasDnsAnycast": {
          "canBeNull": false,
          "description": "hasDnsAnycast flag of the DNS zone",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date of the DNS zone",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Zone name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nameServers": {
          "canBeNull": false,
          "description": "Name servers that host the DNS zone",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "domain.zone.ZoneRestorePoint": {
      "description": "Zone restore point",
      "id": "ZoneRestorePoint",
      "namespace": "domain.zone",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Date of backup creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "zoneFileUrl": {
          "canBeNull": false,
          "description": "URL to get backup content",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "nichandle.Currency": {
      "description": "Customer currency",
      "id": "Currency",
      "namespace": "nichandle",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Currency code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "symbol": {
          "canBeNull": false,
          "description": "Currency symbol",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.GenderEnum": {
      "description": "All genders a person can choose",
      "enum": [
        "female",
        "male"
      ],
      "enumType": "string",
      "id": "GenderEnum",
      "namespace": "nichandle"
    },
    "nichandle.LanguageEnum": {
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
      "enumType": "string",
      "id": "LanguageEnum",
      "namespace": "nichandle"
    },
    "nichandle.LegalFormEnum": {
      "description": "Legal forms a nichandle can be registered as",
      "enum": [
        "administration",
        "association",
        "corporation",
        "individual",
        "other",
        "personalcorporation"
      ],
      "enumType": "string",
      "id": "LegalFormEnum",
      "namespace": "nichandle"
    },
    "nichandle.Nichandle": {
      "description": "Details about your OVH identifier",
      "id": "Nichandle",
      "namespace": "nichandle",
      "properties": {
        "address": {
          "canBeNull": true,
          "description": "Address of nichandle",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "area": {
          "canBeNull": true,
          "description": "Area of nichandle",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "birthCity": {
          "canBeNull": true,
          "description": "City of birth",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "birthDay": {
          "canBeNull": true,
          "description": "Birth date",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": true,
          "description": "City of nichandle",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "companyNationalIdentificationNumber": {
          "canBeNull": true,
          "description": "Company National Identification Number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "corporationType": {
          "canBeNull": true,
          "description": "Corporation type",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": false,
          "description": "Customer country",
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "currency": {
          "canBeNull": false,
          "description": "Customer currency",
          "fullType": "nichandle.Currency",
          "readOnly": true,
          "required": false,
          "type": "nichandle.Currency"
        },
        "customerCode": {
          "canBeNull": true,
          "description": "Your customer code (a numerical value used for identification when contacting support via phone call)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "Email address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "fax": {
          "canBeNull": true,
          "description": "Fax number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstname": {
          "canBeNull": true,
          "description": "First name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "italianSDI": {
          "canBeNull": true,
          "description": "Italian SDI",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "language": {
          "canBeNull": true,
          "description": "Language",
          "fullType": "nichandle.LanguageEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LanguageEnum"
        },
        "legalform": {
          "canBeNull": false,
          "description": "Customer legal form",
          "fullType": "nichandle.LegalFormEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.LegalFormEnum"
        },
        "name": {
          "canBeNull": true,
          "description": "Customer name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nationalIdentificationNumber": {
          "canBeNull": true,
          "description": "National Identification Number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nichandle": {
          "canBeNull": false,
          "description": "Customer identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "organisation": {
          "canBeNull": true,
          "description": "Name of organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ovhCompany": {
          "canBeNull": false,
          "description": "OVH subsidiary",
          "fullType": "nichandle.OvhCompanyEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhCompanyEnum"
        },
        "ovhSubsidiary": {
          "canBeNull": false,
          "description": "OVH subsidiary",
          "fullType": "nichandle.OvhSubsidiaryEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.OvhSubsidiaryEnum"
        },
        "phone": {
          "canBeNull": true,
          "description": "Phone number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phoneCountry": {
          "canBeNull": true,
          "fullType": "nichandle.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.CountryEnum"
        },
        "sex": {
          "canBeNull": true,
          "description": "Gender",
          "fullType": "nichandle.GenderEnum",
          "readOnly": false,
          "required": false,
          "type": "nichandle.GenderEnum"
        },
        "spareEmail": {
          "canBeNull": true,
          "description": "Spare email",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Nichandle state",
          "fullType": "nichandle.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "nichandle.StateEnum"
        },
        "vat": {
          "canBeNull": true,
          "description": "VAT number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": true,
          "description": "Zipcode",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "nichandle.OvhCompanyEnum": {
      "description": "OVH subsidiaries",
      "enum": [
        "kimsufi",
        "ovh",
        "soyoustart"
      ],
      "enumType": "string",
      "id": "OvhCompanyEnum",
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
    "nichandle.StateEnum": {
      "description": "States a nichandle can be in",
      "enum": [
        "complete",
        "incomplete"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "nichandle"
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
    "service.TerminationFutureUseEnum": {
      "description": "All future uses you can provide for a service termination",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string",
      "id": "TerminationFutureUseEnum",
      "namespace": "service"
    },
    "service.TerminationReasonEnum": {
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
      "enumType": "string",
      "id": "TerminationReasonEnum",
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
    "zone.Capabilities": {
      "description": "Zone capabilities",
      "id": "Capabilities",
      "namespace": "zone",
      "properties": {
        "dynHost": {
          "canBeNull": false,
          "description": "True if dynHost available for this zone",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "zone.NamedResolutionFieldTypeEnum": {
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
      "enumType": "string",
      "id": "NamedResolutionFieldTypeEnum",
      "namespace": "zone"
    },
    "zone.RedirectionTypeEnum": {
      "description": "Redirection type enum : visible -> Redirection by http code 302, visiblePermanent -> Redirection by http code 301, invisible -> Redirection by html frame",
      "enum": [
        "invisible",
        "visible",
        "visiblePermanent"
      ],
      "enumType": "string",
      "id": "RedirectionTypeEnum",
      "namespace": "zone"
    },
    "zone.ResetRecord": {
      "description": "Resource record",
      "id": "ResetRecord",
      "namespace": "zone",
      "properties": {
        "fieldType": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "zone.ResettableNamedResolutionFieldTypeEnum"
        },
        "target": {
          "canBeNull": false,
          "description": "Resource record target",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "zone.ResettableNamedResolutionFieldTypeEnum": {
      "description": "Resource record type",
      "enum": [
        "A",
        "MX"
      ],
      "enumType": "string",
      "id": "ResettableNamedResolutionFieldTypeEnum",
      "namespace": "zone"
    },
    "zone.Status": {
      "description": "Zone status",
      "id": "Status",
      "namespace": "zone",
      "properties": {
        "errors": {
          "canBeNull": true,
          "description": "Error list",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "isDeployed": {
          "canBeNull": false,
          "description": "True if the zone has successfully been deployed",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "warnings": {
          "canBeNull": true,
          "description": "Warning list",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
    }
  },
  "resourcePath": "/domain"
}