import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/saas/csp2",
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
      "description": "Operations about the CSP2 service"
    },
    {
      "path": "/saas/csp2/{serviceName}",
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
          "responseType": "saas.csp2.OfficeTenant",
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
              "dataType": "saas.csp2.OfficeTenant",
              "paramType": "body",
              "fullType": "saas.csp2.OfficeTenant",
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
      "description": "Office tenant"
    },
    {
      "path": "/saas/csp2/{serviceName}/billingPeriodPeaks",
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
          "responseType": "saas.csp2.BillingStatistics",
          "noAuthentication": false,
          "description": "Get the curren billing period's usage peak for each subscription"
        }
      ],
      "description": "billingPeriodPeaks operations"
    },
    {
      "path": "/saas/csp2/{serviceName}/changeAdministratorPassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "newPassword",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "New password for the tenant administrator"
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
          "responseType": "saas.csp2.OfficeTask",
          "noAuthentication": false,
          "description": "Changes the tenant administrator's password"
        }
      ],
      "description": "changeAdministratorPassword operations"
    },
    {
      "path": "/saas/csp2/{serviceName}/configureDomain",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "supportedServices",
              "dataType": "saas.csp2.SupportedServiceEnum[]",
              "paramType": "body",
              "fullType": "saas.csp2.SupportedServiceEnum[]",
              "required": true,
              "description": "Services that your domain needs to be configured with"
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Your OVH-hosted domain to configure"
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
          "responseType": "saas.csp2.OfficeTask",
          "noAuthentication": false,
          "description": "Automatically sets up an OVH-hosted domain of yours for your office365 services. Note, this requires the domain to not have any interfering MX/SRV/TXT records"
        }
      ],
      "description": "configureDomain operations"
    },
    {
      "path": "/saas/csp2/{serviceName}/orderableLicenses",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Licenses available for order"
        }
      ],
      "description": "List the saas.csp2.OfficeLicence objects"
    },
    {
      "path": "/saas/csp2/{serviceName}/orderableLicenses/{id}",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "saas.csp2.OfficeLicence",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Office licence"
    },
    {
      "path": "/saas/csp2/{serviceName}/serviceInfos",
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
      "path": "/saas/csp2/{serviceName}/subscription",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Subscriptions associated to this office tenant"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Quantity of licenses to order"
            },
            {
              "name": "licenseId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "License's type unique identifier"
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
          "responseType": "saas.csp2.OfficeTask",
          "noAuthentication": false,
          "description": "Add a subscription to this tenant"
        }
      ],
      "description": "List the saas.csp2.OfficeSubscription objects"
    },
    {
      "path": "/saas/csp2/{serviceName}/subscription/{id}",
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
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "saas.csp2.OfficeTask",
          "noAuthentication": false,
          "description": "Delete a subscription from this tenant"
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
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "saas.csp2.OfficeSubscription",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Office subscription"
    },
    {
      "path": "/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Addon subscriptions associated to this office subscription"
        }
      ],
      "description": "addonsSubscriptionIds operations"
    },
    {
      "path": "/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Gives a list of licenses ids that can be ordered as an addon for this subscription"
        }
      ],
      "description": "availableAddonLicenses operations"
    },
    {
      "path": "/saas/csp2/{serviceName}/subscription/{id}/changeQuantity",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "New seat quantity"
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "saas.csp2.OfficeTask",
          "noAuthentication": false,
          "description": "Change the quantity of seats in the subscription"
        }
      ],
      "description": "changeQuantity operations"
    },
    {
      "path": "/saas/csp2/{serviceName}/subscription/{id}/orderAddon",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "licenseId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "License id associated to this addon subscription (see subscription/<id>/availableAddonLicenses)"
            },
            {
              "name": "quantity",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Seat quantity of the new subscription"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
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
          "responseType": "saas.csp2.OfficeTask",
          "noAuthentication": false,
          "description": "Creates a new subscription as an addon for this subscription"
        }
      ],
      "description": "orderAddon operations"
    },
    {
      "path": "/saas/csp2/{serviceName}/task",
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Pending tasks of this tenant"
        }
      ],
      "description": "List the saas.csp2.OfficeTask objects"
    },
    {
      "path": "/saas/csp2/{serviceName}/task/{id}",
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
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "saas.csp2.OfficeTask",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Office task"
    },
    {
      "path": "/saas/csp2/{serviceName}/usageStatistics",
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
              "name": "timePeriod",
              "dataType": "msServices.LicensePeriodEnum",
              "paramType": "query",
              "fullType": "msServices.LicensePeriodEnum",
              "required": true,
              "description": "The period to query"
            }
          ],
          "responseType": "saas.csp2.Statistics[]",
          "noAuthentication": false,
          "description": "Get the usage statistics over the chose period"
        }
      ],
      "description": "usageStatistics operations"
    }
  ],
  "resourcePath": "/saas/csp2",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "msServices.LicensePeriodEnum": {
      "id": "LicensePeriodEnum",
      "namespace": "msServices",
      "description": "Period of time used to determine license statistics",
      "enum": [
        "lastMonth",
        "lastQuarter",
        "lastWeek",
        "lastYear"
      ],
      "enumType": "string"
    },
    "saas.csp2.BillingStatistics": {
      "id": "BillingStatistics",
      "namespace": "saas.csp2",
      "description": "Billing statistics for the current period",
      "properties": {
        "endDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": false,
          "description": "End of the billing period",
          "required": true
        },
        "lines": {
          "type": "saas.csp2.BillingStatisticsLine[]",
          "fullType": "saas.csp2.BillingStatisticsLine[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of lines associated to this statistics entity.",
          "required": true
        },
        "startDate": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": false,
          "description": "Start of the billing period",
          "required": true
        }
      }
    },
    "saas.csp2.BillingStatisticsLine": {
      "id": "BillingStatisticsLine",
      "namespace": "saas.csp2",
      "description": "Billing statistics line.",
      "properties": {
        "licenceId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Id of the Office license.",
          "required": true
        },
        "licenceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the Office license.",
          "required": true
        },
        "peakCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum count of simultaneous activated licences.",
          "required": true
        }
      }
    },
    "saas.csp2.LicenseTypeEnum": {
      "id": "LicenseTypeEnum",
      "namespace": "saas.csp2",
      "description": "Office license's type",
      "enum": [
        "ADDON",
        "NON-SPECIFIC"
      ],
      "enumType": "string"
    },
    "saas.csp2.OfficeLicence": {
      "id": "OfficeLicence",
      "namespace": "saas.csp2",
      "description": "Office licence",
      "properties": {
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "License unique identifier",
          "required": true
        },
        "licenceType": {
          "type": "saas.csp2.LicenseTypeEnum",
          "fullType": "saas.csp2.LicenseTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "License's type, indicates if the licence is standalone or an addon",
          "required": true
        },
        "limit": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Maximum purchasable license",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "License name",
          "required": true
        },
        "newSeatsAllowed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether or not it is possible to add new seats on subscriptions of this licence type",
          "required": true
        },
        "newSubscriptionsAllowed": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Whether or not this licence type is allowed for new subscriptions",
          "required": true
        }
      }
    },
    "saas.csp2.OfficeSubscription": {
      "id": "OfficeSubscription",
      "namespace": "saas.csp2",
      "description": "Office subscription",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Subscription's unique identifier",
          "required": true
        },
        "lastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last update date",
          "required": false
        },
        "licenseId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "License's type id",
          "required": true
        },
        "quantity": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Number of available licenses",
          "required": true
        },
        "status": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Subscription's status",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task's unique identifier",
          "required": true
        }
      }
    },
    "saas.csp2.OfficeTask": {
      "id": "OfficeTask",
      "namespace": "saas.csp2",
      "description": "Office task",
      "properties": {
        "finishDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "function": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function name",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Unique identifier of the task",
          "required": true
        },
        "status": {
          "type": "saas.csp2.TaskStatusEnum",
          "fullType": "saas.csp2.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task state",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        }
      }
    },
    "saas.csp2.OfficeTenant": {
      "id": "OfficeTenant",
      "namespace": "saas.csp2",
      "description": "Office tenant",
      "properties": {
        "address": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's address line",
          "required": true
        },
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's city",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Tenant's display name",
          "required": true
        },
        "email": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's email address",
          "required": true
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's first name",
          "required": true
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's last name",
          "required": true
        },
        "phone": {
          "type": "phoneNumber",
          "fullType": "phoneNumber",
          "canBeNull": false,
          "readOnly": false,
          "description": "Primary phone number",
          "required": true
        },
        "serviceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Internal service name",
          "required": true
        },
        "status": {
          "type": "saas.csp2.ServiceStateEnum",
          "fullType": "saas.csp2.ServiceStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Tenant's status",
          "required": true
        },
        "zipCode": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact's zip code",
          "required": true
        }
      }
    },
    "saas.csp2.ServiceStateEnum": {
      "id": "ServiceStateEnum",
      "namespace": "saas.csp2",
      "description": "Office tenant state",
      "enum": [
        "creating",
        "inMaintenance",
        "ok",
        "suspended",
        "suspending"
      ],
      "enumType": "string"
    },
    "saas.csp2.Statistics": {
      "id": "Statistics",
      "namespace": "saas.csp2",
      "description": "License usage statistics.",
      "properties": {
        "date": {
          "type": "date",
          "fullType": "date",
          "canBeNull": false,
          "readOnly": false,
          "description": "Date of the statistics.",
          "required": true
        },
        "lines": {
          "type": "saas.csp2.StatisticsLine[]",
          "fullType": "saas.csp2.StatisticsLine[]",
          "canBeNull": false,
          "readOnly": false,
          "description": "List of lines associated to this statistics entity.",
          "required": true
        }
      }
    },
    "saas.csp2.StatisticsLine": {
      "id": "StatisticsLine",
      "namespace": "saas.csp2",
      "description": "License usage statistics line.",
      "properties": {
        "endOfDayCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Count of activated licenses at the end of the day.",
          "required": true
        },
        "licenceId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Id of the Office license.",
          "required": true
        },
        "licenceName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Name of the Office license.",
          "required": true
        },
        "peakCount": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum count of simultaneous activated licences.",
          "required": true
        }
      }
    },
    "saas.csp2.SupportedServiceEnum": {
      "id": "SupportedServiceEnum",
      "namespace": "saas.csp2",
      "description": "Supported services of Office365",
      "enum": [
        "Email",
        "Intune",
        "OfficeCommunicationsOnline"
      ],
      "enumType": "string"
    },
    "saas.csp2.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "saas.csp2",
      "description": "Office CSP2 task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
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