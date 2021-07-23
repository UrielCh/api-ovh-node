import {Schema} from '../../src/schema';

// imported from https://api.us.ovhcloud.com:443/1.0/license/cpanel.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the LICENSE service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel"
    },
    {
      "description": "Your Cpanel license",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.cpanel.Cpanel",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "license.cpanel.Cpanel",
              "description": "New object properties",
              "fullType": "license.cpanel.Cpanel",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel/{serviceName}"
    },
    {
      "description": "allowedDestinationIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Returns an array of ips where the license can be moved to",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipBlock[]",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel/{serviceName}/allowedDestinationIp"
    },
    {
      "description": "canLicenseBeMovedTo operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Will tell if the ip can accept the license",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipv4",
              "description": "The Ip on which you want to move this license",
              "fullType": "ipv4",
              "name": "destinationIp",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "license.ChangeIpStatus",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel/{serviceName}/canLicenseBeMovedTo"
    },
    {
      "description": "changeIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Move this license to another Ip",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "The Ip on which you want to move this license",
              "fullType": "ipv4",
              "name": "destinationIp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.Task",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel/{serviceName}/changeIp"
    },
    {
      "description": "Confirm termination of your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel/{serviceName}/confirmTermination"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel/{serviceName}/serviceInfos"
    },
    {
      "description": "List the license.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "tasks linked to this license",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "license.ActionType",
              "description": "Filter the value of action property (=)",
              "fullType": "license.ActionType",
              "name": "action",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "license.TaskStateEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "license.TaskStateEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel/{serviceName}/tasks"
    },
    {
      "description": "licenses Todos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "This Task id",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "license.Task",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel/{serviceName}/tasks/{taskId}"
    },
    {
      "description": "Terminate your service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Terminate your service",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The name of your Cpanel license",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel/{serviceName}/terminate"
    },
    {
      "description": "Get the orderable CPanel versions",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the orderable CPanel versions",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "Your license Ip",
              "fullType": "ipv4",
              "name": "ip",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "license.CpanelOrderConfiguration[]",
          "scopes": [
            "all",
            "product/licenses/all"
          ]
        }
      ],
      "path": "/license/cpanel/orderableVersions"
    }
  ],
  "basePath": "https://api.us.ovhcloud.com/1.0",
  "models": {
    "license.ActionType": {
      "description": "A short description of what does the Task on your license",
      "enum": [
        "addWindowFromExistingSerial",
        "changeIp",
        "changeOs",
        "installLicense",
        "optionUpgrade",
        "releaseOption",
        "versionUpgrade"
      ],
      "enumType": "string",
      "id": "ActionType",
      "namespace": "license"
    },
    "license.ChangeIpMessageEnum": {
      "description": "Messages from change IP",
      "enum": [
        "OK",
        "destinationNotAllowed",
        "licenseAlreadyExists",
        "notAllowedToHandleThis",
        "notSameType",
        "sameIp",
        "versionNotAllowed"
      ],
      "enumType": "string",
      "id": "ChangeIpMessageEnum",
      "namespace": "license"
    },
    "license.ChangeIpStatus": {
      "description": "License change ip status return",
      "id": "ChangeIpStatus",
      "namespace": "license",
      "properties": {
        "message": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.ChangeIpMessageEnum"
        },
        "success": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "license.CpanelOrderConfiguration": {
      "description": "The serviceTypes allowed to Order a CPanel version",
      "id": "CpanelOrderConfiguration",
      "namespace": "license",
      "properties": {
        "orderableVersions": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.OrderableCpanelCompatibilityInfos[]"
        },
        "serviceType": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.LicenseTypeEnum"
        }
      }
    },
    "license.CpanelVersionEnum": {
      "description": "All versions available for Cpanel products",
      "enum": [
        "VERSION_11_FOR_LINUX",
        "VERSION_11_FOR_VIRTUOZZO",
        "VERSION_11_FOR_VPS",
        "cpanel-license-version-11",
        "cpanel-license-version-11-for-virtuozzo",
        "cpanel-license-version-11-for-vps",
        "version-admin-cloud",
        "version-premier-cloud-100",
        "version-premier-cloud-1000",
        "version-premier-cloud-10000",
        "version-premier-cloud-1100",
        "version-premier-cloud-1200",
        "version-premier-cloud-1300",
        "version-premier-cloud-1400",
        "version-premier-cloud-1500",
        "version-premier-cloud-1600",
        "version-premier-cloud-1700",
        "version-premier-cloud-1800",
        "version-premier-cloud-1900",
        "version-premier-cloud-200",
        "version-premier-cloud-2000",
        "version-premier-cloud-2100",
        "version-premier-cloud-2200",
        "version-premier-cloud-2300",
        "version-premier-cloud-2400",
        "version-premier-cloud-2500",
        "version-premier-cloud-2600",
        "version-premier-cloud-2700",
        "version-premier-cloud-2800",
        "version-premier-cloud-2900",
        "version-premier-cloud-300",
        "version-premier-cloud-3000",
        "version-premier-cloud-3100",
        "version-premier-cloud-3200",
        "version-premier-cloud-3300",
        "version-premier-cloud-3400",
        "version-premier-cloud-3500",
        "version-premier-cloud-3600",
        "version-premier-cloud-3700",
        "version-premier-cloud-3800",
        "version-premier-cloud-3900",
        "version-premier-cloud-400",
        "version-premier-cloud-4000",
        "version-premier-cloud-4100",
        "version-premier-cloud-4200",
        "version-premier-cloud-4300",
        "version-premier-cloud-4400",
        "version-premier-cloud-4500",
        "version-premier-cloud-4600",
        "version-premier-cloud-4700",
        "version-premier-cloud-4800",
        "version-premier-cloud-4900",
        "version-premier-cloud-500",
        "version-premier-cloud-5000",
        "version-premier-cloud-5100",
        "version-premier-cloud-5200",
        "version-premier-cloud-5300",
        "version-premier-cloud-5400",
        "version-premier-cloud-5500",
        "version-premier-cloud-5600",
        "version-premier-cloud-5700",
        "version-premier-cloud-5800",
        "version-premier-cloud-5900",
        "version-premier-cloud-600",
        "version-premier-cloud-6000",
        "version-premier-cloud-6100",
        "version-premier-cloud-6200",
        "version-premier-cloud-6300",
        "version-premier-cloud-6400",
        "version-premier-cloud-6500",
        "version-premier-cloud-6600",
        "version-premier-cloud-6700",
        "version-premier-cloud-6800",
        "version-premier-cloud-6900",
        "version-premier-cloud-700",
        "version-premier-cloud-7000",
        "version-premier-cloud-7100",
        "version-premier-cloud-7200",
        "version-premier-cloud-7300",
        "version-premier-cloud-7400",
        "version-premier-cloud-7500",
        "version-premier-cloud-7600",
        "version-premier-cloud-7700",
        "version-premier-cloud-7800",
        "version-premier-cloud-7900",
        "version-premier-cloud-800",
        "version-premier-cloud-8000",
        "version-premier-cloud-8100",
        "version-premier-cloud-8200",
        "version-premier-cloud-8300",
        "version-premier-cloud-8400",
        "version-premier-cloud-8500",
        "version-premier-cloud-8600",
        "version-premier-cloud-8700",
        "version-premier-cloud-8800",
        "version-premier-cloud-8900",
        "version-premier-cloud-900",
        "version-premier-cloud-9000",
        "version-premier-cloud-9100",
        "version-premier-cloud-9200",
        "version-premier-cloud-9300",
        "version-premier-cloud-9400",
        "version-premier-cloud-9500",
        "version-premier-cloud-9600",
        "version-premier-cloud-9700",
        "version-premier-cloud-9800",
        "version-premier-cloud-9900",
        "version-premier-metal-100",
        "version-premier-metal-1000",
        "version-premier-metal-10000",
        "version-premier-metal-1100",
        "version-premier-metal-1200",
        "version-premier-metal-1300",
        "version-premier-metal-1400",
        "version-premier-metal-1500",
        "version-premier-metal-1600",
        "version-premier-metal-1700",
        "version-premier-metal-1800",
        "version-premier-metal-1900",
        "version-premier-metal-200",
        "version-premier-metal-2000",
        "version-premier-metal-2100",
        "version-premier-metal-2200",
        "version-premier-metal-2300",
        "version-premier-metal-2400",
        "version-premier-metal-2500",
        "version-premier-metal-2600",
        "version-premier-metal-2700",
        "version-premier-metal-2800",
        "version-premier-metal-2900",
        "version-premier-metal-300",
        "version-premier-metal-3000",
        "version-premier-metal-3100",
        "version-premier-metal-3200",
        "version-premier-metal-3300",
        "version-premier-metal-3400",
        "version-premier-metal-3500",
        "version-premier-metal-3600",
        "version-premier-metal-3700",
        "version-premier-metal-3800",
        "version-premier-metal-3900",
        "version-premier-metal-400",
        "version-premier-metal-4000",
        "version-premier-metal-4100",
        "version-premier-metal-4200",
        "version-premier-metal-4300",
        "version-premier-metal-4400",
        "version-premier-metal-4500",
        "version-premier-metal-4600",
        "version-premier-metal-4700",
        "version-premier-metal-4800",
        "version-premier-metal-4900",
        "version-premier-metal-500",
        "version-premier-metal-5000",
        "version-premier-metal-5100",
        "version-premier-metal-5200",
        "version-premier-metal-5300",
        "version-premier-metal-5400",
        "version-premier-metal-5500",
        "version-premier-metal-5600",
        "version-premier-metal-5700",
        "version-premier-metal-5800",
        "version-premier-metal-5900",
        "version-premier-metal-600",
        "version-premier-metal-6000",
        "version-premier-metal-6100",
        "version-premier-metal-6200",
        "version-premier-metal-6300",
        "version-premier-metal-6400",
        "version-premier-metal-6500",
        "version-premier-metal-6600",
        "version-premier-metal-6700",
        "version-premier-metal-6800",
        "version-premier-metal-6900",
        "version-premier-metal-700",
        "version-premier-metal-7000",
        "version-premier-metal-7100",
        "version-premier-metal-7200",
        "version-premier-metal-7300",
        "version-premier-metal-7400",
        "version-premier-metal-7500",
        "version-premier-metal-7600",
        "version-premier-metal-7700",
        "version-premier-metal-7800",
        "version-premier-metal-7900",
        "version-premier-metal-800",
        "version-premier-metal-8000",
        "version-premier-metal-8100",
        "version-premier-metal-8200",
        "version-premier-metal-8300",
        "version-premier-metal-8400",
        "version-premier-metal-8500",
        "version-premier-metal-8600",
        "version-premier-metal-8700",
        "version-premier-metal-8800",
        "version-premier-metal-8900",
        "version-premier-metal-900",
        "version-premier-metal-9000",
        "version-premier-metal-9100",
        "version-premier-metal-9200",
        "version-premier-metal-9300",
        "version-premier-metal-9400",
        "version-premier-metal-9500",
        "version-premier-metal-9600",
        "version-premier-metal-9700",
        "version-premier-metal-9800",
        "version-premier-metal-9900",
        "version-pro-cloud",
        "version-solo-cloud",
        "version-solo-metal"
      ],
      "enumType": "string",
      "id": "CpanelVersionEnum",
      "namespace": "license"
    },
    "license.LicenseTypeEnum": {
      "description": "Possible values for license type",
      "enum": [
        "dedicated",
        "dedicatedCloud",
        "dedicatedFailover",
        "failover",
        "vm",
        "vps",
        "vps_ceph",
        "vps_classic",
        "vps_cloud",
        "vps_cloud_2016",
        "vps_ssd"
      ],
      "enumType": "string",
      "id": "LicenseTypeEnum",
      "namespace": "license"
    },
    "license.OrderableCpanelCompatibilityInfos": {
      "description": "All versions available for Cpanel products",
      "id": "OrderableCpanelCompatibilityInfos",
      "namespace": "license",
      "properties": {
        "version": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "license.OrderableCpanelVersionEnum"
        }
      }
    },
    "license.OrderableCpanelVersionEnum": {
      "description": "All versions available for Cpanel products",
      "enum": [
        "cpanel-license-admin-cloud-accounts",
        "cpanel-license-premier-cloud-100-accounts",
        "cpanel-license-premier-cloud-1000-accounts",
        "cpanel-license-premier-cloud-10000-accounts",
        "cpanel-license-premier-cloud-10000_agora-accounts",
        "cpanel-license-premier-cloud-1000_agora-accounts",
        "cpanel-license-premier-cloud-100_agora-accounts",
        "cpanel-license-premier-cloud-1100-accounts",
        "cpanel-license-premier-cloud-1100_agora-accounts",
        "cpanel-license-premier-cloud-1200-accounts",
        "cpanel-license-premier-cloud-1200_agora-accounts",
        "cpanel-license-premier-cloud-1300-accounts",
        "cpanel-license-premier-cloud-1300_agora-accounts",
        "cpanel-license-premier-cloud-1400-accounts",
        "cpanel-license-premier-cloud-1400_agora-accounts",
        "cpanel-license-premier-cloud-150-accounts",
        "cpanel-license-premier-cloud-1500-accounts",
        "cpanel-license-premier-cloud-1500_agora-accounts",
        "cpanel-license-premier-cloud-1600-accounts",
        "cpanel-license-premier-cloud-1600_agora-accounts",
        "cpanel-license-premier-cloud-1700-accounts",
        "cpanel-license-premier-cloud-1700_agora-accounts",
        "cpanel-license-premier-cloud-1800-accounts",
        "cpanel-license-premier-cloud-1800_agora-accounts",
        "cpanel-license-premier-cloud-1900-accounts",
        "cpanel-license-premier-cloud-1900_agora-accounts",
        "cpanel-license-premier-cloud-200-accounts",
        "cpanel-license-premier-cloud-2000-accounts",
        "cpanel-license-premier-cloud-2000_agora-accounts",
        "cpanel-license-premier-cloud-200_agora-accounts",
        "cpanel-license-premier-cloud-2100-accounts",
        "cpanel-license-premier-cloud-2100_agora-accounts",
        "cpanel-license-premier-cloud-2200-accounts",
        "cpanel-license-premier-cloud-2200_agora-accounts",
        "cpanel-license-premier-cloud-2300-accounts",
        "cpanel-license-premier-cloud-2300_agora-accounts",
        "cpanel-license-premier-cloud-2400-accounts",
        "cpanel-license-premier-cloud-2400_agora-accounts",
        "cpanel-license-premier-cloud-250-accounts",
        "cpanel-license-premier-cloud-2500-accounts",
        "cpanel-license-premier-cloud-2500_agora-accounts",
        "cpanel-license-premier-cloud-2600-accounts",
        "cpanel-license-premier-cloud-2600_agora-accounts",
        "cpanel-license-premier-cloud-2700-accounts",
        "cpanel-license-premier-cloud-2700_agora-accounts",
        "cpanel-license-premier-cloud-2800-accounts",
        "cpanel-license-premier-cloud-2800_agora-accounts",
        "cpanel-license-premier-cloud-2900-accounts",
        "cpanel-license-premier-cloud-2900_agora-accounts",
        "cpanel-license-premier-cloud-300-accounts",
        "cpanel-license-premier-cloud-3000-accounts",
        "cpanel-license-premier-cloud-3000_agora-accounts",
        "cpanel-license-premier-cloud-300_agora-accounts",
        "cpanel-license-premier-cloud-3100-accounts",
        "cpanel-license-premier-cloud-3100_agora-accounts",
        "cpanel-license-premier-cloud-3200-accounts",
        "cpanel-license-premier-cloud-3200_agora-accounts",
        "cpanel-license-premier-cloud-3300-accounts",
        "cpanel-license-premier-cloud-3300_agora-accounts",
        "cpanel-license-premier-cloud-3400-accounts",
        "cpanel-license-premier-cloud-3400_agora-accounts",
        "cpanel-license-premier-cloud-3500-accounts",
        "cpanel-license-premier-cloud-3500_agora-accounts",
        "cpanel-license-premier-cloud-3600-accounts",
        "cpanel-license-premier-cloud-3600_agora-accounts",
        "cpanel-license-premier-cloud-3700-accounts",
        "cpanel-license-premier-cloud-3700_agora-accounts",
        "cpanel-license-premier-cloud-3800-accounts",
        "cpanel-license-premier-cloud-3800_agora-accounts",
        "cpanel-license-premier-cloud-3900-accounts",
        "cpanel-license-premier-cloud-3900_agora-accounts",
        "cpanel-license-premier-cloud-400-accounts",
        "cpanel-license-premier-cloud-4000-accounts",
        "cpanel-license-premier-cloud-4000_agora-accounts",
        "cpanel-license-premier-cloud-400_agora-accounts",
        "cpanel-license-premier-cloud-4100-accounts",
        "cpanel-license-premier-cloud-4100_agora-accounts",
        "cpanel-license-premier-cloud-4200-accounts",
        "cpanel-license-premier-cloud-4200_agora-accounts",
        "cpanel-license-premier-cloud-4300-accounts",
        "cpanel-license-premier-cloud-4300_agora-accounts",
        "cpanel-license-premier-cloud-4400-accounts",
        "cpanel-license-premier-cloud-4400_agora-accounts",
        "cpanel-license-premier-cloud-4500-accounts",
        "cpanel-license-premier-cloud-4500_agora-accounts",
        "cpanel-license-premier-cloud-4600-accounts",
        "cpanel-license-premier-cloud-4600_agora-accounts",
        "cpanel-license-premier-cloud-4700-accounts",
        "cpanel-license-premier-cloud-4700_agora-accounts",
        "cpanel-license-premier-cloud-4800-accounts",
        "cpanel-license-premier-cloud-4800_agora-accounts",
        "cpanel-license-premier-cloud-4900-accounts",
        "cpanel-license-premier-cloud-4900_agora-accounts",
        "cpanel-license-premier-cloud-500-accounts",
        "cpanel-license-premier-cloud-5000-accounts",
        "cpanel-license-premier-cloud-5000_agora-accounts",
        "cpanel-license-premier-cloud-500_agora-accounts",
        "cpanel-license-premier-cloud-5100-accounts",
        "cpanel-license-premier-cloud-5100_agora-accounts",
        "cpanel-license-premier-cloud-5200-accounts",
        "cpanel-license-premier-cloud-5200_agora-accounts",
        "cpanel-license-premier-cloud-5300-accounts",
        "cpanel-license-premier-cloud-5300_agora-accounts",
        "cpanel-license-premier-cloud-5400-accounts",
        "cpanel-license-premier-cloud-5400_agora-accounts",
        "cpanel-license-premier-cloud-5500-accounts",
        "cpanel-license-premier-cloud-5500_agora-accounts",
        "cpanel-license-premier-cloud-5600-accounts",
        "cpanel-license-premier-cloud-5600_agora-accounts",
        "cpanel-license-premier-cloud-5700-accounts",
        "cpanel-license-premier-cloud-5700_agora-accounts",
        "cpanel-license-premier-cloud-5800-accounts",
        "cpanel-license-premier-cloud-5800_agora-accounts",
        "cpanel-license-premier-cloud-5900-accounts",
        "cpanel-license-premier-cloud-5900_agora-accounts",
        "cpanel-license-premier-cloud-600-accounts",
        "cpanel-license-premier-cloud-6000-accounts",
        "cpanel-license-premier-cloud-6000_agora-accounts",
        "cpanel-license-premier-cloud-600_agora-accounts",
        "cpanel-license-premier-cloud-6100-accounts",
        "cpanel-license-premier-cloud-6100_agora-accounts",
        "cpanel-license-premier-cloud-6200-accounts",
        "cpanel-license-premier-cloud-6200_agora-accounts",
        "cpanel-license-premier-cloud-6300-accounts",
        "cpanel-license-premier-cloud-6300_agora-accounts",
        "cpanel-license-premier-cloud-6400-accounts",
        "cpanel-license-premier-cloud-6400_agora-accounts",
        "cpanel-license-premier-cloud-6500-accounts",
        "cpanel-license-premier-cloud-6500_agora-accounts",
        "cpanel-license-premier-cloud-6600-accounts",
        "cpanel-license-premier-cloud-6600_agora-accounts",
        "cpanel-license-premier-cloud-6700-accounts",
        "cpanel-license-premier-cloud-6700_agora-accounts",
        "cpanel-license-premier-cloud-6800-accounts",
        "cpanel-license-premier-cloud-6800_agora-accounts",
        "cpanel-license-premier-cloud-6900-accounts",
        "cpanel-license-premier-cloud-6900_agora-accounts",
        "cpanel-license-premier-cloud-700-accounts",
        "cpanel-license-premier-cloud-7000-accounts",
        "cpanel-license-premier-cloud-7000_agora-accounts",
        "cpanel-license-premier-cloud-700_agora-accounts",
        "cpanel-license-premier-cloud-7100-accounts",
        "cpanel-license-premier-cloud-7100_agora-accounts",
        "cpanel-license-premier-cloud-7200-accounts",
        "cpanel-license-premier-cloud-7200_agora-accounts",
        "cpanel-license-premier-cloud-7300-accounts",
        "cpanel-license-premier-cloud-7300_agora-accounts",
        "cpanel-license-premier-cloud-7400-accounts",
        "cpanel-license-premier-cloud-7400_agora-accounts",
        "cpanel-license-premier-cloud-7500-accounts",
        "cpanel-license-premier-cloud-7500_agora-accounts",
        "cpanel-license-premier-cloud-7600-accounts",
        "cpanel-license-premier-cloud-7600_agora-accounts",
        "cpanel-license-premier-cloud-7700-accounts",
        "cpanel-license-premier-cloud-7700_agora-accounts",
        "cpanel-license-premier-cloud-7800-accounts",
        "cpanel-license-premier-cloud-7800_agora-accounts",
        "cpanel-license-premier-cloud-7900-accounts",
        "cpanel-license-premier-cloud-7900_agora-accounts",
        "cpanel-license-premier-cloud-800-accounts",
        "cpanel-license-premier-cloud-8000-accounts",
        "cpanel-license-premier-cloud-8000_agora-accounts",
        "cpanel-license-premier-cloud-800_agora-accounts",
        "cpanel-license-premier-cloud-8100-accounts",
        "cpanel-license-premier-cloud-8100_agora-accounts",
        "cpanel-license-premier-cloud-8200-accounts",
        "cpanel-license-premier-cloud-8200_agora-accounts",
        "cpanel-license-premier-cloud-8300-accounts",
        "cpanel-license-premier-cloud-8300_agora-accounts",
        "cpanel-license-premier-cloud-8400-accounts",
        "cpanel-license-premier-cloud-8400_agora-accounts",
        "cpanel-license-premier-cloud-8500-accounts",
        "cpanel-license-premier-cloud-8500_agora-accounts",
        "cpanel-license-premier-cloud-8600-accounts",
        "cpanel-license-premier-cloud-8600_agora-accounts",
        "cpanel-license-premier-cloud-8700-accounts",
        "cpanel-license-premier-cloud-8700_agora-accounts",
        "cpanel-license-premier-cloud-8800-accounts",
        "cpanel-license-premier-cloud-8800_agora-accounts",
        "cpanel-license-premier-cloud-8900-accounts",
        "cpanel-license-premier-cloud-8900_agora-accounts",
        "cpanel-license-premier-cloud-900-accounts",
        "cpanel-license-premier-cloud-9000-accounts",
        "cpanel-license-premier-cloud-9000_agora-accounts",
        "cpanel-license-premier-cloud-900_agora-accounts",
        "cpanel-license-premier-cloud-9100-accounts",
        "cpanel-license-premier-cloud-9100_agora-accounts",
        "cpanel-license-premier-cloud-9200-accounts",
        "cpanel-license-premier-cloud-9200_agora-accounts",
        "cpanel-license-premier-cloud-9300-accounts",
        "cpanel-license-premier-cloud-9300_agora-accounts",
        "cpanel-license-premier-cloud-9400-accounts",
        "cpanel-license-premier-cloud-9400_agora-accounts",
        "cpanel-license-premier-cloud-9500-accounts",
        "cpanel-license-premier-cloud-9500_agora-accounts",
        "cpanel-license-premier-cloud-9600-accounts",
        "cpanel-license-premier-cloud-9600_agora-accounts",
        "cpanel-license-premier-cloud-9700-accounts",
        "cpanel-license-premier-cloud-9700_agora-accounts",
        "cpanel-license-premier-cloud-9800-accounts",
        "cpanel-license-premier-cloud-9800_agora-accounts",
        "cpanel-license-premier-cloud-9900-accounts",
        "cpanel-license-premier-cloud-9900_agora-accounts",
        "cpanel-license-premier-metal-100-accounts",
        "cpanel-license-premier-metal-1000-accounts",
        "cpanel-license-premier-metal-10000-accounts",
        "cpanel-license-premier-metal-10000_agora-accounts",
        "cpanel-license-premier-metal-1000_agora-accounts",
        "cpanel-license-premier-metal-100_agora-accounts",
        "cpanel-license-premier-metal-1100-accounts",
        "cpanel-license-premier-metal-1100_agora-accounts",
        "cpanel-license-premier-metal-1200-accounts",
        "cpanel-license-premier-metal-1200_agora-accounts",
        "cpanel-license-premier-metal-1300-accounts",
        "cpanel-license-premier-metal-1300_agora-accounts",
        "cpanel-license-premier-metal-1400-accounts",
        "cpanel-license-premier-metal-1400_agora-accounts",
        "cpanel-license-premier-metal-150-accounts",
        "cpanel-license-premier-metal-1500-accounts",
        "cpanel-license-premier-metal-1500_agora-accounts",
        "cpanel-license-premier-metal-1600-accounts",
        "cpanel-license-premier-metal-1600_agora-accounts",
        "cpanel-license-premier-metal-1700-accounts",
        "cpanel-license-premier-metal-1700_agora-accounts",
        "cpanel-license-premier-metal-1800-accounts",
        "cpanel-license-premier-metal-1800_agora-accounts",
        "cpanel-license-premier-metal-1900-accounts",
        "cpanel-license-premier-metal-1900_agora-accounts",
        "cpanel-license-premier-metal-200-accounts",
        "cpanel-license-premier-metal-2000-accounts",
        "cpanel-license-premier-metal-2000_agora-accounts",
        "cpanel-license-premier-metal-200_agora-accounts",
        "cpanel-license-premier-metal-2100-accounts",
        "cpanel-license-premier-metal-2100_agora-accounts",
        "cpanel-license-premier-metal-2200-accounts",
        "cpanel-license-premier-metal-2200_agora-accounts",
        "cpanel-license-premier-metal-2300-accounts",
        "cpanel-license-premier-metal-2300_agora-accounts",
        "cpanel-license-premier-metal-2400-accounts",
        "cpanel-license-premier-metal-2400_agora-accounts",
        "cpanel-license-premier-metal-250-accounts",
        "cpanel-license-premier-metal-2500-accounts",
        "cpanel-license-premier-metal-2500_agora-accounts",
        "cpanel-license-premier-metal-2600-accounts",
        "cpanel-license-premier-metal-2600_agora-accounts",
        "cpanel-license-premier-metal-2700-accounts",
        "cpanel-license-premier-metal-2700_agora-accounts",
        "cpanel-license-premier-metal-2800-accounts",
        "cpanel-license-premier-metal-2800_agora-accounts",
        "cpanel-license-premier-metal-2900-accounts",
        "cpanel-license-premier-metal-2900_agora-accounts",
        "cpanel-license-premier-metal-300-accounts",
        "cpanel-license-premier-metal-3000-accounts",
        "cpanel-license-premier-metal-3000_agora-accounts",
        "cpanel-license-premier-metal-300_agora-accounts",
        "cpanel-license-premier-metal-3100-accounts",
        "cpanel-license-premier-metal-3100_agora-accounts",
        "cpanel-license-premier-metal-3200-accounts",
        "cpanel-license-premier-metal-3200_agora-accounts",
        "cpanel-license-premier-metal-3300-accounts",
        "cpanel-license-premier-metal-3300_agora-accounts",
        "cpanel-license-premier-metal-3400-accounts",
        "cpanel-license-premier-metal-3400_agora-accounts",
        "cpanel-license-premier-metal-3500-accounts",
        "cpanel-license-premier-metal-3500_agora-accounts",
        "cpanel-license-premier-metal-3600-accounts",
        "cpanel-license-premier-metal-3600_agora-accounts",
        "cpanel-license-premier-metal-3700-accounts",
        "cpanel-license-premier-metal-3700_agora-accounts",
        "cpanel-license-premier-metal-3800-accounts",
        "cpanel-license-premier-metal-3800_agora-accounts",
        "cpanel-license-premier-metal-3900-accounts",
        "cpanel-license-premier-metal-3900_agora-accounts",
        "cpanel-license-premier-metal-400-accounts",
        "cpanel-license-premier-metal-4000-accounts",
        "cpanel-license-premier-metal-4000_agora-accounts",
        "cpanel-license-premier-metal-400_agora-accounts",
        "cpanel-license-premier-metal-4100-accounts",
        "cpanel-license-premier-metal-4100_agora-accounts",
        "cpanel-license-premier-metal-4200-accounts",
        "cpanel-license-premier-metal-4200_agora-accounts",
        "cpanel-license-premier-metal-4300-accounts",
        "cpanel-license-premier-metal-4300_agora-accounts",
        "cpanel-license-premier-metal-4400-accounts",
        "cpanel-license-premier-metal-4400_agora-accounts",
        "cpanel-license-premier-metal-4500-accounts",
        "cpanel-license-premier-metal-4500_agora-accounts",
        "cpanel-license-premier-metal-4600-accounts",
        "cpanel-license-premier-metal-4600_agora-accounts",
        "cpanel-license-premier-metal-4700-accounts",
        "cpanel-license-premier-metal-4700_agora-accounts",
        "cpanel-license-premier-metal-4800-accounts",
        "cpanel-license-premier-metal-4800_agora-accounts",
        "cpanel-license-premier-metal-4900-accounts",
        "cpanel-license-premier-metal-4900_agora-accounts",
        "cpanel-license-premier-metal-500-accounts",
        "cpanel-license-premier-metal-5000-accounts",
        "cpanel-license-premier-metal-5000_agora-accounts",
        "cpanel-license-premier-metal-500_agora-accounts",
        "cpanel-license-premier-metal-5100-accounts",
        "cpanel-license-premier-metal-5100_agora-accounts",
        "cpanel-license-premier-metal-5200-accounts",
        "cpanel-license-premier-metal-5200_agora-accounts",
        "cpanel-license-premier-metal-5300-accounts",
        "cpanel-license-premier-metal-5300_agora-accounts",
        "cpanel-license-premier-metal-5400-accounts",
        "cpanel-license-premier-metal-5400_agora-accounts",
        "cpanel-license-premier-metal-5500-accounts",
        "cpanel-license-premier-metal-5500_agora-accounts",
        "cpanel-license-premier-metal-5600-accounts",
        "cpanel-license-premier-metal-5600_agora-accounts",
        "cpanel-license-premier-metal-5700-accounts",
        "cpanel-license-premier-metal-5700_agora-accounts",
        "cpanel-license-premier-metal-5800-accounts",
        "cpanel-license-premier-metal-5800_agora-accounts",
        "cpanel-license-premier-metal-5900-accounts",
        "cpanel-license-premier-metal-5900_agora-accounts",
        "cpanel-license-premier-metal-600-accounts",
        "cpanel-license-premier-metal-6000-accounts",
        "cpanel-license-premier-metal-6000_agora-accounts",
        "cpanel-license-premier-metal-600_agora-accounts",
        "cpanel-license-premier-metal-6100-accounts",
        "cpanel-license-premier-metal-6100_agora-accounts",
        "cpanel-license-premier-metal-6200-accounts",
        "cpanel-license-premier-metal-6200_agora-accounts",
        "cpanel-license-premier-metal-6300-accounts",
        "cpanel-license-premier-metal-6300_agora-accounts",
        "cpanel-license-premier-metal-6400-accounts",
        "cpanel-license-premier-metal-6400_agora-accounts",
        "cpanel-license-premier-metal-6500-accounts",
        "cpanel-license-premier-metal-6500_agora-accounts",
        "cpanel-license-premier-metal-6600-accounts",
        "cpanel-license-premier-metal-6600_agora-accounts",
        "cpanel-license-premier-metal-6700-accounts",
        "cpanel-license-premier-metal-6700_agora-accounts",
        "cpanel-license-premier-metal-6800-accounts",
        "cpanel-license-premier-metal-6800_agora-accounts",
        "cpanel-license-premier-metal-6900-accounts",
        "cpanel-license-premier-metal-6900_agora-accounts",
        "cpanel-license-premier-metal-700-accounts",
        "cpanel-license-premier-metal-7000-accounts",
        "cpanel-license-premier-metal-7000_agora-accounts",
        "cpanel-license-premier-metal-700_agora-accounts",
        "cpanel-license-premier-metal-7100-accounts",
        "cpanel-license-premier-metal-7100_agora-accounts",
        "cpanel-license-premier-metal-7200-accounts",
        "cpanel-license-premier-metal-7200_agora-accounts",
        "cpanel-license-premier-metal-7300-accounts",
        "cpanel-license-premier-metal-7300_agora-accounts",
        "cpanel-license-premier-metal-7400-accounts",
        "cpanel-license-premier-metal-7400_agora-accounts",
        "cpanel-license-premier-metal-7500-accounts",
        "cpanel-license-premier-metal-7500_agora-accounts",
        "cpanel-license-premier-metal-7600-accounts",
        "cpanel-license-premier-metal-7600_agora-accounts",
        "cpanel-license-premier-metal-7700-accounts",
        "cpanel-license-premier-metal-7700_agora-accounts",
        "cpanel-license-premier-metal-7800-accounts",
        "cpanel-license-premier-metal-7800_agora-accounts",
        "cpanel-license-premier-metal-7900-accounts",
        "cpanel-license-premier-metal-7900_agora-accounts",
        "cpanel-license-premier-metal-800-accounts",
        "cpanel-license-premier-metal-8000-accounts",
        "cpanel-license-premier-metal-8000_agora-accounts",
        "cpanel-license-premier-metal-800_agora-accounts",
        "cpanel-license-premier-metal-8100-accounts",
        "cpanel-license-premier-metal-8100_agora-accounts",
        "cpanel-license-premier-metal-8200-accounts",
        "cpanel-license-premier-metal-8200_agora-accounts",
        "cpanel-license-premier-metal-8300-accounts",
        "cpanel-license-premier-metal-8300_agora-accounts",
        "cpanel-license-premier-metal-8400-accounts",
        "cpanel-license-premier-metal-8400_agora-accounts",
        "cpanel-license-premier-metal-8500-accounts",
        "cpanel-license-premier-metal-8500_agora-accounts",
        "cpanel-license-premier-metal-8600-accounts",
        "cpanel-license-premier-metal-8600_agora-accounts",
        "cpanel-license-premier-metal-8700-accounts",
        "cpanel-license-premier-metal-8700_agora-accounts",
        "cpanel-license-premier-metal-8800-accounts",
        "cpanel-license-premier-metal-8800_agora-accounts",
        "cpanel-license-premier-metal-8900-accounts",
        "cpanel-license-premier-metal-8900_agora-accounts",
        "cpanel-license-premier-metal-900-accounts",
        "cpanel-license-premier-metal-9000-accounts",
        "cpanel-license-premier-metal-9000_agora-accounts",
        "cpanel-license-premier-metal-900_agora-accounts",
        "cpanel-license-premier-metal-9100-accounts",
        "cpanel-license-premier-metal-9100_agora-accounts",
        "cpanel-license-premier-metal-9200-accounts",
        "cpanel-license-premier-metal-9200_agora-accounts",
        "cpanel-license-premier-metal-9300-accounts",
        "cpanel-license-premier-metal-9300_agora-accounts",
        "cpanel-license-premier-metal-9400-accounts",
        "cpanel-license-premier-metal-9400_agora-accounts",
        "cpanel-license-premier-metal-9500-accounts",
        "cpanel-license-premier-metal-9500_agora-accounts",
        "cpanel-license-premier-metal-9600-accounts",
        "cpanel-license-premier-metal-9600_agora-accounts",
        "cpanel-license-premier-metal-9700-accounts",
        "cpanel-license-premier-metal-9700_agora-accounts",
        "cpanel-license-premier-metal-9800-accounts",
        "cpanel-license-premier-metal-9800_agora-accounts",
        "cpanel-license-premier-metal-9900-accounts",
        "cpanel-license-premier-metal-9900_agora-accounts",
        "cpanel-license-pro-cloud-accounts",
        "cpanel-license-solo-cloud-accounts",
        "cpanel-license-solo-metal-accounts",
        "cpanel-license-version-11",
        "cpanel-license-version-11-for-virtuozzo",
        "cpanel-license-version-11-for-vps"
      ],
      "enumType": "string",
      "id": "OrderableCpanelVersionEnum",
      "namespace": "license"
    },
    "license.StateEnum": {
      "description": "All states a license can be in",
      "enum": [
        "ok",
        "released",
        "terminated",
        "toDeliver"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "license"
    },
    "license.Task": {
      "description": "licenses Todos",
      "id": "Task",
      "namespace": "license",
      "properties": {
        "action": {
          "canBeNull": false,
          "description": "This Task description",
          "fullType": "license.ActionType",
          "readOnly": true,
          "required": false,
          "type": "license.ActionType"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "When was this Task done",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "The last time this Task was updated",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "name": {
          "canBeNull": false,
          "description": "This Task name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Current Taks status",
          "fullType": "license.TaskStateEnum",
          "readOnly": true,
          "required": false,
          "type": "license.TaskStateEnum"
        },
        "taskId": {
          "canBeNull": false,
          "description": "This Task id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "When was this Task created",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "license.TaskStateEnum": {
      "description": "All states a license Task can be in",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStateEnum",
      "namespace": "license"
    },
    "license.cpanel.Cpanel": {
      "description": "Your Cpanel license",
      "id": "Cpanel",
      "namespace": "license.cpanel",
      "properties": {
        "creation": {
          "canBeNull": false,
          "description": "This license creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "Shall we delete this on expiration ?",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "domain": {
          "canBeNull": false,
          "description": "The internal name of your license",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "The ip on which this license is attached",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "licenseId": {
          "canBeNull": false,
          "description": "The license id on license provider side",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "This license state",
          "fullType": "license.StateEnum",
          "readOnly": true,
          "required": false,
          "type": "license.StateEnum"
        },
        "version": {
          "canBeNull": false,
          "description": "This license version",
          "fullType": "license.CpanelVersionEnum",
          "readOnly": true,
          "required": false,
          "type": "license.CpanelVersionEnum"
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
  "resourcePath": "/license/cpanel"
}