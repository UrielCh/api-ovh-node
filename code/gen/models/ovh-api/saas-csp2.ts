import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/saas/csp2.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the CSP2 service",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:get",
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
      "path": "/saas/csp2"
    },
    {
      "description": "Operations about the CSP2 service",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:get",
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
          "responseType": "saas.csp2.OfficeTenantWithIAM"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:put",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "saas.csp2.OfficeTenant",
              "description": "Request Body",
              "fullType": "saas.csp2.OfficeTenant",
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
      "path": "/saas/csp2/{serviceName}"
    },
    {
      "description": "billingPeriodPeaks operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get the current billing period's usage peak for each subscription",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:billingPeriodPeaks/get",
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
          "responseType": "saas.csp2.BillingStatistics"
        }
      ],
      "path": "/saas/csp2/{serviceName}/billingPeriodPeaks"
    },
    {
      "description": "List the saas.csp2.OfficeLicence objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Licenses available for order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:orderableLicenses/get",
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
          "responseType": "long[]"
        }
      ],
      "path": "/saas/csp2/{serviceName}/orderableLicenses"
    },
    {
      "description": "List the saas.csp2.OfficeLicence objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:orderableLicenses/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "saas.csp2.OfficeLicence"
        }
      ],
      "path": "/saas/csp2/{serviceName}/orderableLicenses/{id}"
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
              "name": "cspReseller:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The unique identifier of your Office service",
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
              "name": "cspReseller:apiovh:serviceInfos/edit",
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
              "description": "The unique identifier of your Office service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/saas/csp2/{serviceName}/serviceInfos"
    },
    {
      "description": "List the saas.csp2.OfficeSubscription objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Subscriptions associated to this office tenant",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:subscription/get",
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
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Add a subscription to this tenant",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:subscription/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "saas.csp2.SubscriptionCreation",
              "description": "Request Body",
              "fullType": "saas.csp2.SubscriptionCreation",
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
          "responseType": "saas.csp2.OfficeTask"
        }
      ],
      "path": "/saas/csp2/{serviceName}/subscription"
    },
    {
      "description": "List the saas.csp2.OfficeSubscription objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Delete a subscription from this tenant",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:subscription/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "saas.csp2.OfficeTask"
        },
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:subscription/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "saas.csp2.OfficeSubscription"
        }
      ],
      "path": "/saas/csp2/{serviceName}/subscription/{id}"
    },
    {
      "description": "addonsSubscriptionIds operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Addon subscriptions associated to this office subscription",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:subscription/addonsSubscriptionIds/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "long[]"
        }
      ],
      "path": "/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds"
    },
    {
      "description": "availableAddonLicenses operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Gives a list of licenses ids that can be ordered as an addon for this subscription",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:subscription/availableAddonLicenses/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "long[]"
        }
      ],
      "path": "/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses"
    },
    {
      "description": "changeQuantity operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Change the quantity of seats in the subscription",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:subscription/changeQuantity",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "saas.csp2.SubscriptionChangeQuantityCreation",
              "description": "Request Body",
              "fullType": "saas.csp2.SubscriptionChangeQuantityCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "saas.csp2.OfficeTask"
        }
      ],
      "path": "/saas/csp2/{serviceName}/subscription/{id}/changeQuantity"
    },
    {
      "description": "orderAddon operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Creates a new subscription as an addon for this subscription",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:subscription/orderAddon",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "saas.csp2.SubscriptionOrderAddonCreation",
              "description": "Request Body",
              "fullType": "saas.csp2.SubscriptionOrderAddonCreation",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "saas.csp2.OfficeTask"
        }
      ],
      "path": "/saas/csp2/{serviceName}/subscription/{id}/orderAddon"
    },
    {
      "description": "List the saas.csp2.OfficeTask objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Pending tasks of this tenant",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:task/get",
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
          "responseType": "long[]"
        }
      ],
      "path": "/saas/csp2/{serviceName}/task"
    },
    {
      "description": "List the saas.csp2.OfficeTask objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:task/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id",
              "fullType": "long",
              "name": "id",
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
          "responseType": "saas.csp2.OfficeTask"
        }
      ],
      "path": "/saas/csp2/{serviceName}/task/{id}"
    },
    {
      "description": "usageStatistics operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Alpha version",
            "value": "ALPHA"
          },
          "description": "Get the usage statistics over the chosen period",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "cspReseller:apiovh:usageStatistics/get",
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
            },
            {
              "dataType": "msServices.LicensePeriodEnum",
              "description": "The period to query",
              "fullType": "msServices.LicensePeriodEnum",
              "name": "timePeriod",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "saas.csp2.Statistics[]"
        }
      ],
      "path": "/saas/csp2/{serviceName}/usageStatistics"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
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
    "msServices.LicensePeriodEnum": {
      "description": "Period of time used to determine license statistics",
      "enum": [
        "lastMonth",
        "lastQuarter",
        "lastWeek",
        "lastYear"
      ],
      "enumType": "string",
      "id": "LicensePeriodEnum",
      "namespace": "msServices"
    },
    "saas.csp2.BillingStatistics": {
      "description": "Billing statistics for the current period",
      "id": "BillingStatistics",
      "namespace": "saas.csp2",
      "properties": {
        "endDate": {
          "canBeNull": false,
          "description": "End of the billing period",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "lines": {
          "canBeNull": false,
          "description": "List of lines associated to this statistics entity.",
          "fullType": "saas.csp2.BillingStatisticsLine[]",
          "readOnly": true,
          "required": false,
          "type": "saas.csp2.BillingStatisticsLine[]"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start of the billing period",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        }
      }
    },
    "saas.csp2.BillingStatisticsLine": {
      "description": "Billing statistics line.",
      "id": "BillingStatisticsLine",
      "namespace": "saas.csp2",
      "properties": {
        "licenceId": {
          "canBeNull": false,
          "description": "Id of the Office license.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "licenceName": {
          "canBeNull": false,
          "description": "Name of the Office license.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "peakCount": {
          "canBeNull": false,
          "description": "Maximum count of simultaneous activated licences.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "saas.csp2.LicenseTypeEnum": {
      "description": "Office license's type",
      "enum": [
        "ADDON",
        "NON-SPECIFIC"
      ],
      "enumType": "string",
      "id": "LicenseTypeEnum",
      "namespace": "saas.csp2"
    },
    "saas.csp2.OfficeLicence": {
      "description": "Office licence",
      "id": "OfficeLicence",
      "namespace": "saas.csp2",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "License unique identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "licenceType": {
          "canBeNull": false,
          "description": "License's type, indicates if the licence is standalone or an addon",
          "fullType": "saas.csp2.LicenseTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "saas.csp2.LicenseTypeEnum"
        },
        "limit": {
          "canBeNull": true,
          "description": "Maximum purchasable license",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "License name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "newSeatsAllowed": {
          "canBeNull": false,
          "description": "Whether or not it is possible to add new seats on subscriptions of this licence type",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "newSubscriptionsAllowed": {
          "canBeNull": false,
          "description": "Whether or not this licence type is allowed for new subscriptions",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "saas.csp2.OfficeSubscription": {
      "description": "Office subscription",
      "id": "OfficeSubscription",
      "namespace": "saas.csp2",
      "properties": {
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "Subscription's unique identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "licenseId": {
          "canBeNull": false,
          "description": "License's type id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Number of available licenses",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Subscription's status",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "taskPendingId": {
          "canBeNull": false,
          "description": "Pending task's unique identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "saas.csp2.OfficeTask": {
      "description": "Office task",
      "id": "OfficeTask",
      "namespace": "saas.csp2",
      "properties": {
        "finishDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Unique identifier of the task",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Task state",
          "fullType": "saas.csp2.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "saas.csp2.TaskStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "saas.csp2.OfficeTenant": {
      "description": "Office tenant",
      "id": "OfficeTenant",
      "namespace": "saas.csp2",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Contact's address line",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "description": "Contact's city",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "displayName": {
          "canBeNull": false,
          "description": "Tenant's display name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "Contact's email address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "description": "Contact's first name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastName": {
          "canBeNull": false,
          "description": "Contact's last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "mpnId": {
          "canBeNull": true,
          "description": "Microsoft Partner Network identifier linked to this tenant",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "mpnIssueFlag": {
          "canBeNull": true,
          "description": "Code of any detected issue regarding the MPN Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": false,
          "description": "Primary phone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Internal service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Tenant's status",
          "fullType": "saas.csp2.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "saas.csp2.ServiceStateEnum"
        },
        "zipCode": {
          "canBeNull": false,
          "description": "Contact's zip code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "saas.csp2.OfficeTenantWithIAM": {
      "description": "Office tenant",
      "id": "OfficeTenant",
      "namespace": "saas.csp2",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "Contact's address line",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "description": "Contact's city",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "displayName": {
          "canBeNull": false,
          "description": "Tenant's display name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "email": {
          "canBeNull": false,
          "description": "Contact's email address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "description": "Contact's first name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
        },
        "lastName": {
          "canBeNull": false,
          "description": "Contact's last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "mpnId": {
          "canBeNull": true,
          "description": "Microsoft Partner Network identifier linked to this tenant",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "mpnIssueFlag": {
          "canBeNull": true,
          "description": "Code of any detected issue regarding the MPN Id",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": false,
          "description": "Primary phone number",
          "fullType": "phoneNumber",
          "readOnly": false,
          "required": false,
          "type": "phoneNumber"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "Internal service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Tenant's status",
          "fullType": "saas.csp2.ServiceStateEnum",
          "readOnly": true,
          "required": false,
          "type": "saas.csp2.ServiceStateEnum"
        },
        "zipCode": {
          "canBeNull": false,
          "description": "Contact's zip code",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "saas.csp2.ServiceStateEnum": {
      "description": "Office tenant state",
      "enum": [
        "creating",
        "inMaintenance",
        "ok",
        "reopening",
        "suspended",
        "suspending"
      ],
      "enumType": "string",
      "id": "ServiceStateEnum",
      "namespace": "saas.csp2"
    },
    "saas.csp2.Statistics": {
      "description": "License usage statistics.",
      "id": "Statistics",
      "namespace": "saas.csp2",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Date of the statistics.",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "lines": {
          "canBeNull": false,
          "description": "List of lines associated to this statistics entity.",
          "fullType": "saas.csp2.StatisticsLine[]",
          "readOnly": true,
          "required": false,
          "type": "saas.csp2.StatisticsLine[]"
        }
      }
    },
    "saas.csp2.StatisticsLine": {
      "description": "License usage statistics line.",
      "id": "StatisticsLine",
      "namespace": "saas.csp2",
      "properties": {
        "endOfDayCount": {
          "canBeNull": false,
          "description": "Count of activated licenses at the end of the day.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "licenceId": {
          "canBeNull": false,
          "description": "Id of the Office license.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "licenceName": {
          "canBeNull": false,
          "description": "Name of the Office license.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "peakCount": {
          "canBeNull": false,
          "description": "Maximum count of simultaneous activated licences.",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "saas.csp2.SubscriptionChangeQuantityCreation": {
      "description": "Change subscription quantity",
      "id": "SubscriptionChangeQuantityCreation",
      "namespace": "saas.csp2",
      "properties": {
        "quantity": {
          "canBeNull": false,
          "description": "New seat quantity",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "saas.csp2.SubscriptionCreation": {
      "description": "Create subscription",
      "id": "SubscriptionCreation",
      "namespace": "saas.csp2",
      "properties": {
        "licenseId": {
          "canBeNull": false,
          "description": "License's type unique identifier",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of licenses to order",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "saas.csp2.SubscriptionOrderAddonCreation": {
      "description": "Create subscription order addon",
      "id": "SubscriptionOrderAddonCreation",
      "namespace": "saas.csp2",
      "properties": {
        "licenseId": {
          "canBeNull": false,
          "description": "License id associated to this addon subscription (see subscription/<id>/availableAddonLicenses)",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Seat quantity of the new subscription",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "saas.csp2.TaskStatusEnum": {
      "description": "Office CSP2 task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "saas.csp2"
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
    }
  },
  "resourcePath": "/saas/csp2"
}