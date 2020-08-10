import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/cluster/hadoop",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the HADOOPCLUSTER service"
    },
    {
      "path": "/cluster/hadoop/orderInformations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "cluster.hadoop.OrderInformations",
          "noAuthentication": false,
          "description": "Get informations about the order of one cluster"
        }
      ],
      "description": "Get informations about the order of one cluster"
    },
    {
      "path": "/cluster/hadoop/orderableNodeProfiles",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "cluster.hadoop.NodeBillingProfile[]",
          "noAuthentication": false,
          "description": "Get the orderable node profiles and their characteristics"
        }
      ],
      "description": "Get the orderable node profiles and their characteristics"
    },
    {
      "path": "/cluster/hadoop/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "cluster.hadoop.hadoop",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Managed Hadoop Cluster"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/consumptions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "cluster.hadoop.ClusterConsumption",
          "noAuthentication": false,
          "description": "Get the current consumptions that you will billed for on the next bill"
        }
      ],
      "description": "consumptions operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/networkAcl",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "ipBlock[]",
          "noAuthentication": false,
          "description": "Network ACL associated with this Hadoop Cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "block",
              "dataType": "ipBlock",
              "paramType": "body",
              "fullType": "ipBlock",
              "required": false,
              "description": "IP block to allow"
            },
            {
              "name": "description",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Free description"
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
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Add an ACL to your cluster"
        }
      ],
      "description": "List the cluster.hadoop.NetworkAcl objects"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/networkAcl/{block}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "block",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Block"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Remove this ACL"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "block",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Block"
            }
          ],
          "responseType": "cluster.hadoop.NetworkAcl",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cluster.hadoop.NetworkAcl",
              "paramType": "body",
              "fullType": "cluster.hadoop.NetworkAcl",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "block",
              "dataType": "ipBlock",
              "paramType": "path",
              "fullType": "ipBlock",
              "required": true,
              "description": "Block"
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
      "description": "ACL for allowing ip blocks to access to your cluster"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/node",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "softwareProfile",
              "dataType": "cluster.hadoop.NodeProfileEnum",
              "paramType": "query",
              "fullType": "cluster.hadoop.NodeProfileEnum",
              "required": false,
              "description": "Filter the value of softwareProfile property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Nodes of the Cluster"
        }
      ],
      "description": "List the cluster.hadoop.Node objects"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Remove this Node from the Cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            }
          ],
          "responseType": "cluster.hadoop.Node",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Physical or Virtual Node"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/decommission",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Decommission the node and all the services on it"
        }
      ],
      "description": "decommission operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/recommission",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Recommission the node and all the services on it"
        }
      ],
      "description": "recommission operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/role",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            }
          ],
          "responseType": "cluster.hadoop.RoleTypeEnum[]",
          "noAuthentication": false,
          "description": "Roles (ie set of Hadoop services) of the Node"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "type",
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "paramType": "body",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "required": true,
              "description": "Role name"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Add the Role to the Node"
        }
      ],
      "description": "List the cluster.hadoop.Role objects"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "type",
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "paramType": "path",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "required": true,
              "description": "Type"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Remove this Role from the Node"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            },
            {
              "name": "type",
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "paramType": "path",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "required": true,
              "description": "Type"
            }
          ],
          "responseType": "cluster.hadoop.Role",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Role (ie set of Hadoop services) of the Node"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            },
            {
              "name": "type",
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "paramType": "path",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "required": true,
              "description": "Type"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)"
        }
      ],
      "description": "restart operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            },
            {
              "name": "type",
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "paramType": "path",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "required": true,
              "description": "Type"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Start the role on the node"
        }
      ],
      "description": "start operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "hostname",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Hostname"
            },
            {
              "name": "type",
              "dataType": "cluster.hadoop.RoleTypeEnum",
              "paramType": "path",
              "fullType": "cluster.hadoop.RoleTypeEnum",
              "required": true,
              "description": "Type"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)"
        }
      ],
      "description": "stop operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/nodeBillingProfiles",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "cluster.hadoop.NodeBillingProfile[]",
          "noAuthentication": false,
          "description": "Detailed description for each Node profile"
        }
      ],
      "description": "nodeBillingProfiles operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/nodeConsumptions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "cluster.hadoop.NodeConsumption[]",
          "noAuthentication": false,
          "description": "Get the current node consumptions that you will billed for on the next bill"
        }
      ],
      "description": "nodeConsumptions operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/orderNewNodeHourly",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "nodeProfile",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Node profile you want to order"
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
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Order a new node in the cluster"
        }
      ],
      "description": "orderNewNodeHourly operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/orderableNodeProfiles",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "description": "List of orderable Node profiles"
        }
      ],
      "description": "orderableNodeProfiles operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/restart",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)"
        }
      ],
      "description": "restart operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/service/restart",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "service",
              "dataType": "cluster.hadoop.ClusterServiceNameEnum",
              "paramType": "body",
              "fullType": "cluster.hadoop.ClusterServiceNameEnum",
              "required": true,
              "description": "Name of the service to be restarted"
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
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)"
        }
      ],
      "description": "restart operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/service/start",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "service",
              "dataType": "cluster.hadoop.ClusterServiceNameEnum",
              "paramType": "body",
              "fullType": "cluster.hadoop.ClusterServiceNameEnum",
              "required": true,
              "description": "Name of the service to be started"
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
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Start a Cloudera Manager service"
        }
      ],
      "description": "start operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/service/stop",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "service",
              "dataType": "cluster.hadoop.ClusterServiceNameEnum",
              "paramType": "body",
              "fullType": "cluster.hadoop.ClusterServiceNameEnum",
              "required": true,
              "description": "Name of the service to be stopped"
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
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)"
        }
      ],
      "description": "stop operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
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
      "path": "/cluster/hadoop/{serviceName}/start",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Start the Cloudera Manager Hadoop Cluster"
        }
      ],
      "description": "start operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/stop",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)"
        }
      ],
      "description": "stop operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "dataType": "cluster.hadoop.OperationStateEnum",
              "paramType": "query",
              "fullType": "cluster.hadoop.OperationStateEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Tasks associated with this Hadoop Cluster"
        }
      ],
      "description": "List the cluster.hadoop.Task objects"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/task/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Operation on a Hadoop Cluster component"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/terminate",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST"
        }
      ],
      "description": "terminate operations"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/user",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "description": "Users associated with this Hadoop Cluster"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "httpFrontend",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Whether or not the User is allowed to access to the WebUI interfaces"
            },
            {
              "name": "hue",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Whether or not the User is allowed to access to the Hue interface"
            },
            {
              "name": "username",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Username of the User"
            },
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password of the User"
            },
            {
              "name": "clouderaManager",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": true,
              "description": "Whether or not the User is allowed to access to the Cloudera Manager interface"
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
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Add an User to your cluster"
        }
      ],
      "description": "List the cluster.hadoop.User objects"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/user/{username}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "username",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Username"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Remove this User"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "username",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Username"
            }
          ],
          "responseType": "cluster.hadoop.User",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cluster.hadoop.User",
              "paramType": "body",
              "fullType": "cluster.hadoop.User",
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
              "name": "username",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Username"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "User allowed to access interfaces on your cluster"
    },
    {
      "path": "/cluster/hadoop/{serviceName}/user/{username}/resetPassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Password of the User"
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
              "name": "username",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Username"
            }
          ],
          "responseType": "cluster.hadoop.Task",
          "noAuthentication": false,
          "description": "Reset the password for a given Hadoop Cluster User"
        }
      ],
      "description": "resetPassword operations"
    }
  ],
  "resourcePath": "/cluster/hadoop",
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "cluster.hadoop.BillingNameEnum": {
      "id": "BillingNameEnum",
      "namespace": "cluster.hadoop",
      "description": "All billing profile names",
      "enum": [
        "100-small",
        "200-cpu-1",
        "220-cpu-3",
        "300-disk-1",
        "310-disk-3",
        "900-vm-1"
      ],
      "enumType": "string"
    },
    "cluster.hadoop.ClusterConsumption": {
      "id": "ClusterConsumption",
      "namespace": "cluster.hadoop",
      "description": "Detailed information on a Hadoop Cluster consumption",
      "properties": {
        "quantity": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of hours consummed",
          "required": true
        }
      }
    },
    "cluster.hadoop.ClusterServiceNameEnum": {
      "id": "ClusterServiceNameEnum",
      "namespace": "cluster.hadoop",
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
      "enumType": "string"
    },
    "cluster.hadoop.ClusterStateEnum": {
      "id": "ClusterStateEnum",
      "namespace": "cluster.hadoop",
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
      "enumType": "string"
    },
    "cluster.hadoop.NetworkAcl": {
      "id": "NetworkAcl",
      "namespace": "cluster.hadoop",
      "description": "ACL for allowing ip blocks to access to your cluster",
      "properties": {
        "block": {
          "type": "ipBlock",
          "fullType": "ipBlock",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP Block to allow",
          "required": true
        },
        "description": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "description of this ACL",
          "required": false
        },
        "state": {
          "type": "cluster.hadoop.NetworkAclStateEnum",
          "fullType": "cluster.hadoop.NetworkAclStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the NetworkAcl.",
          "required": true
        }
      }
    },
    "cluster.hadoop.NetworkAclStateEnum": {
      "id": "NetworkAclStateEnum",
      "namespace": "cluster.hadoop",
      "description": "All states a Hadoop Cluster NetworkAcl can be in",
      "enum": [
        "disabled",
        "enabled",
        "pending"
      ],
      "enumType": "string"
    },
    "cluster.hadoop.Node": {
      "id": "Node",
      "namespace": "cluster.hadoop",
      "description": "Physical or Virtual Node",
      "properties": {
        "billingProfileName": {
          "type": "cluster.hadoop.BillingNameEnum",
          "fullType": "cluster.hadoop.BillingNameEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the billing profile attached to the node",
          "required": true
        },
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Hostname of the node",
          "required": true
        },
        "ip": {
          "type": "ip",
          "fullType": "ip",
          "canBeNull": false,
          "readOnly": true,
          "description": "IP of the Node",
          "required": true
        },
        "isRemovable": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Wether or not the Node is removable",
          "required": true
        },
        "softwareProfile": {
          "type": "cluster.hadoop.NodeProfileEnum",
          "fullType": "cluster.hadoop.NodeProfileEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Profile of the Node",
          "required": true
        },
        "state": {
          "type": "cluster.hadoop.NodeStateEnum",
          "fullType": "cluster.hadoop.NodeStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the Node",
          "required": true
        }
      }
    },
    "cluster.hadoop.NodeBillingProfile": {
      "id": "NodeBillingProfile",
      "namespace": "cluster.hadoop",
      "description": "Detailed information on a node billing profile",
      "properties": {
        "CPUFrequency": {
          "type": "complexType.UnitAndValue<double>",
          "fullType": "complexType.UnitAndValue<double>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Frequency of one CPU core",
          "required": true
        },
        "diskCapacity": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total capacity available for HDFS",
          "required": true
        },
        "nbCPUCores": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total number of the CPU cores",
          "required": true
        },
        "nbCPUThreads": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total number of the CPU threads",
          "required": true
        },
        "networkBandwidth": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Network speed of the link used for the Hadoop process",
          "required": true
        },
        "nodeProfile": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the Node billing profile",
          "required": true
        },
        "ramQuantity": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Total amount of RAM",
          "required": true
        }
      }
    },
    "cluster.hadoop.NodeConsumption": {
      "id": "NodeConsumption",
      "namespace": "cluster.hadoop",
      "description": "Detailed information on a node consumption of a Hadoop Cluster",
      "properties": {
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hostname of the consumed resource",
          "required": true
        },
        "nodeProfile": {
          "type": "cluster.hadoop.BillingNameEnum",
          "fullType": "cluster.hadoop.BillingNameEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the node profile for the consumptions",
          "required": true
        },
        "quantity": {
          "type": "complexType.UnitAndValue<long>",
          "fullType": "complexType.UnitAndValue<long>",
          "canBeNull": false,
          "readOnly": false,
          "description": "Number of hours consummed",
          "required": true
        }
      }
    },
    "cluster.hadoop.NodeProfileEnum": {
      "id": "NodeProfileEnum",
      "namespace": "cluster.hadoop",
      "description": "All profiles a Hadoop Cluster Node can be",
      "enum": [
        "ApplicationServer",
        "BasicNode",
        "ClouderaManager",
        "MasterServer",
        "SecondaryServer"
      ],
      "enumType": "string"
    },
    "cluster.hadoop.NodeStateEnum": {
      "id": "NodeStateEnum",
      "namespace": "cluster.hadoop",
      "description": "All states a Hadoop Cluster Node can be in",
      "enum": [
        "available",
        "delivered",
        "toDeploy",
        "unavailable"
      ],
      "enumType": "string"
    },
    "cluster.hadoop.OperationStateEnum": {
      "id": "OperationStateEnum",
      "namespace": "cluster.hadoop",
      "description": "All states a Hadoop Cluster Cloud Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "cluster.hadoop.OrderInformations": {
      "id": "OrderInformations",
      "namespace": "cluster.hadoop",
      "description": "Detailed information on the order of one Hadoop Cluster",
      "properties": {
        "maximumOrderableNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximal number of Node allowed in one order",
          "required": true
        },
        "minimumOrderableNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Minimum number of Node allowed in one order",
          "required": true
        }
      }
    },
    "cluster.hadoop.Role": {
      "id": "Role",
      "namespace": "cluster.hadoop",
      "description": "Role (ie set of Hadoop services) of the Node",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "ID of the Role",
          "required": true
        },
        "type": {
          "type": "cluster.hadoop.RoleTypeEnum",
          "fullType": "cluster.hadoop.RoleTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Role name",
          "required": true
        }
      }
    },
    "cluster.hadoop.RoleTypeEnum": {
      "id": "RoleTypeEnum",
      "namespace": "cluster.hadoop",
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
      "enumType": "string"
    },
    "cluster.hadoop.Task": {
      "id": "Task",
      "namespace": "cluster.hadoop",
      "description": "Operation on a Hadoop Cluster component",
      "properties": {
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Operation name",
          "required": true
        },
        "status": {
          "type": "cluster.hadoop.OperationStateEnum",
          "fullType": "cluster.hadoop.OperationStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Current Task state",
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cluster.hadoop.User": {
      "id": "User",
      "namespace": "cluster.hadoop",
      "description": "User allowed to access interfaces on your cluster",
      "properties": {
        "clouderaManager": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not the User is allowed to access to the Cloudera Manager interface",
          "required": true
        },
        "httpFrontend": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not the User is allowed to access to the WebUI interfaces",
          "required": true
        },
        "hue": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether or not the User is allowed to access to the Hue interface",
          "required": true
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The username of the User",
          "required": true
        }
      }
    },
    "cluster.hadoop.hadoop": {
      "id": "hadoop",
      "namespace": "cluster.hadoop",
      "description": "Managed Hadoop Cluster",
      "properties": {
        "clouderaVersion": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "CDH and Cloudera Manager version",
          "required": true
        },
        "maxOrderableNodes": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Maximum quantity of nodes allowed to be ordered in the cluster",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Service name of your Cluster",
          "required": true
        },
        "state": {
          "type": "cluster.hadoop.ClusterStateEnum",
          "fullType": "cluster.hadoop.ClusterStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of the Hadoop Cluster",
          "required": true
        }
      }
    },
    "complexType.UnitAndValue<T>": {
      "id": "UnitAndValue",
      "namespace": "complexType",
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "properties": {
        "unit": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "T",
          "fullType": "T",
          "canBeNull": false,
          "readOnly": false,
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