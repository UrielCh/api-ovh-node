import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/deskaas.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the DESKAAS service",
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
      "path": "/deskaas"
    },
    {
      "description": "Desktop As A Service",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.deskaas"
        }
      ],
      "path": "/deskaas/{serviceName}"
    },
    {
      "description": "changeAlias operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the Virtual Desktop alias",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "New alias of Desktop As A Service",
              "fullType": "string",
              "name": "alias",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.Task"
        }
      ],
      "path": "/deskaas/{serviceName}/changeAlias"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The contact to set as admin contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactAdmin",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as billing contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactBilling",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/deskaas/{serviceName}/changeContact"
    },
    {
      "description": "Confirm termination of your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Confirm termination of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Commentary about your termination request",
              "fullType": "string",
              "name": "commentary",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "service.TerminationFutureUseEnum",
              "description": "What next after your termination request",
              "fullType": "service.TerminationFutureUseEnum",
              "name": "futureUse",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "service.TerminationReasonEnum",
              "description": "Reason of your termination request",
              "fullType": "service.TerminationReasonEnum",
              "name": "reason",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The termination token sent by mail to the admin contact",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/deskaas/{serviceName}/confirmTermination"
    },
    {
      "description": "console operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "New console access",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.Task"
        }
      ],
      "path": "/deskaas/{serviceName}/console"
    },
    {
      "description": "passwordPolicy operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the current password policy for your Desktop As A Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.passwordPolicy"
        }
      ],
      "path": "/deskaas/{serviceName}/passwordPolicy"
    },
    {
      "description": "reboot operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reboot the Operating system of the Cloud Desktop.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.Task"
        }
      ],
      "path": "/deskaas/{serviceName}/reboot"
    },
    {
      "description": "refresh operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Refresh the Operating system of the Desktop As A Service. All your personnal data are kept.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.Task"
        }
      ],
      "path": "/deskaas/{serviceName}/refresh"
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
              "description": "Domain of the service",
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
              "description": "New object properties",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/deskaas/{serviceName}/serviceInfos"
    },
    {
      "description": "List the deskaas.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks associated with this Desktop As A Service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "deskaas.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "deskaas.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/deskaas/{serviceName}/task"
    },
    {
      "description": "Operation on a Desktop As A Service component",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.Task"
        }
      ],
      "path": "/deskaas/{serviceName}/task/{taskId}"
    },
    {
      "description": "Terminate your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Terminate your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/deskaas/{serviceName}/terminate"
    },
    {
      "description": "upgrade operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Upgrading the Desktop As A Service to another profile. The Virtual Desktop will not be available during upgrade and has to be restarted. You cannot downgrade a Virtual Desktop",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "New reference of Desktop As A Service",
              "fullType": "string",
              "name": "newReference",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "New plan of Desktop As A Service",
              "fullType": "string",
              "name": "planCode",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.Task"
        }
      ],
      "path": "/deskaas/{serviceName}/upgrade"
    },
    {
      "description": "Desktop As A Service User",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.User"
        }
      ],
      "path": "/deskaas/{serviceName}/user"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change Desktop As A Service user password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "New password for this Desktop As A Service user. It must fits your Desktop As A Service password policy. If this field is empty, a random password will be generated and sent by email.",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.Task"
        }
      ],
      "path": "/deskaas/{serviceName}/user/changePassword"
    },
    {
      "description": "changeProperties operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change Desktop As A Service user properties",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.Task"
        }
      ],
      "path": "/deskaas/{serviceName}/user/changeProperties"
    },
    {
      "description": "List the deskaas.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks associated with this User",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "deskaas.TaskStateEnum",
              "description": "Filter the value of state property (=)",
              "fullType": "deskaas.TaskStateEnum",
              "name": "state",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/deskaas/{serviceName}/user/task"
    },
    {
      "description": "Operation on a Desktop As A Service component",
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
              "description": "Domain of the service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "deskaas.Task"
        }
      ],
      "path": "/deskaas/{serviceName}/user/task/{taskId}"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "complexType.UnitAndValue<T>": {
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "T"
        }
      }
    },
    "deskaas.StateEnum": {
      "description": "All states a Desktop As A Service can be in",
      "enum": [
        "available",
        "delivered",
        "disabled",
        "error",
        "reserved"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "deskaas"
    },
    "deskaas.Task": {
      "description": "Operation on a Desktop As A Service component",
      "id": "Task",
      "namespace": "deskaas",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Current progress description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastModificationDate": {
          "canBeNull": true,
          "description": "Task last modification date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Task name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "progress": {
          "canBeNull": false,
          "description": "Current progress",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Current Task state",
          "fullType": "deskaas.TaskStateEnum",
          "readOnly": true,
          "required": false,
          "type": "deskaas.TaskStateEnum"
        },
        "taskId": {
          "canBeNull": false,
          "description": "Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "deskaas.TaskStateEnum": {
      "description": "All states a Desktop As A Service Task can be in",
      "enum": [
        "canceled",
        "doing",
        "done",
        "error",
        "fixing",
        "toCancel",
        "toCreate",
        "todo",
        "unknown",
        "waitingForChilds",
        "waitingTodo"
      ],
      "enumType": "string",
      "id": "TaskStateEnum",
      "namespace": "deskaas"
    },
    "deskaas.User": {
      "description": "Desktop As A Service User",
      "id": "User",
      "namespace": "deskaas",
      "properties": {
        "activationState": {
          "canBeNull": false,
          "fullType": "deskaas.user.ActivationStateEnum",
          "readOnly": true,
          "required": false,
          "type": "deskaas.user.ActivationStateEnum"
        },
        "email": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
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
        "state": {
          "canBeNull": false,
          "fullType": "deskaas.user.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "deskaas.user.StateEnum"
        },
        "userId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "deskaas.deskaas": {
      "description": "Desktop As A Service",
      "id": "deskaas",
      "namespace": "deskaas",
      "properties": {
        "alias": {
          "canBeNull": false,
          "description": "Alias determined by the use",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "dataDisk": {
          "canBeNull": false,
          "description": "Data allocated to desktop",
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        },
        "ip": {
          "canBeNull": true,
          "description": "Outgoing ip",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "os": {
          "canBeNull": false,
          "description": "Operating system of desktop",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Profile of Virtual Desktop",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ram": {
          "canBeNull": false,
          "description": "RAM allocated to desktop",
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        },
        "reference": {
          "canBeNull": false,
          "description": "Reference of Virtual Desktop",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Service name of your Desktop As A Service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of your Virtual Desktop",
          "fullType": "deskaas.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "deskaas.StateEnum"
        },
        "url": {
          "canBeNull": true,
          "description": "URL to connect to the virtualDesktop",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vcpu": {
          "canBeNull": false,
          "description": "Vcpu allocated to desktop",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "deskaas.passwordPolicy": {
      "description": "A structure describing the current password policy for your Dedicated Cloud",
      "id": "passwordPolicy",
      "namespace": "deskaas",
      "properties": {
        "deniedChars": {
          "canBeNull": false,
          "description": "List of denied characters in the password",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "digitMandatory": {
          "canBeNull": false,
          "description": "Whether or not a digit (0-9) is mandatory in the password",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "letterMandatory": {
          "canBeNull": false,
          "description": "Whether or not a letter (a-z or A-Z) is mandatory in the password",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "lowercaseLetterMandatory": {
          "canBeNull": false,
          "description": "Whether or not a lowercase letter (a-z) is mandatory in the password",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "maxLength": {
          "canBeNull": false,
          "description": "Maximum lenght of the password",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minLength": {
          "canBeNull": false,
          "description": "Minimum lenght of the password",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "specialMandatory": {
          "canBeNull": false,
          "description": "Whether or not a special character (\\W or _) is mandatory in the password",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "uppercaseLetterMandatory": {
          "canBeNull": false,
          "description": "Whether or not an uppercase letter (A-Z) is mandatory in the password",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "deskaas.user.ActivationStateEnum": {
      "description": "All activation states a Dedicated Cloud User can have",
      "enum": [
        "disabled",
        "disabling",
        "enabled",
        "enabling",
        "toDisable",
        "toEnable"
      ],
      "enumType": "string",
      "id": "ActivationStateEnum",
      "namespace": "deskaas.user"
    },
    "deskaas.user.StateEnum": {
      "description": "All states a Dedicated Cloud User can be in",
      "enum": [
        "creating",
        "deleting",
        "delivered",
        "error"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "deskaas.user"
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
    "service.TerminationFutureUseEnum": {
      "description": "All future uses you can provide for a service termination",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string",
      "id": "TerminationFutureUseEnum",
      "namespace": "service"
    },
    "service.TerminationReasonEnum": {
      "description": "All reasons you can provide for a service termination",
      "enum": [
        "FEATURES_DONT_SUIT_ME",
        "LACK_OF_PERFORMANCES",
        "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
        "MIGRATED_TO_COMPETITOR",
        "NOT_ENOUGH_RECOGNITION",
        "NOT_NEEDED_ANYMORE",
        "NOT_RELIABLE",
        "NO_ANSWER",
        "OTHER",
        "PRODUCT_DIMENSION_DONT_SUIT_ME",
        "PRODUCT_TOOLS_DONT_SUIT_ME",
        "TOO_EXPENSIVE",
        "TOO_HARD_TO_USE",
        "UNSATIFIED_BY_CUSTOMER_SUPPORT"
      ],
      "enumType": "string",
      "id": "TerminationReasonEnum",
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
    }
  },
  "resourcePath": "/deskaas"
}