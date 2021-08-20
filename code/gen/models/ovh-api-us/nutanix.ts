import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/nutanix.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Manage nutanix clusters",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get list of owned Nutanix Clusters",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/nutanix"
    },
    {
      "description": "Manage nutanix clusters",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get nutanix cluster info",
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
          "responseType": "nutanix.state"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update nutanix cluster info",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "nutanix.cluster",
              "description": "Request Body",
              "fullType": "nutanix.cluster",
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
              "dataType": "boolean",
              "description": "I aware that I'm going to make changes that will reinstall my cluster",
              "fullType": "boolean",
              "name": "redeploycluster",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "nutanix.state"
        }
      ],
      "path": "/nutanix/{serviceName}"
    },
    {
      "description": "Fetch the requirements for a given cluster configuration",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Fetch the requirements for a given cluster configuration",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "",
              "fullType": "boolean",
              "name": "erasureCoding",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "",
              "fullType": "boolean",
              "name": "rackAwareness",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "nutanix.RedundancyFactorEnum",
              "description": "",
              "fullType": "nutanix.RedundancyFactorEnum",
              "name": "redundancyFactor",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "nutanix.Requirements"
        }
      ],
      "path": "/nutanix/requirements"
    }
  ],
  "basePath": "https://api.us.ovhcloud.com/1.0",
  "models": {
    "nutanix.LicenseEnum": {
      "description": "License type",
      "enum": [
        "pro",
        "ultimate"
      ],
      "enumType": "string",
      "id": "LicenseEnum",
      "namespace": "nutanix"
    },
    "nutanix.RedundancyFactorEnum": {
      "description": "Cluster redundancy factor",
      "enum": [
        "2",
        "3"
      ],
      "enumType": "long",
      "id": "RedundancyFactorEnum",
      "namespace": "nutanix"
    },
    "nutanix.Requirements": {
      "description": "Return the needed requirements for a given cluster configuration",
      "id": "Requirements",
      "namespace": "nutanix",
      "properties": {
        "maxNodes": {
          "canBeNull": false,
          "description": "Maximum number of nodes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "minNodes": {
          "canBeNull": false,
          "description": "Minimum number of nodes",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "scaleFactor": {
          "canBeNull": false,
          "description": "Number of added/removed nodes in case of scaling up/down",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "nutanix.cluster": {
      "description": "Cluster configuration",
      "id": "cluster",
      "namespace": "nutanix",
      "properties": {
        "allowedRedundancyFactor": {
          "canBeNull": false,
          "description": "Redundancy Factor available",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "erasureCoding": {
          "canBeNull": false,
          "description": "Erasure coding activation",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "gatewayCidr": {
          "canBeNull": false,
          "description": "Internal Gateway IP, with mask",
          "fullType": "ipBlock",
          "readOnly": false,
          "required": false,
          "type": "ipBlock"
        },
        "ipfo": {
          "canBeNull": false,
          "description": "External Gateway IP, with mask",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "license": {
          "canBeNull": false,
          "description": "License type",
          "fullType": "nutanix.LicenseEnum",
          "readOnly": true,
          "required": false,
          "type": "nutanix.LicenseEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Cluster name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nodes": {
          "canBeNull": false,
          "description": "Cluster node list",
          "fullType": "nutanix.nodes[]",
          "readOnly": true,
          "required": false,
          "type": "nutanix.nodes[]"
        },
        "prismCentral": {
          "canBeNull": false,
          "description": "Prism Central Configuration",
          "fullType": "nutanix.prismcentral",
          "readOnly": false,
          "required": false,
          "type": "nutanix.prismcentral"
        },
        "prismElementVip": {
          "canBeNull": false,
          "description": "Prism Element IP",
          "fullType": "ipv4",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "prismSecretId": {
          "canBeNull": false,
          "description": "UUID for secret",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "rackAwareness": {
          "canBeNull": false,
          "description": "Rack Awareness activation",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "redundancyFactor": {
          "canBeNull": false,
          "description": "Redundancy Factor",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "version": {
          "canBeNull": false,
          "description": "AOS Version",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "vrack": {
          "canBeNull": false,
          "description": "vRack name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "nutanix.nodes": {
      "description": "Nodes in nutanix cluster",
      "id": "nodes",
      "namespace": "nutanix",
      "properties": {
        "ahvIp": {
          "canBeNull": false,
          "description": "Hypervisor IP",
          "fullType": "ipv4",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "cvmIp": {
          "canBeNull": false,
          "description": "Controler VM IP",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "server": {
          "canBeNull": false,
          "description": "Name of the associated server",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "nutanix.pctypeEnum": {
      "description": "Prism Central deployment type",
      "enum": [
        "alone",
        "scale"
      ],
      "enumType": "string",
      "id": "pctypeEnum",
      "namespace": "nutanix"
    },
    "nutanix.prismcentral": {
      "description": "Prism Central Config",
      "id": "prismcentral",
      "namespace": "nutanix",
      "properties": {
        "ips": {
          "canBeNull": false,
          "description": "Prism Central IPs",
          "fullType": "ipv4[]",
          "readOnly": false,
          "required": false,
          "type": "ipv4[]"
        },
        "type": {
          "canBeNull": false,
          "description": "Prism Central type",
          "fullType": "nutanix.pctypeEnum",
          "readOnly": false,
          "required": false,
          "type": "nutanix.pctypeEnum"
        },
        "vip": {
          "canBeNull": false,
          "description": "Prism Central IP",
          "fullType": "ipv4",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        }
      }
    },
    "nutanix.state": {
      "description": "Nutanix Cluster State",
      "id": "state",
      "namespace": "nutanix",
      "properties": {
        "serviceName": {
          "canBeNull": false,
          "description": "Cluster name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Current cluster's status",
          "fullType": "nutanix.statusEnum",
          "readOnly": true,
          "required": false,
          "type": "nutanix.statusEnum"
        },
        "targetSpec": {
          "canBeNull": false,
          "description": "Target Spec after deployment",
          "fullType": "nutanix.cluster",
          "readOnly": true,
          "required": false,
          "type": "nutanix.cluster"
        }
      }
    },
    "nutanix.statusEnum": {
      "description": "Cluster status",
      "enum": [
        "Active",
        "Deploying",
        "Error"
      ],
      "enumType": "string",
      "id": "statusEnum",
      "namespace": "nutanix"
    }
  },
  "resourcePath": "/nutanix"
}