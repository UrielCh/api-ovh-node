import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/analytics/capabilities/platforms",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "analytics.platform.Capability[]",
          "noAuthentication": true,
          "description": "Platform capabilities"
        }
      ],
      "description": ""
    },
    {
      "path": "/analytics/platforms",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": ""
    },
    {
      "path": "/analytics/platforms/{serviceName}",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "analytics.Cluster",
          "noAuthentication": false,
          "description": "Get details about a service"
        }
      ],
      "description": ""
    },
    {
      "path": "/analytics/platforms/{serviceName}/activity",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "analytics.cluster.Activity[]",
          "noAuthentication": false,
          "description": "Get activity logs"
        }
      ],
      "description": ""
    },
    {
      "path": "/analytics/platforms/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactBilling",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as billing contact"
            },
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
      "path": "/analytics/platforms/{serviceName}/confirmTermination",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
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
      "path": "/analytics/platforms/{serviceName}/deploy",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "analytics.cluster.Deploy",
              "paramType": "body",
              "fullType": "analytics.cluster.Deploy",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "analytics.cluster.Deploy",
          "noAuthentication": false,
          "description": "Deploy an Analytics Data Platform"
        }
      ],
      "description": ""
    },
    {
      "path": "/analytics/platforms/{serviceName}/destroy",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "analytics.cluster.Destroy",
              "paramType": "body",
              "fullType": "analytics.cluster.Destroy",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "serviceName",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Destroy an Analytics Data Platform"
        }
      ],
      "description": ""
    },
    {
      "path": "/analytics/platforms/{serviceName}/nodes",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "uuid[]",
          "noAuthentication": false,
          "description": "List available nodes"
        }
      ],
      "description": ""
    },
    {
      "path": "/analytics/platforms/{serviceName}/nodes/{nodeId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "nodeId",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Node ID"
            },
            {
              "name": "serviceName",
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "analytics.cluster.Node",
          "noAuthentication": false,
          "description": "Get details about nodes"
        }
      ],
      "description": ""
    },
    {
      "path": "/analytics/platforms/{serviceName}/serviceInfos",
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
      "path": "/analytics/platforms/{serviceName}/status",
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
              "dataType": "uuid",
              "paramType": "path",
              "fullType": "uuid",
              "required": true,
              "description": "Service name"
            }
          ],
          "responseType": "analytics.cluster.deploy.Status[]",
          "noAuthentication": false,
          "description": "Get cluster deployment status"
        }
      ],
      "description": ""
    },
    {
      "path": "/analytics/platforms/{serviceName}/terminate",
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
          "responseType": "string",
          "noAuthentication": false,
          "description": "Terminate your service"
        }
      ],
      "description": "Terminate your service"
    }
  ],
  "resourcePath": "/analytics",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "analytics.Cluster": {
      "id": "Cluster",
      "namespace": "analytics",
      "description": "Cluster information",
      "properties": {
        "analyticsProjectId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Analytics Project ID needed to generate cluster credentials",
          "required": false
        },
        "clusterName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Analytics cluster name",
          "required": false
        },
        "clusterType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Type of analytics stack deployed",
          "required": false
        },
        "deploymentEndDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Analytics cluster deployment end date",
          "required": false
        },
        "deploymentStartDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Analytics cluster deployment start date",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Analytics cluster domain name",
          "required": false
        },
        "nodes": {
          "type": "analytics.cluster.Node[]",
          "fullType": "analytics.cluster.Node[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "Analytics cluster nodes topology",
          "required": false
        },
        "osProjectId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Public Cloud project unique identifier",
          "required": false
        },
        "osRegion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Public Cloud region of analytics cluster deployment",
          "required": false
        },
        "serviceName": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Analytics cluster unique identifier",
          "required": false
        },
        "status": {
          "type": "analytics.StatusEnum",
          "fullType": "analytics.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Analytics cluster current status",
          "required": false
        }
      }
    },
    "analytics.Component": {
      "id": "Component",
      "namespace": "analytics",
      "description": "Component of the service",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Component name",
          "required": false
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Component version",
          "required": false
        }
      }
    },
    "analytics.StatusEnum": {
      "id": "StatusEnum",
      "namespace": "analytics",
      "description": "Status code",
      "enum": [
        "PENDING",
        "IN_PROGRESS",
        "SUCCEEDED",
        "FAILED",
        "DONE",
        "ERROR",
        "UNKNOWN",
        "OK",
        "TO_DEPLOY",
        "DEPLOYING",
        "DEPLOYED",
        "TO_DESTROY",
        "DESTROYING",
        "DESTROYED",
        "INITIALIZED"
      ],
      "enumType": "string"
    },
    "analytics.cluster.Activity": {
      "id": "Activity",
      "namespace": "analytics.cluster",
      "description": "Cluster activity",
      "properties": {
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Activity log description",
          "required": false
        },
        "status": {
          "type": "analytics.StatusEnum",
          "fullType": "analytics.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Status associated to this event",
          "required": false
        },
        "timestamp": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Activity log timestamp",
          "required": false
        },
        "user": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Event author",
          "required": false
        }
      }
    },
    "analytics.cluster.Deploy": {
      "id": "Deploy",
      "namespace": "analytics.cluster",
      "description": "Analytics Cluster deployment parameters",
      "properties": {
        "clusterName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the Analytics Data Platform cluster",
          "required": true
        },
        "clusterType": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Analytics type of stack to deploy (according to capabilities version)",
          "required": true
        },
        "edgeNodeStorage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Storage per edge node",
          "required": true
        },
        "hdfsEffectiveStorage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Analytics cluster total effective storage (HDFS)",
          "required": true
        },
        "hdfsReplicationFactor": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Analytics cluster HDFS replication factor",
          "required": true
        },
        "masterNodeStorage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Storage per master node",
          "required": true
        },
        "masterPassword": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "Analytics cluster master password used to derive services passwords",
          "required": true
        },
        "nodes": {
          "type": "analytics.node.Deploy[]",
          "fullType": "analytics.node.Deploy[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "Analytics cluster nodes topology",
          "required": true
        },
        "osProjectId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Public Cloud project ID to deploy the cluster into",
          "required": true
        },
        "osProjectName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Public Cloud project name to deploy the cluster into",
          "required": true
        },
        "osRegion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Public Cloud region to deploy the cluster into (according to capabilities regions)",
          "required": true
        },
        "osToken": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "Public Cloud project token to deploy the cluster",
          "required": true
        },
        "sshPublicKey": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "SSH Public Key uploaded to the cluster to give access to the customer (content of my_key.pub)",
          "required": true
        }
      }
    },
    "analytics.cluster.Destroy": {
      "id": "Destroy",
      "namespace": "analytics.cluster",
      "description": "Analytics Cluster destruction parameters",
      "properties": {
        "osToken": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "Public Cloud project token to destroy the cluster",
          "required": true
        }
      }
    },
    "analytics.cluster.Node": {
      "id": "Node",
      "namespace": "analytics.cluster",
      "description": "Cluster node information",
      "properties": {
        "deploymentEndDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Deployment end date",
          "required": false
        },
        "deploymentStartDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Deployment start date",
          "required": false
        },
        "flavor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Public Cloud flavor of the node",
          "required": false
        },
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Hostname for this node",
          "required": false
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": true,
          "readOnly": true,
          "description": "IP address of the node inside the vRack",
          "required": false
        },
        "nodeId": {
          "type": "uuid",
          "fullType": "uuid",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unique identifier for this node",
          "required": false
        },
        "nodeType": {
          "type": "analytics.node.TypeEnum",
          "fullType": "analytics.node.TypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Node type",
          "required": false
        },
        "osRegion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Public Cloud region of the node",
          "required": false
        },
        "status": {
          "type": "analytics.StatusEnum",
          "fullType": "analytics.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Node status",
          "required": false
        },
        "storage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Size of storage in GB",
          "required": false
        }
      }
    },
    "analytics.cluster.deploy.Status": {
      "id": "Status",
      "namespace": "analytics.cluster.deploy",
      "description": "Cluster deployment status",
      "properties": {
        "percentage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task percentage",
          "required": false
        },
        "status": {
          "type": "analytics.StatusEnum",
          "fullType": "analytics.StatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": false
        },
        "task": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task name",
          "required": false
        }
      }
    },
    "analytics.node.Capability": {
      "id": "Capability",
      "namespace": "analytics.node",
      "description": "node capability",
      "properties": {
        "instanceMax": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum number of instances",
          "required": false
        },
        "instanceMin": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Minimum number of instances",
          "required": false
        },
        "instanceType": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of available instances",
          "required": false
        },
        "rawStorageMaxGb": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "maximum raw storage in GB",
          "required": false
        },
        "rawStorageMinGb": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "minimum raw storage in GB",
          "required": false
        }
      }
    },
    "analytics.node.Deploy": {
      "id": "Deploy",
      "namespace": "analytics.node",
      "description": "Node information",
      "properties": {
        "nodeFlavor": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Type of flavor to deploy",
          "required": true
        },
        "nodeType": {
          "type": "analytics.node.TypeEnum",
          "fullType": "analytics.node.TypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Node type",
          "required": true
        }
      }
    },
    "analytics.node.TypeEnum": {
      "id": "TypeEnum",
      "namespace": "analytics.node",
      "description": "Node type",
      "enum": [
        "MASTER",
        "SLAVE",
        "EDGE",
        "UTILITY"
      ],
      "enumType": "string"
    },
    "analytics.platform.Capability": {
      "id": "Capability",
      "namespace": "analytics.platform",
      "description": "Platform capabilities",
      "properties": {
        "availableRegion": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Available Public Cloud regions",
          "required": false
        },
        "bastionNode": {
          "type": "analytics.node.Capability",
          "fullType": "analytics.node.Capability",
          "canBeNull": false,
          "readOnly": true,
          "description": "Bastion node capabilities",
          "required": false
        },
        "components": {
          "type": "analytics.Component[]",
          "fullType": "analytics.Component[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Analytic Data Platform Components list",
          "required": false
        },
        "edgeNode": {
          "type": "analytics.node.Capability",
          "fullType": "analytics.node.Capability",
          "canBeNull": false,
          "readOnly": true,
          "description": "Edge node capabilities",
          "required": false
        },
        "hdfsReplicationFactor": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Analytic Data Platform replication factor",
          "required": false
        },
        "masterNode": {
          "type": "analytics.node.Capability",
          "fullType": "analytics.node.Capability",
          "canBeNull": false,
          "readOnly": true,
          "description": "Master node capabilities",
          "required": false
        },
        "requirements": {
          "type": "analytics.platform.Capability.Requirement[]",
          "fullType": "analytics.platform.Capability.Requirement[]",
          "canBeNull": true,
          "readOnly": true,
          "description": "List of fields to hide or display",
          "required": false
        },
        "utilityNode": {
          "type": "analytics.node.Capability",
          "fullType": "analytics.node.Capability",
          "canBeNull": false,
          "readOnly": true,
          "description": "Utility node capabilities",
          "required": false
        },
        "version": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Analytic Data Platform software version",
          "required": false
        },
        "versionDescription": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Analytic Data Platform software version description",
          "required": false
        },
        "workerNode": {
          "type": "analytics.node.Capability",
          "fullType": "analytics.node.Capability",
          "canBeNull": false,
          "readOnly": true,
          "description": "Worker node capabilities",
          "required": false
        }
      }
    },
    "analytics.platform.Capability.Requirement": {
      "id": "Requirement",
      "namespace": "analytics.platform.Capability",
      "description": "Requirement for fields to be displayed or hidden",
      "properties": {
        "display": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Field display flag. True for display, false to hide",
          "required": false
        },
        "fieldName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Field name to be displayed or hidden",
          "required": false
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