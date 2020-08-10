import {Schema} from '../../src/schema';

export const schema: Schema = {
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "models": {
    "ip.SpamIp": {
      "id": "SpamIp",
      "properties": {
        "time": {
          "fullType": "long",
          "description": "Time (in seconds) while the IP will be blocked",
          "canBeNull": false,
          "readOnly": true,
          "type": "long"
        },
        "date": {
          "canBeNull": false,
          "type": "datetime",
          "readOnly": true,
          "description": "Last date the ip was blocked",
          "fullType": "datetime"
        },
        "ipSpamming": {
          "fullType": "ipv4",
          "description": "IP address which is sending spam",
          "type": "ipv4",
          "readOnly": true,
          "canBeNull": false
        },
        "state": {
          "canBeNull": false,
          "readOnly": true,
          "type": "ip.SpamStateEnum",
          "description": "Current state of the ip",
          "fullType": "ip.SpamStateEnum"
        }
      },
      "namespace": "ip",
      "description": "Your IP spam stats"
    },
    "ip.MitigationStats": {
      "id": "MitigationStats",
      "properties": {
        "in": {
          "type": "ip.MitigationTraffic",
          "canBeNull": true,
          "description": "Traffic in"
        },
        "timestamp": {
          "description": "Traffic timestamp",
          "type": "long",
          "canBeNull": false
        },
        "out": {
          "canBeNull": true,
          "type": "ip.MitigationTraffic",
          "description": "Traffic out"
        }
      },
      "description": "Traffic statistics in and out on a mitigated ip",
      "namespace": "ip"
    },
    "ip.Antiphishing": {
      "id": "Antiphishing",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "datetime",
          "description": "Date of the event"
        },
        "ipOnAntiphishing": {
          "type": "ipv4",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "ipv4",
          "description": "IP address hosting the phishing URL"
        },
        "state": {
          "description": "Current state of the phishing",
          "fullType": "ip.AntiphishingStateEnum",
          "type": "ip.AntiphishingStateEnum",
          "readOnly": true,
          "canBeNull": false
        },
        "urlPhishing": {
          "type": "string",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "string",
          "description": "Phishing URL"
        },
        "id": {
          "canBeNull": false,
          "readOnly": true,
          "type": "long",
          "description": "Internal ID of the phishing entry",
          "fullType": "long"
        }
      },
      "description": "Phishing URLs hosted on your IP",
      "namespace": "ip"
    },
    "ip.ServiceIp": {
      "properties": {
        "description": {
          "fullType": "string",
          "description": "Custom description on your ip",
          "readOnly": false,
          "type": "string",
          "canBeNull": true
        },
        "routedTo": {
          "description": "Routage information",
          "fullType": "ip.RoutedTo",
          "canBeNull": true,
          "type": "ip.RoutedTo",
          "readOnly": true
        },
        "canBeTerminated": {
          "description": null,
          "fullType": "boolean",
          "type": "boolean",
          "readOnly": true,
          "canBeNull": false
        },
        "country": {
          "readOnly": true,
          "type": "coreTypes.CountryEnum",
          "canBeNull": true,
          "description": null,
          "fullType": "coreTypes.CountryEnum"
        },
        "ip": {
          "canBeNull": false,
          "readOnly": true,
          "type": "ipBlock",
          "description": null,
          "fullType": "ipBlock"
        },
        "type": {
          "fullType": "ip.IpTypeEnum",
          "description": null,
          "readOnly": true,
          "type": "ip.IpTypeEnum",
          "canBeNull": false
        },
        "organisationId": {
          "description": "IP block organisation Id",
          "fullType": "string",
          "type": "string",
          "readOnly": true,
          "canBeNull": true
        }
      },
      "id": "ServiceIp",
      "namespace": "ip",
      "description": "Your IP linked to service"
    },
    "ip.MitigationTraffic": {
      "id": "MitigationTraffic",
      "properties": {
        "bps": {
          "description": "Bits per second",
          "type": "long",
          "canBeNull": false
        },
        "pps": {
          "description": "Paquets per second",
          "type": "long",
          "canBeNull": false
        }
      },
      "namespace": "ip",
      "description": "Traffic on mitigation"
    },
    "coreTypes.CountryEnum": {
      "namespace": "coreTypes",
      "description": "ISO country codes",
      "enumType": "string",
      "id": "CountryEnum",
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
      ]
    },
    "ip.SpamStats": {
      "description": "Spam statistics about an IP address",
      "namespace": "ip",
      "properties": {
        "averageSpamscore": {
          "description": "Average spam score.",
          "canBeNull": true,
          "type": "long"
        },
        "timestamp": {
          "description": "Time when the IP address was blocked",
          "canBeNull": false,
          "type": "long"
        },
        "numberOfSpams": {
          "canBeNull": false,
          "type": "long",
          "description": "Number of spams sent"
        },
        "total": {
          "type": "long",
          "canBeNull": false,
          "description": "Number of emails sent"
        },
        "detectedSpams": {
          "description": "Detailed list of the spams",
          "type": "ip.SpamTarget[]",
          "canBeNull": true
        }
      },
      "id": "SpamStats"
    },
    "ip.Ip": {
      "id": "Ip",
      "properties": {
        "country": {
          "description": null,
          "fullType": "coreTypes.CountryEnum",
          "canBeNull": true,
          "type": "coreTypes.CountryEnum",
          "readOnly": true
        },
        "ip": {
          "description": null,
          "fullType": "ipBlock",
          "canBeNull": false,
          "type": "ipBlock",
          "readOnly": true
        },
        "organisationId": {
          "fullType": "string",
          "description": "IP block organisation Id",
          "canBeNull": true,
          "readOnly": true,
          "type": "string"
        },
        "type": {
          "readOnly": true,
          "type": "ip.IpTypeEnum",
          "canBeNull": false,
          "description": null,
          "fullType": "ip.IpTypeEnum"
        },
        "description": {
          "readOnly": false,
          "type": "string",
          "canBeNull": true,
          "description": "Custom description on your ip",
          "fullType": "string"
        },
        "routedTo": {
          "fullType": "ip.RoutedTo",
          "description": "Routage information",
          "readOnly": true,
          "type": "ip.RoutedTo",
          "canBeNull": true
        },
        "canBeTerminated": {
          "description": null,
          "fullType": "boolean",
          "type": "boolean",
          "readOnly": true,
          "canBeNull": false
        }
      },
      "description": "Your IP",
      "namespace": "ip"
    },
    "ip.IpTask": {
      "id": "IpTask",
      "properties": {
        "destination": {
          "type": "ip.RoutedTo",
          "readOnly": true,
          "canBeNull": true,
          "fullType": "ip.RoutedTo",
          "description": "Destination for moveFloatingIp tasks"
        },
        "status": {
          "canBeNull": false,
          "readOnly": true,
          "type": "ip.TaskStatusEnum",
          "fullType": "ip.TaskStatusEnum",
          "description": "Task status"
        },
        "lastUpdate": {
          "description": "last update",
          "fullType": "datetime",
          "readOnly": true,
          "type": "datetime",
          "canBeNull": true
        },
        "doneDate": {
          "description": "Completion date",
          "fullType": "datetime",
          "canBeNull": true,
          "type": "datetime",
          "readOnly": true
        },
        "startDate": {
          "description": "Task Creation date",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "type": "datetime"
        },
        "taskId": {
          "description": "the id of the task",
          "fullType": "long",
          "canBeNull": false,
          "type": "long",
          "readOnly": true
        },
        "comment": {
          "fullType": "string",
          "description": "Details of this task",
          "canBeNull": true,
          "readOnly": true,
          "type": "string"
        },
        "function": {
          "type": "ip.TaskFunctionEnum",
          "readOnly": true,
          "canBeNull": false,
          "fullType": "ip.TaskFunctionEnum",
          "description": "Function name"
        }
      },
      "description": "IP tasks",
      "namespace": "ip"
    },
    "ip.SpamStateEnum": {
      "id": "SpamStateEnum",
      "enum": [
        "blockedForSpam",
        "unblocked",
        "unblocking"
      ],
      "enumType": "string",
      "namespace": "ip",
      "description": "Possible values for spam state"
    },
    "ip.ArpBlockedIp": {
      "id": "ArpBlockedIp",
      "properties": {
        "blockedSince": {
          "readOnly": true,
          "type": "datetime",
          "canBeNull": false,
          "fullType": "datetime",
          "description": "The last blocking date"
        },
        "ipBlocked": {
          "canBeNull": false,
          "readOnly": true,
          "type": "ipv4",
          "fullType": "ipv4",
          "description": "your IP"
        },
        "state": {
          "readOnly": true,
          "type": "ip.ArpStateEnum",
          "canBeNull": false,
          "fullType": "ip.ArpStateEnum",
          "description": "this IP address state"
        },
        "logs": {
          "readOnly": true,
          "type": "text",
          "canBeNull": true,
          "fullType": "text",
          "description": "ARP logs"
        },
        "time": {
          "description": "Time (in seconds) remaining before you can request your IP to be unblocked",
          "fullType": "long",
          "type": "long",
          "readOnly": true,
          "canBeNull": false
        }
      },
      "namespace": "ip",
      "description": "ARP blocked IP information"
    },
    "ip.BlockedIp": {
      "properties": {
        "time": {
          "canBeNull": false,
          "type": "long",
          "readOnly": true,
          "description": "Time (in seconds) remaining before you can request your IP to be unblocked",
          "fullType": "long"
        },
        "blockedSince": {
          "type": "datetime",
          "readOnly": true,
          "canBeNull": false,
          "description": "The last blocking date",
          "fullType": "datetime"
        },
        "ipBlocked": {
          "readOnly": true,
          "type": "ipv4",
          "canBeNull": false,
          "fullType": "ipv4",
          "description": "your IP"
        },
        "logs": {
          "fullType": "text",
          "description": "Logs",
          "type": "text",
          "readOnly": true,
          "canBeNull": true
        },
        "state": {
          "type": "ip.BlockedIpStateEnum",
          "readOnly": true,
          "canBeNull": false,
          "description": "this IP address state",
          "fullType": "ip.BlockedIpStateEnum"
        }
      },
      "id": "BlockedIp",
      "description": "Blocked IP information",
      "namespace": "ip"
    },
    "ip.ReverseIp": {
      "description": "Your reverse records on IP",
      "namespace": "ip",
      "id": "ReverseIp",
      "properties": {
        "reverse": {
          "fullType": "string",
          "description": null,
          "canBeNull": false,
          "readOnly": true,
          "type": "string"
        },
        "ipReverse": {
          "canBeNull": false,
          "readOnly": true,
          "type": "ip",
          "description": null,
          "fullType": "ip"
        }
      }
    },
    "ip.IpTypeEnum": {
      "enum": [
        "cdn",
        "cloud",
        "dedicated",
        "failover",
        "hosted_ssl",
        "housing",
        "loadBalancing",
        "mail",
        "overthebox",
        "pcc",
        "pci",
        "private",
        "vpn",
        "vps",
        "vrack",
        "xdsl"
      ],
      "id": "IpTypeEnum",
      "description": "Possible values for ip type",
      "namespace": "ip",
      "enumType": "string"
    },
    "ip.RipeInfos": {
      "properties": {
        "description": {
          "canBeNull": true,
          "type": "string",
          "readOnly": false,
          "description": null,
          "fullType": "string"
        },
        "netname": {
          "fullType": "string",
          "description": null,
          "type": "string",
          "readOnly": false,
          "canBeNull": true
        }
      },
      "id": "RipeInfos",
      "description": "IP block RIPE informations",
      "namespace": "ip"
    },
    "service.TerminationReasonEnum": {
      "description": "All reasons you can provide for a service termination",
      "namespace": "service",
      "enumType": "string",
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
      "id": "TerminationReasonEnum"
    },
    "services.NonExpiringService": {
      "namespace": "services",
      "description": "Details about a non-expiring Service",
      "id": "NonExpiringService",
      "properties": {
        "contactTech": {
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": true,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "type": "string",
          "readOnly": true,
          "fullType": "string",
          "description": null
        },
        "status": {
          "description": null,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "type": "service.StateEnum",
          "canBeNull": false
        },
        "contactAdmin": {
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "type": "string",
          "readOnly": true
        },
        "contactBilling": {
          "description": null,
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "type": "string",
          "readOnly": true
        },
        "creation": {
          "readOnly": true,
          "type": "date",
          "canBeNull": false,
          "fullType": "date",
          "description": null
        },
        "serviceId": {
          "canBeNull": false,
          "readOnly": true,
          "type": "long",
          "fullType": "coreTypes.ServiceId:long",
          "description": null
        }
      }
    },
    "ip.BlockedIpStateEnum": {
      "enumType": "string",
      "description": "Possible values for IP state",
      "namespace": "ip",
      "id": "BlockedIpStateEnum",
      "enum": [
        "blocked",
        "unblocking"
      ]
    },
    "ip.RoutedTo": {
      "namespace": "ip",
      "description": "Information about routing",
      "properties": {
        "serviceName": {
          "type": "string",
          "canBeNull": true,
          "description": "Service where ip is routed to"
        }
      },
      "id": "RoutedTo"
    },
    "service.StateEnum": {
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "id": "StateEnum",
      "description": "",
      "namespace": "service",
      "enumType": "string"
    },
    "ip.AntiphishingStateEnum": {
      "enum": [
        "blocked",
        "blocking",
        "unblocked",
        "unblocking"
      ],
      "id": "AntiphishingStateEnum",
      "enumType": "string",
      "namespace": "ip",
      "description": "Possible values for antiphishing state"
    },
    "ip.MitigationAttack": {
      "description": "Mitigation attack on your ip",
      "namespace": "ip",
      "properties": {
        "ipAttack": {
          "readOnly": true,
          "type": "ipv4",
          "canBeNull": false,
          "description": "Your ip",
          "fullType": "ipv4"
        },
        "endDate": {
          "fullType": "datetime",
          "description": "End of the attack",
          "canBeNull": true,
          "readOnly": true,
          "type": "datetime"
        },
        "idAttack": {
          "readOnly": true,
          "type": "long",
          "canBeNull": false,
          "description": "Internal id of your attack",
          "fullType": "long"
        },
        "startDate": {
          "canBeNull": false,
          "readOnly": true,
          "type": "datetime",
          "description": "Start of the attack",
          "fullType": "datetime"
        }
      },
      "id": "MitigationAttack"
    },
    "ip.ArpStateEnum": {
      "id": "ArpStateEnum",
      "enum": [
        "blocked",
        "unblocking"
      ],
      "enumType": "string",
      "description": "Possible values for IP state",
      "namespace": "ip"
    },
    "ip.TaskFunctionEnum": {
      "id": "TaskFunctionEnum",
      "enum": [
        "arinBlockReassign",
        "changeRipeOrg",
        "checkAndReleaseIp",
        "genericMoveFloatingIp"
      ],
      "description": "different task operation",
      "namespace": "ip",
      "enumType": "string"
    },
    "service.TerminationFutureUseEnum": {
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "id": "TerminationFutureUseEnum",
      "enumType": "string",
      "namespace": "service",
      "description": "All future uses you can provide for a service termination"
    },
    "ip.SpamTarget": {
      "id": "SpamTarget",
      "properties": {
        "destinationIp": {
          "description": "IP address of the target",
          "type": "ipv4",
          "canBeNull": false
        },
        "spamscore": {
          "description": "Spam score for the email",
          "type": "long",
          "canBeNull": false
        },
        "messageId": {
          "canBeNull": false,
          "type": "string",
          "description": "The message-id of the email"
        },
        "date": {
          "canBeNull": false,
          "type": "long",
          "description": "Timestamp when the email was sent"
        }
      },
      "namespace": "ip",
      "description": "Spam's target information"
    },
    "ip.TaskStatusEnum": {
      "enumType": "string",
      "namespace": "ip",
      "description": "different task status",
      "id": "TaskStatusEnum",
      "enum": [
        "cancelled",
        "customerError",
        "doing",
        "done",
        "init",
        "ovhError",
        "todo"
      ]
    }
  },
  "apiVersion": "1.0",
  "apis": [
    {
      "operations": [
        {
          "parameters": [
            {
              "paramType": "query",
              "description": "Filter the value of ip property (contains or equals)",
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": false
            },
            {
              "name": "type",
              "required": false,
              "paramType": "query",
              "fullType": "ip.IpTypeEnum",
              "description": "Filter the value of type property (=)",
              "dataType": "ip.IpTypeEnum"
            },
            {
              "name": "routedTo.serviceName",
              "required": false,
              "paramType": "query",
              "fullType": "string",
              "description": "Filter the value of routedTo.serviceName property (like)",
              "dataType": "string"
            },
            {
              "required": false,
              "name": "description",
              "dataType": "string",
              "fullType": "string",
              "paramType": "query",
              "description": "Filter the value of description property (like)"
            }
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "responseFullType": "ipBlock[]",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Your OVH IPs",
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/ip",
      "description": "List the ip.Ip objects"
    },
    {
      "description": "Your IP linked to service",
      "path": "/ip/service/{serviceName}",
      "operations": [
        {
          "responseFullType": "ip.ServiceIp",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "responseType": "ip.ServiceIp",
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP services",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "name": "serviceName"
            }
          ],
          "httpMethod": "GET",
          "noAuthentication": false
        },
        {
          "noAuthentication": false,
          "httpMethod": "PUT",
          "parameters": [
            {
              "paramType": "body",
              "description": "New object properties",
              "fullType": "ip.ServiceIp",
              "dataType": "ip.ServiceIp",
              "name": null,
              "required": true
            },
            {
              "paramType": "path",
              "description": "The internal name of your IP services",
              "fullType": "string",
              "dataType": "string",
              "name": "serviceName",
              "required": true
            }
          ],
          "responseType": "void",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "path": "/ip/service/{serviceName}/confirmTermination",
      "description": "Confirm termination of your service",
      "operations": [
        {
          "resellerOnly": false,
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Confirm termination of your service",
          "responseType": "string",
          "responseFullType": "string",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "futureUse",
              "required": false,
              "paramType": "body",
              "fullType": "service.TerminationFutureUseEnum",
              "description": "What next after your termination request",
              "dataType": "service.TerminationFutureUseEnum"
            },
            {
              "dataType": "service.TerminationReasonEnum",
              "description": "Reason of your termination request",
              "paramType": "body",
              "fullType": "service.TerminationReasonEnum",
              "required": false,
              "name": "reason"
            },
            {
              "dataType": "string",
              "description": "Commentary about your termination request",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "name": "commentary"
            },
            {
              "required": true,
              "name": "token",
              "dataType": "string",
              "fullType": "string",
              "paramType": "body",
              "description": "The termination token sent by mail to the admin contact"
            },
            {
              "dataType": "string",
              "description": "The internal name of your IP services",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "name": "serviceName"
            }
          ],
          "httpMethod": "POST"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "string",
          "responseType": "string",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Terminate your service",
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your IP services",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "name": "serviceName"
            }
          ],
          "httpMethod": "POST",
          "noAuthentication": false
        }
      ],
      "path": "/ip/service/{serviceName}/terminate",
      "description": "Terminate your service"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "name": "serviceName",
              "required": true,
              "paramType": "path",
              "fullType": "string",
              "description": "The internal name of your IP services",
              "dataType": "string"
            }
          ],
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "Get this object properties",
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "responseType": "services.NonExpiringService",
          "responseFullType": "services.NonExpiringService"
        }
      ],
      "description": "Details about a non-expiring Service",
      "path": "/ip/service/{serviceName}/serviceInfos"
    },
    {
      "path": "/ip/service",
      "description": "Operations about the IP service",
      "operations": [
        {
          "responseFullType": "string[]",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available services",
          "responseType": "string[]",
          "parameters": [],
          "httpMethod": "GET",
          "noAuthentication": false
        }
      ]
    },
    {
      "description": "IP block RIPE informations",
      "path": "/ip/{ip}/ripe",
      "operations": [
        {
          "responseType": "ip.RipeInfos",
          "description": "Get this object properties",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "ip.RipeInfos",
          "noAuthentication": false,
          "httpMethod": "GET",
          "parameters": [
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            }
          ]
        },
        {
          "responseFullType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Alter this object properties",
          "resellerOnly": false,
          "responseType": "void",
          "parameters": [
            {
              "required": true,
              "name": null,
              "dataType": "ip.RipeInfos",
              "fullType": "ip.RipeInfos",
              "paramType": "body",
              "description": "New object properties"
            },
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            }
          ],
          "httpMethod": "PUT",
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Get this object properties",
          "responseType": "ip.ReverseIp",
          "responseFullType": "ip.ReverseIp",
          "noAuthentication": false,
          "httpMethod": "GET",
          "parameters": [
            {
              "required": true,
              "name": "ip",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "paramType": "path",
              "description": null
            },
            {
              "dataType": "ip",
              "description": null,
              "paramType": "path",
              "fullType": "ip",
              "required": true,
              "name": "ipReverse"
            }
          ]
        },
        {
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Delete a reverse on one IP",
          "responseType": "void",
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "required": true,
              "name": "ip",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "paramType": "path",
              "description": null
            },
            {
              "required": true,
              "name": "ipReverse",
              "dataType": "ip",
              "fullType": "ip",
              "paramType": "path",
              "description": null
            }
          ],
          "httpMethod": "DELETE"
        }
      ],
      "description": "Your reverse records on IP",
      "path": "/ip/{ip}/reverse/{ipReverse}"
    },
    {
      "operations": [
        {
          "responseFullType": "ip[]",
          "responseType": "ip[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Reverse on your ip",
          "resellerOnly": false,
          "parameters": [
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "noAuthentication": false
        },
        {
          "httpMethod": "POST",
          "parameters": [
            {
              "required": true,
              "name": "reverse",
              "dataType": "string",
              "fullType": "string",
              "paramType": "body",
              "description": null
            },
            {
              "required": true,
              "name": "ipReverse",
              "dataType": "ip",
              "fullType": "ip",
              "paramType": "body",
              "description": null
            },
            {
              "required": true,
              "name": "ip",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "paramType": "path",
              "description": null
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.ReverseIp",
          "responseType": "ip.ReverseIp",
          "resellerOnly": false,
          "description": "Add reverse on an ip",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ],
      "path": "/ip/{ip}/reverse",
      "description": "List the ip.ReverseIp objects"
    },
    {
      "description": "unblock operations",
      "path": "/ip/{ip}/antihack/{ipBlocked}/unblock",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            },
            {
              "name": "ipBlocked",
              "required": true,
              "paramType": "path",
              "fullType": "ipv4",
              "description": "your IP",
              "dataType": "ipv4"
            }
          ],
          "httpMethod": "POST",
          "responseType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Unblock this IP",
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ]
    },
    {
      "path": "/ip/{ip}/antihack/{ipBlocked}",
      "description": "Blocked IP information",
      "operations": [
        {
          "httpMethod": "GET",
          "parameters": [
            {
              "required": true,
              "name": "ip",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "paramType": "path",
              "description": null
            },
            {
              "paramType": "path",
              "description": "your IP",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "name": "ipBlocked",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.BlockedIp",
          "responseType": "ip.BlockedIp",
          "resellerOnly": false,
          "description": "Get this object properties",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          }
        }
      ]
    },
    {
      "operations": [
        {
          "responseType": "ipv4[]",
          "description": "Anti-Hack blocked IP",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "ipv4[]",
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "query",
              "description": "Filter the value of state property (=)",
              "fullType": "ip.BlockedIpStateEnum",
              "dataType": "ip.BlockedIpStateEnum",
              "name": "state",
              "required": false
            },
            {
              "required": true,
              "name": "ip",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "paramType": "path",
              "description": null
            }
          ],
          "httpMethod": "GET"
        }
      ],
      "path": "/ip/{ip}/antihack",
      "description": "List the ip.BlockedIp objects"
    },
    {
      "description": "List the license.sqlserver.SqlServer objects",
      "path": "/ip/{ip}/license/sqlserver",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "SQL Server licenses associated to this IP",
          "resellerOnly": false,
          "responseType": "string[]",
          "responseFullType": "string[]",
          "noAuthentication": false,
          "httpMethod": "GET",
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipAddress property (=)",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "name": "ipAddress"
            },
            {
              "required": true,
              "name": "ip",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "paramType": "path",
              "description": null
            }
          ]
        }
      ]
    },
    {
      "path": "/ip/{ip}/license/cloudLinux",
      "description": "List the license.cloudLinux.CloudLinux objects",
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "required": false,
              "name": "ipAddress",
              "dataType": "ipv4",
              "fullType": "ipv4",
              "paramType": "query",
              "description": "Filter the value of ipAddress property (=)"
            },
            {
              "required": true,
              "name": "ip",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "paramType": "path",
              "description": null
            }
          ],
          "httpMethod": "GET",
          "resellerOnly": false,
          "description": "Cloud Linux licenses associated to this IP",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "string[]",
          "responseFullType": "string[]"
        }
      ]
    },
    {
      "operations": [
        {
          "responseFullType": "ip.SpamIp",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Release the ip from anti-spam system",
          "resellerOnly": false,
          "responseType": "ip.SpamIp",
          "httpMethod": "POST",
          "parameters": [
            {
              "required": true,
              "name": "ip",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "paramType": "path",
              "description": null
            },
            {
              "paramType": "path",
              "description": "IP address which is sending spam",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "name": "ipSpamming",
              "required": true
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/ip/{ip}/spam/{ipSpamming}/unblock",
      "description": "unblock operations"
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "to",
              "required": true,
              "paramType": "query",
              "fullType": "datetime",
              "description": "End date",
              "dataType": "datetime"
            },
            {
              "name": "from",
              "required": true,
              "paramType": "query",
              "fullType": "datetime",
              "description": "Start date",
              "dataType": "datetime"
            },
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            },
            {
              "paramType": "path",
              "description": "IP address which is sending spam",
              "fullType": "ipv4",
              "dataType": "ipv4",
              "name": "ipSpamming",
              "required": true
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.SpamStats[]",
          "responseType": "ip.SpamStats[]",
          "description": "Get statistics about the email traffic",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false
        }
      ],
      "description": "stats operations",
      "path": "/ip/{ip}/spam/{ipSpamming}/stats"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "httpMethod": "GET",
          "parameters": [
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            },
            {
              "required": true,
              "name": "ipSpamming",
              "dataType": "ipv4",
              "fullType": "ipv4",
              "paramType": "path",
              "description": "IP address which is sending spam"
            }
          ],
          "responseType": "ip.SpamIp",
          "description": "Get this object properties",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseFullType": "ip.SpamIp"
        }
      ],
      "description": "Your IP spam stats",
      "path": "/ip/{ip}/spam/{ipSpamming}"
    },
    {
      "description": "List the ip.SpamIp objects",
      "path": "/ip/{ip}/spam",
      "operations": [
        {
          "responseFullType": "ipv4[]",
          "responseType": "ipv4[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Ip spamming",
          "resellerOnly": false,
          "httpMethod": "GET",
          "parameters": [
            {
              "required": false,
              "name": "state",
              "dataType": "ip.SpamStateEnum",
              "fullType": "ip.SpamStateEnum",
              "paramType": "query",
              "description": "Filter the value of state property (=)"
            },
            {
              "dataType": "ipBlock",
              "description": null,
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "name": "ip"
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            }
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "responseFullType": "ip.Ip",
          "description": "Get this object properties",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "resellerOnly": false,
          "responseType": "ip.Ip"
        },
        {
          "responseFullType": "void",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Alter this object properties",
          "resellerOnly": false,
          "responseType": "void",
          "httpMethod": "PUT",
          "parameters": [
            {
              "required": true,
              "name": null,
              "dataType": "ip.Ip",
              "fullType": "ip.Ip",
              "paramType": "body",
              "description": "New object properties"
            },
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            }
          ],
          "noAuthentication": false
        }
      ],
      "path": "/ip/{ip}",
      "description": "Your IP"
    },
    {
      "operations": [
        {
          "parameters": [
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            },
            {
              "required": true,
              "name": "id",
              "dataType": "long",
              "fullType": "long",
              "paramType": "path",
              "description": "Internal ID of the phishing entry"
            }
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "responseFullType": "ip.Antiphishing",
          "resellerOnly": false,
          "description": "Get this object properties",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "ip.Antiphishing"
        }
      ],
      "description": "Phishing URLs hosted on your IP",
      "path": "/ip/{ip}/phishing/{id}"
    },
    {
      "operations": [
        {
          "responseFullType": "long[]",
          "responseType": "long[]",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Ip under anti-phishing",
          "resellerOnly": false,
          "httpMethod": "GET",
          "parameters": [
            {
              "required": false,
              "name": "state",
              "dataType": "ip.AntiphishingStateEnum",
              "fullType": "ip.AntiphishingStateEnum",
              "paramType": "query",
              "description": "Filter the value of state property (=)"
            },
            {
              "dataType": "ipv4",
              "description": "Filter the value of ipOnAntiphishing property (within or equals)",
              "paramType": "query",
              "fullType": "ipv4",
              "required": false,
              "name": "ipOnAntiphishing"
            },
            {
              "name": "ip",
              "required": true,
              "paramType": "path",
              "fullType": "ipBlock",
              "description": null,
              "dataType": "ipBlock"
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "List the ip.Antiphishing objects",
      "path": "/ip/{ip}/phishing"
    },
    {
      "operations": [
        {
          "responseFullType": "ip.ArpBlockedIp",
          "responseType": "ip.ArpBlockedIp",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Get this object properties",
          "resellerOnly": false,
          "parameters": [
            {
              "name": "ip",
              "required": true,
              "paramType": "path",
              "fullType": "ipBlock",
              "description": null,
              "dataType": "ipBlock"
            },
            {
              "required": true,
              "name": "ipBlocked",
              "dataType": "ipv4",
              "fullType": "ipv4",
              "paramType": "path",
              "description": "your IP"
            }
          ],
          "httpMethod": "GET",
          "noAuthentication": false
        }
      ],
      "description": "ARP blocked IP information",
      "path": "/ip/{ip}/arp/{ipBlocked}"
    },
    {
      "operations": [
        {
          "noAuthentication": false,
          "parameters": [
            {
              "name": "ip",
              "required": true,
              "paramType": "path",
              "fullType": "ipBlock",
              "description": null,
              "dataType": "ipBlock"
            },
            {
              "dataType": "ipv4",
              "description": "your IP",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "name": "ipBlocked"
            }
          ],
          "httpMethod": "POST",
          "responseType": "void",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Unblock this IP",
          "responseFullType": "void"
        }
      ],
      "description": "unblock operations",
      "path": "/ip/{ip}/arp/{ipBlocked}/unblock"
    },
    {
      "path": "/ip/{ip}/arp",
      "description": "List the ip.ArpBlockedIp objects",
      "operations": [
        {
          "responseFullType": "ipv4[]",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "ARP blocked IP",
          "responseType": "ipv4[]",
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "state",
              "required": false,
              "paramType": "query",
              "fullType": "ip.ArpStateEnum",
              "description": "Filter the value of state property (=)",
              "dataType": "ip.ArpStateEnum"
            },
            {
              "required": true,
              "name": "ip",
              "dataType": "ipBlock",
              "fullType": "ipBlock",
              "paramType": "path",
              "description": null
            }
          ],
          "noAuthentication": false
        }
      ]
    },
    {
      "operations": [
        {
          "httpMethod": "GET",
          "parameters": [
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            },
            {
              "required": true,
              "name": "taskId",
              "dataType": "long",
              "fullType": "long",
              "paramType": "path",
              "description": "the id of the task"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "ip.IpTask",
          "resellerOnly": false,
          "description": "Get this object properties",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "ip.IpTask"
        }
      ],
      "path": "/ip/{ip}/task/{taskId}",
      "description": "IP tasks"
    },
    {
      "operations": [
        {
          "responseFullType": "long[]",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "IP tasks",
          "responseType": "long[]",
          "httpMethod": "GET",
          "parameters": [
            {
              "required": false,
              "name": "function",
              "dataType": "ip.TaskFunctionEnum",
              "fullType": "ip.TaskFunctionEnum",
              "paramType": "query",
              "description": "Filter the value of function property (=)"
            },
            {
              "name": "status",
              "required": false,
              "paramType": "query",
              "fullType": "ip.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "dataType": "ip.TaskStatusEnum"
            },
            {
              "paramType": "path",
              "description": null,
              "fullType": "ipBlock",
              "dataType": "ipBlock",
              "name": "ip",
              "required": true
            }
          ],
          "noAuthentication": false
        }
      ],
      "description": "List the ip.IpTask objects",
      "path": "/ip/{ip}/task"
    }
  ],
  "resourcePath": "/ip"
}