import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/connectivity.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Get the details for a building",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the details for a building",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Building identifier, that can be found using /connectivity/eligibility/search/building* methods",
              "fullType": "string",
              "name": "building",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.Building>"
        }
      ],
      "path": "/connectivity/eligibility/search/buildingDetails"
    },
    {
      "description": "Get all buildings for a specific address",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all buildings for a specific address",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Street number",
              "fullType": "string",
              "name": "streetNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)",
              "fullType": "string",
              "name": "streetCode",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<connectivity.eligibility.Building>"
        }
      ],
      "path": "/connectivity/eligibility/search/buildings"
    },
    {
      "description": "Get building references from a given line number",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get building references from a given line number",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Line number",
              "fullType": "string",
              "name": "lineNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "connectivity.eligibility.LineStatusEnum",
              "description": "Status of the line number",
              "fullType": "connectivity.eligibility.LineStatusEnum",
              "name": "status",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<connectivity.eligibility.Building>"
        }
      ],
      "path": "/connectivity/eligibility/search/buildingsByLine"
    },
    {
      "description": "Get all localities linked to a zip code",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all localities linked to a zip code",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Zip code",
              "fullType": "string",
              "name": "zipCode",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<connectivity.eligibility.City>"
        }
      ],
      "path": "/connectivity/eligibility/search/cities"
    },
    {
      "description": "Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Street code, that can be found using /connectivity/eligibility/search/streets method",
              "fullType": "string",
              "name": "streetCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Owner name, at least the first three chars",
              "fullType": "string",
              "name": "ownerName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Street number, that can be found using /connectivity/eligibility/search/streetNumbers method",
              "fullType": "string",
              "name": "streetNumber",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<connectivity.eligibility.Line>"
        }
      ],
      "path": "/connectivity/eligibility/search/lines"
    },
    {
      "description": "Search for available line creation meeting time slots, for copper only",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Search for available line creation meeting time slots, for copper only",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Eligibility test reference",
              "fullType": "string",
              "name": "eligibilityReference",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Choosen offer product code",
              "fullType": "string",
              "name": "productCode",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.Meetings>"
        }
      ],
      "path": "/connectivity/eligibility/search/meetings"
    },
    {
      "description": "Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets)",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Street code",
              "fullType": "string",
              "name": "streetCode",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<string>"
        }
      ],
      "path": "/connectivity/eligibility/search/streetNumbers"
    },
    {
      "description": "Get all street linked to a locality",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all street linked to a locality",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "French INSEE identifier (you can get it with POST /connectivity/eligibility/search/cities)",
              "fullType": "string",
              "name": "inseeCode",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<connectivity.eligibility.Street>"
        }
      ],
      "path": "/connectivity/eligibility/search/streets"
    },
    {
      "description": "Get an eligibility by its reference",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get an eligibility by its reference",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Eligibility reference",
              "fullType": "string",
              "name": "eligibilityReference",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "connectivity.eligibility.EligibilityTest"
        }
      ],
      "path": "/connectivity/eligibility/test"
    },
    {
      "description": "Do an eligibility for an address, if no line exist",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Do an eligibility for an address, if no line exist",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Street number",
              "fullType": "string",
              "name": "streetNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)",
              "fullType": "string",
              "name": "streetCode",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>"
        }
      ],
      "path": "/connectivity/eligibility/test/address"
    },
    {
      "description": "Do an eligibility for an address, if no line exist. Partners only.",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Do an eligibility for an address, if no line exist. Partners only.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)",
              "fullType": "string",
              "name": "streetCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Street number",
              "fullType": "string",
              "name": "streetNumber",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>"
        }
      ],
      "path": "/connectivity/eligibility/test/address/partners"
    },
    {
      "description": "Do an eligibility test on a building, for fiber only",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Do an eligibility test on a building, for fiber only",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Building identifier, that can be found using /connectivity/eligibility/search/building* methods",
              "fullType": "string",
              "name": "building",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>"
        }
      ],
      "path": "/connectivity/eligibility/test/building"
    },
    {
      "description": "Do an eligibility test on a line number, for copper only",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Do an eligibility test on a line number, for copper only",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "connectivity.eligibility.LineStatusEnum",
              "description": "Status of the line number",
              "fullType": "connectivity.eligibility.LineStatusEnum",
              "name": "status",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Line number",
              "fullType": "string",
              "name": "lineNumber",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>"
        }
      ],
      "path": "/connectivity/eligibility/test/line"
    },
    {
      "description": "Do an eligibility test on a line number, for copper only. Partners only.",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Do an eligibility test on a line number, for copper only. Partners only.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Line number",
              "fullType": "string",
              "name": "lineNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "connectivity.eligibility.LineStatusEnum",
              "description": "Status of the line number",
              "fullType": "connectivity.eligibility.LineStatusEnum",
              "name": "status",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>"
        }
      ],
      "path": "/connectivity/eligibility/test/line/partners"
    },
    {
      "description": "Do an eligibility test on an OTP (Optical Termination Panel), for fiber only",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Do an eligibility test on an OTP (Optical Termination Panel), for fiber only",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "OTP (Optical Termination Panel) identifier",
              "fullType": "string",
              "name": "otp",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>"
        }
      ],
      "path": "/connectivity/eligibility/test/otp"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List work planned by operators. For partners only",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "connectivity.maintenance.WorkPlanned[]"
        }
      ],
      "path": "/connectivity/maintenance/workPlanned/partners"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List detected, validated and recently closed generic incidents. For partners only",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "description": "Filter by the status of the incident (detected, validated or closed)",
              "fullType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "List only incidents created after this date",
              "fullType": "datetime",
              "name": "creationDate",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "List only incidents closed prior to this date",
              "fullType": "datetime",
              "name": "endDate",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "connectivity.monitoring.GenericIncident[]"
        }
      ],
      "path": "/connectivity/monitoring/genericIncident/partners"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List validated and recently closed generic incidents",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "description": "Filter by the status of the incident (validated or closed)",
              "fullType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "List only incidents created after this date",
              "fullType": "datetime",
              "name": "creationDate",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "List only incidents closed prior to this date",
              "fullType": "datetime",
              "name": "endDate",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "connectivity.monitoring.GenericIncident[]"
        }
      ],
      "path": "/connectivity/monitoring/genericIncident/public"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "connectivity.OperatorEnum": {
      "description": "Operator",
      "enum": [
        "OVH",
        "KOSC",
        "SFR",
        "ORANGE",
        "AXIONE"
      ],
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "connectivity"
    },
    "connectivity.eligibility.ActivationTypeEnum": {
      "description": "Activation type, for copper only",
      "enum": [
        "activate",
        "create",
        "createNeighbour"
      ],
      "enumType": "string",
      "id": "ActivationTypeEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.Address": {
      "description": "Address",
      "id": "Address",
      "namespace": "connectivity.eligibility",
      "properties": {
        "building": {
          "canBeNull": true,
          "description": "Name of the building, if any",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "description": "City name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "door": {
          "canBeNull": true,
          "description": "Identifier of the door, if any",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "floor": {
          "canBeNull": true,
          "description": "Identifier of the floor, if any",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "housingComplex": {
          "canBeNull": true,
          "description": "Name of the housing complex, if any",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "inseeCode": {
          "canBeNull": false,
          "description": "INSEE code",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "ownerName": {
          "canBeNull": true,
          "description": "Owner name, this information can be restricted",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "stairs": {
          "canBeNull": true,
          "description": "Identifier of the stair, if any",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "streetCode": {
          "canBeNull": true,
          "description": "Street code, an unique identifier of the street, hidden for unlisted number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "streetName": {
          "canBeNull": true,
          "description": "Street name, hidden for unlisted number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "streetNumber": {
          "canBeNull": true,
          "description": "Street number, usually a number and an indication if applicable (B for bis, T for ter, etc...) and hidden for unlisted number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zipCode": {
          "canBeNull": false,
          "description": "ZIP code",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.Building": {
      "description": "Details of a Building",
      "id": "Building",
      "namespace": "connectivity.eligibility",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Building name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "nro": {
          "canBeNull": true,
          "description": "Building NRO (Optical main distribution frame)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "reference": {
          "canBeNull": false,
          "description": "Identifier which refer to a building uniquely",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "stairs": {
          "canBeNull": false,
          "description": "Stairs for this building",
          "fullType": "connectivity.eligibility.BuildingStair[]",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.BuildingStair[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Building type",
          "fullType": "connectivity.eligibility.BuildingTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.BuildingTypeEnum"
        }
      }
    },
    "connectivity.eligibility.BuildingStair": {
      "description": "Stair details of a Building",
      "id": "BuildingStair",
      "namespace": "connectivity.eligibility",
      "properties": {
        "floors": {
          "canBeNull": false,
          "description": "List of floor indentifier, \"_NA_\" if no identifier is available",
          "fullType": "string[]",
          "readOnly": false,
          "required": true,
          "type": "string[]"
        },
        "stair": {
          "canBeNull": false,
          "description": "Stair identifier, \"_NA_\" if no identifier is available",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.BuildingTypeEnum": {
      "description": "Building type",
      "enum": [
        "BUILDING",
        "HOUSE"
      ],
      "enumType": "string",
      "id": "BuildingTypeEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.City": {
      "description": "Represent a city",
      "id": "City",
      "namespace": "connectivity.eligibility",
      "properties": {
        "city": {
          "canBeNull": false,
          "description": "Name of the city",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "inseeCode": {
          "canBeNull": false,
          "description": "INSEE code of the city",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "locality": {
          "canBeNull": true,
          "description": "Locality (subset of a city)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zipCode": {
          "canBeNull": false,
          "description": "Zip code of the city",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.CopperInfo": {
      "description": "Copper informations",
      "id": "CopperInfo",
      "namespace": "connectivity.eligibility",
      "properties": {
        "availablePairs": {
          "canBeNull": true,
          "description": "Number of available pairs. This is given only for an eligibility test.",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maxAvailablePairs": {
          "canBeNull": true,
          "description": "Number of maximun available pairs using desaturation. This is given only for an eligibility test.",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "nra": {
          "canBeNull": true,
          "description": "NRA (\"Nœud de raccordement abonné\" in french) is an identifier of the building where is the Main Distribution Frames for the copper line. This is given only for an eligibility test.",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "sectionsLengths": {
          "canBeNull": false,
          "description": "Sections lengths of the copper line. This is given only for an eligibility test.",
          "fullType": "connectivity.eligibility.SectionLength[]",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.SectionLength[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the copper line",
          "fullType": "connectivity.eligibility.LineStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.LineStatusEnum"
        },
        "underConstruction": {
          "canBeNull": true,
          "description": "Is the line under construction ? This is given only for an eligibility test.",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "unlistedNumber": {
          "canBeNull": false,
          "description": "Is the number unlisted ? (\"sur liste rouge\" in french)",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    },
    "connectivity.eligibility.EligibilityTest": {
      "description": "Eligibility test results",
      "id": "EligibilityTest",
      "namespace": "connectivity.eligibility",
      "properties": {
        "eligibilityReference": {
          "canBeNull": false,
          "description": "Eligibility unique reference",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "endpoint": {
          "canBeNull": false,
          "description": "Endpoint informations",
          "fullType": "connectivity.eligibility.Endpoint",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.Endpoint"
        },
        "offers": {
          "canBeNull": false,
          "description": "Offers informations",
          "fullType": "connectivity.eligibility.Offer[]",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.Offer[]"
        }
      }
    },
    "connectivity.eligibility.Endpoint": {
      "description": "Endpoint informations",
      "id": "Endpoint",
      "namespace": "connectivity.eligibility",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address",
          "fullType": "connectivity.eligibility.Address",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.Address"
        },
        "copperInfo": {
          "canBeNull": true,
          "description": "Copper informations, if any",
          "fullType": "connectivity.eligibility.CopperInfo",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.CopperInfo"
        },
        "fiberInfo": {
          "canBeNull": true,
          "description": "Fiber informations, if any",
          "fullType": "connectivity.eligibility.FiberInfo",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.FiberInfo"
        },
        "portability": {
          "canBeNull": true,
          "description": "Portability informations, for copper only",
          "fullType": "connectivity.eligibility.Portability",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.Portability"
        },
        "reference": {
          "canBeNull": false,
          "description": "Reference of the endpoint",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "referenceType": {
          "canBeNull": false,
          "description": "Reference type",
          "fullType": "connectivity.eligibility.EndpointReferenceTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.EndpointReferenceTypeEnum"
        }
      }
    },
    "connectivity.eligibility.EndpointReferenceTypeEnum": {
      "description": "Endpoint reference type",
      "enum": [
        "building",
        "lineNumber",
        "otp"
      ],
      "enumType": "string",
      "id": "EndpointReferenceTypeEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.FiberInfo": {
      "description": "Fiber informations",
      "id": "FiberInfo",
      "namespace": "connectivity.eligibility",
      "properties": {
        "buildingName": {
          "canBeNull": false,
          "description": "Building name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "buildingReference": {
          "canBeNull": false,
          "description": "Building unique identifier",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "buildingType": {
          "canBeNull": false,
          "description": "Building type",
          "fullType": "connectivity.eligibility.BuildingTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.BuildingTypeEnum"
        },
        "nro": {
          "canBeNull": true,
          "description": "NRO (\"Nœud de raccordement optique\" in french) is an identifier of the building where is the Optical Distribution Frame (ODF) of the fiber",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "operatorCode": {
          "canBeNull": false,
          "description": "Operator code",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "operatorName": {
          "canBeNull": false,
          "description": "Operator name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.Line": {
      "description": "Copper line details",
      "id": "Line",
      "namespace": "connectivity.eligibility",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Line address",
          "fullType": "connectivity.eligibility.Address",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.Address"
        },
        "copperInfo": {
          "canBeNull": false,
          "description": "Copper informations",
          "fullType": "connectivity.eligibility.CopperInfo",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.CopperInfo"
        },
        "lineNumber": {
          "canBeNull": false,
          "description": "Line number",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.LineStatusEnum": {
      "description": "Line status",
      "enum": [
        "active",
        "inactive"
      ],
      "enumType": "string",
      "id": "LineStatusEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.MeetingSlot": {
      "description": "Represents a time slot for a meeting",
      "id": "MeetingSlot",
      "namespace": "connectivity.eligibility",
      "properties": {
        "endDate": {
          "canBeNull": false,
          "description": "End date",
          "fullType": "datetime",
          "readOnly": false,
          "required": true,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start date",
          "fullType": "datetime",
          "readOnly": false,
          "required": true,
          "type": "datetime"
        },
        "uiCode": {
          "canBeNull": false,
          "description": "An opaque string that represents an intervention unit",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.Meetings": {
      "description": "List of available meeting time slots",
      "id": "Meetings",
      "namespace": "connectivity.eligibility",
      "properties": {
        "canBookFakeMeeting": {
          "canBeNull": false,
          "description": "Whether or not it is possible to book a fake meeting",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "meetingSlots": {
          "canBeNull": false,
          "description": "A time slot",
          "fullType": "connectivity.eligibility.MeetingSlot[]",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.MeetingSlot[]"
        }
      }
    },
    "connectivity.eligibility.Message": {
      "description": "Message",
      "id": "Message",
      "namespace": "connectivity.eligibility",
      "properties": {
        "availabilityDate": {
          "canBeNull": true,
          "description": "Availability date of the offer (if code of non eligibility is COPPER_NOT_YET_AVAILABLE, FIBER_NOT_YET_AVAILABLE or PRODUCT_NOT_YET_AVAILABLE)",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "code": {
          "canBeNull": false,
          "description": "Code of the message",
          "fullType": "connectivity.eligibility.MessageCodeEnum",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.MessageCodeEnum"
        },
        "message": {
          "canBeNull": false,
          "description": "Message",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.MessageCodeEnum": {
      "description": "Message codes",
      "enum": [
        "2006",
        "2011",
        "2102",
        "2103",
        "2104",
        "2105",
        "3009",
        "3011",
        "3012",
        "3013",
        "3014",
        "3031",
        "3040",
        "3041",
        "3043",
        "3044",
        "3045",
        "3046",
        "3047",
        "3048",
        "3049",
        "ATTENUATION_LIMIT",
        "COMPATIBILITY_CHECK",
        "COPPER_NOT_AVAILABLE",
        "COPPER_NOT_YET_AVAILABLE",
        "DELAY_30",
        "DELAY_7",
        "EXTERNAL_WS_UNREACHABLE",
        "FIBER_NOT_AVAILABLE",
        "FIBER_NOT_DEPLOYED_IN_BUILDING",
        "FIBER_NOT_YET_AVAILABLE",
        "FIBER_NOT_YET_DEPLOYED",
        "INCOMPATIBLE_LOCAL_LOOP",
        "NETWORK_SATURATED",
        "OTP_NOT_CONNECTABLE",
        "OTP_NOT_MARKETABLE",
        "PAIRS_SATURATION",
        "PRODUCT_NOT_AVAILABLE",
        "PRODUCT_NOT_YET_AVAILABLE",
        "TOO_MUCH_ATTENUATION",
        "UNCERTAIN_DATA"
      ],
      "enumType": "string",
      "id": "MessageCodeEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.Offer": {
      "description": "Offer",
      "id": "Offer",
      "namespace": "connectivity.eligibility",
      "properties": {
        "eligibility": {
          "canBeNull": false,
          "description": "Eligibility result for the offer",
          "fullType": "connectivity.eligibility.OfferEligibility",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.OfferEligibility"
        },
        "product": {
          "canBeNull": false,
          "description": "Product informations",
          "fullType": "connectivity.eligibility.OfferProduct",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.OfferProduct"
        }
      }
    },
    "connectivity.eligibility.OfferEligibility": {
      "description": "Offer eligibility",
      "id": "OfferEligibility",
      "namespace": "connectivity.eligibility",
      "properties": {
        "activationTypes": {
          "canBeNull": false,
          "description": "Activation type list, for copper only",
          "fullType": "connectivity.eligibility.ActivationTypeEnum[]",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.ActivationTypeEnum[]"
        },
        "eligible": {
          "canBeNull": false,
          "description": "Is the endpoint eligible to this offer ?",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "estimatedDownloadRate": {
          "canBeNull": true,
          "description": "Estimated download rate, for copper and non guaranteed offers only",
          "fullType": "double",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "estimatedUploadRate": {
          "canBeNull": true,
          "description": "Estimated upload rate, for copper and non guaranteed offers only",
          "fullType": "double",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "reasons": {
          "canBeNull": false,
          "description": "Reasons when not eligible, if any",
          "fullType": "connectivity.eligibility.Message[]",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.Message[]"
        },
        "underConditions": {
          "canBeNull": false,
          "description": "Warnings to consider when eligible, if any",
          "fullType": "connectivity.eligibility.Message[]",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.Message[]"
        }
      }
    },
    "connectivity.eligibility.OfferProduct": {
      "description": "Offer product",
      "id": "OfferProduct",
      "namespace": "connectivity.eligibility",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Product code, an unique identifier for the product",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "downloadRate": {
          "canBeNull": false,
          "description": "Download rate in Mb",
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        },
        "grt": {
          "canBeNull": false,
          "description": "GRT (Guaranteed Restoration Time) available list",
          "fullType": "string[]",
          "readOnly": false,
          "required": true,
          "type": "string[]"
        },
        "guaranteed": {
          "canBeNull": false,
          "description": "Is the rates guaranteed ?",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "pairs": {
          "canBeNull": true,
          "description": "Number of copper pairs required, for copper only",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "provider": {
          "canBeNull": false,
          "description": "Provider",
          "fullType": "connectivity.eligibility.OfferProductProviderEnum",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.OfferProductProviderEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of the product",
          "fullType": "connectivity.eligibility.OfferProductTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.OfferProductTypeEnum"
        },
        "unbundlingType": {
          "canBeNull": true,
          "description": "Unbundling type : full or partial, for copper only",
          "fullType": "connectivity.eligibility.OfferProductUnbundlingTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.OfferProductUnbundlingTypeEnum"
        },
        "uploadRate": {
          "canBeNull": false,
          "description": "Upload rate in Mb",
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        }
      }
    },
    "connectivity.eligibility.OfferProductProviderEnum": {
      "description": "Offer product provider",
      "enum": [
        "AXIONE",
        "KOSC",
        "ORANGE",
        "SFR"
      ],
      "enumType": "string",
      "id": "OfferProductProviderEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.OfferProductTypeEnum": {
      "description": "Offer product type",
      "enum": [
        "ADSL",
        "FTTH",
        "SDSL",
        "VDSL"
      ],
      "enumType": "string",
      "id": "OfferProductTypeEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.OfferProductUnbundlingTypeEnum": {
      "description": "Offer product unbundling type",
      "enum": [
        "full",
        "partial"
      ],
      "enumType": "string",
      "id": "OfferProductUnbundlingTypeEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.Portability": {
      "description": "Portability details of the line number",
      "id": "Portability",
      "namespace": "connectivity.eligibility",
      "properties": {
        "eligibility": {
          "canBeNull": false,
          "description": "Eligibility informations",
          "fullType": "connectivity.eligibility.PortabilityEligibility",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.PortabilityEligibility"
        },
        "quarantineEndDate": {
          "canBeNull": true,
          "description": "Date of the end of quarantine, if any",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "type": {
          "canBeNull": true,
          "description": "Portability type, if a portability is ongoing",
          "fullType": "connectivity.eligibility.PortabilityTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.PortabilityTypeEnum"
        }
      }
    },
    "connectivity.eligibility.PortabilityEligibility": {
      "description": "Portability eligibility",
      "id": "PortabilityEligibility",
      "namespace": "connectivity.eligibility",
      "properties": {
        "eligible": {
          "canBeNull": false,
          "description": "Is the portability eligible for this line ?",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "reasons": {
          "canBeNull": false,
          "description": "Reasons when not eligible, if any",
          "fullType": "connectivity.eligibility.Message[]",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.Message[]"
        },
        "underConditions": {
          "canBeNull": false,
          "description": "Warnings to consider when eligible, if any",
          "fullType": "connectivity.eligibility.Message[]",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.Message[]"
        }
      }
    },
    "connectivity.eligibility.PortabilityTypeEnum": {
      "description": "Portability type",
      "enum": [
        "portin",
        "portinback",
        "portout",
        "subsequent",
        "subsquentportin"
      ],
      "enumType": "string",
      "id": "PortabilityTypeEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.SectionLength": {
      "description": "Section length of a copper line",
      "id": "SectionLength",
      "namespace": "connectivity.eligibility",
      "properties": {
        "diameter": {
          "canBeNull": false,
          "description": "Diameter in millimeters of the copper line section",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "length": {
          "canBeNull": false,
          "description": "Lenght in meters of the copper line section",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "connectivity.eligibility.Street": {
      "description": "Details of a street",
      "id": "Street",
      "namespace": "connectivity.eligibility",
      "properties": {
        "streetCode": {
          "canBeNull": false,
          "description": "Identifier which refer to a street uniquely",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "streetName": {
          "canBeNull": false,
          "description": "Street name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.maintenance.InterventionTypeEnum": {
      "description": "Intervention type",
      "enum": [
        "BACKBONE_MAINTENANCE",
        "CARD_SWAP_WITH_IMPACT",
        "CLUSTER_AN_ROUTER_MIGRATION",
        "DSLAM_LINK_UPGRADE_WITHOUT_CARD_SWAP",
        "DSLAM_UPGRADE_WITH_IMPACT",
        "FIBER_CABLE_LINK_SWAP",
        "FIBER_CONNECTION_WITH_IMPACT",
        "FIBER_MAINTENANCE",
        "FIBER_THIRD_PARTY_WORK_WITH_IMPACT",
        "IP_BACKBONE_LINK_MIGRATION_WITH_IMPACT",
        "IP_BACKBONE_SWITCH_UPGRADE_WITH_IMPACT",
        "IP_MAINTENANCE",
        "LEVEL2_DSLAM_MIGRATION",
        "LINK_MIGRATION_WITH_DSL_IMPACT",
        "LL_THIRD_PARTY_MAINTENANCE_WITH_IMPACT",
        "LOOP_AN_ROUTER_MIGRATION",
        "LOOP_AN_ROUTER_UPGRADE",
        "MAINTENANCE",
        "OPTIC_FIBER_WORK_WITH_OUTAGE_DURING_NON_WORKING_HOURS",
        "PLANNED_CORRECTIVE_MAINTENANCE",
        "SENSITIVE_LOOP_LINK_UPGRADE",
        "TRANSMISSION_CORRECTIVE_MAINTENANCE",
        "TRANSMISSION_CUSTOMER_TRANSFERT_MIGRATION_WITH_IMPACT",
        "TRANSMISSION_FIBRE_MAINTENANCE",
        "TRANSMISSION_LINK_COMMISSIONING_PRODUCTION_DECOMMISSIONING_WORK_WITH_IMPACT",
        "TRANSMISSION_LINK_TRANSFERT_MIGRATION_WITH_IMPACT",
        "TRANSMISSION_MAINTENANCE",
        "TRANSMISSION_MOVING_WITH_IMPACT",
        "TRANSMISSION_SWITCH_UPGRADE_WITH_IMPACT",
        "WITH_IMPACT"
      ],
      "enumType": "string",
      "id": "InterventionTypeEnum",
      "namespace": "connectivity.maintenance"
    },
    "connectivity.maintenance.WorkPlanned": {
      "description": "Work Planned operation structure",
      "id": "WorkPlanned",
      "namespace": "connectivity.maintenance",
      "properties": {
        "dateBegin": {
          "canBeNull": false,
          "description": "Begin date, the work planned operation starts at this time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "dateEnd": {
          "canBeNull": false,
          "description": "End date, the work planned operation finishes at the time",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Work Planned operation id",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "interventionType": {
          "canBeNull": false,
          "description": "Full description of the work planned operation",
          "fullType": "connectivity.maintenance.InterventionTypeEnum",
          "readOnly": true,
          "required": true,
          "type": "connectivity.maintenance.InterventionTypeEnum"
        },
        "operator": {
          "canBeNull": false,
          "description": "Concerned operator by work planned operation",
          "fullType": "connectivity.OperatorEnum",
          "readOnly": true,
          "required": true,
          "type": "connectivity.OperatorEnum"
        },
        "technology": {
          "canBeNull": false,
          "description": "Technology impacted by the work planned operation",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.monitoring.GenericIncident": {
      "description": "Generic incident structure",
      "id": "GenericIncident",
      "namespace": "connectivity.monitoring",
      "properties": {
        "comment": {
          "canBeNull": true,
          "description": "Optional comment, that contains some informations and updates about the generic incident",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date, the generic incident has been detected",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "departments": {
          "canBeNull": false,
          "description": "List of impacted department codes",
          "fullType": "string[]",
          "readOnly": true,
          "required": true,
          "type": "string[]"
        },
        "endDate": {
          "canBeNull": true,
          "description": "End date, the generic incident is resolved and closed",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Generic incident id",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "nra": {
          "canBeNull": false,
          "description": "List of impacted NRA/NRO",
          "fullType": "string[]",
          "readOnly": true,
          "required": true,
          "type": "string[]"
        },
        "operators": {
          "canBeNull": false,
          "description": "List of impacted operators",
          "fullType": "connectivity.OperatorEnum[]",
          "readOnly": true,
          "required": true,
          "type": "connectivity.OperatorEnum[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Status (detected: we detected a potential generic incident, validated: the operators or our tech teams have confirmed the generic incident, closed: the generic incident is resolved and closed)",
          "fullType": "connectivity.monitoring.GenericIncidentStatusEnum",
          "readOnly": true,
          "required": true,
          "type": "connectivity.monitoring.GenericIncidentStatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "connectivity.monitoring.GenericIncidentStatusEnum": {
      "description": "Generic incident status",
      "enum": [
        "detected",
        "validated",
        "closed"
      ],
      "enumType": "string",
      "id": "GenericIncidentStatusEnum",
      "namespace": "connectivity.monitoring"
    },
    "xdsl.AsyncTask<T>": {
      "description": "Async task",
      "generics": [
        "T"
      ],
      "id": "AsyncTask",
      "namespace": "xdsl",
      "properties": {
        "error": {
          "canBeNull": true,
          "description": "Error",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Result of the call",
          "fullType": "T",
          "readOnly": false,
          "required": false,
          "type": "T"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the call",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTaskArray<T>": {
      "description": "Async task array",
      "generics": [
        "T"
      ],
      "id": "AsyncTaskArray",
      "namespace": "xdsl",
      "properties": {
        "error": {
          "canBeNull": true,
          "description": "Error",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Result of the call",
          "fullType": "T[]",
          "readOnly": false,
          "required": false,
          "type": "T[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the call",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTaskStatusEnum": {
      "description": "AsyncTask status",
      "enum": [
        "error",
        "ok",
        "pending"
      ],
      "enumType": "string",
      "id": "AsyncTaskStatusEnum",
      "namespace": "xdsl"
    }
  },
  "resourcePath": "/connectivity"
}