import {Schema} from '../../src/schema';

// imported from https://ca.api.soyoustart.com:443/1.0/support.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "List support tickets identifiers for this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List support tickets identifiers for this service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Search archived tickets",
              "fullType": "boolean",
              "name": "archived",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "support.TicketCategoryEnum",
              "description": "Search by ticket category",
              "fullType": "support.TicketCategoryEnum",
              "name": "category",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Maximum creation date",
              "fullType": "datetime",
              "name": "maxCreationDate",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Minimum creation date",
              "fullType": "datetime",
              "name": "minCreationDate",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Page of tickets to fetch (only if pageSize is defined)",
              "fullType": "long",
              "name": "page",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Number of ticket to fetch",
              "fullType": "long",
              "name": "pageSize",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "support.TicketProductEnum",
              "description": "Search by ticket product",
              "fullType": "support.TicketProductEnum",
              "name": "product",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Ticket message service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "support.TicketStatusEnum",
              "description": "Status of ticket",
              "fullType": "support.TicketStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Search by ticket subject",
              "fullType": "string",
              "name": "subject",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Search by ticket number",
              "fullType": "string",
              "name": "ticketNumber",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "support/all",
            "all"
          ]
        }
      ],
      "path": "/support/tickets"
    },
    {
      "description": "Get ticket",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get ticket",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "internal identifier ticket",
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "support.Ticket",
          "scopes": [
            "support/all",
            "all"
          ]
        }
      ],
      "path": "/support/tickets/{ticketId}"
    },
    {
      "description": "Check whether ticket can be scored",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Checks whether ticket can be scored",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "internal ticket identifier",
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean",
          "scopes": [
            "support/all",
            "all"
          ]
        }
      ],
      "path": "/support/tickets/{ticketId}/canBeScored"
    },
    {
      "description": "Close ticket",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Close ticket",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "internal ticket identifier",
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "support/all",
            "all"
          ]
        }
      ],
      "path": "/support/tickets/{ticketId}/close"
    },
    {
      "description": "Get ticket messages",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get ticket messages",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "internal ticket identifier",
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "support.Message[]",
          "scopes": [
            "support/all",
            "all"
          ]
        }
      ],
      "path": "/support/tickets/{ticketId}/messages"
    },
    {
      "description": "Reopen a ticket",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reopen a ticket",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "ticket reopen reason",
              "fullType": "text",
              "name": "body",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "internal ticket identifier",
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "support/all",
            "all"
          ]
        }
      ],
      "path": "/support/tickets/{ticketId}/reopen"
    },
    {
      "description": "Reply to ticket",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reply to ticket",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "text body of ticket response",
              "fullType": "text",
              "name": "body",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "internal ticket identifier",
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "support/all",
            "all"
          ]
        }
      ],
      "path": "/support/tickets/{ticketId}/reply"
    },
    {
      "description": "Set ticket score",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Set ticket score",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "ticket score",
              "fullType": "string",
              "name": "score",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "text",
              "description": "ticket comment about the score",
              "fullType": "text",
              "name": "scoreComment",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "internal ticket identifier",
              "fullType": "long",
              "name": "ticketId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "support/all",
            "all"
          ]
        }
      ],
      "path": "/support/tickets/{ticketId}/score"
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
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "text",
              "description": "Ticket message body",
              "fullType": "text",
              "name": "body",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "support.TicketCategoryEnum",
              "description": "Ticket message category",
              "fullType": "support.TicketCategoryEnum",
              "name": "category",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "support.TicketProductEnum",
              "description": "Ticket message product",
              "fullType": "support.TicketProductEnum",
              "name": "product",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Ticket message service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "support.TicketSubCategoryEnum",
              "description": "Ticket message subcategory",
              "fullType": "support.TicketSubCategoryEnum",
              "name": "subcategory",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Ticket message subject",
              "fullType": "string",
              "name": "subject",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "support.TicketTypeEnum",
              "description": "Ticket type (criticalIntervention requires VIP support level)",
              "fullType": "support.TicketTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "support.NewMessageInfo",
          "scopes": [
            "support/all",
            "all"
          ]
        }
      ],
      "path": "/support/tickets/create"
    }
  ],
  "basePath": "https://ca.api.soyoustart.com/1.0",
  "models": {
    "support.Message": {
      "description": "Support ticket message",
      "id": "Message",
      "namespace": "support",
      "properties": {
        "body": {
          "canBeNull": false,
          "description": "Message body",
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Message creation date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "from": {
          "canBeNull": false,
          "description": "Message sender type",
          "readOnly": false,
          "required": false,
          "type": "support.MessageSenderEnum"
        },
        "messageId": {
          "canBeNull": false,
          "description": "Message identifier",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "ticketId": {
          "canBeNull": false,
          "description": "Ticket identifier",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "updateDate": {
          "canBeNull": false,
          "description": "Message last update date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "support.MessageSenderEnum": {
      "description": "Message sender type",
      "enum": [
        "customer",
        "support"
      ],
      "enumType": "string",
      "id": "MessageSenderEnum",
      "namespace": "support"
    },
    "support.NewMessageInfo": {
      "description": "Newly created support identifiers",
      "id": "NewMessageInfo",
      "namespace": "support",
      "properties": {
        "messageId": {
          "canBeNull": false,
          "description": "Message identifier",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "ticketId": {
          "canBeNull": false,
          "description": "Ticket identifier",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "ticketNumber": {
          "canBeNull": false,
          "description": "Ticket external number",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "support.Ticket": {
      "description": "Support Ticket",
      "id": "Ticket",
      "namespace": "support",
      "properties": {
        "accountId": {
          "canBeNull": false,
          "description": "Customer account identifier",
          "readOnly": false,
          "required": false,
          "type": "coreTypes.AccountId:string"
        },
        "canBeClosed": {
          "canBeNull": false,
          "description": "Can this ticket be closed or not",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "category": {
          "canBeNull": true,
          "description": "Ticket request category",
          "readOnly": false,
          "required": false,
          "type": "support.TicketCategoryEnum"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Ticket creation date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "lastMessageFrom": {
          "canBeNull": false,
          "description": "Sender type of last message",
          "readOnly": false,
          "required": false,
          "type": "support.MessageSenderEnum"
        },
        "product": {
          "canBeNull": true,
          "description": "Product service concerned by ticket",
          "readOnly": false,
          "required": false,
          "type": "support.TicketProductEnum"
        },
        "score": {
          "canBeNull": false,
          "description": "Ticket score",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": true,
          "description": "Name of service concerned by ticket",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "State of ticket",
          "readOnly": false,
          "required": false,
          "type": "support.TicketStatusEnum"
        },
        "subject": {
          "canBeNull": false,
          "description": "Ticket subject",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ticketId": {
          "canBeNull": false,
          "description": "Ticket identifier",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "ticketNumber": {
          "canBeNull": false,
          "description": "Ticket external number",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Ticket type",
          "readOnly": false,
          "required": false,
          "type": "support.TicketTypeEnum"
        },
        "updateDate": {
          "canBeNull": false,
          "description": "Ticket last update date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "support.TicketCategoryEnum": {
      "description": "Ticket request category",
      "enum": [
        "assistance",
        "billing",
        "incident"
      ],
      "enumType": "string",
      "id": "TicketCategoryEnum",
      "namespace": "support"
    },
    "support.TicketProductEnum": {
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
      "enumType": "string",
      "id": "TicketProductEnum",
      "namespace": "support"
    },
    "support.TicketStatusEnum": {
      "description": "Support ticket statuses",
      "enum": [
        "closed",
        "open",
        "unknown"
      ],
      "enumType": "string",
      "id": "TicketStatusEnum",
      "namespace": "support"
    },
    "support.TicketSubCategoryEnum": {
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
      "enumType": "string",
      "id": "TicketSubCategoryEnum",
      "namespace": "support"
    },
    "support.TicketTypeEnum": {
      "description": "Ticket type (criticalIntervention requires VIP support level)",
      "enum": [
        "criticalIntervention",
        "genericRequest"
      ],
      "enumType": "string",
      "id": "TicketTypeEnum",
      "namespace": "support"
    }
  },
  "resourcePath": "/support"
}