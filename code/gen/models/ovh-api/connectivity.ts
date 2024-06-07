import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/connectivity.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the details for a building",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "getBuildingDetails",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.search.buildingDetails.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.search.buildingDetails.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask_connectivity.eligibility.Building"
        }
      ],
      "path": "/connectivity/eligibility/search/buildingDetails"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all buildings for a specific address (require at least a couple streetCode/streetNumber or an hexacle)",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "getBuildings",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.search.buildings.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.search.buildings.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray_connectivity.eligibility.Building"
        }
      ],
      "path": "/connectivity/eligibility/search/buildings"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get building references from a given line number",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "getBuildingsByLine",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.search.buildingsByLine.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.search.buildingsByLine.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray_connectivity.eligibility.Building"
        }
      ],
      "path": "/connectivity/eligibility/search/buildingsByLine"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all localities linked to a zip code",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "getCities",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.search.Cities",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.search.Cities",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray_connectivity.eligibility.City"
        }
      ],
      "path": "/connectivity/eligibility/search/cities"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Search for active and inactive lines at an address",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "getLines",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.search.lines.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.search.lines.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray_connectivity.eligibility.Line"
        }
      ],
      "path": "/connectivity/eligibility/search/lines"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Search for available copper line creation or fiber installation meeting time slots",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "getMeetings",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.search.meetings.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.search.meetings.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask_connectivity.eligibility.Meetings"
        }
      ],
      "path": "/connectivity/eligibility/search/meetings"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the available street numbers for a given street code (you can get the unique identifier of a street using the method POST /connectivity/eligibility/search/streets)",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "getStreetNumbers",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.search.streetNumbers.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.search.streetNumbers.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray_string"
        }
      ],
      "path": "/connectivity/eligibility/search/streetNumbers"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the available street numbers and their details for a given street code (you can get the unique identifier of a street you can get using the method POST /connectivity/eligibility/search/streets)",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "getStreetNumbersDetails",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.search.streetNumbers.details.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.search.streetNumbers.details.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray_connectivity.eligibility.StreetNumberDetails"
        }
      ],
      "path": "/connectivity/eligibility/search/streetNumbers/details"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all street linked to a locality",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "getStreets",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.search.streets.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.search.streets.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray_connectivity.eligibility.Street"
        }
      ],
      "path": "/connectivity/eligibility/search/streets"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get an eligibility by its reference",
          "httpMethod": "GET",
          "noAuthentication": true,
          "operationId": "getEligibility",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Do an eligibility for an address, if no line exist",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "testAddressEligibility",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.test.address.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.test.address.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask_connectivity.eligibility.EligibilityTest"
        }
      ],
      "path": "/connectivity/eligibility/test/address"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Do an eligibility for an address, if no line exist. Partners only.",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:connectivity/eligibility/test/address/partners/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "testPartnersAddressEligibility",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.test.address.partners.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.test.address.partners.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask_connectivity.eligibility.EligibilityTest"
        }
      ],
      "path": "/connectivity/eligibility/test/address/partners"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Do an eligibility test on a building, for fiber only",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "testBuildingEligibility",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.test.building.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.test.building.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask_connectivity.eligibility.EligibilityTest"
        }
      ],
      "path": "/connectivity/eligibility/test/building"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Do an eligibility test on a line number, for copper only",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "testLineEligibility",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.test.line.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.test.line.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask_connectivity.eligibility.EligibilityTest"
        }
      ],
      "path": "/connectivity/eligibility/test/line"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Do an eligibility test on a line number, for copper only. Partners only.",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:connectivity/eligibility/test/line/partners/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "testPartnersLineEligibility",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.test.line.partners.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.test.line.partners.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask_connectivity.eligibility.EligibilityTest"
        }
      ],
      "path": "/connectivity/eligibility/test/line/partners"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Do an eligibility test on an OTP (Optical Termination Panel), for fiber only",
          "httpMethod": "POST",
          "noAuthentication": true,
          "operationId": "testOTPEligibility",
          "parameters": [
            {
              "dataType": "connectivity.eligibility.test.otp.post",
              "description": "Request Body",
              "fullType": "connectivity.eligibility.test.otp.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask_connectivity.eligibility.EligibilityTest"
        }
      ],
      "path": "/connectivity/eligibility/test/otp"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List work planned by operators. For partners only",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:connectivity/maintenance/workPlanned/partners/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getPartnersPlannedWork",
          "parameters": [],
          "responseType": "connectivity.maintenance.WorkPlanned[]"
        }
      ],
      "path": "/connectivity/maintenance/workPlanned/partners"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List work planned by operators",
          "httpMethod": "GET",
          "noAuthentication": true,
          "operationId": "getPlannedWork",
          "parameters": [
            {
              "dataType": "datetime",
              "description": "List only work planned started after this date",
              "fullType": "datetime",
              "name": "beginDate",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "List only work planned ending prior to this date",
              "fullType": "datetime",
              "name": "endDate",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "connectivity.maintenance.WorkPlanned[]"
        }
      ],
      "path": "/connectivity/maintenance/workPlanned/public"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List detected, validated and recently closed generic incidents. For partners only",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:connectivity/monitoring/genericIncident/partners/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getPartnersGenericIncident",
          "parameters": [
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
            },
            {
              "dataType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "description": "Filter by the status of the incident (detected, validated or closed)",
              "fullType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "name": "status",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List validated and recently closed generic incidents",
          "httpMethod": "GET",
          "noAuthentication": true,
          "operationId": "getGenericIncident",
          "parameters": [
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
            },
            {
              "dataType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "description": "Filter by the status of the incident (validated or closed)",
              "fullType": "connectivity.monitoring.GenericIncidentStatusEnum",
              "name": "status",
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
        "AXIONE",
        "BOUYGUES",
        "KOSC",
        "ORANGE",
        "OVH",
        "SFR"
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "description": "City name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "door": {
          "canBeNull": true,
          "description": "Identifier of the door, if any",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "floor": {
          "canBeNull": true,
          "description": "Identifier of the floor, if any",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "housingComplex": {
          "canBeNull": true,
          "description": "Name of the housing complex, if any",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "inseeCode": {
          "canBeNull": false,
          "description": "INSEE code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ownerName": {
          "canBeNull": true,
          "description": "Owner name, this information can be restricted",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "stairs": {
          "canBeNull": true,
          "description": "Identifier of the stair, if any",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "streetCode": {
          "canBeNull": true,
          "description": "Street code, an unique identifier of the street, hidden for unlisted number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "streetName": {
          "canBeNull": true,
          "description": "Street name, hidden for unlisted number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "streetNumber": {
          "canBeNull": true,
          "description": "Street number, usually a number and an indication if applicable (B for bis, T for ter, etc...) and hidden for unlisted number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "zipCode": {
          "canBeNull": false,
          "description": "ZIP code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nro": {
          "canBeNull": true,
          "description": "Building NRO (Optical main distribution frame)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "reference": {
          "canBeNull": false,
          "description": "Identifier which refer to a building uniquely",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "stairs": {
          "canBeNull": true,
          "description": "Stairs for this building",
          "fullType": "connectivity.eligibility.BuildingStair[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.BuildingStair[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Building type",
          "fullType": "connectivity.eligibility.BuildingTypeEnum",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "stair": {
          "canBeNull": false,
          "description": "Stair identifier, \"_NA_\" if no identifier is available",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "inseeCode": {
          "canBeNull": false,
          "description": "INSEE code of the city",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "locality": {
          "canBeNull": true,
          "description": "Locality (subset of a city)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "zipCode": {
          "canBeNull": false,
          "description": "Zip code of the city",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.CopperInfo": {
      "description": "Copper information",
      "id": "CopperInfo",
      "namespace": "connectivity.eligibility",
      "properties": {
        "availablePairs": {
          "canBeNull": true,
          "description": "Number of available pairs. This is given only for an eligibility test.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "maxAvailablePairs": {
          "canBeNull": true,
          "description": "Number of maximun available pairs using desaturation. This is given only for an eligibility test.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "nra": {
          "canBeNull": true,
          "description": "NRA (\"Nœud de raccordement abonné\" in french) is an identifier of the building where is the Main Distribution Frames for the copper line. This is given only for an eligibility test.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sectionsLengths": {
          "canBeNull": false,
          "description": "Sections lengths of the copper line. This is given only for an eligibility test.",
          "fullType": "connectivity.eligibility.SectionLength[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.SectionLength[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Line status",
          "fullType": "connectivity.eligibility.LineStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.LineStatusEnum"
        },
        "underConstruction": {
          "canBeNull": true,
          "description": "Is the line under construction ? This is given only for an eligibility test.",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "unlistedNumber": {
          "canBeNull": false,
          "description": "Is the number unlisted ? (\"sur liste rouge\" in french)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "endpoint": {
          "canBeNull": false,
          "description": "Endpoint information",
          "fullType": "connectivity.eligibility.Endpoint",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Endpoint"
        },
        "offers": {
          "canBeNull": false,
          "description": "Offers information",
          "fullType": "connectivity.eligibility.Offer[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Offer[]"
        }
      }
    },
    "connectivity.eligibility.Endpoint": {
      "description": "Endpoint information",
      "id": "Endpoint",
      "namespace": "connectivity.eligibility",
      "properties": {
        "address": {
          "canBeNull": true,
          "description": "Address",
          "fullType": "connectivity.eligibility.Address",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Address"
        },
        "copperInfo": {
          "canBeNull": true,
          "description": "Copper information",
          "fullType": "connectivity.eligibility.CopperInfo",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.CopperInfo"
        },
        "fiberInfo": {
          "canBeNull": true,
          "description": "Fiber information",
          "fullType": "connectivity.eligibility.FiberInfo",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.FiberInfo"
        },
        "portability": {
          "canBeNull": true,
          "description": "Portability details of the line number",
          "fullType": "connectivity.eligibility.Portability",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Portability"
        },
        "reference": {
          "canBeNull": false,
          "description": "Reference of the endpoint",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "referenceType": {
          "canBeNull": false,
          "description": "Endpoint reference type",
          "fullType": "connectivity.eligibility.EndpointReferenceTypeEnum",
          "readOnly": true,
          "required": false,
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
      "description": "Fiber information",
      "id": "FiberInfo",
      "namespace": "connectivity.eligibility",
      "properties": {
        "buildingName": {
          "canBeNull": true,
          "description": "Building name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "buildingReference": {
          "canBeNull": false,
          "description": "Building unique identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "buildingType": {
          "canBeNull": false,
          "description": "Building type",
          "fullType": "connectivity.eligibility.BuildingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.BuildingTypeEnum"
        },
        "nro": {
          "canBeNull": true,
          "description": "NRO (\"Nœud de raccordement optique\" in french) is an identifier of the building where is the Optical Distribution Frame (ODF) of the fiber",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "operatorCode": {
          "canBeNull": false,
          "description": "Operator code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "operatorName": {
          "canBeNull": false,
          "description": "Operator name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.InstallationTypeEnum": {
      "description": "Installation type, for fiber only",
      "enum": [
        "activate",
        "activate_undefined",
        "create",
        "multiOtp"
      ],
      "enumType": "string",
      "id": "InstallationTypeEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.Line": {
      "description": "Copper line details",
      "id": "Line",
      "namespace": "connectivity.eligibility",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Address",
          "fullType": "connectivity.eligibility.Address",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Address"
        },
        "copperInfo": {
          "canBeNull": false,
          "description": "Copper information",
          "fullType": "connectivity.eligibility.CopperInfo",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.CopperInfo"
        },
        "lineNumber": {
          "canBeNull": false,
          "description": "Line number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
    "connectivity.eligibility.MeetingCapacities": {
      "description": "Represents meeting booking options",
      "id": "MeetingCapacities",
      "namespace": "connectivity.eligibility",
      "properties": {
        "eRdv": {
          "canBeNull": false,
          "description": "Whether or not it is possible to book a meeting online",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "phoneCall": {
          "canBeNull": false,
          "description": "Whether or not it is possible to be be called by phone to book a meeting",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
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
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "slotId": {
          "canBeNull": true,
          "description": "Represent a meeting id for a fiber collect operator",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "uiCode": {
          "canBeNull": true,
          "description": "An opaque string that represents an intervention unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "capacities": {
          "canBeNull": false,
          "description": "Represents meeting booking options",
          "fullType": "connectivity.eligibility.MeetingCapacities",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.MeetingCapacities"
        },
        "meetingSlots": {
          "canBeNull": false,
          "description": "A time slot",
          "fullType": "connectivity.eligibility.MeetingSlot[]",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "code": {
          "canBeNull": false,
          "description": "Message codes",
          "fullType": "connectivity.eligibility.MessageCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.MessageCodeEnum"
        },
        "message": {
          "canBeNull": false,
          "description": "Message",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "description": "Offer eligibility",
          "fullType": "connectivity.eligibility.OfferEligibility",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.OfferEligibility"
        },
        "product": {
          "canBeNull": false,
          "description": "Offer product",
          "fullType": "connectivity.eligibility.OfferProduct",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.ActivationTypeEnum[]"
        },
        "eligible": {
          "canBeNull": false,
          "description": "Is the endpoint eligible to this offer ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "estimatedDownloadRate": {
          "canBeNull": true,
          "description": "Estimated download rate, for copper and non guaranteed offers only",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "estimatedUploadRate": {
          "canBeNull": true,
          "description": "Estimated upload rate, for copper and non guaranteed offers only",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "multiOtp": {
          "canBeNull": true,
          "description": "Is eligible to multiple Optical Termination Points (OTP) ? For fiber only",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "reasons": {
          "canBeNull": false,
          "description": "Reasons when not eligible, if any",
          "fullType": "connectivity.eligibility.Message[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Message[]"
        },
        "underConditions": {
          "canBeNull": false,
          "description": "Warnings to consider when eligible, if any",
          "fullType": "connectivity.eligibility.Message[]",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "downloadRate": {
          "canBeNull": false,
          "description": "Download rate in Mb",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "grt": {
          "canBeNull": false,
          "description": "GRT (Guaranteed Restoration Time) available list",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "guaranteed": {
          "canBeNull": false,
          "description": "Is the rates guaranteed ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "operator": {
          "canBeNull": false,
          "description": "Offer product provider",
          "fullType": "connectivity.eligibility.OfferProductProviderEnum",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.OfferProductProviderEnum"
        },
        "pairs": {
          "canBeNull": true,
          "description": "Number of copper pairs required, for copper only",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "provider": {
          "canBeNull": false,
          "description": "Offer product provider",
          "fullType": "connectivity.eligibility.OfferProductProviderEnum",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.OfferProductProviderEnum"
        },
        "type": {
          "canBeNull": false,
          "description": "Offer product type",
          "fullType": "connectivity.eligibility.OfferProductTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.OfferProductTypeEnum"
        },
        "unbundlingType": {
          "canBeNull": true,
          "description": "Offer product unbundling type",
          "fullType": "connectivity.eligibility.OfferProductUnbundlingTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.OfferProductUnbundlingTypeEnum"
        },
        "uploadRate": {
          "canBeNull": false,
          "description": "Upload rate in Mb",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "connectivity.eligibility.OfferProductProviderEnum": {
      "description": "Offer product provider",
      "enum": [
        "AI",
        "ALTERNATIVE",
        "AX",
        "AXIONE",
        "BOUYGUES",
        "COVAGE",
        "FI",
        "KOSC",
        "OR",
        "ORANGE",
        "OS",
        "REFERENCE",
        "SFR",
        "TF"
      ],
      "enumType": "string",
      "id": "OfferProductProviderEnum",
      "namespace": "connectivity.eligibility"
    },
    "connectivity.eligibility.OfferProductTypeEnum": {
      "description": "Offer product type",
      "enum": [
        "ADSL",
        "FTTE",
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
          "description": "Portability eligibility",
          "fullType": "connectivity.eligibility.PortabilityEligibility",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.PortabilityEligibility"
        },
        "quarantineEndDate": {
          "canBeNull": true,
          "description": "Date of the end of quarantine, if any",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "type": {
          "canBeNull": true,
          "description": "Portability type",
          "fullType": "connectivity.eligibility.PortabilityTypeEnum",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "reasons": {
          "canBeNull": false,
          "description": "Reasons when not eligible, if any",
          "fullType": "connectivity.eligibility.Message[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Message[]"
        },
        "underConditions": {
          "canBeNull": false,
          "description": "Warnings to consider when eligible, if any",
          "fullType": "connectivity.eligibility.Message[]",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "length": {
          "canBeNull": false,
          "description": "Lenght in meters of the copper line section",
          "fullType": "long",
          "readOnly": true,
          "required": false,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "streetName": {
          "canBeNull": false,
          "description": "Street name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.StreetNumberDetails": {
      "description": "Details of a street number struct",
      "id": "StreetNumberDetails",
      "namespace": "connectivity.eligibility",
      "properties": {
        "hexacle": {
          "canBeNull": true,
          "description": "Hexacle is a French unique identifier of the address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": false,
          "description": "Street number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.search.Cities": {
      "description": "Search cities",
      "id": "Cities",
      "namespace": "connectivity.eligibility.search",
      "properties": {
        "zipCode": {
          "canBeNull": false,
          "description": "Zip code",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.search.buildingDetails.post": {
      "description": "Building details",
      "id": "post",
      "namespace": "connectivity.eligibility.search.buildingDetails",
      "properties": {
        "building": {
          "canBeNull": false,
          "description": "Building identifier, that can be found using /connectivity/eligibility/search/building* methods",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.search.buildings.post": {
      "description": "connectivity.eligibility.search.buildings.post",
      "id": "post",
      "namespace": "connectivity.eligibility.search.buildings",
      "properties": {
        "hexacle": {
          "canBeNull": false,
          "description": "Hexacle is a French unique identifier of the address (you can get it with POST /connectivity/eligibility/search/streetNumbers/details)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "streetCode": {
          "canBeNull": false,
          "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "streetNumber": {
          "canBeNull": false,
          "description": "Street number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.search.buildingsByLine.post": {
      "description": "connectivity.eligibility.search.buildingsByLine.post",
      "id": "post",
      "namespace": "connectivity.eligibility.search.buildingsByLine",
      "properties": {
        "lineNumber": {
          "canBeNull": false,
          "description": "Line number",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Line status",
          "fullType": "connectivity.eligibility.LineStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.LineStatusEnum"
        }
      }
    },
    "connectivity.eligibility.search.lines.post": {
      "description": "connectivity.eligibility.search.lines.post",
      "id": "post",
      "namespace": "connectivity.eligibility.search.lines",
      "properties": {
        "ownerName": {
          "canBeNull": false,
          "description": "Owner name, at least the first three chars",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "streetCode": {
          "canBeNull": false,
          "description": "Street code, that can be found using /connectivity/eligibility/search/streets method",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "streetNumber": {
          "canBeNull": false,
          "description": "Street number, that can be found using /connectivity/eligibility/search/streetNumbers method",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.search.meetings.post": {
      "description": "connectivity.eligibility.search.meetings.post",
      "id": "post",
      "namespace": "connectivity.eligibility.search.meetings",
      "properties": {
        "eligibilityReference": {
          "canBeNull": false,
          "description": "Eligibility test reference",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "installationType": {
          "canBeNull": false,
          "description": "Installation type, for fiber only",
          "fullType": "connectivity.eligibility.InstallationTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.InstallationTypeEnum"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Offer plan code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "productCode": {
          "canBeNull": false,
          "description": "Choosen offer product code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "siteCompanyName": {
          "canBeNull": false,
          "description": "Site company name, please use the name and firstname for an individual",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Offer product type",
          "fullType": "connectivity.eligibility.OfferProductTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.OfferProductTypeEnum"
        },
        "unbundlingType": {
          "canBeNull": false,
          "description": "Offer product unbundling type",
          "fullType": "connectivity.eligibility.OfferProductUnbundlingTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.OfferProductUnbundlingTypeEnum"
        }
      }
    },
    "connectivity.eligibility.search.streetNumbers.details.post": {
      "description": "connectivity.eligibility.search.streetNumbers.details.post",
      "id": "post",
      "namespace": "connectivity.eligibility.search.streetNumbers.details",
      "properties": {
        "streetCode": {
          "canBeNull": false,
          "description": "Street code",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.search.streetNumbers.post": {
      "description": "connectivity.eligibility.search.streetNumbers.post",
      "id": "post",
      "namespace": "connectivity.eligibility.search.streetNumbers",
      "properties": {
        "streetCode": {
          "canBeNull": false,
          "description": "Street code",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.search.streets.post": {
      "description": "connectivity.eligibility.search.streets.post",
      "id": "post",
      "namespace": "connectivity.eligibility.search.streets",
      "properties": {
        "inseeCode": {
          "canBeNull": false,
          "description": "French INSEE identifier (you can get it with POST /connectivity/eligibility/search/cities)",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.test.address.partners.post": {
      "description": "connectivity.eligibility.test.address.partners.post",
      "id": "post",
      "namespace": "connectivity.eligibility.test.address.partners",
      "properties": {
        "streetCode": {
          "canBeNull": false,
          "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "streetNumber": {
          "canBeNull": false,
          "description": "Street number",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.test.address.post": {
      "description": "connectivity.eligibility.test.address.post",
      "id": "post",
      "namespace": "connectivity.eligibility.test.address",
      "properties": {
        "streetCode": {
          "canBeNull": false,
          "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "streetNumber": {
          "canBeNull": false,
          "description": "Street number",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.test.building.post": {
      "description": "connectivity.eligibility.test.building.post",
      "id": "post",
      "namespace": "connectivity.eligibility.test.building",
      "properties": {
        "building": {
          "canBeNull": false,
          "description": "Building identifier, that can be found using /connectivity/eligibility/search/building* methods",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.test.line.partners.post": {
      "description": "connectivity.eligibility.test.line.partners.post",
      "id": "post",
      "namespace": "connectivity.eligibility.test.line.partners",
      "properties": {
        "lineNumber": {
          "canBeNull": false,
          "description": "Line number",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Line status",
          "fullType": "connectivity.eligibility.LineStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.LineStatusEnum"
        },
        "streetCode": {
          "canBeNull": false,
          "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "streetNumber": {
          "canBeNull": false,
          "description": "Street number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.test.line.post": {
      "description": "connectivity.eligibility.test.line.post",
      "id": "post",
      "namespace": "connectivity.eligibility.test.line",
      "properties": {
        "lineNumber": {
          "canBeNull": false,
          "description": "Line number",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Line status",
          "fullType": "connectivity.eligibility.LineStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "connectivity.eligibility.LineStatusEnum"
        },
        "streetCode": {
          "canBeNull": false,
          "description": "Unique identifier of the street (you can get it with POST /connectivity/eligibility/search/streets)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "streetNumber": {
          "canBeNull": false,
          "description": "Street number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.test.otp.post": {
      "description": "connectivity.eligibility.test.otp.post",
      "id": "post",
      "namespace": "connectivity.eligibility.test.otp",
      "properties": {
        "otp": {
          "canBeNull": false,
          "description": "OTP (Optical Termination Panel) identifier",
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
        "CORRECTIVE_MAINTENANCE",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "dateEnd": {
          "canBeNull": false,
          "description": "End date, the work planned operation finishes at the time",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "departments": {
          "canBeNull": true,
          "description": "List of impacted department codes",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of the work planned operation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "duration": {
          "canBeNull": true,
          "description": "Duration of the work planned operation",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "fallback": {
          "canBeNull": true,
          "description": "Fallback planned for the operation",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "fallbackDateBegin": {
          "canBeNull": true,
          "description": "Fallback operation starts at this time",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "fallbackDateEnd": {
          "canBeNull": true,
          "description": "Fallback operation ends at this time",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Work Planned operation id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "impact": {
          "canBeNull": true,
          "description": "Impact of the work planned operation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "interventionType": {
          "canBeNull": false,
          "description": "Intervention type",
          "fullType": "connectivity.maintenance.InterventionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "connectivity.maintenance.InterventionTypeEnum"
        },
        "nras": {
          "canBeNull": true,
          "description": "List of impacted NRA/NRO",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "operator": {
          "canBeNull": false,
          "description": "Operator",
          "fullType": "connectivity.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "connectivity.OperatorEnum"
        },
        "technology": {
          "canBeNull": false,
          "description": "Technology impacted by the work planned operation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "zone": {
          "canBeNull": true,
          "description": "Zone of the work planned operation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "description": "Optional comment, that contains some information and updates about the generic incident",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date, the generic incident has been detected",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "departments": {
          "canBeNull": false,
          "description": "List of impacted department codes",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "endDate": {
          "canBeNull": true,
          "description": "End date, the generic incident is resolved and closed",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "estimatedResolutionDate": {
          "canBeNull": true,
          "description": "Estimated resolution date for generic incident",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Generic incident id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "isNational": {
          "canBeNull": true,
          "description": "Identify a national generic incident",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "nra": {
          "canBeNull": false,
          "description": "List of impacted NRA/NRO",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "operators": {
          "canBeNull": false,
          "description": "List of impacted operators",
          "fullType": "connectivity.OperatorEnum[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.OperatorEnum[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Generic incident status",
          "fullType": "connectivity.monitoring.GenericIncidentStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "connectivity.monitoring.GenericIncidentStatusEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "taskReference": {
          "canBeNull": true,
          "description": "Task reference created on Ovhcloud status web page",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "connectivity.monitoring.GenericIncidentStatusEnum": {
      "description": "Generic incident status",
      "enum": [
        "closed",
        "detected",
        "validated"
      ],
      "enumType": "string",
      "id": "GenericIncidentStatusEnum",
      "namespace": "connectivity.monitoring"
    },
    "xdsl.AsyncTaskArray_connectivity.eligibility.Building": {
      "description": "xdsl.AsyncTaskArray_connectivity.eligibility.Building",
      "id": "Building",
      "namespace": "xdsl.AsyncTaskArray_connectivity.eligibility",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "fullType": "connectivity.eligibility.Building[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Building[]"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTaskArray_connectivity.eligibility.City": {
      "description": "xdsl.AsyncTaskArray_connectivity.eligibility.City",
      "id": "City",
      "namespace": "xdsl.AsyncTaskArray_connectivity.eligibility",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "fullType": "connectivity.eligibility.City[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.City[]"
        },
        "status": {
          "canBeNull": false,
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTaskArray_connectivity.eligibility.Line": {
      "description": "xdsl.AsyncTaskArray_connectivity.eligibility.Line",
      "id": "Line",
      "namespace": "xdsl.AsyncTaskArray_connectivity.eligibility",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "fullType": "connectivity.eligibility.Line[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Line[]"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTaskArray_connectivity.eligibility.Street": {
      "description": "xdsl.AsyncTaskArray_connectivity.eligibility.Street",
      "id": "Street",
      "namespace": "xdsl.AsyncTaskArray_connectivity.eligibility",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "fullType": "connectivity.eligibility.Street[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Street[]"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTaskArray_connectivity.eligibility.StreetNumberDetails": {
      "description": "xdsl.AsyncTaskArray_connectivity.eligibility.StreetNumberDetails",
      "id": "StreetNumberDetails",
      "namespace": "xdsl.AsyncTaskArray_connectivity.eligibility",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "fullType": "connectivity.eligibility.StreetNumberDetails[]",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.StreetNumberDetails[]"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTaskArray_string": {
      "description": "xdsl.AsyncTaskArray_string",
      "id": "AsyncTaskArray_string",
      "namespace": "xdsl",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
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
    },
    "xdsl.AsyncTask_connectivity.eligibility.Building": {
      "description": "xdsl.AsyncTask_connectivity.eligibility.Building",
      "id": "Building",
      "namespace": "xdsl.AsyncTask_connectivity.eligibility",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Details of a Building",
          "fullType": "connectivity.eligibility.Building",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Building"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTask_connectivity.eligibility.EligibilityTest": {
      "description": "xdsl.AsyncTask_connectivity.eligibility.EligibilityTest",
      "id": "EligibilityTest",
      "namespace": "xdsl.AsyncTask_connectivity.eligibility",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Eligibility test results",
          "fullType": "connectivity.eligibility.EligibilityTest",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.EligibilityTest"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTask_connectivity.eligibility.Meetings": {
      "description": "xdsl.AsyncTask_connectivity.eligibility.Meetings",
      "id": "Meetings",
      "namespace": "xdsl.AsyncTask_connectivity.eligibility",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": false,
          "description": "List of available meeting time slots",
          "fullType": "connectivity.eligibility.Meetings",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Meetings"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    }
  },
  "resourcePath": "/connectivity"
}