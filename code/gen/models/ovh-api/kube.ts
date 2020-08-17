import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/kube.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the KUBERNETES service",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/kube"
    },
    {
      "description": "Manage your cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get information about your managed Kubernetes cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "kube.Cluster"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Update information about your managed Kubernetes cluster",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster new name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/kube/{serviceName}"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
              "description": "The contact to set as tech contact",
              "fullType": "coreTypes.AccountId:string",
              "name": "contactTech",
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
              "description": "Your managed Kubernetes cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/kube/{serviceName}/changeContact"
    },
    {
      "description": "Confirm termination of your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Confirm termination of your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
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
              "description": "Commentary about your termination request",
              "fullType": "string",
              "name": "commentary",
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
              "description": "Your managed Kubernetes cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/kube/{serviceName}/confirmTermination"
    },
    {
      "description": "Get your cluster configuration",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get kubeconfig file",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "kube.Kubeconfig"
        }
      ],
      "path": "/kube/{serviceName}/kubeconfig"
    },
    {
      "description": "Manage your Public Cloud cluster nodes",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "List your nodes on Public Cloud",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "kube.Node[]"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Deploy a node for your cluster on Public Cloud",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Public Cloud flavor name",
              "fullType": "string",
              "name": "flavorName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Node name",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "kube.Node"
        }
      ],
      "path": "/kube/{serviceName}/publiccloud/node"
    },
    {
      "description": "Manage a single node on your cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Delete a node on your cluster",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Node ID",
              "fullType": "string",
              "name": "nodeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get information on a specific node on your cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Node ID",
              "fullType": "string",
              "name": "nodeId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "kube.Node"
        }
      ],
      "path": "/kube/{serviceName}/publiccloud/node/{nodeId}"
    },
    {
      "description": "Manage your Public Cloud projects linked to your cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get your Public Cloud project linked to your cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "kube.PublicCloudProject"
        }
      ],
      "path": "/kube/{serviceName}/publiccloud/project"
    },
    {
      "description": "Reset your cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "kube.Version",
              "description": "Kubernetes version to use after reset, by default it keeps the current version",
              "fullType": "kube.Version",
              "name": "version",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "kube.ResetWorkerNodesPolicy",
              "description": "Worker nodes reset policy, default is delete",
              "fullType": "kube.ResetWorkerNodesPolicy",
              "name": "workerNodesPolicy",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/kube/{serviceName}/reset"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Your managed Kubernetes cluster ID",
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
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
              "description": "Your managed Kubernetes cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/kube/{serviceName}/serviceInfos"
    },
    {
      "description": "Terminate your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Terminate your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Your managed Kubernetes cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/kube/{serviceName}/terminate"
    },
    {
      "description": "Update cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Update cluster to the latest patch version",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/kube/{serviceName}/update"
    },
    {
      "description": "Manage the update policy of your cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Change the update policy of your cluster",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "kube.UpdatePolicy",
              "description": "Update policy",
              "fullType": "kube.UpdatePolicy",
              "name": "updatePolicy",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/kube/{serviceName}/updatePolicy"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "kube.Cluster": {
      "description": "Managed Kubernetes cluster description",
      "id": "Cluster",
      "namespace": "kube",
      "properties": {
        "controlPlaneIsUpToDate": {
          "canBeNull": false,
          "description": "True if control-plane is up to date",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Cluster creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Cluster ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isUpToDate": {
          "canBeNull": false,
          "description": "True if all nodes and control-plane are up to date",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Cluster name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nodesUrl": {
          "canBeNull": false,
          "description": "Cluster nodes URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Cluster status",
          "fullType": "kube.ClusterStatus",
          "readOnly": true,
          "required": false,
          "type": "kube.ClusterStatus"
        },
        "updatePolicy": {
          "canBeNull": false,
          "description": "Cluster last update date",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Cluster last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "url": {
          "canBeNull": false,
          "description": "Management URL of your cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": "Kubernetes version of your cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "kube.ClusterStatus": {
      "description": "Enum values for Status",
      "enum": [
        "INSTALLING",
        "UPDATING",
        "RESETTING",
        "SUSPENDING",
        "REOPENING",
        "DELETING",
        "SUSPENDED",
        "ERROR",
        "USER_ERROR",
        "USER_QUOTA_ERROR",
        "READY"
      ],
      "enumType": "string",
      "id": "ClusterStatus",
      "namespace": "kube"
    },
    "kube.Kubeconfig": {
      "description": "Kubeconfig description",
      "id": "Kubeconfig",
      "namespace": "kube",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "kubeconfig file",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        }
      }
    },
    "kube.Node": {
      "description": "Node installed on your cluster",
      "id": "Node",
      "namespace": "kube",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "flavor": {
          "canBeNull": false,
          "description": "Public Cloud flavor name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Node ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "instanceId": {
          "canBeNull": true,
          "description": "Public Cloud instance id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "isUpToDate": {
          "canBeNull": false,
          "description": "True if the node is up to date",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": true,
          "description": "Node name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "projectId": {
          "canBeNull": false,
          "description": "Public Cloud project ID where the node is started",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status",
          "fullType": "kube.NodeStatus",
          "readOnly": true,
          "required": false,
          "type": "kube.NodeStatus"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Node last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "version": {
          "canBeNull": false,
          "description": "Node version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "kube.NodeStatus": {
      "description": "Enum values for Status",
      "enum": [
        "INSTALLING",
        "UPDATING",
        "RESETTING",
        "SUSPENDING",
        "REOPENING",
        "DELETING",
        "SUSPENDED",
        "ERROR",
        "USER_ERROR",
        "USER_QUOTA_ERROR",
        "USER_NODE_NOT_FOUND_ERROR",
        "USER_NODE_SUSPENDED_SERVICE",
        "READY"
      ],
      "enumType": "string",
      "id": "NodeStatus",
      "namespace": "kube"
    },
    "kube.PublicCloudProject": {
      "description": "Public Cloud project linked to a Kube cluster",
      "id": "PublicCloudProject",
      "namespace": "kube",
      "properties": {
        "projectId": {
          "canBeNull": false,
          "description": "Public Cloud project ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "Public Cloud region associated with your cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "kube.ResetWorkerNodesPolicy": {
      "description": "Enum values for worker nodes reset policy",
      "enum": [
        "reinstall",
        "delete"
      ],
      "enumType": "string",
      "id": "ResetWorkerNodesPolicy",
      "namespace": "kube"
    },
    "kube.UpdatePolicy": {
      "description": "Enum values for UpdatePolicy",
      "enum": [
        "ALWAYS_UPDATE",
        "MINIMAL_DOWNTIME",
        "NEVER_UPDATE"
      ],
      "enumType": "string",
      "id": "UpdatePolicy",
      "namespace": "kube"
    },
    "kube.Version": {
      "description": "List of available versions for installation",
      "enum": [
        "1.13",
        "1.14",
        "1.15"
      ],
      "enumType": "string",
      "id": "Version",
      "namespace": "kube"
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
  "resourcePath": "/kube"
}