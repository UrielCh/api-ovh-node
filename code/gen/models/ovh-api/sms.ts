import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/sms.json

export const schema: Schema = {
  "apiVersion": "1.0",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms"
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Account",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "New object properties",
              "fullType": "sms.Account",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}"
    },
    {
      "description": "Manage SMS batches",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get batches list",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Batch[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a batch",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sms.BatchParams",
              "description": "Request Body",
              "fullType": "sms.BatchParams",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Batch",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}/batches"
    },
    {
      "description": "Manage SMS batches",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a batch",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Batch",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update a batch",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "sms.BatchUpdateParams",
              "description": "Request Body",
              "fullType": "sms.BatchUpdateParams",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Batch",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}/batches/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel a deferred batch (no SMS must have been sent)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Batch",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}/batches/{id}/cancel"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Batch's statistics",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Id",
              "fullType": "uuid",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.BatchStatistics",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}/batches/{id}/statistics"
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
              "description": "The internal name of your SMS offer",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms number blacklisted",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms number blacklisted",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Blacklist",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Filter SMSs with their batch ID (outgoing SMSs only)",
              "fullType": "uuid",
              "name": "batchID",
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
            },
            {
              "dataType": "sms.DocumentWayTypeEnum",
              "description": "specify outgoing or incoming sms",
              "fullType": "sms.DocumentWayTypeEnum",
              "name": "wayType",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
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
          "responseType": "sms.Exception[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.SmsSendingReport",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "HLR id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.HlrLookupNumber",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "HLR id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Hlr",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Incoming",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "string",
              "description": "The sms message",
              "fullType": "string",
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
              "dataType": "string[]",
              "description": "The receivers list",
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
              "description": "The receivers document slot id",
              "fullType": "string",
              "name": "receiversSlotId",
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
              "dataType": "boolean",
              "description": "Set the flag to send a special sms which can be reply by the receiver (smsResponse).",
              "fullType": "boolean",
              "name": "senderForResponse",
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
              "description": "The maximum time -in minute(s)- before the message is dropped",
              "fullType": "long",
              "name": "validityPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.SmsSendingReport",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Job",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}/jobs/{id}"
    },
    {
      "description": "Sent SMSs associated to SMS account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get SMS list",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Filter on batch id property (=)",
              "fullType": "uuid",
              "name": "batchID",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter on creationDatetime property (>=)",
              "fullType": "datetime",
              "name": "creationDatetime.from",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter on creationDatetime property (<=)",
              "fullType": "datetime",
              "name": "creationDatetime.to",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter on deliveryReceipt property (=)",
              "fullType": "long",
              "name": "deliveryReceipt",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter on differedDelivery property (=)",
              "fullType": "long",
              "name": "differedDelivery",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Filter on ptt property (=)",
              "fullType": "long",
              "name": "ptt",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter on receiver property (=)",
              "fullType": "string",
              "name": "receiver",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter on sender property (=)",
              "fullType": "string",
              "name": "sender",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter on tag property (=)",
              "fullType": "string",
              "name": "tag",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}/outgoing"
    },
    {
      "description": "Sent SMSs associated to SMS account",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete outgoing SMS from history",
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get SMS details",
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Outgoing",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Hlr",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Identifier of the phonebook",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Identifier of the phonebook",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Phonebook",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "New object properties",
              "fullType": "sms.Phonebook",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the phonebook",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Identifier of the phonebook",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
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
          "responseType": "telephony.PcsFile",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Identifier of the phonebook",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.Task",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Identifier of the phonebook",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "internationalPhoneNumber",
              "description": "Home mobile phone number of the contact",
              "fullType": "internationalPhoneNumber",
              "name": "homeMobile",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "internationalPhoneNumber",
              "description": "Home landline phone number of the contact",
              "fullType": "internationalPhoneNumber",
              "name": "homePhone",
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
              "dataType": "string",
              "description": "Contact surname",
              "fullType": "string",
              "name": "surname",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "internationalPhoneNumber",
              "description": "Mobile phone office number of the contact",
              "fullType": "internationalPhoneNumber",
              "name": "workMobile",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "internationalPhoneNumber",
              "description": "Landline phone office number of the contact",
              "fullType": "internationalPhoneNumber",
              "name": "workPhone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Identifier of the phonebook",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Identifier of the phonebook",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Contact identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Identifier of the phonebook",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Contact identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.PhonebookContact",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "New object properties",
              "fullType": "sms.PhonebookContact",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Identifier of the phonebook",
              "fullType": "string",
              "name": "bookKey",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Contact identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "string",
              "description": "ID of the /me/document file you want to import",
              "fullType": "string",
              "name": "documentId",
              "paramType": "body",
              "required": false
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Receiver",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Receiver",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "New object properties",
              "fullType": "sms.Receiver",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.ReceiversAsynchronousCleanReport",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
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
          "responseType": "sms.PackOffer[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Sender description",
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
              "dataType": "string",
              "description": "The sender (alpha or phone number)",
              "fullType": "string",
              "name": "sender",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Sender",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "New object properties",
              "fullType": "sms.Sender",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}/senders/{sender}"
    },
    {
      "description": "List the sms.SenderDocument objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Documents linked to SMS sender for validation purpose",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The sms sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new empty document",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Document description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Document name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.SenderDocument",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}/senders/{sender}/documents"
    },
    {
      "description": "SMS senders' document",
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
              "dataType": "uuid",
              "description": "Document ID",
              "fullType": "uuid",
              "name": "documentID",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.SenderDocument",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "sms.SenderDocument",
              "description": "New object properties",
              "fullType": "sms.SenderDocument",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Document ID",
              "fullType": "uuid",
              "name": "documentID",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}/senders/{sender}/documents/{documentID}"
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
              "description": "The sms sender",
              "fullType": "string",
              "name": "sender",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
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
          "responseType": "sms.SenderAvailable[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Task",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "sms.TypeTemplateEnum",
              "description": "Specify the kind of template",
              "fullType": "sms.TypeTemplateEnum",
              "name": "activity",
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
              "description": "Message pattern to be moderated. Use \"#VALUE#\" format for dynamic text area.",
              "fullType": "string",
              "name": "message",
              "paramType": "body",
              "required": true
            },
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
              "description": "Message seen by the moderator",
              "fullType": "string",
              "name": "reason",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Name of the template",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Name of the template",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.TemplateControl",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "New object properties",
              "fullType": "sms.TemplateControl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the template",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Name of the template",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms login",
              "fullType": "string",
              "name": "login",
              "paramType": "body",
              "required": true
            },
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.User",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "New object properties",
              "fullType": "sms.User",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
            },
            {
              "dataType": "sms.DocumentWayTypeEnum",
              "description": "specify outgoing or incoming sms",
              "fullType": "sms.DocumentWayTypeEnum",
              "name": "wayType",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
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
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Incoming",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "string",
              "description": "The sms message",
              "fullType": "string",
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
              "dataType": "string[]",
              "description": "The receivers list",
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
              "description": "The receivers document slot id",
              "fullType": "string",
              "name": "receiversSlotId",
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
              "dataType": "boolean",
              "description": "Set the flag to send a special sms which can be reply by the receiver (smsResponse).",
              "fullType": "boolean",
              "name": "senderForResponse",
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
              "description": "The maximum time -in minute(s)- before the message is dropped",
              "fullType": "long",
              "name": "validityPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.SmsSendingReport",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Job",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
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
              "dataType": "long",
              "description": "Filter the value of ptt property (=)",
              "fullType": "long",
              "name": "ptt",
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
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Outgoing",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Hlr",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "string",
              "description": "ID of the /me/document file you want to import",
              "fullType": "string",
              "name": "documentId",
              "paramType": "body",
              "required": false
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Receiver",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Receiver",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "New object properties",
              "fullType": "sms.Receiver",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.ReceiversAsynchronousCleanReport",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The sms user login",
              "fullType": "string",
              "name": "login",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Slot number id",
              "fullType": "long",
              "name": "slotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.VirtualNumber",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.ChatAccess",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.ChatAccess",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Incoming",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "string",
              "description": "The sms message",
              "fullType": "string",
              "name": "message",
              "paramType": "body",
              "required": true
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
              "dataType": "string[]",
              "description": "The receivers list",
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
              "description": "The receivers document slot id",
              "fullType": "string",
              "name": "receiversSlotId",
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
              "description": "The maximum time -in minute(s)- before the message is dropped",
              "fullType": "long",
              "name": "validityPeriod",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.SmsSendingReport",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.VirtualNumberJob",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
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
              "dataType": "long",
              "description": "Filter the value of ptt property (=)",
              "fullType": "long",
              "name": "ptt",
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
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Outgoing",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your SMS offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.Hlr",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr"
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
          "responseType": "sms.JobEstimate",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
          "responseType": "sms.PttDetails",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "dataType": "sms.BillingCountryEnum",
              "description": "Country where you buy credits",
              "fullType": "sms.BillingCountryEnum",
              "name": "billingCountry",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "sms.CountryEnum",
              "description": "Country where you send SMS",
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
              "dataType": "sms.BillingCountryEnum",
              "description": "Country where you buy credits",
              "fullType": "sms.BillingCountryEnum",
              "name": "billingCountry",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "sms.CountryEnum",
              "description": "Country where you send SMS",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Your virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "sms.VirtualNumberGenericService",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "Your virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/sms/all"
          ]
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
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Your virtual number",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/sms/all"
          ]
        }
      ],
      "path": "/sms/virtualNumbers/{number}/serviceInfos"
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
          "readOnly": false,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "double"
        },
        "creditsHoldByQuota": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "creditsLeft": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "smsResponse": {
          "canBeNull": false,
          "fullType": "sms.Response",
          "readOnly": false,
          "required": false,
          "type": "sms.Response"
        },
        "status": {
          "canBeNull": false,
          "fullType": "sms.StatusAccountEnum",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "sms.Templates"
        },
        "userQuantityWithQuota": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "alertNumber": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "alertThreshold": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "support": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "sms.SupportEnum"
        }
      }
    },
    "sms.Batch": {
      "description": "Batch of SMS to send",
      "id": "Batch",
      "namespace": "sms",
      "properties": {
        "accountID": {
          "canBeNull": false,
          "description": "SMS account ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Creation datetime",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "errors": {
          "canBeNull": false,
          "description": "Details on error(s) on the batch, if any",
          "fullType": "sms.BatchError[]",
          "readOnly": true,
          "required": false,
          "type": "sms.BatchError[]"
        },
        "estimatedCredits": {
          "canBeNull": false,
          "description": "The estimated cost of the batch in credits",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "finishedAt": {
          "canBeNull": true,
          "description": "Datetime when the batch finished processing SMSs",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "from": {
          "canBeNull": true,
          "description": "SMS sender",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Batch ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "message": {
          "canBeNull": false,
          "description": "SMS message",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "name": {
          "canBeNull": false,
          "description": "Batch name",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "processedRecords": {
          "canBeNull": false,
          "description": "Number of processed records in this batch",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "receivers": {
          "canBeNull": true,
          "description": "SMS receivers list",
          "fullType": "phoneNumber[]",
          "readOnly": true,
          "required": false,
          "type": "phoneNumber[]"
        },
        "sentAt": {
          "canBeNull": true,
          "description": "Datetime when the SMSs of the batch are sent (based on deferred time if exists)",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "slotID": {
          "canBeNull": true,
          "description": "Slot ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startedAt": {
          "canBeNull": true,
          "description": "Datetime when the batch started processing SMSs",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Batch status",
          "fullType": "sms.BatchStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "sms.BatchStatusEnum"
        },
        "totalRecords": {
          "canBeNull": false,
          "description": "Total number of records in this batch",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Last update datetime",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "sms.BatchClassEnum": {
      "description": "SMS classes",
      "enum": [
        "FLASH",
        "PHONE",
        "SIM"
      ],
      "enumType": "string",
      "id": "BatchClassEnum",
      "namespace": "sms"
    },
    "sms.BatchError": {
      "description": "Batch error details",
      "id": "BatchError",
      "namespace": "sms",
      "properties": {
        "message": {
          "canBeNull": false,
          "description": "Error message",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "receiver": {
          "canBeNull": false,
          "description": "Receiver that triggered the error",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "sms.BatchParams": {
      "description": "Params to create a batch",
      "id": "BatchParams",
      "namespace": "sms",
      "properties": {
        "class": {
          "canBeNull": false,
          "description": "SMS class",
          "fullType": "sms.BatchClassEnum",
          "readOnly": false,
          "required": false,
          "type": "sms.BatchClassEnum"
        },
        "deferred": {
          "canBeNull": false,
          "description": "SMS deferred sending date",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "from": {
          "canBeNull": false,
          "description": "SMS sender. Either \"from\" or \"senderForResponse\" must be passed",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "message": {
          "canBeNull": false,
          "description": "SMS message",
          "fullType": "text",
          "readOnly": false,
          "required": true,
          "type": "text"
        },
        "name": {
          "canBeNull": false,
          "description": "Batch name",
          "fullType": "text",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "noStop": {
          "canBeNull": false,
          "description": "STOP clause not needed",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "senderForResponse": {
          "canBeNull": false,
          "description": "Ask to compute a sender that allows response. Either \"from\" or \"senderForResponse\" must be passed",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "slotID": {
          "canBeNull": false,
          "description": "SMS receivers slot ID. Either \"to\" or \"slotID\" must be passed",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "tag": {
          "canBeNull": false,
          "description": "SMS tag",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "to": {
          "canBeNull": false,
          "description": "SMS receivers list. Either \"to\" or \"slotID\" must be passed",
          "fullType": "phoneNumber[]",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber[]"
        }
      }
    },
    "sms.BatchStatistics": {
      "description": "Batch's statistics",
      "id": "BatchStatistics",
      "namespace": "sms",
      "properties": {
        "credits": {
          "canBeNull": false,
          "description": "The cost of the batch in credits, computed during batch processing",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "delivered": {
          "canBeNull": false,
          "description": "Number of SMS that are delivered",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "estimatedCredits": {
          "canBeNull": false,
          "description": "The estimated cost of the batch in credits, computed before batch processing",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "failed": {
          "canBeNull": false,
          "description": "Number of SMS in error",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "Batch ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "pending": {
          "canBeNull": false,
          "description": "Number of SMS that are in pending status",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sent": {
          "canBeNull": false,
          "description": "Number of SMS that are sent to the broker",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "stoplisted": {
          "canBeNull": false,
          "description": "Number of SMS that received a STOP by the receiver",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "sms.BatchStatusEnum": {
      "description": "Batch statuses",
      "enum": [
        "PENDING",
        "INSERTING",
        "INSERTED",
        "COMPLETED",
        "TO_CANCEL",
        "CANCELING",
        "CANCELED",
        "FAILED"
      ],
      "enumType": "string",
      "id": "BatchStatusEnum",
      "namespace": "sms"
    },
    "sms.BatchUpdateParams": {
      "description": "Params to update a batch",
      "id": "BatchUpdateParams",
      "namespace": "sms",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Batch name",
          "fullType": "text",
          "readOnly": false,
          "required": true,
          "type": "text"
        }
      }
    },
    "sms.BillingCountryEnum": {
      "description": "Countries where we sell SMS credits",
      "enum": [
        "es",
        "fr",
        "gb",
        "ie",
        "it",
        "pl"
      ],
      "enumType": "string",
      "id": "BillingCountryEnum",
      "namespace": "sms"
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
          "required": false,
          "type": "datetime"
        },
        "number": {
          "canBeNull": false,
          "description": "The sms number blacklisted",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "url": {
          "canBeNull": false,
          "description": "The url of the web access",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
        "ad",
        "ae",
        "af",
        "ag",
        "ai",
        "al",
        "all",
        "am",
        "an",
        "ao",
        "ar",
        "at",
        "au",
        "aw",
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
        "bm",
        "bn",
        "bo",
        "br",
        "bs",
        "bt",
        "bw",
        "by",
        "bz",
        "ca",
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
        "cu",
        "cv",
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
        "et",
        "fi",
        "fj",
        "fk",
        "fo",
        "fr",
        "ga",
        "gb",
        "gd",
        "ge",
        "gf",
        "gh",
        "gi",
        "gl",
        "gm",
        "gn",
        "gp",
        "gq",
        "gr",
        "gt",
        "gu",
        "gw",
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
        "io",
        "iq",
        "ir",
        "is",
        "it",
        "jm",
        "jo",
        "jp",
        "ke",
        "kg",
        "kh",
        "km",
        "kn",
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
        "md",
        "me",
        "mg",
        "mk",
        "ml",
        "mn",
        "mo",
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
        "ng",
        "ni",
        "nl",
        "no",
        "np",
        "nz",
        "om",
        "pa",
        "pe",
        "pf",
        "pg",
        "ph",
        "pk",
        "pl",
        "ps",
        "pt",
        "py",
        "qa",
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
        "si",
        "sk",
        "sl",
        "sm",
        "sn",
        "so",
        "sr",
        "st",
        "sv",
        "sy",
        "sz",
        "tc",
        "td",
        "tg",
        "th",
        "tj",
        "tl",
        "tm",
        "tn",
        "to",
        "tr",
        "tt",
        "tw",
        "tz",
        "ua",
        "ug",
        "us",
        "uy",
        "uz",
        "vc",
        "ve",
        "vg",
        "vi",
        "vn",
        "vu",
        "ws",
        "ye",
        "yt",
        "za",
        "zm",
        "zw"
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": false,
          "description": "The country 2-letters code",
          "readOnly": false,
          "required": false,
          "type": "sms.CountryEnum"
        },
        "credit": {
          "canBeNull": false,
          "description": "Credits consumed by sending one SMS towards the given destination",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "price": {
          "canBeNull": false,
          "description": "Price of one SMS sent towards the given destination",
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "string"
        },
        "messages": {
          "canBeNull": false,
          "description": "The exception message",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "operators": {
          "canBeNull": false,
          "description": "The list of operators impacted.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "restrictionCode": {
          "canBeNull": false,
          "description": "The type of routing restriction imposed by the operator",
          "fullType": "sms.RestrictionCodeEnum",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": false,
          "description": "The countryCode prefix number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "network": {
          "canBeNull": false,
          "description": "The network name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "operator": {
          "canBeNull": false,
          "description": "The operator name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "The region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "HLR id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "msisdn": {
          "canBeNull": false,
          "description": "MSISDN",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "operatorCode": {
          "canBeNull": false,
          "description": "The {Mobile Country Code, Mobile Network Code} unique identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ported": {
          "canBeNull": false,
          "description": "Has the MSISDN been ported from its original network",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "reachable": {
          "canBeNull": false,
          "description": "Is the MSISDN currently reachable",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "roaming": {
          "canBeNull": false,
          "description": "Is the MSISDN currently roaming outside its natinal network",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the HLR request",
          "fullType": "sms.HlrStatuses",
          "readOnly": true,
          "required": false,
          "type": "sms.HlrStatuses"
        },
        "valid": {
          "canBeNull": false,
          "description": "Is the MSISDN valid",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "datetime"
        },
        "credits": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "message": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sender": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "tag": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "datetime"
        },
        "credits": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "long"
        },
        "differedDelivery": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "message": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "messageLength": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "numberOfSms": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ptt": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "receiver": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sender": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "charactersClass": {
          "canBeNull": false,
          "description": "The characters class that will be used to send the SMS, depending on characters in message",
          "readOnly": false,
          "required": false,
          "type": "sms.EncodingEnum"
        },
        "maxCharactersPerPart": {
          "canBeNull": false,
          "description": "The number of characters every SMS part can contain, depending on characters class and quantity of parts",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "parts": {
          "canBeNull": false,
          "description": "The quantity of SMS parts the message will be split in",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "sms.Outgoing": {
      "description": "Sent SMS",
      "id": "Outgoing",
      "namespace": "sms",
      "properties": {
        "batchID": {
          "canBeNull": true,
          "description": "ID of batch linked to the SMS",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "creationDatetime": {
          "canBeNull": false,
          "description": "Creation datetime",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "credits": {
          "canBeNull": false,
          "description": "Spent credits",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "deliveredAt": {
          "canBeNull": true,
          "description": "Delivering datetime",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deliveryReceipt": {
          "canBeNull": false,
          "description": "Delivery receipt from operator",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "differedDelivery": {
          "canBeNull": false,
          "description": "Delay before SMS sending",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "message": {
          "canBeNull": false,
          "description": "SMS message",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "messageLength": {
          "canBeNull": false,
          "description": "SMS message length",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "numberOfSms": {
          "canBeNull": false,
          "description": "SMS message's number of parts",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ptt": {
          "canBeNull": false,
          "description": "Code representing SMS state",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "receiver": {
          "canBeNull": false,
          "description": "SMS receiver",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sender": {
          "canBeNull": false,
          "description": "SMS sender",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sentAt": {
          "canBeNull": true,
          "description": "Sending datetime",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "tag": {
          "canBeNull": false,
          "description": "Customer label to categorize SMSs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "tariffCode": {
          "canBeNull": false,
          "description": "Tariff code applied on the sms",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "sms.CountryEnum"
        },
        "credit": {
          "canBeNull": false,
          "description": "Credits consumed by sending one SMS towards the given destination",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "creditPrice": {
          "canBeNull": false,
          "description": "Price of one credit, including pack's promotion",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "creditQuantityMax": {
          "canBeNull": true,
          "description": "Maximum quantity (excluded) of credit to order to have this price",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "creditQuantityMin": {
          "canBeNull": false,
          "description": "Minimum quantity (included) of credit to order to have this price",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "discountCreditPrice": {
          "canBeNull": true,
          "description": "Price of one credit, during a promotional event",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "discountPercentage": {
          "canBeNull": true,
          "description": "Percentage applied as part of a promotional event",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "discountSmsPrice": {
          "canBeNull": true,
          "description": "Price of one SMS, during a promotional event",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "smsPrice": {
          "canBeNull": false,
          "description": "Price of one SMS sent towards the given destination, including pack's promotion",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "smsQuantityMax": {
          "canBeNull": true,
          "description": "Maximum quantity (excluded) of SMS you can obtain with this pack",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "smsQuantityMin": {
          "canBeNull": false,
          "description": "Minimum quantity (included) of SMS you can obtain with this pack",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "giftPrice": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "giftQuantity": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "language": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "quantity": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "smsQuantity": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "totalPrice": {
          "canBeNull": true,
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
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Phonebook name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phoneKey": {
          "canBeNull": false,
          "description": "Phone key identifier between the phone and phonebooks",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "string"
        },
        "homeMobile": {
          "canBeNull": true,
          "description": "Home mobile phone number of the contact",
          "fullType": "internationalPhoneNumber",
          "readOnly": false,
          "required": false,
          "type": "internationalPhoneNumber"
        },
        "homePhone": {
          "canBeNull": true,
          "description": "Home landline phone number of the contact",
          "fullType": "internationalPhoneNumber",
          "readOnly": false,
          "required": false,
          "type": "internationalPhoneNumber"
        },
        "id": {
          "canBeNull": false,
          "description": "Contact identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Contact name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "surname": {
          "canBeNull": false,
          "description": "Contact surname",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "workMobile": {
          "canBeNull": true,
          "description": "Mobile phone office number of the contact",
          "fullType": "internationalPhoneNumber",
          "readOnly": false,
          "required": false,
          "type": "internationalPhoneNumber"
        },
        "workPhone": {
          "canBeNull": true,
          "description": "Landline phone office number of the contact",
          "fullType": "internationalPhoneNumber",
          "readOnly": false,
          "required": false,
          "type": "internationalPhoneNumber"
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "Ptt short description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "duration": {
          "canBeNull": false,
          "description": "Ptt volatility type",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "quotaStatus": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "boolean"
        },
        "canAutoUpdate": {
          "canBeNull": false,
          "description": "Is the object compatible with autoUpdate",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "datetime": {
          "canBeNull": false,
          "description": "Creation date of the document",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Description name of the document",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "records": {
          "canBeNull": false,
          "description": "Number of receiver records in the document",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "slotId": {
          "canBeNull": false,
          "description": "Slot number id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "totalCreditsRemoved": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "responseType": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "sms.ResponseTypeEnum"
        },
        "text": {
          "canBeNull": true,
          "description": "Automatic notification sent by text in case of customer reply.",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "trackingDefaultSmsSender": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "trackingOptions": {
          "canBeNull": true,
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
          "readOnly": false,
          "required": false,
          "type": "sms.ResponseTrackingMediaEnum"
        },
        "sender": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "target": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "string"
        },
        "referer": {
          "canBeNull": false,
          "description": "Specify if the sender is custom or not",
          "fullType": "sms.RefererSenderEnum",
          "readOnly": true,
          "required": false,
          "type": "sms.RefererSenderEnum"
        },
        "sender": {
          "canBeNull": false,
          "description": "The sms sender",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Sender status",
          "fullType": "sms.StatusSenderEnum",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "sms.SenderRefererEnum"
        },
        "sender": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "sms.SenderDocument": {
      "description": "SMS senders' document",
      "id": "SenderDocument",
      "namespace": "sms",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Creation datetime",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "Document description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "documentID": {
          "canBeNull": false,
          "description": "Document ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "getUrl": {
          "canBeNull": false,
          "description": "URL to get document",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Document name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "putUrl": {
          "canBeNull": true,
          "description": "URL to upload document",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "Document size (in bytes)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
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
          "readOnly": false,
          "required": false,
          "type": "long[]"
        },
        "invalidReceivers": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "totalCreditsRemoved": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "validReceivers": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "sms.TodoGeneralPublicFunctionsEnum"
        },
        "status": {
          "canBeNull": false,
          "fullType": "telephony.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "telephony.TaskStatusEnum"
        },
        "step": {
          "canBeNull": false,
          "fullType": "sms.TodoGeneralPublicStepsEnum",
          "readOnly": true,
          "required": false,
          "type": "sms.TodoGeneralPublicStepsEnum"
        },
        "taskId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "sms.TypeTemplateEnum"
        },
        "comment": {
          "canBeNull": false,
          "description": "Message sent by the moderator",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "datetime": {
          "canBeNull": false,
          "description": "Template creation datetime",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Template description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "message": {
          "canBeNull": false,
          "description": "Message pattern to be moderated. Use \"#VALUE#\" format for dynamic text area.",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the template",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Template status",
          "fullType": "sms.StatusSenderEnum",
          "readOnly": false,
          "required": false,
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
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "customizedSmsMode": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "emailBody": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "emailFrom": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "emailSubject": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "smsBody": {
          "canBeNull": true,
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
          "required": false,
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
          "required": false,
          "type": "string[]"
        },
        "login": {
          "canBeNull": false,
          "description": "The sms user login",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "password": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "quotaInformations": {
          "canBeNull": false,
          "fullType": "sms.Quota",
          "readOnly": false,
          "required": false,
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
          "required": false,
          "type": "sms.VirtualNumberIsoCountryCodeEnum"
        },
        "number": {
          "canBeNull": false,
          "description": "The virtual number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "sms.VirtualNumberIsoCountryCodeEnum"
        },
        "number": {
          "canBeNull": false,
          "description": "The virtual number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "datetime"
        },
        "credits": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "deliveryReceipt": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "differedDelivery": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "message": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "messageLength": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "numberOfSms": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ptt": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "receiver": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
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
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "fullType": "telephony.PcsFileStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "telephony.PcsFileStatusEnum"
        },
        "url": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "urlExpirationDatetime": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
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
          "required": false,
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
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the task",
          "fullType": "telephony.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "telephony.TaskStatusEnum"
        },
        "taskId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
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