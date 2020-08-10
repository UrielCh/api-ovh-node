import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/sms.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations about the VOIP service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/sms"
    },
    {
      "description": "Get the encoding, length and number of SMS parts of a text message",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the encoding, length and number of SMS parts of a text message",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "The message to send",
              "fullType": "text",
              "name": "message",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Do not display STOP clause in the message, this requires that this is not an advertising message",
              "fullType": "boolean",
              "name": "noStopClause",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "sms.TypeSenderEnum",
              "description": "Sender type that will be used to send the message",
              "fullType": "sms.TypeSenderEnum",
              "name": "senderType",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "sms.JobEstimate"
        }
      ],
      "path": "/sms/estimate"
    },
    {
      "description": "Get informations about the given ptt code",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about the given ptt code",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The premium transaction tracking code",
              "fullType": "long",
              "name": "ptt",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "sms.PttDetails"
        }
      ],
      "path": "/sms/ptts"
    },
    {
      "description": "Get the prices and credits to send a SMS towards given country",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the prices and credits to send a SMS towards given country",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "sms.CountryEnum",
              "description": "Country prices to send SMS",
              "fullType": "sms.CountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "sms.DestinationRates"
        }
      ],
      "path": "/sms/rates/destinations"
    },
    {
      "description": "Get the prices and credits of all the SMS packs with informations about the destination country",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the prices and credits of all the SMS packs with informations about the destination country",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "sms.CountryEnum",
              "description": "Destination country",
              "fullType": "sms.CountryEnum",
              "name": "country",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "sms.PackDetails[]"
        }
      ],
      "path": "/sms/rates/packs"
    },
    {
      "description": "Operations about the VOIP service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/sms/virtualNumbers"
    },
    {
      "description": "Virtual numbers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.VirtualNumberGenericService"
        }
      ],
      "path": "/sms/virtualNumbers/{number}"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "Request Body",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sms/virtualNumbers/{number}/serviceInfos"
    },
    {
      "description": "SMS details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
          "responseType": "sms.Account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sms.Account",
              "description": "Request Body",
              "fullType": "sms.Account",
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
      "path": "/sms/{serviceName}"
    },
    {
      "description": "List the sms.Blacklist objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Numbers blacklisted associated to the sms account",
          "httpMethod": "GET",
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
              "dataType": "uuid",
              "description": "Filter the value of batchID property (=)",
              "fullType": "uuid",
              "name": "batchID",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of smsOutgoingID property (=)",
              "fullType": "long",
              "name": "smsOutgoingID",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/sms/{serviceName}/blacklists"
    },
    {
      "description": "SMS blacklist",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the blacklisted sms number given",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Blacklist"
        }
      ],
      "path": "/sms/{serviceName}/blacklists/{number}"
    },
    {
      "description": "document operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the /me/document id generated",
          "httpMethod": "GET",
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
              "dataType": "sms.DocumentWayTypeEnum",
              "description": "specify outgoing or incoming sms",
              "fullType": "sms.DocumentWayTypeEnum",
              "name": "wayType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (>=)",
              "fullType": "datetime",
              "name": "creationDatetime.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (<=)",
              "fullType": "datetime",
              "name": "creationDatetime.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Select sms with a specific identifier group tag",
              "fullType": "string",
              "name": "tag",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/sms/{serviceName}/document"
    },
    {
      "description": "exceptions operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Describe filter exceptions in sms sending from a specific receiver.",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "The receiver number to check",
              "fullType": "string",
              "name": "receiver",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "sms.Exception[]"
        }
      ],
      "path": "/sms/{serviceName}/exceptions"
    },
    {
      "description": "List the sms.HlrLookupNumber objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Home Location Register informations. Give informations about a given cellular phone.",
          "httpMethod": "GET",
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
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add one or several sending hlr lookup request",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string[]",
              "description": "The receivers",
              "fullType": "string[]",
              "name": "receivers",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The receivers document url link in csv format",
              "fullType": "string",
              "name": "receiversDocumentUrl",
              "paramType": "body",
              "required": false
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
          "responseType": "sms.SmsSendingReport"
        }
      ],
      "path": "/sms/{serviceName}/hlr"
    },
    {
      "description": "Home Location Register informations. Give informations about a given cellular phone.",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.HlrLookupNumber"
        }
      ],
      "path": "/sms/{serviceName}/hlr/{id}"
    },
    {
      "description": "Sms operator informations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
          "responseType": "sms.Hlr"
        }
      ],
      "path": "/sms/{serviceName}/hlr/{id}/operator"
    },
    {
      "description": "List the sms.Incoming objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Sms received associated to the sms account",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Filter the value of sender property (=)",
              "fullType": "string",
              "name": "sender",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of tag property (=)",
              "fullType": "string",
              "name": "tag",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (<=)",
              "fullType": "datetime",
              "name": "creationDatetime.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (>=)",
              "fullType": "datetime",
              "name": "creationDatetime.from",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/sms/{serviceName}/incoming"
    },
    {
      "description": "Sms history of sms incoming received",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms incoming history given",
          "httpMethod": "DELETE",
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
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Incoming"
        }
      ],
      "path": "/sms/{serviceName}/incoming/{id}"
    },
    {
      "description": "List the sms.Job objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Sms in pending associated to the sms account",
          "httpMethod": "GET",
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
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add one or several sending jobs",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Do not display STOP clause in the message, this requires that this is not an advertising message",
              "fullType": "boolean",
              "name": "noStopClause",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The identifier group tag",
              "fullType": "string",
              "name": "tag",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The receivers document url link in csv format",
              "fullType": "string",
              "name": "receiversDocumentUrl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Set the flag to send a special sms which can be reply by the receiver (smsResponse).",
              "fullType": "boolean",
              "name": "senderForResponse",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The receivers document slot id",
              "fullType": "string",
              "name": "receiversSlotId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The sms message",
              "fullType": "string",
              "name": "message",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "sms.CodingEnum",
              "description": "The sms coding",
              "fullType": "sms.CodingEnum",
              "name": "coding",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The time -in minute(s)- to wait before sending the message",
              "fullType": "long",
              "name": "differedPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "The receivers list",
              "fullType": "string[]",
              "name": "receivers",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The maximum time -in minute(s)- before the message is dropped",
              "fullType": "long",
              "name": "validityPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.PriorityEnum",
              "description": "The priority of the message",
              "fullType": "sms.PriorityEnum",
              "name": "priority",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.CharsetEnum",
              "description": "The sms coding",
              "fullType": "sms.CharsetEnum",
              "name": "charset",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.ClassEnum",
              "description": "The sms class",
              "fullType": "sms.ClassEnum",
              "name": "class",
              "paramType": "body",
              "required": false
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
          "responseType": "sms.SmsSendingReport"
        }
      ],
      "path": "/sms/{serviceName}/jobs"
    },
    {
      "description": "Sms job",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms job given (stop sending)",
          "httpMethod": "DELETE",
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
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Job"
        }
      ],
      "path": "/sms/{serviceName}/jobs/{id}"
    },
    {
      "description": "List the sms.Outgoing objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Sms sent associated to the sms account",
          "httpMethod": "GET",
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
              "description": "Filter the value of creationDatetime property (<=)",
              "fullType": "datetime",
              "name": "creationDatetime.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of ptt property (=)",
              "fullType": "long",
              "name": "ptt",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (>=)",
              "fullType": "datetime",
              "name": "creationDatetime.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of sender property (=)",
              "fullType": "string",
              "name": "sender",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of deliveryReceipt property (=)",
              "fullType": "long",
              "name": "deliveryReceipt",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of differedDelivery property (=)",
              "fullType": "long",
              "name": "differedDelivery",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of tag property (=)",
              "fullType": "string",
              "name": "tag",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of receiver property (=)",
              "fullType": "string",
              "name": "receiver",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/sms/{serviceName}/outgoing"
    },
    {
      "description": "Sms history of sms outgoing sent",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms outgoing history given",
          "httpMethod": "DELETE",
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
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Outgoing"
        }
      ],
      "path": "/sms/{serviceName}/outgoing/{id}"
    },
    {
      "description": "Sms operator informations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Hlr"
        }
      ],
      "path": "/sms/{serviceName}/outgoing/{id}/hlr"
    },
    {
      "description": "List the sms.Phonebook objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return phonebooks associated to this account",
          "httpMethod": "GET",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a phonebook. Return the bookKey.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the wanted phonebook",
              "fullType": "string",
              "name": "name",
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
          "responseType": "string"
        }
      ],
      "path": "/sms/{serviceName}/phonebooks"
    },
    {
      "description": "Phone book",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a phonebook",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Book key",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Book key",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Phonebook"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sms.Phonebook",
              "description": "Request Body",
              "fullType": "sms.Phonebook",
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
            },
            {
              "dataType": "string",
              "description": "Book key",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sms/{serviceName}/phonebooks/{bookKey}"
    },
    {
      "description": "export operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Export the phonebook's contacts",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Book key",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "telephony.ContactsExportFormatsEnum",
              "description": "Format of the file",
              "fullType": "telephony.ContactsExportFormatsEnum",
              "name": "format",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "telephony.PcsFile"
        }
      ],
      "path": "/sms/{serviceName}/phonebooks/{bookKey}/export"
    },
    {
      "description": "import operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "ID of the /me/document file you want to import",
              "fullType": "string",
              "name": "documentId",
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
            },
            {
              "dataType": "string",
              "description": "Book key",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.Task"
        }
      ],
      "path": "/sms/{serviceName}/phonebooks/{bookKey}/import"
    },
    {
      "description": "List the sms.PhonebookContact objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Phonebook contacts",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Book key",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a phonebook contact. Return identifier of the phonebook contact.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Group name of the phonebook",
              "fullType": "string",
              "name": "group",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Home landline phone number of the contact",
              "fullType": "phoneNumber",
              "name": "homePhone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Contact surname",
              "fullType": "string",
              "name": "surname",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Landline phone office number of the contact",
              "fullType": "phoneNumber",
              "name": "workPhone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "phoneNumber",
              "description": "Mobile phone office number of the contact",
              "fullType": "phoneNumber",
              "name": "workMobile",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of the contact",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "phoneNumber",
              "description": "Home mobile phone number of the contact",
              "fullType": "phoneNumber",
              "name": "homeMobile",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Book key",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long"
        }
      ],
      "path": "/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact"
    },
    {
      "description": "Phone book contact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a phonebook contact",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Book key",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Book key",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.PhonebookContact"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sms.PhonebookContact",
              "description": "Request Body",
              "fullType": "sms.PhonebookContact",
              "paramType": "body",
              "required": true
            },
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
            },
            {
              "dataType": "string",
              "description": "Book key",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}"
    },
    {
      "description": "List the sms.Receiver objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Receivers preloaded from text or csv document file",
          "httpMethod": "GET",
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
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new document of csv receivers",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Slot number id used to handle the document",
              "fullType": "long",
              "name": "slotId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "ID of the /me/document file you want to import",
              "fullType": "string",
              "name": "documentId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Download file from URL before sending to contacts (works only with csvUrl and not document ID)",
              "fullType": "boolean",
              "name": "autoUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "URL of the file you want to import",
              "fullType": "string",
              "name": "csvUrl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Description name of the document",
              "fullType": "string",
              "name": "description",
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
          "responseType": "sms.Receiver"
        }
      ],
      "path": "/sms/{serviceName}/receivers"
    },
    {
      "description": "Sms receivers preloaded",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the document from the slot",
          "httpMethod": "DELETE",
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
              "dataType": "long",
              "description": "Slot ID",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Slot ID",
              "fullType": "long",
              "name": "slotId",
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
          "responseType": "sms.Receiver"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sms.Receiver",
              "description": "Request Body",
              "fullType": "sms.Receiver",
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
            },
            {
              "dataType": "long",
              "description": "Slot ID",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sms/{serviceName}/receivers/{slotId}"
    },
    {
      "description": "clean operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Limit checks to syntaxical validation",
              "fullType": "boolean",
              "name": "freemium",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Only get action's price in credits without executing it",
              "fullType": "boolean",
              "name": "priceOnly",
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
            },
            {
              "dataType": "long",
              "description": "Slot ID",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.ReceiversAsynchronousCleanReport"
        }
      ],
      "path": "/sms/{serviceName}/receivers/{slotId}/clean"
    },
    {
      "description": "csv operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the document data container",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Slot ID",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/sms/{serviceName}/receivers/{slotId}/csv"
    },
    {
      "description": "seeOffers operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Describe SMS offers available.",
          "httpMethod": "GET",
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
              "dataType": "reference.CountryEnum",
              "description": "Filter to have the currency country prices",
              "fullType": "reference.CountryEnum",
              "name": "countryCurrencyPrice",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "sms.CountryEnum",
              "description": "Filter to have the country destination",
              "fullType": "sms.CountryEnum",
              "name": "countryDestination",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "sms.PackQuantityEnum",
              "description": "Sms pack offer quantity",
              "fullType": "sms.PackQuantityEnum",
              "name": "quantity",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "sms.PackOffer[]"
        }
      ],
      "path": "/sms/{serviceName}/seeOffers"
    },
    {
      "description": "List the sms.Sender objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Senders allowed associated to the sms account",
          "httpMethod": "GET",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create the sms sender given",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Message seen by the moderator",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The sender (alpha or phone number)",
              "fullType": "string",
              "name": "sender",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Sender description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
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
          "responseType": "string"
        }
      ],
      "path": "/sms/{serviceName}/senders"
    },
    {
      "description": "SMS senders",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms sender given",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Sender",
              "fullType": "string",
              "name": "sender",
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
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Sender"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sms.Sender",
              "description": "Request Body",
              "fullType": "sms.Sender",
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
            },
            {
              "dataType": "string",
              "description": "Sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sms/{serviceName}/senders/{sender}"
    },
    {
      "description": "validate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Validate a given sender with an activation code.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The validation code",
              "fullType": "string",
              "name": "code",
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
            },
            {
              "dataType": "string",
              "description": "Sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sms/{serviceName}/senders/{sender}/validate"
    },
    {
      "description": "sendersAvailableForValidation operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "The senders that are attached to your personal informations or OVH services and that can be automatically validated",
          "httpMethod": "GET",
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
              "dataType": "sms.SenderRefererEnum",
              "description": "Information type",
              "fullType": "sms.SenderRefererEnum",
              "name": "referer",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "sms.SenderAvailable[]"
        }
      ],
      "path": "/sms/{serviceName}/sendersAvailableForValidation"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "Request Body",
              "fullType": "services.Service",
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
      "path": "/sms/{serviceName}/serviceInfos"
    },
    {
      "description": "List the sms.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Operations on a SMS service",
          "httpMethod": "GET",
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
              "dataType": "telephony.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "telephony.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/sms/{serviceName}/task"
    },
    {
      "description": "Operation on a SMS service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "long",
              "description": "Task ID",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Task"
        }
      ],
      "path": "/sms/{serviceName}/task/{taskId}"
    },
    {
      "description": "List the sms.TemplateControl objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Template pattern filled up for moderation (Needed to send in US country)",
          "httpMethod": "GET",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create the sms template control given",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the template",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Message pattern to be moderated. Use \"#VALUE#\" format for dynamic text area.",
              "fullType": "string",
              "name": "message",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Template description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Message seen by the moderator",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.TypeTemplateEnum",
              "description": "Specify the kind of template",
              "fullType": "sms.TypeTemplateEnum",
              "name": "activity",
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
      "path": "/sms/{serviceName}/templatesControl"
    },
    {
      "description": "Sms template for moderation (Needed to send in US country)",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms template control",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.TemplateControl"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sms.TemplateControl",
              "description": "Request Body",
              "fullType": "sms.TemplateControl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
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
          "responseType": "void"
        }
      ],
      "path": "/sms/{serviceName}/templatesControl/{name}"
    },
    {
      "description": "relaunchValidation operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Attempt a new validation after moderation refusal",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Template description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Message pattern to be moderated. Use \"#VALUE#\" format for dynamic text area",
              "fullType": "string",
              "name": "message",
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
            },
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sms/{serviceName}/templatesControl/{name}/relaunchValidation"
    },
    {
      "description": "transferCredits operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Credit transfer between two sms accounts.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "double",
              "description": "Amount of credits to transfer.",
              "fullType": "double",
              "name": "credits",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Sms account destination.",
              "fullType": "string",
              "name": "smsAccountTarget",
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
      "path": "/sms/{serviceName}/transferCredits"
    },
    {
      "description": "List the sms.User objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Users associated to the sms account",
          "httpMethod": "GET",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new user for an sms account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The sms password",
              "fullType": "string",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms login",
              "fullType": "string",
              "name": "login",
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
      "path": "/sms/{serviceName}/users"
    },
    {
      "description": "SMS users",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms user given",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.User"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sms.User",
              "description": "Request Body",
              "fullType": "sms.User",
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
            },
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}"
    },
    {
      "description": "document operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the /me/document id generated",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Select sms with a specific identifier group tag",
              "fullType": "string",
              "name": "tag",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "sms.DocumentWayTypeEnum",
              "description": "specify outgoing or incoming sms",
              "fullType": "sms.DocumentWayTypeEnum",
              "name": "wayType",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (>=)",
              "fullType": "datetime",
              "name": "creationDatetime.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (<=)",
              "fullType": "datetime",
              "name": "creationDatetime.to",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/document"
    },
    {
      "description": "List the sms.Incoming objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Sms received associated to the sms user",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of tag property (=)",
              "fullType": "string",
              "name": "tag",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of sender property (=)",
              "fullType": "string",
              "name": "sender",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/incoming"
    },
    {
      "description": "Sms history of sms incoming received",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms incoming history given",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Incoming"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/incoming/{id}"
    },
    {
      "description": "List the sms.Job objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Sms in pending associated to the sms user",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add one or several sending jobs",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The receivers document url link in csv format",
              "fullType": "string",
              "name": "receiversDocumentUrl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.CodingEnum",
              "description": "The sms coding",
              "fullType": "sms.CodingEnum",
              "name": "coding",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The maximum time -in minute(s)- before the message is dropped",
              "fullType": "long",
              "name": "validityPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Do not display STOP clause in the message, this requires that this is not an advertising message",
              "fullType": "boolean",
              "name": "noStopClause",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "Set the flag to send a special sms which can be reply by the receiver (smsResponse).",
              "fullType": "boolean",
              "name": "senderForResponse",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.ClassEnum",
              "description": "The sms class",
              "fullType": "sms.ClassEnum",
              "name": "class",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The identifier group tag",
              "fullType": "string",
              "name": "tag",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.PriorityEnum",
              "description": "The priority of the message",
              "fullType": "sms.PriorityEnum",
              "name": "priority",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.CharsetEnum",
              "description": "The sms coding",
              "fullType": "sms.CharsetEnum",
              "name": "charset",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The time -in minute(s)- to wait before sending the message",
              "fullType": "long",
              "name": "differedPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string[]",
              "description": "The receivers list",
              "fullType": "string[]",
              "name": "receivers",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The sms message",
              "fullType": "string",
              "name": "message",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The receivers document slot id",
              "fullType": "string",
              "name": "receiversSlotId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
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
          "responseType": "sms.SmsSendingReport"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/jobs"
    },
    {
      "description": "Sms job",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms job given (stop sending)",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
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
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
            },
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Job"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/jobs/{id}"
    },
    {
      "description": "List the sms.Outgoing objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Sms sent associated to the sms user",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filter the value of ptt property (=)",
              "fullType": "long",
              "name": "ptt",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of tag property (=)",
              "fullType": "string",
              "name": "tag",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of sender property (=)",
              "fullType": "string",
              "name": "sender",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of differedDelivery property (=)",
              "fullType": "long",
              "name": "differedDelivery",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of receiver property (=)",
              "fullType": "string",
              "name": "receiver",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of deliveryReceipt property (=)",
              "fullType": "long",
              "name": "deliveryReceipt",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/outgoing"
    },
    {
      "description": "Sms history of sms outgoing sent",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms outgoing history given",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
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
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Outgoing"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/outgoing/{id}"
    },
    {
      "description": "Sms operator informations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
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
          "responseType": "sms.Hlr"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/outgoing/{id}/hlr"
    },
    {
      "description": "List the sms.Receiver objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Receivers preloaded from text or csv document file",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
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
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new document of csv receivers",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Download file from URL before sending to contacts (works only with csvUrl and not document ID)",
              "fullType": "boolean",
              "name": "autoUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "URL of the file you want to import",
              "fullType": "string",
              "name": "csvUrl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Description name of the document",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id used to handle the document",
              "fullType": "long",
              "name": "slotId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "ID of the /me/document file you want to import",
              "fullType": "string",
              "name": "documentId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
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
          "responseType": "sms.Receiver"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/receivers"
    },
    {
      "description": "Sms receivers preloaded",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the document from the slot",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot ID",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot ID",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Receiver"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sms.Receiver",
              "description": "Request Body",
              "fullType": "sms.Receiver",
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
            },
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot ID",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/receivers/{slotId}"
    },
    {
      "description": "clean operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Only get action's price in credits without executing it",
              "fullType": "boolean",
              "name": "priceOnly",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Limit checks to syntaxical validation",
              "fullType": "boolean",
              "name": "freemium",
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
            },
            {
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot ID",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.ReceiversAsynchronousCleanReport"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/receivers/{slotId}/clean"
    },
    {
      "description": "csv operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the document data container",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot ID",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/sms/{serviceName}/users/{login}/receivers/{slotId}/csv"
    },
    {
      "description": "List the sms.VirtualNumber objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Virtual numbers associated to the sms account",
          "httpMethod": "GET",
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
          "responseType": "string[]"
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers"
    },
    {
      "description": "Virtual numbers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
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
          "responseType": "sms.VirtualNumber"
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers/{number}"
    },
    {
      "description": "The web access for your virtual number chat application",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the given web access",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.ChatAccess"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new web access for this ressource",
          "httpMethod": "POST",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.ChatAccess"
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers/{number}/chatAccess"
    },
    {
      "description": "List the sms.Incoming objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Sms received associated to the sms account",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of sender property (=)",
              "fullType": "string",
              "name": "sender",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of tag property (=)",
              "fullType": "string",
              "name": "tag",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (<=)",
              "fullType": "datetime",
              "name": "creationDatetime.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (>=)",
              "fullType": "datetime",
              "name": "creationDatetime.from",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers/{number}/incoming"
    },
    {
      "description": "Sms history of sms incoming received",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms incoming history given",
          "httpMethod": "DELETE",
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
            },
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Incoming"
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}"
    },
    {
      "description": "List the sms.VirtualNumberJob objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Sms in pending associated to the sms account",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add one or several sending jobs",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The maximum time -in minute(s)- before the message is dropped",
              "fullType": "long",
              "name": "validityPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.ClassEnum",
              "description": "The sms class",
              "fullType": "sms.ClassEnum",
              "name": "class",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.PriorityEnum",
              "description": "The priority of the message",
              "fullType": "sms.PriorityEnum",
              "name": "priority",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.CharsetEnum",
              "description": "The sms coding",
              "fullType": "sms.CharsetEnum",
              "name": "charset",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The receivers document url link in csv format",
              "fullType": "string",
              "name": "receiversDocumentUrl",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The receivers document slot id",
              "fullType": "string",
              "name": "receiversSlotId",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The sms message",
              "fullType": "string",
              "name": "message",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string[]",
              "description": "The receivers list",
              "fullType": "string[]",
              "name": "receivers",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "sms.CodingEnum",
              "description": "The sms coding",
              "fullType": "sms.CodingEnum",
              "name": "coding",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The identifier group tag",
              "fullType": "string",
              "name": "tag",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The time -in minute(s)- to wait before sending the message",
              "fullType": "long",
              "name": "differedPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.SmsSendingReport"
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers/{number}/jobs"
    },
    {
      "description": "Sms job",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms job given (stop sending)",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.VirtualNumberJob"
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}"
    },
    {
      "description": "List the sms.Outgoing objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Sms sent associated to the sms account",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of receiver property (=)",
              "fullType": "string",
              "name": "receiver",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of tag property (=)",
              "fullType": "string",
              "name": "tag",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of differedDelivery property (=)",
              "fullType": "long",
              "name": "differedDelivery",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of deliveryReceipt property (=)",
              "fullType": "long",
              "name": "deliveryReceipt",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (>=)",
              "fullType": "datetime",
              "name": "creationDatetime.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter the value of ptt property (=)",
              "fullType": "long",
              "name": "ptt",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDatetime property (<=)",
              "fullType": "datetime",
              "name": "creationDatetime.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of sender property (=)",
              "fullType": "string",
              "name": "sender",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers/{number}/outgoing"
    },
    {
      "description": "Sms history of sms outgoing sent",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the sms outgoing history given",
          "httpMethod": "DELETE",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Outgoing"
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}"
    },
    {
      "description": "Sms operator informations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
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
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Hlr"
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "order.CurrencyCodeEnum": {
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
      "enumType": "string",
      "id": "CurrencyCodeEnum",
      "namespace": "order"
    },
    "order.Price": {
      "description": "Price with it's currency and textual representation",
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": false,
          "required": true,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        }
      }
    },
    "reference.CountryEnum": {
      "description": "All country prices accessible from a reference",
      "enum": [
        "all",
        "ca",
        "cz",
        "de",
        "en",
        "es",
        "fi",
        "fr",
        "gb",
        "ie",
        "it",
        "lt",
        "ma",
        "nl",
        "pl",
        "pp",
        "pt",
        "qc",
        "ru",
        "sk",
        "sn",
        "tn",
        "we"
      ],
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "reference"
    },
    "service.RenewType": {
      "description": "Map a possible renew for a specific service",
      "id": "RenewType",
      "namespace": "service",
      "properties": {
        "automatic": {
          "canBeNull": false,
          "description": "The service is automatically renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "fullType": "long",
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
          "required": true,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": true,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
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
          "required": true,
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
          "required": true,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.ServiceId:long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": true,
          "type": "service.StateEnum"
        }
      }
    },
    "sms.Account": {
      "description": "SMS details",
      "id": "Account",
      "namespace": "sms",
      "properties": {
        "automaticRecreditAmount": {
          "canBeNull": true,
          "fullType": "sms.PackQuantityAutomaticRecreditEnum",
          "readOnly": false,
          "required": false,
          "type": "sms.PackQuantityAutomaticRecreditEnum"
        },
        "callBack": {
          "canBeNull": true,
          "description": "URL called when state of a sent SMS changes",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "creditThresholdForAutomaticRecredit": {
          "canBeNull": false,
          "description": "Credit threshold after which an automatic recredit is launched",
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        },
        "creditsHoldByQuota": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": true,
          "type": "double"
        },
        "creditsLeft": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": true,
          "type": "double"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "smsResponse": {
          "canBeNull": false,
          "fullType": "sms.Response",
          "readOnly": false,
          "required": true,
          "type": "sms.Response"
        },
        "status": {
          "canBeNull": false,
          "fullType": "sms.StatusAccountEnum",
          "readOnly": true,
          "required": true,
          "type": "sms.StatusAccountEnum"
        },
        "stopCallBack": {
          "canBeNull": true,
          "description": "URL called when a STOP is received after a receiver replied stop to a SMS",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "templates": {
          "canBeNull": false,
          "fullType": "sms.Templates",
          "readOnly": false,
          "required": true,
          "type": "sms.Templates"
        },
        "userQuantityWithQuota": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        }
      }
    },
    "sms.AlertThreshold": {
      "description": "A structure describing all information about alert threshold informations",
      "id": "AlertThreshold",
      "namespace": "sms",
      "properties": {
        "alertEmail": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "alertNumber": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "alertThreshold": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "support": {
          "canBeNull": false,
          "fullType": "sms.SupportEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.SupportEnum"
        }
      }
    },
    "sms.Blacklist": {
      "description": "SMS blacklist",
      "id": "Blacklist",
      "namespace": "sms",
      "properties": {
        "batchID": {
          "canBeNull": true,
          "description": "ID of the batch responsible of the blacklist",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "dateCreation": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "number": {
          "canBeNull": false,
          "description": "The sms number blacklisted",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "smsOutgoingID": {
          "canBeNull": true,
          "description": "ID of the outgoing SMS responsible of the blacklist",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "sms.CharsetEnum": {
      "description": "The charset format",
      "enum": [
        "UTF-8"
      ],
      "enumType": "string",
      "id": "CharsetEnum",
      "namespace": "sms"
    },
    "sms.ChatAccess": {
      "description": "The web access for your virtual number chat application",
      "id": "ChatAccess",
      "namespace": "sms",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "The creation date of this access",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "url": {
          "canBeNull": false,
          "description": "The url of the web access",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "sms.ClassEnum": {
      "description": "The sms class of sms sending job",
      "enum": [
        "flash",
        "phoneDisplay",
        "sim",
        "toolkit"
      ],
      "enumType": "string",
      "id": "ClassEnum",
      "namespace": "sms"
    },
    "sms.CodingEnum": {
      "description": "The sms coding",
      "enum": [
        "7bit",
        "8bit"
      ],
      "enumType": "string",
      "id": "CodingEnum",
      "namespace": "sms"
    },
    "sms.CountryEnum": {
      "description": "All country suffixes accessible for sms services and \"all\" available",
      "enum": [
        "ag",
        "ai",
        "all",
        "an",
        "ar",
        "at",
        "au",
        "aw",
        "ba",
        "bb",
        "be",
        "bg",
        "bh",
        "bm",
        "bo",
        "br",
        "bz",
        "ch",
        "cl",
        "cn",
        "co",
        "cr",
        "cu",
        "cy",
        "cz",
        "de",
        "dk",
        "dm",
        "dz",
        "ec",
        "ee",
        "eg",
        "es",
        "fi",
        "fr",
        "gb",
        "gd",
        "gp",
        "gr",
        "gy",
        "hk",
        "hn",
        "hr",
        "ht",
        "hu",
        "id",
        "ie",
        "il",
        "in",
        "is",
        "it",
        "jm",
        "jo",
        "jp",
        "kr",
        "kw",
        "ky",
        "lb",
        "lc",
        "lt",
        "lu",
        "lv",
        "ma",
        "me",
        "mq",
        "ms",
        "mt",
        "my",
        "nc",
        "ng",
        "nl",
        "no",
        "nz",
        "pa",
        "pe",
        "pf",
        "ph",
        "pk",
        "pl",
        "pt",
        "py",
        "re",
        "ro",
        "rs",
        "ru",
        "sa",
        "se",
        "sg",
        "si",
        "sk",
        "sr",
        "tc",
        "th",
        "tn",
        "tr",
        "tt",
        "tw",
        "ua",
        "uy",
        "vc",
        "ve",
        "vg",
        "vn",
        "za"
      ],
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "sms"
    },
    "sms.DestinationRates": {
      "description": "Rates of a given destination",
      "id": "DestinationRates",
      "namespace": "sms",
      "properties": {
        "country": {
          "canBeNull": false,
          "description": "The country full name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": false,
          "description": "The country 2-letters code",
          "fullType": "sms.CountryEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.CountryEnum"
        },
        "credit": {
          "canBeNull": false,
          "description": "Credits consumed by sending one SMS towards the given destination",
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of one SMS sent towards the given destination",
          "fullType": "order.Price",
          "readOnly": false,
          "required": true,
          "type": "order.Price"
        }
      }
    },
    "sms.DocumentWayTypeEnum": {
      "description": "Way type",
      "enum": [
        "incoming",
        "outgoing"
      ],
      "enumType": "string",
      "id": "DocumentWayTypeEnum",
      "namespace": "sms"
    },
    "sms.EncodingEnum": {
      "description": "The SMS available characters class",
      "enum": [
        "7bits",
        "unicode"
      ],
      "enumType": "string",
      "id": "EncodingEnum",
      "namespace": "sms"
    },
    "sms.Exception": {
      "description": "Sms reach list",
      "id": "Exception",
      "namespace": "sms",
      "properties": {
        "countrySuffixe": {
          "canBeNull": false,
          "description": "The abreviated country code.",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "messages": {
          "canBeNull": false,
          "description": "The exception message",
          "fullType": "string[]",
          "readOnly": true,
          "required": true,
          "type": "string[]"
        },
        "operators": {
          "canBeNull": false,
          "description": "The list of operators impacted.",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "restrictionCode": {
          "canBeNull": false,
          "description": "The type of routing restriction imposed by the operator",
          "fullType": "sms.RestrictionCodeEnum",
          "readOnly": true,
          "required": true,
          "type": "sms.RestrictionCodeEnum"
        },
        "substitution": {
          "canBeNull": true,
          "description": "The substitution sender used to bypass operator filter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "sms.Hlr": {
      "description": "Sms operator informations",
      "id": "Hlr",
      "namespace": "sms",
      "properties": {
        "country": {
          "canBeNull": false,
          "description": "The country",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": false,
          "description": "The countryCode prefix number",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "network": {
          "canBeNull": false,
          "description": "The network name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "operator": {
          "canBeNull": false,
          "description": "The operator name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "The region",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "sms.HlrLookupNumber": {
      "description": "Home Location Register informations. Give informations about a given cellular phone.",
      "id": "HlrLookupNumber",
      "namespace": "sms",
      "properties": {
        "datetime": {
          "canBeNull": false,
          "description": "HLR creation datetime",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "HLR id",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "msisdn": {
          "canBeNull": false,
          "description": "MSISDN",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "operatorCode": {
          "canBeNull": false,
          "description": "The {Mobile Country Code, Mobile Network Code} unique identifier",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "ported": {
          "canBeNull": false,
          "description": "Has the MSISDN been ported from its original network",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "reachable": {
          "canBeNull": false,
          "description": "Is the MSISDN currently reachable",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "roaming": {
          "canBeNull": false,
          "description": "Is the MSISDN currently roaming outside its natinal network",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the HLR request",
          "fullType": "sms.HlrStatuses",
          "readOnly": true,
          "required": true,
          "type": "sms.HlrStatuses"
        },
        "valid": {
          "canBeNull": false,
          "description": "Is the MSISDN valid",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        }
      }
    },
    "sms.HlrStatuses": {
      "description": "The sms coding",
      "enum": [
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "HlrStatuses",
      "namespace": "sms"
    },
    "sms.Incoming": {
      "description": "Sms history of sms incoming received",
      "id": "Incoming",
      "namespace": "sms",
      "properties": {
        "creationDatetime": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "credits": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": true,
          "type": "double"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "message": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "sender": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "tag": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "sms.Job": {
      "description": "Sms job",
      "id": "Job",
      "namespace": "sms",
      "properties": {
        "creationDatetime": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "credits": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": true,
          "type": "double"
        },
        "deliveredAt": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deliveryReceipt": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "differedDelivery": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "message": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "messageLength": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "numberOfSms": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "ptt": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "receiver": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "sender": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "sentAt": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "sms.JobEstimate": {
      "description": "A structure describing the encoding, length and number of SMS parts of a text message",
      "id": "JobEstimate",
      "namespace": "sms",
      "properties": {
        "characters": {
          "canBeNull": false,
          "description": "The number of characters the message contains, including invisible escaped characters",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "charactersClass": {
          "canBeNull": false,
          "description": "The characters class that will be used to send the SMS, depending on characters in message",
          "fullType": "sms.EncodingEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.EncodingEnum"
        },
        "maxCharactersPerPart": {
          "canBeNull": false,
          "description": "The number of characters every SMS part can contain, depending on characters class and quantity of parts",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "parts": {
          "canBeNull": false,
          "description": "The quantity of SMS parts the message will be split in",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "sms.Outgoing": {
      "description": "Sms history of sms outgoing sent",
      "id": "Outgoing",
      "namespace": "sms",
      "properties": {
        "creationDatetime": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "credits": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": true,
          "type": "double"
        },
        "deliveredAt": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deliveryReceipt": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "differedDelivery": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "message": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "messageLength": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "numberOfSms": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "ptt": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "receiver": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "sender": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "sentAt": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "tag": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "tariffCode": {
          "canBeNull": false,
          "description": "Tariff code applied on the sms",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "sms.PackDetails": {
      "description": "Details about a SMS pack",
      "id": "PackDetails",
      "namespace": "sms",
      "properties": {
        "countryCode": {
          "canBeNull": false,
          "description": "Destination country code",
          "fullType": "sms.CountryEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.CountryEnum"
        },
        "credit": {
          "canBeNull": false,
          "description": "Credits consumed by sending one SMS towards the given destination",
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        },
        "creditPrice": {
          "canBeNull": false,
          "description": "Price of one credit, including pack's promotion",
          "fullType": "order.Price",
          "readOnly": false,
          "required": true,
          "type": "order.Price"
        },
        "creditQuantityMax": {
          "canBeNull": true,
          "description": "Maximum quantity (excluded) of credit to order to have this price",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "creditQuantityMin": {
          "canBeNull": false,
          "description": "Minimum quantity (included) of credit to order to have this price",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "smsPrice": {
          "canBeNull": false,
          "description": "Price of one SMS sent towards the given destination, including pack's promotion",
          "fullType": "order.Price",
          "readOnly": false,
          "required": true,
          "type": "order.Price"
        },
        "smsQuantityMax": {
          "canBeNull": true,
          "description": "Maximum quantity (excluded) of SMS you can obtain with this pack",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "smsQuantityMin": {
          "canBeNull": false,
          "description": "Minimum quantity (included) of SMS you can obtain with this pack",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "sms.PackOffer": {
      "description": "A structure describing all information about an sms pack offer",
      "id": "PackOffer",
      "namespace": "sms",
      "properties": {
        "countryDestination": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "giftPrice": {
          "canBeNull": true,
          "fullType": "double",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "giftQuantity": {
          "canBeNull": true,
          "fullType": "double",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "language": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        },
        "quantity": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "smsQuantity": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        },
        "totalPrice": {
          "canBeNull": true,
          "fullType": "double",
          "readOnly": false,
          "required": false,
          "type": "double"
        }
      }
    },
    "sms.PackQuantityAutomaticRecreditEnum": {
      "description": "Pack quantity automatic recredit possibilities",
      "enum": [
        "100",
        "1000",
        "10000",
        "200",
        "250",
        "500",
        "5000"
      ],
      "enumType": "long",
      "id": "PackQuantityAutomaticRecreditEnum",
      "namespace": "sms"
    },
    "sms.PackQuantityEnum": {
      "description": "Pack quantity levels",
      "enum": [
        "100",
        "1000",
        "10000",
        "100000",
        "1000000",
        "200",
        "250",
        "2500",
        "25000",
        "500",
        "5000",
        "50000"
      ],
      "enumType": "long",
      "id": "PackQuantityEnum",
      "namespace": "sms"
    },
    "sms.Phonebook": {
      "description": "Phone book",
      "id": "Phonebook",
      "namespace": "sms",
      "properties": {
        "bookKey": {
          "canBeNull": false,
          "description": "Identifier of the phonebook",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Phonebook name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "phoneKey": {
          "canBeNull": false,
          "description": "Phone key identifier between the phone and phonebooks",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "sms.PhonebookContact": {
      "description": "Phone book contact",
      "id": "PhonebookContact",
      "namespace": "sms",
      "properties": {
        "group": {
          "canBeNull": false,
          "description": "Group name of the phonebook",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "homeMobile": {
          "canBeNull": true,
          "description": "Home mobile phone number of the contact",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "homePhone": {
          "canBeNull": true,
          "description": "Home landline phone number of the contact",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "id": {
          "canBeNull": false,
          "description": "Contact identifier",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Contact name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "surname": {
          "canBeNull": false,
          "description": "Contact surname",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "workMobile": {
          "canBeNull": true,
          "description": "Mobile phone office number of the contact",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "workPhone": {
          "canBeNull": true,
          "description": "Landline phone office number of the contact",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        }
      }
    },
    "sms.PriorityEnum": {
      "description": "The priority of an sms sending",
      "enum": [
        "high",
        "low",
        "medium",
        "veryLow"
      ],
      "enumType": "string",
      "id": "PriorityEnum",
      "namespace": "sms"
    },
    "sms.PttDetails": {
      "description": "A structure describing ptt details",
      "id": "PttDetails",
      "namespace": "sms",
      "properties": {
        "comment": {
          "canBeNull": false,
          "description": "Ptt informations",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Ptt short description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "duration": {
          "canBeNull": false,
          "description": "Ptt volatility type",
          "fullType": "sms.PttDurationTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.PttDurationTypeEnum"
        }
      }
    },
    "sms.PttDurationTypeEnum": {
      "description": "All typology of ptt duration",
      "enum": [
        "indeterminated",
        "permanent",
        "temporary"
      ],
      "enumType": "string",
      "id": "PttDurationTypeEnum",
      "namespace": "sms"
    },
    "sms.Quota": {
      "description": "A structure describing all information about quota informations",
      "id": "Quota",
      "namespace": "sms",
      "properties": {
        "quotaLeft": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        },
        "quotaStatus": {
          "canBeNull": false,
          "fullType": "sms.QuotaStatusUserEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.QuotaStatusUserEnum"
        }
      }
    },
    "sms.QuotaStatusUserEnum": {
      "description": "Current quota status",
      "enum": [
        "active",
        "inactive"
      ],
      "enumType": "string",
      "id": "QuotaStatusUserEnum",
      "namespace": "sms"
    },
    "sms.Receiver": {
      "description": "Sms receivers preloaded",
      "id": "Receiver",
      "namespace": "sms",
      "properties": {
        "autoUpdate": {
          "canBeNull": false,
          "description": "Download file from URL before sending to contacts (works only with csvUrl and not document ID)",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "canAutoUpdate": {
          "canBeNull": false,
          "description": "Is the object compatible with autoUpdate",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "datetime": {
          "canBeNull": false,
          "description": "Creation date of the document",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Description name of the document",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "records": {
          "canBeNull": false,
          "description": "Number of receiver records in the document",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "slotId": {
          "canBeNull": false,
          "description": "Slot number id",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        }
      }
    },
    "sms.ReceiversAsynchronousCleanReport": {
      "description": "A structure giving operation price and asynchronous task ID",
      "id": "ReceiversAsynchronousCleanReport",
      "namespace": "sms",
      "properties": {
        "taskId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "totalCreditsRemoved": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        }
      }
    },
    "sms.RefererSenderEnum": {
      "description": "All tyoplogy of senders",
      "enum": [
        "custom",
        "domain",
        "line",
        "nic",
        "owner",
        "virtual"
      ],
      "enumType": "string",
      "id": "RefererSenderEnum",
      "namespace": "sms"
    },
    "sms.Response": {
      "description": "A structure describing how to manage an sms Response",
      "id": "Response",
      "namespace": "sms",
      "properties": {
        "cgiUrl": {
          "canBeNull": true,
          "description": "Default url callback used for a given response.",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "responseType": {
          "canBeNull": false,
          "fullType": "sms.ResponseTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.ResponseTypeEnum"
        },
        "text": {
          "canBeNull": true,
          "description": "Automatic notification sent by text in case of customer reply.",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "trackingDefaultSmsSender": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "trackingOptions": {
          "canBeNull": true,
          "fullType": "sms.ResponseTrackingOptions[]",
          "readOnly": false,
          "required": false,
          "type": "sms.ResponseTrackingOptions[]"
        }
      }
    },
    "sms.ResponseTrackingMediaEnum": {
      "description": "The tracking media response",
      "enum": [
        "email",
        "sms",
        "voice"
      ],
      "enumType": "string",
      "id": "ResponseTrackingMediaEnum",
      "namespace": "sms"
    },
    "sms.ResponseTrackingOptions": {
      "description": "The tracking media response",
      "id": "ResponseTrackingOptions",
      "namespace": "sms",
      "properties": {
        "media": {
          "canBeNull": false,
          "fullType": "sms.ResponseTrackingMediaEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.ResponseTrackingMediaEnum"
        },
        "sender": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "sms.ResponseTypeEnum": {
      "description": "Response type",
      "enum": [
        "cgi",
        "none",
        "text"
      ],
      "enumType": "string",
      "id": "ResponseTypeEnum",
      "namespace": "sms"
    },
    "sms.RestrictionCodeEnum": {
      "description": "Restriction type used by the operator to filter sms.",
      "enum": [
        "ALPHA",
        "BAD_DLR",
        "BLOCKED",
        "CODING",
        "DLR",
        "FLASHONLY",
        "MSISDN"
      ],
      "enumType": "string",
      "id": "RestrictionCodeEnum",
      "namespace": "sms"
    },
    "sms.Sender": {
      "description": "SMS senders",
      "id": "Sender",
      "namespace": "sms",
      "properties": {
        "comment": {
          "canBeNull": true,
          "description": "Message sent by the moderator",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Sender description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "referer": {
          "canBeNull": false,
          "description": "Specify if the sender is custom or not",
          "fullType": "sms.RefererSenderEnum",
          "readOnly": true,
          "required": true,
          "type": "sms.RefererSenderEnum"
        },
        "sender": {
          "canBeNull": false,
          "description": "The sms sender",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Sender status",
          "fullType": "sms.StatusSenderEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.StatusSenderEnum"
        },
        "type": {
          "canBeNull": true,
          "description": "Specify the kind of sender",
          "fullType": "sms.TypeSenderEnum",
          "readOnly": true,
          "required": false,
          "type": "sms.TypeSenderEnum"
        },
        "validationMedia": {
          "canBeNull": true,
          "description": "Validation media identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "sms.SenderAvailable": {
      "description": "A structure describing all information about senders available",
      "id": "SenderAvailable",
      "namespace": "sms",
      "properties": {
        "referer": {
          "canBeNull": false,
          "fullType": "sms.SenderRefererEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.SenderRefererEnum"
        },
        "sender": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "sms.SenderRefererEnum": {
      "description": "The referer of the available sender",
      "enum": [
        "domain",
        "nichandle"
      ],
      "enumType": "string",
      "id": "SenderRefererEnum",
      "namespace": "sms"
    },
    "sms.SmsSendingReport": {
      "description": "A structure describing all information about quota informations",
      "id": "SmsSendingReport",
      "namespace": "sms",
      "properties": {
        "ids": {
          "canBeNull": false,
          "fullType": "long[]",
          "readOnly": false,
          "required": true,
          "type": "long[]"
        },
        "invalidReceivers": {
          "canBeNull": false,
          "fullType": "string[]",
          "readOnly": false,
          "required": true,
          "type": "string[]"
        },
        "totalCreditsRemoved": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": false,
          "required": true,
          "type": "double"
        },
        "validReceivers": {
          "canBeNull": false,
          "fullType": "string[]",
          "readOnly": false,
          "required": true,
          "type": "string[]"
        }
      }
    },
    "sms.StatusAccountEnum": {
      "description": "Account status",
      "enum": [
        "disable",
        "enable"
      ],
      "enumType": "string",
      "id": "StatusAccountEnum",
      "namespace": "sms"
    },
    "sms.StatusSenderEnum": {
      "description": "All existing status for a given referer",
      "enum": [
        "disable",
        "enable",
        "refused",
        "waitingValidation"
      ],
      "enumType": "string",
      "id": "StatusSenderEnum",
      "namespace": "sms"
    },
    "sms.SupportEnum": {
      "description": "The media support used to be contacted in case of alert",
      "enum": [
        "both",
        "mail",
        "sms"
      ],
      "enumType": "string",
      "id": "SupportEnum",
      "namespace": "sms"
    },
    "sms.Task": {
      "description": "Operation on a SMS service",
      "id": "Task",
      "namespace": "sms",
      "properties": {
        "function": {
          "canBeNull": false,
          "fullType": "sms.TodoGeneralPublicFunctionsEnum",
          "readOnly": true,
          "required": true,
          "type": "sms.TodoGeneralPublicFunctionsEnum"
        },
        "status": {
          "canBeNull": false,
          "fullType": "telephony.TaskStatusEnum",
          "readOnly": true,
          "required": true,
          "type": "telephony.TaskStatusEnum"
        },
        "step": {
          "canBeNull": false,
          "fullType": "sms.TodoGeneralPublicStepsEnum",
          "readOnly": true,
          "required": true,
          "type": "sms.TodoGeneralPublicStepsEnum"
        },
        "taskId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        }
      }
    },
    "sms.TemplateControl": {
      "description": "Sms template for moderation (Needed to send in US country)",
      "id": "TemplateControl",
      "namespace": "sms",
      "properties": {
        "activity": {
          "canBeNull": false,
          "description": "Specify the kind of template",
          "fullType": "sms.TypeTemplateEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.TypeTemplateEnum"
        },
        "comment": {
          "canBeNull": false,
          "description": "Message sent by the moderator",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "datetime": {
          "canBeNull": false,
          "description": "Template creation datetime",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Template description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "message": {
          "canBeNull": false,
          "description": "Message pattern to be moderated. Use \"#VALUE#\" format for dynamic text area.",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the template",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Template status",
          "fullType": "sms.StatusSenderEnum",
          "readOnly": false,
          "required": true,
          "type": "sms.StatusSenderEnum"
        }
      }
    },
    "sms.Templates": {
      "description": "A structure describing all information about templates informations",
      "id": "Templates",
      "namespace": "sms",
      "properties": {
        "customizedEmailMode": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "customizedSmsMode": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "emailBody": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "emailFrom": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "emailSubject": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "smsBody": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "sms.TodoGeneralPublicFunctionsEnum": {
      "description": "The task function",
      "enum": [
        "cleanSmsReceivers"
      ],
      "enumType": "string",
      "id": "TodoGeneralPublicFunctionsEnum",
      "namespace": "sms"
    },
    "sms.TodoGeneralPublicStepsEnum": {
      "description": "The task step",
      "enum": [
        "checkOrder",
        "createHlrs",
        "finishing",
        "sendMailReport",
        "starting",
        "waitForHlrs"
      ],
      "enumType": "string",
      "id": "TodoGeneralPublicStepsEnum",
      "namespace": "sms"
    },
    "sms.TypeSenderEnum": {
      "description": "All existing types for a given sender",
      "enum": [
        "alpha",
        "numeric",
        "shortcode",
        "virtual"
      ],
      "enumType": "string",
      "id": "TypeSenderEnum",
      "namespace": "sms"
    },
    "sms.TypeTemplateEnum": {
      "description": "All existing types for a given template",
      "enum": [
        "alerting",
        "authentification",
        "transactional"
      ],
      "enumType": "string",
      "id": "TypeTemplateEnum",
      "namespace": "sms"
    },
    "sms.User": {
      "description": "SMS users",
      "id": "User",
      "namespace": "sms",
      "properties": {
        "alertThresholdInformations": {
          "canBeNull": false,
          "fullType": "sms.AlertThreshold",
          "readOnly": false,
          "required": true,
          "type": "sms.AlertThreshold"
        },
        "callBack": {
          "canBeNull": true,
          "description": "URL called when state of a sent SMS changes",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ipRestrictions": {
          "canBeNull": false,
          "fullType": "string[]",
          "readOnly": false,
          "required": true,
          "type": "string[]"
        },
        "login": {
          "canBeNull": false,
          "description": "The sms user login",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "quotaInformations": {
          "canBeNull": false,
          "fullType": "sms.Quota",
          "readOnly": false,
          "required": true,
          "type": "sms.Quota"
        },
        "stopCallBack": {
          "canBeNull": true,
          "description": "URL called when a STOP is received after a receiver replied stop to a SMS",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "sms.VirtualNumber": {
      "description": "Virtual numbers",
      "id": "VirtualNumber",
      "namespace": "sms",
      "properties": {
        "countryCode": {
          "canBeNull": false,
          "description": "The ISO formated country code of the number",
          "fullType": "sms.VirtualNumberIsoCountryCodeEnum",
          "readOnly": true,
          "required": true,
          "type": "sms.VirtualNumberIsoCountryCodeEnum"
        },
        "number": {
          "canBeNull": false,
          "description": "The virtual number",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "sms.VirtualNumberGenericService": {
      "description": "Virtual numbers",
      "id": "VirtualNumberGenericService",
      "namespace": "sms",
      "properties": {
        "countryCode": {
          "canBeNull": false,
          "description": "The ISO formated country code of the number",
          "fullType": "sms.VirtualNumberIsoCountryCodeEnum",
          "readOnly": true,
          "required": true,
          "type": "sms.VirtualNumberIsoCountryCodeEnum"
        },
        "number": {
          "canBeNull": false,
          "description": "The virtual number",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "sms.VirtualNumberIsoCountryCodeEnum": {
      "description": "The ISO formated country code of the number",
      "enum": [
        "be",
        "ch",
        "de",
        "es",
        "fr",
        "uk"
      ],
      "enumType": "string",
      "id": "VirtualNumberIsoCountryCodeEnum",
      "namespace": "sms"
    },
    "sms.VirtualNumberJob": {
      "description": "Sms job",
      "id": "VirtualNumberJob",
      "namespace": "sms",
      "properties": {
        "creationDatetime": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "credits": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": true,
          "type": "double"
        },
        "deliveryReceipt": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "differedDelivery": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "message": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "messageLength": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "numberOfSms": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "ptt": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "receiver": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "telephony.ContactsExportFormatsEnum": {
      "description": "Export file format",
      "enum": [
        "csv"
      ],
      "enumType": "string",
      "id": "ContactsExportFormatsEnum",
      "namespace": "telephony"
    },
    "telephony.PcsFile": {
      "description": "Telephony API related file hosted",
      "id": "PcsFile",
      "namespace": "telephony",
      "properties": {
        "filename": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "fullType": "telephony.PcsFileStatusEnum",
          "readOnly": true,
          "required": true,
          "type": "telephony.PcsFileStatusEnum"
        },
        "url": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "urlExpirationDatetime": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        }
      }
    },
    "telephony.PcsFileStatusEnum": {
      "description": "File providing task status",
      "enum": [
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "PcsFileStatusEnum",
      "namespace": "telephony"
    },
    "telephony.Task": {
      "description": "Operation on a telephony service",
      "id": "Task",
      "namespace": "telephony",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "Action associated with the task",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "message": {
          "canBeNull": true,
          "description": "Potential failure reason of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "objectCreated": {
          "canBeNull": true,
          "description": "Object potentially created at the end of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceType": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the task",
          "fullType": "telephony.TaskStatusEnum",
          "readOnly": true,
          "required": true,
          "type": "telephony.TaskStatusEnum"
        },
        "taskId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        }
      }
    },
    "telephony.TaskStatusEnum": {
      "description": "Task status",
      "enum": [
        "doing",
        "done",
        "error",
        "pause",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "telephony"
    }
  },
  "resourcePath": "/sms"
}