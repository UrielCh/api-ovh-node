"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "API to get incidents or maintenances linked to nichandle services",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Find all the incidents or maintenances linked to your services",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "ovhstatus.task.TaskImpactEnum",
                            "description": "Filter by impact",
                            "fullType": "ovhstatus.task.TaskImpactEnum",
                            "name": "impact",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "ovhstatus.task.TaskStatusEnum",
                            "description": "Filter by status",
                            "fullType": "ovhstatus.task.TaskStatusEnum",
                            "name": "status",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "ovhstatus.task.TaskTypeEnum",
                            "description": "Filter by type",
                            "fullType": "ovhstatus.task.TaskTypeEnum",
                            "name": "type",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "status.Task[]"
                }
            ],
            "path": "/status/task"
        }
    ],
    "basePath": "https://eu.api.kimsufi.com/1.0",
    "models": {
        "ovhstatus.task.TaskImpactEnum": {
            "description": "Description not available",
            "enum": [
                "partialUnavailability",
                "fullUnavailability",
                "downtime",
                "none",
                "unknown"
            ],
            "enumType": "string",
            "id": "TaskImpactEnum",
            "namespace": "ovhstatus.task"
        },
        "ovhstatus.task.TaskStatusEnum": {
            "description": "Description not available",
            "enum": [
                "planned",
                "inProgress",
                "finished"
            ],
            "enumType": "string",
            "id": "TaskStatusEnum",
            "namespace": "ovhstatus.task"
        },
        "ovhstatus.task.TaskTypeEnum": {
            "description": "Description not available",
            "enum": [
                "incident",
                "maintenance",
                "upgrade"
            ],
            "enumType": "string",
            "id": "TaskTypeEnum",
            "namespace": "ovhstatus.task"
        },
        "status.Reply": {
            "description": "A reply is useful to know the progress of a task",
            "id": "Reply",
            "namespace": "status.Reply",
            "properties": {
                "comment": {
                    "canBeNull": false,
                    "description": "The comment of the reply",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "date": {
                    "canBeNull": false,
                    "description": "The date of the reply",
                    "fullType": "datetime",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                }
            }
        },
        "status.Task": {
            "description": "A task linked to one of your services",
            "id": "Task",
            "namespace": "status.Task",
            "properties": {
                "category": {
                    "canBeNull": false,
                    "description": "The category of the task",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "endDate": {
                    "canBeNull": true,
                    "description": "The end date of the task",
                    "fullType": "datetime",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "impact": {
                    "canBeNull": false,
                    "description": "The impact of the task",
                    "fullType": "ovhstatus.task.TaskImpactEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "ovhstatus.task.TaskImpactEnum"
                },
                "impactedService": {
                    "canBeNull": false,
                    "description": "Your impacted service linked to the task",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "progress": {
                    "canBeNull": false,
                    "description": "The task progression from 0 to 100",
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                },
                "project": {
                    "canBeNull": false,
                    "description": "The project of task",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "reference": {
                    "canBeNull": false,
                    "description": "The reference of the task",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "replies": {
                    "canBeNull": false,
                    "description": "The replies of the task",
                    "fullType": "status.Reply[]",
                    "readOnly": false,
                    "required": false,
                    "type": "status.Reply[]"
                },
                "startDate": {
                    "canBeNull": true,
                    "description": "The start date of the task",
                    "fullType": "datetime",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "status": {
                    "canBeNull": false,
                    "description": "The status of the task",
                    "fullType": "ovhstatus.task.TaskStatusEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "ovhstatus.task.TaskStatusEnum"
                },
                "title": {
                    "canBeNull": false,
                    "description": "The title of the task",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                },
                "type": {
                    "canBeNull": false,
                    "description": "The type of the task",
                    "fullType": "ovhstatus.task.TaskTypeEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "ovhstatus.task.TaskTypeEnum"
                },
                "uuid": {
                    "canBeNull": false,
                    "description": "The task uuid",
                    "fullType": "string",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        }
    },
    "resourcePath": "/status"
};
//# sourceMappingURL=status.js.map