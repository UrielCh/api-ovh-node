import {Schema} from '../../src/schema';

export const schema: Schema = {
  "resourcePath": "/support",
  "apiVersion": "1.0",
  "apis": [
    {
      "operations": [
        {
          "responseFullType": "long[]",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "paramType": "query",
              "name": "minCreationDate",
              "fullType": "datetime",
              "description": "Minimum creation date",
              "required": false
            },
            {
              "paramType": "query",
              "dataType": "string",
              "name": "subject",
              "required": false,
              "description": "Search by ticket subject",
              "fullType": "string"
            },
            {
              "paramType": "query",
              "dataType": "string",
              "name": "ticketNumber",
              "required": false,
              "description": "Search by ticket number",
              "fullType": "string"
            },
            {
              "description": "Search by ticket product",
              "fullType": "support.TicketProductEnum",
              "required": false,
              "name": "product",
              "paramType": "query",
              "dataType": "support.TicketProductEnum"
            },
            {
              "dataType": "support.TicketCategoryEnum",
              "paramType": "query",
              "name": "category",
              "fullType": "support.TicketCategoryEnum",
              "description": "Search by ticket category",
              "required": false
            },
            {
              "description": "Maximum creation date",
              "fullType": "datetime",
              "required": false,
              "name": "maxCreationDate",
              "paramType": "query",
              "dataType": "datetime"
            },
            {
              "dataType": "support.TicketStatusEnum",
              "paramType": "query",
              "name": "status",
              "fullType": "support.TicketStatusEnum",
              "description": "Status of ticket",
              "required": false
            },
            {
              "paramType": "query",
              "dataType": "string",
              "name": "serviceName",
              "required": false,
              "fullType": "string",
              "description": "Ticket message service name"
            },
            {
              "required": false,
              "description": "Search archived tickets",
              "fullType": "boolean",
              "paramType": "query",
              "name": "archived",
              "dataType": "boolean"
            }
          ],
          "httpMethod": "GET",
          "description": "List support tickets identifiers for this service",
          "responseType": "long[]",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "List support tickets identifiers for this service",
      "path": "/support/tickets"
    },
    {
      "description": "Create a new ticket",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new ticket",
          "responseType": "support.NewMessageInfo",
          "resellerOnly": false,
          "responseFullType": "support.NewMessageInfo",
          "noAuthentication": false,
          "parameters": [
            {
              "paramType": "body",
              "name": "category",
              "dataType": "support.TicketCategoryEnum",
              "required": false,
              "fullType": "support.TicketCategoryEnum",
              "description": "Ticket message category"
            },
            {
              "name": "product",
              "paramType": "body",
              "dataType": "support.TicketProductEnum",
              "description": "Ticket message product",
              "fullType": "support.TicketProductEnum",
              "required": false
            },
            {
              "name": "subcategory",
              "paramType": "body",
              "dataType": "support.TicketSubCategoryEnum",
              "fullType": "support.TicketSubCategoryEnum",
              "description": "Ticket message subcategory",
              "required": false
            },
            {
              "name": "serviceName",
              "paramType": "body",
              "dataType": "string",
              "fullType": "string",
              "description": "Ticket message service name",
              "required": false
            },
            {
              "fullType": "support.TicketTypeEnum",
              "description": "Ticket type (criticalIntervention requires VIP support level)",
              "required": true,
              "dataType": "support.TicketTypeEnum",
              "paramType": "body",
              "name": "type"
            },
            {
              "paramType": "body",
              "name": "subject",
              "dataType": "string",
              "required": true,
              "description": "Ticket message subject",
              "fullType": "string"
            },
            {
              "fullType": "text",
              "description": "Ticket message body",
              "required": true,
              "dataType": "text",
              "paramType": "body",
              "name": "body"
            }
          ],
          "httpMethod": "POST"
        }
      ],
      "path": "/support/tickets/create"
    },
    {
      "path": "/support/tickets/{ticketId}/reply",
      "description": "Reply to ticket",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "ticketId",
              "paramType": "path",
              "dataType": "long",
              "description": "internal ticket identifier",
              "fullType": "long",
              "required": true
            },
            {
              "paramType": "body",
              "name": "body",
              "dataType": "text",
              "required": true,
              "fullType": "text",
              "description": "text body of ticket response"
            }
          ],
          "httpMethod": "POST",
          "description": "Reply to ticket",
          "responseType": "void",
          "resellerOnly": false
        }
      ]
    },
    {
      "path": "/support/tickets/{ticketId}/canBeScored",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "description": "Checks whether ticket can be scored",
          "responseType": "boolean",
          "httpMethod": "GET",
          "noAuthentication": false,
          "responseFullType": "boolean",
          "parameters": [
            {
              "paramType": "path",
              "dataType": "long",
              "name": "ticketId",
              "required": true,
              "fullType": "long",
              "description": "internal ticket identifier"
            }
          ]
        }
      ],
      "description": "Check whether ticket can be scored"
    },
    {
      "path": "/support/tickets/{ticketId}",
      "operations": [
        {
          "noAuthentication": false,
          "responseFullType": "support.Ticket",
          "parameters": [
            {
              "required": true,
              "fullType": "long",
              "description": "internal identifier ticket",
              "paramType": "path",
              "name": "ticketId",
              "dataType": "long"
            }
          ],
          "httpMethod": "GET",
          "description": "Get ticket",
          "responseType": "support.Ticket",
          "resellerOnly": false,
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Get ticket"
    },
    {
      "path": "/support/tickets/{ticketId}/reopen",
      "operations": [
        {
          "description": "Reopen a ticket",
          "responseType": "void",
          "resellerOnly": false,
          "noAuthentication": false,
          "responseFullType": "void",
          "parameters": [
            {
              "fullType": "long",
              "description": "internal ticket identifier",
              "required": true,
              "dataType": "long",
              "paramType": "path",
              "name": "ticketId"
            },
            {
              "description": "ticket reopen reason",
              "fullType": "text",
              "required": true,
              "dataType": "text",
              "paramType": "body",
              "name": "body"
            }
          ],
          "httpMethod": "POST",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Reopen a ticket"
    },
    {
      "path": "/support/tickets/{ticketId}/messages",
      "description": "Get ticket messages",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "responseType": "support.Message[]",
          "description": "Get ticket messages",
          "httpMethod": "GET",
          "parameters": [
            {
              "paramType": "path",
              "name": "ticketId",
              "dataType": "long",
              "required": true,
              "fullType": "long",
              "description": "internal ticket identifier"
            }
          ],
          "responseFullType": "support.Message[]",
          "noAuthentication": false
        }
      ]
    },
    {
      "path": "/support/tickets/{ticketId}/close",
      "operations": [
        {
          "httpMethod": "POST",
          "parameters": [
            {
              "description": "internal ticket identifier",
              "fullType": "long",
              "required": true,
              "dataType": "long",
              "paramType": "path",
              "name": "ticketId"
            }
          ],
          "noAuthentication": false,
          "responseFullType": "void",
          "resellerOnly": false,
          "responseType": "void",
          "description": "Close ticket",
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          }
        }
      ],
      "description": "Close ticket"
    },
    {
      "path": "/support/tickets/{ticketId}/score",
      "description": "Set ticket score",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "resellerOnly": false,
          "description": "Set ticket score",
          "responseType": "void",
          "httpMethod": "POST",
          "responseFullType": "void",
          "noAuthentication": false,
          "parameters": [
            {
              "name": "ticketId",
              "paramType": "path",
              "dataType": "long",
              "required": true,
              "fullType": "long",
              "description": "internal ticket identifier"
            },
            {
              "fullType": "text",
              "description": "ticket comment about the score",
              "required": false,
              "paramType": "body",
              "name": "scoreComment",
              "dataType": "text"
            },
            {
              "description": "ticket score",
              "fullType": "string",
              "required": true,
              "paramType": "body",
              "name": "score",
              "dataType": "string"
            }
          ]
        }
      ]
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "models": {
    "support.NewMessageInfo": {
      "properties": {
        "messageId": {
          "canBeNull": false,
          "description": "Message identifier",
          "type": "long"
        },
        "ticketId": {
          "canBeNull": false,
          "type": "long",
          "description": "Ticket identifier"
        },
        "ticketNumber": {
          "type": "long",
          "description": "Ticket external number",
          "canBeNull": false
        }
      },
      "description": "Newly created support identifiers",
      "namespace": "support",
      "id": "NewMessageInfo"
    },
    "support.TicketSubCategoryEnum": {
      "id": "TicketSubCategoryEnum",
      "namespace": "support",
      "enum": [
        "alerts",
        "autorenew",
        "bill",
        "down",
        "inProgress",
        "new",
        "other",
        "perfs",
        "start",
        "usage"
      ],
      "enumType": "string",
      "description": "Ticket request subcategory"
    },
    "support.Message": {
      "namespace": "support",
      "id": "Message",
      "description": "Support ticket message",
      "properties": {
        "messageId": {
          "type": "long",
          "description": "Message identifier",
          "canBeNull": false
        },
        "from": {
          "description": "Message sender type",
          "type": "support.MessageSenderEnum",
          "canBeNull": false
        },
        "creationDate": {
          "description": "Message creation date",
          "type": "datetime",
          "canBeNull": false
        },
        "body": {
          "type": "text",
          "description": "Message body",
          "canBeNull": false
        },
        "updateDate": {
          "type": "datetime",
          "description": "Message last update date",
          "canBeNull": false
        },
        "ticketId": {
          "type": "long",
          "description": "Ticket identifier",
          "canBeNull": false
        }
      }
    },
    "support.MessageSenderEnum": {
      "enumType": "string",
      "description": "Message sender type",
      "id": "MessageSenderEnum",
      "namespace": "support",
      "enum": [
        "customer",
        "support"
      ]
    },
    "support.TicketStatusEnum": {
      "description": "Support ticket statuses",
      "enumType": "string",
      "enum": [
        "closed",
        "open",
        "unknown"
      ],
      "namespace": "support",
      "id": "TicketStatusEnum"
    },
    "support.Ticket": {
      "id": "Ticket",
      "namespace": "support",
      "description": "Support Ticket",
      "properties": {
        "subject": {
          "canBeNull": false,
          "type": "string",
          "description": "Ticket subject"
        },
        "ticketId": {
          "description": "Ticket identifier",
          "type": "long",
          "canBeNull": false
        },
        "ticketNumber": {
          "description": "Ticket external number",
          "type": "long",
          "canBeNull": false
        },
        "canBeClosed": {
          "canBeNull": false,
          "description": "Can this ticket be closed or not",
          "type": "boolean"
        },
        "score": {
          "type": "string",
          "description": "Ticket score",
          "canBeNull": false
        },
        "creationDate": {
          "canBeNull": false,
          "type": "datetime",
          "description": "Ticket creation date"
        },
        "updateDate": {
          "canBeNull": false,
          "type": "datetime",
          "description": "Ticket last update date"
        },
        "serviceName": {
          "type": "string",
          "description": "Name of service concerned by ticket",
          "canBeNull": true
        },
        "type": {
          "canBeNull": false,
          "description": "Ticket type",
          "type": "support.TicketTypeEnum"
        },
        "lastMessageFrom": {
          "type": "support.MessageSenderEnum",
          "description": "Sender type of last message",
          "canBeNull": false
        },
        "product": {
          "canBeNull": true,
          "description": "Product service concerned by ticket",
          "type": "support.TicketProductEnum"
        },
        "state": {
          "type": "support.TicketStatusEnum",
          "description": "State of ticket",
          "canBeNull": false
        },
        "category": {
          "description": "Ticket request category",
          "type": "support.TicketCategoryEnum",
          "canBeNull": true
        },
        "accountId": {
          "type": "coreTypes.AccountId:string",
          "description": "Customer account identifier",
          "canBeNull": false
        }
      }
    },
    "support.TicketProductEnum": {
      "enum": [
        "adsl",
        "cdn",
        "dedicated",
        "dedicated-billing",
        "dedicated-other",
        "dedicatedcloud",
        "domain",
        "exchange",
        "fax",
        "hosting",
        "housing",
        "iaas",
        "mail",
        "network",
        "publiccloud",
        "sms",
        "ssl",
        "storage",
        "telecom-billing",
        "telecom-other",
        "vac",
        "voip",
        "vps",
        "web-billing",
        "web-other"
      ],
      "namespace": "support",
      "id": "TicketProductEnum",
      "description": "Ticket product",
      "enumType": "string"
    },
    "support.TicketTypeEnum": {
      "namespace": "support",
      "id": "TicketTypeEnum",
      "enum": [
        "criticalIntervention",
        "genericRequest"
      ],
      "description": "Ticket type (criticalIntervention requires VIP support level)",
      "enumType": "string"
    },
    "support.TicketCategoryEnum": {
      "description": "Ticket request category",
      "enumType": "string",
      "enum": [
        "assistance",
        "billing",
        "incident"
      ],
      "namespace": "support",
      "id": "TicketCategoryEnum"
    }
  }
}