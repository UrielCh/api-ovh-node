import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/xdsl.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "Operations about the XDSL service",
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
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl"
    },
    {
      "description": "XDSL Access",
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
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Access",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "xdsl.Access",
              "description": "New object properties",
              "fullType": "xdsl.Access",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}"
    },
    {
      "description": "extraIpRange operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Informations about the extra IP range during address move",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ExtraIpRangeMove",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/addressMove/extraIpRange"
    },
    {
      "description": "extraIpRangeMove operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Initiate the extra IP range migration",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/addressMove/extraIpRangeMove"
    },
    {
      "description": "List the xdsl.AntiSpam objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List antiSpams for this access",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/antiSpams"
    },
    {
      "description": "Spams detected from xdsl access",
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
              "dataType": "ip",
              "description": "IP which spam",
              "fullType": "ip",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.AntiSpam",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/antiSpams/{ip}"
    },
    {
      "description": "evidences operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of evidences stored on PCS for this ip",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "IP which spam",
              "fullType": "ip",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.antiSpam.EvidencesInfo",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/antiSpams/{ip}/evidences"
    },
    {
      "description": "applyTemplateToModem operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Apply TemplateModem to existing Modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Modem Template Name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/applyTemplateToModem"
    },
    {
      "description": "canCancelResiliation operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about the ongoing resiliation",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "boolean",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/canCancelResiliation"
    },
    {
      "description": "cancelResiliation operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the ongoing resiliation",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/cancelResiliation"
    },
    {
      "description": "Change the contacts of this service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/changeContact"
    },
    {
      "description": "Diagnostic of the access",
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
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.AccessDiagnostic",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Run diagnostic on the access",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/diagnostic"
    },
    {
      "description": "Detected incident",
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
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Incident",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/incident"
    },
    {
      "description": "List the xdsl.IP objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of IPs addresses for this access",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ip[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Order an extra /29 range of IPv4 addresses",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/ips"
    },
    {
      "description": "Informations about an IP address",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Stop renewing this extra IPv4 option",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "The IP address",
              "fullType": "ip",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
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
              "dataType": "ip",
              "description": "The IP address",
              "fullType": "ip",
              "name": "ip",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.IP",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/ips/{ip}"
    },
    {
      "description": "ipv6 operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the IPv6 for this access",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Should the IPv6 be enabled ?",
              "fullType": "boolean",
              "name": "enabled",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/ipv6"
    },
    {
      "description": "List the xdsl.Line objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "The lines of the access",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/lines"
    },
    {
      "description": "Information about the physical copper line",
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
              "description": "The number of the line",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Line",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}"
    },
    {
      "description": "cancel operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel line diagnostic if possible",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The number of the line",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/diagnostic/cancel"
    },
    {
      "description": "run operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update and get advanced diagnostic of the line",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.lineDiagnostic.CustomerActionsEnum[]",
              "description": "Customer possible actions",
              "fullType": "xdsl.lineDiagnostic.CustomerActionsEnum[]",
              "name": "actionsDone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "xdsl.lineDiagnostic.Answers",
              "description": "Customer answers for line diagnostic",
              "fullType": "xdsl.lineDiagnostic.Answers",
              "name": "answers",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "xdsl.lineDiagnostic.FaultTypeEnum",
              "description": "Line diagnostic type. Depends of problem",
              "fullType": "xdsl.lineDiagnostic.FaultTypeEnum",
              "name": "faultType",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The number of the line",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.lineDiagnostic.Diagnostic",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/diagnostic/run"
    },
    {
      "description": "Information about the port on the DSLAM",
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
              "description": "The number of the line",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.DslamPort",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort"
    },
    {
      "description": "availableProfiles operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all availables profiles for this port",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The number of the line",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.DslamLineProfile[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles"
    },
    {
      "description": "changeProfile operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the profile of the port",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "The id of the xdsl.DslamLineProfile",
              "fullType": "long",
              "name": "dslamProfileId",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The number of the line",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile"
    },
    {
      "description": "logs operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the logs emitted by the DSLAM for this port",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The number of the line",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "",
              "fullType": "long",
              "name": "limit",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "xdsl.DslamPortLog[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/logs"
    },
    {
      "description": "reset operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset the port on the DSLAM",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The number of the line",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/reset"
    },
    {
      "description": "statistics operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get various statistics about the line",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The number of the line",
              "fullType": "string",
              "name": "number",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "xdsl.StatisticsPeriodEnum",
              "description": "",
              "fullType": "xdsl.StatisticsPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "xdsl.LineStatisticsTypeEnum",
              "description": "",
              "fullType": "xdsl.LineStatisticsTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "complexType.UnitAndValues<xdsl.TimestampAndValue>",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/statistics"
    },
    {
      "description": "Modem",
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
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Modem",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "xdsl.Modem",
              "description": "New object properties",
              "fullType": "xdsl.Modem",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem"
    },
    {
      "description": "availableACSBackend operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available ACS backend for this modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/availableACSBackend"
    },
    {
      "description": "availableWLANChannel operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available WLAN channel for this modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "xdsl.WLANFrequencyEnum",
              "description": "WLAN frequency you want to retrieve channels",
              "fullType": "xdsl.WLANFrequencyEnum",
              "name": "frequency",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/availableWLANChannel"
    },
    {
      "description": "blocIp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of the Bloc IP on modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ServiceStatusEnum",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the Bloc IP on modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.ServiceStatusEnum",
              "description": "the new status of the bloc ip service",
              "fullType": "xdsl.ServiceStatusEnum",
              "name": "status",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/blocIp"
    },
    {
      "description": "callWaiting operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of callWaiting on modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ServiceStatusEnum",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of callWaiting on modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.ServiceStatusEnum",
              "description": "the new status of the callWaiting service",
              "fullType": "xdsl.ServiceStatusEnum",
              "name": "callWaiting",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/callWaiting"
    },
    {
      "description": "comfortExchange operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get info about access modem replacement by last model.",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ModemExchangeInfo",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Replace access modem by last model, fees will be applied.",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Customer identifier for shipping address. By default Internet access address will be used. Allowed values are nichandle or «/me/contact/xyz»",
              "fullType": "string",
              "name": "contactShipping",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "order.Order",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/comfortExchange"
    },
    {
      "description": "List the xdsl.connectedDevice objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of devices connected on this modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/connectedDevices"
    },
    {
      "description": "Connected Device",
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
              "description": "MAC address of the device",
              "fullType": "string",
              "name": "macAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.connectedDevice",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/connectedDevices/{macAddress}"
    },
    {
      "description": "contentSharing operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of contentSharing on modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ServiceStatusEnum",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of contentSharing on modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.ServiceStatusEnum",
              "description": "the new status of the contentSharing service",
              "fullType": "xdsl.ServiceStatusEnum",
              "name": "contentSharing",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/contentSharing"
    },
    {
      "description": "duplicatePortMappingConfig operations",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-01-01T00:00:00+01:00",
            "deprecatedDate": "2018-07-01T00:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/xdsl/templateModem",
            "value": "DEPRECATED"
          },
          "description": "Remove all the current port mapping rules and set the same config as the access given in parameters",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The access name with the config you want to duplicate",
              "fullType": "string",
              "name": "accessName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/duplicatePortMappingConfig"
    },
    {
      "description": "firmware operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the firmware version installed on modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch a task to install target firmware on modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The firmware version to upgrade to",
              "fullType": "string",
              "name": "firmware",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "Date of execution, default is now",
              "fullType": "datetime",
              "name": "todoDate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/firmware"
    },
    {
      "description": "firmwareAvailable operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available firmware for this modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/firmwareAvailable"
    },
    {
      "description": "ftp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of ftp service on modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ServiceStatusEnum",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the ftp service on modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.ServiceStatusEnum",
              "description": "the new status of the ftp service",
              "fullType": "xdsl.ServiceStatusEnum",
              "name": "ftp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/ftp"
    },
    {
      "description": "ipsecAlg operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of ipsec alg service on modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ServiceStatusEnum",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the ipsec alg service on modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.ServiceStatusEnum",
              "description": "the new status of the ipsec alg service",
              "fullType": "xdsl.ServiceStatusEnum",
              "name": "ipsecAlg",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/ipsecAlg"
    },
    {
      "description": "List the xdsl.LAN objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of LANs on this modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan"
    },
    {
      "description": "LAN Configuration of the Modem",
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
              "description": "Name of the LAN",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.LAN",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "xdsl.LAN",
              "description": "New object properties",
              "fullType": "xdsl.LAN",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the LAN",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}"
    },
    {
      "description": "List the xdsl.DHCP objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of DHCP on this modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the LAN",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp"
    },
    {
      "description": "DHCP Configuration of the Modem",
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
              "description": "Name of the DHCP",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the LAN",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.DHCP",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "xdsl.DHCP",
              "description": "New object properties",
              "fullType": "xdsl.DHCP",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the DHCP",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the LAN",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}"
    },
    {
      "description": "List the xdsl.DHCPStaticAddress objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of DHCP Static Address of this modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the DHCP",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the LAN",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a DHCP static lease",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "The IP address of the device",
              "fullType": "ip",
              "name": "IPAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The MAC address of the device",
              "fullType": "string",
              "name": "MACAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the DHCP static lease",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of the DHCP",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the LAN",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.DHCPStaticAddress",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses"
    },
    {
      "description": "DHCP Static Address",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this port mapping",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the DHCP",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the LAN",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The MAC address of the device",
              "fullType": "string",
              "name": "MACAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
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
              "description": "Name of the DHCP",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the LAN",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The MAC address of the device",
              "fullType": "string",
              "name": "MACAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.DHCPStaticAddress",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "xdsl.DHCPStaticAddress",
              "description": "New object properties",
              "fullType": "xdsl.DHCPStaticAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the DHCP",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the LAN",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The MAC address of the device",
              "fullType": "string",
              "name": "MACAddress",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}"
    },
    {
      "description": "List the xdsl.PortMapping objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of PortMappings on this modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a port mapping",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipv4",
              "description": "An ip which will access to the defined rule. Default : no restriction applied",
              "fullType": "ipv4",
              "name": "allowedRemoteIp",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Description of the Port Mapping",
              "fullType": "string",
              "name": "description",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The last port of the interval on the External Client that will get the connections",
              "fullType": "long",
              "name": "externalPortEnd",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "External Port that the modem will listen on",
              "fullType": "long",
              "name": "externalPortStart",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "ip",
              "description": "The IP address of the destination of the packets",
              "fullType": "ip",
              "name": "internalClient",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The port on the Internal Client that will get the connections",
              "fullType": "long",
              "name": "internalPort",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "The last port of the interval on the Internal Client that will get the connections",
              "fullType": "long",
              "name": "internalPortEnd",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "Name of the port mapping entry",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "xdsl.xdslModemConfig.ProtocolTypeEnum",
              "description": "Protocol of the port mapping (TCP / UDP)",
              "fullType": "xdsl.xdslModemConfig.ProtocolTypeEnum",
              "name": "protocol",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.PortMapping",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/portMappings"
    },
    {
      "description": "Port Mappings",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this port mapping",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the port mapping entry",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
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
              "description": "Name of the port mapping entry",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.PortMapping",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "xdsl.PortMapping",
              "description": "New object properties",
              "fullType": "xdsl.PortMapping",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the port mapping entry",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/portMappings/{name}"
    },
    {
      "description": "reboot operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reboot the modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Date when the reboot will start",
              "fullType": "datetime",
              "name": "todoDate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/reboot"
    },
    {
      "description": "reconfigureVoip operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reconfigure voip line on modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/reconfigureVoip"
    },
    {
      "description": "refreshConnectedDevices operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Refresh the list of connected devices on the modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/refreshConnectedDevices"
    },
    {
      "description": "reset operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset the modem to its default configuration",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Reset configuration stored in OVH databases",
              "fullType": "boolean",
              "name": "resetOvhConfig",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/reset"
    },
    {
      "description": "resetPortMappingConfig operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove all the current port mapping rules",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/resetPortMappingConfig"
    },
    {
      "description": "retrieveInfo operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "get general Modem information",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<xdsl.ModemInfo>",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/retrieveInfo"
    },
    {
      "description": "sipAlg operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of sip alg service on modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ServiceStatusEnum",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the sip alg service on modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.ServiceStatusEnum",
              "description": "the new status of the sip alg service",
              "fullType": "xdsl.ServiceStatusEnum",
              "name": "sipAlg",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/sipAlg"
    },
    {
      "description": "upnp operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of the Upnp on modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ServiceStatusEnum",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the Upnp on modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.ServiceStatusEnum",
              "description": "the new status of the upnp service",
              "fullType": "xdsl.ServiceStatusEnum",
              "name": "upnp",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/upnp"
    },
    {
      "description": "List the xdsl.WLAN objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of WLANs on this modem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/wifi"
    },
    {
      "description": "WLAN Configuration of the Modem",
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
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the Wifi",
              "fullType": "string",
              "name": "wifiName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.WLAN",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "xdsl.WLAN",
              "description": "New object properties",
              "fullType": "xdsl.WLAN",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the Wifi",
              "fullType": "string",
              "name": "wifiName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/modem/wifi/{wifiName}"
    },
    {
      "description": "List the xdsl.MonitoringNotification objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List the notifications for this access",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a notification",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Whether or not to allow notifications concerning generic incidents",
              "fullType": "boolean",
              "name": "allowIncident",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "long",
              "description": "The number of seconds the access has to be down to trigger the alert",
              "fullType": "long",
              "name": "downThreshold",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The e-mail address, if type is mail",
              "fullType": "string",
              "name": "email",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "xdsl.monitoringNotifications.FrequencyEnum",
              "description": "",
              "fullType": "xdsl.monitoringNotifications.FrequencyEnum",
              "name": "frequency",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The phone number, if type is sms",
              "fullType": "string",
              "name": "phone",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The SMS account which will be debited for each sent SMS, if the type is sms",
              "fullType": "string",
              "name": "smsAccount",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "xdsl.monitoringNotifications.TypeEnum",
              "description": "",
              "fullType": "xdsl.monitoringNotifications.TypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.MonitoringNotification",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/monitoringNotifications"
    },
    {
      "description": "Defines where and how the notifications will be sent",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this notification",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.MonitoringNotification",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "xdsl.MonitoringNotification",
              "description": "New object properties",
              "fullType": "xdsl.MonitoringNotification",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/monitoringNotifications/{id}"
    },
    {
      "description": "orderFollowup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of the order",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.orderFollowup.Step[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/orderFollowup"
    },
    {
      "description": "orderMeeting operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Book a meeting and relaunch order",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Meeting end date",
              "fullType": "datetime",
              "name": "endDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "Meeting start date",
              "fullType": "datetime",
              "name": "startDate",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Meeting ui code ( code linked to the meeting returned by POST /xdsl/{serviceName}/orderMeetings )",
              "fullType": "string",
              "name": "uiCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/orderMeeting"
    },
    {
      "description": "Scheduled action before the next renewal of the service",
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
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.PendingAction",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/pendingAction"
    },
    {
      "description": "radiusConnectionLogs operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List the radius connection logs",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.RadiusConnectionLog[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/radiusConnectionLogs"
    },
    {
      "description": "requestPPPLoginMail operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Renew PPP password and send the PPP login informations to the e-mail of the nicAdmin",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/requestPPPLoginMail"
    },
    {
      "description": "requestTotalDeconsolidation operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Switch this access to total deconsolidation",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Do not port the number",
              "fullType": "boolean",
              "name": "noPortability",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "A token to prove the ownership of the line number, needed to port the number",
              "fullType": "string",
              "name": "rio",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/requestTotalDeconsolidation"
    },
    {
      "description": "resiliate operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Resiliate the access",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "The desired resiliation date",
              "fullType": "datetime",
              "name": "resiliationDate",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "xdsl.ResiliationSurvey",
              "description": "Comment about resiliation reasons",
              "fullType": "xdsl.ResiliationSurvey",
              "name": "resiliationSurvey",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ResiliationFollowUpDetail",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/resiliate"
    },
    {
      "description": "resiliationFollowup operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about the ongoing resiliation",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.ResiliationFollowUpDetail",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/resiliationFollowup"
    },
    {
      "description": "resiliationTerms operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get resiliation terms",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "datetime",
              "description": "The desired resiliation date",
              "fullType": "datetime",
              "name": "resiliationDate",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "xdsl.ResiliationTerms",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/resiliationTerms"
    },
    {
      "description": "List the telephony.Rma objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return Merchandise Authorisation associated",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/rma"
    },
    {
      "description": "Current Return Merchandise Authorisation",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the rma",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Return merchandise authorisation identifier",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
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
              "description": "Return merchandise authorisation identifier",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "telephony.Rma",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "telephony.Rma",
              "description": "New object properties",
              "fullType": "telephony.Rma",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Return merchandise authorisation identifier",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/rma/{id}"
    },
    {
      "description": "changeType operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change RMA type",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.RmaChangeTypeEnum",
              "description": "new RMA type",
              "fullType": "telephony.RmaChangeTypeEnum",
              "name": "type",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Return merchandise authorisation identifier",
              "fullType": "string",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/rma/{id}/changeType"
    },
    {
      "description": "searchOrderMeetings operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Search for available line creation meeting time slots, for order only",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<connectivity.eligibility.Meetings>",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/searchOrderMeetings"
    },
    {
      "description": "sendOrderToProvider operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unlock order in \"waitingCustomer\" status. It only concerns orders whose modem is sent before anything have been forwarded to our provider",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/sendOrderToProvider"
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
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/serviceInfos"
    },
    {
      "description": "statistics operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get various statistics about this access",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "xdsl.StatisticsPeriodEnum",
              "description": "",
              "fullType": "xdsl.StatisticsPeriodEnum",
              "name": "period",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "xdsl.AccessStatisticsTypeEnum",
              "description": "",
              "fullType": "xdsl.AccessStatisticsTypeEnum",
              "name": "type",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "complexType.UnitAndValues<xdsl.TimestampAndValue>",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/statistics"
    },
    {
      "description": "List the xdsl.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks scheduled for this access",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Filter the value of function property (=)",
              "fullType": "string",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "xdsl.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "xdsl.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/tasks"
    },
    {
      "description": "Describes the current status of a task",
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
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/tasks/{id}"
    },
    {
      "description": "archive operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the task in problem from the results",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Id of the object",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/tasks/{id}/archive"
    },
    {
      "description": "totalDeconsolidationTerms operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give the price to requestTotalDeconsolidation on the access",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.DeconsolidationTerms",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/totalDeconsolidationTerms"
    },
    {
      "description": "updateInvalidOrMissingRio operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update RIO, or disable portability, for order in error because of missing or invalid RIO",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Do not set RIO, and relaunch order without portability",
              "fullType": "boolean",
              "name": "relaunchWithoutPortability",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "RIO number for portability",
              "fullType": "string",
              "name": "rio",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "string",
              "description": "The internal name of your XDSL offer",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/{serviceName}/updateInvalidOrMissingRio"
    },
    {
      "description": "Get the cities from a zipCode",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-01-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/search/cities",
            "value": "DEPRECATED"
          },
          "description": "Get the cities from a zipCode",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The zipCode of the city",
              "fullType": "string",
              "name": "zipCode",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "xdsl.eligibility.City[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/eligibility/cities"
    },
    {
      "description": "Get the active lines at given address",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/search/lines",
            "value": "DEPRECATED"
          },
          "description": "Get the active lines at given address",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.eligibility.City",
              "description": "The information about the city",
              "fullType": "xdsl.eligibility.City",
              "name": "city",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The contact name first three letters",
              "fullType": "string",
              "name": "contactName",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "xdsl.eligibility.Street",
              "description": "The information about the street",
              "fullType": "xdsl.eligibility.Street",
              "name": "street",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The number in the street",
              "fullType": "string",
              "name": "streetNumber",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<xdsl.eligibility.Line>",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/eligibility/lines/active"
    },
    {
      "description": "Get the inactive lines at given address",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/search/lines",
            "value": "DEPRECATED"
          },
          "description": "Get the inactive lines at given address",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.eligibility.City",
              "description": "The information about the city",
              "fullType": "xdsl.eligibility.City",
              "name": "city",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The contact name first three letters",
              "fullType": "string",
              "name": "contactName",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "xdsl.eligibility.Street",
              "description": "The information about the street",
              "fullType": "xdsl.eligibility.Street",
              "name": "street",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The number in the street",
              "fullType": "string",
              "name": "streetNumber",
              "paramType": "body",
              "required": false
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<xdsl.eligibility.Line>",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/eligibility/lines/inactive"
    },
    {
      "description": "Search for meeting time slot",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/search/meetings",
            "value": "DEPRECATED"
          },
          "description": "Search for meeting time slot",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The eligibility test id",
              "fullType": "string",
              "name": "eligibilityId",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The choosen offer label",
              "fullType": "string",
              "name": "offerLabel",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<xdsl.eligibility.MeetingSlots>",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/eligibility/meetings"
    },
    {
      "description": "Get all buildings for a specific address",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/search/buildings",
            "value": "DEPRECATED"
          },
          "description": "Get all buildings for a specific address",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Unique identifier of the street (you can get it with POST /xdsl/eligibility/search/streets)",
              "fullType": "string",
              "name": "streetCode",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Street number",
              "fullType": "string",
              "name": "streetNumber",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<xdsl.eligibility.Building>"
        }
      ],
      "path": "/xdsl/eligibility/search/buildings"
    },
    {
      "description": "Get all localities linked to a zip code",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/search/cities",
            "value": "DEPRECATED"
          },
          "description": "Get all localities linked to a zip code",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Zip code",
              "fullType": "string",
              "name": "zipCode",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<xdsl.eligibility.City>"
        }
      ],
      "path": "/xdsl/eligibility/search/cities"
    },
    {
      "description": "Get all street linked to a locality",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/search/streets",
            "value": "DEPRECATED"
          },
          "description": "Get all street linked to a locality",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "French INSEE identifier (you can get it with POST /xdsl/eligibility/search/cities)",
              "fullType": "string",
              "name": "inseeCode",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<xdsl.eligibility.FiberStreet>"
        }
      ],
      "path": "/xdsl/eligibility/search/fiberStreets"
    },
    {
      "description": "Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/search/streetNumbers",
            "value": "DEPRECATED"
          },
          "description": "Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets)",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Street code",
              "fullType": "string",
              "name": "streetCode",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTaskArray<string>"
        }
      ],
      "path": "/xdsl/eligibility/search/streetNumbers"
    },
    {
      "description": "Get the streets from a city inseeCode and partial street name",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2019-01-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/search/streets",
            "value": "DEPRECATED"
          },
          "description": "Get the streets from a city inseeCode and partial street name",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The inseeCode of the city",
              "fullType": "string",
              "name": "inseeCode",
              "paramType": "query",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The partial name to match against the name of the street",
              "fullType": "string",
              "name": "partialName",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "xdsl.eligibility.Street[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/eligibility/streets"
    },
    {
      "description": "Get an eligibility by its id",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/test",
            "value": "DEPRECATED"
          },
          "description": "Get an eligibility by its id",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The eligibility id",
              "fullType": "string",
              "name": "id",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "xdsl.eligibility.Eligibility",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/eligibility/test"
    },
    {
      "description": "Do an eligibility for an address, if no line exist",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/test/address",
            "value": "DEPRECATED"
          },
          "description": "Do an eligibility for an address, if no line exist",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.eligibility.Address",
              "description": "The address",
              "fullType": "xdsl.eligibility.Address",
              "name": "address",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<xdsl.eligibility.Eligibility>",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/eligibility/test/address"
    },
    {
      "description": "Perform a fiber eligibility for a building",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/test/building",
            "value": "DEPRECATED"
          },
          "description": "Perform a fiber eligibility for a building",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Unique identifier of the building (you can get it with POST /xdsl/eligibility/search/buildings)",
              "fullType": "string",
              "name": "building",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<xdsl.eligibility.FiberEligibility>"
        }
      ],
      "path": "/xdsl/eligibility/test/fiber/building"
    },
    {
      "description": "Do an eligibility for a line",
      "operations": [
        {
          "apiStatus": {
            "deletionDate": "2018-11-15T12:00:00+01:00",
            "deprecatedDate": "2018-10-15T12:00:00+01:00",
            "description": "Deprecated, will be removed",
            "replacement": "/connectivity/eligibility/test/line",
            "value": "DEPRECATED"
          },
          "description": "Do an eligibility for a line",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The line number",
              "fullType": "string",
              "name": "lineNumber",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "xdsl.eligibility.LandlineStatusEnum",
              "description": "The line status",
              "fullType": "xdsl.eligibility.LandlineStatusEnum",
              "name": "lineStatus",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.AsyncTask<xdsl.eligibility.Eligibility>",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/eligibility/test/line"
    },
    {
      "description": "Operations about the XDSL service",
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
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/email/pro"
    },
    {
      "description": "XDSL Email Pro",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the email",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The email address if the XDSL Email Pro",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
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
              "description": "The email address if the XDSL Email Pro",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.xdslEmailPro",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "xdsl.xdslEmailPro",
              "description": "New object properties",
              "fullType": "xdsl.xdslEmailPro",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The email address if the XDSL Email Pro",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/email/pro/{email}"
    },
    {
      "description": "changePassword operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the email password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "password",
              "description": "New email password",
              "fullType": "password",
              "name": "password",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The email address if the XDSL Email Pro",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.email.pro.Task",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/email/pro/{email}/changePassword"
    },
    {
      "description": "List the xdsl.Incident objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of incidents",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "datetime",
              "description": "Filter the value of creationDate property (>)",
              "fullType": "datetime",
              "name": "creationDate",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "datetime",
              "description": "Filter the value of endDate property (<)",
              "fullType": "datetime",
              "name": "endDate",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/xdsl/incidents"
    },
    {
      "description": "Detected incident",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "long",
              "description": "ID of the incident",
              "fullType": "long",
              "name": "id",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.Incident"
        }
      ],
      "path": "/xdsl/incidents/{id}"
    },
    {
      "description": "Operations about the XDSL service",
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
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/spare"
    },
    {
      "description": "Spare properties",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the spare as if it was not belonging to OVH anymore",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
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
              "description": "The internal name of your spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "spare.xdsl.XdslSpare",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/spare/{spare}"
    },
    {
      "description": "compatibleReplacement operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the list of brand compatible to be replaced",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/spare/{spare}/compatibleReplacement"
    },
    {
      "description": "replace operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Replace the modem by its spare",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The modem to replace by the spare",
              "fullType": "string",
              "name": "domain",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The internal name of your spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/spare/{spare}/replace"
    },
    {
      "description": "returnMerchandise operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the broken equipment in instantRefund",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "The internal name of your spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/spare/{spare}/returnMerchandise"
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
              "description": "The internal name of your spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "description": "The internal name of your spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/spare/{spare}/serviceInfos"
    },
    {
      "description": "Get all available spare brands",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all available spare brands",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/spare/brands"
    },
    {
      "description": "List the xdsl.TemplateModem objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "List of TemplateModem",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Create new Modem Template from existing modem",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Modem Template name (only alphanumeric characters)",
              "fullType": "string",
              "name": "name",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "The access name with the config you want to duplicate",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.TemplateModem",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/templateModem"
    },
    {
      "description": "Modem Template",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "description": "Delete this Modem Template",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Name of the Modem Template",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
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
              "dataType": "string",
              "description": "Name of the Modem Template",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.TemplateModem",
          "scopes": [
            "all",
            "product/xdsl/all"
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
              "dataType": "xdsl.TemplateModem",
              "description": "New object properties",
              "fullType": "xdsl.TemplateModem",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name of the Modem Template",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void",
          "scopes": [
            "all",
            "product/xdsl/all"
          ]
        }
      ],
      "path": "/xdsl/templateModem/{name}"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "complexType.UnitAndValue<T>": {
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "T"
        }
      }
    },
    "complexType.UnitAndValues<T>": {
      "description": "A value set tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValues",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "T[]"
        }
      }
    },
    "connectivity.eligibility.MeetingSlot": {
      "description": "Represents a time slot for a meeting",
      "id": "MeetingSlot",
      "namespace": "connectivity.eligibility",
      "properties": {
        "endDate": {
          "canBeNull": false,
          "description": "End date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "uiCode": {
          "canBeNull": true,
          "description": "An opaque string that represents an intervention unit",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "connectivity.eligibility.Meetings": {
      "description": "List of available meeting time slots",
      "id": "Meetings",
      "namespace": "connectivity.eligibility",
      "properties": {
        "canBookFakeMeeting": {
          "canBeNull": false,
          "description": "Whether or not it is possible to book a fake meeting",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "meetingSlots": {
          "canBeNull": false,
          "description": "A time slot",
          "readOnly": false,
          "required": false,
          "type": "connectivity.eligibility.MeetingSlot[]"
        }
      }
    },
    "coreTypes.CountryEnum": {
      "description": "ISO country codes",
      "enum": [
        "ac",
        "ad",
        "ae",
        "af",
        "ag",
        "ai",
        "al",
        "am",
        "an",
        "ao",
        "aq",
        "ar",
        "as",
        "at",
        "au",
        "aw",
        "ax",
        "az",
        "ba",
        "bb",
        "bd",
        "be",
        "bf",
        "bg",
        "bh",
        "bi",
        "bj",
        "bl",
        "bm",
        "bn",
        "bo",
        "bq",
        "br",
        "bs",
        "bt",
        "bv",
        "bw",
        "by",
        "bz",
        "ca",
        "cc",
        "cd",
        "cf",
        "cg",
        "ch",
        "ci",
        "ck",
        "cl",
        "cm",
        "cn",
        "co",
        "cr",
        "cs",
        "cu",
        "cv",
        "cw",
        "cx",
        "cy",
        "cz",
        "de",
        "dj",
        "dk",
        "dm",
        "do",
        "dz",
        "ec",
        "ee",
        "eg",
        "eh",
        "er",
        "es",
        "et",
        "fc",
        "fd",
        "fi",
        "fj",
        "fk",
        "fm",
        "fo",
        "fr",
        "fx",
        "ga",
        "gb",
        "gd",
        "ge",
        "gf",
        "gg",
        "gh",
        "gi",
        "gl",
        "gm",
        "gn",
        "gp",
        "gq",
        "gr",
        "gs",
        "gt",
        "gu",
        "gw",
        "gy",
        "hk",
        "hm",
        "hn",
        "hr",
        "ht",
        "hu",
        "id",
        "ie",
        "il",
        "im",
        "in",
        "io",
        "iq",
        "ir",
        "is",
        "it",
        "je",
        "jm",
        "jo",
        "jp",
        "ke",
        "kg",
        "kh",
        "ki",
        "km",
        "kn",
        "kp",
        "kr",
        "kw",
        "ky",
        "kz",
        "la",
        "lb",
        "lc",
        "li",
        "lk",
        "lr",
        "ls",
        "lt",
        "lu",
        "lv",
        "ly",
        "ma",
        "mc",
        "md",
        "me",
        "mf",
        "mg",
        "mh",
        "mk",
        "ml",
        "mm",
        "mn",
        "mo",
        "mp",
        "mq",
        "mr",
        "ms",
        "mt",
        "mu",
        "mv",
        "mw",
        "mx",
        "my",
        "mz",
        "na",
        "nc",
        "ne",
        "nf",
        "ng",
        "ni",
        "nl",
        "no",
        "np",
        "nr",
        "nu",
        "nz",
        "om",
        "pa",
        "pe",
        "pf",
        "pg",
        "ph",
        "pk",
        "pl",
        "pm",
        "pn",
        "pr",
        "ps",
        "pt",
        "pw",
        "py",
        "qa",
        "qc",
        "re",
        "ro",
        "rs",
        "ru",
        "rw",
        "sa",
        "sb",
        "sc",
        "sd",
        "se",
        "sg",
        "sh",
        "si",
        "sj",
        "sk",
        "sl",
        "sm",
        "sn",
        "so",
        "sr",
        "ss",
        "st",
        "sv",
        "sx",
        "sy",
        "sz",
        "tc",
        "td",
        "tf",
        "tg",
        "th",
        "tj",
        "tk",
        "tl",
        "tm",
        "tn",
        "to",
        "tp",
        "tr",
        "tt",
        "tv",
        "tw",
        "tz",
        "ua",
        "ug",
        "uk",
        "um",
        "us",
        "uy",
        "uz",
        "va",
        "vc",
        "ve",
        "vg",
        "vi",
        "vn",
        "vu",
        "we",
        "wf",
        "ws",
        "ye",
        "yt",
        "yu",
        "za",
        "zm",
        "zw"
      ],
      "enumType": "string",
      "id": "CountryEnum",
      "namespace": "coreTypes"
    },
    "coreTypes.IpVersionEnum": {
      "description": "Ip versions",
      "enum": [
        "v4",
        "v6"
      ],
      "enumType": "string",
      "id": "IpVersionEnum",
      "namespace": "coreTypes"
    },
    "email.pro.ObjectStateEnum": {
      "description": "Current object state",
      "enum": [
        "creating",
        "deleting",
        "ok",
        "reopening",
        "suspended",
        "suspending",
        "unknown"
      ],
      "enumType": "string",
      "id": "ObjectStateEnum",
      "namespace": "email.pro"
    },
    "order.Contract": {
      "description": "A contract",
      "id": "Contract",
      "namespace": "order",
      "properties": {
        "content": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "text"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.CurrencyCodeEnum": {
      "enum": [
        "AUD",
        "CAD",
        "CZK",
        "EUR",
        "GBP",
        "INR",
        "LTL",
        "MAD",
        "N/A",
        "PLN",
        "SGD",
        "TND",
        "USD",
        "XOF",
        "points"
      ],
      "enumType": "string",
      "id": "CurrencyCodeEnum",
      "namespace": "order"
    },
    "order.Order": {
      "description": "An order",
      "id": "Order",
      "namespace": "order",
      "properties": {
        "contracts": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Contract[]"
        },
        "details": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.OrderDetail[]"
        },
        "orderId": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "prices": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.OrderPrices"
        },
        "url": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.OrderDetail": {
      "description": "Detail of an order",
      "id": "OrderDetail",
      "namespace": "order",
      "properties": {
        "description": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "detailType": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "order.OrderDetailTypeEnum"
        },
        "domain": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "quantity": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "totalPrice": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.OrderDetailTypeEnum": {
      "description": "Product type of item in order",
      "enum": [
        "ACCESSORY",
        "CAUTION",
        "CHOOSED",
        "CONSUMPTION",
        "CREATION",
        "DELIVERY",
        "DURATION",
        "GIFT",
        "INSTALLATION",
        "LICENSE",
        "MUTE",
        "OTHER",
        "OUTPLAN",
        "QUANTITY",
        "REFUND",
        "RENEW",
        "SPECIAL",
        "SWITCH",
        "TRANSFER",
        "VOUCHER"
      ],
      "enumType": "string",
      "id": "OrderDetailTypeEnum",
      "namespace": "order"
    },
    "order.OrderPrices": {
      "description": "Prices of an order",
      "id": "OrderPrices",
      "namespace": "order",
      "properties": {
        "tax": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "withTax": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "withoutTax": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.Price": {
      "description": "Price with it's currency and textual representation",
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "text": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "double"
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
    "spare.xdsl.XdslSpare": {
      "description": "Spare properties",
      "id": "XdslSpare",
      "namespace": "spare.xdsl",
      "properties": {
        "brand": {
          "canBeNull": false,
          "description": "Modem brand model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "macAddress": {
          "canBeNull": false,
          "description": "Mac address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "telephony.Contact": {
      "description": "Contact informations structure",
      "id": "Contact",
      "namespace": "telephony",
      "properties": {
        "address": {
          "canBeNull": true,
          "description": "Contact address",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": true,
          "description": "Contact city",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": true,
          "description": "Contact country",
          "readOnly": false,
          "required": false,
          "type": "coreTypes.CountryEnum"
        },
        "email": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstname": {
          "canBeNull": true,
          "description": "Contact firstname",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Contact name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisation": {
          "canBeNull": true,
          "description": "Contact organisation",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": true,
          "description": "Contact phone",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": true,
          "description": "Contact zip",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "telephony.Rma": {
      "description": "Current Return Merchandise Authorisation",
      "id": "Rma",
      "namespace": "telephony",
      "properties": {
        "cancellable": {
          "canBeNull": false,
          "description": "Is the RMA cancellable?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "creationDatetime": {
          "canBeNull": false,
          "description": "Creation datetime of the return merchandise authorisation ticket",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "equipmentReference": {
          "canBeNull": false,
          "description": "Merchandise reference",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Return merchandise authorisation identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "newMerchandise": {
          "canBeNull": true,
          "description": "New merchandise brand in case of exchange",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "offerTypeNew": {
          "canBeNull": true,
          "description": "Offer type of the new merchandise in case of exchange",
          "fullType": "telephony.RmaOfferTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "telephony.RmaOfferTypeEnum"
        },
        "offerTypeOld": {
          "canBeNull": false,
          "description": "Offer type of the return merchandise",
          "fullType": "telephony.RmaOfferTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "telephony.RmaOfferTypeEnum"
        },
        "process": {
          "canBeNull": false,
          "description": "Process determined for merchandise returned",
          "fullType": "telephony.RmaReplaceTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "telephony.RmaReplaceTypeEnum"
        },
        "receptionDatetime": {
          "canBeNull": true,
          "description": "Reception datetime of the return merchandise authorisation ticket",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "shippingContact": {
          "canBeNull": false,
          "description": "Contact information related to the delivery shipping in case of exchange",
          "fullType": "telephony.Contact",
          "readOnly": false,
          "required": false,
          "type": "telephony.Contact"
        },
        "status": {
          "canBeNull": false,
          "description": "Return merchandise authorisation step",
          "fullType": "telephony.RmaStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "telephony.RmaStatusEnum"
        },
        "steps": {
          "canBeNull": false,
          "description": "Indicates the current status of the RMA with a list of steps",
          "fullType": "telephony.RmaStep[]",
          "readOnly": true,
          "required": false,
          "type": "telephony.RmaStep[]"
        },
        "terminationDatetime": {
          "canBeNull": true,
          "description": "Termination datetime of the return merchandise authorisation ticket",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "type": {
          "canBeNull": false,
          "description": "Typology process of merchandise return",
          "fullType": "telephony.RmaTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "telephony.RmaTypeEnum"
        }
      }
    },
    "telephony.RmaChangeTypeEnum": {
      "description": "Types of return merchandise authorisation you can change to",
      "enum": [
        "resiliate",
        "toSip"
      ],
      "enumType": "string",
      "id": "RmaChangeTypeEnum",
      "namespace": "telephony"
    },
    "telephony.RmaOfferTypeEnum": {
      "description": "Return merchandise authorisation offer type",
      "enum": [
        "deposit",
        "loan",
        "purchase"
      ],
      "enumType": "string",
      "id": "RmaOfferTypeEnum",
      "namespace": "telephony"
    },
    "telephony.RmaReplaceTypeEnum": {
      "description": "Return merchandise authorisation type",
      "enum": [
        "changePhone",
        "phoneRestitution",
        "undefined"
      ],
      "enumType": "string",
      "id": "RmaReplaceTypeEnum",
      "namespace": "telephony"
    },
    "telephony.RmaStatusEnum": {
      "description": "Return merchandise authorisation step",
      "enum": [
        "closed",
        "open",
        "received"
      ],
      "enumType": "string",
      "id": "RmaStatusEnum",
      "namespace": "telephony"
    },
    "telephony.RmaStep": {
      "description": "Informations related to the current RMA step status",
      "id": "RmaStep",
      "namespace": "telephony",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "A brief description of the step",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "The date when this step was done",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "infos": {
          "canBeNull": true,
          "description": "Additional informations about the step",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "The name of the RMA step",
          "readOnly": false,
          "required": false,
          "type": "telephony.RmaStepNameEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the step",
          "readOnly": false,
          "required": false,
          "type": "telephony.RmaStepStatusEnum"
        }
      }
    },
    "telephony.RmaStepNameEnum": {
      "description": "RMA step names",
      "enum": [
        "dispatchJustification",
        "equipmentSending",
        "equipmentTesting",
        "opening",
        "parcelReception",
        "parcelValidation",
        "validation"
      ],
      "enumType": "string",
      "id": "RmaStepNameEnum",
      "namespace": "telephony"
    },
    "telephony.RmaStepStatusEnum": {
      "description": "Status of the RMA step",
      "enum": [
        "done",
        "todo"
      ],
      "enumType": "string",
      "id": "RmaStepStatusEnum",
      "namespace": "telephony"
    },
    "telephony.RmaTypeEnum": {
      "description": "Return merchandise authorisation type",
      "enum": [
        "after sale equipment service exchange",
        "after sale phone service exchange",
        "equipment restitution",
        "fast exchange",
        "old merchandise reception before exchange",
        "phone restitution",
        "resends due to shipping lost by the carrier",
        "resends due to shipping not withdraw",
        "specific return merchandise authorisation",
        "termination",
        "unknown"
      ],
      "enumType": "string",
      "id": "RmaTypeEnum",
      "namespace": "telephony"
    },
    "xdsl.Access": {
      "description": "XDSL Access",
      "id": "Access",
      "namespace": "xdsl",
      "properties": {
        "accessName": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "accessType": {
          "canBeNull": false,
          "fullType": "xdsl.DslTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.DslTypeEnum"
        },
        "address": {
          "canBeNull": false,
          "fullType": "xdsl.AddressDetail",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AddressDetail"
        },
        "capabilities": {
          "canBeNull": false,
          "fullType": "xdsl.AccessCapabilities",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AccessCapabilities"
        },
        "description": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ipv6Enabled": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lnsRateLimit": {
          "canBeNull": true,
          "description": "Rate limit on the LNS in kbps - Only available if canApplyLnsRateLimit capability is set to true - Must be a multiple of 64 - Min value 64 / Max value 100032",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "monitoring": {
          "canBeNull": false,
          "description": "Whether or not this access is monitored",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "nra": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "packName": {
          "canBeNull": true,
          "description": "Pack name, if access is in a pack",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pairsNumber": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "role": {
          "canBeNull": false,
          "fullType": "xdsl.AccessRoleEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AccessRoleEnum"
        },
        "status": {
          "canBeNull": false,
          "fullType": "xdsl.AccessStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AccessStatusEnum"
        }
      }
    },
    "xdsl.AccessCapabilities": {
      "description": "Describe the capabilities of the Access",
      "id": "AccessCapabilities",
      "namespace": "xdsl",
      "properties": {
        "canApplyLnsRateLimit": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeDslamProfile": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeLns": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canGetRadiusConnectionLogs": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canResetDslamPort": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "hasDslamPort": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "xdsl.AccessDiagnostic": {
      "description": "Diagnostic of the access",
      "id": "AccessDiagnostic",
      "namespace": "xdsl",
      "properties": {
        "capabilities": {
          "canBeNull": false,
          "description": "Available tests for this access",
          "fullType": "xdsl.AccessDiagnosticCapabilities",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AccessDiagnosticCapabilities"
        },
        "diagnosticTime": {
          "canBeNull": false,
          "description": "Datime of the diagnostic",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "incident": {
          "canBeNull": true,
          "description": "Is there an ongoing genericIncident on the access ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isActiveOnLns": {
          "canBeNull": true,
          "description": "Is the access active on its primary or secondary LNS",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isModemConnected": {
          "canBeNull": true,
          "description": "Is the modem connected ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lineDetails": {
          "canBeNull": true,
          "description": "Test details by line",
          "fullType": "xdsl.LineDiagnostic[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.LineDiagnostic[]"
        },
        "maintenance": {
          "canBeNull": true,
          "description": "Is there an ongoing scheduled maintenance by operator on the access ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "ping": {
          "canBeNull": true,
          "description": "Does the access ping ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "remaining": {
          "canBeNull": false,
          "description": "Remaining number of diagnostic for this access",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.AccessDiagnosticCapabilities": {
      "description": "Describe the capabilities of the access diagnostic",
      "id": "AccessDiagnosticCapabilities",
      "namespace": "xdsl",
      "properties": {
        "incident": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "isActiveOnLns": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "isModemConnected": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "lineTest": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "ping": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "proposedProfileId": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "sync": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "xdsl.AccessRoleEnum": {
      "description": "Available access roles",
      "enum": [
        "backup",
        "main"
      ],
      "enumType": "string",
      "id": "AccessRoleEnum",
      "namespace": "xdsl"
    },
    "xdsl.AccessStatisticsTypeEnum": {
      "description": "Various types of statisctics available for the access.",
      "enum": [
        "ping",
        "traffic:download",
        "traffic:upload"
      ],
      "enumType": "string",
      "id": "AccessStatisticsTypeEnum",
      "namespace": "xdsl"
    },
    "xdsl.AccessStatusEnum": {
      "description": "Status of the access",
      "enum": [
        "active",
        "cancelled",
        "close",
        "deleting",
        "doing",
        "migration",
        "slamming",
        "upgradeOffer"
      ],
      "enumType": "string",
      "id": "AccessStatusEnum",
      "namespace": "xdsl"
    },
    "xdsl.AddressDetail": {
      "description": "All components of an address",
      "id": "AddressDetail",
      "namespace": "xdsl",
      "properties": {
        "building": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "door": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "floor": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "inseeCode": {
          "canBeNull": false,
          "description": "Identifier of the city",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastName": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "numberStreet": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "residence": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "rivoliCode": {
          "canBeNull": false,
          "description": "Identifier of the street",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "stairs": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "street": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zipCode": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.AntiSpam": {
      "description": "Spams detected from xdsl access",
      "id": "AntiSpam",
      "namespace": "xdsl",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Detection date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ip": {
          "canBeNull": false,
          "description": "IP which spam",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "lastSpamDetected": {
          "canBeNull": false,
          "description": "Last spam detection date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "AntiSpam status",
          "fullType": "xdsl.antiSpam.AntiSpamStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.antiSpam.AntiSpamStatusEnum"
        }
      }
    },
    "xdsl.AsyncTask<T>": {
      "description": "Async task",
      "generics": [
        "T"
      ],
      "id": "AsyncTask",
      "namespace": "xdsl",
      "properties": {
        "error": {
          "canBeNull": true,
          "description": "Error",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Result of the call",
          "readOnly": false,
          "required": false,
          "type": "T"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the call",
          "readOnly": false,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTaskArray<T>": {
      "description": "Async task array",
      "generics": [
        "T"
      ],
      "id": "AsyncTaskArray",
      "namespace": "xdsl",
      "properties": {
        "error": {
          "canBeNull": true,
          "description": "Error",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Result of the call",
          "readOnly": false,
          "required": false,
          "type": "T[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the call",
          "readOnly": false,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTaskStatusEnum": {
      "description": "AsyncTask status",
      "enum": [
        "error",
        "ok",
        "pending"
      ],
      "enumType": "string",
      "id": "AsyncTaskStatusEnum",
      "namespace": "xdsl"
    },
    "xdsl.DHCP": {
      "description": "DHCP Configuration of the Modem",
      "id": "DHCP",
      "namespace": "xdsl",
      "properties": {
        "defaultGateway": {
          "canBeNull": false,
          "description": "The default gateway to be given to the clients",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "dhcpName": {
          "canBeNull": false,
          "description": "Name of the DHCP",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "domainName": {
          "canBeNull": false,
          "description": "Domain name provided to the clients",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "endAddress": {
          "canBeNull": false,
          "description": "Last address of the pool assigned by the DHCP",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "leaseTime": {
          "canBeNull": false,
          "description": "Lease time in seconds of client assigned address (-1 means infinite)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "primaryDNS": {
          "canBeNull": false,
          "description": "Primary DNS servers to be given to the clients",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "secondaryDNS": {
          "canBeNull": true,
          "description": "Secondary DNS servers to be given to the clients",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "serverEnabled": {
          "canBeNull": false,
          "description": "State of the DHCP server of the modem",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "startAddress": {
          "canBeNull": false,
          "description": "First address of the pool assigned by the DHCP",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "subnetMask": {
          "canBeNull": false,
          "description": "The subnet mask given to the clients",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "taskId": {
          "canBeNull": true,
          "description": "ID of the ongoing todo (NULL if none)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.DHCPStaticAddress": {
      "description": "DHCP Static Address",
      "id": "DHCPStaticAddress",
      "namespace": "xdsl",
      "properties": {
        "IPAddress": {
          "canBeNull": false,
          "description": "The IP address of the device",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "MACAddress": {
          "canBeNull": false,
          "description": "The MAC address of the device",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Name of the DHCP Static lease",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "taskId": {
          "canBeNull": true,
          "description": "ID of the ongoing todo (NULL if none)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.DeconsolidationEnum": {
      "description": "Deconsolidation of the line.",
      "enum": [
        "createNeighbour",
        "creation",
        "creationNeighbour",
        "partial",
        "total"
      ],
      "enumType": "string",
      "id": "DeconsolidationEnum",
      "namespace": "xdsl"
    },
    "xdsl.DeconsolidationTerms": {
      "description": "Show the deconsolidation terms",
      "id": "DeconsolidationTerms",
      "namespace": "xdsl",
      "properties": {
        "engagement": {
          "canBeNull": false,
          "description": "Duration of month the access will be engaged",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "monthlyPrice": {
          "canBeNull": false,
          "description": "New abo price after the deconsolidation",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "price": {
          "canBeNull": false,
          "description": "Price to pay",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "xdsl.DeviceModemInfo": {
      "description": "Describe device informations of a Modem",
      "id": "DeviceModemInfo",
      "namespace": "xdsl",
      "properties": {
        "brand": {
          "canBeNull": false,
          "description": "Modem brand",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "Modem ip address",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Time of last information refresh",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "macAddress": {
          "canBeNull": false,
          "description": "Modem mac address",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "model": {
          "canBeNull": false,
          "description": "Modem type of model",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "oui": {
          "canBeNull": false,
          "description": "Organizational Unique Identifier",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "overEthernet": {
          "canBeNull": true,
          "description": "Protocol used for connection",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "pppLogin": {
          "canBeNull": true,
          "description": "login used for ppp protocol",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "serial": {
          "canBeNull": false,
          "description": "Modem serial key",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "softVersion": {
          "canBeNull": false,
          "description": "Software Version",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.DslTypeEnum": {
      "description": "Possible DSL technologies",
      "enum": [
        "adsl",
        "ftte",
        "ftth",
        "sdsl",
        "vdsl"
      ],
      "enumType": "string",
      "id": "DslTypeEnum",
      "namespace": "xdsl"
    },
    "xdsl.DslamLineProfile": {
      "description": "Profile on the DSLAM",
      "id": "DslamLineProfile",
      "namespace": "xdsl",
      "properties": {
        "id": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "isCurrent": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.DslamPort": {
      "description": "Information about the port on the DSLAM",
      "id": "DslamPort",
      "namespace": "xdsl",
      "properties": {
        "lastDesyncDate": {
          "canBeNull": true,
          "description": "Last time the port lost the synchronization",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastSyncDate": {
          "canBeNull": true,
          "description": "Last time the port synchronized",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "profile": {
          "canBeNull": true,
          "fullType": "xdsl.DslamLineProfile",
          "readOnly": true,
          "required": false,
          "type": "xdsl.DslamLineProfile"
        },
        "status": {
          "canBeNull": false,
          "fullType": "xdsl.DslamPortStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.DslamPortStatusEnum"
        }
      }
    },
    "xdsl.DslamPortLog": {
      "description": "A message log from the DSLAM",
      "id": "DslamPortLog",
      "namespace": "xdsl",
      "properties": {
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastOccurrenceDate": {
          "canBeNull": false,
          "description": "The last time this message occured",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "message": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "numberOfOccurrences": {
          "canBeNull": false,
          "description": "The number of times this message occured between date and lastOccurrenceDate",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.DslamPortStatusEnum": {
      "description": "Different states of a DSLAM port",
      "enum": [
        "activated",
        "deactivated",
        "outofsync"
      ],
      "enumType": "string",
      "id": "DslamPortStatusEnum",
      "namespace": "xdsl"
    },
    "xdsl.ExtraIpRangeMove": {
      "description": "Informations about the extra IP range during address move",
      "id": "ExtraIpRangeMove",
      "namespace": "xdsl",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "Date of the migration",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "ipRange": {
          "canBeNull": false,
          "description": "IP range to migrate",
          "readOnly": false,
          "required": false,
          "type": "ipv4Block"
        },
        "moveTo": {
          "canBeNull": false,
          "description": "Access where the IP range will be moved to",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.FaultRepairTimeEnum": {
      "description": "Maximum time needed to repair a landline",
      "enum": [
        "4HNO",
        "4HO",
        "NORMAL"
      ],
      "enumType": "string",
      "id": "FaultRepairTimeEnum",
      "namespace": "xdsl"
    },
    "xdsl.GtrEnum": {
      "description": "Gtr of the line.",
      "enum": [
        "4hno",
        "4ho",
        "none"
      ],
      "enumType": "string",
      "id": "GtrEnum",
      "namespace": "xdsl"
    },
    "xdsl.IP": {
      "description": "Informations about an IP address",
      "id": "IP",
      "namespace": "xdsl",
      "properties": {
        "dnsList": {
          "canBeNull": false,
          "fullType": "ip[]",
          "readOnly": true,
          "required": false,
          "type": "ip[]"
        },
        "ip": {
          "canBeNull": false,
          "description": "The IP address",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "range": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "status of the IP",
          "fullType": "xdsl.IpStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.IpStatusEnum"
        },
        "version": {
          "canBeNull": false,
          "fullType": "coreTypes.IpVersionEnum",
          "readOnly": true,
          "required": false,
          "type": "coreTypes.IpVersionEnum"
        }
      }
    },
    "xdsl.Incident": {
      "description": "Detected incident",
      "id": "Incident",
      "namespace": "xdsl",
      "properties": {
        "comment": {
          "canBeNull": false,
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Estimated start date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "departments": {
          "canBeNull": false,
          "description": "Department list",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "endDate": {
          "canBeNull": true,
          "description": "Estimated end date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the incident",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "nra": {
          "canBeNull": false,
          "description": "NRA list",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "operators": {
          "canBeNull": false,
          "description": "Operator",
          "fullType": "xdsl.OperatorTypeEnum[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.OperatorTypeEnum[]"
        },
        "taskId": {
          "canBeNull": true,
          "description": "Task ID on travaux.ovh.com",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.IpStatusEnum": {
      "description": "Status of an IP.",
      "enum": [
        "active",
        "close",
        "toDelete"
      ],
      "enumType": "string",
      "id": "IpStatusEnum",
      "namespace": "xdsl"
    },
    "xdsl.LAN": {
      "description": "LAN Configuration of the Modem",
      "id": "LAN",
      "namespace": "xdsl",
      "properties": {
        "IPAddress": {
          "canBeNull": false,
          "description": "The IP address of the LAN interface of the modem",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "addressingType": {
          "canBeNull": false,
          "description": "How the LAN interface of the modem is gettig its address",
          "fullType": "xdsl.xdslModemConfig.AddressingTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "xdsl.xdslModemConfig.AddressingTypeEnum"
        },
        "lanName": {
          "canBeNull": false,
          "description": "Name of the LAN",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "subnetMask": {
          "canBeNull": false,
          "description": "The subnet mask of the LAN interface of the modem",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "taskId": {
          "canBeNull": true,
          "description": "ID of the ongoing todo (NULL if none)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.LandlineConcentrationPoint": {
      "description": "Infos about a Landline at the concentration point",
      "id": "LandlineConcentrationPoint",
      "namespace": "xdsl",
      "properties": {
        "lineHead": {
          "canBeNull": false,
          "description": "Identifier of the head of the cable from the MDF",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lineInitialSection": {
          "canBeNull": false,
          "description": "Identifier of the section at the lineHead",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "lineInitialSectionPair": {
          "canBeNull": false,
          "description": "Identifier of the pair at the lineHead's lineInitialSection",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.Line": {
      "description": "Information about the physical copper line",
      "id": "Line",
      "namespace": "xdsl",
      "properties": {
        "concentrationPoint": {
          "canBeNull": true,
          "description": "Data to identify the line at the concentration point",
          "fullType": "xdsl.LandlineConcentrationPoint",
          "readOnly": true,
          "required": false,
          "type": "xdsl.LandlineConcentrationPoint"
        },
        "deconsolidation": {
          "canBeNull": false,
          "fullType": "xdsl.DeconsolidationEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.DeconsolidationEnum"
        },
        "directDistribution": {
          "canBeNull": true,
          "description": "True if the line is directly wired on the DSLAM",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "distance": {
          "canBeNull": false,
          "description": "Distance in meters from the DSLAM",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "faultRepairTime": {
          "canBeNull": false,
          "fullType": "xdsl.FaultRepairTimeEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.FaultRepairTimeEnum"
        },
        "lineSectionsLength": {
          "canBeNull": false,
          "description": "Detailed information about the sections between the DSLAM and the telephone jack",
          "fullType": "xdsl.LineSectionLength[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.LineSectionLength[]"
        },
        "mitigation": {
          "canBeNull": false,
          "description": "Mitigation of the line in dB",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "number": {
          "canBeNull": false,
          "description": "The number of the line",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "originalNumber": {
          "canBeNull": true,
          "description": "The number used to place the order. Null if the same as the current number.",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "portability": {
          "canBeNull": false,
          "description": "Whether the line number has been ported to OVH, to be used with VoIP service",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "syncDown": {
          "canBeNull": true,
          "description": "The download synchronisation on the DSLAM in Kbps",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "syncUp": {
          "canBeNull": true,
          "description": "The upload synchronisation on the DSLAM in Kbps",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "xdsl.LineDiagnostic": {
      "description": "Detailed line tests",
      "id": "LineDiagnostic",
      "namespace": "xdsl",
      "properties": {
        "lineTest": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "xdsl.LineTestEnum"
        },
        "lineTestTime": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "number": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "proposedProfileId": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "sync": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "xdsl.LineSectionLength": {
      "id": "LineSectionLength",
      "namespace": "xdsl",
      "properties": {
        "diameter": {
          "canBeNull": false,
          "description": "The diameter of this section in millimeters",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "length": {
          "canBeNull": false,
          "description": "The length of this section in meters",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.LineStatisticsTypeEnum": {
      "description": "Various types of statisctics available for the line.",
      "enum": [
        "attenuation:download",
        "attenuation:upload",
        "error:crc",
        "error:fec",
        "error:hec",
        "snr:download",
        "snr:upload",
        "synchronization:download",
        "synchronization:upload"
      ],
      "enumType": "string",
      "id": "LineStatisticsTypeEnum",
      "namespace": "xdsl"
    },
    "xdsl.LineTestEnum": {
      "description": "Line tests results",
      "enum": [
        "actionPending",
        "customerSideProblem",
        "error",
        "noProblem",
        "ovhSideProblem"
      ],
      "enumType": "string",
      "id": "LineTestEnum",
      "namespace": "xdsl"
    },
    "xdsl.Modem": {
      "description": "Modem",
      "id": "Modem",
      "namespace": "xdsl",
      "properties": {
        "acsBackend": {
          "canBeNull": false,
          "description": "ACS backend used by the modem",
          "fullType": "xdsl.xdslModemConfig.ACSBackendEnum",
          "readOnly": false,
          "required": false,
          "type": "xdsl.xdslModemConfig.ACSBackendEnum"
        },
        "acsVersion": {
          "canBeNull": true,
          "description": "Version of ACS API used",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "brandName": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "capabilities": {
          "canBeNull": false,
          "fullType": "xdsl.ModemCapabilities",
          "readOnly": true,
          "required": false,
          "type": "xdsl.ModemCapabilities"
        },
        "dmzIP": {
          "canBeNull": true,
          "description": "IP Address of the DMZ (To modify or delete the DMZ IP on the modem, a re-configuration of your modem has to be made, your configuration will be maintained, but you will lose your connection a few minutes)",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "easyFirewallLevel": {
          "canBeNull": true,
          "description": "Level of the FireWall on the modem",
          "fullType": "xdsl.xdslModemConfig.EasyFirewallLevelEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.xdslModemConfig.EasyFirewallLevelEnum"
        },
        "ipv6Support": {
          "canBeNull": false,
          "description": "Whether or not the modem supports IPv6",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isBridged": {
          "canBeNull": false,
          "description": "Whether or not the modem is in bridge mode. To pass from bridge mode to routed mode, a reset is necessary. If the modem is managedByOvh, the bridge state will be kept after a reset",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "lastCwmpRequestDate": {
          "canBeNull": true,
          "description": "Last time the modem made a CWMP request to the Auto Configuration Server",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "macAddress": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "managedByOvh": {
          "canBeNull": false,
          "description": "Whether or not the user can configure his modem via OVH Interface (will lock telnet and local HTTP configuration page)",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "model": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "mtuSize": {
          "canBeNull": true,
          "description": "Size of the Maximum Transmission Unit on the modem's interfaces",
          "fullType": "xdsl.xdslModemConfig.MTUSizeEnum",
          "readOnly": false,
          "required": false,
          "type": "xdsl.xdslModemConfig.MTUSizeEnum"
        },
        "serialNumber": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.ModemCapabilities": {
      "description": "Describe the capabilities of the Modem",
      "id": "ModemCapabilities",
      "namespace": "xdsl",
      "properties": {
        "canBeManagedByOvh": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeACS": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeBridgeMode": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeDHCP": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeDMZ": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeEasyFirewallLevel": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeFirmware": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeLAN": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeManagement": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeMtu": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangePortMapping": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canChangeWLAN": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canReboot": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canReconfigureVoip": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canRefreshConnectedDevices": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "canReset": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "xdsl.ModemExchangeInfo": {
      "description": "Information about modem exchange",
      "id": "ModemExchangeInfo",
      "namespace": "xdsl",
      "properties": {
        "canExchange": {
          "canBeNull": false,
          "description": "To know if you can exchange your modem",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "newModel": {
          "canBeNull": false,
          "description": "Model of the new modem",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Price without tax to pay for exchange",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "priceWithTax": {
          "canBeNull": false,
          "description": "Price with tax included to pay for exchange",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "xdsl.ModemInfo": {
      "description": "Describe general information of a Modem",
      "id": "ModemInfo",
      "namespace": "xdsl",
      "properties": {
        "device": {
          "canBeNull": false,
          "description": "Hardware information",
          "readOnly": false,
          "required": false,
          "type": "xdsl.DeviceModemInfo"
        },
        "statistics": {
          "canBeNull": false,
          "description": "Modem Connection information",
          "readOnly": false,
          "required": false,
          "type": "xdsl.StatsModemInfo"
        }
      }
    },
    "xdsl.MonitoringNotification": {
      "description": "Defines where and how the notifications will be sent",
      "id": "MonitoringNotification",
      "namespace": "xdsl",
      "properties": {
        "allowIncident": {
          "canBeNull": false,
          "description": "Whether or not to allow notifications for generic incidents",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "downThreshold": {
          "canBeNull": false,
          "description": "The number of seconds the access has to be down to trigger an alert",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "email": {
          "canBeNull": true,
          "description": "The e-mail address, if type is mail",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "enabled": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": false,
          "description": "The frenquency to send reminders when the access is still down",
          "fullType": "xdsl.monitoringNotifications.FrequencyEnum",
          "readOnly": false,
          "required": false,
          "type": "xdsl.monitoringNotifications.FrequencyEnum"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "phone": {
          "canBeNull": true,
          "description": "The phone number, if type is sms",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "smsAccount": {
          "canBeNull": true,
          "description": "The SMS account which will be debited for each sent SMS, if the type is sms",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "fullType": "xdsl.monitoringNotifications.TypeEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.monitoringNotifications.TypeEnum"
        }
      }
    },
    "xdsl.OperatorTypeEnum": {
      "description": "Operators",
      "enum": [
        "collect",
        "kosc",
        "ovh"
      ],
      "enumType": "string",
      "id": "OperatorTypeEnum",
      "namespace": "xdsl"
    },
    "xdsl.PendingAction": {
      "description": "Scheduled action before the next renewal of the service",
      "id": "PendingAction",
      "namespace": "xdsl",
      "properties": {
        "action": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "dateTodo": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "xdsl.PortMapping": {
      "description": "Port Mappings",
      "id": "PortMapping",
      "namespace": "xdsl",
      "properties": {
        "allowedRemoteIp": {
          "canBeNull": true,
          "description": "An ip which will access to the defined rule. Default : no restriction applied",
          "fullType": "ipv4",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of the Port Mapping",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "externalPortEnd": {
          "canBeNull": true,
          "description": "The last port of the interval on the External Client that will get the connections",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "externalPortStart": {
          "canBeNull": false,
          "description": "External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "id": {
          "canBeNull": false,
          "description": "ID of the port mapping entry",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "internalClient": {
          "canBeNull": false,
          "description": "The IP address of the destination of the packets",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "internalPort": {
          "canBeNull": false,
          "description": "The port on the Internal Client that will get the connections",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "internalPortEnd": {
          "canBeNull": true,
          "description": "The last port of the interval on the Internal Client that will get the connections",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the port mapping entry",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "protocol": {
          "canBeNull": false,
          "description": "Protocol of the port mapping (TCP / UDP)",
          "fullType": "xdsl.xdslModemConfig.ProtocolTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "xdsl.xdslModemConfig.ProtocolTypeEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "ID of the ongoing todo (NULL if none)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.RadiusConnectionLog": {
      "description": "Log entry of an auth attempt to the radius server",
      "id": "RadiusConnectionLog",
      "namespace": "xdsl",
      "properties": {
        "date": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "login": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "message": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.ResiliationFollowUpDetail": {
      "description": "Details about the resiliation",
      "id": "ResiliationFollowUpDetail",
      "namespace": "xdsl",
      "properties": {
        "dateTodo": {
          "canBeNull": false,
          "description": "Date when the resiliation will take effect",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "needModemReturn": {
          "canBeNull": false,
          "description": "If the customer needs to return his modem",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "registrationDate": {
          "canBeNull": false,
          "description": "Date when the resiliation was done",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the resiliation",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.ResiliationReasonEnum": {
      "description": "Reason of a resiliation",
      "enum": [
        "addressMove",
        "billingProblems",
        "cessationOfActivity",
        "changeOfTerms",
        "ftth",
        "goToCompetitor",
        "other",
        "technicalProblems"
      ],
      "enumType": "string",
      "id": "ResiliationReasonEnum",
      "namespace": "xdsl"
    },
    "xdsl.ResiliationSurvey": {
      "description": "Information about the reason for the resiliation",
      "id": "ResiliationSurvey",
      "namespace": "xdsl",
      "properties": {
        "comment": {
          "canBeNull": true,
          "description": "Comment about this resiliation",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of reason for the resiliation",
          "readOnly": false,
          "required": false,
          "type": "xdsl.ResiliationReasonEnum"
        }
      }
    },
    "xdsl.ResiliationTerms": {
      "description": "Show the resiliation terms",
      "id": "ResiliationTerms",
      "namespace": "xdsl",
      "properties": {
        "due": {
          "canBeNull": false,
          "description": "Price due at resiliationDate",
          "readOnly": false,
          "required": false,
          "type": "order.Price"
        },
        "engageDate": {
          "canBeNull": true,
          "description": "Date until which the customer is engaged",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "minResiliationDate": {
          "canBeNull": false,
          "description": "Minumum resiliationDate",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "resiliationDate": {
          "canBeNull": false,
          "description": "Date at which the access will be resiliated",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "resiliationReasons": {
          "canBeNull": false,
          "description": "List of available resiliation reasons",
          "readOnly": false,
          "required": false,
          "type": "xdsl.ResiliationReasonEnum[]"
        }
      }
    },
    "xdsl.ServiceStatusEnum": {
      "description": "Status of the service",
      "enum": [
        "disabled",
        "enabled"
      ],
      "enumType": "string",
      "id": "ServiceStatusEnum",
      "namespace": "xdsl"
    },
    "xdsl.StatisticsPeriodEnum": {
      "description": "Periods for statistics.",
      "enum": [
        "daily",
        "monthly",
        "preview",
        "weekly",
        "yearly"
      ],
      "enumType": "string",
      "id": "StatisticsPeriodEnum",
      "namespace": "xdsl"
    },
    "xdsl.StatsModemInfo": {
      "description": "Describe statistics information of a Modem",
      "id": "StatsModemInfo",
      "namespace": "xdsl",
      "properties": {
        "connectionUptime": {
          "canBeNull": false,
          "description": "Connection uptime",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "crcError": {
          "canBeNull": false,
          "description": "Amount of CRC error detected",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "deviceUptime": {
          "canBeNull": false,
          "description": "Modem uptime",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "downstreamAttenuation": {
          "canBeNull": false,
          "description": "Downstream attenuation",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "downstreamMargin": {
          "canBeNull": false,
          "description": "Downstream margin",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "downstreamSync": {
          "canBeNull": false,
          "description": "Downstream synchronization",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "fecError": {
          "canBeNull": false,
          "description": "Amount of FEC error detected",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "hecError": {
          "canBeNull": false,
          "description": "Amount of HEC error detected",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Time of last refresh",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "modulation": {
          "canBeNull": false,
          "description": "Line modulation used",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "quarterHourStart": {
          "canBeNull": false,
          "description": "Count from last refresh in seconds",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "syncUptime": {
          "canBeNull": false,
          "description": "Synchronization uptime",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "upstreamAttenuation": {
          "canBeNull": false,
          "description": "Upstream attenuation",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "upstreamMargin": {
          "canBeNull": false,
          "description": "Upstream margin",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "upstreamSync": {
          "canBeNull": false,
          "description": "Upstream synchronization",
          "readOnly": false,
          "required": false,
          "type": "double"
        }
      }
    },
    "xdsl.Task": {
      "description": "Describes the current status of a task",
      "id": "Task",
      "namespace": "xdsl",
      "properties": {
        "function": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "xdsl.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.TaskStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Date when the action will start",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "updateDate": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "xdsl.TaskStatusEnum": {
      "description": "Status of a task.",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "problem",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "xdsl"
    },
    "xdsl.TemplateModem": {
      "description": "Modem Template",
      "id": "TemplateModem",
      "namespace": "xdsl",
      "properties": {
        "DHCP": {
          "canBeNull": false,
          "description": "List of DHCP for this template",
          "fullType": "xdsl.templateModem.DHCP[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.templateModem.DHCP[]"
        },
        "LAN": {
          "canBeNull": false,
          "description": "List of LAN for this template",
          "fullType": "xdsl.templateModem.LAN[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.templateModem.LAN[]"
        },
        "WLAN": {
          "canBeNull": false,
          "description": "List of WLAN for this template",
          "fullType": "xdsl.templateModem.WLAN[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.templateModem.WLAN[]"
        },
        "capabilities": {
          "canBeNull": false,
          "description": "Parameters capabilities. Lists what can be applied from this template",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Template creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "dmzIP": {
          "canBeNull": true,
          "description": "IP Address of the DMZ",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "mtuSize": {
          "canBeNull": true,
          "description": "Size of the Maximum Transmission Unit on the modem's interfaces",
          "fullType": "xdsl.xdslModemConfig.MTUSizeEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.xdslModemConfig.MTUSizeEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the Modem Template",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "parametersToIgnore": {
          "canBeNull": true,
          "description": "Do not apply these parameters from template. You can use parametersCapabilities to know availability",
          "fullType": "xdsl.templateModem.ParametersToIgnore",
          "readOnly": false,
          "required": false,
          "type": "xdsl.templateModem.ParametersToIgnore"
        },
        "portMapping": {
          "canBeNull": false,
          "description": "List of PortMapping for this template",
          "fullType": "xdsl.templateModem.PortMapping[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.templateModem.PortMapping[]"
        }
      }
    },
    "xdsl.TimestampAndValue": {
      "description": "A value associated to a timestamp",
      "id": "TimestampAndValue",
      "namespace": "xdsl",
      "properties": {
        "timestamp": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "double"
        }
      }
    },
    "xdsl.WLAN": {
      "description": "WLAN Configuration of the Modem",
      "id": "WLAN",
      "namespace": "xdsl",
      "properties": {
        "SSID": {
          "canBeNull": false,
          "description": "Service Set Identifier of the WLAN interface",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "SSIDAdvertisementEnabled": {
          "canBeNull": false,
          "description": "Hide or show the Wifi",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "bandSteering": {
          "canBeNull": false,
          "description": "Indicate if frequencies 2.4GHz and 5GHz are agregated",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "channel": {
          "canBeNull": false,
          "description": "Choice of a channel (When chosen, channelMode is set to Manual)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "channelMode": {
          "canBeNull": false,
          "description": "How the channel is chosen (Auto / Manual)",
          "fullType": "xdsl.xdslModemConfig.ChannelModeEnum",
          "readOnly": false,
          "required": false,
          "type": "xdsl.xdslModemConfig.ChannelModeEnum"
        },
        "enabled": {
          "canBeNull": false,
          "description": "Wifi state",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": false,
          "description": "Frequency (2.4GHz | 5GHz)",
          "fullType": "xdsl.xdslModemConfig.FrequencyEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.xdslModemConfig.FrequencyEnum"
        },
        "guest": {
          "canBeNull": false,
          "description": "Indicate if it is normal access wifi or guest wifi",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "securityKey": {
          "canBeNull": false,
          "description": "WPA or WEP key",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "securityType": {
          "canBeNull": false,
          "description": "Security (None | WEP | WPA | WPA2 | WPAandWPA2)",
          "fullType": "xdsl.xdslModemConfig.SecurityTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "xdsl.xdslModemConfig.SecurityTypeEnum"
        },
        "taskId": {
          "canBeNull": true,
          "description": "ID of the ongoing todo (NULL if none)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "wifiName": {
          "canBeNull": false,
          "description": "Name of the Wifi",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.WLANFrequencyEnum": {
      "description": "Frequency of WLAN",
      "enum": [
        "2.4GHz",
        "5GHz"
      ],
      "enumType": "string",
      "id": "WLANFrequencyEnum",
      "namespace": "xdsl"
    },
    "xdsl.antiSpam.AntiSpamStatusEnum": {
      "description": "AntiSpam status",
      "enum": [
        "block",
        "done",
        "new",
        "unblock",
        "warn"
      ],
      "enumType": "string",
      "id": "AntiSpamStatusEnum",
      "namespace": "xdsl.antiSpam"
    },
    "xdsl.antiSpam.EvidencesInfo": {
      "description": "List of evidences",
      "id": "EvidencesInfo",
      "namespace": "xdsl.antiSpam",
      "properties": {
        "error": {
          "canBeNull": true,
          "description": "AsyncTask detailed error",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Table with evidences stored on PCS",
          "readOnly": false,
          "required": false,
          "type": "xdsl.antiSpam.EvidencesInfoDetail[]"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "readOnly": false,
          "required": false,
          "type": "xdsl.antiSpam.EvidencesInfoStatusEnum"
        }
      }
    },
    "xdsl.antiSpam.EvidencesInfoDetail": {
      "description": "detail on evidences stored on PCS",
      "id": "EvidencesInfoDetail",
      "namespace": "xdsl.antiSpam",
      "properties": {
        "date": {
          "canBeNull": false,
          "description": "File date on the PCS",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "filename": {
          "canBeNull": false,
          "description": "File name on the PCS",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "Temporary URL to access file",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.antiSpam.EvidencesInfoStatusEnum": {
      "description": "Evidences AsyncTask status",
      "enum": [
        "error",
        "ok",
        "pending"
      ],
      "enumType": "string",
      "id": "EvidencesInfoStatusEnum",
      "namespace": "xdsl.antiSpam"
    },
    "xdsl.connectedDevice": {
      "description": "Connected Device",
      "id": "connectedDevice",
      "namespace": "xdsl",
      "properties": {
        "active": {
          "canBeNull": false,
          "description": "The state of this device on the modem",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "addressSource": {
          "canBeNull": false,
          "description": "How did the device got its IP address",
          "fullType": "xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum"
        },
        "hostName": {
          "canBeNull": false,
          "description": "Host name given by the device to the modem",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "informationDate": {
          "canBeNull": false,
          "description": "The date time of the last update of thoses informations",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "interfaceType": {
          "canBeNull": false,
          "description": "On which interface is connected the device",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ipAddress": {
          "canBeNull": false,
          "description": "The IP address of the device",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "leaseTimeRemaining": {
          "canBeNull": false,
          "description": "The remaining time in seconds of the DHCP lease of this device (-1 means infinite)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "macAddress": {
          "canBeNull": false,
          "description": "MAC address of the device",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.eligibility.Address": {
      "description": "Represents an address",
      "id": "Address",
      "namespace": "xdsl.eligibility",
      "properties": {
        "building": {
          "canBeNull": true,
          "description": "Name of the building, if any",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "description": "Informations about the city",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.City"
        },
        "door": {
          "canBeNull": true,
          "description": "Identifier of the door, if any",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "floor": {
          "canBeNull": true,
          "description": "Identifier of the floor, if any",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "logo": {
          "canBeNull": true,
          "description": "Identifier of the historical operator landmark, if any",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "owner": {
          "canBeNull": true,
          "description": "Owner of the line, this information can be restricted",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "residence": {
          "canBeNull": true,
          "description": "Name of the residence, if any",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "stair": {
          "canBeNull": true,
          "description": "Identifier of the stair, if any",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "street": {
          "canBeNull": true,
          "description": "Informations about the street",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.Street"
        },
        "streetNumber": {
          "canBeNull": true,
          "description": "Number on the street",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.eligibility.Building": {
      "description": "Details of a Building",
      "id": "Building",
      "namespace": "xdsl.eligibility",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Building name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "nro": {
          "canBeNull": false,
          "description": "Building NRO (Optical main distribution frame)",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "reference": {
          "canBeNull": false,
          "description": "Identifier which refer to a building uniquely",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Building type",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.BuildingTypeEnum"
        }
      }
    },
    "xdsl.eligibility.BuildingTypeEnum": {
      "description": "Type of building",
      "enum": [
        "BUILDING",
        "HOUSE"
      ],
      "enumType": "string",
      "id": "BuildingTypeEnum",
      "namespace": "xdsl.eligibility"
    },
    "xdsl.eligibility.City": {
      "description": "Represent a city",
      "id": "City",
      "namespace": "xdsl.eligibility",
      "properties": {
        "inseeCode": {
          "canBeNull": false,
          "description": "INSEE code of the city",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "locality": {
          "canBeNull": true,
          "description": "Locality (subset of a city)",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the city",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zipCode": {
          "canBeNull": false,
          "description": "Zip code of the city",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.eligibility.CodeAndMessage": {
      "description": "A message and its code",
      "id": "CodeAndMessage",
      "namespace": "xdsl.eligibility",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "A code identifying the message",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "message": {
          "canBeNull": false,
          "description": "A message",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.eligibility.Eligibility": {
      "description": "Eligibility result",
      "id": "Eligibility",
      "namespace": "xdsl.eligibility",
      "properties": {
        "address": {
          "canBeNull": true,
          "description": "The line address",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.Address"
        },
        "characteristics": {
          "canBeNull": false,
          "description": "The line characteristics",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.LineCharacteristics"
        },
        "endpoint": {
          "canBeNull": false,
          "description": "The eligibility endpoint type",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.LineEndpointEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "The eligibility uuid",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "infos": {
          "canBeNull": false,
          "description": "The line infos",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.LineInfos"
        },
        "offers": {
          "canBeNull": false,
          "description": "The eligible offers list",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.Offer[]"
        },
        "portability": {
          "canBeNull": false,
          "description": "Portability capabilities",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.Portability"
        }
      }
    },
    "xdsl.eligibility.FiberEligibility": {
      "description": "Fiber Eligibility result",
      "id": "FiberEligibility",
      "namespace": "xdsl.eligibility",
      "properties": {
        "id": {
          "canBeNull": false,
          "description": "Eligibility UUID",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "offers": {
          "canBeNull": false,
          "description": "List of fiber offer",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.FiberOffer[]"
        }
      }
    },
    "xdsl.eligibility.FiberOffer": {
      "description": "A fiber offer",
      "id": "FiberOffer",
      "namespace": "xdsl.eligibility",
      "properties": {
        "availibilityDate": {
          "canBeNull": true,
          "description": "The availibility date if the fiber is planned but not available yet",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "downloadRate": {
          "canBeNull": true,
          "description": "Estimated or guaranteed download rate in Mbit/s, if applicable",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "eligible": {
          "canBeNull": false,
          "description": "Are you eligible to this offer ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "gtr": {
          "canBeNull": false,
          "description": "Allowed GTR",
          "readOnly": false,
          "required": false,
          "type": "xdsl.GtrEnum[]"
        },
        "guaranteed": {
          "canBeNull": false,
          "description": "Is the rate guaranteed ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "label": {
          "canBeNull": false,
          "description": "Offer label",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "reason": {
          "canBeNull": true,
          "description": "Reason of non eligibility, if applicable",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Technology",
          "readOnly": false,
          "required": false,
          "type": "xdsl.DslTypeEnum"
        },
        "uploadRate": {
          "canBeNull": true,
          "description": "Estimated or guaranteed upload rate in Mbit/s, if applicable",
          "readOnly": false,
          "required": false,
          "type": "double"
        }
      }
    },
    "xdsl.eligibility.FiberStreet": {
      "description": "Details of a FiberStreet",
      "id": "FiberStreet",
      "namespace": "xdsl.eligibility",
      "properties": {
        "streetCode": {
          "canBeNull": false,
          "description": "Identifier which refer to a street uniquely",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "streetName": {
          "canBeNull": false,
          "description": "Street name",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.eligibility.LandlineStatusEnum": {
      "description": "Status of a landline",
      "enum": [
        "active",
        "inactive"
      ],
      "enumType": "string",
      "id": "LandlineStatusEnum",
      "namespace": "xdsl.eligibility"
    },
    "xdsl.eligibility.Line": {
      "description": "a line",
      "id": "Line",
      "namespace": "xdsl.eligibility",
      "properties": {
        "address": {
          "canBeNull": false,
          "description": "The line address",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.Address"
        },
        "contactName": {
          "canBeNull": false,
          "description": "The contact name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lineNumber": {
          "canBeNull": false,
          "description": "The line number",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lineStatus": {
          "canBeNull": false,
          "description": "The line status",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.LandlineStatusEnum"
        }
      }
    },
    "xdsl.eligibility.LineCharacteristics": {
      "description": "The characteristics of a line",
      "id": "LineCharacteristics",
      "namespace": "xdsl.eligibility",
      "properties": {
        "calibration": {
          "canBeNull": false,
          "description": "Details of line calibration",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.LineSectionCalibration[]"
        },
        "desaturationFreePairs": {
          "canBeNull": false,
          "description": "Number of free pairs proposed ondesaturation of copper lines",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "distance": {
          "canBeNull": false,
          "description": "Distance to the NRA in meters",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "freePairs": {
          "canBeNull": false,
          "description": "Number of free pairs",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "mitigation": {
          "canBeNull": false,
          "description": "The estimated mitigation for ADSL and VDSL technologies",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "mitigationSdsl": {
          "canBeNull": false,
          "description": "The estimated mitigation for SDSL technology",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "nra": {
          "canBeNull": false,
          "description": "The NRA",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.eligibility.LineEndpointEnum": {
      "description": "Type of the endpoint for the eligibility",
      "enum": [
        "address",
        "line"
      ],
      "enumType": "string",
      "id": "LineEndpointEnum",
      "namespace": "xdsl.eligibility"
    },
    "xdsl.eligibility.LineInfos": {
      "description": "The line infos",
      "id": "LineInfos",
      "namespace": "xdsl.eligibility",
      "properties": {
        "createNeighbour": {
          "canBeNull": false,
          "description": "Weither we are in create neighbor case or not",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "lineNumber": {
          "canBeNull": true,
          "description": "The line number, if endpoint is number",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lineStatus": {
          "canBeNull": true,
          "description": "The line status, if endpoint is number",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.LandlineStatusEnum"
        },
        "unlistedNumber": {
          "canBeNull": false,
          "description": "Is the number unlisted ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "xdsl.eligibility.LineSectionCalibration": {
      "description": "A line section calibration detail",
      "id": "LineSectionCalibration",
      "namespace": "xdsl.eligibility",
      "properties": {
        "diameter": {
          "canBeNull": false,
          "description": "The section diameter in millimeters",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "length": {
          "canBeNull": false,
          "description": "The section length in meters",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.eligibility.MeetingSlot": {
      "description": "Represents a time slot for a meeting",
      "id": "MeetingSlot",
      "namespace": "xdsl.eligibility",
      "properties": {
        "endDate": {
          "canBeNull": false,
          "description": "The end of the time slot",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "The beginning of the time slot",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "uiCode": {
          "canBeNull": false,
          "description": "An opaque string that represents an intervention unit",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.eligibility.MeetingSlots": {
      "description": "List of available meeting time slots",
      "id": "MeetingSlots",
      "namespace": "xdsl.eligibility",
      "properties": {
        "canBookFakeMeeting": {
          "canBeNull": false,
          "description": "Whether or not it is possible to book a fake meeting",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "meetingSlots": {
          "canBeNull": false,
          "description": "A time slot",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.MeetingSlot[]"
        }
      }
    },
    "xdsl.eligibility.Offer": {
      "description": "An offer",
      "id": "Offer",
      "namespace": "xdsl.eligibility",
      "properties": {
        "desaturation": {
          "canBeNull": true,
          "description": "Is copper lines desaturation needed and available for this offer ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "downloadRate": {
          "canBeNull": true,
          "description": "Estimated or guaranteed download rate in Mbit/s, if applicable",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "gtr": {
          "canBeNull": false,
          "description": "Allowed GTR (none, 4ho : 4 work hours, 4hno : 4 unworked hours)",
          "readOnly": false,
          "required": false,
          "type": "xdsl.GtrEnum[]"
        },
        "guaranteed": {
          "canBeNull": false,
          "description": "Is the rate guaranteed ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "label": {
          "canBeNull": false,
          "description": "Offer label",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "pairs": {
          "canBeNull": true,
          "description": "Number of pairs to use",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "provider": {
          "canBeNull": true,
          "description": "Provider, if applicable",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.ProviderEnum"
        },
        "rate": {
          "canBeNull": true,
          "description": "DEPRECATED Please use downloadRate instead /DEPRECATED - Estimated or guaranteed rate in Mbit/s, if applicable",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "type": {
          "canBeNull": false,
          "description": "DSL technology",
          "readOnly": false,
          "required": false,
          "type": "xdsl.DslTypeEnum"
        },
        "unbundling": {
          "canBeNull": true,
          "description": "Allowed unbundling methods",
          "readOnly": false,
          "required": false,
          "type": "xdsl.DeconsolidationEnum[]"
        },
        "uploadRate": {
          "canBeNull": true,
          "description": "Estimated or guaranteed upload rate in Mbit/s, if applicable",
          "readOnly": false,
          "required": false,
          "type": "double"
        }
      }
    },
    "xdsl.eligibility.Portability": {
      "description": "Eligibility of the portability of the line number",
      "id": "Portability",
      "namespace": "xdsl.eligibility",
      "properties": {
        "comments": {
          "canBeNull": false,
          "description": "The reason(s) of the negative portability eligibility",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.CodeAndMessage[]"
        },
        "eligible": {
          "canBeNull": false,
          "description": "Whether or not it is possible to port the line number. If false, commentList contains the reason(s)",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "underCondition": {
          "canBeNull": false,
          "description": "Whether or not the portability is possible under condition. If true, warningList contains the reason(s)",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "warnings": {
          "canBeNull": false,
          "description": "The special condition(s) of the portability",
          "readOnly": false,
          "required": false,
          "type": "xdsl.eligibility.CodeAndMessage[]"
        }
      }
    },
    "xdsl.eligibility.ProviderEnum": {
      "description": "The providers",
      "enum": [
        "axione",
        "ft",
        "kosc",
        "ovh",
        "sfr"
      ],
      "enumType": "string",
      "id": "ProviderEnum",
      "namespace": "xdsl.eligibility"
    },
    "xdsl.eligibility.Street": {
      "description": "Represent a street",
      "id": "Street",
      "namespace": "xdsl.eligibility",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Name of the street",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "rivoliCode": {
          "canBeNull": false,
          "description": "RIVOLI identifier of the street",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.email.pro.Task": {
      "description": "Task Struct",
      "id": "Task",
      "namespace": "xdsl.email.pro",
      "properties": {
        "finishDate": {
          "canBeNull": true,
          "description": "Finished date of the task",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function of the task",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the task",
          "readOnly": false,
          "required": false,
          "type": "xdsl.email.pro.TaskStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Todo date of the task",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "xdsl.email.pro.TaskStatusEnum": {
      "description": "Status of an Email Pro task.",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "xdsl.email.pro"
    },
    "xdsl.lineDiagnostic.Answers": {
      "description": "Customer answers for line diagnostic",
      "id": "Answers",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "bandwidthTestUnit": {
          "canBeNull": true,
          "description": "bandwidth unit for proof.ovh.net test values",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.BandwidthTestUnitEnum"
        },
        "comment": {
          "canBeNull": true,
          "description": "comment will contains all informations needed for intervention and about your access problem",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "conditionsAccepted": {
          "canBeNull": true,
          "description": "customer knows that he can be charged (150 euros HT) if he is responsible for the problem or if tests have not been done correctly ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "contactPhone": {
          "canBeNull": true,
          "description": "customer's phone number",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "datetimeOfAppearance": {
          "canBeNull": true,
          "description": "approximative datetime of problem happening",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "downloadBandwidthTest": {
          "canBeNull": true,
          "description": "bandwidth download value on proof.ovh.net test",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "endAfternoonHours": {
          "canBeNull": true,
          "description": "afternoon closing informations or time for the site",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "endMorningHours": {
          "canBeNull": true,
          "description": "morning closing informations or time for the site",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "followBySms": {
          "canBeNull": true,
          "description": "indicate if customer wants to be informed by sms",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "hasModemKeptSynchronization": {
          "canBeNull": true,
          "description": "Has modem kept his synchronization during line port reset ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "idAppointment": {
          "canBeNull": true,
          "description": "id of appointment chosen (\"possibleValues\" contains choices list with id)",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "individualSite": {
          "canBeNull": true,
          "description": "is non-professional site ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "modemIsSynchronized": {
          "canBeNull": true,
          "description": "Is modem synchronized ? (whatever internet connection)",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "modemMac": {
          "canBeNull": true,
          "description": "modem mac address",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "modemStillSynchronized": {
          "canBeNull": true,
          "description": "Modem still synchronized ? Please check once again.",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "modemType": {
          "canBeNull": true,
          "description": "modem brand and reference",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ovhTicket": {
          "canBeNull": true,
          "description": "Ovh ticket name or ticket ID, only if a ticket is already opened for this problem",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "problemType": {
          "canBeNull": true,
          "description": "Problem Type on DSL connection",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.ProblemTypeEnum"
        },
        "resolvedAfterTests": {
          "canBeNull": true,
          "description": "is access problem solved ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "secureSite": {
          "canBeNull": true,
          "description": "is secure site ?",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "severalInternetConnections": {
          "canBeNull": true,
          "description": "Has customer several internal connections ? (on the same place)",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "siteClosedDays": {
          "canBeNull": true,
          "description": "days or period where site access is not possible",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "siteDigicode": {
          "canBeNull": true,
          "description": "digicode for site entrance",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "siteOpening": {
          "canBeNull": true,
          "description": "site opening hours or informations",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "startAfternoonHours": {
          "canBeNull": true,
          "description": "afternoon opening informations or time for the site",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "startMorningHours": {
          "canBeNull": true,
          "description": "morning opening informations or time for the site",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "uploadBandwidthTest": {
          "canBeNull": true,
          "description": "bandwidth upload value on proof.ovh.net test",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.lineDiagnostic.BandwidthTestUnitEnum": {
      "description": "bandwidth unit for proof.ovh.net test values",
      "enum": [
        "Kbps",
        "Mbps"
      ],
      "enumType": "string",
      "id": "BandwidthTestUnitEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.lineDiagnostic.ConnectionInformations": {
      "description": "Informations directly get on DSLAM or Modem",
      "id": "ConnectionInformations",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "crcError": {
          "canBeNull": true,
          "description": "Amount of CRC error detected",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "downstreamAttenuation": {
          "canBeNull": true,
          "description": "Downstream attenuation",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "downstreamMargin": {
          "canBeNull": true,
          "description": "Downstream margin",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "downstreamSync": {
          "canBeNull": true,
          "description": "Downstream synchronization",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "ifName": {
          "canBeNull": true,
          "description": "Modem interface name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "profile": {
          "canBeNull": true,
          "description": "Profile on the DSLAM",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "upstreamAttenuation": {
          "canBeNull": true,
          "description": "Upstream attenuation",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "upstreamMargin": {
          "canBeNull": true,
          "description": "Upstream margin",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "upstreamSync": {
          "canBeNull": true,
          "description": "Upstream synchronization",
          "readOnly": false,
          "required": false,
          "type": "double"
        }
      }
    },
    "xdsl.lineDiagnostic.CustomerActionToDo": {
      "description": "Customer action to do",
      "id": "CustomerActionToDo",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "description": {
          "canBeNull": false,
          "description": "action's description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "action's name",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.CustomerActionsEnum"
        }
      }
    },
    "xdsl.lineDiagnostic.CustomerActionsEnum": {
      "description": "Customer possible actions",
      "enum": [
        "bePreparedToCheckModemSynchronization",
        "changeDslFilterAndPlugInDti",
        "changeExtensionCable",
        "changeProfile",
        "checkConnectionCable",
        "checkConnectionLoginAndParameters",
        "checkFilter",
        "connectModemToOtherPlugs",
        "neutralTest",
        "rebootModem",
        "resetModem",
        "unplugEveryModems",
        "unplugModem"
      ],
      "enumType": "string",
      "id": "CustomerActionsEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.lineDiagnostic.Diagnostic": {
      "description": "Diagnostic status and informations",
      "id": "Diagnostic",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "data": {
          "canBeNull": false,
          "description": "Contains informations about diagnostic (questions, previous answers, actions to do, line details, selt result...)",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.DiagnosticData"
        },
        "faultType": {
          "canBeNull": false,
          "description": "Detected fault type",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.FaultTypeEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Diagnostic id",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Diagnostic status",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.DiagnosticStatusEnum"
        }
      }
    },
    "xdsl.lineDiagnostic.DiagnosticData": {
      "description": "Diagnostic data and informations",
      "id": "DiagnosticData",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "actionsDone": {
          "canBeNull": false,
          "description": "List of actions already done by customer",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.CustomerActionsEnum[]"
        },
        "actionsToDo": {
          "canBeNull": false,
          "description": "List of actions that must be done by customer",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.CustomerActionToDo[]"
        },
        "answers": {
          "canBeNull": false,
          "description": "Previous customer answers",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.Answers"
        },
        "comment": {
          "canBeNull": true,
          "description": "Diagnostic comment. Can be update during any diagnostic step",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Diagnostic creation date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "diagnosticDoneDate": {
          "canBeNull": true,
          "description": "End of diagnostic date. Will be null until problem totally identified",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "error": {
          "canBeNull": false,
          "description": "Error message",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last diagnostic update date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "lineDetails": {
          "canBeNull": false,
          "description": "Informations about line",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.LineDetails"
        },
        "robotAction": {
          "canBeNull": true,
          "description": "Current or last robot action",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.RobotActionsEnum"
        },
        "seltTest": {
          "canBeNull": false,
          "description": "SELT test result",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.SeltResult"
        },
        "timeout": {
          "canBeNull": false,
          "description": "Diagnostic timeout in minutes. Any action restart timeout",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "toAnswer": {
          "canBeNull": false,
          "description": "List of questions that must be answered by customer",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.Question[]"
        }
      }
    },
    "xdsl.lineDiagnostic.DiagnosticStatusEnum": {
      "description": "Diagnostic status possible values",
      "enum": [
        "cancelled",
        "connectionProblem",
        "genericIncidentPending",
        "haveToConnectModemOnTheRightPlug",
        "init",
        "interventionRequested",
        "noBandwidthFault",
        "noProblemAnymore",
        "noSyncFaultDiagnosticRequired",
        "problem",
        "resolvedAfterTests",
        "sleeping",
        "validationRefused",
        "waitingHuman",
        "waitingRobot",
        "waitingValidation"
      ],
      "enumType": "string",
      "id": "DiagnosticStatusEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.lineDiagnostic.FaultTypeEnum": {
      "description": "Line diagnostic fault type",
      "enum": [
        "alignment",
        "noSync",
        "syncLossOrLowBandwidth",
        "unknown"
      ],
      "enumType": "string",
      "id": "FaultTypeEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.lineDiagnostic.LineCapabilities": {
      "description": "Theoretical line capabilities",
      "id": "LineCapabilities",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "down": {
          "canBeNull": true,
          "description": "Theoretical Downstream synchronization ",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "mitigation": {
          "canBeNull": true,
          "description": "Theoretical line mitigation",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "ping": {
          "canBeNull": true,
          "description": "Theoretical ping",
          "readOnly": false,
          "required": false,
          "type": "double"
        },
        "up": {
          "canBeNull": true,
          "description": "Theoretical Upstream synchronization ",
          "readOnly": false,
          "required": false,
          "type": "double"
        }
      }
    },
    "xdsl.lineDiagnostic.LineDetails": {
      "description": "Line informations",
      "id": "LineDetails",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "accessName": {
          "canBeNull": false,
          "description": "access name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "accessPing": {
          "canBeNull": true,
          "description": "Access IP ping or not",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "address": {
          "canBeNull": true,
          "description": "address of the access",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "connectionInfo": {
          "canBeNull": true,
          "description": "informations directly get on DSLAM or Modem",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.ConnectionInformations"
        },
        "contactPhone": {
          "canBeNull": true,
          "description": "customer phone number for contact",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": true,
          "description": "custom access description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "dslamIsSynchronized": {
          "canBeNull": true,
          "description": "DSLAM is synchronized or not",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "gtr": {
          "canBeNull": false,
          "description": "is GTR access or not",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "length": {
          "canBeNull": false,
          "description": "Line length in meters",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "lineCapabilities": {
          "canBeNull": true,
          "description": "Theoretical line capabilities",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.LineCapabilities"
        },
        "lineType": {
          "canBeNull": false,
          "description": "dsl connexion type for the line",
          "readOnly": false,
          "required": false,
          "type": "xdsl.DslTypeEnum"
        },
        "nra": {
          "canBeNull": true,
          "description": "NRA name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": false,
          "description": "line number",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "operator": {
          "canBeNull": false,
          "description": "provider for internet connexion",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.ProviderEnum"
        },
        "sections": {
          "canBeNull": true,
          "description": "cables sections details",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.Section[]"
        }
      }
    },
    "xdsl.lineDiagnostic.PossibleValue": {
      "description": "possible value for specific answer",
      "id": "PossibleValue",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "id": {
          "canBeNull": true,
          "description": "answer id",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "label": {
          "canBeNull": true,
          "description": "answer choice string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "answer choice value",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.lineDiagnostic.ProblemTypeEnum": {
      "description": "Possible customer questions",
      "enum": [
        "lowBandwidth",
        "syncLoss"
      ],
      "enumType": "string",
      "id": "ProblemTypeEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.lineDiagnostic.ProviderEnum": {
      "description": "The providers for xdsl access",
      "enum": [
        "axione",
        "ft",
        "ftBySfr",
        "kosc",
        "koscDeg",
        "ovh",
        "sfr"
      ],
      "enumType": "string",
      "id": "ProviderEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.lineDiagnostic.Question": {
      "description": "Question to customer",
      "id": "Question",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "defaultValue": {
          "canBeNull": true,
          "description": "question description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "question description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "enumValues": {
          "canBeNull": true,
          "description": "available values for enum",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "name": {
          "canBeNull": false,
          "description": "question name",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.QuestionsEnum"
        },
        "possibleValues": {
          "canBeNull": true,
          "description": "list of possible values",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.PossibleValue[]"
        },
        "required": {
          "canBeNull": true,
          "description": "is a required question",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "answer type",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.lineDiagnostic.QuestionsEnum": {
      "description": "Possible customer questions",
      "enum": [
        "bandwidthTestUnit",
        "comment",
        "conditionsAccepted",
        "contactPhone",
        "datetimeOfAppearance",
        "downloadBandwidthTest",
        "endAfternoonHours",
        "endMorningHours",
        "followBySms",
        "hasModemKeptSynchronization",
        "idAppointment",
        "individualSite",
        "modemIsSynchronized",
        "modemMac",
        "modemStillSynchronized",
        "modemType",
        "ovhTicket",
        "problemType",
        "resolvedAfterTests",
        "secureSite",
        "severalInternetConnections",
        "siteClosedDays",
        "siteDigicode",
        "siteOpening",
        "startAfternoonHours",
        "startMorningHours",
        "uploadBandwidthTest"
      ],
      "enumType": "string",
      "id": "QuestionsEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.lineDiagnostic.RobotActionsEnum": {
      "description": "Diagnostic robot possible actions",
      "enum": [
        "alignmentLockTest",
        "alignmentResetTest",
        "alignmentTestResult",
        "checkCustomerTicket",
        "checkIfAccessPing",
        "checkIfResolvedAfterConnectionTests",
        "checkIfResolvedAfterInstallationCheck",
        "checkIfResolvedAfterTests",
        "checkIfSeveralConnections",
        "checkInstallation",
        "checkProblem",
        "checkSynchronizationWithoutOtherModems",
        "customerPrelocChecks",
        "findProblem",
        "installationCheck",
        "lockUnlock",
        "needToRequestMonitoring",
        "needToRequestOperatorIntervention",
        "needToRequestOvhIntervention",
        "requestMonitoring",
        "requestOperatorIntervention",
        "requestOvhIntervention",
        "seltTest"
      ],
      "enumType": "string",
      "id": "RobotActionsEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.lineDiagnostic.Section": {
      "description": "Cables section details",
      "id": "Section",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "length": {
          "canBeNull": false,
          "description": "cables length in meters",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "section": {
          "canBeNull": false,
          "description": "cables section in millimeters",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.lineDiagnostic.SeltPrelocEnum": {
      "description": "Possible SELT test prelocalizations",
      "enum": [
        "CUST",
        "DSLAM",
        "LINE",
        "RE"
      ],
      "enumType": "string",
      "id": "SeltPrelocEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.lineDiagnostic.SeltResult": {
      "description": "Customer answers for line diagnostic",
      "id": "SeltResult",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "date": {
          "canBeNull": true,
          "description": "SELT test running date",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "distance": {
          "canBeNull": true,
          "description": "Distance of the problem identified on the line (by SELT test), from NRA to customer",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "preloc": {
          "canBeNull": true,
          "description": "Prelocalization of the problem",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.SeltPrelocEnum"
        },
        "state": {
          "canBeNull": true,
          "description": "Problem type identified by SELT test",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.SeltStateEnum"
        },
        "status": {
          "canBeNull": true,
          "description": "SELT test status",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.SeltStatusEnum"
        }
      }
    },
    "xdsl.lineDiagnostic.SeltStateEnum": {
      "description": "Possible SELT test states",
      "enum": [
        "open",
        "short",
        "synced",
        "unknown"
      ],
      "enumType": "string",
      "id": "SeltStateEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.lineDiagnostic.SeltStatusEnum": {
      "description": "Possible SELT test status",
      "enum": [
        "failed",
        "notAvailable",
        "ok"
      ],
      "enumType": "string",
      "id": "SeltStatusEnum",
      "namespace": "xdsl.lineDiagnostic"
    },
    "xdsl.monitoringNotifications.FrequencyEnum": {
      "description": "Frequency between notifications.",
      "enum": [
        "1h",
        "5m",
        "6h",
        "once"
      ],
      "enumType": "string",
      "id": "FrequencyEnum",
      "namespace": "xdsl.monitoringNotifications"
    },
    "xdsl.monitoringNotifications.TypeEnum": {
      "description": "Type of notification.",
      "enum": [
        "mail",
        "sms"
      ],
      "enumType": "string",
      "id": "TypeEnum",
      "namespace": "xdsl.monitoringNotifications"
    },
    "xdsl.orderFollowup.DurationUnitEnum": {
      "description": "The duration units",
      "enum": [
        "day",
        "hour",
        "minute"
      ],
      "enumType": "string",
      "id": "DurationUnitEnum",
      "namespace": "xdsl.orderFollowup"
    },
    "xdsl.orderFollowup.Step": {
      "description": "A step of the order process",
      "id": "Step",
      "namespace": "xdsl.orderFollowup",
      "properties": {
        "comments": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "doneDate": {
          "canBeNull": true,
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "durationUnit": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "xdsl.orderFollowup.DurationUnitEnum"
        },
        "expectedDuration": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "xdsl.orderFollowup.StepNameEnum"
        },
        "status": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "xdsl.orderFollowup.StepStatusEnum"
        }
      }
    },
    "xdsl.orderFollowup.StepNameEnum": {
      "description": "The status of an order step",
      "enum": [
        "accessIsOperational",
        "checkInfrastructure",
        "configureAccessOnOVH",
        "orderPayed",
        "orderReceived",
        "orderTreatment",
        "sendModem",
        "sendOrderToProvider",
        "setupCustomerPremisesEquipment",
        "waitingForProviderInstallReport",
        "waitingForWithdrawalPeriodToBeOver"
      ],
      "enumType": "string",
      "id": "StepNameEnum",
      "namespace": "xdsl.orderFollowup"
    },
    "xdsl.orderFollowup.StepStatusEnum": {
      "description": "The status of an order step",
      "enum": [
        "doing",
        "done",
        "error",
        "todo",
        "waitingCustomer"
      ],
      "enumType": "string",
      "id": "StepStatusEnum",
      "namespace": "xdsl.orderFollowup"
    },
    "xdsl.templateModem.DHCP": {
      "description": "DHCP Configuration for Modem Template",
      "id": "DHCP",
      "namespace": "xdsl.templateModem",
      "properties": {
        "defaultGateway": {
          "canBeNull": false,
          "description": "The default gateway to be given to the clients",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "dhcpName": {
          "canBeNull": false,
          "description": "Name of the DHCP",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "domainName": {
          "canBeNull": false,
          "description": "Domain name provided to the clients",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "endAddress": {
          "canBeNull": false,
          "description": "Last address of the pool assigned by the DHCP",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "leaseTime": {
          "canBeNull": false,
          "description": "Lease time in seconds of client assigned address (-1 means infinite)",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "primaryDNS": {
          "canBeNull": false,
          "description": "Primary DNS servers to be given to the clients",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "secondaryDNS": {
          "canBeNull": true,
          "description": "Secondary DNS servers to be given to the clients",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "serverEnabled": {
          "canBeNull": false,
          "description": "State of the DHCP server of the modem",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "startAddress": {
          "canBeNull": false,
          "description": "First address of the pool assigned by the DHCP",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "subnetMask": {
          "canBeNull": false,
          "description": "The subnet mask given to the clients",
          "readOnly": false,
          "required": false,
          "type": "ip"
        }
      }
    },
    "xdsl.templateModem.LAN": {
      "description": "LAN Configuration for Modem Template",
      "id": "LAN",
      "namespace": "xdsl.templateModem",
      "properties": {
        "IPAddress": {
          "canBeNull": false,
          "description": "The IP address of the LAN interface of the modem",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "addressingType": {
          "canBeNull": false,
          "description": "How the LAN interface of the modem is getting its address",
          "readOnly": false,
          "required": false,
          "type": "xdsl.xdslModemConfig.AddressingTypeEnum"
        },
        "lanName": {
          "canBeNull": false,
          "description": "Name of the LAN",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "subnetMask": {
          "canBeNull": false,
          "description": "The subnet mask of the LAN interface of the modem",
          "readOnly": false,
          "required": false,
          "type": "ip"
        }
      }
    },
    "xdsl.templateModem.ParametersToIgnore": {
      "description": "Parameters and values to ignore when apply modem template configuration",
      "id": "ParametersToIgnore",
      "namespace": "xdsl.templateModem",
      "properties": {
        "LANandDHCP": {
          "canBeNull": true,
          "description": "Ignore LAN and DHCP configurations",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "WLANList": {
          "canBeNull": true,
          "description": "WLAN names list to ignore. Ignore only listed WLAN",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "dmzIP": {
          "canBeNull": true,
          "description": "Ignore DMZ configuration",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "mtuSize": {
          "canBeNull": true,
          "description": "Ignore MTU Size value",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "portMappingList": {
          "canBeNull": true,
          "description": "PortMapping names list to ignore. Ignore only listed portMapping",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        }
      }
    },
    "xdsl.templateModem.PortMapping": {
      "description": "PortMapping Configuration for Modem Template",
      "id": "PortMapping",
      "namespace": "xdsl.templateModem",
      "properties": {
        "allowedRemoteIp": {
          "canBeNull": true,
          "description": "An ip which will access to the defined rule. Default : no restriction applied",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of the Port Mapping",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "externalPortEnd": {
          "canBeNull": true,
          "description": "The last port of the interval on the External Client that will get the connections",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "externalPortStart": {
          "canBeNull": false,
          "description": "External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "internalClient": {
          "canBeNull": false,
          "description": "The IP address of the destination of the packets",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "internalPort": {
          "canBeNull": false,
          "description": "The port on the Internal Client that will get the connections",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the port mapping entry",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "protocol": {
          "canBeNull": false,
          "description": "Protocol of the port mapping (TCP / UDP)",
          "readOnly": false,
          "required": false,
          "type": "xdsl.xdslModemConfig.ProtocolTypeEnum"
        }
      }
    },
    "xdsl.templateModem.SecurityTypeEnum": {
      "description": "Type of WLAN security protection",
      "enum": [
        "None",
        "WPA",
        "WPA2",
        "WPAandWPA2"
      ],
      "enumType": "string",
      "id": "SecurityTypeEnum",
      "namespace": "xdsl.templateModem"
    },
    "xdsl.templateModem.WLAN": {
      "description": "WLAN Configuration for Modem Template",
      "id": "WLAN",
      "namespace": "xdsl.templateModem",
      "properties": {
        "SSID": {
          "canBeNull": false,
          "description": "Service Set Identifier of the WLAN interface",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "SSIDAdvertisementEnabled": {
          "canBeNull": false,
          "description": "Control if Wifi is discoverable or hidden",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "bandSteering": {
          "canBeNull": false,
          "description": "Indicate if frequencies 2.4GHz and 5GHz are agregated",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "channel": {
          "canBeNull": false,
          "description": "Channel number (Useless if channelMode is set to Auto)",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "channelMode": {
          "canBeNull": false,
          "description": "How the channel is chosen (Auto / Manual)",
          "readOnly": false,
          "required": false,
          "type": "xdsl.xdslModemConfig.ChannelModeEnum"
        },
        "enabled": {
          "canBeNull": false,
          "description": "Wifi state",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": false,
          "description": "Frequency (2.4GHz | 5GHz)",
          "readOnly": false,
          "required": false,
          "type": "xdsl.xdslModemConfig.FrequencyEnum"
        },
        "guest": {
          "canBeNull": false,
          "description": "Indicate if it is normal access wifi or guest wifi",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "securityKey": {
          "canBeNull": false,
          "description": "Encrypted WLAN passphrase",
          "readOnly": false,
          "required": false,
          "type": "password"
        },
        "securityType": {
          "canBeNull": false,
          "description": "Security (None | WPA | WPA2 | WPAandWPA2)",
          "readOnly": false,
          "required": false,
          "type": "xdsl.templateModem.SecurityTypeEnum"
        },
        "wifiName": {
          "canBeNull": false,
          "description": "Wifi Name",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.xdslEmailPro": {
      "description": "XDSL Email Pro",
      "id": "xdslEmailPro",
      "namespace": "xdsl",
      "properties": {
        "currentUsage": {
          "canBeNull": false,
          "description": "Mailbox usage",
          "fullType": "complexType.UnitAndValue<double>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<double>"
        },
        "displayName": {
          "canBeNull": true,
          "description": "Account display name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "domain": {
          "canBeNull": false,
          "description": "Email domain",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": true,
          "description": "Account first name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "id": {
          "canBeNull": false,
          "description": "Account id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "initial": {
          "canBeNull": true,
          "description": "Account initials",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "lastLogoffDate": {
          "canBeNull": true,
          "description": "Last logoff",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastLogonDate": {
          "canBeNull": true,
          "description": "Last logon",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastName": {
          "canBeNull": true,
          "description": "Account last name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "login": {
          "canBeNull": false,
          "description": "Account login",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "passwordLastUpdate": {
          "canBeNull": true,
          "description": "Time of account's password last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "primaryEmailAddress": {
          "canBeNull": false,
          "description": "Default email for this mailbox",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quota": {
          "canBeNull": false,
          "description": "Account maximum size",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "state": {
          "canBeNull": false,
          "description": "Account state",
          "fullType": "email.pro.ObjectStateEnum",
          "readOnly": true,
          "required": false,
          "type": "email.pro.ObjectStateEnum"
        },
        "taskPendingId": {
          "canBeNull": true,
          "description": "Pending tasks for this account",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "xdsl.xdslModemConfig.ACSBackendEnum": {
      "description": "ACS backend used by the modem",
      "enum": [
        "beta",
        "dev",
        "legacy",
        "stable"
      ],
      "enumType": "string",
      "id": "ACSBackendEnum",
      "namespace": "xdsl.xdslModemConfig"
    },
    "xdsl.xdslModemConfig.AddressingTypeEnum": {
      "description": "How the modem gets its LAN IP Address",
      "enum": [
        "DHCP",
        "Static"
      ],
      "enumType": "string",
      "id": "AddressingTypeEnum",
      "namespace": "xdsl.xdslModemConfig"
    },
    "xdsl.xdslModemConfig.ChannelModeEnum": {
      "description": "How the WiFi channel is selected",
      "enum": [
        "Auto",
        "Manual"
      ],
      "enumType": "string",
      "id": "ChannelModeEnum",
      "namespace": "xdsl.xdslModemConfig"
    },
    "xdsl.xdslModemConfig.ConnectedDeviceAddressSourceEnum": {
      "description": "How did the device got its IP Address",
      "enum": [
        "DHCP",
        "Static",
        "Unknown"
      ],
      "enumType": "string",
      "id": "ConnectedDeviceAddressSourceEnum",
      "namespace": "xdsl.xdslModemConfig"
    },
    "xdsl.xdslModemConfig.EasyFirewallLevelEnum": {
      "description": "Level of the Firewall ( BlockAll will block all connections, Normal will block all incoming connections except those in PortMapping and let go all outgoing connections , Disabled will disable all the Firewall and let all incoming or outgoing connections pass through )",
      "enum": [
        "BlockAll",
        "Disabled",
        "Normal"
      ],
      "enumType": "string",
      "id": "EasyFirewallLevelEnum",
      "namespace": "xdsl.xdslModemConfig"
    },
    "xdsl.xdslModemConfig.FrequencyEnum": {
      "description": "Modem frequency",
      "enum": [
        "2.4GHz",
        "5GHz"
      ],
      "enumType": "string",
      "id": "FrequencyEnum",
      "namespace": "xdsl.xdslModemConfig"
    },
    "xdsl.xdslModemConfig.MTUSizeEnum": {
      "description": "Size of the Maximum Transmission Unit on the modem's interfaces",
      "enum": [
        "1432",
        "1456",
        "1492"
      ],
      "enumType": "long",
      "id": "MTUSizeEnum",
      "namespace": "xdsl.xdslModemConfig"
    },
    "xdsl.xdslModemConfig.ProtocolTypeEnum": {
      "description": "Type of protocol for the Port Mapping",
      "enum": [
        "TCP",
        "UDP"
      ],
      "enumType": "string",
      "id": "ProtocolTypeEnum",
      "namespace": "xdsl.xdslModemConfig"
    },
    "xdsl.xdslModemConfig.SecurityTypeEnum": {
      "description": "Type of WLAN security protection",
      "enum": [
        "None",
        "WEP",
        "WPA",
        "WPA2",
        "WPAandWPA2"
      ],
      "enumType": "string",
      "id": "SecurityTypeEnum",
      "namespace": "xdsl.xdslModemConfig"
    }
  },
  "resourcePath": "/xdsl"
}