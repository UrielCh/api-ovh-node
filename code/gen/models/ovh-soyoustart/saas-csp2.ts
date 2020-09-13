import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/saas/csp2.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the CSP2 service",
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
      "path": "/saas/csp2"
    },
    {
      "description": "Office tenant",
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
              "description": "The unique identifier of your Office service",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "saas.csp2.OfficeTenant"
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
              "dataType": "saas.csp2.OfficeTenant",
              "description": "New object properties",
              "fullType": "saas.csp2.OfficeTenant",
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
      "path": "/saas/csp2/{serviceName}"
    },
    {
      "description": "billingPeriodPeaks operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get the curren billing period's usage peak for each subscription",
          "httpMethod": "GET",
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
          "responseType": "saas.csp2.BillingStatistics"
        }
      ],
      "path": "/saas/csp2/{serviceName}/billingPeriodPeaks"
    },
    {
      "description": "changeAdministratorPassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Changes the tenant administrator's password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "New password for the tenant administrator",
              "fullType": "password",
              "name": "newPassword",
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
          "responseType": "saas.csp2.OfficeTask"
        }
      ],
      "path": "/saas/csp2/{serviceName}/changeAdministratorPassword"
    },
    {
      "description": "configureDomain operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Automatically sets up an OVH-hosted domain of yours for your office365 services. Note, this requires the domain to not have any interfering MX/SRV/TXT records",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Your OVH-hosted domain to configure",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "saas.csp2.SupportedServiceEnum[]",
              "description": "Services that your domain needs to be configured with",
              "fullType": "saas.csp2.SupportedServiceEnum[]",
              "name": "supportedServices",
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
          "responseType": "saas.csp2.OfficeTask"
        }
      ],
      "path": "/saas/csp2/{serviceName}/configureDomain"
    },
    {
      "description": "List the saas.csp2.OfficeLicence objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Licenses available for order",
          "httpMethod": "GET",
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
          "responseType": "long[]"
        }
      ],
      "path": "/saas/csp2/{serviceName}/orderableLicenses"
    },
    {
      "description": "Office licence",
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
              "dataType": "long",
              "description": "License unique identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
          "description": "Get this object properties",
          "httpMethod": "GET",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Subscriptions associated to this office tenant",
          "httpMethod": "GET",
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
          "responseType": "long[]"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Add a subscription to this tenant",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "License's type unique identifier",
              "fullType": "long",
              "name": "licenseId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Quantity of licenses to order",
              "fullType": "long",
              "name": "quantity",
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
          "responseType": "saas.csp2.OfficeTask"
        }
      ],
      "path": "/saas/csp2/{serviceName}/subscription"
    },
    {
      "description": "Office subscription",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete a subscription from this tenant",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Subscription's unique identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
          "responseType": "saas.csp2.OfficeTask"
        },
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
              "dataType": "long",
              "description": "Subscription's unique identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Addon subscriptions associated to this office subscription",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Subscription's unique identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Gives a list of licenses ids that can be ordered as an addon for this subscription",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Subscription's unique identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Change the quantity of seats in the subscription",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "New seat quantity",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Subscription's unique identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Creates a new subscription as an addon for this subscription",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "License id associated to this addon subscription (see subscription/<id>/availableAddonLicenses)",
              "fullType": "long",
              "name": "licenseId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Seat quantity of the new subscription",
              "fullType": "long",
              "name": "quantity",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Subscription's unique identifier",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Pending tasks of this tenant",
          "httpMethod": "GET",
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
          "responseType": "long[]"
        }
      ],
      "path": "/saas/csp2/{serviceName}/task"
    },
    {
      "description": "Office task",
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
              "dataType": "long",
              "description": "Unique identifier of the task",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
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
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Get the usage statistics over the chose period",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The unique identifier of your Office service",
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
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
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
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "lines": {
          "canBeNull": false,
          "description": "List of lines associated to this statistics entity.",
          "readOnly": false,
          "required": false,
          "type": "saas.csp2.BillingStatisticsLine[]"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start of the billing period",
          "readOnly": false,
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
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "licenceName": {
          "canBeNull": false,
          "description": "Name of the Office license.",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "peakCount": {
          "canBeNull": false,
          "description": "Maximum count of simultaneous activated licences.",
          "readOnly": false,
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
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "lines": {
          "canBeNull": false,
          "description": "List of lines associated to this statistics entity.",
          "readOnly": false,
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
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "licenceId": {
          "canBeNull": false,
          "description": "Id of the Office license.",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "licenceName": {
          "canBeNull": false,
          "description": "Name of the Office license.",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "peakCount": {
          "canBeNull": false,
          "description": "Maximum count of simultaneous activated licences.",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "saas.csp2.SupportedServiceEnum": {
      "description": "Supported services of Office365",
      "enum": [
        "Email",
        "Intune",
        "OfficeCommunicationsOnline"
      ],
      "enumType": "string",
      "id": "SupportedServiceEnum",
      "namespace": "saas.csp2"
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