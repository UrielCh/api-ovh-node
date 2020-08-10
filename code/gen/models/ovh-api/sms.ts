import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/sms",
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
      "description": "Operations about the VOIP service"
    },
    {
      "path": "/sms/estimate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "message",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "The message to send"
            },
            {
              "name": "noStopClause",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Do not display STOP clause in the message, this requires that this is not an advertising message"
            },
            {
              "name": "senderType",
              "dataType": "sms.TypeSenderEnum",
              "paramType": "body",
              "fullType": "sms.TypeSenderEnum",
              "required": true,
              "description": "Sender type that will be used to send the message"
            }
          ],
          "responseType": "sms.JobEstimate",
          "noAuthentication": false,
          "description": "Get the encoding, length and number of SMS parts of a text message"
        }
      ],
      "description": "Get the encoding, length and number of SMS parts of a text message"
    },
    {
      "path": "/sms/ptts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ptt",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": true,
              "description": "The premium transaction tracking code"
            }
          ],
          "responseType": "sms.PttDetails",
          "noAuthentication": false,
          "description": "Get informations about the given ptt code"
        }
      ],
      "description": "Get informations about the given ptt code"
    },
    {
      "path": "/sms/rates/destinations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "country",
              "dataType": "sms.CountryEnum",
              "paramType": "query",
              "fullType": "sms.CountryEnum",
              "required": true,
              "description": "Country prices to send SMS"
            }
          ],
          "responseType": "sms.DestinationRates",
          "noAuthentication": true,
          "description": "Get the prices and credits to send a SMS towards given country"
        }
      ],
      "description": "Get the prices and credits to send a SMS towards given country"
    },
    {
      "path": "/sms/rates/packs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "country",
              "dataType": "sms.CountryEnum",
              "paramType": "query",
              "fullType": "sms.CountryEnum",
              "required": true,
              "description": "Destination country"
            }
          ],
          "responseType": "sms.PackDetails[]",
          "noAuthentication": true,
          "description": "Get the prices and credits of all the SMS packs with informations about the destination country"
        }
      ],
      "description": "Get the prices and credits of all the SMS packs with informations about the destination country"
    },
    {
      "path": "/sms/virtualNumbers",
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
      "description": "Operations about the VOIP service"
    },
    {
      "path": "/sms/virtualNumbers/{number}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            }
          ],
          "responseType": "sms.VirtualNumberGenericService",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Virtual numbers"
    },
    {
      "path": "/sms/virtualNumbers/{number}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
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
          "description": "Alter this object properties"
        }
      ],
      "description": "Details about a Service"
    },
    {
      "path": "/sms/{serviceName}",
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
          "responseType": "sms.Account",
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
              "dataType": "sms.Account",
              "paramType": "body",
              "fullType": "sms.Account",
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
      "description": "SMS details"
    },
    {
      "path": "/sms/{serviceName}/blacklists",
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
              "name": "batchID",
              "dataType": "uuid",
              "paramType": "query",
              "fullType": "uuid",
              "required": false,
              "description": "Filter the value of batchID property (=)"
            },
            {
              "name": "smsOutgoingID",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of smsOutgoingID property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Numbers blacklisted associated to the sms account"
        }
      ],
      "description": "List the sms.Blacklist objects"
    },
    {
      "path": "/sms/{serviceName}/blacklists/{number}",
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
          "description": "Delete the blacklisted sms number given"
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            }
          ],
          "responseType": "sms.Blacklist",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "SMS blacklist"
    },
    {
      "path": "/sms/{serviceName}/document",
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
              "name": "wayType",
              "dataType": "sms.DocumentWayTypeEnum",
              "paramType": "query",
              "fullType": "sms.DocumentWayTypeEnum",
              "required": true,
              "description": "specify outgoing or incoming sms"
            },
            {
              "name": "creationDatetime.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (>=)"
            },
            {
              "name": "creationDatetime.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (<=)"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Select sms with a specific identifier group tag"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Get the /me/document id generated"
        }
      ],
      "description": "document operations"
    },
    {
      "path": "/sms/{serviceName}/exceptions",
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
              "name": "receiver",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": true,
              "description": "The receiver number to check"
            }
          ],
          "responseType": "sms.Exception[]",
          "noAuthentication": false,
          "description": "Describe filter exceptions in sms sending from a specific receiver."
        }
      ],
      "description": "exceptions operations"
    },
    {
      "path": "/sms/{serviceName}/hlr",
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
          "description": "Home Location Register informations. Give informations about a given cellular phone."
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "receivers",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": false,
              "description": "The receivers"
            },
            {
              "name": "receiversDocumentUrl",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The receivers document url link in csv format"
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
          "responseType": "sms.SmsSendingReport",
          "noAuthentication": false,
          "description": "Add one or several sending hlr lookup request"
        }
      ],
      "description": "List the sms.HlrLookupNumber objects"
    },
    {
      "path": "/sms/{serviceName}/hlr/{id}",
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
          "responseType": "sms.HlrLookupNumber",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Home Location Register informations. Give informations about a given cellular phone."
    },
    {
      "path": "/sms/{serviceName}/hlr/{id}/operator",
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
          "responseType": "sms.Hlr",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms operator informations"
    },
    {
      "path": "/sms/{serviceName}/incoming",
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
              "name": "sender",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of sender property (=)"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of tag property (=)"
            },
            {
              "name": "creationDatetime.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (<=)"
            },
            {
              "name": "creationDatetime.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (>=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Sms received associated to the sms account"
        }
      ],
      "description": "List the sms.Incoming objects"
    },
    {
      "path": "/sms/{serviceName}/incoming/{id}",
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
          "description": "Delete the sms incoming history given"
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
          "responseType": "sms.Incoming",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms history of sms incoming received"
    },
    {
      "path": "/sms/{serviceName}/jobs",
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
          "description": "Sms in pending associated to the sms account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "noStopClause",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Do not display STOP clause in the message, this requires that this is not an advertising message"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The identifier group tag"
            },
            {
              "name": "receiversDocumentUrl",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The receivers document url link in csv format"
            },
            {
              "name": "senderForResponse",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Set the flag to send a special sms which can be reply by the receiver (smsResponse)."
            },
            {
              "name": "sender",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The sender"
            },
            {
              "name": "receiversSlotId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The receivers document slot id"
            },
            {
              "name": "message",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The sms message"
            },
            {
              "name": "coding",
              "dataType": "sms.CodingEnum",
              "paramType": "body",
              "fullType": "sms.CodingEnum",
              "required": false,
              "description": "The sms coding"
            },
            {
              "name": "differedPeriod",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The time -in minute(s)- to wait before sending the message"
            },
            {
              "name": "receivers",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": false,
              "description": "The receivers list"
            },
            {
              "name": "validityPeriod",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The maximum time -in minute(s)- before the message is dropped"
            },
            {
              "name": "priority",
              "dataType": "sms.PriorityEnum",
              "paramType": "body",
              "fullType": "sms.PriorityEnum",
              "required": false,
              "description": "The priority of the message"
            },
            {
              "name": "charset",
              "dataType": "sms.CharsetEnum",
              "paramType": "body",
              "fullType": "sms.CharsetEnum",
              "required": false,
              "description": "The sms coding"
            },
            {
              "name": "class",
              "dataType": "sms.ClassEnum",
              "paramType": "body",
              "fullType": "sms.ClassEnum",
              "required": false,
              "description": "The sms class"
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
          "responseType": "sms.SmsSendingReport",
          "noAuthentication": false,
          "description": "Add one or several sending jobs"
        }
      ],
      "description": "List the sms.Job objects"
    },
    {
      "path": "/sms/{serviceName}/jobs/{id}",
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
          "description": "Delete the sms job given (stop sending)"
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
          "responseType": "sms.Job",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms job"
    },
    {
      "path": "/sms/{serviceName}/outgoing",
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
              "name": "creationDatetime.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (<=)"
            },
            {
              "name": "ptt",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of ptt property (=)"
            },
            {
              "name": "creationDatetime.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (>=)"
            },
            {
              "name": "sender",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of sender property (=)"
            },
            {
              "name": "deliveryReceipt",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of deliveryReceipt property (=)"
            },
            {
              "name": "differedDelivery",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of differedDelivery property (=)"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of tag property (=)"
            },
            {
              "name": "receiver",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of receiver property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Sms sent associated to the sms account"
        }
      ],
      "description": "List the sms.Outgoing objects"
    },
    {
      "path": "/sms/{serviceName}/outgoing/{id}",
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
          "description": "Delete the sms outgoing history given"
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
          "responseType": "sms.Outgoing",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms history of sms outgoing sent"
    },
    {
      "path": "/sms/{serviceName}/outgoing/{id}/hlr",
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
          "responseType": "sms.Hlr",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms operator informations"
    },
    {
      "path": "/sms/{serviceName}/phonebooks",
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
          "description": "Return phonebooks associated to this account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the wanted phonebook"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Add a phonebook. Return the bookKey."
        }
      ],
      "description": "List the sms.Phonebook objects"
    },
    {
      "path": "/sms/{serviceName}/phonebooks/{bookKey}",
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
              "name": "bookKey",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Book key"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a phonebook"
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
              "name": "bookKey",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Book key"
            }
          ],
          "responseType": "sms.Phonebook",
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
              "dataType": "sms.Phonebook",
              "paramType": "body",
              "fullType": "sms.Phonebook",
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
              "name": "bookKey",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Book key"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Phone book"
    },
    {
      "path": "/sms/{serviceName}/phonebooks/{bookKey}/export",
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
              "name": "bookKey",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Book key"
            },
            {
              "name": "format",
              "dataType": "telephony.ContactsExportFormatsEnum",
              "paramType": "query",
              "fullType": "telephony.ContactsExportFormatsEnum",
              "required": true,
              "description": "Format of the file"
            }
          ],
          "responseType": "telephony.PcsFile",
          "noAuthentication": false,
          "description": "Export the phonebook's contacts"
        }
      ],
      "description": "export operations"
    },
    {
      "path": "/sms/{serviceName}/phonebooks/{bookKey}/import",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "ID of the /me/document file you want to import"
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
              "name": "bookKey",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Book key"
            }
          ],
          "responseType": "telephony.Task",
          "noAuthentication": false,
          "description": "Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV"
        }
      ],
      "description": "import operations"
    },
    {
      "path": "/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact",
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
              "name": "bookKey",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Book key"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Phonebook contacts"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "group",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Group name of the phonebook"
            },
            {
              "name": "homePhone",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": false,
              "description": "Home landline phone number of the contact"
            },
            {
              "name": "surname",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Contact surname"
            },
            {
              "name": "workPhone",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": false,
              "description": "Landline phone office number of the contact"
            },
            {
              "name": "workMobile",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": false,
              "description": "Mobile phone office number of the contact"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the contact"
            },
            {
              "name": "homeMobile",
              "dataType": "phoneNumber",
              "paramType": "body",
              "fullType": "phoneNumber",
              "required": false,
              "description": "Home mobile phone number of the contact"
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
              "name": "bookKey",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Book key"
            }
          ],
          "responseType": "long",
          "noAuthentication": false,
          "description": "Create a phonebook contact. Return identifier of the phonebook contact."
        }
      ],
      "description": "List the sms.PhonebookContact objects"
    },
    {
      "path": "/sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}",
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
              "name": "bookKey",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Book key"
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
          "description": "Delete a phonebook contact"
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
              "name": "bookKey",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Book key"
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
          "responseType": "sms.PhonebookContact",
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
              "dataType": "sms.PhonebookContact",
              "paramType": "body",
              "fullType": "sms.PhonebookContact",
              "required": true,
              "description": "Request Body"
            },
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
            },
            {
              "name": "bookKey",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Book key"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Phone book contact"
    },
    {
      "path": "/sms/{serviceName}/receivers",
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
          "description": "Receivers preloaded from text or csv document file"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "slotId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Slot number id used to handle the document"
            },
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "ID of the /me/document file you want to import"
            },
            {
              "name": "autoUpdate",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Download file from URL before sending to contacts (works only with csvUrl and not document ID)"
            },
            {
              "name": "csvUrl",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "URL of the file you want to import"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Description name of the document"
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
          "responseType": "sms.Receiver",
          "noAuthentication": false,
          "description": "Add a new document of csv receivers"
        }
      ],
      "description": "List the sms.Receiver objects"
    },
    {
      "path": "/sms/{serviceName}/receivers/{slotId}",
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
              "name": "slotId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Slot ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete the document from the slot"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "slotId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Slot ID"
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
          "responseType": "sms.Receiver",
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
              "dataType": "sms.Receiver",
              "paramType": "body",
              "fullType": "sms.Receiver",
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
              "name": "slotId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Slot ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Sms receivers preloaded"
    },
    {
      "path": "/sms/{serviceName}/receivers/{slotId}/clean",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "freemium",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Limit checks to syntaxical validation"
            },
            {
              "name": "priceOnly",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Only get action's price in credits without executing it"
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
              "name": "slotId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Slot ID"
            }
          ],
          "responseType": "sms.ReceiversAsynchronousCleanReport",
          "noAuthentication": false,
          "description": "Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation."
        }
      ],
      "description": "clean operations"
    },
    {
      "path": "/sms/{serviceName}/receivers/{slotId}/csv",
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
              "name": "slotId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Slot ID"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Get the document data container"
        }
      ],
      "description": "csv operations"
    },
    {
      "path": "/sms/{serviceName}/seeOffers",
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
              "name": "countryCurrencyPrice",
              "dataType": "reference.CountryEnum",
              "paramType": "query",
              "fullType": "reference.CountryEnum",
              "required": true,
              "description": "Filter to have the currency country prices"
            },
            {
              "name": "countryDestination",
              "dataType": "sms.CountryEnum",
              "paramType": "query",
              "fullType": "sms.CountryEnum",
              "required": true,
              "description": "Filter to have the country destination"
            },
            {
              "name": "quantity",
              "dataType": "sms.PackQuantityEnum",
              "paramType": "query",
              "fullType": "sms.PackQuantityEnum",
              "required": true,
              "description": "Sms pack offer quantity"
            }
          ],
          "responseType": "sms.PackOffer[]",
          "noAuthentication": false,
          "description": "Describe SMS offers available."
        }
      ],
      "description": "seeOffers operations"
    },
    {
      "path": "/sms/{serviceName}/senders",
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
          "description": "Senders allowed associated to the sms account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Message seen by the moderator"
            },
            {
              "name": "sender",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The sender (alpha or phone number)"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Sender description"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Create the sms sender given"
        }
      ],
      "description": "List the sms.Sender objects"
    },
    {
      "path": "/sms/{serviceName}/senders/{sender}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "sender",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Sender"
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
          "description": "Delete the sms sender given"
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
              "name": "sender",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Sender"
            }
          ],
          "responseType": "sms.Sender",
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
              "dataType": "sms.Sender",
              "paramType": "body",
              "fullType": "sms.Sender",
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
              "name": "sender",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Sender"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "SMS senders"
    },
    {
      "path": "/sms/{serviceName}/senders/{sender}/validate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "code",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The validation code"
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
              "name": "sender",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Sender"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Validate a given sender with an activation code."
        }
      ],
      "description": "validate operations"
    },
    {
      "path": "/sms/{serviceName}/sendersAvailableForValidation",
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
              "name": "referer",
              "dataType": "sms.SenderRefererEnum",
              "paramType": "query",
              "fullType": "sms.SenderRefererEnum",
              "required": false,
              "description": "Information type"
            }
          ],
          "responseType": "sms.SenderAvailable[]",
          "noAuthentication": false,
          "description": "The senders that are attached to your personal informations or OVH services and that can be automatically validated"
        }
      ],
      "description": "sendersAvailableForValidation operations"
    },
    {
      "path": "/sms/{serviceName}/serviceInfos",
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
      "path": "/sms/{serviceName}/task",
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
              "dataType": "telephony.TaskStatusEnum",
              "paramType": "query",
              "fullType": "telephony.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Operations on a SMS service"
        }
      ],
      "description": "List the sms.Task objects"
    },
    {
      "path": "/sms/{serviceName}/task/{taskId}",
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
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "sms.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a SMS service"
    },
    {
      "path": "/sms/{serviceName}/templatesControl",
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
          "description": "Template pattern filled up for moderation (Needed to send in US country)"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Name of the template"
            },
            {
              "name": "message",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Message pattern to be moderated. Use \"#VALUE#\" format for dynamic text area."
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Template description"
            },
            {
              "name": "reason",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Message seen by the moderator"
            },
            {
              "name": "activity",
              "dataType": "sms.TypeTemplateEnum",
              "paramType": "body",
              "fullType": "sms.TypeTemplateEnum",
              "required": true,
              "description": "Specify the kind of template"
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
          "description": "Create the sms template control given"
        }
      ],
      "description": "List the sms.TemplateControl objects"
    },
    {
      "path": "/sms/{serviceName}/templatesControl/{name}",
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
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete the sms template control"
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
          "responseType": "sms.TemplateControl",
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
              "dataType": "sms.TemplateControl",
              "paramType": "body",
              "fullType": "sms.TemplateControl",
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
      "description": "Sms template for moderation (Needed to send in US country)"
    },
    {
      "path": "/sms/{serviceName}/templatesControl/{name}/relaunchValidation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Template description"
            },
            {
              "name": "message",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Message pattern to be moderated. Use \"#VALUE#\" format for dynamic text area"
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
          "description": "Attempt a new validation after moderation refusal"
        }
      ],
      "description": "relaunchValidation operations"
    },
    {
      "path": "/sms/{serviceName}/transferCredits",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "credits",
              "dataType": "double",
              "paramType": "body",
              "fullType": "double",
              "required": true,
              "description": "Amount of credits to transfer."
            },
            {
              "name": "smsAccountTarget",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Sms account destination."
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
          "description": "Credit transfer between two sms accounts."
        }
      ],
      "description": "transferCredits operations"
    },
    {
      "path": "/sms/{serviceName}/users",
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
          "description": "Users associated to the sms account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The sms password"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The sms login"
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
          "description": "Create a new user for an sms account"
        }
      ],
      "description": "List the sms.User objects"
    },
    {
      "path": "/sms/{serviceName}/users/{login}",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete the sms user given"
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "sms.User",
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
              "dataType": "sms.User",
              "paramType": "body",
              "fullType": "sms.User",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "SMS users"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/document",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Select sms with a specific identifier group tag"
            },
            {
              "name": "wayType",
              "dataType": "sms.DocumentWayTypeEnum",
              "paramType": "query",
              "fullType": "sms.DocumentWayTypeEnum",
              "required": true,
              "description": "specify outgoing or incoming sms"
            },
            {
              "name": "creationDatetime.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (>=)"
            },
            {
              "name": "creationDatetime.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (<=)"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Get the /me/document id generated"
        }
      ],
      "description": "document operations"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/incoming",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of tag property (=)"
            },
            {
              "name": "sender",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of sender property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Sms received associated to the sms user"
        }
      ],
      "description": "List the sms.Incoming objects"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/incoming/{id}",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
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
          "description": "Delete the sms incoming history given"
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
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
          "responseType": "sms.Incoming",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms history of sms incoming received"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/jobs",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Sms in pending associated to the sms user"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "receiversDocumentUrl",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The receivers document url link in csv format"
            },
            {
              "name": "coding",
              "dataType": "sms.CodingEnum",
              "paramType": "body",
              "fullType": "sms.CodingEnum",
              "required": false,
              "description": "The sms coding"
            },
            {
              "name": "validityPeriod",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The maximum time -in minute(s)- before the message is dropped"
            },
            {
              "name": "noStopClause",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Do not display STOP clause in the message, this requires that this is not an advertising message"
            },
            {
              "name": "senderForResponse",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Set the flag to send a special sms which can be reply by the receiver (smsResponse)."
            },
            {
              "name": "class",
              "dataType": "sms.ClassEnum",
              "paramType": "body",
              "fullType": "sms.ClassEnum",
              "required": false,
              "description": "The sms class"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The identifier group tag"
            },
            {
              "name": "priority",
              "dataType": "sms.PriorityEnum",
              "paramType": "body",
              "fullType": "sms.PriorityEnum",
              "required": false,
              "description": "The priority of the message"
            },
            {
              "name": "charset",
              "dataType": "sms.CharsetEnum",
              "paramType": "body",
              "fullType": "sms.CharsetEnum",
              "required": false,
              "description": "The sms coding"
            },
            {
              "name": "differedPeriod",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The time -in minute(s)- to wait before sending the message"
            },
            {
              "name": "receivers",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": false,
              "description": "The receivers list"
            },
            {
              "name": "sender",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The sender"
            },
            {
              "name": "message",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The sms message"
            },
            {
              "name": "receiversSlotId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The receivers document slot id"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
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
          "responseType": "sms.SmsSendingReport",
          "noAuthentication": false,
          "description": "Add one or several sending jobs"
        }
      ],
      "description": "List the sms.Job objects"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/jobs/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
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
          "description": "Delete the sms job given (stop sending)"
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
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            }
          ],
          "responseType": "sms.Job",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms job"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/outgoing",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
            {
              "name": "ptt",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of ptt property (=)"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of tag property (=)"
            },
            {
              "name": "sender",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of sender property (=)"
            },
            {
              "name": "differedDelivery",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of differedDelivery property (=)"
            },
            {
              "name": "receiver",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of receiver property (=)"
            },
            {
              "name": "deliveryReceipt",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of deliveryReceipt property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Sms sent associated to the sms user"
        }
      ],
      "description": "List the sms.Outgoing objects"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/outgoing/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
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
          "description": "Delete the sms outgoing history given"
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
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
          "responseType": "sms.Outgoing",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms history of sms outgoing sent"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/outgoing/{id}/hlr",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
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
          "responseType": "sms.Hlr",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms operator informations"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/receivers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
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
          "description": "Receivers preloaded from text or csv document file"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "autoUpdate",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Download file from URL before sending to contacts (works only with csvUrl and not document ID)"
            },
            {
              "name": "csvUrl",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "URL of the file you want to import"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Description name of the document"
            },
            {
              "name": "slotId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Slot number id used to handle the document"
            },
            {
              "name": "documentId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "ID of the /me/document file you want to import"
            },
            {
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
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
          "responseType": "sms.Receiver",
          "noAuthentication": false,
          "description": "Add a new document of csv receivers"
        }
      ],
      "description": "List the sms.Receiver objects"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/receivers/{slotId}",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
            {
              "name": "slotId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Slot ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete the document from the slot"
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
            {
              "name": "slotId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Slot ID"
            }
          ],
          "responseType": "sms.Receiver",
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
              "dataType": "sms.Receiver",
              "paramType": "body",
              "fullType": "sms.Receiver",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
            {
              "name": "slotId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Slot ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Sms receivers preloaded"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/receivers/{slotId}/clean",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "priceOnly",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Only get action's price in credits without executing it"
            },
            {
              "name": "freemium",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Limit checks to syntaxical validation"
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
            {
              "name": "slotId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Slot ID"
            }
          ],
          "responseType": "sms.ReceiversAsynchronousCleanReport",
          "noAuthentication": false,
          "description": "Clean the invalid and inactive receivers in the document by requesting HLR on each receiver. A report is sent by e-mail at the end of the operation."
        }
      ],
      "description": "clean operations"
    },
    {
      "path": "/sms/{serviceName}/users/{login}/receivers/{slotId}/csv",
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
              "name": "login",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Login"
            },
            {
              "name": "slotId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Slot ID"
            }
          ],
          "responseType": "string",
          "noAuthentication": false,
          "description": "Get the document data container"
        }
      ],
      "description": "csv operations"
    },
    {
      "path": "/sms/{serviceName}/virtualNumbers",
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
          "description": "Virtual numbers associated to the sms account"
        }
      ],
      "description": "List the sms.VirtualNumber objects"
    },
    {
      "path": "/sms/{serviceName}/virtualNumbers/{number}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
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
          "responseType": "sms.VirtualNumber",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Virtual numbers"
    },
    {
      "path": "/sms/{serviceName}/virtualNumbers/{number}/chatAccess",
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
          "description": "Delete the given web access"
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
            }
          ],
          "responseType": "sms.ChatAccess",
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
          "responseType": "sms.ChatAccess",
          "noAuthentication": false,
          "description": "Create a new web access for this ressource"
        }
      ],
      "description": "The web access for your virtual number chat application"
    },
    {
      "path": "/sms/{serviceName}/virtualNumbers/{number}/incoming",
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
              "name": "sender",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of sender property (=)"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of tag property (=)"
            },
            {
              "name": "creationDatetime.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (<=)"
            },
            {
              "name": "creationDatetime.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (>=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Sms received associated to the sms account"
        }
      ],
      "description": "List the sms.Incoming objects"
    },
    {
      "path": "/sms/{serviceName}/virtualNumbers/{number}/incoming/{id}",
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
          "description": "Delete the sms incoming history given"
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
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
          "responseType": "sms.Incoming",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms history of sms incoming received"
    },
    {
      "path": "/sms/{serviceName}/virtualNumbers/{number}/jobs",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Sms in pending associated to the sms account"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "validityPeriod",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The maximum time -in minute(s)- before the message is dropped"
            },
            {
              "name": "class",
              "dataType": "sms.ClassEnum",
              "paramType": "body",
              "fullType": "sms.ClassEnum",
              "required": false,
              "description": "The sms class"
            },
            {
              "name": "priority",
              "dataType": "sms.PriorityEnum",
              "paramType": "body",
              "fullType": "sms.PriorityEnum",
              "required": false,
              "description": "The priority of the message"
            },
            {
              "name": "charset",
              "dataType": "sms.CharsetEnum",
              "paramType": "body",
              "fullType": "sms.CharsetEnum",
              "required": false,
              "description": "The sms coding"
            },
            {
              "name": "receiversDocumentUrl",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The receivers document url link in csv format"
            },
            {
              "name": "receiversSlotId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The receivers document slot id"
            },
            {
              "name": "message",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The sms message"
            },
            {
              "name": "receivers",
              "dataType": "string[]",
              "paramType": "body",
              "fullType": "string[]",
              "required": false,
              "description": "The receivers list"
            },
            {
              "name": "coding",
              "dataType": "sms.CodingEnum",
              "paramType": "body",
              "fullType": "sms.CodingEnum",
              "required": false,
              "description": "The sms coding"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The identifier group tag"
            },
            {
              "name": "differedPeriod",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": false,
              "description": "The time -in minute(s)- to wait before sending the message"
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
          "responseType": "sms.SmsSendingReport",
          "noAuthentication": false,
          "description": "Add one or several sending jobs"
        }
      ],
      "description": "List the sms.VirtualNumberJob objects"
    },
    {
      "path": "/sms/{serviceName}/virtualNumbers/{number}/jobs/{id}",
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
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
          "description": "Delete the sms job given (stop sending)"
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
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
          "responseType": "sms.VirtualNumberJob",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms job"
    },
    {
      "path": "/sms/{serviceName}/virtualNumbers/{number}/outgoing",
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
              "name": "receiver",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of receiver property (=)"
            },
            {
              "name": "tag",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of tag property (=)"
            },
            {
              "name": "differedDelivery",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of differedDelivery property (=)"
            },
            {
              "name": "deliveryReceipt",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of deliveryReceipt property (=)"
            },
            {
              "name": "creationDatetime.from",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (>=)"
            },
            {
              "name": "ptt",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of ptt property (=)"
            },
            {
              "name": "creationDatetime.to",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Filter the value of creationDatetime property (<=)"
            },
            {
              "name": "sender",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of sender property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Sms sent associated to the sms account"
        }
      ],
      "description": "List the sms.Outgoing objects"
    },
    {
      "path": "/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}",
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
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
          "description": "Delete the sms outgoing history given"
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
              "name": "number",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Number"
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
          "responseType": "sms.Outgoing",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms history of sms outgoing sent"
    },
    {
      "path": "/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "sms.Hlr",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sms operator informations"
    }
  ],
  "resourcePath": "/sms",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
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
    "reference.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "reference",
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
    },
    "sms.Account": {
      "id": "Account",
      "namespace": "sms",
      "description": "SMS details",
      "properties": {
        "automaticRecreditAmount": {
          "type": "sms.PackQuantityAutomaticRecreditEnum",
          "fullType": "sms.PackQuantityAutomaticRecreditEnum",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "callBack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "URL called when state of a sent SMS changes",
          "required": false
        },
        "creditThresholdForAutomaticRecredit": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Credit threshold after which an automatic recredit is launched",
          "required": true
        },
        "creditsHoldByQuota": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "creditsLeft": {
          "type": "double",
          "fullType": "double",
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
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "smsResponse": {
          "type": "sms.Response",
          "fullType": "sms.Response",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "status": {
          "type": "sms.StatusAccountEnum",
          "fullType": "sms.StatusAccountEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "stopCallBack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "URL called when a STOP is received after a receiver replied stop to a SMS",
          "required": false
        },
        "templates": {
          "type": "sms.Templates",
          "fullType": "sms.Templates",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "userQuantityWithQuota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "sms.AlertThreshold": {
      "id": "AlertThreshold",
      "namespace": "sms",
      "description": "A structure describing all information about alert threshold informations",
      "properties": {
        "alertEmail": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "alertNumber": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "alertThreshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "support": {
          "type": "sms.SupportEnum",
          "fullType": "sms.SupportEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "sms.Blacklist": {
      "id": "Blacklist",
      "namespace": "sms",
      "description": "SMS blacklist",
      "properties": {
        "batchID": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": true,
          "readOnly": true,
          "description": "ID of the batch responsible of the blacklist",
          "required": false
        },
        "dateCreation": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "number": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The sms number blacklisted",
          "required": true
        },
        "smsOutgoingID": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "ID of the outgoing SMS responsible of the blacklist",
          "required": false
        }
      }
    },
    "sms.CharsetEnum": {
      "id": "CharsetEnum",
      "namespace": "sms",
      "description": "The charset format",
      "enum": [
        "UTF-8"
      ],
      "enumType": "string"
    },
    "sms.ChatAccess": {
      "id": "ChatAccess",
      "namespace": "sms",
      "description": "The web access for your virtual number chat application",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The creation date of this access",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The url of the web access",
          "required": true
        }
      }
    },
    "sms.ClassEnum": {
      "id": "ClassEnum",
      "namespace": "sms",
      "description": "The sms class of sms sending job",
      "enum": [
        "flash",
        "phoneDisplay",
        "sim",
        "toolkit"
      ],
      "enumType": "string"
    },
    "sms.CodingEnum": {
      "id": "CodingEnum",
      "namespace": "sms",
      "description": "The sms coding",
      "enum": [
        "7bit",
        "8bit"
      ],
      "enumType": "string"
    },
    "sms.CountryEnum": {
      "id": "CountryEnum",
      "namespace": "sms",
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
      "enumType": "string"
    },
    "sms.DestinationRates": {
      "id": "DestinationRates",
      "namespace": "sms",
      "description": "Rates of a given destination",
      "properties": {
        "country": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The country full name",
          "required": true
        },
        "countryCode": {
          "type": "sms.CountryEnum",
          "fullType": "sms.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The country 2-letters code",
          "required": true
        },
        "credit": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Credits consumed by sending one SMS towards the given destination",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price of one SMS sent towards the given destination",
          "required": true
        }
      }
    },
    "sms.DocumentWayTypeEnum": {
      "id": "DocumentWayTypeEnum",
      "namespace": "sms",
      "description": "Way type",
      "enum": [
        "incoming",
        "outgoing"
      ],
      "enumType": "string"
    },
    "sms.EncodingEnum": {
      "id": "EncodingEnum",
      "namespace": "sms",
      "description": "The SMS available characters class",
      "enum": [
        "7bits",
        "unicode"
      ],
      "enumType": "string"
    },
    "sms.Exception": {
      "id": "Exception",
      "namespace": "sms",
      "description": "Sms reach list",
      "properties": {
        "countrySuffixe": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The abreviated country code.",
          "required": true
        },
        "messages": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "The exception message",
          "required": true
        },
        "operators": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The list of operators impacted.",
          "required": true
        },
        "restrictionCode": {
          "type": "sms.RestrictionCodeEnum",
          "fullType": "sms.RestrictionCodeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The type of routing restriction imposed by the operator",
          "required": true
        },
        "substitution": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The substitution sender used to bypass operator filter",
          "required": false
        }
      }
    },
    "sms.Hlr": {
      "id": "Hlr",
      "namespace": "sms",
      "description": "Sms operator informations",
      "properties": {
        "country": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The country",
          "required": true
        },
        "countryCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The countryCode prefix number",
          "required": true
        },
        "network": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The network name",
          "required": true
        },
        "operator": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The operator name",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The region",
          "required": true
        }
      }
    },
    "sms.HlrLookupNumber": {
      "id": "HlrLookupNumber",
      "namespace": "sms",
      "description": "Home Location Register informations. Give informations about a given cellular phone.",
      "properties": {
        "datetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "HLR creation datetime",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "HLR id",
          "required": true
        },
        "msisdn": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "MSISDN",
          "required": true
        },
        "operatorCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The {Mobile Country Code, Mobile Network Code} unique identifier",
          "required": true
        },
        "ported": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Has the MSISDN been ported from its original network",
          "required": true
        },
        "reachable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is the MSISDN currently reachable",
          "required": true
        },
        "roaming": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is the MSISDN currently roaming outside its natinal network",
          "required": true
        },
        "status": {
          "type": "sms.HlrStatuses",
          "fullType": "sms.HlrStatuses",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the HLR request",
          "required": true
        },
        "valid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is the MSISDN valid",
          "required": true
        }
      }
    },
    "sms.HlrStatuses": {
      "id": "HlrStatuses",
      "namespace": "sms",
      "description": "The sms coding",
      "enum": [
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "sms.Incoming": {
      "id": "Incoming",
      "namespace": "sms",
      "description": "Sms history of sms incoming received",
      "properties": {
        "creationDatetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "credits": {
          "type": "double",
          "fullType": "double",
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
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "sender": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "tag": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "sms.Job": {
      "id": "Job",
      "namespace": "sms",
      "description": "Sms job",
      "properties": {
        "creationDatetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "credits": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "deliveredAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "deliveryReceipt": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "differedDelivery": {
          "type": "long",
          "fullType": "long",
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
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "messageLength": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "numberOfSms": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "ptt": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "receiver": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "sender": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "sentAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        }
      }
    },
    "sms.JobEstimate": {
      "id": "JobEstimate",
      "namespace": "sms",
      "description": "A structure describing the encoding, length and number of SMS parts of a text message",
      "properties": {
        "characters": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The number of characters the message contains, including invisible escaped characters",
          "required": true
        },
        "charactersClass": {
          "type": "sms.EncodingEnum",
          "fullType": "sms.EncodingEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The characters class that will be used to send the SMS, depending on characters in message",
          "required": true
        },
        "maxCharactersPerPart": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The number of characters every SMS part can contain, depending on characters class and quantity of parts",
          "required": true
        },
        "parts": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The quantity of SMS parts the message will be split in",
          "required": true
        }
      }
    },
    "sms.Outgoing": {
      "id": "Outgoing",
      "namespace": "sms",
      "description": "Sms history of sms outgoing sent",
      "properties": {
        "creationDatetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "credits": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "deliveredAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "deliveryReceipt": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "differedDelivery": {
          "type": "long",
          "fullType": "long",
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
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "messageLength": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "numberOfSms": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "ptt": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "receiver": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "sender": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "sentAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "tag": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "tariffCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Tariff code applied on the sms",
          "required": true
        }
      }
    },
    "sms.PackDetails": {
      "id": "PackDetails",
      "namespace": "sms",
      "description": "Details about a SMS pack",
      "properties": {
        "countryCode": {
          "type": "sms.CountryEnum",
          "fullType": "sms.CountryEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Destination country code",
          "required": true
        },
        "credit": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Credits consumed by sending one SMS towards the given destination",
          "required": true
        },
        "creditPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price of one credit, including pack's promotion",
          "required": true
        },
        "creditQuantityMax": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum quantity (excluded) of credit to order to have this price",
          "required": false
        },
        "creditQuantityMin": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum quantity (included) of credit to order to have this price",
          "required": true
        },
        "smsPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Price of one SMS sent towards the given destination, including pack's promotion",
          "required": true
        },
        "smsQuantityMax": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum quantity (excluded) of SMS you can obtain with this pack",
          "required": false
        },
        "smsQuantityMin": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum quantity (included) of SMS you can obtain with this pack",
          "required": true
        }
      }
    },
    "sms.PackOffer": {
      "id": "PackOffer",
      "namespace": "sms",
      "description": "A structure describing all information about an sms pack offer",
      "properties": {
        "countryDestination": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "giftPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "giftQuantity": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "language": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "price": {
          "type": "double",
          "fullType": "double",
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
        "smsQuantity": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "totalPrice": {
          "type": "double",
          "fullType": "double",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "sms.PackQuantityAutomaticRecreditEnum": {
      "id": "PackQuantityAutomaticRecreditEnum",
      "namespace": "sms",
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
      "enumType": "long"
    },
    "sms.PackQuantityEnum": {
      "id": "PackQuantityEnum",
      "namespace": "sms",
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
      "enumType": "long"
    },
    "sms.Phonebook": {
      "id": "Phonebook",
      "namespace": "sms",
      "description": "Phone book",
      "properties": {
        "bookKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Identifier of the phonebook",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Phonebook name",
          "required": true
        },
        "phoneKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Phone key identifier between the phone and phonebooks",
          "required": true
        }
      }
    },
    "sms.PhonebookContact": {
      "id": "PhonebookContact",
      "namespace": "sms",
      "description": "Phone book contact",
      "properties": {
        "group": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Group name of the phonebook",
          "required": true
        },
        "homeMobile": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Home mobile phone number of the contact",
          "required": false
        },
        "homePhone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Home landline phone number of the contact",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact identifier",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact name",
          "required": true
        },
        "surname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact surname",
          "required": true
        },
        "workMobile": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Mobile phone office number of the contact",
          "required": false
        },
        "workPhone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": true,
          "readOnly": false,
          "description": "Landline phone office number of the contact",
          "required": false
        }
      }
    },
    "sms.PriorityEnum": {
      "id": "PriorityEnum",
      "namespace": "sms",
      "description": "The priority of an sms sending",
      "enum": [
        "high",
        "low",
        "medium",
        "veryLow"
      ],
      "enumType": "string"
    },
    "sms.PttDetails": {
      "id": "PttDetails",
      "namespace": "sms",
      "description": "A structure describing ptt details",
      "properties": {
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ptt informations",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ptt short description",
          "required": true
        },
        "duration": {
          "type": "sms.PttDurationTypeEnum",
          "fullType": "sms.PttDurationTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ptt volatility type",
          "required": true
        }
      }
    },
    "sms.PttDurationTypeEnum": {
      "id": "PttDurationTypeEnum",
      "namespace": "sms",
      "description": "All typology of ptt duration",
      "enum": [
        "indeterminated",
        "permanent",
        "temporary"
      ],
      "enumType": "string"
    },
    "sms.Quota": {
      "id": "Quota",
      "namespace": "sms",
      "description": "A structure describing all information about quota informations",
      "properties": {
        "quotaLeft": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "quotaStatus": {
          "type": "sms.QuotaStatusUserEnum",
          "fullType": "sms.QuotaStatusUserEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "sms.QuotaStatusUserEnum": {
      "id": "QuotaStatusUserEnum",
      "namespace": "sms",
      "description": "Current quota status",
      "enum": [
        "active",
        "inactive"
      ],
      "enumType": "string"
    },
    "sms.Receiver": {
      "id": "Receiver",
      "namespace": "sms",
      "description": "Sms receivers preloaded",
      "properties": {
        "autoUpdate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Download file from URL before sending to contacts (works only with csvUrl and not document ID)",
          "required": true
        },
        "canAutoUpdate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Is the object compatible with autoUpdate",
          "required": true
        },
        "datetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date of the document",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description name of the document",
          "required": true
        },
        "records": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of receiver records in the document",
          "required": true
        },
        "slotId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Slot number id",
          "required": true
        }
      }
    },
    "sms.ReceiversAsynchronousCleanReport": {
      "id": "ReceiversAsynchronousCleanReport",
      "namespace": "sms",
      "description": "A structure giving operation price and asynchronous task ID",
      "properties": {
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "totalCreditsRemoved": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "sms.RefererSenderEnum": {
      "id": "RefererSenderEnum",
      "namespace": "sms",
      "description": "All tyoplogy of senders",
      "enum": [
        "custom",
        "domain",
        "line",
        "nic",
        "owner",
        "virtual"
      ],
      "enumType": "string"
    },
    "sms.Response": {
      "id": "Response",
      "namespace": "sms",
      "description": "A structure describing how to manage an sms Response",
      "properties": {
        "cgiUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Default url callback used for a given response.",
          "required": false
        },
        "responseType": {
          "type": "sms.ResponseTypeEnum",
          "fullType": "sms.ResponseTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "text": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Automatic notification sent by text in case of customer reply.",
          "required": false
        },
        "trackingDefaultSmsSender": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "trackingOptions": {
          "type": "sms.ResponseTrackingOptions[]",
          "fullType": "sms.ResponseTrackingOptions[]",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "sms.ResponseTrackingMediaEnum": {
      "id": "ResponseTrackingMediaEnum",
      "namespace": "sms",
      "description": "The tracking media response",
      "enum": [
        "email",
        "sms",
        "voice"
      ],
      "enumType": "string"
    },
    "sms.ResponseTrackingOptions": {
      "id": "ResponseTrackingOptions",
      "namespace": "sms",
      "description": "The tracking media response",
      "properties": {
        "media": {
          "type": "sms.ResponseTrackingMediaEnum",
          "fullType": "sms.ResponseTrackingMediaEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "sender": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "target": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "sms.ResponseTypeEnum": {
      "id": "ResponseTypeEnum",
      "namespace": "sms",
      "description": "Response type",
      "enum": [
        "cgi",
        "none",
        "text"
      ],
      "enumType": "string"
    },
    "sms.RestrictionCodeEnum": {
      "id": "RestrictionCodeEnum",
      "namespace": "sms",
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
      "enumType": "string"
    },
    "sms.Sender": {
      "id": "Sender",
      "namespace": "sms",
      "description": "SMS senders",
      "properties": {
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Message sent by the moderator",
          "required": false
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Sender description",
          "required": true
        },
        "referer": {
          "type": "sms.RefererSenderEnum",
          "fullType": "sms.RefererSenderEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Specify if the sender is custom or not",
          "required": true
        },
        "sender": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The sms sender",
          "required": true
        },
        "status": {
          "type": "sms.StatusSenderEnum",
          "fullType": "sms.StatusSenderEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Sender status",
          "required": true
        },
        "type": {
          "type": "sms.TypeSenderEnum",
          "fullType": "sms.TypeSenderEnum",
          "canBeNull": true,
          "readOnly": true,
          "description": "Specify the kind of sender",
          "required": false
        },
        "validationMedia": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Validation media identifier",
          "required": false
        }
      }
    },
    "sms.SenderAvailable": {
      "id": "SenderAvailable",
      "namespace": "sms",
      "description": "A structure describing all information about senders available",
      "properties": {
        "referer": {
          "type": "sms.SenderRefererEnum",
          "fullType": "sms.SenderRefererEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "sender": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "sms.SenderRefererEnum": {
      "id": "SenderRefererEnum",
      "namespace": "sms",
      "description": "The referer of the available sender",
      "enum": [
        "domain",
        "nichandle"
      ],
      "enumType": "string"
    },
    "sms.SmsSendingReport": {
      "id": "SmsSendingReport",
      "namespace": "sms",
      "description": "A structure describing all information about quota informations",
      "properties": {
        "ids": {
          "type": "long[]",
          "fullType": "long[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "invalidReceivers": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "totalCreditsRemoved": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "validReceivers": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "sms.StatusAccountEnum": {
      "id": "StatusAccountEnum",
      "namespace": "sms",
      "description": "Account status",
      "enum": [
        "disable",
        "enable"
      ],
      "enumType": "string"
    },
    "sms.StatusSenderEnum": {
      "id": "StatusSenderEnum",
      "namespace": "sms",
      "description": "All existing status for a given referer",
      "enum": [
        "disable",
        "enable",
        "refused",
        "waitingValidation"
      ],
      "enumType": "string"
    },
    "sms.SupportEnum": {
      "id": "SupportEnum",
      "namespace": "sms",
      "description": "The media support used to be contacted in case of alert",
      "enum": [
        "both",
        "mail",
        "sms"
      ],
      "enumType": "string"
    },
    "sms.Task": {
      "id": "Task",
      "namespace": "sms",
      "description": "Operation on a SMS service",
      "properties": {
        "function": {
          "type": "sms.TodoGeneralPublicFunctionsEnum",
          "fullType": "sms.TodoGeneralPublicFunctionsEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "telephony.TaskStatusEnum",
          "fullType": "telephony.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "step": {
          "type": "sms.TodoGeneralPublicStepsEnum",
          "fullType": "sms.TodoGeneralPublicStepsEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "sms.TemplateControl": {
      "id": "TemplateControl",
      "namespace": "sms",
      "description": "Sms template for moderation (Needed to send in US country)",
      "properties": {
        "activity": {
          "type": "sms.TypeTemplateEnum",
          "fullType": "sms.TypeTemplateEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Specify the kind of template",
          "required": true
        },
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Message sent by the moderator",
          "required": true
        },
        "datetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Template creation datetime",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Template description",
          "required": true
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Message pattern to be moderated. Use \"#VALUE#\" format for dynamic text area.",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the template",
          "required": true
        },
        "status": {
          "type": "sms.StatusSenderEnum",
          "fullType": "sms.StatusSenderEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Template status",
          "required": true
        }
      }
    },
    "sms.Templates": {
      "id": "Templates",
      "namespace": "sms",
      "description": "A structure describing all information about templates informations",
      "properties": {
        "customizedEmailMode": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "customizedSmsMode": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "emailBody": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "emailFrom": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "emailSubject": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        },
        "smsBody": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "sms.TodoGeneralPublicFunctionsEnum": {
      "id": "TodoGeneralPublicFunctionsEnum",
      "namespace": "sms",
      "description": "The task function",
      "enum": [
        "cleanSmsReceivers"
      ],
      "enumType": "string"
    },
    "sms.TodoGeneralPublicStepsEnum": {
      "id": "TodoGeneralPublicStepsEnum",
      "namespace": "sms",
      "description": "The task step",
      "enum": [
        "checkOrder",
        "createHlrs",
        "finishing",
        "sendMailReport",
        "starting",
        "waitForHlrs"
      ],
      "enumType": "string"
    },
    "sms.TypeSenderEnum": {
      "id": "TypeSenderEnum",
      "namespace": "sms",
      "description": "All existing types for a given sender",
      "enum": [
        "alpha",
        "numeric",
        "shortcode",
        "virtual"
      ],
      "enumType": "string"
    },
    "sms.TypeTemplateEnum": {
      "id": "TypeTemplateEnum",
      "namespace": "sms",
      "description": "All existing types for a given template",
      "enum": [
        "alerting",
        "authentification",
        "transactional"
      ],
      "enumType": "string"
    },
    "sms.User": {
      "id": "User",
      "namespace": "sms",
      "description": "SMS users",
      "properties": {
        "alertThresholdInformations": {
          "type": "sms.AlertThreshold",
          "fullType": "sms.AlertThreshold",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "callBack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "URL called when state of a sent SMS changes",
          "required": false
        },
        "ipRestrictions": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The sms user login",
          "required": true
        },
        "password": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "quotaInformations": {
          "type": "sms.Quota",
          "fullType": "sms.Quota",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "stopCallBack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "URL called when a STOP is received after a receiver replied stop to a SMS",
          "required": false
        }
      }
    },
    "sms.VirtualNumber": {
      "id": "VirtualNumber",
      "namespace": "sms",
      "description": "Virtual numbers",
      "properties": {
        "countryCode": {
          "type": "sms.VirtualNumberIsoCountryCodeEnum",
          "fullType": "sms.VirtualNumberIsoCountryCodeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The ISO formated country code of the number",
          "required": true
        },
        "number": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The virtual number",
          "required": true
        }
      }
    },
    "sms.VirtualNumberGenericService": {
      "id": "VirtualNumberGenericService",
      "namespace": "sms",
      "description": "Virtual numbers",
      "properties": {
        "countryCode": {
          "type": "sms.VirtualNumberIsoCountryCodeEnum",
          "fullType": "sms.VirtualNumberIsoCountryCodeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The ISO formated country code of the number",
          "required": true
        },
        "number": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The virtual number",
          "required": true
        }
      }
    },
    "sms.VirtualNumberIsoCountryCodeEnum": {
      "id": "VirtualNumberIsoCountryCodeEnum",
      "namespace": "sms",
      "description": "The ISO formated country code of the number",
      "enum": [
        "be",
        "ch",
        "de",
        "es",
        "fr",
        "uk"
      ],
      "enumType": "string"
    },
    "sms.VirtualNumberJob": {
      "id": "VirtualNumberJob",
      "namespace": "sms",
      "description": "Sms job",
      "properties": {
        "creationDatetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "credits": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "deliveryReceipt": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "differedDelivery": {
          "type": "long",
          "fullType": "long",
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
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "messageLength": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "numberOfSms": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "ptt": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "receiver": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "telephony.ContactsExportFormatsEnum": {
      "id": "ContactsExportFormatsEnum",
      "namespace": "telephony",
      "description": "Export file format",
      "enum": [
        "csv"
      ],
      "enumType": "string"
    },
    "telephony.PcsFile": {
      "id": "PcsFile",
      "namespace": "telephony",
      "description": "Telephony API related file hosted",
      "properties": {
        "filename": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "telephony.PcsFileStatusEnum",
          "fullType": "telephony.PcsFileStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "urlExpirationDatetime": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "telephony.PcsFileStatusEnum": {
      "id": "PcsFileStatusEnum",
      "namespace": "telephony",
      "description": "File providing task status",
      "enum": [
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "telephony.Task": {
      "id": "Task",
      "namespace": "telephony",
      "description": "Operation on a telephony service",
      "properties": {
        "action": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Action associated with the task",
          "required": true
        },
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Potential failure reason of the task",
          "required": false
        },
        "objectCreated": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Object potentially created at the end of the task",
          "required": false
        },
        "serviceType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "telephony.TaskStatusEnum",
          "fullType": "telephony.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the task",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "telephony.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "telephony",
      "description": "Task status",
      "enum": [
        "doing",
        "done",
        "error",
        "pause",
        "todo"
      ],
      "enumType": "string"
    }
  }
}