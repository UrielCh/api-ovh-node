import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/msServices",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the MSSERVICES service"
    },
    {
      "path": "/msServices/sharepoint",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the SHAREPOINT service"
    },
    {
      "path": "/msServices/sharepoint/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "msServices.SharepointServiceInfo",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sharepoint service"
    },
    {
      "path": "/msServices/sharepoint/{domain}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "services.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
      "path": "/msServices/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "msServices.ActiveDirectoryOrganizationalUnit",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "msServices.ActiveDirectoryOrganizationalUnit",
              "paramType": "body",
              "fullType": "msServices.ActiveDirectoryOrganizationalUnit",
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
      "description": "Active Directory organizational unit"
    },
    {
      "path": "/msServices/{serviceName}/account",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of userPrincipalName property (like)"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of id property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Accounts associated to this Active Directory service"
        }
      ],
      "description": "List the msServices.Account objects"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.Account",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "msServices.Account",
              "paramType": "body",
              "fullType": "msServices.Account",
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
            },
            {
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Active Directory Account"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "new password"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Change account password"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/exchange",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
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
          "responseType": "msServices.ExchangeInformation",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "msServices.ExchangeInformation",
              "paramType": "body",
              "fullType": "msServices.ExchangeInformation",
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
            },
            {
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Exchange mailbox information"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/exchange/configure",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.exchangeTask",
          "noAuthentication": false,
          "description": "Configure mailbox to be operational"
        }
      ],
      "description": "configure operations"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/mfa",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Delete Multi Factor Authentication feature for this account"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.MfaInformation",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Create Multi Factor Authentication for this account"
        }
      ],
      "description": "Multi Factor Authentication informations"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/mfa/disable",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "period",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Multi Factor Authentication disable period in hours"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Disable Multi Factor Authentication for a period of time"
        }
      ],
      "description": "disable operations"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/mfa/enable",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Enable Mfa (enabled by default when created)"
        }
      ],
      "description": "enable operations"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/mfa/reset",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Reset Multi Factor Authentication status for this account"
        }
      ],
      "description": "reset operations"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/sharepoint",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
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
          "responseType": "msServices.SharepointInformation",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "msServices.SharepointInformation",
              "paramType": "body",
              "fullType": "msServices.SharepointInformation",
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
            },
            {
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Sharepoint account information"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.sharepointTask",
          "noAuthentication": false,
          "description": "On-demand MySite clearance"
        }
      ],
      "description": "clearSpace operations"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.sharepointTask",
          "noAuthentication": false,
          "description": "Configure sharepoint account to be operational"
        }
      ],
      "description": "configure operations"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/sync",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Delete sync account"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.SyncInformation",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "license",
              "dataType": "msServices.SyncLicenseEnum",
              "paramType": "body",
              "fullType": "msServices.SyncLicenseEnum",
              "required": true,
              "description": "Sync account license"
            },
            {
              "name": "serviceName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service name"
            },
            {
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Create new sync account"
        }
      ],
      "description": "Sync account information"
    },
    {
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/sync/configure",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "userPrincipalName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "User principal name"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Configure sync account to be operational"
        }
      ],
      "description": "configure operations"
    },
    {
      "path": "/msServices/{serviceName}/createMfaOnAllUsers",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Create Mfa on all accounts."
        }
      ],
      "description": "createMfaOnAllUsers operations"
    },
    {
      "path": "/msServices/{serviceName}/exchange",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "msServices.ExchangeService",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "msServices.ExchangeService",
              "paramType": "body",
              "fullType": "msServices.ExchangeService",
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
      "description": "Exchange service"
    },
    {
      "path": "/msServices/{serviceName}/exchange/billingMigrated",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Detects billing transition status for the service"
        }
      ],
      "description": "billingMigrated operations"
    },
    {
      "path": "/msServices/{serviceName}/exchange/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Pending actions"
        }
      ],
      "description": "List the msServices.exchangeTask objects"
    },
    {
      "path": "/msServices/{serviceName}/exchange/task/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "msServices.exchangeTask",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Exchange task details"
    },
    {
      "path": "/msServices/{serviceName}/removeMfaOnAllUsers",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Remove Mfa on all accounts."
        }
      ],
      "description": "removeMfaOnAllUsers operations"
    },
    {
      "path": "/msServices/{serviceName}/sharepoint",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "msServices.SharepointService",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "msServices.SharepointService",
              "paramType": "body",
              "fullType": "msServices.SharepointService",
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
      "description": "Sharepoint service"
    },
    {
      "path": "/msServices/{serviceName}/sharepoint/billingMigrated",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "boolean",
          "noAuthentication": false,
          "description": "Detects billing transition status for the service"
        }
      ],
      "description": "billingMigrated operations"
    },
    {
      "path": "/msServices/{serviceName}/sharepoint/license",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "license",
              "dataType": "msServices.SharepointLicenseEnum",
              "paramType": "query",
              "fullType": "msServices.SharepointLicenseEnum",
              "required": false,
              "description": "License type"
            },
            {
              "name": "period",
              "dataType": "msServices.LicensePeriodEnum",
              "paramType": "query",
              "fullType": "msServices.LicensePeriodEnum",
              "required": true,
              "description": "Period of time used to determine sharepoint account license statistics"
            }
          ],
          "responseType": "msServices.SharepointDailyLicense[]",
          "noAuthentication": false,
          "description": "Get active licenses for specific period of time"
        }
      ],
      "description": "license operations"
    },
    {
      "path": "/msServices/{serviceName}/sharepoint/restoreAdminRights",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "msServices.sharepointTask",
          "noAuthentication": false,
          "description": "Restore administrator rights"
        }
      ],
      "description": "restoreAdminRights operations"
    },
    {
      "path": "/msServices/{serviceName}/sharepoint/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "dataType": "msServices.TaskStatusEnum",
              "paramType": "query",
              "fullType": "msServices.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of function property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Pending actions"
        }
      ],
      "description": "List the msServices.sharepointTask objects"
    },
    {
      "path": "/msServices/{serviceName}/sharepoint/task/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "msServices.sharepointTask",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sharepoint task details"
    },
    {
      "path": "/msServices/{serviceName}/sync",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Delete sync service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "msServices.SyncService",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Sync service"
    },
    {
      "path": "/msServices/{serviceName}/sync/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "new password"
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
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Change account password"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/msServices/{serviceName}/sync/clientSoftwareURL",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "msServices.ActiveDirectorySyncClientUrl",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Generate temporary link to ADSync software executable"
        }
      ],
      "description": "Temporary link to ADSync software executable"
    },
    {
      "path": "/msServices/{serviceName}/sync/license",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "period",
              "dataType": "msServices.LicensePeriodEnum",
              "paramType": "query",
              "fullType": "msServices.LicensePeriodEnum",
              "required": true,
              "description": "Period of time used to determine sync account license statistics"
            },
            {
              "name": "license",
              "dataType": "msServices.SyncLicenseEnum",
              "paramType": "query",
              "fullType": "msServices.SyncLicenseEnum",
              "required": false,
              "description": "License type"
            }
          ],
          "responseType": "msServices.SyncDailyLicense[]",
          "noAuthentication": false,
          "description": "Get active licenses for specific period of time"
        }
      ],
      "description": "license operations"
    },
    {
      "path": "/msServices/{serviceName}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "dataType": "msServices.TaskStatusEnum",
              "paramType": "query",
              "fullType": "msServices.TaskStatusEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "dataType": "msServices.TaskFunctionEnum",
              "paramType": "query",
              "fullType": "msServices.TaskFunctionEnum",
              "required": false,
              "description": "Filter the value of function property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Pending actions"
        }
      ],
      "description": "List the msServices.Task objects"
    },
    {
      "path": "/msServices/{serviceName}/task/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Active Directory task details"
    },
    {
      "path": "/msServices/{serviceName}/upnSuffix",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
          "description": "active directory UPN suffix"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "suffix",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "UPN suffix to create"
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
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Create new UPN suffix"
        }
      ],
      "description": "List the msServices.upnSuffix objects"
    },
    {
      "path": "/msServices/{serviceName}/upnSuffix/{suffix}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "name": "suffix",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Suffix"
            }
          ],
          "responseType": "msServices.Task",
          "noAuthentication": false,
          "description": "Delete existing UPN suffix"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "suffix",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Suffix"
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
          "responseType": "msServices.upnSuffix",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Active Directory UPN Suffix"
    }
  ],
  "resourcePath": "/msServices",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "msServices.Account": {
      "id": "Account",
      "namespace": "msServices",
      "description": "Active Directory Account",
      "properties": {
        "SAMAccountName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "SAM account name",
          "required": false
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation date",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account display name",
          "required": false
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account first name",
          "required": false
        },
        "guid": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "GUID for user in active directory",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id",
          "required": true
        },
        "initials": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account initials",
          "required": false
        },
        "lastLogoffDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last logoff",
          "required": false
        },
        "lastLogonDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last logon",
          "required": false
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account last name",
          "required": false
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last update",
          "required": false
        },
        "passwordLastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time of account's password last update",
          "required": false
        },
        "state": {
          "type": "msServices.ObjectStateEnum",
          "fullType": "msServices.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task for this account",
          "required": true
        },
        "userPrincipalName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "User Principal Name",
          "required": true
        }
      }
    },
    "msServices.ActiveDirectoryOrganizationalUnit": {
      "id": "ActiveDirectoryOrganizationalUnit",
      "namespace": "msServices",
      "description": "Active Directory organizational unit",
      "properties": {
        "complexityEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Flag indicating if passwords should be forced to follow Microsoft's password guidelines",
          "required": true
        },
        "lockoutDuration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account lock time (in minutes) when too much passwords have been tried",
          "required": true
        },
        "lockoutObservationWindow": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Time (in minutes) before the password attempts counter is reset",
          "required": true
        },
        "lockoutThreshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum number of password tries before account locking",
          "required": false
        },
        "maxPasswordAge": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Maximum lifespan of passwords, in days",
          "required": false
        },
        "minPasswordAge": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Minimum lifespan of passwords, in days (0 = unlimited)",
          "required": false
        },
        "minPasswordLength": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Minimum number of characters passwords must contain",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the Active Directory organizational unit",
          "required": true
        },
        "officeTenantServiceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Service name of the office tenant (/licence/office/{serviceName}) linked to this AD service",
          "required": false
        },
        "state": {
          "type": "msServices.ServiceStateEnum",
          "fullType": "msServices.ServiceStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current state of the Active Directory organizational unit",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        }
      }
    },
    "msServices.ActiveDirectorySyncClientUrl": {
      "id": "ActiveDirectorySyncClientUrl",
      "namespace": "msServices",
      "description": "Temporary link to ADSync software executable",
      "properties": {
        "expiration": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Link expiration date",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "ADSync software executable link",
          "required": true
        }
      }
    },
    "msServices.ExchangeInformation": {
      "id": "ExchangeInformation",
      "namespace": "msServices",
      "description": "Exchange mailbox information",
      "properties": {
        "accountLicense": {
          "type": "msServices.ExchangeLicenceEnum",
          "fullType": "msServices.ExchangeLicenceEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Exchange account license",
          "required": true
        },
        "configured": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the account is configured",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation date",
          "required": false
        },
        "currentUsage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Mailbox usage in KB",
          "required": false
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Delete mailbox at expiration date",
          "required": false
        },
        "deleteOutlookAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "Delete Outlook license at expiration date",
          "required": false
        },
        "exchangeGuid": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Property needed for mailbox manual configuration (GUID)",
          "required": false
        },
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Expiration date",
          "required": false
        },
        "expirationOutlookDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Expiration date of Outlook license",
          "required": false
        },
        "hiddenFromGAL": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Visibility in Global Address List",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id",
          "required": true
        },
        "litigation": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Litigation hold feature enabled on this mailbox",
          "required": true
        },
        "litigationPeriod": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "Litigation hold period in days (0 means unlimited). This setting covers all items in the mailbox.",
          "required": false
        },
        "mailingFilter": {
          "type": "msServices.MailingFilterEnum[]",
          "fullType": "msServices.MailingFilterEnum[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Enable or disable anti-virus and anti-spam",
          "required": false
        },
        "numberOfAliases": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Count the number of related aliases attached to this account",
          "required": true
        },
        "outlookLicense": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Outlook licence attached",
          "required": true
        },
        "owaLimited": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "OWA policy restriction is applied",
          "required": true
        },
        "primaryEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Primary address of the mailbox",
          "required": true
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum mailbox usage in GB (overall size)",
          "required": true
        },
        "renewOutlookPeriod": {
          "type": "msServices.RenewPeriodEnum",
          "fullType": "msServices.RenewPeriodEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Frequency of Outlook license renewals",
          "required": false
        },
        "renewPeriod": {
          "type": "msServices.RenewPeriodEnum",
          "fullType": "msServices.RenewPeriodEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "Frequency of mailbox license renewals",
          "required": false
        },
        "spamAndVirusConfiguration": {
          "type": "msServices.SpamAndVirusConfiguration",
          "fullType": "msServices.SpamAndVirusConfiguration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Spam and Antivirus configuration",
          "required": true
        },
        "spamDetected": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Spam activity detected on this mailbox",
          "required": true
        },
        "spamTicketNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ticket number of spam detection",
          "required": false
        },
        "state": {
          "type": "msServices.ObjectStateEnum",
          "fullType": "msServices.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Mailbox state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id for this account",
          "required": true
        }
      }
    },
    "msServices.ExchangeLicenceEnum": {
      "id": "ExchangeLicenceEnum",
      "namespace": "msServices",
      "description": "Exchange account licence",
      "enum": [
        "basic",
        "enterprise",
        "standard"
      ],
      "enumType": "string"
    },
    "msServices.ExchangeService": {
      "id": "ExchangeService",
      "namespace": "msServices",
      "description": "Exchange service",
      "properties": {
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Service family name displayed",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Exchange service name",
          "required": true
        },
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Exchange service URL",
          "required": false
        },
        "maxReceiveSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum allowable size for received messages in MB",
          "required": true
        },
        "maxSendSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum allowable size of sent messages in MB",
          "required": true
        },
        "offer": {
          "type": "msServices.ServiceOfferEnum",
          "fullType": "msServices.ServiceOfferEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Exchange service offer",
          "required": true
        },
        "spamAndVirusConfiguration": {
          "type": "msServices.SpamAndVirusConfiguration",
          "fullType": "msServices.SpamAndVirusConfiguration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Spam and Antivirus configuration",
          "required": true
        },
        "sslExpirationDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": true,
          "readOnly": true,
          "description": "Expiration date of SSL certificate",
          "required": false
        },
        "state": {
          "type": "msServices.ServiceStateEnum",
          "fullType": "msServices.ServiceStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Exchange service state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        }
      }
    },
    "msServices.LicensePeriodEnum": {
      "id": "LicensePeriodEnum",
      "namespace": "msServices",
      "description": "Period of time used to determine license statistics",
      "enum": [
        "lastMonth",
        "lastQuarter",
        "lastWeek",
        "lastYear"
      ],
      "enumType": "string"
    },
    "msServices.MailingFilterEnum": {
      "id": "MailingFilterEnum",
      "namespace": "msServices",
      "description": "Mailing filter options availlable",
      "enum": [
        "vaderetro"
      ],
      "enumType": "string"
    },
    "msServices.MfaInformation": {
      "id": "MfaInformation",
      "namespace": "msServices",
      "description": "Multi Factor Authentication informations",
      "properties": {
        "activated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if Multi Factor Authentication is activated on this account",
          "required": true
        },
        "state": {
          "type": "msServices.ObjectStateEnum",
          "fullType": "msServices.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current status of Multi Factor Authentication feature",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task for Multi Factor Authentication",
          "required": true
        }
      }
    },
    "msServices.ObjectStateEnum": {
      "id": "ObjectStateEnum",
      "namespace": "msServices",
      "description": "Current object state",
      "enum": [
        "creating",
        "deleting",
        "modifying",
        "ok",
        "reopening",
        "suspended",
        "suspending"
      ],
      "enumType": "string"
    },
    "msServices.RenewPeriodEnum": {
      "id": "RenewPeriodEnum",
      "namespace": "msServices",
      "description": "Renew period",
      "enum": [
        "monthly",
        "yearly"
      ],
      "enumType": "string"
    },
    "msServices.ServiceOfferEnum": {
      "id": "ServiceOfferEnum",
      "namespace": "msServices",
      "description": "Service Offer name",
      "enum": [
        "dedicated",
        "dedicatedCluster",
        "hosted",
        "provider"
      ],
      "enumType": "string"
    },
    "msServices.ServiceStateEnum": {
      "id": "ServiceStateEnum",
      "namespace": "msServices",
      "description": "Service State",
      "enum": [
        "creating",
        "deleting",
        "inMaintenance",
        "ok",
        "reopening",
        "suspended",
        "suspending"
      ],
      "enumType": "string"
    },
    "msServices.SharepointAccountAccessRightsEnum": {
      "id": "SharepointAccountAccessRightsEnum",
      "namespace": "msServices",
      "description": "Account access rights to the service",
      "enum": [
        "administrator",
        "user"
      ],
      "enumType": "string"
    },
    "msServices.SharepointAccountLicense": {
      "id": "SharepointAccountLicense",
      "namespace": "msServices",
      "description": "Sharepoint account license",
      "properties": {
        "license": {
          "type": "msServices.SharepointLicenseEnum",
          "fullType": "msServices.SharepointLicenseEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "licenseQuantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "msServices.SharepointDailyLicense": {
      "id": "SharepointDailyLicense",
      "namespace": "msServices",
      "description": "Sharepoint account license per day",
      "properties": {
        "accountLicense": {
          "type": "msServices.SharepointAccountLicense[]",
          "fullType": "msServices.SharepointAccountLicense[]",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "date": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "msServices.SharepointInformation": {
      "id": "SharepointInformation",
      "namespace": "msServices",
      "description": "Sharepoint account information",
      "properties": {
        "accessRights": {
          "type": "msServices.SharepointAccountAccessRightsEnum",
          "fullType": "msServices.SharepointAccountAccessRightsEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "The rights assigned to the sharepoint account",
          "required": true
        },
        "activeDirectoryAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Active Directory Account id",
          "required": true
        },
        "configured": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the account is configured",
          "required": true
        },
        "currentUsage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "OneDrive usage in byte",
          "required": false
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "delete at expiration",
          "required": false
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sharepoint account id",
          "required": true
        },
        "license": {
          "type": "msServices.SharepointLicenseEnum",
          "fullType": "msServices.SharepointLicenseEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sharepoint account license",
          "required": true
        },
        "officeLicense": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "office license is available",
          "required": true
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "OneDrive maximum size in byte",
          "required": true
        },
        "state": {
          "type": "msServices.ObjectStateEnum",
          "fullType": "msServices.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sharepoint account state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task for this sharepoint account",
          "required": true
        }
      }
    },
    "msServices.SharepointLicenseEnum": {
      "id": "SharepointLicenseEnum",
      "namespace": "msServices",
      "description": "Sharepoint account license",
      "enum": [
        "foundation",
        "standard"
      ],
      "enumType": "string"
    },
    "msServices.SharepointService": {
      "id": "SharepointService",
      "namespace": "msServices",
      "description": "Sharepoint service",
      "properties": {
        "currentUsage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Shared space usage in byte",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Service family name displayed",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Internal service name",
          "required": true
        },
        "farmUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sharepoint farm url",
          "required": true
        },
        "offer": {
          "type": "msServices.SharepointServiceOfferEnum",
          "fullType": "msServices.SharepointServiceOfferEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sharepoint offer",
          "required": true
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Shared space maximum size in byte",
          "required": true
        },
        "state": {
          "type": "msServices.ServiceStateEnum",
          "fullType": "msServices.ServiceStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sharepoint service state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Sharepoint url",
          "required": false
        }
      }
    },
    "msServices.SharepointServiceInfo": {
      "id": "SharepointServiceInfo",
      "namespace": "msServices",
      "description": "Sharepoint service",
      "properties": {
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Internal service name",
          "required": true
        }
      }
    },
    "msServices.SharepointServiceOfferEnum": {
      "id": "SharepointServiceOfferEnum",
      "namespace": "msServices",
      "description": "Sharepoint service offer name",
      "enum": [
        "hosted",
        "provider"
      ],
      "enumType": "string"
    },
    "msServices.SpamAndVirusConfiguration": {
      "id": "SpamAndVirusConfiguration",
      "namespace": "msServices",
      "description": "Spam and Antivirus configuration",
      "properties": {
        "checkDKIM": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Check DKIM of message",
          "required": true
        },
        "checkSPF": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Check SPF of message",
          "required": true
        },
        "deleteSpam": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a spam delete it",
          "required": true
        },
        "deleteVirus": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a virus delete it",
          "required": true
        },
        "putInJunk": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a spam or virus put in junk. Overridden by deleteSpam or deleteVirus",
          "required": true
        },
        "tagSpam": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a spam change its subject",
          "required": true
        },
        "tagVirus": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a virus change its subject",
          "required": true
        }
      }
    },
    "msServices.SyncAccountLicense": {
      "id": "SyncAccountLicense",
      "namespace": "msServices",
      "description": "Sync account license",
      "properties": {
        "license": {
          "type": "msServices.SyncLicenseEnum",
          "fullType": "msServices.SyncLicenseEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "the kind of license under which sync account is contracted",
          "required": true
        },
        "licenseQuantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "number of license instances",
          "required": true
        }
      }
    },
    "msServices.SyncDailyLicense": {
      "id": "SyncDailyLicense",
      "namespace": "msServices",
      "description": "Sync account license per day",
      "properties": {
        "accountLicense": {
          "type": "msServices.SyncAccountLicense[]",
          "fullType": "msServices.SyncAccountLicense[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "sync account license usage",
          "required": true
        },
        "date": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": false,
          "description": "the date used to determine sync account license usage",
          "required": true
        }
      }
    },
    "msServices.SyncInformation": {
      "id": "SyncInformation",
      "namespace": "msServices",
      "description": "Sync account information",
      "properties": {
        "configured": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the account is configured",
          "required": true
        },
        "license": {
          "type": "msServices.SyncLicenseEnum",
          "fullType": "msServices.SyncLicenseEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sync account license",
          "required": true
        },
        "state": {
          "type": "msServices.ObjectStateEnum",
          "fullType": "msServices.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Sync account state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task for this sync account",
          "required": true
        }
      }
    },
    "msServices.SyncLicenseEnum": {
      "id": "SyncLicenseEnum",
      "namespace": "msServices",
      "description": "Sync account license",
      "enum": [
        "standard",
        "standardFree"
      ],
      "enumType": "string"
    },
    "msServices.SyncService": {
      "id": "SyncService",
      "namespace": "msServices",
      "description": "Sync service",
      "properties": {
        "state": {
          "type": "msServices.ServiceStateEnum",
          "fullType": "msServices.ServiceStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Exchange service state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        }
      }
    },
    "msServices.Task": {
      "id": "Task",
      "namespace": "msServices",
      "description": "Active Directory task details",
      "properties": {
        "finishDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "function": {
          "type": "msServices.TaskFunctionEnum",
          "fullType": "msServices.TaskFunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function name",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task id",
          "required": true
        },
        "status": {
          "type": "msServices.TaskStatusEnum",
          "fullType": "msServices.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        }
      }
    },
    "msServices.TaskFunctionEnum": {
      "id": "TaskFunctionEnum",
      "namespace": "msServices",
      "description": "function enumeration for Active Directory task",
      "enum": [
        "activateADSync",
        "activateSharepoint",
        "addADAccount",
        "addADOU",
        "addADSyncAccount",
        "addADUPNSuffix",
        "alterMfaOnAllUsers",
        "changeADPassword",
        "changeADSyncPassword",
        "deactivateADSync",
        "delADOU",
        "deleteADAccount",
        "deleteADSyncAccount",
        "deleteADUPNSuffix",
        "disableADAccountMfa",
        "disableADAccountMfaTemporary",
        "enableADAccountMfa",
        "enableADSyncAccount",
        "generateADSyncClientUrl",
        "resetADAccountMfa",
        "setADAccount",
        "setPasswordPolicy"
      ],
      "enumType": "string"
    },
    "msServices.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "msServices",
      "description": "ActiveDirectory task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "msServices.UPNStateEnum": {
      "id": "UPNStateEnum",
      "namespace": "msServices",
      "description": "Active Directory UPN Suffix State",
      "enum": [
        "creating",
        "deleting",
        "ok"
      ],
      "enumType": "string"
    },
    "msServices.exchangeTask": {
      "id": "exchangeTask",
      "namespace": "msServices",
      "description": "Exchange task details",
      "properties": {
        "finishDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function name",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task id",
          "required": true
        },
        "status": {
          "type": "msServices.TaskStatusEnum",
          "fullType": "msServices.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        }
      }
    },
    "msServices.sharepointTask": {
      "id": "sharepointTask",
      "namespace": "msServices",
      "description": "Sharepoint task details",
      "properties": {
        "finishDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function name",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task id",
          "required": true
        },
        "status": {
          "type": "msServices.TaskStatusEnum",
          "fullType": "msServices.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        }
      }
    },
    "msServices.upnSuffix": {
      "id": "upnSuffix",
      "namespace": "msServices",
      "description": "Active Directory UPN Suffix",
      "properties": {
        "cnameToCheck": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Cname record used for UPN suffix verification",
          "required": false
        },
        "ownershipValidated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Ownership for upn suffix confirmed",
          "required": true
        },
        "state": {
          "type": "msServices.UPNStateEnum",
          "fullType": "msServices.UPNStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "UPN suffix state",
          "required": true
        },
        "suffix": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "UPN suffix",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task for this upnSuffix",
          "required": true
        }
      }
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