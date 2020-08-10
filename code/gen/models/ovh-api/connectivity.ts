import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/connectivity/eligibility/search/buildingDetails",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "building",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Building identifier, that can be found using /connectivity/eligibility/search/building* methods"
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.Building>",
          "noAuthentication": true,
          "description": "Get the details for a building"
        }
      ],
      "description": "Get the details for a building"
    },
    {
      "path": "/connectivity/eligibility/search/buildings",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "streetCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)"
            },
            {
              "name": "streetNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Street number"
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<connectivity.eligibility.Building>",
          "noAuthentication": true,
          "description": "Get all buildings for a specific address"
        }
      ],
      "description": "Get all buildings for a specific address"
    },
    {
      "path": "/connectivity/eligibility/search/buildingsByLine",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "status",
              "dataType": "connectivity.eligibility.LineStatusEnum",
              "paramType": "body",
              "fullType": "connectivity.eligibility.LineStatusEnum",
              "required": true,
              "description": "Status of the line number"
            },
            {
              "name": "lineNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Line number"
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<connectivity.eligibility.Building>",
          "noAuthentication": true,
          "description": "Get building references from a given line number"
        }
      ],
      "description": "Get building references from a given line number"
    },
    {
      "path": "/connectivity/eligibility/search/cities",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "zipCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Zip code"
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<connectivity.eligibility.City>",
          "noAuthentication": true,
          "description": "Get all localities linked to a zip code"
        }
      ],
      "description": "Get all localities linked to a zip code"
    },
    {
      "path": "/connectivity/eligibility/search/lines",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "streetCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Street code, that can be found using /connectivity/eligibility/search/streets method"
            },
            {
              "name": "ownerName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Owner name, at least the first three chars"
            },
            {
              "name": "streetNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Street number, that can be found using /connectivity/eligibility/search/streetNumbers method"
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<connectivity.eligibility.Line>",
          "noAuthentication": true,
          "description": "Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified"
        }
      ],
      "description": "Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified"
    },
    {
      "path": "/connectivity/eligibility/search/meetings",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "productCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Choosen offer product code"
            },
            {
              "name": "eligibilityReference",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Eligibility test reference"
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.Meetings>",
          "noAuthentication": true,
          "description": "Search for available line creation meeting time slots, for copper only"
        }
      ],
      "description": "Search for available line creation meeting time slots, for copper only"
    },
    {
      "path": "/connectivity/eligibility/search/streetNumbers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "streetCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Street code"
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<string>",
          "noAuthentication": true,
          "description": "Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets)"
        }
      ],
      "description": "Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets)"
    },
    {
      "path": "/connectivity/eligibility/search/streets",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "inseeCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "French INSEE identifier (you can get it with POST /connectivity/eligibility/search/cities)"
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<connectivity.eligibility.Street>",
          "noAuthentication": true,
          "description": "Get all street linked to a locality"
        }
      ],
      "description": "Get all street linked to a locality"
    },
    {
      "path": "/connectivity/eligibility/test",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "eligibilityReference",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "Eligibility reference"
            }
          ],
          "responseType": "connectivity.eligibility.EligibilityTest",
          "noAuthentication": true,
          "description": "Get an eligibility by its reference"
        }
      ],
      "description": "Get an eligibility by its reference"
    },
    {
      "path": "/connectivity/eligibility/test/address",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "streetCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)"
            },
            {
              "name": "streetNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Street number"
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>",
          "noAuthentication": true,
          "description": "Do an eligibility for an address, if no line exist"
        }
      ],
      "description": "Do an eligibility for an address, if no line exist"
    },
    {
      "path": "/connectivity/eligibility/test/address/partners",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "streetNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Street number"
            },
            {
              "name": "streetCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)"
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>",
          "noAuthentication": false,
          "description": "Do an eligibility for an address, if no line exist. Partners only."
        }
      ],
      "description": "Do an eligibility for an address, if no line exist. Partners only."
    },
    {
      "path": "/connectivity/eligibility/test/building",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "building",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Building identifier, that can be found using /connectivity/eligibility/search/building* methods"
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>",
          "noAuthentication": true,
          "description": "Do an eligibility test on a building, for fiber only"
        }
      ],
      "description": "Do an eligibility test on a building, for fiber only"
    },
    {
      "path": "/connectivity/eligibility/test/line",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "lineNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Line number"
            },
            {
              "name": "status",
              "dataType": "connectivity.eligibility.LineStatusEnum",
              "paramType": "body",
              "fullType": "connectivity.eligibility.LineStatusEnum",
              "required": true,
              "description": "Status of the line number"
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>",
          "noAuthentication": true,
          "description": "Do an eligibility test on a line number, for copper only"
        }
      ],
      "description": "Do an eligibility test on a line number, for copper only"
    },
    {
      "path": "/connectivity/eligibility/test/line/partners",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "status",
              "dataType": "connectivity.eligibility.LineStatusEnum",
              "paramType": "body",
              "fullType": "connectivity.eligibility.LineStatusEnum",
              "required": true,
              "description": "Status of the line number"
            },
            {
              "name": "lineNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Line number"
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>",
          "noAuthentication": false,
          "description": "Do an eligibility test on a line number, for copper only. Partners only."
        }
      ],
      "description": "Do an eligibility test on a line number, for copper only. Partners only."
    },
    {
      "path": "/connectivity/eligibility/test/otp",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "otp",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "OTP (Optical Termination Panel) identifier"
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.EligibilityTest>",
          "noAuthentication": true,
          "description": "Do an eligibility test on an OTP (Optical Termination Panel), for fiber only"
        }
      ],
      "description": "Do an eligibility test on an OTP (Optical Termination Panel), for fiber only"
    },
    {
      "path": "/connectivity/maintenance/workPlanned/partners",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "connectivity.maintenance.WorkPlanned[]",
          "noAuthentication": false,
          "description": "List work planned by operators. For partners only"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/connectivity/monitoring/genericIncident/partners",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "status",
              "dataType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "paramType": "query",
              "fullType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "required": false,
              "description": "Filter by the status of the incident (detected, validated or closed)"
            },
            {
              "name": "creationDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "List only incidents created after this date"
            },
            {
              "name": "endDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "List only incidents closed prior to this date"
            }
          ],
          "responseType": "connectivity.monitoring.GenericIncident[]",
          "noAuthentication": false,
          "description": "List detected, validated and recently closed generic incidents. For partners only"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/connectivity/monitoring/genericIncident/public",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "status",
              "dataType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "paramType": "query",
              "fullType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "required": false,
              "description": "Filter by the status of the incident (validated or closed)"
            },
            {
              "name": "creationDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "List only incidents created after this date"
            },
            {
              "name": "endDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "List only incidents closed prior to this date"
            }
          ],
          "responseType": "connectivity.monitoring.GenericIncident[]",
          "noAuthentication": true,
          "description": "List validated and recently closed generic incidents"
        }
      ],
      "description": "Missing description"
    }
  ],
  "resourcePath": "/connectivity",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "connectivity.OperatorEnum": {
      "id": "OperatorEnum",
      "namespace": "connectivity",
      "description": "Operator",
      "enum": [
        "OVH",
        "KOSC",
        "SFR",
        "ORANGE",
        "AXIONE"
      ],
      "enumType": "string"
    },
    "connectivity.eligibility.ActivationTypeEnum": {
      "id": "ActivationTypeEnum",
      "namespace": "connectivity.eligibility",
      "description": "Activation type, for copper only",
      "enum": [
        "activate",
        "create",
        "createNeighbour"
      ],
      "enumType": "string"
    },
    "connectivity.eligibility.Address": {
      "id": "Address",
      "namespace": "connectivity.eligibility",
      "description": "Address",
      "properties": {
        "building": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the building, if any",
          "required": false
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "City name",
          "required": true
        },
        "door": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Identifier of the door, if any",
          "required": false
        },
        "floor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Identifier of the floor, if any",
          "required": false
        },
        "housingComplex": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the housing complex, if any",
          "required": false
        },
        "inseeCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "INSEE code",
          "required": true
        },
        "ownerName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Owner name, this information can be restricted",
          "required": false
        },
        "stairs": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Identifier of the stair, if any",
          "required": false
        },
        "streetCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Street code, an unique identifier of the street, hidden for unlisted number",
          "required": false
        },
        "streetName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Street name, hidden for unlisted number",
          "required": false
        },
        "streetNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Street number, usually a number and an indication if applicable (B for bis, T for ter, etc...) and hidden for unlisted number",
          "required": false
        },
        "zipCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "ZIP code",
          "required": true
        }
      }
    },
    "connectivity.eligibility.Building": {
      "id": "Building",
      "namespace": "connectivity.eligibility",
      "description": "Details of a Building",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Building name",
          "required": true
        },
        "nro": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Building NRO (Optical main distribution frame)",
          "required": false
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier which refer to a building uniquely",
          "required": true
        },
        "stairs": {
          "type": "connectivity.eligibility.BuildingStair[]",
          "fullType": "connectivity.eligibility.BuildingStair[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Stairs for this building",
          "required": true
        },
        "type": {
          "type": "connectivity.eligibility.BuildingTypeEnum",
          "fullType": "connectivity.eligibility.BuildingTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Building type",
          "required": true
        }
      }
    },
    "connectivity.eligibility.BuildingStair": {
      "id": "BuildingStair",
      "namespace": "connectivity.eligibility",
      "description": "Stair details of a Building",
      "properties": {
        "floors": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of floor indentifier, \"_NA_\" if no identifier is available",
          "required": true
        },
        "stair": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Stair identifier, \"_NA_\" if no identifier is available",
          "required": true
        }
      }
    },
    "connectivity.eligibility.BuildingTypeEnum": {
      "id": "BuildingTypeEnum",
      "namespace": "connectivity.eligibility",
      "description": "Building type",
      "enum": [
        "BUILDING",
        "HOUSE"
      ],
      "enumType": "string"
    },
    "connectivity.eligibility.City": {
      "id": "City",
      "namespace": "connectivity.eligibility",
      "description": "Represent a city",
      "properties": {
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the city",
          "required": true
        },
        "inseeCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "INSEE code of the city",
          "required": true
        },
        "locality": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Locality (subset of a city)",
          "required": false
        },
        "zipCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Zip code of the city",
          "required": true
        }
      }
    },
    "connectivity.eligibility.CopperInfo": {
      "id": "CopperInfo",
      "namespace": "connectivity.eligibility",
      "description": "Copper informations",
      "properties": {
        "availablePairs": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of available pairs. This is given only for an eligibility test.",
          "required": false
        },
        "maxAvailablePairs": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of maximun available pairs using desaturation. This is given only for an eligibility test.",
          "required": false
        },
        "nra": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "NRA (\"Nœud de raccordement abonné\" in french) is an identifier of the building where is the Main Distribution Frames for the copper line. This is given only for an eligibility test.",
          "required": false
        },
        "sectionsLengths": {
          "type": "connectivity.eligibility.SectionLength[]",
          "fullType": "connectivity.eligibility.SectionLength[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Sections lengths of the copper line. This is given only for an eligibility test.",
          "required": true
        },
        "status": {
          "type": "connectivity.eligibility.LineStatusEnum",
          "fullType": "connectivity.eligibility.LineStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the copper line",
          "required": true
        },
        "underConstruction": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Is the line under construction ? This is given only for an eligibility test.",
          "required": false
        },
        "unlistedNumber": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the number unlisted ? (\"sur liste rouge\" in french)",
          "required": true
        }
      }
    },
    "connectivity.eligibility.EligibilityTest": {
      "id": "EligibilityTest",
      "namespace": "connectivity.eligibility",
      "description": "Eligibility test results",
      "properties": {
        "eligibilityReference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Eligibility unique reference",
          "required": true
        },
        "endpoint": {
          "type": "connectivity.eligibility.Endpoint",
          "fullType": "connectivity.eligibility.Endpoint",
          "canBeNull": false,
          "readOnly": false,
          "description": "Endpoint informations",
          "required": true
        },
        "offers": {
          "type": "connectivity.eligibility.Offer[]",
          "fullType": "connectivity.eligibility.Offer[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Offers informations",
          "required": true
        }
      }
    },
    "connectivity.eligibility.Endpoint": {
      "id": "Endpoint",
      "namespace": "connectivity.eligibility",
      "description": "Endpoint informations",
      "properties": {
        "address": {
          "type": "connectivity.eligibility.Address",
          "fullType": "connectivity.eligibility.Address",
          "canBeNull": false,
          "readOnly": false,
          "description": "Address",
          "required": true
        },
        "copperInfo": {
          "type": "connectivity.eligibility.CopperInfo",
          "fullType": "connectivity.eligibility.CopperInfo",
          "canBeNull": true,
          "readOnly": false,
          "description": "Copper informations, if any",
          "required": false
        },
        "fiberInfo": {
          "type": "connectivity.eligibility.FiberInfo",
          "fullType": "connectivity.eligibility.FiberInfo",
          "canBeNull": true,
          "readOnly": false,
          "description": "Fiber informations, if any",
          "required": false
        },
        "portability": {
          "type": "connectivity.eligibility.Portability",
          "fullType": "connectivity.eligibility.Portability",
          "canBeNull": true,
          "readOnly": false,
          "description": "Portability informations, for copper only",
          "required": false
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Reference of the endpoint",
          "required": true
        },
        "referenceType": {
          "type": "connectivity.eligibility.EndpointReferenceTypeEnum",
          "fullType": "connectivity.eligibility.EndpointReferenceTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Reference type",
          "required": true
        }
      }
    },
    "connectivity.eligibility.EndpointReferenceTypeEnum": {
      "id": "EndpointReferenceTypeEnum",
      "namespace": "connectivity.eligibility",
      "description": "Endpoint reference type",
      "enum": [
        "building",
        "lineNumber",
        "otp"
      ],
      "enumType": "string"
    },
    "connectivity.eligibility.FiberInfo": {
      "id": "FiberInfo",
      "namespace": "connectivity.eligibility",
      "description": "Fiber informations",
      "properties": {
        "buildingName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Building name",
          "required": true
        },
        "buildingReference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Building unique identifier",
          "required": true
        },
        "buildingType": {
          "type": "connectivity.eligibility.BuildingTypeEnum",
          "fullType": "connectivity.eligibility.BuildingTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Building type",
          "required": true
        },
        "nro": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "NRO (\"Nœud de raccordement optique\" in french) is an identifier of the building where is the Optical Distribution Frame (ODF) of the fiber",
          "required": false
        },
        "operatorCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Operator code",
          "required": true
        },
        "operatorName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Operator name",
          "required": true
        }
      }
    },
    "connectivity.eligibility.Line": {
      "id": "Line",
      "namespace": "connectivity.eligibility",
      "description": "Copper line details",
      "properties": {
        "address": {
          "type": "connectivity.eligibility.Address",
          "fullType": "connectivity.eligibility.Address",
          "canBeNull": false,
          "readOnly": false,
          "description": "Line address",
          "required": true
        },
        "copperInfo": {
          "type": "connectivity.eligibility.CopperInfo",
          "fullType": "connectivity.eligibility.CopperInfo",
          "canBeNull": false,
          "readOnly": false,
          "description": "Copper informations",
          "required": true
        },
        "lineNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Line number",
          "required": true
        }
      }
    },
    "connectivity.eligibility.LineStatusEnum": {
      "id": "LineStatusEnum",
      "namespace": "connectivity.eligibility",
      "description": "Line status",
      "enum": [
        "active",
        "inactive"
      ],
      "enumType": "string"
    },
    "connectivity.eligibility.MeetingSlot": {
      "id": "MeetingSlot",
      "namespace": "connectivity.eligibility",
      "description": "Represents a time slot for a meeting",
      "properties": {
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "End date",
          "required": true
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Start date",
          "required": true
        },
        "uiCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "An opaque string that represents an intervention unit",
          "required": true
        }
      }
    },
    "connectivity.eligibility.Meetings": {
      "id": "Meetings",
      "namespace": "connectivity.eligibility",
      "description": "List of available meeting time slots",
      "properties": {
        "canBookFakeMeeting": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not it is possible to book a fake meeting",
          "required": true
        },
        "meetingSlots": {
          "type": "connectivity.eligibility.MeetingSlot[]",
          "fullType": "connectivity.eligibility.MeetingSlot[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "A time slot",
          "required": true
        }
      }
    },
    "connectivity.eligibility.Message": {
      "id": "Message",
      "namespace": "connectivity.eligibility",
      "description": "Message",
      "properties": {
        "availabilityDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Availability date of the offer (if code of non eligibility is COPPER_NOT_YET_AVAILABLE, FIBER_NOT_YET_AVAILABLE or PRODUCT_NOT_YET_AVAILABLE)",
          "required": false
        },
        "code": {
          "type": "connectivity.eligibility.MessageCodeEnum",
          "fullType": "connectivity.eligibility.MessageCodeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Code of the message",
          "required": true
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Message",
          "required": true
        }
      }
    },
    "connectivity.eligibility.MessageCodeEnum": {
      "id": "MessageCodeEnum",
      "namespace": "connectivity.eligibility",
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
      "enumType": "string"
    },
    "connectivity.eligibility.Offer": {
      "id": "Offer",
      "namespace": "connectivity.eligibility",
      "description": "Offer",
      "properties": {
        "eligibility": {
          "type": "connectivity.eligibility.OfferEligibility",
          "fullType": "connectivity.eligibility.OfferEligibility",
          "canBeNull": false,
          "readOnly": false,
          "description": "Eligibility result for the offer",
          "required": true
        },
        "product": {
          "type": "connectivity.eligibility.OfferProduct",
          "fullType": "connectivity.eligibility.OfferProduct",
          "canBeNull": false,
          "readOnly": false,
          "description": "Product informations",
          "required": true
        }
      }
    },
    "connectivity.eligibility.OfferEligibility": {
      "id": "OfferEligibility",
      "namespace": "connectivity.eligibility",
      "description": "Offer eligibility",
      "properties": {
        "activationTypes": {
          "type": "connectivity.eligibility.ActivationTypeEnum[]",
          "fullType": "connectivity.eligibility.ActivationTypeEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Activation type list, for copper only",
          "required": true
        },
        "eligible": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the endpoint eligible to this offer ?",
          "required": true
        },
        "estimatedDownloadRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Estimated download rate, for copper and non guaranteed offers only",
          "required": false
        },
        "estimatedUploadRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Estimated upload rate, for copper and non guaranteed offers only",
          "required": false
        },
        "reasons": {
          "type": "connectivity.eligibility.Message[]",
          "fullType": "connectivity.eligibility.Message[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Reasons when not eligible, if any",
          "required": true
        },
        "underConditions": {
          "type": "connectivity.eligibility.Message[]",
          "fullType": "connectivity.eligibility.Message[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Warnings to consider when eligible, if any",
          "required": true
        }
      }
    },
    "connectivity.eligibility.OfferProduct": {
      "id": "OfferProduct",
      "namespace": "connectivity.eligibility",
      "description": "Offer product",
      "properties": {
        "code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Product code, an unique identifier for the product",
          "required": true
        },
        "downloadRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Download rate in Mb",
          "required": true
        },
        "grt": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "GRT (Guaranteed Restoration Time) available list",
          "required": true
        },
        "guaranteed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the rates guaranteed ?",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name",
          "required": true
        },
        "pairs": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of copper pairs required, for copper only",
          "required": false
        },
        "provider": {
          "type": "connectivity.eligibility.OfferProductProviderEnum",
          "fullType": "connectivity.eligibility.OfferProductProviderEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Provider",
          "required": true
        },
        "type": {
          "type": "connectivity.eligibility.OfferProductTypeEnum",
          "fullType": "connectivity.eligibility.OfferProductTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of the product",
          "required": true
        },
        "unbundlingType": {
          "type": "connectivity.eligibility.OfferProductUnbundlingTypeEnum",
          "fullType": "connectivity.eligibility.OfferProductUnbundlingTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Unbundling type : full or partial, for copper only",
          "required": false
        },
        "uploadRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Upload rate in Mb",
          "required": true
        }
      }
    },
    "connectivity.eligibility.OfferProductProviderEnum": {
      "id": "OfferProductProviderEnum",
      "namespace": "connectivity.eligibility",
      "description": "Offer product provider",
      "enum": [
        "AXIONE",
        "KOSC",
        "ORANGE",
        "SFR"
      ],
      "enumType": "string"
    },
    "connectivity.eligibility.OfferProductTypeEnum": {
      "id": "OfferProductTypeEnum",
      "namespace": "connectivity.eligibility",
      "description": "Offer product type",
      "enum": [
        "ADSL",
        "FTTH",
        "SDSL",
        "VDSL"
      ],
      "enumType": "string"
    },
    "connectivity.eligibility.OfferProductUnbundlingTypeEnum": {
      "id": "OfferProductUnbundlingTypeEnum",
      "namespace": "connectivity.eligibility",
      "description": "Offer product unbundling type",
      "enum": [
        "full",
        "partial"
      ],
      "enumType": "string"
    },
    "connectivity.eligibility.Portability": {
      "id": "Portability",
      "namespace": "connectivity.eligibility",
      "description": "Portability details of the line number",
      "properties": {
        "eligibility": {
          "type": "connectivity.eligibility.PortabilityEligibility",
          "fullType": "connectivity.eligibility.PortabilityEligibility",
          "canBeNull": false,
          "readOnly": false,
          "description": "Eligibility informations",
          "required": true
        },
        "quarantineEndDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Date of the end of quarantine, if any",
          "required": false
        },
        "type": {
          "type": "connectivity.eligibility.PortabilityTypeEnum",
          "fullType": "connectivity.eligibility.PortabilityTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Portability type, if a portability is ongoing",
          "required": false
        }
      }
    },
    "connectivity.eligibility.PortabilityEligibility": {
      "id": "PortabilityEligibility",
      "namespace": "connectivity.eligibility",
      "description": "Portability eligibility",
      "properties": {
        "eligible": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the portability eligible for this line ?",
          "required": true
        },
        "reasons": {
          "type": "connectivity.eligibility.Message[]",
          "fullType": "connectivity.eligibility.Message[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Reasons when not eligible, if any",
          "required": true
        },
        "underConditions": {
          "type": "connectivity.eligibility.Message[]",
          "fullType": "connectivity.eligibility.Message[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Warnings to consider when eligible, if any",
          "required": true
        }
      }
    },
    "connectivity.eligibility.PortabilityTypeEnum": {
      "id": "PortabilityTypeEnum",
      "namespace": "connectivity.eligibility",
      "description": "Portability type",
      "enum": [
        "portin",
        "portinback",
        "portout",
        "subsequent",
        "subsquentportin"
      ],
      "enumType": "string"
    },
    "connectivity.eligibility.SectionLength": {
      "id": "SectionLength",
      "namespace": "connectivity.eligibility",
      "description": "Section length of a copper line",
      "properties": {
        "diameter": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Diameter in millimeters of the copper line section",
          "required": true
        },
        "length": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Lenght in meters of the copper line section",
          "required": true
        }
      }
    },
    "connectivity.eligibility.Street": {
      "id": "Street",
      "namespace": "connectivity.eligibility",
      "description": "Details of a street",
      "properties": {
        "streetCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier which refer to a street uniquely",
          "required": true
        },
        "streetName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Street name",
          "required": true
        }
      }
    },
    "connectivity.maintenance.InterventionTypeEnum": {
      "id": "InterventionTypeEnum",
      "namespace": "connectivity.maintenance",
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
      "enumType": "string"
    },
    "connectivity.maintenance.WorkPlanned": {
      "id": "WorkPlanned",
      "namespace": "connectivity.maintenance",
      "description": "Work Planned operation structure",
      "properties": {
        "dateBegin": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Begin date, the work planned operation starts at this time",
          "required": true
        },
        "dateEnd": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "End date, the work planned operation finishes at the time",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Work Planned operation id",
          "required": true
        },
        "interventionType": {
          "type": "connectivity.maintenance.InterventionTypeEnum",
          "fullType": "connectivity.maintenance.InterventionTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Full description of the work planned operation",
          "required": true
        },
        "operator": {
          "type": "connectivity.OperatorEnum",
          "fullType": "connectivity.OperatorEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Concerned operator by work planned operation",
          "required": true
        },
        "technology": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Technology impacted by the work planned operation",
          "required": true
        }
      }
    },
    "connectivity.monitoring.GenericIncident": {
      "id": "GenericIncident",
      "namespace": "connectivity.monitoring",
      "description": "Generic incident structure",
      "properties": {
        "comment": {
          "type": "text",
          "fullType": "text",
          "canBeNull": true,
          "readOnly": true,
          "description": "Optional comment, that contains some informations and updates about the generic incident",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date, the generic incident has been detected",
          "required": true
        },
        "departments": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of impacted department codes",
          "required": true
        },
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "End date, the generic incident is resolved and closed",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Generic incident id",
          "required": true
        },
        "nra": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of impacted NRA/NRO",
          "required": true
        },
        "operators": {
          "type": "connectivity.OperatorEnum[]",
          "fullType": "connectivity.OperatorEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of impacted operators",
          "required": true
        },
        "status": {
          "type": "connectivity.monitoring.GenericIncidentStatusEnum",
          "fullType": "connectivity.monitoring.GenericIncidentStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status (detected: we detected a potential generic incident, validated: the operators or our tech teams have confirmed the generic incident, closed: the generic incident is resolved and closed)",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task id",
          "required": false
        }
      }
    },
    "connectivity.monitoring.GenericIncidentStatusEnum": {
      "id": "GenericIncidentStatusEnum",
      "namespace": "connectivity.monitoring",
      "description": "Generic incident status",
      "enum": [
        "detected",
        "validated",
        "closed"
      ],
      "enumType": "string"
    },
    "xdsl.AsyncTask<T>": {
      "id": "AsyncTask",
      "namespace": "xdsl",
      "description": "Async task",
      "generics": [
        "T"
      ],
      "properties": {
        "error": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Error",
          "required": false
        },
        "result": {
          "type": "T",
          "fullType": "T",
          "canBeNull": true,
          "readOnly": false,
          "description": "Result of the call",
          "required": false
        },
        "status": {
          "type": "xdsl.AsyncTaskStatusEnum",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the call",
          "required": true
        }
      }
    },
    "xdsl.AsyncTaskArray<T>": {
      "id": "AsyncTaskArray",
      "namespace": "xdsl",
      "description": "Async task array",
      "generics": [
        "T"
      ],
      "properties": {
        "error": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Error",
          "required": false
        },
        "result": {
          "type": "T[]",
          "fullType": "T[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Result of the call",
          "required": false
        },
        "status": {
          "type": "xdsl.AsyncTaskStatusEnum",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the call",
          "required": true
        }
      }
    },
    "xdsl.AsyncTaskStatusEnum": {
      "id": "AsyncTaskStatusEnum",
      "namespace": "xdsl",
      "description": "AsyncTask status",
      "enum": [
        "error",
        "ok",
        "pending"
      ],
      "enumType": "string"
    }
  }
}