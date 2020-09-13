import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/supply/mondialRelay.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Find the 10 nearest MondialRelay points from address or city.",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Find the 10 nearest MondialRelay points from address or city.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Address",
              "fullType": "string",
              "name": "address",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "City",
              "fullType": "string",
              "name": "city",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "coreTypes.CountryEnum",
              "description": "ISO country code",
              "fullType": "coreTypes.CountryEnum",
              "name": "country",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Zip Code",
              "fullType": "string",
              "name": "zipcode",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "supply.MondialRelayReturn"
        }
      ],
      "path": "/supply/mondialRelay"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
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
    "supply.MondialRelay": {
      "description": "Mondial Relay Point Details",
      "id": "MondialRelay",
      "namespace": "supply",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Relay point address",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "description": "City",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "closing": {
          "canBeNull": true,
          "description": "Relay point closing dates",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelayClosingPeriod[]"
        },
        "country": {
          "canBeNull": false,
          "description": "Relay country",
          "readOnly": false,
          "required": false,
          "type": "coreTypes.CountryEnum"
        },
        "distance": {
          "canBeNull": true,
          "description": "Distance between address and relay point",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "id": {
          "canBeNull": false,
          "description": "Mondial Relay point ID",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lat": {
          "canBeNull": false,
          "description": "Relay point latitude",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "lng": {
          "canBeNull": false,
          "description": "Relay point longitude",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "mapUrl": {
          "canBeNull": true,
          "description": "URL of short map",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Relay point name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "opening": {
          "canBeNull": false,
          "description": "Relay point opening hours",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelayOpening"
        },
        "pictureUrl": {
          "canBeNull": true,
          "description": "Relay point picture\\s URL",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zipcode": {
          "canBeNull": false,
          "description": "Zipcode",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "supply.MondialRelayClosingPeriod": {
      "description": "Closing period for mondial relay point",
      "id": "MondialRelayClosingPeriod",
      "namespace": "supply",
      "properties": {
        "end": {
          "canBeNull": false,
          "description": "Ending of closing period",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "start": {
          "canBeNull": false,
          "description": "Beginning of closing period",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "supply.MondialRelayDayPeriod": {
      "description": "Opening range for mondial relay point",
      "id": "MondialRelayDayPeriod",
      "namespace": "supply",
      "properties": {
        "end": {
          "canBeNull": false,
          "description": "Ending time (00:00 format)",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "start": {
          "canBeNull": false,
          "description": "Starting time (00:00 format)",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "supply.MondialRelayOpening": {
      "description": "Day with schedule for mondial relay point opening",
      "id": "MondialRelayOpening",
      "namespace": "supply",
      "properties": {
        "friday": {
          "canBeNull": true,
          "description": "Opening range",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelayDayPeriod[]"
        },
        "monday": {
          "canBeNull": true,
          "description": "Opening range",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelayDayPeriod[]"
        },
        "saturday": {
          "canBeNull": true,
          "description": "Opening range",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelayDayPeriod[]"
        },
        "sunday": {
          "canBeNull": true,
          "description": "Opening range",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelayDayPeriod[]"
        },
        "thursday": {
          "canBeNull": true,
          "description": "Opening range",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelayDayPeriod[]"
        },
        "tuesday": {
          "canBeNull": true,
          "description": "Opening range",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelayDayPeriod[]"
        },
        "wednesday": {
          "canBeNull": true,
          "description": "Opening range",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelayDayPeriod[]"
        }
      }
    },
    "supply.MondialRelayResult": {
      "description": "Status and Mondial Relay Point Details",
      "id": "MondialRelayResult",
      "namespace": "supply",
      "properties": {
        "referenceAddress": {
          "canBeNull": false,
          "description": "Reference address for finding RelayPoints",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "relayPoints": {
          "canBeNull": false,
          "description": "Array of relay points",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelay[]"
        }
      }
    },
    "supply.MondialRelayReturn": {
      "description": "Status and Mondial Relay Point Details",
      "id": "MondialRelayReturn",
      "namespace": "supply",
      "properties": {
        "error": {
          "canBeNull": true,
          "description": "Error",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Relay points list and reference address",
          "readOnly": false,
          "required": false,
          "type": "supply.MondialRelayResult"
        },
        "status": {
          "canBeNull": false,
          "description": "Request status",
          "readOnly": false,
          "required": false,
          "type": "supply.Status"
        }
      }
    },
    "supply.Status": {
      "description": "Request status",
      "enum": [
        "error",
        "ok",
        "pending"
      ],
      "enumType": "string",
      "id": "Status",
      "namespace": "supply"
    }
  },
  "resourcePath": "/supply/mondialRelay"
}