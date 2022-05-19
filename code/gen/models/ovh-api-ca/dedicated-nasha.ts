import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/dedicated/nasha.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the STORAGE service",
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
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha"
    },
    {
      "description": "Storage nas HA",
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
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasha.Storage",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
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
              "dataType": "dedicated.nasha.Storage",
              "description": "New object properties",
              "fullType": "dedicated.nasha.Storage",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}"
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
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/changeContact"
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
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/confirmTermination"
    },
    {
      "description": "List the dedicated.nasha.Partition objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get partition list",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new partition",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Partition name",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.storage.ProtocolEnum",
              "description": "NFS|CIFS|NFS_CIFS",
              "fullType": "dedicated.storage.ProtocolEnum",
              "name": "protocol",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Partition size",
              "fullType": "long",
              "name": "size",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition"
    },
    {
      "description": "Storage zpool partition",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this partition",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        },
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
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasha.Partition",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
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
              "dataType": "dedicated.nasha.Partition",
              "description": "New object properties",
              "fullType": "dedicated.nasha.Partition",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}"
    },
    {
      "description": "List the dedicated.nasha.Access objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "get ACL for this partition",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipBlock[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a new ACL entry",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Ip or block to add",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "dedicated.storage.AclTypeEnum",
              "description": "ACL type",
              "fullType": "dedicated.storage.AclTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/access"
    },
    {
      "description": "Define Acl for partition",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an ACL entry",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "the ip in root on storage",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        },
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
              "dataType": "ipBlock",
              "description": "the ip in root on storage",
              "fullType": "ipBlock",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasha.Access",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}"
    },
    {
      "description": "authorizableBlocks operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all RIPE/ARIN blocks that can be used in the ACL",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipBlock[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks"
    },
    {
      "description": "authorizableIps operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all IPs that can be used in the ACL",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps"
    },
    {
      "description": "List the dedicated.nasha.customSnap objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get custom snapshots for this partition",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create a new snapshot",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "optional expiration date/time, in iso8601 format",
              "fullType": "string",
              "name": "expiration",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "the name of the snapshot",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot"
    },
    {
      "description": "Custom Snapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete a given snapshot",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "name of the snapshot",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
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
              "description": "name of the snapshot",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasha.customSnap",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}"
    },
    {
      "description": "Partition options",
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
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasha.options",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Setup options",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.storage.AtimeEnum",
              "description": "atime setting",
              "fullType": "dedicated.storage.AtimeEnum",
              "name": "atime",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicated.storage.RecordSizeEnum",
              "description": "ZFS recordsize",
              "fullType": "dedicated.storage.RecordSizeEnum",
              "name": "recordsize",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "dedicated.storage.SyncEnum",
              "description": "sync setting",
              "fullType": "dedicated.storage.SyncEnum",
              "name": "sync",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/options"
    },
    {
      "description": "List the dedicated.nasha.Quota objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get quota for this partition",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Set a new quota",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "the size to set in MB",
              "fullType": "long",
              "name": "size",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "the uid to set quota on",
              "fullType": "long",
              "name": "uid",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/quota"
    },
    {
      "description": "Partition Quota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a given quota",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "the uid to set quota on",
              "fullType": "long",
              "name": "uid",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        },
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
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "the uid to set quota on",
              "fullType": "long",
              "name": "uid",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasha.Quota",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}"
    },
    {
      "description": "List the dedicated.nasha.Snapshot objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get scheduled snapshot types for this partition",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.storage.SnapshotEnum[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Schedule a new snapshot type",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.storage.SnapshotEnum",
              "description": "Snapshot interval to add",
              "fullType": "dedicated.storage.SnapshotEnum",
              "name": "snapshotType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot"
    },
    {
      "description": "Partition Snapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a given snapshot",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.storage.SnapshotEnum",
              "description": "the interval of snapshot",
              "fullType": "dedicated.storage.SnapshotEnum",
              "name": "snapshotType",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        },
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
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.storage.SnapshotEnum",
              "description": "the interval of snapshot",
              "fullType": "dedicated.storage.SnapshotEnum",
              "name": "snapshotType",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasha.Snapshot",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}"
    },
    {
      "description": "use operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return statistics about the partition",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "the given name of partition",
              "fullType": "string",
              "name": "partitionName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.storage.PartitionUsageTypeEnum",
              "description": "The type of statistic to be fetched",
              "fullType": "dedicated.storage.PartitionUsageTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "complexType.UnitAndValue<double>",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/partition/{partitionName}/use"
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
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
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
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/serviceInfos"
    },
    {
      "description": "List the dedicated.nasTask.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "View task list",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.storage.TaskFunctionEnum",
              "description": "Filter the value of operation property (=)",
              "fullType": "dedicated.storage.TaskFunctionEnum",
              "name": "operation",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "dedicated.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/task"
    },
    {
      "description": "Storage task",
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
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "id of the task",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/task/{taskId}"
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
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/terminate"
    },
    {
      "description": "use operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return statistics about the nas",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.storage.NasUsageTypeEnum",
              "description": "The type of statistic to be fetched",
              "fullType": "dedicated.storage.NasUsageTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "complexType.UnitAndValue<double>",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/use"
    },
    {
      "description": "Partition Vrack",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the vrack container",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your storage",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.nasTask.Task",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/{serviceName}/vrack"
    },
    {
      "description": "Get availabilities of nasha offer",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get availabilities of nasha offer",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "dedicated.NasHAAvailabilities[]",
          "scopes": [
            "all",
            "product/dedicated-nasha/all"
          ]
        }
      ],
      "path": "/dedicated/nasha/availabilities"
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
    "dedicated.NasHAAvailabilities": {
      "description": "ovh Nas HA offer availabilities",
      "id": "NasHAAvailabilities",
      "namespace": "dedicated",
      "properties": {
        "datacenters": {
          "canBeNull": false,
          "description": "Zone of the DC",
          "readOnly": false,
          "required": false,
          "type": "dedicated.NasHAAvailabilityDatacenter[]"
        },
        "offer": {
          "canBeNull": false,
          "description": "Name of the offer",
          "readOnly": false,
          "required": false,
          "type": "dedicated.NasHAOfferEnum"
        }
      }
    },
    "dedicated.NasHAAvailabilityDatacenter": {
      "description": "A structure describing the availability of offer for each datacenter",
      "id": "NasHAAvailabilityDatacenter",
      "namespace": "dedicated",
      "properties": {
        "availability": {
          "canBeNull": false,
          "description": "The availability",
          "readOnly": false,
          "required": false,
          "type": "dedicated.NasHAAvailabilityEnum"
        },
        "datacenter": {
          "canBeNull": false,
          "description": "The code of the datacenter",
          "readOnly": false,
          "required": false,
          "type": "dedicated.NasHAZoneEnum"
        }
      }
    },
    "dedicated.NasHAAvailabilityEnum": {
      "description": "The availability",
      "enum": [
        "1H",
        "240H",
        "24H",
        "72H",
        "unknown"
      ],
      "enumType": "string",
      "id": "NasHAAvailabilityEnum",
      "namespace": "dedicated"
    },
    "dedicated.NasHAOfferEnum": {
      "description": "ovh Nas HA offer",
      "enum": [
        "1200g",
        "13200g",
        "19200g",
        "2400g",
        "26400g",
        "3600g",
        "7200g"
      ],
      "enumType": "string",
      "id": "NasHAOfferEnum",
      "namespace": "dedicated"
    },
    "dedicated.NasHAZoneEnum": {
      "description": "Nas HA localization",
      "enum": [
        "bhs",
        "rbx",
        "sbg"
      ],
      "enumType": "string",
      "id": "NasHAZoneEnum",
      "namespace": "dedicated"
    },
    "dedicated.TaskStatusEnum": {
      "description": "different task status",
      "enum": [
        "cancelled",
        "customerError",
        "doing",
        "done",
        "init",
        "ovhError",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "dedicated"
    },
    "dedicated.nasTask.Task": {
      "description": "Storage task",
      "id": "Task",
      "namespace": "dedicated.nasTask",
      "properties": {
        "details": {
          "canBeNull": true,
          "description": "information about operation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "the date when the task finished",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "last modification of task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "operation": {
          "canBeNull": false,
          "description": "Task type of operation",
          "fullType": "dedicated.storage.TaskFunctionEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.storage.TaskFunctionEnum"
        },
        "partitionName": {
          "canBeNull": true,
          "description": "name of the partition",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "The actual state of the task",
          "fullType": "dedicated.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TaskStatusEnum"
        },
        "storageName": {
          "canBeNull": true,
          "description": "the name of your service",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "taskId": {
          "canBeNull": false,
          "description": "id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "todoDate": {
          "canBeNull": true,
          "description": "Insertion of task in the todo",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "dedicated.nasha.Access": {
      "description": "Define Acl for partition",
      "id": "Access",
      "namespace": "dedicated.nasha",
      "properties": {
        "accessId": {
          "canBeNull": false,
          "description": "the id of the access",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ip": {
          "canBeNull": false,
          "description": "the ip in root on storage",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "type": {
          "canBeNull": false,
          "description": "ACL type",
          "fullType": "dedicated.storage.AclTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.storage.AclTypeEnum"
        }
      }
    },
    "dedicated.nasha.Partition": {
      "description": "Storage zpool partition",
      "id": "Partition",
      "namespace": "dedicated.nasha",
      "properties": {
        "partitionCapacity": {
          "canBeNull": true,
          "description": "percentage of partition space used in %",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "partitionName": {
          "canBeNull": false,
          "description": "the given name of partition",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "protocol": {
          "canBeNull": false,
          "description": "must be nfs cifs or both",
          "fullType": "dedicated.storage.ProtocolEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.storage.ProtocolEnum"
        },
        "size": {
          "canBeNull": false,
          "description": "Partition size",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "usedBySnapshots": {
          "canBeNull": true,
          "description": "percentage of partition space used by snapshots, in %",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.nasha.Quota": {
      "description": "Partition Quota",
      "id": "Quota",
      "namespace": "dedicated.nasha",
      "properties": {
        "size": {
          "canBeNull": false,
          "description": "the size to set in MB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "uid": {
          "canBeNull": false,
          "description": "the uid to set quota on",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.nasha.Snapshot": {
      "description": "Partition Snapshot",
      "id": "Snapshot",
      "namespace": "dedicated.nasha",
      "properties": {
        "snapshotType": {
          "canBeNull": false,
          "description": "the interval of snapshot",
          "fullType": "dedicated.storage.SnapshotEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.storage.SnapshotEnum"
        }
      }
    },
    "dedicated.nasha.Storage": {
      "description": "Storage nas HA",
      "id": "Storage",
      "namespace": "dedicated.nasha",
      "properties": {
        "canCreatePartition": {
          "canBeNull": false,
          "description": "True, if partition creation is allowed on this nas HA",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "customName": {
          "canBeNull": true,
          "description": "The name you give to the nas",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "datacenter": {
          "canBeNull": true,
          "description": "area of nas",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "diskType": {
          "canBeNull": false,
          "description": "the disk type of the nasHa",
          "fullType": "dedicated.storage.DiskTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.storage.DiskTypeEnum"
        },
        "ip": {
          "canBeNull": true,
          "description": "Access ip of nas",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "monitored": {
          "canBeNull": false,
          "description": "Send an email to customer if any issue is detected",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "The storage service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "zpoolCapacity": {
          "canBeNull": false,
          "description": "percentage of nas space used in %",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "zpoolSize": {
          "canBeNull": false,
          "description": "the size of the nas",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.nasha.Vrack": {
      "description": "Partition Vrack",
      "id": "Vrack",
      "namespace": "dedicated.nasha",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serviceIp": {
          "canBeNull": false,
          "description": "service ip",
          "fullType": "ipInterface",
          "readOnly": true,
          "required": false,
          "type": "ipInterface"
        },
        "type": {
          "canBeNull": false,
          "description": "type of",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "vrackName": {
          "canBeNull": false,
          "description": "vrack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.nasha.customSnap": {
      "description": "Custom Snapshot",
      "id": "customSnap",
      "namespace": "dedicated.nasha",
      "properties": {
        "expiration": {
          "canBeNull": true,
          "description": "date and time at which snapshot will be automatically destroyed",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "name of the snapshot",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.nasha.options": {
      "description": "Partition options",
      "id": "options",
      "namespace": "dedicated.nasha",
      "properties": {
        "atime": {
          "canBeNull": false,
          "description": "atime setting",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "ID",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "recordsize": {
          "canBeNull": false,
          "description": "ZFS recordsize",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "sync": {
          "canBeNull": false,
          "description": "sync setting",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.storage.AclTypeEnum": {
      "description": "Acl Type",
      "enum": [
        "readonly",
        "readwrite"
      ],
      "enumType": "string",
      "id": "AclTypeEnum",
      "namespace": "dedicated.storage"
    },
    "dedicated.storage.AtimeEnum": {
      "description": "Atime values",
      "enum": [
        "off",
        "on"
      ],
      "enumType": "string",
      "id": "AtimeEnum",
      "namespace": "dedicated.storage"
    },
    "dedicated.storage.DiskTypeEnum": {
      "description": "the disk type of the nasHa",
      "enum": [
        "hdd",
        "nvme",
        "ssd"
      ],
      "enumType": "string",
      "id": "DiskTypeEnum",
      "namespace": "dedicated.storage"
    },
    "dedicated.storage.NasUsageTypeEnum": {
      "description": "Available types for NAS usage",
      "enum": [
        "size",
        "used",
        "usedbysnapshots"
      ],
      "enumType": "string",
      "id": "NasUsageTypeEnum",
      "namespace": "dedicated.storage"
    },
    "dedicated.storage.PartitionUsageTypeEnum": {
      "description": "Available types for NAS partition usage",
      "enum": [
        "size",
        "used",
        "usedbysnapshots"
      ],
      "enumType": "string",
      "id": "PartitionUsageTypeEnum",
      "namespace": "dedicated.storage"
    },
    "dedicated.storage.ProtocolEnum": {
      "description": "Partition Protocol",
      "enum": [
        "CIFS",
        "NFS",
        "NFS_CIFS"
      ],
      "enumType": "string",
      "id": "ProtocolEnum",
      "namespace": "dedicated.storage"
    },
    "dedicated.storage.RecordSizeEnum": {
      "description": "Recordsize values",
      "enum": [
        "131072",
        "16384",
        "32768",
        "4096",
        "65536",
        "8192"
      ],
      "enumType": "string",
      "id": "RecordSizeEnum",
      "namespace": "dedicated.storage"
    },
    "dedicated.storage.SnapshotEnum": {
      "description": "Partition snapshot allowed ",
      "enum": [
        "day-1",
        "day-2",
        "day-3",
        "day-7",
        "hour-1",
        "hour-6"
      ],
      "enumType": "string",
      "id": "SnapshotEnum",
      "namespace": "dedicated.storage"
    },
    "dedicated.storage.SyncEnum": {
      "description": "Sync values",
      "enum": [
        "always",
        "disabled",
        "standard"
      ],
      "enumType": "string",
      "id": "SyncEnum",
      "namespace": "dedicated.storage"
    },
    "dedicated.storage.TaskFunctionEnum": {
      "description": "Distincts task",
      "enum": [
        "backupRecursiveDestroy",
        "clusterLeclercAclUpdate",
        "clusterLeclercChangeServiceIp",
        "clusterLeclercCustomSnapCreate",
        "clusterLeclercCustomSnapDelete",
        "clusterLeclercDeleteSnapshotDirectory",
        "clusterLeclercDestroyNasContainer",
        "clusterLeclercPartitionAdd",
        "clusterLeclercPartitionDelete",
        "clusterLeclercPartitionUpdate",
        "clusterLeclercQuotaUpdate",
        "clusterLeclercSetupNasContainer",
        "clusterLeclercSnapshotUpdate",
        "clusterLeclercZfsOptions",
        "nasAclUpdate",
        "nasDeleteSnapshotDirectory",
        "nasPartitionAdd",
        "nasPartitionDelete",
        "nasPartitionUpdate",
        "nasQuotaUpdate",
        "remoteBackupRecursiveDestroy"
      ],
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "dedicated.storage"
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
  "resourcePath": "/dedicated/nasha"
}