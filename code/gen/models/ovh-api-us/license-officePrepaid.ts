import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/license/officePrepaid.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the OFFICE service",
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
      "path": "/license/officePrepaid"
    },
    {
      "description": "Office user",
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
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.officePrepaid.OfficeUser"
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
              "dataType": "license.officePrepaid.OfficeUser",
              "description": "New object properties",
              "fullType": "license.officePrepaid.OfficeUser",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Change or reset  user's password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email to send the new password to. Default is nicAdmin's email.",
              "fullType": "string",
              "name": "notifyEmail",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "password",
              "description": "New password or empty to receive a generated password by email",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Specify if the new password should be send via email or not.",
              "fullType": "boolean",
              "name": "shouldSendMail",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.office.OfficeTask"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/changePassword"
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
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/confirmTermination"
    },
    {
      "description": "parentTenant operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Retrieve the parent tenant of this office user",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.office.OfficeTenant"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Modify the parent tenant of this office user",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Display name associated to the tenant",
              "fullType": "string",
              "name": "displayName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/parentTenant"
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
              "description": "The service name of your office account",
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
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/serviceInfos"
    },
    {
      "description": "List the license.office.OfficeTask objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Tasks associated to this user's tenant",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/tenantPendingTask"
    },
    {
      "description": "Office task",
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
              "description": "Task's unique identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.office.OfficeTask"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/tenantPendingTask/{id}"
    },
    {
      "description": "tenantUsageStatistics operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Shows the subscriptions' usage statistics for the given time period",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "date",
              "description": "Period's start point.",
              "fullType": "date",
              "name": "from",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "date",
              "description": "Period's end point.",
              "fullType": "date",
              "name": "to",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "license.office.Statistics[]"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/tenantUsageStatistics"
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
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/terminate"
    },
    {
      "description": "unconfigure operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Unconfigure the office user",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The service name of your office account",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.office.OfficeTask"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/unconfigure"
    }
  ],
  "basePath": "https://api.us.ovhcloud.com/1.0",
  "models": {
    "coreTypes.CountryEnum": {
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
      ],
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "coreTypes"
    },
    "license.office.LicenceEnum": {
      "description": "Office Licence",
      "enum": [
        "officeBusiness",
        "officeProPlus"
      ],
      "enumType": "string",
      "id": "LicenceEnum",
      "namespace": "license.office"
    },
    "license.office.OfficeTask": {
      "description": "Office task",
      "id": "OfficeTask",
      "namespace": "license.office",
      "properties": {
        "finishDate": {
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
          "description": "Task's unique identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Task state",
          "fullType": "license.office.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "license.office.TaskStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "license.office.OfficeTenant": {
      "description": "Office tenant",
      "id": "OfficeTenant",
      "namespace": "license.office",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Contact's address line",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "description": "Contact's city",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "displayName": {
          "canBeNull": false,
          "description": "Tenant's display name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "description": "Contact's fisrt name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastName": {
          "canBeNull": false,
          "description": "Contact's fisrt name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": false,
          "description": "Primary phone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Internal service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceType": {
          "canBeNull": false,
          "description": "Tenant's service type",
          "fullType": "license.office.ServiceTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "license.office.ServiceTypeEnum"
        },
        "status": {
          "canBeNull": false,
          "fullType": "license.office.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "license.office.ServiceStateEnum"
        },
        "zipCode": {
          "canBeNull": false,
          "description": "Contact's zip code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "license.office.ServiceStateEnum": {
      "description": "Office tenant state",
      "enum": [
        "creating",
        "inMaintenance",
        "ok",
        "suspended"
      ],
      "enumType": "string",
      "id": "ServiceStateEnum",
      "namespace": "license.office"
    },
    "license.office.ServiceTypeEnum": {
      "description": "Type of service",
      "enum": [
        "payAsYouGo",
        "prepaid"
      ],
      "enumType": "string",
      "id": "ServiceTypeEnum",
      "namespace": "license.office"
    },
    "license.office.Statistics": {
      "description": "License usage statistics.",
      "id": "Statistics",
      "namespace": "license.office",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Date of the statistics.",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "lines": {
          "canBeNull": false,
          "description": "List of lines associated to this statistics entity.",
          "readOnly": false,
          "required": false,
          "type": "license.office.StatisticsLine[]"
        }
      }
    },
    "license.office.StatisticsLine": {
      "description": "License usage statistics line.",
      "id": "StatisticsLine",
      "namespace": "license.office",
      "properties": {
        "endOfDayCount": {
          "canBeNull": false,
          "description": "Count of activated licenses at the end of the day.",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "licenceType": {
          "canBeNull": false,
          "description": "Type of the Office license.",
          "readOnly": false,
          "required": false,
          "type": "license.office.LicenceEnum"
        },
        "peakCount": {
          "canBeNull": false,
          "description": "Maximum count of simultaneous activated licences.",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "license.office.TaskStatusEnum": {
      "description": "Exchange task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "license.office"
    },
    "license.office.UserStateEnum": {
      "description": "Office user  state",
      "enum": [
        "creating",
        "deleting",
        "ok"
      ],
      "enumType": "string",
      "id": "UserStateEnum",
      "namespace": "license.office"
    },
    "license.officePrepaid.OfficeUser": {
      "description": "Office user",
      "id": "OfficeUser",
      "namespace": "license.officePrepaid",
      "properties": {
        "activationEmail": {
          "canBeNull": false,
          "description": "Email used to activate Microsoft Office",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "description": "User's first name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "isVirtual": {
          "canBeNull": false,
          "description": "Specify if the user is actually a user slot (configureme) or a real user",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lastName": {
          "canBeNull": false,
          "description": "User's last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "licences": {
          "canBeNull": false,
          "description": "Licenses attributed to the user",
          "fullType": "license.office.LicenceEnum[]",
          "readOnly": true,
          "required": false,
          "type": "license.office.LicenceEnum[]"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "User service name, used in invoices",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "User state",
          "fullType": "license.office.UserStateEnum",
          "readOnly": true,
          "required": false,
          "type": "license.office.UserStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "tenantServiceName": {
          "canBeNull": false,
          "description": "User's tenant service name, used in invoices",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "usageLocation": {
          "canBeNull": false,
          "description": "ISO 3166-1 alpha-2 country code where the user is using Office365 services",
          "fullType": "coreTypes.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "coreTypes.CountryEnum"
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
  "resourcePath": "/license/officePrepaid"
}