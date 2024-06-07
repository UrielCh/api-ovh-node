import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/nutanix.json

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
          "iamActions": [
            {
              "name": "nutanix:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "map[string][]iam.resource.TagFilter",
              "description": "Filter resources on IAM tags",
              "name": "iamTags",
              "paramType": "query",
              "required": false
            }
          ],
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
          "iamActions": [
            {
              "name": "nutanix:apiovh:get",
              "required": true
            }
          ],
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
          "responseType": "nutanix.stateWithIAM"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Update nutanix cluster info",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "nutanix:apiovh:edit",
              "required": true
            }
          ],
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
              "description": "I am aware that I am going to make changes that will reinstall my cluster",
              "fullType": "boolean",
              "name": "redeploycluster",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "I am aware that I am going to make changes that will scale-up my cluster",
              "fullType": "boolean",
              "name": "scaleUp",
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
            {
              "name": "nutanix:apiovh:changeContact",
              "required": true
            }
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
              "description": "Cluster name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/nutanix/{serviceName}/changeContact"
    },
    {
      "description": "Confirm service termination",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Confirm service termination",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "nutanix:apiovh:confirmTermination",
              "required": true
            }
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
              "description": "The termination token sent by email to the admin contact",
              "fullType": "string",
              "name": "token",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Cluster name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/nutanix/{serviceName}/confirmTermination"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "nutanix:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster name",
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
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "nutanix:apiovh:serviceInfos/edit",
              "required": true
            }
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
              "description": "Cluster name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/nutanix/{serviceName}/serviceInfos"
    },
    {
      "description": "Ask for the termination of your service. Admin contact of this service will receive a termination token in order to confirm its termination with /confirmTermination endpoint.",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Ask for the termination of your service",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "nutanix:apiovh:terminate",
              "required": true
            }
          ],
          "longDescription": "Ask for the termination of your service. Admin contact of this service will receive a termination token by email in order to confirm its termination with /confirmTermination endpoint.",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Cluster name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/nutanix/{serviceName}/terminate"
    },
    {
      "description": "Fetch the availabilities for a given cluster configuration",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Fetch the availabilities for a given cluster configuration",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "",
              "fullType": "boolean",
              "name": "erasureCoding",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of the memory hardware part",
              "fullType": "string",
              "name": "memory",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The plan code in which the hardware is involved",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Node quantity",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "",
              "fullType": "boolean",
              "name": "rackAwareness",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "nutanix.RedundancyFactorEnum",
              "description": "",
              "fullType": "nutanix.RedundancyFactorEnum",
              "name": "redundancyFactor",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of the base hardware",
              "fullType": "string",
              "name": "server",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of the storage hardware part",
              "fullType": "string",
              "name": "storage",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of the system storage hardware part",
              "fullType": "string",
              "name": "systemStorage",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "nutanix.availability[]"
        }
      ],
      "path": "/nutanix/availabilities"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List the raw availability for Nutanix cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The names of datacenters separated by commas",
              "fullType": "string",
              "name": "datacenters",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "nutanix.DeploymentTypeEnum",
              "description": "",
              "fullType": "nutanix.DeploymentTypeEnum",
              "name": "deploymentType",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "",
              "fullType": "boolean",
              "name": "erasureCoding",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "If true, all datacenters are returned except those listed in datacenters parameter",
              "fullType": "boolean",
              "name": "excludeDatacenters",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "boolean",
              "description": "If true, all regions are returned except those listed in regions parameter",
              "fullType": "boolean",
              "name": "excludeRegions",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of the memory hardware part",
              "fullType": "string",
              "name": "memory",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The plan code in which the hardware is involved",
              "fullType": "string",
              "name": "planCode",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "long",
              "description": "Node quantity",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "nutanix.RedundancyFactorEnum",
              "description": "",
              "fullType": "nutanix.RedundancyFactorEnum",
              "name": "redundancyFactor",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The names of regions separated by commas",
              "fullType": "string",
              "name": "regions",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of the base hardware",
              "fullType": "string",
              "name": "server",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of the storage hardware part",
              "fullType": "string",
              "name": "storage",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The name of the system storage hardware part",
              "fullType": "string",
              "name": "systemStorage",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "nutanix.AvailabilitiesRaw[]"
        }
      ],
      "path": "/nutanix/availabilities/raw"
    },
    {
      "description": "Fetch the available Nutanix versions to install",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Fetch the available Nutanix versions to install",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Fully qualified name and unique name of the hardware",
              "fullType": "string",
              "name": "fqn",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/nutanix/availableVersions"
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
          "noAuthentication": true,
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
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "iam.ResourceMetadata": {
      "description": "IAM resource metadata embedded in services models",
      "id": "ResourceMetadata",
      "namespace": "iam",
      "properties": {
        "displayName": {
          "canBeNull": true,
          "description": "Resource display name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique identifier of the resource",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "tags": {
          "canBeNull": true,
          "description": "Resource tags. Tags that were internally computed are prefixed with ovh:",
          "fullType": "map[string]string",
          "readOnly": true,
          "required": false,
          "type": "map[string]string"
        },
        "urn": {
          "canBeNull": false,
          "description": "Unique resource name used in policies",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter": {
      "description": "Resource tag filter",
      "id": "TagFilter",
      "namespace": "iam.resource",
      "properties": {
        "operator": {
          "canBeNull": true,
          "description": "Operator to use in order to filter on the value (defaults to 'EQ')",
          "fullType": "iam.resource.TagFilter.OperatorEnum",
          "readOnly": true,
          "required": false,
          "type": "iam.resource.TagFilter.OperatorEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "Value to use in order to filter tags",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "iam.resource.TagFilter.OperatorEnum": {
      "description": "Operator that can be used in order to filter resources tags",
      "enum": [
        "EQ"
      ],
      "enumType": "string",
      "id": "OperatorEnum",
      "namespace": "iam.resource.TagFilter"
    },
    "nutanix.AvailabilitiesRaw": {
      "description": "Cluster availability",
      "id": "AvailabilitiesRaw",
      "namespace": "nutanix",
      "properties": {
        "datacenters": {
          "canBeNull": false,
          "description": "A structure describing the hardware availability for each datacenter",
          "fullType": "nutanix.AvailabilitiesRawDatacenter[]",
          "readOnly": true,
          "required": false,
          "type": "nutanix.AvailabilitiesRawDatacenter[]"
        },
        "deploymentType": {
          "canBeNull": true,
          "description": "Deployment type",
          "fullType": "nutanix.DeploymentTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "nutanix.DeploymentTypeEnum"
        },
        "erasureCoding": {
          "canBeNull": true,
          "description": "Erasure coding activation",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "fqn": {
          "canBeNull": false,
          "description": "Fully qualified name and unique name of the hardware",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "memory": {
          "canBeNull": false,
          "description": "Name of the memory hardware part",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan code in which the hardware is involved",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "redundancyFactor": {
          "canBeNull": true,
          "description": "Redundancy factor",
          "fullType": "nutanix.RedundancyFactorEnum",
          "readOnly": true,
          "required": false,
          "type": "nutanix.RedundancyFactorEnum"
        },
        "server": {
          "canBeNull": false,
          "description": "Name of the base hardware",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "storage": {
          "canBeNull": false,
          "description": "Name of the storage hardware part",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "systemStorage": {
          "canBeNull": true,
          "description": "Name of the system storage hardware part",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "nutanix.AvailabilitiesRawDatacenter": {
      "description": "A structure describing the hardware raw availability for each datacenter",
      "id": "AvailabilitiesRawDatacenter",
      "namespace": "nutanix",
      "properties": {
        "availability": {
          "canBeNull": false,
          "description": "The availability",
          "fullType": "nutanix.AvailabilityEnum",
          "readOnly": true,
          "required": false,
          "type": "nutanix.AvailabilityEnum"
        },
        "datacenter": {
          "canBeNull": false,
          "description": "The datacenter code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastRule": {
          "canBeNull": true,
          "description": "Last availability rule applied",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "parentAvailable": {
          "canBeNull": false,
          "description": "Real stock including parent references",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "trueAvailable": {
          "canBeNull": false,
          "description": "Real stock",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "nutanix.AvailabilityEnum": {
      "description": "Cluster availability",
      "enum": [
        "1440H",
        "240H",
        "2880H",
        "480H",
        "720H",
        "72H",
        "comingSoon",
        "unavailable"
      ],
      "enumType": "string",
      "id": "AvailabilityEnum",
      "namespace": "nutanix"
    },
    "nutanix.DatacenterAvailability": {
      "description": "Cluster datacenter availability",
      "id": "DatacenterAvailability",
      "namespace": "nutanix",
      "properties": {
        "availability": {
          "canBeNull": false,
          "description": "Availability status",
          "fullType": "nutanix.AvailabilityEnum",
          "readOnly": true,
          "required": false,
          "type": "nutanix.AvailabilityEnum"
        },
        "datacenter": {
          "canBeNull": false,
          "description": "Datacenter code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "nutanix.DeploymentTypeEnum": {
      "description": "Cluster deployment type",
      "enum": [
        "NodeAwareness"
      ],
      "enumType": "string",
      "id": "DeploymentTypeEnum",
      "namespace": "nutanix"
    },
    "nutanix.RedundancyFactorEnum": {
      "description": "Cluster redundancy factor",
      "enum": [
        2,
        3
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
    "nutanix.availability": {
      "description": "Cluster availability",
      "id": "availability",
      "namespace": "nutanix",
      "properties": {
        "datacenters": {
          "canBeNull": false,
          "description": "A structure describing the hardware availability for each datacenter",
          "fullType": "nutanix.DatacenterAvailability[]",
          "readOnly": true,
          "required": false,
          "type": "nutanix.DatacenterAvailability[]"
        },
        "deploymentType": {
          "canBeNull": true,
          "description": "Deployment type",
          "fullType": "nutanix.DeploymentTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "nutanix.DeploymentTypeEnum"
        },
        "erasureCoding": {
          "canBeNull": true,
          "description": "Erasure coding activation",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "fqn": {
          "canBeNull": false,
          "description": "Fully qualified name and unique name of the hardware",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "memory": {
          "canBeNull": false,
          "description": "Name of the memory hardware part",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "planCode": {
          "canBeNull": false,
          "description": "Plan code in which the hardware is involved",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "redundancyFactor": {
          "canBeNull": true,
          "description": "Redundancy factor",
          "fullType": "nutanix.RedundancyFactorEnum",
          "readOnly": true,
          "required": false,
          "type": "nutanix.RedundancyFactorEnum"
        },
        "server": {
          "canBeNull": false,
          "description": "Name of the base hardware",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "storage": {
          "canBeNull": false,
          "description": "Name of the storage hardware part",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "systemStorage": {
          "canBeNull": true,
          "description": "Name of the system storage hardware part",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "nutanix.cluster": {
      "description": "Cluster configuration",
      "id": "cluster",
      "namespace": "nutanix",
      "properties": {
        "controlPanelURL": {
          "canBeNull": false,
          "description": "Control Panel URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
        "infraVlanNumber": {
          "canBeNull": false,
          "description": "Infra-Vlan number",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "ipfo": {
          "canBeNull": false,
          "description": "External Gateway IP, with mask",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": false,
          "type": "ipBlock"
        },
        "iplb": {
          "canBeNull": false,
          "description": "IPLB ID",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "readOnly": false,
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
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "server": {
          "canBeNull": false,
          "description": "Name of the associated server",
          "fullType": "string",
          "readOnly": true,
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
        "allowedRedundancyFactor": {
          "canBeNull": false,
          "description": "Available redundancy Factor",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "availableVersions": {
          "canBeNull": false,
          "description": "Available versions to install",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
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
    "nutanix.stateWithIAM": {
      "description": "Nutanix Cluster State",
      "id": "state",
      "namespace": "nutanix",
      "properties": {
        "allowedRedundancyFactor": {
          "canBeNull": false,
          "description": "Available redundancy Factor",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "availableVersions": {
          "canBeNull": false,
          "description": "Available versions to install",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
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
  "resourcePath": "/nutanix"
}