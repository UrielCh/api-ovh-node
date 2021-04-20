import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/webPaaS.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List available regions and templates",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "webPaaS.OfferEnum",
              "description": "The offer code for which capabilities should be filtered",
              "fullType": "webPaaS.OfferEnum",
              "name": "planCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "webPaaS.Capabilities"
        }
      ],
      "path": "/webPaaS/capabilities"
    },
    {
      "description": "Manage your subscriptions",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List your subscriptions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/webPaaS/subscription"
    },
    {
      "description": "Manage your subscriptions",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get information about your subscription",
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
          "responseType": "webPaaS.Subscription"
        }
      ],
      "path": "/webPaaS/subscription/{serviceName}"
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
              "description": "The Web PaaS subscription ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/webPaaS/subscription/{serviceName}/confirmTermination"
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
              "description": "The Web PaaS subscription ID",
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
              "description": "The Web PaaS subscription ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/webPaaS/subscription/{serviceName}/serviceInfos"
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
              "description": "The Web PaaS subscription ID",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/webPaaS/subscription/{serviceName}/terminate"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
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
    },
    "webPaaS.AddonFamilyEnum": {
      "description": "Valid addon offers faimly",
      "enum": [
        "storage",
        "user_license",
        "staging_environment"
      ],
      "enumType": "string",
      "id": "AddonFamilyEnum",
      "namespace": "webPaaS"
    },
    "webPaaS.AddonProductNameEnum": {
      "description": "Valid addon product name",
      "enum": [
        "additional-storage",
        "additional-staging-environment",
        "additional-user-license"
      ],
      "enumType": "string",
      "id": "AddonProductNameEnum",
      "namespace": "webPaaS"
    },
    "webPaaS.Capabilities": {
      "description": "Capabilties Response",
      "id": "Capabilities",
      "namespace": "webPaaS",
      "properties": {
        "regions": {
          "canBeNull": false,
          "description": "Regions available for a plan",
          "fullType": "webPaaS.RegionEnum[]",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.RegionEnum[]"
        },
        "templates": {
          "canBeNull": false,
          "description": "Templates available for a plan",
          "fullType": "webPaaS.Template[]",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.Template[]"
        }
      }
    },
    "webPaaS.CustomerTypeEnum": {
      "description": "Valid states of a subscription",
      "enum": [
        "OWNER",
        "USER"
      ],
      "enumType": "string",
      "id": "CustomerTypeEnum",
      "namespace": "webPaaS"
    },
    "webPaaS.OfferEnum": {
      "description": "Valid offers by Web PaaS",
      "enum": [
        "start-1",
        "start-2",
        "start-4",
        "start-8",
        "start-16",
        "develop-1",
        "develop-2",
        "develop-4",
        "develop-8",
        "develop-16",
        "expand-1",
        "expand-2",
        "expand-4",
        "expand-8",
        "expand-16"
      ],
      "enumType": "string",
      "id": "OfferEnum",
      "namespace": "webPaaS"
    },
    "webPaaS.RegionEnum": {
      "description": "Supported regions for deployment",
      "enum": [
        "GRA7"
      ],
      "enumType": "string",
      "id": "RegionEnum",
      "namespace": "webPaaS"
    },
    "webPaaS.StatusEnum": {
      "description": "Valid states of a subscription",
      "enum": [
        "ACTIVE",
        "PENDING",
        "CANCELED",
        "CANCELING",
        "CANCELLATION_REQUESTED",
        "TERMINATED",
        "SUSPENDED",
        "EXPIRED",
        "ERROR",
        "CLOSED",
        "TO_SETTLE",
        "SETTLING",
        "SETTLED"
      ],
      "enumType": "string",
      "id": "StatusEnum",
      "namespace": "webPaaS"
    },
    "webPaaS.StorageUnitEnum": {
      "description": "Storage Units",
      "enum": [
        "GB"
      ],
      "enumType": "string",
      "id": "StorageUnitEnum",
      "namespace": "webPaaS"
    },
    "webPaaS.Subscription": {
      "description": "Partner subscription",
      "id": "Subscription",
      "namespace": "webPaaS",
      "properties": {
        "addons": {
          "canBeNull": false,
          "description": "Subscription addons",
          "fullType": "webPaaS.SubscriptionAddon[]",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.SubscriptionAddon[]"
        },
        "createdAt": {
          "canBeNull": false,
          "description": "Creation date of subscription",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "endDate": {
          "canBeNull": true,
          "description": "End date of current subscription period. May be null if subscription is not started yet.",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "metadata": {
          "canBeNull": false,
          "description": "Subscription metadata",
          "fullType": "webPaaS.SubscriptionMetadata",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.SubscriptionMetadata"
        },
        "offer": {
          "canBeNull": false,
          "description": "Partner offer linked to this subscription",
          "fullType": "webPaaS.OfferEnum",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.OfferEnum"
        },
        "partnerProjectId": {
          "canBeNull": true,
          "description": "Partner Project Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "projectName": {
          "canBeNull": false,
          "description": "Project Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serviceId": {
          "canBeNull": false,
          "description": "Service Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startDate": {
          "canBeNull": true,
          "description": "Start date of current subscription",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Current status of subscription",
          "fullType": "webPaaS.StatusEnum",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.StatusEnum"
        }
      }
    },
    "webPaaS.SubscriptionAddon": {
      "description": "Subscription addon details",
      "id": "SubscriptionAddon",
      "namespace": "webPaaS",
      "properties": {
        "planFamilyName": {
          "canBeNull": false,
          "description": "Addon Plan Family Name",
          "fullType": "webPaaS.AddonFamilyEnum",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.AddonFamilyEnum"
        },
        "productName": {
          "canBeNull": false,
          "description": "Addon Plan's Product Name",
          "fullType": "webPaaS.AddonProductNameEnum",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.AddonProductNameEnum"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Addon Plan Service Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "webPaaS.SubscriptionMetadata": {
      "description": "Subscription metadata",
      "id": "SubscriptionMetadata",
      "namespace": "webPaaS",
      "properties": {
        "customer": {
          "canBeNull": true,
          "description": "Customer Details",
          "fullType": "webPaaS.subscription.Customer",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.subscription.Customer"
        },
        "partnerConsole": {
          "canBeNull": false,
          "description": "URL to login on partner product",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "project": {
          "canBeNull": true,
          "description": "Project Details",
          "fullType": "webPaaS.subscriptionMetadata.Project",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.subscriptionMetadata.Project"
        }
      }
    },
    "webPaaS.Template": {
      "description": "Template details",
      "id": "Template",
      "namespace": "webPaaS",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "Description about the template",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "features": {
          "canBeNull": false,
          "description": "Features supported by the template",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "image": {
          "canBeNull": false,
          "description": "Template image logo",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the template",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "template": {
          "canBeNull": false,
          "description": "Template URL",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "webPaaS.subscription.Customer": {
      "description": "Customer Details",
      "id": "Customer",
      "namespace": "webPaaS.subscription",
      "properties": {
        "accountName": {
          "canBeNull": false,
          "description": "Account name of the customer",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "customerId": {
          "canBeNull": false,
          "description": "Customer Id",
          "fullType": "uuid",
          "readOnly": true,
          "required": false,
          "type": "uuid"
        },
        "customerType": {
          "canBeNull": false,
          "description": "The type of a customer",
          "fullType": "webPaaS.CustomerTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.CustomerTypeEnum"
        }
      }
    },
    "webPaaS.subscription.project.AddCustomer": {
      "description": "Add Customer details",
      "id": "AddCustomer",
      "namespace": "webPaaS.subscription.project",
      "properties": {
        "accountName": {
          "canBeNull": false,
          "description": "Customer account name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "webPaaS.subscriptionMetadata.Project": {
      "description": "Project Details",
      "id": "Project",
      "namespace": "webPaaS.subscriptionMetadata",
      "properties": {
        "availableEnvironments": {
          "canBeNull": false,
          "description": "Available environments in the subscription",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "availableUserLicenses": {
          "canBeNull": false,
          "description": "Available user licenses for the subscription",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "environment": {
          "canBeNull": false,
          "description": "Number of production environment and staging environments deployed",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "region": {
          "canBeNull": false,
          "description": "Project region",
          "fullType": "webPaaS.RegionEnum",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.RegionEnum"
        },
        "renewDate": {
          "canBeNull": true,
          "description": "Renewal date of current project",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "storage": {
          "canBeNull": true,
          "description": "Total storage allocated for the project",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "storageUnit": {
          "canBeNull": true,
          "description": "Unit of the storage allocated for the project",
          "fullType": "webPaaS.StorageUnitEnum",
          "readOnly": true,
          "required": false,
          "type": "webPaaS.StorageUnitEnum"
        },
        "userLicenses": {
          "canBeNull": true,
          "description": "Total user license count",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "vcpu": {
          "canBeNull": false,
          "description": "Vcpu associated with the subscription",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    }
  },
  "resourcePath": "/webPaaS"
}