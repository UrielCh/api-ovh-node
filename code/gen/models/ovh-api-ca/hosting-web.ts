import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/hosting/web",
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
      "path": "/hosting/web/attachedDomain",
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
              "description": "Domain used into web hosting attached Domains"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Find hosting service linked to a domain"
        }
      ],
      "description": "Find hosting service linked to a domain"
    },
    {
      "path": "/hosting/web/availableOffer",
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
              "description": "Domain you want to add or upgrade a hosting"
            }
          ],
          "responseType": "hosting.web.OfferEnum[]",
          "noAuthentication": false,
          "description": "Get available offer"
        }
      ],
      "description": "Get available offer"
    },
    {
      "path": "/hosting/web/incident",
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
          "description": "Get current incident"
        }
      ],
      "description": "Get current incident"
    },
    {
      "path": "/hosting/web/localSeo/directoriesList",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "offer",
              "dataType": "hosting.web.localSeo.location.OfferEnum",
              "paramType": "query",
              "fullType": "hosting.web.localSeo.location.OfferEnum",
              "required": true,
              "description": "Local SEO offer"
            },
            {
              "name": "country",
              "dataType": "hosting.web.localSeo.location.CountryEnum",
              "paramType": "query",
              "fullType": "hosting.web.localSeo.location.CountryEnum",
              "required": true,
              "description": "Country of the location"
            }
          ],
          "responseType": "hosting.web.localSeo.DirectoriesList",
          "noAuthentication": true,
          "description": "Get list of directories associated to a local SEO offer and a country"
        }
      ],
      "description": "Get list of directories associated to a local SEO offer and a country"
    },
    {
      "path": "/hosting/web/localSeo/emailAvailability",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The email address to check"
            }
          ],
          "responseType": "hosting.web.localSeo.EmailAvailability",
          "noAuthentication": true,
          "description": "Check email availability for a local SEO order"
        }
      ],
      "description": "Check email availability for a local SEO order"
    },
    {
      "path": "/hosting/web/localSeo/visibilityCheck",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the location"
            },
            {
              "name": "street",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Address line 1 of the location"
            },
            {
              "name": "zip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Zipcode of the location"
            },
            {
              "name": "country",
              "dataType": "hosting.web.localSeo.location.CountryEnum",
              "paramType": "body",
              "fullType": "hosting.web.localSeo.location.CountryEnum",
              "required": true,
              "description": "Country of the location"
            }
          ],
          "responseType": "hosting.web.localSeo.VisibilityCheckResponse",
          "noAuthentication": true,
          "description": "Check visibility of a location"
        }
      ],
      "description": "Check visibility of a location"
    },
    {
      "path": "/hosting/web/localSeo/visibilityCheckResult",
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
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Id of the check"
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Token received when requesting the check"
            },
            {
              "name": "directory",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Get the result only for one directory"
            }
          ],
          "responseType": "hosting.web.localSeo.VisibilityCheckResultResponse[]",
          "noAuthentication": true,
          "description": "Get the result of a visibility check"
        }
      ],
      "description": "Get the result of a visibility check"
    },
    {
      "path": "/hosting/web/moduleList",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "active",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of active property (=)"
            },
            {
              "name": "branch",
              "dataType": "hosting.web.module.BranchEnum",
              "paramType": "query",
              "fullType": "hosting.web.module.BranchEnum",
              "required": false,
              "description": "Filter the value of branch property (=)"
            },
            {
              "name": "latest",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of latest property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": true,
          "description": "IDs of all modules available"
        }
      ],
      "description": "List the hosting.web.ModuleList objects"
    },
    {
      "path": "/hosting/web/moduleList/{id}",
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
            }
          ],
          "responseType": "hosting.web.ModuleList",
          "noAuthentication": true,
          "description": "Get this object properties"
        }
      ],
      "description": "A module specifically packaged by OVH"
    },
    {
      "path": "/hosting/web/offerCapabilities",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "offer",
              "dataType": "hosting.web.OfferCapabilitiesEnum",
              "paramType": "query",
              "fullType": "hosting.web.OfferCapabilitiesEnum",
              "required": true,
              "description": "Describe offer capabilities"
            }
          ],
          "responseType": "hosting.web.Capabilities",
          "noAuthentication": true,
          "description": "Get offer capabilities"
        }
      ],
      "description": "Get offer capabilities"
    },
    {
      "path": "/hosting/web/{serviceName}",
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
          "responseType": "hosting.web.Service",
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
              "dataType": "hosting.web.Service",
              "paramType": "body",
              "fullType": "hosting.web.Service",
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
      "description": "Web Hosting"
    },
    {
      "path": "/hosting/web/{serviceName}/activatePrivateDatabase",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-12-15T00:00:00+01:00",
            "deprecatedDate": "2019-12-01T00:00:00+01:00",
            "replacement": "/order/cartServiceOption/webHosting/{serviceName}"
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
              "name": "ram",
              "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "paramType": "body",
              "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
              "required": true,
              "description": "The private database ram size included in your offer"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Activate an included private database on your hosting offer"
        }
      ],
      "description": "activatePrivateDatabase operations"
    },
    {
      "path": "/hosting/web/{serviceName}/attachedDomain",
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
              "name": "path",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of path property (like)"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of domain property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Domains or subdomains attached to your hosting"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "path",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Domain's path, relative to your home directory"
            },
            {
              "name": "runtimeId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The runtime configuration ID linked to this attached domain"
            },
            {
              "name": "firewall",
              "dataType": "hosting.web.attachedDomain.FirewallEnum",
              "paramType": "body",
              "fullType": "hosting.web.attachedDomain.FirewallEnum",
              "required": false,
              "description": "Firewall state for this path"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Domain to link"
            },
            {
              "name": "cdn",
              "dataType": "hosting.web.attachedDomain.CdnEnum",
              "paramType": "body",
              "fullType": "hosting.web.attachedDomain.CdnEnum",
              "required": false,
              "description": "Is linked to the hosting cdn"
            },
            {
              "name": "ssl",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Put domain in ssl certificate"
            },
            {
              "name": "ownLog",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Put domain for separate the logs on logs.ovh.net"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Link a domain to this hosting"
        }
      ],
      "description": "List the hosting.web.attachedDomain objects"
    },
    {
      "path": "/hosting/web/{serviceName}/attachedDomain/{domain}",
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Unlink domain from hosting"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "hosting.web.attachedDomain",
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
              "dataType": "hosting.web.attachedDomain",
              "paramType": "body",
              "fullType": "hosting.web.attachedDomain",
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
          "description": "Alter this object properties"
        }
      ],
      "description": "Virtual service"
    },
    {
      "path": "/hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache",
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Purge cache for this attached domain"
        }
      ],
      "description": "purgeCache operations"
    },
    {
      "path": "/hosting/web/{serviceName}/attachedDomain/{domain}/restart",
      "operations": [
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
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Restart the virtual host of the attached domain"
        }
      ],
      "description": "restart operations"
    },
    {
      "path": "/hosting/web/{serviceName}/boostHistory",
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
              "name": "date",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of date property (=)"
            }
          ],
          "responseType": "datetime[]",
          "noAuthentication": false,
          "description": "History of your hosting boost"
        }
      ],
      "description": "List the hosting.web.boostHistory objects"
    },
    {
      "path": "/hosting/web/{serviceName}/boostHistory/{date}",
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
              "name": "date",
              "dataType": "datetime",
              "paramType": "path",
              "fullType": "datetime",
              "required": true,
              "description": "Date"
            }
          ],
          "responseType": "hosting.web.boostHistory",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "History of your boost requests"
    },
    {
      "path": "/hosting/web/{serviceName}/cdn",
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
          "responseType": "hosting.web.cdn",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "CDN service"
    },
    {
      "path": "/hosting/web/{serviceName}/cdn/serviceInfos",
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
        }
      ],
      "description": "serviceInfos operations"
    },
    {
      "path": "/hosting/web/{serviceName}/cdn/serviceInfosUpdate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "renew",
              "dataType": "service.RenewType",
              "paramType": "body",
              "fullType": "service.RenewType",
              "required": true,
              "description": "Renew type"
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
      "description": "serviceInfosUpdate operations"
    },
    {
      "path": "/hosting/web/{serviceName}/cdn/terminate",
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
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your cdn sub service"
        }
      ],
      "description": "terminate operations"
    },
    {
      "path": "/hosting/web/{serviceName}/changeContact",
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
      "path": "/hosting/web/{serviceName}/confirmTermination",
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
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
      "path": "/hosting/web/{serviceName}/cron",
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
              "name": "language",
              "dataType": "hosting.web.cron.LanguageEnum",
              "paramType": "query",
              "fullType": "hosting.web.cron.LanguageEnum",
              "required": false,
              "description": "Filter the value of language property (=)"
            },
            {
              "name": "command",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of command property (like)"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of description property (like)"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of email property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Crons on your hosting"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "language",
              "dataType": "hosting.web.cron.LanguageEnum",
              "paramType": "body",
              "fullType": "hosting.web.cron.LanguageEnum",
              "required": true,
              "description": "Cron language"
            },
            {
              "name": "command",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Command to execute"
            },
            {
              "name": "status",
              "dataType": "hosting.web.cron.StatusEnum",
              "paramType": "body",
              "fullType": "hosting.web.cron.StatusEnum",
              "required": false,
              "description": "Cron status"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Email used to receive error log ( stderr )"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description field for you"
            },
            {
              "name": "frequency",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Frequency ( crontab format ) define for the script ( minutes are ignored )"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Create new cron"
        }
      ],
      "description": "List the hosting.web.cron objects"
    },
    {
      "path": "/hosting/web/{serviceName}/cron/{id}",
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Delete cron"
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
          "responseType": "hosting.web.cron",
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
              "dataType": "hosting.web.cron",
              "paramType": "body",
              "fullType": "hosting.web.cron",
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
      "description": "Hosting crons"
    },
    {
      "path": "/hosting/web/{serviceName}/cronAvailableLanguage",
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
          "responseType": "hosting.web.cron.LanguageEnum[]",
          "noAuthentication": false,
          "description": "List available cron language"
        }
      ],
      "description": "cronAvailableLanguage operations"
    },
    {
      "path": "/hosting/web/{serviceName}/database",
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
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            },
            {
              "name": "type",
              "dataType": "hosting.web.database.DatabaseTypeEnum",
              "paramType": "query",
              "fullType": "hosting.web.database.DatabaseTypeEnum",
              "required": false,
              "description": "Filter the value of type property (=)"
            },
            {
              "name": "user",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of user property (like)"
            },
            {
              "name": "mode",
              "dataType": "hosting.web.database.ModeEnum",
              "paramType": "query",
              "fullType": "hosting.web.database.ModeEnum",
              "required": false,
              "description": "Filter the value of mode property (=)"
            },
            {
              "name": "server",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of server property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Databases linked to your hosting"
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
              "required": false,
              "description": "Database password"
            },
            {
              "name": "capabilitie",
              "dataType": "hosting.web.database.DatabaseCapabilitiesTypeEnum",
              "paramType": "body",
              "fullType": "hosting.web.database.DatabaseCapabilitiesTypeEnum",
              "required": true,
              "description": "Type of your database"
            },
            {
              "name": "quota",
              "dataType": "hosting.web.database.ExtraSqlQuotaEnum",
              "paramType": "body",
              "fullType": "hosting.web.database.ExtraSqlQuotaEnum",
              "required": false,
              "description": "Quota assign to your database. Only for extraSql"
            },
            {
              "name": "type",
              "dataType": "hosting.web.database.DatabaseCreationTypeEnum",
              "paramType": "body",
              "fullType": "hosting.web.database.DatabaseCreationTypeEnum",
              "required": true,
              "description": "Type you want for your database"
            },
            {
              "name": "version",
              "dataType": "hosting.web.database.VersionEnum",
              "paramType": "body",
              "fullType": "hosting.web.database.VersionEnum",
              "required": false,
              "description": "Version you want for your database following the type"
            },
            {
              "name": "user",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Database user name. Must begin with your hosting login and must be in lower case"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Install new database"
        }
      ],
      "description": "List the hosting.web.database objects"
    },
    {
      "path": "/hosting/web/{serviceName}/database/{name}",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Delete database"
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "hosting.web.database",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Database"
    },
    {
      "path": "/hosting/web/{serviceName}/database/{name}/capabilities",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "hosting.web.database.DatabaseCapabilities",
          "noAuthentication": false,
          "description": "Get available capabilities for this database"
        }
      ],
      "description": "capabilities operations"
    },
    {
      "path": "/hosting/web/{serviceName}/database/{name}/changePassword",
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
              "description": "The new database password"
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Request a password change"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/hosting/web/{serviceName}/database/{name}/dump",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "creationDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDate property (like)"
            },
            {
              "name": "deletionDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of deletionDate property (like)"
            },
            {
              "name": "type",
              "dataType": "hosting.web.database.dump.DateEnum",
              "paramType": "query",
              "fullType": "hosting.web.database.dump.DateEnum",
              "required": false,
              "description": "Filter the value of type property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Dump available for your databases"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "sendEmail",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Send an email when dump will be available? Default: true"
            },
            {
              "name": "date",
              "dataType": "hosting.web.database.dump.DateEnum",
              "paramType": "body",
              "fullType": "hosting.web.database.dump.DateEnum",
              "required": true,
              "description": "The date you want to dump"
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Request the dump from your database"
        }
      ],
      "description": "List the hosting.web.database.dump objects"
    },
    {
      "path": "/hosting/web/{serviceName}/database/{name}/dump/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Delete dump before expiration date"
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
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
          "responseType": "hosting.web.database.dump",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Dump"
    },
    {
      "path": "/hosting/web/{serviceName}/database/{name}/dump/{id}/restore",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Request the restore from this dump"
        }
      ],
      "description": "restore operations"
    },
    {
      "path": "/hosting/web/{serviceName}/database/{name}/import",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "flushDatabase",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "If database will be flushed before importing the dump. Default: false"
            },
            {
              "name": "sendEmail",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Send an email when the import will be done? Default: false"
            },
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Documents ID of the dump from /me/documents"
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Import a dump from an specific file uploaded with /me/documents"
        }
      ],
      "description": "import operations"
    },
    {
      "path": "/hosting/web/{serviceName}/database/{name}/request",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "action",
              "dataType": "hosting.web.database.RequestActionEnum",
              "paramType": "body",
              "fullType": "hosting.web.database.RequestActionEnum",
              "required": true,
              "description": "Action you want to request"
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Request specific operation for your database"
        }
      ],
      "description": "request operations"
    },
    {
      "path": "/hosting/web/{serviceName}/database/{name}/restore",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "date",
              "dataType": "hosting.web.database.dump.DateEnum",
              "paramType": "body",
              "fullType": "hosting.web.database.dump.DateEnum",
              "required": true,
              "description": "The date you want to dump"
            },
            {
              "name": "sendEmail",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Send an email when the restore will be done? Default: false"
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Request the restore from your database backup"
        }
      ],
      "description": "restore operations"
    },
    {
      "path": "/hosting/web/{serviceName}/database/{name}/statistics",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            },
            {
              "name": "period",
              "dataType": "hosting.web.StatisticsPeriodEnum",
              "paramType": "query",
              "fullType": "hosting.web.StatisticsPeriodEnum",
              "required": true,
              "description": "Available periods for statistics"
            },
            {
              "name": "type",
              "dataType": "hosting.web.database.StatisticsTypeEnum",
              "paramType": "query",
              "fullType": "hosting.web.database.StatisticsTypeEnum",
              "required": true,
              "description": "Types of statistics available for the database"
            }
          ],
          "responseType": "complexType.ChartSerie<complexType.ChartTimestampValue>[]",
          "noAuthentication": false,
          "description": "Get statistics about this database"
        }
      ],
      "description": "statistics operations"
    },
    {
      "path": "/hosting/web/{serviceName}/databaseAvailableType",
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
          "responseType": "hosting.web.database.DatabaseTypeEnum[]",
          "noAuthentication": false,
          "description": "List available database type"
        }
      ],
      "description": "databaseAvailableType operations"
    },
    {
      "path": "/hosting/web/{serviceName}/databaseAvailableVersion",
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
              "name": "type",
              "dataType": "hosting.web.database.DatabaseTypeEnum",
              "paramType": "query",
              "fullType": "hosting.web.database.DatabaseTypeEnum",
              "required": true,
              "description": "Type of the database"
            }
          ],
          "responseType": "hosting.web.database.AvailableVersionStruct",
          "noAuthentication": false,
          "description": "List available database version following a type"
        }
      ],
      "description": "databaseAvailableVersion operations"
    },
    {
      "path": "/hosting/web/{serviceName}/databaseCreationCapabilities",
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
          "responseType": "hosting.web.database.CreationDatabaseCapabilities[]",
          "noAuthentication": false,
          "description": "List available database you can install"
        }
      ],
      "description": "databaseCreationCapabilities operations"
    },
    {
      "path": "/hosting/web/{serviceName}/dump",
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
              "name": "deletionDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of deletionDate property (like)"
            },
            {
              "name": "creationDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDate property (like)"
            },
            {
              "name": "orphan",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of orphan property (like)"
            },
            {
              "name": "databaseName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of databaseName property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Dumps linked to your hosting"
        }
      ],
      "description": "List the hosting.web.dump objects"
    },
    {
      "path": "/hosting/web/{serviceName}/dump/{id}",
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Delete dump before expiration date"
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
          "responseType": "hosting.web.dump",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Dump"
    },
    {
      "path": "/hosting/web/{serviceName}/email",
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
          "responseType": "hosting.web.email",
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
              "dataType": "hosting.web.email",
              "paramType": "body",
              "fullType": "hosting.web.email",
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
      "description": "Hosting automated emails"
    },
    {
      "path": "/hosting/web/{serviceName}/email/bounces",
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
              "name": "limit",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "Maximum bounces limit ( default : 20 / max : 100 )"
            }
          ],
          "responseType": "hosting.web.mail.Bounce[]",
          "noAuthentication": false,
          "description": "Request the last bounces"
        }
      ],
      "description": "bounces operations"
    },
    {
      "path": "/hosting/web/{serviceName}/email/request",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "action",
              "dataType": "hosting.web.mail.ActionEnum",
              "paramType": "body",
              "fullType": "hosting.web.mail.ActionEnum",
              "required": true,
              "description": "Action you want to request"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Request specific operation for your email"
        }
      ],
      "description": "request operations"
    },
    {
      "path": "/hosting/web/{serviceName}/email/volumes",
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
          "responseType": "hosting.web.mail.VolumeHistory[]",
          "noAuthentication": false,
          "description": "Request the history volume of email sent"
        }
      ],
      "description": "volumes operations"
    },
    {
      "path": "/hosting/web/{serviceName}/emailOption",
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
          "description": "Mail service linked to webhosting"
        }
      ],
      "description": "List the hosting.web.emailoption objects"
    },
    {
      "path": "/hosting/web/{serviceName}/emailOption/{id}",
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
          "responseType": "hosting.web.emailoption",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Mail service linked to webhosting"
    },
    {
      "path": "/hosting/web/{serviceName}/emailOption/{id}/serviceInfos",
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
          "responseType": "services.Service",
          "noAuthentication": false,
          "description": "Get the service properties"
        }
      ],
      "description": "serviceInfos operations"
    },
    {
      "path": "/hosting/web/{serviceName}/emailOption/{id}/terminate",
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your email sub service"
        }
      ],
      "description": "terminate operations"
    },
    {
      "path": "/hosting/web/{serviceName}/envVar",
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
              "name": "type",
              "dataType": "hosting.web.envVar.TypeEnum",
              "paramType": "query",
              "fullType": "hosting.web.envVar.TypeEnum",
              "required": false,
              "description": "Filter the value of type property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Environment variables set on your webhosting"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "type",
              "dataType": "hosting.web.envVar.TypeEnum",
              "paramType": "body",
              "fullType": "hosting.web.envVar.TypeEnum",
              "required": true,
              "description": "Type of variable set"
            },
            {
              "name": "key",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the new variable"
            },
            {
              "name": "value",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Value of the variable"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Set a variable to this hosting"
        }
      ],
      "description": "List the hosting.web.envVar objects"
    },
    {
      "path": "/hosting/web/{serviceName}/envVar/{key}",
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
              "name": "key",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Remove variable from hosting"
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
              "name": "key",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key"
            }
          ],
          "responseType": "hosting.web.envVar",
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
              "dataType": "hosting.web.envVar",
              "paramType": "body",
              "fullType": "hosting.web.envVar",
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
            },
            {
              "name": "key",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Key"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Environment variables set into your webhosting account"
    },
    {
      "path": "/hosting/web/{serviceName}/extraSqlPerso",
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
          "description": "Sqlperso linked to your hosting"
        }
      ],
      "description": "List the hosting.web.extrasqlperso objects"
    },
    {
      "path": "/hosting/web/{serviceName}/extraSqlPerso/{name}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
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
          "responseType": "hosting.web.extrasqlperso",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sqlperso service"
    },
    {
      "path": "/hosting/web/{serviceName}/extraSqlPerso/{name}/databases",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get databases linked with this option"
        }
      ],
      "description": "databases operations"
    },
    {
      "path": "/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "services.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "serviceInfos operations"
    },
    {
      "path": "/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "renew",
              "dataType": "service.RenewType",
              "paramType": "body",
              "fullType": "service.RenewType",
              "required": true,
              "description": "Renew type"
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "serviceInfosUpdate operations"
    },
    {
      "path": "/hosting/web/{serviceName}/extraSqlPerso/{name}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your extraSqlPerso sub service"
        }
      ],
      "description": "terminate operations"
    },
    {
      "path": "/hosting/web/{serviceName}/freedom",
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
              "dataType": "hosting.web.freedom.StatusEnum",
              "paramType": "query",
              "fullType": "hosting.web.freedom.StatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Freedom linked to this hosting account"
        }
      ],
      "description": "List the hosting.web.freedom objects"
    },
    {
      "path": "/hosting/web/{serviceName}/freedom/{domain}",
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
          "description": "Delete the freedom"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "hosting.web.freedom",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Freedoms linked to this hosting account"
    },
    {
      "path": "/hosting/web/{serviceName}/indy",
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
          "description": "User of multidomain independent allowed on your hosting"
        }
      ],
      "description": "List the hosting.web.indy objects"
    },
    {
      "path": "/hosting/web/{serviceName}/indy/{login}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.web.indy",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Hosting indys"
    },
    {
      "path": "/hosting/web/{serviceName}/localSeo/account",
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
              "name": "email",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of email property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Local SEO accounts associated to the hosting"
        }
      ],
      "description": "List the hosting.web.localSeo.account objects"
    },
    {
      "path": "/hosting/web/{serviceName}/localSeo/account/{id}",
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
          "responseType": "hosting.web.localSeo.account",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Local SEO accounts"
    },
    {
      "path": "/hosting/web/{serviceName}/localSeo/account/{id}/login",
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Login this location for SSO"
        }
      ],
      "description": "login operations"
    },
    {
      "path": "/hosting/web/{serviceName}/localSeo/emailAvailability",
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
              "name": "email",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The email address to check"
            }
          ],
          "responseType": "hosting.web.localSeo.EmailAvailability",
          "noAuthentication": false,
          "description": "Check email availability for a local SEO order"
        }
      ],
      "description": "emailAvailability operations"
    },
    {
      "path": "/hosting/web/{serviceName}/localSeo/location",
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
          "description": "Local SEO locations associated to the hosting"
        }
      ],
      "description": "List the hosting.web.localSeo.location objects"
    },
    {
      "path": "/hosting/web/{serviceName}/localSeo/location/{id}",
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.web.localSeo.location",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Local SEO locations"
    },
    {
      "path": "/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos",
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
        }
      ],
      "description": "serviceInfos operations"
    },
    {
      "path": "/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "renew",
              "dataType": "service.RenewType",
              "paramType": "body",
              "fullType": "service.RenewType",
              "required": true,
              "description": "Renew type"
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
      "description": "serviceInfosUpdate operations"
    },
    {
      "path": "/hosting/web/{serviceName}/localSeo/location/{id}/terminate",
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate a local SEO sub service"
        }
      ],
      "description": "terminate operations"
    },
    {
      "path": "/hosting/web/{serviceName}/module",
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
          "description": "Module installed on your hosting"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "language",
              "dataType": "hosting.web.module.LanguageEnum",
              "paramType": "body",
              "fullType": "hosting.web.module.LanguageEnum",
              "required": false,
              "description": "The language to set to your module"
            },
            {
              "name": "adminName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The login for the admin account (may be a standard string or your email)"
            },
            {
              "name": "adminPassword",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": false,
              "description": "The password for the admin account (at least 8 characters)"
            },
            {
              "name": "dependencies",
              "dataType": "hosting.web.module.DependencyType[]",
              "paramType": "body",
              "fullType": "hosting.web.module.DependencyType[]",
              "required": false,
              "description": "The dependencies that we have to configure on your module. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "On which domain the module has to be available (it can be a multidomain or a subdomain) - if not set, the module will be available on your serviceName domain"
            },
            {
              "name": "moduleId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "ID of the module you want to install"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Where to install the module, relative to your home directory"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Install a new module"
        }
      ],
      "description": "List the hosting.web.module objects"
    },
    {
      "path": "/hosting/web/{serviceName}/module/{id}",
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Delete a module installed"
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
          "responseType": "hosting.web.module",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Hosting modules installed"
    },
    {
      "path": "/hosting/web/{serviceName}/module/{id}/changePassword",
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Generate a new admin password for your module"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/hosting/web/{serviceName}/ovhConfig",
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
              "name": "historical",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Filter the value of historical property (=)"
            },
            {
              "name": "path",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of path property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Configuration used on your hosting"
        }
      ],
      "description": "List the hosting.web.ovhConfig objects"
    },
    {
      "path": "/hosting/web/{serviceName}/ovhConfig/{id}",
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.web.ovhConfig",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Virtual service"
    },
    {
      "path": "/hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "container",
              "dataType": "hosting.web.ovhconfig.ContainerEnum",
              "paramType": "body",
              "fullType": "hosting.web.ovhconfig.ContainerEnum",
              "required": false,
              "description": "Container to run this website"
            },
            {
              "name": "engineVersion",
              "dataType": "hosting.web.ovhConfig.AvailableEngineVersionEnum",
              "paramType": "body",
              "fullType": "hosting.web.ovhConfig.AvailableEngineVersionEnum",
              "required": false,
              "description": "Name of engine you want"
            },
            {
              "name": "environment",
              "dataType": "hosting.web.ovhConfig.EnvironmentEnum",
              "paramType": "body",
              "fullType": "hosting.web.ovhConfig.EnvironmentEnum",
              "required": false,
              "description": "Environment configuration you want"
            },
            {
              "name": "httpFirewall",
              "dataType": "hosting.web.ovhConfig.HttpFirewallEnum",
              "paramType": "body",
              "fullType": "hosting.web.ovhConfig.HttpFirewallEnum",
              "required": false,
              "description": "Configuration you want for http firewall"
            },
            {
              "name": "engineName",
              "dataType": "hosting.web.ovhConfig.EngineNameEnum",
              "paramType": "body",
              "fullType": "hosting.web.ovhConfig.EngineNameEnum",
              "required": false,
              "description": "Version of engine you want"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Apply a new configuration on this path"
        }
      ],
      "description": "changeConfiguration operations"
    },
    {
      "path": "/hosting/web/{serviceName}/ovhConfig/{id}/rollback",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "rollbackId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "The configuration's id you want to rollback"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Rollback to an old configuration"
        }
      ],
      "description": "rollback operations"
    },
    {
      "path": "/hosting/web/{serviceName}/ovhConfigRefresh",
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
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Synchronize the configuration listing with content on your hosting"
        }
      ],
      "description": "ovhConfigRefresh operations"
    },
    {
      "path": "/hosting/web/{serviceName}/ownLogs",
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
              "name": "fqdn",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of fqdn property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Own Logs linked to your hosting"
        }
      ],
      "description": "List the hosting.web.ownLogs objects"
    },
    {
      "path": "/hosting/web/{serviceName}/ownLogs/{id}",
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
          "responseType": "hosting.web.ownLogs",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Hosting own logs"
    },
    {
      "path": "/hosting/web/{serviceName}/ownLogs/{id}/userLogs",
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
          "description": "User allowed to connect into your logs interface"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ownLogsId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "OwnLogs where this userLogs will be enable. Default : main domain ownlogs"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The userLogs login used to connect to logs.ovh.net"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "The new userLogs password"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Description field for you"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Create new userLogs"
        }
      ],
      "description": "List the hosting.web.userLogs objects"
    },
    {
      "path": "/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}",
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Delete the userLogs"
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
          "responseType": "hosting.web.userLogs",
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
              "dataType": "hosting.web.userLogs",
              "paramType": "body",
              "fullType": "hosting.web.userLogs",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
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
      "description": "Hosting users logs"
    },
    {
      "path": "/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword",
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
              "description": "The new userLogs password"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Request a password change"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/hosting/web/{serviceName}/privateDatabaseCreationCapabilities",
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
          "responseType": "hosting.web.database.CreationDatabaseCapabilities[]",
          "noAuthentication": false,
          "description": "List available privateDatabase you can install"
        }
      ],
      "description": "privateDatabaseCreationCapabilities operations"
    },
    {
      "path": "/hosting/web/{serviceName}/privateDatabases",
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
          "description": "List linked privateDatabases"
        }
      ],
      "description": "privateDatabases operations"
    },
    {
      "path": "/hosting/web/{serviceName}/request",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "action",
              "dataType": "hosting.web.RequestActionEnum",
              "paramType": "body",
              "fullType": "hosting.web.RequestActionEnum",
              "required": true,
              "description": "Action you want to request"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Request specific operation for your hosting"
        }
      ],
      "description": "request operations"
    },
    {
      "path": "/hosting/web/{serviceName}/requestBoost",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "offer",
              "dataType": "hosting.web.OfferEnum",
              "paramType": "body",
              "fullType": "hosting.web.OfferEnum",
              "required": false,
              "description": "The boost offer of your choice. Set to null to disable boost."
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Allows you to boost your offer."
        }
      ],
      "description": "requestBoost operations"
    },
    {
      "path": "/hosting/web/{serviceName}/restoreSnapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "backup",
              "dataType": "hosting.web.backup.TypeEnum",
              "paramType": "body",
              "fullType": "hosting.web.backup.TypeEnum",
              "required": true,
              "description": "The backup you want to restore"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Restore this snapshot ALL CURRENT DATA WILL BE REPLACED BY YOUR SNAPSHOT"
        }
      ],
      "description": "restoreSnapshot operations"
    },
    {
      "path": "/hosting/web/{serviceName}/runtime",
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
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (like)"
            },
            {
              "name": "type",
              "dataType": "hosting.web.runtime.TypeEnum",
              "paramType": "query",
              "fullType": "hosting.web.runtime.TypeEnum",
              "required": false,
              "description": "Filter the value of type property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List of runtime configurations to your hosting"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "publicDir",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The client application public directory"
            },
            {
              "name": "type",
              "dataType": "hosting.web.runtime.TypeEnum",
              "paramType": "body",
              "fullType": "hosting.web.runtime.TypeEnum",
              "required": false,
              "description": "The backend type of a runtime configuration"
            },
            {
              "name": "isDefault",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Set if the runtime configuration is the one by default for the hosting"
            },
            {
              "name": "attachedDomains",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": false,
              "description": "The attached domains fqdn to link to this runtime configuration"
            },
            {
              "name": "appBootstrap",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The client application bootstrap script"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The custom display name of the runtime configuration"
            },
            {
              "name": "appEnv",
              "dataType": "hosting.web.runtime.EnvEnum",
              "paramType": "body",
              "fullType": "hosting.web.runtime.EnvEnum",
              "required": false,
              "description": "The client application environment"
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Request the creation of a new runtime configuration"
        }
      ],
      "description": "List the hosting.web.runtime objects"
    },
    {
      "path": "/hosting/web/{serviceName}/runtime/{id}",
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Delete a runtime configuration of an hosting"
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
          "responseType": "hosting.web.runtime",
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
              "dataType": "hosting.web.runtime",
              "paramType": "body",
              "fullType": "hosting.web.runtime",
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
      "description": "The runtime configuration of an attached domain for cloud web offer"
    },
    {
      "path": "/hosting/web/{serviceName}/runtime/{id}/attachedDomains",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Get the attached domains linked to this runtime configuration"
        }
      ],
      "description": "attachedDomains operations"
    },
    {
      "path": "/hosting/web/{serviceName}/runtimeAvailableTypes",
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
              "name": "language",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Specific programming language to filter"
            }
          ],
          "responseType": "hosting.web.runtime.TypeEnum[]",
          "noAuthentication": false,
          "description": "List available runtime configurations available backend types"
        }
      ],
      "description": "runtimeAvailableTypes operations"
    },
    {
      "path": "/hosting/web/{serviceName}/serviceInfos",
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
      "path": "/hosting/web/{serviceName}/ssl",
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
            }
          ],
          "responseType": "hosting.web.ssl",
          "noAuthentication": false,
          "description": "Delete the HostedSsl on your hosting"
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
            }
          ],
          "responseType": "hosting.web.ssl",
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
              "name": "chain",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "If you want import your proper SSL, give the chain linked to the associated certificate (optional)"
            },
            {
              "name": "certificate",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "If you want import your proper SSL, give the certificate here and the associated key after (optional)"
            },
            {
              "name": "key",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "If you want import your proper SSL, give the key here and the associated certificate before (optional)"
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
          "responseType": "hosting.web.ssl",
          "noAuthentication": false,
          "description": "Create the free default HostedSsl OR import your proper SSL on your hosting"
        }
      ],
      "description": "Hostedssl"
    },
    {
      "path": "/hosting/web/{serviceName}/ssl/domains",
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
          "description": "Get domains linked to this HostedSsl"
        }
      ],
      "description": "domains operations"
    },
    {
      "path": "/hosting/web/{serviceName}/ssl/regenerate",
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
            }
          ],
          "responseType": "hosting.web.ssl",
          "noAuthentication": false,
          "description": "Request the regeneration of your HostedSsl"
        }
      ],
      "description": "regenerate operations"
    },
    {
      "path": "/hosting/web/{serviceName}/ssl/report",
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
          "responseType": "hosting.web.ssl.report",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Hostedssl Report"
    },
    {
      "path": "/hosting/web/{serviceName}/statistics",
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
              "name": "type",
              "dataType": "hosting.web.StatisticsTypeEnum",
              "paramType": "query",
              "fullType": "hosting.web.StatisticsTypeEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "period",
              "dataType": "hosting.web.StatisticsPeriodEnum",
              "paramType": "query",
              "fullType": "hosting.web.StatisticsPeriodEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "complexType.ChartSerie<complexType.ChartTimestampValue>[]",
          "noAuthentication": false,
          "description": "Get statistics about this web hosting"
        }
      ],
      "description": "statistics operations"
    },
    {
      "path": "/hosting/web/{serviceName}/tasks",
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
              "name": "function",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of function property (like)"
            },
            {
              "name": "status",
              "dataType": "hosting.web.task.StatusEnum",
              "paramType": "query",
              "fullType": "hosting.web.task.StatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks attached to your hosting"
        }
      ],
      "description": "List the hosting.web.task objects"
    },
    {
      "path": "/hosting/web/{serviceName}/tasks/{id}",
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
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task"
    },
    {
      "path": "/hosting/web/{serviceName}/terminate",
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
      "path": "/hosting/web/{serviceName}/token",
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )"
        }
      ],
      "description": "token operations"
    },
    {
      "path": "/hosting/web/{serviceName}/user",
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
              "name": "login",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of login property (like)"
            },
            {
              "name": "home",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of home property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "User allowed to connect into your hosting"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "home",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Home directory"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Login use for your new user"
            },
            {
              "name": "sshState",
              "dataType": "hosting.web.user.SshStateEnum",
              "paramType": "body",
              "fullType": "hosting.web.user.SshStateEnum",
              "required": false,
              "description": "Ssh state for this user. Default: none"
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
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Create new ftp/ssh user"
        }
      ],
      "description": "List the hosting.web.user objects"
    },
    {
      "path": "/hosting/web/{serviceName}/user/{login}",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Delete ftp/ssh user"
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "hosting.web.user",
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
              "dataType": "hosting.web.user",
              "paramType": "body",
              "fullType": "hosting.web.user",
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
      "description": "Hosting users"
    },
    {
      "path": "/hosting/web/{serviceName}/user/{login}/changePassword",
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
              "description": "The user's new password"
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "hosting.web.task",
          "noAuthentication": false,
          "description": "Request a password change"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/hosting/web/{serviceName}/userLogs",
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
          "description": "User allowed to connect into your logs interface"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "login",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The userLogs login used to connect to logs.ovh.net"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "The new userLogs password"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Description field for you"
            },
            {
              "name": "ownLogsId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "OwnLogs where this userLogs will be enable. Default : main domain ownlogs"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Create new userLogs"
        }
      ],
      "description": "List the hosting.web.userLogs objects"
    },
    {
      "path": "/hosting/web/{serviceName}/userLogs/{login}",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Delete the userLogs"
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "hosting.web.userLogs",
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
              "dataType": "hosting.web.userLogs",
              "paramType": "body",
              "fullType": "hosting.web.userLogs",
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
      "description": "Hosting users logs"
    },
    {
      "path": "/hosting/web/{serviceName}/userLogs/{login}/changePassword",
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
              "description": "The new userLogs password"
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Request a password change"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/hosting/web/{serviceName}/userLogsToken",
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
              "name": "attachedDomain",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Specific attached domain to be included in the scope of your token"
            },
            {
              "name": "ttl",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Expiration of your token (in seconds)"
            },
            {
              "name": "remoteCheck",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Whether to limit the use of the token to the remote IPv4 of API caller"
            }
          ],
          "responseType": "password",
          "noAuthentication": false,
          "description": "Get a temporary token to access the your web hosting logs interface"
        }
      ],
      "description": "userLogsToken operations"
    }
  ],
  "resourcePath": "/hosting/web",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "complexType.ChartSerie<T>": {
      "id": "ChartSerie",
      "namespace": "complexType",
      "description": "A value set tagged with its unit and serie name",
      "generics": [
        "T"
      ],
      "properties": {
        "serieName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "values": {
          "type": "T[]",
          "fullType": "T[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "complexType.ChartTimestampValue": {
      "id": "ChartTimestampValue",
      "namespace": "complexType",
      "description": "A timestamp associated to a value",
      "properties": {
        "timestamp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "required": false
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
    "hosting.web.Address": {
      "id": "Address",
      "namespace": "hosting.web",
      "description": "Url and port of a service",
      "properties": {
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Port to use to access to the service",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Url to contact the service",
          "required": true
        }
      }
    },
    "hosting.web.AvailableOfferStruct": {
      "id": "AvailableOfferStruct",
      "namespace": "hosting.web",
      "description": "Struct which describs an boost offer from a service",
      "properties": {
        "offer": {
          "type": "hosting.web.OfferEnum",
          "fullType": "hosting.web.OfferEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Available boost offer",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "The price in month for this boost offer",
          "required": true
        }
      }
    },
    "hosting.web.Capabilities": {
      "id": "Capabilities",
      "namespace": "hosting.web",
      "description": "Struct which describs an offer",
      "properties": {
        "attachedDomains": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of domains you can attach to your hosting",
          "required": true
        },
        "crontab": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Does the offer allow crontab",
          "required": true
        },
        "databaseEngines": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of database engines allowed for your hosting",
          "required": true
        },
        "databases": {
          "type": "hosting.web.database.CreationDatabaseCapabilities[]",
          "fullType": "hosting.web.database.CreationDatabaseCapabilities[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe all databases type you can have",
          "required": true
        },
        "disk": {
          "type": "hosting.web.DiskType",
          "fullType": "hosting.web.DiskType",
          "canBeNull": true,
          "readOnly": false,
          "description": "Disk capacity and type available for your hosting ( null for unlimited )",
          "required": false
        },
        "emails": {
          "type": "hosting.web.CreationEmailCapabilities",
          "fullType": "hosting.web.CreationEmailCapabilities",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe all email offer you can have",
          "required": true
        },
        "envVars": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of environment variables allowed for your hosting",
          "required": true
        },
        "extraUsers": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of ftp user you can create",
          "required": true
        },
        "filesBrowser": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Does the offer allow access to web files browser?",
          "required": true
        },
        "highlight": {
          "type": "hosting.web.HighLightEnum",
          "fullType": "hosting.web.HighLightEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Marketing information about the current offer",
          "required": false
        },
        "languages": {
          "type": "hosting.web.CronLanguageAvailable",
          "fullType": "hosting.web.CronLanguageAvailable",
          "canBeNull": false,
          "readOnly": false,
          "description": "Language available for cron script",
          "required": true
        },
        "moduleOneClick": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Does the offer allow 1-click modules?",
          "required": true
        },
        "privateDatabases": {
          "type": "hosting.web.database.CreationDatabaseCapabilities[]",
          "fullType": "hosting.web.database.CreationDatabaseCapabilities[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Describe all privateDatabases type you can have",
          "required": true
        },
        "runtimes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of runtimes allowed for your hosting",
          "required": true
        },
        "sitesRecommended": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of sites recommended for your hosting ( -1 for unlimited )",
          "required": false
        },
        "ssh": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Does the offer allow SSH access",
          "required": true
        },
        "traffic": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": false,
          "description": "Traffic quota size for your hosting ( null for unlimited )",
          "required": false
        }
      }
    },
    "hosting.web.CountriesIp": {
      "id": "CountriesIp",
      "namespace": "hosting.web",
      "description": "Available clusterIp by country",
      "properties": {
        "country": {
          "type": "hosting.web.CountryEnum",
          "fullType": "hosting.web.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The whois country of the ip",
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The cluster ip",
          "required": true
        },
        "ipv6": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "The cluster ipv6",
          "required": false
        }
      }
    },
    "hosting.web.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "hosting.web",
      "description": "Available cluster countries",
      "enum": [
        "BE",
        "CA",
        "CZ",
        "DE",
        "ES",
        "FI",
        "FR",
        "IE",
        "IT",
        "LT",
        "NL",
        "PL",
        "PT",
        "UK"
      ],
      "enumType": "string"
    },
    "hosting.web.CreationEmailCapabilities": {
      "id": "CreationEmailCapabilities",
      "namespace": "hosting.web",
      "description": "Struct which describes mail offer available and his quota",
      "properties": {
        "available": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of email available for creation",
          "required": true
        },
        "quota": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email account capacity",
          "required": true
        }
      }
    },
    "hosting.web.CronLanguageAvailable": {
      "id": "CronLanguageAvailable",
      "namespace": "hosting.web",
      "description": "Language available for cron script",
      "properties": {
        "nodejs": {
          "type": "hosting.web.NodejsVersionAvailableEnum[]",
          "fullType": "hosting.web.NodejsVersionAvailableEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "NodeJS versions",
          "required": true
        },
        "php": {
          "type": "hosting.web.PhpVersionAvailableEnum[]",
          "fullType": "hosting.web.PhpVersionAvailableEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Php versions",
          "required": true
        },
        "python": {
          "type": "hosting.web.PythonVersionAvailableEnum[]",
          "fullType": "hosting.web.PythonVersionAvailableEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Python versions",
          "required": true
        },
        "ruby": {
          "type": "hosting.web.RubyVersionAvailableEnum[]",
          "fullType": "hosting.web.RubyVersionAvailableEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ruby versions",
          "required": true
        }
      }
    },
    "hosting.web.DatacenterEnum": {
      "id": "DatacenterEnum",
      "namespace": "hosting.web",
      "description": "Available datacenters",
      "enum": [
        "bhs1",
        "gra1",
        "gra2",
        "p19"
      ],
      "enumType": "string"
    },
    "hosting.web.DiskType": {
      "id": "DiskType",
      "namespace": "hosting.web",
      "description": "Disk properties (size and type of disk)",
      "properties": {
        "type": {
          "type": "hosting.web.DiskTypeEnum",
          "fullType": "hosting.web.DiskTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the disk",
          "required": true
        },
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Unit for disk size",
          "required": true
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Size of the disk",
          "required": true
        }
      }
    },
    "hosting.web.DiskTypeEnum": {
      "id": "DiskTypeEnum",
      "namespace": "hosting.web",
      "description": "Disk type available",
      "enum": [
        "HDD",
        "SSD"
      ],
      "enumType": "string"
    },
    "hosting.web.HighLightEnum": {
      "id": "HighLightEnum",
      "namespace": "hosting.web",
      "description": "Highlight tips for offer",
      "enum": [
        "best-seller",
        "new"
      ],
      "enumType": "string"
    },
    "hosting.web.ModuleList": {
      "id": "ModuleList",
      "namespace": "hosting.web",
      "description": "A module specifically packaged by OVH",
      "properties": {
        "active": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is the module available?",
          "required": true
        },
        "adminNameType": {
          "type": "hosting.web.module.AdminNameTypeEnum",
          "fullType": "hosting.web.module.AdminNameTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The type of the admin name",
          "required": true
        },
        "author": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The packager of this module for OVH",
          "required": true
        },
        "branch": {
          "type": "hosting.web.module.BranchEnum",
          "fullType": "hosting.web.module.BranchEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The branch of the module",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The ID of the module",
          "required": true
        },
        "keywords": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "The keywords for this module",
          "required": true
        },
        "language": {
          "type": "hosting.web.module.LanguageEnum[]",
          "fullType": "hosting.web.module.LanguageEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "All available languages for this module",
          "required": true
        },
        "languageRequirement": {
          "type": "complexType.UnitAndValue<string>",
          "fullType": "complexType.UnitAndValue<string>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Minimal language version required to run this module",
          "required": true
        },
        "latest": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is this the latest version available?",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The name of the module",
          "required": true
        },
        "size": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Size of the module",
          "required": true
        },
        "upgradeFrom": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "The IDs of the module you can upgrade to",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The version of the module",
          "required": true
        }
      }
    },
    "hosting.web.NodejsVersionAvailableEnum": {
      "id": "NodejsVersionAvailableEnum",
      "namespace": "hosting.web",
      "description": "Different NodeJs versions available",
      "enum": [
        "nodejs-10",
        "nodejs-11",
        "nodejs-12",
        "nodejs-8",
        "nodejs-9"
      ],
      "enumType": "string"
    },
    "hosting.web.OfferCapabilitiesEnum": {
      "id": "OfferCapabilitiesEnum",
      "namespace": "hosting.web",
      "description": "Hosting's offer",
      "enum": [
        "1000gp",
        "20gp",
        "240gp",
        "240pack",
        "240plan",
        "300gp",
        "60gp",
        "720pack",
        "720plan",
        "90pack",
        "90plan",
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
        "START",
        "business",
        "cloudweb1",
        "cloudweb2",
        "cloudweb3",
        "cloudwebbetax1",
        "depro2012",
        "deprol2012",
        "deproxl2012",
        "deproxxl2012",
        "destart2012",
        "destartl2012",
        "destartxl2012",
        "domainpack",
        "itbusiness2012",
        "itperso2012",
        "itpremium2012",
        "kimsufi2015",
        "mailpack",
        "mailplan",
        "mediapack",
        "mediaplan",
        "ovhpro1To",
        "ovhpro2To",
        "ovhpro5To",
        "paas2014beta",
        "perf2014x1",
        "perf2014x2",
        "perf2014x3",
        "perf2014x4",
        "perso2010",
        "perso2014",
        "premium",
        "pro2010",
        "pro2014",
        "start10g",
        "start10m",
        "start1g",
        "start1ges",
        "start1m",
        "start5g",
        "starter",
        "xxlpack",
        "xxlplan"
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
    "hosting.web.OperatingSystemEnum": {
      "id": "OperatingSystemEnum",
      "namespace": "hosting.web",
      "description": "Hosting's OS",
      "enum": [
        "linux"
      ],
      "enumType": "string"
    },
    "hosting.web.PhpVersion": {
      "id": "PhpVersion",
      "namespace": "hosting.web",
      "description": "State of available php versions for this account",
      "properties": {
        "support": {
          "type": "hosting.web.PhpVersionStateEnum",
          "fullType": "hosting.web.PhpVersionStateEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Current support of this php version",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "PHP version",
          "required": true
        }
      }
    },
    "hosting.web.PhpVersionAvailableEnum": {
      "id": "PhpVersionAvailableEnum",
      "namespace": "hosting.web",
      "description": "Different PHP versions available",
      "enum": [
        "phpfpm-5.6",
        "phpfpm-7.0",
        "phpfpm-7.1",
        "phpfpm-7.2",
        "phpfpm-7.3",
        "phpfpm-7.4"
      ],
      "enumType": "string"
    },
    "hosting.web.PhpVersionStateEnum": {
      "id": "PhpVersionStateEnum",
      "namespace": "hosting.web",
      "description": "Different support of PHP versions",
      "enum": [
        "BETA",
        "END_OF_LIFE",
        "SECURITY_FIXES",
        "SUPPORTED"
      ],
      "enumType": "string"
    },
    "hosting.web.PythonVersionAvailableEnum": {
      "id": "PythonVersionAvailableEnum",
      "namespace": "hosting.web",
      "description": "Different Python versions available",
      "enum": [
        "python-2",
        "python-3"
      ],
      "enumType": "string"
    },
    "hosting.web.RequestActionEnum": {
      "id": "RequestActionEnum",
      "namespace": "hosting.web",
      "description": "Types of action you can request for your web hosting",
      "enum": [
        "CHECK_QUOTA",
        "FLUSH_CACHE",
        "SCAN_ANTIHACK"
      ],
      "enumType": "string"
    },
    "hosting.web.ResourceEnum": {
      "id": "ResourceEnum",
      "namespace": "hosting.web",
      "description": "Hosting's type",
      "enum": [
        "bestEffort",
        "cloud",
        "dedicated",
        "shared"
      ],
      "enumType": "string"
    },
    "hosting.web.RubyVersionAvailableEnum": {
      "id": "RubyVersionAvailableEnum",
      "namespace": "hosting.web",
      "description": "Different Ruby versions available",
      "enum": [
        "ruby-2.4",
        "ruby-2.5",
        "ruby-2.6"
      ],
      "enumType": "string"
    },
    "hosting.web.Service": {
      "id": "Service",
      "namespace": "hosting.web",
      "description": "Web Hosting",
      "properties": {
        "availableBoostOffer": {
          "type": "hosting.web.AvailableOfferStruct[]",
          "fullType": "hosting.web.AvailableOfferStruct[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Available offers for boost option",
          "required": true
        },
        "boostOffer": {
          "type": "hosting.web.OfferCapabilitiesEnum",
          "fullType": "hosting.web.OfferCapabilitiesEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current boost offer",
          "required": false
        },
        "cluster": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster name",
          "required": true
        },
        "clusterIp": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "This direct ip to your cluster ( usefull for application like api )",
          "required": false
        },
        "clusterIpv6": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "This direct ipv6 to your cluster ( usefull for application like api )",
          "required": false
        },
        "countriesIp": {
          "type": "hosting.web.CountriesIp[]",
          "fullType": "hosting.web.CountriesIp[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Available clusterIp by countries",
          "required": false
        },
        "datacenter": {
          "type": "hosting.web.DatacenterEnum",
          "fullType": "hosting.web.DatacenterEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Datacenter where this account is located",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Set the name displayed in ManagerV6 for your hosting (max 50 chars)",
          "required": false
        },
        "filer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Filer name",
          "required": false
        },
        "hasCdn": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Has a CDN service linked on the hosting",
          "required": false
        },
        "hasHostedSsl": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Has a HostedSSL service linked on the hosting",
          "required": false
        },
        "home": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Path of your home",
          "required": true
        },
        "hostingIp": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "The recommended ip for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL )",
          "required": false
        },
        "hostingIpv6": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "The recommended ipv6 for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL )",
          "required": false
        },
        "lastOvhConfigScan": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "/hosting/web/{serviceName}/ovhConfig is stored in cache. This date is the last refresh of this data",
          "required": false
        },
        "offer": {
          "type": "hosting.web.OfferCapabilitiesEnum",
          "fullType": "hosting.web.OfferCapabilitiesEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hosting offer",
          "required": true
        },
        "operatingSystem": {
          "type": "hosting.web.OperatingSystemEnum",
          "fullType": "hosting.web.OperatingSystemEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hosting's OS",
          "required": true
        },
        "phpVersions": {
          "type": "hosting.web.PhpVersion[]",
          "fullType": "hosting.web.PhpVersion[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of available php versions for this account",
          "required": true
        },
        "primaryLogin": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hosting's main login",
          "required": true
        },
        "quotaSize": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Space allowed",
          "required": true
        },
        "quotaUsed": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": true,
          "description": "Space used",
          "required": false
        },
        "recommendedOffer": {
          "type": "hosting.web.OfferEnum",
          "fullType": "hosting.web.OfferEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "If your offer is old, return a recommended offer to migrate on",
          "required": false
        },
        "resourceType": {
          "type": "hosting.web.ResourceEnum",
          "fullType": "hosting.web.ResourceEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hosting resource type",
          "required": true
        },
        "serviceManagementAccess": {
          "type": "hosting.web.ServiceAccess",
          "fullType": "hosting.web.ServiceAccess",
          "canBeNull": false,
          "readOnly": true,
          "description": "URLs to use to manage your webhosting",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service name",
          "required": true
        },
        "state": {
          "type": "hosting.web.StateEnum",
          "fullType": "hosting.web.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of your hosting",
          "required": true
        },
        "token": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )",
          "required": false
        },
        "trafficQuotaSize": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": true,
          "description": "Traffic quota allowed ( null = unlimited )",
          "required": false
        },
        "trafficQuotaUsed": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": true,
          "readOnly": true,
          "description": "Traffic quota used",
          "required": false
        },
        "updates": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of updates on your hosting",
          "required": true
        }
      }
    },
    "hosting.web.ServiceAccess": {
      "id": "ServiceAccess",
      "namespace": "hosting.web",
      "description": "Different url to manage your service",
      "properties": {
        "ftp": {
          "type": "hosting.web.Address",
          "fullType": "hosting.web.Address",
          "canBeNull": false,
          "readOnly": false,
          "description": "Address with url and port to manage files by ftp",
          "required": true
        },
        "http": {
          "type": "hosting.web.Address",
          "fullType": "hosting.web.Address",
          "canBeNull": false,
          "readOnly": false,
          "description": "Address to see your webhosting without domain",
          "required": true
        },
        "ssh": {
          "type": "hosting.web.Address",
          "fullType": "hosting.web.Address",
          "canBeNull": false,
          "readOnly": false,
          "description": "Address with url and port to manage webhosting by ssh",
          "required": true
        }
      }
    },
    "hosting.web.StateEnum": {
      "id": "StateEnum",
      "namespace": "hosting.web",
      "description": "Hosting's state",
      "enum": [
        "active",
        "bloqued",
        "maintenance"
      ],
      "enumType": "string"
    },
    "hosting.web.StatisticsPeriodEnum": {
      "id": "StatisticsPeriodEnum",
      "namespace": "hosting.web",
      "description": "Available periods for statistics",
      "enum": [
        "daily",
        "monthly",
        "weekly",
        "yearly"
      ],
      "enumType": "string"
    },
    "hosting.web.StatisticsTypeEnum": {
      "id": "StatisticsTypeEnum",
      "namespace": "hosting.web",
      "description": "Types of statistics available for the web hosting",
      "enum": [
        "in.ftpCommands",
        "in.httpHits",
        "in.httpMeanResponseTime",
        "out.tcpConn",
        "sys.cpuUsage",
        "sys.workerSpawnOverload"
      ],
      "enumType": "string"
    },
    "hosting.web.attachedDomain": {
      "id": "attachedDomain",
      "namespace": "hosting.web",
      "description": "Virtual service",
      "properties": {
        "cdn": {
          "type": "hosting.web.attachedDomain.CdnEnum",
          "fullType": "hosting.web.attachedDomain.CdnEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is linked to the hosting cdn",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain linked (fqdn)",
          "required": true
        },
        "firewall": {
          "type": "hosting.web.attachedDomain.FirewallEnum",
          "fullType": "hosting.web.attachedDomain.FirewallEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Firewall state for this path",
          "required": true
        },
        "ipLocation": {
          "type": "hosting.web.CountryEnum",
          "fullType": "hosting.web.CountryEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP location of the domain linked",
          "required": false
        },
        "ownLog": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Put domain for separate the logs",
          "required": false
        },
        "path": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Domain path, relative to your home directory",
          "required": true
        },
        "runtimeId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "The runtime configuration ID used on this domain",
          "required": false
        },
        "ssl": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Put domain in ssl certificate",
          "required": false
        },
        "status": {
          "type": "hosting.web.attachedDomain.StatusEnum",
          "fullType": "hosting.web.attachedDomain.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The domain status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this domain",
          "required": false
        }
      }
    },
    "hosting.web.attachedDomain.CdnEnum": {
      "id": "CdnEnum",
      "namespace": "hosting.web.attachedDomain",
      "description": "Attached domain cdn enum",
      "enum": [
        "active",
        "none"
      ],
      "enumType": "string"
    },
    "hosting.web.attachedDomain.FirewallEnum": {
      "id": "FirewallEnum",
      "namespace": "hosting.web.attachedDomain",
      "description": "Attached domain firewall enum",
      "enum": [
        "active",
        "none"
      ],
      "enumType": "string"
    },
    "hosting.web.attachedDomain.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.attachedDomain",
      "description": "AttachedDomain status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.web.backup.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "hosting.web.backup",
      "description": "List of backup types",
      "enum": [
        "daily.1",
        "daily.2",
        "daily.3",
        "weekly.1",
        "weekly.2"
      ],
      "enumType": "string"
    },
    "hosting.web.boostHistory": {
      "id": "boostHistory",
      "namespace": "hosting.web",
      "description": "History of your boost requests",
      "properties": {
        "accountId": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account who requested the change",
          "required": true
        },
        "boostOffer": {
          "type": "hosting.web.OfferCapabilitiesEnum",
          "fullType": "hosting.web.OfferCapabilitiesEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Boost offer used",
          "required": false
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The date when the change has been requested",
          "required": true
        },
        "offer": {
          "type": "hosting.web.OfferCapabilitiesEnum",
          "fullType": "hosting.web.OfferCapabilitiesEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer when the change was made",
          "required": true
        }
      }
    },
    "hosting.web.cdn": {
      "id": "cdn",
      "namespace": "hosting.web",
      "description": "CDN service",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain of this CDN",
          "required": true
        },
        "free": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Option CDN free with the hosting ?",
          "required": true
        },
        "status": {
          "type": "hosting.web.cdn.StatusEnum",
          "fullType": "hosting.web.cdn.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the CDN option",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this CDN",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the CDN",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Version of the CDN",
          "required": true
        }
      }
    },
    "hosting.web.cdn.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.cdn",
      "description": "Cdn status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "flushing"
      ],
      "enumType": "string"
    },
    "hosting.web.cron": {
      "id": "cron",
      "namespace": "hosting.web",
      "description": "Hosting crons",
      "properties": {
        "command": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Command to execute",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Description field for you",
          "required": false
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Email used to receive error log ( stderr )",
          "required": false
        },
        "frequency": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Frequency ( crontab format ) defined for the script ( minutes are ignored )",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cron's id",
          "required": true
        },
        "language": {
          "type": "hosting.web.cron.LanguageEnum",
          "fullType": "hosting.web.cron.LanguageEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cron language",
          "required": true
        },
        "state": {
          "type": "hosting.web.cron.StateEnum",
          "fullType": "hosting.web.cron.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cron state",
          "required": true
        },
        "status": {
          "type": "hosting.web.cron.StatusEnum",
          "fullType": "hosting.web.cron.StatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Cron status",
          "required": true
        }
      }
    },
    "hosting.web.cron.LanguageEnum": {
      "id": "LanguageEnum",
      "namespace": "hosting.web.cron",
      "description": "Cron's language",
      "enum": [
        "node10",
        "node11",
        "node12",
        "node8",
        "node9",
        "other",
        "php4",
        "php5.2",
        "php5.3",
        "php5.4",
        "php5.5",
        "php5.6",
        "php7.0",
        "php7.1",
        "php7.2",
        "php7.3",
        "php7.4",
        "python2",
        "python3",
        "ruby2.4",
        "ruby2.5",
        "ruby2.6"
      ],
      "enumType": "string"
    },
    "hosting.web.cron.StateEnum": {
      "id": "StateEnum",
      "namespace": "hosting.web.cron",
      "description": "Cron state",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.web.cron.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.cron",
      "description": "Cron status",
      "enum": [
        "disabled",
        "enabled",
        "suspended"
      ],
      "enumType": "string"
    },
    "hosting.web.database": {
      "id": "database",
      "namespace": "hosting.web",
      "description": "Database",
      "properties": {
        "dumps": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The number of available dumps associated to this database",
          "required": true
        },
        "guiURL": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "URL for the graphical user interface",
          "required": false
        },
        "lastCheck": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Date of the last check quota",
          "required": false
        },
        "mode": {
          "type": "hosting.web.database.ModeEnum",
          "fullType": "hosting.web.database.ModeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Mode of your database",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
          "required": true
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The port on where to contact this database",
          "required": true
        },
        "quotaSize": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Space allowed",
          "required": true
        },
        "quotaUsed": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Space used",
          "required": true
        },
        "server": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Your database server name",
          "required": false
        },
        "state": {
          "type": "hosting.web.database.StateEnum",
          "fullType": "hosting.web.database.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Database state",
          "required": true
        },
        "status": {
          "type": "hosting.web.database.StatusEnum",
          "fullType": "hosting.web.database.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The database status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this database",
          "required": false
        },
        "type": {
          "type": "hosting.web.database.DatabaseTypeEnum",
          "fullType": "hosting.web.database.DatabaseTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of your database",
          "required": true
        },
        "user": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Database user name",
          "required": true
        },
        "version": {
          "type": "hosting.web.database.VersionEnum",
          "fullType": "hosting.web.database.VersionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Database version following the database type",
          "required": true
        },
        "versionSupport": {
          "type": "hosting.web.database.SupportedVersionEnum",
          "fullType": "hosting.web.database.SupportedVersionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates the current support state of your database version",
          "required": true
        }
      }
    },
    "hosting.web.database.AvailableVersionStruct": {
      "id": "AvailableVersionStruct",
      "namespace": "hosting.web.database",
      "description": "Database Available and Default version",
      "properties": {
        "default": {
          "type": "hosting.web.database.VersionEnum",
          "fullType": "hosting.web.database.VersionEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Database default version",
          "required": true
        },
        "list": {
          "type": "hosting.web.database.VersionEnum[]",
          "fullType": "hosting.web.database.VersionEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Database available version",
          "required": true
        }
      }
    },
    "hosting.web.database.CreationDatabaseCapabilities": {
      "id": "CreationDatabaseCapabilities",
      "namespace": "hosting.web.database",
      "description": "Struct which describs quota and available for a specific type of database",
      "properties": {
        "available": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of database left for creation",
          "required": true
        },
        "engines": {
          "type": "hosting.web.database.DatabaseTypeEnum[]",
          "fullType": "hosting.web.database.DatabaseTypeEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Database software available on this platform",
          "required": true
        },
        "isolation": {
          "type": "hosting.web.database.DatabaseIsolationEnum",
          "fullType": "hosting.web.database.DatabaseIsolationEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Technology use to isolate differents webhosting accounts",
          "required": true
        },
        "quota": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Size of data can be used",
          "required": true
        },
        "type": {
          "type": "hosting.web.database.DatabaseCapabilitiesTypeEnum",
          "fullType": "hosting.web.database.DatabaseCapabilitiesTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Database offer name",
          "required": true
        }
      }
    },
    "hosting.web.database.DatabaseCapabilities": {
      "id": "DatabaseCapabilities",
      "namespace": "hosting.web.database",
      "description": "Struct which describe available features for a database",
      "properties": {
        "changePassword": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Availability of the changePassword function",
          "required": true
        },
        "changeRight": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Availability of the changeRight function",
          "required": true
        },
        "delete": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Availability of the delete function",
          "required": true
        },
        "dump": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Availability of the dump function",
          "required": true
        },
        "getQuota": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Availability of the getQuota function",
          "required": true
        },
        "getRight": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Availability of the getQuota function",
          "required": true
        },
        "guiURL": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "URL of the database management tool",
          "required": true
        },
        "optimize": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Availability of the optimize function",
          "required": true
        },
        "restore": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Availability of the restore function",
          "required": true
        }
      }
    },
    "hosting.web.database.DatabaseCapabilitiesTypeEnum": {
      "id": "DatabaseCapabilitiesTypeEnum",
      "namespace": "hosting.web.database",
      "description": "Database capabitities type enum",
      "enum": [
        "extraSqlPerso",
        "local",
        "privateDatabase",
        "sqlLocal",
        "sqlPerso",
        "sqlPro"
      ],
      "enumType": "string"
    },
    "hosting.web.database.DatabaseCreationTypeEnum": {
      "id": "DatabaseCreationTypeEnum",
      "namespace": "hosting.web.database",
      "description": "Database Type enum",
      "enum": [
        "mariadb",
        "mysql",
        "postgresql",
        "redis"
      ],
      "enumType": "string"
    },
    "hosting.web.database.DatabaseIsolationEnum": {
      "id": "DatabaseIsolationEnum",
      "namespace": "hosting.web.database",
      "description": "Database Isolation enum",
      "enum": [
        "dedicated",
        "local",
        "shared"
      ],
      "enumType": "string"
    },
    "hosting.web.database.DatabaseTypeEnum": {
      "id": "DatabaseTypeEnum",
      "namespace": "hosting.web.database",
      "description": "Database Type enum",
      "enum": [
        "mariadb",
        "mongodb",
        "mysql",
        "postgresql",
        "redis"
      ],
      "enumType": "string"
    },
    "hosting.web.database.ExtraSqlQuotaEnum": {
      "id": "ExtraSqlQuotaEnum",
      "namespace": "hosting.web.database",
      "description": "ExtraSqlPerso quota enum",
      "enum": [
        "100",
        "200",
        "25",
        "400",
        "800"
      ],
      "enumType": "long"
    },
    "hosting.web.database.ModeEnum": {
      "id": "ModeEnum",
      "namespace": "hosting.web.database",
      "description": "Database mode",
      "enum": [
        "besteffort",
        "classic",
        "module"
      ],
      "enumType": "string"
    },
    "hosting.web.database.RequestActionEnum": {
      "id": "RequestActionEnum",
      "namespace": "hosting.web.database",
      "description": "Types of action you can request for your database",
      "enum": [
        "CHECK_QUOTA"
      ],
      "enumType": "string"
    },
    "hosting.web.database.StateEnum": {
      "id": "StateEnum",
      "namespace": "hosting.web.database",
      "description": "Database state",
      "enum": [
        "close",
        "ok",
        "readonly"
      ],
      "enumType": "string"
    },
    "hosting.web.database.StatisticsTypeEnum": {
      "id": "StatisticsTypeEnum",
      "namespace": "hosting.web.database",
      "description": "Types of statistics available for the database",
      "enum": [
        "statement",
        "statementMeanTime"
      ],
      "enumType": "string"
    },
    "hosting.web.database.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.database",
      "description": "Database status",
      "enum": [
        "checking",
        "created",
        "creating",
        "deleting",
        "dumping",
        "importing",
        "locked",
        "optimizing",
        "restoring",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.web.database.SupportedVersionEnum": {
      "id": "SupportedVersionEnum",
      "namespace": "hosting.web.database",
      "description": "Indicates the current support state of your database version",
      "enum": [
        "beta",
        "deprecated",
        "stable"
      ],
      "enumType": "string"
    },
    "hosting.web.database.VersionEnum": {
      "id": "VersionEnum",
      "namespace": "hosting.web.database",
      "description": "Database Version enum",
      "enum": [
        "3.4",
        "4.0",
        "5.1",
        "5.5",
        "5.6",
        "8.4"
      ],
      "enumType": "string"
    },
    "hosting.web.database.dump": {
      "id": "dump",
      "namespace": "hosting.web.database",
      "description": "Dump",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the dump",
          "required": true
        },
        "deletionDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Automatic deletion date of the dump",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump id",
          "required": true
        },
        "status": {
          "type": "hosting.web.database.dump.StatusEnum",
          "fullType": "hosting.web.database.dump.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The dump status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this dump",
          "required": false
        },
        "type": {
          "type": "hosting.web.database.dump.DateEnum",
          "fullType": "hosting.web.database.dump.DateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump type",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Dump url access",
          "required": false
        }
      }
    },
    "hosting.web.database.dump.DateEnum": {
      "id": "DateEnum",
      "namespace": "hosting.web.database.dump",
      "description": "List of dump types",
      "enum": [
        "daily.1",
        "now",
        "weekly.1"
      ],
      "enumType": "string"
    },
    "hosting.web.database.dump.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.database.dump",
      "description": "Database dump status",
      "enum": [
        "created",
        "creating",
        "deleting"
      ],
      "enumType": "string"
    },
    "hosting.web.dump": {
      "id": "dump",
      "namespace": "hosting.web",
      "description": "Dump",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the dump",
          "required": true
        },
        "databaseName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Source database name",
          "required": true
        },
        "deletionDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Automatic deletion date of the dump",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump id",
          "required": true
        },
        "orphan": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If source database was deleted",
          "required": true
        },
        "status": {
          "type": "hosting.web.database.dump.StatusEnum",
          "fullType": "hosting.web.database.dump.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The dump status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this dump",
          "required": false
        },
        "type": {
          "type": "hosting.web.database.dump.DateEnum",
          "fullType": "hosting.web.database.dump.DateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Dump type",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Dump url access",
          "required": false
        }
      }
    },
    "hosting.web.email": {
      "id": "email",
      "namespace": "hosting.web",
      "description": "Hosting automated emails",
      "properties": {
        "bounce": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Bounce",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Email used to receive errors",
          "required": false
        },
        "maxPerDay": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Max email to sent per day",
          "required": true
        },
        "sent": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Email sent since hosting creation",
          "required": true
        },
        "sentToday": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Email sent today",
          "required": true
        },
        "state": {
          "type": "hosting.web.mail.StateEnum",
          "fullType": "hosting.web.mail.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Email state",
          "required": true
        }
      }
    },
    "hosting.web.emailoption": {
      "id": "emailoption",
      "namespace": "hosting.web",
      "description": "Mail service linked to webhosting",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Email service domain",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id",
          "required": true
        }
      }
    },
    "hosting.web.envVar": {
      "id": "envVar",
      "namespace": "hosting.web",
      "description": "Environment variables set into your webhosting account",
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the variable",
          "required": true
        },
        "status": {
          "type": "hosting.web.envVar.StatusEnum",
          "fullType": "hosting.web.envVar.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The environnement variable status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this variable",
          "required": false
        },
        "type": {
          "type": "hosting.web.envVar.TypeEnum",
          "fullType": "hosting.web.envVar.TypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of variable set",
          "required": true
        },
        "value": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "Value of the variable",
          "required": true
        }
      }
    },
    "hosting.web.envVar.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.envVar",
      "description": "EnvVar status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.web.envVar.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "hosting.web.envVar",
      "description": "EnvVar type",
      "enum": [
        "integer",
        "password",
        "string"
      ],
      "enumType": "string"
    },
    "hosting.web.extrasqlperso": {
      "id": "extrasqlperso",
      "namespace": "hosting.web",
      "description": "Sqlperso service",
      "properties": {
        "database": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of database allowed by this option",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The extraSqlPerso option name",
          "required": true
        },
        "size": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Quota size allowed per each database by this option",
          "required": true
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The extraSqlPerso option status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this extraSqlPerso",
          "required": false
        }
      }
    },
    "hosting.web.freedom": {
      "id": "freedom",
      "namespace": "hosting.web",
      "description": "Freedoms linked to this hosting account",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Freedom domain",
          "required": true
        },
        "status": {
          "type": "hosting.web.freedom.StatusEnum",
          "fullType": "hosting.web.freedom.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Available status for freedom",
          "required": true
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Freedom type",
          "required": true
        }
      }
    },
    "hosting.web.freedom.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.freedom",
      "description": "Available status for freedoms",
      "enum": [
        "blockedByCustomer",
        "blockedBySystem",
        "ok",
        "preset"
      ],
      "enumType": "string"
    },
    "hosting.web.hostedssl.ReportValueEnum": {
      "id": "ReportValueEnum",
      "namespace": "hosting.web.hostedssl",
      "description": "Hostedssl report value",
      "enum": [
        "completed",
        "in-progress",
        "non-completed",
        "non-required",
        "not-applicable",
        "not-provided"
      ],
      "enumType": "string"
    },
    "hosting.web.hostedssl.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.hostedssl",
      "description": "Hostedssl status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "importing",
        "regenerating"
      ],
      "enumType": "string"
    },
    "hosting.web.indy": {
      "id": "indy",
      "namespace": "hosting.web",
      "description": "Hosting indys",
      "properties": {
        "attachedDomains": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "AttachedDomain IDs linked to this multidomain",
          "required": true
        },
        "home": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Home directory",
          "required": true
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Login of the multidomain independent user",
          "required": true
        },
        "state": {
          "type": "hosting.web.user.StateEnum",
          "fullType": "hosting.web.user.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "User status",
          "required": true
        }
      }
    },
    "hosting.web.localSeo.DirectoriesList": {
      "id": "DirectoriesList",
      "namespace": "hosting.web.localSeo",
      "description": "Struct describing a list of directories ordered by type",
      "properties": {
        "navigationSystems": {
          "type": "hosting.web.localSeo.Directory[]",
          "fullType": "hosting.web.localSeo.Directory[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Navigation systems",
          "required": true
        },
        "searchEngines": {
          "type": "hosting.web.localSeo.Directory[]",
          "fullType": "hosting.web.localSeo.Directory[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Search engines",
          "required": true
        },
        "socialNetworks": {
          "type": "hosting.web.localSeo.Directory[]",
          "fullType": "hosting.web.localSeo.Directory[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Social networks",
          "required": true
        }
      }
    },
    "hosting.web.localSeo.Directory": {
      "id": "Directory",
      "namespace": "hosting.web.localSeo",
      "description": "Struct describing a directory",
      "properties": {
        "code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier to use to get the result of a visibility check for the directory",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Human-readable name of the directory",
          "required": true
        }
      }
    },
    "hosting.web.localSeo.EmailAvailability": {
      "id": "EmailAvailability",
      "namespace": "hosting.web.localSeo",
      "description": "Struct describing the availability of an email address for a local SEO order",
      "properties": {
        "availability": {
          "type": "hosting.web.localSeo.account.EmailAvailabilityEnum",
          "fullType": "hosting.web.localSeo.account.EmailAvailabilityEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Availability of the email address",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Hosting on which the email address is used",
          "required": false
        }
      }
    },
    "hosting.web.localSeo.FieldStatusEnum": {
      "id": "FieldStatusEnum",
      "namespace": "hosting.web.localSeo",
      "description": "Sync status of a location field",
      "enum": [
        "MATCH",
        "MISMATCH",
        "MISSING",
        "NOT_APPLICABLE",
        "PRESENT"
      ],
      "enumType": "string"
    },
    "hosting.web.localSeo.FlowStatusEnum": {
      "id": "FlowStatusEnum",
      "namespace": "hosting.web.localSeo",
      "description": "Status of a listing",
      "enum": [
        "ALL_INFORMATION_SUBMITTED",
        "DONT_REMOVE",
        "INACTIVE",
        "MANUALLY_DEACTIVATED",
        "NEEDS_REVIEW",
        "NOT_SUPPORTED",
        "NO_ACTION_NEEDED",
        "REMOVAL_NEEDED",
        "REMOVAL_REVIEW_NEEDED",
        "REMOVAL_SUBMITTED",
        "REMOVED",
        "SUBMISSION_NEEDED",
        "WAITING_DIRECTORY_ACTION",
        "WAITING_USER_ACTION"
      ],
      "enumType": "string"
    },
    "hosting.web.localSeo.ListingStatusEnum": {
      "id": "ListingStatusEnum",
      "namespace": "hosting.web.localSeo",
      "description": "Sync status of a listing",
      "enum": [
        "IN_SYNC",
        "NOT_FOUND",
        "NOT_IN_SYNC",
        "NOT_SUPPORTED",
        "NO_ONLINE_LISTING",
        "TECHNICAL_PROBLEMS"
      ],
      "enumType": "string"
    },
    "hosting.web.localSeo.SearchData": {
      "id": "SearchData",
      "namespace": "hosting.web.localSeo",
      "description": "Struct describing a location being checked for visibility",
      "properties": {
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "City of the location",
          "required": true
        },
        "country": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Country of the location",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Id of the search",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the location",
          "required": true
        },
        "province": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Province of the location",
          "required": false
        },
        "street": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Street of the location",
          "required": true
        },
        "streetNo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Street numero of the location",
          "required": true
        },
        "token": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Token to use to get the results of the search",
          "required": true
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zipcode of the location",
          "required": true
        }
      }
    },
    "hosting.web.localSeo.VisibilityCheckResponse": {
      "id": "VisibilityCheckResponse",
      "namespace": "hosting.web.localSeo",
      "description": "Struct describing the response for a visibility check request",
      "properties": {
        "alreadyManaged": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Is the searched location already managed ?",
          "required": false
        },
        "searchData": {
          "type": "hosting.web.localSeo.SearchData",
          "fullType": "hosting.web.localSeo.SearchData",
          "canBeNull": false,
          "readOnly": false,
          "description": "Searched location data",
          "required": true
        }
      }
    },
    "hosting.web.localSeo.VisibilityCheckResultResponse": {
      "id": "VisibilityCheckResultResponse",
      "namespace": "hosting.web.localSeo",
      "description": "Struct describing a visibility check result",
      "properties": {
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "City of the location",
          "required": false
        },
        "cityStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "City of the location (sync status)",
          "required": false
        },
        "country": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Country of the location",
          "required": false
        },
        "countryStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Country of the location (sync status)",
          "required": false
        },
        "dateCreated": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "The date and time the listing was created in database",
          "required": false
        },
        "directoryType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The directory where this listing appears",
          "required": false
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "A contact email for the location",
          "required": false
        },
        "emailStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "A contact email for the location (sync status)",
          "required": false
        },
        "flowStatus": {
          "type": "hosting.web.localSeo.FlowStatusEnum",
          "fullType": "hosting.web.localSeo.FlowStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "The status of the current listing",
          "required": false
        },
        "listingId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The listing id in the directory database",
          "required": false
        },
        "listingUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The listing url on the directory website",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The location's name used for this listing",
          "required": false
        },
        "nameStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "The location's name used for this listing (sync status)",
          "required": false
        },
        "phone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The location's contact phone number",
          "required": false
        },
        "phoneStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "The location's contact phone number (sync status)",
          "required": false
        },
        "province": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Province of the location",
          "required": false
        },
        "provinceStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Province of the location (sync status)",
          "required": false
        },
        "street": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The location's street address",
          "required": false
        },
        "streetAndNo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "A localized combination of street and streetNo",
          "required": false
        },
        "streetAndNoStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "A localized combination of street and streetNo (sync status)",
          "required": false
        },
        "streetNo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The location's street number",
          "required": false
        },
        "streetNoStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "The location's street number (sync status)",
          "required": false
        },
        "streetStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "The location's street address (sync status)",
          "required": false
        },
        "streetType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The street type for Spain",
          "required": false
        },
        "streetTypeStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "The street type for Spain (sync status)",
          "required": false
        },
        "syncStatus": {
          "type": "hosting.web.localSeo.ListingStatusEnum",
          "fullType": "hosting.web.localSeo.ListingStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "The sync status of the listing",
          "required": false
        },
        "website": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "A valid url for the location's website",
          "required": false
        },
        "websiteStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "A valid url for the location's website (sync status)",
          "required": false
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Zipcode of the location",
          "required": false
        },
        "zipStatus": {
          "type": "hosting.web.localSeo.FieldStatusEnum",
          "fullType": "hosting.web.localSeo.FieldStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Zipcode of the location (sync status)",
          "required": false
        }
      }
    },
    "hosting.web.localSeo.account": {
      "id": "account",
      "namespace": "hosting.web.localSeo",
      "description": "Local SEO accounts",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of creation of the account",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Email address associated to the account",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the last account's update",
          "required": true
        },
        "status": {
          "type": "hosting.web.localSeo.account.StatusEnum",
          "fullType": "hosting.web.localSeo.account.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current status of the account",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Running task associated to the account",
          "required": false
        }
      }
    },
    "hosting.web.localSeo.account.EmailAvailabilityEnum": {
      "id": "EmailAvailabilityEnum",
      "namespace": "hosting.web.localSeo.account",
      "description": "Availability of an email address for a local SEO order",
      "enum": [
        "available",
        "merge",
        "nic",
        "taken"
      ],
      "enumType": "string"
    },
    "hosting.web.localSeo.account.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.localSeo.account",
      "description": "Account status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.web.localSeo.location": {
      "id": "location",
      "namespace": "hosting.web.localSeo",
      "description": "Local SEO locations",
      "properties": {
        "accountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Account id",
          "required": false
        },
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Address of the location",
          "required": false
        },
        "country": {
          "type": "hosting.web.localSeo.location.CountryEnum",
          "fullType": "hosting.web.localSeo.location.CountryEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Country of the location",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the installation of the location",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Location id",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the last location's update",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Name of the location",
          "required": false
        },
        "offer": {
          "type": "hosting.web.localSeo.location.OfferEnum",
          "fullType": "hosting.web.localSeo.location.OfferEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Local SEO offer for this location",
          "required": true
        },
        "status": {
          "type": "hosting.web.localSeo.location.StatusEnum",
          "fullType": "hosting.web.localSeo.location.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current status of the location",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Running task associated to the location",
          "required": false
        }
      }
    },
    "hosting.web.localSeo.location.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "hosting.web.localSeo.location",
      "description": "Location country",
      "enum": [
        "FR"
      ],
      "enumType": "string"
    },
    "hosting.web.localSeo.location.OfferEnum": {
      "id": "OfferEnum",
      "namespace": "hosting.web.localSeo.location",
      "description": "Location offer",
      "enum": [
        "normal"
      ],
      "enumType": "string"
    },
    "hosting.web.localSeo.location.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.localSeo.location",
      "description": "Location status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.web.mail.ActionEnum": {
      "id": "ActionEnum",
      "namespace": "hosting.web.mail",
      "description": "Types of action you can request for your mail",
      "enum": [
        "BLOCK",
        "PURGE",
        "UNBLOCK"
      ],
      "enumType": "string"
    },
    "hosting.web.mail.Bounce": {
      "id": "Bounce",
      "namespace": "hosting.web.mail",
      "description": "The volume history type",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "The datetime of this bounce",
          "required": true
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The return message for this bounce",
          "required": false
        },
        "to": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The email where you have the bounce",
          "required": false
        }
      }
    },
    "hosting.web.mail.StateEnum": {
      "id": "StateEnum",
      "namespace": "hosting.web.mail",
      "description": "Mail state enum",
      "enum": [
        "bounce",
        "force",
        "ko",
        "ok",
        "purging",
        "spam"
      ],
      "enumType": "string"
    },
    "hosting.web.mail.VolumeHistory": {
      "id": "VolumeHistory",
      "namespace": "hosting.web.mail",
      "description": "The volume history type",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "The datetime of this volume history point",
          "required": true
        },
        "volume": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "The volume history size",
          "required": false
        }
      }
    },
    "hosting.web.module": {
      "id": "module",
      "namespace": "hosting.web",
      "description": "Hosting modules installed",
      "properties": {
        "adminFolder": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The admin folder, relative to the module's installation path",
          "required": true
        },
        "adminName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Login for the admin account",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the installation of the module",
          "required": true
        },
        "dependencies": {
          "type": "hosting.web.module.DependencyType[]",
          "fullType": "hosting.web.module.DependencyType[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "The dependencies to which the module has access. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Installation ID",
          "required": true
        },
        "language": {
          "type": "hosting.web.module.LanguageEnum",
          "fullType": "hosting.web.module.LanguageEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The language of the module",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the last module's upgrade",
          "required": true
        },
        "moduleId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the module associated with this installation",
          "required": true
        },
        "path": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Where the module is installed, relative to your home directory",
          "required": true
        },
        "status": {
          "type": "hosting.web.module.StatusEnum",
          "fullType": "hosting.web.module.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The module status",
          "required": true
        },
        "targetUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The URL from where your module can be reached",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this module",
          "required": false
        }
      }
    },
    "hosting.web.module.AdminNameTypeEnum": {
      "id": "AdminNameTypeEnum",
      "namespace": "hosting.web.module",
      "description": "The type of the admin name",
      "enum": [
        "email",
        "string"
      ],
      "enumType": "string"
    },
    "hosting.web.module.BranchEnum": {
      "id": "BranchEnum",
      "namespace": "hosting.web.module",
      "description": "Branch enum",
      "enum": [
        "old",
        "stable",
        "testing"
      ],
      "enumType": "string"
    },
    "hosting.web.module.DependencyType": {
      "id": "DependencyType",
      "namespace": "hosting.web.module",
      "description": "Dependency parameters. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The name of this dependency",
          "required": false
        },
        "password": {
          "type": "password",
          "fullType": "password",
          "canBeNull": true,
          "readOnly": false,
          "description": "The password associated with the user",
          "required": false
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "The port on where to contact this dependency",
          "required": false
        },
        "prefix": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The prefix to set to the data to distinguish between the data from the module and the rest",
          "required": false
        },
        "server": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The server on where your dependency is hosted",
          "required": false
        },
        "type": {
          "type": "hosting.web.module.DependencyTypeEnum",
          "fullType": "hosting.web.module.DependencyTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type",
          "required": true
        },
        "user": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The user to use to connect to this dependency",
          "required": false
        }
      }
    },
    "hosting.web.module.DependencyTypeEnum": {
      "id": "DependencyTypeEnum",
      "namespace": "hosting.web.module",
      "description": "The type of the dependency. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example",
      "enum": [
        "mysql"
      ],
      "enumType": "string"
    },
    "hosting.web.module.LanguageEnum": {
      "id": "LanguageEnum",
      "namespace": "hosting.web.module",
      "description": "Install language",
      "enum": [
        "cz",
        "de",
        "en",
        "es",
        "fi",
        "fr",
        "it",
        "lt",
        "nl",
        "pl",
        "pt"
      ],
      "enumType": "string"
    },
    "hosting.web.module.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.module",
      "description": "Module status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.web.ovhConfig": {
      "id": "ovhConfig",
      "namespace": "hosting.web",
      "description": "Virtual service",
      "properties": {
        "container": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Container to run this website",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "When ovhconfig was created, or found for the first time, on the hosting servers",
          "required": true
        },
        "engineName": {
          "type": "hosting.web.ovhConfig.EngineNameEnum",
          "fullType": "hosting.web.ovhConfig.EngineNameEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Version of engine you want",
          "required": true
        },
        "engineVersion": {
          "type": "hosting.web.ovhConfig.EngineVersionEnum",
          "fullType": "hosting.web.ovhConfig.EngineVersionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of engine you want",
          "required": true
        },
        "environment": {
          "type": "hosting.web.ovhConfig.EnvironmentEnum",
          "fullType": "hosting.web.ovhConfig.EnvironmentEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Environment configuration you want",
          "required": true
        },
        "fileExist": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If .ovhConfig exists",
          "required": true
        },
        "historical": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "If this configuration is an old configuration",
          "required": false
        },
        "httpFirewall": {
          "type": "hosting.web.ovhConfig.HttpFirewallEnum",
          "fullType": "hosting.web.ovhConfig.HttpFirewallEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration you want for http firewall",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Configuration's id",
          "required": true
        },
        "path": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Config path, relative to your home directory",
          "required": false
        },
        "status": {
          "type": "hosting.web.ovhConfig.StatusEnum",
          "fullType": "hosting.web.ovhConfig.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The configuration status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this configuration",
          "required": false
        }
      }
    },
    "hosting.web.ovhConfig.AvailableEngineVersionEnum": {
      "id": "AvailableEngineVersionEnum",
      "namespace": "hosting.web.ovhConfig",
      "description": "Hosting available configuration version",
      "enum": [
        "5.4",
        "5.5",
        "5.6",
        "7.0",
        "7.1",
        "7.2",
        "7.3"
      ],
      "enumType": "string"
    },
    "hosting.web.ovhConfig.EngineNameEnum": {
      "id": "EngineNameEnum",
      "namespace": "hosting.web.ovhConfig",
      "description": "Hosting configuration engine",
      "enum": [
        "php",
        "phpcgi"
      ],
      "enumType": "string"
    },
    "hosting.web.ovhConfig.EngineVersionEnum": {
      "id": "EngineVersionEnum",
      "namespace": "hosting.web.ovhConfig",
      "description": "Hosting configuration version",
      "enum": [
        "4.4",
        "5.0",
        "5.1",
        "5.2",
        "5.3",
        "5.4",
        "5.5",
        "5.6",
        "7.0",
        "7.1",
        "7.2",
        "7.3",
        "AUTO"
      ],
      "enumType": "string"
    },
    "hosting.web.ovhConfig.EnvironmentEnum": {
      "id": "EnvironmentEnum",
      "namespace": "hosting.web.ovhConfig",
      "description": "Hosting configuration environment",
      "enum": [
        "development",
        "production"
      ],
      "enumType": "string"
    },
    "hosting.web.ovhConfig.HttpFirewallEnum": {
      "id": "HttpFirewallEnum",
      "namespace": "hosting.web.ovhConfig",
      "description": "Hosting configuration firewall",
      "enum": [
        "none",
        "security"
      ],
      "enumType": "string"
    },
    "hosting.web.ovhConfig.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.ovhConfig",
      "description": "Ovhconfig status",
      "enum": [
        "created",
        "rollbacking",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.web.ovhconfig.ContainerEnum": {
      "id": "ContainerEnum",
      "namespace": "hosting.web.ovhconfig",
      "description": "Hosting configuration image to run website",
      "enum": [
        "jessie.i386",
        "legacy",
        "stable",
        "testing"
      ],
      "enumType": "string"
    },
    "hosting.web.ownLogs": {
      "id": "ownLogs",
      "namespace": "hosting.web",
      "description": "Hosting own logs",
      "properties": {
        "fqdn": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The ownlogs fqdn available on logs.clusterXX.hosting.ovh.net",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Identifier of this ownLogs",
          "required": true
        },
        "logs": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "URL to access this ownLogs logs",
          "required": true
        },
        "stats": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "URL to access this ownLogs stats",
          "required": true
        },
        "status": {
          "type": "hosting.web.ownLogs.StatusEnum",
          "fullType": "hosting.web.ownLogs.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of this ownLogs",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this ownLogs",
          "required": false
        }
      }
    },
    "hosting.web.ownLogs.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.ownLogs",
      "description": "OwnLogs status",
      "enum": [
        "created",
        "creating",
        "deleting"
      ],
      "enumType": "string"
    },
    "hosting.web.runtime": {
      "id": "runtime",
      "namespace": "hosting.web",
      "description": "The runtime configuration of an attached domain for cloud web offer",
      "properties": {
        "appBootstrap": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The client application bootstrap script",
          "required": false
        },
        "appEnv": {
          "type": "hosting.web.runtime.EnvEnum",
          "fullType": "hosting.web.runtime.EnvEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The client application environment",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The creation date of the runtime configuration",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The runtime configuration ID",
          "required": true
        },
        "isDefault": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the runtime configuration is the one by default for the hosting",
          "required": true
        },
        "isDeletable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Return if the runtime configuration can be deleted",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The last update date of the runtime configuration",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The custom display name of the runtime configuration",
          "required": false
        },
        "publicDir": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The client application public directory",
          "required": false
        },
        "status": {
          "type": "hosting.web.runtime.StateEnum",
          "fullType": "hosting.web.runtime.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The status of the runtime",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The link current task for the runtime configuration",
          "required": false
        },
        "type": {
          "type": "hosting.web.runtime.TypeEnum",
          "fullType": "hosting.web.runtime.TypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The backend type of the runtime",
          "required": true
        }
      }
    },
    "hosting.web.runtime.EnvEnum": {
      "id": "EnvEnum",
      "namespace": "hosting.web.runtime",
      "description": "Runtime env enum",
      "enum": [
        "development",
        "production"
      ],
      "enumType": "string"
    },
    "hosting.web.runtime.StateEnum": {
      "id": "StateEnum",
      "namespace": "hosting.web.runtime",
      "description": "Runtime state enum",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.web.runtime.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "hosting.web.runtime",
      "description": "Runtime backend type enum",
      "enum": [
        "nodejs-10",
        "nodejs-11",
        "nodejs-12",
        "nodejs-8",
        "nodejs-9",
        "phpfpm-5.6",
        "phpfpm-7.0",
        "phpfpm-7.1",
        "phpfpm-7.2",
        "phpfpm-7.3",
        "phpfpm-7.4",
        "python-2",
        "python-3",
        "ruby-2.4",
        "ruby-2.5",
        "ruby-2.6"
      ],
      "enumType": "string"
    },
    "hosting.web.ssl": {
      "id": "ssl",
      "namespace": "hosting.web",
      "description": "Hostedssl",
      "properties": {
        "isReportable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If the hostedssl is currently bound to a report",
          "required": true
        },
        "provider": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Provider of the HostedSsl",
          "required": true
        },
        "regenerable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Regenerable flag",
          "required": true
        },
        "status": {
          "type": "hosting.web.hostedssl.StatusEnum",
          "fullType": "hosting.web.hostedssl.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the HostedSsl",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this HostedSsl",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of the HostedSsl",
          "required": true
        }
      }
    },
    "hosting.web.ssl.report": {
      "id": "report",
      "namespace": "hosting.web.ssl",
      "description": "Hostedssl Report",
      "properties": {
        "certificateSigningRequestStatus": {
          "type": "hosting.web.hostedssl.ReportValueEnum",
          "fullType": "hosting.web.hostedssl.ReportValueEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "\"Certificate signing request\" test status done by certification authority",
          "required": true
        },
        "domainControlValidationStatus": {
          "type": "hosting.web.hostedssl.ReportValueEnum",
          "fullType": "hosting.web.hostedssl.ReportValueEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "\"Domain control validation\" test status done by certification authority",
          "required": true
        },
        "organizationValidationStatus": {
          "type": "hosting.web.hostedssl.ReportValueEnum",
          "fullType": "hosting.web.hostedssl.ReportValueEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Applicant's legal status obtained or verified directly with registration agency",
          "required": true
        },
        "phoneCallApprovalStatus": {
          "type": "hosting.web.hostedssl.ReportValueEnum",
          "fullType": "hosting.web.hostedssl.ReportValueEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Approval verified through a phone call to the contract signer",
          "required": true
        },
        "providerOrderId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The order ID from given hostedssl provider",
          "required": true
        },
        "termsAndConditionsAcceptanceStatus": {
          "type": "hosting.web.hostedssl.ReportValueEnum",
          "fullType": "hosting.web.hostedssl.ReportValueEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Terms and conditions agreements acceptance",
          "required": true
        },
        "tradeNameVerificationStatus": {
          "type": "hosting.web.hostedssl.ReportValueEnum",
          "fullType": "hosting.web.hostedssl.ReportValueEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Trade name verified directly with registration agency or through a verified third party",
          "required": true
        }
      }
    },
    "hosting.web.task": {
      "id": "task",
      "namespace": "hosting.web",
      "description": "Tasks",
      "properties": {
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function name",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "the id of the task",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "last update",
          "required": false
        },
        "objectId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task related object ID",
          "required": false
        },
        "objectType": {
          "type": "hosting.web.task.ObjectTypeEnum",
          "fullType": "hosting.web.task.ObjectTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task object type",
          "required": false
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task Creation date",
          "required": true
        },
        "status": {
          "type": "hosting.web.task.StatusEnum",
          "fullType": "hosting.web.task.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        }
      }
    },
    "hosting.web.task.ObjectTypeEnum": {
      "id": "ObjectTypeEnum",
      "namespace": "hosting.web.task",
      "description": "Task object type listing",
      "enum": [
        "Abuse",
        "AttachedDomain",
        "BlockedIp",
        "Cdn",
        "Cron",
        "Database",
        "Dump",
        "EnvVar",
        "Filerz",
        "Hostedssl",
        "Hosting",
        "Indy",
        "Infra",
        "Minor",
        "Module",
        "Other",
        "OvhConfig",
        "OvhOrg",
        "OwnLogs",
        "Runtime",
        "Scan",
        "Sqlperso",
        "User",
        "UserLogs",
        "Web",
        "Webd"
      ],
      "enumType": "string"
    },
    "hosting.web.task.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.task",
      "description": "Task's status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "init",
        "todo"
      ],
      "enumType": "string"
    },
    "hosting.web.user": {
      "id": "user",
      "namespace": "hosting.web",
      "description": "Hosting users",
      "properties": {
        "home": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Home directory",
          "required": true
        },
        "isPrimaryAccount": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is this user primary",
          "required": true
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Login used to connect on FTP and SSH",
          "required": true
        },
        "serviceManagementCredentials": {
          "type": "hosting.web.user.ServiceCredentials",
          "fullType": "hosting.web.user.ServiceCredentials",
          "canBeNull": false,
          "readOnly": true,
          "description": "Credentials to manage your webhosting",
          "required": true
        },
        "sshState": {
          "type": "hosting.web.user.SshStateEnum",
          "fullType": "hosting.web.user.SshStateEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "User ssh status",
          "required": true
        },
        "state": {
          "type": "hosting.web.user.StateEnum",
          "fullType": "hosting.web.user.StateEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "User state",
          "required": true
        },
        "status": {
          "type": "hosting.web.user.StatusEnum",
          "fullType": "hosting.web.user.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The user status",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this user",
          "required": false
        }
      }
    },
    "hosting.web.user.Credentials": {
      "id": "Credentials",
      "namespace": "hosting.web.user",
      "description": "User, url and port of a service",
      "properties": {
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Port to use to access to the service",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Url to contact the service",
          "required": true
        },
        "user": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Login to authentificate you on the service",
          "required": true
        }
      }
    },
    "hosting.web.user.ServiceCredentials": {
      "id": "ServiceCredentials",
      "namespace": "hosting.web.user",
      "description": "Different credentials to manage your service",
      "properties": {
        "ftp": {
          "type": "hosting.web.user.Credentials",
          "fullType": "hosting.web.user.Credentials",
          "canBeNull": false,
          "readOnly": false,
          "description": "Credentials to manage files by ftp",
          "required": true
        },
        "ssh": {
          "type": "hosting.web.user.Credentials",
          "fullType": "hosting.web.user.Credentials",
          "canBeNull": false,
          "readOnly": false,
          "description": "Credentials to manage webhosting by ssh",
          "required": true
        }
      }
    },
    "hosting.web.user.SshStateEnum": {
      "id": "SshStateEnum",
      "namespace": "hosting.web.user",
      "description": "Account's ssh state",
      "enum": [
        "active",
        "none",
        "sftponly"
      ],
      "enumType": "string"
    },
    "hosting.web.user.StateEnum": {
      "id": "StateEnum",
      "namespace": "hosting.web.user",
      "description": "Account's state",
      "enum": [
        "off",
        "rw"
      ],
      "enumType": "string"
    },
    "hosting.web.user.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.user",
      "description": "User status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string"
    },
    "hosting.web.userLogs": {
      "id": "userLogs",
      "namespace": "hosting.web",
      "description": "Hosting users logs",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the user creation",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Description field for you",
          "required": false
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The userLogs login used to connect to logs.ovh.net",
          "required": true
        },
        "ownLogsId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "OwnLogs where this userLogs will be enable. Default : main domain ownlogs",
          "required": false
        },
        "status": {
          "type": "hosting.web.userLogs.StatusEnum",
          "fullType": "hosting.web.userLogs.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of this userLogs",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "The task ID working on this userLogs",
          "required": false
        }
      }
    },
    "hosting.web.userLogs.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "hosting.web.userLogs",
      "description": "UserLogs status",
      "enum": [
        "created",
        "creating",
        "deleting",
        "updating"
      ],
      "enumType": "string"
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
    }
  }
}