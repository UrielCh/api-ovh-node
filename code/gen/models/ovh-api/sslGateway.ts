import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/sslGateway",
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
      "description": "Operations about the SSLGATEWAY service"
    },
    {
      "path": "/sslGateway/availableZones",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "List of zone available for an SSL Gateway"
        }
      ],
      "description": "List of zone available for an SSL Gateway"
    },
    {
      "path": "/sslGateway/eligibility",
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
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "domain to check eligibility for SSL Gateway offer"
            }
          ],
          "responseType": "sslGateway.EligibilityStatus",
          "noAuthentication": true,
          "description": "Check domain eligibility. Return list of eligible IP(s) for this domain."
        }
      ],
      "description": "Check domain eligibility. Return list of eligible IP(s) for this domain."
    },
    {
      "path": "/sslGateway/{serviceName}",
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
          "responseType": "sslGateway.SslGateway",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "sslGateway.SslGateway",
              "paramType": "body",
              "fullType": "sslGateway.SslGateway",
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
      "description": "Your SSL Gateway"
    },
    {
      "path": "/sslGateway/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
      "path": "/sslGateway/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "commentary",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Commentary about your termination request"
            },
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
      "path": "/sslGateway/{serviceName}/domain",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Domains attached to your SSL Gateway"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Domain to attach"
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
          "responseType": "sslGateway.Domain",
          "noAuthentication": false,
          "description": "Attach a new domain to your SSL Gateway"
        }
      ],
      "description": "List the sslGateway.Domain objects"
    },
    {
      "path": "/sslGateway/{serviceName}/domain/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Detach a domain from your SSL Gateway"
        },
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "sslGateway.Domain",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Domain attached to an SSL Gateway"
    },
    {
      "path": "/sslGateway/{serviceName}/natIp",
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
          "responseType": "sslGateway.NatIps[]",
          "noAuthentication": false,
          "description": "Ip subnet used by OVH to nat requests to your SSL Gateway backends."
        }
      ],
      "description": "natIp operations"
    },
    {
      "path": "/sslGateway/{serviceName}/renewCertificate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Domain on which you want to renew certificate"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Renew your SSL certificates"
        }
      ],
      "description": "renewCertificate operations"
    },
    {
      "path": "/sslGateway/{serviceName}/server",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Servers attached to your SSL Gateway"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "address",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "IPv4 address of your server"
            },
            {
              "name": "port",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Port of your server"
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
          "responseType": "sslGateway.Server",
          "noAuthentication": false,
          "description": "Add a new server to your SSL Gateway"
        }
      ],
      "description": "List the sslGateway.Server objects"
    },
    {
      "path": "/sslGateway/{serviceName}/server/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Remove a server"
        },
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "sslGateway.Server",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "sslGateway.Server",
              "paramType": "body",
              "fullType": "sslGateway.Server",
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
      "description": "Server attached to an SSL Gateway"
    },
    {
      "path": "/sslGateway/{serviceName}/serviceInfos",
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
          "responseType": "services.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
      "path": "/sslGateway/{serviceName}/task",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Task for this SSL Gateway"
        }
      ],
      "description": "List the sslGateway.Task objects"
    },
    {
      "path": "/sslGateway/{serviceName}/task/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "sslGateway.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "SSL Gateway tasks"
    },
    {
      "path": "/sslGateway/{serviceName}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
    }
  ],
  "resourcePath": "/sslGateway",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
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
    "sslGateway.Domain": {
      "id": "Domain",
      "namespace": "sslGateway",
      "description": "Domain attached to an SSL Gateway",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain name attached to your SSL Gateway",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your domain",
          "required": true
        },
        "state": {
          "type": "sslGateway.DomainStateEnum",
          "fullType": "sslGateway.DomainStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain state",
          "required": true
        }
      }
    },
    "sslGateway.DomainStateEnum": {
      "id": "DomainStateEnum",
      "namespace": "sslGateway",
      "description": "Possible values for SSL Gateway domain state",
      "enum": [
        "creating",
        "deleted",
        "deleting",
        "http-only",
        "internal",
        "ok"
      ],
      "enumType": "string"
    },
    "sslGateway.EligibilityStatus": {
      "id": "EligibilityStatus",
      "namespace": "sslGateway",
      "description": "A structure describing the eligibility status of a domain",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Customer domain name",
          "required": true
        },
        "ip6s": {
          "type": "ipv6[]",
          "fullType": "ipv6[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Eligible IP(s) v6 for this domain",
          "required": true
        },
        "ips": {
          "type": "ipv4[]",
          "fullType": "ipv4[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Eligible IP(s) for this domain",
          "required": true
        },
        "isHostedByOvh": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether this domain is hosted by Ovh or not",
          "required": true
        }
      }
    },
    "sslGateway.NatIps": {
      "id": "NatIps",
      "namespace": "sslGateway",
      "description": "a list of {zone, nat Ip}",
      "properties": {
        "ip": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "zone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "sslGateway.OfferEnum": {
      "id": "OfferEnum",
      "namespace": "sslGateway",
      "description": "List of SSL Gateway offers",
      "enum": [
        "advanced",
        "enterprise",
        "free",
        "internal"
      ],
      "enumType": "string"
    },
    "sslGateway.Server": {
      "id": "Server",
      "namespace": "sslGateway",
      "description": "Server attached to an SSL Gateway",
      "properties": {
        "address": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "IP address of the server attached to your SSL Gateway",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id of your server",
          "required": true
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Port of your server attached to your SSL Gateway",
          "required": true
        },
        "state": {
          "type": "sslGateway.ServerStateEnum",
          "fullType": "sslGateway.ServerStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Server state",
          "required": true
        }
      }
    },
    "sslGateway.ServerStateEnum": {
      "id": "ServerStateEnum",
      "namespace": "sslGateway",
      "description": "Possible values for SSL Gateway server state",
      "enum": [
        "creating",
        "deleted",
        "deleting",
        "internal",
        "ok",
        "updating"
      ],
      "enumType": "string"
    },
    "sslGateway.SslConfigurationEnum": {
      "id": "SslConfigurationEnum",
      "namespace": "sslGateway",
      "description": "Possible values for ssl ciphers",
      "enum": [
        "intermediate",
        "internal",
        "modern"
      ],
      "enumType": "string"
    },
    "sslGateway.SslGateway": {
      "id": "SslGateway",
      "namespace": "sslGateway",
      "description": "Your SSL Gateway",
      "properties": {
        "allowedSource": {
          "type": "ipBlock[]",
          "fullType": "ipBlock[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Restrict SSL Gateway access to these ip block. No restriction if null",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom name of your SSL Gateway",
          "required": false
        },
        "hsts": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Set to true to enable Strict-Transport-Security HTTP header",
          "required": true
        },
        "httpsRedirect": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Set to true to enable https redirect",
          "required": true
        },
        "ipv4": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "The IPv4 you need to put in the A field of your domain name",
          "required": true
        },
        "ipv6": {
          "type": "ipv6",
          "fullType": "ipv6",
          "canBeNull": true,
          "readOnly": true,
          "description": "The IPv6 you need to put in the AAAA field of your domain name",
          "required": false
        },
        "metricsToken": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The metrics token associated with your SSL Gateway",
          "required": false
        },
        "offer": {
          "type": "sslGateway.OfferEnum",
          "fullType": "sslGateway.OfferEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current offer for your SSL Gateway",
          "required": true
        },
        "reverse": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Custom reverse for your SSL Gateway",
          "required": false
        },
        "serverHttps": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Set to true to contact backend servers over HTTPS",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The internal name of your SSL Gateway",
          "required": true
        },
        "sslConfiguration": {
          "type": "sslGateway.SslConfigurationEnum",
          "fullType": "sslGateway.SslConfigurationEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null.",
          "required": false
        },
        "state": {
          "type": "sslGateway.StateEnum",
          "fullType": "sslGateway.StateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of your SSL Gateway",
          "required": true
        },
        "zones": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Zones of your SSL Gateway",
          "required": true
        }
      }
    },
    "sslGateway.StateEnum": {
      "id": "StateEnum",
      "namespace": "sslGateway",
      "description": "Possible values for SSL Gateway state",
      "enum": [
        "creating",
        "deleted",
        "deleting",
        "http-only",
        "internal",
        "ok",
        "suspended",
        "upgrading"
      ],
      "enumType": "string"
    },
    "sslGateway.Task": {
      "id": "Task",
      "namespace": "sslGateway",
      "description": "SSL Gateway tasks",
      "properties": {
        "action": {
          "type": "sslGateway.TaskActionEnum",
          "fullType": "sslGateway.TaskActionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The action made",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of your task",
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
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task progress percentage",
          "required": true
        },
        "status": {
          "type": "sslGateway.TaskStatusEnum",
          "fullType": "sslGateway.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current status of your task",
          "required": true
        }
      }
    },
    "sslGateway.TaskActionEnum": {
      "id": "TaskActionEnum",
      "namespace": "sslGateway",
      "description": "Possible task action",
      "enum": [
        "addDomain",
        "addPaidCertificate",
        "addServer",
        "createService",
        "deleteDomain",
        "deleteServer",
        "deleteService",
        "internalTask",
        "updateServer",
        "updateService",
        "upgrade"
      ],
      "enumType": "string"
    },
    "sslGateway.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "sslGateway",
      "description": "Possible task status",
      "enum": [
        "blocked",
        "cancelled",
        "doing",
        "done",
        "error",
        "paused",
        "todo"
      ],
      "enumType": "string"
    }
  }
}