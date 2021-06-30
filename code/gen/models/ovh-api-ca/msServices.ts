import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/msServices.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the MSSERVICES service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/msServices"
    },
    {
      "description": "Active Directory organizational unit",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.ActiveDirectoryOrganizationalUnit"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "msServices.ActiveDirectoryOrganizationalUnit",
              "description": "New object properties",
              "fullType": "msServices.ActiveDirectoryOrganizationalUnit",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/msServices/{serviceName}"
    },
    {
      "description": "List the msServices.Account objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Accounts associated to this Active Directory service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Filter the value of id property (like)",
              "fullType": "long",
              "name": "id",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Filter the value of userPrincipalName property (like)",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/msServices/{serviceName}/account"
    },
    {
      "description": "Active Directory Account",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Account"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "msServices.Account",
              "description": "New object properties",
              "fullType": "msServices.Account",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Change account password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "new password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/changePassword"
    },
    {
      "description": "Exchange mailbox information",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.ExchangeInformation"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "msServices.ExchangeInformation",
              "description": "New object properties",
              "fullType": "msServices.ExchangeInformation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/exchange"
    },
    {
      "description": "configure operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Configure mailbox to be operational",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.exchangeTask"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/exchange/configure"
    },
    {
      "description": "Multi Factor Authentication informations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete Multi Factor Authentication feature for this account",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.MfaInformation"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create Multi Factor Authentication for this account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/mfa"
    },
    {
      "description": "disable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Disable Multi Factor Authentication for a period of time",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Multi Factor Authentication disable period in hours",
              "fullType": "long",
              "name": "period",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/mfa/disable"
    },
    {
      "description": "enable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Enable Mfa (enabled by default when created)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/mfa/enable"
    },
    {
      "description": "reset operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Reset Multi Factor Authentication status for this account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/mfa/reset"
    },
    {
      "description": "Sharepoint account information",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.SharepointInformation"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "msServices.SharepointInformation",
              "description": "New object properties",
              "fullType": "msServices.SharepointInformation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/sharepoint"
    },
    {
      "description": "clearSpace operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "On-demand MySite clearance",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.sharepointTask"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace"
    },
    {
      "description": "configure operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Configure sharepoint account to be operational",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.sharepointTask"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure"
    },
    {
      "description": "Sync account information",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete sync account",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.SyncInformation"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create new sync account",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "msServices.SyncLicenseEnum",
              "description": "Sync account license",
              "fullType": "msServices.SyncLicenseEnum",
              "name": "license",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/sync"
    },
    {
      "description": "configure operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Configure sync account to be operational",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "User Principal Name",
              "fullType": "string",
              "name": "userPrincipalName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/account/{userPrincipalName}/sync/configure"
    },
    {
      "description": "createMfaOnAllUsers operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create Mfa on all accounts.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/createMfaOnAllUsers"
    },
    {
      "description": "Exchange service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.ExchangeService"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "msServices.ExchangeService",
              "description": "New object properties",
              "fullType": "msServices.ExchangeService",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/msServices/{serviceName}/exchange"
    },
    {
      "description": "billingMigrated operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Detects billing transition status for the service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/msServices/{serviceName}/exchange/billingMigrated"
    },
    {
      "description": "List the msServices.exchangeTask objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Pending actions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/msServices/{serviceName}/exchange/task"
    },
    {
      "description": "Exchange task details",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.exchangeTask"
        }
      ],
      "path": "/msServices/{serviceName}/exchange/task/{id}"
    },
    {
      "description": "removeMfaOnAllUsers operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Remove Mfa on all accounts.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/removeMfaOnAllUsers"
    },
    {
      "description": "Sharepoint service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.SharepointService"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "msServices.SharepointService",
              "description": "New object properties",
              "fullType": "msServices.SharepointService",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/msServices/{serviceName}/sharepoint"
    },
    {
      "description": "billingMigrated operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Detects billing transition status for the service",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean"
        }
      ],
      "path": "/msServices/{serviceName}/sharepoint/billingMigrated"
    },
    {
      "description": "license operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get active licenses for specific period of time",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "msServices.SharepointLicenseEnum",
              "description": "License type",
              "fullType": "msServices.SharepointLicenseEnum",
              "name": "license",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "msServices.LicensePeriodEnum",
              "description": "Period of time used to determine sharepoint account license statistics",
              "fullType": "msServices.LicensePeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "msServices.SharepointDailyLicense[]"
        }
      ],
      "path": "/msServices/{serviceName}/sharepoint/license"
    },
    {
      "description": "restoreAdminRights operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Restore administrator rights",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.sharepointTask"
        }
      ],
      "path": "/msServices/{serviceName}/sharepoint/restoreAdminRights"
    },
    {
      "description": "List the msServices.sharepointTask objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Pending actions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of function property (like)",
              "fullType": "string",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "msServices.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "msServices.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/msServices/{serviceName}/sharepoint/task"
    },
    {
      "description": "Sharepoint task details",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.sharepointTask"
        }
      ],
      "path": "/msServices/{serviceName}/sharepoint/task/{id}"
    },
    {
      "description": "Sync service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete sync service",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.SyncService"
        }
      ],
      "path": "/msServices/{serviceName}/sync"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Change account password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "new password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/sync/changePassword"
    },
    {
      "description": "Temporary link to ADSync software executable",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.ActiveDirectorySyncClientUrl"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Generate temporary link to ADSync software executable",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/sync/clientSoftwareURL"
    },
    {
      "description": "license operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get active licenses for specific period of time",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "msServices.SyncLicenseEnum",
              "description": "License type",
              "fullType": "msServices.SyncLicenseEnum",
              "name": "license",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "msServices.LicensePeriodEnum",
              "description": "Period of time used to determine sync account license statistics",
              "fullType": "msServices.LicensePeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "msServices.SyncDailyLicense[]"
        }
      ],
      "path": "/msServices/{serviceName}/sync/license"
    },
    {
      "description": "List the msServices.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Pending actions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "msServices.TaskFunctionEnum",
              "description": "Filter the value of function property (=)",
              "fullType": "msServices.TaskFunctionEnum",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "msServices.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "msServices.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/msServices/{serviceName}/task"
    },
    {
      "description": "Active Directory task details",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Task id",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/task/{id}"
    },
    {
      "description": "List the msServices.upnSuffix objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "active directory UPN suffix",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create new UPN suffix",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "UPN suffix to create",
              "fullType": "string",
              "name": "suffix",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        }
      ],
      "path": "/msServices/{serviceName}/upnSuffix"
    },
    {
      "description": "Active Directory UPN Suffix",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete existing UPN suffix",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "UPN suffix",
              "fullType": "string",
              "name": "suffix",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.Task"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your Active Directory organization",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "UPN suffix",
              "fullType": "string",
              "name": "suffix",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.upnSuffix"
        }
      ],
      "path": "/msServices/{serviceName}/upnSuffix/{suffix}"
    },
    {
      "description": "Operations about the SHAREPOINT service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/msServices/sharepoint"
    },
    {
      "description": "Sharepoint service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Sharepoint customer's service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "msServices.SharepointServiceInfo"
        }
      ],
      "path": "/msServices/sharepoint/{domain}"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Sharepoint customer's service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
              "description": "Sharepoint customer's service",
              "fullType": "string",
              "name": "domain",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/msServices/sharepoint/{domain}/serviceInfos"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "email.exchange.CountryCodeEnum": {
      "description": "Country Code iso",
      "enum": [
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DG",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EA",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "IC",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW"
      ],
      "enumType": "string",
      "id": "CountryCodeEnum",
      "namespace": "email.exchange"
    },
    "msServices.Account": {
      "description": "Active Directory Account",
      "id": "Account",
      "namespace": "msServices",
      "properties": {
        "SAMAccountName": {
          "canBeNull": true,
          "description": "SAM account name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": true,
          "description": "city",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "countryCode": {
          "canBeNull": true,
          "description": "Country code",
          "fullType": "email.exchange.CountryCodeEnum",
          "readOnly": false,
          "required": false,
          "type": "email.exchange.CountryCodeEnum"
        },
        "creationDate": {
          "canBeNull": true,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Account display name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "fax": {
          "canBeNull": true,
          "description": "Fax number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "firstName": {
          "canBeNull": true,
          "description": "Account first name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "guid": {
          "canBeNull": true,
          "description": "GUID for user in active directory",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "initials": {
          "canBeNull": true,
          "description": "Account initials",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "jobDepartment": {
          "canBeNull": true,
          "description": "Job Department",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "jobTitle": {
          "canBeNull": true,
          "description": "Job title",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastLogoffDate": {
          "canBeNull": true,
          "description": "Last logoff",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastLogonDate": {
          "canBeNull": true,
          "description": "Last logon",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastName": {
          "canBeNull": true,
          "description": "Account last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastUpdateDate": {
          "canBeNull": true,
          "description": "Last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "mobile": {
          "canBeNull": true,
          "description": "Mobile phone",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "office": {
          "canBeNull": true,
          "description": "Job office",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "passwordLastUpdate": {
          "canBeNull": true,
          "description": "Time of account's password last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "phone": {
          "canBeNull": true,
          "description": "Phone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "postalCode": {
          "canBeNull": true,
          "description": "Postal code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": true,
          "description": "region",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Account state",
          "fullType": "msServices.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.ObjectStateEnum"
        },
        "streetAddress": {
          "canBeNull": true,
          "description": "Street address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task for this account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "userPrincipalName": {
          "canBeNull": false,
          "description": "User Principal Name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "msServices.ActiveDirectoryOrganizationalUnit": {
      "description": "Active Directory organizational unit",
      "id": "ActiveDirectoryOrganizationalUnit",
      "namespace": "msServices",
      "properties": {
        "complexityEnabled": {
          "canBeNull": false,
          "description": "Flag indicating if passwords should be forced to follow Microsoft's password guidelines",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "lockoutDuration": {
          "canBeNull": false,
          "description": "Account lock time (in minutes) when too much passwords have been tried",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "lockoutObservationWindow": {
          "canBeNull": false,
          "description": "Time (in minutes) before the password attempts counter is reset",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "lockoutThreshold": {
          "canBeNull": true,
          "description": "Maximum number of password tries before account locking",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maxPasswordAge": {
          "canBeNull": true,
          "description": "Maximum lifespan of passwords, in days",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minPasswordAge": {
          "canBeNull": true,
          "description": "Minimum lifespan of passwords, in days (0 = unlimited)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "minPasswordLength": {
          "canBeNull": true,
          "description": "Minimum number of characters passwords must contain",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the Active Directory organizational unit",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "officeTenantServiceName": {
          "canBeNull": true,
          "description": "Service name of the office tenant (/licence/office/{serviceName}) linked to this AD service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "Current state of the Active Directory organizational unit",
          "fullType": "msServices.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.ServiceStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "msServices.ActiveDirectorySyncClientUrl": {
      "description": "Temporary link to ADSync software executable",
      "id": "ActiveDirectorySyncClientUrl",
      "namespace": "msServices",
      "properties": {
        "expiration": {
          "canBeNull": false,
          "description": "Link expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "ADSync software executable link",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "msServices.ExchangeInformation": {
      "description": "Exchange mailbox information",
      "id": "ExchangeInformation",
      "namespace": "msServices",
      "properties": {
        "accountLicense": {
          "canBeNull": false,
          "description": "Exchange account license",
          "fullType": "msServices.ExchangeLicenceEnum",
          "readOnly": false,
          "required": false,
          "type": "msServices.ExchangeLicenceEnum"
        },
        "configured": {
          "canBeNull": false,
          "description": "Indicates if the account is configured",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "creationDate": {
          "canBeNull": true,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "currentUsage": {
          "canBeNull": true,
          "description": "Mailbox usage in KB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "deleteAtExpiration": {
          "canBeNull": true,
          "description": "Delete mailbox at expiration date",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteOutlookAtExpiration": {
          "canBeNull": true,
          "description": "Delete Outlook license at expiration date",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "exchangeGuid": {
          "canBeNull": true,
          "description": "Property needed for mailbox manual configuration (GUID)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "expirationDate": {
          "canBeNull": true,
          "description": "Expiration date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "expirationOutlookDate": {
          "canBeNull": true,
          "description": "Expiration date of Outlook license",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "hiddenFromGAL": {
          "canBeNull": false,
          "description": "Visibility in Global Address List",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "Account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "litigation": {
          "canBeNull": false,
          "description": "Litigation hold feature enabled on this mailbox",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "litigationPeriod": {
          "canBeNull": true,
          "description": "Litigation hold period in days (0 means unlimited). This setting covers all items in the mailbox.",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "mailingFilter": {
          "canBeNull": true,
          "description": "Enable or disable anti-virus and anti-spam",
          "fullType": "msServices.MailingFilterEnum[]",
          "readOnly": false,
          "required": false,
          "type": "msServices.MailingFilterEnum[]"
        },
        "numberOfAliases": {
          "canBeNull": false,
          "description": "Count the number of related aliases attached to this account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "outlookLicense": {
          "canBeNull": false,
          "description": "Outlook licence attached",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "owaLimited": {
          "canBeNull": false,
          "description": "OWA policy restriction is applied",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "primaryEmailAddress": {
          "canBeNull": false,
          "description": "Primary address of the mailbox",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quota": {
          "canBeNull": false,
          "description": "Maximum mailbox usage in GB (overall size)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "renewOutlookPeriod": {
          "canBeNull": true,
          "description": "Frequency of Outlook license renewals",
          "fullType": "msServices.RenewPeriodEnum",
          "readOnly": false,
          "required": false,
          "type": "msServices.RenewPeriodEnum"
        },
        "renewPeriod": {
          "canBeNull": true,
          "description": "Frequency of mailbox license renewals",
          "fullType": "msServices.RenewPeriodEnum",
          "readOnly": false,
          "required": false,
          "type": "msServices.RenewPeriodEnum"
        },
        "spamAndVirusConfiguration": {
          "canBeNull": false,
          "description": "Spam and Antivirus configuration",
          "fullType": "msServices.SpamAndVirusConfiguration",
          "readOnly": false,
          "required": false,
          "type": "msServices.SpamAndVirusConfiguration"
        },
        "spamDetected": {
          "canBeNull": false,
          "description": "Spam activity detected on this mailbox",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "spamTicketNumber": {
          "canBeNull": true,
          "description": "Ticket number of spam detection",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Mailbox state",
          "fullType": "msServices.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task id for this account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "msServices.ExchangeLicenceEnum": {
      "description": "Exchange account licence",
      "enum": [
        "basic",
        "enterprise",
        "standard"
      ],
      "enumType": "string",
      "id": "ExchangeLicenceEnum",
      "namespace": "msServices"
    },
    "msServices.ExchangeService": {
      "description": "Exchange service",
      "id": "ExchangeService",
      "namespace": "msServices",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Service family name displayed",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "Exchange service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostname": {
          "canBeNull": true,
          "description": "Exchange service URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "maxReceiveSize": {
          "canBeNull": false,
          "description": "Maximum allowable size for received messages in MB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "maxSendSize": {
          "canBeNull": false,
          "description": "Maximum allowable size of sent messages in MB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "offer": {
          "canBeNull": false,
          "description": "Exchange service offer",
          "fullType": "msServices.ServiceOfferEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.ServiceOfferEnum"
        },
        "spamAndVirusConfiguration": {
          "canBeNull": false,
          "description": "Spam and Antivirus configuration",
          "fullType": "msServices.SpamAndVirusConfiguration",
          "readOnly": false,
          "required": false,
          "type": "msServices.SpamAndVirusConfiguration"
        },
        "sslExpirationDate": {
          "canBeNull": true,
          "description": "Expiration date of SSL certificate",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "state": {
          "canBeNull": false,
          "description": "Exchange service state",
          "fullType": "msServices.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.ServiceStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "msServices.LicensePeriodEnum": {
      "description": "Period of time used to determine license statistics",
      "enum": [
        "lastMonth",
        "lastQuarter",
        "lastWeek",
        "lastYear"
      ],
      "enumType": "string",
      "id": "LicensePeriodEnum",
      "namespace": "msServices"
    },
    "msServices.MailingFilterEnum": {
      "description": "Mailing filter options availlable",
      "enum": [
        "vaderetro"
      ],
      "enumType": "string",
      "id": "MailingFilterEnum",
      "namespace": "msServices"
    },
    "msServices.MfaInformation": {
      "description": "Multi Factor Authentication informations",
      "id": "MfaInformation",
      "namespace": "msServices",
      "properties": {
        "activated": {
          "canBeNull": false,
          "description": "Indicates if Multi Factor Authentication is activated on this account",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "state": {
          "canBeNull": false,
          "description": "Current status of Multi Factor Authentication feature",
          "fullType": "msServices.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task for Multi Factor Authentication",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "msServices.ObjectStateEnum": {
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
      "enumType": "string",
      "id": "ObjectStateEnum",
      "namespace": "msServices"
    },
    "msServices.RenewPeriodEnum": {
      "description": "Renew period",
      "enum": [
        "monthly",
        "yearly"
      ],
      "enumType": "string",
      "id": "RenewPeriodEnum",
      "namespace": "msServices"
    },
    "msServices.ServiceOfferEnum": {
      "description": "Service Offer name",
      "enum": [
        "dedicated",
        "dedicatedCluster",
        "hosted",
        "provider"
      ],
      "enumType": "string",
      "id": "ServiceOfferEnum",
      "namespace": "msServices"
    },
    "msServices.ServiceStateEnum": {
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
      "enumType": "string",
      "id": "ServiceStateEnum",
      "namespace": "msServices"
    },
    "msServices.SharepointAccountAccessRightsEnum": {
      "description": "Account access rights to the service",
      "enum": [
        "administrator",
        "user"
      ],
      "enumType": "string",
      "id": "SharepointAccountAccessRightsEnum",
      "namespace": "msServices"
    },
    "msServices.SharepointAccountLicense": {
      "description": "Sharepoint account license",
      "id": "SharepointAccountLicense",
      "namespace": "msServices",
      "properties": {
        "license": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "msServices.SharepointLicenseEnum"
        },
        "licenseQuantity": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "msServices.SharepointDailyLicense": {
      "description": "Sharepoint account license per day",
      "id": "SharepointDailyLicense",
      "namespace": "msServices",
      "properties": {
        "accountLicense": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "msServices.SharepointAccountLicense[]"
        },
        "date": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "date"
        }
      }
    },
    "msServices.SharepointInformation": {
      "description": "Sharepoint account information",
      "id": "SharepointInformation",
      "namespace": "msServices",
      "properties": {
        "accessRights": {
          "canBeNull": false,
          "description": "The rights assigned to the sharepoint account",
          "fullType": "msServices.SharepointAccountAccessRightsEnum",
          "readOnly": false,
          "required": false,
          "type": "msServices.SharepointAccountAccessRightsEnum"
        },
        "activeDirectoryAccountId": {
          "canBeNull": false,
          "description": "Active Directory Account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "configured": {
          "canBeNull": false,
          "description": "Indicates if the account is configured",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "currentUsage": {
          "canBeNull": true,
          "description": "OneDrive usage in byte",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "deleteAtExpiration": {
          "canBeNull": true,
          "description": "delete at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "Sharepoint account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "license": {
          "canBeNull": false,
          "description": "Sharepoint account license",
          "fullType": "msServices.SharepointLicenseEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.SharepointLicenseEnum"
        },
        "officeLicense": {
          "canBeNull": false,
          "description": "office license is available",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "quota": {
          "canBeNull": false,
          "description": "OneDrive maximum size in byte",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Sharepoint account state",
          "fullType": "msServices.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task for this sharepoint account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "msServices.SharepointLicenseEnum": {
      "description": "Sharepoint account license",
      "enum": [
        "foundation",
        "standard"
      ],
      "enumType": "string",
      "id": "SharepointLicenseEnum",
      "namespace": "msServices"
    },
    "msServices.SharepointService": {
      "description": "Sharepoint service",
      "id": "SharepointService",
      "namespace": "msServices",
      "properties": {
        "currentUsage": {
          "canBeNull": true,
          "description": "Shared space usage in byte",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Service family name displayed",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "Internal service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "farmUrl": {
          "canBeNull": false,
          "description": "Sharepoint farm url",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "offer": {
          "canBeNull": false,
          "description": "Sharepoint offer",
          "fullType": "msServices.SharepointServiceOfferEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.SharepointServiceOfferEnum"
        },
        "quota": {
          "canBeNull": false,
          "description": "Shared space maximum size in byte",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "state": {
          "canBeNull": false,
          "description": "Sharepoint service state",
          "fullType": "msServices.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.ServiceStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "url": {
          "canBeNull": true,
          "description": "Sharepoint url",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "msServices.SharepointServiceInfo": {
      "description": "Sharepoint service",
      "id": "SharepointServiceInfo",
      "namespace": "msServices",
      "properties": {
        "domain": {
          "canBeNull": false,
          "description": "Internal service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "msServices.SharepointServiceOfferEnum": {
      "description": "Sharepoint service offer name",
      "enum": [
        "hosted",
        "provider"
      ],
      "enumType": "string",
      "id": "SharepointServiceOfferEnum",
      "namespace": "msServices"
    },
    "msServices.SpamAndVirusConfiguration": {
      "description": "Spam and Antivirus configuration",
      "id": "SpamAndVirusConfiguration",
      "namespace": "msServices",
      "properties": {
        "checkDKIM": {
          "canBeNull": false,
          "description": "Check DKIM of message",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "checkSPF": {
          "canBeNull": false,
          "description": "Check SPF of message",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteSpam": {
          "canBeNull": false,
          "description": "If message is a spam delete it",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteVirus": {
          "canBeNull": false,
          "description": "If message is a virus delete it",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "putInJunk": {
          "canBeNull": false,
          "description": "If message is a spam or virus put in junk. Overridden by deleteSpam or deleteVirus",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "tagSpam": {
          "canBeNull": false,
          "description": "If message is a spam change its subject",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "tagVirus": {
          "canBeNull": false,
          "description": "If message is a virus change its subject",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "msServices.SyncAccountLicense": {
      "description": "Sync account license",
      "id": "SyncAccountLicense",
      "namespace": "msServices",
      "properties": {
        "license": {
          "canBeNull": false,
          "description": "the kind of license under which sync account is contracted",
          "readOnly": false,
          "required": false,
          "type": "msServices.SyncLicenseEnum"
        },
        "licenseQuantity": {
          "canBeNull": false,
          "description": "number of license instances",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "msServices.SyncDailyLicense": {
      "description": "Sync account license per day",
      "id": "SyncDailyLicense",
      "namespace": "msServices",
      "properties": {
        "accountLicense": {
          "canBeNull": false,
          "description": "sync account license usage",
          "readOnly": false,
          "required": false,
          "type": "msServices.SyncAccountLicense[]"
        },
        "date": {
          "canBeNull": false,
          "description": "the date used to determine sync account license usage",
          "readOnly": false,
          "required": false,
          "type": "date"
        }
      }
    },
    "msServices.SyncInformation": {
      "description": "Sync account information",
      "id": "SyncInformation",
      "namespace": "msServices",
      "properties": {
        "configured": {
          "canBeNull": false,
          "description": "Indicates if the account is configured",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "license": {
          "canBeNull": false,
          "description": "Sync account license",
          "fullType": "msServices.SyncLicenseEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.SyncLicenseEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "Sync account state",
          "fullType": "msServices.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task for this sync account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "msServices.SyncLicenseEnum": {
      "description": "Sync account license",
      "enum": [
        "standard",
        "standardFree"
      ],
      "enumType": "string",
      "id": "SyncLicenseEnum",
      "namespace": "msServices"
    },
    "msServices.SyncService": {
      "description": "Sync service",
      "id": "SyncService",
      "namespace": "msServices",
      "properties": {
        "state": {
          "canBeNull": false,
          "description": "Exchange service state",
          "fullType": "msServices.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.ServiceStateEnum"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Task pending id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "msServices.Task": {
      "description": "Active Directory task details",
      "id": "Task",
      "namespace": "msServices",
      "properties": {
        "finishDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "msServices.TaskFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.TaskFunctionEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "msServices.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.TaskStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "msServices.TaskFunctionEnum": {
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
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "msServices"
    },
    "msServices.TaskStatusEnum": {
      "description": "ActiveDirectory task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "msServices"
    },
    "msServices.UPNStateEnum": {
      "description": "Active Directory UPN Suffix State",
      "enum": [
        "creating",
        "deleting",
        "ok"
      ],
      "enumType": "string",
      "id": "UPNStateEnum",
      "namespace": "msServices"
    },
    "msServices.exchangeTask": {
      "description": "Exchange task details",
      "id": "exchangeTask",
      "namespace": "msServices",
      "properties": {
        "finishDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "msServices.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.TaskStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "msServices.sharepointTask": {
      "description": "Sharepoint task details",
      "id": "sharepointTask",
      "namespace": "msServices",
      "properties": {
        "finishDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "msServices.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.TaskStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "msServices.upnSuffix": {
      "description": "Active Directory UPN Suffix",
      "id": "upnSuffix",
      "namespace": "msServices",
      "properties": {
        "cnameToCheck": {
          "canBeNull": true,
          "description": "Cname record used for UPN suffix verification",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ownershipValidated": {
          "canBeNull": false,
          "description": "Ownership for upn suffix confirmed",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "state": {
          "canBeNull": false,
          "description": "UPN suffix state",
          "fullType": "msServices.UPNStateEnum",
          "readOnly": true,
          "required": false,
          "type": "msServices.UPNStateEnum"
        },
        "suffix": {
          "canBeNull": false,
          "description": "UPN suffix",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task for this upnSuffix",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
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
  "resourcePath": "/msServices"
}