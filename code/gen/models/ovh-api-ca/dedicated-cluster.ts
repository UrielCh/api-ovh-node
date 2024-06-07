import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/dedicated/cluster.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Manage dedicated clusters",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List dedicated clusters",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "clusterDelivery:apiovh:get",
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
          "responseType": "uuid[]"
        }
      ],
      "path": "/dedicated/cluster"
    },
    {
      "description": "Manage dedicated clusters",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get cluster info",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "clusterDelivery:apiovh:get",
              "required": true
            }
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
          "responseType": "dedicated.cluster.ClusterWithIAM"
        }
      ],
      "path": "/dedicated/cluster/{serviceName}"
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
              "name": "clusterDelivery:apiovh:changeContact",
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
      "path": "/dedicated/cluster/{serviceName}/changeContact"
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
              "name": "clusterDelivery:apiovh:confirmTermination",
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
      "path": "/dedicated/cluster/{serviceName}/confirmTermination"
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
              "name": "clusterDelivery:apiovh:serviceInfos/get",
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
              "name": "clusterDelivery:apiovh:serviceInfos/edit",
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
      "path": "/dedicated/cluster/{serviceName}/serviceInfos"
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
              "name": "clusterDelivery:apiovh:terminate",
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
      "path": "/dedicated/cluster/{serviceName}/terminate"
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
              "description": "Cluster quantity",
              "fullType": "long",
              "name": "quantity",
              "paramType": "query",
              "required": true
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
          "responseType": "dedicated.cluster.availability[]"
        }
      ],
      "path": "/dedicated/cluster/availabilities"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List the raw availability for cluster",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
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
              "dataType": "dedicated.server.AvailabilityRegionalizationEnum",
              "description": "The names of regions separated by commas",
              "fullType": "dedicated.server.AvailabilityRegionalizationEnum",
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
          "responseType": "dedicated.cluster.AvailabilitiesRaw[]"
        }
      ],
      "path": "/dedicated/cluster/availabilities/raw"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "dedicated.cluster.AvailabilitiesRaw": {
      "description": "Cluster availability",
      "id": "AvailabilitiesRaw",
      "namespace": "dedicated.cluster",
      "properties": {
        "clusterPlanCode": {
          "canBeNull": false,
          "description": "Plan code in which the hardware is involved",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
        "regions": {
          "canBeNull": false,
          "description": "A structure describing the hardware availability for each region",
          "fullType": "dedicated.cluster.AvailabilitiesRawRegion[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.cluster.AvailabilitiesRawRegion[]"
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
    "dedicated.cluster.AvailabilitiesRawRegion": {
      "description": "A structure describing the hardware raw availability for each region",
      "id": "AvailabilitiesRawRegion",
      "namespace": "dedicated.cluster",
      "properties": {
        "availability": {
          "canBeNull": false,
          "description": "The availability",
          "fullType": "dedicated.server.AvailabilityEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.AvailabilityEnum"
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
        "region": {
          "canBeNull": false,
          "description": "The region code",
          "fullType": "dedicated.server.AvailabilityEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.AvailabilityEnum"
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
    "dedicated.cluster.Cluster": {
      "description": "A structure describing the dedicated cluster",
      "id": "Cluster",
      "namespace": "dedicated.cluster",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Cluster's ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "model": {
          "canBeNull": false,
          "description": "Model of the cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nodes": {
          "canBeNull": false,
          "description": "Cluster's nodes",
          "fullType": "dedicated.cluster.Node[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.cluster.Node[]"
        },
        "region": {
          "canBeNull": false,
          "description": "Region where cluster is located",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Cluster status",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.cluster.ClusterWithIAM": {
      "description": "A structure describing the dedicated cluster",
      "id": "Cluster",
      "namespace": "dedicated.cluster",
      "properties": {
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "id": {
          "canBeNull": false,
          "description": "Cluster's ID",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "model": {
          "canBeNull": false,
          "description": "Model of the cluster",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "nodes": {
          "canBeNull": false,
          "description": "Cluster's nodes",
          "fullType": "dedicated.cluster.Node[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.cluster.Node[]"
        },
        "region": {
          "canBeNull": false,
          "description": "Region where cluster is located",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Cluster status",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.cluster.Node": {
      "description": "A structure describing the nodes of the cluster",
      "id": "Node",
      "namespace": "dedicated.cluster",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "ID of the node",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "serverId": {
          "canBeNull": false,
          "description": "ID of the server",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "serverName": {
          "canBeNull": false,
          "description": "Name of the server",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.cluster.RegionAvailability": {
      "description": "A structure describing the availabilities of dedicated server",
      "id": "RegionAvailability",
      "namespace": "dedicated.cluster",
      "properties": {
        "availability": {
          "canBeNull": false,
          "description": "The availability",
          "fullType": "dedicated.server.AvailabilityEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.AvailabilityEnum"
        },
        "region": {
          "canBeNull": false,
          "description": "The region",
          "fullType": "dedicated.server.AvailabilityRegionalizationEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.AvailabilityRegionalizationEnum"
        }
      }
    },
    "dedicated.cluster.availability": {
      "description": "Cluster availability",
      "id": "availability",
      "namespace": "dedicated.cluster",
      "properties": {
        "clusterPlanCode": {
          "canBeNull": false,
          "description": "Plan code in which the hardware is involved",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
        "regions": {
          "canBeNull": false,
          "description": "A structure describing the hardware availability for each datacenter",
          "fullType": "dedicated.cluster.RegionAvailability[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.cluster.RegionAvailability[]"
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
    "dedicated.server.AvailabilityEnum": {
      "description": "The availability",
      "enum": [
        "120H",
        "1440H",
        "1H-high",
        "1H-low",
        "2160H",
        "240H",
        "24H",
        "480H",
        "720H",
        "72H",
        "comingSoon",
        "unavailable",
        "unknown"
      ],
      "enumType": "string",
      "id": "AvailabilityEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.AvailabilityRegionalizationEnum": {
      "description": "The region",
      "enum": [
        "ap-south-1",
        "ap-southeast-sgp",
        "ap-southeast-syd",
        "ca-east-1",
        "ca-east-bhs",
        "eu-central-waw",
        "eu-west-eri",
        "eu-west-gra",
        "eu-west-lim",
        "eu-west-par",
        "eu-west-rbx",
        "eu-west-sbg",
        "us-east-vin",
        "us-west-hil"
      ],
      "enumType": "string",
      "id": "AvailabilityRegionalizationEnum",
      "namespace": "dedicated.server"
    },
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
  "resourcePath": "/dedicated/cluster"
}