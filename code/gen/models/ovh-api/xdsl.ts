import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/xdsl.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:get",
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
      "path": "/xdsl"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:get",
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
          "responseType": "xdsl.AccessWithIAM"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdsl:apiovh:put",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.Access",
              "description": "Request Body",
              "fullType": "xdsl.Access",
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
      "path": "/xdsl/{serviceName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Informations about the extra IP range during address move",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:addressMove/extraIpRange/get",
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
          "responseType": "xdsl.ExtraIpRangeMove"
        }
      ],
      "path": "/xdsl/{serviceName}/addressMove/extraIpRange"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Initiate the extra IP range migration",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:addressMove/extraIpRangeMove",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/addressMove/extraIpRangeMove"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List antiSpams for this access",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:antiSpams/get",
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
          "responseType": "ip[]"
        }
      ],
      "path": "/xdsl/{serviceName}/antiSpams"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:antiSpams/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Ip",
              "fullType": "ip",
              "name": "ip",
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
          "responseType": "xdsl.AntiSpam"
        }
      ],
      "path": "/xdsl/{serviceName}/antiSpams/{ip}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of evidences stored on PCS for this ip",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:antiSpams/evidences/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Ip",
              "fullType": "ip",
              "name": "ip",
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
          "responseType": "xdsl.antiSpam.EvidencesInfo"
        }
      ],
      "path": "/xdsl/{serviceName}/antiSpams/{ip}/evidences"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Apply TemplateModem to existing Modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:applyTemplateToModem",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "applyTemplateModem",
          "parameters": [
            {
              "dataType": "xdsl.applyTemplateToModem.post",
              "description": "Request Body",
              "fullType": "xdsl.applyTemplateToModem.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/applyTemplateToModem"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about the ongoing resiliation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:canCancelResiliation/get",
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
          "responseType": "boolean"
        }
      ],
      "path": "/xdsl/{serviceName}/canCancelResiliation"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the ongoing resiliation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:cancelResiliation",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/cancelResiliation"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch a contact change procedure",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:changeContact",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "changeContact",
          "parameters": [
            {
              "dataType": "xdsl.changeContact.post",
              "description": "Request Body",
              "fullType": "xdsl.changeContact.post",
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
          "responseType": "long[]"
        }
      ],
      "path": "/xdsl/{serviceName}/changeContact"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:diagnostic/get",
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
          "responseType": "xdsl.AccessDiagnostic"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Run diagnostic on the access",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:diagnostic/create",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/diagnostic"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List fiber eligibilities for this access",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:fiberEligibilities/get",
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
              "dataType": "xdsl.FiberEligibilityStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "xdsl.FiberEligibilityStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/xdsl/{serviceName}/fiberEligibilities"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:fiberEligibilities/get",
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
          "responseType": "xdsl.FiberEligibility"
        }
      ],
      "path": "/xdsl/{serviceName}/fiberEligibilities/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:incident/get",
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
          "responseType": "xdsl.Incident"
        }
      ],
      "path": "/xdsl/{serviceName}/incident"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of IPs addresses for this access",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:ips/get",
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
          "responseType": "ip[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Order an extra /29 range of IPv4 addresses",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:ips/create",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/ips"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Stop renewing this extra IPv4 option",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "xdsl:apiovh:ips/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Ip",
              "fullType": "ip",
              "name": "ip",
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
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:ips/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ip",
              "description": "Ip",
              "fullType": "ip",
              "name": "ip",
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
          "responseType": "xdsl.IP"
        }
      ],
      "path": "/xdsl/{serviceName}/ips/{ip}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the IPv6 for this access",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:ipv6/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateIp",
          "parameters": [
            {
              "dataType": "xdsl.ipv6.post",
              "description": "Request Body",
              "fullType": "xdsl.ipv6.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/ipv6"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "The lines of the access",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:lines/get",
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
          "responseType": "string[]"
        }
      ],
      "path": "/xdsl/{serviceName}/lines"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:lines/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
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
          "responseType": "xdsl.Line"
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel line diagnostic if possible",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:lines/diagnostic/cancel",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/diagnostic/cancel"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update and get advanced diagnostic of the line",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:lines/diagnostic/run",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateLineDiagnostic",
          "parameters": [
            {
              "dataType": "xdsl.lines.diagnostic.run.post",
              "description": "Request Body",
              "fullType": "xdsl.lines.diagnostic.run.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
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
          "responseType": "xdsl.lineDiagnostic.Diagnostic"
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/diagnostic/run"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:lines/dslamPort/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
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
          "responseType": "xdsl.DslamPort"
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List all availables profiles for this port",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:lines/dslamPort/availableProfiles/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
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
          "responseType": "xdsl.DslamLineProfile[]"
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the profile of the port",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:lines/dslamPort/changeProfile",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "changeLineDSLAMProfile",
          "parameters": [
            {
              "dataType": "xdsl.lines.dslamPort.changeProfile.post",
              "description": "Request Body",
              "fullType": "xdsl.lines.dslamPort.changeProfile.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the logs emitted by the DSLAM for this port",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:lines/dslamPort/logs/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
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
          "responseType": "xdsl.DslamPortLog[]"
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/logs"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset the port on the DSLAM",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:lines/dslamPort/reset",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/dslamPort/reset"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get various statistics about the line",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:lines/statistics/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Number",
              "fullType": "string",
              "name": "number",
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
          "responseType": "complexType.UnitAndValues_xdsl.TimestampAndValue"
        }
      ],
      "path": "/xdsl/{serviceName}/lines/{number}/statistics"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/get",
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
          "responseType": "xdsl.Modem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.Modem",
              "description": "Request Body",
              "fullType": "xdsl.Modem",
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
      "path": "/xdsl/{serviceName}/modem"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available ACS backend for this modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/availableACSBackend/get",
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
          "responseType": "string[]"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/availableACSBackend"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available WLAN channel for this modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/availableWLANChannel/get",
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
              "dataType": "xdsl.WLANFrequencyEnum",
              "description": "WLAN frequency you want to retrieve channels",
              "fullType": "xdsl.WLANFrequencyEnum",
              "name": "frequency",
              "paramType": "query",
              "required": true
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/availableWLANChannel"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of the Bloc IP on modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/blocIp/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getBlocIPStatus",
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
          "responseType": "xdsl.ServiceStatusEnum"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the Bloc IP on modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/blocIp/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateBlocIPStatus",
          "parameters": [
            {
              "dataType": "xdsl.modem.blocIp.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.blocIp.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/blocIp"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of callWaiting on modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/callWaiting/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getModemCallWaitingStatus",
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
          "responseType": "xdsl.ServiceStatusEnum"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of callWaiting on modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/callWaiting/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateModemCallWaiting",
          "parameters": [
            {
              "dataType": "xdsl.modem.callWaiting.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.callWaiting.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/callWaiting"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get info about access modem replacement by last model.",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/comfortExchange/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getAccessModemReplacement",
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
          "responseType": "xdsl.ModemExchangeInfo"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Replace access modem by last model, fees will be applied.",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/comfortExchange/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "replaceAccessModem",
          "parameters": [
            {
              "dataType": "xdsl.modem.comfortExchange.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.comfortExchange.post",
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
          "responseType": "order.Order"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/comfortExchange"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of devices connected on this modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/connectedDevices/get",
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
          "responseType": "string[]"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/connectedDevices"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/connectedDevices/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Mac address",
              "fullType": "string",
              "name": "macAddress",
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
          "responseType": "xdsl.connectedDevice"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/connectedDevices/{macAddress}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of contentSharing on modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/contentSharing/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getContentSharingStatus",
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
          "responseType": "xdsl.ServiceStatusEnum"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of contentSharing on modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/contentSharing/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateContentSharingStatus",
          "parameters": [
            {
              "dataType": "xdsl.modem.contentSharing.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.contentSharing.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/contentSharing"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the firmware version installed on modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/firmware/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getFirmwareVersion",
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
          "responseType": "string"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Launch a task to install target firmware on modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/firmware/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "installFrimware",
          "parameters": [
            {
              "dataType": "xdsl.modem.firmware.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.firmware.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/firmware"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available firmware for this modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/firmwareAvailable/get",
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
          "responseType": "string[]"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/firmwareAvailable"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of ftp service on modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/ftp/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getFTPStatus",
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
          "responseType": "xdsl.ServiceStatusEnum"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the ftp service on modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/ftp/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateFTPStatus",
          "parameters": [
            {
              "dataType": "xdsl.modem.ftp.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.ftp.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/ftp"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of ipsec alg service on modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/ipsecAlg/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getIpsecAlgStatus",
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
          "responseType": "xdsl.ServiceStatusEnum"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the ipsec alg service on modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/ipsecAlg/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateIpsecAlgStatus",
          "parameters": [
            {
              "dataType": "xdsl.modem.ipsecAlg.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.ipsecAlg.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/ipsecAlg"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of LANs on this modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/get",
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
          "responseType": "string[]"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Lan name",
              "fullType": "string",
              "name": "lanName",
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
          "responseType": "xdsl.LAN"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.LAN",
              "description": "Request Body",
              "fullType": "xdsl.LAN",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Lan name",
              "fullType": "string",
              "name": "lanName",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of DHCP on this modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/dhcp/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Lan name",
              "fullType": "string",
              "name": "lanName",
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
          "responseType": "string[]"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/dhcp/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Dhcp name",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Lan name",
              "fullType": "string",
              "name": "lanName",
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
          "responseType": "xdsl.DHCP"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/dhcp/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.DHCP",
              "description": "Request Body",
              "fullType": "xdsl.DHCP",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Dhcp name",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Lan name",
              "fullType": "string",
              "name": "lanName",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of DHCP Static Address of this modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/dhcp/DHCPStaticAddresses/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getDHCPStaticAddresses",
          "parameters": [
            {
              "dataType": "string",
              "description": "Dhcp name",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Lan name",
              "fullType": "string",
              "name": "lanName",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a DHCP static lease",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/dhcp/DHCPStaticAddresses/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "addDHCPStaticAddress",
          "parameters": [
            {
              "dataType": "xdsl.modem.lan.dhcp.DHCPStaticAddresses.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.lan.dhcp.DHCPStaticAddresses.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Dhcp name",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Lan name",
              "fullType": "string",
              "name": "lanName",
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
          "responseType": "xdsl.DHCPStaticAddress"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this port mapping",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/dhcp/DHCPStaticAddresses/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "removeDHCPStaticAddress",
          "parameters": [
            {
              "dataType": "string",
              "description": "Dhcp name",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Lan name",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": " macaddress",
              "fullType": "string",
              "name": "MACAddress",
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
          "responseType": "xdsl.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/dhcp/DHCPStaticAddresses/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getDHCPStaticAddress",
          "parameters": [
            {
              "dataType": "string",
              "description": "Dhcp name",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Lan name",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": " macaddress",
              "fullType": "string",
              "name": "MACAddress",
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
          "responseType": "xdsl.DHCPStaticAddress"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/lan/dhcp/DHCPStaticAddresses/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateDHCPStaticAddress",
          "parameters": [
            {
              "dataType": "xdsl.DHCPStaticAddress",
              "description": "Request Body",
              "fullType": "xdsl.DHCPStaticAddress",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Dhcp name",
              "fullType": "string",
              "name": "dhcpName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Lan name",
              "fullType": "string",
              "name": "lanName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": " macaddress",
              "fullType": "string",
              "name": "MACAddress",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/lan/{lanName}/dhcp/{dhcpName}/DHCPStaticAddresses/{MACAddress}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of PortMappings on this modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/portMappings/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getPortMappings",
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
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a port mapping",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/portMappings/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "addPortMapping",
          "parameters": [
            {
              "dataType": "xdsl.modem.portMappings.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.portMappings.post",
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
          "responseType": "xdsl.PortMapping"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/portMappings"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this port mapping",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/portMappings/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "removePortMapping",
          "parameters": [
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
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
          "responseType": "xdsl.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/portMappings/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getPortMapping",
          "parameters": [
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
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
          "responseType": "xdsl.PortMapping"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/portMappings/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updatePortMapping",
          "parameters": [
            {
              "dataType": "xdsl.PortMapping",
              "description": "Request Body",
              "fullType": "xdsl.PortMapping",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/portMappings/{name}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reboot the modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/reboot",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "rebootModem",
          "parameters": [
            {
              "dataType": "xdsl.modem.reboot.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.reboot.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/reboot"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reconfigure voip line on modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/reconfigureVoip",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/reconfigureVoip"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Refresh the list of connected devices on the modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/refreshConnectedDevices",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/refreshConnectedDevices"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Reset the modem to its default configuration",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/reset",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "resetModemConfiguration",
          "parameters": [
            {
              "dataType": "xdsl.modem.reset.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.reset.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/reset"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Remove all the current port mapping rules",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/resetPortMappingConfig",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/resetPortMappingConfig"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "get general Modem information",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/retrieveInfo",
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
          "responseType": "xdsl.AsyncTask_xdsl.ModemInfo"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/retrieveInfo"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of sip alg service on modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/sipAlg/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getSipAlgStatus",
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
          "responseType": "xdsl.ServiceStatusEnum"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the sip alg service on modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/sipAlg/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateSipAlgStatus",
          "parameters": [
            {
              "dataType": "xdsl.modem.sipAlg.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.sipAlg.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/sipAlg"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of the Upnp on modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/upnp/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getUpnpStatus",
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
          "responseType": "xdsl.ServiceStatusEnum"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the status of the Upnp on modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/upnp/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateUpnpStatus",
          "parameters": [
            {
              "dataType": "xdsl.modem.upnp.post",
              "description": "Request Body",
              "fullType": "xdsl.modem.upnp.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/upnp"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of WLANs on this modem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/wifi/get",
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
          "responseType": "string[]"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/wifi"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/wifi/get",
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
              "dataType": "string",
              "description": "Wifi name",
              "fullType": "string",
              "name": "wifiName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.WLAN"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/wifi/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.WLAN",
              "description": "Request Body",
              "fullType": "xdsl.WLAN",
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
              "dataType": "string",
              "description": "Wifi name",
              "fullType": "string",
              "name": "wifiName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/wifi/{wifiName}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the WiFi configuration QR code as base64, if applicable",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:modem/wifi/qrCode/get",
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
              "dataType": "string",
              "description": "Wifi name",
              "fullType": "string",
              "name": "wifiName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string"
        }
      ],
      "path": "/xdsl/{serviceName}/modem/wifi/{wifiName}/qrCode"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List the notifications for this access",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:monitoringNotifications/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getMonitoringNotifications",
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
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Add a notification",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:monitoringNotifications/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "addMonitoringNotification",
          "parameters": [
            {
              "dataType": "xdsl.monitoringNotifications.post",
              "description": "Request Body",
              "fullType": "xdsl.monitoringNotifications.post",
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
          "responseType": "xdsl.MonitoringNotification"
        }
      ],
      "path": "/xdsl/{serviceName}/monitoringNotifications"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this notification",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "xdsl:apiovh:monitoringNotifications/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "removeMonitoringNotification",
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
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:monitoringNotifications/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getMonitoringNotification",
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
          "responseType": "xdsl.MonitoringNotification"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdsl:apiovh:monitoringNotifications/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateMonitoringNotification",
          "parameters": [
            {
              "dataType": "xdsl.MonitoringNotification",
              "description": "Request Body",
              "fullType": "xdsl.MonitoringNotification",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/monitoringNotifications/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:ont/get",
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
          "responseType": "xdsl.Ont"
        }
      ],
      "path": "/xdsl/{serviceName}/ont"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the status of the order",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:orderFollowup/get",
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
          "responseType": "xdsl.orderFollowup.Step[]"
        }
      ],
      "path": "/xdsl/{serviceName}/orderFollowup"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Book a meeting and relaunch order",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:orderMeeting/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "bookMeeting",
          "parameters": [
            {
              "dataType": "xdsl.orderMeeting.post",
              "description": "Request Body",
              "fullType": "xdsl.orderMeeting.post",
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
      "path": "/xdsl/{serviceName}/orderMeeting"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:pendingAction/get",
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
          "responseType": "xdsl.PendingAction"
        }
      ],
      "path": "/xdsl/{serviceName}/pendingAction"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List the radius connection logs",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:radiusConnectionLogs/get",
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
          "responseType": "xdsl.RadiusConnectionLog[]"
        }
      ],
      "path": "/xdsl/{serviceName}/radiusConnectionLogs"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Renew PPP password and send the PPP login information to the e-mail of the nicAdmin",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:requestPPPLoginMail",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/requestPPPLoginMail"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Switch this access to total deconsolidation",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:requestTotalDeconsolidation",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "requestTotalDeconsolidation",
          "parameters": [
            {
              "dataType": "xdsl.requestTotalDeconsolidation.post",
              "description": "Request Body",
              "fullType": "xdsl.requestTotalDeconsolidation.post",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/requestTotalDeconsolidation"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Resiliate the access",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:resiliate",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "resiliateAccess",
          "parameters": [
            {
              "dataType": "xdsl.resiliate.post",
              "description": "Request Body",
              "fullType": "xdsl.resiliate.post",
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
          "responseType": "xdsl.ResiliationFollowUpDetail"
        }
      ],
      "path": "/xdsl/{serviceName}/resiliate"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get information about the ongoing resiliation",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:resiliationFollowup/get",
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
          "responseType": "xdsl.ResiliationFollowUpDetail"
        }
      ],
      "path": "/xdsl/{serviceName}/resiliationFollowup"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get resiliation terms",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:resiliationTerms/get",
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
              "dataType": "datetime",
              "description": "The desired resiliation date",
              "fullType": "datetime",
              "name": "resiliationDate",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "xdsl.ResiliationTerms"
        }
      ],
      "path": "/xdsl/{serviceName}/resiliationTerms"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return Merchandise Authorisation associated",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:rma/get",
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
          "responseType": "string[]"
        }
      ],
      "path": "/xdsl/{serviceName}/rma"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Cancel the rma",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "xdsl:apiovh:rma/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Id",
              "fullType": "string",
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
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:rma/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Id",
              "fullType": "string",
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
          "responseType": "telephony.Rma"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdsl:apiovh:rma/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "telephony.Rma",
              "description": "Request Body",
              "fullType": "telephony.Rma",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Id",
              "fullType": "string",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/rma/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change RMA type",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:rma/changeType",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateRMAType",
          "parameters": [
            {
              "dataType": "xdsl.rma.changeType.post",
              "description": "Request Body",
              "fullType": "xdsl.rma.changeType.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Id",
              "fullType": "string",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/rma/{id}/changeType"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Search for available line creation meeting time slots, for order only",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:searchOrderMeetings",
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
          "responseType": "xdsl.AsyncTask_connectivity.eligibility.Meetings"
        }
      ],
      "path": "/xdsl/{serviceName}/searchOrderMeetings"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Unlock order in \"waitingCustomer\" status",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:sendOrderToProvider",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/sendOrderToProvider"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:serviceInfos/get",
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
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdsl:apiovh:serviceInfos/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "Request Body",
              "fullType": "services.Service",
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
      "path": "/xdsl/{serviceName}/serviceInfos"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get various statistics about this access",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:statistics/get",
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
          "responseType": "complexType.UnitAndValues_xdsl.AccessLatency"
        }
      ],
      "path": "/xdsl/{serviceName}/statistics"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Tasks scheduled for this access",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:tasks/get",
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
          "responseType": "long[]"
        }
      ],
      "path": "/xdsl/{serviceName}/tasks"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:tasks/get",
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
          "responseType": "xdsl.Task"
        }
      ],
      "path": "/xdsl/{serviceName}/tasks/{id}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the task in problem from the results",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:tasks/archive",
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
          "responseType": "void"
        }
      ],
      "path": "/xdsl/{serviceName}/tasks/{id}/archive"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Give the price to requestTotalDeconsolidation on the access",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdsl:apiovh:totalDeconsolidationTerms/get",
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
          "responseType": "xdsl.DeconsolidationTerms"
        }
      ],
      "path": "/xdsl/{serviceName}/totalDeconsolidationTerms"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update RIO, or disable portability, for order in error because of missing or invalid RIO",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdsl:apiovh:updateInvalidOrMissingRio",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateRIO",
          "parameters": [
            {
              "dataType": "xdsl.updateInvalidOrMissingRio.post",
              "description": "Request Body",
              "fullType": "xdsl.updateInvalidOrMissingRio.post",
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
      "path": "/xdsl/{serviceName}/updateInvalidOrMissingRio"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdslEmail:apiovh:get",
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
      "path": "/xdsl/email/pro"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the email",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "xdslEmail:apiovh:delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdslEmail:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.xdslEmailProWithIAM"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdslEmail:apiovh:edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "xdsl.xdslEmailPro",
              "description": "Request Body",
              "fullType": "xdsl.xdslEmailPro",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/xdsl/email/pro/{email}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change the email password",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdslEmail:apiovh:changePassword",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "changeEmailPassword",
          "parameters": [
            {
              "dataType": "xdsl.email.pro.changePassword.post",
              "description": "Request Body",
              "fullType": "xdsl.email.pro.changePassword.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Email",
              "fullType": "string",
              "name": "email",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.email.pro.Task"
        }
      ],
      "path": "/xdsl/email/pro/{email}/changePassword"
    },
    {
      "description": "",
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
      "description": "",
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
              "description": "Id",
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
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdslSpare:apiovh:get",
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
      "path": "/xdsl/spare"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete the spare as if it was not belonging to OVH anymore",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "xdslSpare:apiovh:delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdslSpare:apiovh:get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "spare.xdsl.XdslSpareWithIAM"
        }
      ],
      "path": "/xdsl/spare/{spare}"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the list of brand compatible to be replaced",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdslSpare:apiovh:compatibleReplacement/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/xdsl/spare/{spare}/compatibleReplacement"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Replace the modem by its spare",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdslSpare:apiovh:replace",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "replaceModemBySpare",
          "parameters": [
            {
              "dataType": "xdsl.spare.replace.post",
              "description": "Request Body",
              "fullType": "xdsl.spare.replace.post",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/xdsl/spare/{spare}/replace"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Return the broken equipment in instantRefund",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "xdslSpare:apiovh:returnMerchandise",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/xdsl/spare/{spare}/returnMerchandise"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get service information",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "xdslSpare:apiovh:serviceInfos/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Update service information",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "xdslSpare:apiovh:serviceInfos/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "Request Body",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Spare",
              "fullType": "string",
              "name": "spare",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/xdsl/spare/{spare}/serviceInfos"
    },
    {
      "description": "",
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
          "responseType": "string[]"
        }
      ],
      "path": "/xdsl/spare/brands"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of TemplateModem",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:xdslTemplateModem/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getModemTemplates",
          "parameters": [],
          "responseType": "string[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create new Modem Template from existing modem",
          "httpMethod": "POST",
          "iamActions": [
            {
              "name": "account:apiovh:xdslTemplateModem/create",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "createModemTemplate",
          "parameters": [
            {
              "dataType": "xdsl.templateModem.post",
              "description": "Request Body",
              "fullType": "xdsl.templateModem.post",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "xdsl.TemplateModem"
        }
      ],
      "path": "/xdsl/templateModem"
    },
    {
      "description": "",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Delete this Modem Template",
          "httpMethod": "DELETE",
          "iamActions": [
            {
              "name": "account:apiovh:xdslTemplateModem/delete",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "deleteModemTemplate",
          "parameters": [
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            {
              "name": "account:apiovh:xdslTemplateModem/get",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "getModemTemplate",
          "parameters": [
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "xdsl.TemplateModem"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "iamActions": [
            {
              "name": "account:apiovh:xdslTemplateModem/edit",
              "required": true
            }
          ],
          "noAuthentication": false,
          "operationId": "updateModemTemplate",
          "parameters": [
            {
              "dataType": "xdsl.TemplateModem",
              "description": "Request Body",
              "fullType": "xdsl.TemplateModem",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/xdsl/templateModem/{name}"
    }
  ],
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "complexType.UnitAndValue_double": {
      "description": "complexType.UnitAndValue_double",
      "id": "UnitAndValue_double",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "complexType.UnitAndValue_long": {
      "description": "complexType.UnitAndValue_long",
      "id": "UnitAndValue_long",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        }
      }
    },
    "complexType.UnitAndValues_xdsl.AccessLatency": {
      "description": "complexType.UnitAndValues_xdsl.AccessLatency",
      "id": "AccessLatency",
      "namespace": "complexType.UnitAndValues_xdsl",
      "properties": {
        "unit": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "fullType": "xdsl.AccessLatency[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AccessLatency[]"
        }
      }
    },
    "complexType.UnitAndValues_xdsl.TimestampAndValue": {
      "description": "complexType.UnitAndValues_xdsl.TimestampAndValue",
      "id": "TimestampAndValue",
      "namespace": "complexType.UnitAndValues_xdsl",
      "properties": {
        "unit": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "values": {
          "canBeNull": false,
          "fullType": "xdsl.TimestampAndValue[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.TimestampAndValue[]"
        }
      }
    },
    "connectivity.eligibility.MeetingCapacities": {
      "description": "Represents meeting booking options",
      "id": "MeetingCapacities",
      "namespace": "connectivity.eligibility",
      "properties": {
        "eRdv": {
          "canBeNull": false,
          "description": "Whether or not it is possible to book a meeting online",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "phoneCall": {
          "canBeNull": false,
          "description": "Whether or not it is possible to be be called by phone to book a meeting",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
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
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "slotId": {
          "canBeNull": true,
          "description": "Represent a meeting id for a fiber collect operator",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Start date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "uiCode": {
          "canBeNull": true,
          "description": "An opaque string that represents an intervention unit",
          "fullType": "string",
          "readOnly": true,
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
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "capacities": {
          "canBeNull": false,
          "description": "Represents meeting booking options",
          "fullType": "connectivity.eligibility.MeetingCapacities",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.MeetingCapacities"
        },
        "meetingSlots": {
          "canBeNull": false,
          "description": "A time slot",
          "fullType": "connectivity.eligibility.MeetingSlot[]",
          "readOnly": true,
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
    "order.Contract": {
      "description": "A contract",
      "id": "Contract",
      "namespace": "order",
      "properties": {
        "content": {
          "canBeNull": false,
          "description": "Terms of the contract",
          "fullType": "text",
          "readOnly": true,
          "required": false,
          "type": "text"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "URL to download the contract",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "order.CurrencyCodeEnum": {
      "description": "Currency code",
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
          "description": "List of contracts related to the order",
          "fullType": "order.Contract[]",
          "readOnly": true,
          "required": false,
          "type": "order.Contract[]"
        },
        "details": {
          "canBeNull": false,
          "description": "Details of the order",
          "fullType": "order.OrderDetail[]",
          "readOnly": true,
          "required": false,
          "type": "order.OrderDetail[]"
        },
        "orderId": {
          "canBeNull": true,
          "description": "Identifier of the order",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "prices": {
          "canBeNull": false,
          "description": "Prices of the order including with and without taxes",
          "fullType": "order.OrderPrices",
          "readOnly": true,
          "required": false,
          "type": "order.OrderPrices"
        },
        "url": {
          "canBeNull": true,
          "description": "URL to download the order",
          "fullType": "string",
          "readOnly": true,
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
        "cartItemID": {
          "canBeNull": true,
          "description": "Cart Item ID the details is related to",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the detail",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "detailType": {
          "canBeNull": true,
          "description": "Type of detail",
          "fullType": "order.OrderDetailTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.OrderDetailTypeEnum"
        },
        "domain": {
          "canBeNull": false,
          "description": "Service name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "originalTotalPrice": {
          "canBeNull": false,
          "description": "Original price of the detail before reduction application",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "quantity": {
          "canBeNull": false,
          "description": "Quantity of the service",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "reductionTotalPrice": {
          "canBeNull": false,
          "description": "Total price of the reduction",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reductions": {
          "canBeNull": false,
          "description": "List of reductions applied to the detail",
          "fullType": "order.Reduction[]",
          "readOnly": true,
          "required": false,
          "type": "order.Reduction[]"
        },
        "totalPrice": {
          "canBeNull": false,
          "description": "Price total of the services",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "unitPrice": {
          "canBeNull": false,
          "description": "Unitary price of the service",
          "fullType": "order.Price",
          "readOnly": true,
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
        "originalWithoutTax": {
          "canBeNull": true,
          "description": "Price before reduction application",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reduction": {
          "canBeNull": true,
          "description": "Price concerning the reduced amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "tax": {
          "canBeNull": false,
          "description": "Tax amount",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withTax": {
          "canBeNull": false,
          "description": "Price with tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "withoutTax": {
          "canBeNull": false,
          "description": "Price without tax",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.Price": {
      "description": "Price with its currency and textual representation",
      "id": "Price",
      "namespace": "order",
      "properties": {
        "currencyCode": {
          "canBeNull": false,
          "description": "Currency code",
          "fullType": "order.CurrencyCodeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.CurrencyCodeEnum"
        },
        "priceInUcents": {
          "canBeNull": true,
          "description": "Price in microcents",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "text": {
          "canBeNull": false,
          "description": "Textual representation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "description": "The effective price",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "order.Reduction": {
      "description": "Order detail reduction",
      "id": "Reduction",
      "namespace": "order",
      "properties": {
        "context": {
          "canBeNull": false,
          "description": "In which context the reduction is applied",
          "fullType": "order.ReductionContextEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionContextEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "Promotion description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Reduction price applied with this promotion",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "reductionDescription": {
          "canBeNull": false,
          "description": "Reduction description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Reduction effect, price modification",
          "fullType": "order.ReductionTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "order.ReductionTypeEnum"
        },
        "value": {
          "canBeNull": false,
          "description": "The reduction value",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "order.ReductionContextEnum": {
      "description": "Context of the reduction",
      "enum": [
        "promotion",
        "voucher"
      ],
      "enumType": "string",
      "id": "ReductionContextEnum",
      "namespace": "order"
    },
    "order.ReductionTypeEnum": {
      "description": "Type of reduction",
      "enum": [
        "fixed_amount",
        "forced_amount",
        "percentage"
      ],
      "enumType": "string",
      "id": "ReductionTypeEnum",
      "namespace": "order"
    },
    "service.RenewType": {
      "description": "Map a possible renew for a specific service",
      "id": "RenewType",
      "namespace": "service",
      "properties": {
        "automatic": {
          "canBeNull": false,
          "description": "The service is automatically renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "fullType": "long",
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
      "description": "service.StateEnum",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "string",
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
          "fullType": "long",
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
    "spare.xdsl.XdslSpareWithIAM": {
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
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
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
      "description": "Contact information structure",
      "id": "Contact",
      "namespace": "telephony",
      "properties": {
        "address": {
          "canBeNull": true,
          "description": "Contact address",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": true,
          "description": "Contact city",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "country": {
          "canBeNull": true,
          "description": "Contact country",
          "fullType": "coreTypes.CountryEnum",
          "readOnly": false,
          "required": false,
          "type": "coreTypes.CountryEnum"
        },
        "email": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "firstname": {
          "canBeNull": true,
          "description": "Contact firstname",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": true,
          "description": "Contact name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "organisation": {
          "canBeNull": true,
          "description": "Contact organisation",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "phone": {
          "canBeNull": true,
          "description": "Contact phone",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "zip": {
          "canBeNull": true,
          "description": "Contact zip",
          "fullType": "string",
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
          "description": "Return merchandise authorisation type",
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
          "description": "Contact information structure",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "The date when this step was done",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "infos": {
          "canBeNull": true,
          "description": "Additional information about the step",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "RMA step names",
          "fullType": "telephony.RmaStepNameEnum",
          "readOnly": true,
          "required": false,
          "type": "telephony.RmaStepNameEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the RMA step",
          "fullType": "telephony.RmaStepStatusEnum",
          "readOnly": true,
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
        "provider": {
          "canBeNull": false,
          "description": "The provider",
          "fullType": "xdsl.ProviderEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.ProviderEnum"
        },
        "providerInfra": {
          "canBeNull": true,
          "description": "The provider of the infrastructure, if applicable",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeDslamProfile": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeLns": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canGetRadiusConnectionLogs": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canResetDslamPort": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hasDslamPort": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
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
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isActiveOnLns": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "isModemConnected": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "lineTest": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "ping": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "proposedProfileId": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "sync": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "xdsl.AccessLatency": {
      "description": "An access latency item",
      "id": "AccessLatency",
      "namespace": "xdsl",
      "properties": {
        "loss": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "timestamp": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "verboseStatus": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
        "terminated",
        "upgradeOffer"
      ],
      "enumType": "string",
      "id": "AccessStatusEnum",
      "namespace": "xdsl"
    },
    "xdsl.AccessWithIAM": {
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
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
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
        "provider": {
          "canBeNull": false,
          "description": "The provider",
          "fullType": "xdsl.ProviderEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.ProviderEnum"
        },
        "providerInfra": {
          "canBeNull": true,
          "description": "The provider of the infrastructure, if applicable",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
    "xdsl.AddressDetail": {
      "description": "All components of an address",
      "id": "AddressDetail",
      "namespace": "xdsl",
      "properties": {
        "building": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "city": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "door": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "firstName": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "floor": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "inseeCode": {
          "canBeNull": false,
          "description": "Identifier of the city",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastName": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "numberStreet": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "residence": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "rivoliCode": {
          "canBeNull": false,
          "description": "Identifier of the street",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "stairs": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "street": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "zipCode": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
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
    "xdsl.AsyncTask_connectivity.eligibility.Meetings": {
      "description": "xdsl.AsyncTask_connectivity.eligibility.Meetings",
      "id": "Meetings",
      "namespace": "xdsl.AsyncTask_connectivity.eligibility",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": false,
          "description": "List of available meeting time slots",
          "fullType": "connectivity.eligibility.Meetings",
          "readOnly": true,
          "required": false,
          "type": "connectivity.eligibility.Meetings"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.AsyncTask_xdsl.ModemInfo": {
      "description": "xdsl.AsyncTask_xdsl.ModemInfo",
      "id": "ModemInfo",
      "namespace": "xdsl.AsyncTask_xdsl",
      "properties": {
        "error": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Describe general information of a Modem",
          "fullType": "xdsl.ModemInfo",
          "readOnly": true,
          "required": false,
          "type": "xdsl.ModemInfo"
        },
        "status": {
          "canBeNull": false,
          "description": "AsyncTask status",
          "fullType": "xdsl.AsyncTaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.AsyncTaskStatusEnum"
        }
      }
    },
    "xdsl.CopperGridClosureTrajectory": {
      "description": "Copper grid closure trajectory",
      "id": "CopperGridClosureTrajectory",
      "namespace": "xdsl",
      "properties": {
        "commercialClosureAnnouncementDate": {
          "canBeNull": true,
          "description": "Commercial closure announcement date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "commercialClosureDate": {
          "canBeNull": true,
          "description": "Commercial closure date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "commercialClosureInitialDate": {
          "canBeNull": true,
          "description": "Commercial closure initial date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "departmentCode": {
          "canBeNull": false,
          "description": "Department code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "departmentName": {
          "canBeNull": true,
          "description": "Department name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ftthZone": {
          "canBeNull": true,
          "description": "FTTH zone",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "inseeCode": {
          "canBeNull": false,
          "description": "INSEE code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lot": {
          "canBeNull": true,
          "description": "Lot",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "municipalityName": {
          "canBeNull": false,
          "description": "Municipality name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "oiCode": {
          "canBeNull": true,
          "description": "OI code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "oiName": {
          "canBeNull": true,
          "description": "OI name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "technicalClosureAnnouncementDate": {
          "canBeNull": true,
          "description": "Technical closure announcement date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "technicalClosureDate": {
          "canBeNull": true,
          "description": "Technical closure date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "technicalClosureInitialDate": {
          "canBeNull": true,
          "description": "Technical closure initial date",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        }
      }
    },
    "xdsl.DHCP": {
      "description": "DHCP Configuration of the Modem",
      "id": "DHCP",
      "namespace": "xdsl",
      "properties": {
        "defaultGateway": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
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
          "description": "IP address (e.g., 192.0.2.0)",
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
          "description": "IP address (e.g., 192.0.2.0)",
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
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "subnetMask": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
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
          "description": "IP address (e.g., 192.0.2.0)",
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
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "monthlyPrice": {
          "canBeNull": false,
          "description": "Price with it's currency and textual representation",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "price": {
          "canBeNull": false,
          "description": "Price with it's currency and textual representation",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        }
      }
    },
    "xdsl.DeviceModemInfo": {
      "description": "Describe device information of a Modem",
      "id": "DeviceModemInfo",
      "namespace": "xdsl",
      "properties": {
        "brand": {
          "canBeNull": false,
          "description": "Modem brand",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ip": {
          "canBeNull": false,
          "description": "IPv4 address (e.g., 192.0.2.0)",
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Time of last information refresh",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "macAddress": {
          "canBeNull": false,
          "description": "Modem mac address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "model": {
          "canBeNull": false,
          "description": "Modem type of model",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "oui": {
          "canBeNull": false,
          "description": "Organizational Unique Identifier",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "overEthernet": {
          "canBeNull": true,
          "description": "Protocol used for connection",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "pppLogin": {
          "canBeNull": true,
          "description": "login used for ppp protocol",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serial": {
          "canBeNull": false,
          "description": "Modem serial key",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "softVersion": {
          "canBeNull": false,
          "description": "Software Version",
          "fullType": "string",
          "readOnly": true,
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
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "isCurrent": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
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
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ipRange": {
          "canBeNull": false,
          "description": "IPv4 CIDR notation (e.g., 192.0.2.0/24)",
          "fullType": "ipv4Block",
          "readOnly": true,
          "required": false,
          "type": "ipv4Block"
        },
        "moveTo": {
          "canBeNull": false,
          "description": "Access where the IP range will be moved to",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.FaultRepairTimeEnum": {
      "description": "Maximum time needed to repair a landline",
      "enum": [
        "10HO",
        "4HNO",
        "4HO",
        "DPLUS1",
        "NORMAL"
      ],
      "enumType": "string",
      "id": "FaultRepairTimeEnum",
      "namespace": "xdsl"
    },
    "xdsl.FiberEligibility": {
      "description": "Fiber eligibility",
      "id": "FiberEligibility",
      "namespace": "xdsl",
      "properties": {
        "availabilityDate": {
          "canBeNull": true,
          "description": "Availability date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "buildingName": {
          "canBeNull": true,
          "description": "Building name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "buildingReference": {
          "canBeNull": true,
          "description": "Building reference",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "buildingSeqId": {
          "canBeNull": true,
          "description": "Building sequence id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "copperGridClosureTrajectory": {
          "canBeNull": true,
          "description": "Copper grid closure trajectory",
          "fullType": "xdsl.CopperGridClosureTrajectory",
          "readOnly": true,
          "required": false,
          "type": "xdsl.CopperGridClosureTrajectory"
        },
        "firstEligibleDate": {
          "canBeNull": true,
          "description": "First eligible date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "grts": {
          "canBeNull": true,
          "description": "Available GRTs",
          "fullType": "xdsl.GtrEnum[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.GtrEnum[]"
        },
        "id": {
          "canBeNull": false,
          "description": "Identifier",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "offer": {
          "canBeNull": true,
          "description": "Offer",
          "fullType": "xdsl.Offer",
          "readOnly": true,
          "required": false,
          "type": "xdsl.Offer"
        },
        "provider": {
          "canBeNull": true,
          "description": "Provider",
          "fullType": "xdsl.Provider",
          "readOnly": true,
          "required": false,
          "type": "xdsl.Provider"
        },
        "status": {
          "canBeNull": false,
          "description": "Status",
          "fullType": "xdsl.FiberEligibilityStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.FiberEligibilityStatusEnum"
        }
      }
    },
    "xdsl.FiberEligibilityStatusEnum": {
      "description": "Status of the fiber eligibility",
      "enum": [
        "eligible",
        "no_building",
        "not_eligible",
        "not_yet_eligible"
      ],
      "enumType": "string",
      "id": "FiberEligibilityStatusEnum",
      "namespace": "xdsl"
    },
    "xdsl.GtrEnum": {
      "description": "GRT option for an access.",
      "enum": [
        "10ho",
        "20m_10ho",
        "20m_4ho",
        "4hno",
        "4ho",
        "5m_10ho",
        "5m_4ho",
        "dplus1",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
        },
        "taskReference": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "addressingType": {
          "canBeNull": false,
          "description": "How the modem gets its LAN IP Address",
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
          "description": "IP address (e.g., 192.0.2.0)",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lineInitialSection": {
          "canBeNull": false,
          "description": "Identifier of the section at the lineHead",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lineInitialSectionPair": {
          "canBeNull": false,
          "description": "Identifier of the pair at the lineHead's lineInitialSection",
          "fullType": "long",
          "readOnly": true,
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
          "fullType": "xdsl.LineTestEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.LineTestEnum"
        },
        "lineTestTime": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "number": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "proposedProfileId": {
          "canBeNull": true,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "sync": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "xdsl.LineSectionLength": {
      "description": "xdsl.LineSectionLength",
      "id": "LineSectionLength",
      "namespace": "xdsl",
      "properties": {
        "diameter": {
          "canBeNull": false,
          "description": "The diameter of this section in millimeters",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "length": {
          "canBeNull": false,
          "description": "The length of this section in meters",
          "fullType": "long",
          "readOnly": true,
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
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeACS": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeBridgeMode": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeDHCP": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeDMZ": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeEasyFirewallLevel": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeFirmware": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeLAN": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeManagement": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeMtu": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangePortMapping": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canChangeWLAN": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canReboot": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canReconfigureVoip": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canRefreshConnectedDevices": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "canReset": {
          "canBeNull": false,
          "fullType": "boolean",
          "readOnly": true,
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
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "newModel": {
          "canBeNull": false,
          "description": "Model of the new modem",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "price": {
          "canBeNull": false,
          "description": "Price with it's currency and textual representation",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "priceWithTax": {
          "canBeNull": false,
          "description": "Price with it's currency and textual representation",
          "fullType": "order.Price",
          "readOnly": true,
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
          "description": "Describe device information of a Modem",
          "fullType": "xdsl.DeviceModemInfo",
          "readOnly": true,
          "required": false,
          "type": "xdsl.DeviceModemInfo"
        },
        "statistics": {
          "canBeNull": false,
          "description": "Describe statistics information of a Modem",
          "fullType": "xdsl.StatsModemInfo",
          "readOnly": true,
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
          "description": "Whether to enable or not",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": false,
          "description": "Frequency between notifications.",
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
    "xdsl.Offer": {
      "description": "Details of a provider",
      "id": "Offer",
      "namespace": "xdsl",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Offer code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Offer name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.Ont": {
      "description": "Access ONT information",
      "id": "Ont",
      "namespace": "xdsl",
      "properties": {
        "mac": {
          "canBeNull": false,
          "description": "MAC address of the device",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "serial": {
          "canBeNull": false,
          "description": "Serial of the device",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "description": "IP address (e.g., 192.0.2.0)",
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
          "description": "Type of protocol for the Port Mapping",
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
    "xdsl.Provider": {
      "description": "Details of a provider",
      "id": "Provider",
      "namespace": "xdsl",
      "properties": {
        "code": {
          "canBeNull": false,
          "description": "Provider code",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Provider name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.ProviderEnum": {
      "description": "The providers",
      "enum": [
        "axione",
        "bouygues",
        "ft",
        "ftBySfr",
        "kosc",
        "koscDeg",
        "ovh",
        "sfr"
      ],
      "enumType": "string",
      "id": "ProviderEnum",
      "namespace": "xdsl"
    },
    "xdsl.RadiusConnectionLog": {
      "description": "Log entry of an auth attempt to the radius server",
      "id": "RadiusConnectionLog",
      "namespace": "xdsl",
      "properties": {
        "date": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "login": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "message": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
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
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "needModemReturn": {
          "canBeNull": false,
          "description": "If the customer needs to return his modem",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "registrationDate": {
          "canBeNull": false,
          "description": "Date when the resiliation was done",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of the resiliation",
          "fullType": "string",
          "readOnly": true,
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Reason of a resiliation",
          "fullType": "xdsl.ResiliationReasonEnum",
          "readOnly": true,
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
          "description": "Price with it's currency and textual representation",
          "fullType": "order.Price",
          "readOnly": true,
          "required": false,
          "type": "order.Price"
        },
        "engageDate": {
          "canBeNull": true,
          "description": "Date until which the customer is engaged",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "minResiliationDate": {
          "canBeNull": false,
          "description": "Minumum resiliationDate",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "resiliationDate": {
          "canBeNull": false,
          "description": "Date at which the access will be resiliated",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "resiliationReasons": {
          "canBeNull": false,
          "description": "List of available resiliation reasons",
          "fullType": "xdsl.ResiliationReasonEnum[]",
          "readOnly": true,
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
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "crcError": {
          "canBeNull": false,
          "description": "Amount of CRC error detected",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "deviceUptime": {
          "canBeNull": false,
          "description": "Modem uptime",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "downstreamAttenuation": {
          "canBeNull": false,
          "description": "Downstream attenuation",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "downstreamMargin": {
          "canBeNull": false,
          "description": "Downstream margin",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "downstreamSync": {
          "canBeNull": false,
          "description": "Downstream synchronization",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "fecError": {
          "canBeNull": false,
          "description": "Amount of FEC error detected",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "hecError": {
          "canBeNull": false,
          "description": "Amount of HEC error detected",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Time of last refresh",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "modulation": {
          "canBeNull": false,
          "description": "Line modulation used",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "quarterHourStart": {
          "canBeNull": false,
          "description": "Count from last refresh in seconds",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "syncUptime": {
          "canBeNull": false,
          "description": "Synchronization uptime",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "upstreamAttenuation": {
          "canBeNull": false,
          "description": "Upstream attenuation",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "upstreamMargin": {
          "canBeNull": false,
          "description": "Upstream margin",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "upstreamSync": {
          "canBeNull": false,
          "description": "Upstream synchronization",
          "fullType": "double",
          "readOnly": true,
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
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
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "value": {
          "canBeNull": true,
          "fullType": "double",
          "readOnly": true,
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
          "description": "How the WiFi channel is selected",
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
          "description": "WiFi security key",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "securityType": {
          "canBeNull": false,
          "description": "Type of WLAN security protection",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "result": {
          "canBeNull": true,
          "description": "Table with evidences stored on PCS",
          "fullType": "xdsl.antiSpam.EvidencesInfoDetail[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.antiSpam.EvidencesInfoDetail[]"
        },
        "status": {
          "canBeNull": false,
          "description": "Evidences AsyncTask status",
          "fullType": "xdsl.antiSpam.EvidencesInfoStatusEnum",
          "readOnly": true,
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
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "filename": {
          "canBeNull": false,
          "description": "File name on the PCS",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": false,
          "description": "Temporary URL to access file",
          "fullType": "string",
          "readOnly": true,
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
    "xdsl.applyTemplateToModem.post": {
      "description": "xdsl.applyTemplateToModem.post",
      "id": "post",
      "namespace": "xdsl.applyTemplateToModem",
      "properties": {
        "templateName": {
          "canBeNull": false,
          "description": "Modem Template Name",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "xdsl.changeContact.post": {
      "description": "xdsl.changeContact.post",
      "id": "post",
      "namespace": "xdsl.changeContact",
      "properties": {
        "contactAdmin": {
          "canBeNull": false,
          "description": "The contact to set as admin contact",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "contactBilling": {
          "canBeNull": false,
          "description": "The contact to set as billing contact",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "contactTech": {
          "canBeNull": false,
          "description": "The contact to set as tech contact",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
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
          "description": "The date time of the last update of thoses information",
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
    "xdsl.email.pro.Task": {
      "description": "Task Struct",
      "id": "Task",
      "namespace": "xdsl.email.pro",
      "properties": {
        "finishDate": {
          "canBeNull": true,
          "description": "Finished date of the task",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function of the task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "status": {
          "canBeNull": false,
          "description": "Status of an Email Pro task.",
          "fullType": "xdsl.email.pro.TaskStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.email.pro.TaskStatusEnum"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Todo date of the task",
          "fullType": "datetime",
          "readOnly": true,
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
    "xdsl.email.pro.changePassword.post": {
      "description": "xdsl.email.pro.changePassword.post",
      "id": "post",
      "namespace": "xdsl.email.pro.changePassword",
      "properties": {
        "password": {
          "canBeNull": false,
          "description": "New email password",
          "fullType": "password",
          "readOnly": false,
          "required": true,
          "type": "password"
        }
      }
    },
    "xdsl.ipv6.post": {
      "description": "xdsl.ipv6.post",
      "id": "post",
      "namespace": "xdsl.ipv6",
      "properties": {
        "enabled": {
          "canBeNull": false,
          "description": "Should the IPv6 be enabled ?",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    },
    "xdsl.lineDiagnostic.Answers": {
      "description": "Customer answers for line diagnostic",
      "id": "Answers",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "bandwidthTestUnit": {
          "canBeNull": true,
          "description": "bandwidth unit for proof.ovh.net test values",
          "fullType": "xdsl.lineDiagnostic.BandwidthTestUnitEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.BandwidthTestUnitEnum"
        },
        "comment": {
          "canBeNull": true,
          "description": "comment will contains all information needed for intervention and about your access problem",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "conditionsAccepted": {
          "canBeNull": true,
          "description": "customer knows that he can be charged (150 euros HT) if he is responsible for the problem or if tests have not been done correctly ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "contactPhone": {
          "canBeNull": true,
          "description": "customer's phone number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "datetimeOfAppearance": {
          "canBeNull": true,
          "description": "approximative datetime of problem happening",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "downloadBandwidthTest": {
          "canBeNull": true,
          "description": "bandwidth download value on proof.ovh.net test",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "endAfternoonHours": {
          "canBeNull": true,
          "description": "afternoon closing information or time for the site",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "endMorningHours": {
          "canBeNull": true,
          "description": "morning closing information or time for the site",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "followBySms": {
          "canBeNull": true,
          "description": "indicate if customer wants to be informed by sms",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "hasModemKeptSynchronization": {
          "canBeNull": true,
          "description": "Has modem kept his synchronization during line port reset ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "idAppointment": {
          "canBeNull": true,
          "description": "id of appointment chosen (\"possibleValues\" contains choices list with id)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "individualSite": {
          "canBeNull": true,
          "description": "is non-professional site ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "modemIsSynchronized": {
          "canBeNull": true,
          "description": "Is modem synchronized ? (whatever internet connection)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "modemMac": {
          "canBeNull": true,
          "description": "modem mac address",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "modemStillSynchronized": {
          "canBeNull": true,
          "description": "Modem still synchronized ? Please check once again.",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "modemType": {
          "canBeNull": true,
          "description": "modem brand and reference",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ovhTicket": {
          "canBeNull": true,
          "description": "Ovh ticket name or ticket ID, only if a ticket is already opened for this problem",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "problemType": {
          "canBeNull": true,
          "description": "Problem Type on DSL connection",
          "fullType": "xdsl.lineDiagnostic.ProblemTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.ProblemTypeEnum"
        },
        "resolvedAfterTests": {
          "canBeNull": true,
          "description": "is access problem solved ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "secureSite": {
          "canBeNull": true,
          "description": "is secure site ?",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "severalInternetConnections": {
          "canBeNull": true,
          "description": "Has customer several internal connections ? (on the same place)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "siteClosedDays": {
          "canBeNull": true,
          "description": "days or period where site access is not possible",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "siteDigicode": {
          "canBeNull": true,
          "description": "digicode for site entrance",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "siteOpening": {
          "canBeNull": true,
          "description": "site opening hours or information",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startAfternoonHours": {
          "canBeNull": true,
          "description": "afternoon opening information or time for the site",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "startMorningHours": {
          "canBeNull": true,
          "description": "morning opening information or time for the site",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "uploadBandwidthTest": {
          "canBeNull": true,
          "description": "bandwidth upload value on proof.ovh.net test",
          "fullType": "long",
          "readOnly": true,
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
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "downstreamAttenuation": {
          "canBeNull": true,
          "description": "Downstream attenuation",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "downstreamMargin": {
          "canBeNull": true,
          "description": "Downstream margin",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "downstreamSync": {
          "canBeNull": true,
          "description": "Downstream synchronization",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "ifName": {
          "canBeNull": true,
          "description": "Modem interface name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "profile": {
          "canBeNull": true,
          "description": "Profile on the DSLAM",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "upstreamAttenuation": {
          "canBeNull": true,
          "description": "Upstream attenuation",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "upstreamMargin": {
          "canBeNull": true,
          "description": "Upstream margin",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "upstreamSync": {
          "canBeNull": true,
          "description": "Upstream synchronization",
          "fullType": "double",
          "readOnly": true,
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Customer possible actions",
          "fullType": "xdsl.lineDiagnostic.CustomerActionsEnum",
          "readOnly": true,
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
      "description": "Diagnostic status and information",
      "id": "Diagnostic",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "data": {
          "canBeNull": false,
          "description": "Diagnostic data and information",
          "fullType": "xdsl.lineDiagnostic.DiagnosticData",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.DiagnosticData"
        },
        "faultType": {
          "canBeNull": false,
          "description": "Line diagnostic fault type",
          "fullType": "xdsl.lineDiagnostic.FaultTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.FaultTypeEnum"
        },
        "id": {
          "canBeNull": false,
          "description": "Diagnostic id",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "status": {
          "canBeNull": false,
          "description": "Diagnostic status possible values",
          "fullType": "xdsl.lineDiagnostic.DiagnosticStatusEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.DiagnosticStatusEnum"
        }
      }
    },
    "xdsl.lineDiagnostic.DiagnosticData": {
      "description": "Diagnostic data and information",
      "id": "DiagnosticData",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "actionsDone": {
          "canBeNull": false,
          "description": "List of actions already done by customer",
          "fullType": "xdsl.lineDiagnostic.CustomerActionsEnum[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.CustomerActionsEnum[]"
        },
        "actionsToDo": {
          "canBeNull": false,
          "description": "List of actions that must be done by customer",
          "fullType": "xdsl.lineDiagnostic.CustomerActionToDo[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.CustomerActionToDo[]"
        },
        "answers": {
          "canBeNull": false,
          "description": "Customer answers for line diagnostic",
          "fullType": "xdsl.lineDiagnostic.Answers",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.Answers"
        },
        "comment": {
          "canBeNull": true,
          "description": "Diagnostic comment. Can be update during any diagnostic step",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "creationDate": {
          "canBeNull": false,
          "description": "Diagnostic creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "diagnosticDoneDate": {
          "canBeNull": true,
          "description": "End of diagnostic date. Will be null until problem totally identified",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "error": {
          "canBeNull": false,
          "description": "Error message",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Last diagnostic update date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lineDetails": {
          "canBeNull": false,
          "description": "Line information",
          "fullType": "xdsl.lineDiagnostic.LineDetails",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.LineDetails"
        },
        "robotAction": {
          "canBeNull": true,
          "description": "Current or last robot action",
          "fullType": "xdsl.lineDiagnostic.RobotActionsEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.RobotActionsEnum"
        },
        "seltTest": {
          "canBeNull": false,
          "description": "Customer answers for line diagnostic",
          "fullType": "xdsl.lineDiagnostic.SeltResult",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.SeltResult"
        },
        "timeout": {
          "canBeNull": false,
          "description": "Diagnostic timeout in minutes. Any action restart timeout",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "toAnswer": {
          "canBeNull": false,
          "description": "List of questions that must be answered by customer",
          "fullType": "xdsl.lineDiagnostic.Question[]",
          "readOnly": true,
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
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "mitigation": {
          "canBeNull": true,
          "description": "Theoretical line mitigation",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "ping": {
          "canBeNull": true,
          "description": "Theoretical ping",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        },
        "up": {
          "canBeNull": true,
          "description": "Theoretical Upstream synchronization ",
          "fullType": "double",
          "readOnly": true,
          "required": false,
          "type": "double"
        }
      }
    },
    "xdsl.lineDiagnostic.LineDetails": {
      "description": "Line information",
      "id": "LineDetails",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "accessName": {
          "canBeNull": false,
          "description": "access name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "accessPing": {
          "canBeNull": true,
          "description": "Access IP ping or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "address": {
          "canBeNull": true,
          "description": "address of the access",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "connectionInfo": {
          "canBeNull": true,
          "description": "information directly get on DSLAM or Modem",
          "fullType": "xdsl.lineDiagnostic.ConnectionInformations",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.ConnectionInformations"
        },
        "contactPhone": {
          "canBeNull": true,
          "description": "customer phone number for contact",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": true,
          "description": "custom access description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "dslamIsSynchronized": {
          "canBeNull": true,
          "description": "DSLAM is synchronized or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "gtr": {
          "canBeNull": false,
          "description": "is GTR access or not",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "length": {
          "canBeNull": false,
          "description": "Line length in meters",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "lineCapabilities": {
          "canBeNull": true,
          "description": "Theoretical line capabilities",
          "fullType": "xdsl.lineDiagnostic.LineCapabilities",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.LineCapabilities"
        },
        "lineType": {
          "canBeNull": false,
          "description": "Possible DSL technologies",
          "fullType": "xdsl.DslTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.DslTypeEnum"
        },
        "nra": {
          "canBeNull": true,
          "description": "NRA name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "number": {
          "canBeNull": false,
          "description": "line number",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "operator": {
          "canBeNull": false,
          "description": "The providers",
          "fullType": "xdsl.ProviderEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.ProviderEnum"
        },
        "sections": {
          "canBeNull": true,
          "description": "cables sections details",
          "fullType": "xdsl.lineDiagnostic.Section[]",
          "readOnly": true,
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
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "label": {
          "canBeNull": true,
          "description": "answer choice string",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": true,
          "description": "answer choice value",
          "fullType": "string",
          "readOnly": true,
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
    "xdsl.lineDiagnostic.Question": {
      "description": "Question to customer",
      "id": "Question",
      "namespace": "xdsl.lineDiagnostic",
      "properties": {
        "defaultValue": {
          "canBeNull": true,
          "description": "question description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": false,
          "description": "question description",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "enumValues": {
          "canBeNull": true,
          "description": "available values for enum",
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "name": {
          "canBeNull": false,
          "description": "Possible customer questions",
          "fullType": "xdsl.lineDiagnostic.QuestionsEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.QuestionsEnum"
        },
        "possibleValues": {
          "canBeNull": true,
          "description": "list of possible values",
          "fullType": "xdsl.lineDiagnostic.PossibleValue[]",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.PossibleValue[]"
        },
        "required": {
          "canBeNull": true,
          "description": "is a required question",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "type": {
          "canBeNull": false,
          "description": "answer type",
          "fullType": "string",
          "readOnly": true,
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
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "section": {
          "canBeNull": false,
          "description": "cables section in millimeters",
          "fullType": "long",
          "readOnly": true,
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
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "distance": {
          "canBeNull": true,
          "description": "Distance of the problem identified on the line (by SELT test), from NRA to customer",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "preloc": {
          "canBeNull": true,
          "description": "Prelocalization of the problem",
          "fullType": "xdsl.lineDiagnostic.SeltPrelocEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.SeltPrelocEnum"
        },
        "state": {
          "canBeNull": true,
          "description": "Problem type identified by SELT test",
          "fullType": "xdsl.lineDiagnostic.SeltStateEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.lineDiagnostic.SeltStateEnum"
        },
        "status": {
          "canBeNull": true,
          "description": "SELT test status",
          "fullType": "xdsl.lineDiagnostic.SeltStatusEnum",
          "readOnly": true,
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
    "xdsl.lines.diagnostic.run.post": {
      "description": "xdsl.lines.diagnostic.run.post",
      "id": "post",
      "namespace": "xdsl.lines.diagnostic.run",
      "properties": {
        "actionsDone": {
          "canBeNull": false,
          "description": "Customer possible actions",
          "fullType": "xdsl.lineDiagnostic.CustomerActionsEnum[]",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.CustomerActionsEnum[]"
        },
        "answers": {
          "canBeNull": false,
          "description": "Customer answers for line diagnostic",
          "fullType": "xdsl.lineDiagnostic.Answers",
          "readOnly": false,
          "required": false,
          "type": "xdsl.lineDiagnostic.Answers"
        },
        "faultType": {
          "canBeNull": false,
          "description": "Line diagnostic fault type",
          "fullType": "xdsl.lineDiagnostic.FaultTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.lineDiagnostic.FaultTypeEnum"
        }
      }
    },
    "xdsl.lines.dslamPort.changeProfile.post": {
      "description": "xdsl.lines.dslamPort.changeProfile.post",
      "id": "post",
      "namespace": "xdsl.lines.dslamPort.changeProfile",
      "properties": {
        "dslamProfileId": {
          "canBeNull": false,
          "description": "The id of the xdsl.DslamLineProfile",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        }
      }
    },
    "xdsl.modem.blocIp.post": {
      "description": "xdsl.modem.blocIp.post",
      "id": "post",
      "namespace": "xdsl.modem.blocIp",
      "properties": {
        "status": {
          "canBeNull": false,
          "description": "Status of the service",
          "fullType": "xdsl.ServiceStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.ServiceStatusEnum"
        }
      }
    },
    "xdsl.modem.callWaiting.post": {
      "description": "xdsl.modem.callWaiting.post",
      "id": "post",
      "namespace": "xdsl.modem.callWaiting",
      "properties": {
        "callWaiting": {
          "canBeNull": false,
          "description": "Status of the service",
          "fullType": "xdsl.ServiceStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.ServiceStatusEnum"
        }
      }
    },
    "xdsl.modem.comfortExchange.post": {
      "description": "xdsl.modem.comfortExchange.post",
      "id": "post",
      "namespace": "xdsl.modem.comfortExchange",
      "properties": {
        "contactShipping": {
          "canBeNull": false,
          "description": "Customer identifier for shipping address. By default Internet access address will be used. Allowed values are nichandle or «/me/contact/xyz»",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.modem.contentSharing.post": {
      "description": "xdsl.modem.contentSharing.post",
      "id": "post",
      "namespace": "xdsl.modem.contentSharing",
      "properties": {
        "contentSharing": {
          "canBeNull": false,
          "description": "Status of the service",
          "fullType": "xdsl.ServiceStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.ServiceStatusEnum"
        }
      }
    },
    "xdsl.modem.firmware.post": {
      "description": "xdsl.modem.firmware.post",
      "id": "post",
      "namespace": "xdsl.modem.firmware",
      "properties": {
        "firmware": {
          "canBeNull": false,
          "description": "The firmware version to upgrade to",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "todoDate": {
          "canBeNull": false,
          "description": "Date of execution, default is now",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "xdsl.modem.ftp.post": {
      "description": "xdsl.modem.ftp.post",
      "id": "post",
      "namespace": "xdsl.modem.ftp",
      "properties": {
        "ftp": {
          "canBeNull": false,
          "description": "Status of the service",
          "fullType": "xdsl.ServiceStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.ServiceStatusEnum"
        }
      }
    },
    "xdsl.modem.ipsecAlg.post": {
      "description": "xdsl.modem.ipsecAlg.post",
      "id": "post",
      "namespace": "xdsl.modem.ipsecAlg",
      "properties": {
        "ipsecAlg": {
          "canBeNull": false,
          "description": "Status of the service",
          "fullType": "xdsl.ServiceStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.ServiceStatusEnum"
        }
      }
    },
    "xdsl.modem.lan.dhcp.DHCPStaticAddresses.post": {
      "description": "xdsl.modem.lan.dhcp.DHCPStaticAddresses.post",
      "id": "post",
      "namespace": "xdsl.modem.lan.dhcp.DHCPStaticAddresses",
      "properties": {
        "IPAddress": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        },
        "MACAddress": {
          "canBeNull": false,
          "description": "The MAC address of the device",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "name": {
          "canBeNull": false,
          "description": "Name of the DHCP static lease",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.modem.portMappings.post": {
      "description": "xdsl.modem.portMappings.post",
      "id": "post",
      "namespace": "xdsl.modem.portMappings",
      "properties": {
        "allowedRemoteIp": {
          "canBeNull": false,
          "description": "IPv4 address (e.g., 192.0.2.0)",
          "fullType": "ipv4",
          "readOnly": false,
          "required": false,
          "type": "ipv4"
        },
        "description": {
          "canBeNull": false,
          "description": "Description of the Port Mapping",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "externalPortEnd": {
          "canBeNull": false,
          "description": "The last port of the interval on the External Client that will get the connections",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "externalPortStart": {
          "canBeNull": false,
          "description": "External Port that the modem will listen on",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "internalClient": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": false,
          "required": true,
          "type": "ip"
        },
        "internalPort": {
          "canBeNull": false,
          "description": "The port on the Internal Client that will get the connections",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "internalPortEnd": {
          "canBeNull": false,
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
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "protocol": {
          "canBeNull": false,
          "description": "Type of protocol for the Port Mapping",
          "fullType": "xdsl.xdslModemConfig.ProtocolTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.xdslModemConfig.ProtocolTypeEnum"
        }
      }
    },
    "xdsl.modem.reboot.post": {
      "description": "xdsl.modem.reboot.post",
      "id": "post",
      "namespace": "xdsl.modem.reboot",
      "properties": {
        "todoDate": {
          "canBeNull": false,
          "description": "Date when the reboot will start",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        }
      }
    },
    "xdsl.modem.reset.post": {
      "description": "xdsl.modem.reset.post",
      "id": "post",
      "namespace": "xdsl.modem.reset",
      "properties": {
        "resetOvhConfig": {
          "canBeNull": false,
          "description": "Reset configuration stored in OVH databases",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "xdsl.modem.sipAlg.post": {
      "description": "xdsl.modem.sipAlg.post",
      "id": "post",
      "namespace": "xdsl.modem.sipAlg",
      "properties": {
        "sipAlg": {
          "canBeNull": false,
          "description": "Status of the service",
          "fullType": "xdsl.ServiceStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.ServiceStatusEnum"
        }
      }
    },
    "xdsl.modem.upnp.post": {
      "description": "xdsl.modem.upnp.post",
      "id": "post",
      "namespace": "xdsl.modem.upnp",
      "properties": {
        "upnp": {
          "canBeNull": false,
          "description": "Status of the service",
          "fullType": "xdsl.ServiceStatusEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.ServiceStatusEnum"
        }
      }
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
    "xdsl.monitoringNotifications.post": {
      "description": "xdsl.monitoringNotifications.post",
      "id": "post",
      "namespace": "xdsl.monitoringNotifications",
      "properties": {
        "allowIncident": {
          "canBeNull": false,
          "description": "Whether or not to allow notifications concerning generic incidents",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "downThreshold": {
          "canBeNull": false,
          "description": "The number of seconds the access has to be down to trigger the alert",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "email": {
          "canBeNull": false,
          "description": "The e-mail address, if type is mail",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "frequency": {
          "canBeNull": false,
          "description": "Frequency between notifications.",
          "fullType": "xdsl.monitoringNotifications.FrequencyEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.monitoringNotifications.FrequencyEnum"
        },
        "phone": {
          "canBeNull": false,
          "description": "The phone number, if type is sms",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "smsAccount": {
          "canBeNull": false,
          "description": "The SMS account which will be debited for each sent SMS, if the type is sms",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Type of notification.",
          "fullType": "xdsl.monitoringNotifications.TypeEnum",
          "readOnly": false,
          "required": true,
          "type": "xdsl.monitoringNotifications.TypeEnum"
        }
      }
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
          "fullType": "string[]",
          "readOnly": true,
          "required": false,
          "type": "string[]"
        },
        "doneDate": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "durationUnit": {
          "canBeNull": false,
          "description": "The duration units",
          "fullType": "xdsl.orderFollowup.DurationUnitEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.orderFollowup.DurationUnitEnum"
        },
        "expectedDuration": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "name": {
          "canBeNull": false,
          "description": "The status of an order step",
          "fullType": "xdsl.orderFollowup.StepNameEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.orderFollowup.StepNameEnum"
        },
        "status": {
          "canBeNull": false,
          "description": "The status of an order step",
          "fullType": "xdsl.orderFollowup.StepStatusEnum",
          "readOnly": true,
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
    "xdsl.orderMeeting.post": {
      "description": "xdsl.orderMeeting.post",
      "id": "post",
      "namespace": "xdsl.orderMeeting",
      "properties": {
        "endDate": {
          "canBeNull": false,
          "description": "Meeting end date",
          "fullType": "datetime",
          "readOnly": false,
          "required": true,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Meeting start date",
          "fullType": "datetime",
          "readOnly": false,
          "required": true,
          "type": "datetime"
        },
        "uiCode": {
          "canBeNull": false,
          "description": "Meeting ui code ( code linked to the meeting returned by POST /xdsl/{serviceName}/orderMeetings )",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "xdsl.requestTotalDeconsolidation.post": {
      "description": "xdsl.requestTotalDeconsolidation.post",
      "id": "post",
      "namespace": "xdsl.requestTotalDeconsolidation",
      "properties": {
        "noPortability": {
          "canBeNull": false,
          "description": "Do not port the number",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "rio": {
          "canBeNull": false,
          "description": "A token to prove the ownership of the line number, needed to port the number",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.resiliate.post": {
      "description": "xdsl.resiliate.post",
      "id": "post",
      "namespace": "xdsl.resiliate",
      "properties": {
        "resiliationDate": {
          "canBeNull": false,
          "description": "The desired resiliation date",
          "fullType": "datetime",
          "readOnly": false,
          "required": false,
          "type": "datetime"
        },
        "resiliationSurvey": {
          "canBeNull": false,
          "description": "Information about the reason for the resiliation",
          "fullType": "xdsl.ResiliationSurvey",
          "readOnly": false,
          "required": true,
          "type": "xdsl.ResiliationSurvey"
        }
      }
    },
    "xdsl.rma.changeType.post": {
      "description": "xdsl.rma.changeType.post",
      "id": "post",
      "namespace": "xdsl.rma.changeType",
      "properties": {
        "type": {
          "canBeNull": false,
          "description": "Types of return merchandise authorisation you can change to",
          "fullType": "telephony.RmaChangeTypeEnum",
          "readOnly": false,
          "required": true,
          "type": "telephony.RmaChangeTypeEnum"
        }
      }
    },
    "xdsl.spare.replace.post": {
      "description": "xdsl.spare.replace.post",
      "id": "post",
      "namespace": "xdsl.spare.replace",
      "properties": {
        "domain": {
          "canBeNull": false,
          "description": "The modem to replace by the spare",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "xdsl.templateModem.DHCP": {
      "description": "DHCP Configuration for Modem Template",
      "id": "DHCP",
      "namespace": "xdsl.templateModem",
      "properties": {
        "defaultGateway": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": true,
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
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "endAddress": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "leaseTime": {
          "canBeNull": false,
          "description": "Lease time in seconds of client assigned address (-1 means infinite)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "primaryDNS": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "secondaryDNS": {
          "canBeNull": true,
          "description": "Secondary DNS servers to be given to the clients",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "serverEnabled": {
          "canBeNull": false,
          "description": "State of the DHCP server of the modem",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "startAddress": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "subnetMask": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": true,
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
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "addressingType": {
          "canBeNull": false,
          "description": "How the modem gets its LAN IP Address",
          "fullType": "xdsl.xdslModemConfig.AddressingTypeEnum",
          "readOnly": true,
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
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": true,
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
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "WLANList": {
          "canBeNull": true,
          "description": "WLAN names list to ignore. Ignore only listed WLAN",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "dmzIP": {
          "canBeNull": true,
          "description": "Ignore DMZ configuration",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "mtuSize": {
          "canBeNull": true,
          "description": "Ignore MTU Size value",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "portMappingList": {
          "canBeNull": true,
          "description": "PortMapping names list to ignore. Ignore only listed portMapping",
          "fullType": "string[]",
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
          "fullType": "ipv4",
          "readOnly": true,
          "required": false,
          "type": "ipv4"
        },
        "description": {
          "canBeNull": true,
          "description": "Description of the Port Mapping",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "externalPortEnd": {
          "canBeNull": true,
          "description": "The last port of the interval on the External Client that will get the connections",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "externalPortStart": {
          "canBeNull": false,
          "description": "External Port that the modem will listen on. List of externalPorts not available for now in the API : 8, 21, 68, 5060, 21800-21805, 51005",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "internalClient": {
          "canBeNull": false,
          "description": "IP address (e.g., 192.0.2.0)",
          "fullType": "ip",
          "readOnly": true,
          "required": false,
          "type": "ip"
        },
        "internalPort": {
          "canBeNull": false,
          "description": "The port on the Internal Client that will get the connections",
          "fullType": "long",
          "readOnly": true,
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
          "description": "Type of protocol for the Port Mapping",
          "fullType": "xdsl.xdslModemConfig.ProtocolTypeEnum",
          "readOnly": true,
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
        "WPA2andWPA3",
        "WPA3",
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
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "SSIDAdvertisementEnabled": {
          "canBeNull": false,
          "description": "Control if Wifi is discoverable or hidden",
          "fullType": "boolean",
          "readOnly": true,
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
          "description": "Channel number (Useless if channelMode is set to Auto)",
          "fullType": "long",
          "readOnly": true,
          "required": false,
          "type": "long"
        },
        "channelMode": {
          "canBeNull": false,
          "description": "How the WiFi channel is selected",
          "fullType": "xdsl.xdslModemConfig.ChannelModeEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.xdslModemConfig.ChannelModeEnum"
        },
        "enabled": {
          "canBeNull": false,
          "description": "Wifi state",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "frequency": {
          "canBeNull": false,
          "description": "Modem frequency",
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
          "description": "Encrypted WLAN passphrase",
          "fullType": "password",
          "readOnly": true,
          "required": false,
          "type": "password"
        },
        "securityType": {
          "canBeNull": false,
          "description": "Type of WLAN security protection",
          "fullType": "xdsl.templateModem.SecurityTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "xdsl.templateModem.SecurityTypeEnum"
        },
        "wifiName": {
          "canBeNull": false,
          "description": "Wifi Name",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        }
      }
    },
    "xdsl.templateModem.post": {
      "description": "xdsl.templateModem.post",
      "id": "post",
      "namespace": "xdsl.templateModem",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "Modem Template name (only alphanumeric characters)",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "serviceName": {
          "canBeNull": false,
          "description": "The access name with the config you want to duplicate",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "xdsl.updateInvalidOrMissingRio.post": {
      "description": "xdsl.updateInvalidOrMissingRio.post",
      "id": "post",
      "namespace": "xdsl.updateInvalidOrMissingRio",
      "properties": {
        "relaunchWithoutPortability": {
          "canBeNull": false,
          "description": "Do not set RIO, and relaunch order without portability",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "rio": {
          "canBeNull": false,
          "description": "RIO number for portability",
          "fullType": "string",
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
          "fullType": "complexType.UnitAndValue_double",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue_double"
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
          "fullType": "complexType.UnitAndValue_long",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue_long"
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
    "xdsl.xdslEmailProWithIAM": {
      "description": "XDSL Email Pro",
      "id": "xdslEmailPro",
      "namespace": "xdsl",
      "properties": {
        "currentUsage": {
          "canBeNull": false,
          "description": "Mailbox usage",
          "fullType": "complexType.UnitAndValue_double",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue_double"
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
        "iam": {
          "canBeNull": true,
          "description": "IAM resource metadata",
          "readOnly": true,
          "required": false,
          "type": "iam.ResourceMetadata"
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
          "fullType": "complexType.UnitAndValue_long",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue_long"
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
        1432,
        1456,
        1492
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
        "WPA2andWPA3",
        "WPA3",
        "WPAandWPA2"
      ],
      "enumType": "string",
      "id": "SecurityTypeEnum",
      "namespace": "xdsl.xdslModemConfig"
    }
  },
  "resourcePath": "/xdsl"
}