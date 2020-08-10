import {Schema} from '../../src/schema';

export const schema: Schema = {
  "resourcePath": "/support",
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "List support tickets identifiers for this service",
      "operations": [
        {
          "responseFullType": "long[]",
          "parameters": [
            {
              "fullType": "support.TicketCategoryEnum",
              "name": "category",
              "paramType": "query",
              "dataType": "support.TicketCategoryEnum",
              "description": "Search by ticket category",
              "required": false
            },
            {
              "fullType": "support.TicketStatusEnum",
              "name": "status",
              "paramType": "query",
              "dataType": "support.TicketStatusEnum",
              "description": "Status of ticket",
              "required": false
            },
            {
              "required": false,
              "description": "Search archived tickets",
              "dataType": "boolean",
              "paramType": "query",
              "name": "archived",
              "fullType": "boolean"
            },
            {
              "paramType": "query",
              "name": "serviceName",
              "fullType": "string",
              "required": false,
              "dataType": "string",
              "description": "Ticket message service name"
            },
            {
              "description": "Minimum creation date",
              "dataType": "datetime",
              "required": false,
              "fullType": "datetime",
              "name": "minCreationDate",
              "paramType": "query"
            },
            {
              "fullType": "support.TicketProductEnum",
              "name": "product",
              "paramType": "query",
              "dataType": "support.TicketProductEnum",
              "description": "Search by ticket product",
              "required": false
            },
            {
              "paramType": "query",
              "name": "ticketNumber",
              "fullType": "string",
              "required": false,
              "dataType": "string",
              "description": "Search by ticket number"
            },
            {
              "paramType": "query",
              "name": "maxCreationDate",
              "fullType": "datetime",
              "required": false,
              "dataType": "datetime",
              "description": "Maximum creation date"
            },
            {
              "paramType": "query",
              "name": "subject",
              "fullType": "string",
              "required": false,
              "dataType": "string",
              "description": "Search by ticket subject"
            }
          ],
          "description": "List support tickets identifiers for this service",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseType": "long[]",
          "httpMethod": "GET",
          "noAuthentication": false,
          "resellerOnly": false
        }
      ],
      "path": "/support/tickets"
    },
    {
      "description": "Reply to ticket",
      "operations": [
        {
          "responseFullType": "void",
          "parameters": [
            {
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path",
              "dataType": "long",
              "description": "internal ticket identifier",
              "required": true
            },
            {
              "required": true,
              "description": "text body of ticket response",
              "dataType": "text",
              "paramType": "body",
              "name": "body",
              "fullType": "text"
            }
          ],
          "description": "Reply to ticket",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "POST",
          "noAuthentication": false,
          "responseType": "void",
          "resellerOnly": false
        }
      ],
      "path": "/support/tickets/{ticketId}/reply"
    },
    {
      "description": "Get ticket",
      "operations": [
        {
          "responseFullType": "support.Ticket",
          "parameters": [
            {
              "dataType": "long",
              "description": "internal identifier ticket",
              "required": true,
              "fullType": "long",
              "paramType": "path",
              "name": "ticketId"
            }
          ],
          "description": "Get ticket",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "httpMethod": "GET",
          "responseType": "support.Ticket",
          "resellerOnly": false,
          "noAuthentication": false
        }
      ],
      "path": "/support/tickets/{ticketId}"
    },
    {
      "path": "/support/tickets/{ticketId}/canBeScored",
      "operations": [
        {
          "responseFullType": "boolean",
          "responseType": "boolean",
          "noAuthentication": false,
          "httpMethod": "GET",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path",
              "description": "internal ticket identifier",
              "dataType": "long",
              "required": true
            }
          ],
          "description": "Checks whether ticket can be scored"
        }
      ],
      "description": "Check whether ticket can be scored"
    },
    {
      "description": "Close ticket",
      "operations": [
        {
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "required": true,
              "dataType": "long",
              "description": "internal ticket identifier",
              "paramType": "path",
              "name": "ticketId",
              "fullType": "long"
            }
          ],
          "description": "Close ticket",
          "responseType": "void",
          "httpMethod": "POST",
          "noAuthentication": false,
          "resellerOnly": false,
          "responseFullType": "void"
        }
      ],
      "path": "/support/tickets/{ticketId}/close"
    },
    {
      "path": "/support/tickets/{ticketId}/messages",
      "operations": [
        {
          "responseFullType": "support.Message[]",
          "httpMethod": "GET",
          "noAuthentication": false,
          "responseType": "support.Message[]",
          "resellerOnly": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Get ticket messages",
          "parameters": [
            {
              "required": true,
              "dataType": "long",
              "description": "internal ticket identifier",
              "paramType": "path",
              "name": "ticketId",
              "fullType": "long"
            }
          ]
        }
      ],
      "description": "Get ticket messages"
    },
    {
      "description": "Reopen a ticket",
      "operations": [
        {
          "httpMethod": "POST",
          "responseType": "void",
          "resellerOnly": false,
          "noAuthentication": false,
          "description": "Reopen a ticket",
          "parameters": [
            {
              "dataType": "long",
              "description": "internal ticket identifier",
              "required": true,
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path"
            },
            {
              "dataType": "text",
              "description": "ticket reopen reason",
              "required": true,
              "fullType": "text",
              "name": "body",
              "paramType": "body"
            }
          ],
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "responseFullType": "void"
        }
      ],
      "path": "/support/tickets/{ticketId}/reopen"
    },
    {
      "path": "/support/tickets/{ticketId}/score",
      "operations": [
        {
          "responseFullType": "void",
          "responseType": "void",
          "resellerOnly": false,
          "httpMethod": "POST",
          "noAuthentication": false,
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "description": "Set ticket score",
          "parameters": [
            {
              "dataType": "long",
              "description": "internal ticket identifier",
              "required": true,
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path"
            },
            {
              "paramType": "body",
              "name": "scoreComment",
              "fullType": "text",
              "required": false,
              "description": "ticket comment about the score",
              "dataType": "text"
            },
            {
              "paramType": "body",
              "name": "score",
              "fullType": "string",
              "required": true,
              "description": "ticket score",
              "dataType": "string"
            }
          ]
        }
      ],
      "description": "Set ticket score"
    },
    {
      "description": "Create a new ticket",
      "operations": [
        {
          "responseFullType": "support.NewMessageInfo",
          "apiStatus": {
            "value": "PRODUCTION",
            "description": "Stable production version"
          },
          "parameters": [
            {
              "paramType": "body",
              "name": "body",
              "fullType": "text",
              "required": true,
              "description": "Ticket message body",
              "dataType": "text"
            },
            {
              "fullType": "support.TicketTypeEnum",
              "name": "type",
              "paramType": "body",
              "description": "Ticket type (criticalIntervention requires VIP support level)",
              "dataType": "support.TicketTypeEnum",
              "required": true
            },
            {
              "required": false,
              "dataType": "support.TicketProductEnum",
              "description": "Ticket message product",
              "paramType": "body",
              "name": "product",
              "fullType": "support.TicketProductEnum"
            },
            {
              "dataType": "support.TicketCategoryEnum",
              "description": "Ticket message category",
              "required": false,
              "fullType": "support.TicketCategoryEnum",
              "name": "category",
              "paramType": "body"
            },
            {
              "paramType": "body",
              "name": "serviceName",
              "fullType": "string",
              "required": false,
              "description": "Ticket message service name",
              "dataType": "string"
            },
            {
              "paramType": "body",
              "name": "subcategory",
              "fullType": "support.TicketSubCategoryEnum",
              "required": false,
              "description": "Ticket message subcategory",
              "dataType": "support.TicketSubCategoryEnum"
            },
            {
              "paramType": "body",
              "name": "subject",
              "fullType": "string",
              "required": true,
              "description": "Ticket message subject",
              "dataType": "string"
            }
          ],
          "description": "Create a new ticket",
          "noAuthentication": false,
          "responseType": "support.NewMessageInfo",
          "httpMethod": "POST",
          "resellerOnly": false
        }
      ],
      "path": "/support/tickets/create"
    }
  ],
  "models": {
    "support.TicketSubCategoryEnum": {
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
      "id": "TicketSubCategoryEnum",
      "namespace": "support",
      "enumType": "string",
      "description": "Ticket request subcategory"
    },
    "support.MessageSenderEnum": {
      "enum": [
        "customer",
        "support"
      ],
      "description": "Message sender type",
      "enumType": "string",
      "id": "MessageSenderEnum",
      "namespace": "support"
    },
    "support.TicketTypeEnum": {
      "id": "TicketTypeEnum",
      "namespace": "support",
      "description": "Ticket type (criticalIntervention requires VIP support level)",
      "enumType": "string",
      "enum": [
        "criticalIntervention",
        "genericRequest"
      ]
    },
    "support.TicketProductEnum": {
      "namespace": "support",
      "id": "TicketProductEnum",
      "description": "Ticket product",
      "enumType": "string",
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
      ]
    },
    "support.NewMessageInfo": {
      "properties": {
        "ticketNumber": {
          "description": "Ticket external number",
          "type": "long",
          "canBeNull": false
        },
        "ticketId": {
          "canBeNull": false,
          "type": "long",
          "description": "Ticket identifier"
        },
        "messageId": {
          "canBeNull": false,
          "description": "Message identifier",
          "type": "long"
        }
      },
      "description": "Newly created support identifiers",
      "namespace": "support",
      "id": "NewMessageInfo"
    },
    "support.TicketCategoryEnum": {
      "enumType": "string",
      "description": "Ticket request category",
      "id": "TicketCategoryEnum",
      "namespace": "support",
      "enum": [
        "assistance",
        "billing",
        "incident"
      ]
    },
    "support.Message": {
      "namespace": "support",
      "id": "Message",
      "description": "Support ticket message",
      "properties": {
        "body": {
          "canBeNull": false,
          "description": "Message body",
          "type": "text"
        },
        "creationDate": {
          "description": "Message creation date",
          "type": "datetime",
          "canBeNull": false
        },
        "updateDate": {
          "canBeNull": false,
          "description": "Message last update date",
          "type": "datetime"
        },
        "messageId": {
          "canBeNull": false,
          "type": "long",
          "description": "Message identifier"
        },
        "from": {
          "description": "Message sender type",
          "type": "support.MessageSenderEnum",
          "canBeNull": false
        },
        "ticketId": {
          "type": "long",
          "description": "Ticket identifier",
          "canBeNull": false
        }
      }
    },
    "support.TicketStatusEnum": {
      "enumType": "string",
      "description": "Support ticket statuses",
      "id": "TicketStatusEnum",
      "namespace": "support",
      "enum": [
        "closed",
        "open",
        "unknown"
      ]
    },
    "support.Ticket": {
      "properties": {
        "score": {
          "canBeNull": false,
          "description": "Ticket score",
          "type": "string"
        },
        "lastMessageFrom": {
          "canBeNull": false,
          "type": "support.MessageSenderEnum",
          "description": "Sender type of last message"
        },
        "serviceName": {
          "canBeNull": true,
          "type": "string",
          "description": "Name of service concerned by ticket"
        },
        "category": {
          "description": "Ticket request category",
          "type": "support.TicketCategoryEnum",
          "canBeNull": true
        },
        "type": {
          "canBeNull": false,
          "type": "support.TicketTypeEnum",
          "description": "Ticket type"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Ticket creation date",
          "type": "datetime"
        },
        "accountId": {
          "canBeNull": false,
          "description": "Customer account identifier",
          "type": "coreTypes.AccountId:string"
        },
        "subject": {
          "type": "string",
          "description": "Ticket subject",
          "canBeNull": false
        },
        "ticketId": {
          "canBeNull": false,
          "description": "Ticket identifier",
          "type": "long"
        },
        "ticketNumber": {
          "canBeNull": false,
          "description": "Ticket external number",
          "type": "long"
        },
        "product": {
          "type": "support.TicketProductEnum",
          "description": "Product service concerned by ticket",
          "canBeNull": true
        },
        "state": {
          "canBeNull": false,
          "description": "State of ticket",
          "type": "support.TicketStatusEnum"
        },
        "updateDate": {
          "canBeNull": false,
          "type": "datetime",
          "description": "Ticket last update date"
        },
        "canBeClosed": {
          "canBeNull": false,
          "description": "Can this ticket be closed or not",
          "type": "boolean"
        }
      },
      "description": "Support Ticket",
      "id": "Ticket",
      "namespace": "support"
    }
  }
}