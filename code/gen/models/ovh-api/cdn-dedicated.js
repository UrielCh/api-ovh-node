"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = {
    "apiVersion": "1.0",
    "apis": [
        {
            "description": "Operations about the CDNANYCAST service",
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
                    "responseType": "string[]"
                }
            ],
            "path": "/cdn/dedicated"
        },
        {
            "description": "List the cdnanycast.Pop objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "List of CDN Pops",
                    "httpMethod": "GET",
                    "noAuthentication": true,
                    "parameters": [],
                    "responseType": "string[]"
                }
            ],
            "path": "/cdn/dedicated/pops"
        },
        {
            "description": "CDN Pop",
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
                            "dataType": "string",
                            "description": "Name of the pop",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Pop"
                }
            ],
            "path": "/cdn/dedicated/pops/{name}"
        },
        {
            "description": "Anycast IP of a CDN customer",
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
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Anycast"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}"
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
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/changeContact"
        },
        {
            "description": "List the cdnanycast.Domain objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Domains associated to this anycast",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
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
                    "description": "Add a domain on CDN",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "domain name to add on CDN",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Domain"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains"
        },
        {
            "description": "Domain on CDN",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove a domain from the CDN",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Task"
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
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Domain"
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
                            "dataType": "cdnanycast.Domain",
                            "description": "New object properties",
                            "fullType": "cdnanycast.Domain",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}"
        },
        {
            "description": "List the cdnanycast.Backend objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Backend associated to the domain",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "ipv4[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Add a backend IP",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "IP to add to backends list",
                            "fullType": "string",
                            "name": "ip",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Backend"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/backends"
        },
        {
            "description": "Backend for a domain",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove a backend IP",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "ipv4",
                            "description": "",
                            "fullType": "ipv4",
                            "name": "ip",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "ipv4"
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
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "ipv4",
                            "description": "",
                            "fullType": "ipv4",
                            "name": "ip",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Backend"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}"
        },
        {
            "description": "List the cdnanycast.CacheRule objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Cache rules associated to the domain",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Filter the value of fileMatch property (like)",
                            "fullType": "string",
                            "name": "fileMatch",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "long[]"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Add a cache rule to a domain",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "cdnanycast.CacheRuleCacheTypeEnum",
                            "description": "Type of cache rule to add to the domain",
                            "fullType": "cdnanycast.CacheRuleCacheTypeEnum",
                            "name": "cacheType",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "File match for cache rule to add to the domain",
                            "fullType": "string",
                            "name": "fileMatch",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "cdnanycast.CacheRuleFileTypeEnum",
                            "description": "File type for cache rule to add to the domain",
                            "fullType": "cdnanycast.CacheRuleFileTypeEnum",
                            "name": "fileType",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "ttl for cache rule to add to the domain",
                            "fullType": "long",
                            "name": "ttl",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.CacheRule"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules"
        },
        {
            "description": "CacheRules for a domain",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove cache rule",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Id for this cache rule",
                            "fullType": "long",
                            "name": "cacheRuleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Task"
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
                            "description": "Id for this cache rule",
                            "fullType": "long",
                            "name": "cacheRuleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.CacheRule"
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
                            "dataType": "cdnanycast.CacheRule",
                            "description": "New object properties",
                            "fullType": "cdnanycast.CacheRule",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "Id for this cache rule",
                            "fullType": "long",
                            "name": "cacheRuleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}"
        },
        {
            "description": "flush operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Flush the cache",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Id for this cache rule",
                            "fullType": "long",
                            "name": "cacheRuleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Task"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush"
        },
        {
            "description": "List the cdnanycast.Task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Task associated to the cache rule",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "long",
                            "description": "Id for this cache rule",
                            "fullType": "long",
                            "name": "cacheRuleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks"
        },
        {
            "description": "Task on a CDN",
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
                            "description": "Id for this cache rule",
                            "fullType": "long",
                            "name": "cacheRuleId",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "",
                            "fullType": "long",
                            "name": "taskId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Task"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}"
        },
        {
            "description": "flush operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Flush all cache",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Task"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/flush"
        },
        {
            "description": "logs operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Generate URL to real time logs",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.LogsURL"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/logs"
        },
        {
            "description": "statistics operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Return stats about a domain",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "cdnanycast.StatsPeriodEnum",
                            "description": "",
                            "fullType": "cdnanycast.StatsPeriodEnum",
                            "name": "period",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "cdnanycast.StatsTypeEnum",
                            "description": "",
                            "fullType": "cdnanycast.StatsTypeEnum",
                            "name": "type",
                            "paramType": "query",
                            "required": true
                        },
                        {
                            "dataType": "cdnanycast.StatsValueEnum",
                            "description": "",
                            "fullType": "cdnanycast.StatsValueEnum",
                            "name": "value",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.StatsDataType[]"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/statistics"
        },
        {
            "description": "List the cdnanycast.Task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Task associated to the domain",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/tasks"
        },
        {
            "description": "Task on a CDN",
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
                            "description": "Domain of this object",
                            "fullType": "string",
                            "name": "domain",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "",
                            "fullType": "long",
                            "name": "taskId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Task"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}"
        },
        {
            "description": "logs operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Beta version",
                        "value": "BETA"
                    },
                    "description": "Generate URL to real time logs",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.LogsURL"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/logs"
        },
        {
            "description": "quota operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Return quota history",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "cdnanycast.StatsPeriodEnum",
                            "description": "",
                            "fullType": "cdnanycast.StatsPeriodEnum",
                            "name": "period",
                            "paramType": "query",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.StatsDataType[]"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/quota"
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
                            "description": "The internal name of your CDN offer",
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
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "void"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/serviceInfos"
        },
        {
            "description": "CDN Ssl",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Remove SSL of the CDN",
                    "httpMethod": "DELETE",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Task"
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
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Ssl"
                },
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Add a SSL on CDN or Generate a Lets Encrypt certificate",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "text",
                            "description": "certificate (empty for lets encrypt generation)",
                            "fullType": "text",
                            "name": "certificate",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "text",
                            "description": "certificate chain (empty for lets encrypt generation)",
                            "fullType": "text",
                            "name": "chain",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "text",
                            "description": "certificate key (empty for lets encrypt generation)",
                            "fullType": "text",
                            "name": "key",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "string",
                            "description": "ssl name to add on CDN",
                            "fullType": "string",
                            "name": "name",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Ssl"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/ssl"
        },
        {
            "description": "List the cdnanycast.Task objects",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Task associated to the ssl",
                    "httpMethod": "GET",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "cdnanycast.TaskFunctionEnum",
                            "description": "Filter the value of function property (=)",
                            "fullType": "cdnanycast.TaskFunctionEnum",
                            "name": "function",
                            "paramType": "query",
                            "required": false
                        },
                        {
                            "dataType": "cdnanycast.TaskStateEnum",
                            "description": "Filter the value of status property (=)",
                            "fullType": "cdnanycast.TaskStateEnum",
                            "name": "status",
                            "paramType": "query",
                            "required": false
                        }
                    ],
                    "responseType": "long[]"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/ssl/tasks"
        },
        {
            "description": "Task on a CDN",
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
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        },
                        {
                            "dataType": "long",
                            "description": "",
                            "fullType": "long",
                            "name": "taskId",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Task"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}"
        },
        {
            "description": "update operations",
            "operations": [
                {
                    "apiStatus": {
                        "description": "Stable production version",
                        "value": "PRODUCTION"
                    },
                    "description": "Update an existing SSL with a custom certificate",
                    "httpMethod": "POST",
                    "noAuthentication": false,
                    "parameters": [
                        {
                            "dataType": "text",
                            "description": "certificate",
                            "fullType": "text",
                            "name": "certificate",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "text",
                            "description": "certificate chain",
                            "fullType": "text",
                            "name": "chain",
                            "paramType": "body",
                            "required": false
                        },
                        {
                            "dataType": "text",
                            "description": "certificate key",
                            "fullType": "text",
                            "name": "key",
                            "paramType": "body",
                            "required": true
                        },
                        {
                            "dataType": "string",
                            "description": "The internal name of your CDN offer",
                            "fullType": "string",
                            "name": "serviceName",
                            "paramType": "path",
                            "required": true
                        }
                    ],
                    "responseType": "cdnanycast.Task"
                }
            ],
            "path": "/cdn/dedicated/{serviceName}/ssl/update"
        }
    ],
    "basePath": "https://eu.api.ovh.com/1.0",
    "models": {
        "cdnanycast.Anycast": {
            "description": "Anycast IP of a CDN customer",
            "id": "Anycast",
            "namespace": "cdnanycast",
            "properties": {
                "anycast": {
                    "canBeNull": false,
                    "fullType": "ipv4",
                    "readOnly": true,
                    "required": false,
                    "type": "ipv4"
                },
                "backendLimit": {
                    "canBeNull": false,
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "backendUse": {
                    "canBeNull": false,
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "cacheRuleLimitPerDomain": {
                    "canBeNull": false,
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "lastQuotaOrder": {
                    "canBeNull": true,
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "logUrl": {
                    "canBeNull": false,
                    "description": "URL for downloading daily log of your CDN",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "offer": {
                    "canBeNull": true,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "quota": {
                    "canBeNull": false,
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "service": {
                    "canBeNull": false,
                    "description": "The internal name of your CDN offer",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cdnanycast.Backend": {
            "description": "Backend for a domain",
            "id": "Backend",
            "namespace": "cdnanycast",
            "properties": {
                "ip": {
                    "canBeNull": false,
                    "fullType": "ipv4",
                    "readOnly": true,
                    "required": false,
                    "type": "ipv4"
                }
            }
        },
        "cdnanycast.CacheRule": {
            "description": "CacheRules for a domain",
            "id": "CacheRule",
            "namespace": "cdnanycast",
            "properties": {
                "cacheRuleId": {
                    "canBeNull": false,
                    "description": "Id for this cache rule",
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "cacheType": {
                    "canBeNull": false,
                    "fullType": "cdnanycast.CacheRuleCacheTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdnanycast.CacheRuleCacheTypeEnum"
                },
                "domain": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "fileMatch": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "fileType": {
                    "canBeNull": false,
                    "fullType": "cdnanycast.CacheRuleFileTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdnanycast.CacheRuleFileTypeEnum"
                },
                "status": {
                    "canBeNull": false,
                    "fullType": "cdnanycast.CacheRuleStatusEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "cdnanycast.CacheRuleStatusEnum"
                },
                "ttl": {
                    "canBeNull": false,
                    "fullType": "long",
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cdnanycast.CacheRuleCacheTypeEnum": {
            "description": "All type a cache can be in",
            "enum": [
                "forceCache",
                "noCache"
            ],
            "enumType": "string",
            "id": "CacheRuleCacheTypeEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.CacheRuleFileTypeEnum": {
            "description": "All states an anycast pool can be in",
            "enum": [
                "extension",
                "file",
                "folder"
            ],
            "enumType": "string",
            "id": "CacheRuleFileTypeEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.CacheRuleStatusEnum": {
            "description": "All states a status can be in",
            "enum": [
                "creating",
                "deleting",
                "error",
                "off",
                "on",
                "updating"
            ],
            "enumType": "string",
            "id": "CacheRuleStatusEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.Domain": {
            "description": "Domain on CDN",
            "id": "Domain",
            "namespace": "cdnanycast",
            "properties": {
                "cacheRuleUse": {
                    "canBeNull": false,
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                },
                "cname": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "domain": {
                    "canBeNull": false,
                    "description": "Domain of this object",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "fullType": "cdnanycast.DomainStatusEnum",
                    "readOnly": false,
                    "required": false,
                    "type": "cdnanycast.DomainStatusEnum"
                },
                "type": {
                    "canBeNull": false,
                    "fullType": "cdnanycast.DomainTypeEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdnanycast.DomainTypeEnum"
                }
            }
        },
        "cdnanycast.DomainStatusEnum": {
            "description": "All states a status can be in",
            "enum": [
                "error",
                "off",
                "on",
                "removing"
            ],
            "enumType": "string",
            "id": "DomainStatusEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.DomainTypeEnum": {
            "description": "All type of Domain",
            "enum": [
                "plain",
                "ssl"
            ],
            "enumType": "string",
            "id": "DomainTypeEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.LogsURL": {
            "description": "URL to real time logs",
            "id": "LogsURL",
            "namespace": "cdnanycast",
            "properties": {
                "expirationDate": {
                    "canBeNull": false,
                    "description": "URL expiration date",
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "url": {
                    "canBeNull": false,
                    "description": "URL to logs",
                    "readOnly": false,
                    "required": false,
                    "type": "string"
                }
            }
        },
        "cdnanycast.Pop": {
            "description": "CDN Pop",
            "id": "Pop",
            "namespace": "cdnanycast",
            "properties": {
                "city": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "comment": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "description": "Name of the pop",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "fullType": "cdnanycast.PopStatusEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdnanycast.PopStatusEnum"
                }
            }
        },
        "cdnanycast.PopStatusEnum": {
            "description": "All Pop status",
            "enum": [
                "down",
                "ok",
                "rerouted",
                "unknown"
            ],
            "enumType": "string",
            "id": "PopStatusEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.Ssl": {
            "description": "CDN Ssl",
            "id": "Ssl",
            "namespace": "cdnanycast",
            "properties": {
                "certificateProvider": {
                    "canBeNull": false,
                    "description": "Provider of the certificate installed on CDN",
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "certificateValidFrom": {
                    "canBeNull": true,
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "certificateValidTo": {
                    "canBeNull": true,
                    "fullType": "datetime",
                    "readOnly": true,
                    "required": false,
                    "type": "datetime"
                },
                "cn": {
                    "canBeNull": true,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "name": {
                    "canBeNull": false,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "status": {
                    "canBeNull": false,
                    "fullType": "cdnanycast.SslStateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdnanycast.SslStateEnum"
                }
            }
        },
        "cdnanycast.SslStateEnum": {
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
            "enumType": "string",
            "id": "SslStateEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.StatsDataType": {
            "description": "A structure describing type of a stats hash",
            "id": "StatsDataType",
            "namespace": "cdnanycast",
            "properties": {
                "date": {
                    "canBeNull": false,
                    "readOnly": false,
                    "required": false,
                    "type": "datetime"
                },
                "value": {
                    "canBeNull": true,
                    "readOnly": false,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cdnanycast.StatsPeriodEnum": {
            "description": "Period of the statistics",
            "enum": [
                "day",
                "month",
                "week"
            ],
            "enumType": "string",
            "id": "StatsPeriodEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.StatsTypeEnum": {
            "description": "Type of statistics related to cache",
            "enum": [
                "backend",
                "cdn",
                "threat"
            ],
            "enumType": "string",
            "id": "StatsTypeEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.StatsValueEnum": {
            "description": "Value bandwidth or request",
            "enum": [
                "bandwidth",
                "request"
            ],
            "enumType": "string",
            "id": "StatsValueEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.Task": {
            "description": "Task on a CDN",
            "id": "Task",
            "namespace": "cdnanycast",
            "properties": {
                "comment": {
                    "canBeNull": true,
                    "fullType": "string",
                    "readOnly": true,
                    "required": false,
                    "type": "string"
                },
                "function": {
                    "canBeNull": false,
                    "fullType": "cdnanycast.TaskFunctionEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdnanycast.TaskFunctionEnum"
                },
                "status": {
                    "canBeNull": false,
                    "fullType": "cdnanycast.TaskStateEnum",
                    "readOnly": true,
                    "required": false,
                    "type": "cdnanycast.TaskStateEnum"
                },
                "taskId": {
                    "canBeNull": false,
                    "fullType": "long",
                    "readOnly": true,
                    "required": false,
                    "type": "long"
                }
            }
        },
        "cdnanycast.TaskFunctionEnum": {
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
            "enumType": "string",
            "id": "TaskFunctionEnum",
            "namespace": "cdnanycast"
        },
        "cdnanycast.TaskStateEnum": {
            "description": "All states a CDN task can be in",
            "enum": [
                "cancelled",
                "doing",
                "done",
                "error",
                "todo"
            ],
            "enumType": "string",
            "id": "TaskStateEnum",
            "namespace": "cdnanycast"
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
    "resourcePath": "/cdn/dedicated"
};
//# sourceMappingURL=cdn-dedicated.js.map