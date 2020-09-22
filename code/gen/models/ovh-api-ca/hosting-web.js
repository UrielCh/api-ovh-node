"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
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
            "path": "/hosting/web"
        },
        {
            "description": "Find hosting service linked to a domain",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Find hosting service linked to a domain",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain used into web hosting attached Domains",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/hosting/web/attachedDomain"
        },
        {
            "description": "Get available offer",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get available offer",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain you want to add or upgrade a hosting",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.OfferEnum[]"
                }
            ],
            "path": "/hosting/web/availableOffer"
        },
        {
            "description": "Get current incident",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get current incident",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [],
                    "responseType": "string[]"
                }
            ],
            "path": "/hosting/web/incident"
        },
        {
            "description": "Get list of directories associated to a local SEO offer and a country",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get list of directories associated to a local SEO offer and a country",
                    "httpMethod": "GET",
                    "noAuthentication": true,
                    "parameters": [
                        {
                            "dataType": "hosting.web.localSeo.location.CountryEnum",
                            "description": "Country of the location",
                            "fullType": "hosting.web.localSeo.location.CountryEnum",
                            "name": "country",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "hosting.web.localSeo.location.OfferEnum",
                            "description": "Local SEO offer",
                            "fullType": "hosting.web.localSeo.location.OfferEnum",
                            "name": "offer",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.localSeo.DirectoriesList"
                }
            ],
            "path": "/hosting/web/localSeo/directoriesList"
        },
        {
            "description": "Check email availability for a local SEO order",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Check email availability for a local SEO order",
                    "httpMethod": "GET",
                    "noAuthentication": true,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The email address to check",
                            "fullType": "string",
                            "name": "email",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.localSeo.EmailAvailability"
                }
            ],
            "path": "/hosting/web/localSeo/emailAvailability"
        },
        {
            "description": "Check visibility of a location",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Check visibility of a location",
                    "httpMethod": "POST",
                    "noAuthentication": true,
                    "parameters": [
                        {
                            "dataType": "hosting.web.localSeo.location.CountryEnum",
                            "description": "Country of the location",
                            "fullType": "hosting.web.localSeo.location.CountryEnum",
                            "name": "country",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Name of the location",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Address line 1 of the location",
                            "fullType": "string",
                            "name": "street",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Zipcode of the location",
                            "fullType": "string",
                            "name": "zip",
                            "paramType": "body",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.localSeo.VisibilityCheckResponse"
                }
            ],
            "path": "/hosting/web/localSeo/visibilityCheck"
        },
        {
            "description": "Get the result of a visibility check",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get the result of a visibility check",
                    "httpMethod": "GET",
                    "noAuthentication": true,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Get the result only for one directory",
                            "fullType": "string",
                            "name": "directory",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "Id of the check",
                            "fullType": "long",
                            "name": "id",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Token received when requesting the check",
                            "fullType": "string",
                            "name": "token",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.localSeo.VisibilityCheckResultResponse[]"
                }
            ],
            "path": "/hosting/web/localSeo/visibilityCheckResult"
        },
        {
            "description": "List the hosting.web.ModuleList objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "IDs of all modules available",
                    "httpMethod": "GET",
                    "noAuthentication": true,
                    "parameters": [
                        {
                            "dataType": "boolean",
                            "description": "Filter the value of active property (=)",
                            "fullType": "boolean",
                            "name": "active",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.module.BranchEnum",
                            "description": "Filter the value of branch property (=)",
                            "fullType": "hosting.web.module.BranchEnum",
                            "name": "branch",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "boolean",
                            "description": "Filter the value of latest property (=)",
                            "fullType": "boolean",
                            "name": "latest",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/hosting/web/moduleList"
        },
        {
            "description": "A module specifically packaged by OVH",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get this object properties",
                    "httpMethod": "GET",
                    "noAuthentication": true,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "The ID of the module",
                            "fullType": "long",
                            "name": "id",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.ModuleList"
                }
            ],
            "path": "/hosting/web/moduleList/{id}"
        },
        {
            "description": "Get offer capabilities",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get offer capabilities",
                    "httpMethod": "GET",
                    "noAuthentication": true,
                    "parameters": [
                        {
                            "dataType": "hosting.web.OfferCapabilitiesEnum",
                            "description": "Describe offer capabilities",
                            "fullType": "hosting.web.OfferCapabilitiesEnum",
                            "name": "offer",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.Capabilities"
                }
            ],
            "path": "/hosting/web/offerCapabilities"
        },
        {
            "description": "Web Hosting",
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.Service"
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
                            "dataType": "hosting.web.Service",
                            "description": "New object properties",
                            "fullType": "hosting.web.Service",
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
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}"
        },
        {
            "description": "activatePrivateDatabase operations",
            "operations": [
                {
                    "apiStatus": {
                        "deletionDate": "2019-12-15T00:00:00+01:00",
                        "deprecatedDate": "2019-12-01T00:00:00+01:00",
                        "description": "Deprecated, will be removed",
                        "replacement": "/order/cartServiceOption/webHosting/{serviceName}",
                        "value": "DEPRECATED"
                    },
                    "description": "Activate an included private database on your hosting offer",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
                            "description": "The private database ram size included in your offer",
                            "fullType": "hosting.PrivateDatabase.AvailableRamSizeEnum",
                            "name": "ram",
                            "paramType": "body",
                            "required": true
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/activatePrivateDatabase"
        },
        {
            "description": "List the hosting.web.attachedDomain objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Domains or subdomains attached to your hosting",
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
                            "description": "Filter the value of domain property (like)",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of path property (like)",
                            "fullType": "string",
                            "name": "path",
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
                    "description": "Link a domain to this hosting",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.web.attachedDomain.CdnEnum",
                            "description": "Is linked to the hosting cdn",
                            "fullType": "hosting.web.attachedDomain.CdnEnum",
                            "name": "cdn",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Domain to link",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "hosting.web.attachedDomain.FirewallEnum",
                            "description": "Firewall state for this path",
                            "fullType": "hosting.web.attachedDomain.FirewallEnum",
                            "name": "firewall",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Put domain for separate the logs on logs.ovh.net",
                            "fullType": "string",
                            "name": "ownLog",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Domain's path, relative to your home directory",
                            "fullType": "string",
                            "name": "path",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "The runtime configuration ID linked to this attached domain",
                            "fullType": "long",
                            "name": "runtimeId",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "boolean",
                            "description": "Put domain in ssl certificate",
                            "fullType": "boolean",
                            "name": "ssl",
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
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/attachedDomain"
        },
        {
            "description": "Virtual service",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Unlink domain from hosting",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain linked (fqdn)",
                            "fullType": "string",
                            "name": "domain",
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
                    "responseType": "hosting.web.task"
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
                            "description": "Domain linked (fqdn)",
                            "fullType": "string",
                            "name": "domain",
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
                    "responseType": "hosting.web.attachedDomain"
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
                            "dataType": "hosting.web.attachedDomain",
                            "description": "New object properties",
                            "fullType": "hosting.web.attachedDomain",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain linked (fqdn)",
                            "fullType": "string",
                            "name": "domain",
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
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/attachedDomain/{domain}"
        },
        {
            "description": "purgeCache operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Purge cache for this attached domain",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain linked (fqdn)",
                            "fullType": "string",
                            "name": "domain",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/attachedDomain/{domain}/purgeCache"
        },
        {
            "description": "restart operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Restart the virtual host of the attached domain",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain linked (fqdn)",
                            "fullType": "string",
                            "name": "domain",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/attachedDomain/{domain}/restart"
        },
        {
            "description": "List the hosting.web.boostHistory objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "History of your hosting boost",
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
                            "dataType": "datetime",
                            "description": "Filter the value of date property (=)",
                            "fullType": "datetime",
                            "name": "date",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "datetime[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/boostHistory"
        },
        {
            "description": "History of your boost requests",
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
                            "dataType": "datetime",
                            "description": "The date when the change has been requested",
                            "fullType": "datetime",
                            "name": "date",
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
                    "responseType": "hosting.web.boostHistory"
                }
            ],
            "path": "/hosting/web/{serviceName}/boostHistory/{date}"
        },
        {
            "description": "CDN service",
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.cdn"
                }
            ],
            "path": "/hosting/web/{serviceName}/cdn"
        },
        {
            "description": "serviceInfos operations",
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "services.Service"
                }
            ],
            "path": "/hosting/web/{serviceName}/cdn/serviceInfos"
        },
        {
            "description": "serviceInfosUpdate operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Alter this object properties",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "service.RenewType",
                            "description": "Renew type",
                            "fullType": "service.RenewType",
                            "name": "renew",
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
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/cdn/serviceInfosUpdate"
        },
        {
            "description": "terminate operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Terminate your cdn sub service",
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
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/cdn/terminate"
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/changeContact"
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
                            "dataType": "string",
                            "description": "Commentary about your termination request",
                            "fullType": "string",
                            "name": "commentary",
                            "paramType": "body",
                            "required": false
                        },
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
                            "description": "The termination token sent by mail to the admin contact",
                            "fullType": "string",
                            "name": "token",
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
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/confirmTermination"
        },
        {
            "description": "List the hosting.web.cron objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Crons on your hosting",
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
                            "description": "Filter the value of command property (like)",
                            "fullType": "string",
                            "name": "command",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of description property (like)",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of email property (like)",
                            "fullType": "string",
                            "name": "email",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.cron.LanguageEnum",
                            "description": "Filter the value of language property (=)",
                            "fullType": "hosting.web.cron.LanguageEnum",
                            "name": "language",
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
                    "description": "Create new cron",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Command to execute",
                            "fullType": "string",
                            "name": "command",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Description field for you",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Email used to receive error log ( stderr )",
                            "fullType": "string",
                            "name": "email",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Frequency ( crontab format ) define for the script ( minutes are ignored )",
                            "fullType": "string",
                            "name": "frequency",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "hosting.web.cron.LanguageEnum",
                            "description": "Cron language",
                            "fullType": "hosting.web.cron.LanguageEnum",
                            "name": "language",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "hosting.web.cron.StatusEnum",
                            "description": "Cron status",
                            "fullType": "hosting.web.cron.StatusEnum",
                            "name": "status",
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
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/cron"
        },
        {
            "description": "Hosting crons",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete cron",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Cron's id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "string"
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
                            "dataType": "long",
                            "description": "Cron's id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.cron"
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
                            "dataType": "hosting.web.cron",
                            "description": "New object properties",
                            "fullType": "hosting.web.cron",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "Cron's id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/cron/{id}"
        },
        {
            "description": "cronAvailableLanguage operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List available cron language",
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
                    "responseType": "hosting.web.cron.LanguageEnum[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/cronAvailableLanguage"
        },
        {
            "description": "List the hosting.web.database objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Databases linked to your hosting",
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
                            "dataType": "hosting.web.database.ModeEnum",
                            "description": "Filter the value of mode property (=)",
                            "fullType": "hosting.web.database.ModeEnum",
                            "name": "mode",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of name property (like)",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of server property (like)",
                            "fullType": "string",
                            "name": "server",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.database.DatabaseTypeEnum",
                            "description": "Filter the value of type property (=)",
                            "fullType": "hosting.web.database.DatabaseTypeEnum",
                            "name": "type",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of user property (like)",
                            "fullType": "string",
                            "name": "user",
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
                    "description": "Install new database",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.web.database.DatabaseCapabilitiesTypeEnum",
                            "description": "Type of your database",
                            "fullType": "hosting.web.database.DatabaseCapabilitiesTypeEnum",
                            "name": "capabilitie",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "password",
                            "description": "Database password",
                            "fullType": "password",
                            "name": "password",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.database.ExtraSqlQuotaEnum",
                            "description": "Quota assign to your database. Only for extraSql",
                            "fullType": "hosting.web.database.ExtraSqlQuotaEnum",
                            "name": "quota",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.database.DatabaseCreationTypeEnum",
                            "description": "Type you want for your database",
                            "fullType": "hosting.web.database.DatabaseCreationTypeEnum",
                            "name": "type",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Database user name. Must begin with your hosting login and must be in lower case",
                            "fullType": "string",
                            "name": "user",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "hosting.web.database.VersionEnum",
                            "description": "Version you want for your database following the type",
                            "fullType": "hosting.web.database.VersionEnum",
                            "name": "version",
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
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/database"
        },
        {
            "description": "Database",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete database",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.task"
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
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.database"
                }
            ],
            "path": "/hosting/web/{serviceName}/database/{name}"
        },
        {
            "description": "capabilities operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get available capabilities for this database",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.database.DatabaseCapabilities"
                }
            ],
            "path": "/hosting/web/{serviceName}/database/{name}/capabilities"
        },
        {
            "description": "changePassword operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request a password change",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "password",
                            "description": "The new database password",
                            "fullType": "password",
                            "name": "password",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/database/{name}/changePassword"
        },
        {
            "description": "List the hosting.web.database.dump objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Dump available for your databases",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                            "dataType": "datetime",
                            "description": "Filter the value of creationDate property (like)",
                            "fullType": "datetime",
                            "name": "creationDate",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "datetime",
                            "description": "Filter the value of deletionDate property (like)",
                            "fullType": "datetime",
                            "name": "deletionDate",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.database.dump.DateEnum",
                            "description": "Filter the value of type property (=)",
                            "fullType": "hosting.web.database.dump.DateEnum",
                            "name": "type",
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
                    "description": "Request the dump from your database",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.web.database.dump.DateEnum",
                            "description": "The date you want to dump",
                            "fullType": "hosting.web.database.dump.DateEnum",
                            "name": "date",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "boolean",
                            "description": "Send an email when dump will be available? Default: true",
                            "fullType": "boolean",
                            "name": "sendEmail",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/database/{name}/dump"
        },
        {
            "description": "Dump",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete dump before expiration date",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Dump id",
                            "fullType": "long",
                            "name": "id",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.task"
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
                            "dataType": "long",
                            "description": "Dump id",
                            "fullType": "long",
                            "name": "id",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.database.dump"
                }
            ],
            "path": "/hosting/web/{serviceName}/database/{name}/dump/{id}"
        },
        {
            "description": "restore operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request the restore from this dump",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Dump id",
                            "fullType": "long",
                            "name": "id",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/database/{name}/dump/{id}/restore"
        },
        {
            "description": "import operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Import a dump from an specific file uploaded with /me/documents",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Documents ID of the dump from /me/documents",
                            "fullType": "string",
                            "name": "documentId",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "boolean",
                            "description": "If database will be flushed before importing the dump. Default: false",
                            "fullType": "boolean",
                            "name": "flushDatabase",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "boolean",
                            "description": "Send an email when the import will be done? Default: false",
                            "fullType": "boolean",
                            "name": "sendEmail",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/database/{name}/import"
        },
        {
            "description": "request operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request specific operation for your database",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.web.database.RequestActionEnum",
                            "description": "Action you want to request",
                            "fullType": "hosting.web.database.RequestActionEnum",
                            "name": "action",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/database/{name}/request"
        },
        {
            "description": "restore operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request the restore from your database backup",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.web.database.dump.DateEnum",
                            "description": "The date you want to dump",
                            "fullType": "hosting.web.database.dump.DateEnum",
                            "name": "date",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "boolean",
                            "description": "Send an email when the restore will be done? Default: false",
                            "fullType": "boolean",
                            "name": "sendEmail",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/database/{name}/restore"
        },
        {
            "description": "statistics operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get statistics about this database",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                            "fullType": "string",
                            "name": "name",
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
                            "dataType": "hosting.web.StatisticsPeriodEnum",
                            "description": "Available periods for statistics",
                            "fullType": "hosting.web.StatisticsPeriodEnum",
                            "name": "period",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "hosting.web.database.StatisticsTypeEnum",
                            "description": "Types of statistics available for the database",
                            "fullType": "hosting.web.database.StatisticsTypeEnum",
                            "name": "type",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "complexType.ChartSerie<complexType.ChartTimestampValue>[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/database/{name}/statistics"
        },
        {
            "description": "databaseAvailableType operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List available database type",
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
                    "responseType": "hosting.web.database.DatabaseTypeEnum[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/databaseAvailableType"
        },
        {
            "description": "databaseAvailableVersion operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List available database version following a type",
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
                            "dataType": "hosting.web.database.DatabaseTypeEnum",
                            "description": "Type of the database",
                            "fullType": "hosting.web.database.DatabaseTypeEnum",
                            "name": "type",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.database.AvailableVersionStruct"
                }
            ],
            "path": "/hosting/web/{serviceName}/databaseAvailableVersion"
        },
        {
            "description": "databaseCreationCapabilities operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List available database you can install",
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
                    "responseType": "hosting.web.database.CreationDatabaseCapabilities[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/databaseCreationCapabilities"
        },
        {
            "description": "List the hosting.web.dump objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Dumps linked to your hosting",
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
                            "dataType": "datetime",
                            "description": "Filter the value of creationDate property (like)",
                            "fullType": "datetime",
                            "name": "creationDate",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of databaseName property (like)",
                            "fullType": "string",
                            "name": "databaseName",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "datetime",
                            "description": "Filter the value of deletionDate property (like)",
                            "fullType": "datetime",
                            "name": "deletionDate",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "boolean",
                            "description": "Filter the value of orphan property (like)",
                            "fullType": "boolean",
                            "name": "orphan",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/dump"
        },
        {
            "description": "Dump",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete dump before expiration date",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Dump id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.task"
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
                            "dataType": "long",
                            "description": "Dump id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.dump"
                }
            ],
            "path": "/hosting/web/{serviceName}/dump/{id}"
        },
        {
            "description": "Hosting automated emails",
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.email"
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
                            "dataType": "hosting.web.email",
                            "description": "New object properties",
                            "fullType": "hosting.web.email",
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
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/email"
        },
        {
            "description": "bounces operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request the last bounces",
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
                            "dataType": "long",
                            "description": "Maximum bounces limit ( default : 20 / max : 100 )",
                            "fullType": "long",
                            "name": "limit",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.mail.Bounce[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/email/bounces"
        },
        {
            "description": "request operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request specific operation for your email",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.web.mail.ActionEnum",
                            "description": "Action you want to request",
                            "fullType": "hosting.web.mail.ActionEnum",
                            "name": "action",
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
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/email/request"
        },
        {
            "description": "volumes operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request the history volume of email sent",
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
                    "responseType": "hosting.web.mail.VolumeHistory[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/email/volumes"
        },
        {
            "description": "List the hosting.web.emailoption objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Mail service linked to webhosting",
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
                    "responseType": "long[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/emailOption"
        },
        {
            "description": "Mail service linked to webhosting",
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
                            "dataType": "long",
                            "description": "Id of the object",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.emailoption"
                }
            ],
            "path": "/hosting/web/{serviceName}/emailOption/{id}"
        },
        {
            "description": "serviceInfos operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get the service properties",
                    "httpMethod": "GET",
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "services.Service"
                }
            ],
            "path": "/hosting/web/{serviceName}/emailOption/{id}/serviceInfos"
        },
        {
            "description": "terminate operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Terminate your email sub service",
                    "httpMethod": "POST",
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/emailOption/{id}/terminate"
        },
        {
            "description": "List the hosting.web.envVar objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Environment variables set on your webhosting",
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
                            "dataType": "hosting.web.envVar.TypeEnum",
                            "description": "Filter the value of type property (=)",
                            "fullType": "hosting.web.envVar.TypeEnum",
                            "name": "type",
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
                    "description": "Set a variable to this hosting",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of the new variable",
                            "fullType": "string",
                            "name": "key",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "hosting.web.envVar.TypeEnum",
                            "description": "Type of variable set",
                            "fullType": "hosting.web.envVar.TypeEnum",
                            "name": "type",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "password",
                            "description": "Value of the variable",
                            "fullType": "password",
                            "name": "value",
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
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/envVar"
        },
        {
            "description": "Environment variables set into your webhosting account",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove variable from hosting",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Name of the variable",
                            "fullType": "string",
                            "name": "key",
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
                    "responseType": "hosting.web.task"
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
                            "description": "Name of the variable",
                            "fullType": "string",
                            "name": "key",
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
                    "responseType": "hosting.web.envVar"
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
                            "dataType": "hosting.web.envVar",
                            "description": "New object properties",
                            "fullType": "hosting.web.envVar",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Name of the variable",
                            "fullType": "string",
                            "name": "key",
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
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/envVar/{key}"
        },
        {
            "description": "List the hosting.web.extrasqlperso objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Sqlperso linked to your hosting",
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
            "path": "/hosting/web/{serviceName}/extraSqlPerso"
        },
        {
            "description": "Sqlperso service",
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
                            "description": "The extraSqlPerso option name",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "hosting.web.extrasqlperso"
                }
            ],
            "path": "/hosting/web/{serviceName}/extraSqlPerso/{name}"
        },
        {
            "description": "databases operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get databases linked with this option",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The extraSqlPerso option name",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "string[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/extraSqlPerso/{name}/databases"
        },
        {
            "description": "serviceInfos operations",
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
                            "description": "The extraSqlPerso option name",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "services.Service"
                }
            ],
            "path": "/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfos"
        },
        {
            "description": "serviceInfosUpdate operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Alter this object properties",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "service.RenewType",
                            "description": "Renew type",
                            "fullType": "service.RenewType",
                            "name": "renew",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The extraSqlPerso option name",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/extraSqlPerso/{name}/serviceInfosUpdate"
        },
        {
            "description": "terminate operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Terminate your extraSqlPerso sub service",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The extraSqlPerso option name",
                            "fullType": "string",
                            "name": "name",
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
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/extraSqlPerso/{name}/terminate"
        },
        {
            "description": "List the hosting.web.freedom objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Freedom linked to this hosting account",
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
                            "dataType": "hosting.web.freedom.StatusEnum",
                            "description": "Filter the value of status property (=)",
                            "fullType": "hosting.web.freedom.StatusEnum",
                            "name": "status",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/freedom"
        },
        {
            "description": "Freedoms linked to this hosting account",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete the freedom",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Freedom domain",
                            "fullType": "string",
                            "name": "domain",
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
                            "description": "Freedom domain",
                            "fullType": "string",
                            "name": "domain",
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
                    "responseType": "hosting.web.freedom"
                }
            ],
            "path": "/hosting/web/{serviceName}/freedom/{domain}"
        },
        {
            "description": "List the hosting.web.indy objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "User of multidomain independent allowed on your hosting",
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
                            "description": "Filter the value of login property (like)",
                            "fullType": "string",
                            "name": "login",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "string[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/indy"
        },
        {
            "description": "Hosting indys",
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
                            "description": "Login of the multidomain independent user",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "hosting.web.indy"
                }
            ],
            "path": "/hosting/web/{serviceName}/indy/{login}"
        },
        {
            "description": "List the hosting.web.localSeo.account objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Local SEO accounts associated to the hosting",
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
                            "description": "Filter the value of email property (like)",
                            "fullType": "string",
                            "name": "email",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/localSeo/account"
        },
        {
            "description": "Local SEO accounts",
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
                            "dataType": "long",
                            "description": "Account id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.localSeo.account"
                }
            ],
            "path": "/hosting/web/{serviceName}/localSeo/account/{id}"
        },
        {
            "description": "login operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Login this location for SSO",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Account id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/localSeo/account/{id}/login"
        },
        {
            "description": "emailAvailability operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Check email availability for a local SEO order",
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
                            "description": "The email address to check",
                            "fullType": "string",
                            "name": "email",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.localSeo.EmailAvailability"
                }
            ],
            "path": "/hosting/web/{serviceName}/localSeo/emailAvailability"
        },
        {
            "description": "List the hosting.web.localSeo.location objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Local SEO locations associated to the hosting",
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
                    "responseType": "long[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/localSeo/location"
        },
        {
            "description": "Local SEO locations",
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
                            "dataType": "long",
                            "description": "Location id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.localSeo.location"
                }
            ],
            "path": "/hosting/web/{serviceName}/localSeo/location/{id}"
        },
        {
            "description": "serviceInfos operations",
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
                            "dataType": "long",
                            "description": "Location id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "services.Service"
                }
            ],
            "path": "/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfos"
        },
        {
            "description": "serviceInfosUpdate operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Alter this object properties",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "service.RenewType",
                            "description": "Renew type",
                            "fullType": "service.RenewType",
                            "name": "renew",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "Location id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/localSeo/location/{id}/serviceInfosUpdate"
        },
        {
            "description": "terminate operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Terminate a local SEO sub service",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Location id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/localSeo/location/{id}/terminate"
        },
        {
            "description": "List the hosting.web.module objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Module installed on your hosting",
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
                    "responseType": "long[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Install a new module",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The login for the admin account (may be a standard string or your email)",
                            "fullType": "string",
                            "name": "adminName",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "password",
                            "description": "The password for the admin account (at least 8 characters)",
                            "fullType": "password",
                            "name": "adminPassword",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.module.DependencyType[]",
                            "description": "The dependencies that we have to configure on your module. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example",
                            "fullType": "hosting.web.module.DependencyType[]",
                            "name": "dependencies",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "On which domain the module has to be available (it can be a multidomain or a subdomain) - if not set, the module will be available on your serviceName domain",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.module.LanguageEnum",
                            "description": "The language to set to your module",
                            "fullType": "hosting.web.module.LanguageEnum",
                            "name": "language",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "long",
                            "description": "ID of the module you want to install",
                            "fullType": "long",
                            "name": "moduleId",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Where to install the module, relative to your home directory",
                            "fullType": "string",
                            "name": "path",
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
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/module"
        },
        {
            "description": "Hosting modules installed",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete a module installed",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Installation ID",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.task"
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
                            "dataType": "long",
                            "description": "Installation ID",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.module"
                }
            ],
            "path": "/hosting/web/{serviceName}/module/{id}"
        },
        {
            "description": "changePassword operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Generate a new admin password for your module",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Installation ID",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/module/{id}/changePassword"
        },
        {
            "description": "List the hosting.web.ovhConfig objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Configuration used on your hosting",
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
                            "dataType": "boolean",
                            "description": "Filter the value of historical property (=)",
                            "fullType": "boolean",
                            "name": "historical",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of path property (like)",
                            "fullType": "string",
                            "name": "path",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/ovhConfig"
        },
        {
            "description": "Virtual service",
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
                            "dataType": "long",
                            "description": "Configuration's id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.ovhConfig"
                }
            ],
            "path": "/hosting/web/{serviceName}/ovhConfig/{id}"
        },
        {
            "description": "changeConfiguration operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Apply a new configuration on this path",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.web.ovhconfig.ContainerEnum",
                            "description": "Container to run this website",
                            "fullType": "hosting.web.ovhconfig.ContainerEnum",
                            "name": "container",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.ovhConfig.EngineNameEnum",
                            "description": "Version of engine you want",
                            "fullType": "hosting.web.ovhConfig.EngineNameEnum",
                            "name": "engineName",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.ovhConfig.AvailableEngineVersionEnum",
                            "description": "Name of engine you want",
                            "fullType": "hosting.web.ovhConfig.AvailableEngineVersionEnum",
                            "name": "engineVersion",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.ovhConfig.EnvironmentEnum",
                            "description": "Environment configuration you want",
                            "fullType": "hosting.web.ovhConfig.EnvironmentEnum",
                            "name": "environment",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.ovhConfig.HttpFirewallEnum",
                            "description": "Configuration you want for http firewall",
                            "fullType": "hosting.web.ovhConfig.HttpFirewallEnum",
                            "name": "httpFirewall",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "long",
                            "description": "Configuration's id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration"
        },
        {
            "description": "rollback operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Rollback to an old configuration",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "The configuration's id you want to rollback",
                            "fullType": "long",
                            "name": "rollbackId",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "Configuration's id",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/ovhConfig/{id}/rollback"
        },
        {
            "description": "ovhConfigCapabilities operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get the list of versions and container image available on your hosting",
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
                    "responseType": "hosting.web.OvhConfigCapabilities[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/ovhConfigCapabilities"
        },
        {
            "description": "ovhConfigRefresh operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Synchronize the configuration listing with content on your hosting",
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
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/ovhConfigRefresh"
        },
        {
            "description": "List the hosting.web.ownLogs objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Own Logs linked to your hosting",
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
                            "description": "Filter the value of fqdn property (like)",
                            "fullType": "string",
                            "name": "fqdn",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/ownLogs"
        },
        {
            "description": "Hosting own logs",
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
                            "dataType": "long",
                            "description": "Id of the object",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.ownLogs"
                }
            ],
            "path": "/hosting/web/{serviceName}/ownLogs/{id}"
        },
        {
            "description": "List the hosting.web.userLogs objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "User allowed to connect into your logs interface",
                    "httpMethod": "GET",
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of login property (like)",
                            "fullType": "string",
                            "name": "login",
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
                    "description": "Create new userLogs",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Description field for you",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The userLogs login used to connect to logs.ovh.net",
                            "fullType": "string",
                            "name": "login",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "OwnLogs where this userLogs will be enable. Default : main domain ownlogs",
                            "fullType": "long",
                            "name": "ownLogsId",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "password",
                            "description": "The new userLogs password",
                            "fullType": "password",
                            "name": "password",
                            "paramType": "body",
                            "required": true
                        },
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/ownLogs/{id}/userLogs"
        },
        {
            "description": "Hosting users logs",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete the userLogs",
                    "httpMethod": "DELETE",
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
                            "description": "The userLogs login used to connect to logs.ovh.net",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "string"
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
                            "dataType": "long",
                            "description": "Id of the object",
                            "fullType": "long",
                            "name": "id",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The userLogs login used to connect to logs.ovh.net",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "hosting.web.userLogs"
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
                            "dataType": "hosting.web.userLogs",
                            "description": "New object properties",
                            "fullType": "hosting.web.userLogs",
                            "paramType": "body",
                            "required": true
                        },
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
                            "description": "The userLogs login used to connect to logs.ovh.net",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}"
        },
        {
            "description": "changePassword operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request a password change",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "password",
                            "description": "The new userLogs password",
                            "fullType": "password",
                            "name": "password",
                            "paramType": "body",
                            "required": true
                        },
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
                            "description": "The userLogs login used to connect to logs.ovh.net",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword"
        },
        {
            "description": "privateDatabaseCreationCapabilities operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List available privateDatabase you can install",
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
                    "responseType": "hosting.web.database.CreationDatabaseCapabilities[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/privateDatabaseCreationCapabilities"
        },
        {
            "description": "privateDatabases operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List linked privateDatabases",
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
            "path": "/hosting/web/{serviceName}/privateDatabases"
        },
        {
            "description": "request operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request specific operation for your hosting",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.web.RequestActionEnum",
                            "description": "Action you want to request",
                            "fullType": "hosting.web.RequestActionEnum",
                            "name": "action",
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
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/request"
        },
        {
            "description": "requestBoost operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Allows you to boost your offer.",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.web.OfferEnum",
                            "description": "The boost offer of your choice. Set to null to disable boost.",
                            "fullType": "hosting.web.OfferEnum",
                            "name": "offer",
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
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/requestBoost"
        },
        {
            "description": "restoreSnapshot operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Restore this snapshot ALL CURRENT DATA WILL BE REPLACED BY YOUR SNAPSHOT",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "hosting.web.backup.TypeEnum",
                            "description": "The backup you want to restore",
                            "fullType": "hosting.web.backup.TypeEnum",
                            "name": "backup",
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
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/restoreSnapshot"
        },
        {
            "description": "List the hosting.web.runtime objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List of runtime configurations to your hosting",
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
                            "description": "Filter the value of name property (like)",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.runtime.TypeEnum",
                            "description": "Filter the value of type property (=)",
                            "fullType": "hosting.web.runtime.TypeEnum",
                            "name": "type",
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
                    "description": "Request the creation of a new runtime configuration",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The client application bootstrap script",
                            "fullType": "string",
                            "name": "appBootstrap",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.runtime.EnvEnum",
                            "description": "The client application environment",
                            "fullType": "hosting.web.runtime.EnvEnum",
                            "name": "appEnv",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string[]",
                            "description": "The attached domains fqdn to link to this runtime configuration",
                            "fullType": "string[]",
                            "name": "attachedDomains",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "boolean",
                            "description": "Set if the runtime configuration is the one by default for the hosting",
                            "fullType": "boolean",
                            "name": "isDefault",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "The custom display name of the runtime configuration",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "The client application public directory",
                            "fullType": "string",
                            "name": "publicDir",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.runtime.TypeEnum",
                            "description": "The backend type of a runtime configuration",
                            "fullType": "hosting.web.runtime.TypeEnum",
                            "name": "type",
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
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/runtime"
        },
        {
            "description": "The runtime configuration of an attached domain for cloud web offer",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete a runtime configuration of an hosting",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "The runtime configuration ID",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.task"
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
                            "dataType": "long",
                            "description": "The runtime configuration ID",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.runtime"
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
                            "dataType": "hosting.web.runtime",
                            "description": "New object properties",
                            "fullType": "hosting.web.runtime",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "The runtime configuration ID",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/runtime/{id}"
        },
        {
            "description": "attachedDomains operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get the attached domains linked to this runtime configuration",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "The runtime configuration ID",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "string[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/runtime/{id}/attachedDomains"
        },
        {
            "description": "runtimeAvailableTypes operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List available runtime configurations available backend types",
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
                            "description": "Specific programming language to filter",
                            "fullType": "string",
                            "name": "language",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "hosting.web.runtime.TypeEnum[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/runtimeAvailableTypes"
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
                            "description": "The internal name of your hosting",
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/serviceInfos"
        },
        {
            "description": "Hostedssl",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete the HostedSsl on your hosting",
                    "httpMethod": "DELETE",
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
                    "responseType": "hosting.web.ssl"
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.ssl"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Create the free default HostedSsl OR import your proper SSL on your hosting",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "text",
                            "description": "If you want import your proper SSL, give the certificate here and the associated key after (optional)",
                            "fullType": "text",
                            "name": "certificate",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "text",
                            "description": "If you want import your proper SSL, give the chain linked to the associated certificate (optional)",
                            "fullType": "text",
                            "name": "chain",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "text",
                            "description": "If you want import your proper SSL, give the key here and the associated certificate before (optional)",
                            "fullType": "text",
                            "name": "key",
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
                        }
                    ],
                    "responseType": "hosting.web.ssl"
                }
            ],
            "path": "/hosting/web/{serviceName}/ssl"
        },
        {
            "description": "domains operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get domains linked to this HostedSsl",
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
            "path": "/hosting/web/{serviceName}/ssl/domains"
        },
        {
            "description": "regenerate operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request the regeneration of your HostedSsl",
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
                        }
                    ],
                    "responseType": "hosting.web.ssl"
                }
            ],
            "path": "/hosting/web/{serviceName}/ssl/regenerate"
        },
        {
            "description": "Hostedssl Report",
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "hosting.web.ssl.report"
                }
            ],
            "path": "/hosting/web/{serviceName}/ssl/report"
        },
        {
            "description": "statistics operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get statistics about this web hosting",
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
                            "dataType": "hosting.web.StatisticsPeriodEnum",
                            "description": "",
                            "fullType": "hosting.web.StatisticsPeriodEnum",
                            "name": "period",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "hosting.web.StatisticsTypeEnum",
                            "description": "",
                            "fullType": "hosting.web.StatisticsTypeEnum",
                            "name": "type",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "complexType.ChartSerie<complexType.ChartTimestampValue>[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/statistics"
        },
        {
            "description": "List the hosting.web.task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Tasks attached to your hosting",
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
                            "description": "Filter the value of function property (like)",
                            "fullType": "string",
                            "name": "function",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "hosting.web.task.StatusEnum",
                            "description": "Filter the value of status property (=)",
                            "fullType": "hosting.web.task.StatusEnum",
                            "name": "status",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/hosting/web/{serviceName}/tasks"
        },
        {
            "description": "Tasks",
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
                            "dataType": "long",
                            "description": "the id of the task",
                            "fullType": "long",
                            "name": "id",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/tasks/{id}"
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
                            "description": "The internal name of your hosting",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/terminate"
        },
        {
            "description": "token operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )",
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
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/token"
        },
        {
            "description": "List the hosting.web.user objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "User allowed to connect into your hosting",
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
                            "description": "Filter the value of home property (like)",
                            "fullType": "string",
                            "name": "home",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of login property (like)",
                            "fullType": "string",
                            "name": "login",
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
                    "description": "Create new ftp/ssh user",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Home directory",
                            "fullType": "string",
                            "name": "home",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Login use for your new user",
                            "fullType": "string",
                            "name": "login",
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
                            "dataType": "hosting.web.user.SshStateEnum",
                            "description": "Ssh state for this user. Default: none",
                            "fullType": "hosting.web.user.SshStateEnum",
                            "name": "sshState",
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
                        }
                    ],
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/user"
        },
        {
            "description": "Hosting users",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete ftp/ssh user",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Login used to connect on FTP and SSH",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "hosting.web.task"
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
                            "description": "Login used to connect on FTP and SSH",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "hosting.web.user"
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
                            "dataType": "hosting.web.user",
                            "description": "New object properties",
                            "fullType": "hosting.web.user",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Login used to connect on FTP and SSH",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/user/{login}"
        },
        {
            "description": "changePassword operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request a password change",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "password",
                            "description": "The user's new password",
                            "fullType": "password",
                            "name": "password",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Login used to connect on FTP and SSH",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "hosting.web.task"
                }
            ],
            "path": "/hosting/web/{serviceName}/user/{login}/changePassword"
        },
        {
            "description": "List the hosting.web.userLogs objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "User allowed to connect into your logs interface",
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
                            "description": "Filter the value of login property (like)",
                            "fullType": "string",
                            "name": "login",
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
                    "description": "Create new userLogs",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Description field for you",
                            "fullType": "string",
                            "name": "description",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The userLogs login used to connect to logs.ovh.net",
                            "fullType": "string",
                            "name": "login",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "OwnLogs where this userLogs will be enable. Default : main domain ownlogs",
                            "fullType": "long",
                            "name": "ownLogsId",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "password",
                            "description": "The new userLogs password",
                            "fullType": "password",
                            "name": "password",
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
                        }
                    ],
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/userLogs"
        },
        {
            "description": "Hosting users logs",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Delete the userLogs",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The userLogs login used to connect to logs.ovh.net",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "string"
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
                            "description": "The userLogs login used to connect to logs.ovh.net",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "hosting.web.userLogs"
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
                            "dataType": "hosting.web.userLogs",
                            "description": "New object properties",
                            "fullType": "hosting.web.userLogs",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The userLogs login used to connect to logs.ovh.net",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "void"
                }
            ],
            "path": "/hosting/web/{serviceName}/userLogs/{login}"
        },
        {
            "description": "changePassword operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Request a password change",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "password",
                            "description": "The new userLogs password",
                            "fullType": "password",
                            "name": "password",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The userLogs login used to connect to logs.ovh.net",
                            "fullType": "string",
                            "name": "login",
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
                    "responseType": "string"
                }
            ],
            "path": "/hosting/web/{serviceName}/userLogs/{login}/changePassword"
        },
        {
            "description": "userLogsToken operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Get a temporary token to access the your web hosting logs interface",
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
                            "description": "Specific attached domain to be included in the scope of your token",
                            "fullType": "string",
                            "name": "attachedDomain",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "boolean",
                            "description": "Whether to limit the use of the token to the remote IPv4 of API caller",
                            "fullType": "boolean",
                            "name": "remoteCheck",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "long",
                            "description": "Expiration of your token (in seconds)",
                            "fullType": "long",
                            "name": "ttl",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "password"
                }
            ],
            "path": "/hosting/web/{serviceName}/userLogsToken"
        }
    ],
    "basePath": "https://ca.api.ovh.com/1.0",
    "models": {
        "complexType.ChartSerie<T>": {
            "description": "A value set tagged with its unit and serie name",
            "generics": [
                "T"
            ],
            "id": "ChartSerie",
            "namespace": "complexType",
            "properties": {
                "serieName": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "unit": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "values": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "T[]"
                }
            }
        },
        "complexType.ChartTimestampValue": {
            "description": "A timestamp associated to a value",
            "id": "ChartTimestampValue",
            "namespace": "complexType",
            "properties": {
                "timestamp": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "value": {
                    "canBeNull": true,
                    "readOnly": false,
                    "required": false,
                    "type": "double"
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
        "hosting.web.Address": {
            "description": "Url and port of a service",
            "id": "Address",
            "namespace": "hosting.web",
            "properties": {
                "port": {
                    "canBeNull": false,
                    "description": "Port to use to access to the service",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "url": {
                    "canBeNull": false,
                    "description": "Url to contact the service",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.AvailableOfferStruct": {
            "description": "Struct which describs an boost offer from a service",
            "id": "AvailableOfferStruct",
            "namespace": "hosting.web",
            "properties": {
                "offer": {
                    "canBeNull": false,
                    "description": "Available boost offer",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.OfferEnum"
                },
                "price": {
                    "canBeNull": false,
                    "description": "The price in month for this boost offer",
                    "readOnly": false,
                    "required": false,
                    "type": "order.Price"
                }
            }
        },
        "hosting.web.Capabilities": {
            "description": "Struct which describs an offer",
            "id": "Capabilities",
            "namespace": "hosting.web",
            "properties": {
                "attachedDomains": {
                    "canBeNull": false,
                    "description": "Number of domains you can attach to your hosting",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "crontab": {
                    "canBeNull": false,
                    "description": "Does the offer allow crontab",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "databaseEngines": {
                    "canBeNull": false,
                    "description": "Number of database engines allowed for your hosting",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "databases": {
                    "canBeNull": false,
                    "description": "Describe all databases type you can have",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.database.CreationDatabaseCapabilities[]"
                },
                "disk": {
                    "canBeNull": true,
                    "description": "Disk capacity and type available for your hosting ( null for unlimited )",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.DiskType"
                },
                "emails": {
                    "canBeNull": false,
                    "description": "Describe all email offer you can have",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.CreationEmailCapabilities"
                },
                "envVars": {
                    "canBeNull": false,
                    "description": "Number of environment variables allowed for your hosting",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "extraUsers": {
                    "canBeNull": false,
                    "description": "Number of ftp user you can create",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "filesBrowser": {
                    "canBeNull": false,
                    "description": "Does the offer allow access to web files browser?",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "highlight": {
                    "canBeNull": true,
                    "description": "Marketing information about the current offer",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.HighLightEnum"
                },
                "languages": {
                    "canBeNull": false,
                    "description": "Language available for cron script",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.CronLanguageAvailable"
                },
                "moduleOneClick": {
                    "canBeNull": false,
                    "description": "Does the offer allow 1-click modules?",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "privateDatabases": {
                    "canBeNull": false,
                    "description": "Describe all privateDatabases type you can have",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.database.CreationDatabaseCapabilities[]"
                },
                "runtimes": {
                    "canBeNull": false,
                    "description": "Number of runtimes allowed for your hosting",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "sitesRecommended": {
                    "canBeNull": true,
                    "description": "Number of sites recommended for your hosting ( -1 for unlimited )",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "ssh": {
                    "canBeNull": false,
                    "description": "Does the offer allow SSH access",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "traffic": {
                    "canBeNull": true,
                    "description": "Traffic quota size for your hosting ( null for unlimited )",
                    "readOnly": false,
                    "required": false,
                    "type": "complexType.UnitAndValue<double>"
                }
            }
        },
        "hosting.web.CountriesIp": {
            "description": "Available clusterIp by country",
            "id": "CountriesIp",
            "namespace": "hosting.web",
            "properties": {
                "country": {
                    "canBeNull": false,
                    "description": "The whois country of the ip",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.CountryEnum"
                },
                "ip": {
                    "canBeNull": false,
                    "description": "The cluster ip",
                    "readOnly": false,
                    "required": false,
                    "type": "ip"
                },
                "ipv6": {
                    "canBeNull": true,
                    "description": "The cluster ipv6",
                    "readOnly": false,
                    "required": false,
                    "type": "ip"
                }
            }
        },
        "hosting.web.CountryEnum": {
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
            "enumType": "string",
            "id": "CountryEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.CreationEmailCapabilities": {
            "description": "Struct which describes mail offer available and his quota",
            "id": "CreationEmailCapabilities",
            "namespace": "hosting.web",
            "properties": {
                "available": {
                    "canBeNull": false,
                    "description": "Number of email available for creation",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "quota": {
                    "canBeNull": false,
                    "description": "Email account capacity",
                    "readOnly": false,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                }
            }
        },
        "hosting.web.CronLanguageAvailable": {
            "description": "Language available for cron script",
            "id": "CronLanguageAvailable",
            "namespace": "hosting.web",
            "properties": {
                "nodejs": {
                    "canBeNull": false,
                    "description": "NodeJS versions",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.NodejsVersionAvailableEnum[]"
                },
                "php": {
                    "canBeNull": false,
                    "description": "Php versions",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.PhpVersionAvailableEnum[]"
                },
                "python": {
                    "canBeNull": false,
                    "description": "Python versions",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.PythonVersionAvailableEnum[]"
                },
                "ruby": {
                    "canBeNull": false,
                    "description": "Ruby versions",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.RubyVersionAvailableEnum[]"
                }
            }
        },
        "hosting.web.DatacenterEnum": {
            "description": "Available datacenters",
            "enum": [
                "bhs1",
                "gra1",
                "gra2",
                "gra3",
                "p19"
            ],
            "enumType": "string",
            "id": "DatacenterEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.DiskType": {
            "description": "Disk properties (size and type of disk)",
            "id": "DiskType",
            "namespace": "hosting.web",
            "properties": {
                "type": {
                    "canBeNull": false,
                    "description": "Type of the disk",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.DiskTypeEnum"
                },
                "unit": {
                    "canBeNull": false,
                    "description": "Unit for disk size",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "value": {
                    "canBeNull": false,
                    "description": "Size of the disk",
                    "readOnly": false,
                    "required": false,
                    "type": "double"
                }
            }
        },
        "hosting.web.DiskTypeEnum": {
            "description": "Disk type available",
            "enum": [
                "HDD",
                "SSD"
            ],
            "enumType": "string",
            "id": "DiskTypeEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.HighLightEnum": {
            "description": "Highlight tips for offer",
            "enum": [
                "best-seller",
                "new"
            ],
            "enumType": "string",
            "id": "HighLightEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.ModuleList": {
            "description": "A module specifically packaged by OVH",
            "id": "ModuleList",
            "namespace": "hosting.web",
            "properties": {
                "active": {
                    "canBeNull": false,
                    "description": "Is the module available?",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "adminNameType": {
                    "canBeNull": false,
                    "description": "The type of the admin name",
                    "fullType": "hosting.web.module.AdminNameTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.module.AdminNameTypeEnum"
                },
                "author": {
                    "canBeNull": false,
                    "description": "The packager of this module for OVH",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "branch": {
                    "canBeNull": false,
                    "description": "The branch of the module",
                    "fullType": "hosting.web.module.BranchEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.module.BranchEnum"
                },
                "id": {
                    "canBeNull": false,
                    "description": "The ID of the module",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "keywords": {
                    "canBeNull": false,
                    "description": "The keywords for this module",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "language": {
                    "canBeNull": false,
                    "description": "All available languages for this module",
                    "fullType": "hosting.web.module.LanguageEnum[]",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.module.LanguageEnum[]"
                },
                "languageRequirement": {
                    "canBeNull": false,
                    "description": "Minimal language version required to run this module",
                    "fullType": "complexType.UnitAndValue<string>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<string>"
                },
                "latest": {
                    "canBeNull": false,
                    "description": "Is this the latest version available?",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "name": {
                    "canBeNull": false,
                    "description": "The name of the module",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "size": {
                    "canBeNull": false,
                    "description": "Size of the module",
                    "fullType": "complexType.UnitAndValue<double>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<double>"
                },
                "upgradeFrom": {
                    "canBeNull": false,
                    "description": "The IDs of the module you can upgrade to",
                    "fullType": "long[]",
                    "readOnly": true,
                    "required": false,
                    "type": "long[]"
                },
                "version": {
                    "canBeNull": false,
                    "description": "The version of the module",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.NodejsVersionAvailableEnum": {
            "description": "Different NodeJs versions available",
            "enum": [
                "nodejs-10",
                "nodejs-11",
                "nodejs-12",
                "nodejs-8",
                "nodejs-9"
            ],
            "enumType": "string",
            "id": "NodejsVersionAvailableEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.OfferCapabilitiesEnum": {
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
            "enumType": "string",
            "id": "OfferCapabilitiesEnum",
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
        "hosting.web.OperatingSystemEnum": {
            "description": "Hosting's OS",
            "enum": [
                "linux"
            ],
            "enumType": "string",
            "id": "OperatingSystemEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.OvhConfigCapabilities": {
            "description": "Struct which describes version and container image available",
            "id": "OvhConfigCapabilities",
            "namespace": "hosting.web",
            "properties": {
                "containerImage": {
                    "canBeNull": false,
                    "description": "Container image available",
                    "readOnly": false,
                    "required": false,
                    "type": "string[]"
                },
                "version": {
                    "canBeNull": false,
                    "description": "PHP version",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.ovhConfig.AvailableEngineVersionEnum"
                }
            }
        },
        "hosting.web.PhpVersion": {
            "description": "State of available php versions for this account",
            "id": "PhpVersion",
            "namespace": "hosting.web",
            "properties": {
                "support": {
                    "canBeNull": false,
                    "description": "Current support of this php version",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.PhpVersionStateEnum"
                },
                "version": {
                    "canBeNull": false,
                    "description": "PHP version",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.PhpVersionAvailableEnum": {
            "description": "Different PHP versions available",
            "enum": [
                "phpfpm-5.6",
                "phpfpm-7.0",
                "phpfpm-7.1",
                "phpfpm-7.2",
                "phpfpm-7.3",
                "phpfpm-7.4"
            ],
            "enumType": "string",
            "id": "PhpVersionAvailableEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.PhpVersionStateEnum": {
            "description": "Different support of PHP versions",
            "enum": [
                "BETA",
                "END_OF_LIFE",
                "SECURITY_FIXES",
                "SUPPORTED"
            ],
            "enumType": "string",
            "id": "PhpVersionStateEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.PythonVersionAvailableEnum": {
            "description": "Different Python versions available",
            "enum": [
                "python-2",
                "python-3"
            ],
            "enumType": "string",
            "id": "PythonVersionAvailableEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.RequestActionEnum": {
            "description": "Types of action you can request for your web hosting",
            "enum": [
                "CHECK_QUOTA",
                "FLUSH_CACHE",
                "SCAN_ANTIHACK"
            ],
            "enumType": "string",
            "id": "RequestActionEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.ResourceEnum": {
            "description": "Hosting's type",
            "enum": [
                "bestEffort",
                "cloud",
                "dedicated",
                "shared"
            ],
            "enumType": "string",
            "id": "ResourceEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.RubyVersionAvailableEnum": {
            "description": "Different Ruby versions available",
            "enum": [
                "ruby-2.4",
                "ruby-2.5",
                "ruby-2.6"
            ],
            "enumType": "string",
            "id": "RubyVersionAvailableEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.Service": {
            "description": "Web Hosting",
            "id": "Service",
            "namespace": "hosting.web",
            "properties": {
                "availableBoostOffer": {
                    "canBeNull": false,
                    "description": "Available offers for boost option",
                    "fullType": "hosting.web.AvailableOfferStruct[]",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.AvailableOfferStruct[]"
                },
                "boostOffer": {
                    "canBeNull": true,
                    "description": "Current boost offer",
                    "fullType": "hosting.web.OfferCapabilitiesEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.OfferCapabilitiesEnum"
                },
                "cluster": {
                    "canBeNull": false,
                    "description": "Cluster name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "clusterIp": {
                    "canBeNull": true,
                    "description": "This direct ip to your cluster ( usefull for application like api )",
                    "fullType": "ip",
                    "readOnly": true,
                    "required": false,
                    "type": "ip"
                },
                "clusterIpv6": {
                    "canBeNull": true,
                    "description": "This direct ipv6 to your cluster ( usefull for application like api )",
                    "fullType": "ip",
                    "readOnly": true,
                    "required": false,
                    "type": "ip"
                },
                "countriesIp": {
                    "canBeNull": true,
                    "description": "Available clusterIp by countries",
                    "fullType": "hosting.web.CountriesIp[]",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.CountriesIp[]"
                },
                "datacenter": {
                    "canBeNull": false,
                    "description": "Datacenter where this account is located",
                    "fullType": "hosting.web.DatacenterEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.DatacenterEnum"
                },
                "displayName": {
                    "canBeNull": true,
                    "description": "Set the name displayed in ManagerV6 for your hosting (max 50 chars)",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "filer": {
                    "canBeNull": true,
                    "description": "Filer name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "hasCdn": {
                    "canBeNull": true,
                    "description": "Has a CDN service linked on the hosting",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "hasHostedSsl": {
                    "canBeNull": true,
                    "description": "Has a HostedSSL service linked on the hosting",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "home": {
                    "canBeNull": false,
                    "description": "Path of your home",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "hostingIp": {
                    "canBeNull": true,
                    "description": "The recommended ip for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL )",
                    "fullType": "ip",
                    "readOnly": true,
                    "required": false,
                    "type": "ip"
                },
                "hostingIpv6": {
                    "canBeNull": true,
                    "description": "The recommended ipv6 for your hosting ( depends on hosting's linked services, e.g CDN or hostedSSL )",
                    "fullType": "ip",
                    "readOnly": true,
                    "required": false,
                    "type": "ip"
                },
                "lastOvhConfigScan": {
                    "canBeNull": true,
                    "description": "/hosting/web/{serviceName}/ovhConfig is stored in cache. This date is the last refresh of this data",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "offer": {
                    "canBeNull": false,
                    "description": "Hosting offer",
                    "fullType": "hosting.web.OfferCapabilitiesEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.OfferCapabilitiesEnum"
                },
                "operatingSystem": {
                    "canBeNull": false,
                    "description": "Hosting's OS",
                    "fullType": "hosting.web.OperatingSystemEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.OperatingSystemEnum"
                },
                "phpVersions": {
                    "canBeNull": false,
                    "description": "State of available php versions for this account",
                    "fullType": "hosting.web.PhpVersion[]",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.PhpVersion[]"
                },
                "primaryLogin": {
                    "canBeNull": false,
                    "description": "Hosting's main login",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "quotaSize": {
                    "canBeNull": false,
                    "description": "Space allowed",
                    "fullType": "complexType.UnitAndValue<double>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<double>"
                },
                "quotaUsed": {
                    "canBeNull": true,
                    "description": "Space used",
                    "fullType": "complexType.UnitAndValue<double>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<double>"
                },
                "recommendedOffer": {
                    "canBeNull": true,
                    "description": "If your offer is old, return a recommended offer to migrate on",
                    "fullType": "hosting.web.OfferEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.OfferEnum"
                },
                "resourceType": {
                    "canBeNull": false,
                    "description": "Hosting resource type",
                    "fullType": "hosting.web.ResourceEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.ResourceEnum"
                },
                "serviceManagementAccess": {
                    "canBeNull": false,
                    "description": "URLs to use to manage your webhosting",
                    "fullType": "hosting.web.ServiceAccess",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.ServiceAccess"
                },
                "serviceName": {
                    "canBeNull": false,
                    "description": "Service name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "state": {
                    "canBeNull": false,
                    "description": "State of your hosting",
                    "fullType": "hosting.web.StateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.StateEnum"
                },
                "token": {
                    "canBeNull": true,
                    "description": "Use to link an external domain. ( This token has to be insert into a TXT field on your dns zone with ovhcontrol subdomain )",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "trafficQuotaSize": {
                    "canBeNull": true,
                    "description": "Traffic quota allowed ( null = unlimited )",
                    "fullType": "complexType.UnitAndValue<double>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<double>"
                },
                "trafficQuotaUsed": {
                    "canBeNull": true,
                    "description": "Traffic quota used",
                    "fullType": "complexType.UnitAndValue<double>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<double>"
                },
                "updates": {
                    "canBeNull": false,
                    "description": "List of updates on your hosting",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                }
            }
        },
        "hosting.web.ServiceAccess": {
            "description": "Different url to manage your service",
            "id": "ServiceAccess",
            "namespace": "hosting.web",
            "properties": {
                "ftp": {
                    "canBeNull": false,
                    "description": "Address with url and port to manage files by ftp",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.Address"
                },
                "http": {
                    "canBeNull": false,
                    "description": "Address to see your webhosting without domain",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.Address"
                },
                "ssh": {
                    "canBeNull": false,
                    "description": "Address with url and port to manage webhosting by ssh",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.Address"
                }
            }
        },
        "hosting.web.StateEnum": {
            "description": "Hosting's state",
            "enum": [
                "active",
                "bloqued",
                "maintenance"
            ],
            "enumType": "string",
            "id": "StateEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.StatisticsPeriodEnum": {
            "description": "Available periods for statistics",
            "enum": [
                "daily",
                "monthly",
                "weekly",
                "yearly"
            ],
            "enumType": "string",
            "id": "StatisticsPeriodEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.StatisticsTypeEnum": {
            "description": "Types of statistics available for the web hosting",
            "enum": [
                "in.ftpCommands",
                "in.httpHits",
                "in.httpMeanResponseTime",
                "out.tcpConn",
                "sys.cpuUsage",
                "sys.workerSpawnOverload"
            ],
            "enumType": "string",
            "id": "StatisticsTypeEnum",
            "namespace": "hosting.web"
        },
        "hosting.web.attachedDomain": {
            "description": "Virtual service",
            "id": "attachedDomain",
            "namespace": "hosting.web",
            "properties": {
                "cdn": {
                    "canBeNull": false,
                    "description": "Is linked to the hosting cdn",
                    "fullType": "hosting.web.attachedDomain.CdnEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.attachedDomain.CdnEnum"
                },
                "domain": {
                    "canBeNull": false,
                    "description": "Domain linked (fqdn)",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "firewall": {
                    "canBeNull": false,
                    "description": "Firewall state for this path",
                    "fullType": "hosting.web.attachedDomain.FirewallEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.attachedDomain.FirewallEnum"
                },
                "ipLocation": {
                    "canBeNull": true,
                    "description": "IP location of the domain linked",
                    "fullType": "hosting.web.CountryEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.CountryEnum"
                },
                "ownLog": {
                    "canBeNull": true,
                    "description": "Put domain for separate the logs",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "path": {
                    "canBeNull": false,
                    "description": "Domain path, relative to your home directory",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "runtimeId": {
                    "canBeNull": true,
                    "description": "The runtime configuration ID used on this domain",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "ssl": {
                    "canBeNull": true,
                    "description": "Put domain in ssl certificate",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The domain status",
                    "fullType": "hosting.web.attachedDomain.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.attachedDomain.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this domain",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.attachedDomain.CdnEnum": {
            "description": "Attached domain cdn enum",
            "enum": [
                "active",
                "none"
            ],
            "enumType": "string",
            "id": "CdnEnum",
            "namespace": "hosting.web.attachedDomain"
        },
        "hosting.web.attachedDomain.FirewallEnum": {
            "description": "Attached domain firewall enum",
            "enum": [
                "active",
                "none"
            ],
            "enumType": "string",
            "id": "FirewallEnum",
            "namespace": "hosting.web.attachedDomain"
        },
        "hosting.web.attachedDomain.StatusEnum": {
            "description": "AttachedDomain status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.attachedDomain"
        },
        "hosting.web.backup.TypeEnum": {
            "description": "List of backup types",
            "enum": [
                "daily.1",
                "daily.2",
                "daily.3",
                "weekly.1",
                "weekly.2"
            ],
            "enumType": "string",
            "id": "TypeEnum",
            "namespace": "hosting.web.backup"
        },
        "hosting.web.boostHistory": {
            "description": "History of your boost requests",
            "id": "boostHistory",
            "namespace": "hosting.web",
            "properties": {
                "accountId": {
                    "canBeNull": false,
                    "description": "Account who requested the change",
                    "fullType": "coreTypes.AccountId:string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "boostOffer": {
                    "canBeNull": true,
                    "description": "Boost offer used",
                    "fullType": "hosting.web.OfferCapabilitiesEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.OfferCapabilitiesEnum"
                },
                "date": {
                    "canBeNull": false,
                    "description": "The date when the change has been requested",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "offer": {
                    "canBeNull": false,
                    "description": "Offer when the change was made",
                    "fullType": "hosting.web.OfferCapabilitiesEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.OfferCapabilitiesEnum"
                }
            }
        },
        "hosting.web.cdn": {
            "description": "CDN service",
            "id": "cdn",
            "namespace": "hosting.web",
            "properties": {
                "domain": {
                    "canBeNull": false,
                    "description": "Domain of this CDN",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "free": {
                    "canBeNull": false,
                    "description": "Option CDN free with the hosting ?",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Status of the CDN option",
                    "fullType": "hosting.web.cdn.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.cdn.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this CDN",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Type of the CDN",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "version": {
                    "canBeNull": false,
                    "description": "Version of the CDN",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.cdn.StatusEnum": {
            "description": "Cdn status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "flushing"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.cdn"
        },
        "hosting.web.cron": {
            "description": "Hosting crons",
            "id": "cron",
            "namespace": "hosting.web",
            "properties": {
                "command": {
                    "canBeNull": false,
                    "description": "Command to execute",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "description": {
                    "canBeNull": true,
                    "description": "Description field for you",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "email": {
                    "canBeNull": true,
                    "description": "Email used to receive error log ( stderr )",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "frequency": {
                    "canBeNull": false,
                    "description": "Frequency ( crontab format ) defined for the script ( minutes are ignored )",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Cron's id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "language": {
                    "canBeNull": false,
                    "description": "Cron language",
                    "fullType": "hosting.web.cron.LanguageEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.cron.LanguageEnum"
                },
                "state": {
                    "canBeNull": false,
                    "description": "Cron state",
                    "fullType": "hosting.web.cron.StateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.cron.StateEnum"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Cron status",
                    "fullType": "hosting.web.cron.StatusEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.cron.StatusEnum"
                }
            }
        },
        "hosting.web.cron.LanguageEnum": {
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
            "enumType": "string",
            "id": "LanguageEnum",
            "namespace": "hosting.web.cron"
        },
        "hosting.web.cron.StateEnum": {
            "description": "Cron state",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "StateEnum",
            "namespace": "hosting.web.cron"
        },
        "hosting.web.cron.StatusEnum": {
            "description": "Cron status",
            "enum": [
                "disabled",
                "enabled",
                "suspended"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.cron"
        },
        "hosting.web.database": {
            "description": "Database",
            "id": "database",
            "namespace": "hosting.web",
            "properties": {
                "dumps": {
                    "canBeNull": false,
                    "description": "The number of available dumps associated to this database",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "guiURL": {
                    "canBeNull": true,
                    "description": "URL for the graphical user interface",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "lastCheck": {
                    "canBeNull": true,
                    "description": "Date of the last check quota",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "mode": {
                    "canBeNull": false,
                    "description": "Mode of your database",
                    "fullType": "hosting.web.database.ModeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.database.ModeEnum"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Database name (like mydb.mysql.db or mydb.postgres.db)",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "port": {
                    "canBeNull": false,
                    "description": "The port on where to contact this database",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "quotaSize": {
                    "canBeNull": false,
                    "description": "Space allowed",
                    "fullType": "complexType.UnitAndValue<double>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<double>"
                },
                "quotaUsed": {
                    "canBeNull": false,
                    "description": "Space used",
                    "fullType": "complexType.UnitAndValue<double>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<double>"
                },
                "server": {
                    "canBeNull": true,
                    "description": "Your database server name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "state": {
                    "canBeNull": false,
                    "description": "Database state",
                    "fullType": "hosting.web.database.StateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.database.StateEnum"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The database status",
                    "fullType": "hosting.web.database.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.database.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this database",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Type of your database",
                    "fullType": "hosting.web.database.DatabaseTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.database.DatabaseTypeEnum"
                },
                "user": {
                    "canBeNull": false,
                    "description": "Database user name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "version": {
                    "canBeNull": false,
                    "description": "Database version following the database type",
                    "fullType": "hosting.web.database.VersionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.database.VersionEnum"
                },
                "versionSupport": {
                    "canBeNull": false,
                    "description": "Indicates the current support state of your database version",
                    "fullType": "hosting.web.database.SupportedVersionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.database.SupportedVersionEnum"
                }
            }
        },
        "hosting.web.database.AvailableVersionStruct": {
            "description": "Database Available and Default version",
            "id": "AvailableVersionStruct",
            "namespace": "hosting.web.database",
            "properties": {
                "default": {
                    "canBeNull": false,
                    "description": "Database default version",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.database.VersionEnum"
                },
                "list": {
                    "canBeNull": false,
                    "description": "Database available version",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.database.VersionEnum[]"
                }
            }
        },
        "hosting.web.database.CreationDatabaseCapabilities": {
            "description": "Struct which describs quota and available for a specific type of database",
            "id": "CreationDatabaseCapabilities",
            "namespace": "hosting.web.database",
            "properties": {
                "available": {
                    "canBeNull": false,
                    "description": "Number of database left for creation",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "engines": {
                    "canBeNull": false,
                    "description": "Database software available on this platform",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.database.DatabaseTypeEnum[]"
                },
                "isolation": {
                    "canBeNull": false,
                    "description": "Technology use to isolate differents webhosting accounts",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.database.DatabaseIsolationEnum"
                },
                "quota": {
                    "canBeNull": false,
                    "description": "Size of data can be used",
                    "readOnly": false,
                    "required": false,
                    "type": "complexType.UnitAndValue<long>"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Database offer name",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.database.DatabaseCapabilitiesTypeEnum"
                }
            }
        },
        "hosting.web.database.DatabaseCapabilities": {
            "description": "Struct which describe available features for a database",
            "id": "DatabaseCapabilities",
            "namespace": "hosting.web.database",
            "properties": {
                "changePassword": {
                    "canBeNull": false,
                    "description": "Availability of the changePassword function",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "changeRight": {
                    "canBeNull": false,
                    "description": "Availability of the changeRight function",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "delete": {
                    "canBeNull": false,
                    "description": "Availability of the delete function",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "dump": {
                    "canBeNull": false,
                    "description": "Availability of the dump function",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "getQuota": {
                    "canBeNull": false,
                    "description": "Availability of the getQuota function",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "getRight": {
                    "canBeNull": false,
                    "description": "Availability of the getQuota function",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "guiURL": {
                    "canBeNull": false,
                    "description": "URL of the database management tool",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "optimize": {
                    "canBeNull": false,
                    "description": "Availability of the optimize function",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "restore": {
                    "canBeNull": false,
                    "description": "Availability of the restore function",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                }
            }
        },
        "hosting.web.database.DatabaseCapabilitiesTypeEnum": {
            "description": "Database capabitities type enum",
            "enum": [
                "extraSqlPerso",
                "local",
                "privateDatabase",
                "sqlLocal",
                "sqlPerso",
                "sqlPro"
            ],
            "enumType": "string",
            "id": "DatabaseCapabilitiesTypeEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.DatabaseCreationTypeEnum": {
            "description": "Database Type enum",
            "enum": [
                "mariadb",
                "mysql",
                "postgresql",
                "redis"
            ],
            "enumType": "string",
            "id": "DatabaseCreationTypeEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.DatabaseIsolationEnum": {
            "description": "Database Isolation enum",
            "enum": [
                "dedicated",
                "local",
                "shared"
            ],
            "enumType": "string",
            "id": "DatabaseIsolationEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.DatabaseTypeEnum": {
            "description": "Database Type enum",
            "enum": [
                "mariadb",
                "mongodb",
                "mysql",
                "postgresql",
                "redis"
            ],
            "enumType": "string",
            "id": "DatabaseTypeEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.ExtraSqlQuotaEnum": {
            "description": "ExtraSqlPerso quota enum",
            "enum": [
                "100",
                "200",
                "25",
                "400",
                "800"
            ],
            "enumType": "long",
            "id": "ExtraSqlQuotaEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.ModeEnum": {
            "description": "Database mode",
            "enum": [
                "besteffort",
                "classic",
                "module"
            ],
            "enumType": "string",
            "id": "ModeEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.RequestActionEnum": {
            "description": "Types of action you can request for your database",
            "enum": [
                "CHECK_QUOTA"
            ],
            "enumType": "string",
            "id": "RequestActionEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.StateEnum": {
            "description": "Database state",
            "enum": [
                "close",
                "ok",
                "readonly"
            ],
            "enumType": "string",
            "id": "StateEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.StatisticsTypeEnum": {
            "description": "Types of statistics available for the database",
            "enum": [
                "statement",
                "statementMeanTime"
            ],
            "enumType": "string",
            "id": "StatisticsTypeEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.StatusEnum": {
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
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.SupportedVersionEnum": {
            "description": "Indicates the current support state of your database version",
            "enum": [
                "beta",
                "deprecated",
                "stable"
            ],
            "enumType": "string",
            "id": "SupportedVersionEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.VersionEnum": {
            "description": "Database Version enum",
            "enum": [
                "3.4",
                "4.0",
                "5.1",
                "5.5",
                "5.6",
                "8.4"
            ],
            "enumType": "string",
            "id": "VersionEnum",
            "namespace": "hosting.web.database"
        },
        "hosting.web.database.dump": {
            "description": "Dump",
            "id": "database.dump",
            "namespace": "hosting.web",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Creation date of the dump",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "deletionDate": {
                    "canBeNull": false,
                    "description": "Automatic deletion date of the dump",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Dump id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The dump status",
                    "fullType": "hosting.web.database.dump.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.database.dump.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this dump",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Dump type",
                    "fullType": "hosting.web.database.dump.DateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.database.dump.DateEnum"
                },
                "url": {
                    "canBeNull": true,
                    "description": "Dump url access",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.database.dump.DateEnum": {
            "description": "List of dump types",
            "enum": [
                "daily.1",
                "now",
                "weekly.1"
            ],
            "enumType": "string",
            "id": "DateEnum",
            "namespace": "hosting.web.database.dump"
        },
        "hosting.web.database.dump.StatusEnum": {
            "description": "Database dump status",
            "enum": [
                "created",
                "creating",
                "deleting"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.database.dump"
        },
        "hosting.web.dump": {
            "description": "Dump",
            "id": "dump",
            "namespace": "hosting.web",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Creation date of the dump",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "databaseName": {
                    "canBeNull": false,
                    "description": "Source database name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "deletionDate": {
                    "canBeNull": false,
                    "description": "Automatic deletion date of the dump",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Dump id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "orphan": {
                    "canBeNull": false,
                    "description": "If source database was deleted",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The dump status",
                    "fullType": "hosting.web.database.dump.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.database.dump.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this dump",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Dump type",
                    "fullType": "hosting.web.database.dump.DateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.database.dump.DateEnum"
                },
                "url": {
                    "canBeNull": true,
                    "description": "Dump url access",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.email": {
            "description": "Hosting automated emails",
            "id": "email",
            "namespace": "hosting.web",
            "properties": {
                "bounce": {
                    "canBeNull": false,
                    "description": "Bounce",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "email": {
                    "canBeNull": true,
                    "description": "Email used to receive errors",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "maxPerDay": {
                    "canBeNull": false,
                    "description": "Max email to sent per day",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "sent": {
                    "canBeNull": false,
                    "description": "Email sent since hosting creation",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "sentToday": {
                    "canBeNull": false,
                    "description": "Email sent today",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "state": {
                    "canBeNull": false,
                    "description": "Email state",
                    "fullType": "hosting.web.mail.StateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.mail.StateEnum"
                }
            }
        },
        "hosting.web.emailoption": {
            "description": "Mail service linked to webhosting",
            "id": "emailoption",
            "namespace": "hosting.web",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "domain": {
                    "canBeNull": false,
                    "description": "Email service domain",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Account id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.envVar": {
            "description": "Environment variables set into your webhosting account",
            "id": "envVar",
            "namespace": "hosting.web",
            "properties": {
                "key": {
                    "canBeNull": false,
                    "description": "Name of the variable",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The environnement variable status",
                    "fullType": "hosting.web.envVar.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.envVar.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this variable",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Type of variable set",
                    "fullType": "hosting.web.envVar.TypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.envVar.TypeEnum"
                },
                "value": {
                    "canBeNull": false,
                    "description": "Value of the variable",
                    "fullType": "password",
                    "readOnly": false,
                    "required": false,
                    "type": "password"
                }
            }
        },
        "hosting.web.envVar.StatusEnum": {
            "description": "EnvVar status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.envVar"
        },
        "hosting.web.envVar.TypeEnum": {
            "description": "EnvVar type",
            "enum": [
                "integer",
                "password",
                "string"
            ],
            "enumType": "string",
            "id": "TypeEnum",
            "namespace": "hosting.web.envVar"
        },
        "hosting.web.extrasqlperso": {
            "description": "Sqlperso service",
            "id": "extrasqlperso",
            "namespace": "hosting.web",
            "properties": {
                "database": {
                    "canBeNull": false,
                    "description": "Number of database allowed by this option",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "name": {
                    "canBeNull": false,
                    "description": "The extraSqlPerso option name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "size": {
                    "canBeNull": false,
                    "description": "Quota size allowed per each database by this option",
                    "fullType": "complexType.UnitAndValue<double>",
                    "readOnly": true,
                    "required": false,
                    "type": "complexType.UnitAndValue<double>"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The extraSqlPerso option status",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this extraSqlPerso",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.freedom": {
            "description": "Freedoms linked to this hosting account",
            "id": "freedom",
            "namespace": "hosting.web",
            "properties": {
                "domain": {
                    "canBeNull": false,
                    "description": "Freedom domain",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Available status for freedom",
                    "fullType": "hosting.web.freedom.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.freedom.StatusEnum"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Freedom type",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.freedom.StatusEnum": {
            "description": "Available status for freedoms",
            "enum": [
                "blockedByCustomer",
                "blockedBySystem",
                "ok",
                "preset"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.freedom"
        },
        "hosting.web.hostedssl.ReportValueEnum": {
            "description": "Hostedssl report value",
            "enum": [
                "completed",
                "in-progress",
                "non-completed",
                "non-required",
                "not-applicable",
                "not-provided"
            ],
            "enumType": "string",
            "id": "ReportValueEnum",
            "namespace": "hosting.web.hostedssl"
        },
        "hosting.web.hostedssl.StatusEnum": {
            "description": "Hostedssl status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "importing",
                "regenerating"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.hostedssl"
        },
        "hosting.web.indy": {
            "description": "Hosting indys",
            "id": "indy",
            "namespace": "hosting.web",
            "properties": {
                "attachedDomains": {
                    "canBeNull": false,
                    "description": "AttachedDomain IDs linked to this multidomain",
                    "fullType": "string[]",
                    "readOnly": true,
                    "required": false,
                    "type": "string[]"
                },
                "home": {
                    "canBeNull": false,
                    "description": "Home directory",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "login": {
                    "canBeNull": false,
                    "description": "Login of the multidomain independent user",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "state": {
                    "canBeNull": false,
                    "description": "User status",
                    "fullType": "hosting.web.user.StateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.user.StateEnum"
                }
            }
        },
        "hosting.web.localSeo.DirectoriesList": {
            "description": "Struct describing a list of directories ordered by type",
            "id": "DirectoriesList",
            "namespace": "hosting.web.localSeo",
            "properties": {
                "navigationSystems": {
                    "canBeNull": false,
                    "description": "Navigation systems",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.Directory[]"
                },
                "searchEngines": {
                    "canBeNull": false,
                    "description": "Search engines",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.Directory[]"
                },
                "socialNetworks": {
                    "canBeNull": false,
                    "description": "Social networks",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.Directory[]"
                }
            }
        },
        "hosting.web.localSeo.Directory": {
            "description": "Struct describing a directory",
            "id": "Directory",
            "namespace": "hosting.web.localSeo",
            "properties": {
                "code": {
                    "canBeNull": false,
                    "description": "Identifier to use to get the result of a visibility check for the directory",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "displayName": {
                    "canBeNull": false,
                    "description": "Human-readable name of the directory",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.localSeo.EmailAvailability": {
            "description": "Struct describing the availability of an email address for a local SEO order",
            "id": "EmailAvailability",
            "namespace": "hosting.web.localSeo",
            "properties": {
                "availability": {
                    "canBeNull": false,
                    "description": "Availability of the email address",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.account.EmailAvailabilityEnum"
                },
                "serviceName": {
                    "canBeNull": true,
                    "description": "Hosting on which the email address is used",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.localSeo.FieldStatusEnum": {
            "description": "Sync status of a location field",
            "enum": [
                "MATCH",
                "MISMATCH",
                "MISSING",
                "NOT_APPLICABLE",
                "PRESENT"
            ],
            "enumType": "string",
            "id": "FieldStatusEnum",
            "namespace": "hosting.web.localSeo"
        },
        "hosting.web.localSeo.FlowStatusEnum": {
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
            "enumType": "string",
            "id": "FlowStatusEnum",
            "namespace": "hosting.web.localSeo"
        },
        "hosting.web.localSeo.ListingStatusEnum": {
            "description": "Sync status of a listing",
            "enum": [
                "IN_SYNC",
                "NOT_FOUND",
                "NOT_IN_SYNC",
                "NOT_SUPPORTED",
                "NO_ONLINE_LISTING",
                "TECHNICAL_PROBLEMS"
            ],
            "enumType": "string",
            "id": "ListingStatusEnum",
            "namespace": "hosting.web.localSeo"
        },
        "hosting.web.localSeo.SearchData": {
            "description": "Struct describing a location being checked for visibility",
            "id": "SearchData",
            "namespace": "hosting.web.localSeo",
            "properties": {
                "city": {
                    "canBeNull": false,
                    "description": "City of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "country": {
                    "canBeNull": false,
                    "description": "Country of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Id of the search",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "province": {
                    "canBeNull": true,
                    "description": "Province of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "street": {
                    "canBeNull": false,
                    "description": "Street of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "streetNo": {
                    "canBeNull": false,
                    "description": "Street numero of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "token": {
                    "canBeNull": false,
                    "description": "Token to use to get the results of the search",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "zip": {
                    "canBeNull": false,
                    "description": "Zipcode of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.localSeo.VisibilityCheckResponse": {
            "description": "Struct describing the response for a visibility check request",
            "id": "VisibilityCheckResponse",
            "namespace": "hosting.web.localSeo",
            "properties": {
                "alreadyManaged": {
                    "canBeNull": true,
                    "description": "Is the searched location already managed ?",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "searchData": {
                    "canBeNull": false,
                    "description": "Searched location data",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.SearchData"
                }
            }
        },
        "hosting.web.localSeo.VisibilityCheckResultResponse": {
            "description": "Struct describing a visibility check result",
            "id": "VisibilityCheckResultResponse",
            "namespace": "hosting.web.localSeo",
            "properties": {
                "city": {
                    "canBeNull": true,
                    "description": "City of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "cityStatus": {
                    "canBeNull": true,
                    "description": "City of the location (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "country": {
                    "canBeNull": true,
                    "description": "Country of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "countryStatus": {
                    "canBeNull": true,
                    "description": "Country of the location (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "dateCreated": {
                    "canBeNull": true,
                    "description": "The date and time the listing was created in database",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "directoryType": {
                    "canBeNull": true,
                    "description": "The directory where this listing appears",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "email": {
                    "canBeNull": true,
                    "description": "A contact email for the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "emailStatus": {
                    "canBeNull": true,
                    "description": "A contact email for the location (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "flowStatus": {
                    "canBeNull": true,
                    "description": "The status of the current listing",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FlowStatusEnum"
                },
                "listingId": {
                    "canBeNull": true,
                    "description": "The listing id in the directory database",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "listingUrl": {
                    "canBeNull": true,
                    "description": "The listing url on the directory website",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": true,
                    "description": "The location's name used for this listing",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "nameStatus": {
                    "canBeNull": true,
                    "description": "The location's name used for this listing (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "phone": {
                    "canBeNull": true,
                    "description": "The location's contact phone number",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "phoneStatus": {
                    "canBeNull": true,
                    "description": "The location's contact phone number (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "province": {
                    "canBeNull": true,
                    "description": "Province of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "provinceStatus": {
                    "canBeNull": true,
                    "description": "Province of the location (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "street": {
                    "canBeNull": true,
                    "description": "The location's street address",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "streetAndNo": {
                    "canBeNull": true,
                    "description": "A localized combination of street and streetNo",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "streetAndNoStatus": {
                    "canBeNull": true,
                    "description": "A localized combination of street and streetNo (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "streetNo": {
                    "canBeNull": true,
                    "description": "The location's street number",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "streetNoStatus": {
                    "canBeNull": true,
                    "description": "The location's street number (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "streetStatus": {
                    "canBeNull": true,
                    "description": "The location's street address (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "streetType": {
                    "canBeNull": true,
                    "description": "The street type for Spain",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "streetTypeStatus": {
                    "canBeNull": true,
                    "description": "The street type for Spain (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "syncStatus": {
                    "canBeNull": true,
                    "description": "The sync status of the listing",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.ListingStatusEnum"
                },
                "website": {
                    "canBeNull": true,
                    "description": "A valid url for the location's website",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "websiteStatus": {
                    "canBeNull": true,
                    "description": "A valid url for the location's website (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                },
                "zip": {
                    "canBeNull": true,
                    "description": "Zipcode of the location",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "zipStatus": {
                    "canBeNull": true,
                    "description": "Zipcode of the location (sync status)",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.localSeo.FieldStatusEnum"
                }
            }
        },
        "hosting.web.localSeo.account": {
            "description": "Local SEO accounts",
            "id": "localSeo.account",
            "namespace": "hosting.web",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Date of creation of the account",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "email": {
                    "canBeNull": false,
                    "description": "Email address associated to the account",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Account id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Date of the last account's update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Current status of the account",
                    "fullType": "hosting.web.localSeo.account.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.localSeo.account.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "Running task associated to the account",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.localSeo.account.EmailAvailabilityEnum": {
            "description": "Availability of an email address for a local SEO order",
            "enum": [
                "available",
                "merge",
                "nic",
                "taken"
            ],
            "enumType": "string",
            "id": "EmailAvailabilityEnum",
            "namespace": "hosting.web.localSeo.account"
        },
        "hosting.web.localSeo.account.StatusEnum": {
            "description": "Account status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.localSeo.account"
        },
        "hosting.web.localSeo.location": {
            "description": "Local SEO locations",
            "id": "localSeo.location",
            "namespace": "hosting.web",
            "properties": {
                "accountId": {
                    "canBeNull": true,
                    "description": "Account id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "address": {
                    "canBeNull": true,
                    "description": "Address of the location",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "country": {
                    "canBeNull": false,
                    "description": "Country of the location",
                    "fullType": "hosting.web.localSeo.location.CountryEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.localSeo.location.CountryEnum"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "Date of the installation of the location",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Location id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Date of the last location's update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": true,
                    "description": "Name of the location",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "offer": {
                    "canBeNull": false,
                    "description": "Local SEO offer for this location",
                    "fullType": "hosting.web.localSeo.location.OfferEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.localSeo.location.OfferEnum"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Current status of the location",
                    "fullType": "hosting.web.localSeo.location.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.localSeo.location.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "Running task associated to the location",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.localSeo.location.CountryEnum": {
            "description": "Location country",
            "enum": [
                "FR"
            ],
            "enumType": "string",
            "id": "CountryEnum",
            "namespace": "hosting.web.localSeo.location"
        },
        "hosting.web.localSeo.location.OfferEnum": {
            "description": "Location offer",
            "enum": [
                "normal"
            ],
            "enumType": "string",
            "id": "OfferEnum",
            "namespace": "hosting.web.localSeo.location"
        },
        "hosting.web.localSeo.location.StatusEnum": {
            "description": "Location status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.localSeo.location"
        },
        "hosting.web.mail.ActionEnum": {
            "description": "Types of action you can request for your mail",
            "enum": [
                "BLOCK",
                "PURGE",
                "UNBLOCK"
            ],
            "enumType": "string",
            "id": "ActionEnum",
            "namespace": "hosting.web.mail"
        },
        "hosting.web.mail.Bounce": {
            "description": "The volume history type",
            "id": "Bounce",
            "namespace": "hosting.web.mail",
            "properties": {
                "date": {
                    "canBeNull": false,
                    "description": "The datetime of this bounce",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "message": {
                    "canBeNull": true,
                    "description": "The return message for this bounce",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "to": {
                    "canBeNull": true,
                    "description": "The email where you have the bounce",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.mail.StateEnum": {
            "description": "Mail state enum",
            "enum": [
                "bounce",
                "force",
                "ko",
                "ok",
                "purging",
                "spam"
            ],
            "enumType": "string",
            "id": "StateEnum",
            "namespace": "hosting.web.mail"
        },
        "hosting.web.mail.VolumeHistory": {
            "description": "The volume history type",
            "id": "VolumeHistory",
            "namespace": "hosting.web.mail",
            "properties": {
                "date": {
                    "canBeNull": false,
                    "description": "The datetime of this volume history point",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "volume": {
                    "canBeNull": true,
                    "description": "The volume history size",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.module": {
            "description": "Hosting modules installed",
            "id": "module",
            "namespace": "hosting.web",
            "properties": {
                "adminFolder": {
                    "canBeNull": false,
                    "description": "The admin folder, relative to the module's installation path",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "adminName": {
                    "canBeNull": false,
                    "description": "Login for the admin account",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "Date of the installation of the module",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "dependencies": {
                    "canBeNull": false,
                    "description": "The dependencies to which the module has access. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example",
                    "fullType": "hosting.web.module.DependencyType[]",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.module.DependencyType[]"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Installation ID",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "language": {
                    "canBeNull": false,
                    "description": "The language of the module",
                    "fullType": "hosting.web.module.LanguageEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.module.LanguageEnum"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "Date of the last module's upgrade",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "moduleId": {
                    "canBeNull": false,
                    "description": "ID of the module associated with this installation",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "path": {
                    "canBeNull": false,
                    "description": "Where the module is installed, relative to your home directory",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The module status",
                    "fullType": "hosting.web.module.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.module.StatusEnum"
                },
                "targetUrl": {
                    "canBeNull": false,
                    "description": "The URL from where your module can be reached",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this module",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.module.AdminNameTypeEnum": {
            "description": "The type of the admin name",
            "enum": [
                "email",
                "string"
            ],
            "enumType": "string",
            "id": "AdminNameTypeEnum",
            "namespace": "hosting.web.module"
        },
        "hosting.web.module.BranchEnum": {
            "description": "Branch enum",
            "enum": [
                "old",
                "stable",
                "testing"
            ],
            "enumType": "string",
            "id": "BranchEnum",
            "namespace": "hosting.web.module"
        },
        "hosting.web.module.DependencyType": {
            "description": "Dependency parameters. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example",
            "id": "DependencyType",
            "namespace": "hosting.web.module",
            "properties": {
                "name": {
                    "canBeNull": true,
                    "description": "The name of this dependency",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "password": {
                    "canBeNull": true,
                    "description": "The password associated with the user",
                    "readOnly": false,
                    "required": false,
                    "type": "password"
                },
                "port": {
                    "canBeNull": true,
                    "description": "The port on where to contact this dependency",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "prefix": {
                    "canBeNull": true,
                    "description": "The prefix to set to the data to distinguish between the data from the module and the rest",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "server": {
                    "canBeNull": true,
                    "description": "The server on where your dependency is hosted",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Type",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.module.DependencyTypeEnum"
                },
                "user": {
                    "canBeNull": true,
                    "description": "The user to use to connect to this dependency",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.module.DependencyTypeEnum": {
            "description": "The type of the dependency. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example",
            "enum": [
                "mysql"
            ],
            "enumType": "string",
            "id": "DependencyTypeEnum",
            "namespace": "hosting.web.module"
        },
        "hosting.web.module.LanguageEnum": {
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
            "enumType": "string",
            "id": "LanguageEnum",
            "namespace": "hosting.web.module"
        },
        "hosting.web.module.StatusEnum": {
            "description": "Module status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.module"
        },
        "hosting.web.ovhConfig": {
            "description": "Virtual service",
            "id": "ovhConfig",
            "namespace": "hosting.web",
            "properties": {
                "container": {
                    "canBeNull": false,
                    "description": "Container to run this website",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "When ovhconfig was created, or found for the first time, on the hosting servers",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "engineName": {
                    "canBeNull": false,
                    "description": "Version of engine you want",
                    "fullType": "hosting.web.ovhConfig.EngineNameEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.ovhConfig.EngineNameEnum"
                },
                "engineVersion": {
                    "canBeNull": false,
                    "description": "Name of engine you want",
                    "fullType": "hosting.web.ovhConfig.EngineVersionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.ovhConfig.EngineVersionEnum"
                },
                "environment": {
                    "canBeNull": false,
                    "description": "Environment configuration you want",
                    "fullType": "hosting.web.ovhConfig.EnvironmentEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.ovhConfig.EnvironmentEnum"
                },
                "fileExist": {
                    "canBeNull": false,
                    "description": "If .ovhConfig exists",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "historical": {
                    "canBeNull": true,
                    "description": "If this configuration is an old configuration",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "httpFirewall": {
                    "canBeNull": false,
                    "description": "Configuration you want for http firewall",
                    "fullType": "hosting.web.ovhConfig.HttpFirewallEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.ovhConfig.HttpFirewallEnum"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Configuration's id",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "path": {
                    "canBeNull": true,
                    "description": "Config path, relative to your home directory",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The configuration status",
                    "fullType": "hosting.web.ovhConfig.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.ovhConfig.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this configuration",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.ovhConfig.AvailableEngineVersionEnum": {
            "description": "Hosting available configuration version",
            "enum": [
                "5.4",
                "5.5",
                "5.6",
                "7.0",
                "7.1",
                "7.2",
                "7.3",
                "7.4"
            ],
            "enumType": "string",
            "id": "AvailableEngineVersionEnum",
            "namespace": "hosting.web.ovhConfig"
        },
        "hosting.web.ovhConfig.EngineNameEnum": {
            "description": "Hosting configuration engine",
            "enum": [
                "php",
                "phpcgi"
            ],
            "enumType": "string",
            "id": "EngineNameEnum",
            "namespace": "hosting.web.ovhConfig"
        },
        "hosting.web.ovhConfig.EngineVersionEnum": {
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
                "7.4",
                "AUTO"
            ],
            "enumType": "string",
            "id": "EngineVersionEnum",
            "namespace": "hosting.web.ovhConfig"
        },
        "hosting.web.ovhConfig.EnvironmentEnum": {
            "description": "Hosting configuration environment",
            "enum": [
                "development",
                "production"
            ],
            "enumType": "string",
            "id": "EnvironmentEnum",
            "namespace": "hosting.web.ovhConfig"
        },
        "hosting.web.ovhConfig.HttpFirewallEnum": {
            "description": "Hosting configuration firewall",
            "enum": [
                "none",
                "security"
            ],
            "enumType": "string",
            "id": "HttpFirewallEnum",
            "namespace": "hosting.web.ovhConfig"
        },
        "hosting.web.ovhConfig.StatusEnum": {
            "description": "Ovhconfig status",
            "enum": [
                "created",
                "rollbacking",
                "updating"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.ovhConfig"
        },
        "hosting.web.ovhconfig.ContainerEnum": {
            "description": "Hosting configuration image to run website",
            "enum": [
                "jessie.i386",
                "legacy",
                "stable",
                "stable64",
                "testing"
            ],
            "enumType": "string",
            "id": "ContainerEnum",
            "namespace": "hosting.web.ovhconfig"
        },
        "hosting.web.ownLogs": {
            "description": "Hosting own logs",
            "id": "ownLogs",
            "namespace": "hosting.web",
            "properties": {
                "fqdn": {
                    "canBeNull": false,
                    "description": "The ownlogs fqdn available on logs.clusterXX.hosting.ovh.net",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "Identifier of this ownLogs",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "logs": {
                    "canBeNull": false,
                    "description": "URL to access this ownLogs logs",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "stats": {
                    "canBeNull": false,
                    "description": "URL to access this ownLogs stats",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Status of this ownLogs",
                    "fullType": "hosting.web.ownLogs.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.ownLogs.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this ownLogs",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.ownLogs.StatusEnum": {
            "description": "OwnLogs status",
            "enum": [
                "created",
                "creating",
                "deleting"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.ownLogs"
        },
        "hosting.web.runtime": {
            "description": "The runtime configuration of an attached domain for cloud web offer",
            "id": "runtime",
            "namespace": "hosting.web",
            "properties": {
                "appBootstrap": {
                    "canBeNull": true,
                    "description": "The client application bootstrap script",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "appEnv": {
                    "canBeNull": false,
                    "description": "The client application environment",
                    "fullType": "hosting.web.runtime.EnvEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.runtime.EnvEnum"
                },
                "creationDate": {
                    "canBeNull": false,
                    "description": "The creation date of the runtime configuration",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "id": {
                    "canBeNull": false,
                    "description": "The runtime configuration ID",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "isDefault": {
                    "canBeNull": false,
                    "description": "Is the runtime configuration is the one by default for the hosting",
                    "fullType": "boolean",
                    "readOnly": false,
                    "required": false,
                    "type": "boolean"
                },
                "isDeletable": {
                    "canBeNull": false,
                    "description": "Return if the runtime configuration can be deleted",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "lastUpdate": {
                    "canBeNull": false,
                    "description": "The last update date of the runtime configuration",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "name": {
                    "canBeNull": true,
                    "description": "The custom display name of the runtime configuration",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "publicDir": {
                    "canBeNull": true,
                    "description": "The client application public directory",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The status of the runtime",
                    "fullType": "hosting.web.runtime.StateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.runtime.StateEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The link current task for the runtime configuration",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "type": {
                    "canBeNull": false,
                    "description": "The backend type of the runtime",
                    "fullType": "hosting.web.runtime.TypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.runtime.TypeEnum"
                }
            }
        },
        "hosting.web.runtime.EnvEnum": {
            "description": "Runtime env enum",
            "enum": [
                "development",
                "production"
            ],
            "enumType": "string",
            "id": "EnvEnum",
            "namespace": "hosting.web.runtime"
        },
        "hosting.web.runtime.StateEnum": {
            "description": "Runtime state enum",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "StateEnum",
            "namespace": "hosting.web.runtime"
        },
        "hosting.web.runtime.TypeEnum": {
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
            "enumType": "string",
            "id": "TypeEnum",
            "namespace": "hosting.web.runtime"
        },
        "hosting.web.ssl": {
            "description": "Hostedssl",
            "id": "ssl",
            "namespace": "hosting.web",
            "properties": {
                "isReportable": {
                    "canBeNull": false,
                    "description": "If the hostedssl is currently bound to a report",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "provider": {
                    "canBeNull": false,
                    "description": "Provider of the HostedSsl",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "regenerable": {
                    "canBeNull": false,
                    "description": "Regenerable flag",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Status of the HostedSsl",
                    "fullType": "hosting.web.hostedssl.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.hostedssl.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this HostedSsl",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "type": {
                    "canBeNull": false,
                    "description": "Type of the HostedSsl",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.ssl.report": {
            "description": "Hostedssl Report",
            "id": "ssl.report",
            "namespace": "hosting.web",
            "properties": {
                "certificateSigningRequestStatus": {
                    "canBeNull": false,
                    "description": "\"Certificate signing request\" test status done by certification authority",
                    "fullType": "hosting.web.hostedssl.ReportValueEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.hostedssl.ReportValueEnum"
                },
                "domainControlValidationStatus": {
                    "canBeNull": false,
                    "description": "\"Domain control validation\" test status done by certification authority",
                    "fullType": "hosting.web.hostedssl.ReportValueEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.hostedssl.ReportValueEnum"
                },
                "organizationValidationStatus": {
                    "canBeNull": false,
                    "description": "Applicant's legal status obtained or verified directly with registration agency",
                    "fullType": "hosting.web.hostedssl.ReportValueEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.hostedssl.ReportValueEnum"
                },
                "phoneCallApprovalStatus": {
                    "canBeNull": false,
                    "description": "Approval verified through a phone call to the contract signer",
                    "fullType": "hosting.web.hostedssl.ReportValueEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.hostedssl.ReportValueEnum"
                },
                "providerOrderId": {
                    "canBeNull": false,
                    "description": "The order ID from given hostedssl provider",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "termsAndConditionsAcceptanceStatus": {
                    "canBeNull": false,
                    "description": "Terms and conditions agreements acceptance",
                    "fullType": "hosting.web.hostedssl.ReportValueEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.hostedssl.ReportValueEnum"
                },
                "tradeNameVerificationStatus": {
                    "canBeNull": false,
                    "description": "Trade name verified directly with registration agency or through a verified third party",
                    "fullType": "hosting.web.hostedssl.ReportValueEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.hostedssl.ReportValueEnum"
                }
            }
        },
        "hosting.web.task": {
            "description": "Tasks",
            "id": "task",
            "namespace": "hosting.web",
            "properties": {
                "doneDate": {
                    "canBeNull": true,
                    "description": "Completion date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "function": {
                    "canBeNull": false,
                    "description": "Function name",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "id": {
                    "canBeNull": false,
                    "description": "the id of the task",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "lastUpdate": {
                    "canBeNull": true,
                    "description": "last update",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "objectId": {
                    "canBeNull": true,
                    "description": "Task related object ID",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "objectType": {
                    "canBeNull": true,
                    "description": "Task object type",
                    "fullType": "hosting.web.task.ObjectTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.task.ObjectTypeEnum"
                },
                "startDate": {
                    "canBeNull": false,
                    "description": "Task Creation date",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Task status",
                    "fullType": "hosting.web.task.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.task.StatusEnum"
                }
            }
        },
        "hosting.web.task.ObjectTypeEnum": {
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
            "enumType": "string",
            "id": "ObjectTypeEnum",
            "namespace": "hosting.web.task"
        },
        "hosting.web.task.StatusEnum": {
            "description": "Task's status",
            "enum": [
                "cancelled",
                "doing",
                "done",
                "error",
                "init",
                "todo"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.task"
        },
        "hosting.web.user": {
            "description": "Hosting users",
            "id": "user",
            "namespace": "hosting.web",
            "properties": {
                "home": {
                    "canBeNull": false,
                    "description": "Home directory",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "isPrimaryAccount": {
                    "canBeNull": false,
                    "description": "Is this user primary",
                    "fullType": "boolean",
                    "readOnly": true,
                    "required": false,
                    "type": "boolean"
                },
                "login": {
                    "canBeNull": false,
                    "description": "Login used to connect on FTP and SSH",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "serviceManagementCredentials": {
                    "canBeNull": false,
                    "description": "Credentials to manage your webhosting",
                    "fullType": "hosting.web.user.ServiceCredentials",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.user.ServiceCredentials"
                },
                "sshState": {
                    "canBeNull": false,
                    "description": "User ssh status",
                    "fullType": "hosting.web.user.SshStateEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.user.SshStateEnum"
                },
                "state": {
                    "canBeNull": false,
                    "description": "User state",
                    "fullType": "hosting.web.user.StateEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.user.StateEnum"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The user status",
                    "fullType": "hosting.web.user.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.user.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this user",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.user.Credentials": {
            "description": "User, url and port of a service",
            "id": "Credentials",
            "namespace": "hosting.web.user",
            "properties": {
                "port": {
                    "canBeNull": false,
                    "description": "Port to use to access to the service",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "url": {
                    "canBeNull": false,
                    "description": "Url to contact the service",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "user": {
                    "canBeNull": false,
                    "description": "Login to authentificate you on the service",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "hosting.web.user.ServiceCredentials": {
            "description": "Different credentials to manage your service",
            "id": "ServiceCredentials",
            "namespace": "hosting.web.user",
            "properties": {
                "ftp": {
                    "canBeNull": false,
                    "description": "Credentials to manage files by ftp",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.user.Credentials"
                },
                "ssh": {
                    "canBeNull": false,
                    "description": "Credentials to manage webhosting by ssh",
                    "readOnly": false,
                    "required": false,
                    "type": "hosting.web.user.Credentials"
                }
            }
        },
        "hosting.web.user.SshStateEnum": {
            "description": "Account's ssh state",
            "enum": [
                "active",
                "none",
                "sftponly"
            ],
            "enumType": "string",
            "id": "SshStateEnum",
            "namespace": "hosting.web.user"
        },
        "hosting.web.user.StateEnum": {
            "description": "Account's state",
            "enum": [
                "off",
                "rw"
            ],
            "enumType": "string",
            "id": "StateEnum",
            "namespace": "hosting.web.user"
        },
        "hosting.web.user.StatusEnum": {
            "description": "User status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.user"
        },
        "hosting.web.userLogs": {
            "description": "Hosting users logs",
            "id": "userLogs",
            "namespace": "hosting.web",
            "properties": {
                "creationDate": {
                    "canBeNull": false,
                    "description": "Date of the user creation",
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "description": {
                    "canBeNull": true,
                    "description": "Description field for you",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "login": {
                    "canBeNull": false,
                    "description": "The userLogs login used to connect to logs.ovh.net",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "ownLogsId": {
                    "canBeNull": true,
                    "description": "OwnLogs where this userLogs will be enable. Default : main domain ownlogs",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "status": {
                    "canBeNull": false,
                    "description": "Status of this userLogs",
                    "fullType": "hosting.web.userLogs.StatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "hosting.web.userLogs.StatusEnum"
                },
                "taskId": {
                    "canBeNull": true,
                    "description": "The task ID working on this userLogs",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "hosting.web.userLogs.StatusEnum": {
            "description": "UserLogs status",
            "enum": [
                "created",
                "creating",
                "deleting",
                "updating"
            ],
            "enumType": "string",
            "id": "StatusEnum",
            "namespace": "hosting.web.userLogs"
        },
        "order.CurrencyCodeEnum": {
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
        }
    },
    "resourcePath": "/hosting/web"
};
//# sourceMappingURL=hosting-web.js.map