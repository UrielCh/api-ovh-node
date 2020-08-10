import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/cluster/hadoop.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations about the HADOOPCLUSTER service",
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
      "path": "/cluster/hadoop"
    },
    {
      "description": "Get informations about the order of one cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get informations about the order of one cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "cluster.hadoop.OrderInformations"
        }
      ],
      "path": "/cluster/hadoop/orderInformations"
    },
    {
      "description": "Get the orderable node profiles and their characteristics",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the orderable node profiles and their characteristics",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "cluster.hadoop.NodeBillingProfile[]"
        }
      ],
      "path": "/cluster/hadoop/orderableNodeProfiles"
    },
    {
      "description": "Managed Hadoop Cluster",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.hadoop"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}"
    },
    {
      "description": "consumptions operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the current consumptions that you will billed for on the next bill",
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
          "responseType": "cluster.hadoop.ClusterConsumption"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/consumptions"
    },
    {
      "description": "List the cluster.hadoop.NetworkAcl objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Network ACL associated with this Hadoop Cluster",
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
          "responseType": "ipBlock[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add an ACL to your cluster",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Free description",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "IP block to allow",
              "fullType": "ipBlock",
              "name": "block",
              "paramType": "body",
              "required": false
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/networkAcl"
    },
    {
      "description": "ACL for allowing ip blocks to access to your cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this ACL",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Block",
              "fullType": "ipBlock",
              "name": "block",
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
          "responseType": "cluster.hadoop.Task"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "Block",
              "fullType": "ipBlock",
              "name": "block",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.NetworkAcl"
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
              "dataType": "cluster.hadoop.NetworkAcl",
              "description": "Request Body",
              "fullType": "cluster.hadoop.NetworkAcl",
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
              "dataType": "ipBlock",
              "description": "Block",
              "fullType": "ipBlock",
              "name": "block",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/networkAcl/{block}"
    },
    {
      "description": "List the cluster.hadoop.Node objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Nodes of the Cluster",
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
              "dataType": "cluster.hadoop.NodeProfileEnum",
              "description": "Filter the value of softwareProfile property (=)",
              "fullType": "cluster.hadoop.NodeProfileEnum",
              "name": "softwareProfile",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/node"
    },
    {
      "description": "Physical or Virtual Node",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this Node from the Cluster",
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
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Task"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Node"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}"
    },
    {
      "description": "decommission operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Decommission the node and all the services on it",
          "httpMethod": "POST",
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
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/decommission"
    },
    {
      "description": "recommission operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Recommission the node and all the services on it",
          "httpMethod": "POST",
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
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/recommission"
    },
    {
      "description": "List the cluster.hadoop.Role objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Roles (ie set of Hadoop services) of the Node",
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
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.RoleTypeEnum[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add the Role to the Node",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "description": "Role name",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "name": "type",
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
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/role"
    },
    {
      "description": "Role (ie set of Hadoop services) of the Node",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this Role from the Node",
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
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "description": "Type",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "name": "type",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Task"
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "description": "Type",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "name": "type",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Role"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}"
    },
    {
      "description": "restart operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)",
          "httpMethod": "POST",
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
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "description": "Type",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "name": "type",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart"
    },
    {
      "description": "start operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start the role on the node",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "description": "Type",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "name": "type",
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start"
    },
    {
      "description": "stop operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)",
          "httpMethod": "POST",
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
              "dataType": "string",
              "description": "Hostname",
              "fullType": "string",
              "name": "hostname",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "description": "Type",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "name": "type",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop"
    },
    {
      "description": "nodeBillingProfiles operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Detailed description for each Node profile",
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
          "responseType": "cluster.hadoop.NodeBillingProfile[]"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/nodeBillingProfiles"
    },
    {
      "description": "nodeConsumptions operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the current node consumptions that you will billed for on the next bill",
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
          "responseType": "cluster.hadoop.NodeConsumption[]"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/nodeConsumptions"
    },
    {
      "description": "orderNewNodeHourly operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Order a new node in the cluster",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Node profile you want to order",
              "fullType": "string",
              "name": "nodeProfile",
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/orderNewNodeHourly"
    },
    {
      "description": "orderableNodeProfiles operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of orderable Node profiles",
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
          "responseType": "string[]"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/orderableNodeProfiles"
    },
    {
      "description": "restart operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)",
          "httpMethod": "POST",
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/restart"
    },
    {
      "description": "restart operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cluster.hadoop.ClusterServiceNameEnum",
              "description": "Name of the service to be restarted",
              "fullType": "cluster.hadoop.ClusterServiceNameEnum",
              "name": "service",
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/service/restart"
    },
    {
      "description": "start operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start a Cloudera Manager service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cluster.hadoop.ClusterServiceNameEnum",
              "description": "Name of the service to be started",
              "fullType": "cluster.hadoop.ClusterServiceNameEnum",
              "name": "service",
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/service/start"
    },
    {
      "description": "stop operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "cluster.hadoop.ClusterServiceNameEnum",
              "description": "Name of the service to be stopped",
              "fullType": "cluster.hadoop.ClusterServiceNameEnum",
              "name": "service",
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/service/stop"
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
              "description": "Service name",
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
              "description": "Request Body",
              "fullType": "services.Service",
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
          "responseType": "void"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/serviceInfos"
    },
    {
      "description": "start operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Start the Cloudera Manager Hadoop Cluster",
          "httpMethod": "POST",
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/start"
    },
    {
      "description": "stop operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)",
          "httpMethod": "POST",
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/stop"
    },
    {
      "description": "List the cluster.hadoop.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks associated with this Hadoop Cluster",
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
              "dataType": "cluster.hadoop.OperationStateEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "cluster.hadoop.OperationStateEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/task"
    },
    {
      "description": "Operation on a Hadoop Cluster component",
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
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task ID",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/task/{taskId}"
    },
    {
      "description": "terminate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST",
          "httpMethod": "POST",
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/terminate"
    },
    {
      "description": "List the cluster.hadoop.User objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Users associated with this Hadoop Cluster",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add an User to your cluster",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Whether or not the User is allowed to access to the WebUI interfaces",
              "fullType": "boolean",
              "name": "httpFrontend",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Whether or not the User is allowed to access to the Cloudera Manager interface",
              "fullType": "boolean",
              "name": "clouderaManager",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Username of the User",
              "fullType": "string",
              "name": "username",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "password",
              "description": "Password of the User",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Whether or not the User is allowed to access to the Hue interface",
              "fullType": "boolean",
              "name": "hue",
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
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/user"
    },
    {
      "description": "User allowed to access interfaces on your cluster",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove this User",
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
              "dataType": "string",
              "description": "Username",
              "fullType": "string",
              "name": "username",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Task"
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
          "responseType": "cluster.hadoop.User"
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
              "dataType": "cluster.hadoop.User",
              "description": "Request Body",
              "fullType": "cluster.hadoop.User",
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
              "dataType": "string",
              "description": "Username",
              "fullType": "string",
              "name": "username",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/user/{username}"
    },
    {
      "description": "resetPassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset the password for a given Hadoop Cluster User",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "Password of the User",
              "fullType": "password",
              "name": "password",
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
              "dataType": "string",
              "description": "Username",
              "fullType": "string",
              "name": "username",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "cluster.hadoop.Task"
        }
      ],
      "path": "/cluster/hadoop/{serviceName}/user/{username}/resetPassword"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "cluster.hadoop.BillingNameEnum": {
      "description": "All billing profile names",
      "enum": [
        "100-small",
        "200-cpu-1",
        "220-cpu-3",
        "300-disk-1",
        "310-disk-3",
        "900-vm-1"
      ],
      "enumType": "string",
      "id": "BillingNameEnum",
      "namespace": "cluster.hadoop"
    },
    "cluster.hadoop.ClusterConsumption": {
      "description": "Detailed information on a Hadoop Cluster consumption",
      "id": "ClusterConsumption",
      "namespace": "cluster.hadoop",
      "properties": {
        "quantity": {
          "canBeNull": false,
          "description": "Number of hours consummed",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": true,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "cluster.hadoop.ClusterServiceNameEnum": {
      "description": "All services names in a Hadoop Cluster",
      "enum": [
        "HBase",
        "HDFS",
        "HUE",
        "Hive",
        "Oozie",
        "Solr",
        "Spark",
        "Sqoop",
        "YARN",
        "ZooKeeper"
      ],
      "enumType": "string",
      "id": "ClusterServiceNameEnum",
      "namespace": "cluster.hadoop"
    },
    "cluster.hadoop.ClusterStateEnum": {
      "description": "All states a Hadoop Cluster can be in",
      "enum": [
        "created",
        "creating",
        "deleted",
        "deleting",
        "delivered",
        "delivering",
        "toDeliver"
      ],
      "enumType": "string",
      "id": "ClusterStateEnum",
      "namespace": "cluster.hadoop"
    },
    "cluster.hadoop.NetworkAcl": {
      "description": "ACL for allowing ip blocks to access to your cluster",
      "id": "NetworkAcl",
      "namespace": "cluster.hadoop",
      "properties": {
        "block": {
          "canBeNull": false,
          "description": "IP Block to allow",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": true,
          "type": "ipBlock"
        },
        "description": {
          "canBeNull": true,
          "description": "description of this ACL",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the NetworkAcl.",
          "fullType": "cluster.hadoop.NetworkAclStateEnum",
          "readOnly": true,
          "required": true,
          "type": "cluster.hadoop.NetworkAclStateEnum"
        }
      }
    },
    "cluster.hadoop.NetworkAclStateEnum": {
      "description": "All states a Hadoop Cluster NetworkAcl can be in",
      "enum": [
        "disabled",
        "enabled",
        "pending"
      ],
      "enumType": "string",
      "id": "NetworkAclStateEnum",
      "namespace": "cluster.hadoop"
    },
    "cluster.hadoop.Node": {
      "description": "Physical or Virtual Node",
      "id": "Node",
      "namespace": "cluster.hadoop",
      "properties": {
        "billingProfileName": {
          "canBeNull": false,
          "description": "Name of the billing profile attached to the node",
          "fullType": "cluster.hadoop.BillingNameEnum",
          "readOnly": true,
          "required": true,
          "type": "cluster.hadoop.BillingNameEnum"
        },
        "hostname": {
          "canBeNull": false,
          "description": "Hostname of the node",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP of the Node",
          "fullType": "ip",
          "readOnly": true,
          "required": true,
          "type": "ip"
        },
        "isRemovable": {
          "canBeNull": false,
          "description": "Wether or not the Node is removable",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "softwareProfile": {
          "canBeNull": false,
          "description": "Profile of the Node",
          "fullType": "cluster.hadoop.NodeProfileEnum",
          "readOnly": true,
          "required": true,
          "type": "cluster.hadoop.NodeProfileEnum"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the Node",
          "fullType": "cluster.hadoop.NodeStateEnum",
          "readOnly": true,
          "required": true,
          "type": "cluster.hadoop.NodeStateEnum"
        }
      }
    },
    "cluster.hadoop.NodeBillingProfile": {
      "description": "Detailed information on a node billing profile",
      "id": "NodeBillingProfile",
      "namespace": "cluster.hadoop",
      "properties": {
        "CPUFrequency": {
          "canBeNull": false,
          "description": "Frequency of one CPU core",
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": false,
          "required": true,
          "type": "complexType.UnitAndValue<double>"
        },
        "diskCapacity": {
          "canBeNull": false,
          "description": "Total capacity available for HDFS",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "nbCPUCores": {
          "canBeNull": false,
          "description": "Total number of the CPU cores",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "nbCPUThreads": {
          "canBeNull": false,
          "description": "Total number of the CPU threads",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "networkBandwidth": {
          "canBeNull": false,
          "description": "Network speed of the link used for the Hadoop process",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": true,
          "type": "complexType.UnitAndValue<long>"
        },
        "nodeProfile": {
          "canBeNull": false,
          "description": "Name of the Node billing profile",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "ramQuantity": {
          "canBeNull": false,
          "description": "Total amount of RAM",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": true,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "cluster.hadoop.NodeConsumption": {
      "description": "Detailed information on a node consumption of a Hadoop Cluster",
      "id": "NodeConsumption",
      "namespace": "cluster.hadoop",
      "properties": {
        "hostname": {
          "canBeNull": false,
          "description": "Hostname of the consumed resource",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "nodeProfile": {
          "canBeNull": false,
          "description": "Name of the node profile for the consumptions",
          "fullType": "cluster.hadoop.BillingNameEnum",
          "readOnly": false,
          "required": true,
          "type": "cluster.hadoop.BillingNameEnum"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Number of hours consummed",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": true,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "cluster.hadoop.NodeProfileEnum": {
      "description": "All profiles a Hadoop Cluster Node can be",
      "enum": [
        "ApplicationServer",
        "BasicNode",
        "ClouderaManager",
        "MasterServer",
        "SecondaryServer"
      ],
      "enumType": "string",
      "id": "NodeProfileEnum",
      "namespace": "cluster.hadoop"
    },
    "cluster.hadoop.NodeStateEnum": {
      "description": "All states a Hadoop Cluster Node can be in",
      "enum": [
        "available",
        "delivered",
        "toDeploy",
        "unavailable"
      ],
      "enumType": "string",
      "id": "NodeStateEnum",
      "namespace": "cluster.hadoop"
    },
    "cluster.hadoop.OperationStateEnum": {
      "description": "All states a Hadoop Cluster Cloud Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "OperationStateEnum",
      "namespace": "cluster.hadoop"
    },
    "cluster.hadoop.OrderInformations": {
      "description": "Detailed information on the order of one Hadoop Cluster",
      "id": "OrderInformations",
      "namespace": "cluster.hadoop",
      "properties": {
        "maximumOrderableNodes": {
          "canBeNull": false,
          "description": "Maximal number of Node allowed in one order",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "minimumOrderableNodes": {
          "canBeNull": false,
          "description": "Minimum number of Node allowed in one order",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "cluster.hadoop.Role": {
      "description": "Role (ie set of Hadoop services) of the Node",
      "id": "Role",
      "namespace": "cluster.hadoop",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "ID of the Role",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "type": {
          "canBeNull": false,
          "description": "Role name",
          "fullType": "cluster.hadoop.RoleTypeEnum",
          "readOnly": true,
          "required": true,
          "type": "cluster.hadoop.RoleTypeEnum"
        }
      }
    },
    "cluster.hadoop.RoleTypeEnum": {
      "description": "All roles a Hadoop Cluster Node can be",
      "enum": [
        "cloudera_manager",
        "data_node",
        "elasticsearch_server",
        "hbase_master",
        "hbase_region_server",
        "hive_server2",
        "hue",
        "impala_daemon",
        "impala_server",
        "map_reduce_history_server",
        "name_node",
        "oozie_server",
        "open_tsdb",
        "secondary_name_node",
        "solr_server",
        "spark_master",
        "spark_worker",
        "sqoop_server",
        "yarn_node_manager",
        "yarn_resource_manager",
        "zoo_keeper"
      ],
      "enumType": "string",
      "id": "RoleTypeEnum",
      "namespace": "cluster.hadoop"
    },
    "cluster.hadoop.Task": {
      "description": "Operation on a Hadoop Cluster component",
      "id": "Task",
      "namespace": "cluster.hadoop",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Operation name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Current Task state",
          "fullType": "cluster.hadoop.OperationStateEnum",
          "readOnly": true,
          "required": true,
          "type": "cluster.hadoop.OperationStateEnum"
        },
        "taskId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        }
      }
    },
    "cluster.hadoop.User": {
      "description": "User allowed to access interfaces on your cluster",
      "id": "User",
      "namespace": "cluster.hadoop",
      "properties": {
        "clouderaManager": {
          "canBeNull": false,
          "description": "Whether or not the User is allowed to access to the Cloudera Manager interface",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "httpFrontend": {
          "canBeNull": false,
          "description": "Whether or not the User is allowed to access to the WebUI interfaces",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "hue": {
          "canBeNull": false,
          "description": "Whether or not the User is allowed to access to the Hue interface",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "username": {
          "canBeNull": false,
          "description": "The username of the User",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "cluster.hadoop.hadoop": {
      "description": "Managed Hadoop Cluster",
      "id": "hadoop",
      "namespace": "cluster.hadoop",
      "properties": {
        "clouderaVersion": {
          "canBeNull": false,
          "description": "CDH and Cloudera Manager version",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "maxOrderableNodes": {
          "canBeNull": false,
          "description": "Maximum quantity of nodes allowed to be ordered in the cluster",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Service name of your Cluster",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "State of the Hadoop Cluster",
          "fullType": "cluster.hadoop.ClusterStateEnum",
          "readOnly": true,
          "required": true,
          "type": "cluster.hadoop.ClusterStateEnum"
        }
      }
    },
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
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "T",
          "readOnly": false,
          "required": true,
          "type": "T"
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
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "fullType": "long",
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
          "required": true,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": true,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
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
          "required": true,
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
          "required": true,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.ServiceId:long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": true,
          "type": "service.StateEnum"
        }
      }
    }
  },
  "resourcePath": "/cluster/hadoop"
}