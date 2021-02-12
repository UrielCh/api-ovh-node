import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/sslGateway.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the SSLGATEWAY service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/sslGateway"
    },
    {
      "description": "Your SSL Gateway",
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
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sslGateway.SslGateway"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sslGateway.SslGateway",
              "description": "New object properties",
              "fullType": "sslGateway.SslGateway",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sslGateway/{serviceName}"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/sslGateway/{serviceName}/changeContact"
    },
    {
      "description": "Confirm termination of your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/sslGateway/{serviceName}/confirmTermination"
    },
    {
      "description": "List the sslGateway.Domain objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Domains attached to your SSL Gateway",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Attach a new domain to your SSL Gateway",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain to attach",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sslGateway.Domain"
        }
      ],
      "path": "/sslGateway/{serviceName}/domain"
    },
    {
      "description": "Domain attached to an SSL Gateway",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Detach a domain from your SSL Gateway",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your domain",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your domain",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sslGateway.Domain"
        }
      ],
      "path": "/sslGateway/{serviceName}/domain/{id}"
    },
    {
      "description": "natIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Ip subnet used by OVH to nat requests to your SSL Gateway backends.",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sslGateway.NatIps[]"
        }
      ],
      "path": "/sslGateway/{serviceName}/natIp"
    },
    {
      "description": "renewCertificate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Renew your SSL certificates",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain on which you want to renew certificate",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/sslGateway/{serviceName}/renewCertificate"
    },
    {
      "description": "List the sslGateway.Server objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Servers attached to your SSL Gateway",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Add a new server to your SSL Gateway",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "IPv4 address of your server",
              "fullType": "ip",
              "name": "address",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Port of your server",
              "fullType": "long",
              "name": "port",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sslGateway.Server"
        }
      ],
      "path": "/sslGateway/{serviceName}/server"
    },
    {
      "description": "Server attached to an SSL Gateway",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Remove a server",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sslGateway.Server"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sslGateway.Server",
              "description": "New object properties",
              "fullType": "sslGateway.Server",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of your server",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sslGateway/{serviceName}/server/{id}"
    },
    {
      "description": "Details about a Service",
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
              "description": "The internal name of your SSL Gateway",
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
            "description": "Beta version",
            "value": "BETA"
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
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sslGateway/{serviceName}/serviceInfos"
    },
    {
      "description": "List the sslGateway.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Task for this SSL Gateway",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/sslGateway/{serviceName}/task"
    },
    {
      "description": "SSL Gateway tasks",
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
              "dataType": "long",
              "description": "Id of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sslGateway.Task"
        }
      ],
      "path": "/sslGateway/{serviceName}/task/{id}"
    },
    {
      "description": "Terminate your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Terminate your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your SSL Gateway",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/sslGateway/{serviceName}/terminate"
    },
    {
      "description": "List of zone available for an SSL Gateway",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List of zone available for an SSL Gateway",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/sslGateway/availableZones"
    },
    {
      "description": "Check domain eligibility. Return list of eligible IP(s) for this domain.",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Check domain eligibility. Return list of eligible IP(s) for this domain.",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "domain to check eligibility for SSL Gateway offer",
              "fullType": "string",
              "name": "domain",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "sslGateway.EligibilityStatus"
        }
      ],
      "path": "/sslGateway/eligibility"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
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
    "sslGateway.Domain": {
      "description": "Domain attached to an SSL Gateway",
      "id": "Domain",
      "namespace": "sslGateway",
      "properties": {
        "domain": {
          "canBeNull": false,
          "description": "Domain name attached to your SSL Gateway",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of your domain",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Domain state",
          "fullType": "sslGateway.DomainStateEnum",
          "readOnly": true,
          "required": false,
          "type": "sslGateway.DomainStateEnum"
        }
      }
    },
    "sslGateway.DomainStateEnum": {
      "description": "Possible values for SSL Gateway domain state",
      "enum": [
        "creating",
        "deleted",
        "deleting",
        "http-only",
        "internal",
        "ok"
      ],
      "enumType": "string",
      "id": "DomainStateEnum",
      "namespace": "sslGateway"
    },
    "sslGateway.EligibilityStatus": {
      "description": "A structure describing the eligibility status of a domain",
      "id": "EligibilityStatus",
      "namespace": "sslGateway",
      "properties": {
        "domain": {
          "canBeNull": false,
          "description": "Customer domain name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ip6s": {
          "canBeNull": false,
          "description": "Eligible IP(s) v6 for this domain",
          "readOnly": false,
          "required": false,
          "type": "ipv6[]"
        },
        "ips": {
          "canBeNull": false,
          "description": "Eligible IP(s) for this domain",
          "readOnly": false,
          "required": false,
          "type": "ipv4[]"
        },
        "isHostedByOvh": {
          "canBeNull": false,
          "description": "Whether this domain is hosted by Ovh or not",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "sslGateway.NatIps": {
      "description": "a list of {zone, nat Ip}",
      "id": "NatIps",
      "namespace": "sslGateway",
      "properties": {
        "ip": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "zone": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "sslGateway.OfferEnum": {
      "description": "List of SSL Gateway offers",
      "enum": [
        "advanced",
        "enterprise",
        "free",
        "internal"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "sslGateway"
    },
    "sslGateway.Server": {
      "description": "Server attached to an SSL Gateway",
      "id": "Server",
      "namespace": "sslGateway",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "IP address of the server attached to your SSL Gateway",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of your server",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "port": {
          "canBeNull": false,
          "description": "Port of your server attached to your SSL Gateway",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Server state",
          "fullType": "sslGateway.ServerStateEnum",
          "readOnly": true,
          "required": false,
          "type": "sslGateway.ServerStateEnum"
        }
      }
    },
    "sslGateway.ServerStateEnum": {
      "description": "Possible values for SSL Gateway server state",
      "enum": [
        "creating",
        "deleted",
        "deleting",
        "internal",
        "ok",
        "updating"
      ],
      "enumType": "string",
      "id": "ServerStateEnum",
      "namespace": "sslGateway"
    },
    "sslGateway.SslConfigurationEnum": {
      "description": "Possible values for ssl ciphers",
      "enum": [
        "intermediate",
        "internal",
        "modern"
      ],
      "enumType": "string",
      "id": "SslConfigurationEnum",
      "namespace": "sslGateway"
    },
    "sslGateway.SslGateway": {
      "description": "Your SSL Gateway",
      "id": "SslGateway",
      "namespace": "sslGateway",
      "properties": {
        "allowedSource": {
          "canBeNull": true,
          "description": "Restrict SSL Gateway access to these ip block. No restriction if null",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Custom name of your SSL Gateway",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "hsts": {
          "canBeNull": false,
          "description": "Set to true to enable Strict-Transport-Security HTTP header",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "httpsRedirect": {
          "canBeNull": false,
          "description": "Set to true to enable https redirect",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ipv4": {
          "canBeNull": false,
          "description": "The IPv4 you need to put in the A field of your domain name",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "The IPv6 you need to put in the AAAA field of your domain name. DEPRECATED",
          "fullType": "ipv6",
          "readOnly": true,
          "required": false,
          "type": "ipv6"
        },
        "metricsToken": {
          "canBeNull": true,
          "description": "The metrics token associated with your SSL Gateway",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "offer": {
          "canBeNull": false,
          "description": "Current offer for your SSL Gateway",
          "fullType": "sslGateway.OfferEnum",
          "readOnly": true,
          "required": false,
          "type": "sslGateway.OfferEnum"
        },
        "reverse": {
          "canBeNull": true,
          "description": "Custom reverse for your SSL Gateway",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "serverHttps": {
          "canBeNull": false,
          "description": "Set to true to contact backend servers over HTTPS",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "The internal name of your SSL Gateway",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sslConfiguration": {
          "canBeNull": true,
          "description": "Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null.",
          "fullType": "sslGateway.SslConfigurationEnum",
          "readOnly": false,
          "required": false,
          "type": "sslGateway.SslConfigurationEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your SSL Gateway",
          "fullType": "sslGateway.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "sslGateway.StateEnum"
        },
        "zones": {
          "canBeNull": false,
          "description": "Zones of your SSL Gateway",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "sslGateway.StateEnum": {
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
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "sslGateway"
    },
    "sslGateway.Task": {
      "description": "SSL Gateway tasks",
      "id": "Task",
      "namespace": "sslGateway",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "The action made",
          "fullType": "sslGateway.TaskActionEnum",
          "readOnly": true,
          "required": false,
          "type": "sslGateway.TaskActionEnum"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date of your task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "progress": {
          "canBeNull": false,
          "description": "Task progress percentage",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Current status of your task",
          "fullType": "sslGateway.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "sslGateway.TaskStatusEnum"
        }
      }
    },
    "sslGateway.TaskActionEnum": {
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
      "enumType": "string",
      "id": "TaskActionEnum",
      "namespace": "sslGateway"
    },
    "sslGateway.TaskStatusEnum": {
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
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "sslGateway"
    }
  },
  "resourcePath": "/sslGateway"
}