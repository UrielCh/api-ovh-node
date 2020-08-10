import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/overTheBox",
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
      "description": "Operations about the OVERTHEBOX service"
    },
    {
      "path": "/overTheBox/availableOffers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "price.OverTheBox.OfferEnum[]",
          "noAuthentication": false,
          "description": "List the available offers for the new call"
        }
      ],
      "description": "List the available offers for the new call"
    },
    {
      "path": "/overTheBox/devices",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [],
          "responseType": "overTheBox.DeviceForRegistration[]",
          "noAuthentication": false,
          "description": "Get the list of devices connected from the same IP address"
        }
      ],
      "description": "Get the list of devices connected from the same IP address"
    },
    {
      "path": "/overTheBox/{serviceName}",
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
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Resiliate a service"
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
            }
          ],
          "responseType": "overTheBox.Service",
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
              "dataType": "overTheBox.Service",
              "paramType": "body",
              "fullType": "overTheBox.Service",
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
      "description": "Service"
    },
    {
      "path": "/overTheBox/{serviceName}/availableReleaseChannels",
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
          "description": "List available release channels for this service"
        }
      ],
      "description": "availableReleaseChannels operations"
    },
    {
      "path": "/overTheBox/{serviceName}/backups",
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
          "description": "List of backups for this service"
        }
      ],
      "description": "List the overTheBox.Backup objects"
    },
    {
      "path": "/overTheBox/{serviceName}/backups/{backupId}",
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
              "name": "backupId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Backup ID"
            }
          ],
          "responseType": "overTheBox.Backup",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Backup"
    },
    {
      "path": "/overTheBox/{serviceName}/cancelResiliation",
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
          "description": "Cancel the resiliation of the Service"
        }
      ],
      "description": "cancelResiliation operations"
    },
    {
      "path": "/overTheBox/{serviceName}/changeContact",
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
      "path": "/overTheBox/{serviceName}/device",
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
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Unlink a device from a service"
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
            }
          ],
          "responseType": "overTheBox.Device",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Device"
    },
    {
      "path": "/overTheBox/{serviceName}/device/actions",
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
              "dataType": "overTheBox.ActionStatusEnum",
              "paramType": "query",
              "fullType": "overTheBox.ActionStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of actions scheduled for this device"
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
              "description": "Name of the action"
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
          "responseType": "overTheBox.DeviceAction",
          "noAuthentication": false,
          "description": "Create a device action on the device"
        }
      ],
      "description": "List the overTheBox.DeviceAction objects"
    },
    {
      "path": "/overTheBox/{serviceName}/device/actions/{actionId}",
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
              "name": "actionId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Action ID"
            }
          ],
          "responseType": "overTheBox.DeviceAction",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Device action"
    },
    {
      "path": "/overTheBox/{serviceName}/device/availableActions",
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
          "responseType": "overTheBox.AvailableDeviceAction[]",
          "noAuthentication": false,
          "description": "List the available device actions"
        }
      ],
      "description": "availableActions operations"
    },
    {
      "path": "/overTheBox/{serviceName}/device/backup",
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
          "responseType": "overTheBox.DeviceAction",
          "noAuthentication": false,
          "description": "Create an action to generate a backup"
        }
      ],
      "description": "backup operations"
    },
    {
      "path": "/overTheBox/{serviceName}/device/logs",
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
          "responseType": "overTheBox.TemporaryLogsLink",
          "noAuthentication": false,
          "description": "Generate a temporary url to retrieve device logs"
        }
      ],
      "description": "logs operations"
    },
    {
      "path": "/overTheBox/{serviceName}/device/restoreBackup",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "backupId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The id of the backup to restore"
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
          "responseType": "overTheBox.DeviceAction[]",
          "noAuthentication": false,
          "description": "Create a group of actions to restore a given backup"
        }
      ],
      "description": "restoreBackup operations"
    },
    {
      "path": "/overTheBox/{serviceName}/linkDevice",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "deviceId",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The id of the device"
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
          "description": "Link a device to this service"
        }
      ],
      "description": "linkDevice operations"
    },
    {
      "path": "/overTheBox/{serviceName}/migration/offers",
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
          "responseType": "overTheBox.AvailableMigrationOffer[]",
          "noAuthentication": false,
          "description": "List all available offers one can migrate to"
        }
      ],
      "description": "offers operations"
    },
    {
      "path": "/overTheBox/{serviceName}/remoteAccesses",
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
          "description": "List of remote accesses for the service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "expirationDate",
              "dataType": "datetime",
              "paramType": "body",
              "fullType": "datetime",
              "required": false,
              "description": "The expirationDate of the remote access (default 1 day)"
            },
            {
              "name": "exposedPort",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "The port that the device will expose"
            },
            {
              "name": "allowedIp",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": false,
              "description": "IP block from which the remote access will be allowed (the default value is the IP from which the call is made)"
            },
            {
              "name": "publicKey",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The remote user public key authorized on the device (for SSH purpose)"
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
          "responseType": "overTheBox.RemoteAccess",
          "noAuthentication": false,
          "description": "Create a new remote access for the service"
        }
      ],
      "description": "List the overTheBox.RemoteAccess objects"
    },
    {
      "path": "/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}",
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
              "name": "remoteAccessId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Remote access ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Delete a remote access"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "remoteAccessId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Remote access ID"
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
          "responseType": "overTheBox.RemoteAccess",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "If authorized, a remote access will expose a port, allowing an access to the device remotely"
    },
    {
      "path": "/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize",
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
              "name": "remoteAccessId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Remote access ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Authorize the remote access"
        }
      ],
      "description": "authorize operations"
    },
    {
      "path": "/overTheBox/{serviceName}/serviceInfos",
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
      "path": "/overTheBox/{serviceName}/tasks",
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
              "dataType": "overTheBox.TaskStatusEnum",
              "paramType": "query",
              "fullType": "overTheBox.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of name property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List of tasks scheduled for this service"
        }
      ],
      "description": "List the overTheBox.Task objects"
    },
    {
      "path": "/overTheBox/{serviceName}/tasks/{taskId}",
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
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "overTheBox.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task"
    }
  ],
  "resourcePath": "/overTheBox",
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
    "overTheBox.ActionStatusEnum": {
      "id": "ActionStatusEnum",
      "namespace": "overTheBox",
      "description": "Status of a task.",
      "enum": [
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "overTheBox.AvailableDeviceAction": {
      "id": "AvailableDeviceAction",
      "namespace": "overTheBox",
      "description": "Device action",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of the action",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the action",
          "required": true
        }
      }
    },
    "overTheBox.AvailableMigrationOffer": {
      "id": "AvailableMigrationOffer",
      "namespace": "overTheBox",
      "description": "Migration offer",
      "properties": {
        "currentOfferPrice": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Monthly price of the current offer",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Description of the offer",
          "required": true
        },
        "engagementMonths": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of months of engagement",
          "required": true
        },
        "hardwareAvailable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Specify if a hardware is available",
          "required": true
        },
        "offer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the offer",
          "required": true
        },
        "price": {
          "type": "order.Price",
          "fullType": "order.Price",
          "canBeNull": false,
          "readOnly": false,
          "description": "Monthly price of the new offer",
          "required": true
        }
      }
    },
    "overTheBox.Backup": {
      "id": "Backup",
      "namespace": "overTheBox",
      "description": "Backup",
      "properties": {
        "backupId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The id of the backup",
          "required": true
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the creation of the backup",
          "required": true
        },
        "deviceActionId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The id of the device action that triggered the backup",
          "required": false
        }
      }
    },
    "overTheBox.Device": {
      "id": "Device",
      "namespace": "overTheBox",
      "description": "Device",
      "properties": {
        "activated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether or not this device is associated to a service",
          "required": true
        },
        "deviceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The id of the device",
          "required": true
        },
        "lastSeen": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time the device has been seen on the provisionning servers",
          "required": true
        },
        "networkInterfaces": {
          "type": "overTheBox.DeviceInterface[]",
          "fullType": "overTheBox.DeviceInterface[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Network interfaces of the device",
          "required": true
        },
        "publicIp": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "The public IP of the device",
          "required": true
        },
        "systemVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "System version of the device",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Version of the device",
          "required": true
        }
      }
    },
    "overTheBox.DeviceAction": {
      "id": "DeviceAction",
      "namespace": "overTheBox",
      "description": "Device action",
      "properties": {
        "actionId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The id of the action",
          "required": true
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of creation of the action",
          "required": true
        },
        "details": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The details of the action",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The name of the action",
          "required": true
        },
        "status": {
          "type": "overTheBox.ActionStatusEnum",
          "fullType": "overTheBox.ActionStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The status of the action",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of execution of the action",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last time the action was updated",
          "required": true
        }
      }
    },
    "overTheBox.DeviceForRegistration": {
      "id": "DeviceForRegistration",
      "namespace": "overTheBox",
      "description": "A device for registration",
      "properties": {
        "activated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not this device is actived",
          "required": true
        },
        "deviceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "lastSeen": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "The last time this device was seen on the provisionning servers",
          "required": true
        }
      }
    },
    "overTheBox.DeviceInterface": {
      "id": "DeviceInterface",
      "namespace": "overTheBox",
      "description": "Infos about a network interface",
      "properties": {
        "device": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Device of the interface",
          "required": false
        },
        "dnsServers": {
          "type": "ip[]",
          "fullType": "ip[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "The DNS servers of this interface",
          "required": false
        },
        "gateway": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "Gateway of the interface",
          "required": false
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "IP of the interface",
          "required": false
        },
        "multipathStatus": {
          "type": "overTheBox.MultipathStatusEnum",
          "fullType": "overTheBox.MultipathStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Status of MPTCP on this interface",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the interface",
          "required": true
        },
        "netmask": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "Netmask of the interface",
          "required": false
        },
        "publicIp": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "Public IP of the interface",
          "required": false
        }
      }
    },
    "overTheBox.GraphEndpoint": {
      "id": "GraphEndpoint",
      "namespace": "overTheBox",
      "description": "Parameters required to query metrics from OpenTSDB",
      "properties": {
        "host": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The OpenTSDB host",
          "required": true
        },
        "readToken": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "A read-only token",
          "required": true
        },
        "readTokenID": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The read-only token ID",
          "required": true
        }
      }
    },
    "overTheBox.MultipathStatusEnum": {
      "id": "MultipathStatusEnum",
      "namespace": "overTheBox",
      "description": "Status of a MPTCP Interface.",
      "enum": [
        "backup",
        "handover",
        "master",
        "off",
        "on"
      ],
      "enumType": "string"
    },
    "overTheBox.RemoteAccess": {
      "id": "RemoteAccess",
      "namespace": "overTheBox",
      "description": "If authorized, a remote access will expose a port, allowing an access to the device remotely",
      "properties": {
        "accepted": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If the remote access was accepted by the remote user",
          "required": true
        },
        "askDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "The date of the remote access demand",
          "required": true
        },
        "authorizedBy": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The user that authorized the remote access",
          "required": false
        },
        "connectionInfos": {
          "type": "overTheBox.RemoteAccessConnectionInfos",
          "fullType": "overTheBox.RemoteAccessConnectionInfos",
          "canBeNull": false,
          "readOnly": true,
          "description": "All the infos needed to connect yourself to your OTB",
          "required": true
        },
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "When the remote access will be automatically deleted",
          "required": true
        },
        "exposedPort": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "The device's port which will be exposed",
          "required": true
        },
        "remoteAccessId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The id of the remote access",
          "required": true
        },
        "remoteUserInfos": {
          "type": "overTheBox.RemoteAccessUserInfos",
          "fullType": "overTheBox.RemoteAccessUserInfos",
          "canBeNull": false,
          "readOnly": true,
          "description": "Infos about the remote user",
          "required": true
        },
        "status": {
          "type": "overTheBox.RemoteAccessStatusEnum",
          "fullType": "overTheBox.RemoteAccessStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status of the remote access",
          "required": true
        }
      }
    },
    "overTheBox.RemoteAccessConnectionInfos": {
      "id": "RemoteAccessConnectionInfos",
      "namespace": "overTheBox",
      "description": "All the infos needed to connect yourself to your OTB",
      "properties": {
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": false,
          "description": "IP to connect to when accessing the device remotely",
          "required": false
        },
        "port": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Port to connect to when accessing the device remotely",
          "required": false
        }
      }
    },
    "overTheBox.RemoteAccessStatusEnum": {
      "id": "RemoteAccessStatusEnum",
      "namespace": "overTheBox",
      "description": "Status of the remote access.",
      "enum": [
        "active",
        "creating",
        "deleted",
        "deleting",
        "pendingValidation",
        "toDelete"
      ],
      "enumType": "string"
    },
    "overTheBox.RemoteAccessUserInfos": {
      "id": "RemoteAccessUserInfos",
      "namespace": "overTheBox",
      "description": "Infos about the remote user",
      "properties": {
        "ip": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": false,
          "description": "IP from which the remote access will be allowed",
          "required": true
        },
        "publicKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "The public key authorized on the device (for SSH purpose)",
          "required": false
        },
        "user": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The user that will access the device remotely",
          "required": true
        }
      }
    },
    "overTheBox.Service": {
      "id": "Service",
      "namespace": "overTheBox",
      "description": "Service",
      "properties": {
        "SOCKSProxyEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If the socks proxy is enabled",
          "required": true
        },
        "customerDescription": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Editable field for customer",
          "required": false
        },
        "graphEndpoint": {
          "type": "overTheBox.GraphEndpoint",
          "fullType": "overTheBox.GraphEndpoint",
          "canBeNull": true,
          "readOnly": true,
          "description": "Parameters needed to fetch metrics",
          "required": false
        },
        "releaseChannel": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Release channel of the service",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The name of the service",
          "required": true
        },
        "status": {
          "type": "overTheBox.ServiceStatusEnum",
          "fullType": "overTheBox.ServiceStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The status of the service",
          "required": true
        },
        "tunnelMode": {
          "type": "overTheBox.TunnelModeEnum",
          "fullType": "overTheBox.TunnelModeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The tunnel mode of the service",
          "required": true
        }
      }
    },
    "overTheBox.ServiceStatusEnum": {
      "id": "ServiceStatusEnum",
      "namespace": "overTheBox",
      "description": "Status of the service.",
      "enum": [
        "active",
        "creating",
        "deleted",
        "suspended",
        "toCreate",
        "toDelete"
      ],
      "enumType": "string"
    },
    "overTheBox.Task": {
      "id": "Task",
      "namespace": "overTheBox",
      "description": "Task",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The name of the task",
          "required": true
        },
        "status": {
          "type": "overTheBox.TaskStatusEnum",
          "fullType": "overTheBox.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "The status of the task",
          "required": true
        },
        "taskId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The id of the task",
          "required": true
        }
      }
    },
    "overTheBox.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "overTheBox",
      "description": "Status of a task.",
      "enum": [
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "overTheBox.TemporaryLogsLink": {
      "id": "TemporaryLogsLink",
      "namespace": "overTheBox",
      "description": "Temporary url informations",
      "properties": {
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "Temporary url expiration date",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Temporary url",
          "required": true
        }
      }
    },
    "overTheBox.TunnelModeEnum": {
      "id": "TunnelModeEnum",
      "namespace": "overTheBox",
      "description": "Tunnel mode of the service.",
      "enum": [
        "glorytun",
        "glorytun_hybrid",
        "glorytun_mud"
      ],
      "enumType": "string"
    },
    "price.OverTheBox.OfferEnum": {
      "id": "OfferEnum",
      "namespace": "price.OverTheBox",
      "description": "Enum of Offers",
      "enum": [
        "plus.v1"
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
    }
  }
}