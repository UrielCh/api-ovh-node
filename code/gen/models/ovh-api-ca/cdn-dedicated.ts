import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/cdn/dedicated",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the CDNANYCAST service"
    },
    {
      "path": "/cdn/dedicated/pops",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": true,
          "description": "List of CDN Pops"
        }
      ],
      "description": "List the cdnanycast.Pop objects"
    },
    {
      "path": "/cdn/dedicated/pops/{name}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "name",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Name"
            }
          ],
          "responseType": "cdnanycast.Pop",
          "noAuthentication": true,
          "description": "Get this object properties"
        }
      ],
      "description": "CDN Pop"
    },
    {
      "path": "/cdn/dedicated/{serviceName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "cdnanycast.Anycast",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Anycast IP of a CDN customer"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/changeContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "contactBilling",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as billing contact"
            },
            {
              "name": "contactAdmin",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as admin contact"
            },
            {
              "name": "contactTech",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "The contact to set as tech contact"
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
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Launch a contact change procedure"
        }
      ],
      "description": "Change the contacts of this service"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Domains associated to this anycast"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "domain name to add on CDN"
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
          "responseType": "cdnanycast.Domain",
          "noAuthentication": false,
          "description": "Add a domain on CDN"
        }
      ],
      "description": "List the cdnanycast.Domain objects"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "cdnanycast.Task",
          "noAuthentication": false,
          "description": "Remove a domain from the CDN"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "cdnanycast.Domain",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cdnanycast.Domain",
              "paramType": "body",
              "fullType": "cdnanycast.Domain",
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
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Domain on CDN"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/backends",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "ipv4[]",
          "noAuthentication": false,
          "description": "Backend associated to the domain"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "ip",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "IP to add to backends list"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "cdnanycast.Backend",
          "noAuthentication": false,
          "description": "Add a backend IP"
        }
      ],
      "description": "List the cdnanycast.Backend objects"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "ipv4",
          "noAuthentication": false,
          "description": "Remove a backend IP"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "ip",
              "dataType": "ipv4",
              "paramType": "path",
              "fullType": "ipv4",
              "required": true,
              "description": "Ip"
            }
          ],
          "responseType": "cdnanycast.Backend",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Backend for a domain"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "fileMatch",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of fileMatch property (like)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Cache rules associated to the domain"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "cacheType",
              "dataType": "cdnanycast.CacheRuleCacheTypeEnum",
              "paramType": "body",
              "fullType": "cdnanycast.CacheRuleCacheTypeEnum",
              "required": true,
              "description": "Type of cache rule to add to the domain"
            },
            {
              "name": "fileType",
              "dataType": "cdnanycast.CacheRuleFileTypeEnum",
              "paramType": "body",
              "fullType": "cdnanycast.CacheRuleFileTypeEnum",
              "required": true,
              "description": "File type for cache rule to add to the domain"
            },
            {
              "name": "ttl",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "ttl for cache rule to add to the domain"
            },
            {
              "name": "fileMatch",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "File match for cache rule to add to the domain"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "cdnanycast.CacheRule",
          "noAuthentication": false,
          "description": "Add a cache rule to a domain"
        }
      ],
      "description": "List the cdnanycast.CacheRule objects"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "cacheRuleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Cache rule ID"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "cdnanycast.Task",
          "noAuthentication": false,
          "description": "Remove cache rule"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "cacheRuleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Cache rule ID"
            }
          ],
          "responseType": "cdnanycast.CacheRule",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "cdnanycast.CacheRule",
              "paramType": "body",
              "fullType": "cdnanycast.CacheRule",
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
            },
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "cacheRuleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Cache rule ID"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "CacheRules for a domain"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "cacheRuleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Cache rule ID"
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
          "responseType": "cdnanycast.Task",
          "noAuthentication": false,
          "description": "Flush the cache"
        }
      ],
      "description": "flush operations"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "cacheRuleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Cache rule ID"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Task associated to the cache rule"
        }
      ],
      "description": "List the cdnanycast.Task objects"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "cacheRuleId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Cache rule ID"
            },
            {
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "cdnanycast.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task on a CDN"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/flush",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "cdnanycast.Task",
          "noAuthentication": false,
          "description": "Flush all cache"
        }
      ],
      "description": "flush operations"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/logs",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
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
          "responseType": "cdnanycast.LogsURL",
          "noAuthentication": false,
          "description": "Generate URL to real time logs"
        }
      ],
      "description": "logs operations"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/statistics",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "value",
              "dataType": "cdnanycast.StatsValueEnum",
              "paramType": "query",
              "fullType": "cdnanycast.StatsValueEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "period",
              "dataType": "cdnanycast.StatsPeriodEnum",
              "paramType": "query",
              "fullType": "cdnanycast.StatsPeriodEnum",
              "required": true,
              "description": ""
            },
            {
              "name": "type",
              "dataType": "cdnanycast.StatsTypeEnum",
              "paramType": "query",
              "fullType": "cdnanycast.StatsTypeEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "cdnanycast.StatsDataType[]",
          "noAuthentication": false,
          "description": "Return stats about a domain"
        }
      ],
      "description": "statistics operations"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Task associated to the domain"
        }
      ],
      "description": "List the cdnanycast.Task objects"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domain",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain"
            },
            {
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
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
          "responseType": "cdnanycast.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task on a CDN"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/logs",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
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
          "responseType": "cdnanycast.LogsURL",
          "noAuthentication": false,
          "description": "Generate URL to real time logs"
        }
      ],
      "description": "logs operations"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/quota",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "period",
              "dataType": "cdnanycast.StatsPeriodEnum",
              "paramType": "query",
              "fullType": "cdnanycast.StatsPeriodEnum",
              "required": true,
              "description": ""
            }
          ],
          "responseType": "cdnanycast.StatsDataType[]",
          "noAuthentication": false,
          "description": "Return quota history"
        }
      ],
      "description": "quota operations"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/serviceInfos",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            "description": "Stable production version",
            "value": "PRODUCTION"
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
      "path": "/cdn/dedicated/{serviceName}/ssl",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
            }
          ],
          "responseType": "cdnanycast.Task",
          "noAuthentication": false,
          "description": "Remove SSL of the CDN"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
          "responseType": "cdnanycast.Ssl",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "certificate",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "certificate (empty for lets encrypt generation)"
            },
            {
              "name": "key",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "certificate key (empty for lets encrypt generation)"
            },
            {
              "name": "chain",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "certificate chain (empty for lets encrypt generation)"
            },
            {
              "name": "name",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "ssl name to add on CDN"
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
          "responseType": "cdnanycast.Ssl",
          "noAuthentication": false,
          "description": "Add a SSL on CDN or Generate a Lets Encrypt certificate"
        }
      ],
      "description": "CDN Ssl"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/ssl/tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "status",
              "dataType": "cdnanycast.TaskStateEnum",
              "paramType": "query",
              "fullType": "cdnanycast.TaskStateEnum",
              "required": false,
              "description": "Filter the value of status property (=)"
            },
            {
              "name": "function",
              "dataType": "cdnanycast.TaskFunctionEnum",
              "paramType": "query",
              "fullType": "cdnanycast.TaskFunctionEnum",
              "required": false,
              "description": "Filter the value of function property (=)"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Task associated to the ssl"
        }
      ],
      "description": "List the cdnanycast.Task objects"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
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
              "name": "taskId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Task ID"
            }
          ],
          "responseType": "cdnanycast.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Task on a CDN"
    },
    {
      "path": "/cdn/dedicated/{serviceName}/ssl/update",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "chain",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": false,
              "description": "certificate chain"
            },
            {
              "name": "certificate",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "certificate"
            },
            {
              "name": "key",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "certificate key"
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
          "responseType": "cdnanycast.Task",
          "noAuthentication": false,
          "description": "Update an existing SSL with a custom certificate"
        }
      ],
      "description": "update operations"
    }
  ],
  "resourcePath": "/cdn/dedicated",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "cdnanycast.Anycast": {
      "id": "Anycast",
      "namespace": "cdnanycast",
      "description": "Anycast IP of a CDN customer",
      "properties": {
        "anycast": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "backendLimit": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "backendUse": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "cacheRuleLimitPerDomain": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "lastQuotaOrder": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "logUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "URL for downloading daily log of your CDN",
          "required": true
        },
        "offer": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "quota": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "service": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "The internal name of your CDN offer",
          "required": true
        }
      }
    },
    "cdnanycast.Backend": {
      "id": "Backend",
      "namespace": "cdnanycast",
      "description": "Backend for a domain",
      "properties": {
        "ip": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cdnanycast.CacheRule": {
      "id": "CacheRule",
      "namespace": "cdnanycast",
      "description": "CacheRules for a domain",
      "properties": {
        "cacheRuleId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Id for this cache rule",
          "required": true
        },
        "cacheType": {
          "type": "cdnanycast.CacheRuleCacheTypeEnum",
          "fullType": "cdnanycast.CacheRuleCacheTypeEnum",
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
        "fileMatch": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "fileType": {
          "type": "cdnanycast.CacheRuleFileTypeEnum",
          "fullType": "cdnanycast.CacheRuleFileTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "cdnanycast.CacheRuleStatusEnum",
          "fullType": "cdnanycast.CacheRuleStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "ttl": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        }
      }
    },
    "cdnanycast.CacheRuleCacheTypeEnum": {
      "id": "CacheRuleCacheTypeEnum",
      "namespace": "cdnanycast",
      "description": "All type a cache can be in",
      "enum": [
        "forceCache",
        "noCache"
      ],
      "enumType": "string"
    },
    "cdnanycast.CacheRuleFileTypeEnum": {
      "id": "CacheRuleFileTypeEnum",
      "namespace": "cdnanycast",
      "description": "All states an anycast pool can be in",
      "enum": [
        "extension",
        "file",
        "folder"
      ],
      "enumType": "string"
    },
    "cdnanycast.CacheRuleStatusEnum": {
      "id": "CacheRuleStatusEnum",
      "namespace": "cdnanycast",
      "description": "All states a status can be in",
      "enum": [
        "creating",
        "deleting",
        "error",
        "off",
        "on",
        "updating"
      ],
      "enumType": "string"
    },
    "cdnanycast.Domain": {
      "id": "Domain",
      "namespace": "cdnanycast",
      "description": "Domain on CDN",
      "properties": {
        "cacheRuleUse": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "cname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain of this object",
          "required": true
        },
        "status": {
          "type": "cdnanycast.DomainStatusEnum",
          "fullType": "cdnanycast.DomainStatusEnum",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "type": {
          "type": "cdnanycast.DomainTypeEnum",
          "fullType": "cdnanycast.DomainTypeEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cdnanycast.DomainStatusEnum": {
      "id": "DomainStatusEnum",
      "namespace": "cdnanycast",
      "description": "All states a status can be in",
      "enum": [
        "error",
        "off",
        "on",
        "removing"
      ],
      "enumType": "string"
    },
    "cdnanycast.DomainTypeEnum": {
      "id": "DomainTypeEnum",
      "namespace": "cdnanycast",
      "description": "All type of Domain",
      "enum": [
        "plain",
        "ssl"
      ],
      "enumType": "string"
    },
    "cdnanycast.LogsURL": {
      "id": "LogsURL",
      "namespace": "cdnanycast",
      "description": "URL to real time logs",
      "properties": {
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "description": "URL expiration date",
          "required": true
        },
        "url": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "URL to logs",
          "required": true
        }
      }
    },
    "cdnanycast.Pop": {
      "id": "Pop",
      "namespace": "cdnanycast",
      "description": "CDN Pop",
      "properties": {
        "city": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Name of the pop",
          "required": true
        },
        "status": {
          "type": "cdnanycast.PopStatusEnum",
          "fullType": "cdnanycast.PopStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cdnanycast.PopStatusEnum": {
      "id": "PopStatusEnum",
      "namespace": "cdnanycast",
      "description": "All Pop status",
      "enum": [
        "down",
        "ok",
        "rerouted",
        "unknown"
      ],
      "enumType": "string"
    },
    "cdnanycast.Ssl": {
      "id": "Ssl",
      "namespace": "cdnanycast",
      "description": "CDN Ssl",
      "properties": {
        "certificateProvider": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Provider of the certificate installed on CDN",
          "required": true
        },
        "certificateValidFrom": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "certificateValidTo": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "cn": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "cdnanycast.SslStateEnum",
          "fullType": "cdnanycast.SslStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cdnanycast.SslStateEnum": {
      "id": "SslStateEnum",
      "namespace": "cdnanycast",
      "description": "All states a CDN SSL can be in",
      "enum": [
        "checking",
        "creating",
        "error",
        "off",
        "on",
        "removing",
        "updating",
        "uploading"
      ],
      "enumType": "string"
    },
    "cdnanycast.StatsDataType": {
      "id": "StatsDataType",
      "namespace": "cdnanycast",
      "description": "A structure describing type of a stats hash",
      "properties": {
        "date": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": false,
          "required": true
        },
        "value": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "required": false
        }
      }
    },
    "cdnanycast.StatsPeriodEnum": {
      "id": "StatsPeriodEnum",
      "namespace": "cdnanycast",
      "description": "Period of the statistics",
      "enum": [
        "day",
        "month",
        "week"
      ],
      "enumType": "string"
    },
    "cdnanycast.StatsTypeEnum": {
      "id": "StatsTypeEnum",
      "namespace": "cdnanycast",
      "description": "Type of statistics related to cache",
      "enum": [
        "backend",
        "cdn",
        "threat"
      ],
      "enumType": "string"
    },
    "cdnanycast.StatsValueEnum": {
      "id": "StatsValueEnum",
      "namespace": "cdnanycast",
      "description": "Value bandwidth or request",
      "enum": [
        "bandwidth",
        "request"
      ],
      "enumType": "string"
    },
    "cdnanycast.Task": {
      "id": "Task",
      "namespace": "cdnanycast",
      "description": "Task on a CDN",
      "properties": {
        "comment": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "required": false
        },
        "function": {
          "type": "cdnanycast.TaskFunctionEnum",
          "fullType": "cdnanycast.TaskFunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "status": {
          "type": "cdnanycast.TaskStateEnum",
          "fullType": "cdnanycast.TaskStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        },
        "taskId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "required": true
        }
      }
    },
    "cdnanycast.TaskFunctionEnum": {
      "id": "TaskFunctionEnum",
      "namespace": "cdnanycast",
      "description": "All function CDN task can be",
      "enum": [
        "flush",
        "flushAll",
        "generateSsl",
        "installSsl",
        "reinstallSsl",
        "removeDomain",
        "uninstallSsl",
        "updateCacheRule"
      ],
      "enumType": "string"
    },
    "cdnanycast.TaskStateEnum": {
      "id": "TaskStateEnum",
      "namespace": "cdnanycast",
      "description": "All states a CDN task can be in",
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