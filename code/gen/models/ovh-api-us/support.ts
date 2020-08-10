import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/support/tickets",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "minCreationDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Minimum creation date"
            },
            {
              "name": "status",
              "dataType": "support.TicketStatusEnum",
              "paramType": "query",
              "fullType": "support.TicketStatusEnum",
              "required": false,
              "description": "Status of ticket"
            },
            {
              "name": "archived",
              "dataType": "boolean",
              "paramType": "query",
              "fullType": "boolean",
              "required": false,
              "description": "Search archived tickets"
            },
            {
              "name": "category",
              "dataType": "support.TicketCategoryEnum",
              "paramType": "query",
              "fullType": "support.TicketCategoryEnum",
              "required": false,
              "description": "Search by ticket category"
            },
            {
              "name": "maxCreationDate",
              "dataType": "datetime",
              "paramType": "query",
              "fullType": "datetime",
              "required": false,
              "description": "Maximum creation date"
            },
            {
              "name": "ticketNumber",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Search by ticket number"
            },
            {
              "name": "product",
              "dataType": "support.TicketProductEnum",
              "paramType": "query",
              "fullType": "support.TicketProductEnum",
              "required": false,
              "description": "Search by ticket product"
            },
            {
              "name": "subject",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Search by ticket subject"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Ticket message service name"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "List support tickets identifiers for this service"
        }
      ],
      "description": "List support tickets identifiers for this service"
    },
    {
      "path": "/support/tickets/create",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "type",
              "dataType": "support.TicketTypeEnum",
              "paramType": "body",
              "fullType": "support.TicketTypeEnum",
              "required": true,
              "description": "Ticket type (criticalIntervention requires VIP support level)"
            },
            {
              "name": "category",
              "dataType": "support.TicketCategoryEnum",
              "paramType": "body",
              "fullType": "support.TicketCategoryEnum",
              "required": false,
              "description": "Ticket message category"
            },
            {
              "name": "subject",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Ticket message subject"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Ticket message service name"
            },
            {
              "name": "body",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "Ticket message body"
            },
            {
              "name": "product",
              "dataType": "support.TicketProductEnum",
              "paramType": "body",
              "fullType": "support.TicketProductEnum",
              "required": false,
              "description": "Ticket message product"
            },
            {
              "name": "subcategory",
              "dataType": "support.TicketSubCategoryEnum",
              "paramType": "body",
              "fullType": "support.TicketSubCategoryEnum",
              "required": false,
              "description": "Ticket message subcategory"
            }
          ],
          "responseType": "support.NewMessageInfo",
          "noAuthentication": false,
          "description": "Create a new ticket"
        }
      ],
      "description": "Create a new ticket"
    },
    {
      "path": "/support/tickets/{ticketId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ticketId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Ticket ID"
            }
          ],
          "responseType": "support.Ticket",
          "noAuthentication": false,
          "description": "Get ticket"
        }
      ],
      "description": "Get ticket"
    },
    {
      "path": "/support/tickets/{ticketId}/canBeScored",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ticketId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Ticket ID"
            }
          ],
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Checks whether ticket can be scored"
        }
      ],
      "description": "Check whether ticket can be scored"
    },
    {
      "path": "/support/tickets/{ticketId}/close",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ticketId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Ticket ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Close ticket"
        }
      ],
      "description": "Close ticket"
    },
    {
      "path": "/support/tickets/{ticketId}/messages",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "ticketId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Ticket ID"
            }
          ],
          "responseType": "support.Message[]",
          "noAuthentication": false,
          "description": "Get ticket messages"
        }
      ],
      "description": "Get ticket messages"
    },
    {
      "path": "/support/tickets/{ticketId}/reopen",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "body",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "ticket reopen reason"
            },
            {
              "name": "ticketId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Ticket ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Reopen a ticket"
        }
      ],
      "description": "Reopen a ticket"
    },
    {
      "path": "/support/tickets/{ticketId}/reply",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "body",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "text body of ticket response"
            },
            {
              "name": "ticketId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Ticket ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Reply to ticket"
        }
      ],
      "description": "Reply to ticket"
    },
    {
      "path": "/support/tickets/{ticketId}/score",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "scoreComment",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "ticket comment about the score"
            },
            {
              "name": "score",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "ticket score"
            },
            {
              "name": "ticketId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Ticket ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Set ticket score"
        }
      ],
      "description": "Set ticket score"
    }
  ],
  "resourcePath": "/support",
  "basePath": "https://api.us.ovhcloud.com/1.0",
  "models": {
    "support.Message": {
      "id": "Message",
      "namespace": "support",
      "description": "Support ticket message",
      "properties": {
        "body": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": false,
          "description": "Message body",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Message creation date",
          "required": true
        },
        "from": {
          "type": "support.MessageSenderEnum",
          "fullType": "support.MessageSenderEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Message sender type",
          "required": true
        },
        "messageId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Message identifier",
          "required": true
        },
        "ticketId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket identifier",
          "required": true
        },
        "updateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Message last update date",
          "required": true
        }
      }
    },
    "support.MessageSenderEnum": {
      "id": "MessageSenderEnum",
      "namespace": "support",
      "description": "Message sender type",
      "enum": [
        "customer",
        "support"
      ],
      "enumType": "string"
    },
    "support.NewMessageInfo": {
      "id": "NewMessageInfo",
      "namespace": "support",
      "description": "Newly created support identifiers",
      "properties": {
        "messageId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Message identifier",
          "required": true
        },
        "ticketId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket identifier",
          "required": true
        },
        "ticketNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket external number",
          "required": true
        }
      }
    },
    "support.Ticket": {
      "id": "Ticket",
      "namespace": "support",
      "description": "Support Ticket",
      "properties": {
        "accountId": {
          "type": "coreTypes.AccountId:string",
          "fullType": "coreTypes.AccountId:string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Customer account identifier",
          "required": true
        },
        "canBeClosed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Can this ticket be closed or not",
          "required": true
        },
        "category": {
          "type": "support.TicketCategoryEnum",
          "fullType": "support.TicketCategoryEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Ticket request category",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket creation date",
          "required": true
        },
        "lastMessageFrom": {
          "type": "support.MessageSenderEnum",
          "fullType": "support.MessageSenderEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Sender type of last message",
          "required": true
        },
        "product": {
          "type": "support.TicketProductEnum",
          "fullType": "support.TicketProductEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Product service concerned by ticket",
          "required": false
        },
        "score": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket score",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Name of service concerned by ticket",
          "required": false
        },
        "state": {
          "type": "support.TicketStatusEnum",
          "fullType": "support.TicketStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "State of ticket",
          "required": true
        },
        "subject": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket subject",
          "required": true
        },
        "ticketId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket identifier",
          "required": true
        },
        "ticketNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket external number",
          "required": true
        },
        "type": {
          "type": "support.TicketTypeEnum",
          "fullType": "support.TicketTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket type",
          "required": true
        },
        "updateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Ticket last update date",
          "required": true
        }
      }
    },
    "support.TicketCategoryEnum": {
      "id": "TicketCategoryEnum",
      "namespace": "support",
      "description": "Ticket request category",
      "enum": [
        "assistance",
        "billing",
        "incident"
      ],
      "enumType": "string"
    },
    "support.TicketProductEnum": {
      "id": "TicketProductEnum",
      "namespace": "support",
      "description": "Ticket product",
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
      "enumType": "string"
    },
    "support.TicketStatusEnum": {
      "id": "TicketStatusEnum",
      "namespace": "support",
      "description": "Support ticket statuses",
      "enum": [
        "closed",
        "open",
        "unknown"
      ],
      "enumType": "string"
    },
    "support.TicketSubCategoryEnum": {
      "id": "TicketSubCategoryEnum",
      "namespace": "support",
      "description": "Ticket request subcategory",
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
      "enumType": "string"
    },
    "support.TicketTypeEnum": {
      "id": "TicketTypeEnum",
      "namespace": "support",
      "description": "Ticket type (criticalIntervention requires VIP support level)",
      "enum": [
        "criticalIntervention",
        "genericRequest"
      ],
      "enumType": "string"
    }
  }
}