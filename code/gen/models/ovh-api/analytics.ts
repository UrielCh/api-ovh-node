import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/analytics.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00+00:00",
            "deprecatedDate": "2021-12-01T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Platform capabilities",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "analytics.platform.Capability[]"
        }
      ],
      "path": "/analytics/capabilities/platforms"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00+00:00",
            "deprecatedDate": "2021-12-01T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            "analytics:apiovh:platforms/get"
          ],
          "noAuthentication": false,
          "parameters": [],
          "responseType": "uuid[]"
        }
      ],
      "path": "/analytics/platforms"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00+00:00",
            "deprecatedDate": "2021-12-01T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get details about a service",
          "httpMethod": "GET",
          "iamActions": [
            "analytics:apiovh:platforms/get"
          ],
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
          "responseType": "analytics.Cluster"
        }
      ],
      "path": "/analytics/platforms/{serviceName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00+00:00",
            "deprecatedDate": "2021-12-01T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get activity logs",
          "httpMethod": "GET",
          "iamActions": [
            "analytics:apiovh:platforms/activity/get"
          ],
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
          "responseType": "analytics.cluster.Activity[]"
        }
      ],
      "path": "/analytics/platforms/{serviceName}/activity"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
          "iamActions": [
            "analytics:apiovh:platforms/changeContact"
          ],
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
              "description": "Your analytics project ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/analytics/platforms/{serviceName}/changeContact"
    },
    {
      "description": "Confirm termination of your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Confirm termination of your service",
          "httpMethod": "POST",
          "iamActions": [
            "analytics:apiovh:platforms/confirmTermination"
          ],
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
              "description": "Your analytics project ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/analytics/platforms/{serviceName}/confirmTermination"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00+00:00",
            "deprecatedDate": "2021-12-01T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Deploy an Analytics Data Platform",
          "httpMethod": "POST",
          "iamActions": [
            "analytics:apiovh:platforms/deploy"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "analytics.cluster.Deploy",
              "description": "Request Body",
              "fullType": "analytics.cluster.Deploy",
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
          "responseType": "analytics.cluster.Deploy"
        }
      ],
      "path": "/analytics/platforms/{serviceName}/deploy"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00+00:00",
            "deprecatedDate": "2021-12-01T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Destroy an Analytics Data Platform",
          "httpMethod": "POST",
          "iamActions": [
            "analytics:apiovh:platforms/destroy"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "analytics.cluster.Destroy",
              "description": "Request Body",
              "fullType": "analytics.cluster.Destroy",
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
          "responseType": "void"
        }
      ],
      "path": "/analytics/platforms/{serviceName}/destroy"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00+00:00",
            "deprecatedDate": "2021-12-01T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "List available nodes",
          "httpMethod": "GET",
          "iamActions": [
            "analytics:apiovh:platforms/nodes/get"
          ],
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
      "path": "/analytics/platforms/{serviceName}/nodes"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00+00:00",
            "deprecatedDate": "2021-12-01T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get details about nodes",
          "httpMethod": "GET",
          "iamActions": [
            "analytics:apiovh:platforms/nodes/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "uuid",
              "description": "Node ID",
              "fullType": "uuid",
              "name": "nodeId",
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
          "responseType": "analytics.cluster.Node"
        }
      ],
      "path": "/analytics/platforms/{serviceName}/nodes/{nodeId}"
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
          "iamActions": [
            "analytics:apiovh:platforms/serviceInfos/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Your analytics project ID",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            "analytics:apiovh:platforms/serviceInfos/edit"
          ],
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
              "description": "Your analytics project ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/analytics/platforms/{serviceName}/serviceInfos"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2022-03-01T00:00:00+00:00",
            "deprecatedDate": "2021-12-01T00:00:00+00:00",
            "description": "Deprecated, will be removed",
            "value": "DEPRECATED"
          },
          "description": "Get cluster deployment status",
          "httpMethod": "GET",
          "iamActions": [
            "analytics:apiovh:platforms/status/get"
          ],
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
          "responseType": "analytics.cluster.deploy.Status[]"
        }
      ],
      "path": "/analytics/platforms/{serviceName}/status"
    },
    {
      "description": "Terminate your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Terminate your service",
          "httpMethod": "POST",
          "iamActions": [
            "analytics:apiovh:platforms/terminate"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Your analytics project ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/analytics/platforms/{serviceName}/terminate"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "analytics.Cluster": {
      "description": "Cluster information",
      "id": "Cluster",
      "namespace": "analytics",
      "properties": {
        "analyticsProjectId": {
          "canBeNull": true,
          "description": "Analytics Project ID needed to generate cluster credentials",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "clusterName": {
          "canBeNull": true,
          "description": "Analytics cluster name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "clusterType": {
          "canBeNull": true,
          "description": "Type of analytics stack deployed",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "deploymentEndDate": {
          "canBeNull": true,
          "description": "Analytics cluster deployment end date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deploymentStartDate": {
          "canBeNull": true,
          "description": "Analytics cluster deployment start date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "domain": {
          "canBeNull": true,
          "description": "Analytics cluster domain name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nodes": {
          "canBeNull": true,
          "description": "Analytics cluster nodes topology",
          "fullType": "analytics.cluster.Node[]",
          "readOnly": true,
          "required": false,
          "type": "analytics.cluster.Node[]"
        },
        "osProjectId": {
          "canBeNull": true,
          "description": "Public Cloud project unique identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "osRegion": {
          "canBeNull": true,
          "description": "Public Cloud region of analytics cluster deployment",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Analytics cluster unique identifier",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "status": {
          "canBeNull": false,
          "description": "Analytics cluster current status",
          "fullType": "analytics.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "analytics.StatusEnum"
        }
      }
    },
    "analytics.Component": {
      "description": "Component of the service",
      "id": "Component",
      "namespace": "analytics",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Component name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": false,
          "description": "Component version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "analytics.StatusEnum": {
      "description": "Status code",
      "enum": [
        "DEPLOYED",
        "DEPLOYING",
        "DESTROYED",
        "DESTROYING",
        "DONE",
        "ERROR",
        "FAILED",
        "INITIALIZED",
        "IN_PROGRESS",
        "OK",
        "PENDING",
        "SUCCEEDED",
        "TO_DEPLOY",
        "TO_DESTROY",
        "UNKNOWN"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "analytics"
    },
    "analytics.cluster.Activity": {
      "description": "Cluster activity",
      "id": "Activity",
      "namespace": "analytics.cluster",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Activity log description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status associated to this event",
          "fullType": "analytics.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "analytics.StatusEnum"
        },
        "timestamp": {
          "canBeNull": false,
          "description": "Activity log timestamp",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "user": {
          "canBeNull": true,
          "description": "Event author",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "analytics.cluster.Deploy": {
      "description": "Analytics Cluster deployment parameters",
      "id": "Deploy",
      "namespace": "analytics.cluster",
      "properties": {
        "clusterName": {
          "canBeNull": false,
          "description": "Name of the Analytics Data Platform cluster",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "clusterType": {
          "canBeNull": false,
          "description": "Analytics type of stack to deploy (according to capabilities version)",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "edgeNodeStorage": {
          "canBeNull": false,
          "description": "Storage per edge node",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "hdfsEffectiveStorage": {
          "canBeNull": false,
          "description": "Analytics cluster total effective storage (HDFS)",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "hdfsReplicationFactor": {
          "canBeNull": false,
          "description": "Analytics cluster HDFS replication factor",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "masterNodeStorage": {
          "canBeNull": false,
          "description": "Storage per master node",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "masterPassword": {
          "canBeNull": false,
          "description": "Analytics cluster master password used to derive services passwords",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        },
        "nodes": {
          "canBeNull": false,
          "description": "Analytics cluster nodes topology",
          "fullType": "analytics.node.Deploy[]",
          "readOnly": false,
          "required": true,
          "type": "analytics.node.Deploy[]"
        },
        "osProjectId": {
          "canBeNull": false,
          "description": "Public Cloud project ID to deploy the cluster into",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "osProjectName": {
          "canBeNull": false,
          "description": "Public Cloud project name to deploy the cluster into",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "osRegion": {
          "canBeNull": false,
          "description": "Public Cloud region to deploy the cluster into (according to capabilities regions)",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "osToken": {
          "canBeNull": false,
          "description": "Public Cloud project token to deploy the cluster",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        },
        "sshPublicKey": {
          "canBeNull": false,
          "description": "SSH Public Key uploaded to the cluster to give access to the customer (content of my_key.pub)",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "analytics.cluster.Destroy": {
      "description": "Analytics Cluster destruction parameters",
      "id": "Destroy",
      "namespace": "analytics.cluster",
      "properties": {
        "osToken": {
          "canBeNull": false,
          "description": "Public Cloud project token to destroy the cluster",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
    },
    "analytics.cluster.Node": {
      "description": "Cluster node information",
      "id": "Node",
      "namespace": "analytics.cluster",
      "properties": {
        "deploymentEndDate": {
          "canBeNull": true,
          "description": "Deployment end date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deploymentStartDate": {
          "canBeNull": true,
          "description": "Deployment start date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "flavor": {
          "canBeNull": true,
          "description": "Public Cloud flavor of the node",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "hostname": {
          "canBeNull": true,
          "description": "Hostname for this node",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": true,
          "description": "IP address of the node inside the vRack",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "nodeId": {
          "canBeNull": false,
          "description": "Unique identifier for this node",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "nodeType": {
          "canBeNull": false,
          "description": "Node type",
          "fullType": "analytics.node.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "analytics.node.TypeEnum"
        },
        "osRegion": {
          "canBeNull": true,
          "description": "Public Cloud region of the node",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Node status",
          "fullType": "analytics.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "analytics.StatusEnum"
        },
        "storage": {
          "canBeNull": true,
          "description": "Size of storage in GB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "analytics.cluster.deploy.Status": {
      "description": "Cluster deployment status",
      "id": "Status",
      "namespace": "analytics.cluster.deploy",
      "properties": {
        "percentage": {
          "canBeNull": false,
          "description": "Task percentage",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "analytics.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "analytics.StatusEnum"
        },
        "task": {
          "canBeNull": false,
          "description": "Task name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "analytics.node.Capability": {
      "description": "node capability",
      "id": "Capability",
      "namespace": "analytics.node",
      "properties": {
        "instanceMax": {
          "canBeNull": false,
          "description": "Maximum number of instances",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "instanceMin": {
          "canBeNull": false,
          "description": "Minimum number of instances",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "instanceType": {
          "canBeNull": false,
          "description": "List of available instances",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "rawStorageMaxGb": {
          "canBeNull": false,
          "description": "maximum raw storage in GB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "rawStorageMinGb": {
          "canBeNull": false,
          "description": "minimum raw storage in GB",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "analytics.node.Deploy": {
      "description": "Node information",
      "id": "Deploy",
      "namespace": "analytics.node",
      "properties": {
        "nodeFlavor": {
          "canBeNull": false,
          "description": "Type of flavor to deploy",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "nodeType": {
          "canBeNull": false,
          "description": "Node type",
          "fullType": "analytics.node.TypeEnum",
          "readOnly": false,
          "required": true,
          "type": "analytics.node.TypeEnum"
        }
      }
    },
    "analytics.node.TypeEnum": {
      "description": "Node type",
      "enum": [
        "EDGE",
        "MASTER",
        "SLAVE",
        "UTILITY"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "analytics.node"
    },
    "analytics.platform.Capability": {
      "description": "Platform capabilities",
      "id": "Capability",
      "namespace": "analytics.platform",
      "properties": {
        "availableRegion": {
          "canBeNull": false,
          "description": "Available Public Cloud regions",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "bastionNode": {
          "canBeNull": false,
          "description": "Bastion node capabilities",
          "fullType": "analytics.node.Capability",
          "readOnly": true,
          "required": false,
          "type": "analytics.node.Capability"
        },
        "components": {
          "canBeNull": false,
          "description": "Analytic Data Platform Components list",
          "fullType": "analytics.Component[]",
          "readOnly": true,
          "required": false,
          "type": "analytics.Component[]"
        },
        "edgeNode": {
          "canBeNull": false,
          "description": "Edge node capabilities",
          "fullType": "analytics.node.Capability",
          "readOnly": true,
          "required": false,
          "type": "analytics.node.Capability"
        },
        "hdfsReplicationFactor": {
          "canBeNull": false,
          "description": "Analytic Data Platform replication factor",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "masterNode": {
          "canBeNull": false,
          "description": "Master node capabilities",
          "fullType": "analytics.node.Capability",
          "readOnly": true,
          "required": false,
          "type": "analytics.node.Capability"
        },
        "requirements": {
          "canBeNull": true,
          "description": "List of fields to hide or display",
          "fullType": "analytics.platform.Capability.Requirement[]",
          "readOnly": true,
          "required": false,
          "type": "analytics.platform.Capability.Requirement[]"
        },
        "utilityNode": {
          "canBeNull": false,
          "description": "Utility node capabilities",
          "fullType": "analytics.node.Capability",
          "readOnly": true,
          "required": false,
          "type": "analytics.node.Capability"
        },
        "version": {
          "canBeNull": false,
          "description": "Analytic Data Platform software version",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "versionDescription": {
          "canBeNull": false,
          "description": "Analytic Data Platform software version description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "workerNode": {
          "canBeNull": false,
          "description": "Worker node capabilities",
          "fullType": "analytics.node.Capability",
          "readOnly": true,
          "required": false,
          "type": "analytics.node.Capability"
        }
      }
    },
    "analytics.platform.Capability.Requirement": {
      "description": "Requirement for fields to be displayed or hidden",
      "id": "Requirement",
      "namespace": "analytics.platform.Capability",
      "properties": {
        "display": {
          "canBeNull": false,
          "description": "Field display flag. True for display, false to hide",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "fieldName": {
          "canBeNull": false,
          "description": "Field name to be displayed or hidden",
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
  "resourcePath": "/analytics"
}