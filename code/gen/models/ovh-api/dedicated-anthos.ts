import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/dedicated/anthos.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available regions and versions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "dedicated.anthos.Capabilities"
        }
      ],
      "path": "/dedicated/anthos/capabilities"
    },
    {
      "description": "Dedicated Anthos Tenant",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List your Anthos tenants",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dedicated/anthos/tenants"
    },
    {
      "description": "Dedicated Anthos Tenant",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get an Anthos tenant",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.Tenant"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Edit an Anthos tenant",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.anthos.Tenant",
              "description": "Request Body",
              "fullType": "dedicated.anthos.Tenant",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.Tenant"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}"
    },
    {
      "description": "Dedicated Anthos Tenant's baremetal servers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List baremetal servers",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/baremetals"
    },
    {
      "description": "Dedicated Anthos Tenant's baremetal servers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a baremetal server",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Baremetal ID",
              "fullType": "uuid",
              "name": "baremetalId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.Baremetal"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Edit a baremetal server",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.anthos.Baremetal",
              "description": "Request Body",
              "fullType": "dedicated.anthos.Baremetal",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Baremetal ID",
              "fullType": "uuid",
              "name": "baremetalId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.Baremetal"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/baremetals/{baremetalId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reinstall a baremetal server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Baremetal ID",
              "fullType": "uuid",
              "name": "baremetalId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.Baremetal"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/baremetals/{baremetalId}/actions/reinstall"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restart a baremetal server",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Baremetal ID",
              "fullType": "uuid",
              "name": "baremetalId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.Baremetal"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/baremetals/{baremetalId}/actions/restart"
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
              "description": "ID of Anthos tenant",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "/all"
          ]
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/changeContact"
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
              "description": "ID of Anthos tenant",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "/all"
          ]
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/confirmTermination"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset and return tenant admin access",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.TenantAccess"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/credentials/reset"
    },
    {
      "description": "Private IPs management",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List private IP ranges",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
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
          "description": "Create a new private IP range",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.anthos.PrivateAddressRange",
              "description": "Request Body",
              "fullType": "dedicated.anthos.PrivateAddressRange",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.PrivateAddressRange"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/ips/private"
    },
    {
      "description": "Private IPs management",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a private IP range",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Range ID",
              "fullType": "string",
              "name": "rangeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a private IP range",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Range ID",
              "fullType": "string",
              "name": "rangeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.PrivateAddressRange"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/ips/private/{rangeId}"
    },
    {
      "description": "Public IPs management",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List public IP ranges",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "uuid[]"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/ips/public"
    },
    {
      "description": "Public IPs management",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a public IP range",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Range ID",
              "fullType": "uuid",
              "name": "rangeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.PublicAddressRange"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/ips/public/{rangeId}"
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
              "description": "ID of Anthos tenant",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "/all"
          ]
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
              "description": "ID of Anthos tenant",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "/all"
          ]
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/serviceInfos"
    },
    {
      "description": "Storage Virtual Machines management",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List SVMs",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
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
          "description": "Create a new SVM",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.anthos.StorageVM",
              "description": "Request Body",
              "fullType": "dedicated.anthos.StorageVM",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.StorageVM"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/storage/netapp/svms"
    },
    {
      "description": "Storage Virtual Machines management",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a SVM",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Storage vm ID",
              "fullType": "uuid",
              "name": "storageVmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a SVM",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Storage vm ID",
              "fullType": "uuid",
              "name": "storageVmId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.StorageVM"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/storage/netapp/svms/{storageVmId}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get total storage usage",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Service name",
              "fullType": "uuid",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.anthos.Usage"
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/storage/netapp/usage"
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
              "description": "ID of Anthos tenant",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "/all"
          ]
        }
      ],
      "path": "/dedicated/anthos/tenants/{serviceName}/terminate"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "dedicated.anthos.Baremetal": {
      "description": "Baremetal",
      "id": "Baremetal",
      "namespace": "dedicated.anthos",
      "properties": {
        "additional": {
          "canBeNull": false,
          "description": "Defines if the baremetal comes from the base pack or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "Baremetal identifier",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": false,
          "description": "Baremetal name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "privateIp": {
          "canBeNull": false,
          "description": "Baremetal private IP",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "profile": {
          "canBeNull": false,
          "description": "Baremetal profile",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "rack": {
          "canBeNull": false,
          "description": "Baremetal rack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Baremetal service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "stateful": {
          "canBeNull": false,
          "description": "Defines if the baremetal is stateful",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "status": {
          "canBeNull": false,
          "description": "Baremetal status",
          "fullType": "dedicated.anthos.BaremetalStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.anthos.BaremetalStatusEnum"
        }
      }
    },
    "dedicated.anthos.BaremetalStatusEnum": {
      "description": "Baremetal Status",
      "enum": [
        "BAREMETAL_STATUS_UNSPECIFIED",
        "BAREMETAL_STATUS_DELIVERING",
        "BAREMETAL_STATUS_AVAILABLE",
        "BAREMETAL_STATUS_IN_USE",
        "BAREMETAL_STATUS_IN_MAINTENANCE",
        "BAREMETAL_STATUS_SUPPRESSING",
        "BAREMETAL_STATUS_RESTARTING"
      ],
      "enumType": "string",
      "id": "BaremetalStatusEnum",
      "namespace": "dedicated.anthos"
    },
    "dedicated.anthos.Capabilities": {
      "description": "Capabilities Response",
      "id": "Capabilities",
      "namespace": "dedicated.anthos",
      "properties": {
        "regions": {
          "canBeNull": false,
          "description": "Available Anthos regions for a cluster",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "versions": {
          "canBeNull": false,
          "description": "Available Anthos versions for a cluster",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "dedicated.anthos.IpRestrictionUpsert": {
      "description": "IpRestrictionUpsert",
      "id": "IpRestrictionUpsert",
      "namespace": "dedicated.anthos",
      "properties": {
        "ips": {
          "canBeNull": true,
          "description": "List of ips blocks to add to the Anthos restrictions",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        }
      }
    },
    "dedicated.anthos.NetappAccess": {
      "description": "NetappAccess",
      "id": "NetappAccess",
      "namespace": "dedicated.anthos",
      "properties": {
        "accessUrl": {
          "canBeNull": false,
          "description": "Netapp access URL",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        }
      }
    },
    "dedicated.anthos.PrivateAddressRange": {
      "description": "PrivateAddressRange",
      "id": "PrivateAddressRange",
      "namespace": "dedicated.anthos",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Address range identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "inUse": {
          "canBeNull": false,
          "description": "Indicates if the Private Address Range is available",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "range": {
          "canBeNull": false,
          "description": "Address range (can be an IP range or a CIDR)",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.anthos.PublicAddressRange": {
      "description": "PublicAddressRange",
      "id": "PublicAddressRange",
      "namespace": "dedicated.anthos",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Public Address range identifier",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "inUse": {
          "canBeNull": false,
          "description": "Indicates if the Public Address range is in use",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "range": {
          "canBeNull": false,
          "description": "Public address range (can be an IP range or a CIDR)",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Public Address range service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.anthos.Storage": {
      "description": "Storage Cluster",
      "id": "Storage",
      "namespace": "dedicated.anthos",
      "properties": {
        "accessUrl": {
          "canBeNull": false,
          "description": "Storage Cluster access URL",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "type": {
          "canBeNull": false,
          "description": "Storage Cluster type",
          "fullType": "dedicated.anthos.StorageTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.anthos.StorageTypeEnum"
        }
      }
    },
    "dedicated.anthos.StorageTypeEnum": {
      "description": "Storage Cluster Type",
      "enum": [
        "STORAGE_TYPE_UNSPECIFIED",
        "STORAGE_TYPE_NETAPP"
      ],
      "enumType": "string",
      "id": "StorageTypeEnum",
      "namespace": "dedicated.anthos"
    },
    "dedicated.anthos.StorageVM": {
      "description": "Storage Virtual Machine",
      "id": "StorageVM",
      "namespace": "dedicated.anthos",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "The Storage Virtual Machine description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "The Storage Virtual Machine identifier",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": false,
          "description": "The Storage Virtual Machine name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "size": {
          "canBeNull": false,
          "description": "The Storage Virtual Machine size (in MB)",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "state": {
          "canBeNull": false,
          "description": "The Storage Virtual Machine state",
          "fullType": "dedicated.anthos.StorageVMStateEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.anthos.StorageVMStateEnum"
        }
      }
    },
    "dedicated.anthos.StorageVMStateEnum": {
      "description": "Storage Virtual Machine state",
      "enum": [
        "STORAGE_VMSTATE_UNSPECIFIED",
        "STORAGE_VMSTATE_INITIALIZING",
        "STORAGE_VMSTATE_STARTING",
        "STORAGE_VMSTATE_RUNNING",
        "STORAGE_VMSTATE_STOPPING",
        "STORAGE_VMSTATE_STOPPED",
        "STORAGE_VMSTATE_DELETING"
      ],
      "enumType": "string",
      "id": "StorageVMStateEnum",
      "namespace": "dedicated.anthos"
    },
    "dedicated.anthos.Tenant": {
      "description": "Tenant",
      "id": "Tenant",
      "namespace": "dedicated.anthos",
      "properties": {
        "accessUrl": {
          "canBeNull": false,
          "description": "Tenant access URL",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "description": {
          "canBeNull": false,
          "description": "Tenant description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Tenant identifier",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "location": {
          "canBeNull": false,
          "description": "Tenant region",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Tenant name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Service Name identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": true,
          "description": "Tenant status",
          "fullType": "dedicated.anthos.TenantStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.anthos.TenantStatusEnum"
        },
        "storage": {
          "canBeNull": true,
          "description": "Tenant storage cluster",
          "fullType": "dedicated.anthos.Storage",
          "readOnly": true,
          "required": false,
          "type": "dedicated.anthos.Storage"
        },
        "version": {
          "canBeNull": false,
          "description": "Tenant version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vrackId": {
          "canBeNull": false,
          "description": "Tenant vrack identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.anthos.TenantAccess": {
      "description": "TenantAccess",
      "id": "TenantAccess",
      "namespace": "dedicated.anthos",
      "properties": {
        "accessUrl": {
          "canBeNull": false,
          "description": "Tenant access URL",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        }
      }
    },
    "dedicated.anthos.TenantStatusEnum": {
      "description": "Tenant status",
      "enum": [
        "TENANT_STATUS_UNSPECIFIED",
        "TENANT_STATUS_UPGRADING",
        "TENANT_STATUS_READY",
        "TENANT_STATUS_ERROR"
      ],
      "enumType": "string",
      "id": "TenantStatusEnum",
      "namespace": "dedicated.anthos"
    },
    "dedicated.anthos.UpgradeAnthosRequest": {
      "description": "Upgrade Anthos version for the tenant",
      "id": "UpgradeAnthosRequest",
      "namespace": "dedicated.anthos",
      "properties": {
        "version": {
          "canBeNull": false,
          "description": "Desired Anthos version for the upgrade",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.anthos.Usage": {
      "description": "Usage",
      "id": "Usage",
      "namespace": "dedicated.anthos",
      "properties": {
        "reservedSize": {
          "canBeNull": false,
          "description": "The total reserved size (in MB) for tenant's internal usage",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "totalSize": {
          "canBeNull": false,
          "description": "The total size available (in MB)",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "usedSize": {
          "canBeNull": false,
          "description": "The total storage size used (in MB)",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "dedicated.anthos.VersionInfo": {
      "description": "Anthos version informations",
      "id": "VersionInfo",
      "namespace": "dedicated.anthos",
      "properties": {
        "changelogLink": {
          "canBeNull": false,
          "description": "Link to the version's changelog",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "latest": {
          "canBeNull": false,
          "description": "Indicates if this version is the latest",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "version": {
          "canBeNull": false,
          "description": "Anthos version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
  "resourcePath": "/dedicated/anthos"
}