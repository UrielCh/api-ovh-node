import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/xdsl",
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
      "description": "Operations about the XDSL service"
    },
    {
      "path": "/xdsl/eligibility/cities",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-01-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/search/cities"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "zipCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The zipCode of the city"
            }
          ],
          "responseType": "xdsl.eligibility.City[]",
          "noAuthentication": false,
          "description": "Get the cities from a zipCode"
        }
      ],
      "description": "Get the cities from a zipCode"
    },
    {
      "path": "/xdsl/eligibility/lines/active",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/search/lines"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "streetNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The number in the street"
            },
            {
              "name": "contactName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The contact name first three letters"
            },
            {
              "name": "street",
              "dataType": "xdsl.eligibility.Street",
              "paramType": "body",
              "fullType": "xdsl.eligibility.Street",
              "required": true,
              "description": "The information about the street"
            },
            {
              "name": "city",
              "dataType": "xdsl.eligibility.City",
              "paramType": "body",
              "fullType": "xdsl.eligibility.City",
              "required": true,
              "description": "The information about the city"
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<xdsl.eligibility.Line>",
          "noAuthentication": false,
          "description": "Get the active lines at given address"
        }
      ],
      "description": "Get the active lines at given address"
    },
    {
      "path": "/xdsl/eligibility/lines/inactive",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/search/lines"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "city",
              "dataType": "xdsl.eligibility.City",
              "paramType": "body",
              "fullType": "xdsl.eligibility.City",
              "required": true,
              "description": "The information about the city"
            },
            {
              "name": "contactName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact name first three letters"
            },
            {
              "name": "streetNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The number in the street"
            },
            {
              "name": "street",
              "dataType": "xdsl.eligibility.Street",
              "paramType": "body",
              "fullType": "xdsl.eligibility.Street",
              "required": true,
              "description": "The information about the street"
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<xdsl.eligibility.Line>",
          "noAuthentication": false,
          "description": "Get the inactive lines at given address"
        }
      ],
      "description": "Get the inactive lines at given address"
    },
    {
      "path": "/xdsl/eligibility/meetings",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/search/meetings"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "offerLabel",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The choosen offer label"
            },
            {
              "name": "eligibilityId",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The eligibility test id"
            }
          ],
          "responseType": "xdsl.AsyncTask<xdsl.eligibility.MeetingSlots>",
          "noAuthentication": false,
          "description": "Search for meeting time slot"
        }
      ],
      "description": "Search for meeting time slot"
    },
    {
      "path": "/xdsl/eligibility/search/buildings",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/search/buildings"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "streetCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Unique identifier of the street (you can get it with POST /xdsl/eligibility/search/streets)"
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
          "responseType": "xdsl.AsyncTaskArray<xdsl.eligibility.Building>",
          "noAuthentication": true,
          "description": "Get all buildings for a specific address"
        }
      ],
      "description": "Get all buildings for a specific address"
    },
    {
      "path": "/xdsl/eligibility/search/cities",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/search/cities"
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
          "responseType": "xdsl.AsyncTaskArray<xdsl.eligibility.City>",
          "noAuthentication": true,
          "description": "Get all localities linked to a zip code"
        }
      ],
      "description": "Get all localities linked to a zip code"
    },
    {
      "path": "/xdsl/eligibility/search/fiberStreets",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/search/streets"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "inseeCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "French INSEE identifier (you can get it with POST /xdsl/eligibility/search/cities)"
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<xdsl.eligibility.FiberStreet>",
          "noAuthentication": true,
          "description": "Get all street linked to a locality"
        }
      ],
      "description": "Get all street linked to a locality"
    },
    {
      "path": "/xdsl/eligibility/search/streetNumbers",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/search/streetNumbers"
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
          "description": "Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)"
        }
      ],
      "description": "Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)"
    },
    {
      "path": "/xdsl/eligibility/streets",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-01-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/search/streets"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "partialName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The partial name to match against the name of the street"
            },
            {
              "name": "inseeCode",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The inseeCode of the city"
            }
          ],
          "responseType": "xdsl.eligibility.Street[]",
          "noAuthentication": false,
          "description": "Get the streets from a city inseeCode and partial street name"
        }
      ],
      "description": "Get the streets from a city inseeCode and partial street name"
    },
    {
      "path": "/xdsl/eligibility/test",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/test"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The eligibility id"
            }
          ],
          "responseType": "xdsl.eligibility.Eligibility",
          "noAuthentication": false,
          "description": "Get an eligibility by its id"
        }
      ],
      "description": "Get an eligibility by its id"
    },
    {
      "path": "/xdsl/eligibility/test/address",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/test/address"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "address",
              "dataType": "xdsl.eligibility.Address",
              "paramType": "body",
              "fullType": "xdsl.eligibility.Address",
              "required": true,
              "description": "The address"
            }
          ],
          "responseType": "xdsl.AsyncTask<xdsl.eligibility.Eligibility>",
          "noAuthentication": false,
          "description": "Do an eligibility for an address, if no line exist"
        }
      ],
      "description": "Do an eligibility for an address, if no line exist"
    },
    {
      "path": "/xdsl/eligibility/test/fiber/building",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/test/building"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "building",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Unique identifier of the building (you can get it with POST /xdsl/eligibility/search/buildings)"
            }
          ],
          "responseType": "xdsl.AsyncTask<xdsl.eligibility.FiberEligibility>",
          "noAuthentication": true,
          "description": "Perform a fiber eligibility for a building"
        }
      ],
      "description": "Perform a fiber eligibility for a building"
    },
    {
      "path": "/xdsl/eligibility/test/line",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "replacement": "/connectivity/eligibility/test/line"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "lineStatus",
              "dataType": "xdsl.eligibility.LandlineStatusEnum",
              "paramType": "body",
              "fullType": "xdsl.eligibility.LandlineStatusEnum",
              "required": true,
              "description": "The line status"
            },
            {
              "name": "lineNumber",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The line number"
            }
          ],
          "responseType": "xdsl.AsyncTask<xdsl.eligibility.Eligibility>",
          "noAuthentication": false,
          "description": "Do an eligibility for a line"
        }
      ],
      "description": "Do an eligibility for a line"
    },
    {
      "path": "/xdsl/email/pro",
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
      "description": "Operations about the XDSL service"
    },
    {
      "path": "/xdsl/email/pro/{email}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete the email"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "xdsl.xdslEmailPro",
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
              "dataType": "xdsl.xdslEmailPro",
              "paramType": "body",
              "fullType": "xdsl.xdslEmailPro",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "XDSL Email Pro"
    },
    {
      "path": "/xdsl/email/pro/{email}/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "New email password"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "xdsl.email.pro.Task",
          "noAuthentication": false,
          "description": "Change the email password"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/xdsl/incidents",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "creationDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDate property (>)"
            },
            {
              "name": "endDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of endDate property (<)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": true,
          "description": "List of incidents"
        }
      ],
      "description": "List the xdsl.Incident objects"
    },
    {
      "path": "/xdsl/incidents/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            }
          ],
          "responseType": "xdsl.Incident",
          "noAuthentication": true,
          "description": "Get this object properties"
        }
      ],
      "description": "Detected incident"
    },
    {
      "path": "/xdsl/spare",
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
      "description": "Operations about the XDSL service"
    },
    {
      "path": "/xdsl/spare/brands",
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
          "description": "Get all available spare brands"
        }
      ],
      "description": "Get all available spare brands"
    },
    {
      "path": "/xdsl/spare/{spare}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "spare",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Spare"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete the spare as if it was not belonging to OVH anymore"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "spare",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Spare"
            }
          ],
          "responseType": "spare.xdsl.XdslSpare",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Spare properties"
    },
    {
      "path": "/xdsl/spare/{spare}/compatibleReplacement",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "spare",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Spare"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Return the list of brand compatible to be replaced"
        }
      ],
      "description": "compatibleReplacement operations"
    },
    {
      "path": "/xdsl/spare/{spare}/replace",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The modem to replace by the spare"
            },
            {
              "name": "spare",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Spare"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Replace the modem by its spare"
        }
      ],
      "description": "replace operations"
    },
    {
      "path": "/xdsl/spare/{spare}/returnMerchandise",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "spare",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Spare"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Return the broken equipment in instantRefund"
        }
      ],
      "description": "returnMerchandise operations"
    },
    {
      "path": "/xdsl/spare/{spare}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "spare",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Spare"
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
              "name": "spare",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Spare"
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
      "path": "/xdsl/templateModem",
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
          "description": "List of TemplateModem"
        },
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
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The access name with the config you want to duplicate"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Modem Template name (only alphanumeric characters)"
            }
          ],
          "responseType": "xdsl.TemplateModem",
          "noAuthentication": false,
          "description": "Create new Modem Template from existing modem"
        }
      ],
      "description": "List the xdsl.TemplateModem objects"
    },
    {
      "path": "/xdsl/templateModem/{name}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete this Modem Template"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "xdsl.TemplateModem",
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
              "dataType": "xdsl.TemplateModem",
              "paramType": "body",
              "fullType": "xdsl.TemplateModem",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Modem Template"
    },
    {
      "path": "/xdsl/{serviceName}",
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
          "responseType": "xdsl.Access",
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
              "dataType": "xdsl.Access",
              "paramType": "body",
              "fullType": "xdsl.Access",
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
      "description": "XDSL Access"
    },
    {
      "path": "/xdsl/{serviceName}/addressMove/extraIpRange",
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
          "responseType": "xdsl.ExtraIpRangeMove",
          "noAuthentication": false,
          "description": "Informations about the extra IP range during address move"
        }
      ],
      "description": "extraIpRange operations"
    },
    {
      "path": "/xdsl/{serviceName}/addressMove/extraIpRangeMove",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Initiate the extra IP range migration"
        }
      ],
      "description": "extraIpRangeMove operations"
    },
    {
      "path": "/xdsl/{serviceName}/antiSpams",
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
          "responseType": "ip[]",
          "noAuthentication": false,
          "description": "List antiSpams for this access"
        }
      ],
      "description": "List the xdsl.AntiSpam objects"
    },
    {
      "path": "/xdsl/{serviceName}/antiSpams/{ip}",
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
              "name": "ip",
              "dataType": "ip",
              "paramType": "path",
              "fullType": "ip",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "xdsl.AntiSpam",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Spams detected from xdsl access"
    },
    {
      "path": "/xdsl/{serviceName}/antiSpams/{ip}/evidences",
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
              "name": "ip",
              "dataType": "ip",
              "paramType": "path",
              "fullType": "ip",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "xdsl.antiSpam.EvidencesInfo",
          "noAuthentication": false,
          "description": "List of evidences stored on PCS for this ip"
        }
      ],
      "description": "evidences operations"
    },
    {
      "path": "/xdsl/{serviceName}/applyTemplateToModem",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "templateName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Modem Template Name"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Apply TemplateModem to existing Modem"
        }
      ],
      "description": "applyTemplateToModem operations"
    },
    {
      "path": "/xdsl/{serviceName}/canCancelResiliation",
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
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Get information about the ongoing resiliation"
        }
      ],
      "description": "canCancelResiliation operations"
    },
    {
      "path": "/xdsl/{serviceName}/cancelResiliation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Cancel the ongoing resiliation"
        }
      ],
      "description": "cancelResiliation operations"
    },
    {
      "path": "/xdsl/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
      "path": "/xdsl/{serviceName}/diagnostic",
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
          "responseType": "xdsl.AccessDiagnostic",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Run diagnostic on the access"
        }
      ],
      "description": "Diagnostic of the access"
    },
    {
      "path": "/xdsl/{serviceName}/incident",
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
          "responseType": "xdsl.Incident",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Detected incident"
    },
    {
      "path": "/xdsl/{serviceName}/ips",
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
          "responseType": "ip[]",
          "noAuthentication": false,
          "description": "List of IPs addresses for this access"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Order an extra /29 range of IPv4 addresses"
        }
      ],
      "description": "List the xdsl.IP objects"
    },
    {
      "path": "/xdsl/{serviceName}/ips/{ip}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "ip",
              "dataType": "ip",
              "paramType": "path",
              "fullType": "ip",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Stop renewing this extra IPv4 option"
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
              "name": "ip",
              "dataType": "ip",
              "paramType": "path",
              "fullType": "ip",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "xdsl.IP",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Informations about an IP address"
    },
    {
      "path": "/xdsl/{serviceName}/ipv6",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "enabled",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Should the IPv6 be enabled ?"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Change the status of the IPv6 for this access"
        }
      ],
      "description": "ipv6 operations"
    },
    {
      "path": "/xdsl/{serviceName}/lines",
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
          "description": "The lines of the access"
        }
      ],
      "description": "List the xdsl.Line objects"
    },
    {
      "path": "/xdsl/{serviceName}/lines/{number}",
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            }
          ],
          "responseType": "xdsl.Line",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about the physical copper line"
    },
    {
      "path": "/xdsl/{serviceName}/lines/{number}/diagnostic/cancel",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            },
            {
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Cancel line diagnostic if possible"
        }
      ],
      "description": "cancel operations"
    },
    {
      "path": "/xdsl/{serviceName}/lines/{number}/diagnostic/run",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "answers",
              "dataType": "xdsl.lineDiagnostic.Answers",
              "paramType": "body",
              "fullType": "xdsl.lineDiagnostic.Answers",
              "required": false,
              "description": "Customer answers for line diagnostic"
            },
            {
              "name": "faultType",
              "dataType": "xdsl.lineDiagnostic.FaultTypeEnum",
              "paramType": "body",
              "fullType": "xdsl.lineDiagnostic.FaultTypeEnum",
              "required": true,
              "description": "Line diagnostic type. Depends of problem"
            },
            {
              "name": "actionsDone",
              "dataType": "xdsl.lineDiagnostic.CustomerActionsEnum[]",
              "paramType": "body",
              "fullType": "xdsl.lineDiagnostic.CustomerActionsEnum[]",
              "required": false,
              "description": "Customer possible actions"
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            }
          ],
          "responseType": "xdsl.lineDiagnostic.Diagnostic",
          "noAuthentication": false,
          "description": "Update and get advanced diagnostic of the line"
        }
      ],
      "description": "run operations"
    },
    {
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort",
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            }
          ],
          "responseType": "xdsl.DslamPort",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Information about the port on the DSLAM"
    },
    {
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles",
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            }
          ],
          "responseType": "xdsl.DslamLineProfile[]",
          "noAuthentication": false,
          "description": "List all availables profiles for this port"
        }
      ],
      "description": "availableProfiles operations"
    },
    {
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "dslamProfileId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "The id of the xdsl.DslamLineProfile"
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            }
          ],
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Change the profile of the port"
        }
      ],
      "description": "changeProfile operations"
    },
    {
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/logs",
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            },
            {
              "name": "limit",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "xdsl.DslamPortLog[]",
          "noAuthentication": false,
          "description": "Get the logs emitted by the DSLAM for this port"
        }
      ],
      "description": "logs operations"
    },
    {
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/reset",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            },
            {
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            }
          ],
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Reset the port on the DSLAM"
        }
      ],
      "description": "reset operations"
    },
    {
      "path": "/xdsl/{serviceName}/lines/{number}/statistics",
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            },
            {
              "name": "period",
              "dataType": "xdsl.StatisticsPeriodEnum",
              "paramType": "query",
              "fullType": "xdsl.StatisticsPeriodEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "type",
              "dataType": "xdsl.LineStatisticsTypeEnum",
              "paramType": "query",
              "fullType": "xdsl.LineStatisticsTypeEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "complexType.UnitAndValues<xdsl.TimestampAndValue>",
          "noAuthentication": false,
          "description": "Get various statistics about the line"
        }
      ],
      "description": "statistics operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem",
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
          "responseType": "xdsl.Modem",
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
              "dataType": "xdsl.Modem",
              "paramType": "body",
              "fullType": "xdsl.Modem",
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
      "description": "Modem"
    },
    {
      "path": "/xdsl/{serviceName}/modem/availableWLANChannel",
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
              "name": "frequency",
              "dataType": "xdsl.WLANFrequencyEnum",
              "paramType": "query",
              "fullType": "xdsl.WLANFrequencyEnum",
              "required": true,
              "description": "WLAN frequency you want to retrieve channels"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List available WLAN channel for this modem"
        }
      ],
      "description": "availableWLANChannel operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/blocIp",
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
          "responseType": "xdsl.ServiceStatusEnum",
          "noAuthentication": false,
          "description": "Get the status of the Bloc IP on modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "status",
              "dataType": "xdsl.ServiceStatusEnum",
              "paramType": "body",
              "fullType": "xdsl.ServiceStatusEnum",
              "required": true,
              "description": "the new status of the bloc ip service"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Change the status of the Bloc IP on modem"
        }
      ],
      "description": "blocIp operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/callWaiting",
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
          "responseType": "xdsl.ServiceStatusEnum",
          "noAuthentication": false,
          "description": "Get the status of callWaiting on modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "callWaiting",
              "dataType": "xdsl.ServiceStatusEnum",
              "paramType": "body",
              "fullType": "xdsl.ServiceStatusEnum",
              "required": true,
              "description": "the new status of the callWaiting service"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Change the status of callWaiting on modem"
        }
      ],
      "description": "callWaiting operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/comfortExchange",
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
          "responseType": "xdsl.ModemExchangeInfo",
          "noAuthentication": false,
          "description": "Get info about access modem replacement by last model."
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactShipping",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Customer identifier for shipping address. By default Internet access address will be used."
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
          "responseType": "order.Order",
          "noAuthentication": false,
          "description": "Replace access modem by last model, fees will be applied."
        }
      ],
      "description": "comfortExchange operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/connectedDevices",
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
          "description": "List of devices connected on this modem"
        }
      ],
      "description": "List the xdsl.connectedDevice objects"
    },
    {
      "path": "/xdsl/{serviceName}/modem/connectedDevices/{macAddress}",
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
              "name": "macAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Mac address"
            }
          ],
          "responseType": "xdsl.connectedDevice",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Connected Device"
    },
    {
      "path": "/xdsl/{serviceName}/modem/contentSharing",
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
          "responseType": "xdsl.ServiceStatusEnum",
          "noAuthentication": false,
          "description": "Get the status of contentSharing on modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contentSharing",
              "dataType": "xdsl.ServiceStatusEnum",
              "paramType": "body",
              "fullType": "xdsl.ServiceStatusEnum",
              "required": true,
              "description": "the new status of the contentSharing service"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Change the status of contentSharing on modem"
        }
      ],
      "description": "contentSharing operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/duplicatePortMappingConfig",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED",
            "deletionDate": "2019-01-01T00:00:00+01:00",
            "deprecatedDate": "2018-07-01T00:00:00+01:00",
            "replacement": "/xdsl/templateModem"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "accessName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The access name with the config you want to duplicate"
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
          "description": "Remove all the current port mapping rules and set the same config as the access given in parameters"
        }
      ],
      "description": "duplicatePortMappingConfig operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/firmware",
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Get the firmware version installed on modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "todoDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Date of execution, default is now"
            },
            {
              "name": "firmware",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The firmware version to upgrade to"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Launch a task to install target firmware on modem"
        }
      ],
      "description": "firmware operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/firmwareAvailable",
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
          "description": "List available firmware for this modem"
        }
      ],
      "description": "firmwareAvailable operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/ftp",
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
          "responseType": "xdsl.ServiceStatusEnum",
          "noAuthentication": false,
          "description": "Get the status of ftp service on modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ftp",
              "dataType": "xdsl.ServiceStatusEnum",
              "paramType": "body",
              "fullType": "xdsl.ServiceStatusEnum",
              "required": true,
              "description": "the new status of the ftp service"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Change the status of the ftp service on modem"
        }
      ],
      "description": "ftp operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/ipsecAlg",
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
          "responseType": "xdsl.ServiceStatusEnum",
          "noAuthentication": false,
          "description": "Get the status of ipsec alg service on modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ipsecAlg",
              "dataType": "xdsl.ServiceStatusEnum",
              "paramType": "body",
              "fullType": "xdsl.ServiceStatusEnum",
              "required": true,
              "description": "the new status of the ipsec alg service"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Change the status of the ipsec alg service on modem"
        }
      ],
      "description": "ipsecAlg operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/lan",
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
          "description": "List of LANs on this modem"
        }
      ],
      "description": "List the xdsl.LAN objects"
    },
    {
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "lanName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lan name"
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
          "responseType": "xdsl.LAN",
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
              "dataType": "xdsl.LAN",
              "paramType": "body",
              "fullType": "xdsl.LAN",
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
              "name": "lanName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lan name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "LAN Configuration of the Modem"
    },
    {
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "lanName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lan name"
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
          "description": "List of DHCP on this modem"
        }
      ],
      "description": "List the xdsl.DHCP objects"
    },
    {
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "lanName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lan name"
            },
            {
              "name": "dhcpName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dhcp name"
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
          "responseType": "xdsl.DHCP",
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
              "dataType": "xdsl.DHCP",
              "paramType": "body",
              "fullType": "xdsl.DHCP",
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
              "name": "lanName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lan name"
            },
            {
              "name": "dhcpName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dhcp name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "DHCP Configuration of the Modem"
    },
    {
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses",
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
              "name": "lanName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lan name"
            },
            {
              "name": "dhcpName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dhcp name"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of DHCP Static Address of this modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "MACAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The MAC address of the device"
            },
            {
              "name": "IPAddress",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "The IP address of the device"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Name of the DHCP static lease"
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
              "name": "lanName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lan name"
            },
            {
              "name": "dhcpName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dhcp name"
            }
          ],
          "responseType": "xdsl.DHCPStaticAddress",
          "noAuthentication": false,
          "description": "Add a DHCP static lease"
        }
      ],
      "description": "List the xdsl.DHCPStaticAddress objects"
    },
    {
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "lanName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lan name"
            },
            {
              "name": "dhcpName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dhcp name"
            },
            {
              "name": "MACAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": " macaddress"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Delete this port mapping"
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
              "name": "lanName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lan name"
            },
            {
              "name": "dhcpName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dhcp name"
            },
            {
              "name": "MACAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": " macaddress"
            }
          ],
          "responseType": "xdsl.DHCPStaticAddress",
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
              "dataType": "xdsl.DHCPStaticAddress",
              "paramType": "body",
              "fullType": "xdsl.DHCPStaticAddress",
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
              "name": "lanName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Lan name"
            },
            {
              "name": "dhcpName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Dhcp name"
            },
            {
              "name": "MACAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": " macaddress"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "DHCP Static Address"
    },
    {
      "path": "/xdsl/{serviceName}/modem/portMappings",
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
          "description": "List of PortMappings on this modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowedRemoteIp",
              "dataType": "ipv4",
              "paramType": "body",
              "fullType": "ipv4",
              "required": false,
              "description": "An ip which will access to the defined rule. Default : no restriction applied"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the port mapping entry"
            },
            {
              "name": "externalPortStart",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "External Port that the modem will listen on"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Description of the Port Mapping"
            },
            {
              "name": "externalPortEnd",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The last port of the interval on the External Client that will get the connections"
            },
            {
              "name": "internalPort",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "The port on the Internal Client that will get the connections"
            },
            {
              "name": "protocol",
              "dataType": "xdsl.xdslModemConfig.ProtocolTypeEnum",
              "paramType": "body",
              "fullType": "xdsl.xdslModemConfig.ProtocolTypeEnum",
              "required": true,
              "description": "Protocol of the port mapping (TCP / UDP)"
            },
            {
              "name": "internalClient",
              "dataType": "ip",
              "paramType": "body",
              "fullType": "ip",
              "required": true,
              "description": "The IP address of the destination of the packets"
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
          "responseType": "xdsl.PortMapping",
          "noAuthentication": false,
          "description": "Add a port mapping"
        }
      ],
      "description": "List the xdsl.PortMapping objects"
    },
    {
      "path": "/xdsl/{serviceName}/modem/portMappings/{name}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Delete this port mapping"
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "xdsl.PortMapping",
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
              "dataType": "xdsl.PortMapping",
              "paramType": "body",
              "fullType": "xdsl.PortMapping",
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
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Port Mappings"
    },
    {
      "path": "/xdsl/{serviceName}/modem/reboot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "todoDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "Date when the reboot will start"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Reboot the modem"
        }
      ],
      "description": "reboot operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/reconfigureVoip",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Reconfigure voip line on modem"
        }
      ],
      "description": "reconfigureVoip operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/refreshConnectedDevices",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Refresh the list of connected devices on the modem"
        }
      ],
      "description": "refreshConnectedDevices operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/reset",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "resetOvhConfig",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Reset configuration stored in OVH databases"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Reset the modem to its default configuration"
        }
      ],
      "description": "reset operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/resetPortMappingConfig",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Remove all the current port mapping rules"
        }
      ],
      "description": "resetPortMappingConfig operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/retrieveInfo",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "xdsl.AsyncTask<xdsl.ModemInfo>",
          "noAuthentication": false,
          "description": "get general Modem information"
        }
      ],
      "description": "retrieveInfo operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/sipAlg",
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
          "responseType": "xdsl.ServiceStatusEnum",
          "noAuthentication": false,
          "description": "Get the status of sip alg service on modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "sipAlg",
              "dataType": "xdsl.ServiceStatusEnum",
              "paramType": "body",
              "fullType": "xdsl.ServiceStatusEnum",
              "required": true,
              "description": "the new status of the sip alg service"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Change the status of the sip alg service on modem"
        }
      ],
      "description": "sipAlg operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/upnp",
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
          "responseType": "xdsl.ServiceStatusEnum",
          "noAuthentication": false,
          "description": "Get the status of the Upnp on modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "upnp",
              "dataType": "xdsl.ServiceStatusEnum",
              "paramType": "body",
              "fullType": "xdsl.ServiceStatusEnum",
              "required": true,
              "description": "the new status of the upnp service"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Change the status of the Upnp on modem"
        }
      ],
      "description": "upnp operations"
    },
    {
      "path": "/xdsl/{serviceName}/modem/wifi",
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
          "description": "List of WLANs on this modem"
        }
      ],
      "description": "List the xdsl.WLAN objects"
    },
    {
      "path": "/xdsl/{serviceName}/modem/wifi/{wifiName}",
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
              "name": "wifiName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Wifi name"
            }
          ],
          "responseType": "xdsl.WLAN",
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
              "dataType": "xdsl.WLAN",
              "paramType": "body",
              "fullType": "xdsl.WLAN",
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
              "name": "wifiName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Wifi name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "WLAN Configuration of the Modem"
    },
    {
      "path": "/xdsl/{serviceName}/monitoringNotifications",
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
          "description": "List the notifications for this access"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The e-mail address, if type is mail"
            },
            {
              "name": "frequency",
              "dataType": "xdsl.monitoringNotifications.FrequencyEnum",
              "paramType": "body",
              "fullType": "xdsl.monitoringNotifications.FrequencyEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "smsAccount",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The SMS account which will be debited for each sent SMS, if the type is sms"
            },
            {
              "name": "type",
              "dataType": "xdsl.monitoringNotifications.TypeEnum",
              "paramType": "body",
              "fullType": "xdsl.monitoringNotifications.TypeEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "downThreshold",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The number of seconds the access has to be down to trigger the alert"
            },
            {
              "name": "phone",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The phone number, if type is sms"
            },
            {
              "name": "allowIncident",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Whether or not to allow notifications concerning generic incidents"
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
          "responseType": "xdsl.MonitoringNotification",
          "noAuthentication": false,
          "description": "Add a notification"
        }
      ],
      "description": "List the xdsl.MonitoringNotification objects"
    },
    {
      "path": "/xdsl/{serviceName}/monitoringNotifications/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "description": "Delete this notification"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "xdsl.MonitoringNotification",
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
              "dataType": "xdsl.MonitoringNotification",
              "paramType": "body",
              "fullType": "xdsl.MonitoringNotification",
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
      "description": "Defines where and how the notifications will be sent"
    },
    {
      "path": "/xdsl/{serviceName}/orderFollowup",
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
          "responseType": "xdsl.orderFollowup.Step[]",
          "noAuthentication": false,
          "description": "Get the status of the order"
        }
      ],
      "description": "orderFollowup operations"
    },
    {
      "path": "/xdsl/{serviceName}/orderMeeting",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "uiCode",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Meeting ui code ( code linked to the meeting returned by POST /xdsl/{serviceName}/orderMeetings )"
            },
            {
              "name": "startDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "Meeting start date"
            },
            {
              "name": "endDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": true,
              "description": "Meeting end date"
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
          "description": "Book a meeting and relaunch order"
        }
      ],
      "description": "orderMeeting operations"
    },
    {
      "path": "/xdsl/{serviceName}/pendingAction",
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
          "responseType": "xdsl.PendingAction",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Scheduled action before the next renewal of the service"
    },
    {
      "path": "/xdsl/{serviceName}/radiusConnectionLogs",
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
          "responseType": "xdsl.RadiusConnectionLog[]",
          "noAuthentication": false,
          "description": "List the radius connection logs"
        }
      ],
      "description": "radiusConnectionLogs operations"
    },
    {
      "path": "/xdsl/{serviceName}/requestPPPLoginMail",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Renew PPP password and send the PPP login informations to the e-mail of the nicAdmin"
        }
      ],
      "description": "requestPPPLoginMail operations"
    },
    {
      "path": "/xdsl/{serviceName}/requestTotalDeconsolidation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "noPortability",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Do not port the number"
            },
            {
              "name": "rio",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "A token to prove the ownership of the line number, needed to port the number"
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Switch this access to total deconsolidation"
        }
      ],
      "description": "requestTotalDeconsolidation operations"
    },
    {
      "path": "/xdsl/{serviceName}/resiliate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "resiliationDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "The desired resiliation date"
            },
            {
              "name": "resiliationSurvey",
              "dataType": "xdsl.ResiliationSurvey",
              "paramType": "body",
              "fullType": "xdsl.ResiliationSurvey",
              "required": true,
              "description": "Comment about resiliation reasons"
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
          "responseType": "xdsl.ResiliationFollowUpDetail",
          "noAuthentication": false,
          "description": "Resiliate the access"
        }
      ],
      "description": "resiliate operations"
    },
    {
      "path": "/xdsl/{serviceName}/resiliationFollowup",
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
          "responseType": "xdsl.ResiliationFollowUpDetail",
          "noAuthentication": false,
          "description": "Get information about the ongoing resiliation"
        }
      ],
      "description": "resiliationFollowup operations"
    },
    {
      "path": "/xdsl/{serviceName}/resiliationTerms",
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
              "name": "resiliationDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "The desired resiliation date"
            }
          ],
          "responseType": "xdsl.ResiliationTerms",
          "noAuthentication": false,
          "description": "Get resiliation terms"
        }
      ],
      "description": "resiliationTerms operations"
    },
    {
      "path": "/xdsl/{serviceName}/rma",
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
          "description": "Return Merchandise Authorisation associated"
        }
      ],
      "description": "List the telephony.Rma objects"
    },
    {
      "path": "/xdsl/{serviceName}/rma/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Cancel the rma"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "id",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
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
          "responseType": "telephony.Rma",
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
              "dataType": "telephony.Rma",
              "paramType": "body",
              "fullType": "telephony.Rma",
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
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Current Return Merchandise Authorisation"
    },
    {
      "path": "/xdsl/{serviceName}/searchOrderMeetings",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.Meetings>",
          "noAuthentication": false,
          "description": "Search for available line creation meeting time slots, for order only"
        }
      ],
      "description": "searchOrderMeetings operations"
    },
    {
      "path": "/xdsl/{serviceName}/sendOrderToProvider",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Unlock order in \"waitingCustomer\" status. It only concerns orders whose modem is sent before anything have been forwarded to our provider"
        }
      ],
      "description": "sendOrderToProvider operations"
    },
    {
      "path": "/xdsl/{serviceName}/serviceInfos",
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
      "path": "/xdsl/{serviceName}/statistics",
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
              "name": "type",
              "dataType": "xdsl.AccessStatisticsTypeEnum",
              "paramType": "query",
              "fullType": "xdsl.AccessStatisticsTypeEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "period",
              "dataType": "xdsl.StatisticsPeriodEnum",
              "paramType": "query",
              "fullType": "xdsl.StatisticsPeriodEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "complexType.UnitAndValues<xdsl.TimestampAndValue>",
          "noAuthentication": false,
          "description": "Get various statistics about this access"
        }
      ],
      "description": "statistics operations"
    },
    {
      "path": "/xdsl/{serviceName}/tasks",
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
              "name": "status",
              "dataType": "xdsl.TaskStatusEnum",
              "paramType": "query",
              "fullType": "xdsl.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of function property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks scheduled for this access"
        }
      ],
      "description": "List the xdsl.Task objects"
    },
    {
      "path": "/xdsl/{serviceName}/tasks/{id}",
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
          "responseType": "xdsl.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Describes the current status of a task"
    },
    {
      "path": "/xdsl/{serviceName}/tasks/{id}/archive",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete the task in problem from the results"
        }
      ],
      "description": "archive operations"
    },
    {
      "path": "/xdsl/{serviceName}/totalDeconsolidationTerms",
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
          "responseType": "xdsl.DeconsolidationTerms",
          "noAuthentication": false,
          "description": "Give the price to requestTotalDeconsolidation on the access"
        }
      ],
      "description": "totalDeconsolidationTerms operations"
    },
    {
      "path": "/xdsl/{serviceName}/updateInvalidOrMissingRio",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "relaunchWithoutPortability",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Do not set RIO, and relaunch order without portability"
            },
            {
              "name": "rio",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "RIO number for portability"
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
          "description": "Update RIO, or disable portability, for order in error because of missing or invalid RIO"
        }
      ],
      "description": "updateInvalidOrMissingRio operations"
    }
  ],
  "resourcePath": "/xdsl",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "complexType.UnitAndValues<T>": {
      "id": "UnitAndValues",
      "namespace": "complexType",
      "description": "A value set tagged with its unit",
      "generics": [
        "T"
      ],
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "values": {
          "type": "T[]",
          "fullType": "T[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
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
    "coreTypes.IpVersionEnum": {
      "id": "IpVersionEnum",
      "namespace": "coreTypes",
      "description": "Ip versions",
      "enum": [
        "v4",
        "v6"
      ],
      "enumType": "string"
    },
    "email.pro.ObjectStateEnum": {
      "id": "ObjectStateEnum",
      "namespace": "email.pro",
      "description": "Current object state",
      "enum": [
        "creating",
        "deleting",
        "ok",
        "reopening",
        "suspended",
        "suspending",
        "unknown"
      ],
      "enumType": "string"
    },
    "order.Contract": {
      "id": "Contract",
      "namespace": "order",
      "description": "A contract",
      "properties": {
        "content": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "order.CurrencyCodeEnum": {
      "id": "CurrencyCodeEnum",
      "namespace": "order",
      "enum": [
        "AUD",
        "CAD",
        "CZK",
        "EUR",
        "GBP",
        "LTL",
        "MAD",
        "N/A",
        "PLN",
        "SGD",
        "TND",
        "USD",
        "XOF",
        "points"
      ],
      "enumType": "string"
    },
    "order.Order": {
      "id": "Order",
      "namespace": "order",
      "description": "An order",
      "properties": {
        "contracts": {
          "type": "order.Contract[]",
          "fullType": "order.Contract[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "details": {
          "type": "order.OrderDetail[]",
          "fullType": "order.OrderDetail[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "orderId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "prices": {
          "type": "order.OrderPrices",
          "fullType": "order.OrderPrices",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "order.OrderDetail": {
      "id": "OrderDetail",
      "namespace": "order",
      "description": "Detail of an order",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "detailType": {
          "type": "order.OrderDetailTypeEnum",
          "fullType": "order.OrderDetailTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "totalPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "unitPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "order.OrderDetailTypeEnum": {
      "id": "OrderDetailTypeEnum",
      "namespace": "order",
      "description": "Product type of item in order",
      "enum": [
        "ACCESSORY",
        "CAUTION",
        "CHOOSED",
        "CONSUMPTION",
        "CREATION",
        "DELIVERY",
        "DURATION",
        "GIFT",
        "INSTALLATION",
        "LICENSE",
        "MUTE",
        "OTHER",
        "OUTPLAN",
        "QUANTITY",
        "REFUND",
        "RENEW",
        "SPECIAL",
        "SWITCH",
        "TRANSFER",
        "VOUCHER"
      ],
      "enumType": "string"
    },
    "order.OrderPrices": {
      "id": "OrderPrices",
      "namespace": "order",
      "description": "Prices of an order",
      "properties": {
        "tax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "withTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "withoutTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "order.Price": {
      "id": "Price",
      "namespace": "order",
      "description": "Price with it's currency and textual representation",
      "properties": {
        "currencyCode": {
          "type": "order.CurrencyCodeEnum",
          "fullType": "order.CurrencyCodeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
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
    },
    "spare.xdsl.XdslSpare": {
      "id": "XdslSpare",
      "namespace": "spare.xdsl",
      "description": "Spare properties",
      "properties": {
        "brand": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Modem brand model",
          "required": true
        },
        "macAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Mac address",
          "required": true
        }
      }
    },
    "telephony.Contact": {
      "id": "Contact",
      "namespace": "telephony",
      "description": "Contact informations structure",
      "properties": {
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact address",
          "required": false
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact city",
          "required": false
        },
        "country": {
          "type": "coreTypes.CountryEnum",
          "fullType": "coreTypes.CountryEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact country",
          "required": false
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "firstname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact firstname",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact name",
          "required": false
        },
        "organisation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact organisation",
          "required": false
        },
        "phone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact phone",
          "required": false
        },
        "zip": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact zip",
          "required": false
        }
      }
    },
    "telephony.Rma": {
      "id": "Rma",
      "namespace": "telephony",
      "description": "Current Return Merchandise Authorisation",
      "properties": {
        "cancellable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is the RMA cancellable?",
          "required": true
        },
        "creationDatetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation datetime of the return merchandise authorisation ticket",
          "required": true
        },
        "equipmentReference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Merchandise reference",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Return merchandise authorisation identifier",
          "required": true
        },
        "newMerchandise": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "New merchandise brand in case of exchange",
          "required": false
        },
        "offerTypeNew": {
          "type": "telephony.RmaOfferTypeEnum",
          "fullType": "telephony.RmaOfferTypeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Offer type of the new merchandise in case of exchange",
          "required": false
        },
        "offerTypeOld": {
          "type": "telephony.RmaOfferTypeEnum",
          "fullType": "telephony.RmaOfferTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Offer type of the return merchandise",
          "required": true
        },
        "process": {
          "type": "telephony.RmaReplaceTypeEnum",
          "fullType": "telephony.RmaReplaceTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Process determined for merchandise returned",
          "required": true
        },
        "receptionDatetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Reception datetime of the return merchandise authorisation ticket",
          "required": false
        },
        "shippingContact": {
          "type": "telephony.Contact",
          "fullType": "telephony.Contact",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact information related to the delivery shipping in case of exchange",
          "required": true
        },
        "status": {
          "type": "telephony.RmaStatusEnum",
          "fullType": "telephony.RmaStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Return merchandise authorisation step",
          "required": true
        },
        "steps": {
          "type": "telephony.RmaStep[]",
          "fullType": "telephony.RmaStep[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates the current status of the RMA with a list of steps",
          "required": true
        },
        "terminationDatetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Termination datetime of the return merchandise authorisation ticket",
          "required": false
        },
        "type": {
          "type": "telephony.RmaTypeEnum",
          "fullType": "telephony.RmaTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Typology process of merchandise return",
          "required": true
        }
      }
    },
    "telephony.RmaOfferTypeEnum": {
      "id": "RmaOfferTypeEnum",
      "namespace": "telephony",
      "description": "Return merchandise authorisation offer type",
      "enum": [
        "deposit",
        "loan",
        "purchase"
      ],
      "enumType": "string"
    },
    "telephony.RmaReplaceTypeEnum": {
      "id": "RmaReplaceTypeEnum",
      "namespace": "telephony",
      "description": "Return merchandise authorisation type",
      "enum": [
        "changePhone",
        "phoneRestitution",
        "undefined"
      ],
      "enumType": "string"
    },
    "telephony.RmaStatusEnum": {
      "id": "RmaStatusEnum",
      "namespace": "telephony",
      "description": "Return merchandise authorisation step",
      "enum": [
        "closed",
        "open",
        "received"
      ],
      "enumType": "string"
    },
    "telephony.RmaStep": {
      "id": "RmaStep",
      "namespace": "telephony",
      "description": "Informations related to the current RMA step status",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "A brief description of the step",
          "required": true
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "The date when this step was done",
          "required": false
        },
        "infos": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Additional informations about the step",
          "required": false
        },
        "name": {
          "type": "telephony.RmaStepNameEnum",
          "fullType": "telephony.RmaStepNameEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The name of the RMA step",
          "required": true
        },
        "status": {
          "type": "telephony.RmaStepStatusEnum",
          "fullType": "telephony.RmaStepStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the step",
          "required": true
        }
      }
    },
    "telephony.RmaStepNameEnum": {
      "id": "RmaStepNameEnum",
      "namespace": "telephony",
      "description": "RMA step names",
      "enum": [
        "dispatchJustification",
        "equipmentSending",
        "equipmentTesting",
        "opening",
        "parcelReception",
        "parcelValidation",
        "validation"
      ],
      "enumType": "string"
    },
    "telephony.RmaStepStatusEnum": {
      "id": "RmaStepStatusEnum",
      "namespace": "telephony",
      "description": "Status of the RMA step",
      "enum": [
        "done",
        "todo"
      ],
      "enumType": "string"
    },
    "telephony.RmaTypeEnum": {
      "id": "RmaTypeEnum",
      "namespace": "telephony",
      "description": "Return merchandise authorisation type",
      "enum": [
        "after sale equipment service exchange",
        "after sale phone service exchange",
        "equipment restitution",
        "fast exchange",
        "old merchandise reception before exchange",
        "phone restitution",
        "resends due to shipping lost by the carrier",
        "resends due to shipping not withdraw",
        "specific return merchandise authorisation",
        "termination",
        "unknown"
      ],
      "enumType": "string"
    },
    "xdsl.Access": {
      "id": "Access",
      "namespace": "xdsl",
      "description": "XDSL Access",
      "properties": {
        "accessName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "accessType": {
          "type": "xdsl.DslTypeEnum",
          "fullType": "xdsl.DslTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "address": {
          "type": "xdsl.AddressDetail",
          "fullType": "xdsl.AddressDetail",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "capabilities": {
          "type": "xdsl.AccessCapabilities",
          "fullType": "xdsl.AccessCapabilities",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "ipv6Enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "lnsRateLimit": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Rate limit on the LNS in kbps - Only available if canApplyLnsRateLimit capability is set to true - Must be a multiple of 64 - Min value 64 / Max value 100032",
          "required": false
        },
        "monitoring": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not this access is monitored",
          "required": true
        },
        "nra": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "packName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Pack name, if access is in a pack",
          "required": false
        },
        "pairsNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "role": {
          "type": "xdsl.AccessRoleEnum",
          "fullType": "xdsl.AccessRoleEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "xdsl.AccessStatusEnum",
          "fullType": "xdsl.AccessStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "xdsl.AccessCapabilities": {
      "id": "AccessCapabilities",
      "namespace": "xdsl",
      "description": "Describe the capabilities of the Access",
      "properties": {
        "canApplyLnsRateLimit": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeDslamProfile": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeLns": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canGetRadiusConnectionLogs": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canResetDslamPort": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "hasDslamPort": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "xdsl.AccessDiagnostic": {
      "id": "AccessDiagnostic",
      "namespace": "xdsl",
      "description": "Diagnostic of the access",
      "properties": {
        "capabilities": {
          "type": "xdsl.AccessDiagnosticCapabilities",
          "fullType": "xdsl.AccessDiagnosticCapabilities",
          "canBeNull": false,
          "readOnly": true,
          "description": "Available tests for this access",
          "required": true
        },
        "diagnosticTime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Datime of the diagnostic",
          "required": true
        },
        "incident": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Is there an ongoing genericIncident on the access ?",
          "required": false
        },
        "isActiveOnLns": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Is the access active on its primary or secondary LNS",
          "required": false
        },
        "isModemConnected": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Is the modem connected ?",
          "required": false
        },
        "lineDetails": {
          "type": "xdsl.LineDiagnostic[]",
          "fullType": "xdsl.LineDiagnostic[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Test details by line",
          "required": false
        },
        "maintenance": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Is there an ongoing scheduled maintenance by operator on the access ?",
          "required": false
        },
        "ping": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "Does the access ping ?",
          "required": false
        },
        "remaining": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Remaining number of diagnostic for this access",
          "required": true
        }
      }
    },
    "xdsl.AccessDiagnosticCapabilities": {
      "id": "AccessDiagnosticCapabilities",
      "namespace": "xdsl",
      "description": "Describe the capabilities of the access diagnostic",
      "properties": {
        "incident": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "isActiveOnLns": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "isModemConnected": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "lineTest": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "ping": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "proposedProfileId": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "sync": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "xdsl.AccessRoleEnum": {
      "id": "AccessRoleEnum",
      "namespace": "xdsl",
      "description": "Available access roles",
      "enum": [
        "backup",
        "main"
      ],
      "enumType": "string"
    },
    "xdsl.AccessStatisticsTypeEnum": {
      "id": "AccessStatisticsTypeEnum",
      "namespace": "xdsl",
      "description": "Various types of statisctics available for the access.",
      "enum": [
        "ping",
        "traffic:download",
        "traffic:upload"
      ],
      "enumType": "string"
    },
    "xdsl.AccessStatusEnum": {
      "id": "AccessStatusEnum",
      "namespace": "xdsl",
      "description": "Status of the access",
      "enum": [
        "active",
        "cancelled",
        "close",
        "deleting",
        "doing",
        "migration",
        "slamming",
        "upgradeOffer"
      ],
      "enumType": "string"
    },
    "xdsl.AddressDetail": {
      "id": "AddressDetail",
      "namespace": "xdsl",
      "description": "All components of an address",
      "properties": {
        "building": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "door": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "floor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "inseeCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of the city",
          "required": true
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "numberStreet": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "residence": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "rivoliCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of the street",
          "required": true
        },
        "stairs": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "street": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "zipCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "xdsl.AntiSpam": {
      "id": "AntiSpam",
      "namespace": "xdsl",
      "description": "Spams detected from xdsl access",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Detection date",
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP which spam",
          "required": true
        },
        "lastSpamDetected": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last spam detection date",
          "required": true
        },
        "status": {
          "type": "xdsl.antiSpam.AntiSpamStatusEnum",
          "fullType": "xdsl.antiSpam.AntiSpamStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "AntiSpam status",
          "required": true
        }
      }
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
    },
    "xdsl.DHCP": {
      "id": "DHCP",
      "namespace": "xdsl",
      "description": "DHCP Configuration of the Modem",
      "properties": {
        "defaultGateway": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The default gateway to be given to the clients",
          "required": true
        },
        "dhcpName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the DHCP",
          "required": true
        },
        "domainName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Domain name provided to the clients",
          "required": true
        },
        "endAddress": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last address of the pool assigned by the DHCP",
          "required": true
        },
        "leaseTime": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Lease time in seconds of client assigned address (-1 means infinite)",
          "required": true
        },
        "primaryDNS": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Primary DNS servers to be given to the clients",
          "required": true
        },
        "secondaryDNS": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "Secondary DNS servers to be given to the clients",
          "required": false
        },
        "serverEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "State of the DHCP server of the modem",
          "required": true
        },
        "startAddress": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "First address of the pool assigned by the DHCP",
          "required": true
        },
        "subnetMask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The subnet mask given to the clients",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "ID of the ongoing todo (NULL if none)",
          "required": false
        }
      }
    },
    "xdsl.DHCPStaticAddress": {
      "id": "DHCPStaticAddress",
      "namespace": "xdsl",
      "description": "DHCP Static Address",
      "properties": {
        "IPAddress": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The IP address of the device",
          "required": true
        },
        "MACAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The MAC address of the device",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the DHCP Static lease",
          "required": false
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "ID of the ongoing todo (NULL if none)",
          "required": false
        }
      }
    },
    "xdsl.DeconsolidationEnum": {
      "id": "DeconsolidationEnum",
      "namespace": "xdsl",
      "description": "Deconsolidation of the line.",
      "enum": [
        "createNeighbour",
        "creation",
        "creationNeighbour",
        "partial",
        "total"
      ],
      "enumType": "string"
    },
    "xdsl.DeconsolidationTerms": {
      "id": "DeconsolidationTerms",
      "namespace": "xdsl",
      "description": "Show the deconsolidation terms",
      "properties": {
        "engagement": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Duration of month the access will be engaged",
          "required": true
        },
        "monthlyPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "New abo price after the deconsolidation",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price to pay",
          "required": true
        }
      }
    },
    "xdsl.DeviceModemInfo": {
      "id": "DeviceModemInfo",
      "namespace": "xdsl",
      "description": "Describe device informations of a Modem",
      "properties": {
        "brand": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Modem brand",
          "required": true
        },
        "ip": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": false,
          "description": "Modem ip address",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Time of last information refresh",
          "required": true
        },
        "macAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Modem mac address",
          "required": true
        },
        "model": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Modem type of model",
          "required": true
        },
        "oui": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Organizational Unique Identifier",
          "required": true
        },
        "overEthernet": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Protocol used for connection",
          "required": false
        },
        "pppLogin": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "login used for ppp protocol",
          "required": false
        },
        "serial": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Modem serial key",
          "required": true
        },
        "softVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Software Version",
          "required": true
        }
      }
    },
    "xdsl.DslTypeEnum": {
      "id": "DslTypeEnum",
      "namespace": "xdsl",
      "description": "Possible DSL technologies",
      "enum": [
        "adsl",
        "ftth",
        "sdsl",
        "vdsl"
      ],
      "enumType": "string"
    },
    "xdsl.DslamLineProfile": {
      "id": "DslamLineProfile",
      "namespace": "xdsl",
      "description": "Profile on the DSLAM",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "isCurrent": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "xdsl.DslamPort": {
      "id": "DslamPort",
      "namespace": "xdsl",
      "description": "Information about the port on the DSLAM",
      "properties": {
        "lastDesyncDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last time the port lost the synchronization",
          "required": false
        },
        "lastSyncDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last time the port synchronized",
          "required": false
        },
        "profile": {
          "type": "xdsl.DslamLineProfile",
          "fullType": "xdsl.DslamLineProfile",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "status": {
          "type": "xdsl.DslamPortStatusEnum",
          "fullType": "xdsl.DslamPortStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "xdsl.DslamPortLog": {
      "id": "DslamPortLog",
      "namespace": "xdsl",
      "description": "A message log from the DSLAM",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "lastOccurrenceDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The last time this message occured",
          "required": true
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "numberOfOccurrences": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The number of times this message occured between date and lastOccurrenceDate",
          "required": true
        }
      }
    },
    "xdsl.DslamPortStatusEnum": {
      "id": "DslamPortStatusEnum",
      "namespace": "xdsl",
      "description": "Different states of a DSLAM port",
      "enum": [
        "activated",
        "deactivated",
        "outofsync"
      ],
      "enumType": "string"
    },
    "xdsl.ExtraIpRangeMove": {
      "id": "ExtraIpRangeMove",
      "namespace": "xdsl",
      "description": "Informations about the extra IP range during address move",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date of the migration",
          "required": true
        },
        "ipRange": {
          "type": "ipv4Block",
          "fullType": "ipv4Block",
          "canBeNull": false,
          "readOnly": false,
          "description": "IP range to migrate",
          "required": true
        },
        "moveTo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Access where the IP range will be moved to",
          "required": true
        }
      }
    },
    "xdsl.FaultRepairTimeEnum": {
      "id": "FaultRepairTimeEnum",
      "namespace": "xdsl",
      "description": "Maximum time needed to repair a landline",
      "enum": [
        "4HNO",
        "4HO",
        "NORMAL"
      ],
      "enumType": "string"
    },
    "xdsl.GtrEnum": {
      "id": "GtrEnum",
      "namespace": "xdsl",
      "description": "Gtr of the line.",
      "enum": [
        "4hno",
        "4ho",
        "none"
      ],
      "enumType": "string"
    },
    "xdsl.IP": {
      "id": "IP",
      "namespace": "xdsl",
      "description": "Informations about an IP address",
      "properties": {
        "dnsList": {
          "type": "ip[]",
          "fullType": "ip[]",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "The IP address",
          "required": true
        },
        "range": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "xdsl.IpStatusEnum",
          "fullType": "xdsl.IpStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "status of the IP",
          "required": true
        },
        "version": {
          "type": "coreTypes.IpVersionEnum",
          "fullType": "coreTypes.IpVersionEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "xdsl.Incident": {
      "id": "Incident",
      "namespace": "xdsl",
      "description": "Detected incident",
      "properties": {
        "comment": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Estimated start date",
          "required": true
        },
        "departments": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Department list",
          "required": true
        },
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Estimated end date",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the incident",
          "required": true
        },
        "nra": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "NRA list",
          "required": true
        },
        "operators": {
          "type": "xdsl.OperatorTypeEnum[]",
          "fullType": "xdsl.OperatorTypeEnum[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Operator",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Task ID on travaux.ovh.com",
          "required": false
        }
      }
    },
    "xdsl.IpStatusEnum": {
      "id": "IpStatusEnum",
      "namespace": "xdsl",
      "description": "Status of an IP.",
      "enum": [
        "active",
        "close",
        "toDelete"
      ],
      "enumType": "string"
    },
    "xdsl.LAN": {
      "id": "LAN",
      "namespace": "xdsl",
      "description": "LAN Configuration of the Modem",
      "properties": {
        "IPAddress": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The IP address of the LAN interface of the modem",
          "required": true
        },
        "addressingType": {
          "type": "xdsl.xdslModemConfig.AddressingTypeEnum",
          "fullType": "xdsl.xdslModemConfig.AddressingTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "How the LAN interface of the modem is gettig its address",
          "required": true
        },
        "lanName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the LAN",
          "required": true
        },
        "subnetMask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The subnet mask of the LAN interface of the modem",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "ID of the ongoing todo (NULL if none)",
          "required": false
        }
      }
    },
    "xdsl.LandlineConcentrationPoint": {
      "id": "LandlineConcentrationPoint",
      "namespace": "xdsl",
      "description": "Infos about a Landline at the concentration point",
      "properties": {
        "lineHead": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of the head of the cable from the MDF",
          "required": true
        },
        "lineInitialSection": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of the section at the lineHead",
          "required": true
        },
        "lineInitialSectionPair": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier of the pair at the lineHead's lineInitialSection",
          "required": true
        }
      }
    },
    "xdsl.Line": {
      "id": "Line",
      "namespace": "xdsl",
      "description": "Information about the physical copper line",
      "properties": {
        "concentrationPoint": {
          "type": "xdsl.LandlineConcentrationPoint",
          "fullType": "xdsl.LandlineConcentrationPoint",
          "canBeNull": true,
          "readOnly": true,
          "description": "Data to identify the line at the concentration point",
          "required": false
        },
        "deconsolidation": {
          "type": "xdsl.DeconsolidationEnum",
          "fullType": "xdsl.DeconsolidationEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "directDistribution": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": true,
          "description": "True if the line is directly wired on the DSLAM",
          "required": false
        },
        "distance": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Distance in meters from the DSLAM",
          "required": true
        },
        "faultRepairTime": {
          "type": "xdsl.FaultRepairTimeEnum",
          "fullType": "xdsl.FaultRepairTimeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "lineSectionsLength": {
          "type": "xdsl.LineSectionLength[]",
          "fullType": "xdsl.LineSectionLength[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Detailed information about the sections between the DSLAM and the telephone jack",
          "required": true
        },
        "mitigation": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "description": "Mitigation of the line in dB",
          "required": true
        },
        "number": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The number of the line",
          "required": true
        },
        "originalNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The number used to place the order. Null if the same as the current number.",
          "required": false
        },
        "portability": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether the line number has been ported to OVH, to be used with VoIP service",
          "required": true
        },
        "syncDown": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "The download synchronisation on the DSLAM in Kbps",
          "required": false
        },
        "syncUp": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": true,
          "description": "The upload synchronisation on the DSLAM in Kbps",
          "required": false
        }
      }
    },
    "xdsl.LineDiagnostic": {
      "id": "LineDiagnostic",
      "namespace": "xdsl",
      "description": "Detailed line tests",
      "properties": {
        "lineTest": {
          "type": "xdsl.LineTestEnum",
          "fullType": "xdsl.LineTestEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "lineTestTime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "number": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "proposedProfileId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "sync": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "xdsl.LineSectionLength": {
      "id": "LineSectionLength",
      "namespace": "xdsl",
      "properties": {
        "diameter": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The diameter of this section in millimeters",
          "required": true
        },
        "length": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The length of this section in meters",
          "required": true
        }
      }
    },
    "xdsl.LineStatisticsTypeEnum": {
      "id": "LineStatisticsTypeEnum",
      "namespace": "xdsl",
      "description": "Various types of statisctics available for the line.",
      "enum": [
        "attenuation:download",
        "attenuation:upload",
        "snr:download",
        "snr:upload",
        "synchronization:download",
        "synchronization:upload"
      ],
      "enumType": "string"
    },
    "xdsl.LineTestEnum": {
      "id": "LineTestEnum",
      "namespace": "xdsl",
      "description": "Line tests results",
      "enum": [
        "actionPending",
        "customerSideProblem",
        "error",
        "noProblem",
        "ovhSideProblem"
      ],
      "enumType": "string"
    },
    "xdsl.Modem": {
      "id": "Modem",
      "namespace": "xdsl",
      "description": "Modem",
      "properties": {
        "brandName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "capabilities": {
          "type": "xdsl.ModemCapabilities",
          "fullType": "xdsl.ModemCapabilities",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "dmzIP": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "IP Address of the DMZ (To modify or delete the DMZ IP on the modem, a re-configuration of your modem has to be made, your configuration will be maintained, but you will lose your connection a few minutes)",
          "required": false
        },
        "easyFirewallLevel": {
          "type": "xdsl.xdslModemConfig.EasyFirewallLevelEnum",
          "fullType": "xdsl.xdslModemConfig.EasyFirewallLevelEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Level of the FireWall on the modem",
          "required": false
        },
        "ipv6Support": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether or not the modem supports IPv6",
          "required": true
        },
        "isBridged": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not the modem is in bridge mode. To pass from bridge mode to routed mode, a reset is necessary. If the modem is managedByOvh, the bridge state will be kept after a reset",
          "required": true
        },
        "lastCwmpRequestDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last time the modem made a CWMP request to the Auto Configuration Server",
          "required": false
        },
        "macAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "managedByOvh": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not the user can configure his modem via OVH Interface (will lock telnet and local HTTP configuration page)",
          "required": true
        },
        "model": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "mtuSize": {
          "type": "xdsl.xdslModemConfig.MTUSizeEnum",
          "fullType": "xdsl.xdslModemConfig.MTUSizeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Size of the Maximum Transmission Unit on the modem's interfaces",
          "required": false
        }
      }
    },
    "xdsl.ModemCapabilities": {
      "id": "ModemCapabilities",
      "namespace": "xdsl",
      "description": "Describe the capabilities of the Modem",
      "properties": {
        "canBeManagedByOvh": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeBridgeMode": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeDHCP": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeDMZ": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeEasyFirewallLevel": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeFirmware": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeLAN": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeManagement": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeMtu": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangePortMapping": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canChangeWLAN": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canReboot": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canReconfigureVoip": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canRefreshConnectedDevices": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "canReset": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "xdsl.ModemExchangeInfo": {
      "id": "ModemExchangeInfo",
      "namespace": "xdsl",
      "description": "Information about modem exchange",
      "properties": {
        "canExchange": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "To know if you can exchange your modem",
          "required": true
        },
        "newModel": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Model of the new modem",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price without tax to pay for exchange",
          "required": true
        },
        "priceWithTax": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price with tax included to pay for exchange",
          "required": true
        }
      }
    },
    "xdsl.ModemInfo": {
      "id": "ModemInfo",
      "namespace": "xdsl",
      "description": "Describe general information of a Modem",
      "properties": {
        "device": {
          "type": "xdsl.DeviceModemInfo",
          "fullType": "xdsl.DeviceModemInfo",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hardware information",
          "required": true
        },
        "statistics": {
          "type": "xdsl.StatsModemInfo",
          "fullType": "xdsl.StatsModemInfo",
          "canBeNull": false,
          "readOnly": false,
          "description": "Modem Connection information",
          "required": true
        }
      }
    },
    "xdsl.MonitoringNotification": {
      "id": "MonitoringNotification",
      "namespace": "xdsl",
      "description": "Defines where and how the notifications will be sent",
      "properties": {
        "allowIncident": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not to allow notifications for generic incidents",
          "required": true
        },
        "downThreshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The number of seconds the access has to be down to trigger an alert",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The e-mail address, if type is mail",
          "required": false
        },
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "frequency": {
          "type": "xdsl.monitoringNotifications.FrequencyEnum",
          "fullType": "xdsl.monitoringNotifications.FrequencyEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The frenquency to send reminders when the access is still down",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "phone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The phone number, if type is sms",
          "required": false
        },
        "smsAccount": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The SMS account which will be debited for each sent SMS, if the type is sms",
          "required": false
        },
        "type": {
          "type": "xdsl.monitoringNotifications.TypeEnum",
          "fullType": "xdsl.monitoringNotifications.TypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "xdsl.OperatorTypeEnum": {
      "id": "OperatorTypeEnum",
      "namespace": "xdsl",
      "description": "Operators",
      "enum": [
        "collect",
        "kosc",
        "ovh"
      ],
      "enumType": "string"
    },
    "xdsl.PendingAction": {
      "id": "PendingAction",
      "namespace": "xdsl",
      "description": "Scheduled action before the next renewal of the service",
      "properties": {
        "action": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "dateTodo": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "xdsl.PortMapping": {
      "id": "PortMapping",
      "namespace": "xdsl",
      "description": "Port Mappings",
      "properties": {
        "allowedRemoteIp": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": false,
          "description": "An ip which will access to the defined rule. Default : no restriction applied",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Description of the Port Mapping",
          "required": false
        },
        "externalPortEnd": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "The last port of the interval on the External Client that will get the connections",
          "required": false
        },
        "externalPortStart": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the port mapping entry",
          "required": true
        },
        "internalClient": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The IP address of the destination of the packets",
          "required": true
        },
        "internalPort": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The port on the Internal Client that will get the connections",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the port mapping entry",
          "required": true
        },
        "protocol": {
          "type": "xdsl.xdslModemConfig.ProtocolTypeEnum",
          "fullType": "xdsl.xdslModemConfig.ProtocolTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Protocol of the port mapping (TCP / UDP)",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "ID of the ongoing todo (NULL if none)",
          "required": false
        }
      }
    },
    "xdsl.RadiusConnectionLog": {
      "id": "RadiusConnectionLog",
      "namespace": "xdsl",
      "description": "Log entry of an auth attempt to the radius server",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "state": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "xdsl.ResiliationFollowUpDetail": {
      "id": "ResiliationFollowUpDetail",
      "namespace": "xdsl",
      "description": "Details about the resiliation",
      "properties": {
        "dateTodo": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date when the resiliation will take effect",
          "required": true
        },
        "needModemReturn": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If the customer needs to return his modem",
          "required": true
        },
        "registrationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date when the resiliation was done",
          "required": true
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the resiliation",
          "required": true
        }
      }
    },
    "xdsl.ResiliationReasonEnum": {
      "id": "ResiliationReasonEnum",
      "namespace": "xdsl",
      "description": "Reason of a resiliation",
      "enum": [
        "addressMove",
        "billingProblems",
        "cessationOfActivity",
        "changeOfTerms",
        "ftth",
        "goToCompetitor",
        "other",
        "technicalProblems"
      ],
      "enumType": "string"
    },
    "xdsl.ResiliationSurvey": {
      "id": "ResiliationSurvey",
      "namespace": "xdsl",
      "description": "Information about the reason for the resiliation",
      "properties": {
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Comment about this resiliation",
          "required": false
        },
        "type": {
          "type": "xdsl.ResiliationReasonEnum",
          "fullType": "xdsl.ResiliationReasonEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of reason for the resiliation",
          "required": true
        }
      }
    },
    "xdsl.ResiliationTerms": {
      "id": "ResiliationTerms",
      "namespace": "xdsl",
      "description": "Show the resiliation terms",
      "properties": {
        "due": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price due at resiliationDate",
          "required": true
        },
        "engageDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Date until which the customer is engaged",
          "required": false
        },
        "minResiliationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minumum resiliationDate",
          "required": true
        },
        "resiliationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date at which the access will be resiliated",
          "required": true
        },
        "resiliationReasons": {
          "type": "xdsl.ResiliationReasonEnum[]",
          "fullType": "xdsl.ResiliationReasonEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of available resiliation reasons",
          "required": true
        }
      }
    },
    "xdsl.ServiceStatusEnum": {
      "id": "ServiceStatusEnum",
      "namespace": "xdsl",
      "description": "Status of the service",
      "enum": [
        "disabled",
        "enabled"
      ],
      "enumType": "string"
    },
    "xdsl.StatisticsPeriodEnum": {
      "id": "StatisticsPeriodEnum",
      "namespace": "xdsl",
      "description": "Periods for statistics.",
      "enum": [
        "daily",
        "monthly",
        "preview",
        "weekly",
        "yearly"
      ],
      "enumType": "string"
    },
    "xdsl.StatsModemInfo": {
      "id": "StatsModemInfo",
      "namespace": "xdsl",
      "description": "Describe statistics information of a Modem",
      "properties": {
        "connectionUptime": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Connection uptime",
          "required": true
        },
        "crcError": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Amount of CRC error detected",
          "required": true
        },
        "deviceUptime": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Modem uptime",
          "required": true
        },
        "downstreamAttenuation": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Downstream attenuation",
          "required": true
        },
        "downstreamMargin": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Downstream margin",
          "required": true
        },
        "downstreamSync": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Downstream synchronization",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Time of last refresh",
          "required": true
        },
        "modulation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Line modulation used",
          "required": true
        },
        "quarterHourStart": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Count from last refresh in seconds",
          "required": true
        },
        "syncUptime": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Synchronization uptime",
          "required": true
        },
        "upstreamAttenuation": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Upstream attenuation",
          "required": true
        },
        "upstreamMargin": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Upstream margin",
          "required": true
        },
        "upstreamSync": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Upstream synchronization",
          "required": true
        }
      }
    },
    "xdsl.Task": {
      "id": "Task",
      "namespace": "xdsl",
      "description": "Describes the current status of a task",
      "properties": {
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "xdsl.TaskStatusEnum",
          "fullType": "xdsl.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date when the action will start",
          "required": true
        },
        "updateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "xdsl.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "xdsl",
      "description": "Status of a task.",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "problem",
        "todo"
      ],
      "enumType": "string"
    },
    "xdsl.TemplateModem": {
      "id": "TemplateModem",
      "namespace": "xdsl",
      "description": "Modem Template",
      "properties": {
        "DHCP": {
          "type": "xdsl.templateModem.DHCP[]",
          "fullType": "xdsl.templateModem.DHCP[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of DHCP for this template",
          "required": true
        },
        "LAN": {
          "type": "xdsl.templateModem.LAN[]",
          "fullType": "xdsl.templateModem.LAN[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of LAN for this template",
          "required": true
        },
        "WLAN": {
          "type": "xdsl.templateModem.WLAN[]",
          "fullType": "xdsl.templateModem.WLAN[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of WLAN for this template",
          "required": true
        },
        "capabilities": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": true,
          "description": "Parameters capabilities. Lists what can be applied from this template",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Template creation date",
          "required": true
        },
        "dmzIP": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP Address of the DMZ",
          "required": false
        },
        "mtuSize": {
          "type": "xdsl.xdslModemConfig.MTUSizeEnum",
          "fullType": "xdsl.xdslModemConfig.MTUSizeEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Size of the Maximum Transmission Unit on the modem's interfaces",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the Modem Template",
          "required": true
        },
        "parametersToIgnore": {
          "type": "xdsl.templateModem.ParametersToIgnore",
          "fullType": "xdsl.templateModem.ParametersToIgnore",
          "canBeNull": true,
          "readOnly": false,
          "description": "Do not apply these parameters from template. You can use parametersCapabilities to know availability",
          "required": false
        },
        "portMapping": {
          "type": "xdsl.templateModem.PortMapping[]",
          "fullType": "xdsl.templateModem.PortMapping[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of PortMapping for this template",
          "required": true
        }
      }
    },
    "xdsl.TimestampAndValue": {
      "id": "TimestampAndValue",
      "namespace": "xdsl",
      "description": "A value associated to a timestamp",
      "properties": {
        "timestamp": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "xdsl.WLAN": {
      "id": "WLAN",
      "namespace": "xdsl",
      "description": "WLAN Configuration of the Modem",
      "properties": {
        "SSID": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Service Set Identifier of the WLAN interface",
          "required": true
        },
        "SSIDAdvertisementEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hide or show the Wifi",
          "required": true
        },
        "bandSteering": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicate if frequencies 2.4GHz and 5GHz are agregated",
          "required": true
        },
        "channel": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Choice of a channel (When chosen, channelMode is set to Manual)",
          "required": true
        },
        "channelMode": {
          "type": "xdsl.xdslModemConfig.ChannelModeEnum",
          "fullType": "xdsl.xdslModemConfig.ChannelModeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "How the channel is chosen (Auto / Manual)",
          "required": true
        },
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Wifi state",
          "required": true
        },
        "frequency": {
          "type": "xdsl.xdslModemConfig.FrequencyEnum",
          "fullType": "xdsl.xdslModemConfig.FrequencyEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Frequency (2.4GHz | 5GHz)",
          "required": true
        },
        "guest": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicate if it is normal access wifi or guest wifi",
          "required": true
        },
        "securityKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "WPA or WEP key",
          "required": true
        },
        "securityType": {
          "type": "xdsl.xdslModemConfig.SecurityTypeEnum",
          "fullType": "xdsl.xdslModemConfig.SecurityTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Security (None | WEP | WPA | WPA2 | WPAandWPA2)",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "ID of the ongoing todo (NULL if none)",
          "required": false
        },
        "wifiName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the Wifi",
          "required": true
        }
      }
    },
    "xdsl.WLANFrequencyEnum": {
      "id": "WLANFrequencyEnum",
      "namespace": "xdsl",
      "description": "Frequency of WLAN",
      "enum": [
        "2.4GHz",
        "5GHz"
      ],
      "enumType": "string"
    },
    "xdsl.antiSpam.AntiSpamStatusEnum": {
      "id": "AntiSpamStatusEnum",
      "namespace": "xdsl.antiSpam",
      "description": "AntiSpam status",
      "enum": [
        "block",
        "done",
        "new",
        "unblock",
        "warn"
      ],
      "enumType": "string"
    },
    "xdsl.antiSpam.EvidencesInfo": {
      "id": "EvidencesInfo",
      "namespace": "xdsl.antiSpam",
      "description": "List of evidences",
      "properties": {
        "error": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "AsyncTask detailed error",
          "required": false
        },
        "result": {
          "type": "xdsl.antiSpam.EvidencesInfoDetail[]",
          "fullType": "xdsl.antiSpam.EvidencesInfoDetail[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Table with evidences stored on PCS",
          "required": false
        },
        "status": {
          "type": "xdsl.antiSpam.EvidencesInfoStatusEnum",
          "fullType": "xdsl.antiSpam.EvidencesInfoStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "AsyncTask status",
          "required": true
        }
      }
    },
    "xdsl.antiSpam.EvidencesInfoDetail": {
      "id": "EvidencesInfoDetail",
      "namespace": "xdsl.antiSpam",
      "description": "detail on evidences stored on PCS",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "File date on the PCS",
          "required": true
        },
        "filename": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "File name on the PCS",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Temporary URL to access file",
          "required": true
        }
      }
    },
    "xdsl.antiSpam.EvidencesInfoStatusEnum": {
      "id": "EvidencesInfoStatusEnum",
      "namespace": "xdsl.antiSpam",
      "description": "Evidences AsyncTask status",
      "enum": [
        "error",
        "ok",
        "pending"
      ],
      "enumType": "string"
    },
    "xdsl.connectedDevice": {
      "id": "connectedDevice",
      "namespace": "xdsl",
      "description": "Connected Device",
      "properties": {
        "active": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "The state of this device on the modem",
          "required": true
        },
        "addressSource": {
          "type": "xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum",
          "fullType": "xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "How did the device got its IP address",
          "required": true
        },
        "hostName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Host name given by the device to the modem",
          "required": true
        },
        "informationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The date time of the last update of thoses informations",
          "required": true
        },
        "interfaceType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "On which interface is connected the device",
          "required": true
        },
        "ipAddress": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "The IP address of the device",
          "required": true
        },
        "leaseTimeRemaining": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The remaining time in seconds of the DHCP lease of this device (-1 means infinite)",
          "required": true
        },
        "macAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "MAC address of the device",
          "required": true
        }
      }
    },
    "xdsl.eligibility.Address": {
      "id": "Address",
      "namespace": "xdsl.eligibility",
      "description": "Represents an address",
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
          "type": "xdsl.eligibility.City",
          "fullType": "xdsl.eligibility.City",
          "canBeNull": false,
          "readOnly": false,
          "description": "Informations about the city",
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
        "logo": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Identifier of the historical operator landmark, if any",
          "required": false
        },
        "owner": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Owner of the line, this information can be restricted",
          "required": false
        },
        "residence": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of the residence, if any",
          "required": false
        },
        "stair": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Identifier of the stair, if any",
          "required": false
        },
        "street": {
          "type": "xdsl.eligibility.Street",
          "fullType": "xdsl.eligibility.Street",
          "canBeNull": true,
          "readOnly": false,
          "description": "Informations about the street",
          "required": false
        },
        "streetNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number on the street",
          "required": false
        }
      }
    },
    "xdsl.eligibility.Building": {
      "id": "Building",
      "namespace": "xdsl.eligibility",
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
          "canBeNull": false,
          "readOnly": false,
          "description": "Building NRO (Optical main distribution frame)",
          "required": true
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Identifier which refer to a building uniquely",
          "required": true
        },
        "type": {
          "type": "xdsl.eligibility.BuildingTypeEnum",
          "fullType": "xdsl.eligibility.BuildingTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Building type",
          "required": true
        }
      }
    },
    "xdsl.eligibility.BuildingTypeEnum": {
      "id": "BuildingTypeEnum",
      "namespace": "xdsl.eligibility",
      "description": "Type of building",
      "enum": [
        "BUILDING",
        "HOUSE"
      ],
      "enumType": "string"
    },
    "xdsl.eligibility.City": {
      "id": "City",
      "namespace": "xdsl.eligibility",
      "description": "Represent a city",
      "properties": {
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
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the city",
          "required": true
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
    "xdsl.eligibility.CodeAndMessage": {
      "id": "CodeAndMessage",
      "namespace": "xdsl.eligibility",
      "description": "A message and its code",
      "properties": {
        "code": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "A code identifying the message",
          "required": true
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "A message",
          "required": true
        }
      }
    },
    "xdsl.eligibility.Eligibility": {
      "id": "Eligibility",
      "namespace": "xdsl.eligibility",
      "description": "Eligibility result",
      "properties": {
        "address": {
          "type": "xdsl.eligibility.Address",
          "fullType": "xdsl.eligibility.Address",
          "canBeNull": true,
          "readOnly": false,
          "description": "The line address",
          "required": false
        },
        "characteristics": {
          "type": "xdsl.eligibility.LineCharacteristics",
          "fullType": "xdsl.eligibility.LineCharacteristics",
          "canBeNull": false,
          "readOnly": false,
          "description": "The line characteristics",
          "required": true
        },
        "endpoint": {
          "type": "xdsl.eligibility.LineEndpointEnum",
          "fullType": "xdsl.eligibility.LineEndpointEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The eligibility endpoint type",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The eligibility uuid",
          "required": true
        },
        "infos": {
          "type": "xdsl.eligibility.LineInfos",
          "fullType": "xdsl.eligibility.LineInfos",
          "canBeNull": false,
          "readOnly": false,
          "description": "The line infos",
          "required": true
        },
        "offers": {
          "type": "xdsl.eligibility.Offer[]",
          "fullType": "xdsl.eligibility.Offer[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "The eligible offers list",
          "required": true
        },
        "portability": {
          "type": "xdsl.eligibility.Portability",
          "fullType": "xdsl.eligibility.Portability",
          "canBeNull": false,
          "readOnly": false,
          "description": "Portability capabilities",
          "required": true
        }
      }
    },
    "xdsl.eligibility.FiberEligibility": {
      "id": "FiberEligibility",
      "namespace": "xdsl.eligibility",
      "description": "Fiber Eligibility result",
      "properties": {
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Eligibility UUID",
          "required": true
        },
        "offers": {
          "type": "xdsl.eligibility.FiberOffer[]",
          "fullType": "xdsl.eligibility.FiberOffer[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of fiber offer",
          "required": true
        }
      }
    },
    "xdsl.eligibility.FiberOffer": {
      "id": "FiberOffer",
      "namespace": "xdsl.eligibility",
      "description": "A fiber offer",
      "properties": {
        "availibilityDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": false,
          "description": "The availibility date if the fiber is planned but not available yet",
          "required": false
        },
        "downloadRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Estimated or guaranteed download rate in Mbit/s, if applicable",
          "required": false
        },
        "eligible": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Are you eligible to this offer ?",
          "required": true
        },
        "gtr": {
          "type": "xdsl.GtrEnum[]",
          "fullType": "xdsl.GtrEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Allowed GTR",
          "required": true
        },
        "guaranteed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the rate guaranteed ?",
          "required": true
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Offer label",
          "required": true
        },
        "reason": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Reason of non eligibility, if applicable",
          "required": false
        },
        "type": {
          "type": "xdsl.DslTypeEnum",
          "fullType": "xdsl.DslTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Technology",
          "required": true
        },
        "uploadRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Estimated or guaranteed upload rate in Mbit/s, if applicable",
          "required": false
        }
      }
    },
    "xdsl.eligibility.FiberStreet": {
      "id": "FiberStreet",
      "namespace": "xdsl.eligibility",
      "description": "Details of a FiberStreet",
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
    "xdsl.eligibility.LandlineStatusEnum": {
      "id": "LandlineStatusEnum",
      "namespace": "xdsl.eligibility",
      "description": "Status of a landline",
      "enum": [
        "active",
        "inactive"
      ],
      "enumType": "string"
    },
    "xdsl.eligibility.Line": {
      "id": "Line",
      "namespace": "xdsl.eligibility",
      "description": "a line",
      "properties": {
        "address": {
          "type": "xdsl.eligibility.Address",
          "fullType": "xdsl.eligibility.Address",
          "canBeNull": false,
          "readOnly": false,
          "description": "The line address",
          "required": true
        },
        "contactName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The contact name",
          "required": true
        },
        "lineNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The line number",
          "required": true
        },
        "lineStatus": {
          "type": "xdsl.eligibility.LandlineStatusEnum",
          "fullType": "xdsl.eligibility.LandlineStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The line status",
          "required": true
        }
      }
    },
    "xdsl.eligibility.LineCharacteristics": {
      "id": "LineCharacteristics",
      "namespace": "xdsl.eligibility",
      "description": "The characteristics of a line",
      "properties": {
        "calibration": {
          "type": "xdsl.eligibility.LineSectionCalibration[]",
          "fullType": "xdsl.eligibility.LineSectionCalibration[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Details of line calibration",
          "required": true
        },
        "desaturationFreePairs": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of free pairs proposed ondesaturation of copper lines",
          "required": true
        },
        "distance": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Distance to the NRA in meters",
          "required": true
        },
        "freePairs": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of free pairs",
          "required": true
        },
        "mitigation": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "The estimated mitigation for ADSL and VDSL technologies",
          "required": true
        },
        "mitigationSdsl": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "The estimated mitigation for SDSL technology",
          "required": true
        },
        "nra": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The NRA",
          "required": true
        }
      }
    },
    "xdsl.eligibility.LineEndpointEnum": {
      "id": "LineEndpointEnum",
      "namespace": "xdsl.eligibility",
      "description": "Type of the endpoint for the eligibility",
      "enum": [
        "address",
        "line"
      ],
      "enumType": "string"
    },
    "xdsl.eligibility.LineInfos": {
      "id": "LineInfos",
      "namespace": "xdsl.eligibility",
      "description": "The line infos",
      "properties": {
        "createNeighbour": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Weither we are in create neighbor case or not",
          "required": true
        },
        "lineNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The line number, if endpoint is number",
          "required": false
        },
        "lineStatus": {
          "type": "xdsl.eligibility.LandlineStatusEnum",
          "fullType": "xdsl.eligibility.LandlineStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "The line status, if endpoint is number",
          "required": false
        },
        "unlistedNumber": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the number unlisted ?",
          "required": true
        }
      }
    },
    "xdsl.eligibility.LineSectionCalibration": {
      "id": "LineSectionCalibration",
      "namespace": "xdsl.eligibility",
      "description": "A line section calibration detail",
      "properties": {
        "diameter": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The section diameter in millimeters",
          "required": true
        },
        "length": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The section length in meters",
          "required": true
        }
      }
    },
    "xdsl.eligibility.MeetingSlot": {
      "id": "MeetingSlot",
      "namespace": "xdsl.eligibility",
      "description": "Represents a time slot for a meeting",
      "properties": {
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "The end of the time slot",
          "required": true
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "The beginning of the time slot",
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
    "xdsl.eligibility.MeetingSlots": {
      "id": "MeetingSlots",
      "namespace": "xdsl.eligibility",
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
          "type": "xdsl.eligibility.MeetingSlot[]",
          "fullType": "xdsl.eligibility.MeetingSlot[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "A time slot",
          "required": true
        }
      }
    },
    "xdsl.eligibility.Offer": {
      "id": "Offer",
      "namespace": "xdsl.eligibility",
      "description": "An offer",
      "properties": {
        "desaturation": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Is copper lines desaturation needed and available for this offer ?",
          "required": false
        },
        "downloadRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Estimated or guaranteed download rate in Mbit/s, if applicable",
          "required": false
        },
        "gtr": {
          "type": "xdsl.GtrEnum[]",
          "fullType": "xdsl.GtrEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Allowed GTR (none, 4ho : 4 work hours, 4hno : 4 unworked hours)",
          "required": true
        },
        "guaranteed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Is the rate guaranteed ?",
          "required": true
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Offer label",
          "required": true
        },
        "pairs": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Number of pairs to use",
          "required": false
        },
        "provider": {
          "type": "xdsl.eligibility.ProviderEnum",
          "fullType": "xdsl.eligibility.ProviderEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Provider, if applicable",
          "required": false
        },
        "rate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "DEPRECATED Please use downloadRate instead /DEPRECATED - Estimated or guaranteed rate in Mbit/s, if applicable",
          "required": false
        },
        "type": {
          "type": "xdsl.DslTypeEnum",
          "fullType": "xdsl.DslTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "DSL technology",
          "required": true
        },
        "unbundling": {
          "type": "xdsl.DeconsolidationEnum[]",
          "fullType": "xdsl.DeconsolidationEnum[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Allowed unbundling methods",
          "required": false
        },
        "uploadRate": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Estimated or guaranteed upload rate in Mbit/s, if applicable",
          "required": false
        }
      }
    },
    "xdsl.eligibility.Portability": {
      "id": "Portability",
      "namespace": "xdsl.eligibility",
      "description": "Eligibility of the portability of the line number",
      "properties": {
        "comments": {
          "type": "xdsl.eligibility.CodeAndMessage[]",
          "fullType": "xdsl.eligibility.CodeAndMessage[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "The reason(s) of the negative portability eligibility",
          "required": true
        },
        "eligible": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not it is possible to port the line number. If false, commentList contains the reason(s)",
          "required": true
        },
        "underCondition": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not the portability is possible under condition. If true, warningList contains the reason(s)",
          "required": true
        },
        "warnings": {
          "type": "xdsl.eligibility.CodeAndMessage[]",
          "fullType": "xdsl.eligibility.CodeAndMessage[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "The special condition(s) of the portability",
          "required": true
        }
      }
    },
    "xdsl.eligibility.ProviderEnum": {
      "id": "ProviderEnum",
      "namespace": "xdsl.eligibility",
      "description": "The providers",
      "enum": [
        "axione",
        "ft",
        "kosc",
        "ovh",
        "sfr"
      ],
      "enumType": "string"
    },
    "xdsl.eligibility.Street": {
      "id": "Street",
      "namespace": "xdsl.eligibility",
      "description": "Represent a street",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the street",
          "required": true
        },
        "rivoliCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "RIVOLI identifier of the street",
          "required": true
        }
      }
    },
    "xdsl.email.pro.Task": {
      "id": "Task",
      "namespace": "xdsl.email.pro",
      "description": "Task Struct",
      "properties": {
        "finishDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "Finished date of the task",
          "required": false
        },
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Function of the task",
          "required": true
        },
        "status": {
          "type": "xdsl.email.pro.TaskStatusEnum",
          "fullType": "xdsl.email.pro.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of the task",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Todo date of the task",
          "required": true
        }
      }
    },
    "xdsl.email.pro.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "xdsl.email.pro",
      "description": "Status of an Email Pro task.",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.Answers": {
      "id": "Answers",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Customer answers for line diagnostic",
      "properties": {
        "bandwidthTestUnit": {
          "type": "xdsl.lineDiagnostic.BandwidthTestUnitEnum",
          "fullType": "xdsl.lineDiagnostic.BandwidthTestUnitEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "bandwidth unit for proof.ovh.net test values",
          "required": false
        },
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "comment will contains all informations needed for intervention and about your access problem",
          "required": false
        },
        "conditionsAccepted": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "customer knows that he can be charged (150 euros HT) if he is responsible for the problem or if tests have not been done correctly ?",
          "required": false
        },
        "contactPhone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "customer's phone number",
          "required": false
        },
        "datetimeOfAppearance": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "approximative datetime of problem happening",
          "required": false
        },
        "downloadBandwidthTest": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "bandwidth download value on proof.ovh.net test",
          "required": false
        },
        "endAfternoonHours": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "afternoon closing informations or time for the site",
          "required": false
        },
        "endMorningHours": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "morning closing informations or time for the site",
          "required": false
        },
        "followBySms": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "indicate if customer wants to be informed by sms",
          "required": false
        },
        "hasModemKeptSynchronization": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Has modem kept his synchronization during line port reset ?",
          "required": false
        },
        "idAppointment": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "id of appointment chosen (\"possibleValues\" contains choices list with id)",
          "required": false
        },
        "individualSite": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "is non-professional site ?",
          "required": false
        },
        "modemIsSynchronized": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Is modem synchronized ? (whatever internet connection)",
          "required": false
        },
        "modemMac": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "modem mac address",
          "required": false
        },
        "modemStillSynchronized": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Modem still synchronized ? Please check once again.",
          "required": false
        },
        "modemType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "modem brand and reference",
          "required": false
        },
        "ovhTicket": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Ovh ticket name or ticket ID, only if a ticket is already opened for this problem",
          "required": false
        },
        "problemType": {
          "type": "xdsl.lineDiagnostic.ProblemTypeEnum",
          "fullType": "xdsl.lineDiagnostic.ProblemTypeEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Problem Type on DSL connection",
          "required": false
        },
        "resolvedAfterTests": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "is access problem solved ?",
          "required": false
        },
        "secureSite": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "is secure site ?",
          "required": false
        },
        "severalInternetConnections": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Has customer several internal connections ? (on the same place)",
          "required": false
        },
        "siteClosedDays": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "days or period where site access is not possible",
          "required": false
        },
        "siteDigicode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "digicode for site entrance",
          "required": false
        },
        "siteOpening": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "site opening hours or informations",
          "required": false
        },
        "startAfternoonHours": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "afternoon opening informations or time for the site",
          "required": false
        },
        "startMorningHours": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "morning opening informations or time for the site",
          "required": false
        },
        "uploadBandwidthTest": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "bandwidth upload value on proof.ovh.net test",
          "required": false
        }
      }
    },
    "xdsl.lineDiagnostic.BandwidthTestUnitEnum": {
      "id": "BandwidthTestUnitEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "bandwidth unit for proof.ovh.net test values",
      "enum": [
        "Kbps",
        "Mbps"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.ConnectionInformations": {
      "id": "ConnectionInformations",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Informations directly get on DSLAM or Modem",
      "properties": {
        "crcError": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Amount of CRC error detected",
          "required": false
        },
        "downstreamAttenuation": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Downstream attenuation",
          "required": false
        },
        "downstreamMargin": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Downstream margin",
          "required": false
        },
        "downstreamSync": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Downstream synchronization",
          "required": false
        },
        "ifName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Modem interface name",
          "required": false
        },
        "profile": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Profile on the DSLAM",
          "required": false
        },
        "upstreamAttenuation": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Upstream attenuation",
          "required": false
        },
        "upstreamMargin": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Upstream margin",
          "required": false
        },
        "upstreamSync": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Upstream synchronization",
          "required": false
        }
      }
    },
    "xdsl.lineDiagnostic.CustomerActionToDo": {
      "id": "CustomerActionToDo",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Customer action to do",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "action's description",
          "required": true
        },
        "name": {
          "type": "xdsl.lineDiagnostic.CustomerActionsEnum",
          "fullType": "xdsl.lineDiagnostic.CustomerActionsEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "action's name",
          "required": true
        }
      }
    },
    "xdsl.lineDiagnostic.CustomerActionsEnum": {
      "id": "CustomerActionsEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Customer possible actions",
      "enum": [
        "bePreparedToCheckModemSynchronization",
        "changeDslFilterAndPlugInDti",
        "changeExtensionCable",
        "changeProfile",
        "checkConnectionCable",
        "checkConnectionLoginAndParameters",
        "checkFilter",
        "connectModemToOtherPlugs",
        "neutralTest",
        "rebootModem",
        "resetModem",
        "unplugEveryModems",
        "unplugModem"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.Diagnostic": {
      "id": "Diagnostic",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Diagnostic status and informations",
      "properties": {
        "data": {
          "type": "xdsl.lineDiagnostic.DiagnosticData",
          "fullType": "xdsl.lineDiagnostic.DiagnosticData",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contains informations about diagnostic (questions, previous answers, actions to do, line details, selt result...)",
          "required": true
        },
        "faultType": {
          "type": "xdsl.lineDiagnostic.FaultTypeEnum",
          "fullType": "xdsl.lineDiagnostic.FaultTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Detected fault type",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Diagnostic id",
          "required": true
        },
        "status": {
          "type": "xdsl.lineDiagnostic.DiagnosticStatusEnum",
          "fullType": "xdsl.lineDiagnostic.DiagnosticStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Diagnostic status",
          "required": true
        }
      }
    },
    "xdsl.lineDiagnostic.DiagnosticData": {
      "id": "DiagnosticData",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Diagnostic data and informations",
      "properties": {
        "actionsDone": {
          "type": "xdsl.lineDiagnostic.CustomerActionsEnum[]",
          "fullType": "xdsl.lineDiagnostic.CustomerActionsEnum[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of actions already done by customer",
          "required": true
        },
        "actionsToDo": {
          "type": "xdsl.lineDiagnostic.CustomerActionToDo[]",
          "fullType": "xdsl.lineDiagnostic.CustomerActionToDo[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of actions that must be done by customer",
          "required": true
        },
        "answers": {
          "type": "xdsl.lineDiagnostic.Answers",
          "fullType": "xdsl.lineDiagnostic.Answers",
          "canBeNull": false,
          "readOnly": false,
          "description": "Previous customer answers",
          "required": true
        },
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Diagnostic comment. Can be update during any diagnostic step",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Diagnostic creation date",
          "required": true
        },
        "diagnosticDoneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "End of diagnostic date. Will be null until problem totally identified",
          "required": false
        },
        "error": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Error message",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last diagnostic update date",
          "required": true
        },
        "lineDetails": {
          "type": "xdsl.lineDiagnostic.LineDetails",
          "fullType": "xdsl.lineDiagnostic.LineDetails",
          "canBeNull": false,
          "readOnly": false,
          "description": "Informations about line",
          "required": true
        },
        "robotAction": {
          "type": "xdsl.lineDiagnostic.RobotActionsEnum",
          "fullType": "xdsl.lineDiagnostic.RobotActionsEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Current or last robot action",
          "required": false
        },
        "seltTest": {
          "type": "xdsl.lineDiagnostic.SeltResult",
          "fullType": "xdsl.lineDiagnostic.SeltResult",
          "canBeNull": false,
          "readOnly": false,
          "description": "SELT test result",
          "required": true
        },
        "timeout": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Diagnostic timeout in minutes. Any action restart timeout",
          "required": true
        },
        "toAnswer": {
          "type": "xdsl.lineDiagnostic.Question[]",
          "fullType": "xdsl.lineDiagnostic.Question[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of questions that must be answered by customer",
          "required": true
        }
      }
    },
    "xdsl.lineDiagnostic.DiagnosticStatusEnum": {
      "id": "DiagnosticStatusEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Diagnostic status possible values",
      "enum": [
        "cancelled",
        "connectionProblem",
        "genericIncidentPending",
        "haveToConnectModemOnTheRightPlug",
        "init",
        "interventionRequested",
        "noBandwidthFault",
        "noProblemAnymore",
        "noSyncFaultDiagnosticRequired",
        "problem",
        "resolvedAfterTests",
        "sleeping",
        "validationRefused",
        "waitingHuman",
        "waitingRobot",
        "waitingValidation"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.FaultTypeEnum": {
      "id": "FaultTypeEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Line diagnostic fault type",
      "enum": [
        "alignment",
        "noSync",
        "syncLossOrLowBandwidth",
        "unknown"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.LineCapabilities": {
      "id": "LineCapabilities",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Theoretical line capabilities",
      "properties": {
        "down": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Theoretical Downstream synchronization ",
          "required": false
        },
        "mitigation": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Theoretical line mitigation",
          "required": false
        },
        "ping": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Theoretical ping",
          "required": false
        },
        "up": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "description": "Theoretical Upstream synchronization ",
          "required": false
        }
      }
    },
    "xdsl.lineDiagnostic.LineDetails": {
      "id": "LineDetails",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Line informations",
      "properties": {
        "accessName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "access name",
          "required": true
        },
        "accessPing": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Access IP ping or not",
          "required": false
        },
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "address of the access",
          "required": false
        },
        "connectionInfo": {
          "type": "xdsl.lineDiagnostic.ConnectionInformations",
          "fullType": "xdsl.lineDiagnostic.ConnectionInformations",
          "canBeNull": true,
          "readOnly": false,
          "description": "informations directly get on DSLAM or Modem",
          "required": false
        },
        "contactPhone": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "customer phone number for contact",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "custom access description",
          "required": false
        },
        "dslamIsSynchronized": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "DSLAM is synchronized or not",
          "required": false
        },
        "gtr": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "is GTR access or not",
          "required": true
        },
        "length": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Line length in meters",
          "required": true
        },
        "lineCapabilities": {
          "type": "xdsl.lineDiagnostic.LineCapabilities",
          "fullType": "xdsl.lineDiagnostic.LineCapabilities",
          "canBeNull": true,
          "readOnly": false,
          "description": "Theoretical line capabilities",
          "required": false
        },
        "lineType": {
          "type": "xdsl.DslTypeEnum",
          "fullType": "xdsl.DslTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "dsl connexion type for the line",
          "required": true
        },
        "nra": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "NRA name",
          "required": false
        },
        "number": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "line number",
          "required": true
        },
        "operator": {
          "type": "xdsl.lineDiagnostic.ProviderEnum",
          "fullType": "xdsl.lineDiagnostic.ProviderEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "provider for internet connexion",
          "required": true
        },
        "sections": {
          "type": "xdsl.lineDiagnostic.Section[]",
          "fullType": "xdsl.lineDiagnostic.Section[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "cables sections details",
          "required": false
        }
      }
    },
    "xdsl.lineDiagnostic.PossibleValue": {
      "id": "PossibleValue",
      "namespace": "xdsl.lineDiagnostic",
      "description": "possible value for specific answer",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "answer id",
          "required": false
        },
        "label": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "answer choice string",
          "required": false
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "answer choice value",
          "required": false
        }
      }
    },
    "xdsl.lineDiagnostic.ProblemTypeEnum": {
      "id": "ProblemTypeEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Possible customer questions",
      "enum": [
        "lowBandwidth",
        "syncLoss"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.ProviderEnum": {
      "id": "ProviderEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "The providers for xdsl access",
      "enum": [
        "axione",
        "ft",
        "ftBySfr",
        "kosc",
        "koscDeg",
        "ovh",
        "sfr"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.Question": {
      "id": "Question",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Question to customer",
      "properties": {
        "defaultValue": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "question description",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "question description",
          "required": true
        },
        "enumValues": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "available values for enum",
          "required": false
        },
        "name": {
          "type": "xdsl.lineDiagnostic.QuestionsEnum",
          "fullType": "xdsl.lineDiagnostic.QuestionsEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "question name",
          "required": true
        },
        "possibleValues": {
          "type": "xdsl.lineDiagnostic.PossibleValue[]",
          "fullType": "xdsl.lineDiagnostic.PossibleValue[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "list of possible values",
          "required": false
        },
        "required": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "is a required question",
          "required": false
        },
        "type": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "answer type",
          "required": true
        }
      }
    },
    "xdsl.lineDiagnostic.QuestionsEnum": {
      "id": "QuestionsEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Possible customer questions",
      "enum": [
        "bandwidthTestUnit",
        "comment",
        "conditionsAccepted",
        "contactPhone",
        "datetimeOfAppearance",
        "downloadBandwidthTest",
        "endAfternoonHours",
        "endMorningHours",
        "followBySms",
        "hasModemKeptSynchronization",
        "idAppointment",
        "individualSite",
        "modemIsSynchronized",
        "modemMac",
        "modemStillSynchronized",
        "modemType",
        "ovhTicket",
        "problemType",
        "resolvedAfterTests",
        "secureSite",
        "severalInternetConnections",
        "siteClosedDays",
        "siteDigicode",
        "siteOpening",
        "startAfternoonHours",
        "startMorningHours",
        "uploadBandwidthTest"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.RobotActionsEnum": {
      "id": "RobotActionsEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Diagnostic robot possible actions",
      "enum": [
        "alignmentLockTest",
        "alignmentResetTest",
        "alignmentTestResult",
        "checkCustomerTicket",
        "checkIfAccessPing",
        "checkIfResolvedAfterConnectionTests",
        "checkIfResolvedAfterInstallationCheck",
        "checkIfResolvedAfterTests",
        "checkIfSeveralConnections",
        "checkInstallation",
        "checkProblem",
        "checkSynchronizationWithoutOtherModems",
        "customerPrelocChecks",
        "findProblem",
        "installationCheck",
        "lockUnlock",
        "needToRequestMonitoring",
        "needToRequestOperatorIntervention",
        "needToRequestOvhIntervention",
        "requestMonitoring",
        "requestOperatorIntervention",
        "requestOvhIntervention",
        "seltTest"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.Section": {
      "id": "Section",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Cables section details",
      "properties": {
        "length": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "cables length in meters",
          "required": true
        },
        "section": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "cables section in millimeters",
          "required": true
        }
      }
    },
    "xdsl.lineDiagnostic.SeltPrelocEnum": {
      "id": "SeltPrelocEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Possible SELT test prelocalizations",
      "enum": [
        "CUST",
        "DSLAM",
        "LINE",
        "RE"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.SeltResult": {
      "id": "SeltResult",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Customer answers for line diagnostic",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "SELT test running date",
          "required": false
        },
        "distance": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Distance of the problem identified on the line (by SELT test), from NRA to customer",
          "required": false
        },
        "preloc": {
          "type": "xdsl.lineDiagnostic.SeltPrelocEnum",
          "fullType": "xdsl.lineDiagnostic.SeltPrelocEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Prelocalization of the problem",
          "required": false
        },
        "state": {
          "type": "xdsl.lineDiagnostic.SeltStateEnum",
          "fullType": "xdsl.lineDiagnostic.SeltStateEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Problem type identified by SELT test",
          "required": false
        },
        "status": {
          "type": "xdsl.lineDiagnostic.SeltStatusEnum",
          "fullType": "xdsl.lineDiagnostic.SeltStatusEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "SELT test status",
          "required": false
        }
      }
    },
    "xdsl.lineDiagnostic.SeltStateEnum": {
      "id": "SeltStateEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Possible SELT test states",
      "enum": [
        "open",
        "short",
        "synced",
        "unknown"
      ],
      "enumType": "string"
    },
    "xdsl.lineDiagnostic.SeltStatusEnum": {
      "id": "SeltStatusEnum",
      "namespace": "xdsl.lineDiagnostic",
      "description": "Possible SELT test status",
      "enum": [
        "failed",
        "notAvailable",
        "ok"
      ],
      "enumType": "string"
    },
    "xdsl.monitoringNotifications.FrequencyEnum": {
      "id": "FrequencyEnum",
      "namespace": "xdsl.monitoringNotifications",
      "description": "Frequency between notifications.",
      "enum": [
        "1h",
        "5m",
        "6h",
        "once"
      ],
      "enumType": "string"
    },
    "xdsl.monitoringNotifications.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "xdsl.monitoringNotifications",
      "description": "Type of notification.",
      "enum": [
        "mail",
        "sms"
      ],
      "enumType": "string"
    },
    "xdsl.orderFollowup.DurationUnitEnum": {
      "id": "DurationUnitEnum",
      "namespace": "xdsl.orderFollowup",
      "description": "The duration units",
      "enum": [
        "day",
        "hour",
        "minute"
      ],
      "enumType": "string"
    },
    "xdsl.orderFollowup.Step": {
      "id": "Step",
      "namespace": "xdsl.orderFollowup",
      "description": "A step of the order process",
      "properties": {
        "comments": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "doneDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "durationUnit": {
          "type": "xdsl.orderFollowup.DurationUnitEnum",
          "fullType": "xdsl.orderFollowup.DurationUnitEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "expectedDuration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "name": {
          "type": "xdsl.orderFollowup.StepNameEnum",
          "fullType": "xdsl.orderFollowup.StepNameEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "status": {
          "type": "xdsl.orderFollowup.StepStatusEnum",
          "fullType": "xdsl.orderFollowup.StepStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "xdsl.orderFollowup.StepNameEnum": {
      "id": "StepNameEnum",
      "namespace": "xdsl.orderFollowup",
      "description": "The status of an order step",
      "enum": [
        "accessIsOperational",
        "checkInfrastructure",
        "configureAccessOnOVH",
        "orderPayed",
        "orderReceived",
        "orderTreatment",
        "sendModem",
        "sendOrderToProvider",
        "setupCustomerPremisesEquipment",
        "waitingForProviderInstallReport",
        "waitingForWithdrawalPeriodToBeOver"
      ],
      "enumType": "string"
    },
    "xdsl.orderFollowup.StepStatusEnum": {
      "id": "StepStatusEnum",
      "namespace": "xdsl.orderFollowup",
      "description": "The status of an order step",
      "enum": [
        "doing",
        "done",
        "error",
        "todo",
        "waitingCustomer"
      ],
      "enumType": "string"
    },
    "xdsl.templateModem.DHCP": {
      "id": "DHCP",
      "namespace": "xdsl.templateModem",
      "description": "DHCP Configuration for Modem Template",
      "properties": {
        "defaultGateway": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The default gateway to be given to the clients",
          "required": true
        },
        "dhcpName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the DHCP",
          "required": true
        },
        "domainName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Domain name provided to the clients",
          "required": true
        },
        "endAddress": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Last address of the pool assigned by the DHCP",
          "required": true
        },
        "leaseTime": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Lease time in seconds of client assigned address (-1 means infinite)",
          "required": true
        },
        "primaryDNS": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "Primary DNS servers to be given to the clients",
          "required": true
        },
        "secondaryDNS": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "Secondary DNS servers to be given to the clients",
          "required": false
        },
        "serverEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "State of the DHCP server of the modem",
          "required": true
        },
        "startAddress": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "First address of the pool assigned by the DHCP",
          "required": true
        },
        "subnetMask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The subnet mask given to the clients",
          "required": true
        }
      }
    },
    "xdsl.templateModem.LAN": {
      "id": "LAN",
      "namespace": "xdsl.templateModem",
      "description": "LAN Configuration for Modem Template",
      "properties": {
        "IPAddress": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The IP address of the LAN interface of the modem",
          "required": true
        },
        "addressingType": {
          "type": "xdsl.xdslModemConfig.AddressingTypeEnum",
          "fullType": "xdsl.xdslModemConfig.AddressingTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "How the LAN interface of the modem is getting its address",
          "required": true
        },
        "lanName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the LAN",
          "required": true
        },
        "subnetMask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The subnet mask of the LAN interface of the modem",
          "required": true
        }
      }
    },
    "xdsl.templateModem.ParametersToIgnore": {
      "id": "ParametersToIgnore",
      "namespace": "xdsl.templateModem",
      "description": "Parameters and values to ignore when apply modem template configuration",
      "properties": {
        "LANandDHCP": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Ignore LAN and DHCP configurations",
          "required": false
        },
        "WLANList": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "WLAN names list to ignore. Ignore only listed WLAN",
          "required": false
        },
        "dmzIP": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Ignore DMZ configuration",
          "required": false
        },
        "mtuSize": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Ignore MTU Size value",
          "required": false
        },
        "portMappingList": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "PortMapping names list to ignore. Ignore only listed portMapping",
          "required": false
        }
      }
    },
    "xdsl.templateModem.PortMapping": {
      "id": "PortMapping",
      "namespace": "xdsl.templateModem",
      "description": "PortMapping Configuration for Modem Template",
      "properties": {
        "allowedRemoteIp": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": true,
          "readOnly": false,
          "description": "An ip which will access to the defined rule. Default : no restriction applied",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Description of the Port Mapping",
          "required": false
        },
        "externalPortEnd": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "The last port of the interval on the External Client that will get the connections",
          "required": false
        },
        "externalPortStart": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005",
          "required": true
        },
        "internalClient": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": false,
          "description": "The IP address of the destination of the packets",
          "required": true
        },
        "internalPort": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The port on the Internal Client that will get the connections",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the port mapping entry",
          "required": true
        },
        "protocol": {
          "type": "xdsl.xdslModemConfig.ProtocolTypeEnum",
          "fullType": "xdsl.xdslModemConfig.ProtocolTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Protocol of the port mapping (TCP / UDP)",
          "required": true
        }
      }
    },
    "xdsl.templateModem.SecurityTypeEnum": {
      "id": "SecurityTypeEnum",
      "namespace": "xdsl.templateModem",
      "description": "Type of WLAN security protection",
      "enum": [
        "None",
        "WPA",
        "WPA2",
        "WPAandWPA2"
      ],
      "enumType": "string"
    },
    "xdsl.templateModem.WLAN": {
      "id": "WLAN",
      "namespace": "xdsl.templateModem",
      "description": "WLAN Configuration for Modem Template",
      "properties": {
        "SSID": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Service Set Identifier of the WLAN interface",
          "required": true
        },
        "SSIDAdvertisementEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Control if Wifi is discoverable or hidden",
          "required": true
        },
        "bandSteering": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicate if frequencies 2.4GHz and 5GHz are agregated",
          "required": true
        },
        "channel": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Channel number (Useless if channelMode is set to Auto)",
          "required": true
        },
        "channelMode": {
          "type": "xdsl.xdslModemConfig.ChannelModeEnum",
          "fullType": "xdsl.xdslModemConfig.ChannelModeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "How the channel is chosen (Auto / Manual)",
          "required": true
        },
        "enabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Wifi state",
          "required": true
        },
        "frequency": {
          "type": "xdsl.xdslModemConfig.FrequencyEnum",
          "fullType": "xdsl.xdslModemConfig.FrequencyEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Frequency (2.4GHz | 5GHz)",
          "required": true
        },
        "guest": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Indicate if it is normal access wifi or guest wifi",
          "required": true
        },
        "securityKey": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "Encrypted WLAN passphrase",
          "required": true
        },
        "securityType": {
          "type": "xdsl.templateModem.SecurityTypeEnum",
          "fullType": "xdsl.templateModem.SecurityTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Security (None | WPA | WPA2 | WPAandWPA2)",
          "required": true
        },
        "wifiName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Wifi Name",
          "required": true
        }
      }
    },
    "xdsl.xdslEmailPro": {
      "id": "xdslEmailPro",
      "namespace": "xdsl",
      "description": "XDSL Email Pro",
      "properties": {
        "currentUsage": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Mailbox usage",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account display name",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Email domain",
          "required": true
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account first name",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id",
          "required": true
        },
        "initial": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account initials",
          "required": false
        },
        "lastLogoffDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last logoff",
          "required": false
        },
        "lastLogonDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last logon",
          "required": false
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account last name",
          "required": false
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account login",
          "required": true
        },
        "passwordLastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time of account's password last update",
          "required": false
        },
        "primaryEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Default email for this mailbox",
          "required": true
        },
        "quota": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account maximum size",
          "required": true
        },
        "state": {
          "type": "email.pro.ObjectStateEnum",
          "fullType": "email.pro.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Pending tasks for this account",
          "required": false
        }
      }
    },
    "xdsl.xdslModemConfig.AddressingTypeEnum": {
      "id": "AddressingTypeEnum",
      "namespace": "xdsl.xdslModemConfig",
      "description": "How the modem gets its LAN IP Address",
      "enum": [
        "DHCP",
        "Static"
      ],
      "enumType": "string"
    },
    "xdsl.xdslModemConfig.ChannelModeEnum": {
      "id": "ChannelModeEnum",
      "namespace": "xdsl.xdslModemConfig",
      "description": "How the WiFi channel is selected",
      "enum": [
        "Auto",
        "Manual"
      ],
      "enumType": "string"
    },
    "xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum": {
      "id": "ConnectedDeviceAddressSourceEnum",
      "namespace": "xdsl.xdslModemConfig",
      "description": "How did the device got its IP Address",
      "enum": [
        "DHCP",
        "Static",
        "Unknown"
      ],
      "enumType": "string"
    },
    "xdsl.xdslModemConfig.EasyFirewallLevelEnum": {
      "id": "EasyFirewallLevelEnum",
      "namespace": "xdsl.xdslModemConfig",
      "description": "Level of the Firewall ( BlockAll will block all connections, Normal will block all incoming connections except those in PortMapping and let go all outgoing connections , Disabled will disable all the Firewall and let all incoming or outgoing connections pass through )",
      "enum": [
        "BlockAll",
        "Disabled",
        "Normal"
      ],
      "enumType": "string"
    },
    "xdsl.xdslModemConfig.FrequencyEnum": {
      "id": "FrequencyEnum",
      "namespace": "xdsl.xdslModemConfig",
      "description": "Modem frequency",
      "enum": [
        "2.4GHz",
        "5GHz"
      ],
      "enumType": "string"
    },
    "xdsl.xdslModemConfig.MTUSizeEnum": {
      "id": "MTUSizeEnum",
      "namespace": "xdsl.xdslModemConfig",
      "description": "Size of the Maximum Transmission Unit on the modem's interfaces",
      "enum": [
        "1432",
        "1456",
        "1492"
      ],
      "enumType": "long"
    },
    "xdsl.xdslModemConfig.ProtocolTypeEnum": {
      "id": "ProtocolTypeEnum",
      "namespace": "xdsl.xdslModemConfig",
      "description": "Type of protocol for the Port Mapping",
      "enum": [
        "TCP",
        "UDP"
      ],
      "enumType": "string"
    },
    "xdsl.xdslModemConfig.SecurityTypeEnum": {
      "id": "SecurityTypeEnum",
      "namespace": "xdsl.xdslModemConfig",
      "description": "Type of WLAN security protection",
      "enum": [
        "None",
        "WEP",
        "WPA",
        "WPA2",
        "WPAandWPA2"
      ],
      "enumType": "string"
    }
  }
}