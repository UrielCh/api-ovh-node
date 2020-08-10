import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/caas/containers",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the DOCKER service"
    },
    {
      "path": "/caas/containers/slaves/flavors",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List the /cloud flavors available for the Docker PaaS slaves"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/slaves/flavors/{flavorId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "flavorId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Flavor ID"
            }
          ],
          "responseType": "docker.slave.flavor",
          "noAuthentication": false,
          "description": "Inspect the argument slave flavor"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}",
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
          "responseType": "docker.stack",
          "noAuthentication": false,
          "description": "Inspect the argument stack"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}/availableFrameworks",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List all the installable Mesos frameworks"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
      "path": "/caas/containers/{serviceName}/frameworks",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List the frameworks installed on the argument stack"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}/frameworks/{frameworkId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "frameworkId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Framework ID"
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
          "responseType": "stack.framework",
          "noAuthentication": false,
          "description": "Inspect the stack framework"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}/frameworks/{frameworkId}/apps",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "frameworkId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Framework ID"
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
          "responseType": "stack.framework.application",
          "noAuthentication": false,
          "description": "List apps in the framework"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}/frameworks/{frameworkId}/password",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "docker.framework.password",
              "paramType": "body",
              "fullType": "docker.framework.password",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "frameworkId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Framework ID"
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
          "description": "Update the framework access password"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}/registry/credentials",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List the registry credentials associated to the stack."
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "dataType": "docker.stack.inputCustomSsl",
              "paramType": "body",
              "fullType": "docker.stack.inputCustomSsl",
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
          "responseType": "docker.stack.registryCredentials",
          "noAuthentication": false,
          "description": "Associate the stack with some credentials to an authenticated registry."
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}/registry/credentials/{credentialsId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "credentialsId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Credentials ID"
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
          "description": "Delete the registry credentials."
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "credentialsId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Credentials ID"
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
          "responseType": "docker.stack.registryCredentials",
          "noAuthentication": false,
          "description": "Inspect the image registry credentials associated to the stack"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "docker.stack.inputCustomSsl",
              "paramType": "body",
              "fullType": "docker.stack.inputCustomSsl",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "credentialsId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Credentials ID"
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
          "responseType": "docker.stack.registryCredentials",
          "noAuthentication": false,
          "description": "Update the registry credentials."
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}/serviceInfos",
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
      "path": "/caas/containers/{serviceName}/slaves",
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List the id of the registered slave instances"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}/slaves/{slaveId}",
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
            },
            {
              "name": "slaveId",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Slave ID"
            }
          ],
          "responseType": "docker.slave",
          "noAuthentication": false,
          "description": "Inspect the argument user slave instance"
        }
      ],
      "description": "Missing description"
    },
    {
      "path": "/caas/containers/{serviceName}/ssl",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
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
            }
          ],
          "responseType": "docker.stack.customSslMessage",
          "noAuthentication": false,
          "description": "Delete the custom SSL certificate and private key associated to the stack"
        },
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
          "responseType": "docker.stack.customSsl",
          "noAuthentication": false,
          "description": "Inspect the custom SSL certificate and private"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "docker.stack.inputCustomSsl",
              "paramType": "body",
              "fullType": "docker.stack.inputCustomSsl",
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
          "responseType": "docker.stack.customSslMessage",
          "noAuthentication": false,
          "description": "Update the custom SSL certificate and private"
        }
      ],
      "description": "Missing description"
    }
  ],
  "resourcePath": "/caas/containers",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "docker.framework.password": {
      "id": "password",
      "namespace": "docker.framework",
      "description": "The new framework password",
      "properties": {
        "password": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "The new framework password",
          "required": true
        }
      }
    },
    "docker.slave": {
      "id": "slave",
      "namespace": "docker",
      "description": "A host on which containers can be deployed",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "flavorId": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The framework UUID",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The slave UUID",
          "required": true
        },
        "metrics": {
          "type": "docker.slave.metrics",
          "fullType": "docker.slave.metrics",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metrics about slave usage",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The slave hostname",
          "required": true
        },
        "region": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The region where the slave is located",
          "required": true
        },
        "stack": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The stack to which the slave belongs",
          "required": true
        },
        "state": {
          "type": "docker.slave.status",
          "fullType": "docker.slave.status",
          "canBeNull": false,
          "readOnly": true,
          "description": "The state of the slave",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        }
      }
    },
    "docker.slave.flavor": {
      "id": "flavor",
      "namespace": "docker.slave",
      "description": "Attributes of the slave flavor",
      "properties": {
        "bandwidth": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The network bandwidth, in Mbps",
          "required": true
        },
        "cpus": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The amount of (v)CPUs",
          "required": true
        },
        "disk": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The disk size, in GB",
          "required": true
        },
        "diskHa": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Wether the disk is HA (stored in Ceph) or local (SSD)",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The flavor UUID",
          "required": true
        },
        "isVm": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Whether the flavor is an Openstack or dedicated flavor",
          "required": true
        },
        "ram": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "The amount of RAM, in MB",
          "required": true
        }
      }
    },
    "docker.slave.framework.app": {
      "id": "app",
      "namespace": "docker.slave.framework",
      "description": "Application data",
      "properties": {
        "cpu": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Application CPU",
          "required": false
        },
        "env": {
          "type": "docker.slave.framework.app.environment[]",
          "fullType": "docker.slave.framework.app.environment[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Application environment",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Application id",
          "required": false
        },
        "image": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Application image",
          "required": false
        },
        "instances": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Number of running containers instances",
          "required": false
        },
        "mem": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Application memory",
          "required": false
        },
        "ports": {
          "type": "docker.slave.framework.app.port[]",
          "fullType": "docker.slave.framework.app.port[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Application ports",
          "required": true
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Application status",
          "required": false
        },
        "volumes": {
          "type": "docker.slave.framework.app.volume[]",
          "fullType": "docker.slave.framework.app.volume[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Application volumes",
          "required": true
        }
      }
    },
    "docker.slave.framework.app.environment": {
      "id": "environment",
      "namespace": "docker.slave.framework.app",
      "description": "Application environment variable",
      "properties": {
        "key": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "variable key",
          "required": false
        },
        "value": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "variable value",
          "required": false
        }
      }
    },
    "docker.slave.framework.app.port": {
      "id": "port",
      "namespace": "docker.slave.framework.app",
      "description": "Application ports",
      "properties": {
        "containerPort": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Container port",
          "required": false
        },
        "hostPort": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Host port",
          "required": false
        },
        "protocol": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Port protocol",
          "required": false
        }
      }
    },
    "docker.slave.framework.app.volume": {
      "id": "volume",
      "namespace": "docker.slave.framework.app",
      "description": "Application volumes",
      "properties": {
        "containerPath": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Container path",
          "required": false
        },
        "hostPath": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Host path",
          "required": false
        },
        "mode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Volume mode",
          "required": false
        }
      }
    },
    "docker.slave.metrics": {
      "id": "metrics",
      "namespace": "docker.slave",
      "description": "Metrics about slave usage",
      "properties": {
        "resources": {
          "type": "docker.slave.metrics.resources",
          "fullType": "docker.slave.metrics.resources",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metrics about available slave resources",
          "required": true
        },
        "usedResources": {
          "type": "docker.slave.metrics.usedResources",
          "fullType": "docker.slave.metrics.usedResources",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metrics about used slave resources",
          "required": true
        }
      }
    },
    "docker.slave.metrics.resources": {
      "id": "resources",
      "namespace": "docker.slave.metrics",
      "description": "Metrics about available slave resources",
      "properties": {
        "cpu": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Available CPU",
          "required": false
        },
        "mem": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Available memory",
          "required": false
        }
      }
    },
    "docker.slave.metrics.usedResources": {
      "id": "usedResources",
      "namespace": "docker.slave.metrics",
      "description": "Metrics about used slave resources",
      "properties": {
        "cpu": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Used CPU",
          "required": false
        },
        "mem": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Used memory",
          "required": false
        }
      }
    },
    "docker.slave.status": {
      "id": "status",
      "namespace": "docker.slave",
      "description": "The state of the slave",
      "enum": [
        "blocked",
        "created",
        "creating"
      ],
      "enumType": "string"
    },
    "docker.stack": {
      "id": "stack",
      "namespace": "docker",
      "description": "An isolated client Docker PaaS environment",
      "properties": {
        "cluster": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "The cluster on which the stack is deployed",
          "required": false
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "loadBalancer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The DNS address of the stack load balancer",
          "required": true
        },
        "metrics": {
          "type": "docker.slave.metrics",
          "fullType": "docker.slave.metrics",
          "canBeNull": false,
          "readOnly": true,
          "description": "Metrics about slave usage",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The stack name",
          "required": true
        },
        "slaves": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "A list of slave UUIDs",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        }
      }
    },
    "docker.stack.customSsl": {
      "id": "customSsl",
      "namespace": "docker.stack",
      "description": "A custom SSL certificate associated to a Docker PaaS environment",
      "properties": {
        "certificate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The custom SSL public certificate",
          "required": true
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        }
      }
    },
    "docker.stack.customSslMessage": {
      "id": "customSslMessage",
      "namespace": "docker.stack",
      "description": "Action validation message",
      "properties": {
        "message": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The action validation message",
          "required": true
        }
      }
    },
    "docker.stack.inputCustomSsl": {
      "id": "inputCustomSsl",
      "namespace": "docker.stack",
      "description": "A custom SSL certificate associated to a Docker PaaS environment",
      "properties": {
        "certificate": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The custom SSL public certificate",
          "required": true
        },
        "key": {
          "type": "password",
          "fullType": "password",
          "canBeNull": false,
          "readOnly": false,
          "description": "The custom SSL certificate private key",
          "required": true
        }
      }
    },
    "docker.stack.registryCredentials": {
      "id": "registryCredentials",
      "namespace": "docker.stack",
      "description": "Credentials providing authentication to an external registry",
      "properties": {
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "registryUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The URL of the registry",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        },
        "username": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The registry account username",
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
    },
    "stack.framework": {
      "id": "framework",
      "namespace": "stack",
      "description": "A framework installed for a docker PaaS stack",
      "properties": {
        "accessUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "The framework name",
          "required": true
        },
        "createdAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource creation",
          "required": true
        },
        "id": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The framework UUID",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The framework name",
          "required": true
        },
        "updatedAt": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Date of the resource last update",
          "required": true
        }
      }
    },
    "stack.framework.application": {
      "id": "application",
      "namespace": "stack.framework",
      "description": "Application deployed on the framework",
      "properties": {
        "apps": {
          "type": "docker.slave.framework.app[]",
          "fullType": "docker.slave.framework.app[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Application list",
          "required": true
        }
      }
    }
  }
}