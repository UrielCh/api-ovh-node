import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/caas/containers.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the DOCKER service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/caas/containers"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List the /cloud flavors available for the Docker PaaS slaves",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/caas/containers/slaves/flavors"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Inspect the argument slave flavor",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "flavor id",
              "fullType": "string",
              "name": "flavorId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "docker.slave.flavor"
        }
      ],
      "path": "/caas/containers/slaves/flavors/{flavorId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Inspect the argument stack",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "docker.stack"
        }
      ],
      "path": "/caas/containers/{serviceName}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List all the installable Mesos frameworks",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/caas/containers/{serviceName}/availableFrameworks"
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
              "description": "The internal ID of your project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/caas/containers/{serviceName}/changeContact"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List the frameworks installed on the argument stack",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/caas/containers/{serviceName}/frameworks"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Inspect the stack framework",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "framework id",
              "fullType": "string",
              "name": "frameworkId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "stack.framework"
        }
      ],
      "path": "/caas/containers/{serviceName}/frameworks/{frameworkId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List apps in the framework",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "framework id",
              "fullType": "string",
              "name": "frameworkId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "stack.framework.application"
        }
      ],
      "path": "/caas/containers/{serviceName}/frameworks/{frameworkId}/apps"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update the framework access password",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "framework id",
              "fullType": "string",
              "name": "frameworkId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "docker.framework.password",
              "description": "The new framework password",
              "fullType": "docker.framework.password",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/caas/containers/{serviceName}/frameworks/{frameworkId}/password"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List the registry credentials associated to the stack.",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "service name",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Associate the stack with some credentials to an authenticated registry.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "docker.stack.inputCustomSsl",
              "description": "Credentials providing authentication to an external registry",
              "fullType": "docker.stack.inputCustomSsl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "docker.stack.registryCredentials"
        }
      ],
      "path": "/caas/containers/{serviceName}/registry/credentials"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete the registry credentials.",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "credentials id",
              "fullType": "string",
              "name": "credentialsId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "service name",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Inspect the image registry credentials associated to the stack",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "credentials id",
              "fullType": "string",
              "name": "credentialsId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "docker.stack.registryCredentials"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update the registry credentials.",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "docker.stack.inputCustomSsl",
              "description": "Credentials providing authentication to an external registry",
              "fullType": "docker.stack.inputCustomSsl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "credentials id",
              "fullType": "string",
              "name": "credentialsId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "docker.stack.registryCredentials"
        }
      ],
      "path": "/caas/containers/{serviceName}/registry/credentials/{credentialsId}"
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
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal ID of your project",
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
              "description": "The internal ID of your project",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/caas/containers/{serviceName}/serviceInfos"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List the id of the registered slave instances",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/caas/containers/{serviceName}/slaves"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Inspect the argument user slave instance",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "slave id",
              "fullType": "string",
              "name": "slaveId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "docker.slave"
        }
      ],
      "path": "/caas/containers/{serviceName}/slaves/{slaveId}"
    },
    {
      "description": "Missing description",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete the custom SSL certificate and private key associated to the stack",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "docker.stack.customSslMessage"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Inspect the custom SSL certificate and private",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "docker.stack.customSsl"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update the custom SSL certificate and private",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "docker.stack.inputCustomSsl",
              "description": "A custom SSL certificate associated to a Docker PaaS environment",
              "fullType": "docker.stack.inputCustomSsl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "docker.stack.customSslMessage"
        }
      ],
      "path": "/caas/containers/{serviceName}/ssl"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "docker.framework.password": {
      "description": "The new framework password",
      "id": "password",
      "namespace": "docker.framework",
      "properties": {
        "password": {
          "canBeNull": false,
          "description": "The new framework password",
          "fullType": "password",
          "readOnly": false,
          "required": false,
          "type": "password"
        }
      }
    },
    "docker.slave": {
      "description": "A host on which containers can be deployed",
      "id": "slave",
      "namespace": "docker",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "flavorId": {
          "canBeNull": false,
          "description": "The framework UUID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "The slave UUID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "metrics": {
          "canBeNull": false,
          "description": "Metrics about slave usage",
          "fullType": "docker.slave.metrics",
          "readOnly": true,
          "required": false,
          "type": "docker.slave.metrics"
        },
        "name": {
          "canBeNull": false,
          "description": "The slave hostname",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "region": {
          "canBeNull": false,
          "description": "The region where the slave is located",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "stack": {
          "canBeNull": false,
          "description": "The stack to which the slave belongs",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "description": "The state of the slave",
          "fullType": "docker.slave.status",
          "readOnly": true,
          "required": false,
          "type": "docker.slave.status"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "docker.slave.flavor": {
      "description": "Attributes of the slave flavor",
      "id": "flavor",
      "namespace": "docker.slave",
      "properties": {
        "bandwidth": {
          "canBeNull": false,
          "description": "The network bandwidth, in Mbps",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "cpus": {
          "canBeNull": false,
          "description": "The amount of (v)CPUs",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "disk": {
          "canBeNull": false,
          "description": "The disk size, in GB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "diskHa": {
          "canBeNull": false,
          "description": "Wether the disk is HA (stored in Ceph) or local (SSD)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "id": {
          "canBeNull": false,
          "description": "The flavor UUID",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "isVm": {
          "canBeNull": false,
          "description": "Whether the flavor is an Openstack or dedicated flavor",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ram": {
          "canBeNull": false,
          "description": "The amount of RAM, in MB",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "docker.slave.framework.app": {
      "description": "Application data",
      "id": "app",
      "namespace": "docker.slave.framework",
      "properties": {
        "cpu": {
          "canBeNull": true,
          "description": "Application CPU",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "env": {
          "canBeNull": false,
          "description": "Application environment",
          "fullType": "docker.slave.framework.app.environment[]",
          "readOnly": true,
          "required": false,
          "type": "docker.slave.framework.app.environment[]"
        },
        "id": {
          "canBeNull": true,
          "description": "Application id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "image": {
          "canBeNull": true,
          "description": "Application image",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "instances": {
          "canBeNull": true,
          "description": "Number of running containers instances",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "mem": {
          "canBeNull": true,
          "description": "Application memory",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "ports": {
          "canBeNull": false,
          "description": "Application ports",
          "fullType": "docker.slave.framework.app.port[]",
          "readOnly": true,
          "required": false,
          "type": "docker.slave.framework.app.port[]"
        },
        "status": {
          "canBeNull": true,
          "description": "Application status",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "volumes": {
          "canBeNull": false,
          "description": "Application volumes",
          "fullType": "docker.slave.framework.app.volume[]",
          "readOnly": true,
          "required": false,
          "type": "docker.slave.framework.app.volume[]"
        }
      }
    },
    "docker.slave.framework.app.environment": {
      "description": "Application environment variable",
      "id": "environment",
      "namespace": "docker.slave.framework.app",
      "properties": {
        "key": {
          "canBeNull": true,
          "description": "variable key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "variable value",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "docker.slave.framework.app.port": {
      "description": "Application ports",
      "id": "port",
      "namespace": "docker.slave.framework.app",
      "properties": {
        "containerPort": {
          "canBeNull": true,
          "description": "Container port",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "hostPort": {
          "canBeNull": true,
          "description": "Host port",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "protocol": {
          "canBeNull": true,
          "description": "Port protocol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "docker.slave.framework.app.volume": {
      "description": "Application volumes",
      "id": "volume",
      "namespace": "docker.slave.framework.app",
      "properties": {
        "containerPath": {
          "canBeNull": true,
          "description": "Container path",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "hostPath": {
          "canBeNull": true,
          "description": "Host path",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "mode": {
          "canBeNull": true,
          "description": "Volume mode",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "docker.slave.metrics": {
      "description": "Metrics about slave usage",
      "id": "metrics",
      "namespace": "docker.slave",
      "properties": {
        "resources": {
          "canBeNull": false,
          "description": "Metrics about available slave resources",
          "fullType": "docker.slave.metrics.resources",
          "readOnly": true,
          "required": false,
          "type": "docker.slave.metrics.resources"
        },
        "usedResources": {
          "canBeNull": false,
          "description": "Metrics about used slave resources",
          "fullType": "docker.slave.metrics.usedResources",
          "readOnly": true,
          "required": false,
          "type": "docker.slave.metrics.usedResources"
        }
      }
    },
    "docker.slave.metrics.resources": {
      "description": "Metrics about available slave resources",
      "id": "resources",
      "namespace": "docker.slave.metrics",
      "properties": {
        "cpu": {
          "canBeNull": true,
          "description": "Available CPU",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "mem": {
          "canBeNull": true,
          "description": "Available memory",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "docker.slave.metrics.usedResources": {
      "description": "Metrics about used slave resources",
      "id": "usedResources",
      "namespace": "docker.slave.metrics",
      "properties": {
        "cpu": {
          "canBeNull": true,
          "description": "Used CPU",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "mem": {
          "canBeNull": true,
          "description": "Used memory",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "docker.slave.status": {
      "description": "The state of the slave",
      "enum": [
        "blocked",
        "created",
        "creating"
      ],
      "enumType": "string",
      "id": "status",
      "namespace": "docker.slave"
    },
    "docker.stack": {
      "description": "An isolated client Docker PaaS environment",
      "id": "stack",
      "namespace": "docker",
      "properties": {
        "cluster": {
          "canBeNull": true,
          "description": "The cluster on which the stack is deployed",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "loadBalancer": {
          "canBeNull": false,
          "description": "The DNS address of the stack load balancer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "metrics": {
          "canBeNull": false,
          "description": "Metrics about slave usage",
          "fullType": "docker.slave.metrics",
          "readOnly": true,
          "required": false,
          "type": "docker.slave.metrics"
        },
        "name": {
          "canBeNull": false,
          "description": "The stack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "slaves": {
          "canBeNull": false,
          "description": "A list of slave UUIDs",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "docker.stack.customSsl": {
      "description": "A custom SSL certificate associated to a Docker PaaS environment",
      "id": "customSsl",
      "namespace": "docker.stack",
      "properties": {
        "certificate": {
          "canBeNull": false,
          "description": "The custom SSL public certificate",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "docker.stack.customSslMessage": {
      "description": "Action validation message",
      "id": "customSslMessage",
      "namespace": "docker.stack",
      "properties": {
        "message": {
          "canBeNull": false,
          "description": "The action validation message",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "docker.stack.inputCustomSsl": {
      "description": "A custom SSL certificate associated to a Docker PaaS environment",
      "id": "inputCustomSsl",
      "namespace": "docker.stack",
      "properties": {
        "certificate": {
          "canBeNull": false,
          "description": "The custom SSL public certificate",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "key": {
          "canBeNull": false,
          "description": "The custom SSL certificate private key",
          "fullType": "password",
          "readOnly": false,
          "required": false,
          "type": "password"
        }
      }
    },
    "docker.stack.registryCredentials": {
      "description": "Credentials providing authentication to an external registry",
      "id": "registryCredentials",
      "namespace": "docker.stack",
      "properties": {
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "registryUrl": {
          "canBeNull": false,
          "description": "The URL of the registry",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "username": {
          "canBeNull": false,
          "description": "The registry account username",
          "fullType": "string",
          "readOnly": false,
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
    "stack.framework": {
      "description": "A framework installed for a docker PaaS stack",
      "id": "framework",
      "namespace": "stack",
      "properties": {
        "accessUrl": {
          "canBeNull": false,
          "description": "The framework name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Date of the resource creation",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "The framework UUID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "The framework name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "updatedAt": {
          "canBeNull": false,
          "description": "Date of the resource last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "stack.framework.application": {
      "description": "Application deployed on the framework",
      "id": "application",
      "namespace": "stack.framework",
      "properties": {
        "apps": {
          "canBeNull": false,
          "description": "Application list",
          "fullType": "docker.slave.framework.app[]",
          "readOnly": true,
          "required": false,
          "type": "docker.slave.framework.app[]"
        }
      }
    }
  },
  "resourcePath": "/caas/containers"
}