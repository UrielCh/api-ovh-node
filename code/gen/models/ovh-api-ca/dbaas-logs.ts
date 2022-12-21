import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/dbaas/logs.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the DBAAS-LOGS service",
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
      "path": "/dbaas/logs"
    },
    {
      "description": "Operations about the DBAAS-LOGS service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the service object of connected identity.",
          "errors": [
            "Client::NotFound::ServiceNotFound"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update the service properties",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::NotFound::ServiceNotFound"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.Update",
              "description": "Request Body",
              "fullType": "dbaas.logs.Update",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}"
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
              "description": "The internal ID of your Logs pack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/changeContact"
    },
    {
      "description": "Service Clusters",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of allowed cluster",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/cluster"
    },
    {
      "description": "Service Clusters",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of an allowed cluster",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ClusterDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Cluster ID",
              "fullType": "uuid",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update details of an allowed cluster",
          "errors": [
            "Client::ValidationError::InvalidIPAddress",
            "Client::ValidationError::InvalidIPAddressKernel",
            "Client::ValidationError::InvalidIPAddressLocalhost",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotOwner",
            "Client::ValidationError::NothingToDo",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::PCIDSSSettingOnly",
            "Client::Forbidden::ServiceNotMigrated",
            "Client::Forbidden::TooManyActive",
            "Client::NotFound::ClusterDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.ClusterUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.ClusterUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Cluster ID",
              "fullType": "uuid",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}"
    },
    {
      "description": "Cluster available retentions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all the retention ID available for a given cluster",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::AccessDenied",
            "Client::NotFound::ClusterDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Cluster ID",
              "fullType": "uuid",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}/retention"
    },
    {
      "description": "Cluster available retentions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of a retention",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::AccessDenied",
            "Client::NotFound::ClusterDoesNotExists",
            "Client::NotFound::ClusterRetentionNotFound",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Cluster ID",
              "fullType": "uuid",
              "name": "clusterId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Retention ID",
              "fullType": "uuid",
              "name": "retentionId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.ClusterRetention"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/cluster/{clusterId}/retention/{retentionId}"
    },
    {
      "description": "Encryption keys",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Return the list of registred encryption keys",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Add a new encryption key",
          "errors": [
            "Client::ValidationError::EncryptionKeyFingerprintMismatch",
            "Client::ValidationError::EncryptionKeyHasExpirationDate",
            "Client::ValidationError::InvalidEncryptionKey",
            "Client::ValidationError::InvalidEncryptionKeyAlgorithm",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ItemQuotaReached",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::AlreadyExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.EncryptionKey",
              "description": "Request Body",
              "fullType": "dbaas.logs.EncryptionKey",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/encryptionKey"
    },
    {
      "description": "Encryption keys",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete the specified encryption key",
          "errors": [
            "Client::ValidationError::EncryptionKeyStillAssignedToCluster",
            "Client::ValidationError::EncryptionKeyStillAssignedToStream",
            "Client::ValidationError::EncryptionKeyStillUsedByArchive",
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::EncryptionKeyDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Encryption key ID",
              "fullType": "uuid",
              "name": "encryptionKeyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Return details of an encryption key",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::EncryptionKeyDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Encryption key ID",
              "fullType": "uuid",
              "name": "encryptionKeyId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.EncryptionKey"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/encryptionKey/{encryptionKeyId}"
    },
    {
      "description": "Inputs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of registered input attached to the logged user",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a new input object",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::EngineIsDeprecated",
            "Client::ValidationError::InvalidFormat",
            "Client::ValidationError::InvalidIPAddress",
            "Client::ValidationError::InvalidIPAddressKernel",
            "Client::ValidationError::InvalidIPAddressLocalhost",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotStreamOwner",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::NotOnSameCluster",
            "Client::Forbidden::PCIDSSInputDeny",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::InputEngineDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::Conflict::TitleAlreadyUsed"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.InputCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.InputCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input"
    },
    {
      "description": "Inputs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove the specified input object",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified input",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Input"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update information of specified input object",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::EngineIsDeprecated",
            "Client::ValidationError::InvalidFormat",
            "Client::ValidationError::InvalidIPAddress",
            "Client::ValidationError::InvalidIPAddressKernel",
            "Client::ValidationError::InvalidIPAddressLocalhost",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotStreamOwner",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::NotOnSameCluster",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::Conflict::TitleAlreadyUsed"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.InputUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.InputUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}"
    },
    {
      "description": "InputActions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns actions of specified input",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.InputAction[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/action"
    },
    {
      "description": "InputConfigtest",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Validate configuration of specified input",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::LogstashOnly",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/configtest"
    },
    {
      "description": "InputConfigtestResult",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the config test operation result",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.TestResult"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/configtest/result"
    },
    {
      "description": "FlowggerConfiguration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the flowgger configuration",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::InvalidInputEngine",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.FlowggerConfiguration"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update the flowgger configuration",
          "errors": [
            "Client::ValidationError::FlowggerInvalidFraming",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::InvalidInputEngine",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.InputConfigurationFlowggerUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.InputConfigurationFlowggerUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger"
    },
    {
      "description": "LogstashConfiguration",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the logstash configuration",
          "errors": [
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::InvalidInputEngine",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.LogstashConfiguration"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update the logstash configuration",
          "errors": [
            "Client::ValidationError::InvalidInputConfiguration",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::InputNotAvailable",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::InvalidInputEngine",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.InputConfigurationLogstashUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.InputConfigurationLogstashUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash"
    },
    {
      "description": "InputEnd",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Schedule the end of specified input",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::IncompatibleStatusForInput",
            "Client::Forbidden::InputNotAvailable",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/end"
    },
    {
      "description": "InputLogs",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Generate a temporary url to retrieve input logs",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.TemporaryLogsLink"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/logs/url"
    },
    {
      "description": "InputRestart",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Schedule the restart of specified input",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::IncompatibleStatusForInput",
            "Client::Forbidden::InputNotAvailable",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/restart"
    },
    {
      "description": "InputStart",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Schedule the start of specified input",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::IncompatibleStatusForInput",
            "Client::Forbidden::InputNotAvailable",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/start"
    },
    {
      "description": "InputUrls",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of urls of specified input",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::InputDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Input ID",
              "fullType": "uuid",
              "name": "inputId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Url[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/{inputId}/url"
    },
    {
      "description": "Engines",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of available input engines",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/engine"
    },
    {
      "description": "Engines",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified input engine",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::InputEngineDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Engine ID",
              "fullType": "uuid",
              "name": "engineId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Engine"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/engine/{engineId}"
    },
    {
      "description": "Input engine helpers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the list of available helpers for the given input engine",
          "errors": [
            "Client::ValidationError::InvalidUUID"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Engine ID",
              "fullType": "uuid",
              "name": "engineId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/engine/{engineId}/helper"
    },
    {
      "description": "Input engine helpers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified input engine helper",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::HelperDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Engine ID",
              "fullType": "uuid",
              "name": "engineId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Helper ID",
              "fullType": "uuid",
              "name": "helperId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Helper"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/input/engine/{engineId}/helper/{helperId}"
    },
    {
      "description": "Service Metrics",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns Metrics credentials",
          "errors": [
            "Client::NotFound::ServiceNotFound"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.ServiceMetric"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/metrics"
    },
    {
      "description": "Operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Latest operations",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/operation"
    },
    {
      "description": "Operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified operation",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::OperationDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Operation ID",
              "fullType": "uuid",
              "name": "operationId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/operation/{operationId}"
    },
    {
      "description": "Aliases",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias",
            "value": "DEPRECATED"
          },
          "description": "Returns the list of alias for connected user",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias",
            "value": "DEPRECATED"
          },
          "description": "Register a new elasticsearch alias",
          "errors": [
            "Client::ValidationError::InvalidNameContain",
            "Client::ValidationError::InvalidNameLenght",
            "Client::ValidationError::InvalidNameLowercase",
            "Client::ValidationError::InvalidNameMatch",
            "Client::ValidationError::InvalidNameStart",
            "Client::ValidationError::InvalidNameWhitespace",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ItemQuotaReached",
            "Client::NotFound::ClusterDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::AlreadyExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchAliasCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputElasticsearchAliasCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias"
    },
    {
      "description": "Aliases",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias",
            "value": "DEPRECATED"
          },
          "description": "Remove specified elasticsearch alias",
          "errors": [
            "Client::ValidationError::AliasHasLinkedStreams",
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias",
            "value": "DEPRECATED"
          },
          "description": "Returns specified elasticsearch alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Alias"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias",
            "value": "DEPRECATED"
          },
          "description": "Update specified elasticsearch alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::PaymentRequired::QuotaReached",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ItemQuotaReached",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchAliasUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputElasticsearchAliasUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}"
    },
    {
      "description": "AliasStreams",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index",
            "value": "DEPRECATED"
          },
          "description": "Returns the list of Elasticsearch indexes attached to specified Elasticsearch alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index",
            "value": "DEPRECATED"
          },
          "description": "Attach a elasticsearch index to specified elasticsearch alias",
          "errors": [
            "Client::ValidationError::CannotMixStreamAndIndex",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::Busy",
            "Client::Forbidden::IndexAlreadyLinked",
            "Client::Forbidden::NotOnSameCluster",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchAliasIndexCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputElasticsearchAliasIndexCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index"
    },
    {
      "description": "AliasStreams",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index",
            "value": "DEPRECATED"
          },
          "description": "Detach a elasticsearch index from specified elasticsearch alias",
          "errors": [
            "Client::ValidationError::IndexNotLinked",
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Index ID",
              "fullType": "uuid",
              "name": "indexId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}"
    },
    {
      "description": "AliasStreams",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream",
            "value": "DEPRECATED"
          },
          "description": "Returns the list of Graylog streams attached to specified Elasticsearch alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream",
            "value": "DEPRECATED"
          },
          "description": "Attach a graylog stream to specified elasticsearch alias",
          "errors": [
            "Client::ValidationError::CannotMixStreamAndIndex",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotStreamOwner",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::Busy",
            "Client::Forbidden::NotOnSameCluster",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::StreamAlreadyLinked",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchAliasStreamCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputElasticsearchAliasStreamCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream"
    },
    {
      "description": "AliasStreams",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream",
            "value": "DEPRECATED"
          },
          "description": "Detach a graylog stream from specified elasticsearch alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::StreamNotLinked",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}"
    },
    {
      "description": "AliasUrls",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/url",
            "value": "DEPRECATED"
          },
          "description": "Returns the list of urls of specified alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Url[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url"
    },
    {
      "description": "Indexes",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/index",
            "value": "DEPRECATED"
          },
          "description": "Returns the list of elasticsearch indexes",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/index",
            "value": "DEPRECATED"
          },
          "description": "Register a new elasticsearch index",
          "errors": [
            "Client::ValidationError::InvalidNameContain",
            "Client::ValidationError::InvalidNameLenght",
            "Client::ValidationError::InvalidNameLowercase",
            "Client::ValidationError::InvalidNameMatch",
            "Client::ValidationError::InvalidNameStart",
            "Client::ValidationError::InvalidNameWhitespace",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ItemQuotaReached",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::AlreadyExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchIndexCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputElasticsearchIndexCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/index"
    },
    {
      "description": "Indexes",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/index",
            "value": "DEPRECATED"
          },
          "description": "Remove specified elasticsearch index",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotOwner",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Index ID",
              "fullType": "uuid",
              "name": "indexId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/index",
            "value": "DEPRECATED"
          },
          "description": "Returns specified elasticsearch index",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Index ID",
              "fullType": "uuid",
              "name": "indexId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Index"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/index",
            "value": "DEPRECATED"
          },
          "description": "Update specified elasticsearch index",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputElasticsearchIndexUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputElasticsearchIndexUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Index ID",
              "fullType": "uuid",
              "name": "indexId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}"
    },
    {
      "description": "IndexUrls",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/index/{indexId}/url",
            "value": "DEPRECATED"
          },
          "description": "Returns the list of urls of specified index",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotOwner",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Index ID",
              "fullType": "uuid",
              "name": "indexId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Url[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url"
    },
    {
      "description": "Kibana instances",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/osd",
            "value": "DEPRECATED"
          },
          "description": "Returns the list of Kibana instances",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/osd",
            "value": "DEPRECATED"
          },
          "description": "Register a new Kibana instance",
          "errors": [
            "Client::ValidationError::ClusterWithoutFrontend",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::ItemQuotaReached",
            "Client::Forbidden::KibanaStillInDelivery",
            "Client::Forbidden::PCIDSSInputDeny",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.KibanaCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.KibanaCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/kibana"
    },
    {
      "description": "Kibana instances",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/osd",
            "value": "DEPRECATED"
          },
          "description": "Remove specified Kibana instance",
          "errors": [
            "Client::ValidationError::InvalidDeliveryStatus",
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::KibanaDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Kibana ID",
              "fullType": "uuid",
              "name": "kibanaId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/osd",
            "value": "DEPRECATED"
          },
          "description": "Returns specified Kibana instance",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::NotFound::KibanaDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Kibana ID",
              "fullType": "uuid",
              "name": "kibanaId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Kibana"
        },
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/osd",
            "value": "DEPRECATED"
          },
          "description": "Update specified Kibana instance",
          "errors": [
            "Client::ValidationError::InvalidDeliveryStatus",
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::KibanaDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.KibanaUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.KibanaUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Kibana ID",
              "fullType": "uuid",
              "name": "kibanaId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/kibana/{kibanaId}"
    },
    {
      "description": "KibanaUrls",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}/url",
            "value": "DEPRECATED"
          },
          "description": "Returns the list of urls of specified Kibana",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::KibanaDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Kibana ID",
              "fullType": "uuid",
              "name": "kibanaId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Url[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/elasticsearch/kibana/{kibanaId}/url"
    },
    {
      "description": "Dashboards",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of graylog dashboards",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a new graylog dashboard",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogDashboardCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputGraylogDashboardCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard"
    },
    {
      "description": "Dashboards",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove specified graylog dashboard",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::DashboardDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Dashboard ID",
              "fullType": "uuid",
              "name": "dashboardId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified graylog dashboard",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::DashboardDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Dashboard ID",
              "fullType": "uuid",
              "name": "dashboardId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Dashboard"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update information of specified graylog dashboard",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::DashboardDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogDashboardUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputGraylogDashboardUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Dashboard ID",
              "fullType": "uuid",
              "name": "dashboardId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}"
    },
    {
      "description": "DashboardClone",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Copy all widgets from specified dashboard to a new one",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotStreamOwner",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ItemQuotaReached",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::DashboardDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::Conflict::TitleAlreadyUsed"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogDashboardDuplicateCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputGraylogDashboardDuplicateCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Dashboard ID",
              "fullType": "uuid",
              "name": "dashboardId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate"
    },
    {
      "description": "DashboardUrls",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of urls of specified graylog dashboard",
          "errors": [
            "Client::NotFound::DashboardDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Dashboard ID",
              "fullType": "uuid",
              "name": "dashboardId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Url[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url"
    },
    {
      "description": "Streams",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of graylog streams",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a new graylog stream",
          "errors": [
            "Client::ValidationError::InvalidSubStreamParent",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::MaxEncryptionKeysPerStreamReached",
            "Client::ValidationError::OptionDisabled",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::StreamArchivesCantBeEncryptedithAdminKeyOnly",
            "Client::ValidationError::StreamRetentionMismatch",
            "Client::ValidationError::TrialErrorColdstorage",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ItemQuotaReached",
            "Client::Forbidden::PCIDSSColdStorageDeny",
            "Client::Forbidden::PCIDSSSettingOnly",
            "Client::Forbidden::ParentStreamLocked",
            "Client::Forbidden::ServiceUnavailable",
            "Client::Forbidden::SubStreamColdstorageAddRules",
            "Client::Forbidden::SubStreamColdstorageIndexingMaxSize",
            "Client::NotFound::EncryptionKeyDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::Conflict::TitleAlreadyUsed",
            "Server::NotImplemented::SubStreamColdstorage",
            "Server::NotImplemented::SubStreamColdstorageOnAccount"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogStreamCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputGraylogStreamCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream"
    },
    {
      "description": "Streams",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove specified graylog stream",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::StreamLinked",
            "Client::ValidationError::StreamLinkedToAliases",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::Forbidden::StreamDeleteDenied",
            "Client::Forbidden::StreamIsParent",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified graylog stream",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Stream"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update information of specified graylog stream",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::InvalidColdStorageRetention",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::MaxEncryptionKeysPerStreamReached",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::StreamArchivesCantBeEncryptedithAdminKeyOnly",
            "Client::ValidationError::TrialErrorColdstorage",
            "Client::ValidationError::ValueNotInList",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ItemQuotaReached",
            "Client::Forbidden::NoRuleSet",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::PCIDSSColdStorageDeny",
            "Client::Forbidden::PCIDSSSettingOnly",
            "Client::NotFound::EncryptionKeyDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::Conflict::TitleAlreadyUsed"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogStreamUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputGraylogStreamUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}"
    },
    {
      "description": "StreamAlerts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of configured alerts of specified graylog stream",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a new alert on specified graylog stream",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::InvalidAlertFieldValue",
            "Client::ValidationError::InvalidConditionType",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInList",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::Conflict::AlertAlreadyExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogStreamAlertCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputGraylogStreamAlertCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert"
    },
    {
      "description": "StreamAlerts",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove alert from specified graylog stream",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::AlertDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alert ID",
              "fullType": "uuid",
              "name": "alertId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified graylog stream alert",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::AlertDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alert ID",
              "fullType": "uuid",
              "name": "alertId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.StreamAlertCondition"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update alert information of specified graylog stream",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::InvalidConditionType",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInList",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::Conflict::AlertAlreadyExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogStreamAlertUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputGraylogStreamAlertUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Alert ID",
              "fullType": "uuid",
              "name": "alertId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}"
    },
    {
      "description": "StreamArchives",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of archives",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive"
    },
    {
      "description": "StreamArchives",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified archive",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ArchiveDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Archive ID",
              "fullType": "uuid",
              "name": "archiveId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Archive"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}"
    },
    {
      "description": "Archive encryption keys",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get the list of encryption keys used to encrypt the archive",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ArchiveDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Archive ID",
              "fullType": "uuid",
              "name": "archiveId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/encryptionKey"
    },
    {
      "description": "Streams",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a public temporary URL to access the archive",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ArchiveDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::NotFound::URLDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Archive ID",
              "fullType": "uuid",
              "name": "archiveId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.ArchiveUrl"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url"
    },
    {
      "description": "StreamRules",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of rules of specified graylog stream",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a new rule on specified graylog stream",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::InvalidFieldValue",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotASubStream",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInList",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::Forbidden::StreamLocked",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::Conflict::RuleAlreadyExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputGraylogStreamRuleCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputGraylogStreamRuleCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule"
    },
    {
      "description": "StreamRules",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove specified graylog stream rule",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotASubStream",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::NotFound::StreamRuleDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Rule ID",
              "fullType": "uuid",
              "name": "ruleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified graylog stream rule",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::NotFound::StreamRuleDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Rule ID",
              "fullType": "uuid",
              "name": "ruleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.StreamRule"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}"
    },
    {
      "description": "StreamUrls",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of urls of specified graylog stream",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Url[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url"
    },
    {
      "description": "Aliases",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of alias for connected user",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a new OpenSearch alias",
          "errors": [
            "Client::ValidationError::InvalidNameContain",
            "Client::ValidationError::InvalidNameLenght",
            "Client::ValidationError::InvalidNameLowercase",
            "Client::ValidationError::InvalidNameMatch",
            "Client::ValidationError::InvalidNameStart",
            "Client::ValidationError::InvalidNameWhitespace",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ItemQuotaReached",
            "Client::NotFound::ClusterDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::AlreadyExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputOpenSearchAliasCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputOpenSearchAliasCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/alias"
    },
    {
      "description": "Aliases",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove specified OpenSearch alias",
          "errors": [
            "Client::ValidationError::AliasHasLinkedStreams",
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns specified OpenSearch alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Alias"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update specified OpenSearch alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::PaymentRequired::QuotaReached",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ItemQuotaReached",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputOpenSearchAliasUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputOpenSearchAliasUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}"
    },
    {
      "description": "AliasStreams",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of OpenSearch indexes attached to specified OpenSearch alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Attach a OpenSearch index to specified OpenSearch alias",
          "errors": [
            "Client::ValidationError::CannotMixStreamAndIndex",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::Busy",
            "Client::Forbidden::IndexAlreadyLinked",
            "Client::Forbidden::NotOnSameCluster",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputOpenSearchAliasIndexCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputOpenSearchAliasIndexCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index"
    },
    {
      "description": "AliasStreams",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Detach a OpenSearch index from specified OpenSearch alias",
          "errors": [
            "Client::ValidationError::IndexNotLinked",
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Index ID",
              "fullType": "uuid",
              "name": "indexId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index/{indexId}"
    },
    {
      "description": "AliasStreams",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of Graylog streams attached to specified OpenSearch alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Attach a Graylog stream to specified OpenSearch alias",
          "errors": [
            "Client::ValidationError::CannotMixStreamAndIndex",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotStreamOwner",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::Busy",
            "Client::Forbidden::NotOnSameCluster",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::StreamAlreadyLinked",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputOpenSearchAliasStreamCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputOpenSearchAliasStreamCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream"
    },
    {
      "description": "AliasStreams",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Detach a Graylog stream from specified OpenSearch alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::StreamNotLinked",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Stream ID",
              "fullType": "uuid",
              "name": "streamId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream/{streamId}"
    },
    {
      "description": "AliasUrls",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of urls of specified alias",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Alias ID",
              "fullType": "uuid",
              "name": "aliasId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Url[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/url"
    },
    {
      "description": "Indexes",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of OpenSearch indexes",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a new OpenSearch index",
          "errors": [
            "Client::ValidationError::InvalidNameContain",
            "Client::ValidationError::InvalidNameLenght",
            "Client::ValidationError::InvalidNameLowercase",
            "Client::ValidationError::InvalidNameMatch",
            "Client::ValidationError::InvalidNameStart",
            "Client::ValidationError::InvalidNameWhitespace",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ItemQuotaReached",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::AlreadyExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputOpenSearchIndexCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputOpenSearchIndexCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/index"
    },
    {
      "description": "Indexes",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove specified OpenSearch index",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotOwner",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Index ID",
              "fullType": "uuid",
              "name": "indexId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns specified OpenSearch index",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Index ID",
              "fullType": "uuid",
              "name": "indexId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Index"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update specified OpenSearch index",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OutputOpenSearchIndexUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.OutputOpenSearchIndexUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Index ID",
              "fullType": "uuid",
              "name": "indexId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/index/{indexId}"
    },
    {
      "description": "IndexUrls",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of urls of specified index",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::NotOwner",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Index ID",
              "fullType": "uuid",
              "name": "indexId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Url[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/index/{indexId}/url"
    },
    {
      "description": "OpenSearch Dashboards instances",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of OpenSearch Dashboards instances",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a new OpenSearch Dashboards instance",
          "errors": [
            "Client::ValidationError::ClusterWithoutFrontend",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::ItemQuotaReached",
            "Client::Forbidden::OsdStillInDelivery",
            "Client::Forbidden::PCIDSSInputDeny",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OsdCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.OsdCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/osd"
    },
    {
      "description": "OpenSearch Dashboards instances",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove specified OpenSearch Dashboards instance",
          "errors": [
            "Client::ValidationError::InvalidDeliveryStatus",
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::OsdDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Osd ID",
              "fullType": "uuid",
              "name": "osdId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns specified OpenSearch Dashboards instance",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::NotFound::OsdDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Osd ID",
              "fullType": "uuid",
              "name": "osdId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Osd"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update specified OpenSearch Dashboards instance",
          "errors": [
            "Client::ValidationError::InvalidDeliveryStatus",
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::OsdDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.OsdUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.OsdUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Osd ID",
              "fullType": "uuid",
              "name": "osdId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}"
    },
    {
      "description": "OsdUrls",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of urls of specified OpenSearch Dashboards",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::OsdDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Osd ID",
              "fullType": "uuid",
              "name": "osdId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Url[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}/url"
    },
    {
      "description": "Roles",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of roles",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Register a new role",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::PaymentRequired::QuotaReached",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::AlreadyExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.RoleCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.RoleCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role"
    },
    {
      "description": "Roles",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove specified role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Role"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update information of specified role",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.RoleUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.RoleUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}"
    },
    {
      "description": "RoleMembers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the member list of specified role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Append user into the member list of specified role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::UserAlreadyInRole",
            "Client::Forbidden::ActionDisabledOnMySelf",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.RoleMemberCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.RoleMemberCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/member"
    },
    {
      "description": "RoleMembers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove user from the member list of specified role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::NotAMemberOfRole",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Username",
              "fullType": "string",
              "name": "username",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the member metadata",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::NotAMemberOfRole",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Username",
              "fullType": "string",
              "name": "username",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Member"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update the member metadata",
          "errors": [
            "Client::ValidationError::EmptyValue",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::ValueNotInRange",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::NotAMemberOfRole",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.RoleMemberUpdate",
              "description": "Request Body",
              "fullType": "dbaas.logs.RoleMemberUpdate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Username",
              "fullType": "string",
              "name": "username",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/member/{username}"
    },
    {
      "description": "RolePermissions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of permissions of specified role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission"
    },
    {
      "description": "RolePermissions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove specified permission",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::NotFound::PermissionDoesNotExists",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Permission ID",
              "fullType": "uuid",
              "name": "permissionId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns details of specified permission",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::PermissionDoesNotExists",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Permission ID",
              "fullType": "uuid",
              "name": "permissionId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Permission"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}"
    },
    {
      "description": "RolePermissionAlias",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Append a elasticsearch alias permission to role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::AliasDoesNotExists",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::PermissionAlreadySet"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionAliasCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.RolePermissionAliasCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/alias"
    },
    {
      "description": "RolePermissionIndex",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Append a graylog dashboard permission to role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::DashboardDoesNotExists",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::PermissionAlreadySet"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionDashboardCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.RolePermissionDashboardCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard"
    },
    {
      "description": "RolePermissionIndex",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Append a elasticsearch index permission to role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::IndexDoesNotExists",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::PermissionAlreadySet"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionIndexCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.RolePermissionIndexCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/index"
    },
    {
      "description": "RolePermissionKibana",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-04-21T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/role/{roleId}/permission/osd",
            "value": "DEPRECATED"
          },
          "description": "Append a kibana permission to role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::KibanaDoesNotExists",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::PermissionAlreadySet"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionKibanaCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.RolePermissionKibanaCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/kibana"
    },
    {
      "description": "RolePermissionOsd",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Append a OpenSearch Dashboards permission to role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::OsdDoesNotExists",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::PermissionAlreadySet"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionOsdCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.RolePermissionOsdCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/osd"
    },
    {
      "description": "RolePermissionIndex",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Append a graylog stream permission to role",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::RoleDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::StreamDoesNotExists",
            "Client::Conflict::PermissionAlreadySet"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.RolePermissionStreamCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.RolePermissionStreamCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Role ID",
              "fullType": "uuid",
              "name": "roleId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/role/{roleId}/permission/stream"
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
              "description": "The internal ID of your Logs pack",
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
              "description": "The internal ID of your Logs pack",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/serviceInfos"
    },
    {
      "description": "Tokens",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the list of service tokens",
          "errors": [
            "Client::NotFound::ServiceDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new token",
          "errors": [
            "Client::ValidationError::InvalidTokenName",
            "Client::ValidationError::InvalidUUID",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::AccessDenied",
            "Client::Forbidden::Busy",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::ClusterDoesNotExists",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::Conflict::TokenNameAlreadyUsed"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.TokenCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.TokenCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/token"
    },
    {
      "description": "Tokens",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the specified token",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::Forbidden::Busy",
            "Client::Forbidden::OnlyOwnerCanPerformAction",
            "Client::Forbidden::ServiceUnavailable",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::TokenDoesNotExists"
          ],
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Token ID",
              "fullType": "uuid",
              "name": "tokenId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns the specified token",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::ServiceDoesNotExists",
            "Client::NotFound::TokenDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Token ID",
              "fullType": "uuid",
              "name": "tokenId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Token"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/token/{tokenId}"
    },
    {
      "description": "ServiceUrls",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns platform useful urls",
          "errors": [
            "Client::NotFound::ServiceNotFound"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Url[]"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/url"
    },
    {
      "description": "ServiceChangePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Initiate a password change procedure.",
          "errors": [
            "Client::ValidationError::InvalidPassword",
            "Client::ValidationError::RequiredField",
            "Client::Forbidden::Busy",
            "Client::NotFound::ServiceNotFound"
          ],
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dbaas.logs.UserChangePasswordCreation",
              "description": "Request Body",
              "fullType": "dbaas.logs.UserChangePasswordCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Operation"
        }
      ],
      "path": "/dbaas/logs/{serviceName}/user/changePassword"
    },
    {
      "description": "Engines",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-05-17T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/input/engine",
            "value": "DEPRECATED"
          },
          "description": "Returns the list of available input engines",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dbaas/logs/input/engine"
    },
    {
      "description": "Engines",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-05-17T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/input/engine",
            "value": "DEPRECATED"
          },
          "description": "Returns details of specified input engine",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::InputEngineDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Engine ID",
              "fullType": "uuid",
              "name": "engineId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Engine"
        }
      ],
      "path": "/dbaas/logs/input/engine/{engineId}"
    },
    {
      "description": "Input engine helpers",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-05-17T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/input/engine/{engineId}/helper",
            "value": "DEPRECATED"
          },
          "description": "Return the list of available helpers for the given input engine",
          "errors": [
            "Client::ValidationError::InvalidUUID"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Engine ID",
              "fullType": "uuid",
              "name": "engineId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dbaas/logs/input/engine/{engineId}/helper"
    },
    {
      "description": "Input engine helpers",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-09-30T00:00:00+00:00",
            "deprecatedDate": "2022-05-17T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "replacement": "/dbaas/logs/{serviceName}/input/engine/{engineId}/helper",
            "value": "DEPRECATED"
          },
          "description": "Returns details of specified input engine helper",
          "errors": [
            "Client::ValidationError::InvalidUUID",
            "Client::NotFound::HelperDoesNotExists"
          ],
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Engine ID",
              "fullType": "uuid",
              "name": "engineId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Helper ID",
              "fullType": "uuid",
              "name": "helperId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dbaas.logs.Helper"
        }
      ],
      "path": "/dbaas/logs/input/engine/{engineId}/helper/{helperId}"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "dbaas.logs.Alias": {
      "description": "Alias",
      "id": "Alias",
      "namespace": "dbaas.logs",
      "properties": {
        "aliasId": {
          "canBeNull": false,
          "description": "Alias ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Input creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "Alias description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isEditable": {
          "canBeNull": false,
          "description": "Indicates if you are allowed to edit entry",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Alias name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Input last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dbaas.logs.Archive": {
      "description": "Stream archive",
      "id": "Archive",
      "namespace": "dbaas.logs",
      "properties": {
        "archiveId": {
          "canBeNull": false,
          "description": "Archive ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "createdAt": {
          "canBeNull": true,
          "description": "Create date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "filename": {
          "canBeNull": false,
          "description": "Filename",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "md5": {
          "canBeNull": false,
          "description": "MD5 checksum",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "retrievalDelay": {
          "canBeNull": false,
          "description": "Retrieval delay",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "retrievalState": {
          "canBeNull": false,
          "description": "Retrieval state",
          "fullType": "dbaas.logs.ArchiveRetrievalStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.ArchiveRetrievalStateEnum"
        },
        "sha256": {
          "canBeNull": false,
          "description": "sha256 checksum",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "File size in bytes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dbaas.logs.ArchiveRetrievalStateEnum": {
      "description": "Possible values for ArchiveRetrievalStateEnum",
      "enum": [
        "sealed",
        "unsealed",
        "unsealing"
      ],
      "enumType": "string",
      "id": "ArchiveRetrievalStateEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.ArchiveUrl": {
      "description": "Stream archive url",
      "id": "ArchiveUrl",
      "namespace": "dbaas.logs",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Temporary URL expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "Temporary URL to get archive",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.Cluster": {
      "description": "Cluster",
      "id": "Cluster",
      "namespace": "dbaas.logs",
      "properties": {
        "archiveAllowedNetworks": {
          "canBeNull": false,
          "description": "Allowed networks for ARCHIVE flow type",
          "fullType": "ipBlock[]",
          "readOnly": true,
          "required": false,
          "type": "ipBlock[]"
        },
        "clusterId": {
          "canBeNull": false,
          "description": "Cluster ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "clusterType": {
          "canBeNull": false,
          "description": "Cluster type",
          "fullType": "dbaas.logs.ClusterClusterTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.ClusterClusterTypeEnum"
        },
        "dedicatedInputPEM": {
          "canBeNull": false,
          "description": "PEM for dedicated inputs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "defaultRetentionId": {
          "canBeNull": false,
          "description": "Retention ID used by default when none is given on new stream",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "directInputAllowedNetworks": {
          "canBeNull": false,
          "description": "Allowed networks for DIRECT_INPUT flow type",
          "fullType": "ipBlock[]",
          "readOnly": true,
          "required": false,
          "type": "ipBlock[]"
        },
        "directInputPEM": {
          "canBeNull": false,
          "description": "PEM for direct inputs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostname": {
          "canBeNull": false,
          "description": "Hostname",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isDefault": {
          "canBeNull": false,
          "description": "All content generated by given service will be placed on this cluster",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isUnlocked": {
          "canBeNull": false,
          "description": "Allow given service to perform advanced operations on cluster",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "queryAllowedNetworks": {
          "canBeNull": false,
          "description": "Allowed networks for QUERY flow type",
          "fullType": "ipBlock[]",
          "readOnly": true,
          "required": false,
          "type": "ipBlock[]"
        },
        "region": {
          "canBeNull": false,
          "description": "Data center localization",
          "fullType": "dbaas.logs.ClusterRegionEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.ClusterRegionEnum"
        }
      }
    },
    "dbaas.logs.ClusterClusterTypeEnum": {
      "description": "Possible values for ClusterClusterTypeEnum",
      "enum": [
        "DEDICATED",
        "PRO",
        "TRIAL"
      ],
      "enumType": "string",
      "id": "ClusterClusterTypeEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.ClusterRegionEnum": {
      "description": "Possible values for ClusterRegionEnum",
      "enum": [
        "BHS",
        "GRA",
        "P-19",
        "RBX",
        "SBG"
      ],
      "enumType": "string",
      "id": "ClusterRegionEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.ClusterRetention": {
      "description": "Cluster retention",
      "id": "ClusterRetention",
      "namespace": "dbaas.logs",
      "properties": {
        "duration": {
          "canBeNull": true,
          "description": "Indexed duration expressed in ISO-8601 format",
          "fullType": "duration",
          "readOnly": true,
          "required": false,
          "type": "duration"
        },
        "isSupported": {
          "canBeNull": false,
          "description": "Indicates if a new stream can use it",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "retentionId": {
          "canBeNull": false,
          "description": "Retention ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        }
      }
    },
    "dbaas.logs.ClusterUpdate": {
      "description": "Cluster network acls",
      "id": "ClusterUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "archiveAllowedNetworks": {
          "canBeNull": true,
          "description": "Allowed networks for ARCHIVE flow type",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "directInputAllowedNetworks": {
          "canBeNull": true,
          "description": "Allowed networks for DIRECT_INPUT flow type",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "queryAllowedNetworks": {
          "canBeNull": true,
          "description": "Allowed networks for QUERY flow type",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        }
      }
    },
    "dbaas.logs.Dashboard": {
      "description": "Graylog dashboard",
      "id": "Dashboard",
      "namespace": "dbaas.logs",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Dashboard creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "dashboardId": {
          "canBeNull": false,
          "description": "Dashboard ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "description": {
          "canBeNull": false,
          "description": "Dashboard description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isEditable": {
          "canBeNull": false,
          "description": "Indicates if you are allowed to edit entry",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "title": {
          "canBeNull": false,
          "description": "Dashboard description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Dashboard last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dbaas.logs.DeliveryStatusEnum": {
      "description": "Possible values for DeliveryStatusEnum",
      "enum": [
        "DELETING",
        "DELIVERING",
        "READY"
      ],
      "enumType": "string",
      "id": "DeliveryStatusEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.EncryptionKey": {
      "description": "Encryption key",
      "id": "EncryptionKey",
      "namespace": "dbaas.logs",
      "properties": {
        "algorithm": {
          "canBeNull": false,
          "description": "Encryption Key algorithm",
          "fullType": "dbaas.logs.EncryptionKeyAlgorithmEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.EncryptionKeyAlgorithmEnum"
        },
        "content": {
          "canBeNull": false,
          "description": "Encryption Key content",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Encryption Key creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "encryptionKeyId": {
          "canBeNull": false,
          "description": "Encryption Key ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "fingerprint": {
          "canBeNull": false,
          "description": "Encryption Key fingerprint",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "isEditable": {
          "canBeNull": false,
          "description": "Indicates if you are allowed to edit entry",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "nbArchive": {
          "canBeNull": true,
          "description": "Number of archives encrypted with this Encryption Key",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "title": {
          "canBeNull": false,
          "description": "Encryption Key title",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "uid": {
          "canBeNull": false,
          "description": "Encryption Key user ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.EncryptionKeyAlgorithmEnum": {
      "description": "Possible values for EncryptionKeyAlgorithmEnum",
      "enum": [
        "ECC25519",
        "RSA4096"
      ],
      "enumType": "string",
      "id": "EncryptionKeyAlgorithmEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.Engine": {
      "description": "Input engine",
      "id": "Engine",
      "namespace": "dbaas.logs",
      "properties": {
        "engineId": {
          "canBeNull": false,
          "description": "Input engine ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "isDeprecated": {
          "canBeNull": false,
          "description": "Indicates if engine will soon not be supported",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Software name",
          "fullType": "dbaas.logs.EngineNameEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.EngineNameEnum"
        },
        "version": {
          "canBeNull": false,
          "description": "Software version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.EngineNameEnum": {
      "description": "Possible values for EngineNameEnum",
      "enum": [
        "FLOWGGER",
        "LOGSTASH",
        "TEST"
      ],
      "enumType": "string",
      "id": "EngineNameEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.FlowggerConfiguration": {
      "description": "Flowgger configuration",
      "id": "FlowggerConfiguration",
      "namespace": "dbaas.logs",
      "properties": {
        "logFormat": {
          "canBeNull": false,
          "description": "Type of format to decode",
          "fullType": "dbaas.logs.FlowggerConfigurationLogFormatEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.FlowggerConfigurationLogFormatEnum"
        },
        "logFraming": {
          "canBeNull": false,
          "description": "Indicates how messages are delimited",
          "fullType": "dbaas.logs.FlowggerConfigurationLogFramingEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.FlowggerConfigurationLogFramingEnum"
        }
      }
    },
    "dbaas.logs.FlowggerConfigurationLogFormatEnum": {
      "description": "Possible values for FlowggerConfigurationLogFormatEnum",
      "enum": [
        "CAPNP",
        "GELF",
        "LTSV",
        "RFC5424"
      ],
      "enumType": "string",
      "id": "FlowggerConfigurationLogFormatEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.FlowggerConfigurationLogFramingEnum": {
      "description": "Possible values for FlowggerConfigurationLogFramingEnum",
      "enum": [
        "CAPNP",
        "LINE",
        "NUL",
        "SYSLEN"
      ],
      "enumType": "string",
      "id": "FlowggerConfigurationLogFramingEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.Helper": {
      "description": "Helper",
      "id": "Helper",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Helper description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "engineId": {
          "canBeNull": false,
          "description": "Input engine UUID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "helperId": {
          "canBeNull": false,
          "description": "Helper UUID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "sections": {
          "canBeNull": false,
          "description": "Helper sections",
          "fullType": "dbaas.logs.HelperSection[]",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.HelperSection[]"
        },
        "title": {
          "canBeNull": false,
          "description": "Helper title",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.HelperSection": {
      "description": "Helper section",
      "id": "HelperSection",
      "namespace": "dbaas.logs",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Section content",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Section name",
          "fullType": "dbaas.logs.HelperSectionNameEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.HelperSectionNameEnum"
        }
      }
    },
    "dbaas.logs.HelperSectionNameEnum": {
      "description": "Possible values for HelperSectionName",
      "enum": [
        "LOGSTASH_FILTER",
        "LOGSTASH_INPUT",
        "LOGSTASH_PATTERN"
      ],
      "enumType": "string",
      "id": "HelperSectionNameEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.Index": {
      "description": "Index",
      "id": "Index",
      "namespace": "dbaas.logs",
      "properties": {
        "alertNotifyEnabled": {
          "canBeNull": true,
          "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Index creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "Index description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "indexId": {
          "canBeNull": false,
          "description": "Index ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "isEditable": {
          "canBeNull": false,
          "description": "Indicates if you are allowed to edit entry",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "maxSize": {
          "canBeNull": false,
          "description": "Maximum index size (in bytes)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Index name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nbShard": {
          "canBeNull": true,
          "description": "Number of shard",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Index last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dbaas.logs.Input": {
      "description": "Input",
      "id": "Input",
      "namespace": "dbaas.logs",
      "properties": {
        "allowedNetworks": {
          "canBeNull": true,
          "description": "IP blocks",
          "fullType": "ipBlock[]",
          "readOnly": true,
          "required": false,
          "type": "ipBlock[]"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Input creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Input description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "engineId": {
          "canBeNull": false,
          "description": "Input engine ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "exposedPort": {
          "canBeNull": true,
          "description": "Port",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostname": {
          "canBeNull": false,
          "description": "Hostname",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "inputId": {
          "canBeNull": false,
          "description": "Input ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "isRestartRequired": {
          "canBeNull": false,
          "description": "Indicate if input need to be restarted",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "nbInstance": {
          "canBeNull": true,
          "description": "Number of instance running",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "publicAddress": {
          "canBeNull": false,
          "description": "Input IP address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sslCertificate": {
          "canBeNull": false,
          "description": "Input SSL certificate",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "init: configuration required, pending: ready to start, running: available",
          "fullType": "dbaas.logs.InputStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.InputStatusEnum"
        },
        "streamId": {
          "canBeNull": false,
          "description": "Associated Graylog stream",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "title": {
          "canBeNull": false,
          "description": "Input title",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Input last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dbaas.logs.InputAction": {
      "description": "Action on input",
      "id": "InputAction",
      "namespace": "dbaas.logs",
      "properties": {
        "isAllowed": {
          "canBeNull": false,
          "description": "Indicates if action is allowed",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "Action type",
          "fullType": "dbaas.logs.InputActionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.InputActionTypeEnum"
        }
      }
    },
    "dbaas.logs.InputActionTypeEnum": {
      "description": "Possible values for InputActionTypeEnum",
      "enum": [
        "DESTROY",
        "END",
        "LOG",
        "RESTART",
        "START",
        "TEST"
      ],
      "enumType": "string",
      "id": "InputActionTypeEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.InputConfigurationFlowggerUpdate": {
      "description": "Flowgger configuration",
      "id": "InputConfigurationFlowggerUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "logFormat": {
          "canBeNull": false,
          "description": "configuration log format",
          "fullType": "dbaas.logs.FlowggerConfigurationLogFormatEnum",
          "readOnly": false,
          "required": true,
          "type": "dbaas.logs.FlowggerConfigurationLogFormatEnum"
        },
        "logFraming": {
          "canBeNull": false,
          "description": "Log framing",
          "fullType": "dbaas.logs.FlowggerConfigurationLogFramingEnum",
          "readOnly": false,
          "required": true,
          "type": "dbaas.logs.FlowggerConfigurationLogFramingEnum"
        }
      }
    },
    "dbaas.logs.InputConfigurationLogstashUpdate": {
      "description": "Logstash configuration",
      "id": "InputConfigurationLogstashUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "filterSection": {
          "canBeNull": true,
          "description": "Filter section",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "inputSection": {
          "canBeNull": false,
          "description": "Input section",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "patternSection": {
          "canBeNull": true,
          "description": "Pattern section",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.InputCreation": {
      "description": "Input configuration",
      "id": "InputCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "allowedNetworks": {
          "canBeNull": true,
          "description": "IP blocks",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "engineId": {
          "canBeNull": false,
          "description": "Engine ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        },
        "exposedPort": {
          "canBeNull": true,
          "description": "Exposed port",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nbInstance": {
          "canBeNull": true,
          "description": "Number of instance running",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "streamId": {
          "canBeNull": false,
          "description": "Stream ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        },
        "title": {
          "canBeNull": false,
          "description": "Title",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.InputStatusEnum": {
      "description": "Possible values for InputStatusEnum",
      "enum": [
        "INIT",
        "PENDING",
        "PROCESSING",
        "RUNNING"
      ],
      "enumType": "string",
      "id": "InputStatusEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.InputUpdate": {
      "description": "Input configuration update",
      "id": "InputUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "allowedNetworks": {
          "canBeNull": true,
          "description": "IP blocks",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "engineId": {
          "canBeNull": false,
          "description": "Engine ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        },
        "exposedPort": {
          "canBeNull": true,
          "description": "Exposed port",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nbInstance": {
          "canBeNull": true,
          "description": "Number of instance running",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "streamId": {
          "canBeNull": false,
          "description": "Stream ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        },
        "title": {
          "canBeNull": false,
          "description": "Title",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.Kibana": {
      "description": "Kibana instance",
      "id": "Kibana",
      "namespace": "dbaas.logs",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Kibana creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deliveryStatus": {
          "canBeNull": false,
          "description": "Status of the delivering process",
          "fullType": "dbaas.logs.DeliveryStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.DeliveryStatusEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "Kibana description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isEditable": {
          "canBeNull": false,
          "description": "Indicates if you are allowed to edit entry",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "kibanaId": {
          "canBeNull": false,
          "description": "Kibana ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": false,
          "description": "Kibana name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Kibana last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dbaas.logs.KibanaCreation": {
      "description": "New Kibana instance",
      "id": "KibanaCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.KibanaUpdate": {
      "description": "Kibana update",
      "id": "KibanaUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.LogstashConfiguration": {
      "description": "Logstash configuration",
      "id": "LogstashConfiguration",
      "namespace": "dbaas.logs",
      "properties": {
        "filterSection": {
          "canBeNull": true,
          "description": "The filter section of logstash.conf",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "inputSection": {
          "canBeNull": false,
          "description": "The filter section of logstash.conf",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "patternSection": {
          "canBeNull": true,
          "description": "The list of customs Grok patterns",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.Member": {
      "description": "Member",
      "id": "Member",
      "namespace": "dbaas.logs",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Membership creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "note": {
          "canBeNull": true,
          "description": "Custom note",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "username": {
          "canBeNull": false,
          "description": "Username on DBaaS Logs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.Operation": {
      "description": "Asynchronous operation",
      "id": "Operation",
      "namespace": "dbaas.logs",
      "properties": {
        "aliasId": {
          "canBeNull": true,
          "description": "Alias used",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Operation creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "dashboardId": {
          "canBeNull": true,
          "description": "Dashboard used",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "indexId": {
          "canBeNull": true,
          "description": "Index used",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "inputId": {
          "canBeNull": true,
          "description": "Input used",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "kibanaId": {
          "canBeNull": true,
          "description": "Kibana used (DEPRECATED: use osdId)",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "operationId": {
          "canBeNull": false,
          "description": "Operation ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "osdId": {
          "canBeNull": true,
          "description": "OpenSearch Dashboards used",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "roleId": {
          "canBeNull": true,
          "description": "Role used",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "state": {
          "canBeNull": false,
          "description": "Operation status",
          "fullType": "dbaas.logs.OperationStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.OperationStateEnum"
        },
        "streamId": {
          "canBeNull": true,
          "description": "Stream used",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Operation last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dbaas.logs.OperationStateEnum": {
      "description": "Possible values for OperationStateEnum",
      "enum": [
        "FAILURE",
        "PENDING",
        "RECEIVED",
        "RETRY",
        "REVOKED",
        "RUNNING",
        "STARTED",
        "SUCCESS"
      ],
      "enumType": "string",
      "id": "OperationStateEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.Osd": {
      "description": "OpenSearch Dashboards instance",
      "id": "Osd",
      "namespace": "dbaas.logs",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "OpenSearch Dashboards creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deliveryStatus": {
          "canBeNull": false,
          "description": "Status of the delivering process",
          "fullType": "dbaas.logs.DeliveryStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.DeliveryStatusEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "OpenSearch Dashboards description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isEditable": {
          "canBeNull": false,
          "description": "Indicates if you are allowed to edit entry",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "OpenSearch Dashboards name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "osdId": {
          "canBeNull": false,
          "description": "OpenSearch Dashboards ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "OpenSearch Dashboards last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dbaas.logs.OsdCreation": {
      "description": "Osd creation body",
      "id": "OsdCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OsdUpdate": {
      "description": "OpenSearch Dashboards update",
      "id": "OsdUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputElasticsearchAliasCreation": {
      "description": "New Elasticsearch alias",
      "id": "OutputElasticsearchAliasCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "suffix": {
          "canBeNull": false,
          "description": "Suffix",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputElasticsearchAliasIndexCreation": {
      "description": "Link given Elasticsearch index to alias",
      "id": "OutputElasticsearchAliasIndexCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "indexId": {
          "canBeNull": false,
          "description": "Index ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        }
      }
    },
    "dbaas.logs.OutputElasticsearchAliasStreamCreation": {
      "description": "Link given Graylog stream to Elasticsearch alias",
      "id": "OutputElasticsearchAliasStreamCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "streamId": {
          "canBeNull": false,
          "description": "Stream ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        }
      }
    },
    "dbaas.logs.OutputElasticsearchAliasUpdate": {
      "description": "Elasticsearch alias update",
      "id": "OutputElasticsearchAliasUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputElasticsearchIndexCreation": {
      "description": "New Elasticsearch index",
      "id": "OutputElasticsearchIndexCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "alertNotifyEnabled": {
          "canBeNull": true,
          "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "nbShard": {
          "canBeNull": true,
          "description": "Number of shard",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "suffix": {
          "canBeNull": false,
          "description": "Suffix",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputElasticsearchIndexUpdate": {
      "description": "Elasticsearch index update",
      "id": "OutputElasticsearchIndexUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "alertNotifyEnabled": {
          "canBeNull": true,
          "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputGraylogDashboardCreation": {
      "description": "New Graylog dashboard",
      "id": "OutputGraylogDashboardCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "title": {
          "canBeNull": false,
          "description": "Title",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputGraylogDashboardDuplicateCreation": {
      "description": "Clone given Graylog dashboard",
      "id": "OutputGraylogDashboardDuplicateCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "streamId": {
          "canBeNull": true,
          "description": "Stream ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": false,
          "type": "uuid"
        },
        "title": {
          "canBeNull": false,
          "description": "Title",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputGraylogDashboardUpdate": {
      "description": "Graylog dahsboard update",
      "id": "OutputGraylogDashboardUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "title": {
          "canBeNull": false,
          "description": "Title",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputGraylogStreamAlertCreation": {
      "description": "New Graylog alert",
      "id": "OutputGraylogStreamAlertCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "backlog": {
          "canBeNull": false,
          "description": "Backlog",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "conditionType": {
          "canBeNull": true,
          "description": "Condition type",
          "fullType": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamAlertConditionConditionTypeEnum"
        },
        "constraintType": {
          "canBeNull": true,
          "description": "Constraint type",
          "fullType": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamAlertConditionConstraintTypeEnum"
        },
        "field": {
          "canBeNull": true,
          "description": "Field",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "grace": {
          "canBeNull": false,
          "description": "Grace period",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "queryFilter": {
          "canBeNull": true,
          "description": "Query filter",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "repeatNotificationsEnabled": {
          "canBeNull": true,
          "description": "Repeat notifications enabled",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "threshold": {
          "canBeNull": true,
          "description": "Threshold",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "thresholdType": {
          "canBeNull": true,
          "description": "Threshold type",
          "fullType": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamAlertConditionThresholdTypeEnum"
        },
        "time": {
          "canBeNull": true,
          "description": "Time",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "title": {
          "canBeNull": false,
          "description": "Title",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "Value",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputGraylogStreamAlertUpdate": {
      "description": "Graylog alert update",
      "id": "OutputGraylogStreamAlertUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "backlog": {
          "canBeNull": false,
          "description": "Backlog",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "conditionType": {
          "canBeNull": true,
          "description": "Condition type",
          "fullType": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamAlertConditionConditionTypeEnum"
        },
        "constraintType": {
          "canBeNull": true,
          "description": "Constraint type",
          "fullType": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamAlertConditionConstraintTypeEnum"
        },
        "field": {
          "canBeNull": true,
          "description": "Field",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "grace": {
          "canBeNull": false,
          "description": "Grace period",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "queryFilter": {
          "canBeNull": true,
          "description": "Query filter",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "repeatNotificationsEnabled": {
          "canBeNull": true,
          "description": "Repeat notifications enabled",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "threshold": {
          "canBeNull": true,
          "description": "Threshold",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "thresholdType": {
          "canBeNull": true,
          "description": "Threshold type",
          "fullType": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamAlertConditionThresholdTypeEnum"
        },
        "time": {
          "canBeNull": true,
          "description": "Time",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "title": {
          "canBeNull": false,
          "description": "Title",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "Value",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputGraylogStreamCreation": {
      "description": "New Graylog stream",
      "id": "OutputGraylogStreamCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "coldStorageCompression": {
          "canBeNull": true,
          "description": "Cold storage compression",
          "fullType": "dbaas.logs.StreamColdStorageCompressionEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamColdStorageCompressionEnum"
        },
        "coldStorageContent": {
          "canBeNull": true,
          "description": "Cold storage archive content",
          "fullType": "dbaas.logs.StreamColdStorageContentEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamColdStorageContentEnum"
        },
        "coldStorageEnabled": {
          "canBeNull": true,
          "description": "Cold storage enabled",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "coldStorageNotifyEnabled": {
          "canBeNull": true,
          "description": "Cold storage notify enabled",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "coldStorageRetention": {
          "canBeNull": true,
          "description": "Cold storage retention time",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "coldStorageTarget": {
          "canBeNull": true,
          "description": "Cold storage destination",
          "fullType": "dbaas.logs.StreamColdStorageTargetEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamColdStorageTargetEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "encryptionKeysIds": {
          "canBeNull": true,
          "description": "Encryption keys used to encrypt stream archives",
          "fullType": "uuid[]",
          "readOnly": false,
          "required": false,
          "type": "uuid[]"
        },
        "indexingEnabled": {
          "canBeNull": true,
          "description": "ES indexing enabled",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "indexingMaxSize": {
          "canBeNull": true,
          "description": "Maximum indexing size (in GB)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "indexingNotifyEnabled": {
          "canBeNull": true,
          "description": "If set, notify when size is near 80, 90 or 100 % of the maximum configured setting",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "parentStreamId": {
          "canBeNull": true,
          "description": "Parent stream ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": false,
          "type": "uuid"
        },
        "pauseIndexingOnMaxSize": {
          "canBeNull": true,
          "description": "If set, pause indexing when maximum size is reach",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "retentionId": {
          "canBeNull": true,
          "description": "Retention ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": false,
          "type": "uuid"
        },
        "title": {
          "canBeNull": false,
          "description": "Title",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "webSocketEnabled": {
          "canBeNull": true,
          "description": "Web Socket enabled",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dbaas.logs.OutputGraylogStreamRuleCreation": {
      "description": "New rule on Graylog stream",
      "id": "OutputGraylogStreamRuleCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "field": {
          "canBeNull": false,
          "description": "Field name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "isInverted": {
          "canBeNull": true,
          "description": "Invert condition",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "operator": {
          "canBeNull": false,
          "description": "Field operator",
          "fullType": "dbaas.logs.StreamRuleOperatorEnum",
          "readOnly": false,
          "required": true,
          "type": "dbaas.logs.StreamRuleOperatorEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Field value",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputGraylogStreamUpdate": {
      "description": "Graylog stream update",
      "id": "OutputGraylogStreamUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "coldStorageCompression": {
          "canBeNull": true,
          "description": "Cold storage compression",
          "fullType": "dbaas.logs.StreamColdStorageCompressionEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamColdStorageCompressionEnum"
        },
        "coldStorageContent": {
          "canBeNull": true,
          "description": "Cold storage content",
          "fullType": "dbaas.logs.StreamColdStorageContentEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamColdStorageContentEnum"
        },
        "coldStorageEnabled": {
          "canBeNull": true,
          "description": "Cold storage enabled",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "coldStorageNotifyEnabled": {
          "canBeNull": true,
          "description": "Cold storage notify enabled",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "coldStorageRetention": {
          "canBeNull": true,
          "description": "Cold storage retention time",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "coldStorageTarget": {
          "canBeNull": true,
          "description": "Cold storage destination",
          "fullType": "dbaas.logs.StreamColdStorageTargetEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.StreamColdStorageTargetEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "encryptionKeysIds": {
          "canBeNull": true,
          "description": "Encryption keys used to encrypt stream archives",
          "fullType": "uuid[]",
          "readOnly": false,
          "required": false,
          "type": "uuid[]"
        },
        "indexingEnabled": {
          "canBeNull": true,
          "description": "ES indexing enabled",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "indexingMaxSize": {
          "canBeNull": true,
          "description": "Maximum indexing size (in GB)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "indexingNotifyEnabled": {
          "canBeNull": true,
          "description": "If set, notify when size is near 80, 90 or 100 % of the maximum configured setting",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "pauseIndexingOnMaxSize": {
          "canBeNull": true,
          "description": "If set, pause indexing when maximum size is reach",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "title": {
          "canBeNull": false,
          "description": "Title",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "webSocketEnabled": {
          "canBeNull": true,
          "description": "Web socket enabled",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dbaas.logs.OutputOpenSearchAliasCreation": {
      "description": "New OpenSearch alias",
      "id": "OutputOpenSearchAliasCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "suffix": {
          "canBeNull": false,
          "description": "Suffix",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputOpenSearchAliasIndexCreation": {
      "description": "Link given OpenSearch index to alias",
      "id": "OutputOpenSearchAliasIndexCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "indexId": {
          "canBeNull": false,
          "description": "Index ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        }
      }
    },
    "dbaas.logs.OutputOpenSearchAliasStreamCreation": {
      "description": "Link given Graylog stream to alias",
      "id": "OutputOpenSearchAliasStreamCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "streamId": {
          "canBeNull": false,
          "description": "Stream ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        }
      }
    },
    "dbaas.logs.OutputOpenSearchAliasUpdate": {
      "description": "OpenSearch alias update",
      "id": "OutputOpenSearchAliasUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputOpenSearchIndexCreation": {
      "description": "OpenSearch index update",
      "id": "OutputOpenSearchIndexCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "alertNotifyEnabled": {
          "canBeNull": true,
          "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "nbShard": {
          "canBeNull": true,
          "description": "Number of shard",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "suffix": {
          "canBeNull": false,
          "description": "Suffix",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.OutputOpenSearchIndexUpdate": {
      "description": "OpenSearch index update",
      "id": "OutputOpenSearchIndexUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "alertNotifyEnabled": {
          "canBeNull": true,
          "description": "If set, notify when size is near 80, 90 or 100 % of its maximum capacity",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.Permission": {
      "description": "Role permission",
      "id": "Permission",
      "namespace": "dbaas.logs",
      "properties": {
        "aliasId": {
          "canBeNull": true,
          "description": "Associated Elasticsearch alias",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "dashboardId": {
          "canBeNull": true,
          "description": "Associated Graylog dashboard",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "indexId": {
          "canBeNull": true,
          "description": "Associated Elasticsearch index",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "kibanaId": {
          "canBeNull": true,
          "description": "Associated Kibana instance (DEPRECATED: use osdId)",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "osdId": {
          "canBeNull": true,
          "description": "Associated OpenSearch Dashboards instance",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "permissionId": {
          "canBeNull": false,
          "description": "Permission ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "permissionType": {
          "canBeNull": true,
          "description": "Permission type",
          "fullType": "dbaas.logs.PermissionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.PermissionTypeEnum"
        },
        "streamId": {
          "canBeNull": true,
          "description": "Associated Graylog stream",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        }
      }
    },
    "dbaas.logs.PermissionTypeEnum": {
      "description": "Possible values for PermissionTypeEnum",
      "enum": [
        "READ_ONLY",
        "READ_WRITE"
      ],
      "enumType": "string",
      "id": "PermissionTypeEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.Role": {
      "description": "Role",
      "id": "Role",
      "namespace": "dbaas.logs",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Role creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Role description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Role name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "roleId": {
          "canBeNull": false,
          "description": "Role ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Role last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dbaas.logs.RoleCreation": {
      "description": "New role",
      "id": "RoleCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.RoleMemberCreation": {
      "description": "Add given LDP account to role",
      "id": "RoleMemberCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "note": {
          "canBeNull": true,
          "description": "Custom note",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "username": {
          "canBeNull": false,
          "description": "Username",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.RoleMemberUpdate": {
      "description": "Update given role member",
      "id": "RoleMemberUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "note": {
          "canBeNull": true,
          "description": "Custom note",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.RolePermissionAliasCreation": {
      "description": "Attach given alias to role",
      "id": "RolePermissionAliasCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "aliasId": {
          "canBeNull": false,
          "description": "Alias ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        }
      }
    },
    "dbaas.logs.RolePermissionDashboardCreation": {
      "description": "Attach given Graylog dashboard to role",
      "id": "RolePermissionDashboardCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "dashboardId": {
          "canBeNull": false,
          "description": "Dashboard ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        },
        "permissionType": {
          "canBeNull": true,
          "description": "Permission type",
          "fullType": "dbaas.logs.PermissionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.PermissionTypeEnum"
        }
      }
    },
    "dbaas.logs.RolePermissionIndexCreation": {
      "description": "Attach given index to role",
      "id": "RolePermissionIndexCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "indexId": {
          "canBeNull": false,
          "description": "Index ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        },
        "permissionType": {
          "canBeNull": true,
          "description": "Permission type",
          "fullType": "dbaas.logs.PermissionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.PermissionTypeEnum"
        }
      }
    },
    "dbaas.logs.RolePermissionKibanaCreation": {
      "description": "Attach given Kibana instance to role",
      "id": "RolePermissionKibanaCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "kibanaId": {
          "canBeNull": false,
          "description": "Kibana ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        },
        "permissionType": {
          "canBeNull": true,
          "description": "Permission type",
          "fullType": "dbaas.logs.PermissionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.PermissionTypeEnum"
        }
      }
    },
    "dbaas.logs.RolePermissionOsdCreation": {
      "description": "Attach given OpenSearch Dashboards to role",
      "id": "RolePermissionOsdCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "osdId": {
          "canBeNull": false,
          "description": "Osd ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        },
        "permissionType": {
          "canBeNull": true,
          "description": "Permission type",
          "fullType": "dbaas.logs.PermissionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dbaas.logs.PermissionTypeEnum"
        }
      }
    },
    "dbaas.logs.RolePermissionStreamCreation": {
      "description": "Attach given Graylog stream to role",
      "id": "RolePermissionStreamCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "streamId": {
          "canBeNull": false,
          "description": "Stream ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        }
      }
    },
    "dbaas.logs.RoleUpdate": {
      "description": "Role update",
      "id": "RoleUpdate",
      "namespace": "dbaas.logs",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.Service": {
      "description": "Service",
      "id": "Service",
      "namespace": "dbaas.logs",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Service creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Service custom name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isClusterOwner": {
          "canBeNull": false,
          "description": "If set, can perform extra action on cluster",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "plan": {
          "canBeNull": false,
          "description": "Service plan",
          "fullType": "dbaas.logs.ServicePlanEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.ServicePlanEnum"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Service state",
          "fullType": "dbaas.logs.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.ServiceStateEnum"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Service last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "username": {
          "canBeNull": false,
          "description": "Username on DBaaS Logs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.ServiceMetric": {
      "description": "Metrics access",
      "id": "ServiceMetric",
      "namespace": "dbaas.logs",
      "properties": {
        "host": {
          "canBeNull": false,
          "description": "Metrics server url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "token": {
          "canBeNull": false,
          "description": "Metrics credentials",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.ServicePlanEnum": {
      "description": "Possible values for ServicePlanEnum",
      "enum": [
        "ENTERPRISE",
        "STANDARD"
      ],
      "enumType": "string",
      "id": "ServicePlanEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.ServiceStateEnum": {
      "description": "Possible values for ServiceStateEnum",
      "enum": [
        "DISABLED",
        "ENABLED",
        "INIT",
        "TO_CONFIG"
      ],
      "enumType": "string",
      "id": "ServiceStateEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.Stream": {
      "description": "Graylog stream",
      "id": "Stream",
      "namespace": "dbaas.logs",
      "properties": {
        "canAlert": {
          "canBeNull": false,
          "description": "Indicates if the current user can create alert on the stream",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "coldStorageCompression": {
          "canBeNull": true,
          "description": "Cold storage compression method",
          "fullType": "dbaas.logs.StreamColdStorageCompressionEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.StreamColdStorageCompressionEnum"
        },
        "coldStorageContent": {
          "canBeNull": true,
          "description": "ColdStorage content",
          "fullType": "dbaas.logs.StreamColdStorageContentEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.StreamColdStorageContentEnum"
        },
        "coldStorageEnabled": {
          "canBeNull": true,
          "description": "Is Cold storage enabled?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "coldStorageNotifyEnabled": {
          "canBeNull": true,
          "description": "Notify on new Cold storage archive",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "coldStorageRetention": {
          "canBeNull": true,
          "description": "Cold storage retention in year",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "coldStorageTarget": {
          "canBeNull": true,
          "description": "ColdStorage destination",
          "fullType": "dbaas.logs.StreamColdStorageTargetEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.StreamColdStorageTargetEnum"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Stream creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": false,
          "description": "Stream description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "encryptionKeysIds": {
          "canBeNull": true,
          "description": "Encryption keys used to encrypt stream archives",
          "fullType": "uuid[]",
          "readOnly": true,
          "required": false,
          "type": "uuid[]"
        },
        "indexingEnabled": {
          "canBeNull": true,
          "description": "Enable ES indexing",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "indexingMaxSize": {
          "canBeNull": true,
          "description": "Maximum indexing size (in GB)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "indexingNotifyEnabled": {
          "canBeNull": true,
          "description": "If set, notify when size is near 80, 90 or 100 % of the maximum configured setting",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isEditable": {
          "canBeNull": false,
          "description": "Indicates if you are allowed to edit entry",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "nbAlertCondition": {
          "canBeNull": false,
          "description": "Number of alert condition",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "nbArchive": {
          "canBeNull": false,
          "description": "Number of coldstored archives",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "parentStreamId": {
          "canBeNull": true,
          "description": "Parent stream ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "pauseIndexingOnMaxSize": {
          "canBeNull": true,
          "description": "If set, pause indexing when maximum size is reach",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "retentionId": {
          "canBeNull": false,
          "description": "Retention ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "streamId": {
          "canBeNull": false,
          "description": "Stream ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "title": {
          "canBeNull": false,
          "description": "Stream description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Stream last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "webSocketEnabled": {
          "canBeNull": true,
          "description": "Enable Websocket",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dbaas.logs.StreamAlertCondition": {
      "description": "Alert condition",
      "id": "StreamAlertCondition",
      "namespace": "dbaas.logs",
      "properties": {
        "alertId": {
          "canBeNull": false,
          "description": "Stream alert condition ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "backlog": {
          "canBeNull": false,
          "description": "Backlog size",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "conditionType": {
          "canBeNull": true,
          "description": "Alert condition type",
          "fullType": "dbaas.logs.StreamAlertConditionConditionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.StreamAlertConditionConditionTypeEnum"
        },
        "constraintType": {
          "canBeNull": true,
          "description": "Constraint type",
          "fullType": "dbaas.logs.StreamAlertConditionConstraintTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.StreamAlertConditionConstraintTypeEnum"
        },
        "field": {
          "canBeNull": true,
          "description": "Field name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "grace": {
          "canBeNull": false,
          "description": "Grace period in minutes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "queryFilter": {
          "canBeNull": true,
          "description": "Query filter",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "repeatNotificationsEnabled": {
          "canBeNull": true,
          "description": "Repeat notifications",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "threshold": {
          "canBeNull": true,
          "description": "Threshold",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "thresholdType": {
          "canBeNull": true,
          "description": "Threshold condition",
          "fullType": "dbaas.logs.StreamAlertConditionThresholdTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.StreamAlertConditionThresholdTypeEnum"
        },
        "time": {
          "canBeNull": true,
          "description": "Time lapse in minutes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "title": {
          "canBeNull": false,
          "description": "Condition label",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "Field value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.StreamAlertConditionConditionTypeEnum": {
      "description": "Possible values for StreamAlertConditionConditionTypeEnum",
      "enum": [
        "FIELD_CONTENT_VALUE",
        "FIELD_VALUE",
        "MESSAGE_COUNT"
      ],
      "enumType": "string",
      "id": "StreamAlertConditionConditionTypeEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.StreamAlertConditionConstraintTypeEnum": {
      "description": "Possible values for StreamAlertConditionConstraintTypeEnum",
      "enum": [
        "MAX",
        "MEAN",
        "MIN",
        "STDLABEU",
        "SUM"
      ],
      "enumType": "string",
      "id": "StreamAlertConditionConstraintTypeEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.StreamAlertConditionThresholdTypeEnum": {
      "description": "Possible values for StreamAlertConditionThresholdTypeEnum",
      "enum": [
        "EQ",
        "GT",
        "GTE",
        "HIGHER",
        "LESS",
        "LOWER",
        "LT",
        "LTE",
        "MORE"
      ],
      "enumType": "string",
      "id": "StreamAlertConditionThresholdTypeEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.StreamColdStorageCompressionEnum": {
      "description": "Possible values for StreamColdStorageCompressionEnum",
      "enum": [
        "DEFLATED",
        "GZIP",
        "LZMA",
        "ZSTD"
      ],
      "enumType": "string",
      "id": "StreamColdStorageCompressionEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.StreamColdStorageContentEnum": {
      "description": "Possible values for StreamColdStorageContentEnum",
      "enum": [
        "ALL",
        "GELF",
        "PLAIN"
      ],
      "enumType": "string",
      "id": "StreamColdStorageContentEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.StreamColdStorageTargetEnum": {
      "description": "Possible values for StreamColdStorageTargetEnum",
      "enum": [
        "PCA",
        "PCI_DSS",
        "PCS"
      ],
      "enumType": "string",
      "id": "StreamColdStorageTargetEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.StreamRule": {
      "description": "Stream rule",
      "id": "StreamRule",
      "namespace": "dbaas.logs",
      "properties": {
        "field": {
          "canBeNull": false,
          "description": "Field name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isInverted": {
          "canBeNull": true,
          "description": "Invert condition",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "operator": {
          "canBeNull": true,
          "description": "Field operator",
          "fullType": "dbaas.logs.StreamRuleOperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.StreamRuleOperatorEnum"
        },
        "ruleId": {
          "canBeNull": false,
          "description": "Stream rule ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "value": {
          "canBeNull": false,
          "description": "Field value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.StreamRuleOperatorEnum": {
      "description": "Possible values for StreamRuleOperatorEnum",
      "enum": [
        "FIELD_PRESENCE",
        "GREATER_THAN",
        "MATCH_EXACTLY",
        "SMALLER_THAN"
      ],
      "enumType": "string",
      "id": "StreamRuleOperatorEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.TemporaryLogsLink": {
      "description": "Temporary url informations",
      "id": "TemporaryLogsLink",
      "namespace": "dbaas.logs",
      "properties": {
        "expirationDate": {
          "canBeNull": false,
          "description": "Temporary url expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "Temporary url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.TestResult": {
      "description": "Config test results",
      "id": "TestResult",
      "namespace": "dbaas.logs",
      "properties": {
        "stderr": {
          "canBeNull": true,
          "description": "Standard error",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "stdout": {
          "canBeNull": true,
          "description": "Standard output",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Last config test update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dbaas.logs.Token": {
      "description": "Token",
      "id": "Token",
      "namespace": "dbaas.logs",
      "properties": {
        "clusterId": {
          "canBeNull": true,
          "description": "Cluster ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Token creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "Token name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "tokenId": {
          "canBeNull": false,
          "description": "Token ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "updatedAt": {
          "canBeNull": true,
          "description": "Token last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "value": {
          "canBeNull": false,
          "description": "Token value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.TokenCreation": {
      "description": "New token",
      "id": "TokenCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "clusterId": {
          "canBeNull": true,
          "description": "Cluster ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": false,
          "description": "Token name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dbaas.logs.Update": {
      "description": "Service update",
      "id": "Update",
      "namespace": "dbaas.logs",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Service custom name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dbaas.logs.Url": {
      "description": "Web address",
      "id": "Url",
      "namespace": "dbaas.logs",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Web URI",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Service type",
          "fullType": "dbaas.logs.UrlTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dbaas.logs.UrlTypeEnum"
        }
      }
    },
    "dbaas.logs.UrlTypeEnum": {
      "description": "Possible values for UrlTypeEnum",
      "enum": [
        "CONSOLE",
        "ELASTICSEARCH_API",
        "GRAYLOG_API",
        "GRAYLOG_WEBUI",
        "HTTP_GELF",
        "HTTP_TLS_GELF",
        "KIBANA_WEBUI",
        "OPENSEARCH_API",
        "OSD_WEBUI",
        "SERVICE_DOMAIN",
        "TCP_BEATS",
        "TCP_CAP_N_PROTO",
        "TCP_GELF",
        "TCP_LTSV_LINE",
        "TCP_LTSV_NUL",
        "TCP_RFC5424",
        "TCP_TLS_BEATS",
        "TCP_TLS_CAP_N_PROTO",
        "TCP_TLS_GELF",
        "TCP_TLS_LTSV_LINE",
        "TCP_TLS_LTSV_NUL",
        "TCP_TLS_RFC5424",
        "UDP_CAP_N_PROTO",
        "UDP_GELF",
        "UDP_LTSV_LINE",
        "UDP_LTSV_NUL",
        "UDP_RFC5424",
        "WEB_SOCKET"
      ],
      "enumType": "string",
      "id": "UrlTypeEnum",
      "namespace": "dbaas.logs"
    },
    "dbaas.logs.UserChangePasswordCreation": {
      "description": "Reset service password",
      "id": "UserChangePasswordCreation",
      "namespace": "dbaas.logs",
      "properties": {
        "password": {
          "canBeNull": false,
          "description": "Password must be at least 12 characters long contain a number, an uppercase, a lowercase and a special letter",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
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
    }
  },
  "resourcePath": "/dbaas/logs"
}