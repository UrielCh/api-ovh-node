import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/status/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "impact",
              "dataType": "ovhstatus.task.TaskImpactEnum",
              "paramType": "query",
              "fullType": "ovhstatus.task.TaskImpactEnum",
              "required": false,
              "description": "Filter by impact"
            },
            {
              "name": "status",
              "dataType": "ovhstatus.task.TaskStatusEnum",
              "paramType": "query",
              "fullType": "ovhstatus.task.TaskStatusEnum",
              "required": false,
              "description": "Filter by status"
            },
            {
              "name": "type",
              "dataType": "ovhstatus.task.TaskTypeEnum",
              "paramType": "query",
              "fullType": "ovhstatus.task.TaskTypeEnum",
              "required": false,
              "description": "Filter by type"
            }
          ],
          "responseType": "status.Task.Task[]",
          "noAuthentication": false,
          "description": "Find all the incidents or maintenances linked to your services"
        }
      ],
      "description": "API to get incidents or maintenances linked to nichandle services"
    }
  ],
  "resourcePath": "/status",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "ovhstatus.task.TaskImpactEnum": {
      "id": "TaskImpactEnum",
      "namespace": "ovhstatus.task",
      "description": "Description not available",
      "enum": [
        "partialUnavailability",
        "fullUnavailability",
        "downtime",
        "none",
        "unknown"
      ],
      "enumType": "string"
    },
    "ovhstatus.task.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "ovhstatus.task",
      "description": "Description not available",
      "enum": [
        "planned",
        "inProgress",
        "finished"
      ],
      "enumType": "string"
    },
    "ovhstatus.task.TaskTypeEnum": {
      "id": "TaskTypeEnum",
      "namespace": "ovhstatus.task",
      "description": "Description not available",
      "enum": [
        "incident",
        "maintenance",
        "upgrade"
      ],
      "enumType": "string"
    },
    "status.Reply.Reply": {
      "id": "Reply",
      "namespace": "status.Reply",
      "description": "A reply is useful to know the progress of a task",
      "properties": {
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The comment of the reply",
          "required": true
        },
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "The date of the reply",
          "required": true
        }
      }
    },
    "status.Task.Task": {
      "id": "Task",
      "namespace": "status.Task",
      "description": "A task linked to one of your services",
      "properties": {
        "category": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The category of the task",
          "required": true
        },
        "endDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "The end date of the task",
          "required": false
        },
        "impact": {
          "type": "ovhstatus.task.TaskImpactEnum",
          "fullType": "ovhstatus.task.TaskImpactEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The impact of the task",
          "required": true
        },
        "impactedService": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Your impacted service linked to the task",
          "required": true
        },
        "progress": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The task progression from 0 to 100",
          "required": true
        },
        "project": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The project of task",
          "required": true
        },
        "reference": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The reference of the task",
          "required": true
        },
        "replies": {
          "type": "status.Reply.Reply[]",
          "fullType": "status.Reply.Reply[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "The replies of the task",
          "required": true
        },
        "startDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": false,
          "description": "The start date of the task",
          "required": false
        },
        "status": {
          "type": "ovhstatus.task.TaskStatusEnum",
          "fullType": "ovhstatus.task.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The status of the task",
          "required": true
        },
        "title": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The title of the task",
          "required": true
        },
        "type": {
          "type": "ovhstatus.task.TaskTypeEnum",
          "fullType": "ovhstatus.task.TaskTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The type of the task",
          "required": true
        },
        "uuid": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The task uuid",
          "required": true
        }
      }
    }
  }
}