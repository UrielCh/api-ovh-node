import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/storage.json

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
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "storage.NetAppService[]",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service details",
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
          "responseType": "storage.NetAppService",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update service",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppServiceUpdate",
              "description": "Request Body",
              "fullType": "storage.NetAppServiceUpdate",
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
          "responseType": "storage.NetAppService",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}"
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
              "description": "The netapp storage id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/changeContact"
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
              "description": "The netapp storage id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/confirmTermination"
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
              "description": "The netapp storage id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/storage/all"
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
              "description": "The netapp storage id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/serviceInfos"
    },
    {
      "description": "Share",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available shares",
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
              "dataType": "boolean",
              "description": "Get detailed information about each share",
              "fullType": "boolean",
              "name": "detail",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "storage.NetAppShare[]",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a share",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppShare",
              "description": "Request Body",
              "fullType": "storage.NetAppShare",
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
          "responseType": "storage.NetAppShare",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share"
    },
    {
      "description": "Share",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a share",
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
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get share details",
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
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShare",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update a share",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppShareUpdate",
              "description": "Request Body",
              "fullType": "storage.NetAppShareUpdate",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShare",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}"
    },
    {
      "description": "Share Access Path",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available access paths",
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
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShareAccessPath[]",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}/accessPath"
    },
    {
      "description": "Share Access Path",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get access path details",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Access path ID",
              "fullType": "uuid",
              "name": "accessPathId",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShareAccessPath",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}/accessPath/{accessPathId}"
    },
    {
      "description": "Share ACL",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available ACLs",
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
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShareACLRule[]",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create an ACL",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppShareACLRule",
              "description": "Request Body",
              "fullType": "storage.NetAppShareACLRule",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShareACLRule",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}/acl"
    },
    {
      "description": "Share ACL",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete an ACL",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Acl rule ID",
              "fullType": "uuid",
              "name": "aclRuleId",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get ACL details",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Acl rule ID",
              "fullType": "uuid",
              "name": "aclRuleId",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShareACLRule",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}"
    },
    {
      "description": "Share Extend",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Extend share size",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppShareExtendOrShrink",
              "description": "Request Body",
              "fullType": "storage.NetAppShareExtendOrShrink",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}/extend"
    },
    {
      "description": "Share Shrink",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Shrink share size",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppShareExtendOrShrink",
              "description": "Request Body",
              "fullType": "storage.NetAppShareExtendOrShrink",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}/shrink"
    },
    {
      "description": "Share Snapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available snapshots",
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
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Get detailed information about each snapshot",
              "fullType": "boolean",
              "name": "detail",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "storage.NetAppShareSnapshot[]",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a snapshot",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppShareSnapshot",
              "description": "Request Body",
              "fullType": "storage.NetAppShareSnapshot",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShareSnapshot",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}/snapshot"
    },
    {
      "description": "Share Snapshot",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a snapshot",
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
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Snapshot ID",
              "fullType": "uuid",
              "name": "snapshotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get snapshot details",
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
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Snapshot ID",
              "fullType": "uuid",
              "name": "snapshotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShareSnapshot",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update a snapshot",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppShareSnapshotUpdate",
              "description": "Request Body",
              "fullType": "storage.NetAppShareSnapshotUpdate",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "uuid",
              "description": "Snapshot ID",
              "fullType": "uuid",
              "name": "snapshotId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShareSnapshot",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}"
    },
    {
      "description": "Share snapshot policy",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get snapshot policy used by a share",
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
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShareSnapshotPolicy",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update snapshot policy used by a share",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppShareSnapshotPolicyUpdate",
              "description": "Request Body",
              "fullType": "storage.NetAppShareSnapshotPolicyUpdate",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}/snapshotPolicy"
    },
    {
      "description": "Share snapshot reserve properties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get snapshot reserve properties of a share",
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
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppShareSnapshotReserve",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update snapshot reserve properties of a share",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppShareSnapshotReserveUpdate",
              "description": "Request Body",
              "fullType": "storage.NetAppShareSnapshotReserveUpdate",
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
            },
            {
              "dataType": "uuid",
              "description": "Share ID",
              "fullType": "uuid",
              "name": "shareId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/share/{shareId}/snapshotReserve"
    },
    {
      "description": "A snapshot policy",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get a list of snapshot policies",
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
          "responseType": "storage.NetAppSnapshotPolicy[]",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a snapshot policy",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppSnapshotPolicy",
              "description": "Request Body",
              "fullType": "storage.NetAppSnapshotPolicy",
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
          "responseType": "storage.NetAppSnapshotPolicy",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/snapshotPolicy"
    },
    {
      "description": "A snapshot policy",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete a snapshot policy",
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
              "description": "Snapshot policy ID",
              "fullType": "uuid",
              "name": "snapshotPolicyId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get snapshot policy details",
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
              "description": "Snapshot policy ID",
              "fullType": "uuid",
              "name": "snapshotPolicyId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "storage.NetAppSnapshotPolicy",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update a snapshot policy",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "storage.NetAppSnapshotPolicyUpdate",
              "description": "Request Body",
              "fullType": "storage.NetAppSnapshotPolicyUpdate",
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
            },
            {
              "dataType": "uuid",
              "description": "Snapshot policy ID",
              "fullType": "uuid",
              "name": "snapshotPolicyId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/snapshotPolicy/{snapshotPolicyId}"
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
              "description": "The netapp storage id",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/storage/all"
          ]
        }
      ],
      "path": "/storage/netapp/{serviceName}/terminate"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
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
    },
    "storage.NetAppService": {
      "description": "A service",
      "id": "NetAppService",
      "namespace": "storage",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Service creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Service ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": false,
          "description": "Service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "performanceLevel": {
          "canBeNull": false,
          "description": "Service performance level",
          "fullType": "storage.NetAppServicePerformanceLevelEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.NetAppServicePerformanceLevelEnum"
        },
        "product": {
          "canBeNull": false,
          "description": "Product name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quota": {
          "canBeNull": false,
          "description": "Service quota",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "region": {
          "canBeNull": false,
          "description": "Service region",
          "fullType": "storage.RegionEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.RegionEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Service status",
          "fullType": "storage.NetAppServiceStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.NetAppServiceStatusEnum"
        }
      }
    },
    "storage.NetAppServicePerformanceLevelEnum": {
      "description": "Service performance level",
      "enum": [
        "premium"
      ],
      "enumType": "string",
      "id": "NetAppServicePerformanceLevelEnum",
      "namespace": "storage"
    },
    "storage.NetAppServiceStatusEnum": {
      "description": "Service status",
      "enum": [
        "creating",
        "deleted",
        "deleting",
        "reopening",
        "running",
        "suspended",
        "suspending"
      ],
      "enumType": "string",
      "id": "NetAppServiceStatusEnum",
      "namespace": "storage"
    },
    "storage.NetAppServiceUpdate": {
      "description": "Service updatable properties",
      "id": "NetAppServiceUpdate",
      "namespace": "storage",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "New service name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "storage.NetAppShare": {
      "description": "A share",
      "id": "NetAppShare",
      "namespace": "storage",
      "properties": {
        "createdAt": {
          "canBeNull": true,
          "description": "Share creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "Share description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Share ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": true,
          "description": "Share name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "protocol": {
          "canBeNull": true,
          "description": "Share protocol",
          "fullType": "storage.ProtocolEnum",
          "readOnly": false,
          "required": true,
          "type": "storage.ProtocolEnum"
        },
        "size": {
          "canBeNull": true,
          "description": "Share size in Gigabytes",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "status": {
          "canBeNull": true,
          "description": "Share status",
          "fullType": "storage.NetAppShareStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.NetAppShareStatusEnum"
        }
      }
    },
    "storage.NetAppShareACLPermissionEnum": {
      "description": "ACL permission",
      "enum": [
        "ro",
        "rw"
      ],
      "enumType": "string",
      "id": "NetAppShareACLPermissionEnum",
      "namespace": "storage"
    },
    "storage.NetAppShareACLRule": {
      "description": "A share ACL rule",
      "id": "NetAppShareACLRule",
      "namespace": "storage",
      "properties": {
        "accessLevel": {
          "canBeNull": true,
          "description": "Rule access level",
          "fullType": "storage.NetAppShareACLPermissionEnum",
          "readOnly": false,
          "required": true,
          "type": "storage.NetAppShareACLPermissionEnum"
        },
        "accessTo": {
          "canBeNull": true,
          "description": "Rule destination",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "accessType": {
          "canBeNull": true,
          "description": "Rule access type",
          "fullType": "storage.NetAppShareACLTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.NetAppShareACLTypeEnum"
        },
        "createdAt": {
          "canBeNull": true,
          "description": "Rule creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Rule ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "status": {
          "canBeNull": true,
          "description": "Rule status",
          "fullType": "storage.NetAppShareACLStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.NetAppShareACLStatusEnum"
        }
      }
    },
    "storage.NetAppShareACLStatusEnum": {
      "description": "ACL status",
      "enum": [
        "active",
        "applying",
        "denying",
        "error",
        "queued_to_apply",
        "queued_to_deny"
      ],
      "enumType": "string",
      "id": "NetAppShareACLStatusEnum",
      "namespace": "storage"
    },
    "storage.NetAppShareACLTypeEnum": {
      "description": "ACL type",
      "enum": [
        "ip"
      ],
      "enumType": "string",
      "id": "NetAppShareACLTypeEnum",
      "namespace": "storage"
    },
    "storage.NetAppShareAccessPath": {
      "description": "A share access path",
      "id": "NetAppShareAccessPath",
      "namespace": "storage",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Access path ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "path": {
          "canBeNull": false,
          "description": "Access path",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "preferred": {
          "canBeNull": false,
          "description": "Is this the preferred access path?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "storage.NetAppShareExtendOrShrink": {
      "description": "A share",
      "id": "NetAppShareExtendOrShrink",
      "namespace": "storage",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Share ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "size": {
          "canBeNull": true,
          "description": "Share size in Gigabytes",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "storage.NetAppShareSnapshot": {
      "description": "A share snapshot",
      "id": "NetAppShareSnapshot",
      "namespace": "storage",
      "properties": {
        "createdAt": {
          "canBeNull": true,
          "description": "Snapshot creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "Snapshot description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Snapshot ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "name": {
          "canBeNull": true,
          "description": "Snapshot name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "path": {
          "canBeNull": true,
          "description": "Snapshot path",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": true,
          "description": "Snapshot status",
          "fullType": "storage.NetAppSnapshotStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.NetAppSnapshotStatusEnum"
        },
        "type": {
          "canBeNull": true,
          "description": "Snapshot type",
          "fullType": "storage.NetAppSnapshotTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.NetAppSnapshotTypeEnum"
        }
      }
    },
    "storage.NetAppShareSnapshotPolicy": {
      "description": "A snapshot policy",
      "id": "NetAppShareSnapshotPolicy",
      "namespace": "storage",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Snapshot policy ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "status": {
          "canBeNull": false,
          "description": "Association status between the share and the snapshot policy",
          "fullType": "storage.NetAppShareSnapshotPolicyStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.NetAppShareSnapshotPolicyStatusEnum"
        }
      }
    },
    "storage.NetAppShareSnapshotPolicyStatusEnum": {
      "description": "Association status between the share and the snapshot policy",
      "enum": [
        "active",
        "error",
        "updating"
      ],
      "enumType": "string",
      "id": "NetAppShareSnapshotPolicyStatusEnum",
      "namespace": "storage"
    },
    "storage.NetAppShareSnapshotPolicyUpdate": {
      "description": "A snapshot policy",
      "id": "NetAppShareSnapshotPolicyUpdate",
      "namespace": "storage",
      "properties": {
        "snapshotPolicyID": {
          "canBeNull": false,
          "description": "Snapshot policy ID",
          "fullType": "uuid",
          "readOnly": false,
          "required": true,
          "type": "uuid"
        }
      }
    },
    "storage.NetAppShareSnapshotReserve": {
      "description": "Snapshot reserve properties",
      "id": "NetAppShareSnapshotReserve",
      "namespace": "storage",
      "properties": {
        "percent": {
          "canBeNull": false,
          "description": "Share space percentage reserved for snapshots",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Status",
          "fullType": "storage.NetAppShareSnapshotReserveStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.NetAppShareSnapshotReserveStatusEnum"
        }
      }
    },
    "storage.NetAppShareSnapshotReserveStatusEnum": {
      "description": "Snapshot reserve properties status",
      "enum": [
        "active",
        "error",
        "updating"
      ],
      "enumType": "string",
      "id": "NetAppShareSnapshotReserveStatusEnum",
      "namespace": "storage"
    },
    "storage.NetAppShareSnapshotReserveUpdate": {
      "description": "A snapshot policy",
      "id": "NetAppShareSnapshotReserveUpdate",
      "namespace": "storage",
      "properties": {
        "percent": {
          "canBeNull": false,
          "description": "Share space percentage reserved for snapshots",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "storage.NetAppShareSnapshotUpdate": {
      "description": "Share snapshot updatable properties",
      "id": "NetAppShareSnapshotUpdate",
      "namespace": "storage",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "New snapshot description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "New snapshot name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "storage.NetAppShareStatusEnum": {
      "description": "Share status",
      "enum": [
        "available",
        "creating",
        "creating_from_snapshot",
        "deleted",
        "deleting",
        "error",
        "error_deleting",
        "extending",
        "extending_error",
        "inactive",
        "manage_error",
        "manage_starting",
        "migrating",
        "migrating_to",
        "replication_change",
        "reverting",
        "reverting_error",
        "shrinking",
        "shrinking_error",
        "shrinking_possible_data_loss_error",
        "unmanage_error",
        "unmanage_starting",
        "unmanaged"
      ],
      "enumType": "string",
      "id": "NetAppShareStatusEnum",
      "namespace": "storage"
    },
    "storage.NetAppShareUpdate": {
      "description": "NetApp share updatable properties",
      "id": "NetAppShareUpdate",
      "namespace": "storage",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "New share description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "New share name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "storage.NetAppSnapshotPolicy": {
      "description": "A snapshot policy",
      "id": "NetAppSnapshotPolicy",
      "namespace": "storage",
      "properties": {
        "createdAt": {
          "canBeNull": true,
          "description": "Snapshot policy creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "description": {
          "canBeNull": true,
          "description": "Snapshot policy description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Snapshot policy ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "isDefault": {
          "canBeNull": true,
          "description": "Is this the default snapshot policy?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": true,
          "description": "Snapshot policy name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "rules": {
          "canBeNull": true,
          "description": "Snapshot policy rules",
          "fullType": "storage.NetAppSnapshotPolicyRule[]",
          "readOnly": false,
          "required": true,
          "type": "storage.NetAppSnapshotPolicyRule[]"
        },
        "status": {
          "canBeNull": true,
          "description": "Snapshot policy status",
          "fullType": "storage.NetAppSnapshotPolicyStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "storage.NetAppSnapshotPolicyStatusEnum"
        }
      }
    },
    "storage.NetAppSnapshotPolicyRule": {
      "description": "A snapshot policy rule",
      "id": "NetAppSnapshotPolicyRule",
      "namespace": "storage",
      "properties": {
        "copies": {
          "canBeNull": true,
          "description": "Number of snapshot copies to keep",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "prefix": {
          "canBeNull": true,
          "description": "Prefix to use for snapshots",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "schedule": {
          "canBeNull": true,
          "description": "Snapshot policy schedule",
          "fullType": "storage.NetAppSnapshotPolicySchedule",
          "readOnly": false,
          "required": true,
          "type": "storage.NetAppSnapshotPolicySchedule"
        }
      }
    },
    "storage.NetAppSnapshotPolicySchedule": {
      "description": "A snapshot policy schedule",
      "id": "NetAppSnapshotPolicySchedule",
      "namespace": "storage",
      "properties": {
        "days": {
          "canBeNull": true,
          "description": "The days of the month the schedule runs (1 through 31). Empty for all.",
          "fullType": "long[]",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        },
        "hours": {
          "canBeNull": true,
          "description": "The hours of the day the schedule runs (0 through 23). Empty for all.",
          "fullType": "long[]",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        },
        "minutes": {
          "canBeNull": false,
          "description": "The minutes the schedule runs (0 through 59). Required to have at least one value.",
          "fullType": "long[]",
          "readOnly": false,
          "required": true,
          "type": "long[]"
        },
        "months": {
          "canBeNull": true,
          "description": "The months of the year the schedule runs (1 through 12). Empty for all.",
          "fullType": "long[]",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        },
        "weekdays": {
          "canBeNull": true,
          "description": "The days of the week the schedule runs (0 through 6, where 0 is Sunday and 6 is Saturday). Empty for all.",
          "fullType": "long[]",
          "readOnly": false,
          "required": false,
          "type": "long[]"
        }
      }
    },
    "storage.NetAppSnapshotPolicyStatusEnum": {
      "description": "Snapshot policy status",
      "enum": [
        "available",
        "creating",
        "deleting",
        "error",
        "updating"
      ],
      "enumType": "string",
      "id": "NetAppSnapshotPolicyStatusEnum",
      "namespace": "storage"
    },
    "storage.NetAppSnapshotPolicyUpdate": {
      "description": "Snapshot policy updatable properties",
      "id": "NetAppSnapshotPolicyUpdate",
      "namespace": "storage",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "New snapshot policy description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "New snapshot policy name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "storage.NetAppSnapshotStatusEnum": {
      "description": "Snapshot status",
      "enum": [
        "available",
        "creating",
        "deleting",
        "error",
        "error_deleting",
        "manage_error",
        "manage_starting",
        "restoring",
        "unmanage_error",
        "unmanage_starting"
      ],
      "enumType": "string",
      "id": "NetAppSnapshotStatusEnum",
      "namespace": "storage"
    },
    "storage.NetAppSnapshotTypeEnum": {
      "description": "Snapshot type",
      "enum": [
        "manual"
      ],
      "enumType": "string",
      "id": "NetAppSnapshotTypeEnum",
      "namespace": "storage"
    },
    "storage.ProtocolEnum": {
      "description": "Storage protocol",
      "enum": [
        "NFS"
      ],
      "enumType": "string",
      "id": "ProtocolEnum",
      "namespace": "storage"
    },
    "storage.RegionEnum": {
      "description": "Region of customer's service",
      "enum": [
        "BHS",
        "LIM",
        "RBX",
        "SBG"
      ],
      "enumType": "string",
      "id": "RegionEnum",
      "namespace": "storage"
    }
  },
  "resourcePath": "/storage"
}