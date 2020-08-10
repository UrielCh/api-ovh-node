import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/kube",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the KUBERNETES service"
    },
    {
      "path": "/kube/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
          "responseType": "kube.Cluster",
          "noAuthentication": false,
          "description": "Get information about your managed Kubernetes cluster"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Cluster new name"
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
          "description": "Update information about your managed Kubernetes cluster"
        }
      ],
      "description": "Manage your cluster"
    },
    {
      "path": "/kube/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
      "path": "/kube/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "futureUse",
              "dataType": "service.TerminationFutureUseEnum",
              "paramType": "body",
              "fullType": "service.TerminationFutureUseEnum",
              "required": false,
              "description": "What next after your termination request"
            },
            {
              "name": "reason",
              "dataType": "service.TerminationReasonEnum",
              "paramType": "body",
              "fullType": "service.TerminationReasonEnum",
              "required": false,
              "description": "Reason of your termination request"
            },
            {
              "name": "commentary",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Commentary about your termination request"
            },
            {
              "name": "token",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "The termination token sent by mail to the admin contact"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Confirm termination of your service"
        }
      ],
      "description": "Confirm termination of your service"
    },
    {
      "path": "/kube/{serviceName}/kubeconfig",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
          "responseType": "kube.Kubeconfig",
          "noAuthentication": false,
          "description": "Get kubeconfig file"
        }
      ],
      "description": "Get your cluster configuration"
    },
    {
      "path": "/kube/{serviceName}/publiccloud/node",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
          "responseType": "kube.Node[]",
          "noAuthentication": false,
          "description": "List your nodes on Public Cloud"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "flavorName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Public Cloud flavor name"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Node name"
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
          "responseType": "kube.Node",
          "noAuthentication": false,
          "description": "Deploy a node for your cluster on Public Cloud"
        }
      ],
      "description": "Manage your Public Cloud cluster nodes"
    },
    {
      "path": "/kube/{serviceName}/publiccloud/node/{nodeId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "nodeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Node ID"
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
          "description": "Delete a node on your cluster"
        },
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "nodeId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Node ID"
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
          "responseType": "kube.Node",
          "noAuthentication": false,
          "description": "Get information on a specific node on your cluster"
        }
      ],
      "description": "Manage a single node on your cluster"
    },
    {
      "path": "/kube/{serviceName}/publiccloud/project",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
          "responseType": "kube.PublicCloudProject",
          "noAuthentication": false,
          "description": "Get your Public Cloud project linked to your cluster"
        }
      ],
      "description": "Manage your Public Cloud projects linked to your cluster"
    },
    {
      "path": "/kube/{serviceName}/reset",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "version",
              "dataType": "kube.Version",
              "paramType": "body",
              "fullType": "kube.Version",
              "required": false,
              "description": "Kubernetes version to use after reset, by default it keeps the current version"
            },
            {
              "name": "workerNodesPolicy",
              "dataType": "kube.ResetWorkerNodesPolicy",
              "paramType": "body",
              "fullType": "kube.ResetWorkerNodesPolicy",
              "required": false,
              "description": "Worker nodes reset policy, default is delete"
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
          "description": "Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled"
        }
      ],
      "description": "Reset your cluster"
    },
    {
      "path": "/kube/{serviceName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
      "path": "/kube/{serviceName}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your service"
        }
      ],
      "description": "Terminate your service"
    },
    {
      "path": "/kube/{serviceName}/update",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
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
          "description": "Update cluster to the latest patch version"
        }
      ],
      "description": "Update cluster"
    },
    {
      "path": "/kube/{serviceName}/updatePolicy",
      "operations": [
        {
          "apiStatus": {
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "name": "updatePolicy",
              "dataType": "kube.UpdatePolicy",
              "paramType": "body",
              "fullType": "kube.UpdatePolicy",
              "required": true,
              "description": "Update policy"
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
          "description": "Change the update policy of your cluster"
        }
      ],
      "description": "Manage the update policy of your cluster"
    }
  ],
  "resourcePath": "/kube",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "kube.Cluster": {
      "id": "Cluster",
      "namespace": "kube",
      "description": "Managed Kubernetes cluster description",
      "properties": {
        "controlPlaneIsUpToDate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True if control-plane is up to date",
          "required": true
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster creation date",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster ID",
          "required": true
        },
        "isUpToDate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True if all nodes and control-plane are up to date",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster name",
          "required": true
        },
        "nodesUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster nodes URL",
          "required": true
        },
        "status": {
          "type": "kube.ClusterStatus",
          "fullType": "kube.ClusterStatus",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster status",
          "required": true
        },
        "updatePolicy": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster last update date",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Cluster last update date",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Management URL of your cluster",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Kubernetes version of your cluster",
          "required": true
        }
      }
    },
    "kube.ClusterStatus": {
      "id": "ClusterStatus",
      "namespace": "kube",
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
      "enumType": "string"
    },
    "kube.Kubeconfig": {
      "id": "Kubeconfig",
      "namespace": "kube",
      "description": "Kubeconfig description",
      "properties": {
        "content": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": true,
          "description": "kubeconfig file",
          "required": true
        }
      }
    },
    "kube.Node": {
      "id": "Node",
      "namespace": "kube",
      "description": "Node installed on your cluster",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "flavor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Public Cloud flavor name",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Node ID",
          "required": true
        },
        "instanceId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Public Cloud instance id",
          "required": false
        },
        "isUpToDate": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "True if the node is up to date",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Node name",
          "required": false
        },
        "projectId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Public Cloud project ID where the node is started",
          "required": true
        },
        "status": {
          "type": "kube.NodeStatus",
          "fullType": "kube.NodeStatus",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Node last update date",
          "required": true
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Node version",
          "required": true
        }
      }
    },
    "kube.NodeStatus": {
      "id": "NodeStatus",
      "namespace": "kube",
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
      "enumType": "string"
    },
    "kube.PublicCloudProject": {
      "id": "PublicCloudProject",
      "namespace": "kube",
      "description": "Public Cloud project linked to a Kube cluster",
      "properties": {
        "projectId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Public Cloud project ID",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Public Cloud region associated with your cluster",
          "required": true
        }
      }
    },
    "kube.ResetWorkerNodesPolicy": {
      "id": "ResetWorkerNodesPolicy",
      "namespace": "kube",
      "description": "Enum values for worker nodes reset policy",
      "enum": [
        "reinstall",
        "delete"
      ],
      "enumType": "string"
    },
    "kube.UpdatePolicy": {
      "id": "UpdatePolicy",
      "namespace": "kube",
      "description": "Enum values for UpdatePolicy",
      "enum": [
        "ALWAYS_UPDATE",
        "MINIMAL_DOWNTIME",
        "NEVER_UPDATE"
      ],
      "enumType": "string"
    },
    "kube.Version": {
      "id": "Version",
      "namespace": "kube",
      "description": "List of available versions for installation",
      "enum": [
        "1.13",
        "1.14",
        "1.15"
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
    "service.TerminationFutureUseEnum": {
      "id": "TerminationFutureUseEnum",
      "namespace": "service",
      "description": "All future uses you can provide for a service termination",
      "enum": [
        "NOT_REPLACING_SERVICE",
        "OTHER",
        "SUBSCRIBE_AN_OTHER_SERVICE",
        "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
        "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
      ],
      "enumType": "string"
    },
    "service.TerminationReasonEnum": {
      "id": "TerminationReasonEnum",
      "namespace": "service",
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