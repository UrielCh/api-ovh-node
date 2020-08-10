import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/license/office",
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
      "description": "Operations about the OFFICE service"
    },
    {
      "path": "/license/office/{serviceName}",
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
          "responseType": "license.office.OfficeTenant",
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
              "dataType": "license.office.OfficeTenant",
              "paramType": "body",
              "fullType": "license.office.OfficeTenant",
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
      "description": "Office tenant"
    },
    {
      "path": "/license/office/{serviceName}/domain",
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
          "description": "Domain associated to this office tenant"
        }
      ],
      "description": "List the license.office.OfficeDomain objects"
    },
    {
      "path": "/license/office/{serviceName}/domain/{domainName}",
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
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "license.office.OfficeDomain",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Office domain"
    },
    {
      "path": "/license/office/{serviceName}/pendingTask",
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
          "description": "Tasks associated to this office tenant"
        }
      ],
      "description": "List the license.office.OfficeTask objects"
    },
    {
      "path": "/license/office/{serviceName}/pendingTask/{id}",
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
          "responseType": "license.office.OfficeTask",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Office task"
    },
    {
      "path": "/license/office/{serviceName}/serviceInfos",
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
      "path": "/license/office/{serviceName}/usageStatistics",
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
              "name": "from",
              "dataType": "date",
              "paramType": "query",
              "fullType": "date",
              "required": true,
              "description": "Period's start point."
            },
            {
              "name": "to",
              "dataType": "date",
              "paramType": "query",
              "fullType": "date",
              "required": true,
              "description": "Period's end point."
            }
          ],
          "responseType": "license.office.Statistics[]",
          "noAuthentication": false,
          "description": "Shows the subscriptions' usage statistics for the given time period"
        }
      ],
      "description": "usageStatistics operations"
    },
    {
      "path": "/license/office/{serviceName}/user",
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
              "name": "firstName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of firstName property (like)"
            },
            {
              "name": "licences",
              "dataType": "license.office.LicenceEnum[]",
              "paramType": "query",
              "fullType": "license.office.LicenceEnum[]",
              "required": false,
              "description": "Filter the value of licences property (=)"
            },
            {
              "name": "activationEmail",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of activationEmail property (like)"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of lastName property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Accounts associated to this office tenant"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Account first name"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Account login"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Office domain"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Account last name"
            },
            {
              "name": "licence",
              "dataType": "license.office.LicenceEnum",
              "paramType": "body",
              "fullType": "license.office.LicenceEnum",
              "required": true,
              "description": "Office licence"
            },
            {
              "name": "usageLocation",
              "dataType": "coreTypes.CountryEnum",
              "paramType": "body",
              "fullType": "coreTypes.CountryEnum",
              "required": false,
              "description": "ISO 3166-1 alpha-2 country code where the user is using Office365 services"
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
          "responseType": "license.office.OfficeTask",
          "noAuthentication": false,
          "description": "Create new office user"
        }
      ],
      "description": "List the license.office.OfficeUser objects"
    },
    {
      "path": "/license/office/{serviceName}/user/{activationEmail}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "activationEmail",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Activation email"
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
          "responseType": "license.office.OfficeTask",
          "noAuthentication": false,
          "description": "Delete existing office user"
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
              "name": "activationEmail",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Activation email"
            }
          ],
          "responseType": "license.office.OfficeUser",
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
              "dataType": "license.office.OfficeUser",
              "paramType": "body",
              "fullType": "license.office.OfficeUser",
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
              "name": "activationEmail",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Activation email"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Office user"
    },
    {
      "path": "/license/office/{serviceName}/user/{activationEmail}/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "notifyEmail",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Email to send the new password to. Default is nicAdmin's email."
            },
            {
              "name": "shouldSendMail",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Specify if the new password should be send via email or not."
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": false,
              "description": "New password or empty to receive a generated password by email"
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
              "name": "activationEmail",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Activation email"
            }
          ],
          "responseType": "license.office.OfficeTask",
          "noAuthentication": false,
          "description": "Change or reset  user's password"
        }
      ],
      "description": "changePassword operations"
    }
  ],
  "resourcePath": "/license/office",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "coreTypes.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "coreTypes",
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
      "enumType": "string"
    },
    "license.office.DomainStateEnum": {
      "id": "DomainStateEnum",
      "namespace": "license.office",
      "description": "Office domain state",
      "enum": [
        "ok",
        "unverified"
      ],
      "enumType": "string"
    },
    "license.office.LicenceEnum": {
      "id": "LicenceEnum",
      "namespace": "license.office",
      "description": "Office Licence",
      "enum": [
        "officeBusiness",
        "officeProPlus"
      ],
      "enumType": "string"
    },
    "license.office.OfficeDomain": {
      "id": "OfficeDomain",
      "namespace": "license.office",
      "description": "Office domain",
      "properties": {
        "domainName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain name",
          "required": true
        },
        "status": {
          "type": "license.office.DomainStateEnum",
          "fullType": "license.office.DomainStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain state",
          "required": true
        },
        "txtEntry": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "TXT entry required for domain validation",
          "required": true
        }
      }
    },
    "license.office.OfficeTask": {
      "id": "OfficeTask",
      "namespace": "license.office",
      "description": "Office task",
      "properties": {
        "finishDate": {
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
          "description": "Task's unique identifier",
          "required": true
        },
        "status": {
          "type": "license.office.TaskStatusEnum",
          "fullType": "license.office.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task state",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        }
      }
    },
    "license.office.OfficeTenant": {
      "id": "OfficeTenant",
      "namespace": "license.office",
      "description": "Office tenant",
      "properties": {
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's address line",
          "required": true
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's city",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Tenant's display name",
          "required": true
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's fisrt name",
          "required": true
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's fisrt name",
          "required": true
        },
        "phone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": false,
          "readOnly": false,
          "description": "Primary phone number",
          "required": true
        },
        "serviceType": {
          "type": "license.office.ServiceTypeEnum",
          "fullType": "license.office.ServiceTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Tenant's service type",
          "required": true
        },
        "status": {
          "type": "license.office.ServiceStateEnum",
          "fullType": "license.office.ServiceStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "zipCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's zip code",
          "required": true
        }
      }
    },
    "license.office.OfficeUser": {
      "id": "OfficeUser",
      "namespace": "license.office",
      "description": "Office user",
      "properties": {
        "activationEmail": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email used to activate Microsoft Office",
          "required": true
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not this user slot will be resigned at the next renew period",
          "required": true
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "User's first name",
          "required": true
        },
        "isVirtual": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Specify if the user is actually a user slot (configureme) or a real user",
          "required": true
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "User's last name",
          "required": true
        },
        "licences": {
          "type": "license.office.LicenceEnum[]",
          "fullType": "license.office.LicenceEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Licenses attributed to the user",
          "required": true
        },
        "status": {
          "type": "license.office.UserStateEnum",
          "fullType": "license.office.UserStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "User state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        },
        "usageLocation": {
          "type": "coreTypes.CountryEnum",
          "fullType": "coreTypes.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "ISO 3166-1 alpha-2 country code where the user is using Office365 services",
          "required": true
        }
      }
    },
    "license.office.ServiceStateEnum": {
      "id": "ServiceStateEnum",
      "namespace": "license.office",
      "description": "Office tenant state",
      "enum": [
        "creating",
        "inMaintenance",
        "ok",
        "suspended"
      ],
      "enumType": "string"
    },
    "license.office.ServiceTypeEnum": {
      "id": "ServiceTypeEnum",
      "namespace": "license.office",
      "description": "Type of service",
      "enum": [
        "payAsYouGo",
        "prepaid"
      ],
      "enumType": "string"
    },
    "license.office.Statistics": {
      "id": "Statistics",
      "namespace": "license.office",
      "description": "License usage statistics.",
      "properties": {
        "date": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date of the statistics.",
          "required": true
        },
        "lines": {
          "type": "license.office.StatisticsLine[]",
          "fullType": "license.office.StatisticsLine[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of lines associated to this statistics entity.",
          "required": true
        }
      }
    },
    "license.office.StatisticsLine": {
      "id": "StatisticsLine",
      "namespace": "license.office",
      "description": "License usage statistics line.",
      "properties": {
        "endOfDayCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Count of activated licenses at the end of the day.",
          "required": true
        },
        "licenceType": {
          "type": "license.office.LicenceEnum",
          "fullType": "license.office.LicenceEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the Office license.",
          "required": true
        },
        "peakCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum count of simultaneous activated licences.",
          "required": true
        }
      }
    },
    "license.office.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "license.office",
      "description": "Exchange task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "license.office.UserStateEnum": {
      "id": "UserStateEnum",
      "namespace": "license.office",
      "description": "Office user  state",
      "enum": [
        "creating",
        "deleting",
        "ok"
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
    }
  }
}