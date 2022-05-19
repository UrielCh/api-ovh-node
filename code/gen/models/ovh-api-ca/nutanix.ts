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
              "description": "I am aware that I am going to make changes that will reinstall my cluster",
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
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/nutanix/all"
          ]
        }
      ],
      "path": "/nutanix/{serviceName}/changeContact"
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
              "description": "Cluster name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/nutanix/all"
          ]
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
          "description": "Get this object properties",
          "httpMethod": "GET",
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
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/nutanix/all"
          ]
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
              "description": "Cluster name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/nutanix/all"
          ]
        }
      ],
      "path": "/nutanix/{serviceName}/serviceInfos"
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
          "responseType": "string",
          "scopes": [
            "all",
            "product/nutanix/all"
          ]
        }
      ],
      "path": "/nutanix/{serviceName}/terminate"
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