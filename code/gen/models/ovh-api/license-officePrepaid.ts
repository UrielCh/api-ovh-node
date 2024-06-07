import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/license/officePrepaid.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about Office services",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:get",
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
      "path": "/license/officePrepaid"
    },
    {
      "description": "Operations about Office services",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.officePrepaid.OfficeUserNativeWithIAM"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Modify the office user",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:put",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.officePrepaid.PutOfficeUserNative",
              "description": "Request Body",
              "fullType": "license.officePrepaid.PutOfficeUserNative",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "Change or reset user's password",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Change password",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:changePassword",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.officePrepaid.OfficeTenantPostChangePassword",
              "description": "Request Body",
              "fullType": "license.officePrepaid.OfficeTenantPostChangePassword",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.officePrepaid.OfficeTaskNative"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/changePassword"
    },
    {
      "description": "Confirm service termination",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Confirm service termination",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:confirmTermination",
              "required": true
            }
          ],
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
              "description": "The termination token sent by email to the admin contact",
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
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:parentTenant/get",
              "required": true
            }
          ],
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
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:parentTenant/edit",
              "required": true
            }
          ],
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
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:serviceInfos/get",
              "required": true
            }
          ],
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
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:serviceInfos/edit",
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
      "description": "Operations about a service tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "List pending task",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:tenantPendingTask/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
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
      "description": "Operations about a service tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:tenantPendingTask/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.officePrepaid.OfficeTaskNative"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/tenantPendingTask/{id}"
    },
    {
      "description": "Get the current total available quantity as well as current usage",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get day-to-day statistics of license usage and availability",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:tenantUsageStatistics/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "Period's start point.",
              "fullType": "datetime",
              "name": "from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Period's end point.",
              "fullType": "datetime",
              "name": "to",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "license.officePrepaid.OfficeCurrentStatisticsNative[]"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/tenantUsageStatistics"
    },
    {
      "description": "Ask for the termination of your service. Admin contact of this service will receive a termination token in order to confirm its termination with /confirmTermination endpoint.",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Ask for the termination of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:terminate",
              "required": true
            }
          ],
          "longDescription": "Ask for the termination of your service. Admin contact of this service will receive a termination token by email in order to confirm its termination with /confirmTermination endpoint.",
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
      "description": "Unconfigure the office user",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unconfigure the office user",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "licenseOfficePrepaid:apiovh:unconfigure",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.officePrepaid.OfficeTaskNative"
        }
      ],
      "path": "/license/officePrepaid/{serviceName}/unconfigure"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
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
    "license.officePrepaid.CountryEnum": {
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
      "namespace": "license.officePrepaid"
    },
    "license.officePrepaid.LicenseEnum": {
      "description": "Office tenant type",
      "enum": [
        "officeBusiness",
        "officeProPlus"
      ],
      "enumType": "string",
      "id": "LicenseEnum",
      "namespace": "license.officePrepaid"
    },
    "license.officePrepaid.OfficeCurrentStatisticsNative": {
      "description": "Office Current Statisitics",
      "id": "OfficeCurrentStatisticsNative",
      "namespace": "license.officePrepaid",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Date of the statistics",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "lines": {
          "canBeNull": false,
          "description": "List of lines associated to this statistics entity.",
          "fullType": "license.officePrepaid.StatisticsLineNative[]",
          "readOnly": true,
          "required": false,
          "type": "license.officePrepaid.StatisticsLineNative[]"
        }
      }
    },
    "license.officePrepaid.OfficeTaskNative": {
      "description": "Office tenant",
      "id": "OfficeTaskNative",
      "namespace": "license.officePrepaid",
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
          "description": "Task status",
          "fullType": "license.officePrepaid.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "license.officePrepaid.TaskStatusEnum"
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
    "license.officePrepaid.OfficeTenantPostChangePassword": {
      "description": "Office change password",
      "id": "OfficeTenantPostChangePassword",
      "namespace": "license.officePrepaid",
      "properties": {
        "notifyEmail": {
          "canBeNull": true,
          "description": "Email to send the new password to. Default is nicAdmin's email",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "password": {
          "canBeNull": true,
          "description": "New password or empty to receive a generated password by email",
          "fullType": "password",
          "readOnly": false,
          "required": false,
          "type": "password"
        },
        "shouldSendMail": {
          "canBeNull": false,
          "description": "Specify if the new password should be send via email or not",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
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
    "license.officePrepaid.OfficeUserNative": {
      "description": "Office tenant",
      "id": "OfficeUserNative",
      "namespace": "license.officePrepaid",
      "properties": {
        "activationEmail": {
          "canBeNull": false,
          "description": "Email used to activate Microsoft Office",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "description": "User's first name",
          "fullType": "string",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "licences": {
          "canBeNull": false,
          "description": "Licenses attributed to the user",
          "fullType": "license.officePrepaid.LicenseEnum[]",
          "readOnly": true,
          "required": false,
          "type": "license.officePrepaid.LicenseEnum[]"
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
          "fullType": "license.officePrepaid.UserStateEnum",
          "readOnly": true,
          "required": false,
          "type": "license.officePrepaid.UserStateEnum"
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
          "fullType": "license.officePrepaid.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "license.officePrepaid.CountryEnum"
        }
      }
    },
    "license.officePrepaid.OfficeUserNativeWithIAM": {
      "description": "Office tenant",
      "id": "OfficeUserNative",
      "namespace": "license.officePrepaid",
      "properties": {
        "activationEmail": {
          "canBeNull": false,
          "description": "Email used to activate Microsoft Office",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "description": "User's first name",
          "fullType": "string",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "licences": {
          "canBeNull": false,
          "description": "Licenses attributed to the user",
          "fullType": "license.officePrepaid.LicenseEnum[]",
          "readOnly": true,
          "required": false,
          "type": "license.officePrepaid.LicenseEnum[]"
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
          "fullType": "license.officePrepaid.UserStateEnum",
          "readOnly": true,
          "required": false,
          "type": "license.officePrepaid.UserStateEnum"
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
          "fullType": "license.officePrepaid.CountryEnum",
          "readOnly": true,
          "required": false,
          "type": "license.officePrepaid.CountryEnum"
        }
      }
    },
    "license.officePrepaid.OfficeUserWithIAM": {
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
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
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
    "license.officePrepaid.PutOfficeUserNative": {
      "description": "Office tenant",
      "id": "PutOfficeUserNative",
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
        "lastName": {
          "canBeNull": false,
          "description": "User's last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "usageLocation": {
          "canBeNull": false,
          "description": "ISO 3166-1 alpha-2 country code where the user is using Office365 services",
          "fullType": "license.officePrepaid.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "license.officePrepaid.CountryEnum"
        }
      }
    },
    "license.officePrepaid.StatisticsLineNative": {
      "description": "License usage statistics line.",
      "id": "StatisticsLineNative",
      "namespace": "license.officePrepaid",
      "properties": {
        "endOfDayCount": {
          "canBeNull": false,
          "description": "Count of activated licenses at the end of the day.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "licenceType": {
          "canBeNull": false,
          "description": "Type of the Office license.",
          "fullType": "license.officePrepaid.LicenseEnum",
          "readOnly": true,
          "required": false,
          "type": "license.officePrepaid.LicenseEnum"
        },
        "peakCount": {
          "canBeNull": false,
          "description": "Maximum count of simultaneous activated licences.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "license.officePrepaid.TaskStatusEnum": {
      "description": "Excahnge task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "license.officePrepaid"
    },
    "license.officePrepaid.UserStateEnum": {
      "description": "Office tenant type",
      "enum": [
        "creating",
        "deleting",
        "ok",
        "suspended",
        "unspending"
      ],
      "enumType": "string",
      "id": "UserStateEnum",
      "namespace": "license.officePrepaid"
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